// Write your JS code here
import {Component} from 'react'
import ReactPlayer from 'react-player'
import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'

import {
  BsFacebook,
  BsTwitter,
  BsLinkedin,
  BsSnapchat,
  BsInstagram,
  BsWhatsapp,
  BsGlobe,
} from 'react-icons/bs'

import {AiOutlineCloseCircle} from 'react-icons/ai'

import {ImStarFull} from 'react-icons/im'

import {FiPhoneCall} from 'react-icons/fi'
import {MdOutlineEmail} from 'react-icons/md'

import Navbar from '../Navbar'
import './index.css'

class Home extends Component {
  state = {blogsList: []}

  componentDidMount() {
    this.getBlogsDataList()
  }

  getBlogsDataList = async () => {
    const response = await fetch('https://tonmetri-lorem-ipsum.herokuapp.com/')
    const data = await response.json()
    console.log(data)

    const formattedData = {
      firsName: data.firsName,
      lastName: data.lastName,
      occupation: data.occupation,
      ocupation: data.ocupation,
      company: data.company,
      logoImg: data.logoImg,
      profileImg: data.profileImg,
      bannerImg: data.bannerImg,
      callImg: data.callImg,
      reviewsImg: data.reviewsImg,
      fourCosmeticsImg: data.fourCosmeticsImg,
      waterProductsImg: data.waterProductsImg,
      skinCareBoxImg: data.skinCareBoxImg,
      glassesImg: data.glassesImg,
      skinCareGlassImg: data.skinCareGlassImg,
      totalReviews: data.totalReviews,
    }

    this.setState({blogsList: formattedData})
  }

  render() {
    const {blogsList} = this.state
    const {
      bannerImg,
      firsName,
      lastName,
      glassesImg,
      fourCosmeticsImg,
      profileImg,
      totalReviews,
      skinCareBoxImg,
      skinCareGlassImg,
      callImg,
      reviewsImg,
      company,
      occupation,
      ocupation,
      waterProductsImg,
      logoImg,
    } = blogsList

    return (
      <div className="main-container">
        <img src={bannerImg} alt="banner" className="banner-img" />
        <div className="profile-container">
          <img src={profileImg} alt="profile" className="profile-img" />
          <div className="details-container">
            <div>
              <h1 className="heading">
                {firsName} {lastName}
              </h1>
              <p className="paragraph">
                {occupation}/{ocupation}
              </p>
              <h1 className="heading">{company}</h1>
            </div>
            <div>
              <BsFacebook className="react-icons" />
              <BsTwitter className="react-icons" />
              <BsLinkedin className="react-icons" />
              <BsSnapchat className="react-icons" />
              <BsInstagram className="react-icons" />
            </div>
          </div>
        </div>
        <div className="popup-container">
          <Popup
            modal
            trigger={
              <button type="button" className="trigger-button">
                SHARE
              </button>
            }
          >
            {close => (
              <>
                <form className="pop-container">
                  <h1 className="heading akhil">
                    Sharing Akhil Chakravarthy's Toko card
                  </h1>

                  <div>
                    <input
                      placeholder="Full Name"
                      type="text"
                      className="paragraph heading-input"
                    />
                  </div>
                  <div className="radio-container">
                    <div>
                      <input type="radio" id="Whatsapp" className="paragraph" />
                      <label htmlFor="Whatsapp" className="radio-input">
                        {' '}
                        WhatsApp
                      </label>
                    </div>
                    <div>
                      <input type="radio" id="SMS" />
                      <label htmlFor="SMS" className="paragraph radio-input">
                        SMS
                      </label>
                    </div>
                    <div>
                      <input type="radio" id="email" />
                      <label htmlFor="email" className="paragraph radio-input">
                        {' '}
                        Email
                      </label>
                    </div>
                  </div>

                  <div>
                    <input
                      placeholder="Enter Phone Number/Enter Email"
                      type="text"
                      className="paragraph heading-input"
                    />
                  </div>
                  <button type="submit" className="paragraph submit-button">
                    Submit
                  </button>
                </form>
                <button
                  type="button"
                  className="trigger-button"
                  onClick={() => close()}
                >
                  <AiOutlineCloseCircle />
                </button>
              </>
            )}
          </Popup>
        </div>

        <div className="react-icons2-container">
          <FiPhoneCall className="react-icons2" />
          <BsWhatsapp className="react-icons2" />
          <MdOutlineEmail className="react-icons2" />
          <BsGlobe className="react-icons2" />
        </div>

        <div className="about-container">
          <h1 className="heading"> About </h1>

          <p className="paragraph about-paragraph">
            {' '}
            Lorem Ipsum is simply dummy text of the parinting and type setting
            industry.Lorem Ipsum has been the industry's standard dummy ever
            since the 1500s,when an unknown printer took a galley of ty and
            scrambled it to make a type specimen book.It has survived n only
            five centuries,but also the leap into electronic type setting,
            remaining essentially unchanged.
            <br />
            It was popularised in the 1960s with the release of Letra set sheets
            containing.
            <br />
            Lorem Ipsum passages,and more recently with desktop publishied
            software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <div className="services-container">
          <h1 className="heading"> Services</h1>
          <p className="paragraph">
            {' '}
            Lorem Ipsum is simply dummy text of the parinting and type setting
            industry.Lorem Ipsum has been the industry's standard dummy ever
            since the 1500s.
          </p>

          <div className="development">
            <div className="development-container">
              <img src={callImg} alt="call" />
              <p className="paragraph servicep">Websites Development</p>
            </div>
            <div className="development-container">
              <img src={callImg} alt="call" />
              <p className="paragraph servicep"> Digital Marketing</p>
            </div>
            <div className="development-container">
              <img src={callImg} alt="call" />
              <p className="paragraph servicep">Application Development</p>
            </div>
          </div>
          <div className="development">
            <div className="development-container">
              <img src={callImg} alt="call" />
              <p className="paragraph servicep">Websites Development</p>
            </div>
            <div className="development-container">
              <img src={callImg} alt="call" />
              <p className="paragraph servicep"> Digital Marketing</p>
            </div>
            <div className="development-container">
              <img src={callImg} alt="call" />
              <p className="paragraph servicep">Application Development</p>
            </div>
          </div>
        </div>
        <div>
          <h1 className="heading"> Portfolio</h1>
          <p className="paragraph servicep">
            {' '}
            Lorem Ipsum is simply dummy text of the parinting and type setting
            industry.Lorem Ipsum has been the industry's standard dummy ever
            since the 1500s.
          </p>

          <div>
            <div className="text-center">
              <img
                src={waterProductsImg}
                alt="water"
                className="portfolio-img1"
              />
            </div>
            <img
              src={fourCosmeticsImg}
              alt="cosmetics"
              className="portfolio-img"
            />
            <img src={glassesImg} alt="glasses" className="portfolio-img" />
            <img src={skinCareBoxImg} alt="box" className="portfolio-img" />
            <img src={skinCareGlassImg} alt="glass" className="portfolio-img" />
          </div>
        </div>

        <div>
          <h1 className="heading"> Videos </h1>
          <p className="paragraph">
            {' '}
            Lorem Ipsum is simply dummy text of the parinting and type setting
            industry.Lorem Ipsum has been the industry's standard dummy ever
            since the 1500s.
          </p>

          <div>
            <div className="video-container">
              <ReactPlayer
                url="https://www.youtube.com/watch?v=ZPGBnEmocYo"
                width="45%"
                className="radio-player"
              />
              <ReactPlayer
                url="https://www.youtube.com/watch?v=ZPGBnEmocYo"
                width="45%"
                className="radio-player"
              />
            </div>
            <div className="video-container">
              <ReactPlayer
                url="https://www.youtube.com/watch?v=ZPGBnEmocYo"
                width="45%"
                className="radio-player"
              />
              <ReactPlayer
                url="https://www.youtube.com/watch?v=ZPGBnEmocYo"
                width="45%"
                className="radio-player"
              />
            </div>
          </div>
        </div>

        <div>
          <h1 className="heading">Clients</h1>
          <p className="paragraph">
            {' '}
            Lorem Ipsum is simply dummy text of the parinting and type setting
            industry.Lorem Ipsum has been the industry's standard dummy ever
            since the 1500s.{' '}
          </p>
          <Navbar logoImg={logoImg} />
        </div>
        <div>
          <h1 className="heading"> Reviews </h1>
          <div className="ratings-container">
            <ImStarFull className="star" />
            <ImStarFull className="star" />
            <ImStarFull className="star" />
            <ImStarFull className="star" />
            <ImStarFull className="star" />
            <h1 className="heading">5/5</h1>
          </div>

          <div className="write-container">
            <p className="paragraph">{totalReviews} Reviews</p>
            <button type="button" className="write-review-button">
              {' '}
              Write a review
            </button>
          </div>

          <div className="review-container">
            <img src={reviewsImg} alt="img" className="review-img" />
            <div>
              <p className="paragraph">
                "Truly professional people to get the work done with them."
              </p>
              <ImStarFull className="star" />
              <ImStarFull className="star" />
              <ImStarFull className="star" />
              <ImStarFull className="star" />
              <ImStarFull className="star" />
            </div>
          </div>
          <div className="review-container">
            <img src={reviewsImg} alt="img" className="review-img" />
            <div>
              <p className="paragraph">
                "The quality of their work is impeccable and simply amazing."
              </p>
              <ImStarFull className="star" />
              <ImStarFull className="star" />
              <ImStarFull className="star" />
              <ImStarFull className="star" />
              <ImStarFull className="star" />
            </div>
          </div>
          <div className="review-container">
            <img src={reviewsImg} alt="img" className="review-img" />
            <div>
              <p className="paragraph">
                "Great Ambience, fully equipped and superb professionals."
              </p>
              <ImStarFull className="star" />
              <ImStarFull className="star" />
              <ImStarFull className="star" />
              <ImStarFull className="star" />
              <ImStarFull className="star" />
            </div>
          </div>
          <button type="button" className="paragraph all-reviews-button">
            {' '}
            View All reviews
          </button>
        </div>
      </div>
    )
  }
}

export default Home
