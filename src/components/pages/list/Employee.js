function Employee(props) {
    return (
        <>
            <tr>
                <th>
                    <p>{props.employee.firstName}</p>
                </th>
                <th>
                    <p>{props.employee.lastName}</p>
                </th>
                <th>
                    <p>{props.employee.startDate}</p>
                </th>
                <th>
                    <p>{props.employee.department}</p>
                </th>
                <th>
                    <p>{props.employee.dateOfBirth}</p>
                </th>
                <th>
                    <p>{props.employee.street}</p>
                </th>
                <th>
                    <p>{props.employee.city}</p>
                </th>
                <th>
                    <p>{props.employee.state}</p>
                </th>
                <th>
                    <p>{props.employee.zipcode}</p>
                </th>
            </tr>
        </>
    )
}

export default Employee;