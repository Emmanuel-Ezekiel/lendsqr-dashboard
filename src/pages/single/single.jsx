import React,{ useState, useEffect } from 'react'
import Sidebar from "../../component/sidebar/sidebar";
import Navbar from "../../component/navbar/navbar";
import Back from "../../assets/Vector (1).png";
import Logo from "../../assets/Vector (2).png";
import { useLocation } from "react-router-dom";
import axios from 'axios';
import { Link } from "react-router-dom";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import StarIcon from '@mui/icons-material/Star';
import StarOutlineIcon from '@mui/icons-material/StarOutline';

import './single.scss';


const Single = () => {
    const location = useLocation();
    const { id } = location.state;

    const [ data, setData ] = useState([])
    const getData = async () => {
        try {
        const response = await axios.get(
            `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${id}`
        );
        setData([response.data]);
        } catch (err) {
        console.log(err)
        } 
    };

    useEffect(() => {
        getData();
    }, [])

   
  return (
    <div className="home">
      <Sidebar/>
      <div className="homeContainer">
        <Navbar/>

        
        <div className='top'>
             <Link to="/users" style={{ textDecoration: "none" }}>
                <div className="Btn">
                    <img src={Back} alt="" className='btnIcon'/> 
                    <span className="back">Back to users</span>
                </div>
             </Link>
            <div className="users">
                    <h2 className="user">User Details</h2>
                    <div className="Button">
                        <span className="redButton">BLACKLIST USER</span>
                        <span className="blueButton">ACTIVATE USER</span>
                    </div>
             </div>
              
        </div>
        <div className="userDetails">
            {data?.map((rows) => (
                <div className="detail">
                    <div className="image">
                      <img src={rows.profile.avatar} alt="" className='btnIcon'/> 
                    </div>
                    <div className="name">
                        <span>{rows.profile.firstName}</span>
                        <span className="name2">{rows.profile.bvn}</span>
                    </div>
                    <div className="rate">
                        <span>User tier</span>
                        <div className="star">
                                <StarIcon className="star1"/>
                                <StarOutlineIcon className="star2" />
                                <StarOutlineIcon className="star2"/>
                        </div>
                    </div>
                    <div className="bank">
                       <span><span>&#8358;</span>{rows.accountBalance}</span>
                        <span className="bank2">{rows.accountNumber}/Providus Bank</span>
                    </div>
                </div>
            ))}

            <div className="rows">
                <div className="general">General Details</div>
                <div className="general">Documents</div>
                <div className="general">Bank Details</div>
                <div className="general">Loans</div>
                <div className="general">Savings</div>
                <div className="general">App and System</div>
            </div>
        </div>
        <div className="information">
            <div className='PersonalInfo'>
                <div className="personal">Personal Information</div>
                {data?.map((detail) =>  ( 
                <div className="PersonalDetails" key={detail.id}>
                    <div className="full">
                        <span>FULLNAME</span>
                        <span className="full1">{detail.profile.firstName} {detail.profile.lastName}</span>
                    </div>
                    <div className="full">
                        <span>PHONE NUMBER</span>
                        <span className="full1">{detail.profile.phoneNumber}</span>
                    </div>
                    <div className="full">
                        <span>EMAIL_ADDERESS</span>
                        <span className="full1">{detail.email}</span>
                    </div>
                    <div className="full">
                        <span>BVN</span>
                        <span className="full1">{detail.profile.bvn} </span>
                    </div>
                    <div className="full">
                        <span>GENDER</span>
                        <span className="full1">{detail.profile.gender}</span>
                    </div>
                </div>
                ))}
               
                <div className="personal"></div>
                {data?.map((detail) =>  ( 
                <div className="PersonalDetails2" key={detail.id}>
                    <div className="full">
                        <span>MARTIAL STATUS</span>
                        <span className="full1">{detail.profile.firstName} {detail.profile.lastName}</span>
                    </div>
                    <div className="full">
                        <span>CHILDEREN</span>
                        <span className="full1">{detail.profile.phoneNumber}</span>
                    </div>
                    <div className="full">
                        <span>TYPE OF RESIDENCE</span>
                        <span className="full1">{detail.email}</span>
                    </div>
                </div>
                ))}

                <hr/>
            </div>
            <div className='PersonalInfo'>
                <div className="personal">Eduction and Employment</div>
                {data?.map((detail) =>  ( 
                <div className="PersonalDetails" key={detail.id}>
                    <div className="full">
                        <span>LEVEL OF EDUCATION</span>
                        <span className="full1">{detail.education.level}</span>
                    </div>
                    <div className="full">
                        <span>EMPLOYMENT STATUS</span>
                        <span className="full1">{detail.education.employmentStatus}</span>
                    </div>
                    <div className="full">
                        <span>SECTOR EMPLOYMENT</span>
                        <span className="full1">{detail.education.sector}</span>
                    </div>
                    <div className="full">
                        <span>DURATION OF EMPLOYMENT</span>
                        <span className="full1">{detail.education.duration} </span>
                    </div>
                </div>
                ))}
               
                <div className="personal"></div>
                {data?.map((detail) =>  ( 
                <div className="PersonalDetails4" key={detail.id}>
                    <div className="full">
                        <span>OFFICE EMAIL</span>
                        <span className="full1">{detail.education.officeEmail}</span>
                    </div>
                    <div className="full">
                        <span>MONTHLY INCOME</span>
                        <span className="full1"><span>&#8358;</span>{detail.education.monthlyIncome[0]} - <span>&#8358;</span>{detail.education.monthlyIncome[1]}</span>
                    </div>
                    <div className="full">
                        <span>LOAN REPAYMENT</span>
                        <span className="full1">{detail.education.loanRepayment}</span>
                    </div>
                </div>
                ))}
                 <hr/>
            </div>
            <div className='PersonalInfo'>
                <div className="personal">Socials</div>
                {data?.map((detail) =>  ( 
                <div className="PersonalDetails3" key={detail.id}>
                    <div className="full">
                        <span>TWITTER</span>
                        <span className="full1">{detail.socials.twitter}</span>
                    </div>
                    <div className="full">
                        <span>FACEBOOK</span>
                        <span className="full1">{detail.socials.facebook}</span>
                    </div>
                    <div className="full">
                        <span>INSTAGRAM</span>
                        <span className="full1">{detail.socials.instagram}</span>
                    </div>
                </div>
                ))}
               
             <hr/>
            </div>
            <div className='PersonalInfo'>
                <div className="personal">Guarantor</div>
                {data?.map((detail) =>  ( 
                <div className="PersonalDetails" key={detail.id}>
                    <div className="full">
                        <span>FULLNAME</span>
                        <span className="full1">{detail.guarantor.firstName} {detail.guarantor.lastName}</span>
                    </div>
                    <div className="full">
                        <span>PHONE NUMBER</span>
                        <span className="full1">{detail.guarantor.phoneNumber}</span>
                    </div>
                    <div className="full">
                        <span>EMAIL_ADDERESS</span>
                        <span className="full1">{detail.email}</span>
                    </div>
                    <div className="full">
                        <span>RELATIONSHIP</span>
                        <span className="full1">Sister</span>
                    </div>
                </div>
                ))}
                <hr/>
            </div>
           
            <div className='PersonalInfo'>
                <div className="personal"></div>
                {data?.map((detail) =>  ( 
                <div className="PersonalDetails" key={detail.id}>
                    <div className="full">
                        <span>FULLNAME</span>
                        <span className="full1">{detail.guarantor.firstName} {detail.guarantor.lastName}</span>
                    </div>
                    <div className="full">
                        <span>PHONE NUMBER</span>
                        <span className="full1">{detail.guarantor.phoneNumber}</span>
                    </div>
                    <div className="full">
                        <span>EMAIL ADDERESS</span>
                        <span className="full1">{detail.email}</span>
                    </div>
                    <div className="full">
                        <span>RELATIONSHIP</span>
                        <span className="full1">Sister</span>
                    </div>
                </div>
                ))}
                <hr/>
            </div>
           
        </div>
      </div>
    </div>
  )
}

export default Single;