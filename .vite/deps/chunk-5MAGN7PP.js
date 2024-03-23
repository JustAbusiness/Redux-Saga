import {
  TabContent_default,
  TabPane_default,
  Tabs_default,
  getTabTransitionComponent
} from "./chunk-J5E2MHFR.js";
import {
  require_prop_types
} from "./chunk-EGE5PBXS.js";
import {
  require_jsx_runtime
} from "./chunk-SB72PNXP.js";
import {
  require_react
} from "./chunk-ZAUFE7H7.js";
import {
  __toESM
} from "./chunk-UXIASGQL.js";

// node_modules/react-bootstrap/esm/Tab.js
var import_prop_types = __toESM(require_prop_types());

// node_modules/react-bootstrap/esm/TabContainer.js
var React = __toESM(require_react());
var import_jsx_runtime = __toESM(require_jsx_runtime());
var TabContainer = ({
  transition,
  ...props
}) => (0, import_jsx_runtime.jsx)(Tabs_default, {
  ...props,
  transition: getTabTransitionComponent(transition)
});
TabContainer.displayName = "TabContainer";
var TabContainer_default = TabContainer;

// node_modules/react-bootstrap/esm/Tab.js
var propTypes = {
  eventKey: import_prop_types.default.oneOfType([import_prop_types.default.string, import_prop_types.default.number]),
  /**
   * Content for the tab title.
   */
  title: import_prop_types.default.node.isRequired,
  /**
   * The disabled state of the tab.
   */
  disabled: import_prop_types.default.bool,
  /**
   * Class to pass to the underlying nav link.
   */
  tabClassName: import_prop_types.default.string,
  /**
   * Object containing attributes to pass to underlying nav link.
   */
  tabAttrs: import_prop_types.default.object
};
var Tab = () => {
  throw new Error("ReactBootstrap: The `Tab` component is not meant to be rendered! It's an abstract component that is only valid as a direct Child of the `Tabs` Component. For custom tabs components use TabPane and TabsContainer directly");
};
Tab.propTypes = propTypes;
var Tab_default = Object.assign(Tab, {
  Container: TabContainer_default,
  Content: TabContent_default,
  Pane: TabPane_default
});

export {
  TabContainer_default,
  Tab_default
};
//# sourceMappingURL=chunk-5MAGN7PP.js.map
