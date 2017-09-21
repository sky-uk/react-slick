import React, { Component } from 'react'
import Slider from '../src/slider'
<<<<<<< HEAD
import { baseUrl } from './config'
=======
import {baseUrl} from './config'
>>>>>>> master

export default class SlickGoTo extends Component {
  constructor(props) {
    super(props)
<<<<<<< HEAD
    this.changeHandler = this.changeHandler.bind(this)
  }
  changeHandler(e) {
    this.refs.slider.slickGoTo(e.target.value)
=======
    this.state = {
      slickGoTo: 0
    }
    this.changeHandler = this.changeHandler.bind(this)
  }
  changeHandler(e) {
    this.setState({slickGoTo: e.target.value});
    this.changeHandler = this.changeHandler.bind(this)
>>>>>>> master
  }
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
<<<<<<< HEAD
      ...this.props
=======
>>>>>>> master
    };
    return (
      <div>
        <h2>Slick Go To</h2>
        <input onChange={this.changeHandler} defaultValue={0} type='range' min={0} max={3} />
        <Slider ref='slider' {...settings}>
          <div><img src={baseUrl + '/abstract01.jpg'} /></div>
          <div><img src={baseUrl + '/abstract02.jpg'} /></div>
          <div><img src={baseUrl + '/abstract03.jpg'} /></div>
          <div><img src={baseUrl + '/abstract04.jpg'} /></div>
        </Slider>
      </div>
    );
  }
<<<<<<< HEAD
}
=======
}
>>>>>>> master
