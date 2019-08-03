import React from 'react';
import './SingleRangeEmployees.scss';
import TblHeader from './TblHeader';
import {MAX_EMPLOYEES_IN_VIEW} from '../../../consts';

const SingleRangeEmployees = props => {
    const EmpsToDispaly = props.empsToDisplay;
    const GetColorByIndex = i => {
        const OneBasedIndex = i + 1;
        return OneBasedIndex % 2 !== 0 ? '#fff' : '#f7fafe';
    }
    return (
        <div id='single-range-employees'>
            <TblHeader 
                sortEmployeesByParam={props.sortEmployeesByParam}
                filterEmployeesByParam={props.filterEmployeesByParam}
            />
            <div id='emp-records-container'>
                {EmpsToDispaly.map((item, i) => (
                    <div 
                        key={'_emp-' + item.id}
                        className='d-flex emp-record'
                        style={{height: MAX_EMPLOYEES_IN_VIEW + '%', backgroundColor: GetColorByIndex(i)}}
                    >
                        <div 
                            id='id-item' 
                            className='emp-item d-flex justify-content-center align-items-center' 
                            style={{width: 6 + '%'}}
                        >
                            {item.id + 1}
                        </div>
                        <div className='emp-item d-flex align-items-center' style={{width: 9 + '%'}}>{item.firstName}</div>
                        <div className='emp-item d-flex align-items-center' style={{width: 9 + '%'}}>{item.lastName}</div>
                        <div className='emp-item d-flex align-items-center' style={{width: 13 + '%'}}>{item.email}</div>
                        <div className='emp-item d-flex align-items-center' style={{width: 9 + '%'}}>{item.phoneNumber}</div>
                        <div className='emp-item d-flex align-items-center' style={{width: 9 + '%'}}>{item.department}</div>
                        <div className='emp-item d-flex align-items-center' style={{width: 9 + '%'}}>{item.role}</div>
                        <div className='emp-item d-flex align-items-center' style={{width: 9 + '%'}}>{item.manager}</div>
                        <div className='emp-item d-flex align-items-center' style={{width: 9 + '%'}}>{item.branch}</div>
                        <div className='emp-item d-flex align-items-center' style={{width: 9 + '%'}}>{item.country}</div>
                        <div className='emp-item d-flex align-items-center' style={{width: 9 + '%'}}>{item.group}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SingleRangeEmployees;