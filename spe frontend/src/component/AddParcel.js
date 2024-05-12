import React, { useState } from 'react';

const AddParcel = () => {

    const[phoneNumber , setPhoneNumber] = useState('');
    return(
    <div>
        <div style={{ display: 'flex', flexDirection: 'row' , gap:'5px' }}>
        <input style = {{flex : 0.6}} type="text" placeholder="Enter student phone number" value={phoneNumber}
        name='phoneNumber' onChange={(e) => {setPhoneNumber(e.target.value)}}/>
        <button style={{flex:0.4}}>Search</button>
        </div>
        <h3>Name : Anamika Mishra </h3>

    </div>
    );

}
export default AddParcel;