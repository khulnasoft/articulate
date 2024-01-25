import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { Review } from '../Review/Review';

export const ReviewsSlider = props => {
  const { dots, infinite, reviews } = props;
  const settings = {
    dots,
    infinite,
    speed: 400,
    slidesToShow: 1,
    autoplay: true,
  };

  return (
    <Slider {...settings}>
      {reviews.map(review => (
        <Review {...review} />
      ))}
    </Slider>
  );
};
