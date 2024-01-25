import './scripts/init-editing';

import { builder, Builder } from '@builder.io/sdk';
import { BuilderComponent } from './components/builder-component.component';
export { BuilderElement } from '@builder.io/sdk';

Builder.isReact = true;

export { BuilderBlock as BuilderBlockComponent } from './components/builder-block.component';
export { BuilderBlocks } from './components/builder-blocks.component';
export { BuilderContent } from './components/builder-content.component';
export { withChildren } from './functions/with-children';
export { BuilderAsyncRequestsContext } from './store/builder-async-requests';
export { BuilderMetaContext } from './store/builder-meta';
export { BuilderStoreContext } from './store/builder-store';

export { BuilderComponent, BuilderComponent as BuilderPage };

export { stringToFunction } from './functions/string-to-function';
export { useIsPreviewing } from './hooks/useIsPreviewing';

export { builder, Builder };
export default builder;
