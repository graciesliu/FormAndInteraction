function introAnimate_main(module){
	var $window = $(window);
	var $document = $(document).ready(onReady);
	var stage, canvas;

	module.mouse = module.mouse || {x: 0, y: 0};

	/* module.button = {};
	module.button.hideButton = function(str){
		var _cont = $(".skip_button_container");
		_cont.animate({bottom: -100}, {
			duration :500,
			complete: _cont.hide
		} );
	}
	module.button.showButton = function(str){
		if (str == undefined) str = 'SKIP INTRO AND JOIN THE CHALLENGE';
		
		$(".skip_button").html(str);
		var _cont = $(".skip_button_container").show();
		_cont.animate({bottom: 48}, {
			duration :500
		} );
	} */
	
	function onReady(){
		canvas = $("<canvas id='intro'></canvas>").appendTo($("body"));
		stage = new createjs.Stage(canvas.get(0));
		stage.enableMouseOver();
		createjs.Ticker.setFPS(25);
		createjs.Ticker.addEventListener('tick', stage);

		$window.on('resize', onWindowResize);
		onWindowResize();

		var currentTemplateIndex = -1, prevTemplateIndex = 0;
		var prtcls = new module.Particles(stage);
		stage.addChild( prtcls );

		var _progressbar, stp = 0;



		var templates = ['txt1', 'txt2', 'tiger', 'txt3', 'txt4', 'run', 'txt5', 'txt6', 'txt7', 'last'];
		//templates.unshift('tiger');
		//templates.unshift('run');

		var queue = new createjs.LoadQueue();
		queue.on("complete", init);
		queue.on("fileload", onLoad);
		queue.loadManifest([
			{ id:'txt1', src: STATIC_URL + 'data/en/txt/txt1.txt' },
			{ id:'txt2', src: STATIC_URL + 'data/en/txt/txt2.txt' },
			{ id:'txt3', src: STATIC_URL + 'data/en/txt/txt3.txt' },
			{ id:'txt4', src: STATIC_URL + 'data/en/txt/txt4.txt' },
			{ id:'txt5', src: STATIC_URL + 'data/en/txt/txt5.txt' },
			{ id:'txt6', src: STATIC_URL + 'data/en/txt/txt6.txt', duplicate: [310,-43,332,-42.5,303.5,-42,316,-41.5,327.5,-41,320.5,-41,298,-40.5,294.5,-40.5] },
			{ id:'txt7', src: STATIC_URL + 'data/en/txt/txt7.txt' },
			{
				id:'run',
				src: STATIC_URL + 'data/en/run.min.txt'
				, xOffset: -217, yOffset: -471
				, xscale: -1.3, yscale:-1.3
				, emit:-1
				, randomize: true
			},
			{
				id:'tiger',
				src: STATIC_URL + 'data/en/tiger.min.txt'
				//, xOffset: -317, yOffset: -171
				, xOffset: -167, yOffset: -371
				, xscale: -2.2, yscale:-2.2
				, emit:-1
				, randomize: true
			}
		]);

		function onLoad(event) {
			initSlidePoints( event.item.id, module.parsePointsData( event.result.toString(), event.item ) );
		}
		function initSlidePoints(id, list) {
			templates[ id ] = list;
			templates[ id ].sort(function(a, b){
				var aa = module.distance( a[0], 0 ),
					bb = module.distance( b[0], 0 );
				return aa - bb;
			});
		}

		function init(){
			$window.on('mousewheel', onWheel);
			//$window.on('mousemove', onMouseMove);
			prtcls.addEventListener('changestate', onChangeState);
			initSlide(0);


			createjs.Ticker.addEventListener('tick', onTick);
			_progressbar = new Progressbar(templates.length-1);
			_progressbar.progress(0);
		}

		function onTick(evt){
			if (_startProgressAt) {
				var p = _startProgress + (_endProgress - _startProgress) * (new Date().getTime() - _startProgressAt) / 3000;
				_progressbar.progress(p);
			}
		}
		function onChangeState(evt){
			//evt.data - quietly OR chaos
			if (evt.data == 'quietly'){
				_progressbar.progress(currentTemplateIndex-1);
				_startProgressAt = 0;
				
				/* if (currentTemplateIndex == templates.length-1) {
					module.button.showButton("JOIN THE CHALLENGE");
				} */
			}
		}

		var _startProgress=0, _startProgressAt=0, _endProgress=0;
		function onWheel(evt) {
            evt.preventDefault();

			if ( !evt.deltaY || _startProgressAt) return;
			var delta = evt.deltaY < 0 ? 1 : -1;

			/*if (lastWheelEventTime - startQuietAt > 2000) {
				initSlide( currentTemplateIndex + delta );
			}*/
			if ( initSlide( Math.max(1,currentTemplateIndex + delta) ) ){
				_startProgress = _progressbar.progress();
				_endProgress = currentTemplateIndex-1;
				_startProgressAt = new Date().getTime();
			}

			if(currentTemplateIndex == templates.length-1) {
				setTimeout(function () {
                    $('#intro').fadeOut(500, function () {
                        $(".intro-btn").trigger("click");
                    });
                }, 2000);
			}
		}

		function initSlide(val){
			//if (prtcls.state() == 'quietly') {
			//val = (val % templates.length + templates.length) % templates.length;

			val = Math.max(0, Math.min(templates.length-1, val));

			if (currentTemplateIndex != val) {
				/* switch (val) {
					case 0:
						module.button.showButton("SKIP INTRO AND JOIN THE CHALLENGE");
						break;
					 *//* case templates.length-1:
						module.button.showButton("JOIN THE CHALLENGE");
						break; *//* 
					default:
						module.button.hideButton();
						break;
				} */
				
				startQuietAt = Infinity;
				prevTemplateIndex = currentTemplateIndex;
				currentTemplateIndex = val;
				
				if(currentTemplateIndex != templates.length-1) {
					initPrtcls( templates[ templates[ currentTemplateIndex ] ], true /*/^txt/.test(templates[ currentTemplateIndex ])*/ );
				}
				
				return true;
			}
			//}
			return false;
		}


		function initPrtcls(arg1, useMouse) {
			/*if (!arg1){
				console.log(321);
			}*/
			prtcls.init([].concat(arg1), arg1.emit, useMouse);
		}

	}
	function onWindowResize(e){
		var w = $window.width();
		var h = $window.height();
		canvas.attr({
			width: w,
			height: h
		}).css({
			width: w,
			height: h
		});
		/*
			txt1 806 171.5
			txt2 818.5 172.5
			txt3 810.5 168.5
			txt4 705 171.5
			txt5 495.5 67.5
			txt6 764 172
			txt7 1188.5 66.5
			run 463.8078072705466 563.2215086937174
			tiger 937.2591298936312 380.56463375334744
		*/
		
		stage.scaleX = stage.scaleY = Math.min( w/1188, h / 563 );
		
		stage.x = Math.floor(w/2);
		stage.y = Math.floor(h/2);

		module.stageWidth = w;
		module.stageHeight = h;
		module.diagonal = Math.sqrt(w*w + h*h);

		stage.update();
	}




	function Progressbar(val){
		var canvas = $("<canvas id='intro-indicator'></canvas>").appendTo( $("body") );
		var stage = new createjs.Stage(canvas.get(0) ), container = stage;
        var changed;
		createjs.Ticker.addEventListener('tick', checkChanges);

		var dots = [];
		var span = 45;
		var h = (val - 1) * span;
		stage.x = 5;
		stage.y = 5;
		canvas.attr({
			width: 2*stage.x,
			height: h + 2*stage.y
		} ).css({
			position: "absolute",
			right: 20,
			top: "50%",
			marginTop: Math.round(-h/2)
		});

		var line = new createjs.Shape;
		container.addChild(line);
		line.y = 0;//(val - 1) / 2 * span;

		for (var i = 0; i < val; i++) {
			dots[ i ] = new ProgressbarDot(i==1);
			container.addChild( dots[ i ] );
			dots[ i ].y = line.y + i * span;
            dots[ i ].addEventListener("change", function () {
                changed = true;
            });
		}

        function checkChanges(){
            if (changed) stage.update();
            changed = false;
        }

		this.progress = function(val){
			if (val == undefined) return _progress;

			//console.log('set progress : ' + val);

			var p = Math.max(0, Math.min(dots.length-1, val));
			_progress = _progress + (p - _progress) * .5;
			for (var i = 0; i < dots.length; i++){
				if ( Math.abs(i - _progress) < .1){
					dots[ i ].active();
				} else if ( i < _progress){
					dots[ i ].passed();
				} else {
					dots[ i ].reset();
				}
			}


            var ppp = Math.floor(_progress);
            ppp += ease(_progress - ppp);

			var _progress2 = ppp / (dots.length-1);
			line.graphics.clear().ss( 1.5 )
				.s( "#fdc227" ).mt(0,0).lt(0,h * _progress2)
				.s( "#2b2b2b" ).mt(0,h * _progress2).lt(0, h);

			//_progress = p;
			stage.update();
		};
		var _progress = 0;
	}

    function ease(v){
        //return Math.sin(v * Math.PI/2);
        return 1-Math.pow(1-v, 2);
    }

	function ProgressbarDot(debug){
		createjs.Shape.apply( this );
		var _aColor = "#fdc227";
		var _rColor = "#cfcfcf";
		var self = this;
        var r = -1.1, direction = 1, _gotoR;
		//this.reset = function(){ self.graphics.clear().ss(1).s("#000").f(_rColor).dc(0,0,2 ).ef(); };
		//this.passed = function(){ self.graphics.clear().ss(1).s("#000").f(_aColor).dc(0,0,2.5).ef(); };
		this.reset = function(){ _goto(-1); };
		this.passed = function(){ _goto(0); };
		this.active = function(){ _goto(1); };
        /*
            direction = 1;
            createjs.Ticker.addEventListener("tick", onTick);
			self.passed();
			self.graphics.ss(.5).s(_aColor).dc(0,0, r).es();
		};*/

        function _goto(val){
            createjs.Ticker.removeEventListener("tick", onTick);
            if ( r == val ){
                return;
            }
            _gotoR = val;
            direction = val > r ? 1 : -1;
            createjs.Ticker.addEventListener("tick", onTick);
            onTick();
        }
        function onTick(){
            r += .1 * direction;
            if ( direction > 0 && r > _gotoR || direction < 0 && r < _gotoR) {
                r = _gotoR;
                createjs.Ticker.removeEventListener("tick", onTick);
            }
            self.graphics.clear().f(_rColor).dc(0,0,2).ef();

            self.graphics.ss(1).s("#000").f(_aColor).dc(0,0,2.5 * Math.min(1, r+1)).ef();
            if ( r > 0) {
                self.graphics.ss(.5).s(_aColor).dc(0,0, Ease.backOut(r) * 3.5).es();
            }

            self.dispatchEvent("change");
        }
	}

	ProgressbarDot.prototype = new createjs.Shape;

    var Ease = {};
    Ease.getBackOut = function(amount) {
        return function(t) {
            return (--t*t*((amount+1)*t + amount) + 1);
        }
    };
    Ease.backOut = Ease.getBackOut(3.7);

}