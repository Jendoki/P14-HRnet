import { useStore } from "react-redux";
import { listTitles } from "../../../app/data";
import { TableListing } from "table-listing";

function EmployeesList() {
    const store = useStore();
    const employees = store.getState().employees

    return (
        <TableListing className="employees-list-container" listTitle="Current Employees" listTitles={listTitles} listElements={employees} />
    )
}

export default EmployeesList;