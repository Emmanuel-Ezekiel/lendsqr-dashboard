import "./list.scss"
import Sidebar from "../../component/sidebar/sidebar"
import Navbar from "../../component/navbar/navbar"
import Widget from '../../component/widget/widget'
import axios from 'axios';
import Table from "../../component/table/table";

const List = () => {
  return (
    <div className="home">
      <Sidebar/>
      <div className="homeContainer">
        <Navbar/>
        <h2 className="user">Users</h2>
        <div className="widgets">
          <Widget type="user" />
          <Widget type="active users" />
          <Widget type="users with loans" />
          <Widget type="users with savings" />
        </div>
        <div className="listContainer">
           <Table />
        </div>
      </div>
    </div>
  )
}

export default List