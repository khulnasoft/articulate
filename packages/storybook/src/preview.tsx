import { addons, makeDecorator } from '@storybook/addons';
import { NAVIGATE_URL } from '@storybook/core-events';
import React from 'react';
import { config } from './config';

export const navigate = (url: string) => addons.getChannel().emit(NAVIGATE_URL, url);

export const builderDecorator = makeDecorator({
  name: 'builderDecortator',
  parameterName: config.addonId,
  wrapper: (storyFn, context, { parameters }) => {
    const isPreview = window.location.search.includes(`builder`);

    let isPreviewInStorybook = true;
    let props = {};

    try {
      isPreviewInStorybook = Boolean(window.parent.parent.origin);
    } catch {
      isPreviewInStorybook = false;
    }

    if (!isPreviewInStorybook) {
      props = { name: 'storybook' };
    }

    return (
      <div
        onDoubleClick={() =>
          !isPreview &&
          parameters.navigateOnDblClick &&
          navigate(`?path=/${config.addonId}/${context.id}`)
        }
      >
        {isPreview ? <parameters.component {...props} /> : storyFn(context)}
      </div>
    );
  },
});
