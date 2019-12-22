/**
* 牌九 
*/
module gamepaijiu.data {
	export class PaijiuData extends gamecomponent.object.PlayingGuPai {
		private _posTemp = [[563, 588, 70], [1030, 360, 70], [625, 125, 70], [180, 360, 70]];
		private _mainPlayerIndex: number;
		public _ownerIdx;	//牌的归属座位

		myOwner(index: number, seat: number) {
			this.size = 1;
			this._mainPlayerIndex = index;
			this._ownerIdx = seat;
		}

		fapai() {
			let idx = this._ownerIdx;
			let posIdx = (idx - this._mainPlayerIndex + 4) % 4;
			let posX = this._posTemp[posIdx][0];
			let posY = this._posTemp[posIdx][1];
			let space = this._posTemp[posIdx][2];
			if (!this.targe_pos) {
				this.targe_pos = new Vector2();
			}
			this.targe_pos.x = posX + this.index * space;
			this.targe_pos.y = posY;
			this.time_interval = 400;
			if(!this.pos) return;
			Laya.Tween.to(this.pos, { x: this.targe_pos.x, y: this.targe_pos.y }, this.time_interval);
		}

		//重连发牌
		refapai() {
			let idx = this._ownerIdx;
			let posIdx = (idx - this._mainPlayerIndex + 4) % 4;
			let posX = this._posTemp[posIdx][0];
			let posY = this._posTemp[posIdx][1];
			let space = this._posTemp[posIdx][2];
			this.pos.x = posX + this.index * space;
			this.pos.y = posY;
		}

		fanpai() {
			super.fanpai();
		}
	}
}