/**
* 牌九-地图 
*/
module gamepaijiu.data {
	export class PaijiuMapInfo extends gamecomponent.object.MapInfoT<PaijiuData> {
		//地图状态变更
		static EVENT_PG_STATUS_CHECK: string = "PaijiuMapInfo.EVENT_PG_STATUS_CHECK";
		//战斗体更新
		static EVENT_PG_BATTLE_CHECK: string = "PaijiuMapInfo.EVENT_PG_BATTLE_CHECK";
		//倒计时时间戳更新
		static EVENT_PG_COUNT_DOWN: string = "PaijiuMapInfo.EVENT_PG_COUNT_DOWN";
		//牌型
		static cardType = ['0点', '1点', '2点', '3点', '4点', '5点', '6点', '7点', '8点', '9点', '地高九', '天高九', '地杠', '天杠', '地王',
			'天王', '杂五', '杂七', '杂八', '杂九', '双零霖', '双高脚', '双红头', '双斧头', '双板凳', '双长三', '双梅', '双鹅', '双人', '双地', '双天', '至尊']

		constructor(v: SceneObjectMgr) {
			super(v, () => { return new PaijiuData() });
		}

		onUpdate(flags: number, mask: UpdateMask, strmask: UpdateMask): void {
			super.onUpdate(flags, mask, strmask);
			let isNew = flags & core.obj.OBJ_OPT_NEW;
			if (isNew || mask.GetBit(MapField.MAP_INT_BATTLE_INDEX)) {
				this._battleInfoMgr.OnUpdate();
				this._sceneObjectMgr.event(PaijiuMapInfo.EVENT_PG_BATTLE_CHECK);
			}
			if (isNew || mask.GetBit(MapField.MAP_INT_MAP_BYTE)) {
				this._sceneObjectMgr.event(PaijiuMapInfo.EVENT_PG_STATUS_CHECK);
			}
			if (isNew || mask.GetBit(MapField.MAP_INT_COUNT_DOWN)) {
				this._sceneObjectMgr.event(PaijiuMapInfo.EVENT_PG_COUNT_DOWN);
			}
		}

		public getBattleInfoToString(): string {
			let str: string = "";
			for (let i = 0; i < this._battleInfoMgr.info.length; i++) {
				let battleInfo = this._battleInfoMgr.info[i] as gamecomponent.object.BattleInfoBase;
				let name = this.GetPlayerNameFromSeat(battleInfo.SeatIndex)
				if (battleInfo.Type == 12) {
					let info = this._battleInfoMgr.info[i] as gamecomponent.object.BattleInfoBanker;
					let newString: string;
					if (info.BetVal == 0) {
						newString = name + "：" + "不抢庄";
					} else {
						newString = name + "：" + "抢庄" + info.BetVal + "倍";
					}
					if (str == "") {
						str = newString;
					} else {
						str = str + "#" + newString;
					}
				} else if (battleInfo.Type == 1) {
					let info = this._battleInfoMgr.info[i] as gamecomponent.object.BattleInfoPass;
					let newString = "庄家是：" + name;
					str = str + "#" + newString;
				} else if (battleInfo.Type == 13) {
					let info = this._battleInfoMgr.info[i] as gamecomponent.object.BattleInfoBetRate;
					let newString = name + "：" + "下注" + info.BankerRate + "倍";
					str = str + "#" + newString;
				} else if (battleInfo.Type == 24) {
					let info = this._battleInfoMgr.info[i] as gamecomponent.object.BattleInfoShowCards;
					let newString = name + "：" + "摊牌，牌型是：" + PaijiuMapInfo.cardType[info.CardType - 1];
					str = str + "#" + newString;
				} else if (battleInfo.Type == 11) {
					let info = this._battleInfoMgr.info[i] as gamecomponent.object.BattleInfoSettle;
					let newString = name + "盈利：" + info.SettleVal;
					str = str + "#" + newString;
				}
			}
			return str;
		}

		//通过座位取玩家名字
		private GetPlayerNameFromSeat(index: number): string {
			let name: string;
			let users = this._battleInfoMgr.users;
			name = users[index - 1].name;
			return name
		}
	}
}