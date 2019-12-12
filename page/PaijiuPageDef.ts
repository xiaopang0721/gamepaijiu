/**
* 牌九 
*/
module gamepaijiu.page {
	export class PaijiuPageDef extends game.gui.page.PageDef {
		static GAME_NAME: string;
		//21点界面
		static PAGE_PAIJIU: string = "1";			//HUD界面
		static PAGE_PAIJIU_MAP: string = "2";		//房间地图
		static PAGE_PAIJIU_RULE: string = "101";		//规则界面
		static PAGE_PAIJIU_SETTLE: string = "8";	//结算界面

		static myinit(str: string) {
			super.myinit(str);
			PaijiuClip.init();
			PageDef._pageClassMap[PaijiuPageDef.PAGE_PAIJIU] = PaijiuPage;
			PageDef._pageClassMap[PaijiuPageDef.PAGE_PAIJIU_MAP] = PaijiuMapPage;
			PageDef._pageClassMap[PaijiuPageDef.PAGE_PAIJIU_RULE] = PaijiuRulePage;
			PageDef._pageClassMap[PaijiuPageDef.PAGE_PAIJIU_SETTLE] = PaijiuSettlePage;



			this["__needLoadAsset"] = [
				DatingPath.atlas_dating_ui + "qifu.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "hud.atlas",
				Path_game_paijiu.atlas_game_ui + "paijiu.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "general.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "touxiang.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "pai.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "qz.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "general/effect/shaizi.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "general/effect/hulu.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "general/effect/fapai_3.atlas",
				Path.custom_atlas_scene + 'gupai.atlas',
				PathGameTongyong.atlas_game_ui_tongyong + "dating.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "logo.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "qifu.atlas",
				Path_game_paijiu.atlas_game_ui + "paijiu/gupai.atlas",

				Path_game_paijiu.ui_paijiu + "sk/paijiu_1.png",
				Path_game_paijiu.ui_paijiu + "sk/pajiu_0.png",
				Path_game_paijiu.ui_paijiu + "sk/pajiu_2.png",
				Path_game_paijiu.ui_paijiu + "sk/pajiu_3.png",
				Path.map + 'pz_paijiu.png',
				Path.map_far + 'bg_paijiu.jpg'
			]

			if (WebConfig.needMusicPreload) {
				this["__needLoadAsset"] = this["__needLoadAsset"].concat([
					Path_game_paijiu.music_paijiu + "qzpj_bgm.mp3",
					Path_game_paijiu.music_paijiu + "dingzhuang.mp3",
					Path_game_paijiu.music_paijiu + "piaoqian.mp3",
					Path_game_paijiu.music_paijiu + "qzpj_fapai.mp3",
					Path_game_paijiu.music_paijiu + "qzpj_playcard.mp3",
					Path_game_paijiu.music_paijiu + "suijizhuangjia.mp3",
					Path_game_paijiu.music_paijiu + "yaotouzi.mp3",
				])
			}
		}
	}
}