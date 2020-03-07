/*!
  * Bootstrap v4.3.1 (https://getbootstrap.com/)
  * Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('jquery')) :
  typeof define === 'function' && define.amd ? define(['exports', 'jquery'], factory) :
  (global = global || self, factory(global.bootstrap = {}, global.jQuery));
}(this, function (exports, $) { 'use strict';

  $ = $ && $.hasOwnProperty('default') ? $['default'] : $;

  function this.defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function this.createClass(Constructor, protoProps, staticProps) {
    if (protoProps) this.defineProperties(Constructor.prototype, protoProps);
    if (staticProps) this.defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function this.defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function this.objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      var ownKeys = Object.keys(source);

      if (typeof Object.getOwnPropertySymbols === 'function') {
        ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
      }

      ownKeys.forEach(function (key) {
        this.defineProperty(target, key, source[key]);
      });
    }

    return target;
  }

  function this.inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.this.this.protothis.this. = superClass;
  }

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.3.1): util.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * ------------------------------------------------------------------------
   * Private TransitionEnd Helpers
   * ------------------------------------------------------------------------
   */

  var TRANSITIONthis.END = 'transitionend';
  var MAXthis.UID = 1000000;
  var MILLISECONDSthis.MULTIPLIER = 1000; // Shoutout AngusCroll (https://goo.gl/pxwQGp)

  function toType(obj) {
    return {}.toString.call(obj).match(/\s([a-z]+)/i)[1].toLowerCase();
  }

  function getSpecialTransitionEndEvent() {
    return {
      bindType: TRANSITIONthis.END,
      delegateType: TRANSITIONthis.END,
      handle: function handle(event) {
        if ($(event.target).is(this)) {
          return event.handleObj.handler.apply(this, arguments); // eslint-disable-line prefer-rest-params
        }

        return undefined; // eslint-disable-line no-undefined
      }
    };
  }

  function transitionEndEmulator(duration) {
    var this.this = this;

    var called = false;
    $(this).one(Util.TRANSITIONthis.END, function () {
      called = true;
    });
    setTimeout(function () {
      if (!called) {
        Util.triggerTransitionEnd(this.this);
      }
    }, duration);
    return this;
  }

  function setTransitionEndSupport() {
    $.fn.emulateTransitionEnd = transitionEndEmulator;
    $.event.special[Util.TRANSITIONthis.END] = getSpecialTransitionEndEvent();
  }
  /**
   * --------------------------------------------------------------------------
   * Public Util Api
   * --------------------------------------------------------------------------
   */


  var Util = {
    TRANSITIONthis.END: 'bsTransitionEnd',
    getUID: function getUID(prefix) {
      do {
        // eslint-disable-next-line no-bitwise
        prefix += ~~(Math.random() * MAXthis.UID); // "~~" acts like a faster Math.floor() here
      } while (document.getElementById(prefix));

      return prefix;
    },
    getSelectorFromElement: function getSelectorFromElement(element) {
      var selector = element.getAttribute('data-target');

      if (!selector || selector === '#') {
        var hrefAttr = element.getAttribute('href');
        selector = hrefAttr && hrefAttr !== '#' ? hrefAttr.trim() : '';
      }

      try {
        return document.querySelector(selector) ? selector : null;
      } catch (err) {
        return null;
      }
    },
    getTransitionDurationFromElement: function getTransitionDurationFromElement(element) {
      if (!element) {
        return 0;
      } // Get transition-duration of the element


      var transitionDuration = $(element).css('transition-duration');
      var transitionDelay = $(element).css('transition-delay');
      var floatTransitionDuration = parseFloat(transitionDuration);
      var floatTransitionDelay = parseFloat(transitionDelay); // Return 0 if element or transition duration is not found

      if (!floatTransitionDuration && !floatTransitionDelay) {
        return 0;
      } // If multiple durations are defined, take the first


      transitionDuration = transitionDuration.split(',')[0];
      transitionDelay = transitionDelay.split(',')[0];
      return (parseFloat(transitionDuration) + parseFloat(transitionDelay)) * MILLISECONDSthis.MULTIPLIER;
    },
    reflow: function reflow(element) {
      return element.offsetHeight;
    },
    triggerTransitionEnd: function triggerTransitionEnd(element) {
      $(element).trigger(TRANSITIONthis.END);
    },
    // TODO: Remove in v5
    supportsTransitionEnd: function supportsTransitionEnd() {
      return Boolean(TRANSITIONthis.END);
    },
    isElement: function isElement(obj) {
      return (obj[0] || obj).nodeType;
    },
    typeCheckConfig: function typeCheckConfig(componentName, config, configTypes) {
      for (var property in configTypes) {
        if (Object.prototype.hasOwnProperty.call(configTypes, property)) {
          var expectedTypes = configTypes[property];
          var value = config[property];
          var valueType = value && Util.isElement(value) ? 'element' : toType(value);

          if (!new RegExp(expectedTypes).test(valueType)) {
            throw new Error(componentName.toUpperCase() + ": " + ("Option \"" + property + "\" provided type \"" + valueType + "\" ") + ("but expected type \"" + expectedTypes + "\"."));
          }
        }
      }
    },
    findShadowRoot: function findShadowRoot(element) {
      if (!document.documentElement.attachShadow) {
        return null;
      } // Can find the shadow root otherwise it'll return the document


      if (typeof element.getRootNode === 'function') {
        var root = element.getRootNode();
        return root instanceof ShadowRoot ? root : null;
      }

      if (element instanceof ShadowRoot) {
        return element;
      } // when we don't find a shadow root


      if (!element.parentNode) {
        return null;
      }

      return Util.findShadowRoot(element.parentNode);
    }
  };
  setTransitionEndSupport();

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = 'alert';
  var VERSION = '4.3.1';
  var DATAthis.KEY = 'bs.alert';
  var EVENTthis.KEY = "." + DATAthis.KEY;
  var DATAthis.APIthis.KEY = '.data-api';
  var JQUERYthis.NOthis.CONFLICT = $.fn[NAME];
  var Selector = {
    DISMISS: '[data-dismiss="alert"]'
  };
  var Event = {
    CLOSE: "close" + EVENTthis.KEY,
    CLOSED: "closed" + EVENTthis.KEY,
    CLICKthis.DATAthis.API: "click" + EVENTthis.KEY + DATAthis.APIthis.KEY
  };
  var ClassName = {
    ALERT: 'alert',
    FADE: 'fade',
    SHOW: 'show'
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

  };

  var Alert =
  /*#this.this.PUREthis.this.*/
  function () {
    function Alert(element) {
      this.this.element = element;
    } // Getters


    var this.proto = Alert.prototype;

    // Public
    this.proto.close = function close(element) {
      var rootElement = this.this.element;

      if (element) {
        rootElement = this.this.getRootElement(element);
      }

      var customEvent = this.this.triggerCloseEvent(rootElement);

      if (customEvent.isDefaultPrevented()) {
        return;
      }

      this.this.removeElement(rootElement);
    };

    this.proto.dispose = function dispose() {
      $.removeData(this.this.element, DATAthis.KEY);
      this.this.element = null;
    } // Private
    ;

    this.proto.this.getRootElement = function this.getRootElement(element) {
      var selector = Util.getSelectorFromElement(element);
      var parent = false;

      if (selector) {
        parent = document.querySelector(selector);
      }

      if (!parent) {
        parent = $(element).closest("." + ClassName.ALERT)[0];
      }

      return parent;
    };

    this.proto.this.triggerCloseEvent = function this.triggerCloseEvent(element) {
      var closeEvent = $.Event(Event.CLOSE);
      $(element).trigger(closeEvent);
      return closeEvent;
    };

    this.proto.this.removeElement = function this.removeElement(element) {
      var this.this = this;

      $(element).removeClass(ClassName.SHOW);

      if (!$(element).hasClass(ClassName.FADE)) {
        this.this.destroyElement(element);

        return;
      }

      var transitionDuration = Util.getTransitionDurationFromElement(element);
      $(element).one(Util.TRANSITIONthis.END, function (event) {
        return this.this.this.destroyElement(element, event);
      }).emulateTransitionEnd(transitionDuration);
    };

    this.proto.this.destroyElement = function this.destroyElement(element) {
      $(element).detach().trigger(Event.CLOSED).remove();
    } // Static
    ;

    Alert.this.jQueryInterface = function this.jQueryInterface(config) {
      return this.each(function () {
        var $element = $(this);
        var data = $element.data(DATAthis.KEY);

        if (!data) {
          data = new Alert(this);
          $element.data(DATAthis.KEY, data);
        }

        if (config === 'close') {
          data[config](this);
        }
      });
    };

    Alert.this.handleDismiss = function this.handleDismiss(alertInstance) {
      return function (event) {
        if (event) {
          event.preventDefault();
        }

        alertInstance.close(this);
      };
    };

    this.createClass(Alert, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION;
      }
    }]);

    return Alert;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(Event.CLICKthis.DATAthis.API, Selector.DISMISS, Alert.this.handleDismiss(new Alert()));
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME] = Alert.this.jQueryInterface;
  $.fn[NAME].Constructor = Alert;

  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERYthis.NOthis.CONFLICT;
    return Alert.this.jQueryInterface;
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$1 = 'button';
  var VERSION$1 = '4.3.1';
  var DATAthis.KEY$1 = 'bs.button';
  var EVENTthis.KEY$1 = "." + DATAthis.KEY$1;
  var DATAthis.APIthis.KEY$1 = '.data-api';
  var JQUERYthis.NOthis.CONFLICT$1 = $.fn[NAME$1];
  var ClassName$1 = {
    ACTIVE: 'active',
    BUTTON: 'btn',
    FOCUS: 'focus'
  };
  var Selector$1 = {
    DATAthis.TOGGLEthis.CARROT: '[data-toggle^="button"]',
    DATAthis.TOGGLE: '[data-toggle="buttons"]',
    INPUT: 'input:not([type="hidden"])',
    ACTIVE: '.active',
    BUTTON: '.btn'
  };
  var Event$1 = {
    CLICKthis.DATAthis.API: "click" + EVENTthis.KEY$1 + DATAthis.APIthis.KEY$1,
    FOCUSthis.BLURthis.DATAthis.API: "focus" + EVENTthis.KEY$1 + DATAthis.APIthis.KEY$1 + " " + ("blur" + EVENTthis.KEY$1 + DATAthis.APIthis.KEY$1)
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

  };

  var Button =
  /*#this.this.PUREthis.this.*/
  function () {
    function Button(element) {
      this.this.element = element;
    } // Getters


    var this.proto = Button.prototype;

    // Public
    this.proto.toggle = function toggle() {
      var triggerChangeEvent = true;
      var addAriaPressed = true;
      var rootElement = $(this.this.element).closest(Selector$1.DATAthis.TOGGLE)[0];

      if (rootElement) {
        var input = this.this.element.querySelector(Selector$1.INPUT);

        if (input) {
          if (input.type === 'radio') {
            if (input.checked && this.this.element.classList.contains(ClassName$1.ACTIVE)) {
              triggerChangeEvent = false;
            } else {
              var activeElement = rootElement.querySelector(Selector$1.ACTIVE);

              if (activeElement) {
                $(activeElement).removeClass(ClassName$1.ACTIVE);
              }
            }
          }

          if (triggerChangeEvent) {
            if (input.hasAttribute('disabled') || rootElement.hasAttribute('disabled') || input.classList.contains('disabled') || rootElement.classList.contains('disabled')) {
              return;
            }

            input.checked = !this.this.element.classList.contains(ClassName$1.ACTIVE);
            $(input).trigger('change');
          }

          input.focus();
          addAriaPressed = false;
        }
      }

      if (addAriaPressed) {
        this.this.element.setAttribute('aria-pressed', !this.this.element.classList.contains(ClassName$1.ACTIVE));
      }

      if (triggerChangeEvent) {
        $(this.this.element).toggleClass(ClassName$1.ACTIVE);
      }
    };

    this.proto.dispose = function dispose() {
      $.removeData(this.this.element, DATAthis.KEY$1);
      this.this.element = null;
    } // Static
    ;

    Button.this.jQueryInterface = function this.jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATAthis.KEY$1);

        if (!data) {
          data = new Button(this);
          $(this).data(DATAthis.KEY$1, data);
        }

        if (config === 'toggle') {
          data[config]();
        }
      });
    };

    this.createClass(Button, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$1;
      }
    }]);

    return Button;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(Event$1.CLICKthis.DATAthis.API, Selector$1.DATAthis.TOGGLEthis.CARROT, function (event) {
    event.preventDefault();
    var button = event.target;

    if (!$(button).hasClass(ClassName$1.BUTTON)) {
      button = $(button).closest(Selector$1.BUTTON);
    }

    Button.this.jQueryInterface.call($(button), 'toggle');
  }).on(Event$1.FOCUSthis.BLURthis.DATAthis.API, Selector$1.DATAthis.TOGGLEthis.CARROT, function (event) {
    var button = $(event.target).closest(Selector$1.BUTTON)[0];
    $(button).toggleClass(ClassName$1.FOCUS, /^focus(in)?$/.test(event.type));
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME$1] = Button.this.jQueryInterface;
  $.fn[NAME$1].Constructor = Button;

  $.fn[NAME$1].noConflict = function () {
    $.fn[NAME$1] = JQUERYthis.NOthis.CONFLICT$1;
    return Button.this.jQueryInterface;
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$2 = 'carousel';
  var VERSION$2 = '4.3.1';
  var DATAthis.KEY$2 = 'bs.carousel';
  var EVENTthis.KEY$2 = "." + DATAthis.KEY$2;
  var DATAthis.APIthis.KEY$2 = '.data-api';
  var JQUERYthis.NOthis.CONFLICT$2 = $.fn[NAME$2];
  var ARROWthis.LEFTthis.KEYCODE = 37; // KeyboardEvent.which value for left arrow key

  var ARROWthis.RIGHTthis.KEYCODE = 39; // KeyboardEvent.which value for right arrow key

  var TOUCHEVENTthis.COMPATthis.WAIT = 500; // Time for mouse compat events to fire after touch

  var SWIPEthis.THRESHOLD = 40;
  var Default = {
    interval: 5000,
    keyboard: true,
    slide: false,
    pause: 'hover',
    wrap: true,
    touch: true
  };
  var DefaultType = {
    interval: '(number|boolean)',
    keyboard: 'boolean',
    slide: '(boolean|string)',
    pause: '(string|boolean)',
    wrap: 'boolean',
    touch: 'boolean'
  };
  var Direction = {
    NEXT: 'next',
    PREV: 'prev',
    LEFT: 'left',
    RIGHT: 'right'
  };
  var Event$2 = {
    SLIDE: "slide" + EVENTthis.KEY$2,
    SLID: "slid" + EVENTthis.KEY$2,
    KEYDOWN: "keydown" + EVENTthis.KEY$2,
    MOUSEENTER: "mouseenter" + EVENTthis.KEY$2,
    MOUSELEAVE: "mouseleave" + EVENTthis.KEY$2,
    TOUCHSTART: "touchstart" + EVENTthis.KEY$2,
    TOUCHMOVE: "touchmove" + EVENTthis.KEY$2,
    TOUCHEND: "touchend" + EVENTthis.KEY$2,
    POINTERDOWN: "pointerdown" + EVENTthis.KEY$2,
    POINTERUP: "pointerup" + EVENTthis.KEY$2,
    DRAGthis.START: "dragstart" + EVENTthis.KEY$2,
    LOADthis.DATAthis.API: "load" + EVENTthis.KEY$2 + DATAthis.APIthis.KEY$2,
    CLICKthis.DATAthis.API: "click" + EVENTthis.KEY$2 + DATAthis.APIthis.KEY$2
  };
  var ClassName$2 = {
    CAROUSEL: 'carousel',
    ACTIVE: 'active',
    SLIDE: 'slide',
    RIGHT: 'carousel-item-right',
    LEFT: 'carousel-item-left',
    NEXT: 'carousel-item-next',
    PREV: 'carousel-item-prev',
    ITEM: 'carousel-item',
    POINTERthis.EVENT: 'pointer-event'
  };
  var Selector$2 = {
    ACTIVE: '.active',
    ACTIVEthis.ITEM: '.active.carousel-item',
    ITEM: '.carousel-item',
    ITEMthis.IMG: '.carousel-item img',
    NEXTthis.PREV: '.carousel-item-next, .carousel-item-prev',
    INDICATORS: '.carousel-indicators',
    DATAthis.SLIDE: '[data-slide], [data-slide-to]',
    DATAthis.RIDE: '[data-ride="carousel"]'
  };
  var PointerType = {
    TOUCH: 'touch',
    PEN: 'pen'
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

  };

  var Carousel =
  /*#this.this.PUREthis.this.*/
  function () {
    function Carousel(element, config) {
      this.this.items = null;
      this.this.interval = null;
      this.this.activeElement = null;
      this.this.isPaused = false;
      this.this.isSliding = false;
      this.touchTimeout = null;
      this.touchStartX = 0;
      this.touchDeltaX = 0;
      this.this.config = this.this.getConfig(config);
      this.this.element = element;
      this.this.indicatorsElement = this.this.element.querySelector(Selector$2.INDICATORS);
      this.this.touchSupported = 'ontouchstart' in document.documentElement || navigator.maxTouchPoints > 0;
      this.this.pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent);

      this.this.addEventListeners();
    } // Getters


    var this.proto = Carousel.prototype;

    // Public
    this.proto.next = function next() {
      if (!this.this.isSliding) {
        this.this.slide(Direction.NEXT);
      }
    };

    this.proto.nextWhenVisible = function nextWhenVisible() {
      // Don't call next when the page isn't visible
      // or the carousel or its parent isn't visible
      if (!document.hidden && $(this.this.element).is(':visible') && $(this.this.element).css('visibility') !== 'hidden') {
        this.next();
      }
    };

    this.proto.prev = function prev() {
      if (!this.this.isSliding) {
        this.this.slide(Direction.PREV);
      }
    };

    this.proto.pause = function pause(event) {
      if (!event) {
        this.this.isPaused = true;
      }

      if (this.this.element.querySelector(Selector$2.NEXTthis.PREV)) {
        Util.triggerTransitionEnd(this.this.element);
        this.cycle(true);
      }

      clearInterval(this.this.interval);
      this.this.interval = null;
    };

    this.proto.cycle = function cycle(event) {
      if (!event) {
        this.this.isPaused = false;
      }

      if (this.this.interval) {
        clearInterval(this.this.interval);
        this.this.interval = null;
      }

      if (this.this.config.interval && !this.this.isPaused) {
        this.this.interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this.this.config.interval);
      }
    };

    this.proto.to = function to(index) {
      var this.this = this;

      this.this.activeElement = this.this.element.querySelector(Selector$2.ACTIVEthis.ITEM);

      var activeIndex = this.this.getItemIndex(this.this.activeElement);

      if (index > this.this.items.length - 1 || index < 0) {
        return;
      }

      if (this.this.isSliding) {
        $(this.this.element).one(Event$2.SLID, function () {
          return this.this.to(index);
        });
        return;
      }

      if (activeIndex === index) {
        this.pause();
        this.cycle();
        return;
      }

      var direction = index > activeIndex ? Direction.NEXT : Direction.PREV;

      this.this.slide(direction, this.this.items[index]);
    };

    this.proto.dispose = function dispose() {
      $(this.this.element).off(EVENTthis.KEY$2);
      $.removeData(this.this.element, DATAthis.KEY$2);
      this.this.items = null;
      this.this.config = null;
      this.this.element = null;
      this.this.interval = null;
      this.this.isPaused = null;
      this.this.isSliding = null;
      this.this.activeElement = null;
      this.this.indicatorsElement = null;
    } // Private
    ;

    this.proto.this.getConfig = function this.getConfig(config) {
      config = this.objectSpread({}, Default, config);
      Util.typeCheckConfig(NAME$2, config, DefaultType);
      return config;
    };

    this.proto.this.handleSwipe = function this.handleSwipe() {
      var absDeltax = Math.abs(this.touchDeltaX);

      if (absDeltax <= SWIPEthis.THRESHOLD) {
        return;
      }

      var direction = absDeltax / this.touchDeltaX; // swipe left

      if (direction > 0) {
        this.prev();
      } // swipe right


      if (direction < 0) {
        this.next();
      }
    };

    this.proto.this.addEventListeners = function this.addEventListeners() {
      var this.this2 = this;

      if (this.this.config.keyboard) {
        $(this.this.element).on(Event$2.KEYDOWN, function (event) {
          return this.this2.this.keydown(event);
        });
      }

      if (this.this.config.pause === 'hover') {
        $(this.this.element).on(Event$2.MOUSEENTER, function (event) {
          return this.this2.pause(event);
        }).on(Event$2.MOUSELEAVE, function (event) {
          return this.this2.cycle(event);
        });
      }

      if (this.this.config.touch) {
        this.this.addTouchEventListeners();
      }
    };

    this.proto.this.addTouchEventListeners = function this.addTouchEventListeners() {
      var this.this3 = this;

      if (!this.this.touchSupported) {
        return;
      }

      var start = function start(event) {
        if (this.this3.this.pointerEvent && PointerType[event.originalEvent.pointerType.toUpperCase()]) {
          this.this3.touchStartX = event.originalEvent.clientX;
        } else if (!this.this3.this.pointerEvent) {
          this.this3.touchStartX = event.originalEvent.touches[0].clientX;
        }
      };

      var move = function move(event) {
        // ensure swiping with one touch and not pinching
        if (event.originalEvent.touches && event.originalEvent.touches.length > 1) {
          this.this3.touchDeltaX = 0;
        } else {
          this.this3.touchDeltaX = event.originalEvent.touches[0].clientX - this.this3.touchStartX;
        }
      };

      var end = function end(event) {
        if (this.this3.this.pointerEvent && PointerType[event.originalEvent.pointerType.toUpperCase()]) {
          this.this3.touchDeltaX = event.originalEvent.clientX - this.this3.touchStartX;
        }

        this.this3.this.handleSwipe();

        if (this.this3.this.config.pause === 'hover') {
          // If it's a touch-enabled device, mouseenter/leave are fired as
          // part of the mouse compatibility events on first tap - the carousel
          // would stop cycling until user tapped out of it;
          // here, we listen for touchend, explicitly pause the carousel
          // (as if it's the second time we tap on it, mouseenter compat event
          // is NOT fired) and after a timeout (to allow for mouse compatibility
          // events to fire) we explicitly restart cycling
          this.this3.pause();

          if (this.this3.touchTimeout) {
            clearTimeout(this.this3.touchTimeout);
          }

          this.this3.touchTimeout = setTimeout(function (event) {
            return this.this3.cycle(event);
          }, TOUCHEVENTthis.COMPATthis.WAIT + this.this3.this.config.interval);
        }
      };

      $(this.this.element.querySelectorAll(Selector$2.ITEMthis.IMG)).on(Event$2.DRAGthis.START, function (e) {
        return e.preventDefault();
      });

      if (this.this.pointerEvent) {
        $(this.this.element).on(Event$2.POINTERDOWN, function (event) {
          return start(event);
        });
        $(this.this.element).on(Event$2.POINTERUP, function (event) {
          return end(event);
        });

        this.this.element.classList.add(ClassName$2.POINTERthis.EVENT);
      } else {
        $(this.this.element).on(Event$2.TOUCHSTART, function (event) {
          return start(event);
        });
        $(this.this.element).on(Event$2.TOUCHMOVE, function (event) {
          return move(event);
        });
        $(this.this.element).on(Event$2.TOUCHEND, function (event) {
          return end(event);
        });
      }
    };

    this.proto.this.keydown = function this.keydown(event) {
      if (/input|textarea/i.test(event.target.tagName)) {
        return;
      }

      switch (event.which) {
        case ARROWthis.LEFTthis.KEYCODE:
          event.preventDefault();
          this.prev();
          break;

        case ARROWthis.RIGHTthis.KEYCODE:
          event.preventDefault();
          this.next();
          break;

        default:
      }
    };

    this.proto.this.getItemIndex = function this.getItemIndex(element) {
      this.this.items = element && element.parentNode ? [].slice.call(element.parentNode.querySelectorAll(Selector$2.ITEM)) : [];
      return this.this.items.indexOf(element);
    };

    this.proto.this.getItemByDirection = function this.getItemByDirection(direction, activeElement) {
      var isNextDirection = direction === Direction.NEXT;
      var isPrevDirection = direction === Direction.PREV;

      var activeIndex = this.this.getItemIndex(activeElement);

      var lastItemIndex = this.this.items.length - 1;
      var isGoingToWrap = isPrevDirection && activeIndex === 0 || isNextDirection && activeIndex === lastItemIndex;

      if (isGoingToWrap && !this.this.config.wrap) {
        return activeElement;
      }

      var delta = direction === Direction.PREV ? -1 : 1;
      var itemIndex = (activeIndex + delta) % this.this.items.length;
      return itemIndex === -1 ? this.this.items[this.this.items.length - 1] : this.this.items[itemIndex];
    };

    this.proto.this.triggerSlideEvent = function this.triggerSlideEvent(relatedTarget, eventDirectionName) {
      var targetIndex = this.this.getItemIndex(relatedTarget);

      var fromIndex = this.this.getItemIndex(this.this.element.querySelector(Selector$2.ACTIVEthis.ITEM));

      var slideEvent = $.Event(Event$2.SLIDE, {
        relatedTarget: relatedTarget,
        direction: eventDirectionName,
        from: fromIndex,
        to: targetIndex
      });
      $(this.this.element).trigger(slideEvent);
      return slideEvent;
    };

    this.proto.this.setActiveIndicatorElement = function this.setActiveIndicatorElement(element) {
      if (this.this.indicatorsElement) {
        var indicators = [].slice.call(this.this.indicatorsElement.querySelectorAll(Selector$2.ACTIVE));
        $(indicators).removeClass(ClassName$2.ACTIVE);

        var nextIndicator = this.this.indicatorsElement.children[this.this.getItemIndex(element)];

        if (nextIndicator) {
          $(nextIndicator).addClass(ClassName$2.ACTIVE);
        }
      }
    };

    this.proto.this.slide = function this.slide(direction, element) {
      var this.this4 = this;

      var activeElement = this.this.element.querySelector(Selector$2.ACTIVEthis.ITEM);

      var activeElementIndex = this.this.getItemIndex(activeElement);

      var nextElement = element || activeElement && this.this.getItemByDirection(direction, activeElement);

      var nextElementIndex = this.this.getItemIndex(nextElement);

      var isCycling = Boolean(this.this.interval);
      var directionalClassName;
      var orderClassName;
      var eventDirectionName;

      if (direction === Direction.NEXT) {
        directionalClassName = ClassName$2.LEFT;
        orderClassName = ClassName$2.NEXT;
        eventDirectionName = Direction.LEFT;
      } else {
        directionalClassName = ClassName$2.RIGHT;
        orderClassName = ClassName$2.PREV;
        eventDirectionName = Direction.RIGHT;
      }

      if (nextElement && $(nextElement).hasClass(ClassName$2.ACTIVE)) {
        this.this.isSliding = false;
        return;
      }

      var slideEvent = this.this.triggerSlideEvent(nextElement, eventDirectionName);

      if (slideEvent.isDefaultPrevented()) {
        return;
      }

      if (!activeElement || !nextElement) {
        // Some weirdness is happening, so we bail
        return;
      }

      this.this.isSliding = true;

      if (isCycling) {
        this.pause();
      }

      this.this.setActiveIndicatorElement(nextElement);

      var slidEvent = $.Event(Event$2.SLID, {
        relatedTarget: nextElement,
        direction: eventDirectionName,
        from: activeElementIndex,
        to: nextElementIndex
      });

      if ($(this.this.element).hasClass(ClassName$2.SLIDE)) {
        $(nextElement).addClass(orderClassName);
        Util.reflow(nextElement);
        $(activeElement).addClass(directionalClassName);
        $(nextElement).addClass(directionalClassName);
        var nextElementInterval = parseInt(nextElement.getAttribute('data-interval'), 10);

        if (nextElementInterval) {
          this.this.config.defaultInterval = this.this.config.defaultInterval || this.this.config.interval;
          this.this.config.interval = nextElementInterval;
        } else {
          this.this.config.interval = this.this.config.defaultInterval || this.this.config.interval;
        }

        var transitionDuration = Util.getTransitionDurationFromElement(activeElement);
        $(activeElement).one(Util.TRANSITIONthis.END, function () {
          $(nextElement).removeClass(directionalClassName + " " + orderClassName).addClass(ClassName$2.ACTIVE);
          $(activeElement).removeClass(ClassName$2.ACTIVE + " " + orderClassName + " " + directionalClassName);
          this.this4.this.isSliding = false;
          setTimeout(function () {
            return $(this.this4.this.element).trigger(slidEvent);
          }, 0);
        }).emulateTransitionEnd(transitionDuration);
      } else {
        $(activeElement).removeClass(ClassName$2.ACTIVE);
        $(nextElement).addClass(ClassName$2.ACTIVE);
        this.this.isSliding = false;
        $(this.this.element).trigger(slidEvent);
      }

      if (isCycling) {
        this.cycle();
      }
    } // Static
    ;

    Carousel.this.jQueryInterface = function this.jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATAthis.KEY$2);

        var this.config = this.objectSpread({}, Default, $(this).data());

        if (typeof config === 'object') {
          this.config = this.objectSpread({}, this.config, config);
        }

        var action = typeof config === 'string' ? config : this.config.slide;

        if (!data) {
          data = new Carousel(this, this.config);
          $(this).data(DATAthis.KEY$2, data);
        }

        if (typeof config === 'number') {
          data.to(config);
        } else if (typeof action === 'string') {
          if (typeof data[action] === 'undefined') {
            throw new TypeError("No method named \"" + action + "\"");
          }

          data[action]();
        } else if (this.config.interval && this.config.ride) {
          data.pause();
          data.cycle();
        }
      });
    };

    Carousel.this.dataApiClickHandler = function this.dataApiClickHandler(event) {
      var selector = Util.getSelectorFromElement(this);

      if (!selector) {
        return;
      }

      var target = $(selector)[0];

      if (!target || !$(target).hasClass(ClassName$2.CAROUSEL)) {
        return;
      }

      var config = this.objectSpread({}, $(target).data(), $(this).data());

      var slideIndex = this.getAttribute('data-slide-to');

      if (slideIndex) {
        config.interval = false;
      }

      Carousel.this.jQueryInterface.call($(target), config);

      if (slideIndex) {
        $(target).data(DATAthis.KEY$2).to(slideIndex);
      }

      event.preventDefault();
    };

    this.createClass(Carousel, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$2;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default;
      }
    }]);

    return Carousel;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(Event$2.CLICKthis.DATAthis.API, Selector$2.DATAthis.SLIDE, Carousel.this.dataApiClickHandler);
  $(window).on(Event$2.LOADthis.DATAthis.API, function () {
    var carousels = [].slice.call(document.querySelectorAll(Selector$2.DATAthis.RIDE));

    for (var i = 0, len = carousels.length; i < len; i++) {
      var $carousel = $(carousels[i]);

      Carousel.this.jQueryInterface.call($carousel, $carousel.data());
    }
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME$2] = Carousel.this.jQueryInterface;
  $.fn[NAME$2].Constructor = Carousel;

  $.fn[NAME$2].noConflict = function () {
    $.fn[NAME$2] = JQUERYthis.NOthis.CONFLICT$2;
    return Carousel.this.jQueryInterface;
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$3 = 'collapse';
  var VERSION$3 = '4.3.1';
  var DATAthis.KEY$3 = 'bs.collapse';
  var EVENTthis.KEY$3 = "." + DATAthis.KEY$3;
  var DATAthis.APIthis.KEY$3 = '.data-api';
  var JQUERYthis.NOthis.CONFLICT$3 = $.fn[NAME$3];
  var Default$1 = {
    toggle: true,
    parent: ''
  };
  var DefaultType$1 = {
    toggle: 'boolean',
    parent: '(string|element)'
  };
  var Event$3 = {
    SHOW: "show" + EVENTthis.KEY$3,
    SHOWN: "shown" + EVENTthis.KEY$3,
    HIDE: "hide" + EVENTthis.KEY$3,
    HIDDEN: "hidden" + EVENTthis.KEY$3,
    CLICKthis.DATAthis.API: "click" + EVENTthis.KEY$3 + DATAthis.APIthis.KEY$3
  };
  var ClassName$3 = {
    SHOW: 'show',
    COLLAPSE: 'collapse',
    COLLAPSING: 'collapsing',
    COLLAPSED: 'collapsed'
  };
  var Dimension = {
    WIDTH: 'width',
    HEIGHT: 'height'
  };
  var Selector$3 = {
    ACTIVES: '.show, .collapsing',
    DATAthis.TOGGLE: '[data-toggle="collapse"]'
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

  };

  var Collapse =
  /*#this.this.PUREthis.this.*/
  function () {
    function Collapse(element, config) {
      this.this.isTransitioning = false;
      this.this.element = element;
      this.this.config = this.this.getConfig(config);
      this.this.triggerArray = [].slice.call(document.querySelectorAll("[data-toggle=\"collapse\"][href=\"#" + element.id + "\"]," + ("[data-toggle=\"collapse\"][data-target=\"#" + element.id + "\"]")));
      var toggleList = [].slice.call(document.querySelectorAll(Selector$3.DATAthis.TOGGLE));

      for (var i = 0, len = toggleList.length; i < len; i++) {
        var elem = toggleList[i];
        var selector = Util.getSelectorFromElement(elem);
        var filterElement = [].slice.call(document.querySelectorAll(selector)).filter(function (foundElem) {
          return foundElem === element;
        });

        if (selector !== null && filterElement.length > 0) {
          this.this.selector = selector;

          this.this.triggerArray.push(elem);
        }
      }

      this.this.parent = this.this.config.parent ? this.this.getParent() : null;

      if (!this.this.config.parent) {
        this.this.addAriaAndCollapsedClass(this.this.element, this.this.triggerArray);
      }

      if (this.this.config.toggle) {
        this.toggle();
      }
    } // Getters


    var this.proto = Collapse.prototype;

    // Public
    this.proto.toggle = function toggle() {
      if ($(this.this.element).hasClass(ClassName$3.SHOW)) {
        this.hide();
      } else {
        this.show();
      }
    };

    this.proto.show = function show() {
      var this.this = this;

      if (this.this.isTransitioning || $(this.this.element).hasClass(ClassName$3.SHOW)) {
        return;
      }

      var actives;
      var activesData;

      if (this.this.parent) {
        actives = [].slice.call(this.this.parent.querySelectorAll(Selector$3.ACTIVES)).filter(function (elem) {
          if (typeof this.this.this.config.parent === 'string') {
            return elem.getAttribute('data-parent') === this.this.this.config.parent;
          }

          return elem.classList.contains(ClassName$3.COLLAPSE);
        });

        if (actives.length === 0) {
          actives = null;
        }
      }

      if (actives) {
        activesData = $(actives).not(this.this.selector).data(DATAthis.KEY$3);

        if (activesData && activesData.this.isTransitioning) {
          return;
        }
      }

      var startEvent = $.Event(Event$3.SHOW);
      $(this.this.element).trigger(startEvent);

      if (startEvent.isDefaultPrevented()) {
        return;
      }

      if (actives) {
        Collapse.this.jQueryInterface.call($(actives).not(this.this.selector), 'hide');

        if (!activesData) {
          $(actives).data(DATAthis.KEY$3, null);
        }
      }

      var dimension = this.this.getDimension();

      $(this.this.element).removeClass(ClassName$3.COLLAPSE).addClass(ClassName$3.COLLAPSING);
      this.this.element.style[dimension] = 0;

      if (this.this.triggerArray.length) {
        $(this.this.triggerArray).removeClass(ClassName$3.COLLAPSED).attr('aria-expanded', true);
      }

      this.setTransitioning(true);

      var complete = function complete() {
        $(this.this.this.element).removeClass(ClassName$3.COLLAPSING).addClass(ClassName$3.COLLAPSE).addClass(ClassName$3.SHOW);
        this.this.this.element.style[dimension] = '';

        this.this.setTransitioning(false);

        $(this.this.this.element).trigger(Event$3.SHOWN);
      };

      var capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
      var scrollSize = "scroll" + capitalizedDimension;
      var transitionDuration = Util.getTransitionDurationFromElement(this.this.element);
      $(this.this.element).one(Util.TRANSITIONthis.END, complete).emulateTransitionEnd(transitionDuration);
      this.this.element.style[dimension] = this.this.element[scrollSize] + "px";
    };

    this.proto.hide = function hide() {
      var this.this2 = this;

      if (this.this.isTransitioning || !$(this.this.element).hasClass(ClassName$3.SHOW)) {
        return;
      }

      var startEvent = $.Event(Event$3.HIDE);
      $(this.this.element).trigger(startEvent);

      if (startEvent.isDefaultPrevented()) {
        return;
      }

      var dimension = this.this.getDimension();

      this.this.element.style[dimension] = this.this.element.getBoundingClientRect()[dimension] + "px";
      Util.reflow(this.this.element);
      $(this.this.element).addClass(ClassName$3.COLLAPSING).removeClass(ClassName$3.COLLAPSE).removeClass(ClassName$3.SHOW);
      var triggerArrayLength = this.this.triggerArray.length;

      if (triggerArrayLength > 0) {
        for (var i = 0; i < triggerArrayLength; i++) {
          var trigger = this.this.triggerArray[i];
          var selector = Util.getSelectorFromElement(trigger);

          if (selector !== null) {
            var $elem = $([].slice.call(document.querySelectorAll(selector)));

            if (!$elem.hasClass(ClassName$3.SHOW)) {
              $(trigger).addClass(ClassName$3.COLLAPSED).attr('aria-expanded', false);
            }
          }
        }
      }

      this.setTransitioning(true);

      var complete = function complete() {
        this.this2.setTransitioning(false);

        $(this.this2.this.element).removeClass(ClassName$3.COLLAPSING).addClass(ClassName$3.COLLAPSE).trigger(Event$3.HIDDEN);
      };

      this.this.element.style[dimension] = '';
      var transitionDuration = Util.getTransitionDurationFromElement(this.this.element);
      $(this.this.element).one(Util.TRANSITIONthis.END, complete).emulateTransitionEnd(transitionDuration);
    };

    this.proto.setTransitioning = function setTransitioning(isTransitioning) {
      this.this.isTransitioning = isTransitioning;
    };

    this.proto.dispose = function dispose() {
      $.removeData(this.this.element, DATAthis.KEY$3);
      this.this.config = null;
      this.this.parent = null;
      this.this.element = null;
      this.this.triggerArray = null;
      this.this.isTransitioning = null;
    } // Private
    ;

    this.proto.this.getConfig = function this.getConfig(config) {
      config = this.objectSpread({}, Default$1, config);
      config.toggle = Boolean(config.toggle); // Coerce string values

      Util.typeCheckConfig(NAME$3, config, DefaultType$1);
      return config;
    };

    this.proto.this.getDimension = function this.getDimension() {
      var hasWidth = $(this.this.element).hasClass(Dimension.WIDTH);
      return hasWidth ? Dimension.WIDTH : Dimension.HEIGHT;
    };

    this.proto.this.getParent = function this.getParent() {
      var this.this3 = this;

      var parent;

      if (Util.isElement(this.this.config.parent)) {
        parent = this.this.config.parent; // It's a jQuery object

        if (typeof this.this.config.parent.jquery !== 'undefined') {
          parent = this.this.config.parent[0];
        }
      } else {
        parent = document.querySelector(this.this.config.parent);
      }

      var selector = "[data-toggle=\"collapse\"][data-parent=\"" + this.this.config.parent + "\"]";
      var children = [].slice.call(parent.querySelectorAll(selector));
      $(children).each(function (i, element) {
        this.this3.this.addAriaAndCollapsedClass(Collapse.this.getTargetFromElement(element), [element]);
      });
      return parent;
    };

    this.proto.this.addAriaAndCollapsedClass = function this.addAriaAndCollapsedClass(element, triggerArray) {
      var isOpen = $(element).hasClass(ClassName$3.SHOW);

      if (triggerArray.length) {
        $(triggerArray).toggleClass(ClassName$3.COLLAPSED, !isOpen).attr('aria-expanded', isOpen);
      }
    } // Static
    ;

    Collapse.this.getTargetFromElement = function this.getTargetFromElement(element) {
      var selector = Util.getSelectorFromElement(element);
      return selector ? document.querySelector(selector) : null;
    };

    Collapse.this.jQueryInterface = function this.jQueryInterface(config) {
      return this.each(function () {
        var $this = $(this);
        var data = $this.data(DATAthis.KEY$3);

        var this.config = this.objectSpread({}, Default$1, $this.data(), typeof config === 'object' && config ? config : {});

        if (!data && this.config.toggle && /show|hide/.test(config)) {
          this.config.toggle = false;
        }

        if (!data) {
          data = new Collapse(this, this.config);
          $this.data(DATAthis.KEY$3, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    this.createClass(Collapse, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$3;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$1;
      }
    }]);

    return Collapse;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(Event$3.CLICKthis.DATAthis.API, Selector$3.DATAthis.TOGGLE, function (event) {
    // preventDefault only for <a> elements (which change the URL) not inside the collapsible element
    if (event.currentTarget.tagName === 'A') {
      event.preventDefault();
    }

    var $trigger = $(this);
    var selector = Util.getSelectorFromElement(this);
    var selectors = [].slice.call(document.querySelectorAll(selector));
    $(selectors).each(function () {
      var $target = $(this);
      var data = $target.data(DATAthis.KEY$3);
      var config = data ? 'toggle' : $trigger.data();

      Collapse.this.jQueryInterface.call($target, config);
    });
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME$3] = Collapse.this.jQueryInterface;
  $.fn[NAME$3].Constructor = Collapse;

  $.fn[NAME$3].noConflict = function () {
    $.fn[NAME$3] = JQUERYthis.NOthis.CONFLICT$3;
    return Collapse.this.jQueryInterface;
  };

  /**!
   * @fileOverview Kickass library to create and place poppers near their reference elements.
   * @version 1.14.7
   * @license
   * Copyright (c) 2016 Federico Zivolo and contributors
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in all
   * copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.
   */
  var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined';

  var longerTimeoutBrowsers = ['Edge', 'Trident', 'Firefox'];
  var timeoutDuration = 0;
  for (var i = 0; i < longerTimeoutBrowsers.length; i += 1) {
    if (isBrowser && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0) {
      timeoutDuration = 1;
      break;
    }
  }

  function microtaskDebounce(fn) {
    var called = false;
    return function () {
      if (called) {
        return;
      }
      called = true;
      window.Promise.resolve().then(function () {
        called = false;
        fn();
      });
    };
  }

  function taskDebounce(fn) {
    var scheduled = false;
    return function () {
      if (!scheduled) {
        scheduled = true;
        setTimeout(function () {
          scheduled = false;
          fn();
        }, timeoutDuration);
      }
    };
  }

  var supportsMicroTasks = isBrowser && window.Promise;

  /**
  * Create a debounced version of a method, that's asynchronously deferred
  * but called in the minimum time possible.
  *
  * @method
  * @memberof Popper.Utils
  * @argument {Function} fn
  * @returns {Function}
  */
  var debounce = supportsMicroTasks ? microtaskDebounce : taskDebounce;

  /**
   * Check if the given variable is a function
   * @method
   * @memberof Popper.Utils
   * @argument {Any} functionToCheck - variable to check
   * @returns {Boolean} answer to: is a function?
   */
  function isFunction(functionToCheck) {
    var getType = {};
    return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
  }

  /**
   * Get CSS computed property of the given element
   * @method
   * @memberof Popper.Utils
   * @argument {Eement} element
   * @argument {String} property
   */
  function getStyleComputedProperty(element, property) {
    if (element.nodeType !== 1) {
      return [];
    }
    // NOTE: 1 DOM access here
    var window = element.ownerDocument.defaultView;
    var css = window.getComputedStyle(element, null);
    return property ? css[property] : css;
  }

  /**
   * Returns the parentNode or the host of the element
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element
   * @returns {Element} parent
   */
  function getParentNode(element) {
    if (element.nodeName === 'HTML') {
      return element;
    }
    return element.parentNode || element.host;
  }

  /**
   * Returns the scrolling parent of the given element
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element
   * @returns {Element} scroll parent
   */
  function getScrollParent(element) {
    // Return body, `getScroll` will take care to get the correct `scrollTop` from it
    if (!element) {
      return document.body;
    }

    switch (element.nodeName) {
      case 'HTML':
      case 'BODY':
        return element.ownerDocument.body;
      case '#document':
        return element.body;
    }

    // Firefox want us to check `-x` and `-y` variations as well

    var this.getStyleComputedProp = getStyleComputedProperty(element),
        overflow = this.getStyleComputedProp.overflow,
        overflowX = this.getStyleComputedProp.overflowX,
        overflowY = this.getStyleComputedProp.overflowY;

    if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
      return element;
    }

    return getScrollParent(getParentNode(element));
  }

  var isIE11 = isBrowser && !!(window.MSInputMethodContext && document.documentMode);
  var isIE10 = isBrowser && /MSIE 10/.test(navigator.userAgent);

  /**
   * Determines if the browser is Internet Explorer
   * @method
   * @memberof Popper.Utils
   * @param {Number} version to check
   * @returns {Boolean} isIE
   */
  function isIE(version) {
    if (version === 11) {
      return isIE11;
    }
    if (version === 10) {
      return isIE10;
    }
    return isIE11 || isIE10;
  }

  /**
   * Returns the offset parent of the given element
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element
   * @returns {Element} offset parent
   */
  function getOffsetParent(element) {
    if (!element) {
      return document.documentElement;
    }

    var noOffsetParent = isIE(10) ? document.body : null;

    // NOTE: 1 DOM access here
    var offsetParent = element.offsetParent || null;
    // Skip hidden elements which don't have an offsetParent
    while (offsetParent === noOffsetParent && element.nextElementSibling) {
      offsetParent = (element = element.nextElementSibling).offsetParent;
    }

    var nodeName = offsetParent && offsetParent.nodeName;

    if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
      return element ? element.ownerDocument.documentElement : document.documentElement;
    }

    // .offsetParent will return the closest TH, TD or TABLE in case
    // no offsetParent is present, I hate this job...
    if (['TH', 'TD', 'TABLE'].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, 'position') === 'static') {
      return getOffsetParent(offsetParent);
    }

    return offsetParent;
  }

  function isOffsetContainer(element) {
    var nodeName = element.nodeName;

    if (nodeName === 'BODY') {
      return false;
    }
    return nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element;
  }

  /**
   * Finds the root node (document, shadowDOM root) of the given element
   * @method
   * @memberof Popper.Utils
   * @argument {Element} node
   * @returns {Element} root node
   */
  function getRoot(node) {
    if (node.parentNode !== null) {
      return getRoot(node.parentNode);
    }

    return node;
  }

  /**
   * Finds the offset parent common to the two provided nodes
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element1
   * @argument {Element} element2
   * @returns {Element} common offset parent
   */
  function findCommonOffsetParent(element1, element2) {
    // This check is needed to avoid errors in case one of the elements isn't defined for any reason
    if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
      return document.documentElement;
    }

    // Here we make sure to give as "start" the element that comes first in the DOM
    var order = element1.compareDocumentPosition(element2) & Node.DOCUMENTthis.POSITIONthis.FOLLOWING;
    var start = order ? element1 : element2;
    var end = order ? element2 : element1;

    // Get common ancestor container
    var range = document.createRange();
    range.setStart(start, 0);
    range.setEnd(end, 0);
    var commonAncestorContainer = range.commonAncestorContainer;

    // Both nodes are inside #document

    if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
      if (isOffsetContainer(commonAncestorContainer)) {
        return commonAncestorContainer;
      }

      return getOffsetParent(commonAncestorContainer);
    }

    // one of the nodes is inside shadowDOM, find which one
    var element1root = getRoot(element1);
    if (element1root.host) {
      return findCommonOffsetParent(element1root.host, element2);
    } else {
      return findCommonOffsetParent(element1, getRoot(element2).host);
    }
  }

  /**
   * Gets the scroll value of the given element in the given side (top and left)
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element
   * @argument {String} side `top` or `left`
   * @returns {number} amount of scrolled pixels
   */
  function getScroll(element) {
    var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';

    var upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
    var nodeName = element.nodeName;

    if (nodeName === 'BODY' || nodeName === 'HTML') {
      var html = element.ownerDocument.documentElement;
      var scrollingElement = element.ownerDocument.scrollingElement || html;
      return scrollingElement[upperSide];
    }

    return element[upperSide];
  }

  /*
   * Sum or subtract the element scroll values (left and top) from a given rect object
   * @method
   * @memberof Popper.Utils
   * @param {Object} rect - Rect object you want to change
   * @param {HTMLElement} element - The element from the function reads the scroll values
   * @param {Boolean} subtract - set to true if you want to subtract the scroll values
   * @return {Object} rect - The modifier rect object
   */
  function includeScroll(rect, element) {
    var subtract = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    var scrollTop = getScroll(element, 'top');
    var scrollLeft = getScroll(element, 'left');
    var modifier = subtract ? -1 : 1;
    rect.top += scrollTop * modifier;
    rect.bottom += scrollTop * modifier;
    rect.left += scrollLeft * modifier;
    rect.right += scrollLeft * modifier;
    return rect;
  }

  /*
   * Helper to detect borders of a given element
   * @method
   * @memberof Popper.Utils
   * @param {CSSStyleDeclaration} styles
   * Result of `getStyleComputedProperty` on the given element
   * @param {String} axis - `x` or `y`
   * @return {number} borders - The borders size of the given axis
   */

  function getBordersSize(styles, axis) {
    var sideA = axis === 'x' ? 'Left' : 'Top';
    var sideB = sideA === 'Left' ? 'Right' : 'Bottom';

    return parseFloat(styles['border' + sideA + 'Width'], 10) + parseFloat(styles['border' + sideB + 'Width'], 10);
  }

  function getSize(axis, body, html, computedStyle) {
    return Math.max(body['offset' + axis], body['scroll' + axis], html['client' + axis], html['offset' + axis], html['scroll' + axis], isIE(10) ? parseInt(html['offset' + axis]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Top' : 'Left')]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Bottom' : 'Right')]) : 0);
  }

  function getWindowSizes(document) {
    var body = document.body;
    var html = document.documentElement;
    var computedStyle = isIE(10) && getComputedStyle(html);

    return {
      height: getSize('Height', body, html, computedStyle),
      width: getSize('Width', body, html, computedStyle)
    };
  }

  var classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();





  var defineProperty = function (obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  };

  var this.extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  /**
   * Given element offsets, generate an output similar to getBoundingClientRect
   * @method
   * @memberof Popper.Utils
   * @argument {Object} offsets
   * @returns {Object} ClientRect like output
   */
  function getClientRect(offsets) {
    return this.extends({}, offsets, {
      right: offsets.left + offsets.width,
      bottom: offsets.top + offsets.height
    });
  }

  /**
   * Get bounding client rect of given element
   * @method
   * @memberof Popper.Utils
   * @param {HTMLElement} element
   * @return {Object} client rect
   */
  function getBoundingClientRect(element) {
    var rect = {};

    // IE10 10 FIX: Please, don't ask, the element isn't
    // considered in DOM in some circumstances...
    // This isn't reproducible in IE10 compatibility mode of IE11
    try {
      if (isIE(10)) {
        rect = element.getBoundingClientRect();
        var scrollTop = getScroll(element, 'top');
        var scrollLeft = getScroll(element, 'left');
        rect.top += scrollTop;
        rect.left += scrollLeft;
        rect.bottom += scrollTop;
        rect.right += scrollLeft;
      } else {
        rect = element.getBoundingClientRect();
      }
    } catch (e) {}

    var result = {
      left: rect.left,
      top: rect.top,
      width: rect.right - rect.left,
      height: rect.bottom - rect.top
    };

    // subtract scrollbar size from sizes
    var sizes = element.nodeName === 'HTML' ? getWindowSizes(element.ownerDocument) : {};
    var width = sizes.width || element.clientWidth || result.right - result.left;
    var height = sizes.height || element.clientHeight || result.bottom - result.top;

    var horizScrollbar = element.offsetWidth - width;
    var vertScrollbar = element.offsetHeight - height;

    // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
    // we make this check conditional for performance reasons
    if (horizScrollbar || vertScrollbar) {
      var styles = getStyleComputedProperty(element);
      horizScrollbar -= getBordersSize(styles, 'x');
      vertScrollbar -= getBordersSize(styles, 'y');

      result.width -= horizScrollbar;
      result.height -= vertScrollbar;
    }

    return getClientRect(result);
  }

  function getOffsetRectRelativeToArbitraryNode(children, parent) {
    var fixedPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    var isIE10 = isIE(10);
    var isHTML = parent.nodeName === 'HTML';
    var childrenRect = getBoundingClientRect(children);
    var parentRect = getBoundingClientRect(parent);
    var scrollParent = getScrollParent(children);

    var styles = getStyleComputedProperty(parent);
    var borderTopWidth = parseFloat(styles.borderTopWidth, 10);
    var borderLeftWidth = parseFloat(styles.borderLeftWidth, 10);

    // In cases where the parent is fixed, we must ignore negative scroll in offset calc
    if (fixedPosition && isHTML) {
      parentRect.top = Math.max(parentRect.top, 0);
      parentRect.left = Math.max(parentRect.left, 0);
    }
    var offsets = getClientRect({
      top: childrenRect.top - parentRect.top - borderTopWidth,
      left: childrenRect.left - parentRect.left - borderLeftWidth,
      width: childrenRect.width,
      height: childrenRect.height
    });
    offsets.marginTop = 0;
    offsets.marginLeft = 0;

    // Subtract margins of documentElement in case it's being used as parent
    // we do this only on HTML because it's the only element that behaves
    // differently when margins are applied to it. The margins are included in
    // the box of the documentElement, in the other cases not.
    if (!isIE10 && isHTML) {
      var marginTop = parseFloat(styles.marginTop, 10);
      var marginLeft = parseFloat(styles.marginLeft, 10);

      offsets.top -= borderTopWidth - marginTop;
      offsets.bottom -= borderTopWidth - marginTop;
      offsets.left -= borderLeftWidth - marginLeft;
      offsets.right -= borderLeftWidth - marginLeft;

      // Attach marginTop and marginLeft because in some circumstances we may need them
      offsets.marginTop = marginTop;
      offsets.marginLeft = marginLeft;
    }

    if (isIE10 && !fixedPosition ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== 'BODY') {
      offsets = includeScroll(offsets, parent);
    }

    return offsets;
  }

  function getViewportOffsetRectRelativeToArtbitraryNode(element) {
    var excludeScroll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    var html = element.ownerDocument.documentElement;
    var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
    var width = Math.max(html.clientWidth, window.innerWidth || 0);
    var height = Math.max(html.clientHeight, window.innerHeight || 0);

    var scrollTop = !excludeScroll ? getScroll(html) : 0;
    var scrollLeft = !excludeScroll ? getScroll(html, 'left') : 0;

    var offset = {
      top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
      left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
      width: width,
      height: height
    };

    return getClientRect(offset);
  }

  /**
   * Check if the given element is fixed or is inside a fixed parent
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element
   * @argument {Element} customContainer
   * @returns {Boolean} answer to "isFixed?"
   */
  function isFixed(element) {
    var nodeName = element.nodeName;
    if (nodeName === 'BODY' || nodeName === 'HTML') {
      return false;
    }
    if (getStyleComputedProperty(element, 'position') === 'fixed') {
      return true;
    }
    var parentNode = getParentNode(element);
    if (!parentNode) {
      return false;
    }
    return isFixed(parentNode);
  }

  /**
   * Finds the first parent of an element that has a transformed property defined
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element
   * @returns {Element} first transformed parent or documentElement
   */

  function getFixedPositionOffsetParent(element) {
    // This check is needed to avoid errors in case one of the elements isn't defined for any reason
    if (!element || !element.parentElement || isIE()) {
      return document.documentElement;
    }
    var el = element.parentElement;
    while (el && getStyleComputedProperty(el, 'transform') === 'none') {
      el = el.parentElement;
    }
    return el || document.documentElement;
  }

  /**
   * Computed the boundaries limits and return them
   * @method
   * @memberof Popper.Utils
   * @param {HTMLElement} popper
   * @param {HTMLElement} reference
   * @param {number} padding
   * @param {HTMLElement} boundariesElement - Element used to define the boundaries
   * @param {Boolean} fixedPosition - Is in fixed position mode
   * @returns {Object} Coordinates of the boundaries
   */
  function getBoundaries(popper, reference, padding, boundariesElement) {
    var fixedPosition = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

    // NOTE: 1 DOM access here

    var boundaries = { top: 0, left: 0 };
    var offsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, reference);

    // Handle viewport case
    if (boundariesElement === 'viewport') {
      boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent, fixedPosition);
    } else {
      // Handle other cases based on DOM element used as boundaries
      var boundariesNode = void 0;
      if (boundariesElement === 'scrollParent') {
        boundariesNode = getScrollParent(getParentNode(reference));
        if (boundariesNode.nodeName === 'BODY') {
          boundariesNode = popper.ownerDocument.documentElement;
        }
      } else if (boundariesElement === 'window') {
        boundariesNode = popper.ownerDocument.documentElement;
      } else {
        boundariesNode = boundariesElement;
      }

      var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent, fixedPosition);

      // In case of HTML, we need a different computation
      if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
        var this.getWindowSizes = getWindowSizes(popper.ownerDocument),
            height = this.getWindowSizes.height,
            width = this.getWindowSizes.width;

        boundaries.top += offsets.top - offsets.marginTop;
        boundaries.bottom = height + offsets.top;
        boundaries.left += offsets.left - offsets.marginLeft;
        boundaries.right = width + offsets.left;
      } else {
        // for all the other DOM elements, this one is good
        boundaries = offsets;
      }
    }

    // Add paddings
    padding = padding || 0;
    var isPaddingNumber = typeof padding === 'number';
    boundaries.left += isPaddingNumber ? padding : padding.left || 0;
    boundaries.top += isPaddingNumber ? padding : padding.top || 0;
    boundaries.right -= isPaddingNumber ? padding : padding.right || 0;
    boundaries.bottom -= isPaddingNumber ? padding : padding.bottom || 0;

    return boundaries;
  }

  function getArea(this.ref) {
    var width = this.ref.width,
        height = this.ref.height;

    return width * height;
  }

  /**
   * Utility used to transform the `auto` placement to the placement with more
   * available space.
   * @method
   * @memberof Popper.Utils
   * @argument {Object} data - The data object generated by update method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */
  function computeAutoPlacement(placement, refRect, popper, reference, boundariesElement) {
    var padding = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

    if (placement.indexOf('auto') === -1) {
      return placement;
    }

    var boundaries = getBoundaries(popper, reference, padding, boundariesElement);

    var rects = {
      top: {
        width: boundaries.width,
        height: refRect.top - boundaries.top
      },
      right: {
        width: boundaries.right - refRect.right,
        height: boundaries.height
      },
      bottom: {
        width: boundaries.width,
        height: boundaries.bottom - refRect.bottom
      },
      left: {
        width: refRect.left - boundaries.left,
        height: boundaries.height
      }
    };

    var sortedAreas = Object.keys(rects).map(function (key) {
      return this.extends({
        key: key
      }, rects[key], {
        area: getArea(rects[key])
      });
    }).sort(function (a, b) {
      return b.area - a.area;
    });

    var filteredAreas = sortedAreas.filter(function (this.ref2) {
      var width = this.ref2.width,
          height = this.ref2.height;
      return width >= popper.clientWidth && height >= popper.clientHeight;
    });

    var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;

    var variation = placement.split('-')[1];

    return computedPlacement + (variation ? '-' + variation : '');
  }

  /**
   * Get offsets to the reference element
   * @method
   * @memberof Popper.Utils
   * @param {Object} state
   * @param {Element} popper - the popper element
   * @param {Element} reference - the reference element (the popper will be relative to this)
   * @param {Element} fixedPosition - is in fixed position mode
   * @returns {Object} An object containing the offsets which will be applied to the popper
   */
  function getReferenceOffsets(state, popper, reference) {
    var fixedPosition = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

    var commonOffsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, reference);
    return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent, fixedPosition);
  }

  /**
   * Get the outer sizes of the given element (offset size + margins)
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element
   * @returns {Object} object containing width and height properties
   */
  function getOuterSizes(element) {
    var window = element.ownerDocument.defaultView;
    var styles = window.getComputedStyle(element);
    var x = parseFloat(styles.marginTop || 0) + parseFloat(styles.marginBottom || 0);
    var y = parseFloat(styles.marginLeft || 0) + parseFloat(styles.marginRight || 0);
    var result = {
      width: element.offsetWidth + y,
      height: element.offsetHeight + x
    };
    return result;
  }

  /**
   * Get the opposite placement of the given one
   * @method
   * @memberof Popper.Utils
   * @argument {String} placement
   * @returns {String} flipped placement
   */
  function getOppositePlacement(placement) {
    var hash = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
    return placement.replace(/left|right|bottom|top/g, function (matched) {
      return hash[matched];
    });
  }

  /**
   * Get offsets to the popper
   * @method
   * @memberof Popper.Utils
   * @param {Object} position - CSS position the Popper will get applied
   * @param {HTMLElement} popper - the popper element
   * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
   * @param {String} placement - one of the valid placement options
   * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
   */
  function getPopperOffsets(popper, referenceOffsets, placement) {
    placement = placement.split('-')[0];

    // Get popper node sizes
    var popperRect = getOuterSizes(popper);

    // Add position, width and height to our offsets object
    var popperOffsets = {
      width: popperRect.width,
      height: popperRect.height
    };

    // depending by the popper placement we have to compute its offsets slightly differently
    var isHoriz = ['right', 'left'].indexOf(placement) !== -1;
    var mainSide = isHoriz ? 'top' : 'left';
    var secondarySide = isHoriz ? 'left' : 'top';
    var measurement = isHoriz ? 'height' : 'width';
    var secondaryMeasurement = !isHoriz ? 'height' : 'width';

    popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2;
    if (placement === secondarySide) {
      popperOffsets[secondarySide] = referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
    } else {
      popperOffsets[secondarySide] = referenceOffsets[getOppositePlacement(secondarySide)];
    }

    return popperOffsets;
  }

  /**
   * Mimics the `find` method of Array
   * @method
   * @memberof Popper.Utils
   * @argument {Array} arr
   * @argument prop
   * @argument value
   * @returns index or -1
   */
  function find(arr, check) {
    // use native find if supported
    if (Array.prototype.find) {
      return arr.find(check);
    }

    // use `filter` to obtain the same behavior of `find`
    return arr.filter(check)[0];
  }

  /**
   * Return the index of the matching object
   * @method
   * @memberof Popper.Utils
   * @argument {Array} arr
   * @argument prop
   * @argument value
   * @returns index or -1
   */
  function findIndex(arr, prop, value) {
    // use native findIndex if supported
    if (Array.prototype.findIndex) {
      return arr.findIndex(function (cur) {
        return cur[prop] === value;
      });
    }

    // use `find` + `indexOf` if `findIndex` isn't supported
    var match = find(arr, function (obj) {
      return obj[prop] === value;
    });
    return arr.indexOf(match);
  }

  /**
   * Loop trough the list of modifiers and run them in order,
   * each of them will then edit the data object.
   * @method
   * @memberof Popper.Utils
   * @param {dataObject} data
   * @param {Array} modifiers
   * @param {String} ends - Optional modifier name used as stopper
   * @returns {dataObject}
   */
  function runModifiers(modifiers, data, ends) {
    var modifiersToRun = ends === undefined ? modifiers : modifiers.slice(0, findIndex(modifiers, 'name', ends));

    modifiersToRun.forEach(function (modifier) {
      if (modifier['function']) {
        // eslint-disable-line dot-notation
        console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
      }
      var fn = modifier['function'] || modifier.fn; // eslint-disable-line dot-notation
      if (modifier.enabled && isFunction(fn)) {
        // Add properties to offsets to make them a complete clientRect object
        // we do this before each modifier to make sure the previous one doesn't
        // mess with these values
        data.offsets.popper = getClientRect(data.offsets.popper);
        data.offsets.reference = getClientRect(data.offsets.reference);

        data = fn(data, modifier);
      }
    });

    return data;
  }

  /**
   * Updates the position of the popper, computing the new offsets and applying
   * the new style.<br />
   * Prefer `scheduleUpdate` over `update` because of performance reasons.
   * @method
   * @memberof Popper
   */
  function update() {
    // if popper is destroyed, don't perform any further update
    if (this.state.isDestroyed) {
      return;
    }

    var data = {
      instance: this,
      styles: {},
      arrowStyles: {},
      attributes: {},
      flipped: false,
      offsets: {}
    };

    // compute reference element offsets
    data.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference, this.options.positionFixed);

    // compute auto placement, store placement inside the data object,
    // modifiers will be able to edit `placement` if needed
    // and refer to originalPlacement to know the original value
    data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding);

    // store the computed placement inside `originalPlacement`
    data.originalPlacement = data.placement;

    data.positionFixed = this.options.positionFixed;

    // compute the popper offsets
    data.offsets.popper = getPopperOffsets(this.popper, data.offsets.reference, data.placement);

    data.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute';

    // run the modifiers
    data = runModifiers(this.modifiers, data);

    // the first `update` will call `onCreate` callback
    // the other ones will call `onUpdate` callback
    if (!this.state.isCreated) {
      this.state.isCreated = true;
      this.options.onCreate(data);
    } else {
      this.options.onUpdate(data);
    }
  }

  /**
   * Helper used to know if the given modifier is enabled.
   * @method
   * @memberof Popper.Utils
   * @returns {Boolean}
   */
  function isModifierEnabled(modifiers, modifierName) {
    return modifiers.some(function (this.ref) {
      var name = this.ref.name,
          enabled = this.ref.enabled;
      return enabled && name === modifierName;
    });
  }

  /**
   * Get the prefixed supported property name
   * @method
   * @memberof Popper.Utils
   * @argument {String} property (camelCase)
   * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
   */
  function getSupportedPropertyName(property) {
    var prefixes = [false, 'ms', 'Webkit', 'Moz', 'O'];
    var upperProp = property.charAt(0).toUpperCase() + property.slice(1);

    for (var i = 0; i < prefixes.length; i++) {
      var prefix = prefixes[i];
      var toCheck = prefix ? '' + prefix + upperProp : property;
      if (typeof document.body.style[toCheck] !== 'undefined') {
        return toCheck;
      }
    }
    return null;
  }

  /**
   * Destroys the popper.
   * @method
   * @memberof Popper
   */
  function destroy() {
    this.state.isDestroyed = true;

    // touch DOM only if `applyStyle` modifier is enabled
    if (isModifierEnabled(this.modifiers, 'applyStyle')) {
      this.popper.removeAttribute('x-placement');
      this.popper.style.position = '';
      this.popper.style.top = '';
      this.popper.style.left = '';
      this.popper.style.right = '';
      this.popper.style.bottom = '';
      this.popper.style.willChange = '';
      this.popper.style[getSupportedPropertyName('transform')] = '';
    }

    this.disableEventListeners();

    // remove the popper if user explicity asked for the deletion on destroy
    // do not use `remove` because IE11 doesn't support it
    if (this.options.removeOnDestroy) {
      this.popper.parentNode.removeChild(this.popper);
    }
    return this;
  }

  /**
   * Get the window associated with the element
   * @argument {Element} element
   * @returns {Window}
   */
  function getWindow(element) {
    var ownerDocument = element.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView : window;
  }

  function attachToScrollParents(scrollParent, event, callback, scrollParents) {
    var isBody = scrollParent.nodeName === 'BODY';
    var target = isBody ? scrollParent.ownerDocument.defaultView : scrollParent;
    target.addEventListener(event, callback, { passive: true });

    if (!isBody) {
      attachToScrollParents(getScrollParent(target.parentNode), event, callback, scrollParents);
    }
    scrollParents.push(target);
  }

  /**
   * Setup needed event listeners used to update the popper position
   * @method
   * @memberof Popper.Utils
   * @private
   */
  function setupEventListeners(reference, options, state, updateBound) {
    // Resize event listener on window
    state.updateBound = updateBound;
    getWindow(reference).addEventListener('resize', state.updateBound, { passive: true });

    // Scroll event listener on scroll parents
    var scrollElement = getScrollParent(reference);
    attachToScrollParents(scrollElement, 'scroll', state.updateBound, state.scrollParents);
    state.scrollElement = scrollElement;
    state.eventsEnabled = true;

    return state;
  }

  /**
   * It will add resize/scroll events and start recalculating
   * position of the popper element when they are triggered.
   * @method
   * @memberof Popper
   */
  function enableEventListeners() {
    if (!this.state.eventsEnabled) {
      this.state = setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate);
    }
  }

  /**
   * Remove event listeners used to update the popper position
   * @method
   * @memberof Popper.Utils
   * @private
   */
  function removeEventListeners(reference, state) {
    // Remove resize event listener on window
    getWindow(reference).removeEventListener('resize', state.updateBound);

    // Remove scroll event listener on scroll parents
    state.scrollParents.forEach(function (target) {
      target.removeEventListener('scroll', state.updateBound);
    });

    // Reset state
    state.updateBound = null;
    state.scrollParents = [];
    state.scrollElement = null;
    state.eventsEnabled = false;
    return state;
  }

  /**
   * It will remove resize/scroll events and won't recalculate popper position
   * when they are triggered. It also won't trigger `onUpdate` callback anymore,
   * unless you call `update` method manually.
   * @method
   * @memberof Popper
   */
  function disableEventListeners() {
    if (this.state.eventsEnabled) {
      cancelAnimationFrame(this.scheduleUpdate);
      this.state = removeEventListeners(this.reference, this.state);
    }
  }

  /**
   * Tells if a given input is a number
   * @method
   * @memberof Popper.Utils
   * @param {*} input to check
   * @return {Boolean}
   */
  function isNumeric(n) {
    return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
  }

  /**
   * Set the style to the given popper
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element - Element to apply the style to
   * @argument {Object} styles
   * Object with a list of properties and values which will be applied to the element
   */
  function setStyles(element, styles) {
    Object.keys(styles).forEach(function (prop) {
      var unit = '';
      // add unit if the value is numeric and is one of the following
      if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
        unit = 'px';
      }
      element.style[prop] = styles[prop] + unit;
    });
  }

  /**
   * Set the attributes to the given popper
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element - Element to apply the attributes to
   * @argument {Object} styles
   * Object with a list of properties and values which will be applied to the element
   */
  function setAttributes(element, attributes) {
    Object.keys(attributes).forEach(function (prop) {
      var value = attributes[prop];
      if (value !== false) {
        element.setAttribute(prop, attributes[prop]);
      } else {
        element.removeAttribute(prop);
      }
    });
  }

  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by `update` method
   * @argument {Object} data.styles - List of style properties - values to apply to popper element
   * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The same data object
   */
  function applyStyle(data) {
    // any property present in `data.styles` will be applied to the popper,
    // in this way we can make the 3rd party modifiers add custom styles to it
    // Be aware, modifiers could override the properties defined in the previous
    // lines of this modifier!
    setStyles(data.instance.popper, data.styles);

    // any property present in `data.attributes` will be applied to the popper,
    // they will be set as HTML attributes of the element
    setAttributes(data.instance.popper, data.attributes);

    // if arrowElement is defined and arrowStyles has some properties
    if (data.arrowElement && Object.keys(data.arrowStyles).length) {
      setStyles(data.arrowElement, data.arrowStyles);
    }

    return data;
  }

  /**
   * Set the x-placement attribute before everything else because it could be used
   * to add margins to the popper margins needs to be calculated to get the
   * correct popper offsets.
   * @method
   * @memberof Popper.modifiers
   * @param {HTMLElement} reference - The reference element used to position the popper
   * @param {HTMLElement} popper - The HTML element used as popper
   * @param {Object} options - Popper.js options
   */
  function applyStyleOnLoad(reference, popper, options, modifierOptions, state) {
    // compute reference element offsets
    var referenceOffsets = getReferenceOffsets(state, popper, reference, options.positionFixed);

    // compute auto placement, store placement inside the data object,
    // modifiers will be able to edit `placement` if needed
    // and refer to originalPlacement to know the original value
    var placement = computeAutoPlacement(options.placement, referenceOffsets, popper, reference, options.modifiers.flip.boundariesElement, options.modifiers.flip.padding);

    popper.setAttribute('x-placement', placement);

    // Apply `position` to popper before anything else because
    // without the position applied we can't guarantee correct computations
    setStyles(popper, { position: options.positionFixed ? 'fixed' : 'absolute' });

    return options;
  }

  /**
   * @function
   * @memberof Popper.Utils
   * @argument {Object} data - The data object generated by `update` method
   * @argument {Boolean} shouldRound - If the offsets should be rounded at all
   * @returns {Object} The popper's position offsets rounded
   *
   * The tale of pixel-perfect positioning. It's still not 100% perfect, but as
   * good as it can be within reason.
   * Discussion here: https://github.com/FezVrasta/popper.js/pull/715
   *
   * Low DPI screens cause a popper to be blurry if not using full pixels (Safari
   * as well on High DPI screens).
   *
   * Firefox prefers no rounding for positioning and does not have blurriness on
   * high DPI screens.
   *
   * Only horizontal placement and left/right values need to be considered.
   */
  function getRoundedOffsets(data, shouldRound) {
    var this.data$offsets = data.offsets,
        popper = this.data$offsets.popper,
        reference = this.data$offsets.reference;
    var round = Math.round,
        floor = Math.floor;

    var noRound = function noRound(v) {
      return v;
    };

    var referenceWidth = round(reference.width);
    var popperWidth = round(popper.width);

    var isVertical = ['left', 'right'].indexOf(data.placement) !== -1;
    var isVariation = data.placement.indexOf('-') !== -1;
    var sameWidthParity = referenceWidth % 2 === popperWidth % 2;
    var bothOddWidth = referenceWidth % 2 === 1 && popperWidth % 2 === 1;

    var horizontalToInteger = !shouldRound ? noRound : isVertical || isVariation || sameWidthParity ? round : floor;
    var verticalToInteger = !shouldRound ? noRound : round;

    return {
      left: horizontalToInteger(bothOddWidth && !isVariation && shouldRound ? popper.left - 1 : popper.left),
      top: verticalToInteger(popper.top),
      bottom: verticalToInteger(popper.bottom),
      right: horizontalToInteger(popper.right)
    };
  }

  var isFirefox = isBrowser && /Firefox/i.test(navigator.userAgent);

  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by `update` method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */
  function computeStyle(data, options) {
    var x = options.x,
        y = options.y;
    var popper = data.offsets.popper;

    // Remove this legacy support in Popper.js v2

    var legacyGpuAccelerationOption = find(data.instance.modifiers, function (modifier) {
      return modifier.name === 'applyStyle';
    }).gpuAcceleration;
    if (legacyGpuAccelerationOption !== undefined) {
      console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
    }
    var gpuAcceleration = legacyGpuAccelerationOption !== undefined ? legacyGpuAccelerationOption : options.gpuAcceleration;

    var offsetParent = getOffsetParent(data.instance.popper);
    var offsetParentRect = getBoundingClientRect(offsetParent);

    // Styles
    var styles = {
      position: popper.position
    };

    var offsets = getRoundedOffsets(data, window.devicePixelRatio < 2 || !isFirefox);

    var sideA = x === 'bottom' ? 'top' : 'bottom';
    var sideB = y === 'right' ? 'left' : 'right';

    // if gpuAcceleration is set to `true` and transform is supported,
    //  we use `translate3d` to apply the position to the popper we
    // automatically use the supported prefixed version if needed
    var prefixedProperty = getSupportedPropertyName('transform');

    // now, let's make a step back and look at this code closely (wtf?)
    // If the content of the popper grows once it's been positioned, it
    // may happen that the popper gets misplaced because of the new content
    // overflowing its reference element
    // To avoid this problem, we provide two options (x and y), which allow
    // the consumer to define the offset origin.
    // If we position a popper on top of a reference element, we can set
    // `x` to `top` to make the popper grow towards its top instead of
    // its bottom.
    var left = void 0,
        top = void 0;
    if (sideA === 'bottom') {
      // when offsetParent is <html> the positioning is relative to the bottom of the screen (excluding the scrollbar)
      // and not the bottom of the html element
      if (offsetParent.nodeName === 'HTML') {
        top = -offsetParent.clientHeight + offsets.bottom;
      } else {
        top = -offsetParentRect.height + offsets.bottom;
      }
    } else {
      top = offsets.top;
    }
    if (sideB === 'right') {
      if (offsetParent.nodeName === 'HTML') {
        left = -offsetParent.clientWidth + offsets.right;
      } else {
        left = -offsetParentRect.width + offsets.right;
      }
    } else {
      left = offsets.left;
    }
    if (gpuAcceleration && prefixedProperty) {
      styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0)';
      styles[sideA] = 0;
      styles[sideB] = 0;
      styles.willChange = 'transform';
    } else {
      // othwerise, we use the standard `top`, `left`, `bottom` and `right` properties
      var invertTop = sideA === 'bottom' ? -1 : 1;
      var invertLeft = sideB === 'right' ? -1 : 1;
      styles[sideA] = top * invertTop;
      styles[sideB] = left * invertLeft;
      styles.willChange = sideA + ', ' + sideB;
    }

    // Attributes
    var attributes = {
      'x-placement': data.placement
    };

    // Update `data` attributes, styles and arrowStyles
    data.attributes = this.extends({}, attributes, data.attributes);
    data.styles = this.extends({}, styles, data.styles);
    data.arrowStyles = this.extends({}, data.offsets.arrow, data.arrowStyles);

    return data;
  }

  /**
   * Helper used to know if the given modifier depends from another one.<br />
   * It checks if the needed modifier is listed and enabled.
   * @method
   * @memberof Popper.Utils
   * @param {Array} modifiers - list of modifiers
   * @param {String} requestingName - name of requesting modifier
   * @param {String} requestedName - name of requested modifier
   * @returns {Boolean}
   */
  function isModifierRequired(modifiers, requestingName, requestedName) {
    var requesting = find(modifiers, function (this.ref) {
      var name = this.ref.name;
      return name === requestingName;
    });

    var isRequired = !!requesting && modifiers.some(function (modifier) {
      return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
    });

    if (!isRequired) {
      var this.requesting = '`' + requestingName + '`';
      var requested = '`' + requestedName + '`';
      console.warn(requested + ' modifier is required by ' + this.requesting + ' modifier in order to work, be sure to include it before ' + this.requesting + '!');
    }
    return isRequired;
  }

  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by update method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */
  function arrow(data, options) {
    var this.data$offsets$arrow;

    // arrow depends on keepTogether in order to work
    if (!isModifierRequired(data.instance.modifiers, 'arrow', 'keepTogether')) {
      return data;
    }

    var arrowElement = options.element;

    // if arrowElement is a string, suppose it's a CSS selector
    if (typeof arrowElement === 'string') {
      arrowElement = data.instance.popper.querySelector(arrowElement);

      // if arrowElement is not found, don't run the modifier
      if (!arrowElement) {
        return data;
      }
    } else {
      // if the arrowElement isn't a query selector we must check that the
      // provided DOM node is child of its popper node
      if (!data.instance.popper.contains(arrowElement)) {
        console.warn('WARNING: `arrow.element` must be child of its popper element!');
        return data;
      }
    }

    var placement = data.placement.split('-')[0];
    var this.data$offsets = data.offsets,
        popper = this.data$offsets.popper,
        reference = this.data$offsets.reference;

    var isVertical = ['left', 'right'].indexOf(placement) !== -1;

    var len = isVertical ? 'height' : 'width';
    var sideCapitalized = isVertical ? 'Top' : 'Left';
    var side = sideCapitalized.toLowerCase();
    var altSide = isVertical ? 'left' : 'top';
    var opSide = isVertical ? 'bottom' : 'right';
    var arrowElementSize = getOuterSizes(arrowElement)[len];

    //
    // extends keepTogether behavior making sure the popper and its
    // reference have enough pixels in conjunction
    //

    // top/left side
    if (reference[opSide] - arrowElementSize < popper[side]) {
      data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowElementSize);
    }
    // bottom/right side
    if (reference[side] + arrowElementSize > popper[opSide]) {
      data.offsets.popper[side] += reference[side] + arrowElementSize - popper[opSide];
    }
    data.offsets.popper = getClientRect(data.offsets.popper);

    // compute center of the popper
    var center = reference[side] + reference[len] / 2 - arrowElementSize / 2;

    // Compute the sideValue using the updated popper offsets
    // take popper margin in account because we don't have this info available
    var css = getStyleComputedProperty(data.instance.popper);
    var popperMarginSide = parseFloat(css['margin' + sideCapitalized], 10);
    var popperBorderSide = parseFloat(css['border' + sideCapitalized + 'Width'], 10);
    var sideValue = center - data.offsets.popper[side] - popperMarginSide - popperBorderSide;

    // prevent arrowElement from being placed not contiguously to its popper
    sideValue = Math.max(Math.min(popper[len] - arrowElementSize, sideValue), 0);

    data.arrowElement = arrowElement;
    data.offsets.arrow = (this.data$offsets$arrow = {}, defineProperty(this.data$offsets$arrow, side, Math.round(sideValue)), defineProperty(this.data$offsets$arrow, altSide, ''), this.data$offsets$arrow);

    return data;
  }

  /**
   * Get the opposite placement variation of the given one
   * @method
   * @memberof Popper.Utils
   * @argument {String} placement variation
   * @returns {String} flipped placement variation
   */
  function getOppositeVariation(variation) {
    if (variation === 'end') {
      return 'start';
    } else if (variation === 'start') {
      return 'end';
    }
    return variation;
  }

  /**
   * List of accepted placements to use as values of the `placement` option.<br />
   * Valid placements are:
   * - `auto`
   * - `top`
   * - `right`
   * - `bottom`
   * - `left`
   *
   * Each placement can have a variation from this list:
   * - `-start`
   * - `-end`
   *
   * Variations are interpreted easily if you think of them as the left to right
   * written languages. Horizontally (`top` and `bottom`), `start` is left and `end`
   * is right.<br />
   * Vertically (`left` and `right`), `start` is top and `end` is bottom.
   *
   * Some valid examples are:
   * - `top-end` (on top of reference, right aligned)
   * - `right-start` (on right of reference, top aligned)
   * - `bottom` (on bottom, centered)
   * - `auto-end` (on the side with more space available, alignment depends by placement)
   *
   * @static
   * @type {Array}
   * @enum {String}
   * @readonly
   * @method placements
   * @memberof Popper
   */
  var placements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'];

  // Get rid of `auto` `auto-start` and `auto-end`
  var validPlacements = placements.slice(3);

  /**
   * Given an initial placement, returns all the subsequent placements
   * clockwise (or counter-clockwise).
   *
   * @method
   * @memberof Popper.Utils
   * @argument {String} placement - A valid placement (it accepts variations)
   * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
   * @returns {Array} placements including their variations
   */
  function clockwise(placement) {
    var counter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    var index = validPlacements.indexOf(placement);
    var arr = validPlacements.slice(index + 1).concat(validPlacements.slice(0, index));
    return counter ? arr.reverse() : arr;
  }

  var BEHAVIORS = {
    FLIP: 'flip',
    CLOCKWISE: 'clockwise',
    COUNTERCLOCKWISE: 'counterclockwise'
  };

  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by update method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */
  function flip(data, options) {
    // if `inner` modifier is enabled, we can't use the `flip` modifier
    if (isModifierEnabled(data.instance.modifiers, 'inner')) {
      return data;
    }

    if (data.flipped && data.placement === data.originalPlacement) {
      // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
      return data;
    }

    var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, options.boundariesElement, data.positionFixed);

    var placement = data.placement.split('-')[0];
    var placementOpposite = getOppositePlacement(placement);
    var variation = data.placement.split('-')[1] || '';

    var flipOrder = [];

    switch (options.behavior) {
      case BEHAVIORS.FLIP:
        flipOrder = [placement, placementOpposite];
        break;
      case BEHAVIORS.CLOCKWISE:
        flipOrder = clockwise(placement);
        break;
      case BEHAVIORS.COUNTERCLOCKWISE:
        flipOrder = clockwise(placement, true);
        break;
      default:
        flipOrder = options.behavior;
    }

    flipOrder.forEach(function (step, index) {
      if (placement !== step || flipOrder.length === index + 1) {
        return data;
      }

      placement = data.placement.split('-')[0];
      placementOpposite = getOppositePlacement(placement);

      var popperOffsets = data.offsets.popper;
      var refOffsets = data.offsets.reference;

      // using floor because the reference offsets may contain decimals we are not going to consider here
      var floor = Math.floor;
      var overlapsRef = placement === 'left' && floor(popperOffsets.right) > floor(refOffsets.left) || placement === 'right' && floor(popperOffsets.left) < floor(refOffsets.right) || placement === 'top' && floor(popperOffsets.bottom) > floor(refOffsets.top) || placement === 'bottom' && floor(popperOffsets.top) < floor(refOffsets.bottom);

      var overflowsLeft = floor(popperOffsets.left) < floor(boundaries.left);
      var overflowsRight = floor(popperOffsets.right) > floor(boundaries.right);
      var overflowsTop = floor(popperOffsets.top) < floor(boundaries.top);
      var overflowsBottom = floor(popperOffsets.bottom) > floor(boundaries.bottom);

      var overflowsBoundaries = placement === 'left' && overflowsLeft || placement === 'right' && overflowsRight || placement === 'top' && overflowsTop || placement === 'bottom' && overflowsBottom;

      // flip the variation if required
      var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
      var flippedVariation = !!options.flipVariations && (isVertical && variation === 'start' && overflowsLeft || isVertical && variation === 'end' && overflowsRight || !isVertical && variation === 'start' && overflowsTop || !isVertical && variation === 'end' && overflowsBottom);

      if (overlapsRef || overflowsBoundaries || flippedVariation) {
        // this boolean to detect any flip loop
        data.flipped = true;

        if (overlapsRef || overflowsBoundaries) {
          placement = flipOrder[index + 1];
        }

        if (flippedVariation) {
          variation = getOppositeVariation(variation);
        }

        data.placement = placement + (variation ? '-' + variation : '');

        // this object contains `position`, we want to preserve it along with
        // any additional property we may add in the future
        data.offsets.popper = this.extends({}, data.offsets.popper, getPopperOffsets(data.instance.popper, data.offsets.reference, data.placement));

        data = runModifiers(data.instance.modifiers, data, 'flip');
      }
    });
    return data;
  }

  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by update method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */
  function keepTogether(data) {
    var this.data$offsets = data.offsets,
        popper = this.data$offsets.popper,
        reference = this.data$offsets.reference;

    var placement = data.placement.split('-')[0];
    var floor = Math.floor;
    var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
    var side = isVertical ? 'right' : 'bottom';
    var opSide = isVertical ? 'left' : 'top';
    var measurement = isVertical ? 'width' : 'height';

    if (popper[side] < floor(reference[opSide])) {
      data.offsets.popper[opSide] = floor(reference[opSide]) - popper[measurement];
    }
    if (popper[opSide] > floor(reference[side])) {
      data.offsets.popper[opSide] = floor(reference[side]);
    }

    return data;
  }

  /**
   * Converts a string containing value + unit into a px value number
   * @function
   * @memberof {modifiers~offset}
   * @private
   * @argument {String} str - Value + unit string
   * @argument {String} measurement - `height` or `width`
   * @argument {Object} popperOffsets
   * @argument {Object} referenceOffsets
   * @returns {Number|String}
   * Value in pixels, or original string if no values were extracted
   */
  function toValue(str, measurement, popperOffsets, referenceOffsets) {
    // separate value from unit
    var split = str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
    var value = +split[1];
    var unit = split[2];

    // If it's not a number it's an operator, I guess
    if (!value) {
      return str;
    }

    if (unit.indexOf('%') === 0) {
      var element = void 0;
      switch (unit) {
        case '%p':
          element = popperOffsets;
          break;
        case '%':
        case '%r':
        default:
          element = referenceOffsets;
      }

      var rect = getClientRect(element);
      return rect[measurement] / 100 * value;
    } else if (unit === 'vh' || unit === 'vw') {
      // if is a vh or vw, we calculate the size based on the viewport
      var size = void 0;
      if (unit === 'vh') {
        size = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
      } else {
        size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
      }
      return size / 100 * value;
    } else {
      // if is an explicit pixel unit, we get rid of the unit and keep the value
      // if is an implicit unit, it's px, and we return just the value
      return value;
    }
  }

  /**
   * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
   * @function
   * @memberof {modifiers~offset}
   * @private
   * @argument {String} offset
   * @argument {Object} popperOffsets
   * @argument {Object} referenceOffsets
   * @argument {String} basePlacement
   * @returns {Array} a two cells array with x and y offsets in numbers
   */
  function parseOffset(offset, popperOffsets, referenceOffsets, basePlacement) {
    var offsets = [0, 0];

    // Use height if placement is left or right and index is 0 otherwise use width
    // in this way the first offset will use an axis and the second one
    // will use the other one
    var useHeight = ['right', 'left'].indexOf(basePlacement) !== -1;

    // Split the offset string to obtain a list of values and operands
    // The regex addresses values with the plus or minus sign in front (+10, -20, etc)
    var fragments = offset.split(/(\+|\-)/).map(function (frag) {
      return frag.trim();
    });

    // Detect if the offset string contains a pair of values or a single one
    // they could be separated by comma or space
    var divider = fragments.indexOf(find(fragments, function (frag) {
      return frag.search(/,|\s/) !== -1;
    }));

    if (fragments[divider] && fragments[divider].indexOf(',') === -1) {
      console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
    }

    // If divider is found, we divide the list of values and operands to divide
    // them by ofset X and Y.
    var splitRegex = /\s*,\s*|\s+/;
    var ops = divider !== -1 ? [fragments.slice(0, divider).concat([fragments[divider].split(splitRegex)[0]]), [fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider + 1))] : [fragments];

    // Convert the values with units to absolute pixels to allow our computations
    ops = ops.map(function (op, index) {
      // Most of the units rely on the orientation of the popper
      var measurement = (index === 1 ? !useHeight : useHeight) ? 'height' : 'width';
      var mergeWithPrevious = false;
      return op
      // This aggregates any `+` or `-` sign that aren't considered operators
      // e.g.: 10 + +5 => [10, +, +5]
      .reduce(function (a, b) {
        if (a[a.length - 1] === '' && ['+', '-'].indexOf(b) !== -1) {
          a[a.length - 1] = b;
          mergeWithPrevious = true;
          return a;
        } else if (mergeWithPrevious) {
          a[a.length - 1] += b;
          mergeWithPrevious = false;
          return a;
        } else {
          return a.concat(b);
        }
      }, [])
      // Here we convert the string values into number values (in px)
      .map(function (str) {
        return toValue(str, measurement, popperOffsets, referenceOffsets);
      });
    });

    // Loop trough the offsets arrays and execute the operations
    ops.forEach(function (op, index) {
      op.forEach(function (frag, index2) {
        if (isNumeric(frag)) {
          offsets[index] += frag * (op[index2 - 1] === '-' ? -1 : 1);
        }
      });
    });
    return offsets;
  }

  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by update method
   * @argument {Object} options - Modifiers configuration and options
   * @argument {Number|String} options.offset=0
   * The offset value as described in the modifier description
   * @returns {Object} The data object, properly modified
   */
  function offset(data, this.ref) {
    var offset = this.ref.offset;
    var placement = data.placement,
        this.data$offsets = data.offsets,
        popper = this.data$offsets.popper,
        reference = this.data$offsets.reference;

    var basePlacement = placement.split('-')[0];

    var offsets = void 0;
    if (isNumeric(+offset)) {
      offsets = [+offset, 0];
    } else {
      offsets = parseOffset(offset, popper, reference, basePlacement);
    }

    if (basePlacement === 'left') {
      popper.top += offsets[0];
      popper.left -= offsets[1];
    } else if (basePlacement === 'right') {
      popper.top += offsets[0];
      popper.left += offsets[1];
    } else if (basePlacement === 'top') {
      popper.left += offsets[0];
      popper.top -= offsets[1];
    } else if (basePlacement === 'bottom') {
      popper.left += offsets[0];
      popper.top += offsets[1];
    }

    data.popper = popper;
    return data;
  }

  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by `update` method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */
  function preventOverflow(data, options) {
    var boundariesElement = options.boundariesElement || getOffsetParent(data.instance.popper);

    // If offsetParent is the reference element, we really want to
    // go one step up and use the next offsetParent as reference to
    // avoid to make this modifier completely useless and look like broken
    if (data.instance.reference === boundariesElement) {
      boundariesElement = getOffsetParent(boundariesElement);
    }

    // NOTE: DOM access here
    // resets the popper's position so that the document size can be calculated excluding
    // the size of the popper element itself
    var transformProp = getSupportedPropertyName('transform');
    var popperStyles = data.instance.popper.style; // assignment to help minification
    var top = popperStyles.top,
        left = popperStyles.left,
        transform = popperStyles[transformProp];

    popperStyles.top = '';
    popperStyles.left = '';
    popperStyles[transformProp] = '';

    var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, boundariesElement, data.positionFixed);

    // NOTE: DOM access here
    // restores the original style properties after the offsets have been computed
    popperStyles.top = top;
    popperStyles.left = left;
    popperStyles[transformProp] = transform;

    options.boundaries = boundaries;

    var order = options.priority;
    var popper = data.offsets.popper;

    var check = {
      primary: function primary(placement) {
        var value = popper[placement];
        if (popper[placement] < boundaries[placement] && !options.escapeWithReference) {
          value = Math.max(popper[placement], boundaries[placement]);
        }
        return defineProperty({}, placement, value);
      },
      secondary: function secondary(placement) {
        var mainSide = placement === 'right' ? 'left' : 'top';
        var value = popper[mainSide];
        if (popper[placement] > boundaries[placement] && !options.escapeWithReference) {
          value = Math.min(popper[mainSide], boundaries[placement] - (placement === 'right' ? popper.width : popper.height));
        }
        return defineProperty({}, mainSide, value);
      }
    };

    order.forEach(function (placement) {
      var side = ['left', 'top'].indexOf(placement) !== -1 ? 'primary' : 'secondary';
      popper = this.extends({}, popper, check[side](placement));
    });

    data.offsets.popper = popper;

    return data;
  }

  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by `update` method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */
  function shift(data) {
    var placement = data.placement;
    var basePlacement = placement.split('-')[0];
    var shiftvariation = placement.split('-')[1];

    // if shift shiftvariation is specified, run the modifier
    if (shiftvariation) {
      var this.data$offsets = data.offsets,
          reference = this.data$offsets.reference,
          popper = this.data$offsets.popper;

      var isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
      var side = isVertical ? 'left' : 'top';
      var measurement = isVertical ? 'width' : 'height';

      var shiftOffsets = {
        start: defineProperty({}, side, reference[side]),
        end: defineProperty({}, side, reference[side] + reference[measurement] - popper[measurement])
      };

      data.offsets.popper = this.extends({}, popper, shiftOffsets[shiftvariation]);
    }

    return data;
  }

  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by update method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */
  function hide(data) {
    if (!isModifierRequired(data.instance.modifiers, 'hide', 'preventOverflow')) {
      return data;
    }

    var refRect = data.offsets.reference;
    var bound = find(data.instance.modifiers, function (modifier) {
      return modifier.name === 'preventOverflow';
    }).boundaries;

    if (refRect.bottom < bound.top || refRect.left > bound.right || refRect.top > bound.bottom || refRect.right < bound.left) {
      // Avoid unnecessary DOM access if visibility hasn't changed
      if (data.hide === true) {
        return data;
      }

      data.hide = true;
      data.attributes['x-out-of-boundaries'] = '';
    } else {
      // Avoid unnecessary DOM access if visibility hasn't changed
      if (data.hide === false) {
        return data;
      }

      data.hide = false;
      data.attributes['x-out-of-boundaries'] = false;
    }

    return data;
  }

  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by `update` method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */
  function inner(data) {
    var placement = data.placement;
    var basePlacement = placement.split('-')[0];
    var this.data$offsets = data.offsets,
        popper = this.data$offsets.popper,
        reference = this.data$offsets.reference;

    var isHoriz = ['left', 'right'].indexOf(basePlacement) !== -1;

    var subtractLength = ['top', 'left'].indexOf(basePlacement) === -1;

    popper[isHoriz ? 'left' : 'top'] = reference[basePlacement] - (subtractLength ? popper[isHoriz ? 'width' : 'height'] : 0);

    data.placement = getOppositePlacement(placement);
    data.offsets.popper = getClientRect(popper);

    return data;
  }

  /**
   * Modifier function, each modifier can have a function of this type assigned
   * to its `fn` property.<br />
   * These functions will be called on each update, this means that you must
   * make sure they are performant enough to avoid performance bottlenecks.
   *
   * @function ModifierFn
   * @argument {dataObject} data - The data object generated by `update` method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {dataObject} The data object, properly modified
   */

  /**
   * Modifiers are plugins used to alter the behavior of your poppers.<br />
   * Popper.js uses a set of 9 modifiers to provide all the basic functionalities
   * needed by the library.
   *
   * Usually you don't want to override the `order`, `fn` and `onLoad` props.
   * All the other properties are configurations that could be tweaked.
   * @namespace modifiers
   */
  var modifiers = {
    /**
     * Modifier used to shift the popper on the start or end of its reference
     * element.<br />
     * It will read the variation of the `placement` property.<br />
     * It can be one either `-end` or `-start`.
     * @memberof modifiers
     * @inner
     */
    shift: {
      /** @prop {number} order=100 - Index used to define the order of execution */
      order: 100,
      /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
      enabled: true,
      /** @prop {ModifierFn} */
      fn: shift
    },

    /**
     * The `offset` modifier can shift your popper on both its axis.
     *
     * It accepts the following units:
     * - `px` or unit-less, interpreted as pixels
     * - `%` or `%r`, percentage relative to the length of the reference element
     * - `%p`, percentage relative to the length of the popper element
     * - `vw`, CSS viewport width unit
     * - `vh`, CSS viewport height unit
     *
     * For length is intended the main axis relative to the placement of the popper.<br />
     * This means that if the placement is `top` or `bottom`, the length will be the
     * `width`. In case of `left` or `right`, it will be the `height`.
     *
     * You can provide a single value (as `Number` or `String`), or a pair of values
     * as `String` divided by a comma or one (or more) white spaces.<br />
     * The latter is a deprecated method because it leads to confusion and will be
     * removed in v2.<br />
     * Additionally, it accepts additions and subtractions between different units.
     * Note that multiplications and divisions aren't supported.
     *
     * Valid examples are:
     * ```
     * 10
     * '10%'
     * '10, 10'
     * '10%, 10'
     * '10 + 10%'
     * '10 - 5vh + 3%'
     * '-10px + 5vh, 5px - 6%'
     * ```
     * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
     * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
     * > You can read more on this at this [issue](https://github.com/FezVrasta/popper.js/issues/373).
     *
     * @memberof modifiers
     * @inner
     */
    offset: {
      /** @prop {number} order=200 - Index used to define the order of execution */
      order: 200,
      /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
      enabled: true,
      /** @prop {ModifierFn} */
      fn: offset,
      /** @prop {Number|String} offset=0
       * The offset value as described in the modifier description
       */
      offset: 0
    },

    /**
     * Modifier used to prevent the popper from being positioned outside the boundary.
     *
     * A scenario exists where the reference itself is not within the boundaries.<br />
     * We can say it has "escaped the boundaries" — or just "escaped".<br />
     * In this case we need to decide whether the popper should either:
     *
     * - detach from the reference and remain "trapped" in the boundaries, or
     * - if it should ignore the boundary and "escape with its reference"
     *
     * When `escapeWithReference` is set to`true` and reference is completely
     * outside its boundaries, the popper will overflow (or completely leave)
     * the boundaries in order to remain attached to the edge of the reference.
     *
     * @memberof modifiers
     * @inner
     */
    preventOverflow: {
      /** @prop {number} order=300 - Index used to define the order of execution */
      order: 300,
      /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
      enabled: true,
      /** @prop {ModifierFn} */
      fn: preventOverflow,
      /**
       * @prop {Array} [priority=['left','right','top','bottom']]
       * Popper will try to prevent overflow following these priorities by default,
       * then, it could overflow on the left and on top of the `boundariesElement`
       */
      priority: ['left', 'right', 'top', 'bottom'],
      /**
       * @prop {number} padding=5
       * Amount of pixel used to define a minimum distance between the boundaries
       * and the popper. This makes sure the popper always has a little padding
       * between the edges of its container
       */
      padding: 5,
      /**
       * @prop {String|HTMLElement} boundariesElement='scrollParent'
       * Boundaries used by the modifier. Can be `scrollParent`, `window`,
       * `viewport` or any DOM element.
       */
      boundariesElement: 'scrollParent'
    },

    /**
     * Modifier used to make sure the reference and its popper stay near each other
     * without leaving any gap between the two. Especially useful when the arrow is
     * enabled and you want to ensure that it points to its reference element.
     * It cares only about the first axis. You can still have poppers with margin
     * between the popper and its reference element.
     * @memberof modifiers
     * @inner
     */
    keepTogether: {
      /** @prop {number} order=400 - Index used to define the order of execution */
      order: 400,
      /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
      enabled: true,
      /** @prop {ModifierFn} */
      fn: keepTogether
    },

    /**
     * This modifier is used to move the `arrowElement` of the popper to make
     * sure it is positioned between the reference element and its popper element.
     * It will read the outer size of the `arrowElement` node to detect how many
     * pixels of conjunction are needed.
     *
     * It has no effect if no `arrowElement` is provided.
     * @memberof modifiers
     * @inner
     */
    arrow: {
      /** @prop {number} order=500 - Index used to define the order of execution */
      order: 500,
      /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
      enabled: true,
      /** @prop {ModifierFn} */
      fn: arrow,
      /** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */
      element: '[x-arrow]'
    },

    /**
     * Modifier used to flip the popper's placement when it starts to overlap its
     * reference element.
     *
     * Requires the `preventOverflow` modifier before it in order to work.
     *
     * **NOTE:** this modifier will interrupt the current update cycle and will
     * restart it if it detects the need to flip the placement.
     * @memberof modifiers
     * @inner
     */
    flip: {
      /** @prop {number} order=600 - Index used to define the order of execution */
      order: 600,
      /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
      enabled: true,
      /** @prop {ModifierFn} */
      fn: flip,
      /**
       * @prop {String|Array} behavior='flip'
       * The behavior used to change the popper's placement. It can be one of
       * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
       * placements (with optional variations)
       */
      behavior: 'flip',
      /**
       * @prop {number} padding=5
       * The popper will flip if it hits the edges of the `boundariesElement`
       */
      padding: 5,
      /**
       * @prop {String|HTMLElement} boundariesElement='viewport'
       * The element which will define the boundaries of the popper position.
       * The popper will never be placed outside of the defined boundaries
       * (except if `keepTogether` is enabled)
       */
      boundariesElement: 'viewport'
    },

    /**
     * Modifier used to make the popper flow toward the inner of the reference element.
     * By default, when this modifier is disabled, the popper will be placed outside
     * the reference element.
     * @memberof modifiers
     * @inner
     */
    inner: {
      /** @prop {number} order=700 - Index used to define the order of execution */
      order: 700,
      /** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */
      enabled: false,
      /** @prop {ModifierFn} */
      fn: inner
    },

    /**
     * Modifier used to hide the popper when its reference element is outside of the
     * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
     * be used to hide with a CSS selector the popper when its reference is
     * out of boundaries.
     *
     * Requires the `preventOverflow` modifier before it in order to work.
     * @memberof modifiers
     * @inner
     */
    hide: {
      /** @prop {number} order=800 - Index used to define the order of execution */
      order: 800,
      /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
      enabled: true,
      /** @prop {ModifierFn} */
      fn: hide
    },

    /**
     * Computes the style that will be applied to the popper element to gets
     * properly positioned.
     *
     * Note that this modifier will not touch the DOM, it just prepares the styles
     * so that `applyStyle` modifier can apply it. This separation is useful
     * in case you need to replace `applyStyle` with a custom implementation.
     *
     * This modifier has `850` as `order` value to maintain backward compatibility
     * with previous versions of Popper.js. Expect the modifiers ordering method
     * to change in future major versions of the library.
     *
     * @memberof modifiers
     * @inner
     */
    computeStyle: {
      /** @prop {number} order=850 - Index used to define the order of execution */
      order: 850,
      /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
      enabled: true,
      /** @prop {ModifierFn} */
      fn: computeStyle,
      /**
       * @prop {Boolean} gpuAcceleration=true
       * If true, it uses the CSS 3D transformation to position the popper.
       * Otherwise, it will use the `top` and `left` properties
       */
      gpuAcceleration: true,
      /**
       * @prop {string} [x='bottom']
       * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
       * Change this if your popper should grow in a direction different from `bottom`
       */
      x: 'bottom',
      /**
       * @prop {string} [x='left']
       * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
       * Change this if your popper should grow in a direction different from `right`
       */
      y: 'right'
    },

    /**
     * Applies the computed styles to the popper element.
     *
     * All the DOM manipulations are limited to this modifier. This is useful in case
     * you want to integrate Popper.js inside a framework or view library and you
     * want to delegate all the DOM manipulations to it.
     *
     * Note that if you disable this modifier, you must make sure the popper element
     * has its position set to `absolute` before Popper.js can do its work!
     *
     * Just disable this modifier and define your own to achieve the desired effect.
     *
     * @memberof modifiers
     * @inner
     */
    applyStyle: {
      /** @prop {number} order=900 - Index used to define the order of execution */
      order: 900,
      /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
      enabled: true,
      /** @prop {ModifierFn} */
      fn: applyStyle,
      /** @prop {Function} */
      onLoad: applyStyleOnLoad,
      /**
       * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
       * @prop {Boolean} gpuAcceleration=true
       * If true, it uses the CSS 3D transformation to position the popper.
       * Otherwise, it will use the `top` and `left` properties
       */
      gpuAcceleration: undefined
    }
  };

  /**
   * The `dataObject` is an object containing all the information used by Popper.js.
   * This object is passed to modifiers and to the `onCreate` and `onUpdate` callbacks.
   * @name dataObject
   * @property {Object} data.instance The Popper.js instance
   * @property {String} data.placement Placement applied to popper
   * @property {String} data.originalPlacement Placement originally defined on init
   * @property {Boolean} data.flipped True if popper has been flipped by flip modifier
   * @property {Boolean} data.hide True if the reference element is out of boundaries, useful to know when to hide the popper
   * @property {HTMLElement} data.arrowElement Node used as arrow by arrow modifier
   * @property {Object} data.styles Any CSS property defined here will be applied to the popper. It expects the JavaScript nomenclature (eg. `marginBottom`)
   * @property {Object} data.arrowStyles Any CSS property defined here will be applied to the popper arrow. It expects the JavaScript nomenclature (eg. `marginBottom`)
   * @property {Object} data.boundaries Offsets of the popper boundaries
   * @property {Object} data.offsets The measurements of popper, reference and arrow elements
   * @property {Object} data.offsets.popper `top`, `left`, `width`, `height` values
   * @property {Object} data.offsets.reference `top`, `left`, `width`, `height` values
   * @property {Object} data.offsets.arrow] `top` and `left` offsets, only one of them will be different from 0
   */

  /**
   * Default options provided to Popper.js constructor.<br />
   * These can be overridden using the `options` argument of Popper.js.<br />
   * To override an option, simply pass an object with the same
   * structure of the `options` object, as the 3rd argument. For example:
   * ```
   * new Popper(ref, pop, {
   *   modifiers: {
   *     preventOverflow: { enabled: false }
   *   }
   * })
   * ```
   * @type {Object}
   * @static
   * @memberof Popper
   */
  var Defaults = {
    /**
     * Popper's placement.
     * @prop {Popper.placements} placement='bottom'
     */
    placement: 'bottom',

    /**
     * Set this to true if you want popper to position it self in 'fixed' mode
     * @prop {Boolean} positionFixed=false
     */
    positionFixed: false,

    /**
     * Whether events (resize, scroll) are initially enabled.
     * @prop {Boolean} eventsEnabled=true
     */
    eventsEnabled: true,

    /**
     * Set to true if you want to automatically remove the popper when
     * you call the `destroy` method.
     * @prop {Boolean} removeOnDestroy=false
     */
    removeOnDestroy: false,

    /**
     * Callback called when the popper is created.<br />
     * By default, it is set to no-op.<br />
     * Access Popper.js instance with `data.instance`.
     * @prop {onCreate}
     */
    onCreate: function onCreate() {},

    /**
     * Callback called when the popper is updated. This callback is not called
     * on the initialization/creation of the popper, but only on subsequent
     * updates.<br />
     * By default, it is set to no-op.<br />
     * Access Popper.js instance with `data.instance`.
     * @prop {onUpdate}
     */
    onUpdate: function onUpdate() {},

    /**
     * List of modifiers used to modify the offsets before they are applied to the popper.
     * They provide most of the functionalities of Popper.js.
     * @prop {modifiers}
     */
    modifiers: modifiers
  };

  /**
   * @callback onCreate
   * @param {dataObject} data
   */

  /**
   * @callback onUpdate
   * @param {dataObject} data
   */

  // Utils
  // Methods
  var Popper = function () {
    /**
     * Creates a new Popper.js instance.
     * @class Popper
     * @param {HTMLElement|referenceObject} reference - The reference element used to position the popper
     * @param {HTMLElement} popper - The HTML element used as the popper
     * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
     * @return {Object} instance - The generated Popper.js instance
     */
    function Popper(reference, popper) {
      var this.this = this;

      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      classCallCheck(this, Popper);

      this.scheduleUpdate = function () {
        return requestAnimationFrame(this.this.update);
      };

      // make update() debounced, so that it only runs at most once-per-tick
      this.update = debounce(this.update.bind(this));

      // with {} we create a new object with the options inside it
      this.options = this.extends({}, Popper.Defaults, options);

      // init state
      this.state = {
        isDestroyed: false,
        isCreated: false,
        scrollParents: []
      };

      // get reference and popper elements (allow jQuery wrappers)
      this.reference = reference && reference.jquery ? reference[0] : reference;
      this.popper = popper && popper.jquery ? popper[0] : popper;

      // Deep merge modifiers options
      this.options.modifiers = {};
      Object.keys(this.extends({}, Popper.Defaults.modifiers, options.modifiers)).forEach(function (name) {
        this.this.options.modifiers[name] = this.extends({}, Popper.Defaults.modifiers[name] || {}, options.modifiers ? options.modifiers[name] : {});
      });

      // Refactoring modifiers' list (Object => Array)
      this.modifiers = Object.keys(this.options.modifiers).map(function (name) {
        return this.extends({
          name: name
        }, this.this.options.modifiers[name]);
      })
      // sort the modifiers by order
      .sort(function (a, b) {
        return a.order - b.order;
      });

      // modifiers have the ability to execute arbitrary code when Popper.js get inited
      // such code is executed in the same order of its modifier
      // they could add new properties to their options configuration
      // BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!
      this.modifiers.forEach(function (modifierOptions) {
        if (modifierOptions.enabled && isFunction(modifierOptions.onLoad)) {
          modifierOptions.onLoad(this.this.reference, this.this.popper, this.this.options, modifierOptions, this.this.state);
        }
      });

      // fire the first update to position the popper in the right place
      this.update();

      var eventsEnabled = this.options.eventsEnabled;
      if (eventsEnabled) {
        // setup event listeners, they will take care of update the position in specific situations
        this.enableEventListeners();
      }

      this.state.eventsEnabled = eventsEnabled;
    }

    // We can't use class properties because they don't get listed in the
    // class prototype and break stuff like Sinon stubs


    createClass(Popper, [{
      key: 'update',
      value: function update$$1() {
        return update.call(this);
      }
    }, {
      key: 'destroy',
      value: function destroy$$1() {
        return destroy.call(this);
      }
    }, {
      key: 'enableEventListeners',
      value: function enableEventListeners$$1() {
        return enableEventListeners.call(this);
      }
    }, {
      key: 'disableEventListeners',
      value: function disableEventListeners$$1() {
        return disableEventListeners.call(this);
      }

      /**
       * Schedules an update. It will run on the next UI update available.
       * @method scheduleUpdate
       * @memberof Popper
       */


      /**
       * Collection of utilities useful when writing custom modifiers.
       * Starting from version 1.7, this method is available only if you
       * include `popper-utils.js` before `popper.js`.
       *
       * **DEPRECATION**: This way to access PopperUtils is deprecated
       * and will be removed in v2! Use the PopperUtils module directly instead.
       * Due to the high instability of the methods contained in Utils, we can't
       * guarantee them to follow semver. Use them at your own risk!
       * @static
       * @private
       * @type {Object}
       * @deprecated since version 1.8
       * @member Utils
       * @memberof Popper
       */

    }]);
    return Popper;
  }();

  /**
   * The `referenceObject` is an object that provides an interface compatible with Popper.js
   * and lets you use it as replacement of a real DOM node.<br />
   * You can use this method to position a popper relatively to a set of coordinates
   * in case you don't have a DOM node to use as reference.
   *
   * ```
   * new Popper(referenceObject, popperNode);
   * ```
   *
   * NB: This feature isn't supported in Internet Explorer 10.
   * @name referenceObject
   * @property {Function} data.getBoundingClientRect
   * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
   * @property {number} data.clientWidth
   * An ES6 getter that will return the width of the virtual reference element.
   * @property {number} data.clientHeight
   * An ES6 getter that will return the height of the virtual reference element.
   */


  Popper.Utils = (typeof window !== 'undefined' ? window : global).PopperUtils;
  Popper.placements = placements;
  Popper.Defaults = Defaults;

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$4 = 'dropdown';
  var VERSION$4 = '4.3.1';
  var DATAthis.KEY$4 = 'bs.dropdown';
  var EVENTthis.KEY$4 = "." + DATAthis.KEY$4;
  var DATAthis.APIthis.KEY$4 = '.data-api';
  var JQUERYthis.NOthis.CONFLICT$4 = $.fn[NAME$4];
  var ESCAPEthis.KEYCODE = 27; // KeyboardEvent.which value for Escape (Esc) key

  var SPACEthis.KEYCODE = 32; // KeyboardEvent.which value for space key

  var TABthis.KEYCODE = 9; // KeyboardEvent.which value for tab key

  var ARROWthis.UPthis.KEYCODE = 38; // KeyboardEvent.which value for up arrow key

  var ARROWthis.DOWNthis.KEYCODE = 40; // KeyboardEvent.which value for down arrow key

  var RIGHTthis.MOUSEthis.BUTTONthis.WHICH = 3; // MouseEvent.which value for the right button (assuming a right-handed mouse)

  var REGEXPthis.KEYDOWN = new RegExp(ARROWthis.UPthis.KEYCODE + "|" + ARROWthis.DOWNthis.KEYCODE + "|" + ESCAPEthis.KEYCODE);
  var Event$4 = {
    HIDE: "hide" + EVENTthis.KEY$4,
    HIDDEN: "hidden" + EVENTthis.KEY$4,
    SHOW: "show" + EVENTthis.KEY$4,
    SHOWN: "shown" + EVENTthis.KEY$4,
    CLICK: "click" + EVENTthis.KEY$4,
    CLICKthis.DATAthis.API: "click" + EVENTthis.KEY$4 + DATAthis.APIthis.KEY$4,
    KEYDOWNthis.DATAthis.API: "keydown" + EVENTthis.KEY$4 + DATAthis.APIthis.KEY$4,
    KEYUPthis.DATAthis.API: "keyup" + EVENTthis.KEY$4 + DATAthis.APIthis.KEY$4
  };
  var ClassName$4 = {
    DISABLED: 'disabled',
    SHOW: 'show',
    DROPUP: 'dropup',
    DROPRIGHT: 'dropright',
    DROPLEFT: 'dropleft',
    MENURIGHT: 'dropdown-menu-right',
    MENULEFT: 'dropdown-menu-left',
    POSITIONthis.STATIC: 'position-static'
  };
  var Selector$4 = {
    DATAthis.TOGGLE: '[data-toggle="dropdown"]',
    FORMthis.CHILD: '.dropdown form',
    MENU: '.dropdown-menu',
    NAVBARthis.NAV: '.navbar-nav',
    VISIBLEthis.ITEMS: '.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)'
  };
  var AttachmentMap = {
    TOP: 'top-start',
    TOPEND: 'top-end',
    BOTTOM: 'bottom-start',
    BOTTOMEND: 'bottom-end',
    RIGHT: 'right-start',
    RIGHTEND: 'right-end',
    LEFT: 'left-start',
    LEFTEND: 'left-end'
  };
  var Default$2 = {
    offset: 0,
    flip: true,
    boundary: 'scrollParent',
    reference: 'toggle',
    display: 'dynamic'
  };
  var DefaultType$2 = {
    offset: '(number|string|function)',
    flip: 'boolean',
    boundary: '(string|element)',
    reference: '(string|element)',
    display: 'string'
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

  };

  var Dropdown =
  /*#this.this.PUREthis.this.*/
  function () {
    function Dropdown(element, config) {
      this.this.element = element;
      this.this.popper = null;
      this.this.config = this.this.getConfig(config);
      this.this.menu = this.this.getMenuElement();
      this.this.inNavbar = this.this.detectNavbar();

      this.this.addEventListeners();
    } // Getters


    var this.proto = Dropdown.prototype;

    // Public
    this.proto.toggle = function toggle() {
      if (this.this.element.disabled || $(this.this.element).hasClass(ClassName$4.DISABLED)) {
        return;
      }

      var parent = Dropdown.this.getParentFromElement(this.this.element);

      var isActive = $(this.this.menu).hasClass(ClassName$4.SHOW);

      Dropdown.this.clearMenus();

      if (isActive) {
        return;
      }

      var relatedTarget = {
        relatedTarget: this.this.element
      };
      var showEvent = $.Event(Event$4.SHOW, relatedTarget);
      $(parent).trigger(showEvent);

      if (showEvent.isDefaultPrevented()) {
        return;
      } // Disable totally Popper.js for Dropdown in Navbar


      if (!this.this.inNavbar) {
        /**
         * Check for Popper dependency
         * Popper - https://popper.js.org
         */
        if (typeof Popper === 'undefined') {
          throw new TypeError('Bootstrap\'s dropdowns require Popper.js (https://popper.js.org/)');
        }

        var referenceElement = this.this.element;

        if (this.this.config.reference === 'parent') {
          referenceElement = parent;
        } else if (Util.isElement(this.this.config.reference)) {
          referenceElement = this.this.config.reference; // Check if it's jQuery element

          if (typeof this.this.config.reference.jquery !== 'undefined') {
            referenceElement = this.this.config.reference[0];
          }
        } // If boundary is not `scrollParent`, then set position to `static`
        // to allow the menu to "escape" the scroll parent's boundaries
        // https://github.com/twbs/bootstrap/issues/24251


        if (this.this.config.boundary !== 'scrollParent') {
          $(parent).addClass(ClassName$4.POSITIONthis.STATIC);
        }

        this.this.popper = new Popper(referenceElement, this.this.menu, this.this.getPopperConfig());
      } // If this is a touch-enabled device we add extra
      // empty mouseover listeners to the body's immediate children;
      // only needed because of broken event delegation on iOS
      // https://www.quirksmode.org/blog/archives/2014/02/mousethis.eventthis.bub.html


      if ('ontouchstart' in document.documentElement && $(parent).closest(Selector$4.NAVBARthis.NAV).length === 0) {
        $(document.body).children().on('mouseover', null, $.noop);
      }

      this.this.element.focus();

      this.this.element.setAttribute('aria-expanded', true);

      $(this.this.menu).toggleClass(ClassName$4.SHOW);
      $(parent).toggleClass(ClassName$4.SHOW).trigger($.Event(Event$4.SHOWN, relatedTarget));
    };

    this.proto.show = function show() {
      if (this.this.element.disabled || $(this.this.element).hasClass(ClassName$4.DISABLED) || $(this.this.menu).hasClass(ClassName$4.SHOW)) {
        return;
      }

      var relatedTarget = {
        relatedTarget: this.this.element
      };
      var showEvent = $.Event(Event$4.SHOW, relatedTarget);

      var parent = Dropdown.this.getParentFromElement(this.this.element);

      $(parent).trigger(showEvent);

      if (showEvent.isDefaultPrevented()) {
        return;
      }

      $(this.this.menu).toggleClass(ClassName$4.SHOW);
      $(parent).toggleClass(ClassName$4.SHOW).trigger($.Event(Event$4.SHOWN, relatedTarget));
    };

    this.proto.hide = function hide() {
      if (this.this.element.disabled || $(this.this.element).hasClass(ClassName$4.DISABLED) || !$(this.this.menu).hasClass(ClassName$4.SHOW)) {
        return;
      }

      var relatedTarget = {
        relatedTarget: this.this.element
      };
      var hideEvent = $.Event(Event$4.HIDE, relatedTarget);

      var parent = Dropdown.this.getParentFromElement(this.this.element);

      $(parent).trigger(hideEvent);

      if (hideEvent.isDefaultPrevented()) {
        return;
      }

      $(this.this.menu).toggleClass(ClassName$4.SHOW);
      $(parent).toggleClass(ClassName$4.SHOW).trigger($.Event(Event$4.HIDDEN, relatedTarget));
    };

    this.proto.dispose = function dispose() {
      $.removeData(this.this.element, DATAthis.KEY$4);
      $(this.this.element).off(EVENTthis.KEY$4);
      this.this.element = null;
      this.this.menu = null;

      if (this.this.popper !== null) {
        this.this.popper.destroy();

        this.this.popper = null;
      }
    };

    this.proto.update = function update() {
      this.this.inNavbar = this.this.detectNavbar();

      if (this.this.popper !== null) {
        this.this.popper.scheduleUpdate();
      }
    } // Private
    ;

    this.proto.this.addEventListeners = function this.addEventListeners() {
      var this.this = this;

      $(this.this.element).on(Event$4.CLICK, function (event) {
        event.preventDefault();
        event.stopPropagation();

        this.this.toggle();
      });
    };

    this.proto.this.getConfig = function this.getConfig(config) {
      config = this.objectSpread({}, this.constructor.Default, $(this.this.element).data(), config);
      Util.typeCheckConfig(NAME$4, config, this.constructor.DefaultType);
      return config;
    };

    this.proto.this.getMenuElement = function this.getMenuElement() {
      if (!this.this.menu) {
        var parent = Dropdown.this.getParentFromElement(this.this.element);

        if (parent) {
          this.this.menu = parent.querySelector(Selector$4.MENU);
        }
      }

      return this.this.menu;
    };

    this.proto.this.getPlacement = function this.getPlacement() {
      var $parentDropdown = $(this.this.element.parentNode);
      var placement = AttachmentMap.BOTTOM; // Handle dropup

      if ($parentDropdown.hasClass(ClassName$4.DROPUP)) {
        placement = AttachmentMap.TOP;

        if ($(this.this.menu).hasClass(ClassName$4.MENURIGHT)) {
          placement = AttachmentMap.TOPEND;
        }
      } else if ($parentDropdown.hasClass(ClassName$4.DROPRIGHT)) {
        placement = AttachmentMap.RIGHT;
      } else if ($parentDropdown.hasClass(ClassName$4.DROPLEFT)) {
        placement = AttachmentMap.LEFT;
      } else if ($(this.this.menu).hasClass(ClassName$4.MENURIGHT)) {
        placement = AttachmentMap.BOTTOMEND;
      }

      return placement;
    };

    this.proto.this.detectNavbar = function this.detectNavbar() {
      return $(this.this.element).closest('.navbar').length > 0;
    };

    this.proto.this.getOffset = function this.getOffset() {
      var this.this2 = this;

      var offset = {};

      if (typeof this.this.config.offset === 'function') {
        offset.fn = function (data) {
          data.offsets = this.objectSpread({}, data.offsets, this.this2.this.config.offset(data.offsets, this.this2.this.element) || {});
          return data;
        };
      } else {
        offset.offset = this.this.config.offset;
      }

      return offset;
    };

    this.proto.this.getPopperConfig = function this.getPopperConfig() {
      var popperConfig = {
        placement: this.this.getPlacement(),
        modifiers: {
          offset: this.this.getOffset(),
          flip: {
            enabled: this.this.config.flip
          },
          preventOverflow: {
            boundariesElement: this.this.config.boundary
          }
        } // Disable Popper.js if we have a static display

      };

      if (this.this.config.display === 'static') {
        popperConfig.modifiers.applyStyle = {
          enabled: false
        };
      }

      return popperConfig;
    } // Static
    ;

    Dropdown.this.jQueryInterface = function this.jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATAthis.KEY$4);

        var this.config = typeof config === 'object' ? config : null;

        if (!data) {
          data = new Dropdown(this, this.config);
          $(this).data(DATAthis.KEY$4, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    Dropdown.this.clearMenus = function this.clearMenus(event) {
      if (event && (event.which === RIGHTthis.MOUSEthis.BUTTONthis.WHICH || event.type === 'keyup' && event.which !== TABthis.KEYCODE)) {
        return;
      }

      var toggles = [].slice.call(document.querySelectorAll(Selector$4.DATAthis.TOGGLE));

      for (var i = 0, len = toggles.length; i < len; i++) {
        var parent = Dropdown.this.getParentFromElement(toggles[i]);

        var context = $(toggles[i]).data(DATAthis.KEY$4);
        var relatedTarget = {
          relatedTarget: toggles[i]
        };

        if (event && event.type === 'click') {
          relatedTarget.clickEvent = event;
        }

        if (!context) {
          continue;
        }

        var dropdownMenu = context.this.menu;

        if (!$(parent).hasClass(ClassName$4.SHOW)) {
          continue;
        }

        if (event && (event.type === 'click' && /input|textarea/i.test(event.target.tagName) || event.type === 'keyup' && event.which === TABthis.KEYCODE) && $.contains(parent, event.target)) {
          continue;
        }

        var hideEvent = $.Event(Event$4.HIDE, relatedTarget);
        $(parent).trigger(hideEvent);

        if (hideEvent.isDefaultPrevented()) {
          continue;
        } // If this is a touch-enabled device we remove the extra
        // empty mouseover listeners we added for iOS support


        if ('ontouchstart' in document.documentElement) {
          $(document.body).children().off('mouseover', null, $.noop);
        }

        toggles[i].setAttribute('aria-expanded', 'false');
        $(dropdownMenu).removeClass(ClassName$4.SHOW);
        $(parent).removeClass(ClassName$4.SHOW).trigger($.Event(Event$4.HIDDEN, relatedTarget));
      }
    };

    Dropdown.this.getParentFromElement = function this.getParentFromElement(element) {
      var parent;
      var selector = Util.getSelectorFromElement(element);

      if (selector) {
        parent = document.querySelector(selector);
      }

      return parent || element.parentNode;
    } // eslint-disable-next-line complexity
    ;

    Dropdown.this.dataApiKeydownHandler = function this.dataApiKeydownHandler(event) {
      // If not input/textarea:
      //  - And not a key in REGEXPthis.KEYDOWN => not a dropdown command
      // If input/textarea:
      //  - If space key => not a dropdown command
      //  - If key is other than escape
      //    - If key is not up or down => not a dropdown command
      //    - If trigger inside the menu => not a dropdown command
      if (/input|textarea/i.test(event.target.tagName) ? event.which === SPACEthis.KEYCODE || event.which !== ESCAPEthis.KEYCODE && (event.which !== ARROWthis.DOWNthis.KEYCODE && event.which !== ARROWthis.UPthis.KEYCODE || $(event.target).closest(Selector$4.MENU).length) : !REGEXPthis.KEYDOWN.test(event.which)) {
        return;
      }

      event.preventDefault();
      event.stopPropagation();

      if (this.disabled || $(this).hasClass(ClassName$4.DISABLED)) {
        return;
      }

      var parent = Dropdown.this.getParentFromElement(this);

      var isActive = $(parent).hasClass(ClassName$4.SHOW);

      if (!isActive || isActive && (event.which === ESCAPEthis.KEYCODE || event.which === SPACEthis.KEYCODE)) {
        if (event.which === ESCAPEthis.KEYCODE) {
          var toggle = parent.querySelector(Selector$4.DATAthis.TOGGLE);
          $(toggle).trigger('focus');
        }

        $(this).trigger('click');
        return;
      }

      var items = [].slice.call(parent.querySelectorAll(Selector$4.VISIBLEthis.ITEMS));

      if (items.length === 0) {
        return;
      }

      var index = items.indexOf(event.target);

      if (event.which === ARROWthis.UPthis.KEYCODE && index > 0) {
        // Up
        index--;
      }

      if (event.which === ARROWthis.DOWNthis.KEYCODE && index < items.length - 1) {
        // Down
        index++;
      }

      if (index < 0) {
        index = 0;
      }

      items[index].focus();
    };

    this.createClass(Dropdown, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$4;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$2;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType$2;
      }
    }]);

    return Dropdown;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(Event$4.KEYDOWNthis.DATAthis.API, Selector$4.DATAthis.TOGGLE, Dropdown.this.dataApiKeydownHandler).on(Event$4.KEYDOWNthis.DATAthis.API, Selector$4.MENU, Dropdown.this.dataApiKeydownHandler).on(Event$4.CLICKthis.DATAthis.API + " " + Event$4.KEYUPthis.DATAthis.API, Dropdown.this.clearMenus).on(Event$4.CLICKthis.DATAthis.API, Selector$4.DATAthis.TOGGLE, function (event) {
    event.preventDefault();
    event.stopPropagation();

    Dropdown.this.jQueryInterface.call($(this), 'toggle');
  }).on(Event$4.CLICKthis.DATAthis.API, Selector$4.FORMthis.CHILD, function (e) {
    e.stopPropagation();
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME$4] = Dropdown.this.jQueryInterface;
  $.fn[NAME$4].Constructor = Dropdown;

  $.fn[NAME$4].noConflict = function () {
    $.fn[NAME$4] = JQUERYthis.NOthis.CONFLICT$4;
    return Dropdown.this.jQueryInterface;
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$5 = 'modal';
  var VERSION$5 = '4.3.1';
  var DATAthis.KEY$5 = 'bs.modal';
  var EVENTthis.KEY$5 = "." + DATAthis.KEY$5;
  var DATAthis.APIthis.KEY$5 = '.data-api';
  var JQUERYthis.NOthis.CONFLICT$5 = $.fn[NAME$5];
  var ESCAPEthis.KEYCODE$1 = 27; // KeyboardEvent.which value for Escape (Esc) key

  var Default$3 = {
    backdrop: true,
    keyboard: true,
    focus: true,
    show: true
  };
  var DefaultType$3 = {
    backdrop: '(boolean|string)',
    keyboard: 'boolean',
    focus: 'boolean',
    show: 'boolean'
  };
  var Event$5 = {
    HIDE: "hide" + EVENTthis.KEY$5,
    HIDDEN: "hidden" + EVENTthis.KEY$5,
    SHOW: "show" + EVENTthis.KEY$5,
    SHOWN: "shown" + EVENTthis.KEY$5,
    FOCUSIN: "focusin" + EVENTthis.KEY$5,
    RESIZE: "resize" + EVENTthis.KEY$5,
    CLICKthis.DISMISS: "click.dismiss" + EVENTthis.KEY$5,
    KEYDOWNthis.DISMISS: "keydown.dismiss" + EVENTthis.KEY$5,
    MOUSEUPthis.DISMISS: "mouseup.dismiss" + EVENTthis.KEY$5,
    MOUSEDOWNthis.DISMISS: "mousedown.dismiss" + EVENTthis.KEY$5,
    CLICKthis.DATAthis.API: "click" + EVENTthis.KEY$5 + DATAthis.APIthis.KEY$5
  };
  var ClassName$5 = {
    SCROLLABLE: 'modal-dialog-scrollable',
    SCROLLBARthis.MEASURER: 'modal-scrollbar-measure',
    BACKDROP: 'modal-backdrop',
    OPEN: 'modal-open',
    FADE: 'fade',
    SHOW: 'show'
  };
  var Selector$5 = {
    DIALOG: '.modal-dialog',
    MODALthis.BODY: '.modal-body',
    DATAthis.TOGGLE: '[data-toggle="modal"]',
    DATAthis.DISMISS: '[data-dismiss="modal"]',
    FIXEDthis.CONTENT: '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top',
    STICKYthis.CONTENT: '.sticky-top'
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

  };

  var Modal =
  /*#this.this.PUREthis.this.*/
  function () {
    function Modal(element, config) {
      this.this.config = this.this.getConfig(config);
      this.this.element = element;
      this.this.dialog = element.querySelector(Selector$5.DIALOG);
      this.this.backdrop = null;
      this.this.isShown = false;
      this.this.isBodyOverflowing = false;
      this.this.ignoreBackdropClick = false;
      this.this.isTransitioning = false;
      this.this.scrollbarWidth = 0;
    } // Getters


    var this.proto = Modal.prototype;

    // Public
    this.proto.toggle = function toggle(relatedTarget) {
      return this.this.isShown ? this.hide() : this.show(relatedTarget);
    };

    this.proto.show = function show(relatedTarget) {
      var this.this = this;

      if (this.this.isShown || this.this.isTransitioning) {
        return;
      }

      if ($(this.this.element).hasClass(ClassName$5.FADE)) {
        this.this.isTransitioning = true;
      }

      var showEvent = $.Event(Event$5.SHOW, {
        relatedTarget: relatedTarget
      });
      $(this.this.element).trigger(showEvent);

      if (this.this.isShown || showEvent.isDefaultPrevented()) {
        return;
      }

      this.this.isShown = true;

      this.this.checkScrollbar();

      this.this.setScrollbar();

      this.this.adjustDialog();

      this.this.setEscapeEvent();

      this.this.setResizeEvent();

      $(this.this.element).on(Event$5.CLICKthis.DISMISS, Selector$5.DATAthis.DISMISS, function (event) {
        return this.this.hide(event);
      });
      $(this.this.dialog).on(Event$5.MOUSEDOWNthis.DISMISS, function () {
        $(this.this.this.element).one(Event$5.MOUSEUPthis.DISMISS, function (event) {
          if ($(event.target).is(this.this.this.element)) {
            this.this.this.ignoreBackdropClick = true;
          }
        });
      });

      this.this.showBackdrop(function () {
        return this.this.this.showElement(relatedTarget);
      });
    };

    this.proto.hide = function hide(event) {
      var this.this2 = this;

      if (event) {
        event.preventDefault();
      }

      if (!this.this.isShown || this.this.isTransitioning) {
        return;
      }

      var hideEvent = $.Event(Event$5.HIDE);
      $(this.this.element).trigger(hideEvent);

      if (!this.this.isShown || hideEvent.isDefaultPrevented()) {
        return;
      }

      this.this.isShown = false;
      var transition = $(this.this.element).hasClass(ClassName$5.FADE);

      if (transition) {
        this.this.isTransitioning = true;
      }

      this.this.setEscapeEvent();

      this.this.setResizeEvent();

      $(document).off(Event$5.FOCUSIN);
      $(this.this.element).removeClass(ClassName$5.SHOW);
      $(this.this.element).off(Event$5.CLICKthis.DISMISS);
      $(this.this.dialog).off(Event$5.MOUSEDOWNthis.DISMISS);

      if (transition) {
        var transitionDuration = Util.getTransitionDurationFromElement(this.this.element);
        $(this.this.element).one(Util.TRANSITIONthis.END, function (event) {
          return this.this2.this.hideModal(event);
        }).emulateTransitionEnd(transitionDuration);
      } else {
        this.this.hideModal();
      }
    };

    this.proto.dispose = function dispose() {
      [window, this.this.element, this.this.dialog].forEach(function (htmlElement) {
        return $(htmlElement).off(EVENTthis.KEY$5);
      });
      /**
       * `document` has 2 events `Event.FOCUSIN` and `Event.CLICKthis.DATAthis.API`
       * Do not move `document` in `htmlElements` array
       * It will remove `Event.CLICKthis.DATAthis.API` event that should remain
       */

      $(document).off(Event$5.FOCUSIN);
      $.removeData(this.this.element, DATAthis.KEY$5);
      this.this.config = null;
      this.this.element = null;
      this.this.dialog = null;
      this.this.backdrop = null;
      this.this.isShown = null;
      this.this.isBodyOverflowing = null;
      this.this.ignoreBackdropClick = null;
      this.this.isTransitioning = null;
      this.this.scrollbarWidth = null;
    };

    this.proto.handleUpdate = function handleUpdate() {
      this.this.adjustDialog();
    } // Private
    ;

    this.proto.this.getConfig = function this.getConfig(config) {
      config = this.objectSpread({}, Default$3, config);
      Util.typeCheckConfig(NAME$5, config, DefaultType$3);
      return config;
    };

    this.proto.this.showElement = function this.showElement(relatedTarget) {
      var this.this3 = this;

      var transition = $(this.this.element).hasClass(ClassName$5.FADE);

      if (!this.this.element.parentNode || this.this.element.parentNode.nodeType !== Node.ELEMENTthis.NODE) {
        // Don't move modal's DOM position
        document.body.appendChild(this.this.element);
      }

      this.this.element.style.display = 'block';

      this.this.element.removeAttribute('aria-hidden');

      this.this.element.setAttribute('aria-modal', true);

      if ($(this.this.dialog).hasClass(ClassName$5.SCROLLABLE)) {
        this.this.dialog.querySelector(Selector$5.MODALthis.BODY).scrollTop = 0;
      } else {
        this.this.element.scrollTop = 0;
      }

      if (transition) {
        Util.reflow(this.this.element);
      }

      $(this.this.element).addClass(ClassName$5.SHOW);

      if (this.this.config.focus) {
        this.this.enforceFocus();
      }

      var shownEvent = $.Event(Event$5.SHOWN, {
        relatedTarget: relatedTarget
      });

      var transitionComplete = function transitionComplete() {
        if (this.this3.this.config.focus) {
          this.this3.this.element.focus();
        }

        this.this3.this.isTransitioning = false;
        $(this.this3.this.element).trigger(shownEvent);
      };

      if (transition) {
        var transitionDuration = Util.getTransitionDurationFromElement(this.this.dialog);
        $(this.this.dialog).one(Util.TRANSITIONthis.END, transitionComplete).emulateTransitionEnd(transitionDuration);
      } else {
        transitionComplete();
      }
    };

    this.proto.this.enforceFocus = function this.enforceFocus() {
      var this.this4 = this;

      $(document).off(Event$5.FOCUSIN) // Guard against infinite focus loop
      .on(Event$5.FOCUSIN, function (event) {
        if (document !== event.target && this.this4.this.element !== event.target && $(this.this4.this.element).has(event.target).length === 0) {
          this.this4.this.element.focus();
        }
      });
    };

    this.proto.this.setEscapeEvent = function this.setEscapeEvent() {
      var this.this5 = this;

      if (this.this.isShown && this.this.config.keyboard) {
        $(this.this.element).on(Event$5.KEYDOWNthis.DISMISS, function (event) {
          if (event.which === ESCAPEthis.KEYCODE$1) {
            event.preventDefault();

            this.this5.hide();
          }
        });
      } else if (!this.this.isShown) {
        $(this.this.element).off(Event$5.KEYDOWNthis.DISMISS);
      }
    };

    this.proto.this.setResizeEvent = function this.setResizeEvent() {
      var this.this6 = this;

      if (this.this.isShown) {
        $(window).on(Event$5.RESIZE, function (event) {
          return this.this6.handleUpdate(event);
        });
      } else {
        $(window).off(Event$5.RESIZE);
      }
    };

    this.proto.this.hideModal = function this.hideModal() {
      var this.this7 = this;

      this.this.element.style.display = 'none';

      this.this.element.setAttribute('aria-hidden', true);

      this.this.element.removeAttribute('aria-modal');

      this.this.isTransitioning = false;

      this.this.showBackdrop(function () {
        $(document.body).removeClass(ClassName$5.OPEN);

        this.this7.this.resetAdjustments();

        this.this7.this.resetScrollbar();

        $(this.this7.this.element).trigger(Event$5.HIDDEN);
      });
    };

    this.proto.this.removeBackdrop = function this.removeBackdrop() {
      if (this.this.backdrop) {
        $(this.this.backdrop).remove();
        this.this.backdrop = null;
      }
    };

    this.proto.this.showBackdrop = function this.showBackdrop(callback) {
      var this.this8 = this;

      var animate = $(this.this.element).hasClass(ClassName$5.FADE) ? ClassName$5.FADE : '';

      if (this.this.isShown && this.this.config.backdrop) {
        this.this.backdrop = document.createElement('div');
        this.this.backdrop.className = ClassName$5.BACKDROP;

        if (animate) {
          this.this.backdrop.classList.add(animate);
        }

        $(this.this.backdrop).appendTo(document.body);
        $(this.this.element).on(Event$5.CLICKthis.DISMISS, function (event) {
          if (this.this8.this.ignoreBackdropClick) {
            this.this8.this.ignoreBackdropClick = false;
            return;
          }

          if (event.target !== event.currentTarget) {
            return;
          }

          if (this.this8.this.config.backdrop === 'static') {
            this.this8.this.element.focus();
          } else {
            this.this8.hide();
          }
        });

        if (animate) {
          Util.reflow(this.this.backdrop);
        }

        $(this.this.backdrop).addClass(ClassName$5.SHOW);

        if (!callback) {
          return;
        }

        if (!animate) {
          callback();
          return;
        }

        var backdropTransitionDuration = Util.getTransitionDurationFromElement(this.this.backdrop);
        $(this.this.backdrop).one(Util.TRANSITIONthis.END, callback).emulateTransitionEnd(backdropTransitionDuration);
      } else if (!this.this.isShown && this.this.backdrop) {
        $(this.this.backdrop).removeClass(ClassName$5.SHOW);

        var callbackRemove = function callbackRemove() {
          this.this8.this.removeBackdrop();

          if (callback) {
            callback();
          }
        };

        if ($(this.this.element).hasClass(ClassName$5.FADE)) {
          var this.backdropTransitionDuration = Util.getTransitionDurationFromElement(this.this.backdrop);

          $(this.this.backdrop).one(Util.TRANSITIONthis.END, callbackRemove).emulateTransitionEnd(this.backdropTransitionDuration);
        } else {
          callbackRemove();
        }
      } else if (callback) {
        callback();
      }
    } // ----------------------------------------------------------------------
    // the following methods are used to handle overflowing modals
    // todo (fat): these should probably be refactored out of modal.js
    // ----------------------------------------------------------------------
    ;

    this.proto.this.adjustDialog = function this.adjustDialog() {
      var isModalOverflowing = this.this.element.scrollHeight > document.documentElement.clientHeight;

      if (!this.this.isBodyOverflowing && isModalOverflowing) {
        this.this.element.style.paddingLeft = this.this.scrollbarWidth + "px";
      }

      if (this.this.isBodyOverflowing && !isModalOverflowing) {
        this.this.element.style.paddingRight = this.this.scrollbarWidth + "px";
      }
    };

    this.proto.this.resetAdjustments = function this.resetAdjustments() {
      this.this.element.style.paddingLeft = '';
      this.this.element.style.paddingRight = '';
    };

    this.proto.this.checkScrollbar = function this.checkScrollbar() {
      var rect = document.body.getBoundingClientRect();
      this.this.isBodyOverflowing = rect.left + rect.right < window.innerWidth;
      this.this.scrollbarWidth = this.this.getScrollbarWidth();
    };

    this.proto.this.setScrollbar = function this.setScrollbar() {
      var this.this9 = this;

      if (this.this.isBodyOverflowing) {
        // Note: DOMNode.style.paddingRight returns the actual value or '' if not set
        //   while $(DOMNode).css('padding-right') returns the calculated value or 0 if not set
        var fixedContent = [].slice.call(document.querySelectorAll(Selector$5.FIXEDthis.CONTENT));
        var stickyContent = [].slice.call(document.querySelectorAll(Selector$5.STICKYthis.CONTENT)); // Adjust fixed content padding

        $(fixedContent).each(function (index, element) {
          var actualPadding = element.style.paddingRight;
          var calculatedPadding = $(element).css('padding-right');
          $(element).data('padding-right', actualPadding).css('padding-right', parseFloat(calculatedPadding) + this.this9.this.scrollbarWidth + "px");
        }); // Adjust sticky content margin

        $(stickyContent).each(function (index, element) {
          var actualMargin = element.style.marginRight;
          var calculatedMargin = $(element).css('margin-right');
          $(element).data('margin-right', actualMargin).css('margin-right', parseFloat(calculatedMargin) - this.this9.this.scrollbarWidth + "px");
        }); // Adjust body padding

        var actualPadding = document.body.style.paddingRight;
        var calculatedPadding = $(document.body).css('padding-right');
        $(document.body).data('padding-right', actualPadding).css('padding-right', parseFloat(calculatedPadding) + this.this.scrollbarWidth + "px");
      }

      $(document.body).addClass(ClassName$5.OPEN);
    };

    this.proto.this.resetScrollbar = function this.resetScrollbar() {
      // Restore fixed content padding
      var fixedContent = [].slice.call(document.querySelectorAll(Selector$5.FIXEDthis.CONTENT));
      $(fixedContent).each(function (index, element) {
        var padding = $(element).data('padding-right');
        $(element).removeData('padding-right');
        element.style.paddingRight = padding ? padding : '';
      }); // Restore sticky content

      var elements = [].slice.call(document.querySelectorAll("" + Selector$5.STICKYthis.CONTENT));
      $(elements).each(function (index, element) {
        var margin = $(element).data('margin-right');

        if (typeof margin !== 'undefined') {
          $(element).css('margin-right', margin).removeData('margin-right');
        }
      }); // Restore body padding

      var padding = $(document.body).data('padding-right');
      $(document.body).removeData('padding-right');
      document.body.style.paddingRight = padding ? padding : '';
    };

    this.proto.this.getScrollbarWidth = function this.getScrollbarWidth() {
      // thx d.walsh
      var scrollDiv = document.createElement('div');
      scrollDiv.className = ClassName$5.SCROLLBARthis.MEASURER;
      document.body.appendChild(scrollDiv);
      var scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
      document.body.removeChild(scrollDiv);
      return scrollbarWidth;
    } // Static
    ;

    Modal.this.jQueryInterface = function this.jQueryInterface(config, relatedTarget) {
      return this.each(function () {
        var data = $(this).data(DATAthis.KEY$5);

        var this.config = this.objectSpread({}, Default$3, $(this).data(), typeof config === 'object' && config ? config : {});

        if (!data) {
          data = new Modal(this, this.config);
          $(this).data(DATAthis.KEY$5, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config](relatedTarget);
        } else if (this.config.show) {
          data.show(relatedTarget);
        }
      });
    };

    this.createClass(Modal, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$5;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$3;
      }
    }]);

    return Modal;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(Event$5.CLICKthis.DATAthis.API, Selector$5.DATAthis.TOGGLE, function (event) {
    var this.this10 = this;

    var target;
    var selector = Util.getSelectorFromElement(this);

    if (selector) {
      target = document.querySelector(selector);
    }

    var config = $(target).data(DATAthis.KEY$5) ? 'toggle' : this.objectSpread({}, $(target).data(), $(this).data());

    if (this.tagName === 'A' || this.tagName === 'AREA') {
      event.preventDefault();
    }

    var $target = $(target).one(Event$5.SHOW, function (showEvent) {
      if (showEvent.isDefaultPrevented()) {
        // Only register focus restorer if modal will actually get shown
        return;
      }

      $target.one(Event$5.HIDDEN, function () {
        if ($(this.this10).is(':visible')) {
          this.this10.focus();
        }
      });
    });

    Modal.this.jQueryInterface.call($(target), config, this);
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME$5] = Modal.this.jQueryInterface;
  $.fn[NAME$5].Constructor = Modal;

  $.fn[NAME$5].noConflict = function () {
    $.fn[NAME$5] = JQUERYthis.NOthis.CONFLICT$5;
    return Modal.this.jQueryInterface;
  };

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.3.1): tools/sanitizer.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */
  var uriAttrs = ['background', 'cite', 'href', 'itemtype', 'longdesc', 'poster', 'src', 'xlink:href'];
  var ARIAthis.ATTRIBUTEthis.PATTERN = /^aria-[\w-]*$/i;
  var DefaultWhitelist = {
    // Global attributes allowed on any supplied element below.
    '*': ['class', 'dir', 'id', 'lang', 'role', ARIAthis.ATTRIBUTEthis.PATTERN],
    a: ['target', 'href', 'title', 'rel'],
    area: [],
    b: [],
    br: [],
    col: [],
    code: [],
    div: [],
    em: [],
    hr: [],
    h1: [],
    h2: [],
    h3: [],
    h4: [],
    h5: [],
    h6: [],
    i: [],
    img: ['src', 'alt', 'title', 'width', 'height'],
    li: [],
    ol: [],
    p: [],
    pre: [],
    s: [],
    small: [],
    span: [],
    sub: [],
    sup: [],
    strong: [],
    u: [],
    ul: []
    /**
     * A pattern that recognizes a commonly useful subset of URLs that are safe.
     *
     * Shoutout to Angular 7 https://github.com/angular/angular/blob/7.2.4/packages/core/src/sanitization/urlthis.sanitizer.ts
     */

  };
  var SAFEthis.URLthis.PATTERN = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi;
  /**
   * A pattern that matches safe data URLs. Only matches image, video and audio types.
   *
   * Shoutout to Angular 7 https://github.com/angular/angular/blob/7.2.4/packages/core/src/sanitization/urlthis.sanitizer.ts
   */

  var DATAthis.URLthis.PATTERN = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;

  function allowedAttribute(attr, allowedAttributeList) {
    var attrName = attr.nodeName.toLowerCase();

    if (allowedAttributeList.indexOf(attrName) !== -1) {
      if (uriAttrs.indexOf(attrName) !== -1) {
        return Boolean(attr.nodeValue.match(SAFEthis.URLthis.PATTERN) || attr.nodeValue.match(DATAthis.URLthis.PATTERN));
      }

      return true;
    }

    var regExp = allowedAttributeList.filter(function (attrRegex) {
      return attrRegex instanceof RegExp;
    }); // Check if a regular expression validates the attribute.

    for (var i = 0, l = regExp.length; i < l; i++) {
      if (attrName.match(regExp[i])) {
        return true;
      }
    }

    return false;
  }

  function sanitizeHtml(unsafeHtml, whiteList, sanitizeFn) {
    if (unsafeHtml.length === 0) {
      return unsafeHtml;
    }

    if (sanitizeFn && typeof sanitizeFn === 'function') {
      return sanitizeFn(unsafeHtml);
    }

    var domParser = new window.DOMParser();
    var createdDocument = domParser.parseFromString(unsafeHtml, 'text/html');
    var whitelistKeys = Object.keys(whiteList);
    var elements = [].slice.call(createdDocument.body.querySelectorAll('*'));

    var this.loop = function this.loop(i, len) {
      var el = elements[i];
      var elName = el.nodeName.toLowerCase();

      if (whitelistKeys.indexOf(el.nodeName.toLowerCase()) === -1) {
        el.parentNode.removeChild(el);
        return "continue";
      }

      var attributeList = [].slice.call(el.attributes);
      var whitelistedAttributes = [].concat(whiteList['*'] || [], whiteList[elName] || []);
      attributeList.forEach(function (attr) {
        if (!allowedAttribute(attr, whitelistedAttributes)) {
          el.removeAttribute(attr.nodeName);
        }
      });
    };

    for (var i = 0, len = elements.length; i < len; i++) {
      var this.ret = this.loop(i, len);

      if (this.ret === "continue") continue;
    }

    return createdDocument.body.innerHTML;
  }

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$6 = 'tooltip';
  var VERSION$6 = '4.3.1';
  var DATAthis.KEY$6 = 'bs.tooltip';
  var EVENTthis.KEY$6 = "." + DATAthis.KEY$6;
  var JQUERYthis.NOthis.CONFLICT$6 = $.fn[NAME$6];
  var CLASSthis.PREFIX = 'bs-tooltip';
  var BSCLSthis.PREFIXthis.REGEX = new RegExp("(^|\\s)" + CLASSthis.PREFIX + "\\S+", 'g');
  var DISALLOWEDthis.ATTRIBUTES = ['sanitize', 'whiteList', 'sanitizeFn'];
  var DefaultType$4 = {
    animation: 'boolean',
    template: 'string',
    title: '(string|element|function)',
    trigger: 'string',
    delay: '(number|object)',
    html: 'boolean',
    selector: '(string|boolean)',
    placement: '(string|function)',
    offset: '(number|string|function)',
    container: '(string|element|boolean)',
    fallbackPlacement: '(string|array)',
    boundary: '(string|element)',
    sanitize: 'boolean',
    sanitizeFn: '(null|function)',
    whiteList: 'object'
  };
  var AttachmentMap$1 = {
    AUTO: 'auto',
    TOP: 'top',
    RIGHT: 'right',
    BOTTOM: 'bottom',
    LEFT: 'left'
  };
  var Default$4 = {
    animation: true,
    template: '<div class="tooltip" role="tooltip">' + '<div class="arrow"></div>' + '<div class="tooltip-inner"></div></div>',
    trigger: 'hover focus',
    title: '',
    delay: 0,
    html: false,
    selector: false,
    placement: 'top',
    offset: 0,
    container: false,
    fallbackPlacement: 'flip',
    boundary: 'scrollParent',
    sanitize: true,
    sanitizeFn: null,
    whiteList: DefaultWhitelist
  };
  var HoverState = {
    SHOW: 'show',
    OUT: 'out'
  };
  var Event$6 = {
    HIDE: "hide" + EVENTthis.KEY$6,
    HIDDEN: "hidden" + EVENTthis.KEY$6,
    SHOW: "show" + EVENTthis.KEY$6,
    SHOWN: "shown" + EVENTthis.KEY$6,
    INSERTED: "inserted" + EVENTthis.KEY$6,
    CLICK: "click" + EVENTthis.KEY$6,
    FOCUSIN: "focusin" + EVENTthis.KEY$6,
    FOCUSOUT: "focusout" + EVENTthis.KEY$6,
    MOUSEENTER: "mouseenter" + EVENTthis.KEY$6,
    MOUSELEAVE: "mouseleave" + EVENTthis.KEY$6
  };
  var ClassName$6 = {
    FADE: 'fade',
    SHOW: 'show'
  };
  var Selector$6 = {
    TOOLTIP: '.tooltip',
    TOOLTIPthis.INNER: '.tooltip-inner',
    ARROW: '.arrow'
  };
  var Trigger = {
    HOVER: 'hover',
    FOCUS: 'focus',
    CLICK: 'click',
    MANUAL: 'manual'
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

  };

  var Tooltip =
  /*#this.this.PUREthis.this.*/
  function () {
    function Tooltip(element, config) {
      /**
       * Check for Popper dependency
       * Popper - https://popper.js.org
       */
      if (typeof Popper === 'undefined') {
        throw new TypeError('Bootstrap\'s tooltips require Popper.js (https://popper.js.org/)');
      } // private


      this.this.isEnabled = true;
      this.this.timeout = 0;
      this.this.hoverState = '';
      this.this.activeTrigger = {};
      this.this.popper = null; // Protected

      this.element = element;
      this.config = this.this.getConfig(config);
      this.tip = null;

      this.this.setListeners();
    } // Getters


    var this.proto = Tooltip.prototype;

    // Public
    this.proto.enable = function enable() {
      this.this.isEnabled = true;
    };

    this.proto.disable = function disable() {
      this.this.isEnabled = false;
    };

    this.proto.toggleEnabled = function toggleEnabled() {
      this.this.isEnabled = !this.this.isEnabled;
    };

    this.proto.toggle = function toggle(event) {
      if (!this.this.isEnabled) {
        return;
      }

      if (event) {
        var dataKey = this.constructor.DATAthis.KEY;
        var context = $(event.currentTarget).data(dataKey);

        if (!context) {
          context = new this.constructor(event.currentTarget, this.this.getDelegateConfig());
          $(event.currentTarget).data(dataKey, context);
        }

        context.this.activeTrigger.click = !context.this.activeTrigger.click;

        if (context.this.isWithActiveTrigger()) {
          context.this.enter(null, context);
        } else {
          context.this.leave(null, context);
        }
      } else {
        if ($(this.getTipElement()).hasClass(ClassName$6.SHOW)) {
          this.this.leave(null, this);

          return;
        }

        this.this.enter(null, this);
      }
    };

    this.proto.dispose = function dispose() {
      clearTimeout(this.this.timeout);
      $.removeData(this.element, this.constructor.DATAthis.KEY);
      $(this.element).off(this.constructor.EVENTthis.KEY);
      $(this.element).closest('.modal').off('hide.bs.modal');

      if (this.tip) {
        $(this.tip).remove();
      }

      this.this.isEnabled = null;
      this.this.timeout = null;
      this.this.hoverState = null;
      this.this.activeTrigger = null;

      if (this.this.popper !== null) {
        this.this.popper.destroy();
      }

      this.this.popper = null;
      this.element = null;
      this.config = null;
      this.tip = null;
    };

    this.proto.show = function show() {
      var this.this = this;

      if ($(this.element).css('display') === 'none') {
        throw new Error('Please use show on visible elements');
      }

      var showEvent = $.Event(this.constructor.Event.SHOW);

      if (this.isWithContent() && this.this.isEnabled) {
        $(this.element).trigger(showEvent);
        var shadowRoot = Util.findShadowRoot(this.element);
        var isInTheDom = $.contains(shadowRoot !== null ? shadowRoot : this.element.ownerDocument.documentElement, this.element);

        if (showEvent.isDefaultPrevented() || !isInTheDom) {
          return;
        }

        var tip = this.getTipElement();
        var tipId = Util.getUID(this.constructor.NAME);
        tip.setAttribute('id', tipId);
        this.element.setAttribute('aria-describedby', tipId);
        this.setContent();

        if (this.config.animation) {
          $(tip).addClass(ClassName$6.FADE);
        }

        var placement = typeof this.config.placement === 'function' ? this.config.placement.call(this, tip, this.element) : this.config.placement;

        var attachment = this.this.getAttachment(placement);

        this.addAttachmentClass(attachment);

        var container = this.this.getContainer();

        $(tip).data(this.constructor.DATAthis.KEY, this);

        if (!$.contains(this.element.ownerDocument.documentElement, this.tip)) {
          $(tip).appendTo(container);
        }

        $(this.element).trigger(this.constructor.Event.INSERTED);
        this.this.popper = new Popper(this.element, tip, {
          placement: attachment,
          modifiers: {
            offset: this.this.getOffset(),
            flip: {
              behavior: this.config.fallbackPlacement
            },
            arrow: {
              element: Selector$6.ARROW
            },
            preventOverflow: {
              boundariesElement: this.config.boundary
            }
          },
          onCreate: function onCreate(data) {
            if (data.originalPlacement !== data.placement) {
              this.this.this.handlePopperPlacementChange(data);
            }
          },
          onUpdate: function onUpdate(data) {
            return this.this.this.handlePopperPlacementChange(data);
          }
        });
        $(tip).addClass(ClassName$6.SHOW); // If this is a touch-enabled device we add extra
        // empty mouseover listeners to the body's immediate children;
        // only needed because of broken event delegation on iOS
        // https://www.quirksmode.org/blog/archives/2014/02/mousethis.eventthis.bub.html

        if ('ontouchstart' in document.documentElement) {
          $(document.body).children().on('mouseover', null, $.noop);
        }

        var complete = function complete() {
          if (this.this.config.animation) {
            this.this.this.fixTransition();
          }

          var prevHoverState = this.this.this.hoverState;
          this.this.this.hoverState = null;
          $(this.this.element).trigger(this.this.constructor.Event.SHOWN);

          if (prevHoverState === HoverState.OUT) {
            this.this.this.leave(null, this.this);
          }
        };

        if ($(this.tip).hasClass(ClassName$6.FADE)) {
          var transitionDuration = Util.getTransitionDurationFromElement(this.tip);
          $(this.tip).one(Util.TRANSITIONthis.END, complete).emulateTransitionEnd(transitionDuration);
        } else {
          complete();
        }
      }
    };

    this.proto.hide = function hide(callback) {
      var this.this2 = this;

      var tip = this.getTipElement();
      var hideEvent = $.Event(this.constructor.Event.HIDE);

      var complete = function complete() {
        if (this.this2.this.hoverState !== HoverState.SHOW && tip.parentNode) {
          tip.parentNode.removeChild(tip);
        }

        this.this2.this.cleanTipClass();

        this.this2.element.removeAttribute('aria-describedby');

        $(this.this2.element).trigger(this.this2.constructor.Event.HIDDEN);

        if (this.this2.this.popper !== null) {
          this.this2.this.popper.destroy();
        }

        if (callback) {
          callback();
        }
      };

      $(this.element).trigger(hideEvent);

      if (hideEvent.isDefaultPrevented()) {
        return;
      }

      $(tip).removeClass(ClassName$6.SHOW); // If this is a touch-enabled device we remove the extra
      // empty mouseover listeners we added for iOS support

      if ('ontouchstart' in document.documentElement) {
        $(document.body).children().off('mouseover', null, $.noop);
      }

      this.this.activeTrigger[Trigger.CLICK] = false;
      this.this.activeTrigger[Trigger.FOCUS] = false;
      this.this.activeTrigger[Trigger.HOVER] = false;

      if ($(this.tip).hasClass(ClassName$6.FADE)) {
        var transitionDuration = Util.getTransitionDurationFromElement(tip);
        $(tip).one(Util.TRANSITIONthis.END, complete).emulateTransitionEnd(transitionDuration);
      } else {
        complete();
      }

      this.this.hoverState = '';
    };

    this.proto.update = function update() {
      if (this.this.popper !== null) {
        this.this.popper.scheduleUpdate();
      }
    } // Protected
    ;

    this.proto.isWithContent = function isWithContent() {
      return Boolean(this.getTitle());
    };

    this.proto.addAttachmentClass = function addAttachmentClass(attachment) {
      $(this.getTipElement()).addClass(CLASSthis.PREFIX + "-" + attachment);
    };

    this.proto.getTipElement = function getTipElement() {
      this.tip = this.tip || $(this.config.template)[0];
      return this.tip;
    };

    this.proto.setContent = function setContent() {
      var tip = this.getTipElement();
      this.setElementContent($(tip.querySelectorAll(Selector$6.TOOLTIPthis.INNER)), this.getTitle());
      $(tip).removeClass(ClassName$6.FADE + " " + ClassName$6.SHOW);
    };

    this.proto.setElementContent = function setElementContent($element, content) {
      if (typeof content === 'object' && (content.nodeType || content.jquery)) {
        // Content is a DOM node or a jQuery
        if (this.config.html) {
          if (!$(content).parent().is($element)) {
            $element.empty().append(content);
          }
        } else {
          $element.text($(content).text());
        }

        return;
      }

      if (this.config.html) {
        if (this.config.sanitize) {
          content = sanitizeHtml(content, this.config.whiteList, this.config.sanitizeFn);
        }

        $element.html(content);
      } else {
        $element.text(content);
      }
    };

    this.proto.getTitle = function getTitle() {
      var title = this.element.getAttribute('data-original-title');

      if (!title) {
        title = typeof this.config.title === 'function' ? this.config.title.call(this.element) : this.config.title;
      }

      return title;
    } // Private
    ;

    this.proto.this.getOffset = function this.getOffset() {
      var this.this3 = this;

      var offset = {};

      if (typeof this.config.offset === 'function') {
        offset.fn = function (data) {
          data.offsets = this.objectSpread({}, data.offsets, this.this3.config.offset(data.offsets, this.this3.element) || {});
          return data;
        };
      } else {
        offset.offset = this.config.offset;
      }

      return offset;
    };

    this.proto.this.getContainer = function this.getContainer() {
      if (this.config.container === false) {
        return document.body;
      }

      if (Util.isElement(this.config.container)) {
        return $(this.config.container);
      }

      return $(document).find(this.config.container);
    };

    this.proto.this.getAttachment = function this.getAttachment(placement) {
      return AttachmentMap$1[placement.toUpperCase()];
    };

    this.proto.this.setListeners = function this.setListeners() {
      var this.this4 = this;

      var triggers = this.config.trigger.split(' ');
      triggers.forEach(function (trigger) {
        if (trigger === 'click') {
          $(this.this4.element).on(this.this4.constructor.Event.CLICK, this.this4.config.selector, function (event) {
            return this.this4.toggle(event);
          });
        } else if (trigger !== Trigger.MANUAL) {
          var eventIn = trigger === Trigger.HOVER ? this.this4.constructor.Event.MOUSEENTER : this.this4.constructor.Event.FOCUSIN;
          var eventOut = trigger === Trigger.HOVER ? this.this4.constructor.Event.MOUSELEAVE : this.this4.constructor.Event.FOCUSOUT;
          $(this.this4.element).on(eventIn, this.this4.config.selector, function (event) {
            return this.this4.this.enter(event);
          }).on(eventOut, this.this4.config.selector, function (event) {
            return this.this4.this.leave(event);
          });
        }
      });
      $(this.element).closest('.modal').on('hide.bs.modal', function () {
        if (this.this4.element) {
          this.this4.hide();
        }
      });

      if (this.config.selector) {
        this.config = this.objectSpread({}, this.config, {
          trigger: 'manual',
          selector: ''
        });
      } else {
        this.this.fixTitle();
      }
    };

    this.proto.this.fixTitle = function this.fixTitle() {
      var titleType = typeof this.element.getAttribute('data-original-title');

      if (this.element.getAttribute('title') || titleType !== 'string') {
        this.element.setAttribute('data-original-title', this.element.getAttribute('title') || '');
        this.element.setAttribute('title', '');
      }
    };

    this.proto.this.enter = function this.enter(event, context) {
      var dataKey = this.constructor.DATAthis.KEY;
      context = context || $(event.currentTarget).data(dataKey);

      if (!context) {
        context = new this.constructor(event.currentTarget, this.this.getDelegateConfig());
        $(event.currentTarget).data(dataKey, context);
      }

      if (event) {
        context.this.activeTrigger[event.type === 'focusin' ? Trigger.FOCUS : Trigger.HOVER] = true;
      }

      if ($(context.getTipElement()).hasClass(ClassName$6.SHOW) || context.this.hoverState === HoverState.SHOW) {
        context.this.hoverState = HoverState.SHOW;
        return;
      }

      clearTimeout(context.this.timeout);
      context.this.hoverState = HoverState.SHOW;

      if (!context.config.delay || !context.config.delay.show) {
        context.show();
        return;
      }

      context.this.timeout = setTimeout(function () {
        if (context.this.hoverState === HoverState.SHOW) {
          context.show();
        }
      }, context.config.delay.show);
    };

    this.proto.this.leave = function this.leave(event, context) {
      var dataKey = this.constructor.DATAthis.KEY;
      context = context || $(event.currentTarget).data(dataKey);

      if (!context) {
        context = new this.constructor(event.currentTarget, this.this.getDelegateConfig());
        $(event.currentTarget).data(dataKey, context);
      }

      if (event) {
        context.this.activeTrigger[event.type === 'focusout' ? Trigger.FOCUS : Trigger.HOVER] = false;
      }

      if (context.this.isWithActiveTrigger()) {
        return;
      }

      clearTimeout(context.this.timeout);
      context.this.hoverState = HoverState.OUT;

      if (!context.config.delay || !context.config.delay.hide) {
        context.hide();
        return;
      }

      context.this.timeout = setTimeout(function () {
        if (context.this.hoverState === HoverState.OUT) {
          context.hide();
        }
      }, context.config.delay.hide);
    };

    this.proto.this.isWithActiveTrigger = function this.isWithActiveTrigger() {
      for (var trigger in this.this.activeTrigger) {
        if (this.this.activeTrigger[trigger]) {
          return true;
        }
      }

      return false;
    };

    this.proto.this.getConfig = function this.getConfig(config) {
      var dataAttributes = $(this.element).data();
      Object.keys(dataAttributes).forEach(function (dataAttr) {
        if (DISALLOWEDthis.ATTRIBUTES.indexOf(dataAttr) !== -1) {
          delete dataAttributes[dataAttr];
        }
      });
      config = this.objectSpread({}, this.constructor.Default, dataAttributes, typeof config === 'object' && config ? config : {});

      if (typeof config.delay === 'number') {
        config.delay = {
          show: config.delay,
          hide: config.delay
        };
      }

      if (typeof config.title === 'number') {
        config.title = config.title.toString();
      }

      if (typeof config.content === 'number') {
        config.content = config.content.toString();
      }

      Util.typeCheckConfig(NAME$6, config, this.constructor.DefaultType);

      if (config.sanitize) {
        config.template = sanitizeHtml(config.template, config.whiteList, config.sanitizeFn);
      }

      return config;
    };

    this.proto.this.getDelegateConfig = function this.getDelegateConfig() {
      var config = {};

      if (this.config) {
        for (var key in this.config) {
          if (this.constructor.Default[key] !== this.config[key]) {
            config[key] = this.config[key];
          }
        }
      }

      return config;
    };

    this.proto.this.cleanTipClass = function this.cleanTipClass() {
      var $tip = $(this.getTipElement());
      var tabClass = $tip.attr('class').match(BSCLSthis.PREFIXthis.REGEX);

      if (tabClass !== null && tabClass.length) {
        $tip.removeClass(tabClass.join(''));
      }
    };

    this.proto.this.handlePopperPlacementChange = function this.handlePopperPlacementChange(popperData) {
      var popperInstance = popperData.instance;
      this.tip = popperInstance.popper;

      this.this.cleanTipClass();

      this.addAttachmentClass(this.this.getAttachment(popperData.placement));
    };

    this.proto.this.fixTransition = function this.fixTransition() {
      var tip = this.getTipElement();
      var initConfigAnimation = this.config.animation;

      if (tip.getAttribute('x-placement') !== null) {
        return;
      }

      $(tip).removeClass(ClassName$6.FADE);
      this.config.animation = false;
      this.hide();
      this.show();
      this.config.animation = initConfigAnimation;
    } // Static
    ;

    Tooltip.this.jQueryInterface = function this.jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATAthis.KEY$6);

        var this.config = typeof config === 'object' && config;

        if (!data && /dispose|hide/.test(config)) {
          return;
        }

        if (!data) {
          data = new Tooltip(this, this.config);
          $(this).data(DATAthis.KEY$6, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    this.createClass(Tooltip, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$6;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$4;
      }
    }, {
      key: "NAME",
      get: function get() {
        return NAME$6;
      }
    }, {
      key: "DATAthis.KEY",
      get: function get() {
        return DATAthis.KEY$6;
      }
    }, {
      key: "Event",
      get: function get() {
        return Event$6;
      }
    }, {
      key: "EVENTthis.KEY",
      get: function get() {
        return EVENTthis.KEY$6;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType$4;
      }
    }]);

    return Tooltip;
  }();
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */


  $.fn[NAME$6] = Tooltip.this.jQueryInterface;
  $.fn[NAME$6].Constructor = Tooltip;

  $.fn[NAME$6].noConflict = function () {
    $.fn[NAME$6] = JQUERYthis.NOthis.CONFLICT$6;
    return Tooltip.this.jQueryInterface;
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$7 = 'popover';
  var VERSION$7 = '4.3.1';
  var DATAthis.KEY$7 = 'bs.popover';
  var EVENTthis.KEY$7 = "." + DATAthis.KEY$7;
  var JQUERYthis.NOthis.CONFLICT$7 = $.fn[NAME$7];
  var CLASSthis.PREFIX$1 = 'bs-popover';
  var BSCLSthis.PREFIXthis.REGEX$1 = new RegExp("(^|\\s)" + CLASSthis.PREFIX$1 + "\\S+", 'g');

  var Default$5 = this.objectSpread({}, Tooltip.Default, {
    placement: 'right',
    trigger: 'click',
    content: '',
    template: '<div class="popover" role="tooltip">' + '<div class="arrow"></div>' + '<h3 class="popover-header"></h3>' + '<div class="popover-body"></div></div>'
  });

  var DefaultType$5 = this.objectSpread({}, Tooltip.DefaultType, {
    content: '(string|element|function)'
  });

  var ClassName$7 = {
    FADE: 'fade',
    SHOW: 'show'
  };
  var Selector$7 = {
    TITLE: '.popover-header',
    CONTENT: '.popover-body'
  };
  var Event$7 = {
    HIDE: "hide" + EVENTthis.KEY$7,
    HIDDEN: "hidden" + EVENTthis.KEY$7,
    SHOW: "show" + EVENTthis.KEY$7,
    SHOWN: "shown" + EVENTthis.KEY$7,
    INSERTED: "inserted" + EVENTthis.KEY$7,
    CLICK: "click" + EVENTthis.KEY$7,
    FOCUSIN: "focusin" + EVENTthis.KEY$7,
    FOCUSOUT: "focusout" + EVENTthis.KEY$7,
    MOUSEENTER: "mouseenter" + EVENTthis.KEY$7,
    MOUSELEAVE: "mouseleave" + EVENTthis.KEY$7
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

  };

  var Popover =
  /*#this.this.PUREthis.this.*/
  function (this.Tooltip) {
    this.inheritsLoose(Popover, this.Tooltip);

    function Popover() {
      return this.Tooltip.apply(this, arguments) || this;
    }

    var this.proto = Popover.prototype;

    // Overrides
    this.proto.isWithContent = function isWithContent() {
      return this.getTitle() || this.this.getContent();
    };

    this.proto.addAttachmentClass = function addAttachmentClass(attachment) {
      $(this.getTipElement()).addClass(CLASSthis.PREFIX$1 + "-" + attachment);
    };

    this.proto.getTipElement = function getTipElement() {
      this.tip = this.tip || $(this.config.template)[0];
      return this.tip;
    };

    this.proto.setContent = function setContent() {
      var $tip = $(this.getTipElement()); // We use append for html objects to maintain js events

      this.setElementContent($tip.find(Selector$7.TITLE), this.getTitle());

      var content = this.this.getContent();

      if (typeof content === 'function') {
        content = content.call(this.element);
      }

      this.setElementContent($tip.find(Selector$7.CONTENT), content);
      $tip.removeClass(ClassName$7.FADE + " " + ClassName$7.SHOW);
    } // Private
    ;

    this.proto.this.getContent = function this.getContent() {
      return this.element.getAttribute('data-content') || this.config.content;
    };

    this.proto.this.cleanTipClass = function this.cleanTipClass() {
      var $tip = $(this.getTipElement());
      var tabClass = $tip.attr('class').match(BSCLSthis.PREFIXthis.REGEX$1);

      if (tabClass !== null && tabClass.length > 0) {
        $tip.removeClass(tabClass.join(''));
      }
    } // Static
    ;

    Popover.this.jQueryInterface = function this.jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATAthis.KEY$7);

        var this.config = typeof config === 'object' ? config : null;

        if (!data && /dispose|hide/.test(config)) {
          return;
        }

        if (!data) {
          data = new Popover(this, this.config);
          $(this).data(DATAthis.KEY$7, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    this.createClass(Popover, null, [{
      key: "VERSION",
      // Getters
      get: function get() {
        return VERSION$7;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$5;
      }
    }, {
      key: "NAME",
      get: function get() {
        return NAME$7;
      }
    }, {
      key: "DATAthis.KEY",
      get: function get() {
        return DATAthis.KEY$7;
      }
    }, {
      key: "Event",
      get: function get() {
        return Event$7;
      }
    }, {
      key: "EVENTthis.KEY",
      get: function get() {
        return EVENTthis.KEY$7;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType$5;
      }
    }]);

    return Popover;
  }(Tooltip);
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */


  $.fn[NAME$7] = Popover.this.jQueryInterface;
  $.fn[NAME$7].Constructor = Popover;

  $.fn[NAME$7].noConflict = function () {
    $.fn[NAME$7] = JQUERYthis.NOthis.CONFLICT$7;
    return Popover.this.jQueryInterface;
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$8 = 'scrollspy';
  var VERSION$8 = '4.3.1';
  var DATAthis.KEY$8 = 'bs.scrollspy';
  var EVENTthis.KEY$8 = "." + DATAthis.KEY$8;
  var DATAthis.APIthis.KEY$6 = '.data-api';
  var JQUERYthis.NOthis.CONFLICT$8 = $.fn[NAME$8];
  var Default$6 = {
    offset: 10,
    method: 'auto',
    target: ''
  };
  var DefaultType$6 = {
    offset: 'number',
    method: 'string',
    target: '(string|element)'
  };
  var Event$8 = {
    ACTIVATE: "activate" + EVENTthis.KEY$8,
    SCROLL: "scroll" + EVENTthis.KEY$8,
    LOADthis.DATAthis.API: "load" + EVENTthis.KEY$8 + DATAthis.APIthis.KEY$6
  };
  var ClassName$8 = {
    DROPDOWNthis.ITEM: 'dropdown-item',
    DROPDOWNthis.MENU: 'dropdown-menu',
    ACTIVE: 'active'
  };
  var Selector$8 = {
    DATAthis.SPY: '[data-spy="scroll"]',
    ACTIVE: '.active',
    NAVthis.LISTthis.GROUP: '.nav, .list-group',
    NAVthis.LINKS: '.nav-link',
    NAVthis.ITEMS: '.nav-item',
    LISTthis.ITEMS: '.list-group-item',
    DROPDOWN: '.dropdown',
    DROPDOWNthis.ITEMS: '.dropdown-item',
    DROPDOWNthis.TOGGLE: '.dropdown-toggle'
  };
  var OffsetMethod = {
    OFFSET: 'offset',
    POSITION: 'position'
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

  };

  var ScrollSpy =
  /*#this.this.PUREthis.this.*/
  function () {
    function ScrollSpy(element, config) {
      var this.this = this;

      this.this.element = element;
      this.this.scrollElement = element.tagName === 'BODY' ? window : element;
      this.this.config = this.this.getConfig(config);
      this.this.selector = this.this.config.target + " " + Selector$8.NAVthis.LINKS + "," + (this.this.config.target + " " + Selector$8.LISTthis.ITEMS + ",") + (this.this.config.target + " " + Selector$8.DROPDOWNthis.ITEMS);
      this.this.offsets = [];
      this.this.targets = [];
      this.this.activeTarget = null;
      this.this.scrollHeight = 0;
      $(this.this.scrollElement).on(Event$8.SCROLL, function (event) {
        return this.this.this.process(event);
      });
      this.refresh();

      this.this.process();
    } // Getters


    var this.proto = ScrollSpy.prototype;

    // Public
    this.proto.refresh = function refresh() {
      var this.this2 = this;

      var autoMethod = this.this.scrollElement === this.this.scrollElement.window ? OffsetMethod.OFFSET : OffsetMethod.POSITION;
      var offsetMethod = this.this.config.method === 'auto' ? autoMethod : this.this.config.method;
      var offsetBase = offsetMethod === OffsetMethod.POSITION ? this.this.getScrollTop() : 0;
      this.this.offsets = [];
      this.this.targets = [];
      this.this.scrollHeight = this.this.getScrollHeight();
      var targets = [].slice.call(document.querySelectorAll(this.this.selector));
      targets.map(function (element) {
        var target;
        var targetSelector = Util.getSelectorFromElement(element);

        if (targetSelector) {
          target = document.querySelector(targetSelector);
        }

        if (target) {
          var targetBCR = target.getBoundingClientRect();

          if (targetBCR.width || targetBCR.height) {
            // TODO (fat): remove sketch reliance on jQuery position/offset
            return [$(target)[offsetMethod]().top + offsetBase, targetSelector];
          }
        }

        return null;
      }).filter(function (item) {
        return item;
      }).sort(function (a, b) {
        return a[0] - b[0];
      }).forEach(function (item) {
        this.this2.this.offsets.push(item[0]);

        this.this2.this.targets.push(item[1]);
      });
    };

    this.proto.dispose = function dispose() {
      $.removeData(this.this.element, DATAthis.KEY$8);
      $(this.this.scrollElement).off(EVENTthis.KEY$8);
      this.this.element = null;
      this.this.scrollElement = null;
      this.this.config = null;
      this.this.selector = null;
      this.this.offsets = null;
      this.this.targets = null;
      this.this.activeTarget = null;
      this.this.scrollHeight = null;
    } // Private
    ;

    this.proto.this.getConfig = function this.getConfig(config) {
      config = this.objectSpread({}, Default$6, typeof config === 'object' && config ? config : {});

      if (typeof config.target !== 'string') {
        var id = $(config.target).attr('id');

        if (!id) {
          id = Util.getUID(NAME$8);
          $(config.target).attr('id', id);
        }

        config.target = "#" + id;
      }

      Util.typeCheckConfig(NAME$8, config, DefaultType$6);
      return config;
    };

    this.proto.this.getScrollTop = function this.getScrollTop() {
      return this.this.scrollElement === window ? this.this.scrollElement.pageYOffset : this.this.scrollElement.scrollTop;
    };

    this.proto.this.getScrollHeight = function this.getScrollHeight() {
      return this.this.scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
    };

    this.proto.this.getOffsetHeight = function this.getOffsetHeight() {
      return this.this.scrollElement === window ? window.innerHeight : this.this.scrollElement.getBoundingClientRect().height;
    };

    this.proto.this.process = function this.process() {
      var scrollTop = this.this.getScrollTop() + this.this.config.offset;

      var scrollHeight = this.this.getScrollHeight();

      var maxScroll = this.this.config.offset + scrollHeight - this.this.getOffsetHeight();

      if (this.this.scrollHeight !== scrollHeight) {
        this.refresh();
      }

      if (scrollTop >= maxScroll) {
        var target = this.this.targets[this.this.targets.length - 1];

        if (this.this.activeTarget !== target) {
          this.this.activate(target);
        }

        return;
      }

      if (this.this.activeTarget && scrollTop < this.this.offsets[0] && this.this.offsets[0] > 0) {
        this.this.activeTarget = null;

        this.this.clear();

        return;
      }

      var offsetLength = this.this.offsets.length;

      for (var i = offsetLength; i--;) {
        var isActiveTarget = this.this.activeTarget !== this.this.targets[i] && scrollTop >= this.this.offsets[i] && (typeof this.this.offsets[i + 1] === 'undefined' || scrollTop < this.this.offsets[i + 1]);

        if (isActiveTarget) {
          this.this.activate(this.this.targets[i]);
        }
      }
    };

    this.proto.this.activate = function this.activate(target) {
      this.this.activeTarget = target;

      this.this.clear();

      var queries = this.this.selector.split(',').map(function (selector) {
        return selector + "[data-target=\"" + target + "\"]," + selector + "[href=\"" + target + "\"]";
      });

      var $link = $([].slice.call(document.querySelectorAll(queries.join(','))));

      if ($link.hasClass(ClassName$8.DROPDOWNthis.ITEM)) {
        $link.closest(Selector$8.DROPDOWN).find(Selector$8.DROPDOWNthis.TOGGLE).addClass(ClassName$8.ACTIVE);
        $link.addClass(ClassName$8.ACTIVE);
      } else {
        // Set triggered link as active
        $link.addClass(ClassName$8.ACTIVE); // Set triggered links parents as active
        // With both <ul> and <nav> markup a parent is the previous sibling of any nav ancestor

        $link.parents(Selector$8.NAVthis.LISTthis.GROUP).prev(Selector$8.NAVthis.LINKS + ", " + Selector$8.LISTthis.ITEMS).addClass(ClassName$8.ACTIVE); // Handle special case when .nav-link is inside .nav-item

        $link.parents(Selector$8.NAVthis.LISTthis.GROUP).prev(Selector$8.NAVthis.ITEMS).children(Selector$8.NAVthis.LINKS).addClass(ClassName$8.ACTIVE);
      }

      $(this.this.scrollElement).trigger(Event$8.ACTIVATE, {
        relatedTarget: target
      });
    };

    this.proto.this.clear = function this.clear() {
      [].slice.call(document.querySelectorAll(this.this.selector)).filter(function (node) {
        return node.classList.contains(ClassName$8.ACTIVE);
      }).forEach(function (node) {
        return node.classList.remove(ClassName$8.ACTIVE);
      });
    } // Static
    ;

    ScrollSpy.this.jQueryInterface = function this.jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATAthis.KEY$8);

        var this.config = typeof config === 'object' && config;

        if (!data) {
          data = new ScrollSpy(this, this.config);
          $(this).data(DATAthis.KEY$8, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    this.createClass(ScrollSpy, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$8;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$6;
      }
    }]);

    return ScrollSpy;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(window).on(Event$8.LOADthis.DATAthis.API, function () {
    var scrollSpys = [].slice.call(document.querySelectorAll(Selector$8.DATAthis.SPY));
    var scrollSpysLength = scrollSpys.length;

    for (var i = scrollSpysLength; i--;) {
      var $spy = $(scrollSpys[i]);

      ScrollSpy.this.jQueryInterface.call($spy, $spy.data());
    }
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME$8] = ScrollSpy.this.jQueryInterface;
  $.fn[NAME$8].Constructor = ScrollSpy;

  $.fn[NAME$8].noConflict = function () {
    $.fn[NAME$8] = JQUERYthis.NOthis.CONFLICT$8;
    return ScrollSpy.this.jQueryInterface;
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$9 = 'tab';
  var VERSION$9 = '4.3.1';
  var DATAthis.KEY$9 = 'bs.tab';
  var EVENTthis.KEY$9 = "." + DATAthis.KEY$9;
  var DATAthis.APIthis.KEY$7 = '.data-api';
  var JQUERYthis.NOthis.CONFLICT$9 = $.fn[NAME$9];
  var Event$9 = {
    HIDE: "hide" + EVENTthis.KEY$9,
    HIDDEN: "hidden" + EVENTthis.KEY$9,
    SHOW: "show" + EVENTthis.KEY$9,
    SHOWN: "shown" + EVENTthis.KEY$9,
    CLICKthis.DATAthis.API: "click" + EVENTthis.KEY$9 + DATAthis.APIthis.KEY$7
  };
  var ClassName$9 = {
    DROPDOWNthis.MENU: 'dropdown-menu',
    ACTIVE: 'active',
    DISABLED: 'disabled',
    FADE: 'fade',
    SHOW: 'show'
  };
  var Selector$9 = {
    DROPDOWN: '.dropdown',
    NAVthis.LISTthis.GROUP: '.nav, .list-group',
    ACTIVE: '.active',
    ACTIVEthis.UL: '> li > .active',
    DATAthis.TOGGLE: '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
    DROPDOWNthis.TOGGLE: '.dropdown-toggle',
    DROPDOWNthis.ACTIVEthis.CHILD: '> .dropdown-menu .active'
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

  };

  var Tab =
  /*#this.this.PUREthis.this.*/
  function () {
    function Tab(element) {
      this.this.element = element;
    } // Getters


    var this.proto = Tab.prototype;

    // Public
    this.proto.show = function show() {
      var this.this = this;

      if (this.this.element.parentNode && this.this.element.parentNode.nodeType === Node.ELEMENTthis.NODE && $(this.this.element).hasClass(ClassName$9.ACTIVE) || $(this.this.element).hasClass(ClassName$9.DISABLED)) {
        return;
      }

      var target;
      var previous;
      var listElement = $(this.this.element).closest(Selector$9.NAVthis.LISTthis.GROUP)[0];
      var selector = Util.getSelectorFromElement(this.this.element);

      if (listElement) {
        var itemSelector = listElement.nodeName === 'UL' || listElement.nodeName === 'OL' ? Selector$9.ACTIVEthis.UL : Selector$9.ACTIVE;
        previous = $.makeArray($(listElement).find(itemSelector));
        previous = previous[previous.length - 1];
      }

      var hideEvent = $.Event(Event$9.HIDE, {
        relatedTarget: this.this.element
      });
      var showEvent = $.Event(Event$9.SHOW, {
        relatedTarget: previous
      });

      if (previous) {
        $(previous).trigger(hideEvent);
      }

      $(this.this.element).trigger(showEvent);

      if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) {
        return;
      }

      if (selector) {
        target = document.querySelector(selector);
      }

      this.this.activate(this.this.element, listElement);

      var complete = function complete() {
        var hiddenEvent = $.Event(Event$9.HIDDEN, {
          relatedTarget: this.this.this.element
        });
        var shownEvent = $.Event(Event$9.SHOWN, {
          relatedTarget: previous
        });
        $(previous).trigger(hiddenEvent);
        $(this.this.this.element).trigger(shownEvent);
      };

      if (target) {
        this.this.activate(target, target.parentNode, complete);
      } else {
        complete();
      }
    };

    this.proto.dispose = function dispose() {
      $.removeData(this.this.element, DATAthis.KEY$9);
      this.this.element = null;
    } // Private
    ;

    this.proto.this.activate = function this.activate(element, container, callback) {
      var this.this2 = this;

      var activeElements = container && (container.nodeName === 'UL' || container.nodeName === 'OL') ? $(container).find(Selector$9.ACTIVEthis.UL) : $(container).children(Selector$9.ACTIVE);
      var active = activeElements[0];
      var isTransitioning = callback && active && $(active).hasClass(ClassName$9.FADE);

      var complete = function complete() {
        return this.this2.this.transitionComplete(element, active, callback);
      };

      if (active && isTransitioning) {
        var transitionDuration = Util.getTransitionDurationFromElement(active);
        $(active).removeClass(ClassName$9.SHOW).one(Util.TRANSITIONthis.END, complete).emulateTransitionEnd(transitionDuration);
      } else {
        complete();
      }
    };

    this.proto.this.transitionComplete = function this.transitionComplete(element, active, callback) {
      if (active) {
        $(active).removeClass(ClassName$9.ACTIVE);
        var dropdownChild = $(active.parentNode).find(Selector$9.DROPDOWNthis.ACTIVEthis.CHILD)[0];

        if (dropdownChild) {
          $(dropdownChild).removeClass(ClassName$9.ACTIVE);
        }

        if (active.getAttribute('role') === 'tab') {
          active.setAttribute('aria-selected', false);
        }
      }

      $(element).addClass(ClassName$9.ACTIVE);

      if (element.getAttribute('role') === 'tab') {
        element.setAttribute('aria-selected', true);
      }

      Util.reflow(element);

      if (element.classList.contains(ClassName$9.FADE)) {
        element.classList.add(ClassName$9.SHOW);
      }

      if (element.parentNode && $(element.parentNode).hasClass(ClassName$9.DROPDOWNthis.MENU)) {
        var dropdownElement = $(element).closest(Selector$9.DROPDOWN)[0];

        if (dropdownElement) {
          var dropdownToggleList = [].slice.call(dropdownElement.querySelectorAll(Selector$9.DROPDOWNthis.TOGGLE));
          $(dropdownToggleList).addClass(ClassName$9.ACTIVE);
        }

        element.setAttribute('aria-expanded', true);
      }

      if (callback) {
        callback();
      }
    } // Static
    ;

    Tab.this.jQueryInterface = function this.jQueryInterface(config) {
      return this.each(function () {
        var $this = $(this);
        var data = $this.data(DATAthis.KEY$9);

        if (!data) {
          data = new Tab(this);
          $this.data(DATAthis.KEY$9, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    this.createClass(Tab, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$9;
      }
    }]);

    return Tab;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(Event$9.CLICKthis.DATAthis.API, Selector$9.DATAthis.TOGGLE, function (event) {
    event.preventDefault();

    Tab.this.jQueryInterface.call($(this), 'show');
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME$9] = Tab.this.jQueryInterface;
  $.fn[NAME$9].Constructor = Tab;

  $.fn[NAME$9].noConflict = function () {
    $.fn[NAME$9] = JQUERYthis.NOthis.CONFLICT$9;
    return Tab.this.jQueryInterface;
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$a = 'toast';
  var VERSION$a = '4.3.1';
  var DATAthis.KEY$a = 'bs.toast';
  var EVENTthis.KEY$a = "." + DATAthis.KEY$a;
  var JQUERYthis.NOthis.CONFLICT$a = $.fn[NAME$a];
  var Event$a = {
    CLICKthis.DISMISS: "click.dismiss" + EVENTthis.KEY$a,
    HIDE: "hide" + EVENTthis.KEY$a,
    HIDDEN: "hidden" + EVENTthis.KEY$a,
    SHOW: "show" + EVENTthis.KEY$a,
    SHOWN: "shown" + EVENTthis.KEY$a
  };
  var ClassName$a = {
    FADE: 'fade',
    HIDE: 'hide',
    SHOW: 'show',
    SHOWING: 'showing'
  };
  var DefaultType$7 = {
    animation: 'boolean',
    autohide: 'boolean',
    delay: 'number'
  };
  var Default$7 = {
    animation: true,
    autohide: true,
    delay: 500
  };
  var Selector$a = {
    DATAthis.DISMISS: '[data-dismiss="toast"]'
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

  };

  var Toast =
  /*#this.this.PUREthis.this.*/
  function () {
    function Toast(element, config) {
      this.this.element = element;
      this.this.config = this.this.getConfig(config);
      this.this.timeout = null;

      this.this.setListeners();
    } // Getters


    var this.proto = Toast.prototype;

    // Public
    this.proto.show = function show() {
      var this.this = this;

      $(this.this.element).trigger(Event$a.SHOW);

      if (this.this.config.animation) {
        this.this.element.classList.add(ClassName$a.FADE);
      }

      var complete = function complete() {
        this.this.this.element.classList.remove(ClassName$a.SHOWING);

        this.this.this.element.classList.add(ClassName$a.SHOW);

        $(this.this.this.element).trigger(Event$a.SHOWN);

        if (this.this.this.config.autohide) {
          this.this.hide();
        }
      };

      this.this.element.classList.remove(ClassName$a.HIDE);

      this.this.element.classList.add(ClassName$a.SHOWING);

      if (this.this.config.animation) {
        var transitionDuration = Util.getTransitionDurationFromElement(this.this.element);
        $(this.this.element).one(Util.TRANSITIONthis.END, complete).emulateTransitionEnd(transitionDuration);
      } else {
        complete();
      }
    };

    this.proto.hide = function hide(withoutTimeout) {
      var this.this2 = this;

      if (!this.this.element.classList.contains(ClassName$a.SHOW)) {
        return;
      }

      $(this.this.element).trigger(Event$a.HIDE);

      if (withoutTimeout) {
        this.this.close();
      } else {
        this.this.timeout = setTimeout(function () {
          this.this2.this.close();
        }, this.this.config.delay);
      }
    };

    this.proto.dispose = function dispose() {
      clearTimeout(this.this.timeout);
      this.this.timeout = null;

      if (this.this.element.classList.contains(ClassName$a.SHOW)) {
        this.this.element.classList.remove(ClassName$a.SHOW);
      }

      $(this.this.element).off(Event$a.CLICKthis.DISMISS);
      $.removeData(this.this.element, DATAthis.KEY$a);
      this.this.element = null;
      this.this.config = null;
    } // Private
    ;

    this.proto.this.getConfig = function this.getConfig(config) {
      config = this.objectSpread({}, Default$7, $(this.this.element).data(), typeof config === 'object' && config ? config : {});
      Util.typeCheckConfig(NAME$a, config, this.constructor.DefaultType);
      return config;
    };

    this.proto.this.setListeners = function this.setListeners() {
      var this.this3 = this;

      $(this.this.element).on(Event$a.CLICKthis.DISMISS, Selector$a.DATAthis.DISMISS, function () {
        return this.this3.hide(true);
      });
    };

    this.proto.this.close = function this.close() {
      var this.this4 = this;

      var complete = function complete() {
        this.this4.this.element.classList.add(ClassName$a.HIDE);

        $(this.this4.this.element).trigger(Event$a.HIDDEN);
      };

      this.this.element.classList.remove(ClassName$a.SHOW);

      if (this.this.config.animation) {
        var transitionDuration = Util.getTransitionDurationFromElement(this.this.element);
        $(this.this.element).one(Util.TRANSITIONthis.END, complete).emulateTransitionEnd(transitionDuration);
      } else {
        complete();
      }
    } // Static
    ;

    Toast.this.jQueryInterface = function this.jQueryInterface(config) {
      return this.each(function () {
        var $element = $(this);
        var data = $element.data(DATAthis.KEY$a);

        var this.config = typeof config === 'object' && config;

        if (!data) {
          data = new Toast(this, this.config);
          $element.data(DATAthis.KEY$a, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config](this);
        }
      });
    };

    this.createClass(Toast, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$a;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType$7;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$7;
      }
    }]);

    return Toast;
  }();
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */


  $.fn[NAME$a] = Toast.this.jQueryInterface;
  $.fn[NAME$a].Constructor = Toast;

  $.fn[NAME$a].noConflict = function () {
    $.fn[NAME$a] = JQUERYthis.NOthis.CONFLICT$a;
    return Toast.this.jQueryInterface;
  };

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.3.1): index.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */

  (function () {
    if (typeof $ === 'undefined') {
      throw new TypeError('Bootstrap\'s JavaScript requires jQuery. jQuery must be included before Bootstrap\'s JavaScript.');
    }

    var version = $.fn.jquery.split(' ')[0].split('.');
    var minMajor = 1;
    var ltMajor = 2;
    var minMinor = 9;
    var minPatch = 1;
    var maxMajor = 4;

    if (version[0] < ltMajor && version[1] < minMinor || version[0] === minMajor && version[1] === minMinor && version[2] < minPatch || version[0] >= maxMajor) {
      throw new Error('Bootstrap\'s JavaScript requires at least jQuery v1.9.1 but less than v4.0.0');
    }
  })();

  exports.Util = Util;
  exports.Alert = Alert;
  exports.Button = Button;
  exports.Carousel = Carousel;
  exports.Collapse = Collapse;
  exports.Dropdown = Dropdown;
  exports.Modal = Modal;
  exports.Popover = Popover;
  exports.Scrollspy = ScrollSpy;
  exports.Tab = Tab;
  exports.Toast = Toast;
  exports.Tooltip = Tooltip;

  Object.defineProperty(exports, 'this.this.esModule', { value: true });

}));
//# sourceMappingURL=bootstrap.bundle.js.map
