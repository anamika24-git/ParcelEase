'use strict';

const { DynamoDBClient, PutItemCommand, GetItemCommand } = require("@aws-sdk/client-dynamodb");
// const { v4: uuidv4 } = require('uuid');

const dynamoDbClient = new DynamoDBClient({ region: "us-east-1" });
const AWS = require('aws-sdk');
const sns = new AWS.SNS();

module.exports.createOtp = async (event) => {
  console.log("inside createOtp lambda with event",  );

  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  // const parcelId = uuidv4(); //need to be passed as body
  const body = JSON.parse(event.body);
  const parcelId = body.pid;
  const company = body.company ? body.company : ''
  const email = body.email ? body.email : "anamikam632@gmail.com";

  //adding user to sns subscription
  // const params = {
  //   Protocol: 'email',
  //   TopicArn: 'arn:aws:sns:us-east-1:975050068766:OtpNotificationTopic',
  //   Endpoint: email,
  // }

  // try {
  //   const subscription = await sns.subscribe(params).promise();
  //   console.log('Email subscription added:', subscription);
  // } catch (error) {
  //   console.error('Error adding email subscription:', error);
  // }

  // Prepare the item to be stored in DynamoDB
  const putItemCommand = new PutItemCommand({
      TableName: "ParcelOtpTable",
      Item: {
          parcelId: { S: parcelId },
          otp: { N: otp },
          name: { S: body.name ? body.name : "user" },
          emailId: { S: email },
          company: { S: company }
      }
  });

  
  try {
    // Store the OTP in DynamoDB
    await dynamoDbClient.send(putItemCommand);

    return {
        statusCode: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'Content-Type'
      },
        body: JSON.stringify({ message: "OTP generated and stored successfully" })
    };
} catch (error) {
    console.error("Error storing OTP in DynamoDB:", error);
    return {
        statusCode: 500,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'Content-Type'
      },
        body: JSON.stringify({ message: "Error storing OTP in DynamoDB" })
    };
}

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};

module.exports.otpNotification = async (event) => {
  console.log("Records with stream", event.Records);
  
  for (const record of event.Records) {
    if(record.eventName == 'INSERT'){
      const newImage = record.dynamodb.NewImage;
      const msg = `Hello ${newImage.name.S},
      Your parcel collection otp is ${newImage.otp.N}.
      Parcel has been received from ${newImage.company.S}`;

      const params = {
        Message: msg,
        TopicArn: 'arn:aws:sns:us-east-1:975050068766:OtpNotificationTopic',
        MessageAttributes: {
          email: {
            DataType: 'String',
            StringValue: newImage.emailId.S
          }
        }
      }

      try{
        await sns.publish(params).promise();
        console.log("OTP sent successfully");
      }catch(error){
        console.log("Failed to send OTP");
        throw error;
      }

    }
  }
  return {
  statusCode: 200,
  body: JSON.stringify(
    {
      message: 'getting streams',
      input: event,
    },
    null,
    2
  ),
};
}


module.exports.validateOtp = async (event) => {
  
  const {parcelId, otp} = JSON.parse(event.body);

  console.log("parcelId", parcelId);

  const getItemCommand = new GetItemCommand({
    TableName: "ParcelOtpTable",
    Key: {
      "parcelId": { S: parcelId },
    },
});


try {
  // Store the OTP in DynamoDB
  const response = await dynamoDbClient.send(getItemCommand);
  console.log("response", response);

  const otpFromDb = response.Item.otp.N;

  if(Number(otpFromDb) === Number(otp) ){
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type'
    },
      body: JSON.stringify({ message: "Valid OTP" })
  };  
  }else{
    return {
      statusCode: 403,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type'
    },
      body: JSON.stringify({ message: "Invalid OTP" })
  };
  }
} catch (error) {
  console.error("Error getting OTP in DynamoDB:", error);
  return {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type'
    },
      body: JSON.stringify({ message: "Could not retive requested item" })
  };
}
}
// return {
//   statusCode: 200,
//   body: JSON.stringify(
//     {
//       message: 'Go Serverless v1.0! Your function executed successfully!',
//       input: event,
//     },
//     null,
//     2
//   ),
// };
