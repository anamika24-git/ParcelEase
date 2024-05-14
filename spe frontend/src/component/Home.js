import React, { useEffect, useState } from 'react';
import './Home.css';
import Modal from 'react-modal';
import AddParcel from './AddParcel';
import ParcelTable from './ParcelTable';
import OTPVerificationModal from './OTPVerificationModal';
import axios from 'axios';

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
  //Api refresh
  const [apiStatus, setApiStatus] = useState(false);
  const updateStudentTable = () => {
    setApiStatus(!apiStatus);
  }
  //Modal open
  const [isParcelModalOpen, setParcelModalOpen] = useState(false);
  const [parcelData, setParcelData] = useState([]);
  const [selectedParcelId, setSelectedParcelId] = useState('');
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
  // const [parcelData, setParcelData] = useState([
  //   { id: 1, name: 'JohnDoe', email: 'john@example.com', gaurdName: 'Atul Tripathi', origin: 'Amazon', date: 'Wed, 04 May', shelfNumber: 'A01' },
  //   { id: 2, name: 'Jane Smith', email: 'jane@example.com', gaurdName: 'Atul Tripathi', origin: 'Flipkart', date: 'Mon, 09 May', shelfNumber: 'A02' },
  //   { id: 3, name: 'Bob Johnson', email: 'bob@example.com', gaurdName: 'Atul Tripathi', origin: 'Nayka Fashion', date: 'Sun, 14 May', shelfNumber: 'A03' },
  //   { id: 4, name: 'Paul Gupta', email: 'paulgupta@example.com', gaurdName: 'Atul Tripathi', origin: 'Flipkart', date: 'Mon, 19 May', shelfNumber: 'A02' },
  //   { id: 5, name: 'Anamika Sahu', email: 'nikkisahu@example.com', gaurdName: 'Atul Tripathi', origin: 'Shopper Shop', date: 'Sun, 24 May', shelfNumber: 'A03' },
  // ]);

  useEffect(() => {
    axios.get(`http://localhost:9090/parcelease/parcels`)
      .then(response => {
        console.log("parcelresponse", response);
        setParcelData(response.data);
      })
      .catch(error => {
        console.error('Error fetching parcel details:', error);
      });
  }, [apiStatus]);

  // validate code
  const handleValidate = (parcelId) => {
    console.log("@111 parcelId", parcelId);
    setSelectedParcelId(parcelId);

    otpModalOpen()
  };
  //Search filter code
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredParcelData = parcelData.filter((parcel) => {
    const f_data = parcel.studentName.toLowerCase().includes(searchQuery.toLowerCase())
    console.log("f_data", f_data);
    console.log("parcelname", parcel.studentName.toLowerCase());
    console.log("searchq", searchQuery.toLowerCase());
    return f_data
  }
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
        <ParcelTable 
        handleValidate={handleValidate}
        data={filteredParcelData} 
        />

      </div>
      <Modal
        isOpen={isParcelModalOpen}
        onRequestClose={parcelModalClose}
        style={customStyles}
        contentLabel="Example Modal">
        <AddParcel parcelModalClose={parcelModalClose}
          updateStudentTable={updateStudentTable} />
      </Modal>
      <OTPVerificationModal
        isOpen={isOtpModalOpen}
        onRequestClose={otpModalClose}
        parcelId={selectedParcelId}
        updateStudentTable={updateStudentTable}
      />
    </div>
  );
}
export default Home;