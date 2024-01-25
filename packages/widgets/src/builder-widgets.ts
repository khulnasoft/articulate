import { Builder } from '@builder.io/react';

import { AccordionComponent } from './components/Accordion';
import { accordionConfig } from './components/Accordion.config';
import { CarouselComponent } from './components/Carousel';
import { carouselConfig } from './components/Carousel.config';
import { MasonryComponent } from './components/Masonry';
import { masonryConfig } from './components/Masonry.config';
import { TabsComponent } from './components/Tabs';
import { tabsConfig } from './components/Tabs.config';

Builder.registerComponent(CarouselComponent, carouselConfig);
Builder.registerComponent(TabsComponent, tabsConfig);
Builder.registerComponent(AccordionComponent, accordionConfig);
Builder.registerComponent(MasonryComponent, masonryConfig);
