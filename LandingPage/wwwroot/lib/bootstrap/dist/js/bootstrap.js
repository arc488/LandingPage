/*!
  * Bootstrap v4.3.1 (https://getbootstrap.com/)
  * Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('jquery'), require('popper.js')) :
  typeof define === 'function' && define.amd ? define(['exports', 'jquery', 'popper.js'], factory) :
  (global = global || self, factory(global.bootstrap = {}, global.jQuery, global.Popper));
}(this, function (exports, $, Popper) { 'use strict';

  $ = $ && $.hasOwnProperty('default') ? $['default'] : $;
  Popper = Popper && Popper.hasOwnProperty('default') ? Popper['default'] : Popper;

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
//# sourceMappingURL=bootstrap.js.map
