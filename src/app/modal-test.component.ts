import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ModalService } from './modal.service';

@Component({
    selector: 'app-modal-test',
    template: `
  <h2>modal test</h2>
  <button (click)="openModal()">modal open</button>
  `,

})
export class ModalTestComponent implements OnInit {

    constructor(
        private viewContainerRef: ViewContainerRef,
        private modalService: ModalService
    ) { }

    ngOnInit() {
    }

    /**
     * モーダル画面を表示する。
     */
    openModal(): void {
        // モーダルウィンドウに表示する内容
        let param = { title: 'タイトル', contents: '<u>コンテンツ。HTMLタグ使用可能</u>', class: 'modal' };

        // openModal()を呼んで、Observableを受け取る。
        let observable = this.modalService.openModal(this.viewContainerRef, param);

        // モーダルウィンドウの結果に対する処理は、subscribe内に記載する。
        observable.subscribe(
            {
                next: v => console.log(v),
                error: (err) => console.log(err),
                complete: () => console.log("done")
            });

    }

}
