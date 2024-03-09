(self.webpackChunk_metamask_sdk_ui=self.webpackChunk_metamask_sdk_ui||[]).push([[6584,3551,4609,1073,8195,9785,1488,641,9260,4775],{"./src/design-system/components/Banners/Banner/Banner.types.ts":(__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.BannerVariant=void 0;exports.BannerVariant=function(BannerVariant){return BannerVariant.Alert="Alert",BannerVariant.Tip="Tip",BannerVariant}({})},"./src/design-system/components/Banners/Banner/foundation/BannerBase/BannerBase.constants.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.TESTID_BANNER_CLOSE_BUTTON_ICON=exports.SAMPLE_BANNERBASE_PROPS=exports.DEFAULT_BANNERBASE_TITLE_TEXTVARIANT=exports.DEFAULT_BANNERBASE_DESCRIPTION_TEXTVARIANT=exports.DEFAULT_BANNERBASE_CLOSEBUTTON_ICONNAME=exports.DEFAULT_BANNERBASE_CLOSEBUTTON_BUTTONICONVARIANT=exports.DEFAULT_BANNERBASE_CLOSEBUTTON_BUTTONICONSIZE=exports.DEFAULT_BANNERBASE_ACTIONBUTTON_VARIANT=exports.DEFAULT_BANNERBASE_ACTIONBUTTON_SIZE=void 0;_interopRequireDefault(__webpack_require__("../devreact/node_modules/react/index.js"));var _Text=__webpack_require__("./src/design-system/components/Texts/Text/index.ts"),_Button=__webpack_require__("./src/design-system/components/Buttons/Button/index.ts"),_ButtonIcon=__webpack_require__("./src/design-system/components/Buttons/ButtonIcon/index.ts"),_Icon=function _interopRequireWildcard(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache(r);if(t&&t.has(e))return t.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var i=a?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n}(__webpack_require__("./src/design-system/components/Icons/Icon/index.ts")),_Icon2=__webpack_require__("./src/design-system/components/Icons/Icon/Icon.constants.ts"),_jsxRuntime=__webpack_require__("../devreact/node_modules/react/jsx-runtime.js");function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(e){return e?t:r})(e)}exports.TESTID_BANNER_CLOSE_BUTTON_ICON="banner-close-button-icon",exports.DEFAULT_BANNERBASE_TITLE_TEXTVARIANT=_Text.TextVariant.BodyLGMedium,exports.DEFAULT_BANNERBASE_DESCRIPTION_TEXTVARIANT=_Text.TextVariant.BodyMD,exports.DEFAULT_BANNERBASE_ACTIONBUTTON_VARIANT=_Button.ButtonVariants.Link,exports.DEFAULT_BANNERBASE_ACTIONBUTTON_SIZE=_Button.ButtonSize.Auto,exports.DEFAULT_BANNERBASE_CLOSEBUTTON_BUTTONICONVARIANT=_ButtonIcon.ButtonIconVariants.Secondary,exports.DEFAULT_BANNERBASE_CLOSEBUTTON_BUTTONICONSIZE=_ButtonIcon.ButtonIconSizes.Sm,exports.DEFAULT_BANNERBASE_CLOSEBUTTON_ICONNAME=_Icon.IconName.Close;var SAMPLE_BANNERBASE_STARTACCESSORY=(0,_jsxRuntime.jsx)(_Icon.default,Object.assign({},_Icon2.SAMPLE_ICON_PROPS)),SAMPLE_BANNERBASE_ACTIONBUTTON_PROPS={variant:_Button.ButtonVariants.Secondary,label:"Action Label",onPress:function onPress(){console.log("clicked")}};exports.SAMPLE_BANNERBASE_PROPS={startAccessory:SAMPLE_BANNERBASE_STARTACCESSORY,title:"Sample Banner Title",description:"Sample Banner Description",actionButtonProps:SAMPLE_BANNERBASE_ACTIONBUTTON_PROPS,onClose:function onClose(){console.log("clicked")}}},"./src/design-system/components/Banners/Banner/foundation/BannerBase/BannerBase.styles.ts":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _StyleSheet=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/StyleSheet/index.js"));exports.default=function styleSheet(params){var theme=params.theme,style=params.vars.style;return _StyleSheet.default.create({base:Object.assign({flexDirection:"row",borderRadius:4,backgroundColor:theme.colors.background.default,padding:12},style),startAccessory:{marginRight:8},info:{flex:1},endAccessory:{marginLeft:12}})}},"./src/design-system/components/Banners/Banner/foundation/BannerBase/BannerBase.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _objectWithoutProperties2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),_lodash=__webpack_require__("./node_modules/lodash/lodash.js"),_View=(_interopRequireDefault(__webpack_require__("../devreact/node_modules/react/index.js")),_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/View/index.js"))),_hooks=__webpack_require__("./src/design-system/hooks/index.ts"),_Text=_interopRequireDefault(__webpack_require__("./src/design-system/components/Texts/Text/index.ts")),_Button=_interopRequireDefault(__webpack_require__("./src/design-system/components/Buttons/Button/index.ts")),_ButtonIcon=_interopRequireDefault(__webpack_require__("./src/design-system/components/Buttons/ButtonIcon/index.ts")),_BannerBase=_interopRequireDefault(__webpack_require__("./src/design-system/components/Banners/Banner/foundation/BannerBase/BannerBase.styles.ts")),_BannerBase2=__webpack_require__("./src/design-system/components/Banners/Banner/foundation/BannerBase/BannerBase.constants.tsx"),_jsxRuntime=__webpack_require__("../devreact/node_modules/react/jsx-runtime.js"),_excluded=["style","startAccessory","title","description","actionButtonProps","onClose","closeButtonProps","children"],BannerBase=function BannerBase(_ref){var style=_ref.style,startAccessory=_ref.startAccessory,title=_ref.title,description=_ref.description,actionButtonProps=_ref.actionButtonProps,onClose=_ref.onClose,closeButtonProps=_ref.closeButtonProps,children=_ref.children,props=(0,_objectWithoutProperties2.default)(_ref,_excluded),styles=(0,_hooks.useStyles)(_BannerBase.default,{style}).styles;return(0,_jsxRuntime.jsxs)(_View.default,Object.assign({style:styles.base},props,{children:[(0,_jsxRuntime.jsx)(_View.default,{style:styles.startAccessory,children:startAccessory}),(0,_jsxRuntime.jsxs)(_View.default,{style:styles.info,children:[function renderTitle(){return"string"==typeof title?(0,_jsxRuntime.jsx)(_Text.default,{variant:_BannerBase2.DEFAULT_BANNERBASE_TITLE_TEXTVARIANT,children:title}):title}(),function renderDescription(){return"string"==typeof description?(0,_jsxRuntime.jsx)(_Text.default,{variant:_BannerBase2.DEFAULT_BANNERBASE_DESCRIPTION_TEXTVARIANT,children:description}):description}(),actionButtonProps&&(0,_jsxRuntime.jsx)(_Button.default,Object.assign({size:_BannerBase2.DEFAULT_BANNERBASE_ACTIONBUTTON_SIZE},actionButtonProps)),children]}),(onClose||closeButtonProps)&&(0,_jsxRuntime.jsx)(_View.default,{style:styles.endAccessory,children:(0,_jsxRuntime.jsx)(_ButtonIcon.default,Object.assign({testID:_BannerBase2.TESTID_BANNER_CLOSE_BUTTON_ICON,variant:_BannerBase2.DEFAULT_BANNERBASE_CLOSEBUTTON_BUTTONICONVARIANT,size:_BannerBase2.DEFAULT_BANNERBASE_CLOSEBUTTON_BUTTONICONSIZE,onPress:onClose||(null==closeButtonProps?void 0:closeButtonProps.onPress)||_lodash.noop,iconName:_BannerBase2.DEFAULT_BANNERBASE_CLOSEBUTTON_ICONNAME},closeButtonProps))})]}))};exports.default=BannerBase;try{BannerBase.displayName="BannerBase",BannerBase.__docgenInfo={description:"",displayName:"BannerBase",props:{variant:{defaultValue:null,description:"Variant of Banner",name:"variant",required:!1,type:{name:"enum",value:[{value:'"Alert"'},{value:'"Tip"'}]}},startAccessory:{defaultValue:null,description:"Optional content to be displayed before the info section.",name:"startAccessory",required:!1,type:{name:"ReactNode"}},title:{defaultValue:null,description:"Optional prop for title of the Banner.",name:"title",required:!1,type:{name:"ReactNode"}},description:{defaultValue:null,description:"Optional description below the title.",name:"description",required:!1,type:{name:"ReactNode"}},actionButtonProps:{defaultValue:null,description:"Optional prop to control the action button's props.",name:"actionButtonProps",required:!1,type:{name:"ButtonProps"}},onClose:{defaultValue:null,description:"Optional function to trigger when pressing the close button.",name:"onClose",required:!1,type:{name:"(() => void)"}},closeButtonProps:{defaultValue:null,description:"Optional prop to control the close button's props.",name:"closeButtonProps",required:!1,type:{name:"ButtonIconProps"}},children:{defaultValue:null,description:"Optional prop to add children components to the Banner.",name:"children",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/design-system/components/Banners/Banner/foundation/BannerBase/BannerBase.tsx#BannerBase"]={docgenInfo:BannerBase.__docgenInfo,name:"BannerBase",path:"src/design-system/components/Banners/Banner/foundation/BannerBase/BannerBase.tsx#BannerBase"})}catch(__react_docgen_typescript_loader_error){}},"./src/design-system/components/Banners/Banner/foundation/BannerBase/index.ts":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"default",{enumerable:!0,get:function get(){return _BannerBase.default}});var _BannerBase=_interopRequireDefault(__webpack_require__("./src/design-system/components/Banners/Banner/foundation/BannerBase/BannerBase.tsx"))},"./src/design-system/components/Banners/Banner/variants/BannerAlert/BannerAlert.constants.ts":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.STORYBOOK_BANNERALERT_ARGTYPES=exports.SAMPLE_BANNERALERT_TITLE=exports.SAMPLE_BANNERALERT_PROPS=exports.SAMPLE_BANNERALERT_DESCRIPTION=exports.SAMPLE_BANNERALERT_ACTIONBUTTONLABEL=exports.ICONNAME_BY_BANNERALERTSEVERITY=exports.DEFAULT_BANNERALERT_SEVERITY=exports.DEFAULT_BANNERALERT_ICONSIZE=exports.BANNERALERT_TEST_ID=void 0;var _defineProperty2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/defineProperty.js")),_Button=__webpack_require__("./src/design-system/components/Buttons/Button/index.ts"),_Icon=__webpack_require__("./src/design-system/components/Icons/Icon/index.ts"),_Banner=__webpack_require__("./src/design-system/components/Banners/Banner/Banner.types.ts"),_BannerAlert=__webpack_require__("./src/design-system/components/Banners/Banner/variants/BannerAlert/BannerAlert.types.ts"),DEFAULT_BANNERALERT_SEVERITY=exports.DEFAULT_BANNERALERT_SEVERITY=_BannerAlert.BannerAlertSeverity.Info,SAMPLE_BANNERALERT_TITLE=(exports.DEFAULT_BANNERALERT_ICONSIZE=_Icon.IconSize.Lg,exports.ICONNAME_BY_BANNERALERTSEVERITY=(0,_defineProperty2.default)((0,_defineProperty2.default)((0,_defineProperty2.default)((0,_defineProperty2.default)({},_BannerAlert.BannerAlertSeverity.Info,_Icon.IconName.Info),_BannerAlert.BannerAlertSeverity.Success,_Icon.IconName.Confirmation),_BannerAlert.BannerAlertSeverity.Error,_Icon.IconName.Danger),_BannerAlert.BannerAlertSeverity.Warning,_Icon.IconName.Danger),exports.BANNERALERT_TEST_ID="banneralert",exports.SAMPLE_BANNERALERT_TITLE="Sample Banner Alert Title"),SAMPLE_BANNERALERT_DESCRIPTION=exports.SAMPLE_BANNERALERT_DESCRIPTION="Sample Banner Alert Description",SAMPLE_BANNERALERT_ACTIONBUTTONLABEL=exports.SAMPLE_BANNERALERT_ACTIONBUTTONLABEL="Sample Action Button Label";exports.SAMPLE_BANNERALERT_PROPS={variant:_Banner.BannerVariant.Alert,severity:DEFAULT_BANNERALERT_SEVERITY,title:SAMPLE_BANNERALERT_TITLE,description:SAMPLE_BANNERALERT_DESCRIPTION,actionButtonProps:{variant:_Button.ButtonVariants.Link,label:SAMPLE_BANNERALERT_ACTIONBUTTONLABEL,onPress:function onPress(){return console.log("actionButton clicked!")}},onClose:function onClose(){return console.log("closeButton clicked!")}},exports.STORYBOOK_BANNERALERT_ARGTYPES={severity:{options:_BannerAlert.BannerAlertSeverity,control:{type:"select"}}}},"./src/design-system/components/Banners/Banner/variants/BannerAlert/BannerAlert.styles.ts":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _StyleSheet=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/StyleSheet/index.js")),_BannerAlert=__webpack_require__("./src/design-system/components/Banners/Banner/variants/BannerAlert/BannerAlert.types.ts");exports.default=function styleSheet(params){var colorObj,theme=params.theme,vars=params.vars,style=vars.style;switch(vars.severity){case _BannerAlert.BannerAlertSeverity.Info:colorObj=theme.colors.info;break;case _BannerAlert.BannerAlertSeverity.Success:colorObj=theme.colors.success;break;case _BannerAlert.BannerAlertSeverity.Error:colorObj=theme.colors.error;break;case _BannerAlert.BannerAlertSeverity.Warning:colorObj=theme.colors.warning;break;default:colorObj=theme.colors.info}return _StyleSheet.default.create({base:Object.assign({borderLeftWidth:4,borderColor:colorObj.default,backgroundColor:colorObj.muted,paddingLeft:8},style),severityIcon:{color:colorObj.default}})}},"./src/design-system/components/Banners/Banner/variants/BannerAlert/BannerAlert.test.tsx":(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js"),_enzyme=(_interopRequireDefault(__webpack_require__("../devreact/node_modules/react/index.js")),__webpack_require__("./node_modules/enzyme/build/index.js")),_BannerAlert=_interopRequireDefault(__webpack_require__("./src/design-system/components/Banners/Banner/variants/BannerAlert/BannerAlert.tsx")),_BannerAlert2=__webpack_require__("./src/design-system/components/Banners/Banner/variants/BannerAlert/BannerAlert.constants.ts"),_jsxRuntime=__webpack_require__("../devreact/node_modules/react/jsx-runtime.js");describe("BannerAlert",(function(){it("should render default settings correctly",(function(){var wrapper=(0,_enzyme.shallow)((0,_jsxRuntime.jsx)(_BannerAlert.default,Object.assign({},_BannerAlert2.SAMPLE_BANNERALERT_PROPS)));expect(wrapper).toMatchSnapshot()})),it("should render BannerAlert",(function(){var bannerAlertComponent=(0,_enzyme.shallow)((0,_jsxRuntime.jsx)(_BannerAlert.default,Object.assign({},_BannerAlert2.SAMPLE_BANNERALERT_PROPS))).findWhere((function(node){return node.prop("testID")===_BannerAlert2.BANNERALERT_TEST_ID}));expect(bannerAlertComponent.exists()).toBe(!0)}))}))},"./src/design-system/components/Banners/Banner/variants/BannerAlert/BannerAlert.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _objectWithoutProperties2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),_hooks=(_interopRequireDefault(__webpack_require__("../devreact/node_modules/react/index.js")),__webpack_require__("./src/design-system/hooks/index.ts")),_BannerBase=_interopRequireDefault(__webpack_require__("./src/design-system/components/Banners/Banner/foundation/BannerBase/index.ts")),_Icon=_interopRequireDefault(__webpack_require__("./src/design-system/components/Icons/Icon/index.ts")),_BannerAlert=_interopRequireDefault(__webpack_require__("./src/design-system/components/Banners/Banner/variants/BannerAlert/BannerAlert.styles.ts")),_BannerAlert2=__webpack_require__("./src/design-system/components/Banners/Banner/variants/BannerAlert/BannerAlert.constants.ts"),_jsxRuntime=__webpack_require__("../devreact/node_modules/react/jsx-runtime.js"),_excluded=["style","severity"],BannerAlert=function BannerAlert(_ref){var style=_ref.style,_ref$severity=_ref.severity,severity=void 0===_ref$severity?_BannerAlert2.DEFAULT_BANNERALERT_SEVERITY:_ref$severity,props=(0,_objectWithoutProperties2.default)(_ref,_excluded),styles=(0,_hooks.useStyles)(_BannerAlert.default,{style,severity}).styles,severityIcon=(0,_jsxRuntime.jsx)(_Icon.default,{name:_BannerAlert2.ICONNAME_BY_BANNERALERTSEVERITY[severity],color:styles.severityIcon.color,size:_BannerAlert2.DEFAULT_BANNERALERT_ICONSIZE});return(0,_jsxRuntime.jsx)(_BannerBase.default,Object.assign({style:styles.base,startAccessory:severityIcon,testID:_BannerAlert2.BANNERALERT_TEST_ID},props))};exports.default=BannerAlert;try{BannerAlert.displayName="BannerAlert",BannerAlert.__docgenInfo={description:"",displayName:"BannerAlert",props:{variant:{defaultValue:null,description:"Variant of Banner",name:"variant",required:!1,type:{name:"enum",value:[{value:'"Alert"'}]}},severity:{defaultValue:{value:"BannerAlertSeverity.Info"},description:"Severity of the BannerAlert.",name:"severity",required:!1,type:{name:"enum",value:[{value:'"Info"'},{value:'"Success"'},{value:'"Warning"'},{value:'"Error"'}]}},startAccessory:{defaultValue:null,description:"Optional content to be displayed before the info section.",name:"startAccessory",required:!1,type:{name:"ReactNode"}},title:{defaultValue:null,description:"Optional prop for title of the Banner.",name:"title",required:!1,type:{name:"ReactNode"}},description:{defaultValue:null,description:"Optional description below the title.",name:"description",required:!1,type:{name:"ReactNode"}},actionButtonProps:{defaultValue:null,description:"Optional prop to control the action button's props.",name:"actionButtonProps",required:!1,type:{name:"ButtonProps"}},onClose:{defaultValue:null,description:"Optional function to trigger when pressing the close button.",name:"onClose",required:!1,type:{name:"(() => void)"}},closeButtonProps:{defaultValue:null,description:"Optional prop to control the close button's props.",name:"closeButtonProps",required:!1,type:{name:"ButtonIconProps"}},children:{defaultValue:null,description:"Optional prop to add children components to the Banner.",name:"children",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/design-system/components/Banners/Banner/variants/BannerAlert/BannerAlert.tsx#BannerAlert"]={docgenInfo:BannerAlert.__docgenInfo,name:"BannerAlert",path:"src/design-system/components/Banners/Banner/variants/BannerAlert/BannerAlert.tsx#BannerAlert"})}catch(__react_docgen_typescript_loader_error){}},"./src/design-system/components/Banners/Banner/variants/BannerAlert/BannerAlert.types.ts":(__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.BannerAlertSeverity=void 0;exports.BannerAlertSeverity=function(BannerAlertSeverity){return BannerAlertSeverity.Info="Info",BannerAlertSeverity.Success="Success",BannerAlertSeverity.Warning="Warning",BannerAlertSeverity.Error="Error",BannerAlertSeverity}({})},"?8d7a":()=>{},"?eecd":()=>{}}]);