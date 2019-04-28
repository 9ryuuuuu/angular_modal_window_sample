import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
    selector: 'app-modal-template',
    template: `
    <div id="modal-container" [class]="data.class" [@openClose]="isOpen ? 'open' :'closed' ">
      <h2>{{data.title}}</h2>
      <div [innerHtml]="data.contents"></div>
      <p>
        <button (click)="data.click('OK'); closeModal()">OK</button>
        <button (click)="data.click('NG'); closeModal()">NG</button>
      </p>
    </div>

    <div id="overlay" (click)="data.click(); closeModal()" [@openClose]="isOpen ? 'open' :'closed'"></div>
    `,
    styleUrls: ['./modal-template.component.css'],
    // アニメーションの設定
    // opacityの遷移をアニメーションにする。
    // 遷移にかける時間は0.2s
    animations: [
        trigger('openClose', [
            state('open', style({
                opacity: 1,
            })),
            state('closed', style({
                display: 'none',
                opacity: 0,
            })),
            transition('open => closed', [
                animate('0.2s')
            ]),
            transition('closed => open', [
                animate('0.2s')
            ]),
            transition('* => void', [
                animate('0.2s')
            ]),
            transition('void => *', [
                animate('0.2s')
            ]),
        ])
    ]
})
export class ModalTemplateComponent {

    @Input() data: any;
    isOpen: boolean;

    constructor() {
        this.isOpen = true;
    }

    /**
     * モーダルウィンドウを非表示にする。
     * ウィンドウの破棄は次にモーダルウィンドウのを呼び出したときに、
     * モーダルサービスで行うため、ここでは非表示にするだけ。
     */
    closeModal() {
        this.isOpen = false;
    }
}
