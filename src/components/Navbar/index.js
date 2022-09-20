import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import './index.css'

const Navbar = () => {
  const settings = {
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
  }

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="logo-container">
          <h3>LOGO </h3>
        </div>
        <div className="logo-container">
          <h3>LOGO </h3>
        </div>
        <div className="logo-container">
          <h3>LOGO </h3>
        </div>
        <div className="logo-container">
          <h3>LOGO </h3>
        </div>
      </Slider>
    </div>
  )
}

export default Navbar

