// AddParcel.js
import React, { useState } from 'react';
import axios from 'axios';
import './AddParcel.css';
import { getCurrentDate } from '../utils'

const AddParcel = ({ parcelModalClose }) => {
  const [parcelData, setParcelData] = useState({
    phoneNumber: "",
    gaurdName: "",
    companyName: "",
    shelfNumber: "",
  });

  const { phoneNumber, gaurdName, companyName, shelfNumber } = parcelData;

  const changeHandler = e => {
    const { name, value } = e.target;
    setParcelData({ ...parcelData, [name]: value });
  }

  const [studentData, setStudentData] = useState({});
  const [studentFullName, setStudentFullName] = useState('');

  const handleStudentData = (phoneNo) => {
    axios.get(`http://localhost:9090/parcelease/students/${phoneNo}`)
      .then(response => {
        console.log("response" , response);
        setStudentData(response.data);
        const { firstName, middleName, lastName } = response.data;
        setStudentFullName(`${firstName}${middleName ? ' ' + middleName : ''} ${lastName}`);
      })
      .catch(error => {
        console.error('Error fetching student data by phone number:', error);
      });
  }

  const handleSaveDetails = () => {
    const { rollNo, email } = studentData;
    const uuid = Math.floor(1000 + Math.random() * 9000).toString();
    const data = {};
    data.pid = `PN-${uuid}`;
    data.origin = companyName;
    data.date = getCurrentDate();
    data.shelfNumber = shelfNumber;
    data.isCollected = 1;
    data.receivedBy = gaurdName;
    console.log('rollNo', rollNo);
    console.log('data', data);
    const headers =  {
      'content-type':'application/json'
  }
    axios.post(`http://localhost:9090/parcelease/parcels/${rollNo}`,data)
    .then(response => {
      console.log('POST request successful', response);
      if(response.status === 200) {
        console.log('POST AWS OTP Generate');
        const body = {};
        body.name = studentFullName;
        // body.pid =  `PN-${uuid}`;
        body.email = 'neeraj.gsti@gmail.com';
        //https://sdkx8xrifd.execute-api.us-east-1.amazonaws.com/dev/generateOtp
        axios.post('https://sdkx8xrifd.execute-api.us-east-1.amazonaws.com/dev/generateOtp', body, { headers })
        .then(response => {
          console.log('POST AWS Generate OTP', response);
        })
      }
    })
    .catch(error => {
      console.error('Error making POST request:', error);
      // Handle error
    });
    // parcelModalClose();
  };

  return (
    <div className="add-parcel-container">
      <div>
        <div className="input-row">
          <div className="input-phone-group">
            <input
              type="text"
              style = {{borderRadius: '10px'}}
              name="phoneNumber"
              placeholder="Enter student phone number"
              value={phoneNumber}
              onChange={changeHandler} />
          </div>
          <button className='searchDetailsBtn' onClick={() => handleStudentData(phoneNumber)}>Search</button>
        </div>
        <div className="input-group">
          <label>Student Name</label>
          <input
            type="text"
            placeholder={studentFullName}
            value={studentFullName}
            name='studentFullName'
            readOnly
          />
        </div>
        <div className="input-group">
          <label>Guard Name</label>
          <input
            type="text"
            name="gaurdName"
            placeholder="Enter guard name"
            value={gaurdName}
            onChange={changeHandler} />
        </div>
        <div className="input-group">
          <label>Company Name</label>
          <input
            type="text"
            name="companyName"
            placeholder="Enter company name"
            value={companyName}
            onChange={changeHandler}
          />
        </div>
        <div className="input-group">
          <label>Shelf Number</label>
          <input
            type="text"
            name="shelfNumber"
            placeholder="Enter shelf number"
            value={shelfNumber}
            onChange={changeHandler}
          />
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button className='saveDetailsBtn' onClick={handleSaveDetails}>Save Details</button>
      </div>
    </div>
  );

}

export default AddParcel;
