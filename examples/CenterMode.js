import React, { Component } from 'react'
import Slider from '../src/slider'

export default class CenterMode extends Component {
  render() {
    const settings = {
      className: 'center',
      centerMode: true,
      infinite: true,
      centerPadding: '60px',
      slidesToShow: 3,
<<<<<<< HEAD
      speed: 500,
=======
      speed: 500
>>>>>>> 4444fc8a93d40e238b6296b386b33dd7512ca456
    };
    return (
      <div>
        <h2>Center Mode</h2>
        <Slider {...settings}>
          <div><h3>1</h3></div>
          <div><h3>2</h3></div>
          <div><h3>3</h3></div>
          <div><h3>4</h3></div>
          <div><h3>5</h3></div>
          <div><h3>6</h3></div>
          <div><h3>7</h3></div>
          <div><h3>8</h3></div>
          <div><h3>9</h3></div>
        </Slider>
      </div>
    );
  }
<<<<<<< HEAD
}
=======
}
>>>>>>> 4444fc8a93d40e238b6296b386b33dd7512ca456
