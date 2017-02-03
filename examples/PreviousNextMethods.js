import React, { Component } from 'react'
import Slider from '../src/slider'

export default class PreviousNextMethods extends Component {
  constructor(props) {
    super(props)
    this.next = this.next.bind(this)
    this.previous = this.previous.bind(this)
  }
  next() {
<<<<<<< HEAD
    this.refs.slider.slickNext()
  }
  previous() {
    this.refs.slider.slickPrev()
=======
    this.slider.slickNext()
  }
  previous() {
    this.slider.slickPrev()
>>>>>>> 4444fc8a93d40e238b6296b386b33dd7512ca456
  }
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div>
        <h2>Previous and Next methods</h2>
<<<<<<< HEAD
        <Slider ref='slider' {...settings}>
=======
        <Slider ref={c => this.slider = c } {...settings}>
>>>>>>> 4444fc8a93d40e238b6296b386b33dd7512ca456
          <div key={1}><h3>1</h3></div>
          <div key={2}><h3>2</h3></div>
          <div key={3}><h3>3</h3></div>
          <div key={4}><h3>4</h3></div>
          <div key={5}><h3>5</h3></div>
          <div key={6}><h3>6</h3></div>
        </Slider>
        <div style={{textAlign: 'center'}}>
          <button className='button' onClick={this.previous}>Previous</button>
          <button className='button' onClick={this.next}>Next</button>
        </div>
      </div>
    );
  }
}
