/**
* 牌九-结算 
*/
module gamepaijiu.page {
    export class PaijiuSettlePage extends game.gui.base.Page {
        private _viewUI: ui.nqp.game_ui.paijiu.JieSuanUI;
        private _paijiuMgr: PaijiuMgr;
        private _paijiuStory: PaijiuStory;

        constructor(v: Game, onOpenFunc?: Function, onCloseFunc?: Function) {
            super(v, onOpenFunc, onCloseFunc);
            this._isNeedBlack = true;
            this._isClickBlack = true;
            this._asset = [
                PathGameTongyong.atlas_game_ui_tongyong+ "general.atlas",
            ];
        }

        // 页面初始化函数
        protected init(): void {
            this._viewUI = this.createView('game_ui.paijiu.JieSuanUI');
            this.addChild(this._viewUI);
            this._paijiuStory = this._game.sceneObjectMgr.story as PaijiuStory;
            this._paijiuMgr = this._paijiuStory.paijiuMgr;
        }

        // 页面打开时执行函数
        protected onOpen(): void {
            super.onOpen();
            this._viewUI.list_settle.vScrollBarSkin = "";
            this._viewUI.list_settle.scrollBar.elasticDistance = 100;
            this._viewUI.list_settle.itemRender = this.createChildren("game_ui.tongyong.JieSuanRender1UI", ListRecordItem);
            this._viewUI.list_settle.renderHandler = new Handler(this, this.renderHandler);

            this._viewUI.list_settle.dataSource = this.dataSource[3];
            this._endTime = this.dataSource[2];
            this._viewUI.lab_xinxi.visible = this.dataSource[0];
            this._viewUI.btn_continue.visible = false;
            // if (this.dataSource[1]) {
            //     this._viewUI.btn_continue.visible = true;
            // } else {
            //     this._viewUI.btn_continue.visible = !this.dataSource[0];
            // }
            // this._viewUI.btn_continue.on(LEvent.CLICK, this, this.onBtnClickWithTween);
        }

        //按钮点击
        protected onBtnTweenEnd(e: LEvent, target: any) {
            switch (target) {
                case this._viewUI.btn_continue:
                    this._paijiuMgr.event(PaijiuMgr.CONTINUE_MATCH);
                    this.close();
                    break;
                default:
                    break;
            }
        }

        private renderHandler(cell: ListRecordItem, index: number) {
            if (cell) {
                cell.setData(this._game, cell.dataSource);
            }
        }

        //倒计时
        private _endTime: number;
        deltaUpdate(): void {
            if (!this._viewUI) return;
            let curTime = this._game.sync.serverTimeBys;
            let time = Math.floor(this._endTime - curTime) + 1;
            if (time > 0) {
                let str = this.dataSource[1] ? "有玩家余额不足，本轮游戏结束" : time + "S后开始第2局，本轮共2局";
                this._viewUI.lab_xinxi.text = str;
            } else {
                if (!this._viewUI.btn_continue.visible) {
                    this.close();
                }
            }
        }

        public close(): void {
            this._viewUI.btn_continue.off(LEvent.CLICK, this, this.onBtnClickWithTween);

            super.close();
        }
    }

    class ListRecordItem extends ui.nqp.game_ui.tongyong.JieSuanRender1UI {
        private _game: Game;
        private _data: any;
        setData(game: Game, data: any) {
            this._game = game;
            this._data = data;
            this.img_bg.visible = this._data.isMain;
            this.img_banker.visible = this._data.isbanker;
            this.lab_name.text = this._data.name;
            this.lab_point.text = this._data.point;
            this.lab_betmultiple.text = this._data.betmultiple;
            this.lab_money.text = this._data.money;
            this.lab_bankermultiple.text = this._data.isbanker ? this._data.bankermultiple : "";
            this.lab_cardtype.text = this._data.cardtype;
            this.lab_name.color = this._data.isMain ? "#cc90ff" : "#ffffff";
            this.lab_point.color = this._data.isMain ? "#cc90ff" : "#ffffff";
            this.lab_betmultiple.color = this._data.isMain ? "#cc90ff" : "#ffffff";
            this.lab_money.color = parseFloat(this._data.money) >= 0 ? "#069e00" : "#ff0000";
            this.lab_bankermultiple.color = this._data.isMain ? "#cc90ff" : "#ffffff";
            this.lab_cardtype.color = this._data.isMain ? "#cc90ff" : "#ffffff";
        }

        destroy() {
            super.destroy();
        }
    }
}