import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Header from './Header';
import './css/main.css';
import './css/fonts.css';
// import './css/login.css';
// import Actions from './Redux/Actions/Actions';
// import { push } from 'react-router-redux';
// import axios from 'axios';

class App extends Component {

  componentDidMount () {
  
  }

  render() {
    return (
      <div className="Application">
        <Header/>
        { this.props.children }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  //console.log('state is ',state);
  return { 
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));