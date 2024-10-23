import React, { useState } from 'react';

function Checkout({ cart }) {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    paymentDetails: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate order submission
    alert(`Order confirmed! 
      Name: ${formData.name}
      Address: ${formData.address}
      Payment Details: ${formData.paymentDetails}
      Total Items: ${cart.length}`);
  };

  return (
    <div className="container mt-5" >
      <h2 className="text-center mb-4">Checkout</h2>
      <div className='col-md-6 offset-md-3 p-4'
      style={{border:'1px solid black',
        boxShadow:'0px 5px 10px rgba(0, 0, 0, 0.2)',
        borderRadius:'5px'
      }}
      >
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name:</label>
          <input
            type="text"
            name="name"
            className="form-control"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Address:</label>
          <input
            type="text"
            name="address"
            className="form-control"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Payment Details:</label>
          <input
            type="text"
            name="paymentDetails"
            className="form-control"
            value={formData.paymentDetails}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">Submit Order</button>
      </form>
    </div>
    </div>
  );
}

export default Checkout;
