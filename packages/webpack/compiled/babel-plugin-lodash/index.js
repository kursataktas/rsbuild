(()=>{var e={443:(e,t)=>{"use strict";t.__esModule=true;t["default"]=MapCtor;function MapCtor(e){return Object.setPrototypeOf(new Map(e),Object.getPrototypeOf(this))}MapCtor.prototype=Map.prototype;e.exports=t["default"]},390:(e,t,r)=>{"use strict";t.__esModule=true;t["default"]=void 0;var a=_interopRequireDefault(r(443));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _inheritsLoose(e,t){e.prototype=Object.create(t.prototype);e.prototype.constructor=e;e.__proto__=t}var i={};var s=function(e){_inheritsLoose(MapCache,e);function MapCache(){return e.apply(this,arguments)||this}var t=MapCache.prototype;t.clear=function clear(){e.prototype.clear.call(this);return this};t.findKey=function findKey(e){var t;try{this.forEach((function(r,a,s){if(e(r,a,s)){t=a;throw i}}))}catch(e){if(e!==i){throw e}}return t};return MapCache}(a.default);t["default"]=s;e.exports=t["default"]},537:(e,t,r)=>{"use strict";t.__esModule=true;t["default"]=void 0;var a=_interopRequireDefault(r(848));var i=_interopRequireDefault(r(30));var s=_interopRequireDefault(r(823));var o=_interopRequireDefault(r(320));var n=_interopRequireDefault(r(765));var u=_interopRequireDefault(r(865));var l=_interopRequireDefault(r(147));var f=_interopRequireDefault(r(205));var d=_interopRequireDefault(r(390));var p=_interopRequireDefault(r(188));var c=r(906);var h=_interopRequireDefault(r(17));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _assertThisInitialized(e){if(e===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return e}function _inheritsLoose(e,t){e.prototype=Object.create(t.prototype);e.prototype.constructor=e;e.__proto__=t}var m=function(e){_inheritsLoose(ModuleCache,e);function ModuleCache(t){var r;r=e.call(this)||this;t=(0,u.default)(t);if(!t){return _assertThisInitialized(r)}var a=h.default.join(t,"package.json");var p=l.default.existsSync(a)&&require(a).main||"index.js";var m=(0,c.normalizePath)(h.default.dirname(h.default.resolve(t,p)));var _=(0,n.default)(f.default.sync(h.default.join(t,"**/"),{ignore:h.default.join(t,"node_modules/**/")}),(function(e){return(0,o.default)(e,m)}),["desc"]);(0,s.default)(_,(function(e){var a=h.default.relative(t,e);var s=f.default.sync(h.default.join(e,"*.js"));var o=(0,i.default)(s,(function(e){var t=h.default.basename(e,".js");return[t.toLowerCase(),t]}));r.set(a,new d.default(o))}));return r}ModuleCache.resolve=function resolve(e,t){if(t===void 0){t=process.cwd()}try{var r=h.default.dirname(p.default._resolveFilename(e,(0,a.default)(new p.default,{paths:p.default._nodeModulePaths(t)}))).split(h.default.sep);var i=r.length;while(i--){var s=r.slice(0,i+1);var o=s.join("/");var n=h.default.join(o,"package.json");if(i&&r[i-1]=="node_modules"||l.default.existsSync(n)&&require(n).name==e){return o}}return r.join("/")}catch(e){}return""};return ModuleCache}(d.default);t["default"]=m;e.exports=t["default"]},715:(e,t,r)=>{"use strict";t.__esModule=true;t["default"]=void 0;var a=_interopRequireDefault(r(73));var i=_interopRequireDefault(r(865));var s=_interopRequireDefault(r(72));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var o=/^lodash(?:-compat|-es)?$/;var n=function Package(e){e=(0,i.default)(e);var t=(0,s.default)(e);this.base=e.replace(new RegExp(t+"/?"),"");this.id=t;this.isLodash=(0,a.default)(o.test(this.id));this.path=e};t["default"]=n;e.exports=t["default"]},498:(e,t,r)=>{"use strict";t.__esModule=true;t["default"]=void 0;var a=_interopRequireDefault(r(823));var i=_interopRequireDefault(r(390));var s=r(906);var o=_interopRequireDefault(r(715));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _inheritsLoose(e,t){e.prototype=Object.create(t.prototype);e.prototype.constructor=e;e.__proto__=t}var n=function(e){_inheritsLoose(Store,e);function Store(t){var r;r=e.call(this)||this;(0,a.default)(t,(function(e){return r.set(e)}));return r}var t=Store.prototype;t.get=function get(t){return e.prototype.get.call(this,(0,s.normalizePath)(t))};t.set=function set(t,r){if(r===void 0){r=new o.default((0,s.normalizePath)(t))}return e.prototype.set.call(this,(0,s.normalizePath)(t),r)};return Store}(i.default);t["default"]=n;e.exports=t["default"]},176:(e,t,r)=>{"use strict";t.__esModule=true;t["default"]=config;var a=_interopRequireDefault(r(779));var i=_interopRequireDefault(r(823));var s=_interopRequireDefault(r(390));var o=_interopRequireDefault(r(537));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var n=["lodash","lodash-es","lodash-compat"];var u;var l=[];var f=new s.default;function config(e){var t=e===void 0?{}:e,r=t.cwd,s=r===void 0?process.cwd():r,d=t.id,p=d===void 0?n:d;if(u!==s){u=s;f.clear()}(0,i.default)((0,a.default)(p),(function(e){if(!f.get(e)){var t=o.default.resolve(e,s);if(t){l.push(e);f.set(e,new o.default(t))}}}));return{ids:l,modules:f}}e.exports=t["default"]},445:(e,t,r)=>{"use strict";t.__esModule=true;t["default"]=void 0;var a=_interopRequireDefault(r(319));var i=r(408);var s=_interopRequireDefault(r(698));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function resolvePath(e,t,r){var a=e.base,i=e.id;var o=t.toLowerCase();var n=s.default.modules.get(i);if(!n.get(a).has(o)){a=a?"":n.findKey((function(e){return e.has(o)}));if(!a){throw r.buildCodeFrameError([`The '${i}' method \`${t}\` is not a known module.`,"Please report bugs to https://github.com/lodash/babel-plugin-lodash/issues."].join("\n"))}}return i+"/"+(a?a+"/":"")+n.get(a).get(o)}function importModule(e,t,r){return(0,i.addDefault)(r,resolvePath(e,t,r),{nameHint:t})}var o=(0,a.default)(importModule,(function(e,t){return(e.path+"/"+t).toLowerCase()}));t["default"]=o;e.exports=t["default"]},380:(e,t,r)=>{"use strict";t.__esModule=true;t["default"]=lodash;var a=_interopRequireDefault(r(80));var i=_interopRequireDefault(r(163));var s=_interopRequireDefault(r(823));var o=_interopRequireDefault(r(848));var n=r(638);var u=_interopRequireDefault(r(176));var l=_interopRequireDefault(r(445));var f=_interopRequireDefault(r(698));var d=_interopRequireDefault(r(498));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var p=["Lodash chain sequences are not supported by babel-plugin-lodash.","Consider substituting chain sequences with composition patterns.","See https://medium.com/making-internets/why-using-chain-is-a-mistake-9bc1f80d51ba"].join("\n");function lodash(e){var t=e.types;var r={PLACEHOLDER:t.identifier("placeholder"),UNDEFINED:t.identifier("undefined")};var c=new d.default;function getCallee(e){var r=e.parentPath;while(!r.isStatement()){if(r.isCallExpression()){var a=r.node.callee;while(t.isCallExpression(a)){a=a.callee}return a}r=r.parentPath}}var h={Program(e,a){var d=(0,o.default)(f.default,(0,u.default)(a.opts)),h=d.ids;var m=e.hub.file;l.default.cache.clear();c.clear();(0,s.default)(h,(function(e){c.set(e);f.default.modules.get(e).forEach((function(t,r){c.set(e+"/"+r)}))}));var _=[];var v=false;for(var b=m.ast.program.body,y=Array.isArray(b),g=0,b=y?b:b[Symbol.iterator]();;){var D;if(y){if(g>=b.length)break;D=b[g++]}else{g=b.next();if(g.done)break;D=g.value}var q=D;if((0,n.isImportDeclaration)(q)||(0,n.isExportDeclaration)(q)){v=true;break}}if(v){m.path.traverse({ImportDeclaration:{exit(e){var t=e.node;var r=[];var a=[];_.push({source:t.source.value,imported:r,specifiers:a});for(var i=e.get("specifiers"),s=Array.isArray(i),o=0,i=s?i:i[Symbol.iterator]();;){var n;if(s){if(o>=i.length)break;n=i[o++]}else{o=i.next();if(o.done)break;n=o.value}var u=n;var l=u.node.local.name;if(u.isImportDefaultSpecifier()){r.push("default");a.push({kind:"named",imported:"default",local:l})}if(u.isImportSpecifier()){var f=u.node.imported.name;r.push(f);a.push({kind:"named",imported:f,local:l})}if(u.isImportNamespaceSpecifier()){r.push("*");a.push({kind:"namespace",local:l})}}}}})}(0,s.default)(_,(function(e){var a=c.get(e.source);if(!a){return}var o=a.isLodash();var n=(0,i.default)(e.specifiers,(function(e){return e.imported==="default"}));(0,s.default)(n,(function(e){var i=e.imported,n=e.local;var u=m.scope.getBinding(n);var f=u.path.parent.importKind,d=f===void 0?"value":f;if(d!="value"){return}var c=o&&i==="chain";(0,s.default)(u.referencePaths,(function(e){var s=e.node,u=e.parentPath;var f=s.type;if(i&&i!=="default"){if(c&&e.parentPath.isCallExpression()){throw e.buildCodeFrameError(p)}var d=(0,l.default)(a,i,e),h=d.name;e.replaceWith({type:f,name:h})}else if(u.isMemberExpression()){var m=e.parent.property.name;if(o&&m==="chain"&&u.parentPath.isCallExpression()){throw e.buildCodeFrameError(p)}var _=(0,l.default)(a,m,e),v=_.name;u.replaceWith({type:f,name:v})}else if(o){var b=getCallee(e);if(b&&b.name===n){throw e.buildCodeFrameError(p)}e.replaceWith(b?t.memberExpression(b,r.PLACEHOLDER):r.UNDEFINED)}}))}))}))},ImportDeclaration(e){if(c.get(e.node.source.value)){e.remove()}},ExportNamedDeclaration(e){var t=e.node;var r=(0,a.default)(t,"source.value");var i=c.get(r);if(!i){return}t.source=null;(0,s.default)(t.specifiers,(function(t){t.local=(0,l.default)(i,t.local.name,e)}))}};return{visitor:h}}e.exports=t["default"]},698:(e,t,r)=>{"use strict";t.__esModule=true;t["default"]=void 0;var a=_interopRequireDefault(r(176));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var i=(0,a.default)();t["default"]=i;e.exports=t["default"]},906:(e,t,r)=>{"use strict";t.__esModule=true;t.normalizePath=normalizePath;var a=_interopRequireDefault(r(865));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function normalizePath(e){return(0,a.default)(e).replace(/\\/g,"/")}},72:e=>{var t=/^(?:(@[^/]+)[/]+)([^/]+)[/]?/;var r=/^([^/]+)[/]?/;e.exports=extract.bind(null,false);e.exports.base=extract.bind(null,true);function extract(e,a){if(/^@/.test(a)){var i=t.exec(a);if(!i||!i[1]||!i[2])return null;if(e)return i[2]||null;return[i[1],i[2]].join("/")}else{var i=r.exec(a);if(!i)return null;return i[1]||null}}},638:e=>{"use strict";e.exports=require("@babel/types")},205:e=>{"use strict";e.exports=require("@modern-js/utils/glob")},491:e=>{"use strict";e.exports=require("assert")},147:e=>{"use strict";e.exports=require("fs")},848:e=>{"use strict";e.exports=require("lodash/assign")},779:e=>{"use strict";e.exports=require("lodash/castArray")},73:e=>{"use strict";e.exports=require("lodash/constant")},823:e=>{"use strict";e.exports=require("lodash/each")},80:e=>{"use strict";e.exports=require("lodash/get")},30:e=>{"use strict";e.exports=require("lodash/map")},319:e=>{"use strict";e.exports=require("lodash/memoize")},765:e=>{"use strict";e.exports=require("lodash/orderBy")},163:e=>{"use strict";e.exports=require("lodash/sortBy")},320:e=>{"use strict";e.exports=require("lodash/startsWith")},865:e=>{"use strict";e.exports=require("lodash/toString")},188:e=>{"use strict";e.exports=require("module")},17:e=>{"use strict";e.exports=require("path")},79:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:true});t["default"]=void 0;var a=r(491);var i=r(638);const{callExpression:s,cloneNode:o,expressionStatement:n,identifier:u,importDeclaration:l,importDefaultSpecifier:f,importNamespaceSpecifier:d,importSpecifier:p,memberExpression:c,stringLiteral:h,variableDeclaration:m,variableDeclarator:_}=i;class ImportBuilder{constructor(e,t,r){this._statements=[];this._resultName=null;this._importedSource=void 0;this._scope=t;this._hub=r;this._importedSource=e}done(){return{statements:this._statements,resultName:this._resultName}}import(){this._statements.push(l([],h(this._importedSource)));return this}require(){this._statements.push(n(s(u("require"),[h(this._importedSource)])));return this}namespace(e="namespace"){const t=this._scope.generateUidIdentifier(e);const r=this._statements[this._statements.length-1];a(r.type==="ImportDeclaration");a(r.specifiers.length===0);r.specifiers=[d(t)];this._resultName=o(t);return this}default(e){const t=this._scope.generateUidIdentifier(e);const r=this._statements[this._statements.length-1];a(r.type==="ImportDeclaration");a(r.specifiers.length===0);r.specifiers=[f(t)];this._resultName=o(t);return this}named(e,t){if(t==="default")return this.default(e);const r=this._scope.generateUidIdentifier(e);const i=this._statements[this._statements.length-1];a(i.type==="ImportDeclaration");a(i.specifiers.length===0);i.specifiers=[p(r,u(t))];this._resultName=o(r);return this}var(e){const t=this._scope.generateUidIdentifier(e);let r=this._statements[this._statements.length-1];if(r.type!=="ExpressionStatement"){a(this._resultName);r=n(this._resultName);this._statements.push(r)}this._statements[this._statements.length-1]=m("var",[_(t,r.expression)]);this._resultName=o(t);return this}defaultInterop(){return this._interop(this._hub.addHelper("interopRequireDefault"))}wildcardInterop(){return this._interop(this._hub.addHelper("interopRequireWildcard"))}_interop(e){const t=this._statements[this._statements.length-1];if(t.type==="ExpressionStatement"){t.expression=s(e,[t.expression])}else if(t.type==="VariableDeclaration"){a(t.declarations.length===1);t.declarations[0].init=s(e,[t.declarations[0].init])}else{a.fail("Unexpected type.")}return this}prop(e){const t=this._statements[this._statements.length-1];if(t.type==="ExpressionStatement"){t.expression=c(t.expression,u(e))}else if(t.type==="VariableDeclaration"){a(t.declarations.length===1);t.declarations[0].init=c(t.declarations[0].init,u(e))}else{a.fail("Unexpected type:"+t.type)}return this}read(e){this._resultName=c(this._resultName,u(e))}}t["default"]=ImportBuilder},378:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:true});t["default"]=void 0;var a=r(491);var i=r(638);var s=r(79);var o=r(898);const{numericLiteral:n,sequenceExpression:u}=i;class ImportInjector{constructor(e,t,r){this._defaultOpts={importedSource:null,importedType:"commonjs",importedInterop:"babel",importingInterop:"babel",ensureLiveReference:false,ensureNoContext:false,importPosition:"before"};const a=e.find((e=>e.isProgram()));this._programPath=a;this._programScope=a.scope;this._hub=a.hub;this._defaultOpts=this._applyDefaults(t,r,true)}addDefault(e,t){return this.addNamed("default",e,t)}addNamed(e,t,r){a(typeof e==="string");return this._generateImport(this._applyDefaults(t,r),e)}addNamespace(e,t){return this._generateImport(this._applyDefaults(e,t),null)}addSideEffect(e,t){return this._generateImport(this._applyDefaults(e,t),void 0)}_applyDefaults(e,t,r=false){let i;if(typeof e==="string"){i=Object.assign({},this._defaultOpts,{importedSource:e},t)}else{a(!t,"Unexpected secondary arguments.");i=Object.assign({},this._defaultOpts,e)}if(!r&&t){if(t.nameHint!==undefined)i.nameHint=t.nameHint;if(t.blockHoist!==undefined)i.blockHoist=t.blockHoist}return i}_generateImport(e,t){const r=t==="default";const a=!!t&&!r;const i=t===null;const{importedSource:l,importedType:f,importedInterop:d,importingInterop:p,ensureLiveReference:c,ensureNoContext:h,nameHint:m,importPosition:_,blockHoist:v}=e;let b=m||t;const y=(0,o.default)(this._programPath);const g=y&&p==="node";const D=y&&p==="babel";if(_==="after"&&!y){throw new Error(`"importPosition": "after" is only supported in modules`)}const q=new s.default(l,this._programScope,this._hub);if(f==="es6"){if(!g&&!D){throw new Error("Cannot import an ES6 module from CommonJS")}q.import();if(i){q.namespace(m||l)}else if(r||a){q.named(b,t)}}else if(f!=="commonjs"){throw new Error(`Unexpected interopType "${f}"`)}else if(d==="babel"){if(g){b=b!=="default"?b:l;const e=`${l}$es6Default`;q.import();if(i){q.default(e).var(b||l).wildcardInterop()}else if(r){if(c){q.default(e).var(b||l).defaultInterop().read("default")}else{q.default(e).var(b).defaultInterop().prop(t)}}else if(a){q.default(e).read(t)}}else if(D){q.import();if(i){q.namespace(b||l)}else if(r||a){q.named(b,t)}}else{q.require();if(i){q.var(b||l).wildcardInterop()}else if((r||a)&&c){if(r){b=b!=="default"?b:l;q.var(b).read(t);q.defaultInterop()}else{q.var(l).read(t)}}else if(r){q.var(b).defaultInterop().prop(t)}else if(a){q.var(b).prop(t)}}}else if(d==="compiled"){if(g){q.import();if(i){q.default(b||l)}else if(r||a){q.default(l).read(b)}}else if(D){q.import();if(i){q.namespace(b||l)}else if(r||a){q.named(b,t)}}else{q.require();if(i){q.var(b||l)}else if(r||a){if(c){q.var(l).read(b)}else{q.prop(t).var(b)}}}}else if(d==="uncompiled"){if(r&&c){throw new Error("No live reference for commonjs default")}if(g){q.import();if(i){q.default(b||l)}else if(r){q.default(b)}else if(a){q.default(l).read(b)}}else if(D){q.import();if(i){q.default(b||l)}else if(r){q.default(b)}else if(a){q.named(b,t)}}else{q.require();if(i){q.var(b||l)}else if(r){q.var(b)}else if(a){if(c){q.var(l).read(b)}else{q.var(b).prop(t)}}}}else{throw new Error(`Unknown importedInterop "${d}".`)}const{statements:x,resultName:w}=q.done();this._insertStatements(x,_,v);if((r||a)&&h&&w.type!=="Identifier"){return u([n(0),w])}return w}_insertStatements(e,t="before",r=3){const a=this._programPath.get("body");if(t==="after"){for(let t=a.length-1;t>=0;t--){if(a[t].isImportDeclaration()){a[t].insertAfter(e);return}}}else{e.forEach((e=>{e._blockHoist=r}));const t=a.find((e=>{const t=e.node._blockHoist;return Number.isFinite(t)&&t<4}));if(t){t.insertBefore(e);return}}this._programPath.unshiftContainer("body",e)}}t["default"]=ImportInjector},408:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:true});Object.defineProperty(t,"ImportInjector",{enumerable:true,get:function(){return a.default}});t.addDefault=addDefault;t.addNamed=addNamed;t.addNamespace=addNamespace;t.addSideEffect=addSideEffect;Object.defineProperty(t,"isModule",{enumerable:true,get:function(){return i.default}});var a=r(378);var i=r(898);function addDefault(e,t,r){return new a.default(e).addDefault(t,r)}function addNamed(e,t,r,i){return new a.default(e).addNamed(t,r,i)}function addNamespace(e,t,r){return new a.default(e).addNamespace(t,r)}function addSideEffect(e,t,r){return new a.default(e).addSideEffect(t,r)}},898:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:true});t["default"]=isModule;function isModule(e){return e.node.sourceType==="module"}}};var t={};function __nccwpck_require__(r){var a=t[r];if(a!==undefined){return a.exports}var i=t[r]={exports:{}};var s=true;try{e[r](i,i.exports,__nccwpck_require__);s=false}finally{if(s)delete t[r]}return i.exports}if(typeof __nccwpck_require__!=="undefined")__nccwpck_require__.ab=__dirname+"/";var r=__nccwpck_require__(380);module.exports=r})();