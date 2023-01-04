import { faSmileWink, faTachometerAlt,faUserPlus,faBook,faFileCircleMinus,faPeopleLine, faBookOpen} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

function SideBar() {
  
  return (
  <div>
       <ul class="navbar-nav bg-gradient-info sidebar sidebar-dark accordion" id="accordionSidebar">


<a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
    <div class="sidebar-brand-icon rotate-n-15">
        <FontAwesomeIcon  icon={faSmileWink } size="2x"/>
    </div>
    <div class="sidebar-brand-text mx-3">LMS</div>
</a>

<hr class="sidebar-divider my-0"></hr>


<li class="nav-item ">
   <Link class="nav-link" to="/portal/dashboard">
    <FontAwesomeIcon icon={faTachometerAlt} className="fa-fw"/>
       
        <span>Dashboard</span></Link>
</li>





<hr class="sidebar-divider"></hr>

<div class="sidebar-heading">
    Manage Books
</div>


<li class="nav-item">
    <Link class="nav-link" to="/portal/add">
    <FontAwesomeIcon icon={faUserPlus} className="fa-fw"/>
        <span>Add Member</span></Link>
</li>



            <li class="nav-item">
    <Link class="nav-link" to="/addbook">
    <FontAwesomeIcon icon={faBook} className="fa-fw"/>
        <span>Add Books</span></Link>
</li>

<li class="nav-item">
    <Link class="nav-link" to="/portal/overdue">
    <FontAwesomeIcon icon={faFileCircleMinus} className="fa-fw"/>
        <span> OverDue Books</span></Link>
</li>

<hr class="sidebar-divider"></hr>

<div class="sidebar-heading">
     About
</div>

<li class="nav-item">
  <Link class="nav-link"  to="/portal/books">
  <FontAwesomeIcon icon={faBookOpen} className="fa-fw"/>
        <span> View Books</span></Link>
</li>


<li class="nav-item">
  <Link class="nav-link"  to="/portal/member">
  <FontAwesomeIcon icon={faPeopleLine} className="fa-fw"/>
        <span> View Members</span></Link>
</li>


</ul>
</div>
   
  )
}

export default SideBar


