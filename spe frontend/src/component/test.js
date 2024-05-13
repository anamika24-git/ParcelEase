// import React, { useState } from 'react';
// import './AddParcel.css';
// import axios from 'axios';

// const AddParcel = () => {
//   const [parcelData, setParcelData] = useState({
//     phoneNumber: "",
//     gaurdName: "",
//     companyName: "",
//     shelfNumber: "",
//     studentName: "",
//   });

//   const { phoneNumber, gaurdName, companyName, shelfNumber, studentName } = parcelData;

//   const changeHandler = e => {
//     const { name, value } = e.target;
//     setParcelData({ ...parcelData, [name]: value });
//   }

//   const [studentData, setStudentData] = useState({});

//   const handleStudentData = (phoneNo) => {
//     axios.get(`http://localhost:9090/parcelease/students/${phoneNo}`)
//       .then(response => {
//         setStudentData(response.data);
//         console.log("studentData", studentData);
//         const { firstName, middleName, lastName } = studentData;
//         const studentFullName = `${firstName}${middleName ? ' ' + middleName : ''} ${lastName}`;
//         setParcelData({ ...parcelData, studentName: studentFullName });
//       })
//       .catch(error => {
//         console.error('Error fetching student data by phone number:', error);
//       });
//   }

//   return (
//     <div>
//       <div style={{ display: 'flex', flexDirection: 'row', gap: '5px' }}>
//         <div>
//           <div>
//             Phone Number
//             <input
//               style={{ width: '200px', marginLeft: '10px' }}
//               type="text"
//               name="phoneNumber"
//               placeholder="Enter student phone number"
//               value={phoneNumber}
//               onChange={changeHandler} />
//           </div>
//         </div>
//         <button style={{ width: '100px', marginLeft: '10px' }} onClick={() => handleStudentData(phoneNumber)}>Search</button>
//       </div>
//       <div>
//         Student Name
//         <input
//           style={{ width: '200px', marginLeft: '10px' }}
//           type="text"
//           placeholder="Enter student name"
//           value={studentName}
//           name='sutdentName'
//           readOnly
//         />
//       </div>
//       <div>
//         Gaurd Name
//         <input style={{ width: '200px', marginLeft: '10px' }}
//           type="text"
//           name="gaurdName"
//           placeholder="Enter gaurd name"
//           value={gaurdName}
//           onChange={changeHandler} />
//       </div>
//       <div>
//         Company Name
//         <input
//           style={{ width: '200px', marginLeft: '10px' }}
//           type="text"
//           name="companyName"
//           placeholder="Enter company name"
//           value={companyName}
//           onChange={changeHandler}
//         />
//       </div>
//       <div>
//         Shelf Number
//         <input
//           style={{ width: '200px', marginLeft: '10px' }}
//           type="text"
//           name="shelfNumber"
//           placeholder="Enter shelf number"
//           value={shelfNumber}
//           onChange={changeHandler}
//         />
//       </div>
//       <div>
//         <button>Save Details</button>
//       </div>
//     </div>
//   );

// }
// export default AddParcel;