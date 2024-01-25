import './scripts/init-editing';

import { builder, Builder } from '@builder.io/sdk';
import {
  BuilderComponent,
  onChange,
  RegisteredComponent,
} from './components/builder-component.component';
export { BuilderElement } from '@builder.io/sdk';

Builder.isReact = true;

export { BuilderBlock as BuilderBlockComponent } from './components/builder-block.component';
export { BuilderBlocks } from './components/builder-blocks.component';
export { BuilderContent } from './components/builder-content.component';
export { BuilderBlock } from './decorators/builder-block.decorator';
export { BuilderAsyncRequestsContext } from './store/builder-async-requests';
export { BuilderMetaContext } from './store/builder-meta';
export { BuilderStore, BuilderStoreContext } from './store/builder-store';

export * from './functions/update-metadata';

export { noWrap } from './functions/no-wrap';
export { withBuilder } from './functions/with-builder';
export { withChildren } from './functions/with-children';

export {
  BuilderComponent,
  BuilderComponent as BuilderPage,
  onChange,
  RegisteredComponent,
  BuilderComponent as RenderContent,
};

export { Button } from './blocks/Button';
export { Columns } from './blocks/Columns';
export { CustomCode } from './blocks/CustomCode';
export { Embed } from './blocks/Embed';
export { Fragment } from './blocks/Fragment';
export { getSrcSet, Image } from './blocks/Image';
export { Mutation } from './blocks/Mutation';
export { Router } from './blocks/Router';
export { Section } from './blocks/Section';
export { Slot as Dropzone } from './blocks/Slot';
export { StateProvider } from './blocks/StateProvider';
export { Symbol } from './blocks/Symbol';
export { Text } from './blocks/Text';
export { Video } from './blocks/Video';

export { FormSubmitButton } from './blocks/forms/Button';
export { Form } from './blocks/forms/Form';
export { FormInput } from './blocks/forms/Input';
export { Label } from './blocks/forms/Label'; // advanced?
export { FormSelect } from './blocks/forms/Select'; // advanced?
export { TextArea } from './blocks/forms/TextArea';
export { Img } from './blocks/raw/Img';
export { RawText } from './blocks/raw/RawText';

export { stringToFunction } from './functions/string-to-function';
export { useIsPreviewing } from './hooks/useIsPreviewing';

export { builder, Builder };
export default builder;
