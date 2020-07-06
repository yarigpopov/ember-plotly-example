'use strict';



;define("plotly-ember-example/adapters/-json-api", ["exports", "@ember-data/adapter/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _jsonApi.default;
    }
  });
});
;define("plotly-ember-example/app", ["exports", "ember-resolver", "ember-load-initializers", "plotly-ember-example/config/environment"], function (_exports, _emberResolver, _emberLoadInitializers, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  class App extends Ember.Application {
    constructor(...args) {
      super(...args);

      _defineProperty(this, "modulePrefix", _environment.default.modulePrefix);

      _defineProperty(this, "podModulePrefix", _environment.default.podModulePrefix);

      _defineProperty(this, "Resolver", _emberResolver.default);
    }

  }

  _exports.default = App;
  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);
});
;define("plotly-ember-example/component-managers/glimmer", ["exports", "@glimmer/component/-private/ember-component-manager"], function (_exports, _emberComponentManager) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberComponentManager.default;
    }
  });
});
;define("plotly-ember-example/components/form-for-values", ["exports", "@glimmer/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _class, _descriptor, _temp;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    <Input
    type="number"
    value={{this.data.value}}
    {{!-- {{on "change" (fn (mut "data.value") "target.value")}} --}}
  />
  <div>
    <input type="range" id="revenue" name="revenue"
          min="0" max="300"
          value={{readonly this.data.value}}
          onchange={{action (mut this.data.value) value="target.value"}}
           >
    <label for="revenue">Revenue</label>
  </div>
  
  {{yield this.data}}
  */
  {
    id: "aNn6LiKl",
    block: "{\"symbols\":[\"&default\"],\"statements\":[[7,\"input\",[[14,\"value\",[27,[24,0],[\"data\",\"value\"]],null],[23,\"type\",\"number\",null]],[[],[]],null],[1,1,0,0,\"\\n\"],[9,\"div\",true],[10],[1,1,0,0,\"\\n  \"],[9,\"input\",true],[12,\"id\",\"revenue\",null],[12,\"name\",\"revenue\",null],[12,\"min\",\"0\",null],[12,\"max\",\"300\",null],[13,\"value\",[31,220,8,[27,[26,0,\"CallHead\"],[]],[[27,[24,0],[\"data\",\"value\"]]],null],null],[13,\"onchange\",[31,266,6,[27,[26,2,\"CallHead\"],[]],[[27,[24,0],[]],[31,274,3,[27,[26,1,\"CallHead\"],[]],[[27,[24,0],[\"data\",\"value\"]]],null]],[[\"value\"],[\"target.value\"]]],null],[12,\"type\",\"range\",null],[10],[11],[1,1,0,0,\"\\n  \"],[9,\"label\",true],[12,\"for\",\"revenue\",null],[10],[1,1,0,0,\"Revenue\"],[11],[1,1,0,0,\"\\n\"],[11],[1,1,0,0,\"\\n\\n\"],[16,1,[[27,[24,0],[\"data\"]]]]],\"hasEval\":false,\"upvars\":[\"readonly\",\"mut\",\"action\"]}",
    meta: {
      moduleName: "plotly-ember-example/components/form-for-values.hbs"
    }
  });

  let FormForValuesComponent = (_class = (_temp = class FormForValuesComponent extends _component.default {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "data", _descriptor, this);
    }

  }, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "data", [Ember._tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return {
        value: 200
      };
    }
  })), _class);
  _exports.default = FormForValuesComponent;

  Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, FormForValuesComponent);
});
;define("plotly-ember-example/components/pl-chart", ["exports", "@glimmer/component", "plotly.js"], function (_exports, _component, _plotly) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _class;

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    <div
  {{did-insert this.drawChart}}
  {{did-update this.drawChart @dataValue}}
  ></div>
  */
  {
    id: "cwE6HwLb",
    block: "{\"symbols\":[\"@dataValue\"],\"statements\":[[9,\"div\",false],[3,0,0,[27,[26,0,\"ModifierHead\"],[]],[[27,[24,0],[\"drawChart\"]]],null],[3,0,0,[27,[26,1,\"ModifierHead\"],[]],[[27,[24,0],[\"drawChart\"]],[27,[24,1],[]]],null],[10],[11]],\"hasEval\":false,\"upvars\":[\"did-insert\",\"did-update\"]}",
    meta: {
      moduleName: "plotly-ember-example/components/pl-chart.hbs"
    }
  });

  let PlChartComponent = (_class = class PlChartComponent extends _component.default {
    drawChart(element) {
      let _data = this.args.data;
      const externalData = [{
        value: this.args.dataValue,
        deltaReference: 200,
        titleText: "Revenue",
        gaugeRange: [null, 300],
        guageThreshold: 170,
        guageSteps: {
          zero: 0,
          one: 150,
          two: 250
        },
        domainY: [0.08, 0.25]
      }, {
        value: 35,
        deltaReference: 200,
        titleText: "Profit",
        gaugeRange: [null, 100],
        guageThreshold: 170,
        guageSteps: {
          zero: 0,
          one: 25,
          two: 75
        },
        domainY: [0.4, 0.6]
      }, {
        value: 220,
        deltaReference: 200,
        titleText: "Satisfaction",
        gaugeRange: [null, 300],
        guageThreshold: 210,
        guageSteps: {
          zero: 0,
          one: 150,
          two: 250
        },
        domainY: [0.7, 0.9]
      }];
      let data = externalData.map(i => ({
        type: "indicator",
        mode: "number+gauge+delta",
        value: i.value,
        delta: {
          reference: i.deltaReference
        },
        domain: {
          x: [0.25, 1],
          y: i.domainY
        },
        title: {
          text: i.titleText
        },
        gauge: {
          shape: "bullet",
          axis: {
            range: i.gaugeRange
          },
          threshold: {
            line: {
              color: "1B1534",
              width: 5
            },
            thickness: 0.75,
            value: i.guageThreshold
          },
          steps: [{
            range: [i.guageSteps.zero, i.guageSteps.one],
            color: "#8A00E5"
          }, {
            range: [i.guageSteps.one, i.guageSteps.two],
            color: "#CF98FF"
          }],
          bar: {
            color: "#1B1534"
          }
        }
      }));
      var layout = {
        width: 600,
        height: 250,
        margin: {
          t: 10,
          r: 25,
          l: 25,
          b: 10
        }
      };

      _plotly.default.react(element, data, layout);
    }

  }, (_applyDecoratedDescriptor(_class.prototype, "drawChart", [Ember._action], Object.getOwnPropertyDescriptor(_class.prototype, "drawChart"), _class.prototype)), _class);
  _exports.default = PlChartComponent;

  Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, PlChartComponent);
});
;define("plotly-ember-example/components/welcome-page", ["exports", "ember-welcome-page/components/welcome-page"], function (_exports, _welcomePage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
;define("plotly-ember-example/data-adapter", ["exports", "@ember-data/debug"], function (_exports, _debug) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _debug.default;
    }
  });
});
;define("plotly-ember-example/helpers/app-version", ["exports", "plotly-ember-example/config/environment", "ember-cli-app-version/utils/regexp"], function (_exports, _environment, _regexp) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.appVersion = appVersion;
  _exports.default = void 0;

  function appVersion(_, hash = {}) {
    const version = _environment.default.APP.version; // e.g. 1.0.0-alpha.1+4jds75hf
    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility

    let versionOnly = hash.versionOnly || hash.hideSha;
    let shaOnly = hash.shaOnly || hash.hideVersion;
    let match = null;

    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      } // Fallback to just version


      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }

  var _default = Ember.Helper.helper(appVersion);

  _exports.default = _default;
});
;define("plotly-ember-example/helpers/pluralize", ["exports", "ember-inflector/lib/helpers/pluralize"], function (_exports, _pluralize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _pluralize.default;
  _exports.default = _default;
});
;define("plotly-ember-example/helpers/singularize", ["exports", "ember-inflector/lib/helpers/singularize"], function (_exports, _singularize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _singularize.default;
  _exports.default = _default;
});
;define("plotly-ember-example/initializers/app-version", ["exports", "ember-cli-app-version/initializer-factory", "plotly-ember-example/config/environment"], function (_exports, _initializerFactory, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  let name, version;

  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  var _default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
  _exports.default = _default;
});
;define("plotly-ember-example/initializers/container-debug-adapter", ["exports", "ember-resolver/resolvers/classic/container-debug-adapter"], function (_exports, _containerDebugAdapter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'container-debug-adapter',

    initialize() {
      let app = arguments[1] || arguments[0];
      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }

  };
  _exports.default = _default;
});
;define("plotly-ember-example/initializers/ember-data-data-adapter", ["exports", "@ember-data/debug/setup"], function (_exports, _setup) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _setup.default;
    }
  });
});
;define("plotly-ember-example/initializers/ember-data", ["exports", "ember-data", "ember-data/setup-container"], function (_exports, _emberData, _setupContainer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*
    This code initializes EmberData in an Ember application.
  
    It ensures that the `store` service is automatically injected
    as the `store` property on all routes and controllers.
  */
  var _default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
  _exports.default = _default;
});
;define("plotly-ember-example/initializers/export-application-global", ["exports", "plotly-ember-example/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.initialize = initialize;
  _exports.default = void 0;

  function initialize() {
    var application = arguments[1] || arguments[0];

    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;

      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;
        application.reopen({
          willDestroy: function () {
            this._super.apply(this, arguments);

            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  var _default = {
    name: 'export-application-global',
    initialize: initialize
  };
  _exports.default = _default;
});
;define("plotly-ember-example/instance-initializers/ember-data", ["exports", "ember-data/initialize-store-service"], function (_exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'ember-data',
    initialize: _initializeStoreService.default
  };
  _exports.default = _default;
});
;define("plotly-ember-example/modifiers/did-insert", ["exports", "@ember/render-modifiers/modifiers/did-insert"], function (_exports, _didInsert) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _didInsert.default;
    }
  });
});
;define("plotly-ember-example/modifiers/did-update", ["exports", "@ember/render-modifiers/modifiers/did-update"], function (_exports, _didUpdate) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _didUpdate.default;
    }
  });
});
;define("plotly-ember-example/modifiers/will-destroy", ["exports", "@ember/render-modifiers/modifiers/will-destroy"], function (_exports, _willDestroy) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _willDestroy.default;
    }
  });
});
;define("plotly-ember-example/router", ["exports", "plotly-ember-example/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  class Router extends Ember.Router {
    constructor(...args) {
      super(...args);

      _defineProperty(this, "location", _environment.default.locationType);

      _defineProperty(this, "rootURL", _environment.default.rootURL);
    }

  }

  _exports.default = Router;
  Router.map(function () {});
});
;define("plotly-ember-example/serializers/-default", ["exports", "@ember-data/serializer/json"], function (_exports, _json) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _json.default;
    }
  });
});
;define("plotly-ember-example/serializers/-json-api", ["exports", "@ember-data/serializer/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _jsonApi.default;
    }
  });
});
;define("plotly-ember-example/serializers/-rest", ["exports", "@ember-data/serializer/rest"], function (_exports, _rest) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _rest.default;
    }
  });
});
;define("plotly-ember-example/services/plotly", ["exports", "plotly.js"], function (_exports, _plotly) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const ObjectPromiseProxy = Ember.ObjectProxy.extend(Ember.PromiseProxyMixin);
  // TODO: Make configurable via ENV
  // https://github.com/plotly/plotly.js/blob/5bc25b490702e5ed61265207833dbd58e8ab27f1/src/plot_api/plot_config.js#L22-L184
  const defaultConfig = {
    staticPlot: false,
    editable: true,
    edits: {
      annotationPosition: false,
      annotationTail: false,
      annotationText: false,
      axisTitleText: false,
      colorbarPosition: false,
      colorbarTitleText: false,
      legendPosition: false,
      legendText: false,
      shapePosition: false,
      titleText: false
    },
    autosizable: false,
    queueLength: 0,
    fillFrame: false,
    frameMargins: 0,
    scrollZoom: false,
    doubleClick: 'reset+autosize',
    showTips: false,
    showAxisDragHandles: true,
    showAxisRangeEntryBoxes: true,
    showLink: false,
    sendData: true,
    linkText: 'Edit chart',
    showSources: false,
    displayModeBar: 'hover',
    modeBarButtonsToRemove: ['sendDataToCloud'],
    modeBarButtonsToAdd: [],
    modeBarButtons: false,
    displaylogo: true,
    plotGlPixelRatio: 2,
    setBackground: 'transparent',
    topojsonURL: 'https://cdn.plot.ly/',
    mapboxAccessToken: null,
    globalTransforms: [],
    locale: 'en-US'
  };
  const knownPlotlyEvents = ['afterplot', 'animated', 'autosize', 'click', 'deselect', 'doubleclick', 'hover', 'legendclick', 'legenddoubleclick', 'redraw', 'relayout', 'restyle', 'selected', 'selecting', 'unhover'].map(suffix => `plotly_${suffix}`);

  class PlotlyService extends Ember.Service {
    constructor(...args) {
      super(...args); // this.set('_plotly', ObjectPromiseProxy.create({
      //   // somehow import('plotly.js') does not work
      //   promise: import('plotly.js/dist/plotly').then(module => module.default)
      // }));

      this.set('_plotly', _plotly.default);
      /* global Ember */

      if (Ember.testing) {
        Ember.Test.registerWaiter(() => this._plotly.isFulfilled);
      } // this._logUnrecognizedPlotlyEvents();

    }

  }

  _exports.default = PlotlyService;
});
;define("plotly-ember-example/services/store", ["exports", "ember-data/store"], function (_exports, _store) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _store.default;
    }
  });
});
;define("plotly-ember-example/templates/application", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "BNfQc9AK",
    "block": "{\"symbols\":[\"formData\"],\"statements\":[[7,\"form-for-values\",[],[[],[]],[[\"default\"],[{\"statements\":[[1,1,0,0,\"\\n  \"],[7,\"pl-chart\",[],[[\"@data\",\"@dataValue\"],[[27,[24,1],[]],[27,[24,1],[\"value\"]]]],null],[1,1,0,0,\"\\n\"]],\"parameters\":[1]}]]],[1,1,0,0,\"\\n\\n\"],[1,0,0,0,[31,0,0,[27,[26,1,\"CallHead\"],[]],[[31,0,0,[27,[26,0,\"CallHead\"],[]],null,null]],null]]],\"hasEval\":false,\"upvars\":[\"-outlet\",\"component\"]}",
    "meta": {
      "moduleName": "plotly-ember-example/templates/application.hbs"
    }
  });

  _exports.default = _default;
});
;define("plotly-ember-example/transforms/boolean", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.BooleanTransform;
    }
  });
});
;define("plotly-ember-example/transforms/date", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.DateTransform;
    }
  });
});
;define("plotly-ember-example/transforms/number", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.NumberTransform;
    }
  });
});
;define("plotly-ember-example/transforms/string", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.StringTransform;
    }
  });
});
;

;define('plotly-ember-example/config/environment', [], function() {
  var prefix = 'plotly-ember-example';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

;
          if (!runningTests) {
            require("plotly-ember-example/app")["default"].create({"name":"plotly-ember-example","version":"0.0.0+196376eb"});
          }
        
//# sourceMappingURL=plotly-ember-example.map
