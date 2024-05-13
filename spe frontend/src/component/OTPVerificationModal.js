import React, { useState } from 'react';
import './OTPVerificationModal.css';
import Modal from 'react-modal';
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

const OTPVerificationModal = ({ isOpen, onRequestClose }) => {
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
    // just for testing add setTimeout
    setTimeout(function () {
      setLoading(false);
      if (!(otp === 1234)) {
        setVerificationStatus('valid')
        //onRequestClose();
      }
    }, 5000);

    // try {
    //   const response = await axios.post('your_verification_api_url', { otp });
    //   if (response.status === 200) {
    //     setVerificationStatus('valid');
    //   } else {
    //     setVerificationStatus('invalid');
    //     setError('Invalid OTP. Please try again.');
    //   }
    // } catch (error) {
    //   console.error('Error occurred:', error);
    //   setError('An error occurred while verifying OTP. Please try again later.');
    // } finally {
    //   setLoading(false);
    // }
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