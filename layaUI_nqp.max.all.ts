
module ui.nqp.game_ui.paijiu.component {
    export class Effect_chongzhiUI extends View {
		public ani1:Laya.FrameAnimation;

        public static  uiView:any ={"type":"View","props":{"width":246,"height":94},"child":[{"type":"Box","props":{"y":0,"x":0},"child":[{"type":"Button","props":{"stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_chongzhi.png"}},{"type":"Box","props":{"y":0,"x":0,"blendMode":"lighter"},"child":[{"type":"Button","props":{"y":0,"x":12,"stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/tu_chizhizz.png"}},{"type":"Image","props":{"x":79.16666666666666,"skin":"tongyong_ui/game_ui/tongyong/general/tu_czsg.png","renderType":"mask"},"compId":3}]}]}],"animations":[{"nodes":[{"target":3,"keyframes":{"x":[{"value":-173,"tweenMethod":"linearNone","tween":true,"target":3,"key":"x","index":0},{"value":183,"tweenMethod":"linearNone","tween":true,"target":3,"key":"x","index":40}]}}],"name":"ani1","id":1,"frameRate":24,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.nqp.game_ui.paijiu.component.Effect_chongzhiUI.uiView);
        }
    }
}

module ui.nqp.game_ui.paijiu.component {
    export class Effect_qzcgUI extends View {
		public ani1:Laya.FrameAnimation;

        public static  uiView:any ={"type":"View","props":{"width":106,"height":144},"child":[{"type":"Box","props":{"width":106,"height":144},"child":[{"type":"Image","props":{"y":72,"x":53,"skin":"tongyong_ui/game_ui/tongyong/qz/k.png","anchorY":0.5,"anchorX":0.5,"alpha":0},"compId":8},{"type":"Image","props":{"y":0,"x":101,"skin":"tongyong_ui/game_ui/tongyong/qz/qz10000.png","anchorY":0.5,"anchorX":0.5,"alpha":0},"compId":6},{"type":"Image","props":{"y":72,"x":53,"skin":"tongyong_ui/game_ui/tongyong/qz/ss10000.png","anchorY":0.5,"anchorX":0.5},"compId":9}]}],"animations":[{"nodes":[{"target":6,"keyframes":{"skin":[{"value":"tongyong_ui/game_ui/tongyong/qz/qz10000.png","tweenMethod":"linearNone","tween":false,"target":6,"key":"skin","index":0},{"value":"tongyong_ui/game_ui/tongyong/qz/qz10000.png","tweenMethod":"linearNone","tween":false,"target":6,"label":null,"key":"skin","index":12},{"value":"tongyong_ui/game_ui/tongyong/qz/qz10001.png","tweenMethod":"linearNone","tween":false,"target":6,"key":"skin","index":14},{"value":"tongyong_ui/game_ui/tongyong/qz/qz10002.png","tweenMethod":"linearNone","tween":false,"target":6,"key":"skin","index":16},{"value":"tongyong_ui/game_ui/tongyong/qz/qz10003.png","tweenMethod":"linearNone","tween":false,"target":6,"key":"skin","index":18},{"value":"tongyong_ui/game_ui/tongyong/qz/qz10004.png","tweenMethod":"linearNone","tween":false,"target":6,"key":"skin","index":20},{"value":"tongyong_ui/game_ui/tongyong/qz/qz10005.png","tweenMethod":"linearNone","tween":false,"target":6,"key":"skin","index":22},{"value":"tongyong_ui/game_ui/tongyong/qz/qz10006.png","tweenMethod":"linearNone","tween":false,"target":6,"key":"skin","index":24},{"value":"tongyong_ui/game_ui/tongyong/qz/qz10007.png","tweenMethod":"linearNone","tween":false,"target":6,"key":"skin","index":26},{"value":"tongyong_ui/game_ui/tongyong/qz/qz10008.png","tweenMethod":"linearNone","tween":false,"target":6,"key":"skin","index":28}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":false,"target":6,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":6,"key":"alpha","index":12}]}},{"target":8,"keyframes":{"alpha":[{"value":0,"tweenMethod":"linearNone","tween":false,"target":8,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":8,"key":"alpha","index":13}]}},{"target":9,"keyframes":{"skin":[{"value":"tongyong_ui/game_ui/tongyong/qz/ss10000.png","tweenMethod":"linearNone","tween":false,"target":9,"key":"skin","index":0},{"value":"tongyong_ui/game_ui/tongyong/qz/ss10001.png","tweenMethod":"linearNone","tween":false,"target":9,"key":"skin","index":2},{"value":"tongyong_ui/game_ui/tongyong/qz/ss10002.png","tweenMethod":"linearNone","tween":false,"target":9,"key":"skin","index":4},{"value":"tongyong_ui/game_ui/tongyong/qz/ss10003.png","tweenMethod":"linearNone","tween":false,"target":9,"key":"skin","index":6},{"value":"tongyong_ui/game_ui/tongyong/qz/ss10004.png","tweenMethod":"linearNone","tween":false,"target":9,"key":"skin","index":8},{"value":"tongyong_ui/game_ui/tongyong/qz/ss10005.png","tweenMethod":"linearNone","tween":false,"target":9,"key":"skin","index":10},{"value":"tongyong_ui/game_ui/tongyong/qz/ss10006.png","tweenMethod":"linearNone","tween":false,"target":9,"key":"skin","index":12}],"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":9,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":9,"key":"alpha","index":12},{"value":0,"tweenMethod":"linearNone","tween":true,"target":9,"key":"alpha","index":13}]}}],"name":"ani1","id":1,"frameRate":24,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.nqp.game_ui.paijiu.component.Effect_qzcgUI.uiView);
        }
    }
}

module ui.nqp.game_ui.paijiu.component {
    export class Effect_yqUI extends View {
		public ani1:Laya.FrameAnimation;

        public static  uiView:any ={"type":"View","props":{"y":0,"x":0,"width":106,"height":144},"child":[{"type":"Image","props":{"y":71,"x":53,"skin":"tongyong_ui/game_ui/tongyong/yq/tu_kuang.png","scaleY":1.2,"scaleX":1.2,"anchorY":0.5,"anchorX":0.5,"alpha":0},"compId":3},{"type":"Image","props":{"y":71,"x":53,"skin":"tongyong_ui/game_ui/tongyong/yq/tu_kuang.png","scaleY":1.2,"scaleX":1.2,"anchorY":0.5,"anchorX":0.5,"alpha":0},"compId":4},{"type":"Image","props":{"y":71,"x":53,"skin":"tongyong_ui/game_ui/tongyong/yq/tu_kuang.png","scaleY":1.2,"scaleX":1.2,"anchorY":0.5,"anchorX":0.5,"alpha":0},"compId":5},{"type":"Image","props":{"y":71,"x":53,"skin":"tongyong_ui/game_ui/tongyong/yq/tu_kuang.png","scaleY":1.1199999999999999,"scaleX":1.1199999999999999,"anchorY":0.5,"anchorX":0.5,"alpha":0.5714285714285714},"compId":6},{"type":"Image","props":{"y":71,"x":53,"skin":"tongyong_ui/game_ui/tongyong/yq/tu_kuang.png","scaleY":1,"scaleX":1,"anchorY":0.5,"anchorX":0.5,"alpha":0.6666666666666666},"compId":7},{"type":"Image","props":{"y":71,"x":53,"skin":"tongyong_ui/game_ui/tongyong/yq/tu_kuang.png","scaleY":1,"scaleX":1,"anchorY":0.5,"anchorX":0.5,"alpha":0},"compId":8},{"type":"Image","props":{"y":73,"x":52,"skin":"tongyong_ui/game_ui/tongyong/yq/xx10013.png","anchorY":0.5,"anchorX":0.5,"alpha":1},"compId":24}],"animations":[{"nodes":[{"target":3,"keyframes":{"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"label":null,"key":"scaleY","index":5},{"value":1.2,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleY","index":14}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"label":null,"key":"scaleX","index":5},{"value":1.2,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleX","index":14}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":6},{"value":0,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":14}]}},{"target":4,"keyframes":{"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":false,"target":4,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleY","index":10},{"value":1.2,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleY","index":20}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":false,"target":4,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleX","index":10},{"value":1.2,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleX","index":20}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":false,"target":4,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":4,"key":"alpha","index":6},{"value":1,"tweenMethod":"linearNone","tween":true,"target":4,"key":"alpha","index":12},{"value":0,"tweenMethod":"linearNone","tween":true,"target":4,"key":"alpha","index":20}]}},{"target":5,"keyframes":{"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":false,"target":5,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":5,"key":"scaleY","index":16},{"value":1.2,"tweenMethod":"linearNone","tween":true,"target":5,"key":"scaleY","index":27}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":false,"target":5,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":5,"key":"scaleX","index":16},{"value":1.2,"tweenMethod":"linearNone","tween":true,"target":5,"key":"scaleX","index":27}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":false,"target":5,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":5,"key":"alpha","index":12},{"value":1,"tweenMethod":"linearNone","tween":true,"target":5,"key":"alpha","index":18},{"value":0,"tweenMethod":"linearNone","tween":true,"target":5,"key":"alpha","index":26}]}},{"target":6,"keyframes":{"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":false,"target":6,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":6,"key":"scaleY","index":22},{"value":1.2,"tweenMethod":"linearNone","tween":true,"target":6,"key":"scaleY","index":32}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":false,"target":6,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":6,"key":"scaleX","index":22},{"value":1.2,"tweenMethod":"linearNone","tween":true,"target":6,"key":"scaleX","index":32}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":false,"target":6,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":6,"key":"alpha","index":19},{"value":1,"tweenMethod":"linearNone","tween":true,"target":6,"key":"alpha","index":25},{"value":0,"tweenMethod":"linearNone","tween":true,"target":6,"key":"alpha","index":32}]}},{"target":7,"keyframes":{"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":false,"target":7,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":7,"key":"scaleY","index":28},{"value":1.2,"tweenMethod":"linearNone","tween":true,"target":7,"key":"scaleY","index":38}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":false,"target":7,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":7,"key":"scaleX","index":28},{"value":1.2,"tweenMethod":"linearNone","tween":true,"target":7,"key":"scaleX","index":38}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":false,"target":7,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":7,"key":"alpha","index":24},{"value":1,"tweenMethod":"linearNone","tween":true,"target":7,"key":"alpha","index":30},{"value":0,"tweenMethod":"linearNone","tween":true,"target":7,"key":"alpha","index":38}]}},{"target":8,"keyframes":{"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":false,"target":8,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":8,"key":"scaleY","index":34},{"value":1.2,"tweenMethod":"linearNone","tween":true,"target":8,"key":"scaleY","index":44}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":false,"target":8,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":8,"key":"scaleX","index":34},{"value":1.2,"tweenMethod":"linearNone","tween":true,"target":8,"key":"scaleX","index":44}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":false,"target":8,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":8,"key":"alpha","index":30},{"value":1,"tweenMethod":"linearNone","tween":true,"target":8,"key":"alpha","index":36},{"value":0,"tweenMethod":"linearNone","tween":true,"target":8,"key":"alpha","index":44}]}},{"target":24,"keyframes":{"skin":[{"value":"tongyong_ui/game_ui/tongyong/yq/xx10000.png","tweenMethod":"linearNone","tween":false,"target":24,"key":"skin","index":0},{"value":"tongyong_ui/game_ui/tongyong/yq/xx10001.png","tweenMethod":"linearNone","tween":false,"target":24,"key":"skin","index":4},{"value":"tongyong_ui/game_ui/tongyong/yq/xx10002.png","tweenMethod":"linearNone","tween":false,"target":24,"key":"skin","index":6},{"value":"tongyong_ui/game_ui/tongyong/yq/xx10003.png","tweenMethod":"linearNone","tween":false,"target":24,"key":"skin","index":8},{"value":"tongyong_ui/game_ui/tongyong/yq/xx10004.png","tweenMethod":"linearNone","tween":false,"target":24,"key":"skin","index":10},{"value":"tongyong_ui/game_ui/tongyong/yq/xx10005.png","tweenMethod":"linearNone","tween":false,"target":24,"key":"skin","index":12},{"value":"tongyong_ui/game_ui/tongyong/yq/xx10006.png","tweenMethod":"linearNone","tween":false,"target":24,"key":"skin","index":14},{"value":"tongyong_ui/game_ui/tongyong/yq/xx10007.png","tweenMethod":"linearNone","tween":false,"target":24,"key":"skin","index":16},{"value":"tongyong_ui/game_ui/tongyong/yq/xx10008.png","tweenMethod":"linearNone","tween":false,"target":24,"key":"skin","index":18},{"value":"tongyong_ui/game_ui/tongyong/yq/xx10009.png","tweenMethod":"linearNone","tween":false,"target":24,"key":"skin","index":20},{"value":"tongyong_ui/game_ui/tongyong/yq/xx10010.png","tweenMethod":"linearNone","tween":false,"target":24,"key":"skin","index":22},{"value":"tongyong_ui/game_ui/tongyong/yq/xx10011.png","tweenMethod":"linearNone","tween":false,"target":24,"key":"skin","index":24},{"value":"tongyong_ui/game_ui/tongyong/yq/xx10012.png","tweenMethod":"linearNone","tween":false,"target":24,"key":"skin","index":26},{"value":"tongyong_ui/game_ui/tongyong/yq/xx10013.png","tweenMethod":"linearNone","tween":false,"target":24,"key":"skin","index":28},{"value":"tongyong_ui/game_ui/tongyong/yq/xx10014.png","tweenMethod":"linearNone","tween":false,"target":24,"key":"skin","index":30},{"value":"tongyong_ui/game_ui/tongyong/yq/xx10015.png","tweenMethod":"linearNone","tween":false,"target":24,"key":"skin","index":32},{"value":"tongyong_ui/game_ui/tongyong/yq/xx10016.png","tweenMethod":"linearNone","tween":false,"target":24,"key":"skin","index":34},{"value":"tongyong_ui/game_ui/tongyong/yq/xx10017.png","tweenMethod":"linearNone","tween":false,"target":24,"key":"skin","index":36},{"value":"tongyong_ui/game_ui/tongyong/yq/xx10018.png","tweenMethod":"linearNone","tween":false,"target":24,"key":"skin","index":38},{"value":"tongyong_ui/game_ui/tongyong/yq/xx10019.png","tweenMethod":"linearNone","tween":false,"target":24,"key":"skin","index":40}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":false,"target":24,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":false,"target":24,"key":"alpha","index":2},{"value":0,"tweenMethod":"linearNone","tween":true,"target":24,"key":"alpha","index":41}]}}],"name":"ani1","id":1,"frameRate":24,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.nqp.game_ui.paijiu.component.Effect_yqUI.uiView);
        }
    }
}

module ui.nqp.game_ui.paijiu.component {
    export class PaiXingUI extends View {
		public ani1:Laya.FrameAnimation;
		public img_type:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":160,"height":80},"child":[{"type":"Image","props":{"y":46,"x":80,"width":210,"skin":"paijiu_ui/game_ui/paijiu/brnntype_bgimg_1.png","height":62,"anchorY":0.5,"anchorX":0.5},"compId":2},{"type":"Box","props":{"y":38,"x":88,"width":165,"height":60,"anchorY":0.5,"anchorX":0.5},"compId":6,"child":[{"type":"Image","props":{"y":32,"x":75,"visible":true,"var":"img_type","skin":"paijiu_ui/game_ui/paijiu/pjtype_1.png","scaleY":1,"scaleX":1,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Image","props":{"y":37,"x":74,"skin":"paijiu_ui/game_ui/paijiu/tu_g1.png","blendMode":"lighter","anchorY":0.5,"anchorX":0.5},"compId":4}],"animations":[{"nodes":[{"target":2,"keyframes":{"x":[{"value":60,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":0},{"value":80,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":5}]}},{"target":4,"keyframes":{"y":[{"value":37,"tweenMethod":"linearNone","tween":true,"target":4,"key":"y","index":0},{"value":37,"tweenMethod":"linearNone","tween":true,"target":4,"key":"y","index":5}],"visible":[{"value":false,"tweenMethod":"linearNone","tween":false,"target":4,"key":"visible","index":0},{"value":true,"tweenMethod":"linearNone","tween":false,"target":4,"key":"visible","index":5}],"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleY","index":5},{"value":1.5,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleY","index":15}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleX","index":5},{"value":1.5,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleX","index":15}],"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":4,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":4,"key":"alpha","index":5},{"value":0,"tweenMethod":"linearNone","tween":true,"target":4,"key":"alpha","index":15}]}},{"target":6,"keyframes":{"visible":[{"value":false,"tweenMethod":"linearNone","tween":false,"target":6,"key":"visible","index":0},{"value":true,"tweenMethod":"linearNone","tween":false,"target":6,"key":"visible","index":5}],"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":6,"key":"scaleY","index":0},{"value":1.5,"tweenMethod":"backOut","tween":true,"target":6,"key":"scaleY","index":5},{"value":1,"tweenMethod":"linearNone","tween":true,"target":6,"key":"scaleY","index":15}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":6,"key":"scaleX","index":0},{"value":1.5,"tweenMethod":"backOut","tween":true,"target":6,"key":"scaleX","index":5},{"value":1,"tweenMethod":"linearNone","tween":true,"target":6,"key":"scaleX","index":15}]}}],"name":"ani1","id":1,"frameRate":24,"action":1}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.nqp.game_ui.paijiu.component.PaiXingUI.uiView);
        }
    }
}

module ui.nqp.game_ui.paijiu.component {
    export class TouXiangUI extends View {
		public img_head:Laya.Image;
		public img_txk:Laya.Image;
		public text_name:laya.display.Text;
		public text_money:laya.display.Text;
		public img_frame:Laya.Image;
		public img_mask:Laya.Image;
		public qifu_type:Laya.Image;
		public view_banker:ui.nqp.game_ui.tongyong.effect.ZhuangLUI;
		public img_qifu:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":100,"height":138},"child":[{"type":"Box","props":{"y":0,"x":-1,"width":101,"height":138},"child":[{"type":"Image","props":{"skin":"tongyong_ui/game_ui/tongyong/general/tu_txk1.png","centerY":0,"centerX":0}},{"type":"Image","props":{"visible":false,"skin":"tongyong_ui/game_ui/tongyong/touxiang/tu_txk.png","centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"var":"img_head","skin":"tongyong_ui/game_ui/tongyong/touxiang/head_0.png","centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"var":"img_txk","skin":"tongyong_ui/game_ui/tongyong/touxiang/tu_v1.png","scaleY":0.95,"scaleX":0.95,"centerY":0,"centerX":0}},{"type":"Text","props":{"y":5,"x":0,"wordWrap":true,"width":100,"var":"text_name","text":"玩家名字","leading":6,"height":17,"fontSize":17,"color":"#ffffff","align":"center"}},{"type":"Text","props":{"y":112,"x":0,"wordWrap":true,"width":102,"var":"text_money","text":"0","leading":6,"height":24,"fontSize":18,"color":"#f8ea5e","align":"center"}},{"type":"Image","props":{"y":-21,"x":-6,"width":110,"var":"img_frame","skin":"paijiu_ui/game_ui/paijiu/tu_djs.png","height":109},"child":[{"type":"Image","props":{"y":-3,"x":-1,"width":104,"var":"img_mask","renderType":"mask","height":142}}]},{"type":"Image","props":{"y":97,"x":51,"visible":false,"var":"qifu_type","skin":"tongyong_ui/game_ui/tongyong/qifu/f_cs2.png","scaleY":0.5,"scaleX":0.5,"anchorY":1,"anchorX":0.5}},{"type":"ZhuangL","props":{"y":-1,"x":1,"var":"view_banker","runtime":"ui.nqp.game_ui.tongyong.effect.ZhuangLUI"}},{"type":"Image","props":{"y":21,"x":69,"visible":false,"var":"img_qifu","skin":"tongyong_ui/game_ui/tongyong/touxiang/tu_qf.png"}}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("Text",laya.display.Text);
			View.regComponent("ui.nqp.game_ui.tongyong.effect.ZhuangLUI",ui.nqp.game_ui.tongyong.effect.ZhuangLUI);

            super.createChildren();
            this.createView(ui.nqp.game_ui.paijiu.component.TouXiangUI.uiView);
        }
    }
}

module ui.nqp.game_ui.paijiu.component {
    export class WanJia_LUI extends View {
		public view_type:ui.nqp.game_ui.paijiu.component.PaiXingUI;
		public box_betnum:Laya.Box;
		public img_bg:Laya.Image;
		public img_num1:Laya.Image;
		public img_num0:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":370,"height":180},"child":[{"type":"PaiXing","props":{"y":189,"x":189,"var":"view_type","anchorY":0.5,"anchorX":0.5,"runtime":"ui.nqp.game_ui.paijiu.component.PaiXingUI"}},{"type":"Box","props":{"y":24,"x":191,"width":119,"var":"box_betnum","height":39,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":21,"x":58.5,"var":"img_bg","skin":"paijiu_ui/game_ui/paijiu/tu_bei.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":20,"x":48,"var":"img_num1","skin":"paijiu_ui/game_ui/paijiu/bei_0.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":20,"x":72,"var":"img_num0","skin":"paijiu_ui/game_ui/paijiu/bei_0.png","anchorY":0.5,"anchorX":0.5}}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.nqp.game_ui.paijiu.component.PaiXingUI",ui.nqp.game_ui.paijiu.component.PaiXingUI);

            super.createChildren();
            this.createView(ui.nqp.game_ui.paijiu.component.WanJia_LUI.uiView);
        }
    }
}

module ui.nqp.game_ui.paijiu.component {
    export class WanJia_RUI extends View {
		public view_type:ui.nqp.game_ui.paijiu.component.PaiXingUI;
		public box_betnum:Laya.Box;
		public img_bg:Laya.Image;
		public img_num1:Laya.Image;
		public img_num0:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":370,"height":180},"child":[{"type":"PaiXing","props":{"y":190,"x":181,"var":"view_type","anchorY":0.5,"anchorX":0.5,"runtime":"ui.nqp.game_ui.paijiu.component.PaiXingUI"}},{"type":"Box","props":{"y":29,"x":188,"width":119,"var":"box_betnum","height":39,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":21,"x":58.5,"var":"img_bg","skin":"paijiu_ui/game_ui/paijiu/tu_bei.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":20,"x":48,"var":"img_num1","skin":"paijiu_ui/game_ui/paijiu/bei_0.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":20,"x":72,"var":"img_num0","skin":"paijiu_ui/game_ui/paijiu/bei_0.png","anchorY":0.5,"anchorX":0.5}}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.nqp.game_ui.paijiu.component.PaiXingUI",ui.nqp.game_ui.paijiu.component.PaiXingUI);

            super.createChildren();
            this.createView(ui.nqp.game_ui.paijiu.component.WanJia_RUI.uiView);
        }
    }
}

module ui.nqp.game_ui.paijiu.component {
    export class YingUI extends View {
		public ani1:Laya.FrameAnimation;
		public img_win:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":120,"height":120},"child":[{"type":"Image","props":{"var":"img_win","skin":"paijiu_ui/game_ui/paijiu/tu_ying2.png","centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"compId":2}],"animations":[{"nodes":[{"target":2,"keyframes":{"x":[{"value":60,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":0},{"value":60,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":45}],"scaleY":[{"value":2,"tweenMethod":"backOut","tween":true,"target":2,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleY","index":30}],"scaleX":[{"value":2,"tweenMethod":"backOut","tween":true,"target":2,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleX","index":30}]}}],"name":"ani1","id":1,"frameRate":24,"action":1}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.nqp.game_ui.paijiu.component.YingUI.uiView);
        }
    }
}

module ui.nqp.game_ui.paijiu.component {
    export class Ying_1UI extends View {
		public ani1:Laya.FrameAnimation;

        public static  uiView:any ={"type":"View","props":{"width":400,"height":300},"child":[{"type":"Image","props":{"y":194,"x":197,"skin":"paijiu_ui/game_ui/paijiu/tu_ying.png","anchorY":0.5,"anchorX":0.5},"compId":2},{"type":"Image","props":{"y":70,"x":196,"skin":"paijiu_ui/game_ui/paijiu/tu_ying1.png","anchorY":0.5,"anchorX":0.5},"compId":3},{"type":"Image","props":{"y":65,"x":197,"skin":"paijiu_ui/game_ui/paijiu/effect/yanhua/10001.png","blendMode":"lighter","anchorY":0.5,"anchorX":0.5},"compId":4}],"animations":[{"nodes":[{"target":2,"keyframes":{"scaleY":[{"value":1.5,"tweenMethod":"backOut","tween":true,"target":2,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleY","index":10}],"scaleX":[{"value":1.5,"tweenMethod":"backOut","tween":true,"target":2,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleX","index":10}]}},{"target":3,"keyframes":{"scaleY":[{"value":1,"tweenMethod":"backOut","tween":true,"target":3,"key":"scaleY","index":0},{"value":0.5,"tweenMethod":"backOut","tween":true,"target":3,"key":"scaleY","index":5},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleY","index":10}],"scaleX":[{"value":1,"tweenMethod":"backOut","tween":true,"target":3,"key":"scaleX","index":0},{"value":0.5,"tweenMethod":"backOut","tween":true,"target":3,"key":"scaleX","index":5},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleX","index":10}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":4},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":5}]}},{"target":4,"keyframes":{"visible":[{"value":false,"tweenMethod":"linearNone","tween":false,"target":4,"key":"visible","index":0},{"value":true,"tweenMethod":"linearNone","tween":false,"target":4,"key":"visible","index":5}],"skin":[{"value":"paijiu_ui/game_ui/paijiu/effect/yanhua/10001.png","tweenMethod":"linearNone","tween":false,"target":4,"key":"skin","index":0},{"value":"paijiu_ui/game_ui/paijiu/effect/yanhua/10002.png","tweenMethod":"linearNone","tween":false,"target":4,"key":"skin","index":6},{"value":"paijiu_ui/game_ui/paijiu/effect/yanhua/10003.png","tweenMethod":"linearNone","tween":false,"target":4,"key":"skin","index":7},{"value":"paijiu_ui/game_ui/paijiu/effect/yanhua/10004.png","tweenMethod":"linearNone","tween":false,"target":4,"key":"skin","index":8},{"value":"paijiu_ui/game_ui/paijiu/effect/yanhua/10005.png","tweenMethod":"linearNone","tween":false,"target":4,"key":"skin","index":9},{"value":"paijiu_ui/game_ui/paijiu/effect/yanhua/10006.png","tweenMethod":"linearNone","tween":false,"target":4,"key":"skin","index":10},{"value":"paijiu_ui/game_ui/paijiu/effect/yanhua/10007.png","tweenMethod":"linearNone","tween":false,"target":4,"key":"skin","index":11},{"value":"paijiu_ui/game_ui/paijiu/effect/yanhua/10008.png","tweenMethod":"linearNone","tween":false,"target":4,"key":"skin","index":12},{"value":"paijiu_ui/game_ui/paijiu/effect/yanhua/10009.png","tweenMethod":"linearNone","tween":false,"target":4,"key":"skin","index":13},{"value":"paijiu_ui/game_ui/paijiu/effect/yanhua/10010.png","tweenMethod":"linearNone","tween":false,"target":4,"key":"skin","index":14},{"value":"paijiu_ui/game_ui/paijiu/effect/yanhua/10011.png","tweenMethod":"linearNone","tween":false,"target":4,"key":"skin","index":15},{"value":"paijiu_ui/game_ui/paijiu/effect/yanhua/10012.png","tweenMethod":"linearNone","tween":false,"target":4,"key":"skin","index":16},{"value":"paijiu_ui/game_ui/paijiu/effect/yanhua/10013.png","tweenMethod":"linearNone","tween":false,"target":4,"key":"skin","index":17},{"value":"paijiu_ui/game_ui/paijiu/effect/yanhua/10014.png","tweenMethod":"linearNone","tween":false,"target":4,"key":"skin","index":18},{"value":"paijiu_ui/game_ui/paijiu/effect/yanhua/10015.png","tweenMethod":"linearNone","tween":false,"target":4,"key":"skin","index":19},{"value":"paijiu_ui/game_ui/paijiu/effect/yanhua/10016.png","tweenMethod":"linearNone","tween":false,"target":4,"key":"skin","index":20},{"value":"paijiu_ui/game_ui/paijiu/effect/yanhua/10017.png","tweenMethod":"linearNone","tween":false,"target":4,"key":"skin","index":21},{"value":"paijiu_ui/game_ui/paijiu/effect/yanhua/10018.png","tweenMethod":"linearNone","tween":false,"target":4,"key":"skin","index":22},{"value":"paijiu_ui/game_ui/paijiu/effect/yanhua/10019.png","tweenMethod":"linearNone","tween":false,"target":4,"key":"skin","index":23},{"value":"paijiu_ui/game_ui/paijiu/effect/yanhua/10020.png","tweenMethod":"linearNone","tween":false,"target":4,"key":"skin","index":24},{"value":"paijiu_ui/game_ui/paijiu/effect/yanhua/10021.png","tweenMethod":"linearNone","tween":false,"target":4,"key":"skin","index":25}]}}],"name":"ani1","id":1,"frameRate":24,"action":1}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.nqp.game_ui.paijiu.component.Ying_1UI.uiView);
        }
    }
}

module ui.nqp.game_ui.paijiu.component {
    export class Ying_2UI extends View {
		public ani1:Laya.FrameAnimation;

        public static  uiView:any ={"type":"View","props":{"width":190,"height":138},"child":[{"type":"Image","props":{"width":190,"skin":"paijiu_ui/game_ui/paijiu/tu_ying.png","sizeGrid":"30,30,30,30","height":138,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"compId":2},{"type":"Image","props":{"y":10,"x":10,"width":190,"skin":"paijiu_ui/game_ui/paijiu/tu_ying.png","sizeGrid":"30,30,30,30","height":138,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5,"alpha":0},"compId":3}],"animations":[{"nodes":[{"target":2,"keyframes":{"scaleY":[{"value":2,"tweenMethod":"backInOut","tween":true,"target":2,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleY","index":5},{"value":1.5,"tweenMethod":"backInOut","tween":true,"target":2,"label":null,"key":"scaleY","index":10}],"scaleX":[{"value":2,"tweenMethod":"backInOut","tween":true,"target":2,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleX","index":5},{"value":1.5,"tweenMethod":"backInOut","tween":true,"target":2,"label":null,"key":"scaleX","index":10}],"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"alpha","index":5},{"value":0,"tweenMethod":"linearNone","tween":true,"target":2,"key":"alpha","index":10}]}},{"target":3,"keyframes":{"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":10},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":15}]}}],"name":"ani1","id":1,"frameRate":24,"action":1}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.nqp.game_ui.paijiu.component.Ying_2UI.uiView);
        }
    }
}

module ui.nqp.game_ui.paijiu {
    export class JieSuanUI extends View {
		public ani2:Laya.FrameAnimation;
		public lab_xinxi:Laya.Label;
		public list_settle:Laya.List;
		public btn_continue:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":810},"child":[{"type":"Box","props":{"width":837,"height":602,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":191,"x":401,"skin":"tongyong_ui/game_ui/tongyong/general/tu_gs.png","blendMode":"lighter","anchorY":0.5,"anchorX":0.5},"compId":44},{"type":"Image","props":{"width":800,"skin":"tongyong_ui/game_ui/tongyong/general/tu_bk1.png","sizeGrid":"30,20,0,20","height":450,"centerY":36,"centerX":-3,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":111,"x":405,"skin":"tongyong_ui/game_ui/tongyong/general/jiesuan_sl2.png","centerY":-190,"centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":121,"x":405,"skin":"tongyong_ui/game_ui/tongyong/general/jiesuan_js.png","centerY":-180,"centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":149,"x":391,"skin":"tongyong_ui/game_ui/tongyong/general/jiesuan_2.png","blendMode":"lighter","anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"y":486,"x":408,"wordWrap":true,"width":495,"var":"lab_xinxi","text":"50S后开始第00局，本轮共5局","leading":6,"height":23,"fontSize":20,"color":"#ffffff","anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Image","props":{"y":225,"x":61,"width":725,"skin":"tongyong_ui/game_ui/tongyong/general/jiesuan_d1.png","sizeGrid":"0,176,0,164","height":38,"alpha":0.6}},{"type":"Label","props":{"y":246,"x":172,"wordWrap":true,"width":63,"text":"昵称","leading":6,"height":23,"fontSize":20,"color":"#0e56c3","anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Label","props":{"y":246,"x":388,"wordWrap":true,"width":63,"text":"底分","leading":6,"height":23,"fontSize":20,"color":"#0e56c3","anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Label","props":{"y":246,"x":587,"wordWrap":true,"width":92,"text":"下注倍数","leading":6,"height":23,"fontSize":20,"color":"#0e56c3","anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Label","props":{"y":246,"x":684,"wordWrap":true,"width":63,"text":"金币","leading":6,"height":23,"fontSize":20,"color":"#0e56c3","anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"List","props":{"y":276,"x":59,"width":725,"var":"list_settle","spaceY":5,"repeatY":4,"height":169},"child":[{"type":"JieSuanRender1","props":{"y":0,"x":0,"name":"render","runtime":"ui.nqp.game_ui.tongyong.JieSuanRender1UI"}}]},{"type":"Label","props":{"y":246,"x":288,"wordWrap":true,"width":81,"text":"牌型 ","leading":6,"height":23,"fontSize":20,"color":"#0e56c3","anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Label","props":{"y":246,"x":487,"wordWrap":true,"width":84,"text":"抢庄倍数","leading":6,"height":23,"fontSize":20,"color":"#0e56c3","anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Button","props":{"y":493,"width":240,"var":"btn_continue","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_5.png","sizeGrid":"0,20,0,20","labelStrokeColor":"#9d8c27","labelStroke":2,"labelSize":26,"labelPadding":"-6","labelFont":"Microsoft YaHei","labelColors":"#ffffff","height":75,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":14,"x":62,"skin":"tongyong_ui/game_ui/tongyong/general/tu_jxyx.png"}}]}]}],"animations":[{"nodes":[{"target":44,"keyframes":{"rotation":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":44,"key":"rotation","index":0},{"value":360,"tweenMethod":"linearNone","tween":true,"target":44,"key":"rotation","index":100}]}}],"name":"ani2","id":2,"frameRate":24,"action":2}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.nqp.game_ui.tongyong.JieSuanRender1UI",ui.nqp.game_ui.tongyong.JieSuanRender1UI);

            super.createChildren();
            this.createView(ui.nqp.game_ui.paijiu.JieSuanUI.uiView);
        }
    }
}

module ui.nqp.game_ui.paijiu {
    export class PaiJiuUI extends View {
		public ani1:Laya.FrameAnimation;
		public box_view:Laya.Box;
		public text_info:laya.display.Text;
		public text_roomtype:laya.display.Text;
		public view_head0:ui.nqp.game_ui.paijiu.component.TouXiangUI;
		public view_head1:ui.nqp.game_ui.paijiu.component.TouXiangUI;
		public view_head3:ui.nqp.game_ui.paijiu.component.TouXiangUI;
		public view_head2:ui.nqp.game_ui.paijiu.component.TouXiangUI;
		public view_player2:ui.nqp.game_ui.paijiu.component.WanJia_RUI;
		public view_type:ui.nqp.game_ui.paijiu.component.PaiXingUI;
		public view_player3:ui.nqp.game_ui.paijiu.component.WanJia_LUI;
		public view_player1:ui.nqp.game_ui.paijiu.component.WanJia_RUI;
		public box_bet:Laya.Box;
		public btn_bet1:Laya.Button;
		public clip_bei1:Laya.Clip;
		public btn_bet2:Laya.Button;
		public clip_bei2:Laya.Clip;
		public btn_bet3:Laya.Button;
		public clip_bei3:Laya.Clip;
		public btn_bet4:Laya.Button;
		public clip_bei4:Laya.Clip;
		public btn_bet5:Laya.Button;
		public clip_bei5:Laya.Clip;
		public box_banker:Laya.Box;
		public btn_banker0:Laya.Button;
		public btn_banker1:Laya.Button;
		public btn_banker2:Laya.Button;
		public btn_banker3:Laya.Button;
		public btn_banker4:Laya.Button;
		public img_time:ui.nqp.game_ui.tongyong.DaoJiShiUI;
		public btn_continue:Laya.Button;
		public view_touzi:ui.nqp.game_ui.tongyong.effect.ShaiZiUI;
		public box_betnum:Laya.Box;
		public img_bg:Laya.Image;
		public img_num1:Laya.Image;
		public img_num0:Laya.Image;
		public view_arrow0:ui.nqp.game_ui.tongyong.jiangtouUI;
		public view_arrow1:ui.nqp.game_ui.tongyong.jiangtouUI;
		public view_arrow2:ui.nqp.game_ui.tongyong.jiangtouUI;
		public view_arrow3:ui.nqp.game_ui.tongyong.jiangtouUI;
		public btn_back:Laya.Button;
		public box_cards:Laya.Box;
		public img_card31:Laya.Image;
		public img_card1:Laya.Image;
		public img_card29:Laya.Image;
		public img_card4:Laya.Image;
		public img_card22:Laya.Image;
		public img_card23:Laya.Image;
		public img_card26:Laya.Image;
		public img_card3:Laya.Image;
		public img_card2:Laya.Image;
		public img_card5:Laya.Image;
		public img_card7:Laya.Image;
		public img_card27:Laya.Image;
		public img_card6:Laya.Image;
		public img_card8:Laya.Image;
		public img_card9:Laya.Image;
		public img_card30:Laya.Image;
		public img_card10:Laya.Image;
		public img_card24:Laya.Image;
		public img_card28:Laya.Image;
		public img_card25:Laya.Image;
		public img_card32:Laya.Image;
		public img_card21:Laya.Image;
		public img_card20:Laya.Image;
		public img_card19:Laya.Image;
		public img_card18:Laya.Image;
		public img_card17:Laya.Image;
		public img_card16:Laya.Image;
		public img_card15:Laya.Image;
		public img_card14:Laya.Image;
		public img_card13:Laya.Image;
		public img_card12:Laya.Image;
		public img_card11:Laya.Image;
		public btn_cards:Laya.Button;
		public btn_menu:Laya.Button;
		public img_menu:Laya.Image;
		public btn_rules:Laya.Button;
		public btn_cardtype:Laya.Button;
		public btn_set:Laya.Button;
		public btn_record:Laya.Button;
		public btn_qifu:Laya.Button;
		public btn_chongzhi:ui.nqp.game_ui.paijiu.component.Effect_chongzhiUI;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"y":360,"x":640,"width":1280,"var":"box_view","mouseEnabled":true,"height":720,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Text","props":{"y":655,"x":23,"width":333,"var":"text_info","text":"牌局号：1532315641561321231313 ","leading":6,"height":25,"fontSize":20,"color":"#ffffff"}},{"type":"Text","props":{"y":680,"x":23,"width":323,"var":"text_roomtype","text":"试玩场：底注：1","leading":6,"height":25,"fontSize":20,"color":"#ffffff"}},{"type":"TouXiang","props":{"y":508,"var":"view_head0","centerX":-177,"runtime":"ui.nqp.game_ui.paijiu.component.TouXiangUI"}},{"type":"TouXiang","props":{"y":277,"var":"view_head1","right":20,"runtime":"ui.nqp.game_ui.paijiu.component.TouXiangUI"}},{"type":"TouXiang","props":{"y":277,"x":18,"var":"view_head3","runtime":"ui.nqp.game_ui.paijiu.component.TouXiangUI"}},{"type":"TouXiang","props":{"y":36,"var":"view_head2","right":428,"runtime":"ui.nqp.game_ui.paijiu.component.TouXiangUI"}},{"type":"WanJia_R","props":{"y":-13,"x":457,"var":"view_player2","right":453,"runtime":"ui.nqp.game_ui.paijiu.component.WanJia_RUI"}},{"type":"PaiXing","props":{"y":663,"var":"view_type","centerX":0,"anchorY":0.5,"anchorX":0.5,"runtime":"ui.nqp.game_ui.paijiu.component.PaiXingUI"}},{"type":"WanJia_L","props":{"y":245,"x":32,"var":"view_player3","runtime":"ui.nqp.game_ui.paijiu.component.WanJia_LUI"}},{"type":"WanJia_R","props":{"y":246,"var":"view_player1","right":35,"runtime":"ui.nqp.game_ui.paijiu.component.WanJia_RUI"}},{"type":"Box","props":{"y":456,"width":877,"var":"box_bet","height":59,"centerX":-1,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Button","props":{"y":0,"x":0,"var":"btn_bet1","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_5.png","labelStrokeColor":"#7e2314","labelStroke":2,"labelSize":26,"labelPadding":"-10","labelFont":"Microsoft YaHei","labelColors":"#ffffff","disabled":false},"child":[{"type":"Image","props":{"y":13,"x":91,"skin":"tongyong_ui/game_ui/tongyong/general/tu_bei.png"}},{"type":"Box","props":{"y":9,"x":55,"width":32,"height":41},"child":[{"type":"Clip","props":{"var":"clip_bei1","skin":"tongyong_ui/game_ui/tongyong/general/clip_bs.png","clipX":10}}]}]},{"type":"Button","props":{"y":0,"x":178,"var":"btn_bet2","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_5.png","labelStrokeColor":"#9d8c27","labelStroke":2,"labelSize":26,"labelPadding":"-10","labelFont":"Microsoft YaHei","labelColors":"#ffffff"},"child":[{"type":"Image","props":{"y":13,"x":91,"skin":"tongyong_ui/game_ui/tongyong/general/tu_bei.png"}},{"type":"Box","props":{"y":9,"x":55,"width":32,"height":41},"child":[{"type":"Clip","props":{"var":"clip_bei2","skin":"tongyong_ui/game_ui/tongyong/general/clip_bs.png","clipX":10,"centerY":0,"centerX":0}}]}]},{"type":"Button","props":{"y":0,"x":355,"var":"btn_bet3","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_5.png","labelStrokeColor":"#9d8c27","labelStroke":2,"labelSize":26,"labelPadding":"-10","labelFont":"Microsoft YaHei","labelColors":"#ffffff"},"child":[{"type":"Image","props":{"y":13,"x":91,"skin":"tongyong_ui/game_ui/tongyong/general/tu_bei.png"}},{"type":"Box","props":{"y":9,"x":55,"width":32,"height":41},"child":[{"type":"Clip","props":{"var":"clip_bei3","skin":"tongyong_ui/game_ui/tongyong/general/clip_bs.png","clipX":10,"centerY":0,"centerX":0}}]}]},{"type":"Button","props":{"y":0,"x":533,"var":"btn_bet4","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_5.png","labelStrokeColor":"#9d8c27","labelStroke":2,"labelSize":26,"labelPadding":"-10","labelFont":"Microsoft YaHei","labelColors":"#ffffff"},"child":[{"type":"Image","props":{"y":13,"x":91,"skin":"tongyong_ui/game_ui/tongyong/general/tu_bei.png"}},{"type":"Box","props":{"y":9,"x":55,"width":32,"height":41},"child":[{"type":"Clip","props":{"var":"clip_bei4","skin":"tongyong_ui/game_ui/tongyong/general/clip_bs.png","clipX":10,"centerY":0,"centerX":0}}]}]},{"type":"Button","props":{"y":0,"x":710,"var":"btn_bet5","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_5.png","labelStrokeColor":"#9d8c27","labelStroke":2,"labelSize":26,"labelPadding":"-10","labelFont":"Microsoft YaHei","labelColors":"#ffffff"},"child":[{"type":"Image","props":{"y":13,"x":91,"skin":"tongyong_ui/game_ui/tongyong/general/tu_bei.png"}},{"type":"Box","props":{"y":9,"x":55,"width":32,"height":41},"child":[{"type":"Clip","props":{"var":"clip_bei5","skin":"tongyong_ui/game_ui/tongyong/general/clip_bs.png","clipX":10,"centerY":0,"centerX":0}}]}]}]},{"type":"Box","props":{"y":456,"width":877,"var":"box_banker","height":59,"centerX":-1,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Button","props":{"y":0,"x":0,"var":"btn_banker0","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_2.png","labelStrokeColor":"#7e2314","labelStroke":2,"labelSize":26,"labelPadding":"-6","labelFont":"Microsoft YaHei","labelColors":"#ffffff","disabled":false},"child":[{"type":"Image","props":{"y":13,"x":49,"skin":"paijiu_ui/game_ui/paijiu/tu_bq.png"}}]},{"type":"Button","props":{"y":0,"x":178,"var":"btn_banker1","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_5.png","labelStrokeColor":"#9d8c27","labelStroke":2,"labelSize":26,"labelPadding":"-10","labelFont":"Microsoft YaHei","labelColors":"#ffffff"},"child":[{"type":"Image","props":{"y":13,"x":91,"skin":"tongyong_ui/game_ui/tongyong/general/tu_bei.png"}},{"type":"Box","props":{"y":9,"x":55,"width":32,"height":41},"child":[{"type":"Clip","props":{"skin":"tongyong_ui/game_ui/tongyong/general/clip_bs.png","index":1,"clipX":10}}]}]},{"type":"Button","props":{"y":0,"x":355,"var":"btn_banker2","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_5.png","labelStrokeColor":"#9d8c27","labelStroke":2,"labelSize":26,"labelPadding":"-10","labelFont":"Microsoft YaHei","labelColors":"#ffffff"},"child":[{"type":"Image","props":{"y":13,"x":91,"skin":"tongyong_ui/game_ui/tongyong/general/tu_bei.png"}},{"type":"Box","props":{"y":9,"x":55,"width":32,"height":41},"child":[{"type":"Clip","props":{"skin":"tongyong_ui/game_ui/tongyong/general/clip_bs.png","index":2,"clipX":10}}]}]},{"type":"Button","props":{"y":0,"x":533,"var":"btn_banker3","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_5.png","labelStrokeColor":"#9d8c27","labelStroke":2,"labelSize":26,"labelPadding":"-10","labelFont":"Microsoft YaHei","labelColors":"#ffffff"},"child":[{"type":"Image","props":{"y":13,"x":91,"skin":"tongyong_ui/game_ui/tongyong/general/tu_bei.png"}},{"type":"Box","props":{"y":9,"x":55,"width":32,"height":41},"child":[{"type":"Clip","props":{"skin":"tongyong_ui/game_ui/tongyong/general/clip_bs.png","index":3,"clipX":10}}]}]},{"type":"Button","props":{"y":0,"x":710,"var":"btn_banker4","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_5.png","labelStrokeColor":"#9d8c27","labelStroke":2,"labelSize":26,"labelPadding":"-10","labelFont":"Microsoft YaHei","labelColors":"#ffffff"},"child":[{"type":"Image","props":{"y":13,"x":91,"skin":"tongyong_ui/game_ui/tongyong/general/tu_bei.png"}},{"type":"Box","props":{"y":9,"x":55,"width":32,"height":41},"child":[{"type":"Clip","props":{"skin":"tongyong_ui/game_ui/tongyong/general/clip_bs.png","index":4,"clipX":10}}]}]}]},{"type":"DaoJiShi","props":{"y":301,"x":639,"var":"img_time","scaleY":1.2,"scaleX":1.2,"anchorY":0.5,"anchorX":0.5,"runtime":"ui.nqp.game_ui.tongyong.DaoJiShiUI"}},{"type":"Button","props":{"width":240,"var":"btn_continue","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_5.png","sizeGrid":"0,20,0,20","labelStrokeColor":"#9d8c27","labelStroke":2,"labelSize":26,"labelPadding":"-6","labelFont":"Microsoft YaHei","labelColors":"#ffffff","height":75,"centerY":40,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":15,"x":58,"skin":"tongyong_ui/game_ui/tongyong/general/tu_jxyx.png"}}]},{"type":"ShaiZi","props":{"var":"view_touzi","centerY":-79,"centerX":0,"anchorY":0.5,"anchorX":0.5,"runtime":"ui.nqp.game_ui.tongyong.effect.ShaiZiUI"}},{"type":"Box","props":{"y":498,"x":639,"width":119,"var":"box_betnum","height":39,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":21,"x":58.5,"var":"img_bg","skin":"paijiu_ui/game_ui/paijiu/tu_bei.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":20,"x":48,"var":"img_num1","skin":"paijiu_ui/game_ui/paijiu/bei_0.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":20,"x":72,"var":"img_num0","skin":"paijiu_ui/game_ui/paijiu/bei_0.png","anchorY":0.5,"anchorX":0.5}}]},{"type":"jiangtou","props":{"y":586,"x":533,"var":"view_arrow0","anchorY":1,"anchorX":0.5,"runtime":"ui.nqp.game_ui.tongyong.jiangtouUI"}},{"type":"jiangtou","props":{"y":358,"x":1140,"var":"view_arrow1","scaleX":-1,"anchorY":1,"anchorX":0.5,"runtime":"ui.nqp.game_ui.tongyong.jiangtouUI"}},{"type":"jiangtou","props":{"y":101,"x":731,"var":"view_arrow2","scaleX":-1,"anchorY":1,"anchorX":0.5,"runtime":"ui.nqp.game_ui.tongyong.jiangtouUI"}},{"type":"jiangtou","props":{"y":358,"x":139,"var":"view_arrow3","anchorY":1,"anchorX":0.5,"runtime":"ui.nqp.game_ui.tongyong.jiangtouUI"}}]},{"type":"Button","props":{"var":"btn_back","top":16,"stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_fh1.png","right":10,"anchorY":0.5,"anchorX":0.5}},{"type":"Box","props":{"width":242,"var":"box_cards","top":0,"left":170,"height":221},"child":[{"type":"Image","props":{"y":216,"x":243,"width":251,"skin":"paijiu_ui/game_ui/paijiu/tu_kk.png","sizeGrid":"78,0,24,27","height":214,"anchorY":1,"anchorX":1}},{"type":"Box","props":{"y":14,"x":23},"child":[{"type":"Image","props":{"x":51,"var":"img_card31","skin":"paijiu_ui/game_ui/paijiu/paijiu_11.png"}},{"type":"Image","props":{"y":144,"x":180,"var":"img_card1","skin":"paijiu_ui/game_ui/paijiu/paijiu_12.png"}},{"type":"Image","props":{"x":154,"var":"img_card29","skin":"paijiu_ui/game_ui/paijiu/paijiu_13.png"}},{"type":"Image","props":{"y":144,"x":103,"var":"img_card4","skin":"paijiu_ui/game_ui/paijiu/paijiu_14.png"}},{"type":"Image","props":{"y":96,"x":103,"var":"img_card22","skin":"paijiu_ui/game_ui/paijiu/paijiu_15.png"}},{"type":"Image","props":{"y":96,"x":51,"var":"img_card23","skin":"paijiu_ui/game_ui/paijiu/paijiu_16.png"}},{"type":"Image","props":{"y":48,"x":103,"var":"img_card26","skin":"paijiu_ui/game_ui/paijiu/paijiu_22.png"}},{"type":"Image","props":{"y":144,"x":129,"var":"img_card3","skin":"paijiu_ui/game_ui/paijiu/paijiu_23.png"}},{"type":"Image","props":{"y":144,"x":154,"var":"img_card2","skin":"paijiu_ui/game_ui/paijiu/paijiu_24.png"}},{"type":"Image","props":{"y":144,"x":77,"var":"img_card5","skin":"paijiu_ui/game_ui/paijiu/paijiu_25.png"}},{"type":"Image","props":{"y":144,"x":26,"var":"img_card7","skin":"paijiu_ui/game_ui/paijiu/paijiu_26.png"}},{"type":"Image","props":{"y":48,"x":51,"var":"img_card27","skin":"paijiu_ui/game_ui/paijiu/paijiu_33.png"}},{"type":"Image","props":{"y":144,"x":51,"var":"img_card6","skin":"paijiu_ui/game_ui/paijiu/paijiu_34.png"}},{"type":"Image","props":{"y":144,"var":"img_card8","skin":"paijiu_ui/game_ui/paijiu/paijiu_35.png"}},{"type":"Image","props":{"y":96,"x":180,"var":"img_card9","skin":"paijiu_ui/game_ui/paijiu/paijiu_36.png"}},{"type":"Image","props":{"x":103,"var":"img_card30","skin":"paijiu_ui/game_ui/paijiu/paijiu_44.png"}},{"type":"Image","props":{"y":96,"x":154,"var":"img_card10","skin":"paijiu_ui/game_ui/paijiu/paijiu_45.png"}},{"type":"Image","props":{"y":96,"var":"img_card24","skin":"paijiu_ui/game_ui/paijiu/paijiu_46.png"}},{"type":"Image","props":{"y":48,"var":"img_card28","skin":"paijiu_ui/game_ui/paijiu/paijiu_55.png"}},{"type":"Image","props":{"y":48,"x":154,"var":"img_card25","skin":"paijiu_ui/game_ui/paijiu/paijiu_56.png"}},{"type":"Image","props":{"var":"img_card32","skin":"paijiu_ui/game_ui/paijiu/paijiu_66.png"}},{"type":"Image","props":{"x":26,"var":"img_card21","skin":"paijiu_ui/game_ui/paijiu/paijiu_66.png"}},{"type":"Image","props":{"x":77,"var":"img_card20","skin":"paijiu_ui/game_ui/paijiu/paijiu_11.png"}},{"type":"Image","props":{"x":129,"var":"img_card19","skin":"paijiu_ui/game_ui/paijiu/paijiu_44.png"}},{"type":"Image","props":{"x":180,"var":"img_card18","skin":"paijiu_ui/game_ui/paijiu/paijiu_13.png"}},{"type":"Image","props":{"y":48,"x":26,"var":"img_card17","skin":"paijiu_ui/game_ui/paijiu/paijiu_55.png"}},{"type":"Image","props":{"y":48,"x":77,"var":"img_card16","skin":"paijiu_ui/game_ui/paijiu/paijiu_33.png"}},{"type":"Image","props":{"y":48,"x":129,"var":"img_card15","skin":"paijiu_ui/game_ui/paijiu/paijiu_22.png"}},{"type":"Image","props":{"y":48,"x":180,"var":"img_card14","skin":"paijiu_ui/game_ui/paijiu/paijiu_56.png"}},{"type":"Image","props":{"y":96,"x":26,"var":"img_card13","skin":"paijiu_ui/game_ui/paijiu/paijiu_46.png"}},{"type":"Image","props":{"y":96,"x":77,"var":"img_card12","skin":"paijiu_ui/game_ui/paijiu/paijiu_16.png"}},{"type":"Image","props":{"y":96,"x":129,"var":"img_card11","skin":"paijiu_ui/game_ui/paijiu/paijiu_15.png"}}]}]},{"type":"Button","props":{"var":"btn_cards","top":16,"stateNum":1,"skin":"paijiu_ui/game_ui/paijiu/tu_tj1.png","left":90,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"var":"btn_menu","top":16,"stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_cd.png","left":10,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":0,"x":10,"width":180,"var":"img_menu","top":0,"skin":"tongyong_ui/game_ui/tongyong/general/cd_1.png","sizeGrid":"20,20,20,20","left":10,"height":293,"anchorY":0,"anchorX":0},"child":[{"type":"Image","props":{"y":145,"x":11,"width":160,"skin":"tongyong_ui/game_ui/tongyong/general/cd_2.png"}},{"type":"Image","props":{"y":216,"x":11,"width":160,"skin":"tongyong_ui/game_ui/tongyong/general/cd_2.png"}},{"type":"Image","props":{"y":73,"x":11,"width":160,"skin":"tongyong_ui/game_ui/tongyong/general/cd_2.png"}},{"type":"Button","props":{"y":84,"x":14,"var":"btn_rules","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_gz.png"}},{"type":"Button","props":{"y":13,"x":14,"var":"btn_cardtype","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_px.png"}},{"type":"Button","props":{"y":226,"x":14,"var":"btn_set","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_sz.png"}},{"type":"Button","props":{"y":157,"x":14,"var":"btn_record","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_zj.png"}}]},{"type":"Button","props":{"y":232,"x":1339,"var":"btn_qifu","top":16,"stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_qf.png","right":85,"anchorY":0.5,"anchorX":0.5}},{"type":"Effect_chongzhi","props":{"var":"btn_chongzhi","right":10,"bottom":0,"anchorY":0.5,"anchorX":0.5,"runtime":"ui.nqp.game_ui.paijiu.component.Effect_chongzhiUI"}}],"animations":[{"nodes":[{"target":105,"keyframes":{"y":[{"value":28,"tweenMethod":"linearNone","tween":true,"target":105,"key":"y","index":0},{"value":28,"tweenMethod":"linearNone","tween":true,"target":105,"key":"y","index":1}],"skin":[{"value":"ui/game_ui/shangong/effect/btn/00001.png","tweenMethod":"linearNone","tween":false,"target":105,"key":"skin","index":0},{"value":"ui/game_ui/shangong/effect/btn/00002.png","tweenMethod":"linearNone","tween":false,"target":105,"key":"skin","index":1},{"value":"ui/game_ui/shangong/effect/btn/00003.png","tweenMethod":"linearNone","tween":false,"target":105,"key":"skin","index":2},{"value":"ui/game_ui/shangong/effect/btn/00004.png","tweenMethod":"linearNone","tween":false,"target":105,"key":"skin","index":3},{"value":"ui/game_ui/shangong/effect/btn/00005.png","tweenMethod":"linearNone","tween":false,"target":105,"key":"skin","index":4},{"value":"ui/game_ui/shangong/effect/btn/00006.png","tweenMethod":"linearNone","tween":false,"target":105,"key":"skin","index":5},{"value":"ui/game_ui/shangong/effect/btn/00007.png","tweenMethod":"linearNone","tween":false,"target":105,"key":"skin","index":6},{"value":"ui/game_ui/shangong/effect/btn/00008.png","tweenMethod":"linearNone","tween":false,"target":105,"key":"skin","index":7},{"value":"ui/game_ui/shangong/effect/btn/00009.png","tweenMethod":"linearNone","tween":false,"target":105,"key":"skin","index":8},{"value":"ui/game_ui/shangong/effect/btn/00010.png","tweenMethod":"linearNone","tween":false,"target":105,"key":"skin","index":9}],"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":105,"key":"alpha","index":0}]}}],"name":"ani1","id":1,"frameRate":24,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("Text",laya.display.Text);
			View.regComponent("ui.nqp.game_ui.paijiu.component.TouXiangUI",ui.nqp.game_ui.paijiu.component.TouXiangUI);
			View.regComponent("ui.nqp.game_ui.paijiu.component.WanJia_RUI",ui.nqp.game_ui.paijiu.component.WanJia_RUI);
			View.regComponent("ui.nqp.game_ui.paijiu.component.PaiXingUI",ui.nqp.game_ui.paijiu.component.PaiXingUI);
			View.regComponent("ui.nqp.game_ui.paijiu.component.WanJia_LUI",ui.nqp.game_ui.paijiu.component.WanJia_LUI);
			View.regComponent("ui.nqp.game_ui.tongyong.DaoJiShiUI",ui.nqp.game_ui.tongyong.DaoJiShiUI);
			View.regComponent("ui.nqp.game_ui.tongyong.effect.ShaiZiUI",ui.nqp.game_ui.tongyong.effect.ShaiZiUI);
			View.regComponent("ui.nqp.game_ui.tongyong.jiangtouUI",ui.nqp.game_ui.tongyong.jiangtouUI);
			View.regComponent("ui.nqp.game_ui.paijiu.component.Effect_chongzhiUI",ui.nqp.game_ui.paijiu.component.Effect_chongzhiUI);

            super.createChildren();
            this.createView(ui.nqp.game_ui.paijiu.PaiJiuUI.uiView);
        }
    }
}

module ui.nqp.game_ui.paijiu {
    export class PaiJiu_GuiZeUI extends View {
		public btn_close:Laya.Button;
		public panel_rule:Laya.Panel;
		public lab_wanfa:Laya.Image;
		public panel_type:Laya.Panel;
		public lab_type:Laya.Image;
		public panel_daxiao:Laya.Panel;
		public lab_daxiao:Laya.Box;
		public panel_jiesuan:Laya.Panel;
		public lab_jiesuan:Laya.Image;
		public btn_tab:Laya.Tab;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"width":796,"height":510,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":-45,"x":-55,"skin":"tongyong_ui/game_ui/tongyong/dating/tu_bk2.png"}},{"type":"Image","props":{"y":9,"x":395,"skin":"tongyong_ui/game_ui/tongyong/hud/tit_game_rule.png","anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":-47,"x":764,"var":"btn_close","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/hud/btn_tuichu.png"}},{"type":"Panel","props":{"y":62,"x":188,"width":601,"var":"panel_rule","height":441},"child":[{"type":"Image","props":{"y":-18,"x":-10,"var":"lab_wanfa","skin":"paijiu_ui/game_ui/paijiu/guize_1.png"}}]},{"type":"Panel","props":{"y":64,"x":195,"width":602,"var":"panel_type","height":436},"child":[{"type":"Image","props":{"y":-1,"x":12,"var":"lab_type","skin":"paijiu_ui/game_ui/paijiu/guize_2.png"}}]},{"type":"Panel","props":{"y":64,"x":196,"width":600,"var":"panel_daxiao","height":445},"child":[{"type":"Box","props":{"y":-21,"x":-7,"width":612,"var":"lab_daxiao","height":1684},"child":[{"type":"Image","props":{"y":14,"x":-10,"skin":"paijiu_ui/game_ui/paijiu/guize_3.png"}},{"type":"Image","props":{"y":616,"x":-10,"skin":"paijiu_ui/game_ui/paijiu/guize_3_1.png"}},{"type":"Image","props":{"y":1206,"x":-5,"skin":"paijiu_ui/game_ui/paijiu/guize_3_2.png"}}]}]},{"type":"Panel","props":{"y":70,"x":197,"width":601,"var":"panel_jiesuan","height":432},"child":[{"type":"Image","props":{"y":0,"x":11,"var":"lab_jiesuan","skin":"paijiu_ui/game_ui/paijiu/guize_4.png"}}]},{"type":"Tab","props":{"y":57,"x":-12,"var":"btn_tab"},"child":[{"type":"Button","props":{"y":0,"x":0,"stateNum":2,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_wjjs.png","name":"item0"}},{"type":"Button","props":{"y":80,"stateNum":2,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_pxdx.png","name":"item1"}},{"type":"Button","props":{"y":160,"stateNum":2,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_pxsm.png","name":"item2"}},{"type":"Button","props":{"y":240,"stateNum":2,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_dpdx.png","name":"item3"}}]}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.nqp.game_ui.paijiu.PaiJiu_GuiZeUI.uiView);
        }
    }
}

module ui.nqp.game_ui.paijiu {
    export class PaiJiu_HUDUI extends View {
		public view_hud:ui.nqp.game_ui.tongyong.HudUI;
		public box_normal:Laya.Box;
		public box_right:Laya.Box;
		public img_room0:Laya.Box;
		public txt_least0:Laya.Clip;
		public txt_difen0:Laya.Clip;
		public img_room1:Laya.Box;
		public txt_least1:Laya.Clip;
		public txt_difen1:Laya.Clip;
		public img_room2:Laya.Box;
		public txt_least2:Laya.Clip;
		public txt_difen2:Laya.Clip;
		public img_room3:Laya.Box;
		public txt_least3:Laya.Clip;
		public txt_difen3:Laya.Clip;
		public box_fangka:Laya.Box;
		public btn_join:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Image","props":{"top":-1,"skin":"paijiu_ui/game_ui/paijiu/tu_zjh.png","right":-1,"left":-1,"bottom":-1}},{"type":"Hud","props":{"var":"view_hud","top":0,"runtime":"ui.nqp.game_ui.tongyong.HudUI","right":0,"left":0,"bottom":0}},{"type":"Box","props":{"var":"box_normal","top":0,"right":0,"mouseThrough":true,"left":1,"bottom":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Box","props":{"width":1278,"var":"box_right","height":465,"centerY":10,"centerX":-1,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Box","props":{"y":33,"width":274,"var":"img_room0","right":970,"height":340},"child":[{"type":"SkeletonPlayer","props":{"y":170,"x":137,"url":"paijiu_ui/game_ui/paijiu/sk/pajiu_0.sk"}},{"type":"Clip","props":{"y":308,"x":136,"width":15,"var":"txt_least0","skin":"tongyong_ui/game_ui/tongyong/dating/clip_dizhu3.png","height":18,"clipX":10}},{"type":"Clip","props":{"y":273,"x":140,"var":"txt_difen0","skin":"tongyong_ui/game_ui/tongyong/dating/clip_dizhu3.png","clipX":10}},{"type":"Image","props":{"y":270,"x":81,"skin":"tongyong_ui/game_ui/tongyong/hud/tu_df1.png"}},{"type":"Image","props":{"y":305,"x":88,"skin":"tongyong_ui/game_ui/tongyong/hud/tu_zr1.png"}}]},{"type":"Box","props":{"y":34,"width":274,"var":"img_room1","right":660,"height":339},"child":[{"type":"SkeletonPlayer","props":{"y":168,"x":136,"url":"paijiu_ui/game_ui/paijiu/sk/paijiu_1.sk"}},{"type":"Clip","props":{"y":307,"x":136,"width":15,"var":"txt_least1","skin":"tongyong_ui/game_ui/tongyong/dating/clip_dizhu2.png","height":18,"clipX":10}},{"type":"Clip","props":{"y":273,"x":140,"var":"txt_difen1","skin":"tongyong_ui/game_ui/tongyong/dating/clip_dizhu2.png","clipX":10}},{"type":"Image","props":{"y":269,"x":80,"skin":"tongyong_ui/game_ui/tongyong/hud/tu_df2.png"}},{"type":"Image","props":{"y":304,"x":89,"skin":"tongyong_ui/game_ui/tongyong/hud/tu_zr2.png"}}]},{"type":"Box","props":{"y":36,"width":276,"var":"img_room2","right":350,"height":337},"child":[{"type":"SkeletonPlayer","props":{"y":167,"x":138,"url":"paijiu_ui/game_ui/paijiu/sk/pajiu_2.sk"}},{"type":"Clip","props":{"y":303,"x":136,"width":15,"var":"txt_least2","skin":"tongyong_ui/game_ui/tongyong/dating/clip_dizhu1.png","height":18,"clipX":10}},{"type":"Clip","props":{"y":269,"x":139,"var":"txt_difen2","skin":"tongyong_ui/game_ui/tongyong/dating/clip_dizhu1.png","clipX":10}},{"type":"Image","props":{"y":267,"x":80,"skin":"tongyong_ui/game_ui/tongyong/hud/tu_df3.png"}},{"type":"Image","props":{"y":301,"x":88,"skin":"tongyong_ui/game_ui/tongyong/hud/tu_zr3.png"}}]},{"type":"Box","props":{"y":36,"width":276,"var":"img_room3","right":40,"height":337},"child":[{"type":"SkeletonPlayer","props":{"y":166,"x":139,"url":"paijiu_ui/game_ui/paijiu/sk/pajiu_3.sk"}},{"type":"Clip","props":{"y":304,"x":135,"width":15,"var":"txt_least3","skin":"tongyong_ui/game_ui/tongyong/dating/clip_dizhu3.png","height":18,"clipX":10}},{"type":"Clip","props":{"y":269,"x":139,"var":"txt_difen3","skin":"tongyong_ui/game_ui/tongyong/dating/clip_dizhu3.png","clipX":10}},{"type":"Image","props":{"y":267,"x":77,"skin":"tongyong_ui/game_ui/tongyong/hud/tu_df4.png"}},{"type":"Image","props":{"y":303,"x":85,"skin":"tongyong_ui/game_ui/tongyong/hud/tu_zr4.png"}}]}]}]},{"type":"Image","props":{"top":10,"skin":"paijiu_ui/game_ui/paijiu/zjh_title.png","centerX":200,"anchorY":0.5,"anchorX":0.5}},{"type":"Box","props":{"y":0,"x":0,"width":910,"var":"box_fangka","top":0,"right":0,"mouseThrough":true,"bottom":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Box","props":{"width":900,"right":0,"height":465,"centerY":20,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":232,"x":0,"skin":"tongyong_ui/game_ui/tongyong/hud/tu_fangka.png","right":421,"name":"item0","anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":14,"x":43,"skin":"tongyong_ui/game_ui/tongyong/hud/tu_fangka2.png"}}]},{"type":"Image","props":{"y":232,"x":0,"skin":"tongyong_ui/game_ui/tongyong/hud/tu_fangka1.png","right":72,"name":"item1","anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":39,"x":83,"skin":"tongyong_ui/game_ui/tongyong/hud/tu_fangka3.png"}}]}]}]},{"type":"Button","props":{"y":668,"x":640,"var":"btn_join","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_ksjr.png","centerX":0,"bottom":10,"anchorY":0.5,"anchorX":0.5}}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.nqp.game_ui.tongyong.HudUI",ui.nqp.game_ui.tongyong.HudUI);
			View.regComponent("SkeletonPlayer",laya.ani.bone.Skeleton);

            super.createChildren();
            this.createView(ui.nqp.game_ui.paijiu.PaiJiu_HUDUI.uiView);
        }
    }
}
