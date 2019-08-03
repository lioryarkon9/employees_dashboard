import React from 'react';
import './MainTblView.scss';
import TblActionIcon from '../../components/TblActionIcon';
import SingleRangeEmployees from './SingleRangeEmployees';


const MainTblView = props => {
    return (
        <div id='main-tbl-view'>
            <div id='tbl-actions' className='d-flex justify-content-end'>
                <TblActionIcon imgSrc=''/>
                <TblActionIcon imgSrc=''/>
                <TblActionIcon imgSrc=''/>
                <TblActionIcon imgSrc=''/>
            </div>
            <div id='employees-tbl-container'>
                <SingleRangeEmployees/>
            </div>
            <div id='paging-container' className='d-flex justify-content-center align-items-center'>
                todo: paging
            </div>
        </div>
    );
}

export default MainTblView;