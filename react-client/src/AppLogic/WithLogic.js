import React from 'react';
import {MAX_EMPLOYEES_IN_VIEW} from '../consts';
import ALL_EMPLOYEES from '../MockData/employees.json';
import {ID} from '../consts';
import {sortObjListByInt, sortObjListByStr} from '../utils';

const WithLogic = App => {
    return class AppLogic extends React.Component {
        constructor (props) {
            super(props);
            this.state = {
                allEmployees: ALL_EMPLOYEES,
                currentFrom: 0,
                searchTimeOutId: null
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
        filterEmployeesByParam = (key, filterVal) => {
            if (this.state.searchTimeOutId) {
                window.clearTimeout(this.state.searchTimeOutId);
            }

            const AllEmployees = this.state.allEmployees;
            let filteredEmployees;
            const TimeOutId = window.setTimeout(() => {
                if (key !== ID) {
                    filteredEmployees = AllEmployees.filter(item => item[key].toLowerCase().startsWith(filterVal));
                } else {
                    filteredEmployees = AllEmployees.filter(item => (item[key] + 1) == filterVal);
                }
    
                if (filterVal) {
                    this.setState({allEmployees: filteredEmployees});
                } else {
                    // any added employees won't be displayed
                    // real world implementation will fetch from db
                    this.setState({allEmployees: ALL_EMPLOYEES});
                }
            }, 1200);

            this.setState({searchTimeOutId: TimeOutId});
        }
        sortEmployeesByParam = key => {
            const AllEmployees = this.state.allEmployees;
            if (AllEmployees.length > 1) {
                let sortedEmployees
                if (key === ID) {
                    sortedEmployees = sortObjListByInt(Array.from(AllEmployees), key);
                } else {
                    sortedEmployees = sortObjListByStr(Array.from(AllEmployees), key)
                }

                this.setState({allEmployees: sortedEmployees});
            }
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
                    sortEmployeesByParam={this.sortEmployeesByParam}
                    filterEmployeesByParam={this.filterEmployeesByParam}
                />
            );
        }
    }
}

export default WithLogic