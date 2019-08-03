import React from 'react';
import './SingleRangeEmployees.scss';
import TblHeader from './TblHeader';

const SingleRangeEmployees = props => {
    const EmpsToDispaly = props.empsToDisplay;
    const NumItemsToDispaly = EmpsToDispaly.length;
    const GetColorByIndex = i => {
        const OneBasedIndex = i + 1;
        return OneBasedIndex % 2 !== 0 ? '#fff' : '#f7fafe';
    }
    return (
        <div id='single-range-employees'>
            <TblHeader/>
            <div id='emp-records-container'>
                {EmpsToDispaly.map((item, i) => (
                    <div 
                        key={'_emp-' + item.id}
                        className='d-flex emp-record'
                        style={{height: NumItemsToDispaly + '%', backgroundColor: GetColorByIndex(i)}}
                    >
                        <div 
                            id='id-item' 
                            className='emp-item d-flex justify-content-center align-items-center' 
                            style={{width: 6 + '%'}}
                        >
                            {item.id}
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