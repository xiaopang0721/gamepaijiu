/**
* 牌九-牌 
*/
module gamepaijiu.manager {
	const enum CARD_TYPE {
		CARDS_TYPE_DP = 0, //单牌
		CARDS_TYPE_DGJ = 1, //地高九
		CARDS_TYPE_TGJ = 2, //天高九
		CARDS_TYPE_DG = 3, //地杠
		CARDS_TYPE_TG = 4, //天杠
		CARDS_TYPE_DW = 5, //地王
		CARDS_TYPE_TW = 6, //天王
		CARDS_TYPE_ZW = 7, //杂五
		CARDS_TYPE_ZQ = 8, //杂七
		CARDS_TYPE_ZB = 9, //杂八
		CARDS_TYPE_ZJ = 10, //杂九
		CARDS_TYPE_SLL = 11, //双零霖
		CARDS_TYPE_SGJ = 12, //双高脚
		CARDS_TYPE_SHT = 13, //双红头
		CARDS_TYPE_SFT = 14, //双斧头
		CARDS_TYPE_SBD = 15, //双板凳
		CARDS_TYPE_SCS = 16, //双长三
		CARDS_TYPE_SM = 17, //双梅
		CARDS_TYPE_SE = 18, //双鹅
		CARDS_TYPE_SR = 19, //双人
		CARDS_TYPE_SD = 20, //双地
		CARDS_TYPE_ST = 21, //双天
		CARDS_TYPE_ZZ = 22, //至尊
	}
	const MIN_CHECKTIME: number = 1000;//最小检测时间间隔(毫秒)

	export class PaijiuMgr extends gamecomponent.managers.PlayingCardMgrBase<PaijiuData>{
		public isRelogin: boolean = false;	//是否断线重连

		static readonly MAPINFO_OFFLINE: string = "PaijiuMgr.MAPINFO_OFFLINE";//假精灵
		static readonly DEAL_CARDS: string = "PaijiuMgr.DEAL_CARDS";//发牌结束
		static readonly CONTINUE_MATCH: string = "PaijiuMgr.CONTINUE_MATCH";//继续游戏
		private _offsetTime: number//剩余检测时间(毫秒)
		private _unitOffline: UnitOffline;//假精灵信息
		private _firstPos: number;
		private _isReDealCard: boolean = false;
		private _cardConfig: any = [12, 24, 23, 14, 25, 34, 26, 35, 36, 45, 15, 16, 46, 56, 22, 33, 55, 13, 44, 11, 66];	//牌值对应的牌

		constructor(game: Game) {
			super(game);
		}

		get unitOffline() {
			return this._unitOffline;
		}

		set unitOffline(v) {
			this._unitOffline = v;
			this.event(PaijiuMgr.MAPINFO_OFFLINE)
		}

		get isReDealCard() {
			return this._isReDealCard;
		}

		set isReDealCard(v) {
			this._isReDealCard = v;
		}

		get firstPos() {
			return this._firstPos;
		}

		set firstPos(v) {
			this._firstPos = v;
		}

		//心跳更新
		update(diff: number) {
			if (this._offsetTime > 0) {
				this._offsetTime -= diff;
				return;
			}
			this._offsetTime = MIN_CHECKTIME;
		}

		createObj(u: Unit) {
			let card = this._game.sceneObjectMgr.createOfflineObject(SceneRoot.GUPAI_MARK, PaijiuData) as PaijiuData;
			return card;
		}

		//对牌进行排序 重写不需要排序
		SortCards(cards: any[]) {

		}

		//点数
		private cardCount(card: number): number {
			let cardCount = Math.floor(card / 10) + card % 10;
			return cardCount;
		}

		// 地高九
		private isDiGaoJiu(cards: any): boolean {
			if (cards.length != 2) return false;
			if (cards[0] != 16) return false;
			if (cards[1] != 11) return false;
			return true;
		}

		// 天高九
		private isTianGaoJiu(cards: any): boolean {
			if (cards.length != 2) return false;
			if (cards[0] != 25) return false;
			if (cards[1] != 66) return false;
			return true;
		}

		// 地杠
		private isDiGang(cards: any): boolean {
			if (cards.length != 2) return false;
			if (cards[0] != 35) return false;
			if (cards[1] != 11) return false;
			return true;
		}

		// 天杠
		private isTianGang(cards: any): boolean {
			if (cards.length != 2) return false;
			if (cards[0] != 35) return false;
			if (cards[1] != 66) return false;
			return true;
		}

		// 地王
		private isDiWang(cards: any): boolean {
			if (cards.length != 2) return false;
			if (cards[0] != 36) return false;
			if (cards[1] != 11) return false;
			return true;
		}

		// 天王
		private isTianWang(cards: any): boolean {
			if (cards.length != 2) return false;
			if (cards[0] != 36) return false;
			if (cards[1] != 66) return false;
			return true;
		}

		// 杂五
		private isZaWu(cards: any): boolean {
			if (cards.length != 2) return false;
			if (cards[0] != 23) return false;
			if (cards[1] != 14) return false;
			return true;
		}

		// 杂七
		private isZaQi(cards: any): boolean {
			if (cards.length != 2) return false;
			if (cards[0] != 25) return false;
			if (cards[1] != 34) return false;
			return true;
		}

		// 杂八
		private isZaBa(cards: any): boolean {
			if (cards.length != 2) return false;
			if (cards[0] != 26) return false;
			if (cards[1] != 35) return false;
			return true;
		}

		// 杂九
		private isZaJiu(cards: any): boolean {
			if (cards.length != 2) return false;
			if (cards[0] != 36) return false;
			if (cards[1] != 45) return false;
			return true;
		}

		// 双零霖
		private isShuangLingLin(cards: any): boolean {
			if (cards.length != 2) return false;
			if (cards[0] != 15) return false;
			if (cards[1] != 15) return false;
			return true;
		}

		// 双高脚
		private isShuangGaoJiao(cards: any): boolean {
			if (cards.length != 2) return false;
			if (cards[0] != 16) return false;
			if (cards[1] != 16) return false;
			return true;
		}

		// 双红头
		private isShuangHongTou(cards: any): boolean {
			if (cards.length != 2) return false;
			if (cards[0] != 46) return false;
			if (cards[1] != 46) return false;
			return true;
		}

		// 双斧头
		private isShuangFuTou(cards: any): boolean {
			if (cards.length != 2) return false;
			if (cards[0] != 56) return false;
			if (cards[1] != 56) return false;
			return true;
		}

		// 双板凳
		private isShuangBanDeng(cards: any): boolean {
			if (cards.length != 2) return false;
			if (cards[0] != 22) return false;
			if (cards[1] != 22) return false;
			return true;
		}

		// 双长三
		private isShuangChangSan(cards: any): boolean {
			if (cards.length != 2) return false;
			if (cards[0] != 33) return false;
			if (cards[1] != 33) return false;
			return true;
		}

		// 双梅
		private isShuangMei(cards: any): boolean {
			if (cards.length != 2) return false;
			if (cards[0] != 55) return false;
			if (cards[1] != 55) return false;
			return true;
		}

		// 双鹅
		private isShuangE(cards: any): boolean {
			if (cards.length != 2) return false;
			if (cards[0] != 13) return false;
			if (cards[1] != 13) return false;
			return true;
		}

		// 双人
		private isShuangRen(cards: any): boolean {
			if (cards.length != 2) return false;
			if (cards[0] != 44) return false;
			if (cards[1] != 44) return false;
			return true;
		}

		// 双地
		private isShuangDi(cards: any): boolean {
			if (cards.length != 2) return false;
			if (cards[0] != 11) return false;
			if (cards[1] != 11) return false;
			return true;
		}

		// 双天
		private isShuangTian(cards: any): boolean {
			if (cards.length != 2) return false;
			if (cards[0] != 66) return false;
			if (cards[1] != 66) return false;
			return true;
		}

		// 至尊
		private isZhiZun(cards: any): boolean {
			if (cards.length != 2) return false;
			if (cards[0] != 24) return false;
			if (cards[1] != 12) return false;
			return true;
		}

		// 看下是什么牌
		public checkCardsType(temps): number {
			// cards.sort((a, b) => {
			// 	this.getCardValue(cards[b]) > this.getCardValue(cards[a]);
			// })
			let cards = [];
			for (let i = 0; i < temps.length; i++) {
				let val = temps[i];
				if (val > 21) {
					val = temps[i] - 11;
				}
				cards.push(this._cardConfig[val - 1]);
			}
			let cardtype = CARD_TYPE.CARDS_TYPE_DP;
			if (this.isDiGaoJiu(cards))
				cardtype = CARD_TYPE.CARDS_TYPE_DGJ;
			else if (this.isTianGaoJiu(cards))
				cardtype = CARD_TYPE.CARDS_TYPE_TGJ;
			else if (this.isDiGang(cards))
				cardtype = CARD_TYPE.CARDS_TYPE_DG;
			else if (this.isTianGang(cards))
				cardtype = CARD_TYPE.CARDS_TYPE_TG;
			else if (this.isDiWang(cards))
				cardtype = CARD_TYPE.CARDS_TYPE_DW;
			else if (this.isTianWang(cards))
				cardtype = CARD_TYPE.CARDS_TYPE_TW;
			else if (this.isZaWu(cards))
				cardtype = CARD_TYPE.CARDS_TYPE_ZW;
			else if (this.isZaQi(cards))
				cardtype = CARD_TYPE.CARDS_TYPE_ZQ;
			else if (this.isZaBa(cards))
				cardtype = CARD_TYPE.CARDS_TYPE_ZB;
			else if (this.isZaJiu(cards))
				cardtype = CARD_TYPE.CARDS_TYPE_ZJ;
			else if (this.isShuangLingLin(cards))
				cardtype = CARD_TYPE.CARDS_TYPE_SLL;
			else if (this.isShuangGaoJiao(cards))
				cardtype = CARD_TYPE.CARDS_TYPE_SGJ;
			else if (this.isShuangHongTou(cards))
				cardtype = CARD_TYPE.CARDS_TYPE_SHT;
			else if (this.isShuangFuTou(cards))
				cardtype = CARD_TYPE.CARDS_TYPE_SFT;
			else if (this.isShuangBanDeng(cards))
				cardtype = CARD_TYPE.CARDS_TYPE_SBD;
			else if (this.isShuangChangSan(cards))
				cardtype = CARD_TYPE.CARDS_TYPE_SCS;
			else if (this.isShuangMei(cards))
				cardtype = CARD_TYPE.CARDS_TYPE_SM;
			else if (this.isShuangE(cards))
				cardtype = CARD_TYPE.CARDS_TYPE_SE;
			else if (this.isShuangRen(cards))
				cardtype = CARD_TYPE.CARDS_TYPE_SR;
			else if (this.isShuangDi(cards))
				cardtype = CARD_TYPE.CARDS_TYPE_SD;
			else if (this.isShuangTian(cards))
				cardtype = CARD_TYPE.CARDS_TYPE_ST;
			else if (this.isZhiZun(cards))
				cardtype = CARD_TYPE.CARDS_TYPE_ZZ;
			return cardtype;
		}

		// 计算下点数
		public checkCardsCount(temps: any): number {
			let cards = [];
			for (let i = 0; i < temps.length; i++) {
				let val = temps[i];
				if (val > 21) {
					val = temps[i] - 11;
				}
				cards.push(this._cardConfig[val - 1]);
			}
			let count = 0;
			let val = this.cardCount(cards[0]);
			for (let i = 1; i < cards.length; i++) {
				val += this.cardCount(cards[i]);
			}
			count = val % 10;
			return count;
		}

		//定下牌的初始位置
		private _cardPos: any = [[480, 285, 70], [480, 330, 70], [675, 285, 70], [675, 330, 70]];
		sort() {
			let cards = this._cards;
			let max = 4;
			let mainUnit: Unit = this._game.sceneObjectMgr.mainUnit;
			let mainIdx = mainUnit.GetIndex();
			let count = 0;
			let cardIdx = 0;
			for (let index = 0; index < max; index++) {
				let posIdx = (this._firstPos + index) % max == 0 ? max : (this._firstPos + index) % max;
				for (let i = 0; i < 2; i++) {
					let card = cards[count * 2 + i] as PaijiuData;
					if (card) {
						card.pos = new Vector2(this._cardPos[index][0] + i * this._cardPos[index][2], this._cardPos[index][1]);
						card.myOwner(mainIdx, posIdx);
						card.index = i;
						card.sortScore = cardIdx;
					}
					cardIdx++;
				}
				count++;
			}
		}

		//发牌
		fapai() {
			let count = 1;
			for (let i = 0; i < this._cards.length / 2; i++) {
				Laya.timer.once(300 * count, this, () => {
					for (let k = 0; k < 2; k++) {
						let card = this._cards[i * 2 + k];
						//播音效
						this._game.playSound(Path.music + "paijiu/qzpj_fapai.mp3", false);
						card.fapai();
					}
				});
				count++;
			}
		}

		//重连发牌
		refapai() {
			for (let i = 0; i < this._cards.length; i++) {
				let card = this._cards[i];
				card.refapai();
			}
		}

		//翻牌
		showCards(cards: any, pos: number) {
			for (let index = 0; index < cards.length; index++) {
				let cardIdx = (pos + 4 - this._firstPos) % 4;
				let card = this._cards[cardIdx * 2 + index];
				if (card) {
					card.Init(cards[index]);
					card.fanpai();
				}
			}
		}

		//重置数据
		resetData(): void {
			this._firstPos = 0;
		}
	}
}