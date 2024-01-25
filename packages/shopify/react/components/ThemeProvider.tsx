import { StateProvider, withBuilder } from '@builder.io/react';
import { BuilderElement } from '@builder.io/sdk';
import React from 'react';

interface ThemeProviderProps {
  builderBlock: BuilderElement;
  state: any;
}

const ThemeProviderComponent: React.FC<ThemeProviderProps> = props => <StateProvider {...props} />;

export const ThemeProvider = withBuilder(ThemeProviderComponent, {
  name: 'Shopify:ThemeProvider',
  canHaveChildren: true,
  static: true,
  hideFromInsertMenu: true,
});
