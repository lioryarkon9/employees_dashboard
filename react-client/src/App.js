import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Header from './views/AppHeader';
import HeaderBanner from './views/HeaderBanner';
import MainTblView from './views/MainTblView';
import WithLogic from './AppLogic/WithLogic';


const App = props => {
    return (
        <div id='employees-app' className='d-flex'>
            <div id='sidebar-container'>
                todo: sidebar
            </div>
            <div id='main-container'>
                <Header/>
                <div id='body-container'>
                    <div id='header-banner-container'>
                        <HeaderBanner/>
                    </div>
                    <div id='main-table-container'>
                        <MainTblView
                            btns={props.btns}
                            currentFrom={props.currentFrom}
                            empsToDisplay={props.empsToDisplay}
                            changeEmpRange={props.changeEmpRange}
                            sortEmployeesByParam={props.sortEmployeesByParam}
                            filterEmployeesByParam={props.filterEmployeesByParam}
                            addEmployee={props.addEmployee}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WithLogic(App);