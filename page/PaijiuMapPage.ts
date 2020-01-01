/**
* 牌九-房间
*/
module gamepaijiu.page {
    const enum MAP_STATUS {
        MAP_STATE_NONE = 0,			//初始化
        MAP_STATE_BANKER = 1,		//准备抢庄
        MAP_STATE_BANKER_PLAY = 2,	//抢庄动画
        MAP_STATE_BET = 3,		    //准备下注
        MAP_STATE_DICE = 4,  	    //准备摇骰子
        MAP_STATE_DEAL = 5, 	    //准备发牌
        MAP_STATE_DEAL_END = 6,		//发牌结束
        MAP_STATE_SHOW_CARDS = 7,	//准备摊牌
        MAP_STATE_SHOWING = 8,      //摊牌中
        MAP_STATE_SETTLE = 9,		//准备结算
        MAP_STATE_WAIT = 10,        //等待下局开始
        MAP_STATE_END = 11,			//结束
    }
    const ChipConfig: any = {
        "121": [1, 50],       //新手
        "122": [10, 100],      //初级
        "123": [50, 500],      //中级
        "124": [100, 1000],     //高级
    };
    const CardType: any = ["地高九", "天高九", "地杠", "天杠", "地王", "天王", "杂五", "杂七", "杂八", "杂九",
        "双零霖", "双高脚", "双红头", "双斧头", "双板凳", "双长三", "双梅", "双鹅", "双人", "双地", "双天",
        "至尊", "零点", "一点", "二点", "三点", "四点", "五点", "六点", "七点", "八点", "九点"];    //牌型
    const BetConfig: any = { //下注倍数配置
        1: [1],
        2: [1, 2],
        3: [1, 2, 3],
        4: [1, 2, 3, 4],
        5: [1, 2, 3, 4, 5],
        6: [1, 2, 3, 5, 6],
        7: [1, 2, 4, 5, 7],
        8: [1, 2, 4, 6, 8],
        9: [1, 2, 5, 7, 9],
        10: [1, 3, 5, 8, 10],
        11: [1, 3, 6, 8, 11],
        12: [1, 3, 6, 9, 12],
        13: [1, 3, 7, 10, 13],
        14: [1, 4, 7, 11, 14],
        15: [1, 4, 8, 11, 15],
        16: [1, 4, 8, 12, 16],
        17: [1, 4, 9, 13, 17],
        18: [1, 5, 9, 14, 18],
        19: [1, 5, 10, 14, 19],
        20: [1, 5, 10, 15, 20],
        21: [1, 5, 11, 16, 21],
        22: [1, 6, 11, 17, 22],
        23: [1, 6, 12, 17, 23],
        24: [1, 6, 12, 18, 24],
        25: [1, 6, 13, 19, 25],
        26: [1, 7, 13, 20, 26],
        27: [1, 7, 14, 20, 27],
        28: [1, 7, 14, 21, 28],
        29: [1, 7, 15, 22, 29],
        30: [1, 8, 15, 23, 30],
    }
    const MONEY_NUM = 40; // 特效金币数量
    const MONEY_FLY_TIME = 30; // 金币飞行时间间隔
    //音效url
    const MUSIC_PATH = {
        bgMusic: "qzpj_bgm.mp3",
        moneyMusic: "piaoqian.mp3",
        randBankerMusic: "suijizhuangjia.mp3",
        bankerMusic: "dingzhuang.mp3",
        playDiceMusic: "yaotouzi.mp3",
        showCardMusic: "qzpj_playcard.mp3",
        loseMusic: "lose",
        winMusic: "win",
    }

    export class PaijiuMapPage extends game.gui.base.Page {
        private _viewUI: ui.ajqp.game_ui.paijiu.PaiJiuUI;
        private _mapInfo: PaijiuMapInfo;
        private _paijiuMgr: PaijiuMgr;
        private _paijiuStory: PaijiuStory;
        private _battleIndex: number = -1;
        private _kuang: LImage;//随机庄家框
        private _curStatus: number; //当前地图状态
        private _countDown: number; //倒计时结束时间
        private _bankerTemp: any = [];  //所有抢庄的人
        private _mainIdx: number;   //主玩家座位号
        private _clipList: Array<PaijiuClip> = [];//飘字
        private _imgdiList: Array<LImage> = [];//飘字底
        private _bankerIdx: number; //庄家位置
        private _settleWinInfo: any = [];  //结算信息,闲家赢
        private _settleLoseInfo: any = [];  //结算信息，闲家输
        private _betPerTemp: any = [];  //下注倍数配置
        private _bankerMoneyChange: number; //庄家结算金币
        private _bankerPer: number = 0; //抢庄倍数
        private _betTemps: any = [];    //各个精灵下注倍数
        private _settleInfo: any = [];  //所有结算信息
        private _allType: any = [];     //所有人的牌型
        private _moneyChange: number;   //主玩家金币变化
        private _cardConfig: any = [12, 24, 23, 14, 25, 34, 26, 35, 36, 45, 15, 16, 46, 56, 22, 33, 55, 13, 44, 11, 66];	//牌值对应的牌

        constructor(v: Game, onOpenFunc?: Function, onCloseFunc?: Function) {
            super(v, onOpenFunc, onCloseFunc);
            this._isNeedDuang = false;
            this._asset = [
                DatingPath.atlas_dating_ui + "qifu.atlas",
                Path_game_paijiu.atlas_game_ui + "paijiu.atlas",
                Path_game_paijiu.atlas_game_ui + "paijiu/gupai.atlas",
                Path_game_paijiu.atlas_game_ui_paijiu_effect + "nyl.atlas",
                Path_game_paijiu.atlas_game_ui_paijiu_effect + "qp.atlas",
                PathGameTongyong.atlas_game_ui_tongyong + "hud.atlas",
                PathGameTongyong.atlas_game_ui_tongyong + "dating.atlas",
                PathGameTongyong.atlas_game_ui_tongyong + "general.atlas",
                PathGameTongyong.atlas_game_ui_tongyong + "touxiang.atlas",
                PathGameTongyong.atlas_game_ui_tongyong + "pai.atlas",
                PathGameTongyong.atlas_game_ui_tongyong + "qz.atlas",
                PathGameTongyong.atlas_game_ui_tongyong + "qifu.atlas",
                PathGameTongyong.atlas_game_ui_tongyong + "js.atlas",
                PathGameTongyong.atlas_game_ui_tongyong + "nyl.atlas",
                PathGameTongyong.atlas_game_ui_tongyong + "chongzhi.atlas",
                PathGameTongyong.atlas_game_ui_tongyong_general + "anniu.atlas",
                PathGameTongyong.atlas_game_ui_tongyong_general_effect + "shaizi.atlas",
                PathGameTongyong.atlas_game_ui_tongyong_general_effect + "fapai_1.atlas",
                PathGameTongyong.atlas_game_ui_tongyong_general_effect + "hulu.atlas",
                PathGameTongyong.atlas_game_ui_tongyong_general_effect + "skz.atlas",
            ];
        }

        // 页面初始化函数
        protected init(): void {
            this._viewUI = this.createView('game_ui.paijiu.PaiJiuUI');
            this.addChild(this._viewUI);
            this._pageHandle = PageHandle.Get("PaijiuMapPage");//额外界面控制器
            if (!this._paijiuStory) {
                this._paijiuStory = this._game.sceneObjectMgr.story as PaijiuStory;
                this._paijiuMgr = this._paijiuStory.paijiuMgr;
                this._paijiuMgr.on(PaijiuMgr.CONTINUE_MATCH, this, this.onContinueGame);
            }
            this._game.playMusic(Path_game_paijiu.music_paijiu + MUSIC_PATH.bgMusic);
        }

        // 页面打开时执行函数
        protected onOpen(): void {
            super.onOpen();
            //api充值不显示
            this._viewUI.btn_chongzhi.visible = !WebConfig.enterGameLocked;

            this.initBeiClip();
            this.updateViewUI();
            this.onUpdateUnitOffline();
            if (!this._paijiuMgr.isRelogin) {
                this._game.uiRoot.general.open(TongyongPageDef.PAGE_TONGYONG_MATCH, null, (page) => {
                    this._viewUI.btn_continue.visible = page.dataSource;
                });
                this._viewUI.btn_continue.visible = false;
            } else {
                this.onUpdateMapInfo();
            }

            this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_MAPINFO_CHANGE, this, this.onUpdateMapInfo);
            this._game.sceneObjectMgr.on(PaijiuMapInfo.EVENT_PG_STATUS_CHECK, this, this.onUpdateMapState);
            this._game.sceneObjectMgr.on(PaijiuMapInfo.EVENT_PG_BATTLE_CHECK, this, this.updateBattledInfo);
            this._game.sceneObjectMgr.on(PaijiuMapInfo.EVENT_PG_COUNT_DOWN, this, this.updateCountDown);//倒计时更新
            this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_ADD_UNIT, this, this.onUnitAdd);
            this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_REMOVE_UNIT, this, this.onUnitRemove);
            this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_UNIT_MONEY_CHANGE, this, this.onUpdateUnit);
            this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_UNIT_CHANGE, this, this.onUpdateUnit);
            this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_UNIT_ACTION, this, this.onUpdateUnit);
            this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_UNIT_QIFU_TIME_CHANGE, this, this.onUpdateUnit);
            this._game.qifuMgr.on(QiFuMgr.QIFU_FLY, this, this.qifuFly);

            this._viewUI.btn_menu.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            this._viewUI.btn_back.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            this._viewUI.btn_rules.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            this._viewUI.btn_set.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            this._viewUI.btn_record.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            this._viewUI.btn_continue.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            this._viewUI.btn_cards.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            this._viewUI.btn_chongzhi.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            this._viewUI.btn_qifu.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            for (let i = 1; i < 6; i++) {
                this._viewUI["btn_bet" + i] && this._viewUI["btn_bet" + i].on(LEvent.CLICK, this, this.onBet, [i]);
            }
            for (let i = 0; i < 5; i++) {
                this._viewUI["btn_banker" + i] && this._viewUI["btn_banker" + i].on(LEvent.CLICK, this, this.onBanker, [i]);
            }
        }

        protected layout(): void {
            super.layout();
            if (this._viewUI) {
                //全面屏
                if (this._game.isFullScreen) {
                    this._viewUI.box_top_left.left = 14 + 56;
                    this._viewUI.box_room_left.left = 115 + 56;
                    this._viewUI.box_top_right.right = 28 + 56;
                    this._viewUI.box_bottom_right.right = 12 + 56;
                } else {
                    this._viewUI.box_top_left.left = 14;
                    this._viewUI.box_room_left.left = 115;
                    this._viewUI.box_top_right.right = 28;
                    this._viewUI.box_bottom_right.right = 12;
                }
            }
        }

        private _curDiffTime: number;
        update(diff: number) {
            super.update(diff);
            if (!this._curDiffTime || this._curDiffTime < 0) {
                this._viewUI.btn_chongzhi.ani1.play(0, false);
                this._curDiffTime = TongyongPageDef.CZ_PLAY_DIFF_TIME;
            } else {
                this._curDiffTime -= diff;
            }
            this._senceItemFlyMgr && this._senceItemFlyMgr.update(diff)
        }

        //倍数
        private _beiClip1: PaijiuClip;
        private _beiClip2: PaijiuClip;
        private _beiClip3: PaijiuClip;
        private _beiClip4: PaijiuClip;
        private _beiClip5: PaijiuClip;
        //抢庄倍数
        private _bankerClip1: PaijiuClip;
        private _bankerClip2: PaijiuClip;
        private _bankerClip3: PaijiuClip;
        private _bankerClip4: PaijiuClip;
        initBeiClip(): void {
            for (let i = 1; i < 6; i++) {
                this["_beiClip" + i] = new PaijiuClip(PaijiuClip.BEI_FONT);
                this["_beiClip" + i].centerX = this._viewUI["clip_bei" + i].centerX;
                this["_beiClip" + i].centerY = this._viewUI["clip_bei" + i].centerY;
                this._viewUI["clip_bei" + i].parent.addChild(this["_beiClip" + i]);
                this._viewUI["clip_bei" + i].visible = false;
            }
            for (let i = 1; i < 5; i++) {
                this["_bankerClip" + i] = new PaijiuClip(PaijiuClip.BEI_FONT);
                this["_bankerClip" + i].centerX = this._viewUI["clip_banker" + i].centerX;
                this["_bankerClip" + i].centerY = this._viewUI["clip_banker" + i].centerY;
                this._viewUI["clip_banker" + i].parent.addChild(this["_bankerClip" + i]);
                this._viewUI["clip_banker" + i].visible = false;
                this["_bankerClip" + i].setText(i, true, false, "", PathGameTongyong.ui_tongyong_general + "tu_bei.png");
            }
        }

        clearBeiClip(): void {
            for (let i = 1; i < 6; i++) {
                if (this["_beiClip" + i]) {
                    this["_beiClip" + i].removeSelf();
                    this["_beiClip" + i].destroy();
                    this["_beiClip" + i] = null;
                }
            }
            for (let i = 1; i < 5; i++) {
                if (this["_bankerClip" + i]) {
                    this["_bankerClip" + i].removeSelf();
                    this["_bankerClip" + i].destroy();
                    this["_bankerClip" + i] = null;
                }
            }
        }

        //打开时要处理的东西
        private updateViewUI(): void {
            this._kuang = new LImage(PathGameTongyong.ui_tongyong + "qz/k.png");
            this._viewUI.img_menu.visible = false;
            this._viewUI.btn_continue.visible = false;
            this._viewUI.text_info.visible = false;
            this._viewUI.box_bet.visible = false;
            this._viewUI.view_type.visible = false;
            this._viewUI.img_time.visible = false;
            this._viewUI.img_time.ani1.stop();
            this._viewUI.box_banker.visible = false;
            this._viewUI.view_touzi.visible = false;
            this._viewUI.view_touzi.ani1.stop();
            this._viewUI.box_cards.visible = false;
            this._viewUI.ani_first.visible = false;
            this._viewUI.btn_cards.visible = false;
            this._viewUI.box_room_left.visible = false;
            this._viewUI.box_tips.visible = false;
            for (let i = 0; i < 4; i++) {
                this._viewUI["view_head" + i].visible = false;
                this._viewUI["view_head" + i].effWin.visible = false;
                this._viewUI["view_head" + i].clip_money.visible = false;
                this._viewUI["view_head" + i].img_banker.visible = false;
                this._viewUI["view_head" + i].img_banker.ani1.stop();
                this._viewUI["view_first" + i].visible = false;
                this._viewUI["box_opt" + i].visible = false;
                this._viewUI["box_opt" + i].box_qiang.visible = false;
                this._viewUI["box_opt" + i].box_buqiang.visible = false;
                this._viewUI["box_opt" + i].box_bet.visible = false;
                if (i > 0) {
                    this._viewUI["view_player" + i].view_type.visible = false;
                    this._viewUI["view_think" + i].visible = false;
                }
            }
        }

        //按钮点击
        protected onBtnTweenEnd(e: LEvent, target: any) {
            switch (target) {
                case this._viewUI.btn_menu:
                    this.menuTween(!this._viewUI.img_menu.visible);
                    break;
                case this._viewUI.btn_back:
                    let mapinfo: PaijiuMapInfo = this._game.sceneObjectMgr.mapInfo as PaijiuMapInfo;
                    if (mapinfo && mapinfo.GetPlayState() == 1) {
                        this._game.showTips("游戏尚未结束，请先打完这局哦~");
                        return;
                    }
                    this._battleIndex = -1;
                    this.resetData();
                    this._paijiuMgr.clear();
                    this._paijiuStory.clear();
                    this.clearMapInfoListen();
                    this.clearClip();
                    this._game.sceneObjectMgr.leaveStory(true);
                    break;
                case this._viewUI.btn_rules:
                    this._game.uiRoot.general.open(PaijiuPageDef.PAGE_PAIJIU_RULE);
                    break;
                case this._viewUI.btn_set:
                    this._game.uiRoot.general.open(TongyongPageDef.PAGE_TONGYONG_SETTING);
                    break;
                case this._viewUI.btn_qifu:
                    this._game.uiRoot.general.open(DatingPageDef.PAGE_QIFU);
                    break;
                case this._viewUI.btn_record:
                    this._game.uiRoot.general.open(TongyongPageDef.PAGE_TONGYONG_RECORD, (page) => {
                        page.dataSource = PaijiuPageDef.GAME_NAME;
                    });
                    break;
                case this._viewUI.btn_continue:
                    this.onContinueGame();
                    break;
                case this._viewUI.btn_cards:
                    this.cardsTween(!this._viewUI.box_cards.visible);
                    if (this._viewUI.box_cards.visible) {
                        this.showOtherCards();
                    }
                    break;
                case this._viewUI.btn_chongzhi:
                    this._game.uiRoot.general.open(DatingPageDef.PAGE_CHONGZHI);
                    break;
                default:
                    break;
            }
        }

        protected onMouseClick(e: LEvent) {
            if (e.target != this._viewUI.btn_menu) {
                this.menuTween(false);
            }
            if (e.target != this._viewUI.btn_cards) {
                this.cardsTween(false);
            }
        }

        //菜单栏
        private menuTween(isOpen: boolean) {
            if (isOpen) {
                this._viewUI.img_menu.visible = true;
                this._viewUI.img_menu.scale(0.2, 0.2);
                this._viewUI.img_menu.alpha = 0;
                Laya.Tween.to(this._viewUI.img_menu, { scaleX: 1, scaleY: 1, alpha: 1 }, 300, Laya.Ease.backInOut);
            } else {
                Laya.Tween.to(this._viewUI.img_menu, { scaleX: 0.2, scaleY: 0.2, alpha: 0 }, 300, Laya.Ease.backInOut, Handler.create(this, () => {
                    this._viewUI.img_menu.visible = false;
                }));
            }
        }

        //出牌统计
        private cardsTween(isOpen: boolean) {
            if (isOpen) {
                this._viewUI.box_cards.visible = true;
                this._viewUI.box_cards.scale(0.2, 0.2);
                this._viewUI.box_cards.alpha = 0;
                Laya.Tween.to(this._viewUI.box_cards, { scaleX: 1, scaleY: 1, alpha: 1 }, 300, Laya.Ease.backInOut);
            } else {
                Laya.Tween.to(this._viewUI.box_cards, { scaleX: 0.2, scaleY: 0.2, alpha: 0 }, 300, Laya.Ease.backInOut, Handler.create(this, () => {
                    this._viewUI.box_cards.visible = false;
                }));
            }
        }

        //选择抢庄倍数
        private onBanker(index: number, e: LEvent): void {
            if (e.currentTarget) {
                this._game.uiRoot.btnTween(e.currentTarget);
            }
            //下注按钮的倍数
            let val = index;
            this._game.network.call_qzpaijiu_banker(val);
            this._viewUI.box_tips.visible = true;
            this._viewUI.txt_tips.text = "请等待其他玩家抢庄";
        }

        //选择下注倍数
        private onBet(index: number, e: LEvent): void {
            if (e.currentTarget) {
                this._game.uiRoot.btnTween(e.currentTarget);
            }
            //下注按钮的倍数
            let val = this._betPerTemp[index - 1];
            this._game.network.call_qzpaijiu_bet(val);
            this._viewUI.box_tips.visible = true;
            this._viewUI.txt_tips.text = "请等待其他玩家下注";
        }

        //继续游戏
        private onContinueGame(): void {
            if (this._game.sceneObjectMgr.mainPlayer.playerInfo.money < ChipConfig[this._paijiuStory.mapLv][1]) {
                this.onNotEnoughMoney()
                return;
            }
            if (this._game.sceneObjectMgr.mapInfo instanceof MapInfo) {
                this._battleIndex = -1;
                this.clearClip();
                this.resetData();
                this.updateViewUI();
                // this._paijiuStory.removeListen();
                // this.clearMapInfoListen();
                this._paijiuMgr.clear();
                this._paijiuMgr.resetData();
                this._game.sceneObjectMgr.leaveStory();

            } else {
                this.onUpdateMapInfo();
            }
        }

        private onUnitAdd(u: Unit): void {
            this.onUpdateUnit();

        }

        //玩家出去了
        private onUnitRemove(u: Unit) {
            this.onUpdateUnit();
            let posIdx = (u.GetIndex() - this._mainIdx + 4) % 4;
            this._viewUI["view_head" + posIdx].visible = false;
            this._viewUI["view_first" + posIdx].visible = false;
            this._viewUI["box_opt" + posIdx].visible = false;
            posIdx > 0 && (this._viewUI["box_opt" + posIdx].visible = false);
        }

        //精灵显示
        private onUpdateUnit(qifu_index?: number): void {
            let mapinfo: PaijiuMapInfo = this._game.sceneObjectMgr.mapInfo as PaijiuMapInfo;
            if (!mapinfo) return;
            let mainUnit = this._game.sceneObjectMgr.mainUnit;
            if (!mainUnit) return;
            let idx = mainUnit.GetIndex();
            if (!idx) return;
            if (this._mainIdx != idx) {
                this._mainIdx = idx;
            }
            let maxCount = 4;
            for (let index = 0; index < maxCount; index++) {
                let posIdx = (idx + index) % maxCount == 0 ? 4 : (idx + index) % maxCount;
                let unit = this._game.sceneObjectMgr.getUnitByIdx(posIdx);
                let viewHead = this._viewUI["view_head" + index];
                viewHead.visible = unit;
                if (unit) {
                    //庄家存一下
                    if (unit.GetIdentity() == 1) {
                        this._bankerIdx = posIdx;
                    }
                    let name = getMainPlayerName(unit.GetName());
                    viewHead.txt_name.text = name;
                    if (this._curStatus != MAP_STATUS.MAP_STATE_SETTLE || this._paijiuMgr.isRelogin) {
                        this.updateMoney();
                    }
                    //头像框
                    viewHead.img_txk.skin = TongyongUtil.getTouXiangKuangUrl(unit.GetHeadKuangImg());
                    //vip
                    viewHead.img_vip.visible = unit.GetVipLevel() > 0;
                    viewHead.img_vip.skin = TongyongUtil.getVipUrl(unit.GetVipLevel());
                    //祈福成功 头像上就有动画
                    if (qifu_index && posIdx == qifu_index) {
                        viewHead.qifu_type.visible = true;
                        viewHead.qifu_type.skin = this._qifuTypeImgUrl;
                        this.playTween(viewHead.qifu_type, qifu_index);
                    }
                    //祈福成功 头像上就有动画
                    if (qifu_index && posIdx == qifu_index) {
                        viewHead.qifu_type.visible = true;
                        viewHead.qifu_type.skin = this._qifuTypeImgUrl;
                        //时间戳变化 才加上祈福标志
                        this.playTween(viewHead.qifu_type, qifu_index);
                        Laya.timer.once(2500, this, () => {
                            viewHead.img_qifu.visible = true;
                            viewHead.img_icon.skin = TongyongUtil.getHeadUrl(unit.GetHeadImg(), 2);
                        })
                    }
                    else {
                        viewHead.img_qifu.visible = TongyongUtil.getIsHaveQiFu(unit, this._game.sync.serverTimeBys);
                        viewHead.img_icon.skin = TongyongUtil.getHeadUrl(unit.GetHeadImg(), 2);
                    }
                }
            }
        }

        private _diff: number = 500;
        private _timeList: { [key: number]: number } = {};
        private _firstList: { [key: number]: number } = {};
        private playTween(img: LImage, index: number, isTween?: boolean) {
            if (!img) return;
            if (!this._timeList[index]) {
                this._timeList[index] = 0;
            }
            if (this._timeList[index] >= 2500) {
                this._timeList[index] = 0;
                this._firstList[index] = 0;
                img.visible = false;
                return;
            }
            Laya.Tween.to(img, { alpha: isTween ? 1 : 0.2 }, this._diff, Laya.Ease.linearNone, Handler.create(this, this.playTween, [img, index, !isTween]), this._firstList[index] ? this._diff : 0);
            this._timeList[index] += this._diff;
            this._firstList[index] = 1;
        }

        private _qifuTypeImgUrl: string;
        private qifuFly(dataSource: any): void {
            if (!dataSource) return;
            let dataInfo = dataSource;
            if (!this._game.sceneObjectMgr || !this._game.sceneObjectMgr.mainUnit || this._game.sceneObjectMgr.mainUnit.GetIndex() != dataSource.qifu_index) return;
            this._game.qifuMgr.showFlayAni(this._viewUI.view_head0, this._viewUI, dataSource, (dataInfo) => {
                //相对应的玩家精灵做出反应
                this._qifuTypeImgUrl = TongyongUtil.getQFTypeImg(dataInfo.qf_id);
                this.onUpdateUnit(dataInfo.qifu_index);
            });
        }

        //金币变化
        private updateMoney(): void {
            if (!this._game.sceneObjectMgr.mainUnit) return;
            let idx = this._game.sceneObjectMgr.mainUnit.GetIndex();
            let max = 4;
            for (let index = 0; index < max; index++) {
                let posIdx = (idx + index) % max == 0 ? 4 : (idx + index) % max;
                let unit = this._game.sceneObjectMgr.getUnitByIdx(posIdx);
                if (unit) {
                    let money = EnumToString.getPointBackNum(TongyongUtil.getMoneyChange(unit.GetMoney()), 2);
                    this._viewUI["view_head" + index].txt_money.text = money;
                }
            }
        }

        //地图监听
        private onUpdateMapInfo(): void {
            let mapInfo = this._game.sceneObjectMgr.mapInfo;
            this._mapInfo = mapInfo as PaijiuMapInfo;
            if (mapInfo) {
                this._viewUI.view_touzi.ani1.on(LEvent.COMPLETE, this, this.showFirst);
                this._viewUI.btn_continue.visible = false;
                this.onUpdateUnit();
                if (this._paijiuMgr.isRelogin) {
                    this._paijiuStory.mapLv = this._mapInfo.GetMapLevel();
                    this.resetBattleIdx();
                    this.onUpdateMapState();
                    this.updateBattledInfo();
                    this._paijiuMgr.isRelogin = false;
                    if (mapInfo.GetMapState() == MAP_STATUS.MAP_STATE_WAIT) {
                        this.clearClip();
                        this.updateViewUI();
                        this.onUpdateUnit();
                        this._paijiuMgr.resetData();
                        this._paijiuMgr.clear();
                    }
                }
            } else {
                this.onUpdateUnitOffline();
                this._game.uiRoot.general.open(TongyongPageDef.PAGE_TONGYONG_MATCH, null, (page) => {
                    this._viewUI.btn_continue.visible = page.dataSource;
                });
                this._viewUI.btn_continue.visible = false;
            }
        }

        //假精灵数据
        private onUpdateUnitOffline() {
            if (!this._paijiuMgr.unitOffline) return;
            let unitOffline = this._paijiuMgr.unitOffline;
            let mPlayer = this._game.sceneObjectMgr.mainPlayer;
            if (unitOffline) {
                this._viewUI.view_head0.visible = true;
                let money;
                if (mPlayer) {
                    if (!mPlayer.playerInfo) return;
                    money = mPlayer.playerInfo.money;
                    this._viewUI.view_head0.txt_name.text = getMainPlayerName(mPlayer.playerInfo.nickname);
                    this._viewUI.view_head0.img_icon.skin = TongyongUtil.getHeadUrl(mPlayer.playerInfo.headimg);
                    this._viewUI.view_head0.img_qifu.visible = TongyongUtil.getIsHaveQiFu(mPlayer, this._game.sync.serverTimeBys);
                    //头像框
                    this._viewUI.view_head0.img_txk.skin = TongyongUtil.getTouXiangKuangUrl(mPlayer.GetHeadKuangImg());
                    this._viewUI.view_head0.img_vip.visible = mPlayer.playerInfo.vip_level > 0;
                    this._viewUI.view_head0.img_vip.skin = TongyongUtil.getVipUrl(mPlayer.playerInfo.vip_level);
                } else {
                    money = TongyongUtil.getMoneyChange(unitOffline.GetMoney());
                    this._viewUI.view_head0.txt_name.text = getMainPlayerName(unitOffline.GetName());
                    this._viewUI.view_head0.img_icon.skin = TongyongUtil.getHeadUrl(unitOffline.GetHeadImg());
                    this._viewUI.view_head0.img_qifu.visible = TongyongUtil.getIsHaveQiFu(unitOffline, this._game.sync.serverTimeBys);
                    //头像框
                    this._viewUI.view_head0.img_txk.skin = TongyongUtil.getTouXiangKuangUrl(unitOffline.GetHeadKuangImg());
                }
                money = EnumToString.getPointBackNum(money, 2);
                this._viewUI.view_head0.txt_money.text = money.toString();
            }
        }

        //地图状态
        private onUpdateMapState(): void {
            if (!this._mapInfo) return;
            let mainUnit = this._game.sceneObjectMgr.mainUnit;
            if (!mainUnit) return;
            if (!this._paijiuStory.mapLv) return;
            this._curStatus = this._mapInfo.GetMapState();
            this.updateCountDown();
            let idx = mainUnit.GetIndex();
            if (!idx) return;
            let betPos = this._mapInfo.GetCurrentBetPos();
            let state = this._mapInfo.GetMapState();
            this._viewUI.text_info.text = "牌局号：" + this._mapInfo.GetGameNo();
            this._viewUI.text_info.visible = true;
            this._viewUI.box_room_left.visible = true;
            let str = "";
            if (this._paijiuStory.mapLv == Web_operation_fields.GAME_ROOM_CONFIG_PAIJIU_1) {
                str = "房间：新手场";
            } else if (this._paijiuStory.mapLv == Web_operation_fields.GAME_ROOM_CONFIG_PAIJIU_2) {
                str = "房间：小资场";
            } else if (this._paijiuStory.mapLv == Web_operation_fields.GAME_ROOM_CONFIG_PAIJIU_3) {
                str = "房间：老板场";
            } else if (this._paijiuStory.mapLv == Web_operation_fields.GAME_ROOM_CONFIG_PAIJIU_4) {
                str = "房间：富豪场";
            }
            this._viewUI.txt_roomtype.text = str + "  底注：" + ChipConfig[this._paijiuStory.mapLv][0];
            this._viewUI.btn_cards.visible = true;
            this._viewUI.box_tips.visible = state == MAP_STATUS.MAP_STATE_BET || state == MAP_STATUS.MAP_STATE_BANKER;
            this.showOtherCards();
            if (state == MAP_STATUS.MAP_STATE_BANKER) {
                this._pageHandle.pushClose({ id: PaijiuPageDef.PAGE_PAIJIU_SETTLE, parent: this._game.uiRoot.HUD });
                for (let i: number = 1; i < 4; i++) {
                    this._viewUI["view_think" + i].visible = true;
                    this._viewUI["view_think" + i].ani1.play(0, true);
                }
                this._viewUI.txt_tips.text = "请选择抢庄倍数";
                this._viewUI.box_banker.visible = true;
                let money = TongyongUtil.getMoneyChange(mainUnit.GetMoney());
                let maxVal = Math.floor(money / (ChipConfig[this._paijiuStory.mapLv][0] * 30))
                maxVal = maxVal > 4 ? 4 : maxVal;
                for (let i = 0; i < 5; i++) {
                    this._viewUI["btn_banker" + i].disabled = i > maxVal;
                }
            } else {
                this._viewUI.box_banker.visible = false;
            }
            if (state == MAP_STATUS.MAP_STATE_BANKER_PLAY) {
                this.setRandomBanker();
            }
            if (state >= MAP_STATUS.MAP_STATE_BET) {
                for (let i = 0; i < 4; i++) {
                    let unitIdx = (idx + i) % 4 == 0 ? 4 : (idx + i) % 4;
                    let unit = this._game.sceneObjectMgr.getUnitByIdx(unitIdx)
                    if (unit) {
                        if (unit.GetIdentity() != 1) {
                            this._viewUI["view_head" + i].img_banker.visible = false;
                        } else {
                            this._viewUI["view_head" + i].img_banker.visible = true;
                        }
                    }
                }
            }
            if (state == MAP_STATUS.MAP_STATE_BET) {
                let bankerPos = (this._bankerIdx - this._mainIdx + 4) % 4;
                for (let i: number = 1; i < 4; i++) {
                    this._viewUI["view_think" + i].visible = i != bankerPos;
                    this._viewUI["view_think" + i].ani1.play(0, true);
                }
                this._viewUI.txt_tips.text = mainUnit.GetIdentity() == 1 ? "请等待其他玩家下注" : "请选择下注倍数";
                //是庄家，就不显示下注了
                this._viewUI.box_bet.visible = mainUnit.GetIdentity() != 1;
                //下注按钮的倍数显示
                let banker = this._game.sceneObjectMgr.getUnitByIdx(this._bankerIdx);
                let bankerMoney = TongyongUtil.getMoneyChange(banker.GetMoney());
                let bankePer = Math.floor(bankerMoney / (3 * ChipConfig[this._paijiuStory.mapLv][0] * this._bankerPer));
                let selfMoney = TongyongUtil.getMoneyChange(mainUnit.GetMoney());
                let xianPer = Math.floor(selfMoney / (ChipConfig[this._paijiuStory.mapLv][0] * this._bankerPer));
                let betPer = bankePer > xianPer ? xianPer : bankePer;
                if (betPer > 30) {
                    betPer = 30;
                }
                if (betPer == 0) {
                    betPer = 1;
                }
                let temps = BetConfig[betPer]
                this._betPerTemp = [];
                for (let i = 0; i < temps.length; i++) {
                    this._betPerTemp.push(temps[i]);
                }
                for (let i = 0; i < this._betPerTemp.length; i++) {
                    let index = i + 1;
                    this["_beiClip" + index].setText(this._betPerTemp[i], true, false, "", PathGameTongyong.ui_tongyong_general + "tu_bei.png");
                }
                for (let k = this._betPerTemp.length + 1; k < 6; k++) {
                    this._viewUI["btn_bet" + k].disabled = true;
                }
            } else {
                this._viewUI.box_bet.visible = false;
            }
            if (state == MAP_STATUS.MAP_STATE_DICE) {
                this._viewUI.view_touzi.visible = true;
                this._viewUI.view_touzi.ani1.play(1, false);
                this._game.playSound(Path_game_paijiu.music_paijiu + MUSIC_PATH.playDiceMusic, false);
            } else {
                this._viewUI.view_touzi.visible = false;
                this._viewUI.view_touzi.ani1.stop();
            }
            if (state == MAP_STATUS.MAP_STATE_SETTLE) {
                let isTongSha = this._settleWinInfo.length < 1;
                let isTongPei = this._settleLoseInfo.length < 1;
                let time_delay = isTongPei || isTongSha ? 1000 : 0;//飘筹码延迟
                let fly_delay = isTongSha || isTongPei ? 2700 : 1700;//飘字延迟
                if (isTongSha) {//庄家通杀
                    this._game.playSound(Path_game_paijiu.music_paijiu + "zjtongchi.mp3", false);
                    this._pageHandle.pushOpen({ id: TongyongPageDef.PAGE_TONGYONG_ZJTS, parent: this._game.uiRoot.HUD });
                } else if (isTongPei) {//庄家通赔
                    // this._game.playSound(Path_game_paijiu.music_paijiu + "zjtongpei.mp3", false);
                    this._pageHandle.pushOpen({ id: TongyongPageDef.PAGE_TONGYONG_ZJTP, parent: this._game.uiRoot.HUD });
                }
                //结算飘筹码
                Laya.timer.once(time_delay, this, () => {
                    this.showSettleEff();
                });
                //胜利动画
                Laya.timer.once(fly_delay, this, () => {
                    if (this._moneyChange >= 0) { //再播你赢了
                        this._pageHandle.pushOpen({ id: TongyongPageDef.PAGE_TONGYONG_GAMEWIN, parent: this._game.uiRoot.HUD });
                        let musicType = MathU.randomRange(1, 3);
                        this._game.playSound(PathGameTongyong.music_tongyong + MUSIC_PATH.winMusic + musicType + ".mp3", true);
                    } else { //再播你输了
                        let musicType = MathU.randomRange(1, 4);
                        this._game.playSound(PathGameTongyong.music_tongyong + MUSIC_PATH.loseMusic + musicType + ".mp3", true);
                    }
                    this._pageHandle.updatePageHandle();//更新额外界面的开关状态
                    this._pageHandle.reset();//清空额外界面存储数组
                });
            }
            if (state == MAP_STATUS.MAP_STATE_WAIT) {
                this._pageHandle.pushClose({ id: TongyongPageDef.PAGE_TONGYONG_GAMEWIN, parent: this._game.uiRoot.HUD });
                //传数据，打开结算界面
                this.operSettlePage();
                this.clearClip();
                this.resetData();
                this.updateViewUI();
                this.onUpdateUnit();
                this._paijiuMgr.resetData();
                this._paijiuMgr.clear();
                this._paijiuMgr.isReDealCard = false;
            }
            if (state == MAP_STATUS.MAP_STATE_END) {
                this._viewUI.btn_continue.visible = true;
            }
            this._pageHandle.updatePageHandle();
            this._pageHandle.reset();
        }

        // 抢庄后随机一个庄家的动画
        private setRandomBanker() {
            if (this._bankerTemp.length == 0) {
                for (let i = 1; i < 5; i++) {
                    let unit = this._game.sceneObjectMgr.getUnitByIdx(i);
                    if (unit) {
                        this._bankerTemp.push(i);
                    }
                }
            }
            if (this._bankerTemp.length > 1) {
                this._viewUI.addChild(this._kuang);
                this._kuang.visible = false;
                Laya.timer.loop(this._diff_ran, this, this.randBanker);
                this.randBanker();
            } else {
                Laya.timer.once(1000, this, () => {
                    let idx = this._bankerTemp[0];
                    let posIdx = (idx - this._mainIdx + 4) % 4;
                    for (let i = 0; i < 4; i++) {
                        this._viewUI["box_opt" + i].visible = i == posIdx;
                    }
                    this._viewUI["view_head" + posIdx].img_banker.visible = true;
                    this._viewUI["view_head" + posIdx].img_banker.ani1.play(0, false);
                    this._game.playSound(Path_game_paijiu.music_paijiu + MUSIC_PATH.bankerMusic, false);
                })
            }
        }

        //判断下是不是有人钱不够了
        private checkMoney(): boolean {
            let flag: boolean = false;
            for (let i = 1; i < 5; i++) {
                let unit = this._game.sceneObjectMgr.getUnitByIdx(i);
                if (unit) {
                    if (TongyongUtil.getMoneyChange(unit.GetMoney()) < ChipConfig[this._paijiuStory.mapLv][1]) {
                        flag = true;
                        break;
                    }
                }
            }
            return flag;
        }

        //打开结算界面
        private operSettlePage(): void {
            if (this._betTemps.length == 0) return;
            if (this._settleInfo.length == 0) return;
            if (this._allType.length == 0) return;
            if (!this._mapInfo) return;
            let temps = [];
            let infoTemps = [];
            for (let i = 1; i < 5; i++) {
                let unit = this._game.sceneObjectMgr.getUnitByIdx(i)
                let betNum: number; //下注倍数
                for (let k = 0; k < this._betTemps.length / 2; k++) {
                    if (i == this._betTemps[k * 2]) {
                        betNum = this._betTemps[k * 2 + 1];
                    }
                }
                let money: string;  //结算金币
                for (let j = 0; j < this._settleInfo.length / 2; j++) {
                    if (i == this._settleInfo[j * 2]) {
                        money = this._settleInfo[j * 2 + 1];
                    }
                }
                let cardType: string; //牌型
                for (let l = 0; l < this._allType.length / 2; l++) {
                    if (i == this._allType[l * 2]) {
                        cardType = CardType[this._allType[l * 2 + 1]];
                    }
                }
                if (unit) {
                    let obj = {
                        isMain: this._game.sceneObjectMgr.mainUnit.GetIndex() == i,
                        isbanker: unit.GetIdentity() == 1,
                        name: unit.GetName(),
                        point: ChipConfig[this._paijiuStory.mapLv][0],
                        betmultiple: betNum ? betNum : "",
                        bankermultiple: this._bankerPer,
                        money: money,
                        cardtype: cardType,
                    }
                    temps.push(obj);
                }
            }
            infoTemps.push(this._mapInfo.GetRound());
            infoTemps.push(this.checkMoney());
            infoTemps.push(this._mapInfo.GetCountDown());
            infoTemps.push(temps);
            this._pageHandle.pushOpen({ id: PaijiuPageDef.PAGE_PAIJIU_SETTLE, dataSource: infoTemps, parent: this._game.uiRoot.HUD });
        }

        //显示剩余卡牌
        private showOtherCards(): void {
            //剩余牌显示
            let cardStr = this._mapInfo.GetCardRecord();
            if (cardStr != "") {
                let cardTemp = JSON.parse(cardStr)
                for (let i = 1; i < 33; i++) {
                    let val = i;
                    if (val > 21) {
                        val = i - 11;
                    }
                    let cardType: number = this._cardConfig[val - 1];
                    if (cardTemp.indexOf(i) >= 0) {
                        this._viewUI["img_card" + i].skin = Path_game_paijiu.ui_paijiu + "paijiu_" + cardType + ".png";
                    } else {
                        this._viewUI["img_card" + i].skin = Path_game_paijiu.ui_paijiu + "gupai/paijiu_" + cardType + ".png";
                    }
                }
            }
        }

        //随一个庄家
        private _randCount: number = 0;
        private _curIndex: number = 0;
        private _diff_ran: number = 100;
        private randBanker(): void {
            if (!this._game.mainScene || !this._game.mainScene.camera) return;
            if (this._curIndex >= this._bankerTemp.length) {
                this._curIndex = 0;
            }
            let idx = this._bankerTemp[this._curIndex];
            let posIdx = (idx - this._mainIdx + 4) % 4;
            let posX = this._game.mainScene.camera.getScenePxByCellX(this._viewUI["view_head" + posIdx].x - 1);
            let posY = this._game.mainScene.camera.getScenePxByCellY(this._viewUI["view_head" + posIdx].y - 1);
            this._kuang.visible = true;
            this._kuang.pos(posX, posY);
            if (this._randCount >= 1500) {
                for (let i = 1; i < 5; i++) {
                    let unit = this._game.sceneObjectMgr.getUnitByIdx(i)
                    let index = (i - this._mainIdx + 4) % 4;
                    if (unit) {
                        if (unit.GetIdentity() == 1) {
                            this._viewUI["view_head" + index].img_banker.visible = true;
                            this._viewUI["view_head" + index].img_banker.ani1.play(0, false);
                            this._game.playSound(Path_game_paijiu.music_paijiu + MUSIC_PATH.bankerMusic, false);
                            if (this._viewUI["box_opt" + index].box_buqiang.visible) {
                                this.setBankerNum(this._viewUI["box_opt" + index], 1);
                            }
                        } else {
                            this._viewUI["view_head" + index].img_banker.visible = false;
                            //清除非庄家的抢庄气泡                    
                            this._viewUI["box_opt" + index].visible = false;
                        }
                    }
                }
                this._kuang.removeSelf();
                Laya.timer.clear(this, this.randBanker);
            }
            this._curIndex++;
            this._randCount += this._diff_ran;
            this._game.playSound(Path_game_paijiu.music_paijiu + MUSIC_PATH.randBankerMusic, false);
        }

        //更新倒计时时间戳
        private updateCountDown(): void {
            let mapinfo: PaijiuMapInfo = this._game.sceneObjectMgr.mapInfo as PaijiuMapInfo;
            if (!mapinfo) return;
            this._countDown = mapinfo.GetCountDown();
        }

        //操作倒计时
        deltaUpdate(): void {
            if (!(this._game.sceneObjectMgr.mapInfo instanceof PaijiuMapInfo)) return;
            if (!this._viewUI) return;
            if (this._curStatus != MAP_STATUS.MAP_STATE_BANKER && this._curStatus != MAP_STATUS.MAP_STATE_BET
                && this._curStatus) {
                this._viewUI.img_time.visible = false;
                return;
            }
            let curTime = this._game.sync.serverTimeBys;
            let time = Math.floor(this._countDown - curTime) + 1;
            if (time > 0) {
                this._viewUI.img_time.visible = true;
                this._viewUI.img_time.txt_time.text = time.toString();

            } else {
                this._viewUI.img_time.visible = false;
            }
        }

        //已选择抢庄倍数的人数
        private _battleBankerNum: number = 0;
        //已选择下注倍数的人数
        private _battleBetNum: number = 0;
        //战斗日志
        private updateBattledInfo(): void {
            let mainUnit = this._game.sceneObjectMgr.mainUnit;
            if (!mainUnit) return;
            if (!this._mapInfo)
                this._mapInfo = this._game.sceneObjectMgr.mapInfo;
            let battleInfoMgr = this._mapInfo.battleInfoMgr;
            let mainIdx = mainUnit.GetIndex();
            if (!mainIdx) return;
            for (let i = 0; i < battleInfoMgr.info.length; i++) {
                let battleInfo = battleInfoMgr.info[i] as gamecomponent.object.BattleInfoBase;
                switch (battleInfo.Type) {
                    case 12: {   //抢庄
                        if (this._battleIndex < i) {
                            this._battleIndex = i;
                            let info = battleInfoMgr.info[i] as gamecomponent.object.BattleInfoBanker;
                            let idx = info.SeatIndex;
                            let rate = info.BetVal;
                            let unit = this._game.sceneObjectMgr.getUnitByIdx(idx);
                            if (unit) {
                                this._battleBankerNum++;
                                //玩家自己
                                if (idx == mainIdx) {
                                    this.setBankerNum(this._viewUI.box_opt0, info.BetVal);
                                    this._viewUI.box_banker.visible = false;
                                    if (this._battleBankerNum == this.getUnitCount()) {
                                        this._viewUI.box_tips.visible = false;
                                    } else {
                                        this._viewUI.box_tips.visible = true;
                                        this._viewUI.txt_tips.text = "请等待其他玩家抢庄";
                                    }
                                } else {
                                    let posIdx = (idx - mainIdx + 4) % 4;
                                    this.setBankerNum(this._viewUI["box_opt" + posIdx], info.BetVal);
                                    this._viewUI["view_think" + posIdx].visible = false;
                                    this._viewUI["view_think" + posIdx].ani1.stop();
                                }
                            }
                            if (rate > this._bankerPer) {
                                this._bankerPer = rate;
                                this._bankerTemp = [];
                                this._bankerTemp.push(idx);
                            } else if (rate == this._bankerPer) {
                                this._bankerTemp.push(idx);
                            }
                        }
                        break;
                    }
                    case 13: {   //下注
                        if (this._battleIndex < i) {
                            this._battleIndex = i;
                            let info = battleInfoMgr.info[i] as gamecomponent.object.BattleInfoBetRate;
                            let idx = info.SeatIndex;
                            let val = info.BankerRate;
                            let unit = this._game.sceneObjectMgr.getUnitByIdx(idx);
                            if (unit) {
                                this._battleBetNum++;
                                //玩家自己
                                if (idx == mainIdx) {
                                    this.setBetNum(this._viewUI.box_opt0, val);
                                    this._viewUI.box_bet.visible = false;
                                    if (this._battleBetNum == this.getUnitCount() - 1) {
                                        this._viewUI.box_tips.visible = false;
                                    } else {
                                        this._viewUI.box_tips.visible = true;
                                        this._viewUI.txt_tips.text = "请等待其他玩家下注";
                                    }
                                } else {
                                    let posIdx = (idx - mainIdx + 4) % 4;
                                    this.setBetNum(this._viewUI["box_opt" + posIdx], val);
                                    this._viewUI["view_think" + posIdx].visible = false;
                                    this._viewUI["view_think" + posIdx].ani1.stop();
                                }
                                //存下下注倍数
                                this._betTemps.push(idx);
                                this._betTemps.push(val);
                            }
                        }
                        break;
                    }
                    case 24: {   //摊牌
                        if (this._battleIndex < i) {
                            this._battleIndex = i;
                            let info = battleInfoMgr.info[i] as gamecomponent.object.BattleInfoShowCards;
                            let idx = info.SeatIndex;
                            this._paijiuMgr.showCards(info.Cards, idx);
                            let posIdx = (idx - mainIdx + 4) % 4;
                            let cardType = this._paijiuMgr.checkCardsType(info.Cards);
                            let type: number;
                            let typeIdx = type; //牌型key
                            if (cardType > 0) {
                                type = cardType;
                                typeIdx = type - 1;
                            } else {
                                type = this._paijiuMgr.checkCardsCount(info.Cards);
                                typeIdx = 22 + type;
                            }
                            //存下牌型
                            this._allType.push(idx);
                            this._allType.push(typeIdx);
                            //显示牌型
                            if (posIdx == 0) {
                                this._viewUI.view_type.visible = true;
                                this._viewUI.view_type.ani1.play(1, false)
                                if (cardType > 0) {
                                    this._viewUI.view_type.img_type.skin = Path_game_paijiu.ui_paijiu + "pjtype_" + type + ".png";
                                } else {
                                    this._viewUI.view_type.img_type.skin = Path_game_paijiu.ui_paijiu + "pjdian_" + type + ".png";
                                }
                            } else {
                                this._viewUI["view_player" + posIdx].view_type.visible = true;
                                this._viewUI["view_player" + posIdx].view_type.ani1.play(1, false);
                                if (cardType > 0) {
                                    this._viewUI["view_player" + posIdx].view_type.img_type.skin = Path_game_paijiu.ui_paijiu + "pjtype_" + type + ".png";
                                } else {
                                    this._viewUI["view_player" + posIdx].view_type.img_type.skin = Path_game_paijiu.ui_paijiu + "pjdian_" + type + ".png";
                                }
                            }
                            if (!this._paijiuMgr.isRelogin) {
                                this._game.playSound(Path_game_paijiu.music_paijiu + MUSIC_PATH.showCardMusic, false);
                            }
                        }
                        break;
                    }
                    case 11: {   //结算
                        if (this._battleIndex < i) {
                            this._battleIndex = i
                            let info = battleInfoMgr.info[i] as gamecomponent.object.BattleInfoSettle;
                            if (info.SeatIndex != this._bankerIdx) {
                                if (info.SettleVal > 0) {
                                    this._settleWinInfo.push(info.SeatIndex);
                                    this._settleWinInfo.push(info.SettleVal);
                                } else {
                                    this._settleLoseInfo.push(info.SeatIndex);
                                    this._settleLoseInfo.push(info.SettleVal);
                                }
                            } else {
                                this._bankerMoneyChange = info.SettleVal;
                            }
                            this._settleInfo.push(info.SeatIndex);
                            this._settleInfo.push(info.SettleVal);
                            //记下主玩家货币变化
                            if (info.SeatIndex == mainIdx) {
                                this._moneyChange = info.SettleVal;
                            }
                        }
                        break;
                    }
                    case 2: {   //摇骰子结果
                        if (this._battleIndex < i) {
                            this._battleIndex = i
                            let info = battleInfoMgr.info[i] as gamecomponent.object.BattleInfoBet;
                            this._viewUI.view_touzi.img_dice1.skin = PathGameTongyong.ui_tongyong_general + "effect/shaizi/shaizi" + info.BetVal + ".png";
                            this._viewUI.view_touzi.img_dice2.skin = PathGameTongyong.ui_tongyong_general + "effect/shaizi/shaizi" + info.SeeCard + ".png";
                            //找下庄家
                            let bankerIdx: number;
                            for (let k = 1; k < 5; k++) {
                                let unit = this._game.sceneObjectMgr.getUnitByIdx(k);
                                if (unit) {
                                    if (unit.GetIdentity() == 1) {
                                        bankerIdx = k;
                                    }
                                }
                            }
                            let pos = (info.BetVal + info.SeeCard - 1) % 4 + bankerIdx;
                            if (pos > 4) {
                                pos = pos - 4;
                            }
                            this._paijiuMgr.firstPos = pos;
                            //断线重连发牌，要在摇了骰子之后
                            if (this._paijiuStory.checkReconect) {
                                this._paijiuStory.reDealCards();
                            }
                        }
                        break;
                    }
                }
            }
        }

        private getUnitCount() {
            let count: number = 0;
            let unitDic = this._game.sceneObjectMgr.unitDic;
            if (unitDic) {
                for (let key in unitDic) {
                    count++;
                }
            }
            return count;
        }

        //设置抢庄倍数
        private setBankerNum(view: any, val: number, isplay: boolean = true): void {
            val = this._curStatus == MAP_STATUS.MAP_STATE_BANKER ? val : 1;
            view.visible = true;
            view.box_bet.visible = false;
            view.box_qiang.visible = val > 0;
            view.box_buqiang.visible = !view.box_qiang.visible;
            view.banker_clip.index = val;
            if (isplay && this._curStatus <= MAP_STATUS.MAP_STATE_BANKER_PLAY) {
                view.ani1.play(0, false);
            } else {
                view.ani1.gotoAndStop(27);
            }
        }

        //设置下注倍数
        private _betClipList: any[] = [];
        private setBetNum(view: any, val: number): void {
            view.visible = true;
            view.box_bet.visible = true;
            view.box_qiang.visible = false;
            view.box_buqiang.visible = false;
            let clip_money = new PaijiuClip(PaijiuClip.BEI_CLIP_FONT);
            clip_money.setText(Math.abs(val), true);
            clip_money.scale(0.85, 0.85);
            clip_money.centerX = view.bet_clip.centerX;
            clip_money.centerY = view.bet_clip.centerY;
            view.bet_clip.parent.addChild(clip_money);
            this._clipList.push(clip_money);
            view.bet_clip.visible = false;
            if (this._curStatus == MAP_STATUS.MAP_STATE_BET) {
                view.ani1.play(0, false);
            } else {
                view.ani1.gotoAndStop(27);
            }
        }

        private showFirst(): void {
            let mainUnit = this._game.sceneObjectMgr.mainUnit;
            if (!mainUnit) return;
            //先手
            let posIdx = (this._paijiuMgr.firstPos + 4 - mainUnit.GetIndex()) % 4;
            this._viewUI.ani_first.visible = true;
            this._viewUI.ani_first.ani1.play(0, false);
            this._viewUI.ani_first.ani1.on(LEvent.COMPLETE, this, this.firstViewAniCopmplete, [posIdx]);
        }

        //先手动画播放完
        private firstViewAniCopmplete(first_pos: number): void {
            //飞过去
            this._viewUI.ani_first.ani1.off(LEvent.COMPLETE, this, this.firstViewAniCopmplete);
            let view_first_end = this._viewUI["view_first" + first_pos];
            Laya.Tween.to(this._viewUI.ani_first, { x: view_first_end.x, y: view_first_end.y, scaleX: 0, scaleY: 0 }, 700, null,
                Handler.create(this, () => {
                    view_first_end.visible = true;
                    view_first_end.ani1.play(0, false);
                    this._viewUI.ani_first.visible = false;
                    //回到原先位置
                    this._viewUI.ani_first.x = 539;
                    this._viewUI.ani_first.y = 232;
                    this._viewUI.ani_first.scale(1, 1);
                }))
        }

        //重连之后，战斗日志从哪开始刷
        private resetBattleIdx(): void {
            //第二回合特殊处理
            if (this._mapInfo.GetRound() != 1) return;
            let battleInfoMgr = this._mapInfo.battleInfoMgr;
            for (let i = 0; i < battleInfoMgr.info.length; i++) {
                let battleInfo = battleInfoMgr.info[i] as gamecomponent.object.BattleInfoBase;
                if (battleInfo.Type == 11) {
                    this._battleIndex = i;
                }
            }
        }

        //结算表现
        private showSettleEff(): void {
            this.addBankerWinEff();
            Laya.timer.once(1000, this, () => {
                this.addBankerLoseEff();
                this.addMoneyClip(this._bankerMoneyChange, this._bankerIdx);
            });
        }

        //庄家赢钱
        private addBankerWinEff(): void {
            let mainUnit = this._game.sceneObjectMgr.mainUnit;
            if (!mainUnit) return;
            if (!this._bankerIdx) return;
            //通赔
            if (this._settleLoseInfo.length < 1) return;
            let mainIdx = mainUnit.GetIndex();
            let bankerPos = (this._bankerIdx - mainIdx + 4) % 4;
            for (let i: number = 0; i < this._settleLoseInfo.length / 2; i++) {
                let index = i * 2;
                let unitPos = (this._settleLoseInfo[index] - mainIdx + 4) % 4;
                if (i < this._settleLoseInfo.length / 2) {
                    this.addMoneyFly(unitPos, bankerPos);
                    this.addMoneyClip(this._settleLoseInfo[index + 1], this._settleLoseInfo[index]);
                }
            }
            this._game.playSound(Path_game_paijiu.music_paijiu + MUSIC_PATH.moneyMusic, false);
        }

        //庄家输钱
        private addBankerLoseEff(): void {
            //通吃
            if (this._settleWinInfo.length < 1) return;
            let mainIdx = this._game.sceneObjectMgr.mainUnit.GetIndex();
            let bankerPos = (this._bankerIdx - mainIdx + 4) % 4;
            for (let i: number = 0; i < this._settleWinInfo.length / 2; i++) {
                let index = i * 2;
                let unitPos = (this._settleWinInfo[index] - mainIdx + 4) % 4;
                if (i < this._settleWinInfo.length / 2) {
                    this.addMoneyFly(bankerPos, unitPos);
                    this.addMoneyClip(this._settleWinInfo[index + 1], this._settleWinInfo[index]);
                }
            }
            this._game.playSound(Path_game_paijiu.music_paijiu + MUSIC_PATH.moneyMusic, false);
        }

        //金币变化 飘金币特效
        private _senceItemFlyMgr: SenceItemFlyMgr;
        public addMoneyFly(fromPos: number, tarPos: number): void {
            if (!this._game.mainScene || !this._game.mainScene.camera) return;
            let fromX = this._viewUI["view_head" + fromPos].x + this._viewUI["view_head" + fromPos].width / 2;
            let fromY = this._viewUI["view_head" + fromPos].y + this._viewUI["view_head" + fromPos].height / 2;
            let tarX = this._viewUI["view_head" + tarPos].x + this._viewUI["view_head" + tarPos].width / 2;
            let tarY = this._viewUI["view_head" + tarPos].y + this._viewUI["view_head" + tarPos].height / 2;
            if (!this._senceItemFlyMgr) {
                this._senceItemFlyMgr = new SenceItemFlyMgr(this._game);
            }
            this._senceItemFlyMgr.init(fromX, fromY, tarX, tarY);
        }

        //金币变化 飘字clip
        public addMoneyClip(value: number, pos: number): void {
            let clip_money = value >= 0 ? new PaijiuClip(PaijiuClip.ADD_MONEY_FONT) : new PaijiuClip(PaijiuClip.SUB_MONEY_FONT);
            let preSkin = value >= 0 ? PathGameTongyong.ui_tongyong_general + "tu_jia.png" : PathGameTongyong.ui_tongyong_general + "tu_jian.png";
            let img_di = value >= 0 ? new LImage(PathGameTongyong.ui_tongyong_general + "tu_yingqian.png") : new LImage(PathGameTongyong.ui_tongyong_general + "tu_shuqian.png");
            let idx = this._game.sceneObjectMgr.mainUnit.GetIndex();
            let index = (pos - idx + 4) % 4;
            let playerIcon = this._viewUI["view_head" + index];
            //飘字底
            img_di.centerX = playerIcon.img_di.centerX;
            img_di.centerY = playerIcon.img_di.centerY;
            playerIcon.img_di.parent.addChild(img_di);
            this._imgdiList.push(img_di);
            playerIcon.img_di.visible = false;
            //飘字
            clip_money.setText(Math.abs(value), true, false, preSkin);
            clip_money.centerX = playerIcon.clip_money.centerX - 4;
            clip_money.centerY = playerIcon.clip_money.centerY;
            playerIcon.clip_money.parent.addChild(clip_money);
            this._clipList.push(clip_money);
            playerIcon.clip_money.visible = false;
            //飘字box缓动
            playerIcon.box_clip.y = 57;
            playerIcon.box_clip.visible = true;
            Laya.Tween.clearAll(playerIcon.box_clip);
            Laya.Tween.to(playerIcon.box_clip, { y: playerIcon.box_clip.y - 55 }, 700);
            //赢钱动画
            playerIcon.effWin.visible = value > 0;
            value > 0 && playerIcon.effWin.ani1.play(0, false);
        }

        //清理飘钱动画
        private clearClip(): void {
            if (this._clipList && this._clipList.length) {
                for (let i: number = 0; i < this._clipList.length; i++) {
                    let clip = this._clipList[i];
                    clip.removeSelf();
                    clip.destroy();
                    clip = null;
                }
            }
            this._clipList = [];

            if (this._imgdiList && this._imgdiList.length) {
                for (let j: number = 0; j < this._imgdiList.length; j++) {
                    let imgdi = this._imgdiList[j];
                    imgdi.removeSelf();
                    imgdi.destroy(true);
                    imgdi = null;
                }
            }
            this._imgdiList = [];
        }

        //充值弹框
        private onNotEnoughMoney(): void {
            if (!this._game.sceneObjectMgr.mainPlayer) return;
            if (this._game.sceneObjectMgr.mainPlayer.playerInfo.money < ChipConfig[this._paijiuStory.mapLv][1]) {
                TongyongPageDef.ins.alertRecharge(StringU.substitute("老板，您的金币少于{0}哦~\n补充点金币去大杀四方吧~", ChipConfig[this._paijiuStory.mapLv][1]), () => {
                    this._game.uiRoot.general.open(DatingPageDef.PAGE_CHONGZHI);
                }, () => {
                }, true, TongyongPageDef.TIPS_SKIN_STR["cz"]);
            }
        }

        //重置数据
        private resetData(): void {
            this._paijiuMgr && (this._paijiuMgr.isRelogin = false);
            this._paijiuStory && (this._paijiuStory.checkReconect = false);
            this._bankerTemp = [];
            this._randCount = 0;
            this._bankerIdx = 0;
            this._battleBankerNum = 0;
            this._battleBetNum = 0;
            this._settleWinInfo = [];
            this._settleLoseInfo = [];
            this._betPerTemp = [];
            this._bankerMoneyChange = 0;
            for (let i = 1; i < 6; i++) {
                this._viewUI["btn_bet" + i].visible = true;
            }
            this._bankerPer = 0;
            this._betTemps = [];
            this._settleInfo = [];
            this._allType = [];
        }

        private clearMapInfoListen(): void {
            this._game.sceneObjectMgr.off(PaijiuMapInfo.EVENT_PG_STATUS_CHECK, this, this.onUpdateMapState);
            this._game.sceneObjectMgr.off(PaijiuMapInfo.EVENT_PG_BATTLE_CHECK, this, this.updateBattledInfo);
            this._game.sceneObjectMgr.off(PaijiuMapInfo.EVENT_PG_COUNT_DOWN, this, this.updateCountDown);//倒计时更新
            this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_ADD_UNIT, this, this.onUnitAdd);
            this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_REMOVE_UNIT, this, this.onUnitRemove);
            this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_UNIT_MONEY_CHANGE, this, this.onUpdateUnit);
            this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_UNIT_CHANGE, this, this.onUpdateUnit);
            this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_UNIT_ACTION, this, this.onUpdateUnit);
            this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_MAPINFO_CHANGE, this, this.onUpdateMapInfo);
            this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_UNIT_QIFU_TIME_CHANGE, this, this.onUpdateUnit);
            this._viewUI.view_touzi.ani1.off(LEvent.COMPLETE, this, this.showFirst);
            Laya.timer.clearAll(this);
            Laya.Tween.clearAll(this);
        }

        public close(): void {
            if (this._viewUI) {
                this._viewUI.btn_menu.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_continue.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_back.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_rules.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_set.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_qifu.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_record.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_chongzhi.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_cards.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                for (let i = 1; i < 6; i++) {
                    this._viewUI["btn_bet" + i] && this._viewUI["btn_bet" + i].off(LEvent.CLICK, this, this.onBet);
                }
                for (let i = 0; i < 5; i++) {
                    this._viewUI["btn_banker" + i] && this._viewUI["btn_banker" + i].off(LEvent.CLICK, this, this.onBanker);
                }
                this._game.sceneObjectMgr.off(PaijiuMapInfo.EVENT_PG_STATUS_CHECK, this, this.onUpdateMapState);
                this._game.sceneObjectMgr.off(PaijiuMapInfo.EVENT_PG_BATTLE_CHECK, this, this.updateBattledInfo);
                this._game.sceneObjectMgr.off(PaijiuMapInfo.EVENT_PG_COUNT_DOWN, this, this.updateCountDown);//倒计时更新
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_ADD_UNIT, this, this.onUnitAdd);
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_REMOVE_UNIT, this, this.onUnitRemove);
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_UNIT_MONEY_CHANGE, this, this.onUpdateUnit);
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_UNIT_CHANGE, this, this.onUpdateUnit);
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_UNIT_ACTION, this, this.onUpdateUnit);
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_MAPINFO_CHANGE, this, this.onUpdateMapInfo);
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_UNIT_QIFU_TIME_CHANGE, this, this.onUpdateUnit);
                this._game.qifuMgr.off(QiFuMgr.QIFU_FLY, this, this.qifuFly);
                this._viewUI.view_touzi.ani1.off(LEvent.COMPLETE, this, this.showFirst);
                this._senceItemFlyMgr && this._senceItemFlyMgr.clear();
                this.clearBeiClip();
                Laya.timer.clearAll(this);
                Laya.Tween.clearAll(this);
                if (this._paijiuMgr) {
                    this._paijiuMgr.off(PaijiuMgr.CONTINUE_MATCH, this, this.onContinueGame);
                }
                this._mapInfo = null;
                this._game.stopMusic();
                this._game.stopAllSound();
            }

            super.close();
        }
    }
}