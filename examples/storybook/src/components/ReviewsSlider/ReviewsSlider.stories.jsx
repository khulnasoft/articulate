import { getDefaultProps } from '@builder.io/storybook';
import { ReviewsSlider } from './ReviewsSlider';
import { ReviewsSliderBuilderConfig } from './ReviewsSlider.builder';
const props = getDefaultProps(ReviewsSliderBuilderConfig);

export default {
  title: 'Reviews Slider',
  component: ReviewsSlider,
  parameters: {
    builder: {
      config: ReviewsSliderBuilderConfig,
    },
  },
};

export const DefaultReviewsSlider = () => <ReviewsSlider {...props}></ReviewsSlider>;
