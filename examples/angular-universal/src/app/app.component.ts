import { Component, Inject, Input, Optional } from '@angular/core';
import { BuilderBlock } from '@builder.io/angular';
import { RESPONSE } from '@nguniversal/express-engine/tokens';
import { Response } from 'express';

@Component({
  selector: 'custom-thing',
  template: 'Hello: {{name}}',
})
export class CustomThing {
  @Input()
  name = '';
}

BuilderBlock({
  tag: 'custom-thing',
  name: 'Custom thing',
  inputs: [
    {
      name: 'name',
      type: 'string',
    },
  ],
})(CustomThing);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app';
  options: any = {
    cacheSeconds: 1,
    data: {
      locale: 'en-US',
    },
  };

  constructor(
    @Optional()
    @Inject(RESPONSE)
    private response: Response
  ) {}

  data = {
    property: 'hello',
    fn: (text: string) => alert(text),
  };

  load(content?: any) {
    if (!content && this.response) {
      this.response.status(404);
    }
  }

  error(event: any) {
    console.log('error loading content', event);
  }
}
