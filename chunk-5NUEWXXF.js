import{c as Se,d as ge,f as ae,g as me}from"./chunk-C5P3YSZX.js";import{a as qe,b as fe,c as un,d as ft,e as dn,f as pn,g as bt,h as hn,i as le,j as yt,k as gn,l as De,m as Ye,n as q,p as vt,q as ce,r as be,s as A,t as mn}from"./chunk-QPH4TQQ2.js";import{a as ze,b as mt,c as he,d as We,e as nn,f as Ge,g as X,h as Ue,i as on,m as rn,o as sn,p as an,q as ln,t as cn}from"./chunk-5X5M3FK3.js";import{a as ye}from"./chunk-66XS3EV4.js";import{$ as Pe,$a as a,Aa as u,Ab as gt,Db as _,Ea as Me,Eb as en,Fa as E,Fb as ne,Gb as oe,Hb as tn,Ka as M,L as Te,La as z,M as Ee,Ma as w,N as V,Na as b,O as H,Oa as x,Q as re,Qa as qt,S as Ht,T as f,Ua as F,Va as c,Wa as Yt,Xa as Be,Y,Ya as Qt,Z as jt,Za as ee,_ as zt,_a as k,a as y,aa as m,ab as l,b as L,bb as v,ca as ht,cb as Le,db as He,eb as ue,fb as Zt,ga as j,ha as Wt,hb as T,i as Nt,ib as g,ja as J,jb as de,ka as se,kb as pe,l as Rt,la as Q,lb as W,mb as G,nb as U,ob as je,pa as Ne,pb as d,q as Bt,qb as Z,rb as Xt,sb as D,tb as P,ub as te,vb as Kt,w as Lt,wa as Gt,wb as Jt,xa as Re,za as Ut}from"./chunk-7QXTCEWD.js";var En=(()=>{class t{_renderer;_elementRef;onChange=e=>{};onTouched=()=>{};constructor(e,n){this._renderer=e,this._elementRef=n}setProperty(e,n){this._renderer.setProperty(this._elementRef.nativeElement,e,n)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}static \u0275fac=function(n){return new(n||t)(E(Me),E(se))};static \u0275dir=w({type:t})}return t})(),bo=(()=>{class t extends En{static \u0275fac=(()=>{let e;return function(i){return(e||(e=m(t)))(i||t)}})();static \u0275dir=w({type:t,features:[b]})}return t})(),Mn=new re("");var yo={provide:Mn,useExisting:Ee(()=>it),multi:!0};function vo(){let t=mt()?mt().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var _o=new re(""),it=(()=>{class t extends En{_compositionMode;_composing=!1;constructor(e,n,i){super(e,n),this._compositionMode=i,this._compositionMode==null&&(this._compositionMode=!vo())}writeValue(e){let n=e??"";this.setProperty("value",n)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}static \u0275fac=function(n){return new(n||t)(E(Me),E(se),E(_o,8))};static \u0275dir=w({type:t,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(n,i){n&1&&T("input",function(s){return i._handleInput(s.target.value)})("blur",function(){return i.onTouched()})("compositionstart",function(){return i._compositionStart()})("compositionend",function(s){return i._compositionEnd(s.target.value)})},standalone:!1,features:[D([yo]),b]})}return t})();function Mt(t){return t==null||St(t)===0}function St(t){return t==null?null:Array.isArray(t)||typeof t=="string"?t.length:t instanceof Set?t.size:null}var Dt=new re(""),Sn=new re(""),Co=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,Ae=class{static min(o){return wo(o)}static max(o){return xo(o)}static required(o){return Dn(o)}static requiredTrue(o){return Eo(o)}static email(o){return Mo(o)}static minLength(o){return So(o)}static maxLength(o){return Do(o)}static pattern(o){return Io(o)}static nullValidator(o){return Xe()}static compose(o){return On(o)}static composeAsync(o){return Tn(o)}};function wo(t){return o=>{if(o.value==null||t==null)return null;let e=parseFloat(o.value);return!isNaN(e)&&e<t?{min:{min:t,actual:o.value}}:null}}function xo(t){return o=>{if(o.value==null||t==null)return null;let e=parseFloat(o.value);return!isNaN(e)&&e>t?{max:{max:t,actual:o.value}}:null}}function Dn(t){return Mt(t.value)?{required:!0}:null}function Eo(t){return t.value===!0?null:{required:!0}}function Mo(t){return Mt(t.value)||Co.test(t.value)?null:{email:!0}}function So(t){return o=>{let e=o.value?.length??St(o.value);return e===null||e===0?null:e<t?{minlength:{requiredLength:t,actualLength:e}}:null}}function Do(t){return o=>{let e=o.value?.length??St(o.value);return e!==null&&e>t?{maxlength:{requiredLength:t,actualLength:e}}:null}}function Io(t){if(!t)return Xe;let o,e;return typeof t=="string"?(e="",t.charAt(0)!=="^"&&(e+="^"),e+=t,t.charAt(t.length-1)!=="$"&&(e+="$"),o=new RegExp(e)):(e=t.toString(),o=t),n=>{if(Mt(n.value))return null;let i=n.value;return o.test(i)?null:{pattern:{requiredPattern:e,actualValue:i}}}}function Xe(t){return null}function In(t){return t!=null}function Vn(t){return qt(t)?Rt(t):t}function Fn(t){let o={};return t.forEach(e=>{o=e!=null?y(y({},o),e):o}),Object.keys(o).length===0?null:o}function $n(t,o){return o.map(e=>e(t))}function Vo(t){return!t.validate}function An(t){return t.map(o=>Vo(o)?o:e=>o.validate(e))}function On(t){if(!t)return null;let o=t.filter(In);return o.length==0?null:function(e){return Fn($n(e,o))}}function kn(t){return t!=null?On(An(t)):null}function Tn(t){if(!t)return null;let o=t.filter(In);return o.length==0?null:function(e){let n=$n(e,o).map(Vn);return Lt(n).pipe(Bt(Fn))}}function Pn(t){return t!=null?Tn(An(t)):null}function fn(t,o){return t===null?[o]:Array.isArray(t)?[...t,o]:[t,o]}function Nn(t){return t._rawValidators}function Rn(t){return t._rawAsyncValidators}function _t(t){return t?Array.isArray(t)?t:[t]:[]}function Ke(t,o){return Array.isArray(t)?t.includes(o):t===o}function bn(t,o){let e=_t(o);return _t(t).forEach(i=>{Ke(e,i)||e.push(i)}),e}function yn(t,o){return _t(o).filter(e=>!Ke(t,e))}var Je=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(o){this._rawValidators=o||[],this._composedValidatorFn=kn(this._rawValidators)}_setAsyncValidators(o){this._rawAsyncValidators=o||[],this._composedAsyncValidatorFn=Pn(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(o){this._onDestroyCallbacks.push(o)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(o=>o()),this._onDestroyCallbacks=[]}reset(o=void 0){this.control&&this.control.reset(o)}hasError(o,e){return this.control?this.control.hasError(o,e):!1}getError(o,e){return this.control?this.control.getError(o,e):null}},Ce=class extends Je{name;get formDirective(){return null}get path(){return null}},Oe=class extends Je{_parent=null;name=null;valueAccessor=null},et=class{_cd;constructor(o){this._cd=o}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}},Fo={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},vr=L(y({},Fo),{"[class.ng-submitted]":"isSubmitted"}),Bn=(()=>{class t extends et{constructor(e){super(e)}static \u0275fac=function(n){return new(n||t)(E(Oe,2))};static \u0275dir=w({type:t,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(n,i){n&2&&Be("ng-untouched",i.isUntouched)("ng-touched",i.isTouched)("ng-pristine",i.isPristine)("ng-dirty",i.isDirty)("ng-valid",i.isValid)("ng-invalid",i.isInvalid)("ng-pending",i.isPending)},standalone:!1,features:[b]})}return t})(),Ln=(()=>{class t extends et{constructor(e){super(e)}static \u0275fac=function(n){return new(n||t)(E(Ce,10))};static \u0275dir=w({type:t,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(n,i){n&2&&Be("ng-untouched",i.isUntouched)("ng-touched",i.isTouched)("ng-pristine",i.isPristine)("ng-dirty",i.isDirty)("ng-valid",i.isValid)("ng-invalid",i.isInvalid)("ng-pending",i.isPending)("ng-submitted",i.isSubmitted)},standalone:!1,features:[b]})}return t})();var Ie="VALID",Qe="INVALID",ve="PENDING",Ve="DISABLED",ie=class{},tt=class extends ie{value;source;constructor(o,e){super(),this.value=o,this.source=e}},Fe=class extends ie{pristine;source;constructor(o,e){super(),this.pristine=o,this.source=e}},$e=class extends ie{touched;source;constructor(o,e){super(),this.touched=o,this.source=e}},_e=class extends ie{status;source;constructor(o,e){super(),this.status=o,this.source=e}},Ct=class extends ie{source;constructor(o){super(),this.source=o}},wt=class extends ie{source;constructor(o){super(),this.source=o}};function It(t){return(rt(t)?t.validators:t)||null}function $o(t){return Array.isArray(t)?kn(t):t||null}function Vt(t,o){return(rt(o)?o.asyncValidators:t)||null}function Ao(t){return Array.isArray(t)?Pn(t):t||null}function rt(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}function Hn(t,o,e){let n=t.controls;if(!(o?Object.keys(n):n).length)throw new Te(1e3,"");if(!n[e])throw new Te(1001,"")}function jn(t,o,e){t._forEachChild((n,i)=>{if(e[i]===void 0)throw new Te(1002,"")})}var we=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(o,e){this._assignValidators(o),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(o){this._rawValidators=this._composedValidatorFn=o}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(o){this._rawAsyncValidators=this._composedAsyncValidatorFn=o}get parent(){return this._parent}get status(){return ne(this.statusReactive)}set status(o){ne(()=>this.statusReactive.set(o))}_status=oe(()=>this.statusReactive());statusReactive=Q(void 0);get valid(){return this.status===Ie}get invalid(){return this.status===Qe}get pending(){return this.status==ve}get disabled(){return this.status===Ve}get enabled(){return this.status!==Ve}errors;get pristine(){return ne(this.pristineReactive)}set pristine(o){ne(()=>this.pristineReactive.set(o))}_pristine=oe(()=>this.pristineReactive());pristineReactive=Q(!0);get dirty(){return!this.pristine}get touched(){return ne(this.touchedReactive)}set touched(o){ne(()=>this.touchedReactive.set(o))}_touched=oe(()=>this.touchedReactive());touchedReactive=Q(!1);get untouched(){return!this.touched}_events=new Nt;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(o){this._assignValidators(o)}setAsyncValidators(o){this._assignAsyncValidators(o)}addValidators(o){this.setValidators(bn(o,this._rawValidators))}addAsyncValidators(o){this.setAsyncValidators(bn(o,this._rawAsyncValidators))}removeValidators(o){this.setValidators(yn(o,this._rawValidators))}removeAsyncValidators(o){this.setAsyncValidators(yn(o,this._rawAsyncValidators))}hasValidator(o){return Ke(this._rawValidators,o)}hasAsyncValidator(o){return Ke(this._rawAsyncValidators,o)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(o={}){let e=this.touched===!1;this.touched=!0;let n=o.sourceControl??this;this._parent&&!o.onlySelf&&this._parent.markAsTouched(L(y({},o),{sourceControl:n})),e&&o.emitEvent!==!1&&this._events.next(new $e(!0,n))}markAllAsTouched(o={}){this.markAsTouched({onlySelf:!0,emitEvent:o.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(o))}markAsUntouched(o={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let n=o.sourceControl??this;this._forEachChild(i=>{i.markAsUntouched({onlySelf:!0,emitEvent:o.emitEvent,sourceControl:n})}),this._parent&&!o.onlySelf&&this._parent._updateTouched(o,n),e&&o.emitEvent!==!1&&this._events.next(new $e(!1,n))}markAsDirty(o={}){let e=this.pristine===!0;this.pristine=!1;let n=o.sourceControl??this;this._parent&&!o.onlySelf&&this._parent.markAsDirty(L(y({},o),{sourceControl:n})),e&&o.emitEvent!==!1&&this._events.next(new Fe(!1,n))}markAsPristine(o={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let n=o.sourceControl??this;this._forEachChild(i=>{i.markAsPristine({onlySelf:!0,emitEvent:o.emitEvent})}),this._parent&&!o.onlySelf&&this._parent._updatePristine(o,n),e&&o.emitEvent!==!1&&this._events.next(new Fe(!0,n))}markAsPending(o={}){this.status=ve;let e=o.sourceControl??this;o.emitEvent!==!1&&(this._events.next(new _e(this.status,e)),this.statusChanges.emit(this.status)),this._parent&&!o.onlySelf&&this._parent.markAsPending(L(y({},o),{sourceControl:e}))}disable(o={}){let e=this._parentMarkedDirty(o.onlySelf);this.status=Ve,this.errors=null,this._forEachChild(i=>{i.disable(L(y({},o),{onlySelf:!0}))}),this._updateValue();let n=o.sourceControl??this;o.emitEvent!==!1&&(this._events.next(new tt(this.value,n)),this._events.next(new _e(this.status,n)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(L(y({},o),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(i=>i(!0))}enable(o={}){let e=this._parentMarkedDirty(o.onlySelf);this.status=Ie,this._forEachChild(n=>{n.enable(L(y({},o),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:o.emitEvent}),this._updateAncestors(L(y({},o),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(n=>n(!1))}_updateAncestors(o,e){this._parent&&!o.onlySelf&&(this._parent.updateValueAndValidity(o),o.skipPristineCheck||this._parent._updatePristine({},e),this._parent._updateTouched({},e))}setParent(o){this._parent=o}getRawValue(){return this.value}updateValueAndValidity(o={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let n=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===Ie||this.status===ve)&&this._runAsyncValidator(n,o.emitEvent)}let e=o.sourceControl??this;o.emitEvent!==!1&&(this._events.next(new tt(this.value,e)),this._events.next(new _e(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!o.onlySelf&&this._parent.updateValueAndValidity(L(y({},o),{sourceControl:e}))}_updateTreeValidity(o={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(o)),this.updateValueAndValidity({onlySelf:!0,emitEvent:o.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?Ve:Ie}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(o,e){if(this.asyncValidator){this.status=ve,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1};let n=Vn(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(i=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(i,{emitEvent:e,shouldHaveEmitted:o})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let o=this._hasOwnPendingAsyncValidator?.emitEvent??!1;return this._hasOwnPendingAsyncValidator=null,o}return!1}setErrors(o,e={}){this.errors=o,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(o){let e=o;return e==null||(Array.isArray(e)||(e=e.split(".")),e.length===0)?null:e.reduce((n,i)=>n&&n._find(i),this)}getError(o,e){let n=e?this.get(e):this;return n&&n.errors?n.errors[o]:null}hasError(o,e){return!!this.getError(o,e)}get root(){let o=this;for(;o._parent;)o=o._parent;return o}_updateControlsErrors(o,e,n){this.status=this._calculateStatus(),o&&this.statusChanges.emit(this.status),(o||n)&&this._events.next(new _e(this.status,e)),this._parent&&this._parent._updateControlsErrors(o,e,n)}_initObservables(){this.valueChanges=new j,this.statusChanges=new j}_calculateStatus(){return this._allControlsDisabled()?Ve:this.errors?Qe:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(ve)?ve:this._anyControlsHaveStatus(Qe)?Qe:Ie}_anyControlsHaveStatus(o){return this._anyControls(e=>e.status===o)}_anyControlsDirty(){return this._anyControls(o=>o.dirty)}_anyControlsTouched(){return this._anyControls(o=>o.touched)}_updatePristine(o,e){let n=!this._anyControlsDirty(),i=this.pristine!==n;this.pristine=n,this._parent&&!o.onlySelf&&this._parent._updatePristine(o,e),i&&this._events.next(new Fe(this.pristine,e))}_updateTouched(o={},e){this.touched=this._anyControlsTouched(),this._events.next(new $e(this.touched,e)),this._parent&&!o.onlySelf&&this._parent._updateTouched(o,e)}_onDisabledChange=[];_registerOnCollectionChange(o){this._onCollectionChange=o}_setUpdateStrategy(o){rt(o)&&o.updateOn!=null&&(this._updateOn=o.updateOn)}_parentMarkedDirty(o){let e=this._parent&&this._parent.dirty;return!o&&!!e&&!this._parent._anyControlsDirty()}_find(o){return null}_assignValidators(o){this._rawValidators=Array.isArray(o)?o.slice():o,this._composedValidatorFn=$o(this._rawValidators)}_assignAsyncValidators(o){this._rawAsyncValidators=Array.isArray(o)?o.slice():o,this._composedAsyncValidatorFn=Ao(this._rawAsyncValidators)}},xe=class extends we{constructor(o,e,n){super(It(e),Vt(n,e)),this.controls=o,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(o,e){return this.controls[o]?this.controls[o]:(this.controls[o]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(o,e,n={}){this.registerControl(o,e),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}removeControl(o,e={}){this.controls[o]&&this.controls[o]._registerOnCollectionChange(()=>{}),delete this.controls[o],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(o,e,n={}){this.controls[o]&&this.controls[o]._registerOnCollectionChange(()=>{}),delete this.controls[o],e&&this.registerControl(o,e),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}contains(o){return this.controls.hasOwnProperty(o)&&this.controls[o].enabled}setValue(o,e={}){jn(this,!0,o),Object.keys(o).forEach(n=>{Hn(this,!0,n),this.controls[n].setValue(o[n],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(o,e={}){o!=null&&(Object.keys(o).forEach(n=>{let i=this.controls[n];i&&i.patchValue(o[n],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(o={},e={}){this._forEachChild((n,i)=>{n.reset(o?o[i]:null,{onlySelf:!0,emitEvent:e.emitEvent})}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e)}getRawValue(){return this._reduceChildren({},(o,e,n)=>(o[n]=e.getRawValue(),o))}_syncPendingControls(){let o=this._reduceChildren(!1,(e,n)=>n._syncPendingControls()?!0:e);return o&&this.updateValueAndValidity({onlySelf:!0}),o}_forEachChild(o){Object.keys(this.controls).forEach(e=>{let n=this.controls[e];n&&o(n,e)})}_setUpControls(){this._forEachChild(o=>{o.setParent(this),o._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(o){for(let[e,n]of Object.entries(this.controls))if(this.contains(e)&&o(n))return!0;return!1}_reduceValue(){let o={};return this._reduceChildren(o,(e,n,i)=>((n.enabled||this.disabled)&&(e[i]=n.value),e))}_reduceChildren(o,e){let n=o;return this._forEachChild((i,r)=>{n=e(n,i,r)}),n}_allControlsDisabled(){for(let o of Object.keys(this.controls))if(this.controls[o].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(o){return this.controls.hasOwnProperty(o)?this.controls[o]:null}};var xt=class extends xe{};var Ft=new re("",{providedIn:"root",factory:()=>st}),st="always";function Oo(t,o){return[...o.path,t]}function vn(t,o,e=st){$t(t,o),o.valueAccessor.writeValue(t.value),(t.disabled||e==="always")&&o.valueAccessor.setDisabledState?.(t.disabled),To(t,o),No(t,o),Po(t,o),ko(t,o)}function _n(t,o,e=!0){let n=()=>{};o.valueAccessor&&(o.valueAccessor.registerOnChange(n),o.valueAccessor.registerOnTouched(n)),ot(t,o),t&&(o._invokeOnDestroyCallbacks(),t._registerOnCollectionChange(()=>{}))}function nt(t,o){t.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(o)})}function ko(t,o){if(o.valueAccessor.setDisabledState){let e=n=>{o.valueAccessor.setDisabledState(n)};t.registerOnDisabledChange(e),o._registerOnDestroy(()=>{t._unregisterOnDisabledChange(e)})}}function $t(t,o){let e=Nn(t);o.validator!==null?t.setValidators(fn(e,o.validator)):typeof e=="function"&&t.setValidators([e]);let n=Rn(t);o.asyncValidator!==null?t.setAsyncValidators(fn(n,o.asyncValidator)):typeof n=="function"&&t.setAsyncValidators([n]);let i=()=>t.updateValueAndValidity();nt(o._rawValidators,i),nt(o._rawAsyncValidators,i)}function ot(t,o){let e=!1;if(t!==null){if(o.validator!==null){let i=Nn(t);if(Array.isArray(i)&&i.length>0){let r=i.filter(s=>s!==o.validator);r.length!==i.length&&(e=!0,t.setValidators(r))}}if(o.asyncValidator!==null){let i=Rn(t);if(Array.isArray(i)&&i.length>0){let r=i.filter(s=>s!==o.asyncValidator);r.length!==i.length&&(e=!0,t.setAsyncValidators(r))}}}let n=()=>{};return nt(o._rawValidators,n),nt(o._rawAsyncValidators,n),e}function To(t,o){o.valueAccessor.registerOnChange(e=>{t._pendingValue=e,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&zn(t,o)})}function Po(t,o){o.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&zn(t,o),t.updateOn!=="submit"&&t.markAsTouched()})}function zn(t,o){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),o.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function No(t,o){let e=(n,i)=>{o.valueAccessor.writeValue(n),i&&o.viewToModelUpdate(n)};t.registerOnChange(e),o._registerOnDestroy(()=>{t._unregisterOnChange(e)})}function Ro(t,o){t==null,$t(t,o)}function Bo(t,o){return ot(t,o)}function Lo(t,o){if(!t.hasOwnProperty("model"))return!1;let e=t.model;return e.isFirstChange()?!0:!Object.is(o,e.currentValue)}function Ho(t){return Object.getPrototypeOf(t.constructor)===bo}function jo(t,o){t._syncPendingControls(),o.forEach(e=>{let n=e.control;n.updateOn==="submit"&&n._pendingChange&&(e.viewToModelUpdate(n._pendingValue),n._pendingChange=!1)})}function zo(t,o){if(!o)return null;Array.isArray(o);let e,n,i;return o.forEach(r=>{r.constructor===it?e=r:Ho(r)?n=r:i=r}),i||n||e||null}function Wo(t,o){let e=t.indexOf(o);e>-1&&t.splice(e,1)}function Cn(t,o){let e=t.indexOf(o);e>-1&&t.splice(e,1)}function wn(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var Ze=class extends we{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(o=null,e,n){super(It(e),Vt(n,e)),this._applyFormState(o),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),rt(e)&&(e.nonNullable||e.initialValueIsDefault)&&(wn(o)?this.defaultValue=o.value:this.defaultValue=o)}setValue(o,e={}){this.value=this._pendingValue=o,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(n=>n(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)}patchValue(o,e={}){this.setValue(o,e)}reset(o=this.defaultValue,e={}){this._applyFormState(o),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),this._pendingChange=!1}_updateValue(){}_anyControls(o){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(o){this._onChange.push(o)}_unregisterOnChange(o){Cn(this._onChange,o)}registerOnDisabledChange(o){this._onDisabledChange.push(o)}_unregisterOnDisabledChange(o){Cn(this._onDisabledChange,o)}_forEachChild(o){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(o){wn(o)?(this.value=this._pendingValue=o.value,o.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=o}};var Go=t=>t instanceof Ze;var Wn=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275dir=w({type:t,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""],standalone:!1})}return t})();var Gn=new re("");var Uo={provide:Ce,useExisting:Ee(()=>At)},At=(()=>{class t extends Ce{callSetDisabledState;get submitted(){return ne(this._submittedReactive)}set submitted(e){this._submittedReactive.set(e)}_submitted=oe(()=>this._submittedReactive());_submittedReactive=Q(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];form=null;ngSubmit=new j;constructor(e,n,i){super(),this.callSetDisabledState=i,this._setValidators(e),this._setAsyncValidators(n)}ngOnChanges(e){e.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}ngOnDestroy(){this.form&&(ot(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get control(){return this.form}get path(){return[]}addControl(e){let n=this.form.get(e.path);return vn(n,e,this.callSetDisabledState),n.updateValueAndValidity({emitEvent:!1}),this.directives.push(e),n}getControl(e){return this.form.get(e.path)}removeControl(e){_n(e.control||null,e,!1),Wo(this.directives,e)}addFormGroup(e){this._setUpFormContainer(e)}removeFormGroup(e){this._cleanUpFormContainer(e)}getFormGroup(e){return this.form.get(e.path)}addFormArray(e){this._setUpFormContainer(e)}removeFormArray(e){this._cleanUpFormContainer(e)}getFormArray(e){return this.form.get(e.path)}updateModel(e,n){this.form.get(e.path).setValue(n)}onSubmit(e){return this._submittedReactive.set(!0),jo(this.form,this.directives),this.ngSubmit.emit(e),this.form._events.next(new Ct(this.control)),e?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this._submittedReactive.set(!1),this.form._events.next(new wt(this.form))}_updateDomValue(){this.directives.forEach(e=>{let n=e.control,i=this.form.get(e.path);n!==i&&(_n(n||null,e),Go(i)&&(vn(i,e,this.callSetDisabledState),e.control=i))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(e){let n=this.form.get(e.path);Ro(n,e),n.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(e){if(this.form){let n=this.form.get(e.path);n&&Bo(n,e)&&n.updateValueAndValidity({emitEvent:!1})}}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm&&this._oldForm._registerOnCollectionChange(()=>{})}_updateValidators(){$t(this.form,this),this._oldForm&&ot(this._oldForm,this)}static \u0275fac=function(n){return new(n||t)(E(Dt,10),E(Sn,10),E(Ft,8))};static \u0275dir=w({type:t,selectors:[["","formGroup",""]],hostBindings:function(n,i){n&1&&T("submit",function(s){return i.onSubmit(s)})("reset",function(){return i.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[D([Uo]),b,Y]})}return t})();var qo={provide:Oe,useExisting:Ee(()=>Ot)},Ot=(()=>{class t extends Oe{_ngModelWarningConfig;_added=!1;viewModel;control;name=null;set isDisabled(e){}model;update=new j;static _ngModelWarningSentOnce=!1;_ngModelWarningSent=!1;constructor(e,n,i,r,s){super(),this._ngModelWarningConfig=s,this._parent=e,this._setValidators(n),this._setAsyncValidators(i),this.valueAccessor=zo(this,r)}ngOnChanges(e){this._added||this._setUpControl(),Lo(e,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}get path(){return Oo(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_setUpControl(){this.control=this.formDirective.addControl(this),this._added=!0}static \u0275fac=function(n){return new(n||t)(E(Ce,13),E(Dt,10),E(Sn,10),E(Mn,10),E(Gn,8))};static \u0275dir=w({type:t,selectors:[["","formControlName",""]],inputs:{name:[0,"formControlName","name"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},standalone:!1,features:[D([qo]),b,Y]})}return t})();var Yo=(()=>{class t{_validator=Xe;_onChange;_enabled;ngOnChanges(e){if(this.inputName in e){let n=this.normalizeInput(e[this.inputName].currentValue);this._enabled=this.enabled(n),this._validator=this._enabled?this.createValidator(n):Xe,this._onChange&&this._onChange()}}validate(e){return this._validator(e)}registerOnValidatorChange(e){this._onChange=e}enabled(e){return e!=null}static \u0275fac=function(n){return new(n||t)};static \u0275dir=w({type:t,features:[Y]})}return t})();var Qo={provide:Dt,useExisting:Ee(()=>kt),multi:!0};var kt=(()=>{class t extends Yo{required;inputName="required";normalizeInput=_;createValidator=e=>Dn;enabled(e){return e}static \u0275fac=(()=>{let e;return function(i){return(e||(e=m(t)))(i||t)}})();static \u0275dir=w({type:t,selectors:[["","required","","formControlName","",3,"type","checkbox"],["","required","","formControl","",3,"type","checkbox"],["","required","","ngModel","",3,"type","checkbox"]],hostVars:1,hostBindings:function(n,i){n&2&&F("required",i._enabled?"":null)},inputs:{required:"required"},standalone:!1,features:[D([Qo]),b]})}return t})();var Un=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=z({type:t});static \u0275inj=H({})}return t})(),Et=class extends we{constructor(o,e,n){super(It(e),Vt(n,e)),this.controls=o,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;at(o){return this.controls[this._adjustIndex(o)]}push(o,e={}){this.controls.push(o),this._registerControl(o),this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}insert(o,e,n={}){this.controls.splice(o,0,e),this._registerControl(e),this.updateValueAndValidity({emitEvent:n.emitEvent})}removeAt(o,e={}){let n=this._adjustIndex(o);n<0&&(n=0),this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),this.controls.splice(n,1),this.updateValueAndValidity({emitEvent:e.emitEvent})}setControl(o,e,n={}){let i=this._adjustIndex(o);i<0&&(i=0),this.controls[i]&&this.controls[i]._registerOnCollectionChange(()=>{}),this.controls.splice(i,1),e&&(this.controls.splice(i,0,e),this._registerControl(e)),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(o,e={}){jn(this,!1,o),o.forEach((n,i)=>{Hn(this,!1,i),this.at(i).setValue(n,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(o,e={}){o!=null&&(o.forEach((n,i)=>{this.at(i)&&this.at(i).patchValue(n,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(o=[],e={}){this._forEachChild((n,i)=>{n.reset(o[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e)}getRawValue(){return this.controls.map(o=>o.getRawValue())}clear(o={}){this.controls.length<1||(this._forEachChild(e=>e._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:o.emitEvent}))}_adjustIndex(o){return o<0?o+this.length:o}_syncPendingControls(){let o=this.controls.reduce((e,n)=>n._syncPendingControls()?!0:e,!1);return o&&this.updateValueAndValidity({onlySelf:!0}),o}_forEachChild(o){this.controls.forEach((e,n)=>{o(e,n)})}_updateValue(){this.value=this.controls.filter(o=>o.enabled||this.disabled).map(o=>o.value)}_anyControls(o){return this.controls.some(e=>e.enabled&&o(e))}_setUpControls(){this._forEachChild(o=>this._registerControl(o))}_allControlsDisabled(){for(let o of this.controls)if(o.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(o){o.setParent(this),o._registerOnCollectionChange(this._onCollectionChange)}_find(o){return this.at(o)??null}};function xn(t){return!!t&&(t.asyncValidators!==void 0||t.validators!==void 0||t.updateOn!==void 0)}var qn=(()=>{class t{useNonNullable=!1;get nonNullable(){let e=new t;return e.useNonNullable=!0,e}group(e,n=null){let i=this._reduceControls(e),r={};return xn(n)?r=n:n!==null&&(r.validators=n.validator,r.asyncValidators=n.asyncValidator),new xe(i,r)}record(e,n=null){let i=this._reduceControls(e);return new xt(i,n)}control(e,n,i){let r={};return this.useNonNullable?(xn(n)?r=n:(r.validators=n,r.asyncValidators=i),new Ze(e,L(y({},r),{nonNullable:!0}))):new Ze(e,n,i)}array(e,n,i){let r=e.map(s=>this._createControl(s));return new Et(r,n,i)}_reduceControls(e){let n={};return Object.keys(e).forEach(i=>{n[i]=this._createControl(e[i])}),n}_createControl(e){if(e instanceof Ze)return e;if(e instanceof we)return e;if(Array.isArray(e)){let n=e[0],i=e.length>1?e[1]:null,r=e.length>2?e[2]:null;return this.control(n,i,r)}else return this.control(e)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=V({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Yn=(()=>{class t{static withConfig(e){return{ngModule:t,providers:[{provide:Ft,useValue:e.callSetDisabledState??st}]}}static \u0275fac=function(n){return new(n||t)};static \u0275mod=z({type:t});static \u0275inj=H({imports:[Un]})}return t})(),Qn=(()=>{class t{static withConfig(e){return{ngModule:t,providers:[{provide:Gn,useValue:e.warnOnNgModelWithFormControl??"always"},{provide:Ft,useValue:e.callSetDisabledState??st}]}}static \u0275fac=function(n){return new(n||t)};static \u0275mod=z({type:t});static \u0275inj=H({imports:[Un]})}return t})();var Zn=(()=>{class t extends A{name="common";static \u0275fac=(()=>{let e;return function(i){return(e||(e=m(t)))(i||t)}})();static \u0275prov=V({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),N=(()=>{class t{document=f(ze);platformId=f(Ne);el=f(se);injector=f(ht);cd=f(gt);renderer=f(Me);config=f(mn);baseComponentStyle=f(Zn);baseStyle=f(A);scopedStyleEl;rootEl;dt;get styleOptions(){return{nonce:this.config?.csp().nonce}}get _name(){return this.constructor.name.replace(/^_/,"").toLowerCase()}get componentStyle(){return this._componentStyle}attrSelector=De("pc");themeChangeListeners=[];_getHostInstance(e){if(e)return e?this.hostName?e.name===this.hostName?e:this._getHostInstance(e.parentInstance):e.parentInstance:void 0}_getOptionValue(e,n="",i={}){return gn(e,n,i)}ngOnInit(){this.document&&this._loadStyles()}ngAfterViewInit(){this.rootEl=this.el?.nativeElement,this.rootEl&&this.rootEl?.setAttribute(this.attrSelector,"")}ngOnChanges(e){if(this.document&&!on(this.platformId)){let{dt:n}=e;n&&n.currentValue&&(this._loadScopedThemeStyles(n.currentValue),this._themeChangeListener(()=>this._loadScopedThemeStyles(n.currentValue)))}}ngOnDestroy(){this._unloadScopedThemeStyles(),this.themeChangeListeners.forEach(e=>vt.off("theme:change",e))}_loadStyles(){let e=()=>{be.isStyleNameLoaded("base")||(this.baseStyle.loadGlobalCSS(this.styleOptions),be.setLoadedStyleName("base")),this._loadThemeStyles()};e(),this._themeChangeListener(()=>e())}_loadCoreStyles(){!be.isStyleNameLoaded("base")&&this._name&&(this.baseComponentStyle.loadCSS(this.styleOptions),this.componentStyle&&this.componentStyle?.loadCSS(this.styleOptions),be.setLoadedStyleName(this.componentStyle?.name))}_loadThemeStyles(){if(!ce.isStyleNameLoaded("common")){let{primitive:e,semantic:n,global:i,style:r}=this.componentStyle?.getCommonTheme?.()||{};this.baseStyle.load(e?.css,y({name:"primitive-variables"},this.styleOptions)),this.baseStyle.load(n?.css,y({name:"semantic-variables"},this.styleOptions)),this.baseStyle.load(i?.css,y({name:"global-variables"},this.styleOptions)),this.baseStyle.loadGlobalTheme(y({name:"global-style"},this.styleOptions),r),ce.setLoadedStyleName("common")}if(!ce.isStyleNameLoaded(this.componentStyle?.name)&&this.componentStyle?.name){let{css:e,style:n}=this.componentStyle?.getComponentTheme?.()||{};this.componentStyle?.load(e,y({name:`${this.componentStyle?.name}-variables`},this.styleOptions)),this.componentStyle?.loadTheme(y({name:`${this.componentStyle?.name}-style`},this.styleOptions),n),ce.setLoadedStyleName(this.componentStyle?.name)}if(!ce.isStyleNameLoaded("layer-order")){let e=this.componentStyle?.getLayerOrderThemeCSS?.();this.baseStyle.load(e,y({name:"layer-order",first:!0},this.styleOptions)),ce.setLoadedStyleName("layer-order")}this.dt&&(this._loadScopedThemeStyles(this.dt),this._themeChangeListener(()=>this._loadScopedThemeStyles(this.dt)))}_loadScopedThemeStyles(e){let{css:n}=this.componentStyle?.getPresetTheme?.(e,`[${this.attrSelector}]`)||{},i=this.componentStyle?.load(n,y({name:`${this.attrSelector}-${this.componentStyle?.name}`},this.styleOptions));this.scopedStyleEl=i?.el}_unloadScopedThemeStyles(){this.scopedStyleEl?.remove()}_themeChangeListener(e=()=>{}){be.clearLoadedStyleNames(),vt.on("theme:change",e),this.themeChangeListeners.push(e)}cx(e,n){let i=this.parent?this.parent.componentStyle?.classes?.[e]:this.componentStyle?.classes?.[e];return typeof i=="function"?i({instance:this}):typeof i=="string"?i:e}sx(e){let n=this.componentStyle?.inlineStyles?.[e];return typeof n=="function"?n({instance:this}):typeof n=="string"?n:y({},n)}get parent(){return this.parentInstance}static \u0275fac=function(n){return new(n||t)};static \u0275dir=w({type:t,inputs:{dt:"dt"},features:[D([Zn,A]),Y]})}return t})();var Xo=["*"],Ko=`
.p-icon {
    display: inline-block;
    vertical-align: baseline;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,Jo=(()=>{class t extends A{name="baseicon";inlineStyles=Ko;static \u0275fac=(()=>{let e;return function(i){return(e||(e=m(t)))(i||t)}})();static \u0275prov=V({token:t,factory:t.\u0275fac})}return t})();var at=(()=>{class t extends N{label;spin=!1;styleClass;role;ariaLabel;ariaHidden;ngOnInit(){super.ngOnInit(),this.getAttributes()}getAttributes(){let e=le(this.label);this.role=e?void 0:"img",this.ariaLabel=e?void 0:this.label,this.ariaHidden=e}getClassNames(){return`p-icon ${this.styleClass?this.styleClass+" ":""}${this.spin?"p-icon-spin":""}`}static \u0275fac=(()=>{let e;return function(i){return(e||(e=m(t)))(i||t)}})();static \u0275cmp=M({type:t,selectors:[["ng-component"]],hostAttrs:[1,"p-component","p-iconwrapper"],inputs:{label:"label",spin:[2,"spin","spin",_],styleClass:"styleClass"},features:[D([Jo]),b],ngContentSelectors:Xo,decls:1,vars:0,template:function(n,i){n&1&&(de(),pe(0))},encapsulation:2,changeDetection:0})}return t})();var Xn=(()=>{class t extends at{pathId;ngOnInit(){this.pathId="url(#"+De()+")"}static \u0275fac=(()=>{let e;return function(i){return(e||(e=m(t)))(i||t)}})();static \u0275cmp=M({type:t,selectors:[["SpinnerIcon"]],features:[b],decls:6,vars:7,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(n,i){n&1&&(Pe(),a(0,"svg",0)(1,"g"),v(2,"path",1),l(),a(3,"defs")(4,"clipPath",2),v(5,"rect",3),l()()()),n&2&&(ee(i.getClassNames()),F("aria-label",i.ariaLabel)("aria-hidden",i.ariaHidden)("role",i.role),u(),F("clip-path",i.pathId),u(3),c("id",i.pathId))},encapsulation:2})}return t})();var Kn=(()=>{class t extends at{static \u0275fac=(()=>{let e;return function(i){return(e||(e=m(t)))(i||t)}})();static \u0275cmp=M({type:t,selectors:[["TimesIcon"]],features:[b],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M8.01186 7.00933L12.27 2.75116C12.341 2.68501 12.398 2.60524 12.4375 2.51661C12.4769 2.42798 12.4982 2.3323 12.4999 2.23529C12.5016 2.13827 12.4838 2.0419 12.4474 1.95194C12.4111 1.86197 12.357 1.78024 12.2884 1.71163C12.2198 1.64302 12.138 1.58893 12.0481 1.55259C11.9581 1.51625 11.8617 1.4984 11.7647 1.50011C11.6677 1.50182 11.572 1.52306 11.4834 1.56255C11.3948 1.60204 11.315 1.65898 11.2488 1.72997L6.99067 5.98814L2.7325 1.72997C2.59553 1.60234 2.41437 1.53286 2.22718 1.53616C2.03999 1.53946 1.8614 1.61529 1.72901 1.74767C1.59663 1.88006 1.5208 2.05865 1.5175 2.24584C1.5142 2.43303 1.58368 2.61419 1.71131 2.75116L5.96948 7.00933L1.71131 11.2675C1.576 11.403 1.5 11.5866 1.5 11.7781C1.5 11.9696 1.576 12.1532 1.71131 12.2887C1.84679 12.424 2.03043 12.5 2.2219 12.5C2.41338 12.5 2.59702 12.424 2.7325 12.2887L6.99067 8.03052L11.2488 12.2887C11.3843 12.424 11.568 12.5 11.7594 12.5C11.9509 12.5 12.1346 12.424 12.27 12.2887C12.4053 12.1532 12.4813 11.9696 12.4813 11.7781C12.4813 11.5866 12.4053 11.403 12.27 11.2675L8.01186 7.00933Z","fill","currentColor"]],template:function(n,i){n&1&&(Pe(),a(0,"svg",0),v(1,"path",1),l()),n&2&&(ee(i.getClassNames()),F("aria-label",i.ariaLabel)("aria-hidden",i.ariaHidden)("role",i.role))},encapsulation:2})}return t})();var ei=({dt:t})=>`
/* For PrimeNG */
.p-ripple {
    overflow: hidden;
    position: relative;
}

.p-ink {
    display: block;
    position: absolute;
    background: ${t("ripple.background")};
    border-radius: 100%;
    transform: scale(0);
}

.p-ink-active {
    animation: ripple 0.4s linear;
}

.p-ripple-disabled .p-ink {
    display: none !important;
}

@keyframes ripple {
    100% {
        opacity: 0;
        transform: scale(2.5);
    }
}
`,ti={root:"p-ink"},Jn=(()=>{class t extends A{name="ripple";theme=ei;classes=ti;static \u0275fac=(()=>{let e;return function(i){return(e||(e=m(t)))(i||t)}})();static \u0275prov=V({token:t,factory:t.\u0275fac})}return t})();var lt=(()=>{class t extends N{zone=f(Wt);_componentStyle=f(Jn);animationListener;mouseDownListener;timeout;constructor(){super(),tn(()=>{Ue(this.platformId)&&(this.config.ripple()?this.zone.runOutsideAngular(()=>{this.create(),this.mouseDownListener=this.renderer.listen(this.el.nativeElement,"mousedown",this.onMouseDown.bind(this))}):this.remove())})}ngAfterViewInit(){super.ngAfterViewInit()}onMouseDown(e){let n=this.getInk();if(!n||this.document.defaultView?.getComputedStyle(n,null).display==="none")return;if(fe(n,"p-ink-active"),!ft(n)&&!bt(n)){let p=Math.max(un(this.el.nativeElement),pn(this.el.nativeElement));n.style.height=p+"px",n.style.width=p+"px"}let i=dn(this.el.nativeElement),r=e.pageX-i.left+this.document.body.scrollTop-bt(n)/2,s=e.pageY-i.top+this.document.body.scrollLeft-ft(n)/2;this.renderer.setStyle(n,"top",s+"px"),this.renderer.setStyle(n,"left",r+"px"),qe(n,"p-ink-active"),this.timeout=setTimeout(()=>{let p=this.getInk();p&&fe(p,"p-ink-active")},401)}getInk(){let e=this.el.nativeElement.children;for(let n=0;n<e.length;n++)if(typeof e[n].className=="string"&&e[n].className.indexOf("p-ink")!==-1)return e[n];return null}resetInk(){let e=this.getInk();e&&fe(e,"p-ink-active")}onAnimationEnd(e){this.timeout&&clearTimeout(this.timeout),fe(e.currentTarget,"p-ink-active")}create(){let e=this.renderer.createElement("span");this.renderer.addClass(e,"p-ink"),this.renderer.appendChild(this.el.nativeElement,e),this.renderer.setAttribute(e,"aria-hidden","true"),this.renderer.setAttribute(e,"role","presentation"),this.animationListener||(this.animationListener=this.renderer.listen(e,"animationend",this.onAnimationEnd.bind(this)))}remove(){let e=this.getInk();e&&(this.mouseDownListener&&this.mouseDownListener(),this.animationListener&&this.animationListener(),this.mouseDownListener=null,this.animationListener=null,hn(e))}ngOnDestroy(){this.config&&this.config.ripple()&&this.remove(),super.ngOnDestroy()}static \u0275fac=function(n){return new(n||t)};static \u0275dir=w({type:t,selectors:[["","pRipple",""]],hostAttrs:[1,"p-ripple"],features:[D([Jn]),b]})}return t})();var oi=["container"],ii=["icon"],ri=["closeicon"],si=["*"],ai=(t,o)=>({showTransitionParams:t,hideTransitionParams:o}),li=t=>({value:"visible()",params:t}),ci=t=>({closeCallback:t});function ui(t,o){t&1&&ue(0)}function di(t,o){if(t&1&&x(0,ui,1,0,"ng-container",7),t&2){let e=g(2);c("ngTemplateOutlet",e.iconTemplate||e.iconTemplate)}}function pi(t,o){if(t&1&&v(0,"i",3),t&2){let e=g(2);c("ngClass",e.icon)}}function hi(t,o){if(t&1&&v(0,"span",9),t&2){let e=g(3);c("ngClass",e.cx("text"))("innerHTML",e.text,Gt)}}function gi(t,o){if(t&1&&(a(0,"div"),x(1,hi,1,2,"span",8),l()),t&2){let e=g(2);u(),c("ngIf",!e.escape)}}function mi(t,o){if(t&1&&(a(0,"span",5),d(1),l()),t&2){let e=g(3);c("ngClass",e.cx("text")),u(),Z(e.text)}}function fi(t,o){if(t&1&&x(0,mi,2,2,"span",10),t&2){let e=g(2);c("ngIf",e.escape&&e.text)}}function bi(t,o){t&1&&ue(0)}function yi(t,o){if(t&1&&x(0,bi,1,0,"ng-container",11),t&2){let e=g(2);c("ngTemplateOutlet",e.containerTemplate||e.containerTemplate)("ngTemplateOutletContext",te(2,ci,e.close.bind(e)))}}function vi(t,o){if(t&1&&(a(0,"span",5),pe(1),l()),t&2){let e=g(2);c("ngClass",e.cx("text"))}}function _i(t,o){if(t&1&&v(0,"i",13),t&2){let e=g(3);c("ngClass",e.closeIcon)}}function Ci(t,o){t&1&&ue(0)}function wi(t,o){if(t&1&&x(0,Ci,1,0,"ng-container",7),t&2){let e=g(3);c("ngTemplateOutlet",e.closeIconTemplate||e._closeIconTemplate)}}function xi(t,o){t&1&&v(0,"TimesIcon",14)}function Ei(t,o){if(t&1){let e=Zt();a(0,"button",12),T("click",function(i){jt(e);let r=g(2);return zt(r.close(i))}),x(1,_i,1,1,"i",13)(2,wi,1,1,"ng-container")(3,xi,1,0,"TimesIcon",14),l()}if(t&2){let e=g(2);F("aria-label",e.closeAriaLabel),u(),k(e.closeIcon?1:-1),u(),k(e.closeIconTemplate||e._closeIconTemplate?2:-1),u(),k(!e.closeIconTemplate&&!e._closeIconTemplate&&!e.closeIcon?3:-1)}}function Mi(t,o){if(t&1&&(a(0,"div",1)(1,"div",2),x(2,di,1,1,"ng-container")(3,pi,1,1,"i",3)(4,gi,2,1,"div",4)(5,fi,1,1,"ng-template",null,0,Jt)(7,yi,1,4,"ng-container")(8,vi,2,1,"span",5)(9,Ei,4,4,"button",6),l()()),t&2){let e=je(6),n=g();c("ngClass",n.containerClass)("@messageAnimation",te(13,li,Kt(10,ai,n.showTransitionOptions,n.hideTransitionOptions))),F("aria-live","polite")("role","alert"),u(2),k(n.iconTemplate||n._iconTemplate?2:-1),u(),k(n.icon?3:-1),u(),c("ngIf",!n.escape)("ngIfElse",e),u(3),k(n.containerTemplate||n._containerTemplate?7:8),u(2),k(n.closable?9:-1)}}var Si=({dt:t})=>`
.p-message {
    border-radius: ${t("message.border.radius")};
    outline-width: ${t("message.border.width")};
    outline-style: solid;
}

.p-message-content {
    display: flex;
    align-items: center;
    padding: ${t("message.content.padding")};
    gap: ${t("message.content.gap")};
    height: 100%;
}

.p-message-icon {
    flex-shrink: 0;
}

.p-message-close-button {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    margin-inline-start: auto;
    overflow: hidden;
    position: relative;
    width: ${t("message.close.button.width")};
    height: ${t("message.close.button.height")};
    border-radius: ${t("message.close.button.border.radius")};
    background: transparent;
    transition: background ${t("message.transition.duration")}, color ${t("message.transition.duration")}, outline-color ${t("message.transition.duration")}, box-shadow ${t("message.transition.duration")}, opacity 0.3s;
    outline-color: transparent;
    color: inherit;
    padding: 0;
    border: none;
    cursor: pointer;
    user-select: none;
}

.p-message-close-icon {
    font-size: ${t("message.close.icon.size")};
    width: ${t("message.close.icon.size")};
    height: ${t("message.close.icon.size")};
}

.p-message-close-button:focus-visible {
    outline-width: ${t("message.close.button.focus.ring.width")};
    outline-style: ${t("message.close.button.focus.ring.style")};
    outline-offset: ${t("message.close.button.focus.ring.offset")};
}

.p-message-info {
    background: ${t("message.info.background")};
    outline-color: ${t("message.info.border.color")};
    color: ${t("message.info.color")};
    box-shadow: ${t("message.info.shadow")};
}

.p-message-info .p-message-close-button:focus-visible {
    outline-color: ${t("message.info.close.button.focus.ring.color")};
    box-shadow: ${t("message.info.close.button.focus.ring.shadow")};
}

.p-message-info .p-message-close-button:hover {
    background: ${t("message.info.close.button.hover.background")};
}

.p-message-info.p-message-outlined {
    color: ${t("message.info.outlined.color")};
    outline-color: ${t("message.info.outlined.border.color")};
}

.p-message-info.p-message-simple {
    color: ${t("message.info.simple.color")};
}

.p-message-success {
    background: ${t("message.success.background")};
    outline-color: ${t("message.success.border.color")};
    color: ${t("message.success.color")};
    box-shadow: ${t("message.success.shadow")};
}

.p-message-success .p-message-close-button:focus-visible {
    outline-color: ${t("message.success.close.button.focus.ring.color")};
    box-shadow: ${t("message.success.close.button.focus.ring.shadow")};
}

.p-message-success .p-message-close-button:hover {
    background: ${t("message.success.close.button.hover.background")};
}

.p-message-success.p-message-outlined {
    color: ${t("message.success.outlined.color")};
    outline-color: ${t("message.success.outlined.border.color")};
}

.p-message-success.p-message-simple {
    color: ${t("message.success.simple.color")};
}

.p-message-warn {
    background: ${t("message.warn.background")};
    outline-color: ${t("message.warn.border.color")};
    color: ${t("message.warn.color")};
    box-shadow: ${t("message.warn.shadow")};
}

.p-message-warn .p-message-close-button:focus-visible {
    outline-color: ${t("message.warn.close.button.focus.ring.color")};
    box-shadow: ${t("message.warn.close.button.focus.ring.shadow")};
}

.p-message-warn .p-message-close-button:hover {
    background: ${t("message.warn.close.button.hover.background")};
}

.p-message-warn.p-message-outlined {
    color: ${t("message.warn.outlined.color")};
    outline-color: ${t("message.warn.outlined.border.color")};
}

.p-message-warn.p-message-simple {
    color: ${t("message.warn.simple.color")};
}

.p-message-error {
    background: ${t("message.error.background")};
    outline-color: ${t("message.error.border.color")};
    color: ${t("message.error.color")};
    box-shadow: ${t("message.error.shadow")};
}

.p-message-error .p-message-close-button:focus-visible {
    outline-color: ${t("message.error.close.button.focus.ring.color")};
    box-shadow: ${t("message.error.close.button.focus.ring.shadow")};
}

.p-message-error .p-message-close-button:hover {
    background: ${t("message.error.close.button.hover.background")};
}

.p-message-error.p-message-outlined {
    color: ${t("message.error.outlined.color")};
    outline-color: ${t("message.error.outlined.border.color")};
}

.p-message-error.p-message-simple {
    color: ${t("message.error.simple.color")};
}

.p-message-secondary {
    background: ${t("message.secondary.background")};
    outline-color: ${t("message.secondary.border.color")};
    color: ${t("message.secondary.color")};
    box-shadow: ${t("message.secondary.shadow")};
}

.p-message-secondary .p-message-close-button:focus-visible {
    outline-color: ${t("message.secondary.close.button.focus.ring.color")};
    box-shadow: ${t("message.secondary.close.button.focus.ring.shadow")};
}

.p-message-secondary .p-message-close-button:hover {
    background: ${t("message.secondary.close.button.hover.background")};
}

.p-message-secondary.p-message-outlined {
    color: ${t("message.secondary.outlined.color")};
    outline-color: ${t("message.secondary.outlined.border.color")};
}

.p-message-secondary.p-message-simple {
    color: ${t("message.secondary.simple.color")};
}

.p-message-contrast {
    background: ${t("message.contrast.background")};
    outline-color: ${t("message.contrast.border.color")};
    color: ${t("message.contrast.color")};
    box-shadow: ${t("message.contrast.shadow")};
}

.p-message-contrast .p-message-close-button:focus-visible {
    outline-color: ${t("message.contrast.close.button.focus.ring.color")};
    box-shadow: ${t("message.contrast.close.button.focus.ring.shadow")};
}

.p-message-contrast .p-message-close-button:hover {
    background: ${t("message.contrast.close.button.hover.background")};
}

.p-message-contrast.p-message-outlined {
    color: ${t("message.contrast.outlined.color")};
    outline-color: ${t("message.contrast.outlined.border.color")};
}

.p-message-contrast.p-message-simple {
    color: ${t("message.contrast.simple.color")};
}

.p-message-text {
    display: inline-flex;
    align-items: center;
    font-size: ${t("message.text.font.size")};
    font-weight: ${t("message.text.font.weight")};
}

.p-message-icon {
    font-size: ${t("message.icon.size")};
    width: ${t("message.icon.size")};
    height: ${t("message.icon.size")};
}

.p-message-enter-from {
    opacity: 0;
}

.p-message-enter-active {
    transition: opacity 0.3s;
}

.p-message.p-message-leave-from {
    max-height: 1000px;
}

.p-message.p-message-leave-to {
    max-height: 0;
    opacity: 0;
    margin: 0;
}

.p-message-leave-active {
    overflow: hidden;
    transition: max-height 0.45s cubic-bezier(0, 1, 0, 1), opacity 0.3s, margin 0.3s;
}

.p-message-leave-active .p-message-close-button {
    opacity: 0;
}

.p-message-sm .p-message-content {
    padding: ${t("message.content.sm.padding")};
}

.p-message-sm .p-message-text {
    font-size: ${t("message.text.sm.font.size")};
}

.p-message-sm .p-message-icon {
    font-size: ${t("message.icon.sm.size")};
    width: ${t("message.icon.sm.size")};
    height: ${t("message.icon.sm.size")};
}

.p-message-sm .p-message-close-icon {
    font-size: ${t("message.close.icon.sm.size")};
    width: ${t("message.close.icon.sm.size")};
    height: ${t("message.close.icon.sm.size")};
}

.p-message-lg .p-message-content {
    padding: ${t("message.content.lg.padding")};
}

.p-message-lg .p-message-text {
    font-size: ${t("message.text.lg.font.size")};
}

.p-message-lg .p-message-icon {
    font-size: ${t("message.icon.lg.size")};
    width: ${t("message.icon.lg.size")};
    height: ${t("message.icon.lg.size")};
}

.p-message-lg .p-message-close-icon {
    font-size: ${t("message.close.icon.lg.size")};
    width: ${t("message.close.icon.lg.size")};
    height: ${t("message.close.icon.lg.size")};
}

.p-message-outlined {
    background: transparent;
    outline-width: ${t("message.outlined.border.width")};
}

.p-message-simple {
    background: transparent;
    outline-color: transparent;
    box-shadow: none;
}

.p-message-simple .p-message-content {
    padding: ${t("message.simple.content.padding")};
}

.p-message-outlined .p-message-close-button:hover,
.p-message-simple .p-message-close-button:hover {
    background: transparent;
}`,Di={root:({props:t})=>["p-message p-component p-message-"+t.severity,{"p-message-simple":t.variant==="simple"}],content:"p-message-content",icon:"p-message-icon",text:"p-message-text",closeButton:"p-message-close-button",closeIcon:"p-message-close-icon"},eo=(()=>{class t extends A{name="message";theme=Si;classes=Di;static \u0275fac=(()=>{let e;return function(i){return(e||(e=m(t)))(i||t)}})();static \u0275prov=V({token:t,factory:t.\u0275fac})}return t})();var to=(()=>{class t extends N{severity="info";text;escape=!0;style;styleClass;closable=!1;icon;closeIcon;life;showTransitionOptions="300ms ease-out";hideTransitionOptions="200ms cubic-bezier(0.86, 0, 0.07, 1)";size;variant;onClose=new j;get closeAriaLabel(){return this.config.translation.aria?this.config.translation.aria.close:void 0}get containerClass(){let e=this.variant==="outlined"?"p-message-outlined":this.variant==="simple"?"p-message-simple":"",n=this.size==="small"?"p-message-sm":this.size==="large"?"p-message-lg":"";return`p-message-${this.severity} ${e} ${n}`.trim()+(this.styleClass?" "+this.styleClass:"")}visible=Q(!0);_componentStyle=f(eo);containerTemplate;iconTemplate;closeIconTemplate;templates;_containerTemplate;_iconTemplate;_closeIconTemplate;ngOnInit(){super.ngOnInit(),this.life&&setTimeout(()=>{this.visible.set(!1)},this.life)}ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"container":this._containerTemplate=e.template;break;case"icon":this._iconTemplate=e.template;break;case"closeicon":this._closeIconTemplate=e.template;break}})}close(e){this.visible.set(!1),this.onClose.emit({originalEvent:e})}static \u0275fac=(()=>{let e;return function(i){return(e||(e=m(t)))(i||t)}})();static \u0275cmp=M({type:t,selectors:[["p-message"]],contentQueries:function(n,i,r){if(n&1&&(W(r,oi,4),W(r,ii,4),W(r,ri,4),W(r,Ye,4)),n&2){let s;G(s=U())&&(i.containerTemplate=s.first),G(s=U())&&(i.iconTemplate=s.first),G(s=U())&&(i.closeIconTemplate=s.first),G(s=U())&&(i.templates=s)}},inputs:{severity:"severity",text:"text",escape:[2,"escape","escape",_],style:"style",styleClass:"styleClass",closable:[2,"closable","closable",_],icon:"icon",closeIcon:"closeIcon",life:"life",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",size:"size",variant:"variant"},outputs:{onClose:"onClose"},features:[D([eo]),b],ngContentSelectors:si,decls:1,vars:1,consts:[["escapeOut",""],[1,"p-message","p-component",3,"ngClass"],[1,"p-message-content"],[1,"p-message-icon",3,"ngClass"],[4,"ngIf","ngIfElse"],[3,"ngClass"],["pRipple","","type","button",1,"p-message-close-button"],[4,"ngTemplateOutlet"],[3,"ngClass","innerHTML",4,"ngIf"],[3,"ngClass","innerHTML"],[3,"ngClass",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["pRipple","","type","button",1,"p-message-close-button",3,"click"],[1,"p-message-close-icon",3,"ngClass"],["styleClass","p-message-close-icon"]],template:function(n,i){n&1&&(de(),x(0,Mi,10,15,"div",1)),n&2&&k(i.visible()?0:-1)},dependencies:[X,he,We,Ge,Kn,lt,q],encapsulation:2,data:{animation:[Se("messageAnimation",[me(":enter",[ae({opacity:0,transform:"translateY(-25%)"}),ge("{{showTransitionParams}}")]),me(":leave",[ge("{{hideTransitionParams}}",ae({height:0,marginTop:0,marginBottom:0,marginLeft:0,marginRight:0,opacity:0}))])])]},changeDetection:0})}return t})();var no=(()=>{class t{static zindex=1e3;static calculatedScrollbarWidth=null;static calculatedScrollbarHeight=null;static browser;static addClass(e,n){e&&n&&(e.classList?e.classList.add(n):e.className+=" "+n)}static addMultipleClasses(e,n){if(e&&n)if(e.classList){let i=n.trim().split(" ");for(let r=0;r<i.length;r++)e.classList.add(i[r])}else{let i=n.split(" ");for(let r=0;r<i.length;r++)e.className+=" "+i[r]}}static removeClass(e,n){e&&n&&(e.classList?e.classList.remove(n):e.className=e.className.replace(new RegExp("(^|\\b)"+n.split(" ").join("|")+"(\\b|$)","gi")," "))}static removeMultipleClasses(e,n){e&&n&&[n].flat().filter(Boolean).forEach(i=>i.split(" ").forEach(r=>this.removeClass(e,r)))}static hasClass(e,n){return e&&n?e.classList?e.classList.contains(n):new RegExp("(^| )"+n+"( |$)","gi").test(e.className):!1}static siblings(e){return Array.prototype.filter.call(e.parentNode.children,function(n){return n!==e})}static find(e,n){return Array.from(e.querySelectorAll(n))}static findSingle(e,n){return this.isElement(e)?e.querySelector(n):null}static index(e){let n=e.parentNode.childNodes,i=0;for(var r=0;r<n.length;r++){if(n[r]==e)return i;n[r].nodeType==1&&i++}return-1}static indexWithinGroup(e,n){let i=e.parentNode?e.parentNode.childNodes:[],r=0;for(var s=0;s<i.length;s++){if(i[s]==e)return r;i[s].attributes&&i[s].attributes[n]&&i[s].nodeType==1&&r++}return-1}static appendOverlay(e,n,i="self"){i!=="self"&&e&&n&&this.appendChild(e,n)}static alignOverlay(e,n,i="self",r=!0){e&&n&&(r&&(e.style.minWidth=`${t.getOuterWidth(n)}px`),i==="self"?this.relativePosition(e,n):this.absolutePosition(e,n))}static relativePosition(e,n,i=!0){let r=ke=>{if(ke)return getComputedStyle(ke).getPropertyValue("position")==="relative"?ke:r(ke.parentElement)},s=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e),p=n.offsetHeight,h=n.getBoundingClientRect(),$=this.getWindowScrollTop(),C=this.getWindowScrollLeft(),S=this.getViewport(),I=r(e)?.getBoundingClientRect()||{top:-1*$,left:-1*C},B,K;h.top+p+s.height>S.height?(B=h.top-I.top-s.height,e.style.transformOrigin="bottom",h.top+B<0&&(B=-1*h.top)):(B=p+h.top-I.top,e.style.transformOrigin="top");let Pt=h.left+s.width-S.width,fo=h.left-I.left;s.width>S.width?K=(h.left-I.left)*-1:Pt>0?K=fo-Pt:K=h.left-I.left,e.style.top=B+"px",e.style.left=K+"px",i&&(e.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static absolutePosition(e,n,i=!0){let r=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e),s=r.height,p=r.width,h=n.offsetHeight,$=n.offsetWidth,C=n.getBoundingClientRect(),S=this.getWindowScrollTop(),R=this.getWindowScrollLeft(),I=this.getViewport(),B,K;C.top+h+s>I.height?(B=C.top+S-s,e.style.transformOrigin="bottom",B<0&&(B=S)):(B=h+C.top+S,e.style.transformOrigin="top"),C.left+p>I.width?K=Math.max(0,C.left+R+$-p):K=C.left+R,e.style.top=B+"px",e.style.left=K+"px",i&&(e.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static getParents(e,n=[]){return e.parentNode===null?n:this.getParents(e.parentNode,n.concat([e.parentNode]))}static getScrollableParents(e){let n=[];if(e){let i=this.getParents(e),r=/(auto|scroll)/,s=p=>{let h=window.getComputedStyle(p,null);return r.test(h.getPropertyValue("overflow"))||r.test(h.getPropertyValue("overflowX"))||r.test(h.getPropertyValue("overflowY"))};for(let p of i){let h=p.nodeType===1&&p.dataset.scrollselectors;if(h){let $=h.split(",");for(let C of $){let S=this.findSingle(p,C);S&&s(S)&&n.push(S)}}p.nodeType!==9&&s(p)&&n.push(p)}}return n}static getHiddenElementOuterHeight(e){e.style.visibility="hidden",e.style.display="block";let n=e.offsetHeight;return e.style.display="none",e.style.visibility="visible",n}static getHiddenElementOuterWidth(e){e.style.visibility="hidden",e.style.display="block";let n=e.offsetWidth;return e.style.display="none",e.style.visibility="visible",n}static getHiddenElementDimensions(e){let n={};return e.style.visibility="hidden",e.style.display="block",n.width=e.offsetWidth,n.height=e.offsetHeight,e.style.display="none",e.style.visibility="visible",n}static scrollInView(e,n){let i=getComputedStyle(e).getPropertyValue("borderTopWidth"),r=i?parseFloat(i):0,s=getComputedStyle(e).getPropertyValue("paddingTop"),p=s?parseFloat(s):0,h=e.getBoundingClientRect(),C=n.getBoundingClientRect().top+document.body.scrollTop-(h.top+document.body.scrollTop)-r-p,S=e.scrollTop,R=e.clientHeight,I=this.getOuterHeight(n);C<0?e.scrollTop=S+C:C+I>R&&(e.scrollTop=S+C-R+I)}static fadeIn(e,n){e.style.opacity=0;let i=+new Date,r=0,s=function(){r=+e.style.opacity.replace(",",".")+(new Date().getTime()-i)/n,e.style.opacity=r,i=+new Date,+r<1&&(window.requestAnimationFrame&&requestAnimationFrame(s)||setTimeout(s,16))};s()}static fadeOut(e,n){var i=1,r=50,s=n,p=r/s;let h=setInterval(()=>{i=i-p,i<=0&&(i=0,clearInterval(h)),e.style.opacity=i},r)}static getWindowScrollTop(){let e=document.documentElement;return(window.pageYOffset||e.scrollTop)-(e.clientTop||0)}static getWindowScrollLeft(){let e=document.documentElement;return(window.pageXOffset||e.scrollLeft)-(e.clientLeft||0)}static matches(e,n){var i=Element.prototype,r=i.matches||i.webkitMatchesSelector||i.mozMatchesSelector||i.msMatchesSelector||function(s){return[].indexOf.call(document.querySelectorAll(s),this)!==-1};return r.call(e,n)}static getOuterWidth(e,n){let i=e.offsetWidth;if(n){let r=getComputedStyle(e);i+=parseFloat(r.marginLeft)+parseFloat(r.marginRight)}return i}static getHorizontalPadding(e){let n=getComputedStyle(e);return parseFloat(n.paddingLeft)+parseFloat(n.paddingRight)}static getHorizontalMargin(e){let n=getComputedStyle(e);return parseFloat(n.marginLeft)+parseFloat(n.marginRight)}static innerWidth(e){let n=e.offsetWidth,i=getComputedStyle(e);return n+=parseFloat(i.paddingLeft)+parseFloat(i.paddingRight),n}static width(e){let n=e.offsetWidth,i=getComputedStyle(e);return n-=parseFloat(i.paddingLeft)+parseFloat(i.paddingRight),n}static getInnerHeight(e){let n=e.offsetHeight,i=getComputedStyle(e);return n+=parseFloat(i.paddingTop)+parseFloat(i.paddingBottom),n}static getOuterHeight(e,n){let i=e.offsetHeight;if(n){let r=getComputedStyle(e);i+=parseFloat(r.marginTop)+parseFloat(r.marginBottom)}return i}static getHeight(e){let n=e.offsetHeight,i=getComputedStyle(e);return n-=parseFloat(i.paddingTop)+parseFloat(i.paddingBottom)+parseFloat(i.borderTopWidth)+parseFloat(i.borderBottomWidth),n}static getWidth(e){let n=e.offsetWidth,i=getComputedStyle(e);return n-=parseFloat(i.paddingLeft)+parseFloat(i.paddingRight)+parseFloat(i.borderLeftWidth)+parseFloat(i.borderRightWidth),n}static getViewport(){let e=window,n=document,i=n.documentElement,r=n.getElementsByTagName("body")[0],s=e.innerWidth||i.clientWidth||r.clientWidth,p=e.innerHeight||i.clientHeight||r.clientHeight;return{width:s,height:p}}static getOffset(e){var n=e.getBoundingClientRect();return{top:n.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:n.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}static replaceElementWith(e,n){let i=e.parentNode;if(!i)throw"Can't replace element";return i.replaceChild(n,e)}static getUserAgent(){if(navigator&&this.isClient())return navigator.userAgent}static isIE(){var e=window.navigator.userAgent,n=e.indexOf("MSIE ");if(n>0)return!0;var i=e.indexOf("Trident/");if(i>0){var r=e.indexOf("rv:");return!0}var s=e.indexOf("Edge/");return s>0}static isIOS(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream}static isAndroid(){return/(android)/i.test(navigator.userAgent)}static isTouchDevice(){return"ontouchstart"in window||navigator.maxTouchPoints>0}static appendChild(e,n){if(this.isElement(n))n.appendChild(e);else if(n&&n.el&&n.el.nativeElement)n.el.nativeElement.appendChild(e);else throw"Cannot append "+n+" to "+e}static removeChild(e,n){if(this.isElement(n))n.removeChild(e);else if(n.el&&n.el.nativeElement)n.el.nativeElement.removeChild(e);else throw"Cannot remove "+e+" from "+n}static removeElement(e){"remove"in Element.prototype?e.remove():e.parentNode.removeChild(e)}static isElement(e){return typeof HTMLElement=="object"?e instanceof HTMLElement:e&&typeof e=="object"&&e!==null&&e.nodeType===1&&typeof e.nodeName=="string"}static calculateScrollbarWidth(e){if(e){let n=getComputedStyle(e);return e.offsetWidth-e.clientWidth-parseFloat(n.borderLeftWidth)-parseFloat(n.borderRightWidth)}else{if(this.calculatedScrollbarWidth!==null)return this.calculatedScrollbarWidth;let n=document.createElement("div");n.className="p-scrollbar-measure",document.body.appendChild(n);let i=n.offsetWidth-n.clientWidth;return document.body.removeChild(n),this.calculatedScrollbarWidth=i,i}}static calculateScrollbarHeight(){if(this.calculatedScrollbarHeight!==null)return this.calculatedScrollbarHeight;let e=document.createElement("div");e.className="p-scrollbar-measure",document.body.appendChild(e);let n=e.offsetHeight-e.clientHeight;return document.body.removeChild(e),this.calculatedScrollbarWidth=n,n}static invokeElementMethod(e,n,i){e[n].apply(e,i)}static clearSelection(){if(window.getSelection)window.getSelection().empty?window.getSelection().empty():window.getSelection().removeAllRanges&&window.getSelection().rangeCount>0&&window.getSelection().getRangeAt(0).getClientRects().length>0&&window.getSelection().removeAllRanges();else if(document.selection&&document.selection.empty)try{document.selection.empty()}catch{}}static getBrowser(){if(!this.browser){let e=this.resolveUserAgent();this.browser={},e.browser&&(this.browser[e.browser]=!0,this.browser.version=e.version),this.browser.chrome?this.browser.webkit=!0:this.browser.webkit&&(this.browser.safari=!0)}return this.browser}static resolveUserAgent(){let e=navigator.userAgent.toLowerCase(),n=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:n[1]||"",version:n[2]||"0"}}static isInteger(e){return Number.isInteger?Number.isInteger(e):typeof e=="number"&&isFinite(e)&&Math.floor(e)===e}static isHidden(e){return!e||e.offsetParent===null}static isVisible(e){return e&&e.offsetParent!=null}static isExist(e){return e!==null&&typeof e<"u"&&e.nodeName&&e.parentNode}static focus(e,n){e&&document.activeElement!==e&&e.focus(n)}static getFocusableSelectorString(e=""){return`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        .p-inputtext:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        .p-button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e}`}static getFocusableElements(e,n=""){let i=this.find(e,this.getFocusableSelectorString(n)),r=[];for(let s of i){let p=getComputedStyle(s);this.isVisible(s)&&p.display!="none"&&p.visibility!="hidden"&&r.push(s)}return r}static getFocusableElement(e,n=""){let i=this.findSingle(e,this.getFocusableSelectorString(n));if(i){let r=getComputedStyle(i);if(this.isVisible(i)&&r.display!="none"&&r.visibility!="hidden")return i}return null}static getFirstFocusableElement(e,n=""){let i=this.getFocusableElements(e,n);return i.length>0?i[0]:null}static getLastFocusableElement(e,n){let i=this.getFocusableElements(e,n);return i.length>0?i[i.length-1]:null}static getNextFocusableElement(e,n=!1){let i=t.getFocusableElements(e),r=0;if(i&&i.length>0){let s=i.indexOf(i[0].ownerDocument.activeElement);n?s==-1||s===0?r=i.length-1:r=s-1:s!=-1&&s!==i.length-1&&(r=s+1)}return i[r]}static generateZIndex(){return this.zindex=this.zindex||999,++this.zindex}static getSelection(){return window.getSelection?window.getSelection().toString():document.getSelection?document.getSelection().toString():document.selection?document.selection.createRange().text:null}static getTargetElement(e,n){if(!e)return null;switch(e){case"document":return document;case"window":return window;case"@next":return n?.nextElementSibling;case"@prev":return n?.previousElementSibling;case"@parent":return n?.parentElement;case"@grandparent":return n?.parentElement.parentElement;default:let i=typeof e;if(i==="string")return document.querySelector(e);if(i==="object"&&e.hasOwnProperty("nativeElement"))return this.isExist(e.nativeElement)?e.nativeElement:void 0;let s=(p=>!!(p&&p.constructor&&p.call&&p.apply))(e)?e():e;return s&&s.nodeType===9||this.isExist(s)?s:null}}static isClient(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}static getAttribute(e,n){if(e){let i=e.getAttribute(n);return isNaN(i)?i==="true"||i==="false"?i==="true":i:+i}}static calculateBodyScrollbarWidth(){return window.innerWidth-document.documentElement.offsetWidth}static blockBodyScroll(e="p-overflow-hidden"){document.body.style.setProperty("--scrollbar-width",this.calculateBodyScrollbarWidth()+"px"),this.addClass(document.body,e)}static unblockBodyScroll(e="p-overflow-hidden"){document.body.style.removeProperty("--scrollbar-width"),this.removeClass(document.body,e)}static createElement(e,n={},...i){if(e){let r=document.createElement(e);return this.setAttributes(r,n),r.append(...i),r}}static setAttribute(e,n="",i){this.isElement(e)&&i!==null&&i!==void 0&&e.setAttribute(n,i)}static setAttributes(e,n={}){if(this.isElement(e)){let i=(r,s)=>{let p=e?.$attrs?.[r]?[e?.$attrs?.[r]]:[];return[s].flat().reduce((h,$)=>{if($!=null){let C=typeof $;if(C==="string"||C==="number")h.push($);else if(C==="object"){let S=Array.isArray($)?i(r,$):Object.entries($).map(([R,I])=>r==="style"&&(I||I===0)?`${R.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${I}`:I?R:void 0);h=S.length?h.concat(S.filter(R=>!!R)):h}}return h},p)};Object.entries(n).forEach(([r,s])=>{if(s!=null){let p=r.match(/^on(.+)/);p?e.addEventListener(p[1].toLowerCase(),s):r==="pBind"?this.setAttributes(e,s):(s=r==="class"?[...new Set(i("class",s))].join(" ").trim():r==="style"?i("style",s).join(";").trim():s,(e.$attrs=e.$attrs||{})&&(e.$attrs[r]=s),e.setAttribute(r,s))}})}}static isFocusableElement(e,n=""){return this.isElement(e)?e.matches(`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n}`):!1}}return t})();var oo=(()=>{class t extends N{autofocus=!1;_autofocus=!1;focused=!1;platformId=f(Ne);document=f(ze);host=f(se);ngAfterContentChecked(){this.autofocus===!1?this.host.nativeElement.removeAttribute("autofocus"):this.host.nativeElement.setAttribute("autofocus",!0),this.focused||this.autoFocus()}ngAfterViewChecked(){this.focused||this.autoFocus()}autoFocus(){Ue(this.platformId)&&this._autofocus&&setTimeout(()=>{let e=no.getFocusableElements(this.host?.nativeElement);e.length===0&&this.host.nativeElement.focus(),e.length>0&&e[0].focus(),this.focused=!0})}static \u0275fac=(()=>{let e;return function(i){return(e||(e=m(t)))(i||t)}})();static \u0275dir=w({type:t,selectors:[["","pAutoFocus",""]],inputs:{autofocus:[2,"autofocus","autofocus",_],_autofocus:[0,"pAutoFocus","_autofocus"]},features:[b]})}return t})();var Ii=({dt:t})=>`
.p-badge {
    display: inline-flex;
    border-radius: ${t("badge.border.radius")};
    justify-content: center;
    padding: ${t("badge.padding")};
    background: ${t("badge.primary.background")};
    color: ${t("badge.primary.color")};
    font-size: ${t("badge.font.size")};
    font-weight: ${t("badge.font.weight")};
    min-width: ${t("badge.min.width")};
    height: ${t("badge.height")};
    line-height: ${t("badge.height")};
}

.p-badge-dot {
    width: ${t("badge.dot.size")};
    min-width: ${t("badge.dot.size")};
    height: ${t("badge.dot.size")};
    border-radius: 50%;
    padding: 0;
}

.p-badge-circle {
    padding: 0;
    border-radius: 50%;
}

.p-badge-secondary {
    background: ${t("badge.secondary.background")};
    color: ${t("badge.secondary.color")};
}

.p-badge-success {
    background: ${t("badge.success.background")};
    color: ${t("badge.success.color")};
}

.p-badge-info {
    background: ${t("badge.info.background")};
    color: ${t("badge.info.color")};
}

.p-badge-warn {
    background: ${t("badge.warn.background")};
    color: ${t("badge.warn.color")};
}

.p-badge-danger {
    background: ${t("badge.danger.background")};
    color: ${t("badge.danger.color")};
}

.p-badge-contrast {
    background: ${t("badge.contrast.background")};
    color: ${t("badge.contrast.color")};
}

.p-badge-sm {
    font-size: ${t("badge.sm.font.size")};
    min-width: ${t("badge.sm.min.width")};
    height: ${t("badge.sm.height")};
    line-height: ${t("badge.sm.height")};
}

.p-badge-lg {
    font-size: ${t("badge.lg.font.size")};
    min-width: ${t("badge.lg.min.width")};
    height: ${t("badge.lg.height")};
    line-height: ${t("badge.lg.height")};
}

.p-badge-xl {
    font-size: ${t("badge.xl.font.size")};
    min-width: ${t("badge.xl.min.width")};
    height: ${t("badge.xl.height")};
    line-height: ${t("badge.xl.height")};
}

/* For PrimeNG (directive)*/

.p-overlay-badge {
    position: relative;
}

.p-overlay-badge > .p-badge {
    position: absolute;
    top: 0;
    inset-inline-end: 0;
    transform: translate(50%, -50%);
    transform-origin: 100% 0;
    margin: 0;
}
`,Vi={root:({props:t,instance:o})=>["p-badge p-component",{"p-badge-circle":yt(t.value)&&String(t.value).length===1,"p-badge-dot":le(t.value)&&!o.$slots.default,"p-badge-sm":t.size==="small","p-badge-lg":t.size==="large","p-badge-xl":t.size==="xlarge","p-badge-info":t.severity==="info","p-badge-success":t.severity==="success","p-badge-warn":t.severity==="warn","p-badge-danger":t.severity==="danger","p-badge-secondary":t.severity==="secondary","p-badge-contrast":t.severity==="contrast"}]},io=(()=>{class t extends A{name="badge";theme=Ii;classes=Vi;static \u0275fac=(()=>{let e;return function(i){return(e||(e=m(t)))(i||t)}})();static \u0275prov=V({token:t,factory:t.\u0275fac})}return t})();var Tt=(()=>{class t extends N{styleClass=J();style=J();badgeSize=J();size=J();severity=J();value=J();badgeDisabled=J(!1,{transform:_});_componentStyle=f(io);containerClass=oe(()=>{let e="p-badge p-component";return yt(this.value())&&String(this.value()).length===1&&(e+=" p-badge-circle"),this.badgeSize()==="large"?e+=" p-badge-lg":this.badgeSize()==="xlarge"?e+=" p-badge-xl":this.badgeSize()==="small"&&(e+=" p-badge-sm"),le(this.value())&&(e+=" p-badge-dot"),this.styleClass()&&(e+=` ${this.styleClass()}`),this.severity()&&(e+=` p-badge-${this.severity()}`),e});static \u0275fac=(()=>{let e;return function(i){return(e||(e=m(t)))(i||t)}})();static \u0275cmp=M({type:t,selectors:[["p-badge"]],hostVars:6,hostBindings:function(n,i){n&2&&(Qt(i.style()),ee(i.containerClass()),Yt("display",i.badgeDisabled()?"none":null))},inputs:{styleClass:[1,"styleClass"],style:[1,"style"],badgeSize:[1,"badgeSize"],size:[1,"size"],severity:[1,"severity"],value:[1,"value"],badgeDisabled:[1,"badgeDisabled"]},features:[D([io]),b],decls:1,vars:1,template:function(n,i){n&1&&d(0),n&2&&Z(i.value())},dependencies:[X,q],encapsulation:2,changeDetection:0})}return t})(),ro=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=z({type:t});static \u0275inj=H({imports:[Tt,q,q]})}return t})();var $i=["content"],Ai=["loadingicon"],Oi=["icon"],ki=["*"],ao=t=>({class:t});function Ti(t,o){t&1&&ue(0)}function Pi(t,o){if(t&1&&v(0,"span",8),t&2){let e=g(3);c("ngClass",e.iconClass()),F("aria-hidden",!0)("data-pc-section","loadingicon")}}function Ni(t,o){if(t&1&&v(0,"SpinnerIcon",9),t&2){let e=g(3);c("styleClass",e.spinnerIconClass())("spin",!0),F("aria-hidden",!0)("data-pc-section","loadingicon")}}function Ri(t,o){if(t&1&&(Le(0),x(1,Pi,1,3,"span",6)(2,Ni,1,4,"SpinnerIcon",7),He()),t&2){let e=g(2);u(),c("ngIf",e.loadingIcon),u(),c("ngIf",!e.loadingIcon)}}function Bi(t,o){}function Li(t,o){if(t&1&&x(0,Bi,0,0,"ng-template",10),t&2){let e=g(2);c("ngIf",e.loadingIconTemplate||e._loadingIconTemplate)}}function Hi(t,o){if(t&1&&(Le(0),x(1,Ri,3,2,"ng-container",2)(2,Li,1,1,null,5),He()),t&2){let e=g();u(),c("ngIf",!e.loadingIconTemplate&&!e._loadingIconTemplate),u(),c("ngTemplateOutlet",e.loadingIconTemplate||e._loadingIconTemplate)("ngTemplateOutletContext",te(3,ao,e.iconClass()))}}function ji(t,o){if(t&1&&v(0,"span",8),t&2){let e=g(2);ee(e.icon),c("ngClass",e.iconClass()),F("data-pc-section","icon")}}function zi(t,o){}function Wi(t,o){if(t&1&&x(0,zi,0,0,"ng-template",10),t&2){let e=g(2);c("ngIf",!e.icon&&(e.iconTemplate||e._iconTemplate))}}function Gi(t,o){if(t&1&&(Le(0),x(1,ji,1,4,"span",11)(2,Wi,1,1,null,5),He()),t&2){let e=g();u(),c("ngIf",e.icon&&!e.iconTemplate&&!e._iconTemplate),u(),c("ngTemplateOutlet",e.iconTemplate||e._iconTemplate)("ngTemplateOutletContext",te(3,ao,e.iconClass()))}}function Ui(t,o){if(t&1&&(a(0,"span",12),d(1),l()),t&2){let e=g();F("aria-hidden",e.icon&&!e.label)("data-pc-section","label"),u(),Z(e.label)}}function qi(t,o){if(t&1&&v(0,"p-badge",13),t&2){let e=g();c("value",e.badge)("severity",e.badgeSeverity)}}var Yi=({dt:t})=>`
.p-button {
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    color: ${t("button.primary.color")};
    background: ${t("button.primary.background")};
    border: 1px solid ${t("button.primary.border.color")};
    padding-block: ${t("button.padding.y")};
    padding-inline: ${t("button.padding.x")};
    font-size: 1rem;
    font-family: inherit;
    font-feature-settings: inherit;
    transition: background ${t("button.transition.duration")}, color ${t("button.transition.duration")}, border-color ${t("button.transition.duration")},
            outline-color ${t("button.transition.duration")}, box-shadow ${t("button.transition.duration")};
    border-radius: ${t("button.border.radius")};
    outline-color: transparent;
    gap: ${t("button.gap")};
}

.p-button-icon,
.p-button-icon:before,
.p-button-icon:after {
    line-height: inherit;
}

.p-button:disabled {
    cursor: default;
}

.p-button-icon-right {
    order: 1;
}

.p-button-icon-right:dir(rtl) {
    order: -1;
}

.p-button:not(.p-button-vertical) .p-button-icon:not(.p-button-icon-right):dir(rtl) {
    order: 1;
}

.p-button-icon-bottom {
    order: 2;
}

.p-button-icon-only {
    width: ${t("button.icon.only.width")};
    padding-inline-start: 0;
    padding-inline-end: 0;
    gap: 0;
}

.p-button-icon-only.p-button-rounded {
    border-radius: 50%;
    height: ${t("button.icon.only.width")};
}

.p-button-icon-only .p-button-label {
    visibility: hidden;
    width: 0;
}

.p-button-sm {
    font-size: ${t("button.sm.font.size")};
    padding-block: ${t("button.sm.padding.y")};
    padding-inline: ${t("button.sm.padding.x")};
}

.p-button-sm .p-button-icon {
    font-size: ${t("button.sm.font.size")};
}

.p-button-sm.p-button-icon-only {
    width: ${t("button.sm.icon.only.width")};
}

.p-button-sm.p-button-icon-only.p-button-rounded {
    height: ${t("button.sm.icon.only.width")};
}

.p-button-lg {
    font-size: ${t("button.lg.font.size")};
    padding-block: ${t("button.lg.padding.y")};
    padding-inline: ${t("button.lg.padding.x")};
}

.p-button-lg .p-button-icon {
    font-size: ${t("button.lg.font.size")};
}

.p-button-lg.p-button-icon-only {
    width: ${t("button.lg.icon.only.width")};
}

.p-button-lg.p-button-icon-only.p-button-rounded {
    height: ${t("button.lg.icon.only.width")};
}

.p-button-vertical {
    flex-direction: column;
}

.p-button-label {
    font-weight: ${t("button.label.font.weight")};
}

.p-button-fluid {
    width: 100%;
}

.p-button-fluid.p-button-icon-only {
    width: ${t("button.icon.only.width")};
}

.p-button:not(:disabled):hover {
    background: ${t("button.primary.hover.background")};
    border: 1px solid ${t("button.primary.hover.border.color")};
    color: ${t("button.primary.hover.color")};
}

.p-button:not(:disabled):active {
    background: ${t("button.primary.active.background")};
    border: 1px solid ${t("button.primary.active.border.color")};
    color: ${t("button.primary.active.color")};
}

.p-button:focus-visible {
    box-shadow: ${t("button.primary.focus.ring.shadow")};
    outline: ${t("button.focus.ring.width")} ${t("button.focus.ring.style")} ${t("button.primary.focus.ring.color")};
    outline-offset: ${t("button.focus.ring.offset")};
}

.p-button .p-badge {
    min-width: ${t("button.badge.size")};
    height: ${t("button.badge.size")};
    line-height: ${t("button.badge.size")};
}

.p-button-raised {
    box-shadow: ${t("button.raised.shadow")};
}

.p-button-rounded {
    border-radius: ${t("button.rounded.border.radius")};
}

.p-button-secondary {
    background: ${t("button.secondary.background")};
    border: 1px solid ${t("button.secondary.border.color")};
    color: ${t("button.secondary.color")};
}

.p-button-secondary:not(:disabled):hover {
    background: ${t("button.secondary.hover.background")};
    border: 1px solid ${t("button.secondary.hover.border.color")};
    color: ${t("button.secondary.hover.color")};
}

.p-button-secondary:not(:disabled):active {
    background: ${t("button.secondary.active.background")};
    border: 1px solid ${t("button.secondary.active.border.color")};
    color: ${t("button.secondary.active.color")};
}

.p-button-secondary:focus-visible {
    outline-color: ${t("button.secondary.focus.ring.color")};
    box-shadow: ${t("button.secondary.focus.ring.shadow")};
}

.p-button-success {
    background: ${t("button.success.background")};
    border: 1px solid ${t("button.success.border.color")};
    color: ${t("button.success.color")};
}

.p-button-success:not(:disabled):hover {
    background: ${t("button.success.hover.background")};
    border: 1px solid ${t("button.success.hover.border.color")};
    color: ${t("button.success.hover.color")};
}

.p-button-success:not(:disabled):active {
    background: ${t("button.success.active.background")};
    border: 1px solid ${t("button.success.active.border.color")};
    color: ${t("button.success.active.color")};
}

.p-button-success:focus-visible {
    outline-color: ${t("button.success.focus.ring.color")};
    box-shadow: ${t("button.success.focus.ring.shadow")};
}

.p-button-info {
    background: ${t("button.info.background")};
    border: 1px solid ${t("button.info.border.color")};
    color: ${t("button.info.color")};
}

.p-button-info:not(:disabled):hover {
    background: ${t("button.info.hover.background")};
    border: 1px solid ${t("button.info.hover.border.color")};
    color: ${t("button.info.hover.color")};
}

.p-button-info:not(:disabled):active {
    background: ${t("button.info.active.background")};
    border: 1px solid ${t("button.info.active.border.color")};
    color: ${t("button.info.active.color")};
}

.p-button-info:focus-visible {
    outline-color: ${t("button.info.focus.ring.color")};
    box-shadow: ${t("button.info.focus.ring.shadow")};
}

.p-button-warn {
    background: ${t("button.warn.background")};
    border: 1px solid ${t("button.warn.border.color")};
    color: ${t("button.warn.color")};
}

.p-button-warn:not(:disabled):hover {
    background: ${t("button.warn.hover.background")};
    border: 1px solid ${t("button.warn.hover.border.color")};
    color: ${t("button.warn.hover.color")};
}

.p-button-warn:not(:disabled):active {
    background: ${t("button.warn.active.background")};
    border: 1px solid ${t("button.warn.active.border.color")};
    color: ${t("button.warn.active.color")};
}

.p-button-warn:focus-visible {
    outline-color: ${t("button.warn.focus.ring.color")};
    box-shadow: ${t("button.warn.focus.ring.shadow")};
}

.p-button-help {
    background: ${t("button.help.background")};
    border: 1px solid ${t("button.help.border.color")};
    color: ${t("button.help.color")};
}

.p-button-help:not(:disabled):hover {
    background: ${t("button.help.hover.background")};
    border: 1px solid ${t("button.help.hover.border.color")};
    color: ${t("button.help.hover.color")};
}

.p-button-help:not(:disabled):active {
    background: ${t("button.help.active.background")};
    border: 1px solid ${t("button.help.active.border.color")};
    color: ${t("button.help.active.color")};
}

.p-button-help:focus-visible {
    outline-color: ${t("button.help.focus.ring.color")};
    box-shadow: ${t("button.help.focus.ring.shadow")};
}

.p-button-danger {
    background: ${t("button.danger.background")};
    border: 1px solid ${t("button.danger.border.color")};
    color: ${t("button.danger.color")};
}

.p-button-danger:not(:disabled):hover {
    background: ${t("button.danger.hover.background")};
    border: 1px solid ${t("button.danger.hover.border.color")};
    color: ${t("button.danger.hover.color")};
}

.p-button-danger:not(:disabled):active {
    background: ${t("button.danger.active.background")};
    border: 1px solid ${t("button.danger.active.border.color")};
    color: ${t("button.danger.active.color")};
}

.p-button-danger:focus-visible {
    outline-color: ${t("button.danger.focus.ring.color")};
    box-shadow: ${t("button.danger.focus.ring.shadow")};
}

.p-button-contrast {
    background: ${t("button.contrast.background")};
    border: 1px solid ${t("button.contrast.border.color")};
    color: ${t("button.contrast.color")};
}

.p-button-contrast:not(:disabled):hover {
    background: ${t("button.contrast.hover.background")};
    border: 1px solid ${t("button.contrast.hover.border.color")};
    color: ${t("button.contrast.hover.color")};
}

.p-button-contrast:not(:disabled):active {
    background: ${t("button.contrast.active.background")};
    border: 1px solid ${t("button.contrast.active.border.color")};
    color: ${t("button.contrast.active.color")};
}

.p-button-contrast:focus-visible {
    outline-color: ${t("button.contrast.focus.ring.color")};
    box-shadow: ${t("button.contrast.focus.ring.shadow")};
}

.p-button-outlined {
    background: transparent;
    border-color: ${t("button.outlined.primary.border.color")};
    color: ${t("button.outlined.primary.color")};
}

.p-button-outlined:not(:disabled):hover {
    background: ${t("button.outlined.primary.hover.background")};
    border-color: ${t("button.outlined.primary.border.color")};
    color: ${t("button.outlined.primary.color")};
}

.p-button-outlined:not(:disabled):active {
    background: ${t("button.outlined.primary.active.background")};
    border-color: ${t("button.outlined.primary.border.color")};
    color: ${t("button.outlined.primary.color")};
}

.p-button-outlined.p-button-secondary {
    border-color: ${t("button.outlined.secondary.border.color")};
    color: ${t("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-secondary:not(:disabled):hover {
    background: ${t("button.outlined.secondary.hover.background")};
    border-color: ${t("button.outlined.secondary.border.color")};
    color: ${t("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-secondary:not(:disabled):active {
    background: ${t("button.outlined.secondary.active.background")};
    border-color: ${t("button.outlined.secondary.border.color")};
    color: ${t("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-success {
    border-color: ${t("button.outlined.success.border.color")};
    color: ${t("button.outlined.success.color")};
}

.p-button-outlined.p-button-success:not(:disabled):hover {
    background: ${t("button.outlined.success.hover.background")};
    border-color: ${t("button.outlined.success.border.color")};
    color: ${t("button.outlined.success.color")};
}

.p-button-outlined.p-button-success:not(:disabled):active {
    background: ${t("button.outlined.success.active.background")};
    border-color: ${t("button.outlined.success.border.color")};
    color: ${t("button.outlined.success.color")};
}

.p-button-outlined.p-button-info {
    border-color: ${t("button.outlined.info.border.color")};
    color: ${t("button.outlined.info.color")};
}

.p-button-outlined.p-button-info:not(:disabled):hover {
    background: ${t("button.outlined.info.hover.background")};
    border-color: ${t("button.outlined.info.border.color")};
    color: ${t("button.outlined.info.color")};
}

.p-button-outlined.p-button-info:not(:disabled):active {
    background: ${t("button.outlined.info.active.background")};
    border-color: ${t("button.outlined.info.border.color")};
    color: ${t("button.outlined.info.color")};
}

.p-button-outlined.p-button-warn {
    border-color: ${t("button.outlined.warn.border.color")};
    color: ${t("button.outlined.warn.color")};
}

.p-button-outlined.p-button-warn:not(:disabled):hover {
    background: ${t("button.outlined.warn.hover.background")};
    border-color: ${t("button.outlined.warn.border.color")};
    color: ${t("button.outlined.warn.color")};
}

.p-button-outlined.p-button-warn:not(:disabled):active {
    background: ${t("button.outlined.warn.active.background")};
    border-color: ${t("button.outlined.warn.border.color")};
    color: ${t("button.outlined.warn.color")};
}

.p-button-outlined.p-button-help {
    border-color: ${t("button.outlined.help.border.color")};
    color: ${t("button.outlined.help.color")};
}

.p-button-outlined.p-button-help:not(:disabled):hover {
    background: ${t("button.outlined.help.hover.background")};
    border-color: ${t("button.outlined.help.border.color")};
    color: ${t("button.outlined.help.color")};
}

.p-button-outlined.p-button-help:not(:disabled):active {
    background: ${t("button.outlined.help.active.background")};
    border-color: ${t("button.outlined.help.border.color")};
    color: ${t("button.outlined.help.color")};
}

.p-button-outlined.p-button-danger {
    border-color: ${t("button.outlined.danger.border.color")};
    color: ${t("button.outlined.danger.color")};
}

.p-button-outlined.p-button-danger:not(:disabled):hover {
    background: ${t("button.outlined.danger.hover.background")};
    border-color: ${t("button.outlined.danger.border.color")};
    color: ${t("button.outlined.danger.color")};
}

.p-button-outlined.p-button-danger:not(:disabled):active {
    background: ${t("button.outlined.danger.active.background")};
    border-color: ${t("button.outlined.danger.border.color")};
    color: ${t("button.outlined.danger.color")};
}

.p-button-outlined.p-button-contrast {
    border-color: ${t("button.outlined.contrast.border.color")};
    color: ${t("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-contrast:not(:disabled):hover {
    background: ${t("button.outlined.contrast.hover.background")};
    border-color: ${t("button.outlined.contrast.border.color")};
    color: ${t("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-contrast:not(:disabled):active {
    background: ${t("button.outlined.contrast.active.background")};
    border-color: ${t("button.outlined.contrast.border.color")};
    color: ${t("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-plain {
    border-color: ${t("button.outlined.plain.border.color")};
    color: ${t("button.outlined.plain.color")};
}

.p-button-outlined.p-button-plain:not(:disabled):hover {
    background: ${t("button.outlined.plain.hover.background")};
    border-color: ${t("button.outlined.plain.border.color")};
    color: ${t("button.outlined.plain.color")};
}

.p-button-outlined.p-button-plain:not(:disabled):active {
    background: ${t("button.outlined.plain.active.background")};
    border-color: ${t("button.outlined.plain.border.color")};
    color: ${t("button.outlined.plain.color")};
}

.p-button-text {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.primary.color")};
}

.p-button-text:not(:disabled):hover {
    background: ${t("button.text.primary.hover.background")};
    border-color: transparent;
    color: ${t("button.text.primary.color")};
}

.p-button-text:not(:disabled):active {
    background: ${t("button.text.primary.active.background")};
    border-color: transparent;
    color: ${t("button.text.primary.color")};
}

.p-button-text.p-button-secondary {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.secondary.color")};
}

.p-button-text.p-button-secondary:not(:disabled):hover {
    background: ${t("button.text.secondary.hover.background")};
    border-color: transparent;
    color: ${t("button.text.secondary.color")};
}

.p-button-text.p-button-secondary:not(:disabled):active {
    background: ${t("button.text.secondary.active.background")};
    border-color: transparent;
    color: ${t("button.text.secondary.color")};
}

.p-button-text.p-button-success {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.success.color")};
}

.p-button-text.p-button-success:not(:disabled):hover {
    background: ${t("button.text.success.hover.background")};
    border-color: transparent;
    color: ${t("button.text.success.color")};
}

.p-button-text.p-button-success:not(:disabled):active {
    background: ${t("button.text.success.active.background")};
    border-color: transparent;
    color: ${t("button.text.success.color")};
}

.p-button-text.p-button-info {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.info.color")};
}

.p-button-text.p-button-info:not(:disabled):hover {
    background: ${t("button.text.info.hover.background")};
    border-color: transparent;
    color: ${t("button.text.info.color")};
}

.p-button-text.p-button-info:not(:disabled):active {
    background: ${t("button.text.info.active.background")};
    border-color: transparent;
    color: ${t("button.text.info.color")};
}

.p-button-text.p-button-warn {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.warn.color")};
}

.p-button-text.p-button-warn:not(:disabled):hover {
    background: ${t("button.text.warn.hover.background")};
    border-color: transparent;
    color: ${t("button.text.warn.color")};
}

.p-button-text.p-button-warn:not(:disabled):active {
    background: ${t("button.text.warn.active.background")};
    border-color: transparent;
    color: ${t("button.text.warn.color")};
}

.p-button-text.p-button-help {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.help.color")};
}

.p-button-text.p-button-help:not(:disabled):hover {
    background: ${t("button.text.help.hover.background")};
    border-color: transparent;
    color: ${t("button.text.help.color")};
}

.p-button-text.p-button-help:not(:disabled):active {
    background: ${t("button.text.help.active.background")};
    border-color: transparent;
    color: ${t("button.text.help.color")};
}

.p-button-text.p-button-danger {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.danger.color")};
}

.p-button-text.p-button-danger:not(:disabled):hover {
    background: ${t("button.text.danger.hover.background")};
    border-color: transparent;
    color: ${t("button.text.danger.color")};
}

.p-button-text.p-button-danger:not(:disabled):active {
    background: ${t("button.text.danger.active.background")};
    border-color: transparent;
    color: ${t("button.text.danger.color")};
}

.p-button-text.p-button-plain {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.plain.color")};
}

.p-button-text.p-button-plain:not(:disabled):hover {
    background: ${t("button.text.plain.hover.background")};
    border-color: transparent;
    color: ${t("button.text.plain.color")};
}

.p-button-text.p-button-plain:not(:disabled):active {
    background: ${t("button.text.plain.active.background")};
    border-color: transparent;
    color: ${t("button.text.plain.color")};
}

.p-button-text.p-button-contrast {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.contrast.color")};
}

.p-button-text.p-button-contrast:not(:disabled):hover {
    background: ${t("button.text.contrast.hover.background")};
    border-color: transparent;
    color: ${t("button.text.contrast.color")};
}

.p-button-text.p-button-contrast:not(:disabled):active {
    background: ${t("button.text.contrast.active.background")};
    border-color: transparent;
    color: ${t("button.text.contrast.color")};
}

.p-button-link {
    background: transparent;
    border-color: transparent;
    color: ${t("button.link.color")};
}

.p-button-link:not(:disabled):hover {
    background: transparent;
    border-color: transparent;
    color: ${t("button.link.hover.color")};
}

.p-button-link:not(:disabled):hover .p-button-label {
    text-decoration: underline;
}

.p-button-link:not(:disabled):active {
    background: transparent;
    border-color: transparent;
    color: ${t("button.link.active.color")};
}

/* For PrimeNG */
.p-button-icon-right {
    order: 1;
}

p-button[iconpos='right'] spinnericon {
    order: 1;
}
`,Qi={root:({instance:t,props:o})=>["p-button p-component",{"p-button-icon-only":t.hasIcon&&!o.label&&!o.badge,"p-button-vertical":(o.iconPos==="top"||o.iconPos==="bottom")&&o.label,"p-button-loading":o.loading,"p-button-link":o.link,[`p-button-${o.severity}`]:o.severity,"p-button-raised":o.raised,"p-button-rounded":o.rounded,"p-button-text":o.text,"p-button-outlined":o.outlined,"p-button-sm":o.size==="small","p-button-lg":o.size==="large","p-button-plain":o.plain,"p-button-fluid":o.fluid}],loadingIcon:"p-button-loading-icon",icon:({props:t})=>["p-button-icon",{[`p-button-icon-${t.iconPos}`]:t.label}],label:"p-button-label"},so=(()=>{class t extends A{name="button";theme=Yi;classes=Qi;static \u0275fac=(()=>{let e;return function(i){return(e||(e=m(t)))(i||t)}})();static \u0275prov=V({token:t,factory:t.\u0275fac})}return t})();var Zi=(()=>{class t extends N{type="button";iconPos="left";icon;badge;label;disabled;loading=!1;loadingIcon;raised=!1;rounded=!1;text=!1;plain=!1;severity;outlined=!1;link=!1;tabindex;size;variant;style;styleClass;badgeClass;badgeSeverity="secondary";ariaLabel;autofocus;fluid;onClick=new j;onFocus=new j;onBlur=new j;contentTemplate;loadingIconTemplate;iconTemplate;_buttonProps;get buttonProps(){return this._buttonProps}set buttonProps(e){this._buttonProps=e,e&&typeof e=="object"&&Object.entries(e).forEach(([n,i])=>this[`_${n}`]!==i&&(this[`_${n}`]=i))}get hasFluid(){let n=this.el.nativeElement.closest("p-fluid");return le(this.fluid)?!!n:this.fluid}_componentStyle=f(so);templates;_contentTemplate;_iconTemplate;_loadingIconTemplate;ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"content":this._contentTemplate=e.template;break;case"icon":this._iconTemplate=e.template;break;case"loadingicon":this._loadingIconTemplate=e.template;break;default:this._contentTemplate=e.template;break}})}ngOnChanges(e){super.ngOnChanges(e);let{buttonProps:n}=e;if(n){let i=n.currentValue;for(let r in i)this[r]=i[r]}}spinnerIconClass(){return Object.entries(this.iconClass()).filter(([,e])=>!!e).reduce((e,[n])=>e+` ${n}`,"p-button-loading-icon")}iconClass(){return{[`p-button-loading-icon pi-spin ${this.loadingIcon??""}`]:this.loading,"p-button-icon":!0,"p-button-icon-left":this.iconPos==="left"&&this.label,"p-button-icon-right":this.iconPos==="right"&&this.label,"p-button-icon-top":this.iconPos==="top"&&this.label,"p-button-icon-bottom":this.iconPos==="bottom"&&this.label}}get buttonClass(){return{"p-button p-component":!0,"p-button-icon-only":(this.icon||this.iconTemplate||this._iconTemplate||this.loadingIcon||this.loadingIconTemplate||this._loadingIconTemplate)&&!this.label,"p-button-vertical":(this.iconPos==="top"||this.iconPos==="bottom")&&this.label,"p-button-loading":this.loading,"p-button-loading-label-only":this.loading&&!this.icon&&this.label&&!this.loadingIcon&&this.iconPos==="left","p-button-link":this.link,[`p-button-${this.severity}`]:this.severity,"p-button-raised":this.raised,"p-button-rounded":this.rounded,"p-button-text":this.text||this.variant=="text","p-button-outlined":this.outlined||this.variant=="outlined","p-button-sm":this.size==="small","p-button-lg":this.size==="large","p-button-plain":this.plain,"p-button-fluid":this.hasFluid,[`${this.styleClass}`]:this.styleClass}}static \u0275fac=(()=>{let e;return function(i){return(e||(e=m(t)))(i||t)}})();static \u0275cmp=M({type:t,selectors:[["p-button"]],contentQueries:function(n,i,r){if(n&1&&(W(r,$i,5),W(r,Ai,5),W(r,Oi,5),W(r,Ye,4)),n&2){let s;G(s=U())&&(i.contentTemplate=s.first),G(s=U())&&(i.loadingIconTemplate=s.first),G(s=U())&&(i.iconTemplate=s.first),G(s=U())&&(i.templates=s)}},inputs:{type:"type",iconPos:"iconPos",icon:"icon",badge:"badge",label:"label",disabled:[2,"disabled","disabled",_],loading:[2,"loading","loading",_],loadingIcon:"loadingIcon",raised:[2,"raised","raised",_],rounded:[2,"rounded","rounded",_],text:[2,"text","text",_],plain:[2,"plain","plain",_],severity:"severity",outlined:[2,"outlined","outlined",_],link:[2,"link","link",_],tabindex:[2,"tabindex","tabindex",en],size:"size",variant:"variant",style:"style",styleClass:"styleClass",badgeClass:"badgeClass",badgeSeverity:"badgeSeverity",ariaLabel:"ariaLabel",autofocus:[2,"autofocus","autofocus",_],fluid:[2,"fluid","fluid",_],buttonProps:"buttonProps"},outputs:{onClick:"onClick",onFocus:"onFocus",onBlur:"onBlur"},features:[D([so]),b,Y],ngContentSelectors:ki,decls:7,vars:14,consts:[["pRipple","",3,"click","focus","blur","ngStyle","disabled","ngClass","pAutoFocus"],[4,"ngTemplateOutlet"],[4,"ngIf"],["class","p-button-label",4,"ngIf"],[3,"value","severity",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"ngClass",4,"ngIf"],[3,"styleClass","spin",4,"ngIf"],[3,"ngClass"],[3,"styleClass","spin"],[3,"ngIf"],[3,"class","ngClass",4,"ngIf"],[1,"p-button-label"],[3,"value","severity"]],template:function(n,i){n&1&&(de(),a(0,"button",0),T("click",function(s){return i.onClick.emit(s)})("focus",function(s){return i.onFocus.emit(s)})("blur",function(s){return i.onBlur.emit(s)}),pe(1),x(2,Ti,1,0,"ng-container",1)(3,Hi,3,5,"ng-container",2)(4,Gi,3,5,"ng-container",2)(5,Ui,2,3,"span",3)(6,qi,1,2,"p-badge",4),l()),n&2&&(c("ngStyle",i.style)("disabled",i.disabled||i.loading)("ngClass",i.buttonClass)("pAutoFocus",i.autofocus),F("type",i.type)("aria-label",i.ariaLabel)("data-pc-name","button")("data-pc-section","root")("tabindex",i.tabindex),u(2),c("ngTemplateOutlet",i.contentTemplate||i._contentTemplate),u(),c("ngIf",i.loading),u(),c("ngIf",!i.loading),u(),c("ngIf",!i.contentTemplate&&!i._contentTemplate&&i.label),u(),c("ngIf",!i.contentTemplate&&!i._contentTemplate&&i.badge))},dependencies:[X,he,We,Ge,nn,lt,oo,Xn,ro,Tt,q],encapsulation:2,changeDetection:0})}return t})(),lo=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=z({type:t});static \u0275inj=H({imports:[X,Zi,q,q]})}return t})();var ct=class t{constructor(o){this._http=o}apiServiceUrl=ye.formspreeApi;sendFormData(o){return this._http.post(this.apiServiceUrl,o,{headers:{Accept:"application/json"}})}static \u0275fac=function(e){return new(e||t)(Ht(rn))};static \u0275prov=V({token:t,factory:t.\u0275fac,providedIn:"root"})};var Ki=t=>({"hidden-footer":t}),Ji=()=>[""],co=()=>["about"],uo=()=>["releases"],po=()=>["events"],ho=()=>["mixtape-archive"],go=()=>["moreismoreismore"];function er(t,o){t&1&&(a(0,"button",19),d(1,"Sending..."),l())}function tr(t,o){if(t&1&&(a(0,"button",20),d(1," Subscribe "),l()),t&2){let e=g();c("disabled",e.fgNewsletter.invalid)}}function nr(t,o){if(t&1&&(a(0,"p-message",24),d(1),l()),t&2){let e=g();c("life",3e3)("severity",e.messageForm.severity),u(),Z(e.messageForm.message)}}var ut=class t{constructor(o){this._formsspreeService=o;this.fgNewsletter=new xe({email:new qn().control("",[Ae.required,Ae.email])})}uriAssetsImages=ye.uriAssetsImages;emailCopy="neanchepersognorecords@gmail.com";isHidden=!1;lastScrollTop=0;messageForm={};fgNewsletter;isLoadingForm=!1;visibleMessageForm=Q(!1);ngOnInit(){this.visibleMessageForm.set(!1)}onWindowScroll(){let o=window.scrollY||document.documentElement.scrollTop,e=document.documentElement.scrollHeight-window.innerHeight;if(e<=0){this.isHidden=!1;return}o>this.lastScrollTop?this.isHidden=!0:o<this.lastScrollTop&&o<e-50&&(this.isHidden=!1),this.lastScrollTop=o<=0?0:o}onSubmitForm(){if(this.isLoadingForm=!0,this.visibleMessageForm.set(!1),this.fgNewsletter.valid){let o=new FormData;o.append("email",this.fgNewsletter.value.email),this._formsspreeService.sendFormData(o).subscribe({next:e=>{console.log("ok: ",e),this.fgNewsletter.reset(),this.isLoadingForm=!1,this.messageForm={severity:"success",message:"Ti sei iscritto con successo!"}},error:e=>{this.fgNewsletter.reset(),console.error("Error submitting form: ",e),this.messageForm={severity:"error",message:"Oops! Qualcosa \xE8 andato male, riprova pi\xF9 tardi."},this.isLoadingForm=!1,this.visibleMessageForm.set(!0)}})}}onCopyEmail(){navigator.clipboard.writeText("neanchepersognorecords@gmail.com").then(()=>{this.emailCopy="Copied to clipboard!"}).catch(e=>{console.error("Failed to copy email: ",e)})}static \u0275fac=function(e){return new(e||t)(E(ct))};static \u0275cmp=M({type:t,selectors:[["app-footer"]],hostBindings:function(e,n){e&1&&T("scroll",function(){return n.onWindowScroll()},!1,Ut)},decls:52,vars:31,consts:[[1,"floating-footer",3,"ngClass"],[1,"bottom-logo-container"],[3,"routerLink"],["alt","Logo Neanche Per Sogno",1,"bottom-logo",3,"src"],[1,"logo-credit"],["href","https://www.muah.studio","target","_blank","rel","noopener noreferrer"],[1,"bottom-links-container"],[1,"bottom-links"],[1,"bottom-links-row","row-desktop-only"],["routerLinkActive","active",3,"routerLink"],["href","https://nxsrecords.bandcamp.com/merch","target","_blank","rel","noopener noreferrer"],[1,"bottom-links-row","row-mobile-main"],[1,"bottom-links-row","row-mobile-secondary"],[1,"copy-email","copy-email-mobile",3,"click"],[1,"copy-email","copy-email-desktop",3,"click"],[1,"newsletter-wrapper"],[1,"newsletter-title"],["id","newsletter-form",1,"subscribe-box",3,"submit","formGroup"],["formControlName","email","type","email","id","email","name","email","placeholder","Email address","required",""],["type","submit"],["type","submit",3,"disabled"],["id","form-status",2,"margin-left","10px","font-size","0.7rem","color","rgb(127, 127, 127)"],[1,"messagge-form"],[1,"card","flex","flex-col"],["closable","",3,"life","severity"]],template:function(e,n){e&1&&(a(0,"div",0)(1,"div",1)(2,"a",2),v(3,"img",3),l(),a(4,"div",4),d(5," EST. 2022, Logo by "),a(6,"a",5),d(7,"Muah! Studio"),l()()(),a(8,"div",6)(9,"div",7)(10,"div",8)(11,"a",9),d(12,"About"),l(),a(13,"a",9),d(14,"Releases"),l(),a(15,"a",9),d(16,"Events"),l(),a(17,"a",9),d(18,"Mixtape Archive"),l(),a(19,"a",10),d(20,"Buy"),l(),a(21,"a",9),d(22,"MORE IS MORE IS MORE"),l()(),a(23,"div",11)(24,"a",9),d(25,"About"),l(),a(26,"a",9),d(27,"Releases"),l(),a(28,"a",9),d(29,"Events"),l(),a(30,"a",9),d(31,"Mixtape Archive"),l(),a(32,"a",10),d(33,"Buy"),l()(),a(34,"div",12)(35,"a",9),d(36,"MORE IS MORE IS MORE"),l(),a(37,"span",13),T("click",function(){return n.onCopyEmail()}),d(38),l()()(),a(39,"div",14),T("click",function(){return n.onCopyEmail()}),d(40),l(),a(41,"div",15)(42,"p",16),d(43,"Newsletter:"),l(),a(44,"form",17),T("submit",function(){return n.onSubmitForm()}),v(45,"input",18),x(46,er,2,0,"button",19)(47,tr,2,1,"button",20),v(48,"span",21),l(),a(49,"div",22)(50,"div",23),x(51,nr,2,3,"p-message",24),l()()()()()),e&2&&(c("ngClass",te(18,Ki,n.isHidden)),u(2),c("routerLink",P(20,Ji)),u(),c("src",n.uriAssetsImages+"/nxs-logo.png",Re),u(8),c("routerLink",P(21,co)),u(2),c("routerLink",P(22,uo)),u(2),c("routerLink",P(23,po)),u(2),c("routerLink",P(24,ho)),u(4),c("routerLink",P(25,go)),u(3),c("routerLink",P(26,co)),u(2),c("routerLink",P(27,uo)),u(2),c("routerLink",P(28,po)),u(2),c("routerLink",P(29,ho)),u(5),c("routerLink",P(30,go)),u(3),Z(n.emailCopy),u(2),Xt(" ",n.emailCopy," "),u(4),c("formGroup",n.fgNewsletter),u(2),k(n.isLoadingForm?46:47),u(5),k(n.visibleMessageForm()?51:-1))},dependencies:[cn,an,ln,he,Yn,Wn,it,Bn,Ln,kt,Qn,At,Ot,to,lo],styles:['.floating-footer[_ngcontent-%COMP%]:before{content:"";position:absolute;top:-10px;left:0;width:100%;height:0px;background:linear-gradient(to bottom,#fff0,#fff);pointer-events:none;z-index:1}.floating-footer[_ngcontent-%COMP%]{position:fixed;bottom:25px;left:0;width:100%;background:#fff;display:flex;justify-content:space-between;align-items:center;padding:25px 50px;z-index:9998;transition:transform .8s ease;transform:translateZ(0)}.bottom-logo-container[_ngcontent-%COMP%]{display:flex;justify-content:center;flex-direction:column;align-items:center;line-height:1.2;text-align:center}.bottom-logo[_ngcontent-%COMP%]{max-width:220px;height:auto;opacity:1;-webkit-user-select:none;user-select:none;cursor:pointer}.logo-credit[_ngcontent-%COMP%]{margin-top:6px;font-size:.6rem;color:#ccc;font-family:Helvetica,Arial,sans-serif;text-transform:none;line-height:1.2;text-align:left}.logo-credit[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#ccc;text-decoration:none}.logo-credit[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{text-decoration:underline}.bottom-links-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-start;font-size:.7rem;font-weight:300;color:#787878;font-family:Helvetica,Arial,sans-serif;text-align:left;line-height:.8;max-width:280px;gap:12px}.bottom-links[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:5px}.bottom-links-row[_ngcontent-%COMP%]{display:flex;gap:16px;justify-content:flex-start;flex-wrap:wrap;line-height:.8}.bottom-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#787878;text-decoration:none;transition:color .3s ease;font-size:.7rem;line-height:.8}.bottom-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .bottom-links[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]{color:#000}.copy-email[_ngcontent-%COMP%]{cursor:pointer;text-decoration:underline;font-size:.7rem;color:#787878;line-height:.8}.copy-email-mobile[_ngcontent-%COMP%]{display:none}.copy-email-desktop[_ngcontent-%COMP%]{display:block;margin-bottom:10px;text-align:left}.newsletter-title[_ngcontent-%COMP%]{font-size:.7rem;font-weight:300;color:#787878;font-family:Helvetica,Arial,sans-serif;line-height:.8;margin:0;white-space:nowrap}.newsletter-wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:column;line-height:.8;text-align:left}.subscribe-box[_ngcontent-%COMP%]{display:flex;gap:8px;align-items:center}.subscribe-box[_ngcontent-%COMP%]   input[type=email][_ngcontent-%COMP%]{padding:5px 8px;font-size:.7rem;border:1px solid #777;border-radius:0;outline:none;width:180px;background-color:transparent;color:#000}.subscribe-box[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background:none;border:none;color:#787878;font-size:.7rem;cursor:pointer;padding:6px 12px}.subscribe-box[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{text-decoration:underline}.row-desktop-only[_ngcontent-%COMP%]{display:flex}.row-mobile-main[_ngcontent-%COMP%], .row-mobile-secondary[_ngcontent-%COMP%]{display:none}@media (min-width: 769px){.bottom-links-container[_ngcontent-%COMP%]{line-height:.8;transform:translateY(5px)}.bottom-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:inline-block;transform:translateY(4px)}.copy-email[_ngcontent-%COMP%]{transform:translateY(6px)}.newsletter-wrapper[_ngcontent-%COMP%]{flex-direction:column}.newsletter-title[_ngcontent-%COMP%]{margin-bottom:4px}}@media (max-width: 768px){.floating-footer[_ngcontent-%COMP%]{bottom:25px;padding:16px 10px;flex-direction:column;align-items:center;justify-content:center;gap:16px;width:100%}.bottom-logo-container[_ngcontent-%COMP%]{transform:none;margin:0 auto;align-items:center;text-align:center}.bottom-logo[_ngcontent-%COMP%]{max-width:180px}.logo-credit[_ngcontent-%COMP%]{font-size:.55rem;color:silver;text-transform:none;margin-top:4px;line-height:1.2;text-align:center}.bottom-links-container[_ngcontent-%COMP%]{transform:none;margin:0 auto;max-width:100%;width:100%;align-items:center;gap:6px}.bottom-links-row[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:center;gap:10px 20px;width:100%;line-height:.8}.row-desktop-only[_ngcontent-%COMP%]{display:none}.row-mobile-main[_ngcontent-%COMP%], .row-mobile-secondary[_ngcontent-%COMP%]{display:flex}.row-mobile-secondary[_ngcontent-%COMP%]{margin-top:4px;gap:10px 20px}.copy-email-mobile[_ngcontent-%COMP%]{display:inline}.copy-email-desktop[_ngcontent-%COMP%]{display:none}.newsletter-wrapper[_ngcontent-%COMP%]{flex-direction:row;align-items:center;gap:8px;width:100%;justify-content:center;text-align:left}.newsletter-title[_ngcontent-%COMP%]{text-align:center;margin:0;white-space:nowrap}.subscribe-box[_ngcontent-%COMP%]{justify-content:center;gap:0px;flex-wrap:nowrap}.subscribe-box[_ngcontent-%COMP%]   input[type=email][_ngcontent-%COMP%]{width:120px;padding:2px 6px;font-size:.65rem}.subscribe-box[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{font-size:.65rem;padding:4px 6px}#dynamic-content-container[_ngcontent-%COMP%]{padding:5px;margin:5px}#dynamic-content-container[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{border:none}}@media (max-width: 580px){.floating-footer[_ngcontent-%COMP%]{gap:.75rem;padding:10px;justify-content:center}.bottom-links-container[_ngcontent-%COMP%]{max-width:100%;margin:0 auto}.bottom-links-row[_ngcontent-%COMP%]{gap:10px 30px}.subscribe-box[_ngcontent-%COMP%]{justify-content:center}}.hidden-footer[_ngcontent-%COMP%]{transform:translateY(100%)}']})};var dt=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=M({type:t,selectors:[["app-scroll-bar-bottom"]],decls:46,vars:0,consts:[[1,"scroll-bar","bottom"],[1,"scroll-content"],[1,"scroll-wrapper"],["href","https://nxsrecords.bandcamp.com/track/pay-with-your-pain","target","_blank","rel","noopener noreferrer",2,"color","white","text-decoration","none"],["aria-hidden","true",1,"scroll-wrapper"]],template:function(e,n){e&1&&(a(0,"div",0)(1,"div",1)(2,"div",2)(3,"span")(4,"a",3),d(5,"OUT NOW | PAY WITH YOUR PAIN \u2014 THE NEW SINGLE FROM MARTENOT "),l()(),a(6,"span")(7,"a",3),d(8,"OUT NOW | PAY WITH YOUR PAIN \u2014 THE NEW SINGLE FROM MARTENOT "),l()(),a(9,"span")(10,"a",3),d(11,"OUT NOW | PAY WITH YOUR PAIN \u2014 THE NEW SINGLE FROM MARTENOT "),l()(),a(12,"span")(13,"a",3),d(14,"OUT NOW | PAY WITH YOUR PAIN \u2014 THE NEW SINGLE FROM MARTENOT "),l()(),a(15,"span")(16,"a",3),d(17,"OUT NOW | PAY WITH YOUR PAIN \u2014 THE NEW SINGLE FROM MARTENOT "),l()(),a(18,"span")(19,"a",3),d(20,"OUT NOW | PAY WITH YOUR PAIN \u2014 THE NEW SINGLE FROM MARTENOT "),l()(),a(21,"span")(22,"a",3),d(23,"OUT NOW | PAY WITH YOUR PAIN \u2014 THE NEW SINGLE FROM MARTENOT "),l()()(),a(24,"div",4)(25,"span")(26,"a",3),d(27,"OUT NOW | PAY WITH YOUR PAIN \u2014 THE NEW SINGLE FROM MARTENOT "),l()(),a(28,"span")(29,"a",3),d(30,"OUT NOW | PAY WITH YOUR PAIN \u2014 THE NEW SINGLE FROM MARTENOT "),l()(),a(31,"span")(32,"a",3),d(33,"OUT NOW | PAY WITH YOUR PAIN \u2014 THE NEW SINGLE FROM MARTENOT "),l()(),a(34,"span")(35,"a",3),d(36,"OUT NOW | PAY WITH YOUR PAIN \u2014 THE NEW SINGLE FROM MARTENOT "),l()(),a(37,"span")(38,"a",3),d(39,"OUT NOW | PAY WITH YOUR PAIN \u2014 THE NEW SINGLE FROM MARTENOT "),l()(),a(40,"span")(41,"a",3),d(42,"OUT NOW | PAY WITH YOUR PAIN \u2014 THE NEW SINGLE FROM MARTENOT "),l()(),a(43,"span")(44,"a",3),d(45,"OUT NOW | PAY WITH YOUR PAIN \u2014 THE NEW SINGLE FROM MARTENOT "),l()()()()())},styles:[".scroll-bar[_ngcontent-%COMP%]{width:100%;height:25px;background:#000;overflow:hidden;display:flex;align-items:center;position:fixed;left:0;z-index:9999}.scroll-bar.bottom[_ngcontent-%COMP%]{bottom:0}.scroll-bar[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#fff;font-size:.8rem;font-weight:700;white-space:nowrap;padding-right:2rem}.scroll-bar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{line-height:25px}.scroll-content[_ngcontent-%COMP%]{display:flex;white-space:nowrap}.scroll-wrapper[_ngcontent-%COMP%]{display:inline-block;white-space:nowrap;animation:_ngcontent-%COMP%_scroll-left 60s linear infinite}@keyframes _ngcontent-%COMP%_scroll-left{0%{transform:translate(0)}to{transform:translate(-100%)}}"]})};var pt=class t{uriAssetsImages=ye.uriAssetsImages;prepareRoute(o){return o?.activatedRouteData?.animation}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=M({type:t,selectors:[["app-website-layout"]],decls:7,vars:2,consts:[["routerOutlet","outlet"],[1,"preload"],["alt","Logo Neanche Per Sogno",3,"src"],[1,"main-content"]],template:function(e,n){if(e&1&&(a(0,"div",1),v(1,"img",2),l(),a(2,"main",3),v(3,"router-outlet",null,0),l(),v(5,"app-footer")(6,"app-scroll-bar-bottom")),e&2){let i=je(4);u(),c("src",n.uriAssetsImages+"/logo-main.png",Re),u(),c("@routeAnimation",n.prepareRoute(i))}},dependencies:[ut,dt,X,sn],encapsulation:2,data:{animation:[Se("routeAnimation",[me("* <=> *",[ae({transform:"translateY(10%)",opacity:0}),ge("800ms ease-out",ae({transform:"translateY(0)",opacity:1}))])])]}})};var Ja=[{path:"",component:pt,children:[{path:"",loadComponent:()=>import("./chunk-BVRY3A3T.js").then(t=>t.HomeComponent),data:{animation:"HomePage"}},{path:"about",loadComponent:()=>import("./chunk-JE3OBAGJ.js").then(t=>t.AboutComponent),data:{animation:"AboutPage"}},{path:"releases",loadComponent:()=>import("./chunk-KDFS5NC2.js").then(t=>t.ReleasesComponent),data:{animation:"ReleasesPage"}},{path:"events",loadComponent:()=>import("./chunk-M7LXSWAC.js").then(t=>t.EventsComponent),data:{animation:"EventsPage"}},{path:"mixtape-archive",loadComponent:()=>import("./chunk-UDTMJ4LX.js").then(t=>t.MixtapeArchiveComponent),data:{animation:"MixtapeArchivePage"}},{path:"moreismoreismore",loadComponent:()=>import("./chunk-HN6NWHS5.js").then(t=>t.MoreismoreismoreComponent),data:{animation:"MoreIsMoreIsMorePage"}}]}];export{Ja as WEBSITE_LAYOUT_ROUTES};
