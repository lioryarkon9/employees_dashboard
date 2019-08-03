import React from 'react';
import './MainTblView.scss';
import TblActionIcon from '../../components/TblActionIcon';
import SingleRangeEmployees from './SingleRangeEmployees';
import {MAX_EMPLOYEES_IN_VIEW} from '../../consts';


const MainTblView = props => {
    const IsBtnMatchDisplay = (btnId) => {
        const CurrentFromIndex = props.currentFrom;
        if (btnId === 0) {
            return CurrentFromIndex === btnId;
        } else {
            return (btnId + MAX_EMPLOYEES_IN_VIEW) - 1 === CurrentFromIndex;
        }
    }
    return (
        <div id='main-tbl-view'>
            <div id='tbl-actions' className='d-flex justify-content-end'>
                <TblActionIcon imgSrc=''/>
                <TblActionIcon imgSrc=''/>
                <TblActionIcon imgSrc=''/>
                <TblActionIcon imgSrc=''/>
            </div>
            <div id='employees-tbl-container'>
                <SingleRangeEmployees
                    empsToDisplay={props.empsToDisplay}
                />
            </div>
            <div id='paging-container' className='d-flex justify-content-center align-items-center'>
                <div>Pages:</div>
                <div className='d-flex paging-btns-container'>
                    {props.btns.map(item => (
                        <div 
                            key={'_btn-' + item.id}
                            className='paging-btn'
                            style={{
                                backgroundColor: IsBtnMatchDisplay(item.id) ? '#2a66e4': 'inherit',
                                color: IsBtnMatchDisplay(item.id) ? '#fff': 'inherit',
                                cursor: 'pointer'
                            }}
                            onClick={e => props.changeEmpRange(item.id)}
                        >
                            {item.label}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default MainTblView;