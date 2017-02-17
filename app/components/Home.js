import React, { Component } from 'react';
import { Link } from 'react-router';
import MainContainer from './MainContainer';

const Home  = (props) =>(
  <MainContainer>
    <h1>Github Battle</h1>
    <p className="lead">Are you worthy of Github?</p>
    <Link to='/playerOne'>
      <button type="button" className="btn btn-lg btn-success">
        Get Started
      </button>
    </Link>
  </MainContainer>
);

export default Home;