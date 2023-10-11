import React, { useState } from "react";
import "./App.css";
import { Link } from 'react-router-dom'
import Header from './assets/components/Header';
import { FaPlusCircle } from "react-icons/fa";
import { GoDotFill } from "react-icons/go"
import { IoIosArrowBack } from "react-icons/io"



const App = () => {
  const [invoices, setInvoices] = useState([
    {
      id: 1,
      name: "Aline",
      amount: 100,
      date: "2023-10-05",
      status: "Paid",
    },
    {
      id: 2,
      name: "Soap",
      amount: 200,
      date: "2023-10-04",
      status: "Pending",
    },
    {
      id: 3,
      name: "Juice",
      amount: 200,
      date: "2023-10-04",
      status: "Draft",
    },
    {
      id: 4,
      name: "Juice",
      amount: 200,
      date: "2023-10-04",
      status: "Paid",
    },
    {
      id: 5,
      name: "Juice",
      amount: 200,
      date: "2023-10-04",
      status: "Pending",
    },
  ]);

  const [isModalOpen, setModalOpen] = useState(false);
  const [newInvoice, setNewInvoice] = useState({
    name: "",
    amount: "",
    date: "",
    status: "",
  });

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewInvoice({
      ...newInvoice,
      [name]: value,
    });
  };

  const addInvoice = () => {
    if (newInvoice.name && newInvoice.amount && newInvoice.date) {
      const newInvoiceWithId = {
        ...newInvoice,
        id: invoices.length + 1,
      };
      setInvoices([...invoices, newInvoiceWithId]);
      setModalOpen(false);
      setNewInvoice({
        name: "",
        amount: "",
        date: "",
        status: "",
      });
    }
  };
  const getStatusColor = (status) => {
    switch (status) {
      case "Paid":
        return "#1F2C3F";
      case "Pending":
        return "#2B2736";
      case "Draft":
        return "#292C45";
      default:
        return "gray";
    }
  };

  const getStatusTextColor = (status) => {
    switch (status) {
      case "Paid":
        return "#33D69F";
      case "Pending":
        return "#FF8F00";
      case "Draft":
        return "#FFFFFF";
      default:
        return "black";
    }
  };
  return (


    <div className="App">
      <Header />
      {/* <SingleInvoice/> */}

      <div className="AppTwo">
      <header>
      <div className='invo-title'>
            <div className='title'>
                <h3>Invoices</h3>
                <p>There are {invoices.length} Total invoices</p>
            </div>
            <div className="filter">
                <h3>Filter by</h3>
                <select name="" id="dropdown" className='dropList'><br></br>
                <br></br>
                    <option value="">All</option>
                    <option value="Pending">Pending</option>
                    <option value="Paid">Paid</option>
                    <option value="Draft">Draft</option>
                </select>
            </div>
           <div className='butInvo'>
                <button className='but' onClick={openModal}>
                <FaPlusCircle/> 
                 <h5>Add Invoice</h5>
                </button>
                
           </div>
</div>
      </header>
        <main>
          <div className="invoice-list">
            {invoices.map((invoice) => (
              <Link to={'/singleInvoice'} className="invoice" key={invoice.id}>
                <h3>{invoice.name}</h3>
                <p>${invoice.amount}</p>
                <p>{invoice.date}</p>
                <p style={{
                      backgroundColor: getStatusColor(invoice.status),
                      color: getStatusTextColor(invoice.status),
                      width:invoice.status==='Pending'?'6rem' : '4rem', 
                      height:'2rem',
                      borderRadius:'10%'

                    }}><GoDotFill/>{invoice.status}</p> 
              </Link>
              
            ))}
          </div>
        </main>
      </div>

      {
        isModalOpen && (
          <div className="modal">
            <div className="modal-content">
              <h2>Add New Invoice</h2>
              <form>
                <label>Name:</label>
                <input
                  type="text"
                  name="name"
                  value={newInvoice.name}
                  onChange={handleInputChange}
                />
                <label>Amount:</label>
                <input
                  type="number"
                  name="amount"
                  value={newInvoice.amount}
                  onChange={handleInputChange}
                />
                <label>Date:</label>
                <input
                  type="date"
                  name="date"
                  value={newInvoice.date}
                  onChange={handleInputChange}
                />
                <label>Status:</label>
                <select
                  name="status"
                  value={newInvoice.status}
                  onChange={handleInputChange}
                >
                  <option value="Pending">Pending</option>
                  <option value="Paid">Paid</option>
                  <option value="Draft">Draft</option>

                </select>
                <div className="modal-actions">
                  <button className="ad-button" onClick={addInvoice}>
                    Add Invoice
                  </button>
                  <button className="cancel-button" onClick={closeModal}>
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

    </div>

  );
};

export default App;
