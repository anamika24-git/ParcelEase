import React, { useState } from 'react';
import './OTPVerificationModal.css';
import Modal from 'react-modal';
import axios from 'axios';
//import axios from 'axios';

Modal.setAppElement('#root'); // Set the root element for accessibility

const customStyles = {
  content: {
    width: '330px', // Adjust the width as needed
    height: '200px', // Adjust the height as needed
    margin: 'auto',
    display: 'flex',
    flexDirection: 'column',
  },
};

const OTPVerificationModal = ({ isOpen, onRequestClose, parcelId, updateStudentTable }) => {
  const [otp, setOTP] = useState('');
  const [verificationStatus, setVerificationStatus] = useState('');
  const [loading, setLoading] = useState(false);
  //const [error, setError] = useState('');

  const handleOTPChange = (e) => {
    setOTP(e.target.value);
  };

  const handleSubmit = async (e) => {
    console.log("otp", otp)
    e.preventDefault();
    setLoading(true);
    const body = {};
        body.parcelId = parcelId;
        body.otp =  otp;
        const headers =  {
          'content-type':'application/json'
      }
     axios.post(`https://sdkx8xrifd.execute-api.us-east-1.amazonaws.com/dev/validateOtp`, body , {headers})
    .then(response => {
     console.log('POST AWS Call');
      if(response.status === 200) {
        setLoading(false);
        console.log('POST isCollected status to 0');
        axios.post(`http://localhost:9090/parcelease/parcelId/${parcelId}`)
       .then(response => {
      if(response.status === 200){
        setVerificationStatus('valid');
          console.log('POST call', response);
          updateStudentTable();
          onRequestClose();
          setOTP('');
          setVerificationStatus('')
      } else {
        setVerificationStatus('invalid');
      }
        }).catch(error => {
          console.error('Error making Java POST request:', error);
       });
       }
       else {
        setLoading(false);
        setVerificationStatus('invalid');
       }
     })
   .catch(error => {
    setLoading(false);
      console.error('Error making AWS POST request:', error);
   });
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="OTP Verification Modal"
      style={customStyles}
    >
      <h2>OTP Verification</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={otp}
          onChange={handleOTPChange}
          placeholder="Enter OTP"
        />
        <button type="submit" disabled={loading} className='verifyOtpBtn'>
          Verify OTP
        </button>
      </form>
      {loading && <div className="spinner"></div>}
      {verificationStatus === 'invalid' && <p className="error">Wrong OTP, Please try again</p>}
      {verificationStatus === 'valid' && <p className="success">OTP verified successfully!</p>}
    </Modal>
  );
}

export default OTPVerificationModal;