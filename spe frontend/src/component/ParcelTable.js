import React, { useState } from 'react';

const ParcelTable = () => {
  const [data, setData] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', validated: false },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', validated: false },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', validated: false },
  ]);

  const handleValidate = (parcelId) => {
    console.log("parcelId", parcelId);
  };

  return (
    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
      <thead>
        <tr style={{ backgroundColor: '#f2f2f2' }}>
          <th style={{ padding: '10px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>ID</th>
          <th style={{ padding: '10px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>Name</th>
          <th style={{ padding: '10px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>Email</th>
          <th style={{ padding: '10px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>Validated</th>
          <th style={{ padding: '10px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={row.id} style={{ borderBottom: '1px solid #ddd' }}>
            <td style={{ padding: '10px' }}>{row.id}</td>
            <td style={{ padding: '10px' }}>{row.name}</td>
            <td style={{ padding: '10px' }}>{row.email}</td>
            <td style={{ padding: '10px' }}>{row.validated ? 'Yes' : 'No'}</td>
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
