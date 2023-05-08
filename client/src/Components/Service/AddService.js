// import React, { Component } from 'react';
// import axios from 'axios';
// import swal from 'sweetalert';
// import './Navbar/ServiceNavbar';
// import logo from './Images/logo.JPG'


// export default class AddService extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             fName: "",
//             lName: "",
//             address: "",
//             nic: "",
//             phone: "",
//             email: "",
//             gender: "",
//             job: "",
//             position: ""
//         }
//     }

//     handleInputChange = (e) => {
//         const { name, value } = e.target;

//         this.setState({
//             ...this.state,
//             [name]: value
//         })
//     }

//     btnDemo = (e) => {
//         e.preventDefault();

//         const { fName, lName, address, nic, phone, email, gender, job, position } = this.state;

//         const data = {

//             fName: fName,
//             lName: lName,
//             address: address,
//             nic: nic,
//             phone: phone,
//             email: email,
//             gender: gender,
//             job: job,
//             position: position

//         }
//         console.log(data)

//         this.setState(
//             {
//                 fName: "kamal",
//                 lName: "liyanagama",
//                 address: "43/1,kalidasa road matara",
//                 nic: "200133002366",
//                 phone: "0786537261",
//                 email: "kamal@gmail.com",
//                 gender: "Male",
//                 job: "doctor",
//                 position: "senior"

//             }
//         )

//     }

//     onSubmit = (e) => {
//         e.preventDefault();

//         const { fName, lName, address, nic, phone, email, gender, job, position } = this.state;

//         const data = {
//             fName: fName,
//             lName: lName,
//             address: address,
//             nic: nic,
//             phone: phone,
//             email: email,
//             gender: gender,
//             job: job,
//             position: position
//         }

//         console.log(data)

//         const ph = /^[0-9\b]+$/;
//         const emi = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

//         if ((!ph.test(String(phone))) || (phone.length != 10)) {
//             swal("Invalid Contact Number !", "contact number should be valid pattern", "error");
//         } else if ((!emi.test(String(email)))) {
//             swal("Invalid email address !", "Please enter valid email address", "error");
//         } else if (fName.length === 0 || lName.length === 0 || address.length === 0 ||
//             nic.length === 0 || phone.length === 0 || email.value === 0 ||
//             gender.length === 0 || job.length === 0 || position.length === 0) {
//             swal("Please fill all the details")
//         } else {

//             axios.post("http://localhost:8000/service/save", data).then((res) => {
//                 let path = "/serviceDash";
//                 if (res.data.success) {
//                     alert("Details Saved Successfully")
//                     this.props.history.push(path);
//                     this.setState(
//                         {
//                             fName: "",
//                             lName: "",
//                             address: "",
//                             nic: "",
//                             phone: "",
//                             email: "",
//                             gender: "",
//                             job: "",
//                             position: ""
//                         }
//                     )
//                 }
//             })
//         }
//     }
//     render() {

import React, { useState } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import './Navbar/ServiceNavbar';
import logo from './Images/logo.JPG'

export default function AddService(props) {
    const [formData, setFormData] = useState({
        fName: '',
        lName: '',
        address: '',
        nic: '',
        phone: '',
        email: '',
        gender: '',
        job: '',
        position: '',
    });

    const handleInputChange = (e) => {
        // const { name, value } = e.target;
        // setFormData({
        //     ...formData,
        //     [name]: value,
        // });
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
          });
    };

    const btnDemo = (e) => {
        e.preventDefault();
        setFormData({
            fName: 'kamal',
            lName: 'liyanagama',
            address: '43/1,kalidasa road matara',
            nic: '200133002366',
            phone: '0786537261',
            email: 'kamal@gmail.com',
            gender: 'Male',
            job: 'doctor',
            position: 'senior',
        });
    };

    const onSubmit = (e) => {
        e.preventDefault();

        const { fName, lName, address, nic, phone, email, gender, job, position } = formData;

        const data = {
            fName: fName,
            lName: lName,
            address: address,
            nic: nic,
            phone: phone,
            email: email,
            gender: gender,
            job: job,
            position: position,
        };

        console.log(data);

        const ph = /^[0-9\b]+$/;
        const emi = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if ((!ph.test(String(phone))) || phone.length !== 10) {
            swal('Invalid Contact Number !', 'contact number should be valid pattern', 'error');
        } else if ((!emi.test(String(email)))) {
            swal('Invalid email address !', 'Please enter valid email address', 'error');
        } else if (
            fName.length === 0 ||
            lName.length === 0 ||
            address.length === 0 ||
            nic.length === 0 ||
            phone.length === 0 ||
            email.length === 0 ||
            gender.length === 0 ||
            job.length === 0 ||
            position.length === 0
        ) {
            swal('Please fill all the details');
        } else {
            axios.post('http://localhost:8000/service/save', data).then((res) => {
                let path = '/serviceDash';
                if (res.data.success) {
                    swal('Details Saved Successfully');
                    props.history.push(path);
                    setFormData({
                        fName: '',
                        lName: '',
                        address: '',
                        nic: '',
                        phone: '',
                        email: '',
                        gender: '',
                        job: '',
                        position: '',
                    });
                }
            });
        }
    };

    return (
        <>
            <div className="order_bground" style={{ zIndex: 98, height: "100vh" }}>
                <div className="order_bground" style={{ zIndex: 98, height: "100vh" }}>
                    <div style={{ marginLeft: "10%", marginBlockStart: "-4%" }}>
                        <div class="card" style={{ width: "60%", height: "100%" }}>
                            <div class="card-body">
                                <center>
                                    <h1>
                                        <span class="badge bg-warning text-dark opacity-90">
                                            Add New Service Provider
                                        </span>
                                    </h1>
                                </center>
                                <form className="need-validation" noValidate>
                                    {/* <div className="form-group" style={{ marginBottom: "15px" }}>
                                        <label style={{ marginBottom: "5px" }}>Employee ID</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="EmpID"
                                            placeholder="Enter Employee ID"
                                            value={formData.EmpID}
                                            onChange={handleInputChange}
                                        />
                                    </div> */}

                                    <div className="form-group" style={{ marginBottom: "15px" }}>
                                        <label style={{ marginBottom: "5px" }}>First Name</label>
                                        <input
                                            type="textarea"
                                            className="form-control"
                                            name="fName"
                                            placeholder="Enter First Name"
                                            value={formData.fName}
                                            onChange={handleInputChange}
                                        />
                                    </div>

                                    <div className="form-group" style={{ marginBottom: "15px" }}>
                                        <label style={{ marginBottom: "5px" }}>Last Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="lName"
                                            placeholder="Enter Last Name"
                                            value={formData.lName}
                                            onChange={handleInputChange}
                                        />
                                    </div>

                                    <div className="form-group" style={{ marginBottom: "15px" }}>
                                        <label style={{ marginBottom: "5px" }}>Address</label>
                                        <input
                                            type="textarea"
                                            className="form-control"
                                            name="address"
                                            placeholder="Enter Address"
                                            value={formData.address}
                                            onChange={handleInputChange}
                                        />
                                    </div>

                                    <div className="form-group" style={{ marginBottom: "15px" }}>
                                        <label style={{ marginBottom: "5px" }}>NIC</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="nic"
                                            placeholder="Enter NIC no"
                                            value={formData.nic}
                                            onChange={handleInputChange}
                                        />
                                    </div>

                                    <div className="form-group" style={{ marginBottom: "15px" }}>
                                        <label style={{ marginBottom: "5px" }}>
                                            Contact Number
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="phone"
                                            placeholder="Enter Mobile no"
                                            value={formData.phone}
                                            onChange={handleInputChange}>
                                            </input>
                                     </div>
                        

                                    <div className="form-group" style={{ marginBottom: '15px' }}>
                                        <label style={{ marginBottom: '5px' }}>Email Address</label>
                                        <input type="text"
                                            className="form-control"
                                            name="email"
                                            placeholder="Enter Email Address"
                                            value={formData.email}
                                            onChange={handleInputChange} />
                                    </div>

                                    <div className="form-group col-md-4" style={{ marginBottom: '15px' }}>
                                        <label style={{ marginBottom: '5px' }}>Gender</label>
                                        <select name="gender" onChange={handleInputChange} value={formData.gender} defaultValue="Select Type" class="form-control">
                                            <option defaultValue>-- Select Gender --</option>
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                        </select>
                                    </div>

                                    <div className="form-group" style={{ marginBottom: '15px' }}>
                                        <label style={{ marginBottom: '5px' }}>Job Title</label>
                                        <input type="text"
                                            className="form-control"
                                            name="job"
                                            placeholder="Enter Department"
                                            value={formData.job}
                                            onChange={handleInputChange} />
                                    </div>

                                    <div className="form-group" style={{ marginBottom: '15px' }}>
                                        <label style={{ marginBottom: '5px' }}>Position</label>
                                        <input type="text"
                                            className="form-control"
                                            name="position"
                                            placeholder="Enter Position"
                                            value={formData.position}
                                            onChange={handleInputChange} />
                                    </div>

                                </form>
                                <br></br>
                                <a className="btn btn-warning btn-lg text-dark" type="submit" style={{ marginTop: '15px', marginLeft: '185px' }} onClick={onSubmit}>
                                    <i className="far fa-check-square" ></i>
                                    &nbsp; Save
                                </a>

                                <button className="btn btn-success btn-lg text-dark" style={{ marginTop: '15px', marginLeft: '10px' }} type="submit" onClick={btnDemo}>
                                    <i class='fas fa-bookmark'></i>
                                    &nbsp; <b>Demo</b>
                                </button>

                                <br></br>

                            </div>
                        </div>
                        <br></br>
                    </div>
                </div>
            </div>
        </>

    )
}
