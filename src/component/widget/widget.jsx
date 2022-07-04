import React from 'react';
import './widget.scss'
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import GroupsIcon from '@mui/icons-material/Groups';
import GroupIcon from '@mui/icons-material/Group';

const widget = ({type}) => {

    let data;

  //temporary
 

  switch (type) {
    case "user":
      data = {
        title: "USERS",
        anount: 2453,
        icon: (
          <GroupIcon
            className="icon"
            style={{
           
              backgroundColor: "#DF18FF",
               width: "40px",
              height: "40px",
              borderRadius: "50%"
            }}
          />
        ),
      };
      break;
    case "active users":
      data = {
        title: "ACTIVE USERS",
        amount: "2453",
        icon: (
          <ShoppingCartOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "#5718FF",
               width: "40px",
              height: "40px",
              borderRadius: "50%"
            }}
          />
        ),
      };
      break;
    case "users with loans":
      data = {
        title: "USERS WITH LOANS",
        amount:  12453,
        icon: (
          <MonetizationOnOutlinedIcon
            className="icon"
            style={{ backgroundColor: "#F55F44", width: "40px",
              height: "40px", borderRadius: "50%"}}
          />
        ),
      };
      break;
    case "users with savings":
      data = {
        title: "USERS WITH SAVINGS",
        amount:  102453,
        icon: (
          <AccountBalanceWalletOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "#FF3366",
              color: "purple",
              width: "40px",
              height: "40px",
              borderRadius: "50%"
            }}
          />
        ),
      };
      break;
    default:
      break;
  }
  return (
    <div className='widget'>
      <div>{data.icon}</div>
      <span className="title">{data.title}</span>
      <div  className="amount">{data.amount}</div>
    </div>
  )
}

export default widget