import React, {useState} from 'react'
import './Navbar.css'
import {FaHome, FaTelegramPlane} from 'react-icons/fa'
import {BsFillPersonFill, BsFillFileEarmarkSpreadsheetFill, BsImage} from 'react-icons/bs'
import { MdOutlineWork } from "react-icons/md";

function Navbar() {

    const [click,setClick] = useState(false);

    const handleclick = (e) => {
        setClick(!click);
    }

  return (
    <div className='navbar'>
        <div className='navbar-container'>
            <a className='logo-name' href='#'>Praveen</a>
            <div className='menu-icon' onClick={handleclick}>
                <i className={click ? "fa-solid fa-xmark" : "fa-solid fa-bars"} />
            </div>
            <ul className={ click ? 'nav-menu active' : 'nav-menu'} >
                <li className='nav-item'>
                    <FaHome  className='icon' />
                    <ul><span><a href='#' className='home'>Home</a></span></ul>
                </li>
                <li className='nav-item'>
                    <BsFillPersonFill className='icon' />
                    <ul><span><a href='#about' className='home'>About</a></span></ul>
                </li>
                <li className='nav-item'>
                    <MdOutlineWork className='icon' />
                    <ul><span><a href='#work' className='home'>Work</a></span></ul>
                </li>
                <li className='nav-item'>
                    < BsFillFileEarmarkSpreadsheetFill className='icon' />
                    <ul><span><a href='#skills' className='home'>Skills</a></span></ul>
                </li>
                <li className='nav-item'>
                    <BsImage className='icon' />
                    <ul><span><a href='#project' className='home'>Projects</a></span></ul>
                </li>
                <li className='nav-item'>
                    <FaTelegramPlane className='icon' />
                    <ul><span><a href='#contact' className='home'>Contact</a></span></ul>
                </li>
                {/* <div className='menu-icon-1' onClick={handleclick}>
                    <i className={click ? "fa-solid fa-xmark" : "fa-solid fa-xmark"} />
                 </div> */}
            </ul>

        </div>
    </div>
  )
}

export default Navbar;