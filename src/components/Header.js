import { Link } from "react-router-dom";
import Button from "./Button";

function Header() {
    return (
        <div className="header">
            <h1>HRnet</h1>
            <div className="header-buttons">
                <Link to="/">
                    <Button title="Add an employee" />
                </Link>
                <Link to="/employee-list">
                    <Button title="View current employees" />
                </Link>
            </div>
        </div>
    )
}

export default Header;