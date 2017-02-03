import React, { Component } from 'react'
import Slider from '../src/slider'
import {baseUrl} from './config'

export default class SlickGoTo extends Component {
  constructor(props) {
    super(props)
<<<<<<< HEAD
    this.state = {
      slickGoTo: 0
    }
    this.changeHandler = this.changeHandler.bind(this)
  }
  changeHandler(e) {
    this.setState({slickGoTo: e.target.value});
=======
    this.changeHandler = this.changeHandler.bind(this)
  }
  changeHandler(e) {
    this.refs.slider.slickGoTo(e.target.value)
>>>>>>> 4444fc8a93d40e238b6296b386b33dd7512ca456
  }
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
<<<<<<< HEAD
      slickGoTo: this.state.slickGoTo || 0
=======
>>>>>>> 4444fc8a93d40e238b6296b386b33dd7512ca456
    };
    return (
      <div>
        <h2>Slick Go To</h2>
<<<<<<< HEAD
        <input onChange={this.changeHandler} value={this.state.slickGoTo} type='range' min={0} max={3} />
        <Slider {...settings}>
=======
        <input onChange={this.changeHandler} defaultValue={0} type='range' min={0} max={3} />
        <Slider ref='slider' {...settings}>
>>>>>>> 4444fc8a93d40e238b6296b386b33dd7512ca456
          <div><img src={baseUrl + '/abstract01.jpg'} /></div>
          <div><img src={baseUrl + '/abstract02.jpg'} /></div>
          <div><img src={baseUrl + '/abstract03.jpg'} /></div>
          <div><img src={baseUrl + '/abstract04.jpg'} /></div>
        </Slider>
      </div>
    );
  }
}