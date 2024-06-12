define("Content",["lumapps-sdk-js","react","axios"],(function(__WEBPACK_EXTERNAL_MODULE__441__,__WEBPACK_EXTERNAL_MODULE__959__,__WEBPACK_EXTERNAL_MODULE__386__){return function(){"use strict";function __webpack_require__(moduleId){var cachedModule=__webpack_module_cache__[moduleId];if(void 0!==cachedModule)return cachedModule.exports;var module=__webpack_module_cache__[moduleId]={exports:{}};return __webpack_modules__[moduleId](module,module.exports,__webpack_require__),module.exports}var __webpack_modules__={386:function(module){module.exports=__WEBPACK_EXTERNAL_MODULE__386__},441:function(module){module.exports=__WEBPACK_EXTERNAL_MODULE__441__},959:function(module){module.exports=__WEBPACK_EXTERNAL_MODULE__959__}},__webpack_module_cache__={};__webpack_require__.n=function(module){var getter=module&&module.__esModule?function(){return module.default}:function(){return module};return __webpack_require__.d(getter,{a:getter}),getter},__webpack_require__.d=function(exports,definition){for(var key in definition)__webpack_require__.o(definition,key)&&!__webpack_require__.o(exports,key)&&Object.defineProperty(exports,key,{enumerable:!0,get:definition[key]})},__webpack_require__.o=function(obj,prop){return Object.prototype.hasOwnProperty.call(obj,prop)},__webpack_require__.r=function(exports){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(exports,"__esModule",{value:!0})};var __webpack_exports__={};return function(){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Search:function(){return Search}});var external_lumapps_sdk_js_=__webpack_require__(441),external_react_=__webpack_require__(959),external_react_default=__webpack_require__.n(external_react_),external_axios_=__webpack_require__(386),external_axios_default=__webpack_require__.n(external_axios_);const mapApiResultsToExtensionOutput=apiResult=>{const mappedResults=(results=apiResult.results,results.map((_ref=>{let{id:id,title:title,url:url,description:description,metadata:metadata}=_ref;return{extensionSearchResultKey:id,id:id,title:title,url:url,snippet:description,customMetadata:metadata?[metadata.type,metadata.lastUpdatedDate,"".concat(metadata.likes," likes")]:[]}})));var results;return{hasMore:apiResult.hasMore,results:mappedResults,totalCount:apiResult.resultCount,status:external_lumapps_sdk_js_.RESULT_STATUS.FETCHED,defaultSortValue:"relevance",sortOrders:[{label:{default:"Relevance"},value:"relevance"},{label:{default:"Most Recent"},value:"desc"},{label:{default:"Least Recent"},value:"asc"}],facets:[]}},Search={searchSdkVersion:external_lumapps_sdk_js_.SEARCH_SDK_SUPPORTED_VERSIONS.V1,useSearch:props=>{const[data,setData]=external_react_default().useState({results:[],hasMore:!1,status:external_lumapps_sdk_js_.RESULT_STATUS.INITIAL,totalCount:0}),[status,setStatus]=external_react_default().useState(external_lumapps_sdk_js_.RESULT_STATUS.INITIAL),{getToken:getToken}=(0,external_lumapps_sdk_js_.useConnector)();return getToken().then((res=>console.log(res))).catch((err=>console.log("Error trace: ",err))),external_react_default().useEffect((()=>{(async()=>{try{setStatus(external_lumapps_sdk_js_.RESULT_STATUS.LOADING);const CONFLUENCE_URL="https://lumapps-testproxy.tivo.com/search",headers={"Content-Type":"application/json"},response=await external_axios_default().post(CONFLUENCE_URL,{query:props.query,page:props.page,sort:props.sort},{headers:headers}),shouldMergeResults=props.page&&props.page>0,output=mapApiResultsToExtensionOutput(response.data);setData((prev=>({...output,results:shouldMergeResults?[...prev.results,...output.results]:output.results}))),setStatus(external_lumapps_sdk_js_.RESULT_STATUS.FETCHED)}catch(error){setStatus(external_lumapps_sdk_js_.RESULT_STATUS.ERROR)}})()}),[props.language,props.page,props.pageSize,props.query,props.sort,""]),{...data,status:status}}}}(),__webpack_exports__}()}));