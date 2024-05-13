import React, { useState } from 'react';
import './Home.css';
import Modal from 'react-modal';
import AddParcel from './AddParcel';
import ParcelTable from './ParcelTable';
import OTPVerificationModal from './OTPVerificationModal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    height: '320px',
    display: 'flex'
  },
};

const Home = () => {
  const [isParcelModalOpen, setParcelModalOpen] = useState(false);
  const parcelModalOpen = () => {
    setParcelModalOpen(true);
  }
  const parcelModalClose = () => {
    setParcelModalOpen(false);
  }
  const [isOtpModalOpen, setOtpModalOpen] = useState(false);
  const otpModalOpen = () => {
    setOtpModalOpen(true);
  }
  const otpModalClose = () => {
    setOtpModalOpen(false);
  }
  // parcel data
  const [parcelData, setParcelData] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', gaurdName: 'Atul Tripathi', origin: 'Amazon', date: 'Wed, 04 May', shelfNumber: 'A01' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', gaurdName: 'Atul Tripathi', origin: 'Flipkart', date: 'Mon, 09 May', shelfNumber: 'A02' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', gaurdName: 'Atul Tripathi', origin: 'Nayka Fashion', date: 'Sun, 14 May', shelfNumber: 'A03' },
    { id: 4, name: 'Paul Gupta', email: 'paulgupta@example.com', gaurdName: 'Atul Tripathi', origin: 'Flipkart', date: 'Mon, 19 May', shelfNumber: 'A02' },
    { id: 5, name: 'Anamika Sahu', email: 'nikkisahu@example.com', gaurdName: 'Atul Tripathi', origin: 'Shopper Shop', date: 'Sun, 24 May', shelfNumber: 'A03' },
  ]);

  // validate code
  const handleValidate = (parcelId) => {
    console.log("@111 parcelId", parcelId);
    otpModalOpen()
  };
  //Search filter code
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredParcelData = parcelData.filter((parcel) =>
    parcel.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleClear = () => {
    setSearchQuery('');
  };


  return (
    <div style={{ margin: '20px' }}>
      <h2>Welcome to IIIT Bangalore Parcel Ease</h2>
      <button onClick={parcelModalOpen} className='addParcelButton'>Parcel Entry</button>
      <hr />
      <div>
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '10px' }}>
          <input
            type="text"
            placeholder="Search by name"
            value={searchQuery}
            onChange={handleSearch}
            className='searchInput'
          />
          <button className='clearButton' onClick={handleClear}>Clear</button>
        </div>
        <ParcelTable handleValidate={handleValidate} data={filteredParcelData} />

      </div>
      <Modal
        isOpen={isParcelModalOpen}
        onRequestClose={parcelModalClose}
        style={customStyles}
        contentLabel="Example Modal">
        <AddParcel parcelModalClose={parcelModalClose}/>
      </Modal>
      <OTPVerificationModal isOpen={isOtpModalOpen} onRequestClose={otpModalClose} />
    </div>
  );
}
export default Home;