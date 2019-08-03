import React from 'react';
import {MAX_EMPLOYEES_IN_VIEW} from '../consts';
import ALL_EMPLOYEES from '../MockData/employees.json';

const WithLogic = App => {
    return class AppLogic extends React.Component {
        constructor (props) {
            super(props);
            this.state = {
                allEmployees: ALL_EMPLOYEES,
                currentFrom: 0
            }
        }
        getEmpArrByRange () {
            const CurrentFrom = this.state.currentFrom;
            const CurrentTo = CurrentFrom + MAX_EMPLOYEES_IN_VIEW;
            const AllEmployees = this.state.allEmployees;
            return AllEmployees.filter((item, index) => {
                return (index >= CurrentFrom && index < CurrentTo)
            })
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
        getBtnObjectsList = () => {
            const BtnObjectsList = [];
            const NumEmloyees = this.state.allEmployees.length > 0 ? this.state.allEmployees.length : 1;
            const NumRequiredBtns = Math.floor(NumEmloyees / MAX_EMPLOYEES_IN_VIEW) + 1;
            for (let i = 0; i < NumRequiredBtns; i++) {
                const OneBasedIndex = i + 1;
                BtnObjectsList.push({id : i, label: OneBasedIndex})
            }
    
            return BtnObjectsList;
        }
        changeEmpRange = (btnId) => {
            const FromIndex = btnId === 0 ? btnId : btnId + (MAX_EMPLOYEES_IN_VIEW - 1);
            this.setState({currentFrom: FromIndex})
        }
        render () {
            return (
                <App
                    {...this.props}
                    btns={this.getBtnObjectsList()}
                    currentFrom={this.state.currentFrom}
                    empsToDisplay={this.getEmpArrByRange()}
                    changeEmpRange={this.changeEmpRange}
                />
            );
        }
    }
}

export default WithLogic