import React from 'react';
import { Form, FormGroup, FormControl, Button } from 'react-bootstrap'; // Import Bootstrap components
import './MachineryRentals.css';

const App = () => {
  return (
    <div>
      <div className="jumbotron">
        <div className="container-1">
          <div className="main">
            <h1>Farming Machinery Rentals</h1>
            <a href="#" className="btn-main">
              Get Started
            </a>
          </div>
        </div>
      </div>
     <Form className="form">
  <div className="find__cars-left d-flex align-items-center justify-content-between flex-wrap">
    
    <FormGroup className="form__group">
      <input type="text" placeholder="From address" required />
    </FormGroup>

    <FormGroup className="form__group">
      <input type="text" placeholder="To address" required />
    </FormGroup>

    <FormGroup className="form__group">
      <input type="date" placeholder="Journey date" required />
    </FormGroup>

    <FormGroup className="form__group">
      <input
        className="journey__time"
        type="time"
        placeholder="Journey time"
        required
      />
    </FormGroup>
    <FormGroup className="select__group">
      <select>
      <option value="tractor">Tractor</option>
              <option value="harvester">Harvester</option>
              <option value="plough">Plough</option>
      </select>
    </FormGroup>

    <FormGroup className="form__group">
    <a href="/CarListing" className="btn find__car-btn">Find </a>

    </FormGroup>
  </div>
</Form>


      <div className="image-grid">
        <div className="grid-item">
          <img
            src="https://template115560.motopreview.com/mt-demo/115500/115560/mt-content/uploads/2020/09/mt-2111_machinery_img01.jpg"
            alt="Image 1"
          />
          <h3>Harvesters</h3>
          <a href="/CarListing">View</a>
        </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

        <div className="grid-item">
          <img
            src="https://www.solistractorslincolnshire.co.uk/wp-content/uploads/2020/02/DSCF0509-web.jpg"
            alt="Image 2"
          />
          <h3>Loaders</h3>
          <a href="/CarListing">View</a>
        </div>
        <div className="grid-item">
          <img
            src="https://template115560.motopreview.com/mt-demo/115500/115560/mt-content/uploads/2020/09/mt-2111_machinery_img05.jpg"
            alt="Image 1"
          />
          <h3>Plows</h3>
          <a href="/CarListing">View</a>
        </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

        <div className="grid-item">
          <img
            src="https://template115560.motopreview.com/mt-demo/115500/115560/mt-content/uploads/2020/09/mt-2111_machinery_img06.jpg"
            alt="Image 2"
          />
          <h3>Tractors</h3>
          <a href="/CarListing">View</a>
        </div>
      </div>
    </div>
  );
};

export default App;
