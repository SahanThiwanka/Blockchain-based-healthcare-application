import React, { Component } from 'react';
import { Menu, Icon, Dropdown } from 'semantic-ui-react';
import record from '../ethereum/record';
import web3 from '../ethereum/web3';
import { Link } from '../routes';
import { Router } from '../routes';


export default class MenuBar extends Component {

  onClickedPatient = async event => {
    event.preventDefault();
    const accounts = await web3.eth.getAccounts();
    Router.pushRoute(`/record/${accounts[0]}`);
  }

  onClickedDoctor = async event => {
    event.preventDefault();
    const accounts = await web3.eth.getAccounts();
    Router.pushRoute(`/doctor/${accounts[0]}`);
  }

  render() {
    return (
      <Menu size='large' inverted style={{ backgroundColor: 'transparent' , color: 'blue'}}>
          <Link route='/'>
              <a style={{color:'rgb(33, 133, 208)'}}className='item'>Home</a>
          </Link>

          <Menu.Menu position='right'>
            <Link route='/dashboard'>
                <a style={{color:'rgb(23, 154, 248)'}}className='item'>Dashboard</a>
            </Link>

            <Link route='/list'>
                <a style={{color:'rgb(23, 105, 251)'}}className='item'>Records List</a>
            </Link>

            <Dropdown style={{color:'rgb(26, 88, 249)'}}item text='Doctor'>
              <Dropdown.Menu>
                <Dropdown.Item>
                  <Link route='/'>
                    <a style={{color:'black'}} onClick={this.onClickedDoctor}>View Profile</a>
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link route='/edit-doctor'>
                    <a style={{color:'black'}}>Edit Profile</a>
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link route='/make-appointment'>
                    <a style={{color:'black'}}>Make Medical Record</a>
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link route='/edit-appointment'>
                    <a style={{color:'black'}}>Update Medical Record</a>
                  </Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            
            <Dropdown style={{color:'rgb(90, 94, 255)'}}item text='Patient'>
              <Dropdown.Menu>
                <Dropdown.Item>
                  <Link route='/'>
                    <a style={{color:'black'}} onClick={this.onClickedPatient}>View Profile</a>
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link route='/edit-patient'>
                    <a style={{color:'black'}}>Edit Profile</a>
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link route='/approve-doctor'>
                    <a style={{color:'black'}}>Allow Access</a>
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link route='/revoke-doctor'>
                    <a style={{color:'black'}}>Revoke Access</a>
                  </Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown style={{color:'rgb(152, 101, 247)'}}item text='Register'>
              <Dropdown.Menu>
                <Dropdown.Item>
                  <Link route='/register-patient'>
                    <a style={{color:'black'}}>Patient</a>
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link route='/register-doctor'>
                    <a style={{color:'black'}}>Doctor</a>
                  </Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

          </Menu.Menu>
      </Menu>  
    );
  }
}