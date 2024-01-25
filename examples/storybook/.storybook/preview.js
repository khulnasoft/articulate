import { BuilderComponent } from '@builder.io/react';
import { builderDecorator } from '@builder.io/storybook';
import { addDecorator, addParameters } from '@storybook/react';
import '../src/builder-settings';

addDecorator(builderDecorator);

addParameters({
  builder: {
    component: BuilderComponent,
    navigateOnDblClick: true,
  },
});
