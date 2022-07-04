import React from 'react';
import './sidebar.scss';
import DashboardIcon from "@mui/icons-material/Dashboard";
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import GroupIcon from '@mui/icons-material/Group';
import GroupsIcon from '@mui/icons-material/Groups';
import SavingsIcon from '@mui/icons-material/Savings';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import { Link } from "react-router-dom";

const sidebar = () => {
  return (
    <div className='sidebar'>
         <div className="center">
            <div className="top">
              <BusinessCenterIcon className="Caseicon" />
             <span className="logo">Swicth Organization</span>
             <KeyboardArrowDownIcon className='KeyIcon'/>
            </div>
            <div className='dashboard'>
                 <Link to="/home" style={{ textDecoration: "none" }}>
                    <DashboardIcon className="icon" />
                  <span>Dashboard</span>
                 </Link>
                
            </div>
            <ul>
             <p className="title">CUSTOMERS</p>
                   <Link to="/users" style={{ textDecoration: "none" }}>
                      <li>
                        <GroupIcon className="icon" />
                        <span>Users</span>
                     </li>
                   </Link>
              
                <li>
                    <GroupsIcon className="icon" />
                    <span>Guarantors</span>
                </li>
                <li>
                    <DashboardIcon className="icon" />
                    <span>Loans</span>
                </li>
                <li>
                    <DashboardIcon className="icon" />
                    <span>Decision Models</span>
                </li>
                <li>
                    <SavingsIcon className="icon" />
                    <span>Savings</span>
                </li>
                <li>
                    <DashboardIcon className="icon" />
                    <span>Loan Requests</span>
                </li>
                <li>
                    <DashboardIcon className="icon" />
                    <span>Whitelist</span>
                </li>
                <li>
                    <DashboardIcon className="icon" />
                    <span>Karma</span>
                </li>

                <p className="title">BUSINESSES</p>
                <li>
                    <BusinessCenterIcon className="icon" />
                    <span>Organization</span>
                </li>
                <li>
                    <DashboardIcon className="icon" />
                    <span>Loan Products</span>
                </li>
                <li>
                    <AccountBalanceIcon  className="icon" />
                    <span>Saving Products</span>
                </li>
                <li>
                    <DashboardIcon className="icon" />
                    <span>Fees and Charges</span>
                </li>
                <li>
                    <DashboardIcon className="icon" />
                    <span>Transactions</span>
                </li>
                <li>
                    <DashboardIcon className="icon" />
                    <span>Services</span>
                </li>
                <li>
                    <DashboardIcon className="icon" />
                    <span>Service Account</span>
                </li>
                <li>
                    <DashboardIcon className="icon" />
                    <span>Settlements</span>
                </li>
                <li>
                    <DashboardIcon className="icon" />
                    <span>Reports</span>
                </li>

                <p className="title">SETTINGS</p>
                <li>
                    <DashboardIcon className="icon" />
                    <span>Perferences</span>
                </li>
                <li>
                    <DashboardIcon className="icon" />
                    <span>Fees and Pricing</span>
                </li>
                <li>
                    <DashboardIcon className="icon" />
                    <span>Audit Logs</span>
                </li>
                <li>
                    <DashboardIcon className="icon" />
                    <span>Systems Messages</span>
                </li>
            </ul>
         </div>
    </div>
  )
}

export default sidebar;