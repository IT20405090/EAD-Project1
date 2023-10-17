import React, { useState, useEffect } from "react";
// import { useNavigate , useParams } from "react-router-dom";
import trainImage from '../../images/userprop.jpg';
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Form,
  Input,
  Button,
} from "reactstrap";
// import { GetUserByID , UpdateAdmin } from "../../Services/AuthServices";
// import Swal from "sweetalert2";
// import moment from "moment";


const UpdateUser = () => {


  

  

  return (
    <div
    style={{
      backgroundImage: `url(${trainImage})`, // Use your train image
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      // height: '100vh',
      // padding: '20px',
      marginTop: '-500px',
    }}
  >
    <div>
      <div>
        <center>
          <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
          <br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <Card className="card123" style={{ marginLeft: "-1000px", maxHeight:"900px", backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
          <CardHeader>
            <CardTitle style={{ color: "blue", fontSize: "40px" }}>
              User Profile
            </CardTitle>
          </CardHeader>
          <CardBody>
            <div style={{ width: "400px", fontSize: "20px" }}>
              <Form>
                <label>User Name</label>
                <Input
                  type="text"
                  className="input"                  
                //   value={Name}
                //   readOnly={!updateChange ? true : false}
                />
                <br />
                <label>NIC</label>
                <Input
                  type="text"
                  className="input"
                //   value={NIC}
                //   readOnly={!updateChange ? true : false}
                />
                <br />
                <label>Email</label>
                <Input
                  type="text"
                  className="input"
                //   value={Email}
                //   readOnly={!updateChange ? true : false}
                />
                <br />
                <label>Mobile No</label>
                <Input
                  type="text"
                  className="input"
                //   value={Mobile}
                //   readOnly={!updateChange ? true : false}
                /> <br/>
              
                <label>Address</label>
                <Input                 
                  type="text"
                  className="input"
                //   value={Address}
                //   readOnly={true}
                />
                <br />
                <label>Password</label>
                <Input                 
                  type="text"
                  className="input"
                //   value={Password}
                //   readOnly={true}
                />
                <br />
               
                <Button
                  className="btn btn-success"
                //   onClick={(e) => UpdateData(e)}
                //   style={{ display: updateChange ? "flex" : "none" }}
                >
                  Update
                </Button>
                <Button
                  className="btn btn-danger"
                //   onClick={(e) => Deactivate(e)}
                //   style={{ display: Deactivate ? "flex" : "none" }}
                >
                  De-activate Account
                </Button>
              </Form>
            </div>
          </CardBody>
        </Card>
        </center>
      </div>
    </div>
    </div>
  );
};

export default UpdateUser;
