import React, { useState, useEffect } from "react";
import { useStore, useDispatch } from "react-redux";
import { listTitles } from "../../../app/data";
import { TableListing } from "table-listing";
import { saveAs } from 'file-saver';

function EmployeesList() {
    const store = useStore();
    const dispatch = useDispatch();
    const [employees, setEmployees] = useState(store.getState().employees);
    const [importedEmployees, setImportedEmployees] = useState([]);

    useEffect(() => {
        setEmployees(store.getState().employees);
    }, [store]);

    useEffect(() => {
        if (importedEmployees.length > 0) {
            setEmployees(importedEmployees);
        }
    }, [importedEmployees]);

    function exportData(list) {
        const jsonData = JSON.stringify(list);
        const blob = new Blob([jsonData], { type: 'application/json' });
        saveAs(blob, 'employees.json');
    }

    function importData(e) {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = (event) => {
            const importedData = JSON.parse(event.target.result);
            setImportedEmployees(importedData);
            addEmployeesList(importedData)
        };
        reader.readAsText(file);
    }

    function addEmployeesList(importedData) {
        importedData.forEach(newEmployee => {
            dispatch({
                type: "ADD_EMPLOYEE",
                payload: {
                    newEmployee: newEmployee
                }
            });
        });
        console.log(store.getState());
    }

    return (
        <>
            <div className="import-export-container">
                <div className="import-export-buttons">
                    <label className="custom-file-upload">
                        <input type="file" accept=".json" onChange={importData} />
                        Import employees list
                    </label>
                    <button onClick={() => exportData(employees)}>Export employees list</button>
                </div>
            </div>
            <TableListing className="employees-list-container" listTitle="Current Employees" listTitles={listTitles} listElements={employees} />
        </>
    )
}

export default EmployeesList;
