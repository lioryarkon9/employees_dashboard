import React from 'react';
import ColumnTitle from '../../../../components/ColumnTitle';
import './TblHeader.scss';
import {
    ID, 
    FIRST_NAME, 
    LAST_NAME, 
    EMAIL, 
    PHONE_NUMBER, 
    DEPARTMENT, 
    ROLE,
    MANAGER,
    BRANCH,
    COUNTRY,
    GROUP
} from '../../../../consts';

const TblHeader = props => {
    return (
        <div id='emp-tbl-header' className='d-flex'>
            <ColumnTitle
                title='ID'
                widthPercent={6}
                sortEmployeesByParam={() => props.sortEmployeesByParam(ID)}
            />
            <ColumnTitle
                title='FIRST NAME'
                widthPercent={9}
                sortEmployeesByParam={() => props.sortEmployeesByParam(FIRST_NAME)}
            />
            <ColumnTitle
                title='LAST NAME'
                widthPercent={9}
                sortEmployeesByParam={() => props.sortEmployeesByParam(LAST_NAME)}
            />
            <ColumnTitle
                title='EMAIL'
                widthPercent={13}
                sortEmployeesByParam={() => props.sortEmployeesByParam(EMAIL)}
            />
            <ColumnTitle
                title='PHONE NUMBER'
                widthPercent={9}
                sortEmployeesByParam={() => props.sortEmployeesByParam(PHONE_NUMBER)}
            />
            <ColumnTitle
                title='DEPARTMENT'
                widthPercent={9}
                sortEmployeesByParam={() => props.sortEmployeesByParam(DEPARTMENT)}
            />
            <ColumnTitle
                title='ROLE'
                widthPercent={9}
                sortEmployeesByParam={() => props.sortEmployeesByParam(ROLE)}
            />
            <ColumnTitle
                title='MANAGER'
                widthPercent={9}
                sortEmployeesByParam={() => props.sortEmployeesByParam(MANAGER)}
            />
            <ColumnTitle
                title='BRANCH'
                widthPercent={9}
                sortEmployeesByParam={() => props.sortEmployeesByParam(BRANCH)}
            />
            <ColumnTitle
                title='COUNTRY'
                widthPercent={9}
                sortEmployeesByParam={() => props.sortEmployeesByParam(COUNTRY)}
            />
            <ColumnTitle
                title='GROUP'
                widthPercent={9}
                sortEmployeesByParam={() => props.sortEmployeesByParam(GROUP)}
            />
        </div>
    );
}

export default TblHeader;