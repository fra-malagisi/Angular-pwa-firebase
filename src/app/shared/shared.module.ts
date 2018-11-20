import { NgModule } from '@angular/core';
import { SearchPipe } from '../pipes/search.pipe';

@NgModule({
  imports: [],
  declarations: [
    SearchPipe
  ],
  exports: [SearchPipe]
})
export class SharedModule {
}
