import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './store';
import ReactModal from 'react-modal'; // Importer ReactModal
import './App.css';

import CreatePage from "../components/pages/create/CreatePage";
import EmployeesListPage from "../components/pages/list/EmployeesListPage";

ReactModal.setAppElement('#root');

// TODO
// - datepicker
// - list as separate plugin
// bonus : remove employee from list page

function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/" element={<CreatePage />} />
            <Route path="/employee-list" element={<EmployeesListPage />} />
          </Routes>
        </Router>
      </Provider>
    </>
  );
}

export default App;
