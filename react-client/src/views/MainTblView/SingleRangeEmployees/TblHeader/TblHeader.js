import React from 'react';
import ColumnTitle from '../../../../components/ColumnTitle';
import './TblHeader.scss';

const TblHeader = props => {
    return (
        <div id='emp-tbl-header' className='d-flex'>
            <ColumnTitle
                title='ID'
                widthPercent={6}
            />
            <ColumnTitle
                title='FIRST NAME'
                widthPercent={9}
            />
            <ColumnTitle
                title='LAST NAME'
                widthPercent={9}
            />
            <ColumnTitle
                title='EMAIL'
                widthPercent={13}
            />
            <ColumnTitle
                title='PHONE NUMBER'
                widthPercent={9}
            />
            <ColumnTitle
                title='DEPARTMENT'
                widthPercent={9}
            />
            <ColumnTitle
                title='ROLE'
                widthPercent={9}
            />
            <ColumnTitle
                title='MANAGER'
                widthPercent={9}
            />
            <ColumnTitle
                title='BRANCH'
                widthPercent={9}
            />
            <ColumnTitle
                title='COUNTRY'
                widthPercent={9}
            />
            <ColumnTitle
                title='GROUP'
                widthPercent={9}
            />
        </div>
    );
}

export default TblHeader;