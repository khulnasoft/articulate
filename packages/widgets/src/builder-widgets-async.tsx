import { Builder } from '@builder.io/react';
import dynamic from 'next/dynamic';

import { accordionConfig } from './components/Accordion.config';
import { carouselConfig } from './components/Carousel.config';
import { masonryConfig } from './components/Masonry.config';
import { tabsConfig } from './components/Tabs.config';

Builder.registerComponent(
  dynamic(() => import('./components/Carousel').then(mod => mod.CarouselComponent as any)),
  carouselConfig
);
Builder.registerComponent(
  dynamic(() => import('./components/Tabs').then(mod => mod.TabsComponent as any)),
  tabsConfig
);
Builder.registerComponent(
  dynamic(() => import('./components/Accordion').then(mod => mod.AccordionComponent as any)),
  accordionConfig
);
Builder.registerComponent(
  dynamic(() => import('./components/Masonry').then(mod => mod.MasonryComponent as any)),
  masonryConfig
);
