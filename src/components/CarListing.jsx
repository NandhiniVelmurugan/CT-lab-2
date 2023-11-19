import React, { useState } from "react"; 
import { Container, Row, Col } from "reactstrap";
import CarItem from "../components/CarItem";
import carData from "../components/carData";


const CarListing = () => {
  const [sortOption, setSortOption] = useState("low"); 

  const handleSortChange = (e) => {
    const selectedOption = e.target.value;
    setSortOption(selectedOption);
  };
  const sortedCarData = [...carData]; 

  if (sortOption === "low") {
    sortedCarData.sort((a, b) => a.price - b.price);
  } else if (sortOption === "high") {
    sortedCarData.sort((a, b) => b.price - a.price);
  }

  return (
    
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className="d-flex align-items-center gap-3 mb-5">
                <span className="d-flex align-items-center gap-2">
                  <i className="ri-sort-asc"></i> Sort By
                </span>

                <select onChange={handleSortChange} value={sortOption}>
                  <option value="low">Low to High</option>
                  <option value="high">High to Low</option>
                </select>
              </div>
            </Col>

            {sortedCarData.map((item) => (
              <CarItem item={item} key={item.id} />
            ))}
          </Row>
        </Container>
      </section>
    
  );
};

export default CarListing;
