import React from 'react';

const ParcelTable = ({handleValidate, data}) => {

  return (
    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
      <thead>
        <tr style={{ backgroundColor: '#f2f2f2' }}>
          <th style={{ padding: '10px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>Parcel Id</th>
          <th style={{ padding: '10px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>Name</th>
          <th style={{ padding: '10px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>Email</th>
          <th style={{ padding: '10px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>Received By</th>
          <th style={{ padding: '10px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>Company</th>
          <th style={{ padding: '10px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>Date</th>
          <th style={{ padding: '10px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>Shelf Number</th>
          <th style={{ padding: '10px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={row.id} style={{ borderBottom: '1px solid #ddd' }}>
            <td style={{ padding: '10px' }}>{row.id}</td>
            <td style={{ padding: '10px' }}>{row.name}</td>
            <td style={{ padding: '10px' }}>{row.email}</td>
            <td style={{ padding: '10px' }}>{row.gaurdName}</td>
            <td style={{ padding: '10px' }}>{row.origin}</td>
            <td style={{ padding: '10px' }}>{row.date}</td>
            <td style={{ padding: '10px' }}>{row.shelfNumber}</td>
            <td style={{ padding: '10px' }}>
              <button
                onClick={() => handleValidate(row.id)}
                disabled={row.validated}
                style={{
                  backgroundColor: row.validated ? '#ccc' : '#4CAF50',
                  border: 'none',
                  color: '#fff',
                  padding: '8px 16px',
                  textAlign: 'center',
                  textDecoration: 'none',
                  display: 'inline-block',
                  fontSize: '14px',
                  borderRadius: '4px',
                  cursor: 'pointer',
                }}
              >
                Validate
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ParcelTable;
