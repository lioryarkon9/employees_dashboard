import React from 'react';
import ALL_EMPLOYEES from './MockData/employees.json';
import {MAX_EMPLOYEES_IN_VIEW} from './consts';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Header from './views/AppHeader';


class App extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            allEmployees: ALL_EMPLOYEES,
            currentFrom: 0,
            currentTo: MAX_EMPLOYEES_IN_VIEW
        }
    }
    getEmpArrByRange (from = 0, to = MAX_EMPLOYEES_IN_VIEW) {
        //todo
    }
    addEmployee (empObject) {
        //todo
    }
    filterEmployeesByParam (param) {
        //todo
    }
    sortEmployeesByParam (param) {
        //todo
    }
    render () {
        return (
            <div id='employees-app' className='d-flex'>
                <div id='sidebar-container'>
                    todo: sidebar
                </div>
                <div id='main-container'>
                    <Header/>
                </div>
            </div>
        );
    }
}

export default App;