import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  MDBTable,
  MDBTableHead,
  MDBRow,
  MDBCol,
  MDBContainer,
  MDBTableBody,
  MDBBtnGroup,
  MDBBtn
} from "mdb-react-ui-kit";

import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");

  useEffect(() => {
    loadUserData();
  }, []);
  const loadUserData = async () => {
    return await axios
      .get("http://localhost:5000/users")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  };
  console.log(data);
  const handleSearch=() =>{

  }
  const handleReset=() =>{
    
  }
  
  return(
  <MDBContainer>
    <form style={{
      margin:"auto",
      padding:"15px",
      maxWidth:"400px",
      alignContent:"center"
    }} className="d-flex input-group w-auto" onSubmit={handleSearch}>
      <input type="text"
      className="form-control"
      placeholder="Search Name..." value={value} onChange={(e)=>setValue(e.target.value)}/>
      <MDBBtnGroup>
        <MDBBtn type="submit" color="dark">Search</MDBBtn>
        <MDBBtn className="mx-2" color="info" onClick={()=>handleReset()}>Reset</MDBBtn>

      </MDBBtnGroup>
    </form>
    <div style={{ marginTop: "100px" }}>
      <h2 className="text-center">Search ,Filter and Pagination USing Json Fake Rest Api</h2>
      <MDBRow>
        <MDBCol size="12">
          <MDBTable>
            <MDBTableHead dark>
              <tr>
                <th scope="col">No.</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col">Address</th>
                <th scope="col">Status</th>
              </tr>
            </MDBTableHead>
            {data.length === 0 ? (
              <MDBTableBody className="text-center mb-0">
                <tr>
                  <td colSpan={8} className="text-center mb-0">
                    No Data Found
                  </td>
                </tr>
              </MDBTableBody>
            ) : (
              data.map((item, index) => (
                <MDBTableBody key={index}>
                  <tr>
                    <th scope="row">{index+1}</th>
                      <td>{item.name}</td>
                      <td>{item.email}</td>
                      <td>{item.phone}</td>
                      <td>{item.address}</td>
                      <td>{item.status}</td>
                    
                  </tr>
                </MDBTableBody>
              ))
            )}
          </MDBTable>
        </MDBCol>
      </MDBRow>
    </div>
  </MDBContainer>
  )
}

export default App;
