import React from "react";
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination, EffectFade } from "swiper";


SwiperCore.use([Autoplay, Pagination, EffectFade]);


SwiperCore.use([Autoplay, Pagination, EffectFade]);

const SliderOne = () => {
  const carouselOptions = {
    slidesPerView: 1,
    loop: true,
    effect: "fade",
    pagination: {
      el: "#main-slider-pagination",
      type: "bullets",
      clickable: true
    },
    autoplay: {
      delay: 5000
    }
  };
  return (
    <section className="main-slider main-slider__two">
      <Swiper className="thm-swiper__slider" {...carouselOptions}>
        <SwiperSlide>
          <div
            className="image-layer"
            style={{ backgroundImage: `url(/images/Easy-Care-slide1.jpg)` }}
          ></div>

          <Container>
            <div className="main-slider__box">
              <div className="block-title text-left">
                <p>
                  <span></span>Seu <br/>ambiente
                </p>
                <h3>

                   todo <br/><span>planejado!</span>
                </h3>
              </div>

            </div>
          </Container>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="image-layer"
            style={{ backgroundImage: `url(/images/Easy-Care-slide-2.jpg)` }}
          ></div>

          <Container>
            <div className="main-slider__box">
              <div className="block-title text-left">
                <p>
                  <span></span>Construindo <br/> e cuidando
                </p>
                <h3>
                dos seus <br/><span> sonhos!</span>
                </h3>
              </div>


            </div>
          </Container>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="image-layer"
            style={{ backgroundImage: `url(/images/Easy-Care-slide-3.jpg)` }}
          ></div>

          <Container>
            <div className="main-slider__box">
              <div className="block-title text-left">
                <p>
                  <span></span>Todas as soluções <br/>em engenharia
                </p>
                <h3>
                para  <br/><span>você</span>
                </h3>
              </div>
            </div>
          </Container>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="image-layer"
            style={{ backgroundImage: `url(/images/Easy-Care-slide-4.jpg)` }}
          ></div>

          <Container>
            <div className="main-slider__box">
              <div className="block-title text-left">
                <p>
                  <span></span>Há
                </p>
                <h3>
                6  <span>Anos</span>
                </h3>
                <p><strong>construindo e cuidando de uma <br/>infinidade de sonhos!</strong></p>
              </div>
            </div>
          </Container>
        </SwiperSlide>
        <div className="swiper-pagination" id="main-slider-pagination"></div>
      </Swiper>
    </section>
  );
};

export default SliderOne;
