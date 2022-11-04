import './App.css';
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import Spinner from './spinner';
//import LoadingBar from 'react-top-loading-bar'

export default class App  extends Component {
  //apiKey=process.env.REACT_APP_NEWS_API

  // state={
  //   progress: 0
  // }
  // setProgress(progress){
  //   this.setState({progress:progress})
  // }

  render() {
    return (
      <div>
        <Navbar/>
        {/* <LoadingBar
        color='#f11946'
        progress={this.state.progress}
      /> */}
        <News setProgress={this.setProgress} apiKey={this.apiKey} country="in" pageSize={5} category="general"/>
        <Spinner/>
      </div>
    )
  }
}
