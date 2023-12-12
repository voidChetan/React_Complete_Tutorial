import React, { useState, useEffect } from 'react';

import axios from 'axios';

const Customer = () => {

    let [customerList, setCustomerList] = useState([]);

    let [customerObj, setCustomerObj] = useState({ CustId: 0, Name: '', MobileNo: '', Password: '' })

    let [isSubmit, setIsSubmit] = useState(false);

    let [isLoader, setIsLoader] = useState(true);

    const changeFormValues = (event, key) => {
        setCustomerObj(prevObj => ({ ...prevObj, [key]: event.target.value }))
    }
    useEffect(() => {
        getAllCustomer()
    }, []);
    const getAllCustomer = async () => {
        debugger;
        const response = await axios.get("https://freeapi.miniprojectideas.com/api/amazon/GetAllCustomer");
        debugger;
        setIsLoader(false)
        setCustomerList(response.data.data)
    }
    const saveNewCustromer = async () => {
        debugger;
        setIsSubmit(true);
        if (customerObj.Name != '' && customerObj.MobileNo != '' && customerObj.Password != '') {
            const result = await axios.post("https://freeapi.miniprojectideas.com/api/amazon/RegisterCustomer", customerObj);
           
            if (result.data.result) {
                alert("Customer Created Successfully");
                getAllCustomer();
            } else {
                alert(result.data.message)
            }
        }

    }
    return (
        <div>
            <div className='row'>
                <div className='col-8'>
                    <div className='card'>
                        <div className='card-header bg-success'>
                            Customer List
                        </div>
                        <div className='card-body'>
                            <div className='row'>
                                <div className='col-12'>
                                    <table className='table table-bordered'>
                                        <thead>
                                            <tr>
                                                <th>Sr No</th>
                                                <th>Name</th>
                                                <th>Contact</th>
                                                <th>Password</th>
                                            </tr>
                                        </thead>
                                        {
                                            isLoader &&  <tbody>
                                            <tr>
                                                <td colSpan="4">
                                                    <div class="spinner-grow text-muted"></div>
                                                    <div class="spinner-grow text-primary"></div>
                                                    <div class="spinner-grow text-success"></div>
                                                    <div class="spinner-grow text-info"></div>
                                                    <div class="spinner-grow text-warning"></div>
                                                    <div class="spinner-grow text-danger"></div>
                                                    <div class="spinner-grow text-secondary"></div>
                                                    <div class="spinner-grow text-dark"></div>
                                                    <div class="spinner-grow text-light"></div>
                                                </td>
                                            </tr>
                                        </tbody>
                                        }
                                        
                                        <tbody>
                                            {
                                                customerList.map((item, index) => {
                                                    return (<tr>
                                                        <td> {index + 1}</td>
                                                        <td>{item.name}</td>
                                                        <td>{item.mobileNo}</td>
                                                        <td>{item.password}</td>
                                                    </tr>)
                                                })
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-4'>
                    <div className='card'>
                        <div className='card-header bg-success'>
                            New Customer
                        </div>
                        <div className='card-body'>
                            <div className='row'>
                                <div className='col-6'>
                                    <label>Name</label>
                                    <input type='text' onChange={(event) => { changeFormValues(event, 'Name') }} className='form-control' />
                                    <div className='text-danger'>
                                        {
                                            isSubmit && customerObj.Name == '' && <span>This Is Required</span>
                                        }
                                    </div>
                                </div>
                                <div className='col-6'>
                                    <label>Mobile No</label>
                                    <input type='text' onChange={(event) => { changeFormValues(event, 'MobileNo') }} className='form-control' />\
                                    <div className='text-danger'>
                                        {
                                            isSubmit && customerObj.MobileNo == '' && <span>This Is Required</span>
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-6'>
                                    <label>Password</label>
                                    <input type='text' onChange={(event) => { changeFormValues(event, 'Password') }} className='form-control' />
                                    <div className='text-danger'>
                                        {
                                            isSubmit && customerObj.Password == '' && <span>This Is Required</span>
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className='row pt-3'>
                                <div className='col-12 text-center'>
                                    <button disabled={customerObj.Name == '' || customerObj.MobileNo == '' || customerObj.Password == ''} className='btn btn-success' onClick={saveNewCustromer}>Save Customer</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Customer;