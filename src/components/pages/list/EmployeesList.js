import { useDispatch, useStore } from "react-redux";
import Employee from "./Employee";
import { listTitles } from "../../../app/data";

function EmployeesList(props) {
    const store = useStore();
    const dispatch = useDispatch();
    const employees = store.getState().employees
    console.log(employees)


    //make this one as a separate plugin?
    //pass employees list to list plugin

    return (
        <>
            <div className="employees-list-container">
                <h2>Current Employees</h2>
                <table className="employees-table">
                    <tr className="employees-table-titles">
                        {listTitles.map(title => <th>{title}</th>)}
                    </tr>
                    {employees.map(employee => <Employee employee={employee} />)}
                </table>
            </div>
        </>
    )
}

export default EmployeesList;