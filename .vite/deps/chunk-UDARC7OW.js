import {
  NavItem_default,
  Nav_default2 as Nav_default
} from "./chunk-DRSSQONT.js";
import {
  NavLink_default
} from "./chunk-CRYG3TVP.js";
import {
  useUncontrolled
} from "./chunk-JXUQP2NS.js";
import {
  TabContent_default,
  TabPane_default,
  Tabs_default,
  getTabTransitionComponent
} from "./chunk-J5E2MHFR.js";
import {
  forEach,
  map
} from "./chunk-ITPNHXDW.js";
import {
  require_jsx_runtime
} from "./chunk-SB72PNXP.js";
import {
  require_react
} from "./chunk-ZAUFE7H7.js";
import {
  __toESM
} from "./chunk-UXIASGQL.js";

// node_modules/react-bootstrap/esm/Tabs.js
var React = __toESM(require_react());
var import_jsx_runtime = __toESM(require_jsx_runtime());
var import_jsx_runtime2 = __toESM(require_jsx_runtime());
function getDefaultActiveKey(children) {
  let defaultActiveKey;
  forEach(children, (child) => {
    if (defaultActiveKey == null) {
      defaultActiveKey = child.props.eventKey;
    }
  });
  return defaultActiveKey;
}
function renderTab(child) {
  const {
    title,
    eventKey,
    disabled,
    tabClassName,
    tabAttrs,
    id
  } = child.props;
  if (title == null) {
    return null;
  }
  return (0, import_jsx_runtime.jsx)(NavItem_default, {
    as: "li",
    role: "presentation",
    children: (0, import_jsx_runtime.jsx)(NavLink_default, {
      as: "button",
      type: "button",
      eventKey,
      disabled,
      id,
      className: tabClassName,
      ...tabAttrs,
      children: title
    })
  });
}
var Tabs = (props) => {
  const {
    id,
    onSelect,
    transition,
    mountOnEnter = false,
    unmountOnExit = false,
    variant = "tabs",
    children,
    activeKey = getDefaultActiveKey(children),
    ...controlledProps
  } = useUncontrolled(props, {
    activeKey: "onSelect"
  });
  return (0, import_jsx_runtime2.jsxs)(Tabs_default, {
    id,
    activeKey,
    onSelect,
    transition: getTabTransitionComponent(transition),
    mountOnEnter,
    unmountOnExit,
    children: [(0, import_jsx_runtime.jsx)(Nav_default, {
      ...controlledProps,
      role: "tablist",
      as: "ul",
      variant,
      children: map(children, renderTab)
    }), (0, import_jsx_runtime.jsx)(TabContent_default, {
      children: map(children, (child) => {
        const childProps = {
          ...child.props
        };
        delete childProps.title;
        delete childProps.disabled;
        delete childProps.tabClassName;
        delete childProps.tabAttrs;
        return (0, import_jsx_runtime.jsx)(TabPane_default, {
          ...childProps
        });
      })
    })]
  });
};
Tabs.displayName = "Tabs";
var Tabs_default2 = Tabs;

export {
  Tabs_default2 as Tabs_default
};
//# sourceMappingURL=chunk-UDARC7OW.js.map
