import { useState } from 'react';
import { useDispatch, useStore } from "react-redux";
import ReactModal from 'react-modal';
import Button from '../../Button';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { departments, states } from "../../../app/data"
import toNamesList from "../../../app/formatting"

function CreateEmployeeForm() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [dob, setDob] = useState('');
    const [startDate, setStartDate] = useState('');
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zipcode, setZipcode] = useState('');
    const [department, setDepartment] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const store = useStore();
    const dispatch = useDispatch();
    const departmentsNames = toNamesList(departments);
    const statesNames = toNamesList(states);
    const defaultDepartment = departmentsNames[0];
    const defaultState = statesNames[0];


    function createEmployee() {
        dispatch({
            type: "ADD_EMPLOYEE",
            payload: {
                newEmployee: {
                    firstName: firstName,
                    lastName: lastName,
                    startDate: startDate,
                    department: department,
                    dateOfBirth: dob,
                    street: street,
                    city: city,
                    state: state,
                    zipcode: zipcode
                }
            }
        });
        setIsModalOpen(true);
        console.log(store.getState())
    }

    function onFormSubmit(e) {
        e.preventDefault();
        createEmployee();
    }

    return (
        <>
            <form className="create-employee-form" onSubmit={onFormSubmit}>
                <div className="input-wrapper">
                    <label htmlFor="firstname">First Name</label>
                    <input type="text" id="firstname" name="firstname" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="lastname">Last Name</label>
                    <input type="text" id="lastname" name="lastname" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="dob">Date of Birth</label>
                    <input type="date" id="dob" name="dob" value={dob} onChange={(e) => setDob(e.target.value)} required />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="startdate">Start Date</label>
                    <input type="date" id="startdate" name="startdate" value={startDate} onChange={(e) => setStartDate(e.target.value)} required />
                </div>
                <fieldset className="address-wrapper">
                    <legend>Address</legend>
                    <div className="input-wrapper">
                        <label htmlFor="street">Street</label>
                        <input type="text" id="street" name="street" value={street} onChange={(e) => setStreet(e.target.value)} required />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="city">City</label>
                        <input type="text" id="city" name="city" value={city} onChange={(e) => setCity(e.target.value)} required />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="state">State</label>
                        <Dropdown
                            options={statesNames}
                            onChange={(selectedOption) => setState(selectedOption.value)}
                            value={defaultState}
                            placeholder="Select a state"
                        />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="zipcode">Zipcode</label>
                        <input type="number" id="zipcode" name="zipcode" value={zipcode} onChange={(e) => setZipcode(e.target.value)} required />
                    </div>
                </fieldset>
                <div className="input-wrapper">
                    <label htmlFor="department">Department</label>
                    <Dropdown
                        options={departmentsNames}
                        onChange={(selectedOption) => setDepartment(selectedOption.value)}
                        value={defaultDepartment}
                        placeholder="Select a department"
                    />
                </div>
                <Button title="Save" />
            </form>
            <ReactModal className="confirmation-modal" isOpen={isModalOpen} contentLabel="Confirmation that the new employee has been added">
                <p>The new employee {firstName} {lastName} has been added!</p>
                <button onClick={() => setIsModalOpen(false)}>Close Modal</button>
            </ReactModal>
        </>
    )
}

export default CreateEmployeeForm;