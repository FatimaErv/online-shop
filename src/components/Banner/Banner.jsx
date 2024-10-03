import React from 'react'
import './Banner.scss'
import banner from "../../assets/image/banner.png"
import Carousel from 'react-bootstrap/Carousel';
import {useTranslation} from "react-i18next"

function Banner() {
  const {t, i18n} = useTranslation()
  return (
    <div className='banner container'>
         <div className='banner-sidebar'>
            <ul>
                <li>{t("woman")}</li>
                <li>{t("men")}</li>
                <li>{t("elek")}</li>
                <li>{t("life")}</li>
                <li>{t("medicine")}</li>
                <li>{t("sports")}</li>
                <li>{t("baby")}</li>
                <li>{t("pets")}</li>
                <li>{t("health")}</li>
            </ul>
         </div>
         <div className='banner-carousel'>
         <Carousel>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="First slide" /> */}
        <img className='main-image' src={banner} alt="" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Second slide" /> */}
        <img className='main-image' src={banner} alt="" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Third slide" /> */}
        <img className='main-image' src={banner} alt="" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
          
         </div>
    </div>
  )
}

export default Banner
