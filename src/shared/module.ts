import { NgModule, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ExDynamicService, DocumentWrapper, WindowWrapper } from '../shared/services'
import { CSSValuePipe } from './pipe'
export function getDocument(): any { return document }
export function getWindow(): any { return window }

@NgModule({
  declarations: [
    CSSValuePipe
  ],
  exports: [
    CSSValuePipe
  ],
  imports: [CommonModule],
  entryComponents: [],
})
export class ElSharedModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: ElSharedModule, providers: [
      ExDynamicService,
      CSSValuePipe,
      { provide: DocumentWrapper, useFactory: getDocument },
      { provide: WindowWrapper, useFactory: getWindow },
    ]}
  }
}
