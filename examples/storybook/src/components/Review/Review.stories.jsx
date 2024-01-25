import { getDefaultProps } from '@builder.io/storybook';
import { Review } from './Review';
import { ReviewBuilderConfig } from './Review.builder';

const props = getDefaultProps(ReviewBuilderConfig);

export default {
  title: 'Review',
  component: Review,
  parameters: {
    builder: {
      config: ReviewBuilderConfig,
    },
  },
};

export const DefaultReview = () => <Review {...props}></Review>;
