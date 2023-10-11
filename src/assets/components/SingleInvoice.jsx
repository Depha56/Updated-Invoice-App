import React, { useState } from 'react';
// import React from 'react'
import Header from './Header';
import { IoIosArrowBack } from "react-icons/io"
import { GoDotFill } from "react-icons/go"
import "../components/SingleInvoice.css";
import { Link } from 'react-router-dom'
import App from '../../App';

function SingleInvoice() {
  <App />
    ;
  return (
    <div>
      <div className='SingleInvoice'>
        <Header />
      </div>
      <Link to={'/App'} className='goBack'>
        <h3 className='goBack1'><IoIosArrowBack /> Go Back </h3>
      </Link>

      <div className='status'>
        <div className='status1'>
          <p>Status</p>
          <div className='draft'><h5><GoDotFill />Draft</h5></div>
        </div>
        <div className='buttons'>
          <button className='btn' id='btn1'>Edit</button>
          <button className='btn' id='btn2'>Delete</button>
          <button className='btn' id='btn3'>Mark as Read</button>
        </div>

      </div>
      <div className='InvoiceTwo'>
        <div className="one">
          <p><h5>RT3080</h5>
            Re-branding</p>
          <p className='right-p'>19 Union Terrace<br></br>
            London<br></br>
            E1 3EZ<br></br>
            United Kingdom</p><br></br>
          <br></br>
          <p>Invoice Date</p>
          <h5>2021-8-18</h5><br></br>
          <p>Payment Due</p>
          <h5>2021-8-19</h5>
          <p className='two'>Bill To
            <h5>Jensen Huang</h5>
            19 Union Terrace,<br></br>
            London,<br></br>
            E1 3EZ,<br></br>
            United Kingdom</p>
          <p className='three'>Sent to
            <h5>alexgrim@mail.com</h5></p>
        </div>
        <div className='container'>
          <div className='receipt-body'>
            <p >
              ItemName
              <div style={{ color: '#8a8b95' }}> depha</div>
            </p>
            <p>
              Amount
              <div style={{ color: '#8a8b95' }}>4000 </div>
            </p>
            <p>
              Invoice Date
              <div style={{ color: '#8a8b95' }}>07/08/2023</div>
            </p>
            <p>
              Status
              <div style={{ color: '#8a8b95' }}>Pending</div>
            </p>
          </div>
          <div className='container2'>
            <div className='cont'>
              <p className='contPara'>Amount Due </p>
              <h3 className='contHeader'>$4000 </h3>
            </div>
          </div>
        </div>
      </div>

    </div>


  )
}

export default SingleInvoice