/* Modernizr 2.6.2 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-fontface-backgroundsize-borderimage-borderradius-boxshadow-flexbox-flexboxlegacy-hsla-multiplebgs-opacity-rgba-textshadow-cssanimations-csscolumns-generatedcontent-cssgradients-cssreflections-csstransforms-csstransforms3d-csstransitions-applicationcache-canvas-canvastext-draganddrop-hashchange-history-audio-video-indexeddb-input-inputtypes-localstorage-postmessage-sessionstorage-websockets-websqldatabase-webworkers-geolocation-inlinesvg-smil-svg-svgclippaths-touch-webgl-shiv-mq-cssclasses-teststyles-testprop-testallprops-hasevent-prefixes-domprefixes-load
 */
;



window.Modernizr = (function( window, document, undefined ) {

    var version = '2.6.2',

    Modernizr = {},

    enableClasses = true,

    docElement = document.documentElement,

    mod = 'modernizr',
    modElem = document.createElement(mod),
    mStyle = modElem.style,

    inputElem  = document.createElement('input')  ,

    smile = ':)',

    toString = {}.toString,

    prefixes = ' -webkit- -moz- -o- -ms- '.split(' '),



    omPrefixes = 'Webkit Moz O ms',

    cssomPrefixes = omPrefixes.split(' '),

    domPrefixes = omPrefixes.toLowerCase().split(' '),

    ns = {'svg': 'http://www.w3.org/2000/svg'},

    tests = {},
    inputs = {},
    attrs = {},

    classes = [],

    slice = classes.slice,

    featureName, 


    injectElementWithStyles = function( rule, callback, nodes, testnames ) {

      var style, ret, node, docOverflow,
          div = document.createElement('div'),
                body = document.body,
                fakeBody = body || document.createElement('body');

      if ( parseInt(nodes, 10) ) {
                      while ( nodes-- ) {
              node = document.createElement('div');
              node.id = testnames ? testnames[nodes] : mod + (nodes + 1);
              div.appendChild(node);
          }
      }

                style = ['&#173;','<style id="s', mod, '">', rule, '</style>'].join('');
      div.id = mod;
          (body ? div : fakeBody).innerHTML += style;
      fakeBody.appendChild(div);
      if ( !body ) {
                fakeBody.style.background = '';
                fakeBody.style.overflow = 'hidden';
          docOverflow = docElement.style.overflow;
          docElement.style.overflow = 'hidden';
          docElement.appendChild(fakeBody);
      }

      ret = callback(div, rule);
        if ( !body ) {
          fakeBody.parentNode.removeChild(fakeBody);
          docElement.style.overflow = docOverflow;
      } else {
          div.parentNode.removeChild(div);
      }

      return !!ret;

    },

    testMediaQuery = function( mq ) {

      var matchMedia = window.matchMedia || window.msMatchMedia;
      if ( matchMedia ) {
        return matchMedia(mq).matches;
      }

      var bool;

      injectElementWithStyles('@media ' + mq + ' { #' + mod + ' { position: absolute; } }', function( node ) {
        bool = (window.getComputedStyle ?
                  getComputedStyle(node, null) :
                  node.currentStyle)['position'] == 'absolute';
      });

      return bool;

     },
 

    isEventSupported = (function() {

      var TAGNAMES = {
        'select': 'input', 'change': 'input',
        'submit': 'form', 'reset': 'form',
        'error': 'img', 'load': 'img', 'abort': 'img'
      };

      function isEventSupported( eventName, element ) {

        element = element || document.createElement(TAGNAMES[eventName] || 'div');
        eventName = 'on' + eventName;

            var isSupported = eventName in element;

        if ( !isSupported ) {
                if ( !element.setAttribute ) {
            element = document.createElement('div');
          }
          if ( element.setAttribute && element.removeAttribute ) {
            element.setAttribute(eventName, '');
            isSupported = is(element[eventName], 'function');

                    if ( !is(element[eventName], 'undefined') ) {
              element[eventName] = undefined;
            }
            element.removeAttribute(eventName);
          }
        }

        element = null;
        return isSupported;
      }
      return isEventSupported;
    })(),


    _hasOwnProperty = ({}).hasOwnProperty, hasOwnProp;

    if ( !is(_hasOwnProperty, 'undefined') && !is(_hasOwnProperty.call, 'undefined') ) {
      hasOwnProp = function (object, property) {
        return _hasOwnProperty.call(object, property);
      };
    }
    else {
      hasOwnProp = function (object, property) { 
        return ((property in object) && is(object.constructor.prototype[property], 'undefined'));
      };
    }


    if (!Function.prototype.bind) {
      Function.prototype.bind = function bind(that) {

        var target = this;

        if (typeof target != "function") {
            throw new TypeError();
        }

        var args = slice.call(arguments, 1),
            bound = function () {

            if (this instanceof bound) {

              var F = function(){};
              F.prototype = target.prototype;
              var self = new F();

              var result = target.apply(
                  self,
                  args.concat(slice.call(arguments))
              );
              if (Object(result) === result) {
                  return result;
              }
              return self;

            } else {

              return target.apply(
                  that,
                  args.concat(slice.call(arguments))
              );

            }

        };

        return bound;
      };
    }

    function setCss( str ) {
        mStyle.cssText = str;
    }

    function setCssAll( str1, str2 ) {
        return setCss(prefixes.join(str1 + ';') + ( str2 || '' ));
    }

    function is( obj, type ) {
        return typeof obj === type;
    }

    function contains( str, substr ) {
        return !!~('' + str).indexOf(substr);
    }

    function testProps( props, prefixed ) {
        for ( var i in props ) {
            var prop = props[i];
            if ( !contains(prop, "-") && mStyle[prop] !== undefined ) {
                return prefixed == 'pfx' ? prop : true;
            }
        }
        return false;
    }

    function testDOMProps( props, obj, elem ) {
        for ( var i in props ) {
            var item = obj[props[i]];
            if ( item !== undefined) {

                            if (elem === false) return props[i];

                            if (is(item, 'function')){
                                return item.bind(elem || obj);
                }

                            return item;
            }
        }
        return false;
    }

    function testPropsAll( prop, prefixed, elem ) {

        var ucProp  = prop.charAt(0).toUpperCase() + prop.slice(1),
            props   = (prop + ' ' + cssomPrefixes.join(ucProp + ' ') + ucProp).split(' ');

            if(is(prefixed, "string") || is(prefixed, "undefined")) {
          return testProps(props, prefixed);

            } else {
          props = (prop + ' ' + (domPrefixes).join(ucProp + ' ') + ucProp).split(' ');
          return testDOMProps(props, prefixed, elem);
        }
    }    tests['flexbox'] = function() {
      return testPropsAll('flexWrap');
    };


    tests['flexboxlegacy'] = function() {
        return testPropsAll('boxDirection');
    };


    tests['canvas'] = function() {
        var elem = document.createElement('canvas');
        return !!(elem.getContext && elem.getContext('2d'));
    };

    tests['canvastext'] = function() {
        return !!(Modernizr['canvas'] && is(document.createElement('canvas').getContext('2d').fillText, 'function'));
    };



    tests['webgl'] = function() {
        return !!window.WebGLRenderingContext;
    };


    tests['touch'] = function() {
        var bool;

        if(('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {
          bool = true;
        } else {
          injectElementWithStyles(['@media (',prefixes.join('touch-enabled),('),mod,')','{#modernizr{top:9px;position:absolute}}'].join(''), function( node ) {
            bool = node.offsetTop === 9;
          });
        }

        return bool;
    };



    tests['geolocation'] = function() {
        return 'geolocation' in navigator;
    };


    tests['postmessage'] = function() {
      return !!window.postMessage;
    };


    tests['websqldatabase'] = function() {
      return !!window.openDatabase;
    };

    tests['indexedDB'] = function() {
      return !!testPropsAll("indexedDB", window);
    };

    tests['hashchange'] = function() {
      return isEventSupported('hashchange', window) && (document.documentMode === undefined || document.documentMode > 7);
    };

    tests['history'] = function() {
      return !!(window.history && history.pushState);
    };

    tests['draganddrop'] = function() {
        var div = document.createElement('div');
        return ('draggable' in div) || ('ondragstart' in div && 'ondrop' in div);
    };

    tests['websockets'] = function() {
        return 'WebSocket' in window || 'MozWebSocket' in window;
    };


    tests['rgba'] = function() {
        setCss('background-color:rgba(150,255,150,.5)');

        return contains(mStyle.backgroundColor, 'rgba');
    };

    tests['hsla'] = function() {
            setCss('background-color:hsla(120,40%,100%,.5)');

        return contains(mStyle.backgroundColor, 'rgba') || contains(mStyle.backgroundColor, 'hsla');
    };

    tests['multiplebgs'] = function() {
                setCss('background:url(https://),url(https://),red url(https://)');

            return (/(url\s*\(.*?){3}/).test(mStyle.background);
    };    tests['backgroundsize'] = function() {
        return testPropsAll('backgroundSize');
    };

    tests['borderimage'] = function() {
        return testPropsAll('borderImage');
    };



    tests['borderradius'] = function() {
        return testPropsAll('borderRadius');
    };

    tests['boxshadow'] = function() {
        return testPropsAll('boxShadow');
    };

    tests['textshadow'] = function() {
        return document.createElement('div').style.textShadow === '';
    };


    tests['opacity'] = function() {
                setCssAll('opacity:.55');

                    return (/^0.55$/).test(mStyle.opacity);
    };


    tests['cssanimations'] = function() {
        return testPropsAll('animationName');
    };


    tests['csscolumns'] = function() {
        return testPropsAll('columnCount');
    };


    tests['cssgradients'] = function() {
        var str1 = 'background-image:',
            str2 = 'gradient(linear,left top,right bottom,from(#9f9),to(white));',
            str3 = 'linear-gradient(left top,#9f9, white);';

        setCss(
                       (str1 + '-webkit- '.split(' ').join(str2 + str1) +
                       prefixes.join(str3 + str1)).slice(0, -str1.length)
        );

        return contains(mStyle.backgroundImage, 'gradient');
    };


    tests['cssreflections'] = function() {
        return testPropsAll('boxReflect');
    };


    tests['csstransforms'] = function() {
        return !!testPropsAll('transform');
    };


    tests['csstransforms3d'] = function() {

        var ret = !!testPropsAll('perspective');

                        if ( ret && 'webkitPerspective' in docElement.style ) {

                      injectElementWithStyles('@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}', function( node, rule ) {
            ret = node.offsetLeft === 9 && node.offsetHeight === 3;
          });
        }
        return ret;
    };


    tests['csstransitions'] = function() {
        return testPropsAll('transition');
    };



    tests['fontface'] = function() {
        var bool;

        injectElementWithStyles('@font-face {font-family:"font";src:url("https://")}', function( node, rule ) {
          var style = document.getElementById('smodernizr'),
              sheet = style.sheet || style.styleSheet,
              cssText = sheet ? (sheet.cssRules && sheet.cssRules[0] ? sheet.cssRules[0].cssText : sheet.cssText || '') : '';

          bool = /src/i.test(cssText) && cssText.indexOf(rule.split(' ')[0]) === 0;
        });

        return bool;
    };

    tests['generatedcontent'] = function() {
        var bool;

        injectElementWithStyles(['#',mod,'{font:0/0 a}#',mod,':after{content:"',smile,'";visibility:hidden;font:3px/1 a}'].join(''), function( node ) {
          bool = node.offsetHeight >= 3;
        });

        return bool;
    };
    tests['video'] = function() {
        var elem = document.createElement('video'),
            bool = false;

            try {
            if ( bool = !!elem.canPlayType ) {
                bool      = new Boolean(bool);
                bool.ogg  = elem.canPlayType('video/ogg; codecs="theora"')      .replace(/^no$/,'');

                            bool.h264 = elem.canPlayType('video/mp4; codecs="avc1.42E01E"') .replace(/^no$/,'');

                bool.webm = elem.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,'');
            }

        } catch(e) { }

        return bool;
    };

    tests['audio'] = function() {
        var elem = document.createElement('audio'),
            bool = false;

        try {
            if ( bool = !!elem.canPlayType ) {
                bool      = new Boolean(bool);
                bool.ogg  = elem.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,'');
                bool.mp3  = elem.canPlayType('audio/mpeg;')               .replace(/^no$/,'');

                                                    bool.wav  = elem.canPlayType('audio/wav; codecs="1"')     .replace(/^no$/,'');
                bool.m4a  = ( elem.canPlayType('audio/x-m4a;')            ||
                              elem.canPlayType('audio/aac;'))             .replace(/^no$/,'');
            }
        } catch(e) { }

        return bool;
    };


    tests['localstorage'] = function() {
        try {
            localStorage.setItem(mod, mod);
            localStorage.removeItem(mod);
            return true;
        } catch(e) {
            return false;
        }
    };

    tests['sessionstorage'] = function() {
        try {
            sessionStorage.setItem(mod, mod);
            sessionStorage.removeItem(mod);
            return true;
        } catch(e) {
            return false;
        }
    };


    tests['webworkers'] = function() {
        return !!window.Worker;
    };


    tests['applicationcache'] = function() {
        return !!window.applicationCache;
    };


    tests['svg'] = function() {
        return !!document.createElementNS && !!document.createElementNS(ns.svg, 'svg').createSVGRect;
    };

    tests['inlinesvg'] = function() {
      var div = document.createElement('div');
      div.innerHTML = '<svg/>';
      return (div.firstChild && div.firstChild.namespaceURI) == ns.svg;
    };

    tests['smil'] = function() {
        return !!document.createElementNS && /SVGAnimate/.test(toString.call(document.createElementNS(ns.svg, 'animate')));
    };


    tests['svgclippaths'] = function() {
        return !!document.createElementNS && /SVGClipPath/.test(toString.call(document.createElementNS(ns.svg, 'clipPath')));
    };

    function webforms() {
                                            Modernizr['input'] = (function( props ) {
            for ( var i = 0, len = props.length; i < len; i++ ) {
                attrs[ props[i] ] = !!(props[i] in inputElem);
            }
            if (attrs.list){
                                  attrs.list = !!(document.createElement('datalist') && window.HTMLDataListElement);
            }
            return attrs;
        })('autocomplete autofocus list placeholder max min multiple pattern required step'.split(' '));
                            Modernizr['inputtypes'] = (function(props) {

            for ( var i = 0, bool, inputElemType, defaultView, len = props.length; i < len; i++ ) {

                inputElem.setAttribute('type', inputElemType = props[i]);
                bool = inputElem.type !== 'text';

                                                    if ( bool ) {

                    inputElem.value         = smile;
                    inputElem.style.cssText = 'position:absolute;visibility:hidden;';

                    if ( /^range$/.test(inputElemType) && inputElem.style.WebkitAppearance !== undefined ) {

                      docElement.appendChild(inputElem);
                      defaultView = document.defaultView;

                                        bool =  defaultView.getComputedStyle &&
                              defaultView.getComputedStyle(inputElem, null).WebkitAppearance !== 'textfield' &&
                                                                                  (inputElem.offsetHeight !== 0);

                      docElement.removeChild(inputElem);

                    } else if ( /^(search|tel)$/.test(inputElemType) ){
                                                                                    } else if ( /^(url|email)$/.test(inputElemType) ) {
                                        bool = inputElem.checkValidity && inputElem.checkValidity() === false;

                    } else {
                                        bool = inputElem.value != smile;
                    }
                }

                inputs[ props[i] ] = !!bool;
            }
            return inputs;
        })('search tel url email datetime date month week time datetime-local number range color'.split(' '));
        }
    for ( var feature in tests ) {
        if ( hasOwnProp(tests, feature) ) {
                                    featureName  = feature.toLowerCase();
            Modernizr[featureName] = tests[feature]();

            classes.push((Modernizr[featureName] ? '' : 'no-') + featureName);
        }
    }

    Modernizr.input || webforms();


     Modernizr.addTest = function ( feature, test ) {
       if ( typeof feature == 'object' ) {
         for ( var key in feature ) {
           if ( hasOwnProp( feature, key ) ) {
             Modernizr.addTest( key, feature[ key ] );
           }
         }
       } else {

         feature = feature.toLowerCase();

         if ( Modernizr[feature] !== undefined ) {
                                              return Modernizr;
         }

         test = typeof test == 'function' ? test() : test;

         if (typeof enableClasses !== "undefined" && enableClasses) {
           docElement.className += ' ' + (test ? '' : 'no-') + feature;
         }
         Modernizr[feature] = test;

       }

       return Modernizr; 
     };


    setCss('');
    modElem = inputElem = null;

    ;(function(window, document) {
        var options = window.html5 || {};

        var reSkip = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i;

        var saveClones = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i;

        var supportsHtml5Styles;

        var expando = '_html5shiv';

        var expanID = 0;

        var expandoData = {};

        var supportsUnknownElements;

      (function() {
        try {
            var a = document.createElement('a');
            a.innerHTML = '<xyz></xyz>';
                    supportsHtml5Styles = ('hidden' in a);

            supportsUnknownElements = a.childNodes.length == 1 || (function() {
                        (document.createElement)('a');
              var frag = document.createDocumentFragment();
              return (
                typeof frag.cloneNode == 'undefined' ||
                typeof frag.createDocumentFragment == 'undefined' ||
                typeof frag.createElement == 'undefined'
              );
            }());
        } catch(e) {
          supportsHtml5Styles = true;
          supportsUnknownElements = true;
        }

      }());        function addStyleSheet(ownerDocument, cssText) {
        var p = ownerDocument.createElement('p'),
            parent = ownerDocument.getElementsByTagName('head')[0] || ownerDocument.documentElement;

        p.innerHTML = 'x<style>' + cssText + '</style>';
        return parent.insertBefore(p.lastChild, parent.firstChild);
      }

        function getElements() {
        var elements = html5.elements;
        return typeof elements == 'string' ? elements.split(' ') : elements;
      }

          function getExpandoData(ownerDocument) {
        var data = expandoData[ownerDocument[expando]];
        if (!data) {
            data = {};
            expanID++;
            ownerDocument[expando] = expanID;
            expandoData[expanID] = data;
        }
        return data;
      }

        function createElement(nodeName, ownerDocument, data){
        if (!ownerDocument) {
            ownerDocument = document;
        }
        if(supportsUnknownElements){
            return ownerDocument.createElement(nodeName);
        }
        if (!data) {
            data = getExpandoData(ownerDocument);
        }
        var node;

        if (data.cache[nodeName]) {
            node = data.cache[nodeName].cloneNode();
        } else if (saveClones.test(nodeName)) {
            node = (data.cache[nodeName] = data.createElem(nodeName)).cloneNode();
        } else {
            node = data.createElem(nodeName);
        }

                                    return node.canHaveChildren && !reSkip.test(nodeName) ? data.frag.appendChild(node) : node;
      }

        function createDocumentFragment(ownerDocument, data){
        if (!ownerDocument) {
            ownerDocument = document;
        }
        if(supportsUnknownElements){
            return ownerDocument.createDocumentFragment();
        }
        data = data || getExpandoData(ownerDocument);
        var clone = data.frag.cloneNode(),
            i = 0,
            elems = getElements(),
            l = elems.length;
        for(;i<l;i++){
            clone.createElement(elems[i]);
        }
        return clone;
      }

        function shivMethods(ownerDocument, data) {
        if (!data.cache) {
            data.cache = {};
            data.createElem = ownerDocument.createElement;
            data.createFrag = ownerDocument.createDocumentFragment;
            data.frag = data.createFrag();
        }


        ownerDocument.createElement = function(nodeName) {
                if (!html5.shivMethods) {
              return data.createElem(nodeName);
          }
          return createElement(nodeName, ownerDocument, data);
        };

        ownerDocument.createDocumentFragment = Function('h,f', 'return function(){' +
          'var n=f.cloneNode(),c=n.createElement;' +
          'h.shivMethods&&(' +
                    getElements().join().replace(/\w+/g, function(nodeName) {
              data.createElem(nodeName);
              data.frag.createElement(nodeName);
              return 'c("' + nodeName + '")';
            }) +
          ');return n}'
        )(html5, data.frag);
      }        function shivDocument(ownerDocument) {
        if (!ownerDocument) {
            ownerDocument = document;
        }
        var data = getExpandoData(ownerDocument);

        if (html5.shivCSS && !supportsHtml5Styles && !data.hasCSS) {
          data.hasCSS = !!addStyleSheet(ownerDocument,
                    'article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}' +
                    'mark{background:#FF0;color:#000}'
          );
        }
        if (!supportsUnknownElements) {
          shivMethods(ownerDocument, data);
        }
        return ownerDocument;
      }        var html5 = {

            'elements': options.elements || 'abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video',

            'shivCSS': (options.shivCSS !== false),

            'supportsUnknownElements': supportsUnknownElements,

            'shivMethods': (options.shivMethods !== false),

            'type': 'default',

            'shivDocument': shivDocument,

            createElement: createElement,

            createDocumentFragment: createDocumentFragment
      };        window.html5 = html5;

        shivDocument(document);

    }(this, document));

    Modernizr._version      = version;

    Modernizr._prefixes     = prefixes;
    Modernizr._domPrefixes  = domPrefixes;
    Modernizr._cssomPrefixes  = cssomPrefixes;

    Modernizr.mq            = testMediaQuery;

    Modernizr.hasEvent      = isEventSupported;

    Modernizr.testProp      = function(prop){
        return testProps([prop]);
    };

    Modernizr.testAllProps  = testPropsAll;


    Modernizr.testStyles    = injectElementWithStyles;    docElement.className = docElement.className.replace(/(^|\s)no-js(\s|$)/, '$1$2') +

                                                    (enableClasses ? ' js ' + classes.join(' ') : '');

    return Modernizr;

})(this, this.document);
/*yepnope1.5.4|WTFPL*/
(function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}})(this,document);
Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0));};
;

/*
 * Collapse plugin for jQuery
 * --
 * source: http://github.com/danielstocks/jQuery-Collapse/
 * site: http://webcloud.se/jQuery-Collapse
 *
 * @author Daniel Stocks (http://webcloud.se)
 * Copyright 2013, Daniel Stocks
 * Released under the MIT, BSD, and GPL Licenses.
 */

(function($) {

  // Constructor
  function Collapse (el, options) {
    options = options || {};
    var _this = this,
      query = options.query || "> :even";

    $.extend(_this, {
      $el: el,
      options : options,
      sections: [],
      isAccordion : options.accordion || false,
      db : options.persist ? jQueryCollapseStorage(el[0].id) : false
    });

    // Figure out what sections are open if storage is used
    _this.states = _this.db ? _this.db.read() : [];

    // For every pair of elements in given
    // element, create a section
    _this.$el.find(query).each(function() {
      var section = new Section($(this), _this);
      _this.sections.push(section);

      // Check current state of section
      var state = _this.states[section._index()];
      if(state === 0) {
        section.$summary.removeClass("open");
      }
      if(state === 1) {
        section.$summary.addClass("open");
      }

      // Show or hide accordingly
      if(section.$summary.hasClass("open")) {
        section.open(true);
      }
      else {
        section.close(true);
      }
    });

    // Capute ALL the clicks!
    (function(scope) {
      _this.$el.on("click", "[data-collapse-summary]",
        $.proxy(_this.handleClick, scope));
    }(_this));
  }

  Collapse.prototype = {
    handleClick: function(e) {
      e.preventDefault();
      var sections = this.sections,
        l = sections.length;
      while(l--) {
        if($.contains(sections[l].$summary[0], e.target)) {
          sections[l].toggle();
          break;
        }
      }
    },
    open : function(eq) {
      if(isFinite(eq)) return this.sections[eq].open();
      $.each(this.sections, function() {
        this.open();
      });
    },
    close: function(eq) {
      if(isFinite(eq)) return this.sections[eq].close();
      $.each(this.sections, function() {
        this.close();
      });
    }
  };

  // Section constructor
  function Section($el, parent) {
    $.extend(this, {
      isOpen : false,
      $summary : $el
        .attr("data-collapse-summary", "")
        .wrapInner('<a href="#"/>'),
      $details : $el.next(),
      options: parent.options,
      parent: parent
    });
  }

  Section.prototype = {
    toggle : function() {
      if(this.isOpen) this.close();
      else this.open();
    },
    close: function(bypass) {
      this._changeState("close", bypass);
    },
    open: function(bypass) {
      var _this = this;
      if(_this.options.accordion && !bypass) {
        $.each(_this.parent.sections, function() {
          this.close();
        });
      }
      _this._changeState("open", bypass);
    },
    _index: function() {
      return $.inArray(this, this.parent.sections);
    },
    _changeState: function(state, bypass) {

      var _this = this;
      _this.isOpen = state == "open";
      if($.isFunction(_this.options[state]) && !bypass) {
        _this.options[state].apply(_this.$details);
      } else {
        if(_this.isOpen) _this.$details.show();
        else _this.$details.hide();
      }
      _this.$summary.removeClass("open close").addClass(state);
      _this.$details.attr("aria-hidden", state == "close");
      _this.parent.$el.trigger(state, _this);
      if(_this.parent.db) {
        _this.parent.db.write(_this._index(), _this.isOpen);
      }
    }
  };

  // Expose in jQuery API
  $.fn.extend({
    collapse: function(options, scan) {
      var nodes = (scan) ? $("body").find("[data-collapse]") : $(this);
      return nodes.each(function() {
        var settings = (scan) ? {} : options,
          values = $(this).attr("data-collapse") || "";
        $.each(values.split(" "), function(i,v) {
          if(v) settings[v] = true;
        });
        new jQueryCollapse($(this), settings);
      });
    }
  });

  //jQuery DOM Ready
  $(function() {
    $.fn.collapse(false, true);
  });

  // Expose constructor to
  // global namespace
  jQueryCollapse = Collapse;

})(window.jQuery);


/*
 * jQuery SuperBox! 0.9.3
 * Copyright (c) 2009 Pierre Bertet (pierrebertet.net)
 * Licensed under the MIT (MIT-LICENSE.txt)
 *
 * TODO :
 * - Document.load if init is before </body> against IE crash.
 * - Animations
 * - Image / Gallery mode : display a legend
*/
"use strict";
(function($) {
	
	// Local variables
	var $curLink, $overlay, $wrapper, $container, $superbox, $closeBtn, $loading, $nextprev, $nextBtn, $prevBtn, settings, $innerbox, $closeElts,
	
	// Default settings
	defaultSettings = {
		boxId: "superbox",
		boxClasses: "",
		overlayOpacity: 0.8,
		boxWidth: "600",
		boxHeight: "400",
		loadTxt: "Loading...",
		closeTxt: "Close",
		prevTxt: "Previous",
		nextTxt: "Next",
		overlayClose: true,
		beforeOpen: function(){},
		afterOpen: function(){}
	},
	
	galleryGroups = {},
	galleryMode = false,
	hideElts = $([]),
	isWaiting = false;
	
	// Init dispatcher
	$.superbox = function() {
		
		// Settings
		settings = $.extend({}, defaultSettings, $.superbox.settings);
		
		// If IE6, select elements to hide
		if ($.browser.msie && $.browser.version < 7) {
			hideElts = hideElts.add("select");
		}
		
		// Do not init SuperBox! twice
		if ($.superbox.mainInit !== true) {
			
			// Create base elements
			createElements();
			
			// Init global events (left / right, echap)
			initGlobalEvents();
			
			$.superbox.mainInit = true;
		}
		
		// Dispatch types
		dispatch();
	};
	
	// Dispatch types
	function dispatch() {
		
		// Match all superbox links
		$("a[rel^=superbox],area[rel^=superbox]").each(function() {
			
			// Optimisation
			var $this = $(this),
			relAttr = $this.attr("rel"),
			
			// Match first argument. Ex: superbox[gallery#my_id.my_class][my_gallery] > gallery#my_id.my_class
			firstArg = relAttr.match(/^superbox\[([^\]]+)\]/)[1],
			
			// Match type. Ex: superbox[gallery#my_id.my_class][my_gallery] > gallery
			type = firstArg.match(/^([^#\.]+)/)[1],
			
			// Match additionnal classes or IDs (#xxx.yyy.zzz)
			boxCurrentAttrs = firstArg.replace(type, "").match(/([#\.][^#\.\]]+)/g) || [],
			
			// Box ID and classes
			newBoxId = settings.boxId,
			newBoxClasses = settings.boxClasses;
			
			// Prevent multiple inits
			if ($this.data("superbox_init")) { return; }
			$this.data("superbox_init", true);
			
			// Additionnal rel settings
			this._relSettings = relAttr.replace("superbox["+ type + boxCurrentAttrs.join("") +"]", "");
			
			// Redefine settings
			$.each(boxCurrentAttrs, function(i, val) { // each class or id
				if (val.substr(0,1) == "#") {
					newBoxId = val.substr(1);
					
				} else if (val.substr(0,1) == ".") {
					newBoxClasses += " " + val.substr(1);
				}
			});
			
			// Call type method
			if (type.search(/^image|gallery|iframe|content|ajax$/) != -1) {
				$this.superbox(type, {boxId: newBoxId, boxClasses: newBoxClasses});
			}
		});
	}
	
	/*-- Superbox Method --*/
	$.fn.superbox = function(type, curSettings) {
		curSettings = $.extend({}, settings, curSettings);
		$.superbox[type](this, curSettings);
		
		this.click(function(e) {
			e.preventDefault();
			$curLink = this;
		});
	};
	
	/*-- Types --*/
	$.extend($.superbox, {
		
		// Wait... (loading)
		wait: function(callback) {
			
			isWaiting = true;
			
			prepareBox();
			
			// Loading anim
			initLoading(function() {
				
				// Execute callback after animation
				callback();
			});
		},
		
		// Custom SuperBox!
		open: function(content, curSettings) {
			
			curSettings = $.extend({}, settings, curSettings);
			
			// Launch load animation
			if (!isWaiting) {
				$.superbox.wait(function(){
					$.superbox.open(content, curSettings);
				});
				return;
			}
		
			// Specified dimensions
			$superbox.width( curSettings.boxWidth+"px" );
			if ( curSettings.boxHeight == 'auto' || curSettings.boxHeight == '-1' ) {
				$innerbox.height('auto');
			} else {
				$innerbox.height( curSettings.boxHeight+"px" );
			}
			
			// Set Id and Classes
			$superbox.attr("id", curSettings.boxId).attr("class", curSettings.boxClasses);
			
			// Append content
			$(content).appendTo($innerbox);
			
			// Show box
			showBox(curSettings);
			
			// Stop waiting
			isWaiting = false;
		},
		
		// Close SuperBox!
		close: function() {
			
			hideBox();
			$overlay.fadeOut(300, function() {
				
				// Show hidden elements for IE6
				hideElts.show();
			});
			galleryMode = false;
			$innerbox.height('auto');
		},
		
		// Image
		image: function($elt, curSettings, isGallery) {
			
			// On click event
			$elt.click(function() {
				
				galleryMode = !!isGallery;
				
				$.superbox.wait(function() {
					
					var relSettings = getRelSettings($elt.get(0)),
					dimensions = false;
					
					// Extra settings
					if (!!relSettings) {
						
						var relDimensions;
						
						if (galleryMode) { 
							relDimensions = relSettings[1];
						} else {
							relDimensions = relSettings[0];
						}

						if (!!relDimensions) {
							dimensions = relDimensions.split("x");
						}
					}
					
					// Image
					var $curImg = $('<img src="'+ $elt.attr("href") +'" title="'+ ($elt.attr("title") || $elt.text()) +'" />');
					
					// On image load
					$curImg.load(function() {
						var boxWidth, boxHeight;
						
						// Image box dimensions
						if (!!dimensions && dimensions[0] !== "") {
							boxWidth = dimensions[0] - 0;
						} else {
							// image width + $innerbox padding
							boxWidth = $curImg.width() + ($innerbox.css("paddingLeft").slice(0,-2)-0) + ($innerbox.css("paddingRight").slice(0,-2)-0);
						}
						if (!!dimensions && dimensions[1] !== "") {
							boxHeight = dimensions[1] - 0;
						} else {
							boxHeight = $curImg.height();
						}
						
						curSettings = $.extend({}, curSettings, {
							boxClasses: (galleryMode? "gallery " : "image ") + curSettings.boxClasses,
							boxWidth: boxWidth,
							boxHeight: 'auto',
							beforeOpen: function() {
								if (galleryMode) {
									// "Prev / Next" buttons
									nextPrev($elt, relSettings[0]);
								}
							}
						});
						
						// Open SuperBox!
						$.superbox.open($curImg, curSettings);
					});
					
					// Append image to SuperBox! (to trigger loading)
					$curImg.appendTo($innerbox);
				});
				
			});
		},
		
		// Gallery
		gallery: function($elt, curSettings) {
			
			// Extra settings
			var extraSettings = getRelSettings($elt.get(0));
			
			// Create group
			if(!galleryGroups[extraSettings[0]]) {
				galleryGroups[extraSettings[0]] = [];
			}
			
			// Test if the large image is already in the gallery
			for (var i=0; i < galleryGroups[extraSettings[0]].length; i++) {
				if (galleryGroups[extraSettings[0]][i][0].href === $elt[0].href) {
					$elt.click(function(){
						galleryGroups[extraSettings[0]][i].click();
					});
					return;
				}
			};
			
			// Add element to current group
			galleryGroups[extraSettings[0]].push($elt);
			
			$elt.data("superboxGroupKey", galleryGroups[extraSettings[0]].length - 1);
			
			// Image Box
			$.superbox['image']($elt, curSettings, true);
		},
		
		// iframe
		iframe: function($elt, curSettings) {
			
			// On click event
			$elt.click(function() {
				
				$.superbox.wait(function() {
					
					// Extra settings
					var extraSettings = getRelSettings($elt.get(0));
					
					// Dimensions
					var dims = false;
					if (extraSettings) {
						dims = extraSettings[0].split("x");
					}
					
					curSettings = $.extend({}, curSettings, {
						boxWidth: dims[0] || curSettings.boxWidth,
						boxHeight: dims[1] || curSettings.boxHeight,
						boxClasses: "iframe " + curSettings.boxClasses
					});
					
					// iframe element
					var $iframe = $('<iframe title="'+ $elt.text() +'" src="'+ $elt.attr("href") +'" name="'+ $elt.attr("href") +'" frameborder="0" scrolling="auto" width="'+ curSettings.boxWidth +'" height="'+ curSettings.boxHeight +'"></iframe>');
					
					// On iframe load
					$iframe.one("load", function() {
						
						// Open SuperBox!
						$.superbox.open($iframe, curSettings);
					});
					
					// Append iframe to SuperBox! (to trigger loading)
					$iframe.appendTo($innerbox);
				});
				
			});
		},
		
		// Content
		content: function($elt, curSettings) {
			
			// On click event
			$elt.click(function() {
				
				$.superbox.wait(function() {
					var elt_href = $elt.attr('href');
					
					curSettings.boxWidth = $(elt_href).width();
					curSettings.boxHeight = $(elt_href).height();
					
					// Extra settings
					var extraSettings = getRelSettings($elt.get(0));
					
					// Dimensions
					var dims = false;
					if (extraSettings) {
						dims = extraSettings[0].split("x");
					}
					
					// Get cloned elt height
					if (dims[1]==="") {curSettings.boxHeight="";}

					// Specific settings
					curSettings = $.extend({}, curSettings, {
						boxWidth: dims[0] || curSettings.boxWidth,
						boxHeight: dims[1] || curSettings.boxHeight,
						boxClasses: "content " + curSettings.boxClasses
					});

					// Open SuperBox!
					$.superbox.open($(elt_href).clone(), curSettings);
					$('#' + curSettings.boxId).find(elt_href).show();
				});
				
			});
		},
		
		// Ajax
		ajax: function($elt, curSettings) {
			
			// On click event
			$elt.click(function() {
				
				$.superbox.wait(function() {
					
					// Extra settings
					var extraSettings = getRelSettings($elt.get(0));
					
					// Dimensions
					var dims = false;
					if (extraSettings && extraSettings[1]) {
						dims = extraSettings[1].split("x");
					}
					
					// Extend default dimension settings
					curSettings = $.extend({}, curSettings, {
						boxWidth: dims[0] || curSettings.boxWidth,
						boxHeight: dims[1] || curSettings.boxHeight,
						boxClasses: "ajax " + curSettings.boxClasses
					});
					
					// Get Ajax URL + ID
					var splitUrl = extraSettings[0].split("#");
					var ajaxUrl = splitUrl[0];
					var anchor = splitUrl[1] || false;
					
					$.get( ajaxUrl, function(data) {
						
						// Get a specific element (by ID)?
						if (anchor !== false) {
							data = $(data).find("#" + anchor);
							if (data.length === 0) {
								data = $(data).filter("#" + anchor);
							}
						}
						
						// Open SuperBox!
						$.superbox.open(data, curSettings);
					});
				});
			});
		}
	});
	
	// Get extra settings in rel attribute
	function getRelSettings(elt) {
		return elt._relSettings.match(/([^\[\]]+)/g);
	}
	
	// Next / Previous
	function nextPrev($elt, group) {
		
		$nextprev.show();
		
		galleryMode = true;
		
		var nextKey = $elt.data("superboxGroupKey") + 1,
			prevKey = nextKey - 2;
		
		// Next
		if (galleryGroups[group][nextKey]) {
			$nextBtn.removeClass("disabled").unbind("click").bind("click", function() {
				galleryGroups[group][nextKey].click();
			});
			
		} else {
			$nextBtn.addClass("disabled").unbind("click");
		}
		
		// Prev
		if (galleryGroups[group][prevKey]) {
			$prevBtn.removeClass("disabled").unbind("click").bind("click", function() {
				galleryGroups[group][prevKey].click();
			});
			
		} else {
			$prevBtn.addClass("disabled").unbind("click");
		}
		
		// Keys shortcuts
		$(document)
			.unbind("keydown.superbox_np")
			.bind("keydown.superbox_np", function(e) {
				
				// Left/right arrows
				if (e.keyCode == 39) {
					$nextBtn.click();
				
				} else if (e.keyCode == 37) {
					$prevBtn.click();
				}
			});
	}
	
	// Hide Box
	function hideBox() {
		
		/* creates errors in IE.
		if (!!$curLink) {
			$curLink.focus();
		}*/
		
		$(document).unbind("keydown.spbx_close").unbind("keydown.superbox_np");
		$loading.hide();
		$nextprev.hide();
		$wrapper.hide().css({position: "fixed", top: 0});
		$innerbox.empty();
		$curLink = null;
	}
	
	// "Loading..."
	function initLoading(callback) {
		
		// Keys shortcuts
		$(document)
			.unbind("keydown.spbx_close")
			.bind("keydown.spbx_close",function(e) {
				
				// Escape
				if (e.keyCode == 27) {
					$.superbox.close();
				}
			});
		
		var loading = function() {
			
			// IE6
			if($.browser.msie && $.browser.version < 7) {
				$wrapper.css({position: "absolute", top:"50%"});
			}
			
			// Hide elements for IE6
			hideElts.hide();
			
			$loading.show();
			callback();
		};
		
		if (galleryMode) {
			$overlay.css("opacity", settings.overlayOpacity).show();
			loading();
		}
		else {
			$overlay.css("opacity", 0).show().fadeTo(300, settings.overlayOpacity, loading);
		}
	}
	
	// "Prepare" box : Show $superbox with top:-99999px;
	function prepareBox() {
		$wrapper.show();
		$innerbox.empty();
		$superbox.css({position: "absolute", top: "-99999px"});
	}
	
	// Display box
	function showBox(curSettings) {
		
		curSettings = $.extend({}, settings, curSettings);
		
		// Stop "Loading..."
		$loading.hide();
		
		// Show $superbox
		$superbox.css({position: "static", top: 0, opacity: 0});
		
		// IE6 and IE7
		if ($.browser.msie && $.browser.version < 8) {
			$superbox.css({position: "relative", top:"-50%"});
			
			// IE6
			if ($.browser.msie && $.browser.version < 7) {
				$wrapper.css({position: "absolute", top:"50%"});
			}
		}
		
		// Position absolute if image height > window height
		if ( $(window).height() < $wrapper.height() ) {
			$wrapper.css({position: "absolute", top: ($wrapper.offset().top + 10) + "px"});
		}
		
		curSettings.beforeOpen();
		
		$superbox.fadeTo(300, 1, function(){
			curSettings.afterOpen();
		}).focus();
	}
	
	// Create base elements (overlay, wrapper, box, loading)
	function createElements() {
		var $closeElts;
		// Overlay (background)
		$overlay = $('<div id="superbox-overlay"/>').appendTo("body").hide();
		
		// Wrapper
		$wrapper = $('<div id="superbox-wrapper"/>').appendTo("body").hide();
		
		// Box container
		$container = $('<div id="superbox-container"/>').appendTo($wrapper);
		
		// Box
		$superbox = $('<div id="superbox" tabindex="0"/>').appendTo($container);
		
		// Inner box
		$innerbox = $('<div id="superbox-innerbox"/>').appendTo($superbox);
		
		// "Next / Previous"
		$nextprev = $('<p class="nextprev"/>').appendTo($superbox).hide();
		$prevBtn = $('<a class="prev" tabindex="0" role="button"><strong><span>'+ settings.prevTxt +'</span></strong></a>').appendTo($nextprev);
		$nextBtn = $('<a class="next" tabindex="0" role="button"><strong><span>'+ settings.nextTxt +'</span></strong></a>').appendTo($nextprev);
		
		// Add close button
		$closeBtn = $('<p class="close"><a tabindex="0" role="button"><strong><span>'+ settings.closeTxt +'</span></strong></a></p>').prependTo($superbox).find("a");
		
		// "Loading..."
		$loading = $('<p class="loading">'+ settings.loadTxt +'</p>').appendTo($container).hide();
	}
	
	// Init global events : close (echap), keyboard access (focus + enter)
	function initGlobalEvents() {
		
		// Hide on click
		if (settings.overlayClose) {
			$closeElts = $overlay.add($wrapper).add($closeBtn);
		} else {
			$closeElts = $closeBtn;
		}
		
		$closeElts.click(function() { $.superbox.close(); });
		
		// Remove "hide on click" on superbox
		$superbox.click(function(e) {
			e.stopPropagation();
		});
		
		// Opera already click on "focus + enter"
		if (!window.opera) {
			
			// Keyboard (focus + enter)
			$prevBtn.add($closeBtn).add($nextBtn).keypress(function(e) {
				if (e.keyCode === 13) {
					$(this).click();
				}
			});
		}
	}
	
})(jQuery);

/** @cc_on
 * jquery.herotabs
 * version 1.1.3;
 * Requires jQuery 1.9.0 or higher
 * https://github.com/simonsmith/jquery.herotabs
 */

!function(global) {
    'use strict';

    var instanceId = 0;
    var defaults = {
        delay: 0,
        duration: 0,
        startOn: 0,
        reverse: false,
        interactEvent: 'click',
        useTouch: true,
        css: {
            active:     'is-active',
            current:    'tab-current',
            navCurrent: 'tab-nav-current',
            navId:      'tabnav'
        },
        selectors: {
            tab:       '.js-tab',
            nav:       '.js-nav',
            navItem:   '.js-nav-item'
        },
        zIndex: {
            bottom: 1,
            top:    2
        }
    };

    // Wrap is used for AMD support
    var wrap = function($) {

        var Herotabs = function(container, options) {
            this.container         = container;
            this.options           = options;
            this._currentTab       = null;
            this._timer            = null;
            this._instanceId       = ++instanceId;

            this._getDOMElements();

            if (this.nav.length > 0) {
                this._ariafy();
                this._setCurrentNav();
                this._attachNavEvents();
            }

            this._showInitialTab(options.startOn);
            this._attachKeyEvents();

            // Begin cycling through tabs if a delay has been set
            if (options.delay > 0) {
                this.start();
                this._attachHoverEvents();
            }

            container.addClass(options.css.active);
            container[0].style.position = 'relative';
        };

        Herotabs.prototype = {
            constructor: Herotabs,

            // Public Methods
            // ---------------------------------------

            showTab: function(tabToShow) {
                tabToShow = this._getTab(tabToShow);

                var currentTab  = this._currentTab;
                var opt         = this.options;

                // Exit if there is no tab to show or the same one
                // is already showing
                if (tabToShow.length == 0 || currentTab.is(tabToShow)) {
                    return this;
                }

                // Quit any running animations first
                this.tab.finish();

                // The next tab to be shown needs position: absolute to allow
                // it to be under the current tab as it begins animation. Once the current tab
                // has finished animating the next tab will have position: relative reapplied
                // so it maintains the height of the herotabs in the DOM.
                tabToShow
                    .show()
                    .css({
                        'position': 'absolute',
                        'opacity': 1
                    });

                // Animate the current tab and set visibility when
                // the animation has completed
                var self = this;
                currentTab.animate({ opacity: 0 }, opt.duration, function() {
                    self._setTabVisibilty(tabToShow, currentTab);
                });

                // Trigger event outside of .animate()
                // Allows user to use keyboard navigation and skip a tab
                // without waiting for animations to finish
                this.triggerEvent('herotabs.show', tabToShow);

                // Update reference to the current tab
                this._currentTab = tabToShow;

                return this;
            },

            nextTab: function() {
                var currentIndex = this.tab.index(this._currentTab);
                var nextTab = this.tab.eq(currentIndex + 1);
                nextTab = (nextTab.length > 0 ? nextTab : this.tab.eq(0));

                this.showTab(nextTab);
                this.triggerEvent('herotabs.next', nextTab);

                return this;
            },

            prevTab: function() {
                var currentIndex = this.tab.index(this._currentTab);

                // Assume that if currentIndex is 0 the first tab is currently
                // selected so grab the last one.
                var prevTab = this.tab.eq(currentIndex == 0 ? -1 : currentIndex - 1);

                this.showTab(prevTab);
                this.triggerEvent('herotabs.prev', prevTab);

                return this;
            },

            start: function() {
                var opt = this.options;
                if (!opt.delay) {
                    return this;
                }

                var self     = this;
                var reverse  = opt.reverse;

                this._timer = setInterval(function() {
                    if (self._navItemHasFocus()) {
                        return;
                    }

                    if (!reverse) {
                        self.nextTab();
                    } else {
                        self.prevTab();
                    }
                }, opt.delay);

                this.triggerEvent('herotabs.start', this._currentTab);

                return this;
            },

            stop: function() {
                clearInterval(this._timer);

                this.triggerEvent('herotabs.stop', this._currentTab);

                return this;
            },

            triggerEvent: function(eventName, tabToShow) {
                tabToShow = this._getTab(tabToShow);
                var index = this.tab.index(tabToShow);

                this.container.trigger(eventName, {
                    currentTab: tabToShow,
                    currentTabIndex: index,
                    currentNavItem: this.navItem.eq(index)
                });
            },

            // Private Methods
            // ---------------------------------------

            _getDOMElements: function() {
                var selectors = this.options.selectors;

                for (var element in selectors) {
                    this[element] = this.container.find(selectors[element]);
                }
            },

            _getTab: function(tab) {
                return (typeof tab != 'number' ? tab : this.tab.eq(tab));
            },

            _showInitialTab: function(startOn) {
                // Check whether there is a tab selected by the URL hash
                var tabFromHash = location.hash && this.tab.filter(location.hash);
                var initialTab  = tabFromHash.length == 0 ? this.tab.eq(startOn) : tabFromHash;

                this.tab.css('top', 0);
                this._setTabVisibilty(initialTab, this.tab.not(initialTab));

                this.triggerEvent('herotabs.show', initialTab);
                this._currentTab = initialTab;
            },

            _setTabVisibilty: function(tabToShow, tabToHide) {
                var opt    = this.options;
                var css    = opt.css;
                var zIndex = opt.zIndex;

                tabToShow
                    .addClass(css.current)
                    .css({
                        'z-index': zIndex.top,
                        'position': 'relative'
                    })
                    .attr('aria-hidden', false)
                    .find('a')
                    .addBack()
                    .attr('tabindex', '0');

                tabToHide
                    .removeClass(css.current)
                    .css({
                        'opacity': 0,
                        'z-index': zIndex.bottom
                    })
                    .hide()
                    .attr('aria-hidden', true)
                    .find('a')
                    .addBack()
                    .attr('tabindex', '-1');
            },
            
            _ariafy: function() {
                var navId = this.options.css.navId + this._instanceId + '-';

                this.nav[0].setAttribute('role', 'tablist');
                this.navItem
                    .attr('role', 'presentation')
                    .find('a')
                    .each(function(index) {
                        this.id = navId + (index + 1);
                        this.setAttribute('role', 'tab');
                    });

                this.tab.each(function(index) {
                    this.setAttribute('role', 'tabpanel');
                    this.setAttribute('aria-labelledby', navId + (index + 1));
                });
            },

            _attachHoverEvents: function() {
                var self = this;

                this.container.on('mouseenter', function() {
                    self.stop();
                    self.triggerEvent('herotabs.mouseenter', self._currentTab);
                });

                this.container.on('mouseleave', function() {
                    self.start();
                    self.triggerEvent('herotabs.mouseleave', self._currentTab);
                });
            },
            
            _attachKeyEvents: function() {
                var self = this;

                this.nav.on('keydown', 'a', function(event) {
                    switch(event.keyCode) {
                        case 37: // Left
                        case 38: // Up
                            self.prevTab();
                        break;
                        case 39: // Right
                        case 40: // Down
                            self.nextTab();
                        break;
                    }
                });
            },

            _isTouchEnabled: function() {
                return ('ontouchend' in document.documentElement) && this.options.useTouch;
            },

            _getEventType: function() {
                var eventMap = {
                    hover: 'mouseenter',
                    touch: 'touchend',
                    click: 'click'
                };

                // If touch is supported then override the event in options
                return (this._isTouchEnabled() ? eventMap.touch : eventMap[this.options.interactEvent]);
            },

            _attachNavEvents: function() {
                var nav       = this.nav;
                var eventType = this._getEventType();
                var opt       = this.options;
                var self      = this;
                
                nav.on(eventType, 'a', function(event) {
                    self.showTab($(this).parents(opt.selectors.navItem).index());

                    // Only preventDefault if link is an anchor.
                    // Allows nav links to use external urls
                    if (self._checkUrlIsAnchor(this.href)) {
                        event.preventDefault();
                    }
                });
            },

            // Check if url is a hash anchor e.g #foo, #foo-123 etc
            _isAnchorRegex: /#[A-Za-z0-9-_]+$/,

            _checkUrlIsAnchor: function(url) {
                return this._isAnchorRegex.test(url);
            },

            _navItemHasFocus: function() {
                // Only change focus if the user is focused inside the container already.
                // This stops the tabs stealing focus if the user is somewhere else
                // For example if the tabs are on a delay and the user is focused elsewhere it would be
                // annoying to have focus snap back to the tabs every time an item changed
                return $(document.activeElement).closest(this.container).is(this.container);
            },

            _setCurrentNav: function() {
                var self        = this;
                var opt         = this.options;
                var current     = opt.css.navCurrent;
                var navItem     = this.navItem;

                self.container.on('herotabs.show', function(event, tab) {
                    navItem
                        .removeClass(current)
                        .find('a')
                        .each(function() {
                            this.setAttribute('aria-selected', 'false');
                            this.setAttribute('tabindex', '-1');
                        });

                    // Current nav item link
                    var navItemLink = navItem
                        .eq(tab.currentTabIndex)
                        .addClass(current)
                        .find('a');

                    navItemLink[0].setAttribute('aria-selected', 'true');
                    navItemLink[0].setAttribute('tabindex', '0');

                    if (self._navItemHasFocus()) {
                        navItemLink.focus();
                    }
                });
            }
        };

        $.fn.herotabs = function(options) {
            options = $.extend(true, {}, defaults, options);

            return this.each(function() {
                var $this = $(this);
                $this.data('herotabs', new Herotabs($this, options));
            });
        };

        $.fn.herotabs.defaults   = defaults;
        $.fn.herotabs.Herotabs   = Herotabs;
    };

    if (typeof define == 'function' && define.amd) {
        define(['jquery'], wrap);
    } else {
        wrap(global.jQuery);
    }
}(this);


/*
 *	jQuery OwlCarousel v1.22
 *
 *	Copyright (c) 2013 Bartosz Wojciechowski
 *	http://www.owlgraphic.com/owlcarousel
 *
 *	Licensed under MIT
 *
 */


// Object.create function
if ( typeof Object.create !== "function" ) {
	Object.create = function( obj ) {
		function F() {};
		F.prototype = obj;
		return new F();
	};
}
(function( $, window, document, undefined ) {

	var Carousel = {
		init :function(options, el){
			var base = this;
			base.options = $.extend({}, $.fn.owlCarousel.options, options);
			var elem = el;
			var $elem = $(el);
			base.$elem = $elem;
			base.loadContent()
		},

		loadContent : function(){
			var base = this;

			if (typeof base.options.beforeInit === "function") {
				base.options.beforeInit.apply(this,[base.$elem]);
			}

			if (typeof base.options.jsonPath === "string") {
				var url = base.options.jsonPath;

				function getData(data) {
					if (typeof base.options.jsonSuccess === "function") {
						base.options.jsonSuccess.apply(this,[data]);
					} else {
						var content = "";
						for(var i in data["owl"]){
							content += data["owl"][i]["item"];
						}
						base.$elem.html(content);
					}
					base.logIn();
				}
				$.getJSON(url,getData);
			} else {
				base.logIn();
			}
		},

		logIn : function(){
			var base = this;

			base.baseClass();

			base.$elem
			.css({opacity: 0})

			base.checkTouch();
			base.eventTypes();
			base.support3d();


			base.wrapperWidth = 0;
			base.currentSlide = 0; //Starting Position

			base.userItems = base.$elem.children();
			base.itemsAmount = base.userItems.length;
			base.wrapItems();

			base.owlItems = base.$elem.find(".owl-item");
			base.owlWrapper = base.$elem.find(".owl-wrapper");

			base.orignalItems = base.options.items;
			base.playDirection = "next";

			base.checkVisible;

			//setTimeout(function(){
			base.onStartup();
			//},0);
			base.customEvents();

		},

		onStartup : function(){
			var base = this;
			base.updateItems();
			base.calculateAll();
			base.buildControls();
			base.updateControls();
			base.response();
			base.moveEvents();
			base.stopOnHover();
			if(base.options.autoPlay === true){
				base.options.autoPlay = 5000;
			}
			base.play();
			base.$elem.find(".owl-wrapper").css("display","block")

			if(!base.$elem.is(":visible")){
				base.watchVisibility();
			} else {
				setTimeout(function(){
					base.$elem.animate({opacity: 1},200);
				},10);
			}
			base.onstartup = false;
			base.eachMoveUpdate();
			if (typeof base.options.afterInit === "function") {
				base.options.afterInit.apply(this,[base.$elem]);
			}
		},

		eachMoveUpdate : function(){
			var base = this;
			if(base.options.lazyLoad === true){
				base.lazyLoad();
			}
			if(base.options.autoHeight === true){
				base.autoHeight();
			}
			if(base.options.addClassActive === true){
				base.addClassActive();
			}
			if (typeof base.options.afterAction === "function") {
				base.options.afterAction.apply(this,[base.$elem]);
			}
		},

		updateVars : function(){
			var base = this;
			base.watchVisibility();
			base.updateItems();
			base.calculateAll();
			base.updatePosition();
			base.updateControls();
			base.eachMoveUpdate();
		},

		reload : function(elements){
			var base = this;
			setTimeout(function(){
				base.updateVars();
			},0)
		},

		watchVisibility : function(){
			var base = this;
			clearInterval(base.checkVisible);
			if(!base.$elem.is(":visible")){
				base.$elem.css({opacity: 0});
				clearInterval(base.autoPlaySpeed);
			} else {
				return false;
			}
			base.checkVisible = setInterval(function(){
				if (base.$elem.is(":visible")) {
					base.reload();
					base.$elem.animate({opacity: 1},200);
					clearInterval(base.checkVisible);
				}
			}, 500);
		},

		wrapItems : function(){
			var base = this;
			base.userItems.wrapAll("<div class=\"owl-wrapper\">").wrap("<div class=\"owl-item\"></div>");
			base.$elem.find(".owl-wrapper").wrap("<div class=\"owl-wrapper-outer\">");
			base.wrapperOuter = base.$elem.find(".owl-wrapper-outer");
			base.$elem.css("display","block");
		},

		baseClass : function(){
			var base = this;
			var hasBaseClass = base.$elem.hasClass(base.options.baseClass);
			var hasThemeClass = base.$elem.hasClass(base.options.theme);

			if(!hasBaseClass){
				base.$elem.addClass(base.options.baseClass);
			}

			if(!hasThemeClass){
				base.$elem.addClass(base.options.theme);
			}
		},

		updateItems : function(){
			var base = this;

			if(base.options.responsive === false){
				return false;
			}

			if(base.options.singleItem === true){
				base.options.items = base.orignalItems = 1;
				base.options.itemsDesktop = false;
				base.options.itemsDesktopSmall = false;
				base.options.itemsTablet = false;
				base.options.itemsMobile = false;
				return false;
			}

			var width = $(window).width();

			if(width > (base.options.itemsDesktop[0] || base.orignalItems) ){
				 base.options.items = base.orignalItems
			}

			if(width <= base.options.itemsDesktop[0] && base.options.itemsDesktop !== false){
				base.options.items = base.options.itemsDesktop[1];
			}

			if(width <= base.options.itemsDesktopSmall[0] && base.options.itemsDesktopSmall !== false){
				base.options.items = base.options.itemsDesktopSmall[1];
			}

			if(width <= base.options.itemsTablet[0]  && base.options.itemsTablet !== false){
				base.options.items = base.options.itemsTablet[1];
			}

			if(width <= base.options.itemsMobile[0] && base.options.itemsMobile !== false){
				base.options.items = base.options.itemsMobile[1];
			}

			//if number of items is less than declared
			if(base.options.items > base.itemsAmount){
				base.options.items = base.itemsAmount;
			}
		},

		response : function(){
			var base = this,
				smallDelay;
			if(base.options.responsive !== true){
				return false
			}
			var lastWindowWidth = $(window).width();
			$(window).resize(function(){
				if($(window).width() !== lastWindowWidth){
					if(base.options.autoPlay !== false){
						clearInterval(base.autoPlaySpeed);
					}
					clearTimeout(smallDelay);
					smallDelay = setTimeout(function(){
						lastWindowWidth = $(window).width();
						base.updateVars();
					},base.options.responsiveRefreshRate);
				}
			})
		},

		updatePosition : function(){
			var base = this;

			if(base.support3d === true){
				if(base.positionsInArray[base.currentSlide] > base.maximumPixels){
					base.transition3d(base.positionsInArray[base.currentSlide]);
				} else {
					base.transition3d(0);
					base.currentSlide = 0;
				}
			} else{
				if(base.positionsInArray[base.currentSlide] > base.maximumPixels){
					base.css2slide(base.positionsInArray[base.currentSlide]);
				} else {
					base.css2slide(0);
					base.currentSlide = 0;
				}
			}
			if(base.options.autoPlay !== false){
				base.checkAp();
			}
		},

		appendItemsSizes : function(){
			var base = this;

			var roundPages = 0;
			var lastItem = base.itemsAmount - base.options.items;

			base.owlItems.each(function(index){
				$(this)
				.css({"width": base.itemWidth})
				.data("owl-item",Number(index));

				if(index % base.options.items === 0 || index === lastItem){
					if(!(index > lastItem)){
						roundPages +=1;
					}
				}
				$(this).data("owl-roundPages",roundPages);
			});
		},

		appendWrapperSizes : function(){
			var base = this;
			var width = 0;

			var width = base.owlItems.length * base.itemWidth;

			base.owlWrapper.css({
				"width": width*2,
				"left": 0
			});
			base.appendItemsSizes();
		},

		calculateAll : function(){
			var base = this;
			base.calculateWidth();
			base.appendWrapperSizes();
			base.loops();
			base.max();
		},

		calculateWidth : function(){
			var base = this;
			base.itemWidth = Math.round(base.$elem.width()/base.options.items)
		},

		max : function(){
			var base = this;
			base.maximumSlide = base.itemsAmount - base.options.items;
			var maximum = (base.itemsAmount * base.itemWidth) - base.options.items * base.itemWidth;
				maximum = maximum * -1
			base.maximumPixels = maximum;
			return maximum;
		},

		min : function(){
			return 0;
		},

		loops : function(){
			var base = this;

			base.positionsInArray = [0];
			var elWidth = 0;

			for(var i = 0; i<base.itemsAmount; i++){
				elWidth += base.itemWidth;
				base.positionsInArray.push(-elWidth)
			}
		},

		buildControls : function(){
			var base = this;
			if(base.options.navigation === true || base.options.pagination === true){
				base.owlControls = $("<div class=\"owl-controls\"/>").toggleClass("clickable", !base.isTouch).appendTo(base.$elem);
			}
			if(base.options.pagination === true){
				base.buildPagination();
			}
			if(base.options.navigation === true){
				base.buildButtons();
			}
		},

		buildButtons : function(){
			var base = this;
			var buttonsWrapper = $("<div class=\"owl-buttons\"/>")
			base.owlControls.append(buttonsWrapper);

			base.buttonPrev = $("<div/>",{
				"class" : "owl-prev",
				"html" : base.options.navigationText[0] || ""
				});

			base.buttonNext = $("<div/>",{
				"class" : "owl-next",
				"html" : base.options.navigationText[1] || ""
				});

			buttonsWrapper
			.append(base.buttonPrev)
			.append(base.buttonNext);

			buttonsWrapper.on("touchend.owlControls mouseup.owlControls", "div[class^=\"owl\"]", function(event){
				event.preventDefault();
				if($(this).hasClass("owl-next")){
					base.next();
				} else{
					base.prev();
				}
			})
		},

		buildPagination : function(){
			var base = this;

			base.paginationWrapper = $("<div class=\"owl-pagination\"/>");
			base.owlControls.append(base.paginationWrapper);

			base.paginationWrapper.on("touchend.owlControls mouseup.owlControls", ".owl-page", function(event){
				event.preventDefault();
				if(Number($(this).data("owl-page")) !== base.currentSlide){
					base.goTo( Number($(this).data("owl-page")), true);
				}
			});
		},

		updatePagination : function(){
			var base = this;
			if(base.options.pagination === false){
				return false;
			}

			base.paginationWrapper.html("");

			var counter = 0;
			var lastPage = base.itemsAmount - base.itemsAmount % base.options.items;

			for(var i = 0; i<base.itemsAmount; i++){
				if(i % base.options.items === 0){
					counter +=1;
					if(lastPage === i){
						var lastItem = base.itemsAmount - base.options.items;
					}
					var paginationButton = $("<div/>",{
						"class" : "owl-page"
						});
					var paginationButtonInner = $("<span></span>",{
						"text": base.options.paginationNumbers === true ? counter : "",
						"class": base.options.paginationNumbers === true ? "owl-numbers" : ""
					});
					paginationButton.append(paginationButtonInner);

					paginationButton.data("owl-page",lastPage === i ? lastItem : i);
					paginationButton.data("owl-roundPages",counter);

					base.paginationWrapper.append(paginationButton);
				}
			}
			base.checkPagination();
		},
		checkPagination : function(){
			var base = this;

			base.paginationWrapper.find(".owl-page").each(function(i,v){
				if($(this).data("owl-roundPages") === $(base.owlItems[base.currentSlide]).data("owl-roundPages") ){
					base.paginationWrapper
						.find(".owl-page")
						.removeClass("active");
					$(this).addClass("active");
				}
			});
		},

		checkNavigation : function(){
			var base = this;

			if(base.options.navigation === false){
				return false;
			}
			if(base.options.goToFirstNav === false){
				if(base.currentSlide === 0 && base.maximumSlide === 0){
					base.buttonPrev.addClass("disabled");
					base.buttonNext.addClass("disabled");
				} else if(base.currentSlide === 0 && base.maximumSlide !== 0){
					base.buttonPrev.addClass("disabled");
					base.buttonNext.removeClass("disabled");
				} else if (base.currentSlide === base.maximumSlide){
					base.buttonPrev.removeClass("disabled");
					base.buttonNext.addClass("disabled");
				} else if(base.currentSlide !== 0 && base.currentSlide !== base.maximumSlide){
					base.buttonPrev.removeClass("disabled");
					base.buttonNext.removeClass("disabled");
				}
			}
		},

		updateControls : function(){
			var base = this;
			base.updatePagination();
			base.checkNavigation();
			if(base.owlControls){
				if(base.options.items === base.itemsAmount){
					base.owlControls.hide();
				} else {
					base.owlControls.show();
				}
			}
		},

		destroyControls : function(){
			var base = this;
			if(base.owlControls){
				base.owlControls.remove();
			}
		},

		next : function(speed){
			var base = this;
			base.currentSlide += base.options.scrollPerPage === true ? base.options.items : 1;
			if(base.currentSlide > base.maximumSlide + (base.options.scrollPerPage == true ? (base.options.items - 1) : 0)){
				if(base.options.goToFirstNav === true){
					base.currentSlide = 0;
					speed = "goToFirst";
				} else {
					base.currentSlide = base.maximumSlide;
					return false;
				}
			}
			base.goTo(base.currentSlide,speed);
		},

		prev : function(speed){
			var base = this;
			if(base.options.scrollPerPage === true && base.currentSlide > 0 && base.currentSlide < base.options.items){
				base.currentSlide = 0
			} else {
			base.currentSlide -= base.options.scrollPerPage === true ? base.options.items : 1;
			}
			if(base.currentSlide < 0){
				if(base.options.goToFirstNav === true){
					base.currentSlide = base.maximumSlide;
					speed = "goToFirst"
				} else {
					base.currentSlide =0;
					return false;
				}
			}
			base.goTo(base.currentSlide,speed);
		},

		goTo : function(position,pagination){
			var base = this;

			if(typeof base.options.beforeMove === "function") {
				base.options.beforeMove.apply(this,[base.$elem]);
			}
			if(position >= base.maximumSlide){
				position = base.maximumSlide;
			}
			else if( position <= 0 ){
				position = 0;
			}
			base.currentSlide = position;

			var goToPixel = base.positionsInArray[position];

			if(base.support3d === true){
				base.isCss3Finish = false;

				if(pagination === true){
					base.swapTransitionSpeed("paginationSpeed");
					setTimeout(function() {
						base.isCss3Finish = true;
					}, base.options.paginationSpeed);

				} else if(pagination === "goToFirst" ){
					base.swapTransitionSpeed(base.options.goToFirstSpeed);
					setTimeout(function() {
						base.isCss3Finish = true;
					}, base.options.goToFirstSpeed);

				} else {
					base.swapTransitionSpeed("slideSpeed");
					setTimeout(function() {
						base.isCss3Finish = true;
					}, base.options.slideSpeed);
				}
				base.transition3d(goToPixel);
			} else {
				if(pagination === true){
					base.css2slide(goToPixel, base.options.paginationSpeed);
				} else if(pagination === "goToFirst" ){
					base.css2slide(goToPixel, base.options.goToFirstSpeed);
				} else {
					base.css2slide(goToPixel, base.options.slideSpeed);
				}
			}
			if(base.options.pagination === true){
				base.checkPagination();
			}
			if(base.options.navigation === true){
				base.checkNavigation();
			}
			if(base.options.autoPlay !== false){
				base.checkAp();
			}
			base.eachMoveUpdate();
			if(typeof base.options.afterMove === "function") {
				base.options.afterMove.apply(this,[base.$elem]);
			}
		},

		stop: function(){
			var base = this;
			base.apStatus = "stop";
			clearInterval(base.autoPlaySpeed);
		},

		checkAp : function(){
			var base = this;
			if(base.apStatus !== "stop"){
				base.play();
			}
		},

		play : function(){
			var base = this;
			base.apStatus = "play";
			if(base.options.autoPlay === false){
				return false;
			}
			clearInterval(base.autoPlaySpeed);
			base.autoPlaySpeed = setInterval(function(){
				if(base.currentSlide < base.maximumSlide && base.playDirection === "next"){
					base.next(true);
				} else if(base.currentSlide === base.maximumSlide){
					if(base.options.goToFirst === true){
						base.goTo(0,"goToFirst");
					} else{
						base.playDirection = "prev";
						base.prev(true);
					}
				} else if(base.playDirection === "prev" && base.currentSlide > 0){
					base.prev(true);
				} else if(base.playDirection === "prev" && base.currentSlide === 0){
					base.playDirection = "next";
					base.next(true);
				}
			},base.options.autoPlay);
		},

		swapTransitionSpeed : function(action){
			var base = this;
			if(action === "slideSpeed"){
				base.owlWrapper.css(base.addTransition(base.options.slideSpeed));
			} else if(action === "paginationSpeed" ){
				base.owlWrapper.css(base.addTransition(base.options.paginationSpeed));
			} else if(typeof action !== "string"){
				base.owlWrapper.css(base.addTransition(action));
			}
		},

		addTransition : function(speed){
			var base = this;
			return {
				"-webkit-transition": "all "+ speed +"ms ease",
				"-moz-transition": "all "+ speed +"ms ease",
				"-o-transition": "all "+ speed +"ms ease",
				"transition": "all "+ speed +"ms ease"
			};
		},

		removeTransition : function(){
			return {
				"-webkit-transition": "",
				"-moz-transition": "",
				"-o-transition": "",
				"transition": ""
			};
		},

		doTranslate : function(pixels){
			return {
				"-webkit-transform": "translate3d("+pixels+"px, 0px, 0px)",
				"-moz-transform": "translate3d("+pixels+"px, 0px, 0px)",
				"-o-transform": "translate3d("+pixels+"px, 0px, 0px)",
				"-ms-transform": "translate3d("+pixels+"px, 0px, 0px)",
				"transform": "translate3d("+pixels+"px, 0px,0px)"
			};
		},

		transition3d : function(value){
			var base = this;
			base.owlWrapper.css(base.doTranslate(value));
		},

		css2move : function(value){
			var base = this;
			base.owlWrapper.css({"left" : value})
		},

		css2slide : function(value,speed){
			var base = this;

			base.isCssFinish = false;
			base.owlWrapper.stop(true,true).animate({
				"left" : value
			}, {
				duration : speed || base.options.slideSpeed ,
				complete : function(){
					base.isCssFinish = true;
				}
			});
		},

		support3d : function(){
				var base = this;

				var sTranslate3D = "translate3d(0px, 0px, 0px)";
				 var eTemp = document.createElement("div");
				eTemp.style.cssText = "  -moz-transform:"    + sTranslate3D +
									  "; -ms-transform:"     + sTranslate3D +
									  "; -o-transform:"      + sTranslate3D +
									  "; -webkit-transform:" + sTranslate3D +
									  "; transform:"         + sTranslate3D;
				var rxTranslate = /translate3d\(0px, 0px, 0px\)/g;
				var asSupport = eTemp.style.cssText.match(rxTranslate);
				var bHasSupport = (asSupport !== null && asSupport.length === 1);
				base.support3d = bHasSupport
				return bHasSupport;
		},

		checkTouch : function(){
			var base = this;
			base.isTouch = 'ontouchstart' in window || navigator.msMaxTouchPoints;
		},

		moveEvents : function(){
			var base = this;
			if(base.options.mouseDrag !== false || base.options.touchDrag !== false){
				base.gestures();
				base.disabledEvents();
			}
		},

		eventTypes : function(){
		var base = this;
		var types = ["s","e","x"];

		base.ev_types = {};

		if(base.options.mouseDrag === true && base.options.touchDrag === true){
			types = [
				"touchstart.owl mousedown.owl",
				"touchmove.owl mousemove.owl",
				"touchend.owl touchcancel.owl mouseup.owl"
			];
		} else if(base.options.mouseDrag === false && base.options.touchDrag === true){
			types = [
				"touchstart.owl",
				"touchmove.owl",
				"touchend.owl touchcancel.owl"
			];
		} else if(base.options.mouseDrag === true && base.options.touchDrag === false){
			types = [
				"mousedown.owl",
				"mousemove.owl",
				"mouseup.owl"
			];
		}

		base.ev_types["start"] = types[0];
		base.ev_types["move"] = types[1];
		base.ev_types["end"] = types[2];
		},

		disabledEvents :  function(){
			var base = this;
			base.$elem.on("dragstart.owl","img", function(event) { event.preventDefault();});
			base.$elem.bind("mousedown.disableTextSelect", function() {return false;});
		},

		gestures : function(){
			var base = this;

			var locals = {
				offsetX : 0,
				offsetY : 0,
				baseElWidth : 0,
				relativePos : 0,
				position: null,
				minSwipe : null,
				maxSwipe: null,
				sliding : null,
				dargging: null,
				targetElement : null
			}

			base.isCssFinish = true;

			function getTouches(event){
				if(event.touches){
					return {
						x : event.touches[0].pageX,
						y : event.touches[0].pageY
					}
				} else {
					if(event.pageX !== undefined){
						return {
							x : event.pageX,
							y : event.pageY
						}
					} else {
						return {
							x : event.clientX,
							y : event.clientY
						}
					}
				}
			}

			function swapEvents(type){
				if(type === "on"){
					$(document).on(base.ev_types["move"], dragMove);
					$(document).on(base.ev_types["end"], dragEnd);
				} else if(type === "off"){
					$(document).off(base.ev_types["move"]);
					$(document).off(base.ev_types["end"]);
				}
			}
			function dragStart(event) {
				var event = event.originalEvent || event || window.event;

				if(base.isCssFinish === false){
					return false;
				}
				if(base.isCss3Finish === false){
					return false;
				}

				if(base.options.autoPlay !== false){
					clearInterval(base.autoPlaySpeed);
				}

				if(base.isTouch !== true && !base.owlWrapper.hasClass("grabbing")){
					base.owlWrapper.addClass("grabbing")
				}

				base.newPosX = 0;
				base.newRelativeX = 0;

				$(this).css(base.removeTransition());

				var position = $(this).position();
				locals.relativePos = position.left;
				
				locals.offsetX = getTouches(event).x - position.left;
				locals.offsetY = getTouches(event).y - position.top;

				swapEvents("on");

				locals.sliding = false;
				locals.targetElement = event.target || event.srcElement;
			}

			function dragMove(event){
				var event = event.originalEvent || event || window.event;

				base.newPosX = getTouches(event).x- locals.offsetX;
				base.newPosY = getTouches(event).y - locals.offsetY;
				base.newRelativeX = base.newPosX - locals.relativePos;	

				if (typeof base.options.startDragging === "function" && locals.dragging !== true && base.newPosX !== 0) {
					locals.dragging = true;
					base.options.startDragging.apply(this);
				}			

				if(base.newRelativeX > 8 || base.newRelativeX < -8 && base.isTouch === true){
					event.preventDefault ? event.preventDefault() : event.returnValue = false;
					locals.sliding = true;
				}

				if((base.newPosY > 10 || base.newPosY < -10) && locals.sliding === false){
					$(document).off("touchmove.owl");
				}

				var minSwipe = function(){
					return  base.newRelativeX / 5;
				}
				var maxSwipe = function(){
					return  base.maximumPixels + base.newRelativeX / 5;
				}

				base.newPosX = Math.max(Math.min( base.newPosX, minSwipe() ), maxSwipe() );
				if(base.support3d === true){
					base.transition3d(base.newPosX);
				} else {
					base.css2move(base.newPosX);
				}
			}

			function dragEnd(event){
				var event = event.originalEvent || event || window.event;
				event.target = event.target || event.srcElement;

				locals.dragging = false;

				if(base.isTouch !== true){
					base.owlWrapper.removeClass("grabbing");
				}

				if(base.newPosX !== 0){
					var newPosition = base.getNewPosition();
					base.goTo(newPosition);
					if(locals.targetElement === event.target && base.isTouch !== true){
						$(event.target).on("click.disable", function(ev){
							ev.stopImmediatePropagation()
							ev.stopPropagation();
							ev.preventDefault();
							$(event.target).off("click.disable");
						});
					var handlers = $._data(event.target, "events")["click"];
					var owlStopEvent = handlers.pop();
					handlers.splice(0, 0, owlStopEvent);
					}
				}
				swapEvents("off");
			}
			base.$elem.on(base.ev_types["start"], ".owl-wrapper", dragStart); 
		},

		clearEvents : function(){
			var base = this;
			base.$elem.off(".owl");
			$(document).off(".owl");
		},

		getNewPosition : function(){
			var base = this,
				newPosition;

			var newPosition = base.improveClosest();

			if(newPosition>base.maximumSlide){
				base.currentSlide = base.maximumSlide;
				newPosition  = base.maximumSlide;
			} else if( base.newPosX >=0 ){
				newPosition = 0;
				base.currentSlide = 0;
			}
			return newPosition;
		},

		improveClosest : function(){
			var base = this;
			var array = base.positionsInArray;
			var goal = base.newPosX;
			var closest = null;
			$.each(array, function(i,v){
				if( goal - (base.itemWidth/20) > array[i+1] && goal - (base.itemWidth/20)< v && base.moveDirection() === "left") {
					closest = v;
					base.currentSlide = i;
				} 
				else if (goal + (base.itemWidth/20) < v && goal + (base.itemWidth/20) > array[i+1] && base.moveDirection() === "right"){
					closest = array[i+1];
					base.currentSlide = i+1;
				}
			});
			return base.currentSlide;
		},

		moveDirection : function(){
			var base = this,
				direction;
			if(base.newRelativeX < 0 ){
				direction = "right"
				base.playDirection = "next"
			} else {
				direction = "left"
				base.playDirection = "prev"
			}
			return direction
		},

		customEvents : function(){
			var base = this;
			base.$elem.on("owl.next",function(){
				base.next();
			});
			base.$elem.on("owl.prev",function(){
				base.prev();
			});
			base.$elem.on("owl.play",function(event,speed){
				base.options.autoPlay = speed;
				base.play();
				base.hoverStatus = "play";
			});
			base.$elem.on("owl.stop",function(){
				base.stop();
				base.hoverStatus = "stop";
			});
		},
		
		stopOnHover : function(){
			var base = this;
			if(base.options.stopOnHover === true && base.isTouch !== true && base.options.autoPlay !== false){
				base.$elem.on("mouseover", function(){
					base.stop();
				});
				base.$elem.on("mouseout", function(){
					if(base.hoverStatus !== "stop"){
						base.play();
					}
				});
			}
		},

		lazyLoad : function(){
			var base = this;

			if(base.options.lazyLoad === false){
				return false;
			}

			for(var i=0; i<base.itemsAmount; i++){
				var item = $(base.owlItems[i]),
					itemNumber = item.data("owl-item"),
					lazyImg = item.find(".lazyOwl"),
					follow;

				if(item.data("owl-loaded") === undefined){
					lazyImg.hide();
					item.addClass("loading").data("owl-loaded","checked");
				} else if(item.data("owl-loaded") === "loaded"){
					continue;
				}

				if(base.options.lazyFollow === true){
					follow = itemNumber >= base.currentSlide;
				}else {
					follow = true;
				}

				if(follow && itemNumber < base.currentSlide + base.options.items){
					item.data("owl-loaded", "loaded");

					var link = lazyImg.data("src");
					if(link){
						lazyImg[0].src = link;
						lazyImg.removeAttr("data-src");
					}
					lazyImg.fadeIn(200);
					item.removeClass("loading");
				}
			}
		},

		autoHeight : function(){
			var base = this;
			var $currentimg = $(base.owlItems[base.currentSlide]).find('img');

			if($currentimg.get(0) !== undefined ){
				var iterations = 0;
				checkImage();
			} else {
				addHeight();
			}
			function checkImage(){
				iterations += 1;
				if ($currentimg.get(0).complete) {
					addHeight();
				} else if(iterations <= 50){ //if image loads in less than 10 seconds 
					setTimeout(checkImage,200);
				} else {
					base.wrapperOuter.css("height", ""); //Else remove height attribute
				}
			}
			function addHeight(){
				var $currentSlide = $(base.owlItems[base.currentSlide]).height();
				base.wrapperOuter.css("height",$currentSlide+"px");
				if(!base.wrapperOuter.hasClass("autoHeight")){
					setTimeout(function(){
						base.wrapperOuter.addClass("autoHeight");
					},0);
				}
			}
		},

		addClassActive : function(){
			var base = this;
			$(base.owlItems).removeClass('active');
			for(var i=base.currentSlide; i<base.currentSlide + base.options.items; i++){
				$(base.owlItems[i]).addClass('active');
			}
		}
	};


	$.fn.owlCarousel = function( options ){
		return this.each(function() {
			var carousel = Object.create( Carousel );
			carousel.init( options, this );
			$.data( this, "owlCarousel", carousel );
		});
	};

	$.fn.owlCarousel.options = {

		items : 5,
		itemsDesktop : [1199,4],
		itemsDesktopSmall : [979,3],
		itemsTablet: [768,2],
		itemsMobile : [479,1],
		singleItem:false,

		slideSpeed : 200,
		paginationSpeed : 800,

		autoPlay : false,
		stopOnHover : false,
		goToFirst : true,
		goToFirstSpeed : 1000,

		navigation : false,
		navigationText : ["prev","next"],
		goToFirstNav : true,
		scrollPerPage : false,

		pagination : true,
		paginationNumbers: false,

		responsive: true,
		responsiveRefreshRate : 200,

		baseClass : "owl-carousel",
		theme : "owl-theme",

		lazyLoad : false,
		lazyFollow : true,

		autoHeight : false,

		jsonPath : false,
		jsonSuccess : false,

		mouseDrag : true,
		touchDrag : true,

		beforeInit : false,
		afterInit : false,
		beforeMove: false,
		afterMove: false,
		afterAction : false,
		startDragging : false,

		addClassActive : false
	};
})( jQuery, window, document );

/*

Tooltipster 2.1.4 | 6/1/13
A rockin' custom tooltip jQuery plugin

Developed by: Caleb Jacob - calebjacob.com
Copyright (C) 2013 Caleb Jacob

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

*/

;(function ($, window, document, undefined) {

	var pluginName = "tooltipster",
		defaults = {
			animation: 'fade',
			arrow: true,
			arrowColor: '',
			content: '',
			delay: 200,
			fixedWidth: 0,
			maxWidth: 0,
			functionBefore: function(origin, continueTooltip) {
				continueTooltip();
			},
			functionReady: function(origin, tooltip) {},
			functionAfter: function(origin) {},
			icon: '(?)',
			iconDesktop: false,
			iconTouch: false,
			iconTheme: '.tooltipster-icon',
			interactive: false,
			interactiveTolerance: 350,
			offsetX: 0,
			offsetY: 0,
			onlyOne: true,
			position: 'top',
			speed: 350,
			timer: 0,
			theme: '.tooltipster-default',
			touchDevices: true,
			trigger: 'hover',
			updateAnimation: true
		};
	
	function Plugin(element, options) {
		this.element = element;
		
		this.options = $.extend( {}, defaults, options );
		
		this._defaults = defaults;
		this._name = pluginName;
		
		this.init();
	}
	
	// we'll use this to detect for mobile devices
	function is_touch_device() {
		return !!('ontouchstart' in window);
  	}
  	
  	// detecting support for CSS transitions
  	function supportsTransitions() {
	    var b = document.body || document.documentElement;
	    var s = b.style;
	    var p = 'transition';
	    if(typeof s[p] == 'string') {return true; }
	
	    v = ['Moz', 'Webkit', 'Khtml', 'O', 'ms'],
	    p = p.charAt(0).toUpperCase() + p.substr(1);
	    for(var i=0; i<v.length; i++) {
	      if(typeof s[v[i] + p] == 'string') { return true; }
	    }
	    return false;
    }
    var transitionSupport = true;
    if (!supportsTransitions()) {
	    transitionSupport = false;
    }
    
    // detect if this device is mouse driven over purely touch
    var touchDevice = is_touch_device();
    
    // on mousemove, double confirm that this is a desktop - not a touch device
  	$(window).on('mousemove.tooltipster', function() {
	  	touchDevice = false;	  	
	  	$(window).off('mousemove.tooltipster');
  	});
  	
  	
  	
    	
	Plugin.prototype = {
		
		init: function() {		
			var $this = $(this.element);
			var object = this;
			var run = true;
			
			// if this is a touch device and touch devices are disabled, disable the plugin
			if ((object.options.touchDevices == false) && (touchDevice)) {
				run = false;
			}
			
			// if IE7 or lower, disable the plugin
			if (document.all && !document.querySelector) {
				run = false;
    		}
    					
			if (run == true) {
				
				// detect if we're changing the tooltip origin to an icon
				if ((this.options.iconDesktop == true) && (!touchDevice) || ((this.options.iconTouch == true) && (touchDevice))) {
					var transferContent = $this.attr('title');					
					$this.removeAttr('title');
					var theme = object.options.iconTheme;
					var icon = $('<span class="'+ theme.replace('.', '') +'" title="'+ transferContent +'">'+ this.options.icon +'</span>');
					icon.insertAfter($this);
					$this.data('tooltipsterIcon', icon);
					$this = icon;
				}
			
				// first, strip the title off of the element and set it as a data attribute to prevent the default tooltips from popping up
				var tooltipsterContent = $.trim(object.options.content).length > 0 ? object.options.content : $this.attr('title');
				$this.data('tooltipsterContent', tooltipsterContent);
				$this.removeAttr('title');
				
				// if this is a touch device, add some touch events to launch the tooltip
				if ((this.options.touchDevices == true) && (touchDevice) && ((this.options.trigger == 'click') || (this.options.trigger == 'hover'))) {
					$this.bind('touchstart', function(element, options) {
						object.showTooltip();
					});
				}
				
				// if this is a desktop, deal with adding regular mouse events
				else {
				
					// if hover events are set to show and hide the tooltip, attach those events respectively
					if (this.options.trigger == 'hover') {
						$this.on('mouseenter.tooltipster', function() {
							object.showTooltip();
						});
						
						// if this is an interactive tooltip, delay getting rid of the tooltip right away so you have a chance to hover on the tooltip
						if (this.options.interactive == true) {
							$this.on('mouseleave.tooltipster', function() {
								var tooltipster = $this.data('tooltipster');
								var keepAlive = false;
								
								if ((tooltipster !== undefined) && (tooltipster !== '')) {
									tooltipster.mouseenter(function() {
										keepAlive = true;
									});
									tooltipster.mouseleave(function() {
										keepAlive = false;
									});
									
									var tolerance = setTimeout(function() {
										if (keepAlive == true) {
											tooltipster.mouseleave(function() {
												object.hideTooltip();
											});
										}
										else {
											object.hideTooltip();
										}
									}, object.options.interactiveTolerance);
								}
								else {
									object.hideTooltip();
								}
							});
						}
						
						// if this is a dumb tooltip, just get rid of it on mouseleave
						else {
							$this.on('mouseleave.tooltipster', function() {
								object.hideTooltip();
							});
						}
					}
					
					// if click events are set to show and hide the tooltip, attach those events respectively
					if (this.options.trigger == 'click') {
						$this.on('click.tooltipster', function() {
							if (($this.data('tooltipster') == '') || ($this.data('tooltipster') == undefined)) {
								object.showTooltip();
							}
							else {
								object.hideTooltip();
							}
						});
					}
				}
			}
		},
		
		showTooltip: function(options) {			
			var $this = $(this.element);
			var object = this;
						
			// detect if we're actually dealing with an icon or the origin itself
			if ($this.data('tooltipsterIcon') !== undefined) {
				$this = $this.data('tooltipsterIcon');
			}
			
			// continue if this tooltip is enabled
			if (!$this.hasClass('tooltipster-disable')) {
			
				// if we only want one tooltip open at a time, close all tooltips currently open
				if (($('.tooltipster-base').not('.tooltipster-dying').length > 0) && (object.options.onlyOne == true)) {
					$('.tooltipster-base').not('.tooltipster-dying').not($this.data('tooltipster')).each(function() {
						$(this).addClass('tooltipster-kill');
						var origin = $(this).data('origin');
						origin.data('plugin_tooltipster').hideTooltip();
					});
				}
						
				// delay the showing of the tooltip according to the delay time
				$this.clearQueue().delay(object.options.delay).queue(function() {
				
					// call our custom function before continuing
					object.options.functionBefore($this, function() {
						
						// if this origin already has its tooltip open, keep it open and do nothing else
						if (($this.data('tooltipster') !== undefined) && ($this.data('tooltipster') !== '')) {
							var tooltipster = $this.data('tooltipster');
							
							if (!tooltipster.hasClass('tooltipster-kill')) {
	
								var animation = 'tooltipster-'+ object.options.animation;
								
								tooltipster.removeClass('tooltipster-dying');
								
								if (transitionSupport == true) {
									tooltipster.clearQueue().addClass(animation +'-show');
								}
								
								// if we have a timer set, we need to reset it
								if (object.options.timer > 0) {
									var timer = tooltipster.data('tooltipsterTimer');
									clearTimeout(timer);
														
									timer = setTimeout(function() {
										tooltipster.data('tooltipsterTimer', undefined);
										object.hideTooltip();
									}, object.options.timer);
									
									tooltipster.data('tooltipsterTimer', timer);
								}
								
								// if this is a touch device, hide the tooltip on body touch
								if ((object.options.touchDevices == true) && (touchDevice)) {
									$('body').bind('touchstart', function(event) {
										if (object.options.interactive == true) {
											var touchTarget = $(event.target);
											var closeTooltip = true;
											
											touchTarget.parents().each(function() {
												if ($(this).hasClass('tooltipster-base')) {
													closeTooltip = false;
												}
											});
											
											if (closeTooltip == true) {
												object.hideTooltip();
												$('body').unbind('touchstart');
											}
										}
										else {
											object.hideTooltip();
											$('body').unbind('touchstart');
										}
									});
								}
							}
						}
						
						// if the tooltip isn't already open, open that sucker up!
						else {
							// disable horizontal scrollbar to keep overflowing tooltips from jacking with it
							$('body').css('overflow-x', 'hidden');
							
							// get the content for the tooltip
							var content = $this.data('tooltipsterContent');
							
							// get some other settings related to building the tooltip
							var theme = object.options.theme;
							var themeClass = theme.replace('.', '');
							var animation = 'tooltipster-'+object.options.animation;
							var animationSpeed = '-webkit-transition-duration: '+ object.options.speed +'ms; -webkit-animation-duration: '+ object.options.speed +'ms; -moz-transition-duration: '+ object.options.speed +'ms; -moz-animation-duration: '+ object.options.speed +'ms; -o-transition-duration: '+ object.options.speed +'ms; -o-animation-duration: '+ object.options.speed +'ms; -ms-transition-duration: '+ object.options.speed +'ms; -ms-animation-duration: '+ object.options.speed +'ms; transition-duration: '+ object.options.speed +'ms; animation-duration: '+ object.options.speed +'ms;';
							var fixedWidth = object.options.fixedWidth > 0 ? 'width:'+ Math.round(object.options.fixedWidth) +'px;' : '';
							var maxWidth = object.options.maxWidth > 0 ? 'max-width:'+ Math.round(object.options.maxWidth) +'px;' : '';
							var pointerEvents = object.options.interactive == true ? 'pointer-events: auto;' : '';
												
							// build the base of our tooltip
							var tooltipster = $('<div class="tooltipster-base '+ themeClass +' '+ animation +'" style="'+ fixedWidth +' '+ maxWidth +' '+ pointerEvents +' '+ animationSpeed +'"></div>');
							var tooltipsterHTML = $('<div class="tooltipster-content"></div>');
							tooltipsterHTML.html(content);
							tooltipster.append(tooltipsterHTML);
							
							
							tooltipster.appendTo('body');
							
							// attach the tooltip to its origin
							$this.data('tooltipster', tooltipster);
							tooltipster.data('origin', $this);
							
							// do all the crazy calculations and positioning
							object.positionTooltip();
							
							// call our custom callback since the content of the tooltip is now part of the DOM
							object.options.functionReady($this, tooltipster);
							
							// animate in the tooltip
							if (transitionSupport == true) {
								tooltipster.addClass(animation + '-show');
							}
							else {
								tooltipster.css('display', 'none').removeClass(animation).fadeIn(object.options.speed);
							}
							
							// check to see if our tooltip content changes or its origin is removed while the tooltip is alive
							var currentTooltipContent = content;
							var contentUpdateChecker = setInterval(function() {		
								var newTooltipContent = $this.data('tooltipsterContent');
								
								// if this tooltip's origin is removed, remove the tooltip
								if ($('body').find($this).length == 0) {
									tooltipster.addClass('tooltipster-dying');
									object.hideTooltip();
								}
								
								// if the content changed for the tooltip, update it											
								else if ((currentTooltipContent !== newTooltipContent) && (newTooltipContent !== '')) {
									currentTooltipContent = newTooltipContent;
									
									// set the new content in the tooltip
									tooltipster.find('.tooltipster-content').html(newTooltipContent);
									
									// if we want to play a little animation showing the content changed
									if (object.options.updateAnimation == true) {
										if (supportsTransitions()) {
											tooltipster.css({
												'width': '',
												'-webkit-transition': 'all ' + object.options.speed + 'ms, width 0ms, height 0ms, left 0ms, top 0ms',
												'-moz-transition': 'all ' + object.options.speed + 'ms, width 0ms, height 0ms, left 0ms, top 0ms',
												'-o-transition': 'all ' + object.options.speed + 'ms, width 0ms, height 0ms, left 0ms, top 0ms',
												'-ms-transition': 'all ' + object.options.speed + 'ms, width 0ms, height 0ms, left 0ms, top 0ms',
												'transition': 'all ' + object.options.speed + 'ms, width 0ms, height 0ms, left 0ms, top 0ms'
											}).addClass('tooltipster-content-changing');
											
											// reset the CSS transitions and finish the change animation
											setTimeout(function() {
												tooltipster.removeClass('tooltipster-content-changing');
												// after the changing animation has completed, reset the CSS transitions
												setTimeout(function() {
													tooltipster.css({
														'-webkit-transition': object.options.speed + 'ms',
														'-moz-transition': object.options.speed + 'ms',
														'-o-transition': object.options.speed + 'ms',
														'-ms-transition': object.options.speed + 'ms',
														'transition': object.options.speed + 'ms'
													});
												}, object.options.speed);
											}, object.options.speed);
										}
										else {
											tooltipster.fadeTo(object.options.speed, 0.5, function() {
												tooltipster.fadeTo(object.options.speed, 1);
											});
										}
									}
									
									// reposition and resize the tooltip
									object.positionTooltip();
								}
								
								// if the tooltip is closed or origin is removed, clear this interval
								if (($('body').find(tooltipster).length == 0) || ($('body').find($this).length == 0)) {
									clearInterval(contentUpdateChecker);
								}
							}, 200);
							
							// if we have a timer set, let the countdown begin!
							if (object.options.timer > 0) {							
								var timer = setTimeout(function() {
									tooltipster.data('tooltipsterTimer', undefined);
									object.hideTooltip();
								}, object.options.timer + object.options.speed);
								
								tooltipster.data('tooltipsterTimer', timer);
							}
							
							// if this is a touch device, hide the tooltip on body touch
							if ((object.options.touchDevices == true) && (touchDevice)) {
								$('body').bind('touchstart', function(event) {
									if (object.options.interactive == true) {
										
										var touchTarget = $(event.target);
										var closeTooltip = true;
																			
										touchTarget.parents().each(function() {
											if ($(this).hasClass('tooltipster-base')) {
												closeTooltip = false;
											}
										});
										
										if (closeTooltip == true) {
											object.hideTooltip();
											$('body').unbind('touchstart');
										}
									}
									else {
										object.hideTooltip();
										$('body').unbind('touchstart');
									}
								});
							}
							
							// if this is an interactive tooltip activated by a click, close the tooltip when you hover off the tooltip
							tooltipster.mouseleave(function() {
								object.hideTooltip();
							});
						}
					});
					
					$this.dequeue();
				});
			}
		},
		
		hideTooltip: function(options) {
						
			var $this = $(this.element);
			var object = this;
			
			// detect if we're actually dealing with an icon or the origin itself
			if ($this.data('tooltipsterIcon') !== undefined) {
				$this = $this.data('tooltipsterIcon');
			}
			
			var tooltipster = $this.data('tooltipster');
			
			// if the origin has been removed, find all tooltips assigned to death
			if (tooltipster == undefined) {
				tooltipster = $('.tooltipster-dying');
			}
			
			// clear any possible queues handling delays and such
			$this.clearQueue();
			
			if ((tooltipster !== undefined) && (tooltipster !== '')) {
				
				// detect if we need to clear a timer
				var timer = tooltipster.data('tooltipsterTimer');
				if (timer !== undefined) {
					clearTimeout(timer);
				}

				var animation = 'tooltipster-'+ object.options.animation;
				
				if (transitionSupport == true) {
					tooltipster.clearQueue().removeClass(animation +'-show').addClass('tooltipster-dying').delay(object.options.speed).queue(function() {
						tooltipster.remove();
						$this.data('tooltipster', '');
						$('body').css('verflow-x', '');
						
						// finally, call our custom callback function
						object.options.functionAfter($this);
					});
				}
				else {
					tooltipster.clearQueue().addClass('tooltipster-dying').fadeOut(object.options.speed, function() {
						tooltipster.remove();
						$this.data('tooltipster', '');
						$('body').css('verflow-x', '');
						
						// finally, call our custom callback function
						object.options.functionAfter($this);
					});
				}
			}
		},
		
		positionTooltip: function(options) {
					
			var $this = $(this.element);
			var object = this;
									
			// detect if we're actually dealing with an icon or the origin itself
			if ($this.data('tooltipsterIcon') !== undefined) {
				$this = $this.data('tooltipsterIcon');
			}
			
			if (($this.data('tooltipster') !== undefined) && ($this.data('tooltipster') !== '')) {
						
				// find tooltipster and reset its width
				var tooltipster = $this.data('tooltipster');
				tooltipster.css('width', '');
				
				// find variables to determine placement
				var windowWidth = $(window).width();
				var containerWidth = $this.outerWidth(false);
				var containerHeight = $this.outerHeight(false);
				var tooltipWidth = tooltipster.outerWidth(false);
				var tooltipInnerWidth = tooltipster.innerWidth() + 1; // this +1 stops FireFox from sometimes forcing an additional text line
				var tooltipHeight = tooltipster.outerHeight(false);
				var offset = $this.offset();
				var offsetTop = offset.top;
				var offsetLeft = offset.left;
				var resetPosition = undefined;
				
				// if this is an <area> tag inside a <map>, all hell breaks loose. Recaclulate all the measurements based on coordinates
				if ($this.is('area')) {
					var areaShape = $this.attr('shape');
					var mapName = $this.parent().attr('name');
					var map = $('img[usemap="#'+ mapName +'"]');
					var mapOffsetLeft = map.offset().left;
					var mapOffsetTop = map.offset().top;
					var areaMeasurements = $this.attr('coords') !== undefined ? $this.attr('coords').split(',') : undefined;
					
					if (areaShape == 'circle') {
						var areaLeft = parseInt(areaMeasurements[0]);
						var areaTop = parseInt(areaMeasurements[1]);
						var areaWidth = parseInt(areaMeasurements[2]);
						containerHeight = areaWidth * 2;
						containerWidth = areaWidth * 2;
						offsetTop = mapOffsetTop + areaTop - areaWidth;
						offsetLeft = mapOffsetLeft + areaLeft - areaWidth;
					}
					else if (areaShape == 'rect') {
						var areaLeft = parseInt(areaMeasurements[0]);
						var areaTop = parseInt(areaMeasurements[1]);
						var areaRight = parseInt(areaMeasurements[2]);
						var areaBottom = parseInt(areaMeasurements[3]);
						containerHeight = areaBottom - areaTop;
						containerWidth = areaRight - areaLeft;
						offsetTop = mapOffsetTop + areaTop;
						offsetLeft = mapOffsetLeft + areaLeft;
					}
					else if (areaShape == 'poly') {
						var areaXs = [];
						var areaYs = [];
						var areaSmallestX = 0,
							areaSmallestY = 0,
							areaGreatestX = 0,
							areaGreatestY = 0;
						var arrayAlternate = 'even';
						
						for (i = 0; i < areaMeasurements.length; i++) {
							var areaNumber = parseInt(areaMeasurements[i]);
							
							if (arrayAlternate == 'even') {
								if (areaNumber > areaGreatestX) {
									areaGreatestX = areaNumber;
									if (i == 0) {
										areaSmallestX = areaGreatestX;
									}
								}
								
								if (areaNumber < areaSmallestX) {
									areaSmallestX = areaNumber;
								}
								
								arrayAlternate = 'odd';
							}
							else {
								if (areaNumber > areaGreatestY) {
									areaGreatestY = areaNumber;
									if (i == 1) {
										areaSmallestY = areaGreatestY;
									}
								}
								
								if (areaNumber < areaSmallestY) {
									areaSmallestY = areaNumber;
								}
								
								arrayAlternate = 'even';
							}
						}
					
						containerHeight = areaGreatestY - areaSmallestY;
						containerWidth = areaGreatestX - areaSmallestX;
						offsetTop = mapOffsetTop + areaSmallestY;
						offsetLeft = mapOffsetLeft + areaSmallestX;
					}
					else {
						containerHeight = map.outerHeight(false);
						containerWidth = map.outerWidth(false);
						offsetTop = mapOffsetTop;
						offsetLeft = mapOffsetLeft;
					}
				}
																
				// hardcoding the width and removing the padding fixed an issue with the tooltip width collapsing when the window size is small
				if(object.options.fixedWidth == 0) {
					tooltipster.css({
						'width': Math.round(tooltipInnerWidth) + 'px',
						'padding-left': '0px',
						'padding-right': '0px'
					});
				}
				
				// our function and global vars for positioning our tooltip
				var myLeft = 0,
					myTop = 0;
				var offsetY = parseInt(object.options.offsetY);
				var offsetX = parseInt(object.options.offsetX);
				var arrowConstruct = '';
				
				// A function to detect if the tooltip is going off the screen horizontally. If so, reposition the crap out of it!
				function dontGoOffScreenX() {
				
					var windowLeft = $(window).scrollLeft();
					
					// If the tooltip goes off the left side of the screen, line it up with the left side of the window
					if((myLeft - windowLeft) < 0) {
						var arrowReposition = myLeft - windowLeft;
						myLeft = windowLeft;
																								
						tooltipster.data('arrow-reposition', arrowReposition);
					}
					
					// If the tooltip goes off the right of the screen, line it up with the right side of the window
					if (((myLeft + tooltipWidth) - windowLeft) > windowWidth) {
						var arrowReposition = myLeft - ((windowWidth + windowLeft) - tooltipWidth);
						myLeft = (windowWidth + windowLeft) - tooltipWidth;
																												
						tooltipster.data('arrow-reposition', arrowReposition);
					}
				}
				
				// A function to detect if the tooltip is going off the screen vertically. If so, switch to the opposite!
				function dontGoOffScreenY(switchTo, resetTo) {
					// if it goes off the top off the page
					if(((offsetTop - $(window).scrollTop() - tooltipHeight - offsetY - 12) < 0) && (resetTo.indexOf('top') > -1)) {
						object.options.position = switchTo;
						resetPosition = resetTo;
					}
					
					// if it goes off the bottom of the page
					if (((offsetTop + containerHeight + tooltipHeight + 12 + offsetY) > ($(window).scrollTop() + $(window).height())) && (resetTo.indexOf('bottom') > -1)) {
						object.options.position = switchTo;
						resetPosition = resetTo;
						myTop = (offsetTop - tooltipHeight) - offsetY - 12;
					}
				}
							
				if(object.options.position == 'top') {
					var leftDifference = (offsetLeft + tooltipWidth) - (offsetLeft + containerWidth);
					myLeft =  (offsetLeft + offsetX) - (leftDifference / 2);
					myTop = (offsetTop - tooltipHeight) - offsetY - 12;
					dontGoOffScreenX();
					dontGoOffScreenY('bottom', 'top');
				}
				
				if(object.options.position == 'top-left') {
					myLeft = offsetLeft + offsetX;
					myTop = (offsetTop - tooltipHeight) - offsetY - 12;
					dontGoOffScreenX();
					dontGoOffScreenY('bottom-left', 'top-left');
				}
				
				if(object.options.position == 'top-right') {
					myLeft = (offsetLeft + containerWidth + offsetX) - tooltipWidth;
					myTop = (offsetTop - tooltipHeight) - offsetY - 12;
					dontGoOffScreenX();
					dontGoOffScreenY('bottom-right', 'top-right');
				}
				
				if(object.options.position == 'bottom') {
					var leftDifference = (offsetLeft + tooltipWidth) - (offsetLeft + containerWidth);
					myLeft =  offsetLeft - (leftDifference / 2) + offsetX;
					myTop = (offsetTop + containerHeight) + offsetY + 12;
					dontGoOffScreenX();
					dontGoOffScreenY('top', 'bottom');
				}
				
				if(object.options.position == 'bottom-left') {
					myLeft = offsetLeft + offsetX;
					myTop = (offsetTop + containerHeight) + offsetY + 12;
					dontGoOffScreenX();
					dontGoOffScreenY('top-left', 'bottom-left');
				}
				
				if(object.options.position == 'bottom-right') {
					myLeft = (offsetLeft + containerWidth + offsetX) - tooltipWidth;
					myTop = (offsetTop + containerHeight) + offsetY + 12;
					dontGoOffScreenX();
					dontGoOffScreenY('top-right', 'bottom-right');
				}
				
				if(object.options.position == 'left') {
					myLeft = offsetLeft - offsetX - tooltipWidth - 12;
					myLeftMirror = offsetLeft + offsetX + containerWidth + 12;
					var topDifference = (offsetTop + tooltipHeight) - (offsetTop + $this.outerHeight(false));
					myTop =  offsetTop - (topDifference / 2) - offsetY;
												
					// If the tooltip goes off boths sides of the page
					if((myLeft < 0) && ((myLeftMirror + tooltipWidth) > windowWidth)) {
						var borderWidth = parseFloat(tooltipster.css('border-width')) * 2;
						var newWidth = (tooltipWidth + myLeft) - borderWidth;
						tooltipster.css('width', newWidth + 'px');
						
						tooltipHeight = tooltipster.outerHeight(false);
						myLeft = offsetLeft - offsetX - newWidth - 12 - borderWidth;
						topDifference = (offsetTop + tooltipHeight) - (offsetTop + $this.outerHeight(false));
						myTop =  offsetTop - (topDifference / 2) - offsetY;
					}
					
					// If it only goes off one side, flip it to the other side
					else if(myLeft < 0) {
						myLeft = offsetLeft + offsetX + containerWidth + 12;
						tooltipster.data('arrow-reposition', 'left');
					}
				}
				
				if(object.options.position == 'right') {
					myLeft = offsetLeft + offsetX + containerWidth + 12;
					myLeftMirror = offsetLeft - offsetX - tooltipWidth - 12;
					var topDifference = (offsetTop + tooltipHeight) - (offsetTop + $this.outerHeight(false));
					myTop =  offsetTop - (topDifference / 2) - offsetY;
					
					// If the tooltip goes off boths sides of the page
					if(((myLeft + tooltipWidth) > windowWidth) && (myLeftMirror < 0)) {
						var borderWidth = parseFloat(tooltipster.css('border-width')) * 2;
						var newWidth = (windowWidth - myLeft) - borderWidth;
						tooltipster.css('width', newWidth + 'px');
						
						tooltipHeight = tooltipster.outerHeight(false);
						topDifference = (offsetTop + tooltipHeight) - (offsetTop + $this.outerHeight(false));
						myTop =  offsetTop - (topDifference / 2) - offsetY;
	
					}
						
					// If it only goes off one side, flip it to the other side
					else if((myLeft + tooltipWidth) > windowWidth) {
						myLeft = offsetLeft - offsetX - tooltipWidth - 12;
						tooltipster.data('arrow-reposition', 'right');
					}
				}
				
				// if arrow is set true, style it and append it
				if (object.options.arrow == true) {
	
					var arrowClass = 'tooltipster-arrow-' + object.options.position;
					
					// set color of the arrow
					if(object.options.arrowColor.length < 1) {
						var arrowColor = tooltipster.css('background-color');
					}
					else {
						var arrowColor = object.options.arrowColor;
					}
					
					// if the tooltip was going off the page and had to re-adjust, we need to update the arrow's position
					var arrowReposition = tooltipster.data('arrow-reposition');
					if (!arrowReposition) {
						arrowReposition = '';
					}
					else if (arrowReposition == 'left') {
						arrowClass = 'tooltipster-arrow-right';
						arrowReposition = '';
					}
					else if (arrowReposition == 'right') {
						arrowClass = 'tooltipster-arrow-left';
						arrowReposition = '';
					}
					else {
						arrowReposition = 'left:'+ Math.round(arrowReposition) +'px;';
					}
										
					// building the logic to create the border around the arrow of the tooltip
					if ((object.options.position == 'top') || (object.options.position == 'top-left') || (object.options.position == 'top-right')) {
						var tooltipBorderWidth = parseFloat(tooltipster.css('border-bottom-width'));
						var tooltipBorderColor = tooltipster.css('border-bottom-color');
					}
					else if ((object.options.position == 'bottom') || (object.options.position == 'bottom-left') || (object.options.position == 'bottom-right')) {
						var tooltipBorderWidth = parseFloat(tooltipster.css('border-top-width'));
						var tooltipBorderColor = tooltipster.css('border-top-color');
					}
					else if (object.options.position == 'left') {
						var tooltipBorderWidth = parseFloat(tooltipster.css('border-right-width'));
						var tooltipBorderColor = tooltipster.css('border-right-color');
					}
					else if (object.options.position == 'right') {
						var tooltipBorderWidth = parseFloat(tooltipster.css('border-left-width'));
						var tooltipBorderColor = tooltipster.css('border-left-color');
					}
					else {
						var tooltipBorderWidth = parseFloat(tooltipster.css('border-bottom-width'));
						var tooltipBorderColor = tooltipster.css('border-bottom-color');
					}
					
					if (tooltipBorderWidth > 1) {
						tooltipBorderWidth++;
					}
					
					var arrowBorder = '';
					if (tooltipBorderWidth !== 0) {
						var arrowBorderSize = '';
						var arrowBorderColor = 'border-color: '+ tooltipBorderColor +';';
						if (arrowClass.indexOf('bottom') !== -1) {
							arrowBorderSize = 'margin-top: -'+ Math.round(tooltipBorderWidth) +'px;';
						}
						else if (arrowClass.indexOf('top') !== -1) {
							arrowBorderSize = 'margin-bottom: -'+ Math.round(tooltipBorderWidth) +'px;';
						}
						else if (arrowClass.indexOf('left') !== -1) {
							arrowBorderSize = 'margin-right: -'+ Math.round(tooltipBorderWidth) +'px;';
						}
						else if (arrowClass.indexOf('right') !== -1) {
							arrowBorderSize = 'margin-left: -'+ Math.round(tooltipBorderWidth) +'px;';
						}
						arrowBorder = '<span class="tooltipster-arrow-border" style="'+ arrowBorderSize +' '+ arrowBorderColor +';"></span>';
					}
					
					// if the arrow already exists, remove and replace it
					tooltipster.find('.tooltipster-arrow').remove();
					
					// build out the arrow and append it		
					arrowConstruct = '<div class="'+ arrowClass +' tooltipster-arrow" style="'+ arrowReposition +'">'+ arrowBorder +'<span style="border-color:'+ arrowColor +';"></span></div>';
					tooltipster.append(arrowConstruct);
				}
				
				// position the tooltip
				tooltipster.css({'top': Math.round(myTop) + 'px', 'left': Math.round(myLeft) + 'px'});
				
				// if we had to change the position of the tooltip so it wouldn't go off screen, reset it
				if (resetPosition !== undefined) {
					object.options.position = resetPosition;
				}
			}
		}
	};
		
	$.fn[pluginName] = function (options) {
		// better API name spacing by glebtv
		if (typeof options === 'string') {
			var $t = this;
			var newContent = arguments[1];
			
			// if we're calling a container to interact with API's of tooltips inside it - select all those tooltip origins first
			if ($t.data('plugin_tooltipster') == undefined) {
				var query = $t.find('*');
				$t = $();
				query.each(function() {
					if ($(this).data('plugin_tooltipster') !== undefined) {
						$t.push($(this));
					}
				});
			}
			
			$t.each(function() {
				switch (options.toLowerCase()) {
					case 'show':
						$(this).data('plugin_tooltipster').showTooltip();
						break;
	
					case 'hide':
						$(this).data('plugin_tooltipster').hideTooltip();
						break;
					
					case 'disable':
						$(this).addClass('tooltipster-disable');
						break;
					
					case 'enable':
						$(this).removeClass('tooltipster-disable');
						break;
	
					case 'destroy':
						$(this).data('plugin_tooltipster').hideTooltip();
						$(this).data('plugin_tooltipster', '').attr('title', $t.data('tooltipsterContent')).data('tooltipsterContent', '').data('plugin_tooltipster', '').off('mouseenter.tooltipster mouseleave.tooltipster click.tooltipster').unbind('touchstart');
						break;
	
					case 'update':						
						if ($(this).data('tooltipsterIcon') == undefined) {
							$(this).data('tooltipsterContent', newContent);
						}
						
						else {
							var $this = $(this).data('tooltipsterIcon');
							$this.data('tooltipsterContent', newContent);
						}
						
						break;
						
					case 'reposition':
						$(this).data('plugin_tooltipster').positionTooltip();
						break;
				}
			});
			
			return this;			
		}
		
		// attach a tooltipster object to each element if it doesn't already have one
		return this.each(function () {
			if (!$.data(this, "plugin_" + pluginName)) {
				$.data(this, "plugin_" + pluginName, new Plugin( this, options ));
			}
			
			var thisOptions = $(this).data('plugin_tooltipster').options;
				
			if ((thisOptions.iconDesktop == true) && (!touchDevice) || ((thisOptions.iconTouch == true) && (touchDevice))) {
				var transferObject = $(this).data('plugin_tooltipster');
				$(this).next().data('plugin_tooltipster', transferObject);
			}	
		});
	};
	
	// hide tooltips on orientation change
	if (touchDevice) {
		window.addEventListener("orientationchange", function() {
			if ($('.tooltipster-base').length > 0) {
				$('.tooltipster-base').each(function() {
					var origin = $(this).data('origin');
					origin.data('plugin_tooltipster').hideTooltip();
				});
			}
	  	}, false);
  	}
  	
  	// on window resize, reposition and open tooltips
  	$(window).on('resize.tooltipster', function() {
	  	var origin = $('.tooltipster-base').data('origin');
	  		  	
	  	if ((origin !== null) && (origin !== undefined)) {
	  		origin.tooltipster('reposition');
	  	}
  	});
  	

})( jQuery, window, document );

;(function($) {
	$.fn.zerovalidate = function(validateFunctions, options) {
		options = $.extend({
			errorClass: 'zero-validate-error',
			inputPassed: function($input) { $input.popover('destroy').removeClass(options.errorClass); },
			inputFailed: function(errorString, $input) {
					$input  // validation failed
						.popover({
							content: errorString,
							placement: $input.data('placement') // it's ok if this is undefined, it defaults to right (so far)
						})
						.popover('show')
						.one('click', function() {
							$input.popover('destroy');
						})
						.addClass(options.errorClass);
				},
			formPassed: $.noop,
			formFailed: function(e) { e.preventDefault(); }
		}, options);

		return this.each(function() {
			var $form = $(this),
				validSoFar,
				runThroughInputs = function($formInputs, goodFn, badFn) {
					$formInputs.each(function() {
						var
							$input = $(this),
							validateFn = validateFunctions[$input.data('validate')] || $.noop,							
							result = validateFn.call($input[0], ['checkbox', 'radio'].indexOf($input[0].type.toLowerCase()) > -1 ? $input[0].checked : $input.val(), $input, $form);

						if (typeof result === 'string') {
							badFn.call($input[0], result, $input, $form);
							validSoFar = false;
						} else {
							goodFn.call($input[0], $input, $form);
						}
					});
				};

			$form.submit(function(e) {
				validSoFar = true;
				runThroughInputs($form.find(':input'), options.inputPassed, options.inputFailed);
				if (!validSoFar) {
					return options.formFailed.call($form[0], e, $form);
				} else {
					return options.formPassed.call($form[0], e, $form);
				}
			});

			$form.on('input', ':input:not(:radio,:checkbox,select)', function() {
				runThroughInputs($form.find('.' + options.errorClass), options.inputPassed, $.noop);
			});
			$form.on('click', ':radio,:checkbox', function() {
				runThroughInputs($form.find('.' + options.errorClass), options.inputPassed, $.noop);
			});
			$form.on('change', 'select', function() {
				runThroughInputs($form.find('.' + options.errorClass), options.inputPassed, $.noop);
			});
		});
	};
})(jQuery);



$(function(){    
    // Click Menu to show up submenu
    $('.nav-dropdown').each(function(){
        var $self = $(this);
        var handle = $self.children('[data-toggle="dropdown"]');
        $(handle).click(function(){
            var submenu = $self.children('.nav-submenu');
            $(submenu).toggle();
            return false;
        });
    });
});


$(function(){

    
});
