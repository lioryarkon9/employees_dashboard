import React from 'react';
import './NewEmpModal.scss';
import {Button} from 'react-bootstrap';
import OuterClickHandler from '../../../AppLogic/OuterClickHandler';

class NewEmpModal extends OuterClickHandler {
    constructor (props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            department: '',
            role: '',
            manager: '',
            branch: '',
            country: '',
            group: ''
        }
    }
    handleClickOutside = event => {
        //method to override
        if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
            this.props.toggleNewEmpModal();
        }
    }
    addEmployee = e => {
        // todo: validate
        const NewEmp = this.state;
        if (NewEmp.firstName.length > 1 && NewEmp.lastName.length > 1) {
            // very basic validation
            this.props.addEmployee(this.state);
            this.props.toggleNewEmpModal();
        } else {
            window.alert('please type 2 or more letters for First and Last names');
        }
    }
    render () {
        return (
            <div ref={this.setWrapperRef}>
                <div id='new-emp-modal'>
                    <div className='d-flex justify-content-around'>
                        <div className='flex-fill'>
                            <div className='form-group pad-side-2px'>
                                <label>First Name</label>
                                <input
                                    value={this.state.firstName}
                                    onChange={e => this.setState({firstName: e.currentTarget.value})} 
                                    className="form-control" 
                                    placeholder="Israel"
                                />
                            </div>
                        </div>
                        <div className='flex-fill'>
                            <div className='form-group pad-side-2px'>
                                <label>Last Name</label>
                                <input
                                    value={this.state.lastName}
                                    onChange={e => this.setState({lastName: e.currentTarget.value})} 
                                    className="form-control" 
                                    placeholder="Israeli"
                                />
                            </div>
                        </div>
                    </div>
                    <div className='d-flex justify-content-around'>
                        <div className='flex-fill'>
                            <div className='form-group pad-side-2px'>
                                <label>Email</label>
                                <input
                                    value={this.state.email}
                                    onChange={e => this.setState({email: e.currentTarget.value})} 
                                    className="form-control" 
                                    placeholder="a@a.com"
                                />
                            </div>
                        </div>
                        <div className='flex-fill'>
                            <div className='form-group pad-side-2px'>
                                <label>Phone Number</label>
                                <input
                                    value={this.state.phoneNumber}
                                    onChange={e => this.setState({phoneNumber: e.currentTarget.value})} 
                                    className="form-control" 
                                    placeholder="050-8980708"
                                />
                            </div>
                        </div>
                    </div>
                    <div className='d-flex justify-content-around'>
                        <div className='flex-fill'>
                            <div className='form-group pad-side-2px'>
                                <label>Department</label>
                                <input
                                    value={this.state.department}
                                    onChange={e => this.setState({department: e.currentTarget.value})} 
                                    className="form-control" 
                                    placeholder=""
                                />
                            </div>
                        </div>
                        <div className='flex-fill'>
                            <div className='form-group pad-side-2px'>
                                <label>Role</label>
                                <input
                                    value={this.state.role}
                                    onChange={e => this.setState({role: e.currentTarget.value})} 
                                    className="form-control" 
                                    placeholder=""
                                />
                            </div>
                        </div>
                    </div>
                    <div className='d-flex justify-content-around'>
                        <div className='flex-fill'>
                            <div className='form-group pad-side-2px'>
                                <label>Manager</label>
                                <input
                                    value={this.state.manager}
                                    onChange={e => this.setState({manager: e.currentTarget.value})} 
                                    className="form-control" 
                                    placeholder=""
                                />
                            </div>
                        </div>
                        <div className='flex-fill'>
                            <div className='form-group pad-side-2px'>
                                <label>Branch</label>
                                <input
                                    value={this.state.branch}
                                    onChange={e => this.setState({branch: e.currentTarget.value})} 
                                    className="form-control" 
                                    placeholder=""
                                />
                            </div>
                        </div>
                    </div>
                    <div className='d-flex justify-content-around'>
                        <div className='flex-fill'>
                            <div className='form-group pad-side-2px'>
                                <label>Country</label>
                                <input
                                    value={this.state.country}
                                    onChange={e => this.setState({country: e.currentTarget.value})} 
                                    className="form-control" 
                                    placeholder=""
                                />
                            </div>
                        </div>
                        <div className='flex-fill'>
                            <div className='form-group pad-side-2px'>
                                <label>Group</label>
                                <input
                                    value={this.state.group}
                                    onChange={e => this.setState({group: e.currentTarget.value})} 
                                    className="form-control" 
                                    placeholder=""
                                />
                            </div>
                        </div>
                    </div>

                    <Button
                        variant="success"
                        size="lg" 
                        block
                        onClick={this.addEmployee}
                    >
                        Add
                    </Button>
                </div>
            </div>

            
        );
    }
}

export default NewEmpModal;