import {
  require_react
} from "./chunk-ZAUFE7H7.js";
import {
  __toESM
} from "./chunk-UXIASGQL.js";

// node_modules/dom-helpers/esm/querySelectorAll.js
var toArray = Function.prototype.bind.call(Function.prototype.call, [].slice);
function qsa(element, selector) {
  return toArray(element.querySelectorAll(selector));
}

// node_modules/@restart/hooks/esm/usePrevious.js
var import_react = __toESM(require_react());
function usePrevious(value) {
  const ref = (0, import_react.useRef)(null);
  (0, import_react.useEffect)(() => {
    ref.current = value;
  });
  return ref.current;
}

// node_modules/@restart/hooks/esm/useMounted.js
var import_react2 = __toESM(require_react());
function useMounted() {
  const mounted = (0, import_react2.useRef)(true);
  const isMounted = (0, import_react2.useRef)(() => mounted.current);
  (0, import_react2.useEffect)(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
    };
  }, []);
  return isMounted.current;
}

// node_modules/@restart/ui/esm/DataKey.js
var ATTRIBUTE_PREFIX = `data-rr-ui-`;
var PROPERTY_PREFIX = `rrUi`;
function dataAttr(property) {
  return `${ATTRIBUTE_PREFIX}${property}`;
}
function dataProp(property) {
  return `${PROPERTY_PREFIX}${property}`;
}

// node_modules/@restart/hooks/esm/useIsomorphicEffect.js
var import_react3 = __toESM(require_react());
var isReactNative = typeof global !== "undefined" && // @ts-ignore
global.navigator && // @ts-ignore
global.navigator.product === "ReactNative";
var isDOM = typeof document !== "undefined";
var useIsomorphicEffect_default = isDOM || isReactNative ? import_react3.useLayoutEffect : import_react3.useEffect;

export {
  qsa,
  usePrevious,
  useMounted,
  dataAttr,
  dataProp,
  useIsomorphicEffect_default
};
//# sourceMappingURL=chunk-JEVHYU2Y.js.map
