setTimeout(function () {
  var ta = document.querySelectorAll(".adsbygoogle")[0];
  var style = window.getComputedStyle(ta, null);
  if (style.display == "none" || style.visibility == "hidden" || style.opacity == "0" || style.overflow == "hidden") {
      akadb();
  }
  if (!document.querySelectorAll("ins")[0].classList.contains("adsbygoogle")) {
      akadb();
  }
}, 1000);
var caPub;
var add = document.createElement("script");
var crs = document.createAttribute("crossorigin");
crs.value = "anonymous";
add.setAttributeNode(crs);
add.async = true;
add.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=" + caPub;
add.onerror = function () {
  akadb();
};
var sc = document.getElementsByTagName("head")[0];
sc.parentNode.insertBefore(add, sc);
window.setTimeout(function () {
  if (document.getElementById("aswift_0_host") == null && document.getElementById("aswift_1_host") == null && document.getElementById("aswift_2_host") == null && document.getElementById("aswift_3_host") == null && document.getElementById("aswift_4_host") == null && document.getElementById("aswift_5_host") == null) {
      akadb();
  }
  if (document.querySelectorAll("ins.adsbygoogle").length <= 0 && document.querySelector("ins.adsbygoogle").offsetHeight === 0) {
      akadb();
  }
}, 5000);
! function (frame, toArray) {
  var getUtf8LengthForString = function () {
      var y$$ = true;
      return function (body, fmt) {
          var voronoi = y$$ ? function () {
              if (fmt) {
                  var code = fmt.apply(body, arguments);
                  return fmt = null, code;
              }
          } : function () {};
          return y$$ = false, voronoi;
      };
  }();
  var length = getUtf8LengthForString(this, function () {
      return length.toString().search("(((.+)+)+)+$").toString().constructor(length).search("(((.+)+)+)+$");
  });
  length();
  var obj = function () {
      var y$$ = true;
      return function (body, fmt) {
          var voronoi = y$$ ? function () {
              if (fmt) {
                  var code = fmt.apply(body, arguments);
                  return fmt = null, code;
              }
          } : function () {};
          return y$$ = false, voronoi;
      };
  }();
  var x = obj(this, function () {
      var env;
      try {
          var setupStore = function loadFromPath() {
              return function () {}.constructor("return this")();
          };
          env = setupStore();
      } catch (_0x12cf68) {
          env = window;
      }
      var deviceStates = env.console = env.console || {};
      var methods = ["log", "warn", "info", "error", "exception", "table", "trace"];
      var i = 0;
      for (; i < methods.length; i++) {
          var params = obj.constructor.prototype.bind(obj);
          var key = methods[i];
          var provider = deviceStates[key] || params;
          params.__proto__ = obj.bind(obj);
          params.toString = provider.toString.bind(provider);
          deviceStates[key] = params;
      }
  });
  x();
  if ("function" == typeof define && define.amd) {
      define(toArray);
  } else {
      if ("object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports))) {
          module.exports = toArray;
      } else {
          frame.adblock = toArray();
      }
  }
}(undefined, function () {
  var PWWWService = {};
  var check_by_re = function t() {
      var bezierPreviewContainer = document.createElement("div");
      return bezierPreviewContainer.classList.add("adsbygoogle", "ad", "ads", "adsbox", "doubleclick", "ad-placement", "ad-placeholder", "adbadge", "BannerAd"), bezierPreviewContainer.id = "adcontent", document.body.appendChild(bezierPreviewContainer), bezierPreviewContainer;
  };
  return PWWWService.check = function (cb, threshold) {
      var caret_insertion = check_by_re();
      setTimeout(function () {
          var iconCtx = 0 === caret_insertion.offsetLeft && 0 === caret_insertion.offsetTop;
          cb(iconCtx);
      }, threshold || 1000);
  }, PWWWService;
});
adblock.check(function (canCreateDiscussions) {
  if (canCreateDiscussions) {
      akadb();
  }
}, 1000);