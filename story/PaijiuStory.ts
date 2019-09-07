/**
* name 牌九剧情
*/
module gamepaijiu.story {
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
	export class PaijiuStory extends gamecomponent.story.StoryNormalBase {
		private _paijiuMgr: PaijiuMgr;
		private _cardsTemp: any = [];
		private _paijiuMapInfo: PaijiuMapInfo;
		public checkReconect: boolean;	//是否重连

		constructor(v: Game, mapid: string, maplv: number) {
			super(v, mapid, maplv);
			this.init();
		}

		init() {
			super.init();
			if (!this._paijiuMgr) {
				this._paijiuMgr = new PaijiuMgr(this._game);
			}
			this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_LOAD_MAP, this, this.onIntoNewMap);
			this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_MAPINFO_CHANGE, this, this.onMapInfoChange);
			this._game.sceneObjectMgr.on(MapInfo.EVENT_STATUS_CHECK, this, this.onUpdateState);
			this.onIntoNewMap();
		}

		get paijiuMgr() {
			return this._paijiuMgr;
		}

		set mapLv(lv: number) {
			this.maplv = lv;
		}

		get mapLv() {
			return this.maplv;
		}

		private onIntoNewMap(info?: MapAssetInfo): void {
			if (!info) return;

			this.onMapInfoChange();
			this._game.uiRoot.closeAll();
			this._game.uiRoot.HUD.open(PaijiuPageDef.PAGE_PAIJIU_MAP);
		}

		private onMapInfoChange(): void {
			let mapinfo = this._game.sceneObjectMgr.mapInfo;
			this._paijiuMapInfo = mapinfo as PaijiuMapInfo;
			if (mapinfo) {
				this.updateBattledInfo();
				this.onUpdateState();
				this.onUpdateCardInfo();
			} else {
				this._paijiuMgr.unitOffline = this._offlineUnit;
			}
		}

		private onUpdateState(): void {
			let mapinfo: MapInfo = this._game.sceneObjectMgr.mapInfo;
			let mainUnit: Unit = this._game.sceneObjectMgr.mainUnit;
			if (!mapinfo) return;
			if (!mainUnit) return;
			if (!mainUnit.GetIndex()) return;
			let statue = mapinfo.GetMapState();
			switch (statue) {
				case MAP_STATUS.MAP_STATE_DEAL://发牌
					if (this._paijiuMgr.isReDealCard) return;
					this.updateCardsCount();
					let handle = new Handler(this, this._paijiuMgr.createObj);
					this._paijiuMgr.Init(this._cardsTemp, handle);
					this._paijiuMgr.sort();
					this._paijiuMgr.fapai();
					this._paijiuMgr.isReDealCard = true;
					break;
			}
		}

		//断线重连,
		private onUpdateCardInfo(): void {
			let mapinfo: MapInfo = this._game.sceneObjectMgr.mapInfo;
			let mainUnit: Unit = this._game.sceneObjectMgr.mainUnit;
			if (!mapinfo) return;
			if (!mainUnit) return;
			if (!mainUnit.GetIndex()) return;
			if (!this.isReConnected) return;
			let statue = mapinfo.GetMapState();
			if (statue > MAP_STATUS.MAP_STATE_NONE && statue < MAP_STATUS.MAP_STATE_END) {
				if (this.checkReconect) return;
				this._paijiuMgr.isRelogin = true;
				if (statue > MAP_STATUS.MAP_STATE_DEAL) {
					this.checkReconect = true;
				}
			}
		}

		//重发下牌
		reDealCards(): void {
			if (this._paijiuMgr.isReDealCard) return;
			this.updateCardsCount();
			let handle = new Handler(this, this._paijiuMgr.createObj);
			this._paijiuMgr.Init(this._cardsTemp, handle);
			this._paijiuMgr.sort();
			this._paijiuMgr.refapai();
			this._paijiuMgr.isReDealCard = true;
		}

		//算下在场几个人来定牌数
		private updateCardsCount(): void {
			let card = [1, 2];
			this._cardsTemp = [];
			for (let index = 1; index < 5; index++) {
				let unit = this._game.sceneObjectMgr.getUnitByIdx(index)
				if (unit) {
					this._cardsTemp = this._cardsTemp.concat(card);
				}
			}
		}

		private updateBattledInfo(): void {
			let mapinfo: MapInfo = this._game.sceneObjectMgr.mapInfo;
			let mainUnit: Unit = this._game.sceneObjectMgr.mainUnit;
			if (!mapinfo) return;
			if (!mainUnit) return;
			let battleInfoMgr = this._paijiuMapInfo.battleInfoMgr;
			let mainIdx = mainUnit.GetIndex();
			if (!mainIdx) return;
			for (let i = 0; i < battleInfoMgr.info.length; i++) {
				let battleInfo = battleInfoMgr.info[i] as gamecomponent.object.BattleInfoBase;
				if (battleInfo instanceof gamecomponent.object.BattleInfoBet) {
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
					let pos = (battleInfo.BetVal + battleInfo.SeeCard - 1) % 4 + bankerIdx;
					if (pos > 4) {
						pos = pos - 4;
					}
					this._paijiuMgr.firstPos = pos;
				}
			}
		}

		createofflineUnit() {
			//创建假的地图和精灵
			let unitOffline = new UnitOffline(this._game.sceneObjectMgr);
			if (this._game.sceneObjectMgr.mainPlayer) {
				unitOffline.SetStr(UnitField.UNIT_STR_NAME, this._game.sceneObjectMgr.mainPlayer.playerInfo.nickname);
				unitOffline.SetStr(UnitField.UNIT_STR_HEAD_IMG, this._game.sceneObjectMgr.mainPlayer.playerInfo.headimg);
				unitOffline.SetDouble(UnitField.UNIT_INT_MONEY, this._game.sceneObjectMgr.mainPlayer.playerInfo.money);
				unitOffline.SetUInt32(UnitField.UNIT_INT_QI_FU_END_TIME, this._game.sceneObjectMgr.mainPlayer.playerInfo.qifu_endtime);
				unitOffline.SetUInt32(UnitField.UNIT_INT_QI_FU_TYPE, this._game.sceneObjectMgr.mainPlayer.playerInfo.qifu_type);
				unitOffline.SetUInt32(UnitField.UNIT_INT_VIP_LEVEL, this._game.sceneObjectMgr.mainPlayer.playerInfo.vip_level);
			}
			unitOffline.SetUInt16(UnitField.UNIT_INT_UINT16, 0, 1);
			this._offlineUnit = unitOffline;
		}

		enterMap() {
			//各种判断
			if (this.mapinfo) return false;
			this._game.network.call_match_game(this._mapid, this.maplv);
			return true;
		}

		leavelMap() {
			//各种判断
			this._game.network.call_leave_game();
			return true;
		}

		clear() {
			super.clear();
			this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_LOAD_MAP, this, this.onIntoNewMap);
			this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_MAPINFO_CHANGE, this, this.onMapInfoChange);
			this._game.sceneObjectMgr.off(MapInfo.EVENT_STATUS_CHECK, this, this.onUpdateState);
			if (this._paijiuMgr) {
				this._paijiuMgr.clear();
				this._paijiuMgr = null;
			}
			this._paijiuMapInfo = null;
		}
	}
}