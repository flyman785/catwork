import { NgModule } from '@angular/core';

import { HostlistClickDirective } from './hostlist-click.directive';

@NgModule({
    exports: [HostlistClickDirective],
    declarations: [HostlistClickDirective]
  })
  export class DirectivesModule {}
