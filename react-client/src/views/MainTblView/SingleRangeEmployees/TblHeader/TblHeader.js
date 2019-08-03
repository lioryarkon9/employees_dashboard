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
                filterEmployeesByParam={{key: ID, filterEmployeesByParam: props.filterEmployeesByParam}}
            />
            <ColumnTitle
                title='FIRST NAME'
                widthPercent={9}
                sortEmployeesByParam={() => props.sortEmployeesByParam(FIRST_NAME)}
                filterEmployeesByParam={{key: FIRST_NAME, filterEmployeesByParam: props.filterEmployeesByParam}}
            />
            <ColumnTitle
                title='LAST NAME'
                widthPercent={9}
                sortEmployeesByParam={() => props.sortEmployeesByParam(LAST_NAME)}
                filterEmployeesByParam={{key: LAST_NAME, filterEmployeesByParam: props.filterEmployeesByParam}}
            />
            <ColumnTitle
                title='EMAIL'
                widthPercent={13}
                sortEmployeesByParam={() => props.sortEmployeesByParam(EMAIL)}
                filterEmployeesByParam={{key: EMAIL, filterEmployeesByParam: props.filterEmployeesByParam}}
            />
            <ColumnTitle
                title='PHONE NUMBER'
                widthPercent={9}
                sortEmployeesByParam={() => props.sortEmployeesByParam(PHONE_NUMBER)}
                filterEmployeesByParam={{key: PHONE_NUMBER, filterEmployeesByParam: props.filterEmployeesByParam}}
            />
            <ColumnTitle
                title='DEPARTMENT'
                widthPercent={9}
                sortEmployeesByParam={() => props.sortEmployeesByParam(DEPARTMENT)}
                filterEmployeesByParam={{key: DEPARTMENT, filterEmployeesByParam: props.filterEmployeesByParam}}
            />
            <ColumnTitle
                title='ROLE'
                widthPercent={9}
                sortEmployeesByParam={() => props.sortEmployeesByParam(ROLE)}
                filterEmployeesByParam={{key: ROLE, filterEmployeesByParam: props.filterEmployeesByParam}}
            />
            <ColumnTitle
                title='MANAGER'
                widthPercent={9}
                sortEmployeesByParam={() => props.sortEmployeesByParam(MANAGER)}
                filterEmployeesByParam={{key: MANAGER, filterEmployeesByParam: props.filterEmployeesByParam}}
            />
            <ColumnTitle
                title='BRANCH'
                widthPercent={9}
                sortEmployeesByParam={() => props.sortEmployeesByParam(BRANCH)}
                filterEmployeesByParam={{key: BRANCH, filterEmployeesByParam: props.filterEmployeesByParam}}
            />
            <ColumnTitle
                title='COUNTRY'
                widthPercent={9}
                sortEmployeesByParam={() => props.sortEmployeesByParam(COUNTRY)}
                filterEmployeesByParam={{key: COUNTRY, filterEmployeesByParam: props.filterEmployeesByParam}}
            />
            <ColumnTitle
                title='GROUP'
                widthPercent={9}
                sortEmployeesByParam={() => props.sortEmployeesByParam(GROUP)}
                filterEmployeesByParam={{key: GROUP, filterEmployeesByParam: props.filterEmployeesByParam}}
            />
        </div>
    );
}

export default TblHeader;