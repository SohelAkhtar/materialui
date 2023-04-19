import React from 'react'
import { NavDropdown, Navbar } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Sldier from '../Header/Sldier';
import Imaging from '../Header/Imaging';
import SinImage from '../Header/SinImage';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import SinImage1 from '../Header/SinImage1';
import NavBa from './NavBa';
import { Link, Route, Routes } from 'react-router-dom';
import Product from './Product';
import About from './About';
import NB from './NB';
import { Button } from '@mui/material';


function Navbarr() {
  return (
    <div>
     {/* <NB/> */}
    <div style={{padding:'5%'}}>
    <Sldier/>
    </div>
    
    
    {/* <Imaging/> */}
    <div >
      <h1 style={{fontFamily:'sans-serif' , padding:'5%'}}>Amazon on <span style={{color:'yellowgreen'}}> selling </span></h1>
    </div>
   <div>
   <SinImage1/>
   </div>
   <div>
   <h1 style={{fontFamily:'sans-serif' , alignItems:'center' , justifyContent:'center' , display:'flex' , padding:'5%'}}>Why <span style={{color :'violet'}}>sell</span>  on <span style={{color:'orange'}}> Amazon?</span></h1>
   <NavBa/>
   </div>
   <footer>
   
   </footer>
    </div>
  )
}

export default Navbarr