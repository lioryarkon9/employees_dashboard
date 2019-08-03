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
        getBtnObjectsList = () => {
            const BtnObjectsList = [];
            const NumEmloyees = this.state.allEmployees.length > 0 ? this.state.allEmployees.length : 1;
            const NumRequiredBtns = Math.floor(NumEmloyees / MAX_EMPLOYEES_IN_VIEW) + 1;
            for (let i = 0; i < NumRequiredBtns; i++) {
                const OneBasedIndex = i + 1;
                BtnObjectsList.push({id : OneBasedIndex})
            }
    
            return BtnObjectsList;
        }
        render () {
            return (
                <App
                    {...this.props}
                    btns={this.getBtnObjectsList()}
                />
            );
        }
    }
}

export default WithLogic