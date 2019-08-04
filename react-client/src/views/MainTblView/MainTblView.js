import React from 'react';
import './MainTblView.scss';
import TblActionIcon from '../../components/TblActionIcon';
import SingleRangeEmployees from './SingleRangeEmployees';
import {MAX_EMPLOYEES_IN_VIEW} from '../../consts';
import EmpTblPaging from './EmpTblPaging';
import AddEmpBtn from './AddEmpBtn';
import NewEmpModal from './NewEmpModal';


class MainTblView extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            isNewEmpModal: false
        }
    }
    isBtnMatchDisplay = (btnId) => {
        const CurrentFromIndex = this.props.currentFrom;
        if (btnId === 0) {
            return CurrentFromIndex === btnId;
        } else {
            return (btnId + MAX_EMPLOYEES_IN_VIEW) - 1 === CurrentFromIndex;
        }
    }
    render () {
        return (
            <div id='main-tbl-view'>
                {this.state.isNewEmpModal ?
                    <NewEmpModal
                        toggleNewEmpModal={() => this.setState({isNewEmpModal: !this.state.isNewEmpModal})}
                        addEmployee={this.props.addEmployee}
                    />
                : null}
                <AddEmpBtn 
                    toggleNewEmpModal={() => this.setState({isNewEmpModal: !this.state.isNewEmpModal})}
                />
                <div id='tbl-actions' className='d-flex justify-content-end'>
                    <TblActionIcon imgSrc=''/>
                    <TblActionIcon imgSrc=''/>
                    <TblActionIcon imgSrc=''/>
                    <TblActionIcon imgSrc=''/>
                </div>
                <div id='employees-tbl-container'>
                    <SingleRangeEmployees
                        empsToDisplay={this.props.empsToDisplay}
                        sortEmployeesByParam={this.props.sortEmployeesByParam}
                        filterEmployeesByParam={this.props.filterEmployeesByParam}
                    />
                </div>
                <EmpTblPaging
                    btns={this.props.btns}
                    changeEmpRange={this.props.changeEmpRange}
                    currentFrom={this.props.currentFrom}
                />
            </div>
        );
    }
}

export default MainTblView;