import {
  require_react
} from "./chunk-ZAUFE7H7.js";
import {
  __toESM
} from "./chunk-UXIASGQL.js";

// node_modules/@restart/hooks/esm/useEventCallback.js
var import_react2 = __toESM(require_react());

// node_modules/@restart/hooks/esm/useCommittedRef.js
var import_react = __toESM(require_react());
function useCommittedRef(value) {
  const ref = (0, import_react.useRef)(value);
  (0, import_react.useEffect)(() => {
    ref.current = value;
  }, [value]);
  return ref;
}
var useCommittedRef_default = useCommittedRef;

// node_modules/@restart/hooks/esm/useEventCallback.js
function useEventCallback(fn) {
  const ref = useCommittedRef_default(fn);
  return (0, import_react2.useCallback)(function(...args) {
    return ref.current && ref.current(...args);
  }, [ref]);
}

// node_modules/@restart/hooks/esm/useMergedRefs.js
var import_react3 = __toESM(require_react());
var toFnRef = (ref) => !ref || typeof ref === "function" ? ref : (value) => {
  ref.current = value;
};
function mergeRefs(refA, refB) {
  const a = toFnRef(refA);
  const b = toFnRef(refB);
  return (value) => {
    if (a)
      a(value);
    if (b)
      b(value);
  };
}
function useMergedRefs(refA, refB) {
  return (0, import_react3.useMemo)(() => mergeRefs(refA, refB), [refA, refB]);
}
var useMergedRefs_default = useMergedRefs;

// node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf(o, p);
}

// node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  _setPrototypeOf(subClass, superClass);
}

export {
  useCommittedRef_default,
  useEventCallback,
  _inheritsLoose,
  useMergedRefs_default
};
//# sourceMappingURL=chunk-SIVJ4ZJB.js.map
