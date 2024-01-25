import { BuilderComponent } from '@builder.io/react';
import { ProductsList } from '../components/ProductsList/ProductsList';

export function Collection() {
  return (
    <>
      <BuilderComponent model="collection-hero" />
      <ProductsList />
    </>
  );
}
