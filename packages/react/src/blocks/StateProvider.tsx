'use client';
import { BuilderElement } from '@builder.io/sdk';
import React, { PropsWithChildren } from 'react';
import { BuilderBlock as BuilderBlockComponent } from '../components/builder-block.component';
import { withBuilder } from '../functions/with-builder';
import { BuilderStoreContext } from '../store/builder-store';

interface StateProviderProps {
  builderBlock?: BuilderElement;
  state: any;
  context?: any;
}

class StateProviderComponent extends React.Component<PropsWithChildren<StateProviderProps>> {
  render() {
    return (
      <BuilderStoreContext.Consumer>
        {state => (
          <BuilderStoreContext.Provider
            value={{
              ...state,
              state: {
                ...state.state,
                ...this.props.state,
              },
              context: {
                ...state.context,
                ...this.props.context,
              },
            }}
          >
            {this.props.builderBlock &&
              this.props.builderBlock.children &&
              this.props.builderBlock.children.map((block, index) => (
                <BuilderBlockComponent block={block} key={block.id} index={index} child={true} />
              ))}
            {this.props.children}
          </BuilderStoreContext.Provider>
        )}
      </BuilderStoreContext.Consumer>
    );
  }
}

export const StateProvider = withBuilder(StateProviderComponent, {
  name: 'Builder:StateProvider',
  // TODO: default children
  canHaveChildren: true,
  static: true,
  noWrap: true,
  hideFromInsertMenu: true,
});
