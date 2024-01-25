'use client';
import { Builder, BuilderElement } from '@builder.io/sdk';
import * as React from 'react';

export interface RawTextProps {
  attributes?: any;
  text?: string;
  builderBlock?: BuilderElement;
}

export const RawText = (props: RawTextProps) => {
  const attributes = props.attributes || {};
  return (
    <span
      className={attributes?.class || attributes?.className}
      dangerouslySetInnerHTML={{ __html: props.text || '' }}
    />
  );
};

Builder.registerComponent(RawText, {
  name: 'Builder:RawText',
  hideFromInsertMenu: true,
  inputs: [
    {
      name: 'text',
      bubble: true,
      type: 'longText',
      required: true,
    },
  ],
});
