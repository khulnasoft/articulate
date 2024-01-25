import React from 'react';
import { resetStyles } from '../constants/reset-styles';

interface EmailPreviewProps {}

export class EmailPreview extends React.Component<EmailPreviewProps> {
  render() {
    return (
      <div>
        <style type="text/css">{resetStyles}</style>
        {this.props.children}
      </div>
    );
  }
}
