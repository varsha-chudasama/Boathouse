import "slick-carousel";

export class Plugins {

  init() {
    this.TestimonialSlider();
    this.AboutSlider();
  }

  TestimonialSlider(){
    $('.testimonial-slider').slick({
      dots: true,
      infinite: false,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows:false,
    });
  }

  AboutSlider(){
    $('.about-hero-slider').slick({
      dots: true,
      infinite: false,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows:false,
    });
  }

}
