import { NgModule } from '@angular/core';

import { FloodsSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [FloodsSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [FloodsSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class FloodsSharedCommonModule {}
