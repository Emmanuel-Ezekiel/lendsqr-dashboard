import React, { useState, useEffect } from 'react';
import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from 'axios';
import { useNavigate, Link } from "react-router-dom";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';


const List = () => {

    let navigate = useNavigate();
  const handleRoute = (id, name) => {
    navigate(`/users/user=${id}`,{ state: {id: id}});
  };

const [ data, setData ] = useState([]);
const [currentPage, setCurrentPage] = useState(1);

  const getData = async (pageNumber) => {
    try {
      const response = await axios.get(
        `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users?page=${pageNumber}`
      );
      setData(response.data);
    } catch (err) {
      console.log(err)
    } 
  };

  useEffect(() => {
     getData(currentPage);
  }, [currentPage])

  const handlePageChange = (e) => {
      setCurrentPage(e.target.innerText);
     };

  console.log(data);

  return (
    <>
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">ORGANIZATION</TableCell>
            <TableCell className="tableCell">USERNAME</TableCell>
            <TableCell className="tableCell">EMAIL</TableCell>
            <TableCell className="tableCell">PHONE NUMBER</TableCell>
            <TableCell className="tableCell">DATE JOINED</TableCell>
            <TableCell className="tableCell">STATUS</TableCell>
            <TableCell className="tableCell"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.filter((n, i) => i < 8).map((row) => (
       
              <TableRow key={row.id} onClick={() => {
                        handleRoute(row.id, row.userName);
                      }}>
              <TableCell className="tableCell">{row.orgName}</TableCell>
              <TableCell className="tableCell">                 
                  {row.userName}
              </TableCell>
              <TableCell className="tableCell">{row.email}</TableCell>
              <TableCell className="tableCell">{row.phoneNumber}</TableCell>
              <TableCell className="tableCell">{row.phoneNumber}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
              <TableCell className="tableCell">
              </TableCell>
             </TableRow>
            
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <div 
                style={{
                     display: 'flex',
                     flex: 1,
                     zIndex: 1,
                     justifyContent: 'flex-end',
                     position: 'relative',
                    cursor: 'pointer',
                    backgroundColor: '#f5f5f5',
                }}>
                    <Stack spacing={2}>
                    <Pagination 
                    count={6} 
                    onChange={(e) => handlePageChange(e)}
                    page={currentPage}
                    shape="rounded" 
                    hidePrevButton 
                    hideNextButton/>
                    </Stack>
                </div>
                </>
  );
};

export default List;
