import { getDefaultProps } from '@builder.io/storybook';
import { ProductsList } from './ProductsList';
import { ProductsListBuilderConfig } from './ProductsList.builder';

const props = getDefaultProps(ProductsListBuilderConfig);

export default {
  title: 'Products List',
  component: ProductsList,
  parameters: {
    builder: {
      config: ProductsListBuilderConfig,
    },
  },
};

export const DefaultProductsList = () => <ProductsList {...props}></ProductsList>;
