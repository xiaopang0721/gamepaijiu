
module ui.ajqp.game_ui.paijiu.component {
    export class Effect_xsUI extends View {
		public ani1:Laya.FrameAnimation;

        public static  uiView:any ={"type":"View","props":{"width":34,"height":39},"child":[{"type":"Image","props":{"y":19,"x":17,"skin":"paijiu_ui/game_ui/paijiu/tu_xian.png","anchorY":0.5,"anchorX":0.5},"compId":2},{"type":"Image","props":{"y":19,"x":17,"skin":"paijiu_ui/game_ui/paijiu/tu_xian.png","blendMode":"lighter","anchorY":0.5,"anchorX":0.5,"alpha":0},"compId":3}],"animations":[{"nodes":[{"target":2,"keyframes":{"scaleY":[{"value":2,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleY","index":0},{"value":0.9,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleY","index":3},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleY","index":4}],"scaleX":[{"value":2,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleX","index":0},{"value":0.9,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleX","index":3},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleX","index":4}],"alpha":[{"value":0.3,"tweenMethod":"linearNone","tween":true,"target":2,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"alpha","index":3}]}},{"target":3,"keyframes":{"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":false,"target":3,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"label":null,"key":"scaleY","index":4},{"value":1.5,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleY","index":8}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":false,"target":3,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"label":null,"key":"scaleX","index":4},{"value":1.5,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleX","index":8}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":false,"target":3,"key":"alpha","index":0},{"value":0.7,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":4},{"value":0,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":8}]}}],"name":"ani1","id":1,"frameRate":24,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.game_ui.paijiu.component.Effect_xsUI.uiView);
        }
    }
}

module ui.ajqp.game_ui.paijiu.component {
    export class Effect_xscxUI extends View {
		public ani1:Laya.FrameAnimation;

        public static  uiView:any ={"type":"View","props":{"width":200,"height":150},"child":[{"type":"Image","props":{"skin":"paijiu_ui/game_ui/paijiu/tu_xian.png","scaleY":2,"scaleX":2,"centerY":11,"centerX":0,"anchorY":0.5,"anchorX":0.5,"alpha":1},"compId":2},{"type":"Image","props":{"skin":"paijiu_ui/game_ui/paijiu/tu_guang01.png","scaleY":1,"scaleX":0,"centerY":0,"centerX":0,"blendMode":"lighter","anchorY":0.5,"anchorX":0.5,"alpha":0},"compId":3}],"animations":[{"nodes":[{"target":3,"keyframes":{"scaleY":[{"value":0.1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleY","index":0},{"value":0.8,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleY","index":3},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleY","index":5}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleX","index":0},{"value":0.92,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleX","index":3},{"value":0.8,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleX","index":5},{"value":0,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleX","index":8}],"alpha":[{"value":0.3,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":3},{"value":0.8,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":5},{"value":0,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":8}]}},{"target":2,"keyframes":{"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":2,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":2,"key":"alpha","index":5},{"value":1,"tweenMethod":"linearNone","tween":false,"target":2,"key":"alpha","index":6}]}}],"name":"ani1","id":1,"frameRate":24,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.game_ui.paijiu.component.Effect_xscxUI.uiView);
        }
    }
}

module ui.ajqp.game_ui.paijiu.component {
    export class Effect_yqpUI extends View {
		public ani1:Laya.FrameAnimation;
		public box_qiang:Laya.Box;
		public img_rate:Laya.Image;
		public box_buqiang:Laya.Box;
		public box_bet:Laya.Box;

        public static  uiView:any ={"type":"View","props":{"width":97,"height":67},"child":[{"type":"Box","props":{"y":67,"x":87,"width":97,"scaleY":1,"scaleX":1,"height":67,"anchorY":1,"anchorX":0.9},"compId":4,"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"paijiu_ui/game_ui/paijiu/effect/qp/tu_cz.png"}},{"type":"Box","props":{"y":32,"x":49,"width":84,"var":"box_qiang","height":30,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":2,"x":2,"skin":"paijiu_ui/game_ui/paijiu/effect/qp/qiang_1.png"}},{"type":"Image","props":{"y":21,"x":45,"var":"img_rate","skin":"paijiu_ui/game_ui/paijiu/effect/qp/bei_0.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":7,"x":56,"skin":"paijiu_ui/game_ui/paijiu/effect/qp/qiang_b.png"}}]},{"type":"Box","props":{"y":34,"x":46,"width":59,"var":"box_buqiang","height":32,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"x":0,"skin":"paijiu_ui/game_ui/paijiu/effect/qp/qiang_0.png"}}]},{"type":"Box","props":{"y":33,"x":49,"width":86,"var":"box_bet","height":30,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":21,"x":53,"skin":"paijiu_ui/game_ui/paijiu/effect/qp/bei_0.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":21,"x":37,"skin":"paijiu_ui/game_ui/paijiu/effect/qp/bei_0.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":17,"x":16,"skin":"paijiu_ui/game_ui/paijiu/effect/qp/tu_xia.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":7,"x":58,"skin":"paijiu_ui/game_ui/paijiu/effect/qp/qiang_b.png"}}]}]}],"animations":[{"nodes":[{"target":4,"keyframes":{"y":[{"value":61,"tweenMethod":"linearNone","tween":false,"target":4,"key":"y","index":0},{"value":61,"tweenMethod":"linearNone","tween":false,"target":4,"label":null,"key":"y","index":5},{"value":61,"tweenMethod":"linearNone","tween":true,"target":4,"label":null,"key":"y","index":6},{"value":46,"tweenMethod":"linearNone","tween":true,"target":4,"key":"y","index":15},{"value":39,"tweenMethod":"linearNone","tween":true,"target":4,"label":null,"key":"y","index":27}],"scaleY":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":false,"target":4,"key":"scaleY","index":5}],"scaleX":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":false,"target":4,"key":"scaleX","index":5}]}}],"name":"ani1","id":1,"frameRate":24,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.game_ui.paijiu.component.Effect_yqpUI.uiView);
        }
    }
}

module ui.ajqp.game_ui.paijiu.component {
    export class Effect_zqpUI extends View {
		public ani1:Laya.FrameAnimation;
		public box_qiang:Laya.Box;
		public img_rate:Laya.Image;
		public box_buqiang:Laya.Box;
		public box_bet:Laya.Box;
		public img_betRate:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":97,"height":67},"child":[{"type":"Box","props":{"y":67,"x":19,"width":97,"scaleY":1,"scaleX":1,"height":67,"anchorY":1,"anchorX":0.2},"compId":4,"child":[{"type":"Image","props":{"skin":"paijiu_ui/game_ui/paijiu/effect/qp/tu_cz.png","scaleX":-1,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Box","props":{"y":34,"x":49,"width":84,"var":"box_qiang","height":30,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":2,"x":3,"skin":"paijiu_ui/game_ui/paijiu/effect/qp/qiang_1.png"}},{"type":"Image","props":{"y":21,"x":44,"var":"img_rate","skin":"paijiu_ui/game_ui/paijiu/effect/qp/bei_0.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":8,"x":52,"skin":"paijiu_ui/game_ui/paijiu/effect/qp/qiang_b.png"}}]},{"type":"Box","props":{"y":35,"x":51,"width":59,"var":"box_buqiang","height":32,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":0,"x":-3,"skin":"paijiu_ui/game_ui/paijiu/effect/qp/qiang_0.png"}}]},{"type":"Box","props":{"y":35,"x":49,"width":86,"var":"box_bet","height":30,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":21,"x":53,"var":"img_betRate","skin":"paijiu_ui/game_ui/paijiu/effect/qp/bei_0.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":21,"x":37,"skin":"paijiu_ui/game_ui/paijiu/effect/qp/bei_0.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":17,"x":16,"skin":"paijiu_ui/game_ui/paijiu/effect/qp/tu_xia.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":7,"x":58,"skin":"paijiu_ui/game_ui/paijiu/effect/qp/qiang_b.png"}}]}]}],"animations":[{"nodes":[{"target":4,"keyframes":{"y":[{"value":61,"tweenMethod":"linearNone","tween":false,"target":4,"key":"y","index":0},{"value":61,"tweenMethod":"linearNone","tween":false,"target":4,"label":null,"key":"y","index":5},{"value":61,"tweenMethod":"linearNone","tween":true,"target":4,"label":null,"key":"y","index":6},{"value":46,"tweenMethod":"linearNone","tween":true,"target":4,"key":"y","index":15},{"value":39,"tweenMethod":"linearNone","tween":true,"target":4,"label":null,"key":"y","index":27}],"scaleY":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":false,"target":4,"key":"scaleY","index":5}],"scaleX":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":false,"target":4,"key":"scaleX","index":5}]}}],"name":"ani1","id":1,"frameRate":24,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.game_ui.paijiu.component.Effect_zqpUI.uiView);
        }
    }
}

module ui.ajqp.game_ui.paijiu.component {
    export class PaiXingUI extends View {
		public ani1:Laya.FrameAnimation;
		public img_type:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":160,"height":80},"child":[{"type":"Image","props":{"y":46,"x":80,"width":210,"skin":"paijiu_ui/game_ui/paijiu/brnntype_bgimg_1.png","height":62,"anchorY":0.5,"anchorX":0.5},"compId":2},{"type":"Box","props":{"y":38,"x":88,"width":165,"height":60,"anchorY":0.5,"anchorX":0.5},"compId":6,"child":[{"type":"Image","props":{"y":32,"x":75,"visible":true,"var":"img_type","skin":"paijiu_ui/game_ui/paijiu/pjtype_1.png","scaleY":1,"scaleX":1,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Image","props":{"y":37,"x":74,"skin":"paijiu_ui/game_ui/paijiu/tu_g1.png","blendMode":"lighter","anchorY":0.5,"anchorX":0.5},"compId":4}],"animations":[{"nodes":[{"target":2,"keyframes":{"x":[{"value":-5,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":0},{"value":76,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":3},{"value":80,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":10}]}},{"target":4,"keyframes":{"y":[{"value":37,"tweenMethod":"linearNone","tween":true,"target":4,"key":"y","index":0},{"value":37,"tweenMethod":"linearNone","tween":true,"target":4,"key":"y","index":3}],"visible":[{"value":false,"tweenMethod":"linearNone","tween":false,"target":4,"key":"visible","index":0},{"value":true,"tweenMethod":"linearNone","tween":false,"target":4,"key":"visible","index":3}],"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleY","index":3},{"value":1.5,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleY","index":13}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleX","index":3},{"value":1.5,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleX","index":13}],"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":4,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":4,"key":"alpha","index":3},{"value":0,"tweenMethod":"linearNone","tween":true,"target":4,"key":"alpha","index":13}]}},{"target":6,"keyframes":{"visible":[{"value":false,"tweenMethod":"linearNone","tween":false,"target":6,"key":"visible","index":0},{"value":true,"tweenMethod":"linearNone","tween":false,"target":6,"key":"visible","index":3}],"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":6,"key":"scaleY","index":0},{"value":1.5,"tweenMethod":"backOut","tween":true,"target":6,"key":"scaleY","index":3},{"value":1,"tweenMethod":"linearNone","tween":true,"target":6,"key":"scaleY","index":11}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":6,"key":"scaleX","index":0},{"value":1.5,"tweenMethod":"backOut","tween":true,"target":6,"key":"scaleX","index":3},{"value":1,"tweenMethod":"linearNone","tween":true,"target":6,"key":"scaleX","index":11}]}}],"name":"ani1","id":1,"frameRate":24,"action":1}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.game_ui.paijiu.component.PaiXingUI.uiView);
        }
    }
}

module ui.ajqp.game_ui.paijiu.component {
    export class WanJia_LUI extends View {
		public view_type:ui.ajqp.game_ui.paijiu.component.PaiXingUI;
		public box_betnum:Laya.Box;
		public img_bg:Laya.Image;
		public img_num1:Laya.Image;
		public img_num0:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":370,"height":180},"child":[{"type":"PaiXing","props":{"y":189,"x":189,"var":"view_type","anchorY":0.5,"anchorX":0.5,"runtime":"ui.ajqp.game_ui.paijiu.component.PaiXingUI"}},{"type":"Box","props":{"y":24,"x":191,"width":119,"var":"box_betnum","height":39,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":21,"x":58.5,"var":"img_bg","skin":"paijiu_ui/game_ui/paijiu/tu_bei.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":20,"x":48,"var":"img_num1","skin":"paijiu_ui/game_ui/paijiu/bei_0.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":20,"x":72,"var":"img_num0","skin":"paijiu_ui/game_ui/paijiu/bei_0.png","anchorY":0.5,"anchorX":0.5}}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.ajqp.game_ui.paijiu.component.PaiXingUI",ui.ajqp.game_ui.paijiu.component.PaiXingUI);

            super.createChildren();
            this.createView(ui.ajqp.game_ui.paijiu.component.WanJia_LUI.uiView);
        }
    }
}

module ui.ajqp.game_ui.paijiu.component {
    export class WanJia_RUI extends View {
		public view_type:ui.ajqp.game_ui.paijiu.component.PaiXingUI;

        public static  uiView:any ={"type":"View","props":{"width":370,"height":180},"child":[{"type":"PaiXing","props":{"y":190,"x":181,"var":"view_type","anchorY":0.5,"anchorX":0.5,"runtime":"ui.ajqp.game_ui.paijiu.component.PaiXingUI"}}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.ajqp.game_ui.paijiu.component.PaiXingUI",ui.ajqp.game_ui.paijiu.component.PaiXingUI);

            super.createChildren();
            this.createView(ui.ajqp.game_ui.paijiu.component.WanJia_RUI.uiView);
        }
    }
}

module ui.ajqp.game_ui.paijiu.component {
    export class YingUI extends View {
		public ani1:Laya.FrameAnimation;
		public img_win:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":120,"height":120},"child":[{"type":"Image","props":{"x":60,"var":"img_win","skin":"paijiu_ui/game_ui/paijiu/tu_ying2.png","scaleY":1,"scaleX":1,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"compId":2},{"type":"Image","props":{"y":10,"x":70,"skin":"paijiu_ui/game_ui/paijiu/tu_ying2.png","scaleY":1,"scaleX":1,"centerY":0,"centerX":0,"blendMode":"lighter","anchorY":0.5,"anchorX":0.5,"alpha":0},"compId":3}],"animations":[{"nodes":[{"target":2,"keyframes":{"scaleY":[{"value":2,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleY","index":0},{"value":0.9,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleY","index":5},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleY","index":7}],"scaleX":[{"value":2,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleX","index":0},{"value":0.9,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleX","index":5},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleX","index":7}]}},{"target":3,"keyframes":{"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":false,"target":3,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleY","index":4},{"value":1.3,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleY","index":11}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":false,"target":3,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleX","index":4},{"value":1.3,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleX","index":11}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":false,"target":3,"key":"alpha","index":0},{"value":0.5,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":4},{"value":0,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":12}]}}],"name":"ani1","id":1,"frameRate":24,"action":1}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.game_ui.paijiu.component.YingUI.uiView);
        }
    }
}

module ui.ajqp.game_ui.paijiu.component {
    export class Ying_1UI extends View {
		public ani1:Laya.FrameAnimation;

        public static  uiView:any ={"type":"View","props":{"width":434,"height":465},"child":[{"type":"Image","props":{"y":202,"x":217,"width":434,"skin":"paijiu_ui/game_ui/paijiu/effect/nyl/tu_guang.png","scaleY":1,"scaleX":0.9,"rotation":20,"pivotY":186,"pivotX":215,"height":373,"alpha":1},"compId":8},{"type":"Image","props":{"y":193,"x":217,"skin":"paijiu_ui/game_ui/paijiu/effect/nyl/tu_hg.png","scaleY":1,"scaleX":1,"anchorY":0.5,"anchorX":0.5},"compId":7},{"type":"Image","props":{"y":203,"x":221,"skin":"paijiu_ui/game_ui/paijiu/effect/nyl/tu_kuang.png","scaleY":1,"scaleX":1,"anchorY":0.5,"anchorX":0.5},"compId":6},{"type":"Image","props":{"y":204,"x":218,"skin":"paijiu_ui/game_ui/paijiu/effect/nyl/tu_nyl.png","scaleY":1,"scaleX":1,"anchorY":0.5,"anchorX":0.5},"compId":5},{"type":"Image","props":{"y":194,"x":218,"skin":"paijiu_ui/game_ui/paijiu/effect/nyl/tu_nylh.png","scaleY":1.4,"scaleX":1.4,"blendMode":"lighter","anchorY":0.5,"anchorX":0.5,"alpha":0},"compId":20},{"type":"Image","props":{"y":349,"x":221,"skin":"tongyong_ui/game_ui/tongyong/nyl/tu_ying01.png","scaleY":1,"scaleX":1,"anchorY":0.5,"anchorX":0.5,"alpha":1},"compId":14}],"animations":[{"nodes":[{"target":5,"keyframes":{"scaleY":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":5,"key":"scaleY","index":0},{"value":1.4,"tweenMethod":"linearNone","tween":true,"target":5,"key":"scaleY","index":7},{"value":1,"tweenMethod":"linearNone","tween":true,"target":5,"key":"scaleY","index":10}],"scaleX":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":5,"key":"scaleX","index":0},{"value":1.4,"tweenMethod":"linearNone","tween":true,"target":5,"key":"scaleX","index":7},{"value":1,"tweenMethod":"linearNone","tween":true,"target":5,"key":"scaleX","index":10}]}},{"target":8,"keyframes":{"y":[{"value":198,"tweenMethod":"linearNone","tween":false,"target":8,"key":"y","index":0},{"value":202,"tweenMethod":"linearNone","tween":true,"target":8,"key":"y","index":4}],"x":[{"value":206,"tweenMethod":"linearNone","tween":false,"target":8,"key":"x","index":0},{"value":217,"tweenMethod":"linearNone","tween":true,"target":8,"key":"x","index":4}],"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":false,"target":8,"key":"scaleY","index":0},{"value":0.2,"tweenMethod":"linearNone","tween":true,"target":8,"key":"scaleY","index":4},{"value":1.1,"tweenMethod":"linearNone","tween":true,"target":8,"key":"scaleY","index":7},{"value":1,"tweenMethod":"linearNone","tween":true,"target":8,"key":"scaleY","index":10}],"scaleX":[{"value":0.9,"tweenMethod":"linearNone","tween":false,"target":8,"key":"scaleX","index":0},{"value":0.2,"tweenMethod":"linearNone","tween":true,"target":8,"key":"scaleX","index":4},{"value":1,"tweenMethod":"linearNone","tween":true,"target":8,"key":"scaleX","index":7},{"value":0.9,"tweenMethod":"linearNone","tween":true,"target":8,"key":"scaleX","index":10}],"rotation":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":8,"key":"rotation","index":0},{"value":20,"tweenMethod":"linearNone","tween":true,"target":8,"key":"rotation","index":60}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":false,"target":8,"key":"alpha","index":0},{"value":0.8,"tweenMethod":"linearNone","tween":true,"target":8,"key":"alpha","index":4},{"value":1,"tweenMethod":"linearNone","tween":true,"target":8,"key":"alpha","index":10}]}},{"target":6,"keyframes":{"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":6,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":6,"key":"scaleY","index":6},{"value":1.1,"tweenMethod":"linearNone","tween":true,"target":6,"key":"scaleY","index":10},{"value":1,"tweenMethod":"linearNone","tween":true,"target":6,"key":"scaleY","index":16}],"scaleX":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":6,"key":"scaleX","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":6,"key":"scaleX","index":6},{"value":1.2,"tweenMethod":"linearNone","tween":true,"target":6,"key":"scaleX","index":10},{"value":1,"tweenMethod":"linearNone","tween":true,"target":6,"key":"scaleX","index":16}]}},{"target":7,"keyframes":{"scaleY":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":7,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":7,"key":"scaleY","index":5},{"value":1.2,"tweenMethod":"linearNone","tween":true,"target":7,"key":"scaleY","index":6},{"value":1.2,"tweenMethod":"linearNone","tween":true,"target":7,"key":"scaleY","index":10},{"value":1,"tweenMethod":"linearNone","tween":true,"target":7,"key":"scaleY","index":12}],"scaleX":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":7,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":7,"key":"scaleX","index":5},{"value":1.2,"tweenMethod":"linearNone","tween":true,"target":7,"key":"scaleX","index":6},{"value":1.2,"tweenMethod":"linearNone","tween":true,"target":7,"key":"scaleX","index":10},{"value":1,"tweenMethod":"linearNone","tween":true,"target":7,"key":"scaleX","index":12}]}},{"target":14,"keyframes":{"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":14,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":14,"key":"alpha","index":1}]}},{"target":20,"keyframes":{"scaleY":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":20,"key":"scaleY","index":0},{"value":1.4,"tweenMethod":"linearNone","tween":true,"target":20,"key":"scaleY","index":7},{"value":1,"tweenMethod":"linearNone","tween":true,"target":20,"key":"scaleY","index":10},{"value":1.4,"tweenMethod":"linearNone","tween":true,"target":20,"key":"scaleY","index":28}],"scaleX":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":20,"key":"scaleX","index":0},{"value":1.4,"tweenMethod":"linearNone","tween":true,"target":20,"key":"scaleX","index":7},{"value":1,"tweenMethod":"linearNone","tween":true,"target":20,"key":"scaleX","index":10},{"value":1.4,"tweenMethod":"linearNone","tween":true,"target":20,"key":"scaleX","index":28}],"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":20,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":20,"key":"alpha","index":7},{"value":1,"tweenMethod":"linearNone","tween":true,"target":20,"key":"alpha","index":10},{"value":0,"tweenMethod":"linearNone","tween":true,"target":20,"key":"alpha","index":28}]}}],"name":"ani1","id":1,"frameRate":24,"action":1}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.game_ui.paijiu.component.Ying_1UI.uiView);
        }
    }
}

module ui.ajqp.game_ui.paijiu.component {
    export class Ying_2UI extends View {
		public ani1:Laya.FrameAnimation;

        public static  uiView:any ={"type":"View","props":{"width":190,"height":138},"child":[{"type":"Image","props":{"y":59,"x":95,"skin":"tongyong_ui/game_ui/tongyong/nyl/tu_ying01.png","sizeGrid":"30,30,30,30","scaleY":0.74,"scaleX":0.52,"anchorY":0.5,"anchorX":0.5},"compId":2},{"type":"Image","props":{"y":59,"x":95,"skin":"tongyong_ui/game_ui/tongyong/nyl/tu_ying01.png","sizeGrid":"30,30,30,30","scaleY":0.74,"scaleX":0.52,"anchorY":0.5,"anchorX":0.5,"alpha":1},"compId":3}],"animations":[{"nodes":[{"target":2,"keyframes":{"scaleY":[{"value":0.75,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleY","index":0},{"value":0.75,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"scaleY","index":4},{"value":0.75,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"scaleY","index":6}],"scaleX":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleX","index":0},{"value":0.65,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"scaleX","index":4},{"value":0.54,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"scaleX","index":6}]}},{"target":3,"keyframes":{"scaleY":[{"value":0.75,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleY","index":0},{"value":0.85,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleY","index":4}],"scaleX":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleX","index":0},{"value":0.72,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleX","index":4}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":0},{"value":0.3,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":3},{"value":0,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":5}]}}],"name":"ani1","id":1,"frameRate":24,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.game_ui.paijiu.component.Ying_2UI.uiView);
        }
    }
}

module ui.ajqp.game_ui.paijiu {
    export class JieSuanUI extends View {
		public lab_xinxi:Laya.Label;
		public list_settle:Laya.List;
		public btn_continue:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"JieSuan_wd","props":{"runtime":"ui.ajqp.game_ui.tongyong.JieSuan_wdUI"}},{"type":"Box","props":{"width":837,"height":602,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Label","props":{"y":486,"x":408,"wordWrap":true,"width":495,"var":"lab_xinxi","text":"50S后开始第00局，本轮共5局","leading":6,"height":23,"fontSize":20,"color":"#ffff96","anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Label","props":{"y":236,"x":132,"wordWrap":true,"width":63,"text":"昵称","leading":6,"height":23,"fontSize":24,"color":"#f1cd82","anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Label","props":{"y":236,"x":362,"wordWrap":true,"width":63,"text":"底分","leading":6,"height":23,"fontSize":24,"color":"#f1cd82","anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Label","props":{"y":236,"x":580,"wordWrap":true,"width":96,"text":"下注倍数","leading":6,"height":23,"fontSize":24,"color":"#f1cd82","anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Label","props":{"y":236,"x":688,"wordWrap":true,"width":63,"text":"金币","leading":6,"height":23,"fontSize":24,"color":"#f1cd82","anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"List","props":{"y":266,"x":59,"width":725,"var":"list_settle","spaceY":9,"repeatY":4,"height":169},"child":[{"type":"JieSuanRender1","props":{"y":0,"x":-42,"name":"render","runtime":"ui.ajqp.game_ui.tongyong.JieSuanRender1UI"}}]},{"type":"Label","props":{"y":236,"x":268,"wordWrap":true,"width":81,"text":"牌型 ","leading":6,"height":23,"fontSize":24,"color":"#f1cd82","anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Label","props":{"y":236,"x":464,"wordWrap":true,"width":100,"text":"抢庄倍数","leading":6,"height":23,"fontSize":24,"color":"#f1cd82","anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Button","props":{"y":505,"var":"btn_continue","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/anniu/btn_1.png","sizeGrid":"0,20,0,20","labelStrokeColor":"#9d8c27","labelStroke":2,"labelSize":26,"labelPadding":"-6","labelFont":"Microsoft YaHei","labelColors":"#ffffff","centerX":-13,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":17,"x":35,"skin":"tongyong_ui/game_ui/tongyong/general/tu_jxyx.png"}}]}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.ajqp.game_ui.tongyong.JieSuan_wdUI",ui.ajqp.game_ui.tongyong.JieSuan_wdUI);
			View.regComponent("ui.ajqp.game_ui.tongyong.JieSuanRender1UI",ui.ajqp.game_ui.tongyong.JieSuanRender1UI);

            super.createChildren();
            this.createView(ui.ajqp.game_ui.paijiu.JieSuanUI.uiView);
        }
    }
}

module ui.ajqp.game_ui.paijiu {
    export class PaiJiuUI extends View {
		public ani1:Laya.FrameAnimation;
		public box_view:Laya.Box;
		public text_info:laya.display.Text;
		public view_head0:ui.ajqp.game_ui.tongyong.TouXiangqzUI;
		public view_head1:ui.ajqp.game_ui.tongyong.TouXiangqzUI;
		public view_head3:ui.ajqp.game_ui.tongyong.TouXiangqzUI;
		public view_head2:ui.ajqp.game_ui.tongyong.TouXiangqzUI;
		public view_player2:ui.ajqp.game_ui.paijiu.component.WanJia_RUI;
		public view_type:ui.ajqp.game_ui.paijiu.component.PaiXingUI;
		public view_player3:ui.ajqp.game_ui.paijiu.component.WanJia_LUI;
		public view_player1:ui.ajqp.game_ui.paijiu.component.WanJia_RUI;
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
		public img_time:ui.ajqp.game_ui.tongyong.DaoJiShiUI;
		public btn_continue:Laya.Button;
		public view_touzi:ui.ajqp.game_ui.tongyong.effect.ShaiZiUI;
		public view_arrow0:ui.ajqp.game_ui.tongyong.jiangtouUI;
		public view_arrow1:ui.ajqp.game_ui.tongyong.jiangtouUI;
		public view_arrow2:ui.ajqp.game_ui.tongyong.jiangtouUI;
		public view_arrow3:ui.ajqp.game_ui.tongyong.jiangtouUI;
		public box_roomtype:Laya.Box;
		public text_roomtype:laya.display.Text;
		public btn_back:Laya.Button;
		public btn_cards:Laya.Button;
		public btn_menu:Laya.Button;
		public img_menu:Laya.Image;
		public btn_rules:Laya.Button;
		public btn_set:Laya.Button;
		public btn_record:Laya.Button;
		public btn_qifu:Laya.Button;
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
		public btn_chongzhi:ui.ajqp.game_ui.tongyong.effect.ChongzhiUI;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"y":360,"x":640,"width":1280,"var":"box_view","mouseEnabled":true,"height":720,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":0,"x":106,"width":336,"skin":"tongyong_ui/game_ui/tongyong/general/tu_pjhd.png","sizeGrid":"0,10,0,10","height":39}},{"type":"Text","props":{"y":7,"x":109,"width":330,"var":"text_info","text":"牌局号：1532315641561321231313 ","leading":6,"height":25,"fontSize":20,"color":"#ffffff"}},{"type":"TouXiangqz","props":{"y":508,"var":"view_head0","centerX":-177,"runtime":"ui.ajqp.game_ui.tongyong.TouXiangqzUI"}},{"type":"TouXiangqz","props":{"y":277,"var":"view_head1","right":20,"runtime":"ui.ajqp.game_ui.tongyong.TouXiangqzUI"}},{"type":"TouXiangqz","props":{"y":277,"x":18,"var":"view_head3","runtime":"ui.ajqp.game_ui.tongyong.TouXiangqzUI"}},{"type":"TouXiangqz","props":{"y":36,"var":"view_head2","right":428,"runtime":"ui.ajqp.game_ui.tongyong.TouXiangqzUI"}},{"type":"WanJia_R","props":{"y":-13,"x":457,"var":"view_player2","right":453,"runtime":"ui.ajqp.game_ui.paijiu.component.WanJia_RUI"}},{"type":"PaiXing","props":{"y":663,"var":"view_type","centerX":0,"anchorY":0.5,"anchorX":0.5,"runtime":"ui.ajqp.game_ui.paijiu.component.PaiXingUI"}},{"type":"WanJia_L","props":{"y":245,"x":32,"var":"view_player3","runtime":"ui.ajqp.game_ui.paijiu.component.WanJia_LUI"}},{"type":"WanJia_R","props":{"y":246,"var":"view_player1","right":35,"runtime":"ui.ajqp.game_ui.paijiu.component.WanJia_RUI"}},{"type":"Box","props":{"y":456,"width":877,"var":"box_bet","height":59,"centerX":-1,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Button","props":{"y":0,"x":0,"var":"btn_bet1","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/anniu/btn_1.png","labelStrokeColor":"#7e2314","labelStroke":2,"labelSize":26,"labelPadding":"-10","labelFont":"Microsoft YaHei","labelColors":"#ffffff","disabled":false},"child":[{"type":"Image","props":{"y":13,"x":91,"skin":"tongyong_ui/game_ui/tongyong/general/tu_bei.png"}},{"type":"Box","props":{"y":9,"x":55,"width":32,"height":41},"child":[{"type":"Clip","props":{"var":"clip_bei1","skin":"tongyong_ui/game_ui/tongyong/general/clip_bs.png","clipX":10}}]}]},{"type":"Button","props":{"y":0,"x":178,"var":"btn_bet2","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/anniu/btn_1.png","labelStrokeColor":"#9d8c27","labelStroke":2,"labelSize":26,"labelPadding":"-10","labelFont":"Microsoft YaHei","labelColors":"#ffffff"},"child":[{"type":"Image","props":{"y":13,"x":91,"skin":"tongyong_ui/game_ui/tongyong/general/tu_bei.png"}},{"type":"Box","props":{"y":9,"x":55,"width":32,"height":41},"child":[{"type":"Clip","props":{"var":"clip_bei2","skin":"tongyong_ui/game_ui/tongyong/general/clip_bs.png","clipX":10,"centerY":0,"centerX":0}}]}]},{"type":"Button","props":{"y":0,"x":355,"var":"btn_bet3","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/anniu/btn_1.png","labelStrokeColor":"#9d8c27","labelStroke":2,"labelSize":26,"labelPadding":"-10","labelFont":"Microsoft YaHei","labelColors":"#ffffff"},"child":[{"type":"Image","props":{"y":13,"x":91,"skin":"tongyong_ui/game_ui/tongyong/general/tu_bei.png"}},{"type":"Box","props":{"y":9,"x":55,"width":32,"height":41},"child":[{"type":"Clip","props":{"var":"clip_bei3","skin":"tongyong_ui/game_ui/tongyong/general/clip_bs.png","clipX":10,"centerY":0,"centerX":0}}]}]},{"type":"Button","props":{"y":0,"x":533,"var":"btn_bet4","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/anniu/btn_1.png","labelStrokeColor":"#9d8c27","labelStroke":2,"labelSize":26,"labelPadding":"-10","labelFont":"Microsoft YaHei","labelColors":"#ffffff"},"child":[{"type":"Image","props":{"y":13,"x":91,"skin":"tongyong_ui/game_ui/tongyong/general/tu_bei.png"}},{"type":"Box","props":{"y":9,"x":55,"width":32,"height":41},"child":[{"type":"Clip","props":{"var":"clip_bei4","skin":"tongyong_ui/game_ui/tongyong/general/clip_bs.png","clipX":10,"centerY":0,"centerX":0}}]}]},{"type":"Button","props":{"y":0,"x":710,"var":"btn_bet5","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/anniu/btn_1.png","labelStrokeColor":"#9d8c27","labelStroke":2,"labelSize":26,"labelPadding":"-10","labelFont":"Microsoft YaHei","labelColors":"#ffffff"},"child":[{"type":"Image","props":{"y":13,"x":91,"skin":"tongyong_ui/game_ui/tongyong/general/tu_bei.png"}},{"type":"Box","props":{"y":9,"x":55,"width":32,"height":41},"child":[{"type":"Clip","props":{"var":"clip_bei5","skin":"tongyong_ui/game_ui/tongyong/general/clip_bs.png","clipX":10,"centerY":0,"centerX":0}}]}]}]},{"type":"Box","props":{"y":456,"width":877,"var":"box_banker","height":59,"centerX":-1,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Button","props":{"y":0,"x":0,"var":"btn_banker0","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/anniu/btn_2.png","labelStrokeColor":"#7e2314","labelStroke":2,"labelSize":26,"labelPadding":"-6","labelFont":"Microsoft YaHei","labelColors":"#ffffff","disabled":false},"child":[{"type":"Image","props":{"y":19,"x":59,"skin":"paijiu_ui/game_ui/paijiu/tu_bq.png"}}]},{"type":"Button","props":{"y":0,"x":178,"var":"btn_banker1","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/anniu/btn_1.png","labelStrokeColor":"#9d8c27","labelStroke":2,"labelSize":26,"labelPadding":"-10","labelFont":"Microsoft YaHei","labelColors":"#ffffff"},"child":[{"type":"Image","props":{"y":19,"x":88,"skin":"tongyong_ui/game_ui/tongyong/general/tu_bei.png"}},{"type":"Box","props":{"y":19,"x":67},"child":[{"type":"Clip","props":{"skin":"tongyong_ui/game_ui/tongyong/general/clip_bs.png","index":1,"clipX":10}}]}]},{"type":"Button","props":{"y":0,"x":355,"var":"btn_banker2","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/anniu/btn_1.png","labelStrokeColor":"#9d8c27","labelStroke":2,"labelSize":26,"labelPadding":"-10","labelFont":"Microsoft YaHei","labelColors":"#ffffff"},"child":[{"type":"Image","props":{"y":19,"x":88,"skin":"tongyong_ui/game_ui/tongyong/general/tu_bei.png"}},{"type":"Box","props":{"y":19,"x":67},"child":[{"type":"Clip","props":{"skin":"tongyong_ui/game_ui/tongyong/general/clip_bs.png","index":2,"clipX":10}}]}]},{"type":"Button","props":{"y":0,"x":533,"var":"btn_banker3","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/anniu/btn_1.png","labelStrokeColor":"#9d8c27","labelStroke":2,"labelSize":26,"labelPadding":"-10","labelFont":"Microsoft YaHei","labelColors":"#ffffff"},"child":[{"type":"Image","props":{"y":19,"x":88,"skin":"tongyong_ui/game_ui/tongyong/general/tu_bei.png"}},{"type":"Box","props":{"y":19,"x":67},"child":[{"type":"Clip","props":{"skin":"tongyong_ui/game_ui/tongyong/general/clip_bs.png","index":3,"clipX":10}}]}]},{"type":"Button","props":{"y":0,"x":710,"var":"btn_banker4","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/anniu/btn_1.png","labelStrokeColor":"#9d8c27","labelStroke":2,"labelSize":26,"labelPadding":"-10","labelFont":"Microsoft YaHei","labelColors":"#ffffff"},"child":[{"type":"Image","props":{"y":19,"x":88,"skin":"tongyong_ui/game_ui/tongyong/general/tu_bei.png"}},{"type":"Box","props":{"y":19,"x":67},"child":[{"type":"Clip","props":{"skin":"tongyong_ui/game_ui/tongyong/general/clip_bs.png","index":4,"clipX":10}}]}]}]},{"type":"DaoJiShi","props":{"y":301,"x":639,"var":"img_time","scaleY":1.2,"scaleX":1.2,"anchorY":0.5,"anchorX":0.5,"runtime":"ui.ajqp.game_ui.tongyong.DaoJiShiUI"}},{"type":"Button","props":{"width":240,"var":"btn_continue","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/anniu/btn_1.png","sizeGrid":"0,20,0,20","labelStrokeColor":"#9d8c27","labelStroke":2,"labelSize":26,"labelPadding":"-6","labelFont":"Microsoft YaHei","labelColors":"#ffffff","centerY":40,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":18,"x":58,"skin":"tongyong_ui/game_ui/tongyong/general/tu_jxyx.png"}}]},{"type":"ShaiZi","props":{"width":240,"var":"view_touzi","height":320,"centerY":-79,"centerX":0,"anchorY":0.5,"anchorX":0.5,"runtime":"ui.ajqp.game_ui.tongyong.effect.ShaiZiUI"}},{"type":"jiangtou","props":{"y":586,"x":533,"var":"view_arrow0","anchorY":1,"anchorX":0.5,"runtime":"ui.ajqp.game_ui.tongyong.jiangtouUI"}},{"type":"jiangtou","props":{"y":358,"x":1140,"var":"view_arrow1","scaleX":-1,"anchorY":1,"anchorX":0.5,"runtime":"ui.ajqp.game_ui.tongyong.jiangtouUI"}},{"type":"jiangtou","props":{"y":101,"x":731,"var":"view_arrow2","scaleX":-1,"anchorY":1,"anchorX":0.5,"runtime":"ui.ajqp.game_ui.tongyong.jiangtouUI"}},{"type":"jiangtou","props":{"y":358,"x":139,"var":"view_arrow3","anchorY":1,"anchorX":0.5,"runtime":"ui.ajqp.game_ui.tongyong.jiangtouUI"}},{"type":"Effect_zqp","props":{"y":289,"x":128,"runtime":"ui.ajqp.game_ui.paijiu.component.Effect_zqpUI"}},{"type":"Effect_yqp","props":{"y":288,"x":1063,"runtime":"ui.ajqp.game_ui.paijiu.component.Effect_yqpUI"}},{"type":"Effect_zqp","props":{"y":513,"x":523,"runtime":"ui.ajqp.game_ui.paijiu.component.Effect_zqpUI"}},{"type":"Effect_yqp","props":{"y":45,"x":654,"runtime":"ui.ajqp.game_ui.paijiu.component.Effect_yqpUI"}},{"type":"Box","props":{"y":389,"x":645,"width":687,"var":"box_roomtype","height":43,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":20.5,"x":319.5,"skin":"paijiu_ui/game_ui/paijiu/tu_h.png","anchorY":0.5,"anchorX":0.5,"alpha":0.5}},{"type":"Text","props":{"y":6,"x":158,"width":336,"var":"text_roomtype","text":"底注:200    第1/2局","leading":6,"height":26,"fontSize":26,"color":"#dadada","align":"center"}}]},{"type":"Button","props":{"y":54,"x":1217,"var":"btn_back","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/anniu/btn_fh1.png","anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":143,"x":63,"var":"btn_cards","stateNum":1,"skin":"paijiu_ui/game_ui/paijiu/tu_tj1.png","anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":54,"x":63,"var":"btn_menu","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/anniu/btn_cd.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":87,"x":66,"var":"img_menu","top":87,"skin":"tongyong_ui/game_ui/tongyong/general/anniu/cd_1.png","sizeGrid":"20,20,20,20","left":10,"anchorY":0,"anchorX":0.5},"child":[{"type":"Image","props":{"y":93,"x":1,"skin":"tongyong_ui/game_ui/tongyong/general/anniu/cd_2.png"}},{"type":"Image","props":{"y":174,"x":1,"skin":"tongyong_ui/game_ui/tongyong/general/anniu/cd_2.png"}},{"type":"Button","props":{"y":25,"x":34,"var":"btn_rules","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/anniu/btn_gz.png"}},{"type":"Button","props":{"y":185,"x":33,"var":"btn_set","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/anniu/btn_sz.png"}},{"type":"Button","props":{"y":105,"x":33,"var":"btn_record","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/anniu/btn_zj.png"}}]},{"type":"Button","props":{"y":54,"x":1118,"var":"btn_qifu","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/anniu/btn_qf.png","anchorY":0.5,"anchorX":0.5}},{"type":"Box","props":{"y":107,"x":103,"width":242,"var":"box_cards","height":221},"child":[{"type":"Image","props":{"y":109,"x":117,"width":251,"skin":"tongyong_ui/game_ui/tongyong/general/tu_kk.png","sizeGrid":"78,0,24,27","scaleX":-1,"height":214,"anchorY":0.5,"anchorX":0.5}},{"type":"Box","props":{"y":14,"x":23},"child":[{"type":"Image","props":{"x":51,"var":"img_card31","skin":"paijiu_ui/game_ui/paijiu/paijiu_11.png"}},{"type":"Image","props":{"y":144,"x":180,"var":"img_card1","skin":"paijiu_ui/game_ui/paijiu/paijiu_12.png"}},{"type":"Image","props":{"x":154,"var":"img_card29","skin":"paijiu_ui/game_ui/paijiu/paijiu_13.png"}},{"type":"Image","props":{"y":144,"x":103,"var":"img_card4","skin":"paijiu_ui/game_ui/paijiu/paijiu_14.png"}},{"type":"Image","props":{"y":96,"x":103,"var":"img_card22","skin":"paijiu_ui/game_ui/paijiu/paijiu_15.png"}},{"type":"Image","props":{"y":96,"x":51,"var":"img_card23","skin":"paijiu_ui/game_ui/paijiu/paijiu_16.png"}},{"type":"Image","props":{"y":48,"x":103,"var":"img_card26","skin":"paijiu_ui/game_ui/paijiu/paijiu_22.png"}},{"type":"Image","props":{"y":144,"x":129,"var":"img_card3","skin":"paijiu_ui/game_ui/paijiu/paijiu_23.png"}},{"type":"Image","props":{"y":144,"x":154,"var":"img_card2","skin":"paijiu_ui/game_ui/paijiu/paijiu_24.png"}},{"type":"Image","props":{"y":144,"x":77,"var":"img_card5","skin":"paijiu_ui/game_ui/paijiu/paijiu_25.png"}},{"type":"Image","props":{"y":144,"x":26,"var":"img_card7","skin":"paijiu_ui/game_ui/paijiu/paijiu_26.png"}},{"type":"Image","props":{"y":48,"x":51,"var":"img_card27","skin":"paijiu_ui/game_ui/paijiu/paijiu_33.png"}},{"type":"Image","props":{"y":144,"x":51,"var":"img_card6","skin":"paijiu_ui/game_ui/paijiu/paijiu_34.png"}},{"type":"Image","props":{"y":144,"var":"img_card8","skin":"paijiu_ui/game_ui/paijiu/paijiu_35.png"}},{"type":"Image","props":{"y":96,"x":180,"var":"img_card9","skin":"paijiu_ui/game_ui/paijiu/paijiu_36.png"}},{"type":"Image","props":{"x":103,"var":"img_card30","skin":"paijiu_ui/game_ui/paijiu/paijiu_44.png"}},{"type":"Image","props":{"y":96,"x":154,"var":"img_card10","skin":"paijiu_ui/game_ui/paijiu/paijiu_45.png"}},{"type":"Image","props":{"y":96,"var":"img_card24","skin":"paijiu_ui/game_ui/paijiu/paijiu_46.png"}},{"type":"Image","props":{"y":48,"var":"img_card28","skin":"paijiu_ui/game_ui/paijiu/paijiu_55.png"}},{"type":"Image","props":{"y":48,"x":154,"var":"img_card25","skin":"paijiu_ui/game_ui/paijiu/paijiu_56.png"}},{"type":"Image","props":{"var":"img_card32","skin":"paijiu_ui/game_ui/paijiu/paijiu_66.png"}},{"type":"Image","props":{"x":26,"var":"img_card21","skin":"paijiu_ui/game_ui/paijiu/paijiu_66.png"}},{"type":"Image","props":{"x":77,"var":"img_card20","skin":"paijiu_ui/game_ui/paijiu/paijiu_11.png"}},{"type":"Image","props":{"x":129,"var":"img_card19","skin":"paijiu_ui/game_ui/paijiu/paijiu_44.png"}},{"type":"Image","props":{"x":180,"var":"img_card18","skin":"paijiu_ui/game_ui/paijiu/paijiu_13.png"}},{"type":"Image","props":{"y":48,"x":26,"var":"img_card17","skin":"paijiu_ui/game_ui/paijiu/paijiu_55.png"}},{"type":"Image","props":{"y":48,"x":77,"var":"img_card16","skin":"paijiu_ui/game_ui/paijiu/paijiu_33.png"}},{"type":"Image","props":{"y":48,"x":129,"var":"img_card15","skin":"paijiu_ui/game_ui/paijiu/paijiu_22.png"}},{"type":"Image","props":{"y":48,"x":180,"var":"img_card14","skin":"paijiu_ui/game_ui/paijiu/paijiu_56.png"}},{"type":"Image","props":{"y":96,"x":26,"var":"img_card13","skin":"paijiu_ui/game_ui/paijiu/paijiu_46.png"}},{"type":"Image","props":{"y":96,"x":77,"var":"img_card12","skin":"paijiu_ui/game_ui/paijiu/paijiu_16.png"}},{"type":"Image","props":{"y":96,"x":129,"var":"img_card11","skin":"paijiu_ui/game_ui/paijiu/paijiu_15.png"}}]}]},{"type":"Effect_xscx","props":{"y":227,"x":541,"runtime":"ui.ajqp.game_ui.paijiu.component.Effect_xscxUI"}},{"type":"Chongzhi","props":{"y":653,"x":1210,"var":"btn_chongzhi","anchorY":0.5,"anchorX":0.5,"runtime":"ui.ajqp.game_ui.tongyong.effect.ChongzhiUI"}}]},{"type":"Effect_kaishiyouxi","props":{"runtime":"ui.ajqp.game_ui.tongyong.effect.Effect_kaishiyouxiUI"}},{"type":"Effect_nyl","props":{"centerY":0,"centerX":0,"runtime":"ui.ajqp.game_ui.tongyong.effect.Effect_nylUI"}}],"animations":[{"nodes":[{"target":105,"keyframes":{"y":[{"value":28,"tweenMethod":"linearNone","tween":true,"target":105,"key":"y","index":0},{"value":28,"tweenMethod":"linearNone","tween":true,"target":105,"key":"y","index":1}],"skin":[{"value":"ui/game_ui/shangong/effect/btn/00001.png","tweenMethod":"linearNone","tween":false,"target":105,"key":"skin","index":0},{"value":"ui/game_ui/shangong/effect/btn/00002.png","tweenMethod":"linearNone","tween":false,"target":105,"key":"skin","index":1},{"value":"ui/game_ui/shangong/effect/btn/00003.png","tweenMethod":"linearNone","tween":false,"target":105,"key":"skin","index":2},{"value":"ui/game_ui/shangong/effect/btn/00004.png","tweenMethod":"linearNone","tween":false,"target":105,"key":"skin","index":3},{"value":"ui/game_ui/shangong/effect/btn/00005.png","tweenMethod":"linearNone","tween":false,"target":105,"key":"skin","index":4},{"value":"ui/game_ui/shangong/effect/btn/00006.png","tweenMethod":"linearNone","tween":false,"target":105,"key":"skin","index":5},{"value":"ui/game_ui/shangong/effect/btn/00007.png","tweenMethod":"linearNone","tween":false,"target":105,"key":"skin","index":6},{"value":"ui/game_ui/shangong/effect/btn/00008.png","tweenMethod":"linearNone","tween":false,"target":105,"key":"skin","index":7},{"value":"ui/game_ui/shangong/effect/btn/00009.png","tweenMethod":"linearNone","tween":false,"target":105,"key":"skin","index":8},{"value":"ui/game_ui/shangong/effect/btn/00010.png","tweenMethod":"linearNone","tween":false,"target":105,"key":"skin","index":9}],"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":105,"key":"alpha","index":0}]}}],"name":"ani1","id":1,"frameRate":24,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("Text",laya.display.Text);
			View.regComponent("ui.ajqp.game_ui.tongyong.effect.Effect_nylUI",ui.ajqp.game_ui.tongyong.effect.Effect_nylUI);
			View.regComponent("ui.ajqp.game_ui.paijiu.component.WanJia_RUI",ui.ajqp.game_ui.paijiu.component.WanJia_RUI);
			View.regComponent("ui.ajqp.game_ui.paijiu.component.PaiXingUI",ui.ajqp.game_ui.paijiu.component.PaiXingUI);
			View.regComponent("ui.ajqp.game_ui.paijiu.component.WanJia_LUI",ui.ajqp.game_ui.paijiu.component.WanJia_LUI);
			View.regComponent("ui.ajqp.game_ui.tongyong.DaoJiShiUI",ui.ajqp.game_ui.tongyong.DaoJiShiUI);
			View.regComponent("ui.ajqp.game_ui.tongyong.effect.ShaiZiUI",ui.ajqp.game_ui.tongyong.effect.ShaiZiUI);
			View.regComponent("ui.ajqp.game_ui.tongyong.TouXiangqzUI",ui.ajqp.game_ui.tongyong.TouXiangqzUI);
			View.regComponent("ui.ajqp.game_ui.paijiu.component.Effect_zqpUI",ui.ajqp.game_ui.paijiu.component.Effect_zqpUI);
			View.regComponent("ui.ajqp.game_ui.paijiu.component.Effect_yqpUI",ui.ajqp.game_ui.paijiu.component.Effect_yqpUI);
			View.regComponent("ui.ajqp.game_ui.paijiu.component.Effect_xscxUI",ui.ajqp.game_ui.paijiu.component.Effect_xscxUI);
			View.regComponent("ui.ajqp.game_ui.tongyong.effect.ChongzhiUI",ui.ajqp.game_ui.tongyong.effect.ChongzhiUI);
			View.regComponent("ui.ajqp.game_ui.tongyong.effect.Effect_kaishiyouxiUI",ui.ajqp.game_ui.tongyong.effect.Effect_kaishiyouxiUI);
			View.regComponent("ui.ajqp.game_ui.tongyong.jiangtouUI",ui.ajqp.game_ui.tongyong.jiangtouUI);

            super.createChildren();
            this.createView(ui.ajqp.game_ui.paijiu.PaiJiuUI.uiView);
        }
    }
}

module ui.ajqp.game_ui.paijiu {
    export class PaiJiu_GuiZeUI extends View {
		public btn_tab:Laya.Tab;
		public panel_rule:Laya.Panel;
		public lab_wanfa:Laya.Image;
		public panel_type:Laya.Panel;
		public lab_type:Laya.Image;
		public panel_daxiao:Laya.Panel;
		public lab_daxiao:Laya.Box;
		public panel_jiesuan:Laya.Panel;
		public lab_jiesuan:Laya.Image;
		public btn_close:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"width":1280,"height":720,"centerY":0,"centerX":0},"child":[{"type":"ZhongKuang","props":{"y":0,"x":0,"centerX":0,"runtime":"ui.ajqp.game_ui.tongyong.effect.ZhongKuangUI"}},{"type":"Box","props":{"y":110,"x":232,"width":816,"height":504,"centerX":0},"child":[{"type":"Image","props":{"y":29,"x":408,"skin":"tongyong_ui/game_ui/tongyong/hud/tit_game_rule.png","anchorY":0.5,"anchorX":0.5}},{"type":"Tab","props":{"y":54,"x":0,"width":168,"var":"btn_tab","height":336},"child":[{"type":"Button","props":{"y":0,"x":0,"stateNum":2,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_wjjs.png","name":"item0"}},{"type":"Button","props":{"y":84,"x":0,"stateNum":2,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_pxdx.png","name":"item1"}},{"type":"Button","props":{"y":168,"x":0,"stateNum":2,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_pxsm.png","name":"item2"}},{"type":"Button","props":{"y":252,"x":0,"stateNum":2,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_dpdx.png","name":"item3"}}]},{"type":"Panel","props":{"y":54,"x":170,"width":647,"var":"panel_rule","height":450},"child":[{"type":"Image","props":{"y":0,"x":0,"var":"lab_wanfa","skin":"paijiu_ui/game_ui/paijiu/guize_1.png","height":1523}}]},{"type":"Panel","props":{"y":54,"x":170,"width":647,"var":"panel_type","height":450},"child":[{"type":"Image","props":{"y":0,"x":0,"var":"lab_type","skin":"paijiu_ui/game_ui/paijiu/guize_2.png","height":581}}]},{"type":"Panel","props":{"y":54,"x":170,"width":647,"var":"panel_daxiao","height":450},"child":[{"type":"Box","props":{"y":0,"x":0,"var":"lab_daxiao","height":1430},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"paijiu_ui/game_ui/paijiu/guize_3.png","height":1430}}]}]},{"type":"Panel","props":{"y":54,"x":170,"width":647,"var":"panel_jiesuan","height":450},"child":[{"type":"Image","props":{"y":-16,"x":-1,"var":"lab_jiesuan","skin":"paijiu_ui/game_ui/paijiu/guize_4.png","height":368}}]}]},{"type":"Button","props":{"y":122,"x":1035,"var":"btn_close","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/anniu/btn_gb.png","anchorY":0.5,"anchorX":0.5}}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.ajqp.game_ui.tongyong.effect.ZhongKuangUI",ui.ajqp.game_ui.tongyong.effect.ZhongKuangUI);

            super.createChildren();
            this.createView(ui.ajqp.game_ui.paijiu.PaiJiu_GuiZeUI.uiView);
        }
    }
}

module ui.ajqp.game_ui.paijiu {
    export class PaiJiu_HUDUI extends View {
		public view_hud:ui.ajqp.game_ui.tongyong.HudUI;
		public box_normal:Laya.Box;
		public box_right:Laya.Box;
		public img_room0:Laya.Box;
		public txt_difen0:Laya.Label;
		public txt_least0:Laya.Label;
		public img_room1:Laya.Box;
		public txt_difen1:Laya.Label;
		public txt_least1:Laya.Label;
		public img_room2:Laya.Box;
		public txt_difen2:Laya.Label;
		public txt_least2:Laya.Label;
		public img_room3:Laya.Box;
		public txt_difen3:Laya.Label;
		public txt_least3:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Image","props":{"top":-1,"skin":"tongyong_ui/game_ui/tongyong/hud/tu_bj.png","right":-1,"left":-1,"bottom":-1}},{"type":"Hud","props":{"var":"view_hud","top":0,"runtime":"ui.ajqp.game_ui.tongyong.HudUI","right":0,"left":0,"bottom":0}},{"type":"Box","props":{"width":1280,"var":"box_normal","height":720,"centerY":0,"centerX":0},"child":[{"type":"Box","props":{"y":206,"x":29,"width":1233,"var":"box_right","height":300},"child":[{"type":"Box","props":{"y":0,"x":0,"width":300,"var":"img_room0","height":300},"child":[{"type":"Button","props":{"y":0,"x":0,"stateNum":1,"skin":"paijiu_ui/game_ui/paijiu/btn_cjc.png"}},{"type":"Label","props":{"y":244,"x":92,"width":55,"text":"底分:","strokeColor":"#ffffff","stroke":0.2,"height":25,"fontSize":24,"color":"#ffffff","align":"left"}},{"type":"Label","props":{"y":276,"x":92,"width":55,"text":"准入:","strokeColor":"#ffffff","stroke":0.2,"height":25,"fontSize":24,"color":"#ffffff","align":"left"}},{"type":"Label","props":{"y":244,"x":153,"width":54,"var":"txt_difen0","text":"9999","strokeColor":"#ffffff","stroke":0.2,"height":25,"fontSize":24,"color":"#ffffff","align":"left"}},{"type":"Label","props":{"y":276,"x":153,"width":54,"var":"txt_least0","text":"9999","strokeColor":"#ffffff","stroke":0.2,"height":25,"fontSize":24,"color":"#ffffff","align":"left"}}]},{"type":"Box","props":{"y":0,"x":311,"width":300,"var":"img_room1","height":300},"child":[{"type":"Button","props":{"y":0,"x":0,"stateNum":1,"skin":"paijiu_ui/game_ui/paijiu/btn_xzc.png"}},{"type":"Label","props":{"y":244,"x":92,"width":55,"text":"底分:","strokeColor":"#ffffff","stroke":0.2,"height":25,"fontSize":24,"color":"#ffffff","align":"left"}},{"type":"Label","props":{"y":276,"x":92,"width":55,"text":"准入:","strokeColor":"#ffffff","stroke":0.2,"height":25,"fontSize":24,"color":"#ffffff","align":"left"}},{"type":"Label","props":{"y":244,"x":153,"width":54,"var":"txt_difen1","text":"9999","strokeColor":"#ffffff","stroke":0.2,"height":25,"fontSize":24,"color":"#ffffff","align":"left"}},{"type":"Label","props":{"y":276,"x":153,"width":54,"var":"txt_least1","text":"9999","strokeColor":"#ffffff","stroke":0.2,"height":25,"fontSize":24,"color":"#ffffff","align":"left"}}]},{"type":"Box","props":{"y":0,"x":622,"width":300,"var":"img_room2","height":300},"child":[{"type":"Button","props":{"y":0,"x":0,"stateNum":1,"skin":"paijiu_ui/game_ui/paijiu/btn_lbc.png"}},{"type":"Label","props":{"y":244,"x":92,"width":55,"text":"底分:","strokeColor":"#ffffff","stroke":0.2,"height":25,"fontSize":24,"color":"#ffffff","align":"left"}},{"type":"Label","props":{"y":276,"x":92,"width":55,"text":"准入:","strokeColor":"#ffffff","stroke":0.2,"height":25,"fontSize":24,"color":"#ffffff","align":"left"}},{"type":"Label","props":{"y":244,"x":153,"width":54,"var":"txt_difen2","text":"9999","strokeColor":"#ffffff","stroke":0.2,"height":25,"fontSize":24,"color":"#ffffff","align":"left"}},{"type":"Label","props":{"y":276,"x":153,"width":54,"var":"txt_least2","text":"9999","strokeColor":"#ffffff","stroke":0.2,"height":25,"fontSize":24,"color":"#ffffff","align":"left"}}]},{"type":"Box","props":{"y":0,"x":933,"width":300,"var":"img_room3","height":300},"child":[{"type":"Button","props":{"y":0,"x":0,"stateNum":1,"skin":"paijiu_ui/game_ui/paijiu/btn_fhc.png"}},{"type":"Label","props":{"y":244,"x":92,"width":55,"text":"底分:","strokeColor":"#ffffff","stroke":0.2,"height":25,"fontSize":24,"color":"#ffffff","align":"left"}},{"type":"Label","props":{"y":276,"x":92,"width":55,"text":"准入:","strokeColor":"#ffffff","stroke":0.2,"height":25,"fontSize":24,"color":"#ffffff","align":"left"}},{"type":"Label","props":{"y":244,"x":153,"width":54,"var":"txt_difen3","text":"9999","strokeColor":"#ffffff","stroke":0.2,"height":25,"fontSize":24,"color":"#ffffff","align":"left"}},{"type":"Label","props":{"y":276,"x":153,"width":54,"var":"txt_least3","text":"9999","strokeColor":"#ffffff","stroke":0.2,"height":25,"fontSize":24,"color":"#ffffff","align":"left"}}]}]}]},{"type":"Box","props":{"y":642,"width":1280,"height":60,"centerX":0},"child":[{"type":"Image","props":{"y":13,"skin":"tongyong_ui/game_ui/tongyong/hud/tu_wrzx.png","right":40}},{"type":"Image","props":{"y":30,"x":220,"top":13,"skin":"paijiu_ui/game_ui/paijiu/zjh_title.png","anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":21,"x":104,"skin":"tongyong_ui/game_ui/tongyong/general/anniu/di.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":21,"x":-29,"skin":"tongyong_ui/game_ui/tongyong/general/anniu/di.png","anchorY":0.5,"anchorX":0.5}}]}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.ajqp.game_ui.tongyong.HudUI",ui.ajqp.game_ui.tongyong.HudUI);

            super.createChildren();
            this.createView(ui.ajqp.game_ui.paijiu.PaiJiu_HUDUI.uiView);
        }
    }
}
