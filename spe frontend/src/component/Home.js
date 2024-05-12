import React, { useState } from 'react';
import './Home.css';
import Modal from 'react-modal';
import AddParcel from './AddParcel';
import ParcelTable from './ParcelTable';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    height: '320px',
    width: '50%',
  },
};

const Home = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const modalOpen = () => {
    setModalOpen(true);
  }
  const modalClose = () => {
    setModalOpen(false);
  }
  return (
    <div style={{ margin: '20px' }}>
      <h2>Welcome to IIIT Bangalore Parcel Ease</h2>
      <button onClick={modalOpen} className='addParcelButton'>Parcel Entry</button>
      <hr />
      <div>
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '10px'}}>
        <button>Search Record</button>
        </div>
        <ParcelTable />
      </div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={modalClose}
        style={customStyles}
        contentLabel="Example Modal">
        <AddParcel />
      </Modal>
    </div>
  );
}
export default Home;