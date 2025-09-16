import{c as Wt,e as qt,f as Qt,g as Yt,j as Zt}from"./chunk-V2ECYK65.js";import{a as ee,b as Le,c as ze}from"./chunk-5DKNLUWN.js";import{H as _e,I as st,L as at,M as Re,N as j,S as ue,a as jt,b as rt,j as ae,k as Ne,l as Gt,m as Be,n as W,q as Ut}from"./chunk-S6JLVHSI.js";import{a as de}from"./chunk-66XS3EV4.js";import{c as ve,d as le,f as ie,g as ce}from"./chunk-C5P3YSZX.js";import{$ as Se,$a as Y,Aa as u,Ea as it,Fa as C,Gb as b,Hb as Ht,Ib as K,Jb as J,L as $e,La as E,M as be,Ma as R,N,Na as V,O as B,Oa as m,Q as ne,Qa as v,S as St,Sa as Tt,T as O,Wa as M,Xa as a,Y as oe,Ya as Pt,Z as At,Za as Fe,_ as Ft,_a as Nt,a as $,aa as _,ab as S,b as I,bb as l,cb as c,db as f,eb as Ie,fb as Oe,ga as k,gb as re,hb as Bt,i as Mt,ja as Q,jb as T,ka as ye,kb as g,l as Vt,la as U,lb as ke,mb as Te,nb as L,pa as It,pb as z,q as Dt,qb as H,rb as Pe,sb as p,tb as Z,ub as Rt,vb as P,w as $t,wa as Ot,wb as se,xa as Ae,xb as X,yb as Lt,za as kt,zb as zt}from"./chunk-JSFZLMEL.js";var sn=(()=>{class e{_renderer;_elementRef;onChange=t=>{};onTouched=()=>{};constructor(t,o){this._renderer=t,this._elementRef=o}setProperty(t,o){this._renderer.setProperty(this._elementRef.nativeElement,t,o)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty("disabled",t)}static \u0275fac=function(o){return new(o||e)(C(it),C(ye))};static \u0275dir=V({type:e})}return e})(),Un=(()=>{class e extends sn{static \u0275fac=(()=>{let t;return function(i){return(t||(t=_(e)))(i||e)}})();static \u0275dir=V({type:e,features:[m]})}return e})(),an=new ne("");var Wn={provide:an,useExisting:be(()=>Xe),multi:!0};function qn(){let e=rt()?rt().getUserAgent():"";return/android (\d+)/.test(e.toLowerCase())}var Qn=new ne(""),Xe=(()=>{class e extends sn{_compositionMode;_composing=!1;constructor(t,o,i){super(t,o),this._compositionMode=i,this._compositionMode==null&&(this._compositionMode=!qn())}writeValue(t){let o=t??"";this.setProperty("value",o)}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}static \u0275fac=function(o){return new(o||e)(C(it),C(ye),C(Qn,8))};static \u0275dir=V({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(o,i){o&1&&T("input",function(s){return i._handleInput(s.target.value)})("blur",function(){return i.onTouched()})("compositionstart",function(){return i._compositionStart()})("compositionend",function(s){return i._compositionEnd(s.target.value)})},standalone:!1,features:[P([Wn]),m]})}return e})();function ht(e){return e==null||gt(e)===0}function gt(e){return e==null?null:Array.isArray(e)||typeof e=="string"?e.length:e instanceof Set?e.size:null}var ft=new ne(""),ln=new ne(""),Yn=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,Me=class{static min(n){return Zn(n)}static max(n){return Xn(n)}static required(n){return cn(n)}static requiredTrue(n){return Kn(n)}static email(n){return Jn(n)}static minLength(n){return eo(n)}static maxLength(n){return to(n)}static pattern(n){return no(n)}static nullValidator(n){return Ge()}static compose(n){return fn(n)}static composeAsync(n){return bn(n)}};function Zn(e){return n=>{if(n.value==null||e==null)return null;let t=parseFloat(n.value);return!isNaN(t)&&t<e?{min:{min:e,actual:n.value}}:null}}function Xn(e){return n=>{if(n.value==null||e==null)return null;let t=parseFloat(n.value);return!isNaN(t)&&t>e?{max:{max:e,actual:n.value}}:null}}function cn(e){return ht(e.value)?{required:!0}:null}function Kn(e){return e.value===!0?null:{required:!0}}function Jn(e){return ht(e.value)||Yn.test(e.value)?null:{email:!0}}function eo(e){return n=>{let t=n.value?.length??gt(n.value);return t===null||t===0?null:t<e?{minlength:{requiredLength:e,actualLength:t}}:null}}function to(e){return n=>{let t=n.value?.length??gt(n.value);return t!==null&&t>e?{maxlength:{requiredLength:e,actualLength:t}}:null}}function no(e){if(!e)return Ge;let n,t;return typeof e=="string"?(t="",e.charAt(0)!=="^"&&(t+="^"),t+=e,e.charAt(e.length-1)!=="$"&&(t+="$"),n=new RegExp(t)):(t=e.toString(),n=e),o=>{if(ht(o.value))return null;let i=o.value;return n.test(i)?null:{pattern:{requiredPattern:t,actualValue:i}}}}function Ge(e){return null}function un(e){return e!=null}function dn(e){return Tt(e)?Vt(e):e}function pn(e){let n={};return e.forEach(t=>{n=t!=null?$($({},n),t):n}),Object.keys(n).length===0?null:n}function hn(e,n){return n.map(t=>t(e))}function oo(e){return!e.validate}function gn(e){return e.map(n=>oo(n)?n:t=>n.validate(t))}function fn(e){if(!e)return null;let n=e.filter(un);return n.length==0?null:function(t){return pn(hn(t,n))}}function mn(e){return e!=null?fn(gn(e)):null}function bn(e){if(!e)return null;let n=e.filter(un);return n.length==0?null:function(t){let o=hn(t,n).map(dn);return $t(o).pipe(Dt(pn))}}function yn(e){return e!=null?bn(gn(e)):null}function Xt(e,n){return e===null?[n]:Array.isArray(e)?[...e,n]:[e,n]}function vn(e){return e._rawValidators}function _n(e){return e._rawAsyncValidators}function lt(e){return e?Array.isArray(e)?e:[e]:[]}function Ue(e,n){return Array.isArray(e)?e.includes(n):e===n}function Kt(e,n){let t=lt(n);return lt(e).forEach(i=>{Ue(t,i)||t.push(i)}),t}function Jt(e,n){return lt(n).filter(t=>!Ue(e,t))}var We=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(n){this._rawValidators=n||[],this._composedValidatorFn=mn(this._rawValidators)}_setAsyncValidators(n){this._rawAsyncValidators=n||[],this._composedAsyncValidatorFn=yn(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(n){this._onDestroyCallbacks.push(n)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(n=>n()),this._onDestroyCallbacks=[]}reset(n=void 0){this.control&&this.control.reset(n)}hasError(n,t){return this.control?this.control.hasError(n,t):!1}getError(n,t){return this.control?this.control.getError(n,t):null}},ge=class extends We{name;get formDirective(){return null}get path(){return null}},Ve=class extends We{_parent=null;name=null;valueAccessor=null},qe=class{_cd;constructor(n){this._cd=n}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}},io={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},Zi=I($({},io),{"[class.ng-submitted]":"isSubmitted"}),Cn=(()=>{class e extends qe{constructor(t){super(t)}static \u0275fac=function(o){return new(o||e)(C(Ve,2))};static \u0275dir=V({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(o,i){o&2&&Fe("ng-untouched",i.isUntouched)("ng-touched",i.isTouched)("ng-pristine",i.isPristine)("ng-dirty",i.isDirty)("ng-valid",i.isValid)("ng-invalid",i.isInvalid)("ng-pending",i.isPending)},standalone:!1,features:[m]})}return e})(),wn=(()=>{class e extends qe{constructor(t){super(t)}static \u0275fac=function(o){return new(o||e)(C(ge,10))};static \u0275dir=V({type:e,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(o,i){o&2&&Fe("ng-untouched",i.isUntouched)("ng-touched",i.isTouched)("ng-pristine",i.isPristine)("ng-dirty",i.isDirty)("ng-valid",i.isValid)("ng-invalid",i.isInvalid)("ng-pending",i.isPending)("ng-submitted",i.isSubmitted)},standalone:!1,features:[m]})}return e})();var Ce="VALID",He="INVALID",pe="PENDING",we="DISABLED",te=class{},Qe=class extends te{value;source;constructor(n,t){super(),this.value=n,this.source=t}},xe=class extends te{pristine;source;constructor(n,t){super(),this.pristine=n,this.source=t}},Ee=class extends te{touched;source;constructor(n,t){super(),this.touched=n,this.source=t}},he=class extends te{status;source;constructor(n,t){super(),this.status=n,this.source=t}},ct=class extends te{source;constructor(n){super(),this.source=n}},ut=class extends te{source;constructor(n){super(),this.source=n}};function mt(e){return(Ke(e)?e.validators:e)||null}function ro(e){return Array.isArray(e)?mn(e):e||null}function bt(e,n){return(Ke(n)?n.asyncValidators:e)||null}function so(e){return Array.isArray(e)?yn(e):e||null}function Ke(e){return e!=null&&!Array.isArray(e)&&typeof e=="object"}function xn(e,n,t){let o=e.controls;if(!(n?Object.keys(o):o).length)throw new $e(1e3,"");if(!o[t])throw new $e(1001,"")}function En(e,n,t){e._forEachChild((o,i)=>{if(t[i]===void 0)throw new $e(1002,"")})}var fe=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(n,t){this._assignValidators(n),this._assignAsyncValidators(t)}get validator(){return this._composedValidatorFn}set validator(n){this._rawValidators=this._composedValidatorFn=n}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(n){this._rawAsyncValidators=this._composedAsyncValidatorFn=n}get parent(){return this._parent}get status(){return K(this.statusReactive)}set status(n){K(()=>this.statusReactive.set(n))}_status=J(()=>this.statusReactive());statusReactive=U(void 0);get valid(){return this.status===Ce}get invalid(){return this.status===He}get pending(){return this.status==pe}get disabled(){return this.status===we}get enabled(){return this.status!==we}errors;get pristine(){return K(this.pristineReactive)}set pristine(n){K(()=>this.pristineReactive.set(n))}_pristine=J(()=>this.pristineReactive());pristineReactive=U(!0);get dirty(){return!this.pristine}get touched(){return K(this.touchedReactive)}set touched(n){K(()=>this.touchedReactive.set(n))}_touched=J(()=>this.touchedReactive());touchedReactive=U(!1);get untouched(){return!this.touched}_events=new Mt;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(n){this._assignValidators(n)}setAsyncValidators(n){this._assignAsyncValidators(n)}addValidators(n){this.setValidators(Kt(n,this._rawValidators))}addAsyncValidators(n){this.setAsyncValidators(Kt(n,this._rawAsyncValidators))}removeValidators(n){this.setValidators(Jt(n,this._rawValidators))}removeAsyncValidators(n){this.setAsyncValidators(Jt(n,this._rawAsyncValidators))}hasValidator(n){return Ue(this._rawValidators,n)}hasAsyncValidator(n){return Ue(this._rawAsyncValidators,n)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(n={}){let t=this.touched===!1;this.touched=!0;let o=n.sourceControl??this;this._parent&&!n.onlySelf&&this._parent.markAsTouched(I($({},n),{sourceControl:o})),t&&n.emitEvent!==!1&&this._events.next(new Ee(!0,o))}markAllAsTouched(n={}){this.markAsTouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:this}),this._forEachChild(t=>t.markAllAsTouched(n))}markAsUntouched(n={}){let t=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let o=n.sourceControl??this;this._forEachChild(i=>{i.markAsUntouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:o})}),this._parent&&!n.onlySelf&&this._parent._updateTouched(n,o),t&&n.emitEvent!==!1&&this._events.next(new Ee(!1,o))}markAsDirty(n={}){let t=this.pristine===!0;this.pristine=!1;let o=n.sourceControl??this;this._parent&&!n.onlySelf&&this._parent.markAsDirty(I($({},n),{sourceControl:o})),t&&n.emitEvent!==!1&&this._events.next(new xe(!1,o))}markAsPristine(n={}){let t=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let o=n.sourceControl??this;this._forEachChild(i=>{i.markAsPristine({onlySelf:!0,emitEvent:n.emitEvent})}),this._parent&&!n.onlySelf&&this._parent._updatePristine(n,o),t&&n.emitEvent!==!1&&this._events.next(new xe(!0,o))}markAsPending(n={}){this.status=pe;let t=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new he(this.status,t)),this.statusChanges.emit(this.status)),this._parent&&!n.onlySelf&&this._parent.markAsPending(I($({},n),{sourceControl:t}))}disable(n={}){let t=this._parentMarkedDirty(n.onlySelf);this.status=we,this.errors=null,this._forEachChild(i=>{i.disable(I($({},n),{onlySelf:!0}))}),this._updateValue();let o=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new Qe(this.value,o)),this._events.next(new he(this.status,o)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(I($({},n),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(i=>i(!0))}enable(n={}){let t=this._parentMarkedDirty(n.onlySelf);this.status=Ce,this._forEachChild(o=>{o.enable(I($({},n),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent}),this._updateAncestors(I($({},n),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(o=>o(!1))}_updateAncestors(n,t){this._parent&&!n.onlySelf&&(this._parent.updateValueAndValidity(n),n.skipPristineCheck||this._parent._updatePristine({},t),this._parent._updateTouched({},t))}setParent(n){this._parent=n}getRawValue(){return this.value}updateValueAndValidity(n={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let o=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===Ce||this.status===pe)&&this._runAsyncValidator(o,n.emitEvent)}let t=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new Qe(this.value,t)),this._events.next(new he(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!n.onlySelf&&this._parent.updateValueAndValidity(I($({},n),{sourceControl:t}))}_updateTreeValidity(n={emitEvent:!0}){this._forEachChild(t=>t._updateTreeValidity(n)),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?we:Ce}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(n,t){if(this.asyncValidator){this.status=pe,this._hasOwnPendingAsyncValidator={emitEvent:t!==!1};let o=dn(this.asyncValidator(this));this._asyncValidationSubscription=o.subscribe(i=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(i,{emitEvent:t,shouldHaveEmitted:n})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let n=this._hasOwnPendingAsyncValidator?.emitEvent??!1;return this._hasOwnPendingAsyncValidator=null,n}return!1}setErrors(n,t={}){this.errors=n,this._updateControlsErrors(t.emitEvent!==!1,this,t.shouldHaveEmitted)}get(n){let t=n;return t==null||(Array.isArray(t)||(t=t.split(".")),t.length===0)?null:t.reduce((o,i)=>o&&o._find(i),this)}getError(n,t){let o=t?this.get(t):this;return o&&o.errors?o.errors[n]:null}hasError(n,t){return!!this.getError(n,t)}get root(){let n=this;for(;n._parent;)n=n._parent;return n}_updateControlsErrors(n,t,o){this.status=this._calculateStatus(),n&&this.statusChanges.emit(this.status),(n||o)&&this._events.next(new he(this.status,t)),this._parent&&this._parent._updateControlsErrors(n,t,o)}_initObservables(){this.valueChanges=new k,this.statusChanges=new k}_calculateStatus(){return this._allControlsDisabled()?we:this.errors?He:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(pe)?pe:this._anyControlsHaveStatus(He)?He:Ce}_anyControlsHaveStatus(n){return this._anyControls(t=>t.status===n)}_anyControlsDirty(){return this._anyControls(n=>n.dirty)}_anyControlsTouched(){return this._anyControls(n=>n.touched)}_updatePristine(n,t){let o=!this._anyControlsDirty(),i=this.pristine!==o;this.pristine=o,this._parent&&!n.onlySelf&&this._parent._updatePristine(n,t),i&&this._events.next(new xe(this.pristine,t))}_updateTouched(n={},t){this.touched=this._anyControlsTouched(),this._events.next(new Ee(this.touched,t)),this._parent&&!n.onlySelf&&this._parent._updateTouched(n,t)}_onDisabledChange=[];_registerOnCollectionChange(n){this._onCollectionChange=n}_setUpdateStrategy(n){Ke(n)&&n.updateOn!=null&&(this._updateOn=n.updateOn)}_parentMarkedDirty(n){let t=this._parent&&this._parent.dirty;return!n&&!!t&&!this._parent._anyControlsDirty()}_find(n){return null}_assignValidators(n){this._rawValidators=Array.isArray(n)?n.slice():n,this._composedValidatorFn=ro(this._rawValidators)}_assignAsyncValidators(n){this._rawAsyncValidators=Array.isArray(n)?n.slice():n,this._composedAsyncValidatorFn=so(this._rawAsyncValidators)}},me=class extends fe{constructor(n,t,o){super(mt(t),bt(o,t)),this.controls=n,this._initObservables(),this._setUpdateStrategy(t),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(n,t){return this.controls[n]?this.controls[n]:(this.controls[n]=t,t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange),t)}addControl(n,t,o={}){this.registerControl(n,t),this.updateValueAndValidity({emitEvent:o.emitEvent}),this._onCollectionChange()}removeControl(n,t={}){this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),delete this.controls[n],this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}setControl(n,t,o={}){this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),delete this.controls[n],t&&this.registerControl(n,t),this.updateValueAndValidity({emitEvent:o.emitEvent}),this._onCollectionChange()}contains(n){return this.controls.hasOwnProperty(n)&&this.controls[n].enabled}setValue(n,t={}){En(this,!0,n),Object.keys(n).forEach(o=>{xn(this,!0,o),this.controls[o].setValue(n[o],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t)}patchValue(n,t={}){n!=null&&(Object.keys(n).forEach(o=>{let i=this.controls[o];i&&i.patchValue(n[o],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t))}reset(n={},t={}){this._forEachChild((o,i)=>{o.reset(n?n[i]:null,{onlySelf:!0,emitEvent:t.emitEvent})}),this._updatePristine(t,this),this._updateTouched(t,this),this.updateValueAndValidity(t)}getRawValue(){return this._reduceChildren({},(n,t,o)=>(n[o]=t.getRawValue(),n))}_syncPendingControls(){let n=this._reduceChildren(!1,(t,o)=>o._syncPendingControls()?!0:t);return n&&this.updateValueAndValidity({onlySelf:!0}),n}_forEachChild(n){Object.keys(this.controls).forEach(t=>{let o=this.controls[t];o&&n(o,t)})}_setUpControls(){this._forEachChild(n=>{n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(n){for(let[t,o]of Object.entries(this.controls))if(this.contains(t)&&n(o))return!0;return!1}_reduceValue(){let n={};return this._reduceChildren(n,(t,o,i)=>((o.enabled||this.disabled)&&(t[i]=o.value),t))}_reduceChildren(n,t){let o=n;return this._forEachChild((i,r)=>{o=t(o,i,r)}),o}_allControlsDisabled(){for(let n of Object.keys(this.controls))if(this.controls[n].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(n){return this.controls.hasOwnProperty(n)?this.controls[n]:null}};var dt=class extends me{};var yt=new ne("",{providedIn:"root",factory:()=>Je}),Je="always";function ao(e,n){return[...n.path,e]}function en(e,n,t=Je){vt(e,n),n.valueAccessor.writeValue(e.value),(e.disabled||t==="always")&&n.valueAccessor.setDisabledState?.(e.disabled),co(e,n),po(e,n),uo(e,n),lo(e,n)}function tn(e,n,t=!0){let o=()=>{};n.valueAccessor&&(n.valueAccessor.registerOnChange(o),n.valueAccessor.registerOnTouched(o)),Ze(e,n),e&&(n._invokeOnDestroyCallbacks(),e._registerOnCollectionChange(()=>{}))}function Ye(e,n){e.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(n)})}function lo(e,n){if(n.valueAccessor.setDisabledState){let t=o=>{n.valueAccessor.setDisabledState(o)};e.registerOnDisabledChange(t),n._registerOnDestroy(()=>{e._unregisterOnDisabledChange(t)})}}function vt(e,n){let t=vn(e);n.validator!==null?e.setValidators(Xt(t,n.validator)):typeof t=="function"&&e.setValidators([t]);let o=_n(e);n.asyncValidator!==null?e.setAsyncValidators(Xt(o,n.asyncValidator)):typeof o=="function"&&e.setAsyncValidators([o]);let i=()=>e.updateValueAndValidity();Ye(n._rawValidators,i),Ye(n._rawAsyncValidators,i)}function Ze(e,n){let t=!1;if(e!==null){if(n.validator!==null){let i=vn(e);if(Array.isArray(i)&&i.length>0){let r=i.filter(s=>s!==n.validator);r.length!==i.length&&(t=!0,e.setValidators(r))}}if(n.asyncValidator!==null){let i=_n(e);if(Array.isArray(i)&&i.length>0){let r=i.filter(s=>s!==n.asyncValidator);r.length!==i.length&&(t=!0,e.setAsyncValidators(r))}}}let o=()=>{};return Ye(n._rawValidators,o),Ye(n._rawAsyncValidators,o),t}function co(e,n){n.valueAccessor.registerOnChange(t=>{e._pendingValue=t,e._pendingChange=!0,e._pendingDirty=!0,e.updateOn==="change"&&Mn(e,n)})}function uo(e,n){n.valueAccessor.registerOnTouched(()=>{e._pendingTouched=!0,e.updateOn==="blur"&&e._pendingChange&&Mn(e,n),e.updateOn!=="submit"&&e.markAsTouched()})}function Mn(e,n){e._pendingDirty&&e.markAsDirty(),e.setValue(e._pendingValue,{emitModelToViewChange:!1}),n.viewToModelUpdate(e._pendingValue),e._pendingChange=!1}function po(e,n){let t=(o,i)=>{n.valueAccessor.writeValue(o),i&&n.viewToModelUpdate(o)};e.registerOnChange(t),n._registerOnDestroy(()=>{e._unregisterOnChange(t)})}function ho(e,n){e==null,vt(e,n)}function go(e,n){return Ze(e,n)}function fo(e,n){if(!e.hasOwnProperty("model"))return!1;let t=e.model;return t.isFirstChange()?!0:!Object.is(n,t.currentValue)}function mo(e){return Object.getPrototypeOf(e.constructor)===Un}function bo(e,n){e._syncPendingControls(),n.forEach(t=>{let o=t.control;o.updateOn==="submit"&&o._pendingChange&&(t.viewToModelUpdate(o._pendingValue),o._pendingChange=!1)})}function yo(e,n){if(!n)return null;Array.isArray(n);let t,o,i;return n.forEach(r=>{r.constructor===Xe?t=r:mo(r)?o=r:i=r}),i||o||t||null}function vo(e,n){let t=e.indexOf(n);t>-1&&e.splice(t,1)}function nn(e,n){let t=e.indexOf(n);t>-1&&e.splice(t,1)}function on(e){return typeof e=="object"&&e!==null&&Object.keys(e).length===2&&"value"in e&&"disabled"in e}var je=class extends fe{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(n=null,t,o){super(mt(t),bt(o,t)),this._applyFormState(n),this._setUpdateStrategy(t),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),Ke(t)&&(t.nonNullable||t.initialValueIsDefault)&&(on(n)?this.defaultValue=n.value:this.defaultValue=n)}setValue(n,t={}){this.value=this._pendingValue=n,this._onChange.length&&t.emitModelToViewChange!==!1&&this._onChange.forEach(o=>o(this.value,t.emitViewToModelChange!==!1)),this.updateValueAndValidity(t)}patchValue(n,t={}){this.setValue(n,t)}reset(n=this.defaultValue,t={}){this._applyFormState(n),this.markAsPristine(t),this.markAsUntouched(t),this.setValue(this.value,t),this._pendingChange=!1}_updateValue(){}_anyControls(n){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(n){this._onChange.push(n)}_unregisterOnChange(n){nn(this._onChange,n)}registerOnDisabledChange(n){this._onDisabledChange.push(n)}_unregisterOnDisabledChange(n){nn(this._onDisabledChange,n)}_forEachChild(n){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(n){on(n)?(this.value=this._pendingValue=n.value,n.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=n}};var _o=e=>e instanceof je;var Vn=(()=>{class e{static \u0275fac=function(o){return new(o||e)};static \u0275dir=V({type:e,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""],standalone:!1})}return e})();var Dn=new ne("");var Co={provide:ge,useExisting:be(()=>_t)},_t=(()=>{class e extends ge{callSetDisabledState;get submitted(){return K(this._submittedReactive)}set submitted(t){this._submittedReactive.set(t)}_submitted=J(()=>this._submittedReactive());_submittedReactive=U(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];form=null;ngSubmit=new k;constructor(t,o,i){super(),this.callSetDisabledState=i,this._setValidators(t),this._setAsyncValidators(o)}ngOnChanges(t){t.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}ngOnDestroy(){this.form&&(Ze(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get control(){return this.form}get path(){return[]}addControl(t){let o=this.form.get(t.path);return en(o,t,this.callSetDisabledState),o.updateValueAndValidity({emitEvent:!1}),this.directives.push(t),o}getControl(t){return this.form.get(t.path)}removeControl(t){tn(t.control||null,t,!1),vo(this.directives,t)}addFormGroup(t){this._setUpFormContainer(t)}removeFormGroup(t){this._cleanUpFormContainer(t)}getFormGroup(t){return this.form.get(t.path)}addFormArray(t){this._setUpFormContainer(t)}removeFormArray(t){this._cleanUpFormContainer(t)}getFormArray(t){return this.form.get(t.path)}updateModel(t,o){this.form.get(t.path).setValue(o)}onSubmit(t){return this._submittedReactive.set(!0),bo(this.form,this.directives),this.ngSubmit.emit(t),this.form._events.next(new ct(this.control)),t?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(t=void 0){this.form.reset(t),this._submittedReactive.set(!1),this.form._events.next(new ut(this.form))}_updateDomValue(){this.directives.forEach(t=>{let o=t.control,i=this.form.get(t.path);o!==i&&(tn(o||null,t),_o(i)&&(en(i,t,this.callSetDisabledState),t.control=i))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(t){let o=this.form.get(t.path);ho(o,t),o.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(t){if(this.form){let o=this.form.get(t.path);o&&go(o,t)&&o.updateValueAndValidity({emitEvent:!1})}}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm&&this._oldForm._registerOnCollectionChange(()=>{})}_updateValidators(){vt(this.form,this),this._oldForm&&Ze(this._oldForm,this)}static \u0275fac=function(o){return new(o||e)(C(ft,10),C(ln,10),C(yt,8))};static \u0275dir=V({type:e,selectors:[["","formGroup",""]],hostBindings:function(o,i){o&1&&T("submit",function(s){return i.onSubmit(s)})("reset",function(){return i.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[P([Co]),m,oe]})}return e})();var wo={provide:Ve,useExisting:be(()=>Ct)},Ct=(()=>{class e extends Ve{_ngModelWarningConfig;_added=!1;viewModel;control;name=null;set isDisabled(t){}model;update=new k;static _ngModelWarningSentOnce=!1;_ngModelWarningSent=!1;constructor(t,o,i,r,s){super(),this._ngModelWarningConfig=s,this._parent=t,this._setValidators(o),this._setAsyncValidators(i),this.valueAccessor=yo(this,r)}ngOnChanges(t){this._added||this._setUpControl(),fo(t,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}get path(){return ao(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_setUpControl(){this.control=this.formDirective.addControl(this),this._added=!0}static \u0275fac=function(o){return new(o||e)(C(ge,13),C(ft,10),C(ln,10),C(an,10),C(Dn,8))};static \u0275dir=V({type:e,selectors:[["","formControlName",""]],inputs:{name:[0,"formControlName","name"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},standalone:!1,features:[P([wo]),m,oe]})}return e})();var xo=(()=>{class e{_validator=Ge;_onChange;_enabled;ngOnChanges(t){if(this.inputName in t){let o=this.normalizeInput(t[this.inputName].currentValue);this._enabled=this.enabled(o),this._validator=this._enabled?this.createValidator(o):Ge,this._onChange&&this._onChange()}}validate(t){return this._validator(t)}registerOnValidatorChange(t){this._onChange=t}enabled(t){return t!=null}static \u0275fac=function(o){return new(o||e)};static \u0275dir=V({type:e,features:[oe]})}return e})();var Eo={provide:ft,useExisting:be(()=>wt),multi:!0};var wt=(()=>{class e extends xo{required;inputName="required";normalizeInput=b;createValidator=t=>cn;enabled(t){return t}static \u0275fac=(()=>{let t;return function(i){return(t||(t=_(e)))(i||e)}})();static \u0275dir=V({type:e,selectors:[["","required","","formControlName","",3,"type","checkbox"],["","required","","formControl","",3,"type","checkbox"],["","required","","ngModel","",3,"type","checkbox"]],hostVars:1,hostBindings:function(o,i){o&2&&M("required",i._enabled?"":null)},inputs:{required:"required"},standalone:!1,features:[P([Eo]),m]})}return e})();var $n=(()=>{class e{static \u0275fac=function(o){return new(o||e)};static \u0275mod=R({type:e});static \u0275inj=B({})}return e})(),pt=class extends fe{constructor(n,t,o){super(mt(t),bt(o,t)),this.controls=n,this._initObservables(),this._setUpdateStrategy(t),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;at(n){return this.controls[this._adjustIndex(n)]}push(n,t={}){this.controls.push(n),this._registerControl(n),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}insert(n,t,o={}){this.controls.splice(n,0,t),this._registerControl(t),this.updateValueAndValidity({emitEvent:o.emitEvent})}removeAt(n,t={}){let o=this._adjustIndex(n);o<0&&(o=0),this.controls[o]&&this.controls[o]._registerOnCollectionChange(()=>{}),this.controls.splice(o,1),this.updateValueAndValidity({emitEvent:t.emitEvent})}setControl(n,t,o={}){let i=this._adjustIndex(n);i<0&&(i=0),this.controls[i]&&this.controls[i]._registerOnCollectionChange(()=>{}),this.controls.splice(i,1),t&&(this.controls.splice(i,0,t),this._registerControl(t)),this.updateValueAndValidity({emitEvent:o.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(n,t={}){En(this,!1,n),n.forEach((o,i)=>{xn(this,!1,i),this.at(i).setValue(o,{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t)}patchValue(n,t={}){n!=null&&(n.forEach((o,i)=>{this.at(i)&&this.at(i).patchValue(o,{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t))}reset(n=[],t={}){this._forEachChild((o,i)=>{o.reset(n[i],{onlySelf:!0,emitEvent:t.emitEvent})}),this._updatePristine(t,this),this._updateTouched(t,this),this.updateValueAndValidity(t)}getRawValue(){return this.controls.map(n=>n.getRawValue())}clear(n={}){this.controls.length<1||(this._forEachChild(t=>t._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:n.emitEvent}))}_adjustIndex(n){return n<0?n+this.length:n}_syncPendingControls(){let n=this.controls.reduce((t,o)=>o._syncPendingControls()?!0:t,!1);return n&&this.updateValueAndValidity({onlySelf:!0}),n}_forEachChild(n){this.controls.forEach((t,o)=>{n(t,o)})}_updateValue(){this.value=this.controls.filter(n=>n.enabled||this.disabled).map(n=>n.value)}_anyControls(n){return this.controls.some(t=>t.enabled&&n(t))}_setUpControls(){this._forEachChild(n=>this._registerControl(n))}_allControlsDisabled(){for(let n of this.controls)if(n.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(n){n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange)}_find(n){return this.at(n)??null}};function rn(e){return!!e&&(e.asyncValidators!==void 0||e.validators!==void 0||e.updateOn!==void 0)}var Sn=(()=>{class e{useNonNullable=!1;get nonNullable(){let t=new e;return t.useNonNullable=!0,t}group(t,o=null){let i=this._reduceControls(t),r={};return rn(o)?r=o:o!==null&&(r.validators=o.validator,r.asyncValidators=o.asyncValidator),new me(i,r)}record(t,o=null){let i=this._reduceControls(t);return new dt(i,o)}control(t,o,i){let r={};return this.useNonNullable?(rn(o)?r=o:(r.validators=o,r.asyncValidators=i),new je(t,I($({},r),{nonNullable:!0}))):new je(t,o,i)}array(t,o,i){let r=t.map(s=>this._createControl(s));return new pt(r,o,i)}_reduceControls(t){let o={};return Object.keys(t).forEach(i=>{o[i]=this._createControl(t[i])}),o}_createControl(t){if(t instanceof je)return t;if(t instanceof fe)return t;if(Array.isArray(t)){let o=t[0],i=t.length>1?t[1]:null,r=t.length>2?t[2]:null;return this.control(o,i,r)}else return this.control(t)}static \u0275fac=function(o){return new(o||e)};static \u0275prov=N({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var An=(()=>{class e{static withConfig(t){return{ngModule:e,providers:[{provide:yt,useValue:t.callSetDisabledState??Je}]}}static \u0275fac=function(o){return new(o||e)};static \u0275mod=R({type:e});static \u0275inj=B({imports:[$n]})}return e})(),Fn=(()=>{class e{static withConfig(t){return{ngModule:e,providers:[{provide:Dn,useValue:t.warnOnNgModelWithFormControl??"always"},{provide:yt,useValue:t.callSetDisabledState??Je}]}}static \u0275fac=function(o){return new(o||e)};static \u0275mod=R({type:e});static \u0275inj=B({imports:[$n]})}return e})();var In=(()=>{class e extends Le{pathId;ngOnInit(){this.pathId="url(#"+at()+")"}static \u0275fac=(()=>{let t;return function(i){return(t||(t=_(e)))(i||e)}})();static \u0275cmp=E({type:e,selectors:[["SpinnerIcon"]],features:[m],decls:6,vars:7,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(o,i){o&1&&(Se(),l(0,"svg",0)(1,"g"),f(2,"path",1),c(),l(3,"defs")(4,"clipPath",2),f(5,"rect",3),c()()()),o&2&&(Y(i.getClassNames()),M("aria-label",i.ariaLabel)("aria-hidden",i.ariaHidden)("role",i.role),u(),M("clip-path",i.pathId),u(3),a("id",i.pathId))},encapsulation:2})}return e})();var On=(()=>{class e extends Le{static \u0275fac=(()=>{let t;return function(i){return(t||(t=_(e)))(i||e)}})();static \u0275cmp=E({type:e,selectors:[["TimesIcon"]],features:[m],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M8.01186 7.00933L12.27 2.75116C12.341 2.68501 12.398 2.60524 12.4375 2.51661C12.4769 2.42798 12.4982 2.3323 12.4999 2.23529C12.5016 2.13827 12.4838 2.0419 12.4474 1.95194C12.4111 1.86197 12.357 1.78024 12.2884 1.71163C12.2198 1.64302 12.138 1.58893 12.0481 1.55259C11.9581 1.51625 11.8617 1.4984 11.7647 1.50011C11.6677 1.50182 11.572 1.52306 11.4834 1.56255C11.3948 1.60204 11.315 1.65898 11.2488 1.72997L6.99067 5.98814L2.7325 1.72997C2.59553 1.60234 2.41437 1.53286 2.22718 1.53616C2.03999 1.53946 1.8614 1.61529 1.72901 1.74767C1.59663 1.88006 1.5208 2.05865 1.5175 2.24584C1.5142 2.43303 1.58368 2.61419 1.71131 2.75116L5.96948 7.00933L1.71131 11.2675C1.576 11.403 1.5 11.5866 1.5 11.7781C1.5 11.9696 1.576 12.1532 1.71131 12.2887C1.84679 12.424 2.03043 12.5 2.2219 12.5C2.41338 12.5 2.59702 12.424 2.7325 12.2887L6.99067 8.03052L11.2488 12.2887C11.3843 12.424 11.568 12.5 11.7594 12.5C11.9509 12.5 12.1346 12.424 12.27 12.2887C12.4053 12.1532 12.4813 11.9696 12.4813 11.7781C12.4813 11.5866 12.4053 11.403 12.27 11.2675L8.01186 7.00933Z","fill","currentColor"]],template:function(o,i){o&1&&(Se(),l(0,"svg",0),f(1,"path",1),c()),o&2&&(Y(i.getClassNames()),M("aria-label",i.ariaLabel)("aria-hidden",i.ariaHidden)("role",i.role))},encapsulation:2})}return e})();var Do=["container"],$o=["icon"],So=["closeicon"],Ao=["*"],Fo=(e,n)=>({showTransitionParams:e,hideTransitionParams:n}),Io=e=>({value:"visible()",params:e}),Oo=e=>({closeCallback:e});function ko(e,n){e&1&&re(0)}function To(e,n){if(e&1&&v(0,ko,1,0,"ng-container",7),e&2){let t=g(2);a("ngTemplateOutlet",t.iconTemplate||t.iconTemplate)}}function Po(e,n){if(e&1&&f(0,"i",3),e&2){let t=g(2);a("ngClass",t.icon)}}function No(e,n){if(e&1&&f(0,"span",9),e&2){let t=g(3);a("ngClass",t.cx("text"))("innerHTML",t.text,Ot)}}function Bo(e,n){if(e&1&&(l(0,"div"),v(1,No,1,2,"span",8),c()),e&2){let t=g(2);u(),a("ngIf",!t.escape)}}function Ro(e,n){if(e&1&&(l(0,"span",5),p(1),c()),e&2){let t=g(3);a("ngClass",t.cx("text")),u(),Z(t.text)}}function Lo(e,n){if(e&1&&v(0,Ro,2,2,"span",10),e&2){let t=g(2);a("ngIf",t.escape&&t.text)}}function zo(e,n){e&1&&re(0)}function Ho(e,n){if(e&1&&v(0,zo,1,0,"ng-container",11),e&2){let t=g(2);a("ngTemplateOutlet",t.containerTemplate||t.containerTemplate)("ngTemplateOutletContext",X(2,Oo,t.close.bind(t)))}}function jo(e,n){if(e&1&&(l(0,"span",5),Te(1),c()),e&2){let t=g(2);a("ngClass",t.cx("text"))}}function Go(e,n){if(e&1&&f(0,"i",13),e&2){let t=g(3);a("ngClass",t.closeIcon)}}function Uo(e,n){e&1&&re(0)}function Wo(e,n){if(e&1&&v(0,Uo,1,0,"ng-container",7),e&2){let t=g(3);a("ngTemplateOutlet",t.closeIconTemplate||t._closeIconTemplate)}}function qo(e,n){e&1&&f(0,"TimesIcon",14)}function Qo(e,n){if(e&1){let t=Bt();l(0,"button",12),T("click",function(i){At(t);let r=g(2);return Ft(r.close(i))}),v(1,Go,1,1,"i",13)(2,Wo,1,1,"ng-container")(3,qo,1,0,"TimesIcon",14),c()}if(e&2){let t=g(2);M("aria-label",t.closeAriaLabel),u(),S(t.closeIcon?1:-1),u(),S(t.closeIconTemplate||t._closeIconTemplate?2:-1),u(),S(!t.closeIconTemplate&&!t._closeIconTemplate&&!t.closeIcon?3:-1)}}function Yo(e,n){if(e&1&&(l(0,"div",1)(1,"div",2),v(2,To,1,1,"ng-container")(3,Po,1,1,"i",3)(4,Bo,2,1,"div",4)(5,Lo,1,1,"ng-template",null,0,zt)(7,Ho,1,4,"ng-container")(8,jo,2,1,"span",5)(9,Qo,4,4,"button",6),c()()),e&2){let t=Pe(6),o=g();a("ngClass",o.containerClass)("@messageAnimation",X(13,Io,Lt(10,Fo,o.showTransitionOptions,o.hideTransitionOptions))),M("aria-live","polite")("role","alert"),u(2),S(o.iconTemplate||o._iconTemplate?2:-1),u(),S(o.icon?3:-1),u(),a("ngIf",!o.escape)("ngIfElse",t),u(3),S(o.containerTemplate||o._containerTemplate?7:8),u(2),S(o.closable?9:-1)}}var Zo=({dt:e})=>`
.p-message {
    border-radius: ${e("message.border.radius")};
    outline-width: ${e("message.border.width")};
    outline-style: solid;
}

.p-message-content {
    display: flex;
    align-items: center;
    padding: ${e("message.content.padding")};
    gap: ${e("message.content.gap")};
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
    width: ${e("message.close.button.width")};
    height: ${e("message.close.button.height")};
    border-radius: ${e("message.close.button.border.radius")};
    background: transparent;
    transition: background ${e("message.transition.duration")}, color ${e("message.transition.duration")}, outline-color ${e("message.transition.duration")}, box-shadow ${e("message.transition.duration")}, opacity 0.3s;
    outline-color: transparent;
    color: inherit;
    padding: 0;
    border: none;
    cursor: pointer;
    user-select: none;
}

.p-message-close-icon {
    font-size: ${e("message.close.icon.size")};
    width: ${e("message.close.icon.size")};
    height: ${e("message.close.icon.size")};
}

.p-message-close-button:focus-visible {
    outline-width: ${e("message.close.button.focus.ring.width")};
    outline-style: ${e("message.close.button.focus.ring.style")};
    outline-offset: ${e("message.close.button.focus.ring.offset")};
}

.p-message-info {
    background: ${e("message.info.background")};
    outline-color: ${e("message.info.border.color")};
    color: ${e("message.info.color")};
    box-shadow: ${e("message.info.shadow")};
}

.p-message-info .p-message-close-button:focus-visible {
    outline-color: ${e("message.info.close.button.focus.ring.color")};
    box-shadow: ${e("message.info.close.button.focus.ring.shadow")};
}

.p-message-info .p-message-close-button:hover {
    background: ${e("message.info.close.button.hover.background")};
}

.p-message-info.p-message-outlined {
    color: ${e("message.info.outlined.color")};
    outline-color: ${e("message.info.outlined.border.color")};
}

.p-message-info.p-message-simple {
    color: ${e("message.info.simple.color")};
}

.p-message-success {
    background: ${e("message.success.background")};
    outline-color: ${e("message.success.border.color")};
    color: ${e("message.success.color")};
    box-shadow: ${e("message.success.shadow")};
}

.p-message-success .p-message-close-button:focus-visible {
    outline-color: ${e("message.success.close.button.focus.ring.color")};
    box-shadow: ${e("message.success.close.button.focus.ring.shadow")};
}

.p-message-success .p-message-close-button:hover {
    background: ${e("message.success.close.button.hover.background")};
}

.p-message-success.p-message-outlined {
    color: ${e("message.success.outlined.color")};
    outline-color: ${e("message.success.outlined.border.color")};
}

.p-message-success.p-message-simple {
    color: ${e("message.success.simple.color")};
}

.p-message-warn {
    background: ${e("message.warn.background")};
    outline-color: ${e("message.warn.border.color")};
    color: ${e("message.warn.color")};
    box-shadow: ${e("message.warn.shadow")};
}

.p-message-warn .p-message-close-button:focus-visible {
    outline-color: ${e("message.warn.close.button.focus.ring.color")};
    box-shadow: ${e("message.warn.close.button.focus.ring.shadow")};
}

.p-message-warn .p-message-close-button:hover {
    background: ${e("message.warn.close.button.hover.background")};
}

.p-message-warn.p-message-outlined {
    color: ${e("message.warn.outlined.color")};
    outline-color: ${e("message.warn.outlined.border.color")};
}

.p-message-warn.p-message-simple {
    color: ${e("message.warn.simple.color")};
}

.p-message-error {
    background: ${e("message.error.background")};
    outline-color: ${e("message.error.border.color")};
    color: ${e("message.error.color")};
    box-shadow: ${e("message.error.shadow")};
}

.p-message-error .p-message-close-button:focus-visible {
    outline-color: ${e("message.error.close.button.focus.ring.color")};
    box-shadow: ${e("message.error.close.button.focus.ring.shadow")};
}

.p-message-error .p-message-close-button:hover {
    background: ${e("message.error.close.button.hover.background")};
}

.p-message-error.p-message-outlined {
    color: ${e("message.error.outlined.color")};
    outline-color: ${e("message.error.outlined.border.color")};
}

.p-message-error.p-message-simple {
    color: ${e("message.error.simple.color")};
}

.p-message-secondary {
    background: ${e("message.secondary.background")};
    outline-color: ${e("message.secondary.border.color")};
    color: ${e("message.secondary.color")};
    box-shadow: ${e("message.secondary.shadow")};
}

.p-message-secondary .p-message-close-button:focus-visible {
    outline-color: ${e("message.secondary.close.button.focus.ring.color")};
    box-shadow: ${e("message.secondary.close.button.focus.ring.shadow")};
}

.p-message-secondary .p-message-close-button:hover {
    background: ${e("message.secondary.close.button.hover.background")};
}

.p-message-secondary.p-message-outlined {
    color: ${e("message.secondary.outlined.color")};
    outline-color: ${e("message.secondary.outlined.border.color")};
}

.p-message-secondary.p-message-simple {
    color: ${e("message.secondary.simple.color")};
}

.p-message-contrast {
    background: ${e("message.contrast.background")};
    outline-color: ${e("message.contrast.border.color")};
    color: ${e("message.contrast.color")};
    box-shadow: ${e("message.contrast.shadow")};
}

.p-message-contrast .p-message-close-button:focus-visible {
    outline-color: ${e("message.contrast.close.button.focus.ring.color")};
    box-shadow: ${e("message.contrast.close.button.focus.ring.shadow")};
}

.p-message-contrast .p-message-close-button:hover {
    background: ${e("message.contrast.close.button.hover.background")};
}

.p-message-contrast.p-message-outlined {
    color: ${e("message.contrast.outlined.color")};
    outline-color: ${e("message.contrast.outlined.border.color")};
}

.p-message-contrast.p-message-simple {
    color: ${e("message.contrast.simple.color")};
}

.p-message-text {
    display: inline-flex;
    align-items: center;
    font-size: ${e("message.text.font.size")};
    font-weight: ${e("message.text.font.weight")};
}

.p-message-icon {
    font-size: ${e("message.icon.size")};
    width: ${e("message.icon.size")};
    height: ${e("message.icon.size")};
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
    padding: ${e("message.content.sm.padding")};
}

.p-message-sm .p-message-text {
    font-size: ${e("message.text.sm.font.size")};
}

.p-message-sm .p-message-icon {
    font-size: ${e("message.icon.sm.size")};
    width: ${e("message.icon.sm.size")};
    height: ${e("message.icon.sm.size")};
}

.p-message-sm .p-message-close-icon {
    font-size: ${e("message.close.icon.sm.size")};
    width: ${e("message.close.icon.sm.size")};
    height: ${e("message.close.icon.sm.size")};
}

.p-message-lg .p-message-content {
    padding: ${e("message.content.lg.padding")};
}

.p-message-lg .p-message-text {
    font-size: ${e("message.text.lg.font.size")};
}

.p-message-lg .p-message-icon {
    font-size: ${e("message.icon.lg.size")};
    width: ${e("message.icon.lg.size")};
    height: ${e("message.icon.lg.size")};
}

.p-message-lg .p-message-close-icon {
    font-size: ${e("message.close.icon.lg.size")};
    width: ${e("message.close.icon.lg.size")};
    height: ${e("message.close.icon.lg.size")};
}

.p-message-outlined {
    background: transparent;
    outline-width: ${e("message.outlined.border.width")};
}

.p-message-simple {
    background: transparent;
    outline-color: transparent;
    box-shadow: none;
}

.p-message-simple .p-message-content {
    padding: ${e("message.simple.content.padding")};
}

.p-message-outlined .p-message-close-button:hover,
.p-message-simple .p-message-close-button:hover {
    background: transparent;
}`,Xo={root:({props:e})=>["p-message p-component p-message-"+e.severity,{"p-message-simple":e.variant==="simple"}],content:"p-message-content",icon:"p-message-icon",text:"p-message-text",closeButton:"p-message-close-button",closeIcon:"p-message-close-icon"},kn=(()=>{class e extends ue{name="message";theme=Zo;classes=Xo;static \u0275fac=(()=>{let t;return function(i){return(t||(t=_(e)))(i||e)}})();static \u0275prov=N({token:e,factory:e.\u0275fac})}return e})();var Tn=(()=>{class e extends ee{severity="info";text;escape=!0;style;styleClass;closable=!1;icon;closeIcon;life;showTransitionOptions="300ms ease-out";hideTransitionOptions="200ms cubic-bezier(0.86, 0, 0.07, 1)";size;variant;onClose=new k;get closeAriaLabel(){return this.config.translation.aria?this.config.translation.aria.close:void 0}get containerClass(){let t=this.variant==="outlined"?"p-message-outlined":this.variant==="simple"?"p-message-simple":"",o=this.size==="small"?"p-message-sm":this.size==="large"?"p-message-lg":"";return`p-message-${this.severity} ${t} ${o}`.trim()+(this.styleClass?" "+this.styleClass:"")}visible=U(!0);_componentStyle=O(kn);containerTemplate;iconTemplate;closeIconTemplate;templates;_containerTemplate;_iconTemplate;_closeIconTemplate;ngOnInit(){super.ngOnInit(),this.life&&setTimeout(()=>{this.visible.set(!1)},this.life)}ngAfterContentInit(){this.templates?.forEach(t=>{switch(t.getType()){case"container":this._containerTemplate=t.template;break;case"icon":this._iconTemplate=t.template;break;case"closeicon":this._closeIconTemplate=t.template;break}})}close(t){this.visible.set(!1),this.onClose.emit({originalEvent:t})}static \u0275fac=(()=>{let t;return function(i){return(t||(t=_(e)))(i||e)}})();static \u0275cmp=E({type:e,selectors:[["p-message"]],contentQueries:function(o,i,r){if(o&1&&(L(r,Do,4),L(r,$o,4),L(r,So,4),L(r,Re,4)),o&2){let s;z(s=H())&&(i.containerTemplate=s.first),z(s=H())&&(i.iconTemplate=s.first),z(s=H())&&(i.closeIconTemplate=s.first),z(s=H())&&(i.templates=s)}},inputs:{severity:"severity",text:"text",escape:[2,"escape","escape",b],style:"style",styleClass:"styleClass",closable:[2,"closable","closable",b],icon:"icon",closeIcon:"closeIcon",life:"life",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",size:"size",variant:"variant"},outputs:{onClose:"onClose"},features:[P([kn]),m],ngContentSelectors:Ao,decls:1,vars:1,consts:[["escapeOut",""],[1,"p-message","p-component",3,"ngClass"],[1,"p-message-content"],[1,"p-message-icon",3,"ngClass"],[4,"ngIf","ngIfElse"],[3,"ngClass"],["pRipple","","type","button",1,"p-message-close-button"],[4,"ngTemplateOutlet"],[3,"ngClass","innerHTML",4,"ngIf"],[3,"ngClass","innerHTML"],[3,"ngClass",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["pRipple","","type","button",1,"p-message-close-button",3,"click"],[1,"p-message-close-icon",3,"ngClass"],["styleClass","p-message-close-icon"]],template:function(o,i){o&1&&(ke(),v(0,Yo,10,15,"div",1)),o&2&&S(i.visible()?0:-1)},dependencies:[W,ae,Ne,Be,On,ze,j],encapsulation:2,data:{animation:[ve("messageAnimation",[ce(":enter",[ie({opacity:0,transform:"translateY(-25%)"}),le("{{showTransitionParams}}")]),ce(":leave",[le("{{hideTransitionParams}}",ie({height:0,marginTop:0,marginBottom:0,marginLeft:0,marginRight:0,opacity:0}))])])]},changeDetection:0})}return e})();var Pn=(()=>{class e{static zindex=1e3;static calculatedScrollbarWidth=null;static calculatedScrollbarHeight=null;static browser;static addClass(t,o){t&&o&&(t.classList?t.classList.add(o):t.className+=" "+o)}static addMultipleClasses(t,o){if(t&&o)if(t.classList){let i=o.trim().split(" ");for(let r=0;r<i.length;r++)t.classList.add(i[r])}else{let i=o.split(" ");for(let r=0;r<i.length;r++)t.className+=" "+i[r]}}static removeClass(t,o){t&&o&&(t.classList?t.classList.remove(o):t.className=t.className.replace(new RegExp("(^|\\b)"+o.split(" ").join("|")+"(\\b|$)","gi")," "))}static removeMultipleClasses(t,o){t&&o&&[o].flat().filter(Boolean).forEach(i=>i.split(" ").forEach(r=>this.removeClass(t,r)))}static hasClass(t,o){return t&&o?t.classList?t.classList.contains(o):new RegExp("(^| )"+o+"( |$)","gi").test(t.className):!1}static siblings(t){return Array.prototype.filter.call(t.parentNode.children,function(o){return o!==t})}static find(t,o){return Array.from(t.querySelectorAll(o))}static findSingle(t,o){return this.isElement(t)?t.querySelector(o):null}static index(t){let o=t.parentNode.childNodes,i=0;for(var r=0;r<o.length;r++){if(o[r]==t)return i;o[r].nodeType==1&&i++}return-1}static indexWithinGroup(t,o){let i=t.parentNode?t.parentNode.childNodes:[],r=0;for(var s=0;s<i.length;s++){if(i[s]==t)return r;i[s].attributes&&i[s].attributes[o]&&i[s].nodeType==1&&r++}return-1}static appendOverlay(t,o,i="self"){i!=="self"&&t&&o&&this.appendChild(t,o)}static alignOverlay(t,o,i="self",r=!0){t&&o&&(r&&(t.style.minWidth=`${e.getOuterWidth(o)}px`),i==="self"?this.relativePosition(t,o):this.absolutePosition(t,o))}static relativePosition(t,o,i=!0){let r=De=>{if(De)return getComputedStyle(De).getPropertyValue("position")==="relative"?De:r(De.parentElement)},s=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:this.getHiddenElementDimensions(t),d=o.offsetHeight,h=o.getBoundingClientRect(),D=this.getWindowScrollTop(),y=this.getWindowScrollLeft(),w=this.getViewport(),x=r(t)?.getBoundingClientRect()||{top:-1*D,left:-1*y},F,q;h.top+d+s.height>w.height?(F=h.top-x.top-s.height,t.style.transformOrigin="bottom",h.top+F<0&&(F=-1*h.top)):(F=d+h.top-x.top,t.style.transformOrigin="top");let Et=h.left+s.width-w.width,Gn=h.left-x.left;s.width>w.width?q=(h.left-x.left)*-1:Et>0?q=Gn-Et:q=h.left-x.left,t.style.top=F+"px",t.style.left=q+"px",i&&(t.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static absolutePosition(t,o,i=!0){let r=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:this.getHiddenElementDimensions(t),s=r.height,d=r.width,h=o.offsetHeight,D=o.offsetWidth,y=o.getBoundingClientRect(),w=this.getWindowScrollTop(),A=this.getWindowScrollLeft(),x=this.getViewport(),F,q;y.top+h+s>x.height?(F=y.top+w-s,t.style.transformOrigin="bottom",F<0&&(F=w)):(F=h+y.top+w,t.style.transformOrigin="top"),y.left+d>x.width?q=Math.max(0,y.left+A+D-d):q=y.left+A,t.style.top=F+"px",t.style.left=q+"px",i&&(t.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static getParents(t,o=[]){return t.parentNode===null?o:this.getParents(t.parentNode,o.concat([t.parentNode]))}static getScrollableParents(t){let o=[];if(t){let i=this.getParents(t),r=/(auto|scroll)/,s=d=>{let h=window.getComputedStyle(d,null);return r.test(h.getPropertyValue("overflow"))||r.test(h.getPropertyValue("overflowX"))||r.test(h.getPropertyValue("overflowY"))};for(let d of i){let h=d.nodeType===1&&d.dataset.scrollselectors;if(h){let D=h.split(",");for(let y of D){let w=this.findSingle(d,y);w&&s(w)&&o.push(w)}}d.nodeType!==9&&s(d)&&o.push(d)}}return o}static getHiddenElementOuterHeight(t){t.style.visibility="hidden",t.style.display="block";let o=t.offsetHeight;return t.style.display="none",t.style.visibility="visible",o}static getHiddenElementOuterWidth(t){t.style.visibility="hidden",t.style.display="block";let o=t.offsetWidth;return t.style.display="none",t.style.visibility="visible",o}static getHiddenElementDimensions(t){let o={};return t.style.visibility="hidden",t.style.display="block",o.width=t.offsetWidth,o.height=t.offsetHeight,t.style.display="none",t.style.visibility="visible",o}static scrollInView(t,o){let i=getComputedStyle(t).getPropertyValue("borderTopWidth"),r=i?parseFloat(i):0,s=getComputedStyle(t).getPropertyValue("paddingTop"),d=s?parseFloat(s):0,h=t.getBoundingClientRect(),y=o.getBoundingClientRect().top+document.body.scrollTop-(h.top+document.body.scrollTop)-r-d,w=t.scrollTop,A=t.clientHeight,x=this.getOuterHeight(o);y<0?t.scrollTop=w+y:y+x>A&&(t.scrollTop=w+y-A+x)}static fadeIn(t,o){t.style.opacity=0;let i=+new Date,r=0,s=function(){r=+t.style.opacity.replace(",",".")+(new Date().getTime()-i)/o,t.style.opacity=r,i=+new Date,+r<1&&(window.requestAnimationFrame&&requestAnimationFrame(s)||setTimeout(s,16))};s()}static fadeOut(t,o){var i=1,r=50,s=o,d=r/s;let h=setInterval(()=>{i=i-d,i<=0&&(i=0,clearInterval(h)),t.style.opacity=i},r)}static getWindowScrollTop(){let t=document.documentElement;return(window.pageYOffset||t.scrollTop)-(t.clientTop||0)}static getWindowScrollLeft(){let t=document.documentElement;return(window.pageXOffset||t.scrollLeft)-(t.clientLeft||0)}static matches(t,o){var i=Element.prototype,r=i.matches||i.webkitMatchesSelector||i.mozMatchesSelector||i.msMatchesSelector||function(s){return[].indexOf.call(document.querySelectorAll(s),this)!==-1};return r.call(t,o)}static getOuterWidth(t,o){let i=t.offsetWidth;if(o){let r=getComputedStyle(t);i+=parseFloat(r.marginLeft)+parseFloat(r.marginRight)}return i}static getHorizontalPadding(t){let o=getComputedStyle(t);return parseFloat(o.paddingLeft)+parseFloat(o.paddingRight)}static getHorizontalMargin(t){let o=getComputedStyle(t);return parseFloat(o.marginLeft)+parseFloat(o.marginRight)}static innerWidth(t){let o=t.offsetWidth,i=getComputedStyle(t);return o+=parseFloat(i.paddingLeft)+parseFloat(i.paddingRight),o}static width(t){let o=t.offsetWidth,i=getComputedStyle(t);return o-=parseFloat(i.paddingLeft)+parseFloat(i.paddingRight),o}static getInnerHeight(t){let o=t.offsetHeight,i=getComputedStyle(t);return o+=parseFloat(i.paddingTop)+parseFloat(i.paddingBottom),o}static getOuterHeight(t,o){let i=t.offsetHeight;if(o){let r=getComputedStyle(t);i+=parseFloat(r.marginTop)+parseFloat(r.marginBottom)}return i}static getHeight(t){let o=t.offsetHeight,i=getComputedStyle(t);return o-=parseFloat(i.paddingTop)+parseFloat(i.paddingBottom)+parseFloat(i.borderTopWidth)+parseFloat(i.borderBottomWidth),o}static getWidth(t){let o=t.offsetWidth,i=getComputedStyle(t);return o-=parseFloat(i.paddingLeft)+parseFloat(i.paddingRight)+parseFloat(i.borderLeftWidth)+parseFloat(i.borderRightWidth),o}static getViewport(){let t=window,o=document,i=o.documentElement,r=o.getElementsByTagName("body")[0],s=t.innerWidth||i.clientWidth||r.clientWidth,d=t.innerHeight||i.clientHeight||r.clientHeight;return{width:s,height:d}}static getOffset(t){var o=t.getBoundingClientRect();return{top:o.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:o.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}static replaceElementWith(t,o){let i=t.parentNode;if(!i)throw"Can't replace element";return i.replaceChild(o,t)}static getUserAgent(){if(navigator&&this.isClient())return navigator.userAgent}static isIE(){var t=window.navigator.userAgent,o=t.indexOf("MSIE ");if(o>0)return!0;var i=t.indexOf("Trident/");if(i>0){var r=t.indexOf("rv:");return!0}var s=t.indexOf("Edge/");return s>0}static isIOS(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream}static isAndroid(){return/(android)/i.test(navigator.userAgent)}static isTouchDevice(){return"ontouchstart"in window||navigator.maxTouchPoints>0}static appendChild(t,o){if(this.isElement(o))o.appendChild(t);else if(o&&o.el&&o.el.nativeElement)o.el.nativeElement.appendChild(t);else throw"Cannot append "+o+" to "+t}static removeChild(t,o){if(this.isElement(o))o.removeChild(t);else if(o.el&&o.el.nativeElement)o.el.nativeElement.removeChild(t);else throw"Cannot remove "+t+" from "+o}static removeElement(t){"remove"in Element.prototype?t.remove():t.parentNode.removeChild(t)}static isElement(t){return typeof HTMLElement=="object"?t instanceof HTMLElement:t&&typeof t=="object"&&t!==null&&t.nodeType===1&&typeof t.nodeName=="string"}static calculateScrollbarWidth(t){if(t){let o=getComputedStyle(t);return t.offsetWidth-t.clientWidth-parseFloat(o.borderLeftWidth)-parseFloat(o.borderRightWidth)}else{if(this.calculatedScrollbarWidth!==null)return this.calculatedScrollbarWidth;let o=document.createElement("div");o.className="p-scrollbar-measure",document.body.appendChild(o);let i=o.offsetWidth-o.clientWidth;return document.body.removeChild(o),this.calculatedScrollbarWidth=i,i}}static calculateScrollbarHeight(){if(this.calculatedScrollbarHeight!==null)return this.calculatedScrollbarHeight;let t=document.createElement("div");t.className="p-scrollbar-measure",document.body.appendChild(t);let o=t.offsetHeight-t.clientHeight;return document.body.removeChild(t),this.calculatedScrollbarWidth=o,o}static invokeElementMethod(t,o,i){t[o].apply(t,i)}static clearSelection(){if(window.getSelection)window.getSelection().empty?window.getSelection().empty():window.getSelection().removeAllRanges&&window.getSelection().rangeCount>0&&window.getSelection().getRangeAt(0).getClientRects().length>0&&window.getSelection().removeAllRanges();else if(document.selection&&document.selection.empty)try{document.selection.empty()}catch{}}static getBrowser(){if(!this.browser){let t=this.resolveUserAgent();this.browser={},t.browser&&(this.browser[t.browser]=!0,this.browser.version=t.version),this.browser.chrome?this.browser.webkit=!0:this.browser.webkit&&(this.browser.safari=!0)}return this.browser}static resolveUserAgent(){let t=navigator.userAgent.toLowerCase(),o=/(chrome)[ \/]([\w.]+)/.exec(t)||/(webkit)[ \/]([\w.]+)/.exec(t)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(t)||/(msie) ([\w.]+)/.exec(t)||t.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(t)||[];return{browser:o[1]||"",version:o[2]||"0"}}static isInteger(t){return Number.isInteger?Number.isInteger(t):typeof t=="number"&&isFinite(t)&&Math.floor(t)===t}static isHidden(t){return!t||t.offsetParent===null}static isVisible(t){return t&&t.offsetParent!=null}static isExist(t){return t!==null&&typeof t<"u"&&t.nodeName&&t.parentNode}static focus(t,o){t&&document.activeElement!==t&&t.focus(o)}static getFocusableSelectorString(t=""){return`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        .p-inputtext:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        .p-button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t}`}static getFocusableElements(t,o=""){let i=this.find(t,this.getFocusableSelectorString(o)),r=[];for(let s of i){let d=getComputedStyle(s);this.isVisible(s)&&d.display!="none"&&d.visibility!="hidden"&&r.push(s)}return r}static getFocusableElement(t,o=""){let i=this.findSingle(t,this.getFocusableSelectorString(o));if(i){let r=getComputedStyle(i);if(this.isVisible(i)&&r.display!="none"&&r.visibility!="hidden")return i}return null}static getFirstFocusableElement(t,o=""){let i=this.getFocusableElements(t,o);return i.length>0?i[0]:null}static getLastFocusableElement(t,o){let i=this.getFocusableElements(t,o);return i.length>0?i[i.length-1]:null}static getNextFocusableElement(t,o=!1){let i=e.getFocusableElements(t),r=0;if(i&&i.length>0){let s=i.indexOf(i[0].ownerDocument.activeElement);o?s==-1||s===0?r=i.length-1:r=s-1:s!=-1&&s!==i.length-1&&(r=s+1)}return i[r]}static generateZIndex(){return this.zindex=this.zindex||999,++this.zindex}static getSelection(){return window.getSelection?window.getSelection().toString():document.getSelection?document.getSelection().toString():document.selection?document.selection.createRange().text:null}static getTargetElement(t,o){if(!t)return null;switch(t){case"document":return document;case"window":return window;case"@next":return o?.nextElementSibling;case"@prev":return o?.previousElementSibling;case"@parent":return o?.parentElement;case"@grandparent":return o?.parentElement.parentElement;default:let i=typeof t;if(i==="string")return document.querySelector(t);if(i==="object"&&t.hasOwnProperty("nativeElement"))return this.isExist(t.nativeElement)?t.nativeElement:void 0;let s=(d=>!!(d&&d.constructor&&d.call&&d.apply))(t)?t():t;return s&&s.nodeType===9||this.isExist(s)?s:null}}static isClient(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}static getAttribute(t,o){if(t){let i=t.getAttribute(o);return isNaN(i)?i==="true"||i==="false"?i==="true":i:+i}}static calculateBodyScrollbarWidth(){return window.innerWidth-document.documentElement.offsetWidth}static blockBodyScroll(t="p-overflow-hidden"){document.body.style.setProperty("--scrollbar-width",this.calculateBodyScrollbarWidth()+"px"),this.addClass(document.body,t)}static unblockBodyScroll(t="p-overflow-hidden"){document.body.style.removeProperty("--scrollbar-width"),this.removeClass(document.body,t)}static createElement(t,o={},...i){if(t){let r=document.createElement(t);return this.setAttributes(r,o),r.append(...i),r}}static setAttribute(t,o="",i){this.isElement(t)&&i!==null&&i!==void 0&&t.setAttribute(o,i)}static setAttributes(t,o={}){if(this.isElement(t)){let i=(r,s)=>{let d=t?.$attrs?.[r]?[t?.$attrs?.[r]]:[];return[s].flat().reduce((h,D)=>{if(D!=null){let y=typeof D;if(y==="string"||y==="number")h.push(D);else if(y==="object"){let w=Array.isArray(D)?i(r,D):Object.entries(D).map(([A,x])=>r==="style"&&(x||x===0)?`${A.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${x}`:x?A:void 0);h=w.length?h.concat(w.filter(A=>!!A)):h}}return h},d)};Object.entries(o).forEach(([r,s])=>{if(s!=null){let d=r.match(/^on(.+)/);d?t.addEventListener(d[1].toLowerCase(),s):r==="pBind"?this.setAttributes(t,s):(s=r==="class"?[...new Set(i("class",s))].join(" ").trim():r==="style"?i("style",s).join(";").trim():s,(t.$attrs=t.$attrs||{})&&(t.$attrs[r]=s),t.setAttribute(r,s))}})}}static isFocusableElement(t,o=""){return this.isElement(t)?t.matches(`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${o},
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${o},
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${o},
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${o},
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${o},
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${o},
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${o}`):!1}}return e})();var Nn=(()=>{class e extends ee{autofocus=!1;_autofocus=!1;focused=!1;platformId=O(It);document=O(jt);host=O(ye);ngAfterContentChecked(){this.autofocus===!1?this.host.nativeElement.removeAttribute("autofocus"):this.host.nativeElement.setAttribute("autofocus",!0),this.focused||this.autoFocus()}ngAfterViewChecked(){this.focused||this.autoFocus()}autoFocus(){Ut(this.platformId)&&this._autofocus&&setTimeout(()=>{let t=Pn.getFocusableElements(this.host?.nativeElement);t.length===0&&this.host.nativeElement.focus(),t.length>0&&t[0].focus(),this.focused=!0})}static \u0275fac=(()=>{let t;return function(i){return(t||(t=_(e)))(i||e)}})();static \u0275dir=V({type:e,selectors:[["","pAutoFocus",""]],inputs:{autofocus:[2,"autofocus","autofocus",b],_autofocus:[0,"pAutoFocus","_autofocus"]},features:[m]})}return e})();var Jo=({dt:e})=>`
.p-badge {
    display: inline-flex;
    border-radius: ${e("badge.border.radius")};
    justify-content: center;
    padding: ${e("badge.padding")};
    background: ${e("badge.primary.background")};
    color: ${e("badge.primary.color")};
    font-size: ${e("badge.font.size")};
    font-weight: ${e("badge.font.weight")};
    min-width: ${e("badge.min.width")};
    height: ${e("badge.height")};
    line-height: ${e("badge.height")};
}

.p-badge-dot {
    width: ${e("badge.dot.size")};
    min-width: ${e("badge.dot.size")};
    height: ${e("badge.dot.size")};
    border-radius: 50%;
    padding: 0;
}

.p-badge-circle {
    padding: 0;
    border-radius: 50%;
}

.p-badge-secondary {
    background: ${e("badge.secondary.background")};
    color: ${e("badge.secondary.color")};
}

.p-badge-success {
    background: ${e("badge.success.background")};
    color: ${e("badge.success.color")};
}

.p-badge-info {
    background: ${e("badge.info.background")};
    color: ${e("badge.info.color")};
}

.p-badge-warn {
    background: ${e("badge.warn.background")};
    color: ${e("badge.warn.color")};
}

.p-badge-danger {
    background: ${e("badge.danger.background")};
    color: ${e("badge.danger.color")};
}

.p-badge-contrast {
    background: ${e("badge.contrast.background")};
    color: ${e("badge.contrast.color")};
}

.p-badge-sm {
    font-size: ${e("badge.sm.font.size")};
    min-width: ${e("badge.sm.min.width")};
    height: ${e("badge.sm.height")};
    line-height: ${e("badge.sm.height")};
}

.p-badge-lg {
    font-size: ${e("badge.lg.font.size")};
    min-width: ${e("badge.lg.min.width")};
    height: ${e("badge.lg.height")};
    line-height: ${e("badge.lg.height")};
}

.p-badge-xl {
    font-size: ${e("badge.xl.font.size")};
    min-width: ${e("badge.xl.min.width")};
    height: ${e("badge.xl.height")};
    line-height: ${e("badge.xl.height")};
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
`,ei={root:({props:e,instance:n})=>["p-badge p-component",{"p-badge-circle":st(e.value)&&String(e.value).length===1,"p-badge-dot":_e(e.value)&&!n.$slots.default,"p-badge-sm":e.size==="small","p-badge-lg":e.size==="large","p-badge-xl":e.size==="xlarge","p-badge-info":e.severity==="info","p-badge-success":e.severity==="success","p-badge-warn":e.severity==="warn","p-badge-danger":e.severity==="danger","p-badge-secondary":e.severity==="secondary","p-badge-contrast":e.severity==="contrast"}]},Bn=(()=>{class e extends ue{name="badge";theme=Jo;classes=ei;static \u0275fac=(()=>{let t;return function(i){return(t||(t=_(e)))(i||e)}})();static \u0275prov=N({token:e,factory:e.\u0275fac})}return e})();var xt=(()=>{class e extends ee{styleClass=Q();style=Q();badgeSize=Q();size=Q();severity=Q();value=Q();badgeDisabled=Q(!1,{transform:b});_componentStyle=O(Bn);containerClass=J(()=>{let t="p-badge p-component";return st(this.value())&&String(this.value()).length===1&&(t+=" p-badge-circle"),this.badgeSize()==="large"?t+=" p-badge-lg":this.badgeSize()==="xlarge"?t+=" p-badge-xl":this.badgeSize()==="small"&&(t+=" p-badge-sm"),_e(this.value())&&(t+=" p-badge-dot"),this.styleClass()&&(t+=` ${this.styleClass()}`),this.severity()&&(t+=` p-badge-${this.severity()}`),t});static \u0275fac=(()=>{let t;return function(i){return(t||(t=_(e)))(i||e)}})();static \u0275cmp=E({type:e,selectors:[["p-badge"]],hostVars:6,hostBindings:function(o,i){o&2&&(Nt(i.style()),Y(i.containerClass()),Pt("display",i.badgeDisabled()?"none":null))},inputs:{styleClass:[1,"styleClass"],style:[1,"style"],badgeSize:[1,"badgeSize"],size:[1,"size"],severity:[1,"severity"],value:[1,"value"],badgeDisabled:[1,"badgeDisabled"]},features:[P([Bn]),m],decls:1,vars:1,template:function(o,i){o&1&&p(0),o&2&&Z(i.value())},dependencies:[W,j],encapsulation:2,changeDetection:0})}return e})(),Rn=(()=>{class e{static \u0275fac=function(o){return new(o||e)};static \u0275mod=R({type:e});static \u0275inj=B({imports:[xt,j,j]})}return e})();var ni=["content"],oi=["loadingicon"],ii=["icon"],ri=["*"],zn=e=>({class:e});function si(e,n){e&1&&re(0)}function ai(e,n){if(e&1&&f(0,"span",8),e&2){let t=g(3);a("ngClass",t.iconClass()),M("aria-hidden",!0)("data-pc-section","loadingicon")}}function li(e,n){if(e&1&&f(0,"SpinnerIcon",9),e&2){let t=g(3);a("styleClass",t.spinnerIconClass())("spin",!0),M("aria-hidden",!0)("data-pc-section","loadingicon")}}function ci(e,n){if(e&1&&(Ie(0),v(1,ai,1,3,"span",6)(2,li,1,4,"SpinnerIcon",7),Oe()),e&2){let t=g(2);u(),a("ngIf",t.loadingIcon),u(),a("ngIf",!t.loadingIcon)}}function ui(e,n){}function di(e,n){if(e&1&&v(0,ui,0,0,"ng-template",10),e&2){let t=g(2);a("ngIf",t.loadingIconTemplate||t._loadingIconTemplate)}}function pi(e,n){if(e&1&&(Ie(0),v(1,ci,3,2,"ng-container",2)(2,di,1,1,null,5),Oe()),e&2){let t=g();u(),a("ngIf",!t.loadingIconTemplate&&!t._loadingIconTemplate),u(),a("ngTemplateOutlet",t.loadingIconTemplate||t._loadingIconTemplate)("ngTemplateOutletContext",X(3,zn,t.iconClass()))}}function hi(e,n){if(e&1&&f(0,"span",8),e&2){let t=g(2);Y(t.icon),a("ngClass",t.iconClass()),M("data-pc-section","icon")}}function gi(e,n){}function fi(e,n){if(e&1&&v(0,gi,0,0,"ng-template",10),e&2){let t=g(2);a("ngIf",!t.icon&&(t.iconTemplate||t._iconTemplate))}}function mi(e,n){if(e&1&&(Ie(0),v(1,hi,1,4,"span",11)(2,fi,1,1,null,5),Oe()),e&2){let t=g();u(),a("ngIf",t.icon&&!t.iconTemplate&&!t._iconTemplate),u(),a("ngTemplateOutlet",t.iconTemplate||t._iconTemplate)("ngTemplateOutletContext",X(3,zn,t.iconClass()))}}function bi(e,n){if(e&1&&(l(0,"span",12),p(1),c()),e&2){let t=g();M("aria-hidden",t.icon&&!t.label)("data-pc-section","label"),u(),Z(t.label)}}function yi(e,n){if(e&1&&f(0,"p-badge",13),e&2){let t=g();a("value",t.badge)("severity",t.badgeSeverity)}}var vi=({dt:e})=>`
.p-button {
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    color: ${e("button.primary.color")};
    background: ${e("button.primary.background")};
    border: 1px solid ${e("button.primary.border.color")};
    padding-block: ${e("button.padding.y")};
    padding-inline: ${e("button.padding.x")};
    font-size: 1rem;
    font-family: inherit;
    font-feature-settings: inherit;
    transition: background ${e("button.transition.duration")}, color ${e("button.transition.duration")}, border-color ${e("button.transition.duration")},
            outline-color ${e("button.transition.duration")}, box-shadow ${e("button.transition.duration")};
    border-radius: ${e("button.border.radius")};
    outline-color: transparent;
    gap: ${e("button.gap")};
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
    width: ${e("button.icon.only.width")};
    padding-inline-start: 0;
    padding-inline-end: 0;
    gap: 0;
}

.p-button-icon-only.p-button-rounded {
    border-radius: 50%;
    height: ${e("button.icon.only.width")};
}

.p-button-icon-only .p-button-label {
    visibility: hidden;
    width: 0;
}

.p-button-sm {
    font-size: ${e("button.sm.font.size")};
    padding-block: ${e("button.sm.padding.y")};
    padding-inline: ${e("button.sm.padding.x")};
}

.p-button-sm .p-button-icon {
    font-size: ${e("button.sm.font.size")};
}

.p-button-sm.p-button-icon-only {
    width: ${e("button.sm.icon.only.width")};
}

.p-button-sm.p-button-icon-only.p-button-rounded {
    height: ${e("button.sm.icon.only.width")};
}

.p-button-lg {
    font-size: ${e("button.lg.font.size")};
    padding-block: ${e("button.lg.padding.y")};
    padding-inline: ${e("button.lg.padding.x")};
}

.p-button-lg .p-button-icon {
    font-size: ${e("button.lg.font.size")};
}

.p-button-lg.p-button-icon-only {
    width: ${e("button.lg.icon.only.width")};
}

.p-button-lg.p-button-icon-only.p-button-rounded {
    height: ${e("button.lg.icon.only.width")};
}

.p-button-vertical {
    flex-direction: column;
}

.p-button-label {
    font-weight: ${e("button.label.font.weight")};
}

.p-button-fluid {
    width: 100%;
}

.p-button-fluid.p-button-icon-only {
    width: ${e("button.icon.only.width")};
}

.p-button:not(:disabled):hover {
    background: ${e("button.primary.hover.background")};
    border: 1px solid ${e("button.primary.hover.border.color")};
    color: ${e("button.primary.hover.color")};
}

.p-button:not(:disabled):active {
    background: ${e("button.primary.active.background")};
    border: 1px solid ${e("button.primary.active.border.color")};
    color: ${e("button.primary.active.color")};
}

.p-button:focus-visible {
    box-shadow: ${e("button.primary.focus.ring.shadow")};
    outline: ${e("button.focus.ring.width")} ${e("button.focus.ring.style")} ${e("button.primary.focus.ring.color")};
    outline-offset: ${e("button.focus.ring.offset")};
}

.p-button .p-badge {
    min-width: ${e("button.badge.size")};
    height: ${e("button.badge.size")};
    line-height: ${e("button.badge.size")};
}

.p-button-raised {
    box-shadow: ${e("button.raised.shadow")};
}

.p-button-rounded {
    border-radius: ${e("button.rounded.border.radius")};
}

.p-button-secondary {
    background: ${e("button.secondary.background")};
    border: 1px solid ${e("button.secondary.border.color")};
    color: ${e("button.secondary.color")};
}

.p-button-secondary:not(:disabled):hover {
    background: ${e("button.secondary.hover.background")};
    border: 1px solid ${e("button.secondary.hover.border.color")};
    color: ${e("button.secondary.hover.color")};
}

.p-button-secondary:not(:disabled):active {
    background: ${e("button.secondary.active.background")};
    border: 1px solid ${e("button.secondary.active.border.color")};
    color: ${e("button.secondary.active.color")};
}

.p-button-secondary:focus-visible {
    outline-color: ${e("button.secondary.focus.ring.color")};
    box-shadow: ${e("button.secondary.focus.ring.shadow")};
}

.p-button-success {
    background: ${e("button.success.background")};
    border: 1px solid ${e("button.success.border.color")};
    color: ${e("button.success.color")};
}

.p-button-success:not(:disabled):hover {
    background: ${e("button.success.hover.background")};
    border: 1px solid ${e("button.success.hover.border.color")};
    color: ${e("button.success.hover.color")};
}

.p-button-success:not(:disabled):active {
    background: ${e("button.success.active.background")};
    border: 1px solid ${e("button.success.active.border.color")};
    color: ${e("button.success.active.color")};
}

.p-button-success:focus-visible {
    outline-color: ${e("button.success.focus.ring.color")};
    box-shadow: ${e("button.success.focus.ring.shadow")};
}

.p-button-info {
    background: ${e("button.info.background")};
    border: 1px solid ${e("button.info.border.color")};
    color: ${e("button.info.color")};
}

.p-button-info:not(:disabled):hover {
    background: ${e("button.info.hover.background")};
    border: 1px solid ${e("button.info.hover.border.color")};
    color: ${e("button.info.hover.color")};
}

.p-button-info:not(:disabled):active {
    background: ${e("button.info.active.background")};
    border: 1px solid ${e("button.info.active.border.color")};
    color: ${e("button.info.active.color")};
}

.p-button-info:focus-visible {
    outline-color: ${e("button.info.focus.ring.color")};
    box-shadow: ${e("button.info.focus.ring.shadow")};
}

.p-button-warn {
    background: ${e("button.warn.background")};
    border: 1px solid ${e("button.warn.border.color")};
    color: ${e("button.warn.color")};
}

.p-button-warn:not(:disabled):hover {
    background: ${e("button.warn.hover.background")};
    border: 1px solid ${e("button.warn.hover.border.color")};
    color: ${e("button.warn.hover.color")};
}

.p-button-warn:not(:disabled):active {
    background: ${e("button.warn.active.background")};
    border: 1px solid ${e("button.warn.active.border.color")};
    color: ${e("button.warn.active.color")};
}

.p-button-warn:focus-visible {
    outline-color: ${e("button.warn.focus.ring.color")};
    box-shadow: ${e("button.warn.focus.ring.shadow")};
}

.p-button-help {
    background: ${e("button.help.background")};
    border: 1px solid ${e("button.help.border.color")};
    color: ${e("button.help.color")};
}

.p-button-help:not(:disabled):hover {
    background: ${e("button.help.hover.background")};
    border: 1px solid ${e("button.help.hover.border.color")};
    color: ${e("button.help.hover.color")};
}

.p-button-help:not(:disabled):active {
    background: ${e("button.help.active.background")};
    border: 1px solid ${e("button.help.active.border.color")};
    color: ${e("button.help.active.color")};
}

.p-button-help:focus-visible {
    outline-color: ${e("button.help.focus.ring.color")};
    box-shadow: ${e("button.help.focus.ring.shadow")};
}

.p-button-danger {
    background: ${e("button.danger.background")};
    border: 1px solid ${e("button.danger.border.color")};
    color: ${e("button.danger.color")};
}

.p-button-danger:not(:disabled):hover {
    background: ${e("button.danger.hover.background")};
    border: 1px solid ${e("button.danger.hover.border.color")};
    color: ${e("button.danger.hover.color")};
}

.p-button-danger:not(:disabled):active {
    background: ${e("button.danger.active.background")};
    border: 1px solid ${e("button.danger.active.border.color")};
    color: ${e("button.danger.active.color")};
}

.p-button-danger:focus-visible {
    outline-color: ${e("button.danger.focus.ring.color")};
    box-shadow: ${e("button.danger.focus.ring.shadow")};
}

.p-button-contrast {
    background: ${e("button.contrast.background")};
    border: 1px solid ${e("button.contrast.border.color")};
    color: ${e("button.contrast.color")};
}

.p-button-contrast:not(:disabled):hover {
    background: ${e("button.contrast.hover.background")};
    border: 1px solid ${e("button.contrast.hover.border.color")};
    color: ${e("button.contrast.hover.color")};
}

.p-button-contrast:not(:disabled):active {
    background: ${e("button.contrast.active.background")};
    border: 1px solid ${e("button.contrast.active.border.color")};
    color: ${e("button.contrast.active.color")};
}

.p-button-contrast:focus-visible {
    outline-color: ${e("button.contrast.focus.ring.color")};
    box-shadow: ${e("button.contrast.focus.ring.shadow")};
}

.p-button-outlined {
    background: transparent;
    border-color: ${e("button.outlined.primary.border.color")};
    color: ${e("button.outlined.primary.color")};
}

.p-button-outlined:not(:disabled):hover {
    background: ${e("button.outlined.primary.hover.background")};
    border-color: ${e("button.outlined.primary.border.color")};
    color: ${e("button.outlined.primary.color")};
}

.p-button-outlined:not(:disabled):active {
    background: ${e("button.outlined.primary.active.background")};
    border-color: ${e("button.outlined.primary.border.color")};
    color: ${e("button.outlined.primary.color")};
}

.p-button-outlined.p-button-secondary {
    border-color: ${e("button.outlined.secondary.border.color")};
    color: ${e("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-secondary:not(:disabled):hover {
    background: ${e("button.outlined.secondary.hover.background")};
    border-color: ${e("button.outlined.secondary.border.color")};
    color: ${e("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-secondary:not(:disabled):active {
    background: ${e("button.outlined.secondary.active.background")};
    border-color: ${e("button.outlined.secondary.border.color")};
    color: ${e("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-success {
    border-color: ${e("button.outlined.success.border.color")};
    color: ${e("button.outlined.success.color")};
}

.p-button-outlined.p-button-success:not(:disabled):hover {
    background: ${e("button.outlined.success.hover.background")};
    border-color: ${e("button.outlined.success.border.color")};
    color: ${e("button.outlined.success.color")};
}

.p-button-outlined.p-button-success:not(:disabled):active {
    background: ${e("button.outlined.success.active.background")};
    border-color: ${e("button.outlined.success.border.color")};
    color: ${e("button.outlined.success.color")};
}

.p-button-outlined.p-button-info {
    border-color: ${e("button.outlined.info.border.color")};
    color: ${e("button.outlined.info.color")};
}

.p-button-outlined.p-button-info:not(:disabled):hover {
    background: ${e("button.outlined.info.hover.background")};
    border-color: ${e("button.outlined.info.border.color")};
    color: ${e("button.outlined.info.color")};
}

.p-button-outlined.p-button-info:not(:disabled):active {
    background: ${e("button.outlined.info.active.background")};
    border-color: ${e("button.outlined.info.border.color")};
    color: ${e("button.outlined.info.color")};
}

.p-button-outlined.p-button-warn {
    border-color: ${e("button.outlined.warn.border.color")};
    color: ${e("button.outlined.warn.color")};
}

.p-button-outlined.p-button-warn:not(:disabled):hover {
    background: ${e("button.outlined.warn.hover.background")};
    border-color: ${e("button.outlined.warn.border.color")};
    color: ${e("button.outlined.warn.color")};
}

.p-button-outlined.p-button-warn:not(:disabled):active {
    background: ${e("button.outlined.warn.active.background")};
    border-color: ${e("button.outlined.warn.border.color")};
    color: ${e("button.outlined.warn.color")};
}

.p-button-outlined.p-button-help {
    border-color: ${e("button.outlined.help.border.color")};
    color: ${e("button.outlined.help.color")};
}

.p-button-outlined.p-button-help:not(:disabled):hover {
    background: ${e("button.outlined.help.hover.background")};
    border-color: ${e("button.outlined.help.border.color")};
    color: ${e("button.outlined.help.color")};
}

.p-button-outlined.p-button-help:not(:disabled):active {
    background: ${e("button.outlined.help.active.background")};
    border-color: ${e("button.outlined.help.border.color")};
    color: ${e("button.outlined.help.color")};
}

.p-button-outlined.p-button-danger {
    border-color: ${e("button.outlined.danger.border.color")};
    color: ${e("button.outlined.danger.color")};
}

.p-button-outlined.p-button-danger:not(:disabled):hover {
    background: ${e("button.outlined.danger.hover.background")};
    border-color: ${e("button.outlined.danger.border.color")};
    color: ${e("button.outlined.danger.color")};
}

.p-button-outlined.p-button-danger:not(:disabled):active {
    background: ${e("button.outlined.danger.active.background")};
    border-color: ${e("button.outlined.danger.border.color")};
    color: ${e("button.outlined.danger.color")};
}

.p-button-outlined.p-button-contrast {
    border-color: ${e("button.outlined.contrast.border.color")};
    color: ${e("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-contrast:not(:disabled):hover {
    background: ${e("button.outlined.contrast.hover.background")};
    border-color: ${e("button.outlined.contrast.border.color")};
    color: ${e("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-contrast:not(:disabled):active {
    background: ${e("button.outlined.contrast.active.background")};
    border-color: ${e("button.outlined.contrast.border.color")};
    color: ${e("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-plain {
    border-color: ${e("button.outlined.plain.border.color")};
    color: ${e("button.outlined.plain.color")};
}

.p-button-outlined.p-button-plain:not(:disabled):hover {
    background: ${e("button.outlined.plain.hover.background")};
    border-color: ${e("button.outlined.plain.border.color")};
    color: ${e("button.outlined.plain.color")};
}

.p-button-outlined.p-button-plain:not(:disabled):active {
    background: ${e("button.outlined.plain.active.background")};
    border-color: ${e("button.outlined.plain.border.color")};
    color: ${e("button.outlined.plain.color")};
}

.p-button-text {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.primary.color")};
}

.p-button-text:not(:disabled):hover {
    background: ${e("button.text.primary.hover.background")};
    border-color: transparent;
    color: ${e("button.text.primary.color")};
}

.p-button-text:not(:disabled):active {
    background: ${e("button.text.primary.active.background")};
    border-color: transparent;
    color: ${e("button.text.primary.color")};
}

.p-button-text.p-button-secondary {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.secondary.color")};
}

.p-button-text.p-button-secondary:not(:disabled):hover {
    background: ${e("button.text.secondary.hover.background")};
    border-color: transparent;
    color: ${e("button.text.secondary.color")};
}

.p-button-text.p-button-secondary:not(:disabled):active {
    background: ${e("button.text.secondary.active.background")};
    border-color: transparent;
    color: ${e("button.text.secondary.color")};
}

.p-button-text.p-button-success {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.success.color")};
}

.p-button-text.p-button-success:not(:disabled):hover {
    background: ${e("button.text.success.hover.background")};
    border-color: transparent;
    color: ${e("button.text.success.color")};
}

.p-button-text.p-button-success:not(:disabled):active {
    background: ${e("button.text.success.active.background")};
    border-color: transparent;
    color: ${e("button.text.success.color")};
}

.p-button-text.p-button-info {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.info.color")};
}

.p-button-text.p-button-info:not(:disabled):hover {
    background: ${e("button.text.info.hover.background")};
    border-color: transparent;
    color: ${e("button.text.info.color")};
}

.p-button-text.p-button-info:not(:disabled):active {
    background: ${e("button.text.info.active.background")};
    border-color: transparent;
    color: ${e("button.text.info.color")};
}

.p-button-text.p-button-warn {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.warn.color")};
}

.p-button-text.p-button-warn:not(:disabled):hover {
    background: ${e("button.text.warn.hover.background")};
    border-color: transparent;
    color: ${e("button.text.warn.color")};
}

.p-button-text.p-button-warn:not(:disabled):active {
    background: ${e("button.text.warn.active.background")};
    border-color: transparent;
    color: ${e("button.text.warn.color")};
}

.p-button-text.p-button-help {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.help.color")};
}

.p-button-text.p-button-help:not(:disabled):hover {
    background: ${e("button.text.help.hover.background")};
    border-color: transparent;
    color: ${e("button.text.help.color")};
}

.p-button-text.p-button-help:not(:disabled):active {
    background: ${e("button.text.help.active.background")};
    border-color: transparent;
    color: ${e("button.text.help.color")};
}

.p-button-text.p-button-danger {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.danger.color")};
}

.p-button-text.p-button-danger:not(:disabled):hover {
    background: ${e("button.text.danger.hover.background")};
    border-color: transparent;
    color: ${e("button.text.danger.color")};
}

.p-button-text.p-button-danger:not(:disabled):active {
    background: ${e("button.text.danger.active.background")};
    border-color: transparent;
    color: ${e("button.text.danger.color")};
}

.p-button-text.p-button-plain {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.plain.color")};
}

.p-button-text.p-button-plain:not(:disabled):hover {
    background: ${e("button.text.plain.hover.background")};
    border-color: transparent;
    color: ${e("button.text.plain.color")};
}

.p-button-text.p-button-plain:not(:disabled):active {
    background: ${e("button.text.plain.active.background")};
    border-color: transparent;
    color: ${e("button.text.plain.color")};
}

.p-button-text.p-button-contrast {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.contrast.color")};
}

.p-button-text.p-button-contrast:not(:disabled):hover {
    background: ${e("button.text.contrast.hover.background")};
    border-color: transparent;
    color: ${e("button.text.contrast.color")};
}

.p-button-text.p-button-contrast:not(:disabled):active {
    background: ${e("button.text.contrast.active.background")};
    border-color: transparent;
    color: ${e("button.text.contrast.color")};
}

.p-button-link {
    background: transparent;
    border-color: transparent;
    color: ${e("button.link.color")};
}

.p-button-link:not(:disabled):hover {
    background: transparent;
    border-color: transparent;
    color: ${e("button.link.hover.color")};
}

.p-button-link:not(:disabled):hover .p-button-label {
    text-decoration: underline;
}

.p-button-link:not(:disabled):active {
    background: transparent;
    border-color: transparent;
    color: ${e("button.link.active.color")};
}

/* For PrimeNG */
.p-button-icon-right {
    order: 1;
}

p-button[iconpos='right'] spinnericon {
    order: 1;
}
`,_i={root:({instance:e,props:n})=>["p-button p-component",{"p-button-icon-only":e.hasIcon&&!n.label&&!n.badge,"p-button-vertical":(n.iconPos==="top"||n.iconPos==="bottom")&&n.label,"p-button-loading":n.loading,"p-button-link":n.link,[`p-button-${n.severity}`]:n.severity,"p-button-raised":n.raised,"p-button-rounded":n.rounded,"p-button-text":n.text,"p-button-outlined":n.outlined,"p-button-sm":n.size==="small","p-button-lg":n.size==="large","p-button-plain":n.plain,"p-button-fluid":n.fluid}],loadingIcon:"p-button-loading-icon",icon:({props:e})=>["p-button-icon",{[`p-button-icon-${e.iconPos}`]:e.label}],label:"p-button-label"},Ln=(()=>{class e extends ue{name="button";theme=vi;classes=_i;static \u0275fac=(()=>{let t;return function(i){return(t||(t=_(e)))(i||e)}})();static \u0275prov=N({token:e,factory:e.\u0275fac})}return e})();var Ci=(()=>{class e extends ee{type="button";iconPos="left";icon;badge;label;disabled;loading=!1;loadingIcon;raised=!1;rounded=!1;text=!1;plain=!1;severity;outlined=!1;link=!1;tabindex;size;variant;style;styleClass;badgeClass;badgeSeverity="secondary";ariaLabel;autofocus;fluid;onClick=new k;onFocus=new k;onBlur=new k;contentTemplate;loadingIconTemplate;iconTemplate;_buttonProps;get buttonProps(){return this._buttonProps}set buttonProps(t){this._buttonProps=t,t&&typeof t=="object"&&Object.entries(t).forEach(([o,i])=>this[`_${o}`]!==i&&(this[`_${o}`]=i))}get hasFluid(){let o=this.el.nativeElement.closest("p-fluid");return _e(this.fluid)?!!o:this.fluid}_componentStyle=O(Ln);templates;_contentTemplate;_iconTemplate;_loadingIconTemplate;ngAfterContentInit(){this.templates?.forEach(t=>{switch(t.getType()){case"content":this._contentTemplate=t.template;break;case"icon":this._iconTemplate=t.template;break;case"loadingicon":this._loadingIconTemplate=t.template;break;default:this._contentTemplate=t.template;break}})}ngOnChanges(t){super.ngOnChanges(t);let{buttonProps:o}=t;if(o){let i=o.currentValue;for(let r in i)this[r]=i[r]}}spinnerIconClass(){return Object.entries(this.iconClass()).filter(([,t])=>!!t).reduce((t,[o])=>t+` ${o}`,"p-button-loading-icon")}iconClass(){return{[`p-button-loading-icon pi-spin ${this.loadingIcon??""}`]:this.loading,"p-button-icon":!0,"p-button-icon-left":this.iconPos==="left"&&this.label,"p-button-icon-right":this.iconPos==="right"&&this.label,"p-button-icon-top":this.iconPos==="top"&&this.label,"p-button-icon-bottom":this.iconPos==="bottom"&&this.label}}get buttonClass(){return{"p-button p-component":!0,"p-button-icon-only":(this.icon||this.iconTemplate||this._iconTemplate||this.loadingIcon||this.loadingIconTemplate||this._loadingIconTemplate)&&!this.label,"p-button-vertical":(this.iconPos==="top"||this.iconPos==="bottom")&&this.label,"p-button-loading":this.loading,"p-button-loading-label-only":this.loading&&!this.icon&&this.label&&!this.loadingIcon&&this.iconPos==="left","p-button-link":this.link,[`p-button-${this.severity}`]:this.severity,"p-button-raised":this.raised,"p-button-rounded":this.rounded,"p-button-text":this.text||this.variant=="text","p-button-outlined":this.outlined||this.variant=="outlined","p-button-sm":this.size==="small","p-button-lg":this.size==="large","p-button-plain":this.plain,"p-button-fluid":this.hasFluid,[`${this.styleClass}`]:this.styleClass}}static \u0275fac=(()=>{let t;return function(i){return(t||(t=_(e)))(i||e)}})();static \u0275cmp=E({type:e,selectors:[["p-button"]],contentQueries:function(o,i,r){if(o&1&&(L(r,ni,5),L(r,oi,5),L(r,ii,5),L(r,Re,4)),o&2){let s;z(s=H())&&(i.contentTemplate=s.first),z(s=H())&&(i.loadingIconTemplate=s.first),z(s=H())&&(i.iconTemplate=s.first),z(s=H())&&(i.templates=s)}},inputs:{type:"type",iconPos:"iconPos",icon:"icon",badge:"badge",label:"label",disabled:[2,"disabled","disabled",b],loading:[2,"loading","loading",b],loadingIcon:"loadingIcon",raised:[2,"raised","raised",b],rounded:[2,"rounded","rounded",b],text:[2,"text","text",b],plain:[2,"plain","plain",b],severity:"severity",outlined:[2,"outlined","outlined",b],link:[2,"link","link",b],tabindex:[2,"tabindex","tabindex",Ht],size:"size",variant:"variant",style:"style",styleClass:"styleClass",badgeClass:"badgeClass",badgeSeverity:"badgeSeverity",ariaLabel:"ariaLabel",autofocus:[2,"autofocus","autofocus",b],fluid:[2,"fluid","fluid",b],buttonProps:"buttonProps"},outputs:{onClick:"onClick",onFocus:"onFocus",onBlur:"onBlur"},features:[P([Ln]),m,oe],ngContentSelectors:ri,decls:7,vars:14,consts:[["pRipple","",3,"click","focus","blur","ngStyle","disabled","ngClass","pAutoFocus"],[4,"ngTemplateOutlet"],[4,"ngIf"],["class","p-button-label",4,"ngIf"],[3,"value","severity",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"ngClass",4,"ngIf"],[3,"styleClass","spin",4,"ngIf"],[3,"ngClass"],[3,"styleClass","spin"],[3,"ngIf"],[3,"class","ngClass",4,"ngIf"],[1,"p-button-label"],[3,"value","severity"]],template:function(o,i){o&1&&(ke(),l(0,"button",0),T("click",function(s){return i.onClick.emit(s)})("focus",function(s){return i.onFocus.emit(s)})("blur",function(s){return i.onBlur.emit(s)}),Te(1),v(2,si,1,0,"ng-container",1)(3,pi,3,5,"ng-container",2)(4,mi,3,5,"ng-container",2)(5,bi,2,3,"span",3)(6,yi,1,2,"p-badge",4),c()),o&2&&(a("ngStyle",i.style)("disabled",i.disabled||i.loading)("ngClass",i.buttonClass)("pAutoFocus",i.autofocus),M("type",i.type)("aria-label",i.ariaLabel)("data-pc-name","button")("data-pc-section","root")("tabindex",i.tabindex),u(2),a("ngTemplateOutlet",i.contentTemplate||i._contentTemplate),u(),a("ngIf",i.loading),u(),a("ngIf",!i.loading),u(),a("ngIf",!i.contentTemplate&&!i._contentTemplate&&i.label),u(),a("ngIf",!i.contentTemplate&&!i._contentTemplate&&i.badge))},dependencies:[W,ae,Ne,Be,Gt,ze,Nn,In,Rn,xt,j],encapsulation:2,changeDetection:0})}return e})(),Hn=(()=>{class e{static \u0275fac=function(o){return new(o||e)};static \u0275mod=R({type:e});static \u0275inj=B({imports:[W,Ci,j,j]})}return e})();var et=class e{constructor(n){this._http=n}apiServiceUrl=de.formspreeApi;sendFormData(n){return this._http.post(this.apiServiceUrl,n,{headers:{Accept:"application/json"}})}static \u0275fac=function(t){return new(t||e)(St(Wt))};static \u0275prov=N({token:e,factory:e.\u0275fac,providedIn:"root"})};var xi=e=>({"hidden-footer":e}),Ei=()=>[""],Mi=()=>["about"],Vi=()=>["releases"],Di=()=>["events"],$i=()=>["mixtape-archive"];function Si(e,n){e&1&&(l(0,"button",16),p(1,"Sending..."),c())}function Ai(e,n){if(e&1&&(l(0,"button",17),p(1," Subscribe "),c()),e&2){let t=g();a("disabled",t.fgNewsletter.invalid)}}function Fi(e,n){if(e&1&&(l(0,"p-message",21),p(1),c()),e&2){let t=g();a("life",3e3)("severity",t.messageForm.severity),u(),Z(t.messageForm.message)}}var tt=class e{constructor(n){this._formsspreeService=n;this.fgNewsletter=new me({email:new Sn().control("",[Me.required,Me.email])})}uriAssetsImages=de.uriAssetsImages;emailCopy="neanchepersognorecords@gmail.com";isHidden=!1;lastScrollTop=0;messageForm={};fgNewsletter;isLoadingForm=!1;visibleMessageForm=U(!1);ngOnInit(){this.visibleMessageForm.set(!1)}onWindowScroll(){let n=window.scrollY||document.documentElement.scrollTop,t=document.documentElement.scrollHeight-window.innerHeight;if(t<=0){this.isHidden=!1;return}n>this.lastScrollTop?this.isHidden=!0:n<this.lastScrollTop&&n<t-50&&(this.isHidden=!1),this.lastScrollTop=n<=0?0:n}onSubmitForm(){if(this.isLoadingForm=!0,this.visibleMessageForm.set(!1),this.fgNewsletter.valid){let n=new FormData;n.append("email",this.fgNewsletter.value.email),this._formsspreeService.sendFormData(n).subscribe({next:t=>{console.log("ok: ",t),this.fgNewsletter.reset(),this.isLoadingForm=!1,this.messageForm={severity:"success",message:"Ti sei iscritto con successo!"}},error:t=>{this.fgNewsletter.reset(),console.error("Error submitting form: ",t),this.messageForm={severity:"error",message:"Oops! Qualcosa \xE8 andato male, riprova pi\xF9 tardi."},this.isLoadingForm=!1,this.visibleMessageForm.set(!0)}})}}onCopyEmail(){navigator.clipboard.writeText("neanchepersognorecords@gmail.com").then(()=>{this.emailCopy="Copied to clipboard!"}).catch(t=>{console.error("Failed to copy email: ",t)})}static \u0275fac=function(t){return new(t||e)(C(et))};static \u0275cmp=E({type:e,selectors:[["app-footer"]],hostBindings:function(t,o){t&1&&T("scroll",function(){return o.onWindowScroll()},!1,kt)},decls:34,vars:18,consts:[[1,"floating-footer",3,"ngClass"],[1,"bottom-logo-container"],[3,"routerLink"],["alt","Logo Neanche Per Sogno",1,"bottom-logo",3,"src"],[1,"logo-credit"],["href","https://www.muah.studio","target","_blank","rel","noopener noreferrer"],[1,"bottom-links-container"],[1,"bottom-links"],[1,"bottom-links-row"],["routerLinkActive","active",3,"routerLink"],["href","https://nxsrecords.bandcamp.com/merch","target","_blank","rel","noopener noreferrer"],[1,"copy-email",3,"click"],[1,"newsletter-title"],[1,"newsletter-wrapper"],["id","newsletter-form",1,"subscribe-box",3,"submit","formGroup"],["formControlName","email","type","email","id","email","name","email","placeholder","Email address","required",""],["type","submit"],["type","submit",3,"disabled"],["id","form-status",2,"margin-left","10px","font-size","0.7rem","color","rgb(127, 127, 127)"],[1,"messagge-form"],[1,"card","flex","flex-col"],["closable","",3,"life","severity"]],template:function(t,o){t&1&&(l(0,"div",0)(1,"div",1)(2,"a",2),f(3,"img",3),c(),l(4,"div",4),p(5," EST. 2022, Logo by "),l(6,"a",5),p(7,"Muah! Studio"),c()()(),l(8,"div",6)(9,"div",7)(10,"div",8)(11,"a",9),p(12,"About"),c(),l(13,"a",9),p(14,"Releases"),c(),l(15,"a",9),p(16,"Events"),c(),l(17,"a",9),p(18,"Mixtape Archive"),c(),l(19,"a",10),p(20,"Buy"),c()()(),l(21,"div",11),T("click",function(){return o.onCopyEmail()}),p(22),c(),l(23,"p",12),p(24,"Newsletter:"),c(),l(25,"div",13)(26,"form",14),T("submit",function(){return o.onSubmitForm()}),f(27,"input",15),v(28,Si,2,0,"button",16)(29,Ai,2,1,"button",17),f(30,"span",18),c(),l(31,"div",19)(32,"div",20),v(33,Fi,2,3,"p-message",21),c()()()()()),t&2&&(a("ngClass",X(11,xi,o.isHidden)),u(2),a("routerLink",se(13,Ei)),u(),a("src",o.uriAssetsImages+"/nxs-logo.png",Ae),u(8),a("routerLink",se(14,Mi)),u(2),a("routerLink",se(15,Vi)),u(2),a("routerLink",se(16,Di)),u(2),a("routerLink",se(17,$i)),u(5),Rt(" ",o.emailCopy," "),u(4),a("formGroup",o.fgNewsletter),u(2),S(o.isLoadingForm?28:29),u(5),S(o.visibleMessageForm()?33:-1))},dependencies:[Zt,Qt,Yt,ae,An,Vn,Xe,Cn,wn,wt,Fn,_t,Ct,Tn,Hn],styles:[".floating-footer[_ngcontent-%COMP%]{position:fixed;bottom:25px;left:0;width:100%;background:#fff;display:flex;justify-content:space-between;align-items:center;padding:30px 60px;z-index:9998;transition:transform .8s ease}.bottom-logo-container[_ngcontent-%COMP%]{display:flex;justify-content:center;flex-direction:column;align-items:center;line-height:1.2;text-align:center}.bottom-logo[_ngcontent-%COMP%]{max-width:220px;height:auto;opacity:1;-webkit-user-select:none;user-select:none;cursor:pointer}.logo-credit[_ngcontent-%COMP%]{margin-top:6px;font-size:.6rem;color:#ccc;font-family:Helvetica,Arial,sans-serif;text-transform:none;line-height:1.2;text-align:left}.logo-credit[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#ccc;text-decoration:none}.logo-credit[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{text-decoration:underline}.bottom-links-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-start;font-size:.7rem;font-weight:300;color:#787878;font-family:Helvetica,Arial,sans-serif;text-align:left;line-height:.8;max-width:360px;gap:12px}.bottom-links[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:5px}.bottom-links-row[_ngcontent-%COMP%]{display:flex;gap:16px;justify-content:flex-start;flex-wrap:wrap;line-height:.8}.bottom-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#787878;text-decoration:none;transition:color .3s ease;font-size:.7rem;line-height:.8}.bottom-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .bottom-links[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]{color:#000}.copy-email[_ngcontent-%COMP%]{cursor:pointer;text-decoration:underline;font-size:.7rem;margin-bottom:10px;color:#787878;line-height:.8;text-align:left}.newsletter-wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:column;line-height:.8;text-align:left}.subscribe-box[_ngcontent-%COMP%]{display:flex;gap:8px;align-items:center}.subscribe-box[_ngcontent-%COMP%]   input[type=email][_ngcontent-%COMP%]{padding:5px 8px;font-size:.7rem;border:1px solid #777;border-radius:0;outline:none;width:180px;background-color:transparent;color:#000}.subscribe-box[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background:none;border:none;color:#787878;font-size:.7rem;cursor:pointer;padding:6px 12px}.subscribe-box[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{text-decoration:underline}@media (max-width: 768px){.floating-footer[_ngcontent-%COMP%]{bottom:25px;padding:10px;flex-direction:row;justify-content:center;align-items:flex-start;gap:10px;width:100%}.bottom-logo-container[_ngcontent-%COMP%]{transform:translate(15px)}.bottom-links-container[_ngcontent-%COMP%]{max-width:45vw;display:flex;flex-direction:column;line-height:.8;transform:translate(15px) translateY(5px)}.bottom-logo-container[_ngcontent-%COMP%]{margin-right:auto;justify-content:center}.bottom-links-container[_ngcontent-%COMP%]{margin-left:auto}.bottom-logo[_ngcontent-%COMP%]{max-width:140px}.logo-credit[_ngcontent-%COMP%]{font-size:.55rem;color:silver;text-transform:none;margin-top:4px;line-height:1.2;text-align:left}.bottom-links-row[_ngcontent-%COMP%]{justify-content:flex-start;gap:12px;flex-wrap:wrap;line-height:.8}.copy-email[_ngcontent-%COMP%]{font-size:.65rem;margin-top:2px;margin-bottom:2px;line-height:.8;text-align:left}.newsletter-wrapper[_ngcontent-%COMP%]{width:100%;line-height:.8;text-align:left}.subscribe-box[_ngcontent-%COMP%]{justify-content:flex-start;gap:0px;flex-wrap:nowrap}.subscribe-box[_ngcontent-%COMP%]   input[type=email][_ngcontent-%COMP%]{width:140px;padding:2px 6px;font-size:.65rem}.subscribe-box[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{font-size:.65rem;padding:4px 10px}#dynamic-content-container[_ngcontent-%COMP%]{padding:5px;margin:5}#dynamic-content-container[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{border:none}}@media (max-width: 580px){.bottom-logo-container[_ngcontent-%COMP%]{max-width:100%;margin:0}.subscribe-box[_ngcontent-%COMP%]{justify-content:space-between!important}.bottom-links-container[_ngcontent-%COMP%]{max-width:52vw;margin-left:auto!important;gap:6px}.bottom-links-row[_ngcontent-%COMP%]{gap:10px 30px!important}.floating-footer[_ngcontent-%COMP%]{gap:.75rem;padding:10px!important;justify-content:space-between}}@media (min-width: 769px){.bottom-links-container[_ngcontent-%COMP%]{line-height:.8;transform:translateY(5px)}.bottom-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:inline-block;transform:translateY(4px)}.copy-email[_ngcontent-%COMP%]{transform:translateY(6px)}}.hidden-footer[_ngcontent-%COMP%]{transform:translateY(100%)}"]})};var nt=class e{static \u0275fac=function(t){return new(t||e)};static \u0275cmp=E({type:e,selectors:[["app-scroll-bar-bottom"]],decls:40,vars:0,consts:[[1,"scroll-bar","bottom"],[1,"scroll-content"],[1,"scroll-wrapper"],["href","https://www.thelisteners.it/eventi/the-listeners-ripple","target","_blank","rel","noopener noreferrer",2,"color","white","text-decoration","none"],["aria-hidden","true",1,"scroll-wrapper"]],template:function(t,o){t&1&&(l(0,"div",0)(1,"div",1)(2,"div",2)(3,"span")(4,"a",3),p(5,"UPCOMING | NEANCHE PER SOGNO VOL.3 | VAL DI CEMBRA & TRENTO | OCT 8 \u2013 NOV 8"),c()(),l(6,"span")(7,"a",3),p(8,"UPCOMING | NEANCHE PER SOGNO VOL.3 | VAL DI CEMBRA & TRENTO | OCT 8 \u2013 NOV 8"),c()(),l(9,"span")(10,"a",3),p(11,"UPCOMING | NEANCHE PER SOGNO VOL.3 | VAL DI CEMBRA & TRENTO | OCT 8 \u2013 NOV 8"),c()(),l(12,"span")(13,"a",3),p(14,"UPCOMING | NEANCHE PER SOGNO VOL.3 | VAL DI CEMBRA & TRENTO | OCT 8 \u2013 NOV 8"),c()(),l(15,"span")(16,"a",3),p(17,"UPCOMING | NEANCHE PER SOGNO VOL.3 | VAL DI CEMBRA & TRENTO | OCT 8 \u2013 NOV 8"),c()(),l(18,"span")(19,"a",3),p(20,"UPCOMING | NEANCHE PER SOGNO VOL.3 | VAL DI CEMBRA & TRENTO | OCT 8 \u2013 NOV 8"),c()()(),l(21,"div",4)(22,"span")(23,"a",3),p(24,"UPCOMING | NEANCHE PER SOGNO VOL.3 | VAL DI CEMBRA & TRENTO | OCT 8 \u2013 NOV 8"),c()(),l(25,"span")(26,"a",3),p(27,"UPCOMING | NEANCHE PER SOGNO VOL.3 | VAL DI CEMBRA & TRENTO | OCT 8 \u2013 NOV 8"),c()(),l(28,"span")(29,"a",3),p(30,"UPCOMING | NEANCHE PER SOGNO VOL.3 | VAL DI CEMBRA & TRENTO | OCT 8 \u2013 NOV 8"),c()(),l(31,"span")(32,"a",3),p(33,"UPCOMING | NEANCHE PER SOGNO VOL.3 | VAL DI CEMBRA & TRENTO | OCT 8 \u2013 NOV 8"),c()(),l(34,"span")(35,"a",3),p(36,"UPCOMING | NEANCHE PER SOGNO VOL.3 | VAL DI CEMBRA & TRENTO | OCT 8 \u2013 NOV 8"),c()(),l(37,"span")(38,"a",3),p(39,"UPCOMING | NEANCHE PER SOGNO VOL.3 | VAL DI CEMBRA & TRENTO | OCT 8 \u2013 NOV 8"),c()()()()())},styles:[".scroll-bar[_ngcontent-%COMP%]{width:100%;height:25px;background:#000;overflow:hidden;display:flex;align-items:center;position:fixed;left:0;z-index:9999}.scroll-bar.bottom[_ngcontent-%COMP%]{bottom:0}.scroll-bar[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#fff;font-size:.8rem;font-weight:700;white-space:nowrap;padding-right:2rem}.scroll-bar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{line-height:25px}.scroll-content[_ngcontent-%COMP%]{display:inline-block;white-space:nowrap}.scroll-wrapper[_ngcontent-%COMP%]{display:inline-block;white-space:nowrap;animation:_ngcontent-%COMP%_scroll-left 60s linear infinite}@keyframes _ngcontent-%COMP%_scroll-left{0%{transform:translate(0)}to{transform:translate(-50%)}}"]})};var ot=class e{uriAssetsImages=de.uriAssetsImages;prepareRoute(n){return n?.activatedRouteData?.animation}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=E({type:e,selectors:[["app-website-layout"]],decls:7,vars:2,consts:[["routerOutlet","outlet"],[1,"preload"],["alt","Logo Neanche Per Sogno",3,"src"],[1,"main-content"]],template:function(t,o){if(t&1&&(l(0,"div",1),f(1,"img",2),c(),l(2,"main",3),f(3,"router-outlet",null,0),c(),f(5,"app-footer")(6,"app-scroll-bar-bottom")),t&2){let i=Pe(4);u(),a("src",o.uriAssetsImages+"/logo-main.png",Ae),u(),a("@routeAnimation",o.prepareRoute(i))}},dependencies:[tt,nt,W,qt],encapsulation:2,data:{animation:[ve("routeAnimation",[ce("* <=> *",[ie({transform:"translateY(10%)",opacity:0}),le("800ms ease-out",ie({transform:"translateY(0)",opacity:1}))])])]}})};var ta=[{path:"",component:ot,children:[{path:"",loadComponent:()=>import("./chunk-HYIRW4ME.js").then(e=>e.HomeComponent)},{path:"about",loadComponent:()=>import("./chunk-TZIQOQI6.js").then(e=>e.AboutComponent),data:{animation:"AboutPage"}},{path:"releases",loadComponent:()=>import("./chunk-FRYOLO5S.js").then(e=>e.ReleasesComponent),data:{animation:"ReleasesPage"}},{path:"events",loadComponent:()=>import("./chunk-UNAPLYHI.js").then(e=>e.EventsComponent),data:{animation:"EventsPage"}},{path:"mixtape-archive",loadComponent:()=>import("./chunk-CT3LYLTT.js").then(e=>e.MixtapeArchiveComponent),data:{animation:"MixtapeArchivePage"}}]}];export{ta as WEBSITE_LAYOUT_ROUTES};
