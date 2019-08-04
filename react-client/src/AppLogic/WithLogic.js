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
                filteredEmployees: []
            }
        }
        getEmpArrByRange () {
            const CurrentFrom = this.state.currentFrom;
            const CurrentTo = CurrentFrom + MAX_EMPLOYEES_IN_VIEW;
            const AllEmployees = this.state.allEmployees;
            const FilteredEmployees = this.state.filteredEmployees;
            const ListToUse = FilteredEmployees.length ? FilteredEmployees : AllEmployees;

            return ListToUse.filter((item, index) => {
                return (index >= CurrentFrom && index < CurrentTo)
            })
        }
        addEmployee = empObject => {
            const AllEmployees = this.state.allEmployees;
            empObject.id = AllEmployees.length;
            AllEmployees.push(empObject);
            this.setState({allEmployees: AllEmployees});
        }
        filterEmployeesByParam = (key, filterVal) => {
            const AllEmployees = this.state.allEmployees;
            let filteredEmployees;
            if (key !== ID) {
                filteredEmployees = AllEmployees.filter(item => item[key].toLowerCase().startsWith(filterVal));
            } else {
                filteredEmployees = AllEmployees.filter(item => (item[key] + 1) == filterVal);
            }

            if (filterVal) {
                this.setState({filteredEmployees, currentFrom: 0});
            } else {
                this.setState({filteredEmployees: []});
            }
        }
        sortEmployeesByParam = key => {
            const AllEmployees = this.state.allEmployees;
            const FilteredEmployees = this.state.filteredEmployees;
            const ListToUse = FilteredEmployees.length ? FilteredEmployees : AllEmployees;
            const KeyToSet = FilteredEmployees.length ? 'filteredEmployees' : 'allEmployees';
            if (ListToUse.length > 1) {
                let sortedEmployees
                if (key === ID) {
                    sortedEmployees = sortObjListByInt(Array.from(AllEmployees), key);
                } else {
                    sortedEmployees = sortObjListByStr(Array.from(AllEmployees), key)
                }

                this.setState(prevState => {
                    prevState[KeyToSet] = sortedEmployees;

                    return prevState;
                });
            }
        }
        getBtnObjectsList = () => {
            const BtnObjectsList = [];
            const FilteredEmployees = this.state.filteredEmployees;
            const AllEmployees = this.state.allEmployees;
            const ListToUse = FilteredEmployees.length ? FilteredEmployees : AllEmployees;
            const NumEmloyees = ListToUse.length > 0 ? ListToUse.length : 1;
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
                    addEmployee={this.addEmployee}
                />
            );
        }
    }
}

export default WithLogic