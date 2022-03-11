(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('parent')) :
	typeof define === 'function' && define.amd ? define(['parent'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.parent));
})(this, (function (parent) { 'use strict';

	function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

	var parent__default = /*#__PURE__*/_interopDefaultLegacy(parent);

	console.log(child);
	console.log(parent__default["default"]);

}));
//# sourceMappingURL=index.umd.js.map
