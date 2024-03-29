import { Injectable } from '@angular/core';
import { BuilderContentDirective } from '../../directives/builder-content.directive';
import { BuilderContentComponent } from '../builder-content/builder-content.component';

@Injectable()
export class BuilderComponentService {
  contentComponentInstance: BuilderContentComponent | null = null;
  contentDirectiveInstance: BuilderContentDirective | null = null;
}
