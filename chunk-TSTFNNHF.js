import{c as Ae,d as xe,f as he,g as Se}from"./chunk-C5P3YSZX.js";import{A as _n,B as Et,C as Cn,D as ge,E as It,F as wn,G as Pe,H as nt,I as Z,K as Dt,L as me,M as Ee,N as P,O as xn,a as Xe,b as St,c as _e,d as Ze,e as hn,f as Ke,g as te,h as Je,i as gn,m as mn,o as fn,p as Ce,q as we,r as bn,u as et,v as tt,w as Me,x as yn,y as Mt,z as vn}from"./chunk-64A5RRHU.js";import{a as le}from"./chunk-66XS3EV4.js";import{$ as fe,$a as F,Aa as tn,Ab as cn,Ba as c,Bb as un,Fa as $e,Fb as xt,Ga as C,Ib as x,Jb as dn,Kb as se,L as je,La as E,Lb as ae,M as ke,Ma as Y,Mb as pn,N as $,Na as I,O as U,Oa as y,Pa as v,Q as ue,Ra as nn,S as Zt,T as b,Va as S,Wa as l,Xa as on,Y as K,Ya as Q,Z as N,Za as rn,_ as L,_a as ie,a as _,aa as Kt,ab as sn,b as G,ba as f,bb as Ge,cb as Ue,da as wt,db as a,eb as u,fb as h,gb as qe,ha as q,hb as Ye,i as qt,ia as Jt,ib as be,jb as pe,ka as oe,l as Yt,la as de,lb as D,ma as J,mb as d,nb as ye,ob as ve,pb as X,q as Qt,qa as We,qb as an,rb as B,sb as R,tb as Qe,ub as g,vb as ee,w as Xt,wb as ln,xa as en,xb as O,ya as A,yb as z,zb as re}from"./chunk-MA3NUZKT.js";var kn=(()=>{class t{_renderer;_elementRef;onChange=e=>{};onTouched=()=>{};constructor(e,o){this._renderer=e,this._elementRef=o}setProperty(e,o){this._renderer.setProperty(this._elementRef.nativeElement,e,o)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}static \u0275fac=function(o){return new(o||t)(C($e),C(de))};static \u0275dir=I({type:t})}return t})(),Mo=(()=>{class t extends kn{static \u0275fac=(()=>{let e;return function(i){return(e||(e=f(t)))(i||t)}})();static \u0275dir=I({type:t,features:[y]})}return t})(),$n=new ue("");var Eo={provide:$n,useExisting:ke(()=>pt),multi:!0};function Io(){let t=St()?St().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var Do=new ue(""),pt=(()=>{class t extends kn{_compositionMode;_composing=!1;constructor(e,o,i){super(e,o),this._compositionMode=i,this._compositionMode==null&&(this._compositionMode=!Io())}writeValue(e){let o=e??"";this.setProperty("value",o)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}static \u0275fac=function(o){return new(o||t)(C($e),C(de),C(Do,8))};static \u0275dir=I({type:t,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(o,i){o&1&&D("input",function(s){return i._handleInput(s.target.value)})("blur",function(){return i.onTouched()})("compositionstart",function(){return i._compositionStart()})("compositionend",function(s){return i._compositionEnd(s.target.value)})},standalone:!1,features:[O([Eo]),y]})}return t})();function At(t){return t==null||Pt(t)===0}function Pt(t){return t==null?null:Array.isArray(t)||typeof t=="string"?t.length:t instanceof Set?t.size:null}var Tt=new ue(""),An=new ue(""),Vo=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,Re=class{static min(n){return Fo(n)}static max(n){return Oo(n)}static required(n){return Pn(n)}static requiredTrue(n){return ko(n)}static email(n){return $o(n)}static minLength(n){return Ao(n)}static maxLength(n){return Po(n)}static pattern(n){return To(n)}static nullValidator(n){return rt()}static compose(n){return zn(n)}static composeAsync(n){return jn(n)}};function Fo(t){return n=>{if(n.value==null||t==null)return null;let e=parseFloat(n.value);return!isNaN(e)&&e<t?{min:{min:t,actual:n.value}}:null}}function Oo(t){return n=>{if(n.value==null||t==null)return null;let e=parseFloat(n.value);return!isNaN(e)&&e>t?{max:{max:t,actual:n.value}}:null}}function Pn(t){return At(t.value)?{required:!0}:null}function ko(t){return t.value===!0?null:{required:!0}}function $o(t){return At(t.value)||Vo.test(t.value)?null:{email:!0}}function Ao(t){return n=>{let e=n.value?.length??Pt(n.value);return e===null||e===0?null:e<t?{minlength:{requiredLength:t,actualLength:e}}:null}}function Po(t){return n=>{let e=n.value?.length??Pt(n.value);return e!==null&&e>t?{maxlength:{requiredLength:t,actualLength:e}}:null}}function To(t){if(!t)return rt;let n,e;return typeof t=="string"?(e="",t.charAt(0)!=="^"&&(e+="^"),e+=t,t.charAt(t.length-1)!=="$"&&(e+="$"),n=new RegExp(e)):(e=t.toString(),n=t),o=>{if(At(o.value))return null;let i=o.value;return n.test(i)?null:{pattern:{requiredPattern:e,actualValue:i}}}}function rt(t){return null}function Tn(t){return t!=null}function Nn(t){return nn(t)?Yt(t):t}function Ln(t){let n={};return t.forEach(e=>{n=e!=null?_(_({},n),e):n}),Object.keys(n).length===0?null:n}function Bn(t,n){return n.map(e=>e(t))}function No(t){return!t.validate}function Rn(t){return t.map(n=>No(n)?n:e=>n.validate(e))}function zn(t){if(!t)return null;let n=t.filter(Tn);return n.length==0?null:function(e){return Ln(Bn(e,n))}}function Hn(t){return t!=null?zn(Rn(t)):null}function jn(t){if(!t)return null;let n=t.filter(Tn);return n.length==0?null:function(e){let o=Bn(e,n).map(Nn);return Xt(o).pipe(Qt(Ln))}}function Wn(t){return t!=null?jn(Rn(t)):null}function Sn(t,n){return t===null?[n]:Array.isArray(t)?[...t,n]:[t,n]}function Gn(t){return t._rawValidators}function Un(t){return t._rawAsyncValidators}function Vt(t){return t?Array.isArray(t)?t:[t]:[]}function st(t,n){return Array.isArray(t)?t.includes(n):t===n}function Mn(t,n){let e=Vt(n);return Vt(t).forEach(i=>{st(e,i)||e.push(i)}),e}function En(t,n){return Vt(n).filter(e=>!st(t,e))}var at=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(n){this._rawValidators=n||[],this._composedValidatorFn=Hn(this._rawValidators)}_setAsyncValidators(n){this._rawAsyncValidators=n||[],this._composedAsyncValidatorFn=Wn(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(n){this._onDestroyCallbacks.push(n)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(n=>n()),this._onDestroyCallbacks=[]}reset(n=void 0){this.control&&this.control.reset(n)}hasError(n,e){return this.control?this.control.hasError(n,e):!1}getError(n,e){return this.control?this.control.getError(n,e):null}},Ve=class extends at{name;get formDirective(){return null}get path(){return null}},ze=class extends at{_parent=null;name=null;valueAccessor=null},lt=class{_cd;constructor(n){this._cd=n}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}},Lo={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},Nr=G(_({},Lo),{"[class.ng-submitted]":"isSubmitted"}),qn=(()=>{class t extends lt{constructor(e){super(e)}static \u0275fac=function(o){return new(o||t)(C(ze,2))};static \u0275dir=I({type:t,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(o,i){o&2&&Q("ng-untouched",i.isUntouched)("ng-touched",i.isTouched)("ng-pristine",i.isPristine)("ng-dirty",i.isDirty)("ng-valid",i.isValid)("ng-invalid",i.isInvalid)("ng-pending",i.isPending)},standalone:!1,features:[y]})}return t})(),Yn=(()=>{class t extends lt{constructor(e){super(e)}static \u0275fac=function(o){return new(o||t)(C(Ve,10))};static \u0275dir=I({type:t,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(o,i){o&2&&Q("ng-untouched",i.isUntouched)("ng-touched",i.isTouched)("ng-pristine",i.isPristine)("ng-dirty",i.isDirty)("ng-valid",i.isValid)("ng-invalid",i.isInvalid)("ng-pending",i.isPending)("ng-submitted",i.isSubmitted)},standalone:!1,features:[y]})}return t})();var Te="VALID",ot="INVALID",Ie="PENDING",Ne="DISABLED",ce=class{},ct=class extends ce{value;source;constructor(n,e){super(),this.value=n,this.source=e}},Le=class extends ce{pristine;source;constructor(n,e){super(),this.pristine=n,this.source=e}},Be=class extends ce{touched;source;constructor(n,e){super(),this.touched=n,this.source=e}},De=class extends ce{status;source;constructor(n,e){super(),this.status=n,this.source=e}},Ft=class extends ce{source;constructor(n){super(),this.source=n}},Ot=class extends ce{source;constructor(n){super(),this.source=n}};function Nt(t){return(ht(t)?t.validators:t)||null}function Bo(t){return Array.isArray(t)?Hn(t):t||null}function Lt(t,n){return(ht(n)?n.asyncValidators:t)||null}function Ro(t){return Array.isArray(t)?Wn(t):t||null}function ht(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}function Qn(t,n,e){let o=t.controls;if(!(n?Object.keys(o):o).length)throw new je(1e3,"");if(!o[e])throw new je(1001,"")}function Xn(t,n,e){t._forEachChild((o,i)=>{if(e[i]===void 0)throw new je(1002,"")})}var Fe=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(n,e){this._assignValidators(n),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(n){this._rawValidators=this._composedValidatorFn=n}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(n){this._rawAsyncValidators=this._composedAsyncValidatorFn=n}get parent(){return this._parent}get status(){return se(this.statusReactive)}set status(n){se(()=>this.statusReactive.set(n))}_status=ae(()=>this.statusReactive());statusReactive=J(void 0);get valid(){return this.status===Te}get invalid(){return this.status===ot}get pending(){return this.status==Ie}get disabled(){return this.status===Ne}get enabled(){return this.status!==Ne}errors;get pristine(){return se(this.pristineReactive)}set pristine(n){se(()=>this.pristineReactive.set(n))}_pristine=ae(()=>this.pristineReactive());pristineReactive=J(!0);get dirty(){return!this.pristine}get touched(){return se(this.touchedReactive)}set touched(n){se(()=>this.touchedReactive.set(n))}_touched=ae(()=>this.touchedReactive());touchedReactive=J(!1);get untouched(){return!this.touched}_events=new qt;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(n){this._assignValidators(n)}setAsyncValidators(n){this._assignAsyncValidators(n)}addValidators(n){this.setValidators(Mn(n,this._rawValidators))}addAsyncValidators(n){this.setAsyncValidators(Mn(n,this._rawAsyncValidators))}removeValidators(n){this.setValidators(En(n,this._rawValidators))}removeAsyncValidators(n){this.setAsyncValidators(En(n,this._rawAsyncValidators))}hasValidator(n){return st(this._rawValidators,n)}hasAsyncValidator(n){return st(this._rawAsyncValidators,n)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(n={}){let e=this.touched===!1;this.touched=!0;let o=n.sourceControl??this;this._parent&&!n.onlySelf&&this._parent.markAsTouched(G(_({},n),{sourceControl:o})),e&&n.emitEvent!==!1&&this._events.next(new Be(!0,o))}markAllAsTouched(n={}){this.markAsTouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(n))}markAsUntouched(n={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let o=n.sourceControl??this;this._forEachChild(i=>{i.markAsUntouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:o})}),this._parent&&!n.onlySelf&&this._parent._updateTouched(n,o),e&&n.emitEvent!==!1&&this._events.next(new Be(!1,o))}markAsDirty(n={}){let e=this.pristine===!0;this.pristine=!1;let o=n.sourceControl??this;this._parent&&!n.onlySelf&&this._parent.markAsDirty(G(_({},n),{sourceControl:o})),e&&n.emitEvent!==!1&&this._events.next(new Le(!1,o))}markAsPristine(n={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let o=n.sourceControl??this;this._forEachChild(i=>{i.markAsPristine({onlySelf:!0,emitEvent:n.emitEvent})}),this._parent&&!n.onlySelf&&this._parent._updatePristine(n,o),e&&n.emitEvent!==!1&&this._events.next(new Le(!0,o))}markAsPending(n={}){this.status=Ie;let e=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new De(this.status,e)),this.statusChanges.emit(this.status)),this._parent&&!n.onlySelf&&this._parent.markAsPending(G(_({},n),{sourceControl:e}))}disable(n={}){let e=this._parentMarkedDirty(n.onlySelf);this.status=Ne,this.errors=null,this._forEachChild(i=>{i.disable(G(_({},n),{onlySelf:!0}))}),this._updateValue();let o=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new ct(this.value,o)),this._events.next(new De(this.status,o)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(G(_({},n),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(i=>i(!0))}enable(n={}){let e=this._parentMarkedDirty(n.onlySelf);this.status=Te,this._forEachChild(o=>{o.enable(G(_({},n),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent}),this._updateAncestors(G(_({},n),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(o=>o(!1))}_updateAncestors(n,e){this._parent&&!n.onlySelf&&(this._parent.updateValueAndValidity(n),n.skipPristineCheck||this._parent._updatePristine({},e),this._parent._updateTouched({},e))}setParent(n){this._parent=n}getRawValue(){return this.value}updateValueAndValidity(n={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let o=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===Te||this.status===Ie)&&this._runAsyncValidator(o,n.emitEvent)}let e=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new ct(this.value,e)),this._events.next(new De(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!n.onlySelf&&this._parent.updateValueAndValidity(G(_({},n),{sourceControl:e}))}_updateTreeValidity(n={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(n)),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?Ne:Te}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(n,e){if(this.asyncValidator){this.status=Ie,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1};let o=Nn(this.asyncValidator(this));this._asyncValidationSubscription=o.subscribe(i=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(i,{emitEvent:e,shouldHaveEmitted:n})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let n=this._hasOwnPendingAsyncValidator?.emitEvent??!1;return this._hasOwnPendingAsyncValidator=null,n}return!1}setErrors(n,e={}){this.errors=n,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(n){let e=n;return e==null||(Array.isArray(e)||(e=e.split(".")),e.length===0)?null:e.reduce((o,i)=>o&&o._find(i),this)}getError(n,e){let o=e?this.get(e):this;return o&&o.errors?o.errors[n]:null}hasError(n,e){return!!this.getError(n,e)}get root(){let n=this;for(;n._parent;)n=n._parent;return n}_updateControlsErrors(n,e,o){this.status=this._calculateStatus(),n&&this.statusChanges.emit(this.status),(n||o)&&this._events.next(new De(this.status,e)),this._parent&&this._parent._updateControlsErrors(n,e,o)}_initObservables(){this.valueChanges=new q,this.statusChanges=new q}_calculateStatus(){return this._allControlsDisabled()?Ne:this.errors?ot:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(Ie)?Ie:this._anyControlsHaveStatus(ot)?ot:Te}_anyControlsHaveStatus(n){return this._anyControls(e=>e.status===n)}_anyControlsDirty(){return this._anyControls(n=>n.dirty)}_anyControlsTouched(){return this._anyControls(n=>n.touched)}_updatePristine(n,e){let o=!this._anyControlsDirty(),i=this.pristine!==o;this.pristine=o,this._parent&&!n.onlySelf&&this._parent._updatePristine(n,e),i&&this._events.next(new Le(this.pristine,e))}_updateTouched(n={},e){this.touched=this._anyControlsTouched(),this._events.next(new Be(this.touched,e)),this._parent&&!n.onlySelf&&this._parent._updateTouched(n,e)}_onDisabledChange=[];_registerOnCollectionChange(n){this._onCollectionChange=n}_setUpdateStrategy(n){ht(n)&&n.updateOn!=null&&(this._updateOn=n.updateOn)}_parentMarkedDirty(n){let e=this._parent&&this._parent.dirty;return!n&&!!e&&!this._parent._anyControlsDirty()}_find(n){return null}_assignValidators(n){this._rawValidators=Array.isArray(n)?n.slice():n,this._composedValidatorFn=Bo(this._rawValidators)}_assignAsyncValidators(n){this._rawAsyncValidators=Array.isArray(n)?n.slice():n,this._composedAsyncValidatorFn=Ro(this._rawAsyncValidators)}},Oe=class extends Fe{constructor(n,e,o){super(Nt(e),Lt(o,e)),this.controls=n,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(n,e){return this.controls[n]?this.controls[n]:(this.controls[n]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(n,e,o={}){this.registerControl(n,e),this.updateValueAndValidity({emitEvent:o.emitEvent}),this._onCollectionChange()}removeControl(n,e={}){this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),delete this.controls[n],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(n,e,o={}){this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),delete this.controls[n],e&&this.registerControl(n,e),this.updateValueAndValidity({emitEvent:o.emitEvent}),this._onCollectionChange()}contains(n){return this.controls.hasOwnProperty(n)&&this.controls[n].enabled}setValue(n,e={}){Xn(this,!0,n),Object.keys(n).forEach(o=>{Qn(this,!0,o),this.controls[o].setValue(n[o],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(n,e={}){n!=null&&(Object.keys(n).forEach(o=>{let i=this.controls[o];i&&i.patchValue(n[o],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(n={},e={}){this._forEachChild((o,i)=>{o.reset(n?n[i]:null,{onlySelf:!0,emitEvent:e.emitEvent})}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e)}getRawValue(){return this._reduceChildren({},(n,e,o)=>(n[o]=e.getRawValue(),n))}_syncPendingControls(){let n=this._reduceChildren(!1,(e,o)=>o._syncPendingControls()?!0:e);return n&&this.updateValueAndValidity({onlySelf:!0}),n}_forEachChild(n){Object.keys(this.controls).forEach(e=>{let o=this.controls[e];o&&n(o,e)})}_setUpControls(){this._forEachChild(n=>{n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(n){for(let[e,o]of Object.entries(this.controls))if(this.contains(e)&&n(o))return!0;return!1}_reduceValue(){let n={};return this._reduceChildren(n,(e,o,i)=>((o.enabled||this.disabled)&&(e[i]=o.value),e))}_reduceChildren(n,e){let o=n;return this._forEachChild((i,r)=>{o=e(o,i,r)}),o}_allControlsDisabled(){for(let n of Object.keys(this.controls))if(this.controls[n].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(n){return this.controls.hasOwnProperty(n)?this.controls[n]:null}};var kt=class extends Oe{};var Bt=new ue("",{providedIn:"root",factory:()=>gt}),gt="always";function zo(t,n){return[...n.path,t]}function In(t,n,e=gt){Rt(t,n),n.valueAccessor.writeValue(t.value),(t.disabled||e==="always")&&n.valueAccessor.setDisabledState?.(t.disabled),jo(t,n),Go(t,n),Wo(t,n),Ho(t,n)}function Dn(t,n,e=!0){let o=()=>{};n.valueAccessor&&(n.valueAccessor.registerOnChange(o),n.valueAccessor.registerOnTouched(o)),dt(t,n),t&&(n._invokeOnDestroyCallbacks(),t._registerOnCollectionChange(()=>{}))}function ut(t,n){t.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(n)})}function Ho(t,n){if(n.valueAccessor.setDisabledState){let e=o=>{n.valueAccessor.setDisabledState(o)};t.registerOnDisabledChange(e),n._registerOnDestroy(()=>{t._unregisterOnDisabledChange(e)})}}function Rt(t,n){let e=Gn(t);n.validator!==null?t.setValidators(Sn(e,n.validator)):typeof e=="function"&&t.setValidators([e]);let o=Un(t);n.asyncValidator!==null?t.setAsyncValidators(Sn(o,n.asyncValidator)):typeof o=="function"&&t.setAsyncValidators([o]);let i=()=>t.updateValueAndValidity();ut(n._rawValidators,i),ut(n._rawAsyncValidators,i)}function dt(t,n){let e=!1;if(t!==null){if(n.validator!==null){let i=Gn(t);if(Array.isArray(i)&&i.length>0){let r=i.filter(s=>s!==n.validator);r.length!==i.length&&(e=!0,t.setValidators(r))}}if(n.asyncValidator!==null){let i=Un(t);if(Array.isArray(i)&&i.length>0){let r=i.filter(s=>s!==n.asyncValidator);r.length!==i.length&&(e=!0,t.setAsyncValidators(r))}}}let o=()=>{};return ut(n._rawValidators,o),ut(n._rawAsyncValidators,o),e}function jo(t,n){n.valueAccessor.registerOnChange(e=>{t._pendingValue=e,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&Zn(t,n)})}function Wo(t,n){n.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&Zn(t,n),t.updateOn!=="submit"&&t.markAsTouched()})}function Zn(t,n){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),n.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function Go(t,n){let e=(o,i)=>{n.valueAccessor.writeValue(o),i&&n.viewToModelUpdate(o)};t.registerOnChange(e),n._registerOnDestroy(()=>{t._unregisterOnChange(e)})}function Uo(t,n){t==null,Rt(t,n)}function qo(t,n){return dt(t,n)}function Yo(t,n){if(!t.hasOwnProperty("model"))return!1;let e=t.model;return e.isFirstChange()?!0:!Object.is(n,e.currentValue)}function Qo(t){return Object.getPrototypeOf(t.constructor)===Mo}function Xo(t,n){t._syncPendingControls(),n.forEach(e=>{let o=e.control;o.updateOn==="submit"&&o._pendingChange&&(e.viewToModelUpdate(o._pendingValue),o._pendingChange=!1)})}function Zo(t,n){if(!n)return null;Array.isArray(n);let e,o,i;return n.forEach(r=>{r.constructor===pt?e=r:Qo(r)?o=r:i=r}),i||o||e||null}function Ko(t,n){let e=t.indexOf(n);e>-1&&t.splice(e,1)}function Vn(t,n){let e=t.indexOf(n);e>-1&&t.splice(e,1)}function Fn(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var it=class extends Fe{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(n=null,e,o){super(Nt(e),Lt(o,e)),this._applyFormState(n),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),ht(e)&&(e.nonNullable||e.initialValueIsDefault)&&(Fn(n)?this.defaultValue=n.value:this.defaultValue=n)}setValue(n,e={}){this.value=this._pendingValue=n,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(o=>o(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)}patchValue(n,e={}){this.setValue(n,e)}reset(n=this.defaultValue,e={}){this._applyFormState(n),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),this._pendingChange=!1}_updateValue(){}_anyControls(n){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(n){this._onChange.push(n)}_unregisterOnChange(n){Vn(this._onChange,n)}registerOnDisabledChange(n){this._onDisabledChange.push(n)}_unregisterOnDisabledChange(n){Vn(this._onDisabledChange,n)}_forEachChild(n){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(n){Fn(n)?(this.value=this._pendingValue=n.value,n.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=n}};var Jo=t=>t instanceof it;var Kn=(()=>{class t{static \u0275fac=function(o){return new(o||t)};static \u0275dir=I({type:t,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""],standalone:!1})}return t})();var Jn=new ue("");var ei={provide:Ve,useExisting:ke(()=>zt)},zt=(()=>{class t extends Ve{callSetDisabledState;get submitted(){return se(this._submittedReactive)}set submitted(e){this._submittedReactive.set(e)}_submitted=ae(()=>this._submittedReactive());_submittedReactive=J(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];form=null;ngSubmit=new q;constructor(e,o,i){super(),this.callSetDisabledState=i,this._setValidators(e),this._setAsyncValidators(o)}ngOnChanges(e){e.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}ngOnDestroy(){this.form&&(dt(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get control(){return this.form}get path(){return[]}addControl(e){let o=this.form.get(e.path);return In(o,e,this.callSetDisabledState),o.updateValueAndValidity({emitEvent:!1}),this.directives.push(e),o}getControl(e){return this.form.get(e.path)}removeControl(e){Dn(e.control||null,e,!1),Ko(this.directives,e)}addFormGroup(e){this._setUpFormContainer(e)}removeFormGroup(e){this._cleanUpFormContainer(e)}getFormGroup(e){return this.form.get(e.path)}addFormArray(e){this._setUpFormContainer(e)}removeFormArray(e){this._cleanUpFormContainer(e)}getFormArray(e){return this.form.get(e.path)}updateModel(e,o){this.form.get(e.path).setValue(o)}onSubmit(e){return this._submittedReactive.set(!0),Xo(this.form,this.directives),this.ngSubmit.emit(e),this.form._events.next(new Ft(this.control)),e?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this._submittedReactive.set(!1),this.form._events.next(new Ot(this.form))}_updateDomValue(){this.directives.forEach(e=>{let o=e.control,i=this.form.get(e.path);o!==i&&(Dn(o||null,e),Jo(i)&&(In(i,e,this.callSetDisabledState),e.control=i))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(e){let o=this.form.get(e.path);Uo(o,e),o.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(e){if(this.form){let o=this.form.get(e.path);o&&qo(o,e)&&o.updateValueAndValidity({emitEvent:!1})}}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm&&this._oldForm._registerOnCollectionChange(()=>{})}_updateValidators(){Rt(this.form,this),this._oldForm&&dt(this._oldForm,this)}static \u0275fac=function(o){return new(o||t)(C(Tt,10),C(An,10),C(Bt,8))};static \u0275dir=I({type:t,selectors:[["","formGroup",""]],hostBindings:function(o,i){o&1&&D("submit",function(s){return i.onSubmit(s)})("reset",function(){return i.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[O([ei]),y,K]})}return t})();var ti={provide:ze,useExisting:ke(()=>Ht)},Ht=(()=>{class t extends ze{_ngModelWarningConfig;_added=!1;viewModel;control;name=null;set isDisabled(e){}model;update=new q;static _ngModelWarningSentOnce=!1;_ngModelWarningSent=!1;constructor(e,o,i,r,s){super(),this._ngModelWarningConfig=s,this._parent=e,this._setValidators(o),this._setAsyncValidators(i),this.valueAccessor=Zo(this,r)}ngOnChanges(e){this._added||this._setUpControl(),Yo(e,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}get path(){return zo(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_setUpControl(){this.control=this.formDirective.addControl(this),this._added=!0}static \u0275fac=function(o){return new(o||t)(C(Ve,13),C(Tt,10),C(An,10),C($n,10),C(Jn,8))};static \u0275dir=I({type:t,selectors:[["","formControlName",""]],inputs:{name:[0,"formControlName","name"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},standalone:!1,features:[O([ti]),y,K]})}return t})();var ni=(()=>{class t{_validator=rt;_onChange;_enabled;ngOnChanges(e){if(this.inputName in e){let o=this.normalizeInput(e[this.inputName].currentValue);this._enabled=this.enabled(o),this._validator=this._enabled?this.createValidator(o):rt,this._onChange&&this._onChange()}}validate(e){return this._validator(e)}registerOnValidatorChange(e){this._onChange=e}enabled(e){return e!=null}static \u0275fac=function(o){return new(o||t)};static \u0275dir=I({type:t,features:[K]})}return t})();var oi={provide:Tt,useExisting:ke(()=>jt),multi:!0};var jt=(()=>{class t extends ni{required;inputName="required";normalizeInput=x;createValidator=e=>Pn;enabled(e){return e}static \u0275fac=(()=>{let e;return function(i){return(e||(e=f(t)))(i||t)}})();static \u0275dir=I({type:t,selectors:[["","required","","formControlName","",3,"type","checkbox"],["","required","","formControl","",3,"type","checkbox"],["","required","","ngModel","",3,"type","checkbox"]],hostVars:1,hostBindings:function(o,i){o&2&&S("required",i._enabled?"":null)},inputs:{required:"required"},standalone:!1,features:[O([oi]),y]})}return t})();var eo=(()=>{class t{static \u0275fac=function(o){return new(o||t)};static \u0275mod=Y({type:t});static \u0275inj=U({})}return t})(),$t=class extends Fe{constructor(n,e,o){super(Nt(e),Lt(o,e)),this.controls=n,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;at(n){return this.controls[this._adjustIndex(n)]}push(n,e={}){this.controls.push(n),this._registerControl(n),this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}insert(n,e,o={}){this.controls.splice(n,0,e),this._registerControl(e),this.updateValueAndValidity({emitEvent:o.emitEvent})}removeAt(n,e={}){let o=this._adjustIndex(n);o<0&&(o=0),this.controls[o]&&this.controls[o]._registerOnCollectionChange(()=>{}),this.controls.splice(o,1),this.updateValueAndValidity({emitEvent:e.emitEvent})}setControl(n,e,o={}){let i=this._adjustIndex(n);i<0&&(i=0),this.controls[i]&&this.controls[i]._registerOnCollectionChange(()=>{}),this.controls.splice(i,1),e&&(this.controls.splice(i,0,e),this._registerControl(e)),this.updateValueAndValidity({emitEvent:o.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(n,e={}){Xn(this,!1,n),n.forEach((o,i)=>{Qn(this,!1,i),this.at(i).setValue(o,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(n,e={}){n!=null&&(n.forEach((o,i)=>{this.at(i)&&this.at(i).patchValue(o,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(n=[],e={}){this._forEachChild((o,i)=>{o.reset(n[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e)}getRawValue(){return this.controls.map(n=>n.getRawValue())}clear(n={}){this.controls.length<1||(this._forEachChild(e=>e._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:n.emitEvent}))}_adjustIndex(n){return n<0?n+this.length:n}_syncPendingControls(){let n=this.controls.reduce((e,o)=>o._syncPendingControls()?!0:e,!1);return n&&this.updateValueAndValidity({onlySelf:!0}),n}_forEachChild(n){this.controls.forEach((e,o)=>{n(e,o)})}_updateValue(){this.value=this.controls.filter(n=>n.enabled||this.disabled).map(n=>n.value)}_anyControls(n){return this.controls.some(e=>e.enabled&&n(e))}_setUpControls(){this._forEachChild(n=>this._registerControl(n))}_allControlsDisabled(){for(let n of this.controls)if(n.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(n){n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange)}_find(n){return this.at(n)??null}};function On(t){return!!t&&(t.asyncValidators!==void 0||t.validators!==void 0||t.updateOn!==void 0)}var to=(()=>{class t{useNonNullable=!1;get nonNullable(){let e=new t;return e.useNonNullable=!0,e}group(e,o=null){let i=this._reduceControls(e),r={};return On(o)?r=o:o!==null&&(r.validators=o.validator,r.asyncValidators=o.asyncValidator),new Oe(i,r)}record(e,o=null){let i=this._reduceControls(e);return new kt(i,o)}control(e,o,i){let r={};return this.useNonNullable?(On(o)?r=o:(r.validators=o,r.asyncValidators=i),new it(e,G(_({},r),{nonNullable:!0}))):new it(e,o,i)}array(e,o,i){let r=e.map(s=>this._createControl(s));return new $t(r,o,i)}_reduceControls(e){let o={};return Object.keys(e).forEach(i=>{o[i]=this._createControl(e[i])}),o}_createControl(e){if(e instanceof it)return e;if(e instanceof Fe)return e;if(Array.isArray(e)){let o=e[0],i=e.length>1?e[1]:null,r=e.length>2?e[2]:null;return this.control(o,i,r)}else return this.control(e)}static \u0275fac=function(o){return new(o||t)};static \u0275prov=$({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var no=(()=>{class t{static withConfig(e){return{ngModule:t,providers:[{provide:Bt,useValue:e.callSetDisabledState??gt}]}}static \u0275fac=function(o){return new(o||t)};static \u0275mod=Y({type:t});static \u0275inj=U({imports:[eo]})}return t})(),oo=(()=>{class t{static withConfig(e){return{ngModule:t,providers:[{provide:Jn,useValue:e.warnOnNgModelWithFormControl??"always"},{provide:Bt,useValue:e.callSetDisabledState??gt}]}}static \u0275fac=function(o){return new(o||t)};static \u0275mod=Y({type:t});static \u0275inj=U({imports:[eo]})}return t})();var io=(()=>{class t extends P{name="common";static \u0275fac=(()=>{let e;return function(i){return(e||(e=f(t)))(i||t)}})();static \u0275prov=$({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),H=(()=>{class t{document=b(Xe);platformId=b(We);el=b(de);injector=b(wt);cd=b(xt);renderer=b($e);config=b(xn);baseComponentStyle=b(io);baseStyle=b(P);scopedStyleEl;rootEl;dt;get styleOptions(){return{nonce:this.config?.csp().nonce}}get _name(){return this.constructor.name.replace(/^_/,"").toLowerCase()}get componentStyle(){return this._componentStyle}attrSelector=Pe("pc");themeChangeListeners=[];_getHostInstance(e){if(e)return e?this.hostName?e.name===this.hostName?e:this._getHostInstance(e.parentInstance):e.parentInstance:void 0}_getOptionValue(e,o="",i={}){return wn(e,o,i)}ngOnInit(){this.document&&this._loadStyles()}ngAfterViewInit(){this.rootEl=this.el?.nativeElement,this.rootEl&&this.rootEl?.setAttribute(this.attrSelector,"")}ngOnChanges(e){if(this.document&&!gn(this.platformId)){let{dt:o}=e;o&&o.currentValue&&(this._loadScopedThemeStyles(o.currentValue),this._themeChangeListener(()=>this._loadScopedThemeStyles(o.currentValue)))}}ngOnDestroy(){this._unloadScopedThemeStyles(),this.themeChangeListeners.forEach(e=>Dt.off("theme:change",e))}_loadStyles(){let e=()=>{Ee.isStyleNameLoaded("base")||(this.baseStyle.loadGlobalCSS(this.styleOptions),Ee.setLoadedStyleName("base")),this._loadThemeStyles()};e(),this._themeChangeListener(()=>e())}_loadCoreStyles(){!Ee.isStyleNameLoaded("base")&&this._name&&(this.baseComponentStyle.loadCSS(this.styleOptions),this.componentStyle&&this.componentStyle?.loadCSS(this.styleOptions),Ee.setLoadedStyleName(this.componentStyle?.name))}_loadThemeStyles(){if(!me.isStyleNameLoaded("common")){let{primitive:e,semantic:o,global:i,style:r}=this.componentStyle?.getCommonTheme?.()||{};this.baseStyle.load(e?.css,_({name:"primitive-variables"},this.styleOptions)),this.baseStyle.load(o?.css,_({name:"semantic-variables"},this.styleOptions)),this.baseStyle.load(i?.css,_({name:"global-variables"},this.styleOptions)),this.baseStyle.loadGlobalTheme(_({name:"global-style"},this.styleOptions),r),me.setLoadedStyleName("common")}if(!me.isStyleNameLoaded(this.componentStyle?.name)&&this.componentStyle?.name){let{css:e,style:o}=this.componentStyle?.getComponentTheme?.()||{};this.componentStyle?.load(e,_({name:`${this.componentStyle?.name}-variables`},this.styleOptions)),this.componentStyle?.loadTheme(_({name:`${this.componentStyle?.name}-style`},this.styleOptions),o),me.setLoadedStyleName(this.componentStyle?.name)}if(!me.isStyleNameLoaded("layer-order")){let e=this.componentStyle?.getLayerOrderThemeCSS?.();this.baseStyle.load(e,_({name:"layer-order",first:!0},this.styleOptions)),me.setLoadedStyleName("layer-order")}this.dt&&(this._loadScopedThemeStyles(this.dt),this._themeChangeListener(()=>this._loadScopedThemeStyles(this.dt)))}_loadScopedThemeStyles(e){let{css:o}=this.componentStyle?.getPresetTheme?.(e,`[${this.attrSelector}]`)||{},i=this.componentStyle?.load(o,_({name:`${this.attrSelector}-${this.componentStyle?.name}`},this.styleOptions));this.scopedStyleEl=i?.el}_unloadScopedThemeStyles(){this.scopedStyleEl?.remove()}_themeChangeListener(e=()=>{}){Ee.clearLoadedStyleNames(),Dt.on("theme:change",e),this.themeChangeListeners.push(e)}cx(e,o){let i=this.parent?this.parent.componentStyle?.classes?.[e]:this.componentStyle?.classes?.[e];return typeof i=="function"?i({instance:this}):typeof i=="string"?i:e}sx(e){let o=this.componentStyle?.inlineStyles?.[e];return typeof o=="function"?o({instance:this}):typeof o=="string"?o:_({},o)}get parent(){return this.parentInstance}static \u0275fac=function(o){return new(o||t)};static \u0275dir=I({type:t,inputs:{dt:"dt"},features:[O([io,P]),K]})}return t})();var ri=["*"],si=`
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
`,ai=(()=>{class t extends P{name="baseicon";inlineStyles=si;static \u0275fac=(()=>{let e;return function(i){return(e||(e=f(t)))(i||t)}})();static \u0275prov=$({token:t,factory:t.\u0275fac})}return t})();var mt=(()=>{class t extends H{label;spin=!1;styleClass;role;ariaLabel;ariaHidden;ngOnInit(){super.ngOnInit(),this.getAttributes()}getAttributes(){let e=ge(this.label);this.role=e?void 0:"img",this.ariaLabel=e?void 0:this.label,this.ariaHidden=e}getClassNames(){return`p-icon ${this.styleClass?this.styleClass+" ":""}${this.spin?"p-icon-spin":""}`}static \u0275fac=(()=>{let e;return function(i){return(e||(e=f(t)))(i||t)}})();static \u0275cmp=E({type:t,selectors:[["ng-component"]],hostAttrs:[1,"p-component","p-iconwrapper"],inputs:{label:"label",spin:[2,"spin","spin",x],styleClass:"styleClass"},features:[O([ai]),y],ngContentSelectors:ri,decls:1,vars:0,template:function(o,i){o&1&&(ye(),ve(0))},encapsulation:2,changeDetection:0})}return t})();var ro=(()=>{class t extends mt{pathId;ngOnInit(){this.pathId="url(#"+Pe()+")"}static \u0275fac=(()=>{let e;return function(i){return(e||(e=f(t)))(i||t)}})();static \u0275cmp=E({type:t,selectors:[["SpinnerIcon"]],features:[y],decls:6,vars:7,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(o,i){o&1&&(fe(),a(0,"svg",0)(1,"g"),h(2,"path",1),u(),a(3,"defs")(4,"clipPath",2),h(5,"rect",3),u()()()),o&2&&(ie(i.getClassNames()),S("aria-label",i.ariaLabel)("aria-hidden",i.ariaHidden)("role",i.role),c(),S("clip-path",i.pathId),c(3),l("id",i.pathId))},encapsulation:2})}return t})();var so=(()=>{class t extends mt{static \u0275fac=(()=>{let e;return function(i){return(e||(e=f(t)))(i||t)}})();static \u0275cmp=E({type:t,selectors:[["TimesIcon"]],features:[y],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M8.01186 7.00933L12.27 2.75116C12.341 2.68501 12.398 2.60524 12.4375 2.51661C12.4769 2.42798 12.4982 2.3323 12.4999 2.23529C12.5016 2.13827 12.4838 2.0419 12.4474 1.95194C12.4111 1.86197 12.357 1.78024 12.2884 1.71163C12.2198 1.64302 12.138 1.58893 12.0481 1.55259C11.9581 1.51625 11.8617 1.4984 11.7647 1.50011C11.6677 1.50182 11.572 1.52306 11.4834 1.56255C11.3948 1.60204 11.315 1.65898 11.2488 1.72997L6.99067 5.98814L2.7325 1.72997C2.59553 1.60234 2.41437 1.53286 2.22718 1.53616C2.03999 1.53946 1.8614 1.61529 1.72901 1.74767C1.59663 1.88006 1.5208 2.05865 1.5175 2.24584C1.5142 2.43303 1.58368 2.61419 1.71131 2.75116L5.96948 7.00933L1.71131 11.2675C1.576 11.403 1.5 11.5866 1.5 11.7781C1.5 11.9696 1.576 12.1532 1.71131 12.2887C1.84679 12.424 2.03043 12.5 2.2219 12.5C2.41338 12.5 2.59702 12.424 2.7325 12.2887L6.99067 8.03052L11.2488 12.2887C11.3843 12.424 11.568 12.5 11.7594 12.5C11.9509 12.5 12.1346 12.424 12.27 12.2887C12.4053 12.1532 12.4813 11.9696 12.4813 11.7781C12.4813 11.5866 12.4053 11.403 12.27 11.2675L8.01186 7.00933Z","fill","currentColor"]],template:function(o,i){o&1&&(fe(),a(0,"svg",0),h(1,"path",1),u()),o&2&&(ie(i.getClassNames()),S("aria-label",i.ariaLabel)("aria-hidden",i.ariaHidden)("role",i.role))},encapsulation:2})}return t})();var li=({dt:t})=>`
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
`,ci={root:"p-ink"},ao=(()=>{class t extends P{name="ripple";theme=li;classes=ci;static \u0275fac=(()=>{let e;return function(i){return(e||(e=f(t)))(i||t)}})();static \u0275prov=$({token:t,factory:t.\u0275fac})}return t})();var ft=(()=>{class t extends H{zone=b(Jt);_componentStyle=b(ao);animationListener;mouseDownListener;timeout;constructor(){super(),pn(()=>{Je(this.platformId)&&(this.config.ripple()?this.zone.runOutsideAngular(()=>{this.create(),this.mouseDownListener=this.renderer.listen(this.el.nativeElement,"mousedown",this.onMouseDown.bind(this))}):this.remove())})}ngAfterViewInit(){super.ngAfterViewInit()}onMouseDown(e){let o=this.getInk();if(!o||this.document.defaultView?.getComputedStyle(o,null).display==="none")return;if(Me(o,"p-ink-active"),!Mt(o)&&!Et(o)){let p=Math.max(yn(this.el.nativeElement),_n(this.el.nativeElement));o.style.height=p+"px",o.style.width=p+"px"}let i=vn(this.el.nativeElement),r=e.pageX-i.left+this.document.body.scrollTop-Et(o)/2,s=e.pageY-i.top+this.document.body.scrollLeft-Mt(o)/2;this.renderer.setStyle(o,"top",s+"px"),this.renderer.setStyle(o,"left",r+"px"),tt(o,"p-ink-active"),this.timeout=setTimeout(()=>{let p=this.getInk();p&&Me(p,"p-ink-active")},401)}getInk(){let e=this.el.nativeElement.children;for(let o=0;o<e.length;o++)if(typeof e[o].className=="string"&&e[o].className.indexOf("p-ink")!==-1)return e[o];return null}resetInk(){let e=this.getInk();e&&Me(e,"p-ink-active")}onAnimationEnd(e){this.timeout&&clearTimeout(this.timeout),Me(e.currentTarget,"p-ink-active")}create(){let e=this.renderer.createElement("span");this.renderer.addClass(e,"p-ink"),this.renderer.appendChild(this.el.nativeElement,e),this.renderer.setAttribute(e,"aria-hidden","true"),this.renderer.setAttribute(e,"role","presentation"),this.animationListener||(this.animationListener=this.renderer.listen(e,"animationend",this.onAnimationEnd.bind(this)))}remove(){let e=this.getInk();e&&(this.mouseDownListener&&this.mouseDownListener(),this.animationListener&&this.animationListener(),this.mouseDownListener=null,this.animationListener=null,Cn(e))}ngOnDestroy(){this.config&&this.config.ripple()&&this.remove(),super.ngOnDestroy()}static \u0275fac=function(o){return new(o||t)};static \u0275dir=I({type:t,selectors:[["","pRipple",""]],hostAttrs:[1,"p-ripple"],features:[O([ao]),y]})}return t})();var di=["container"],pi=["icon"],hi=["closeicon"],gi=["*"],mi=(t,n)=>({showTransitionParams:t,hideTransitionParams:n}),fi=t=>({value:"visible()",params:t}),bi=t=>({closeCallback:t});function yi(t,n){t&1&&be(0)}function vi(t,n){if(t&1&&v(0,yi,1,0,"ng-container",7),t&2){let e=d(2);l("ngTemplateOutlet",e.iconTemplate||e.iconTemplate)}}function _i(t,n){if(t&1&&h(0,"i",3),t&2){let e=d(2);l("ngClass",e.icon)}}function Ci(t,n){if(t&1&&h(0,"span",9),t&2){let e=d(3);l("ngClass",e.cx("text"))("innerHTML",e.text,en)}}function wi(t,n){if(t&1&&(a(0,"div"),v(1,Ci,1,2,"span",8),u()),t&2){let e=d(2);c(),l("ngIf",!e.escape)}}function xi(t,n){if(t&1&&(a(0,"span",5),g(1),u()),t&2){let e=d(3);l("ngClass",e.cx("text")),c(),ee(e.text)}}function Si(t,n){if(t&1&&v(0,xi,2,2,"span",10),t&2){let e=d(2);l("ngIf",e.escape&&e.text)}}function Mi(t,n){t&1&&be(0)}function Ei(t,n){if(t&1&&v(0,Mi,1,0,"ng-container",11),t&2){let e=d(2);l("ngTemplateOutlet",e.containerTemplate||e.containerTemplate)("ngTemplateOutletContext",re(2,bi,e.close.bind(e)))}}function Ii(t,n){if(t&1&&(a(0,"span",5),ve(1),u()),t&2){let e=d(2);l("ngClass",e.cx("text"))}}function Di(t,n){if(t&1&&h(0,"i",13),t&2){let e=d(3);l("ngClass",e.closeIcon)}}function Vi(t,n){t&1&&be(0)}function Fi(t,n){if(t&1&&v(0,Vi,1,0,"ng-container",7),t&2){let e=d(3);l("ngTemplateOutlet",e.closeIconTemplate||e._closeIconTemplate)}}function Oi(t,n){t&1&&h(0,"TimesIcon",14)}function ki(t,n){if(t&1){let e=pe();a(0,"button",12),D("click",function(i){N(e);let r=d(2);return L(r.close(i))}),v(1,Di,1,1,"i",13)(2,Fi,1,1,"ng-container")(3,Oi,1,0,"TimesIcon",14),u()}if(t&2){let e=d(2);S("aria-label",e.closeAriaLabel),c(),F(e.closeIcon?1:-1),c(),F(e.closeIconTemplate||e._closeIconTemplate?2:-1),c(),F(!e.closeIconTemplate&&!e._closeIconTemplate&&!e.closeIcon?3:-1)}}function $i(t,n){if(t&1&&(a(0,"div",1)(1,"div",2),v(2,vi,1,1,"ng-container")(3,_i,1,1,"i",3)(4,wi,2,1,"div",4)(5,Si,1,1,"ng-template",null,0,un)(7,Ei,1,4,"ng-container")(8,Ii,2,1,"span",5)(9,ki,4,4,"button",6),u()()),t&2){let e=Qe(6),o=d();l("ngClass",o.containerClass)("@messageAnimation",re(13,fi,cn(10,mi,o.showTransitionOptions,o.hideTransitionOptions))),S("aria-live","polite")("role","alert"),c(2),F(o.iconTemplate||o._iconTemplate?2:-1),c(),F(o.icon?3:-1),c(),l("ngIf",!o.escape)("ngIfElse",e),c(3),F(o.containerTemplate||o._containerTemplate?7:8),c(2),F(o.closable?9:-1)}}var Ai=({dt:t})=>`
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
}`,Pi={root:({props:t})=>["p-message p-component p-message-"+t.severity,{"p-message-simple":t.variant==="simple"}],content:"p-message-content",icon:"p-message-icon",text:"p-message-text",closeButton:"p-message-close-button",closeIcon:"p-message-close-icon"},lo=(()=>{class t extends P{name="message";theme=Ai;classes=Pi;static \u0275fac=(()=>{let e;return function(i){return(e||(e=f(t)))(i||t)}})();static \u0275prov=$({token:t,factory:t.\u0275fac})}return t})();var co=(()=>{class t extends H{severity="info";text;escape=!0;style;styleClass;closable=!1;icon;closeIcon;life;showTransitionOptions="300ms ease-out";hideTransitionOptions="200ms cubic-bezier(0.86, 0, 0.07, 1)";size;variant;onClose=new q;get closeAriaLabel(){return this.config.translation.aria?this.config.translation.aria.close:void 0}get containerClass(){let e=this.variant==="outlined"?"p-message-outlined":this.variant==="simple"?"p-message-simple":"",o=this.size==="small"?"p-message-sm":this.size==="large"?"p-message-lg":"";return`p-message-${this.severity} ${e} ${o}`.trim()+(this.styleClass?" "+this.styleClass:"")}visible=J(!0);_componentStyle=b(lo);containerTemplate;iconTemplate;closeIconTemplate;templates;_containerTemplate;_iconTemplate;_closeIconTemplate;ngOnInit(){super.ngOnInit(),this.life&&setTimeout(()=>{this.visible.set(!1)},this.life)}ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"container":this._containerTemplate=e.template;break;case"icon":this._iconTemplate=e.template;break;case"closeicon":this._closeIconTemplate=e.template;break}})}close(e){this.visible.set(!1),this.onClose.emit({originalEvent:e})}static \u0275fac=(()=>{let e;return function(i){return(e||(e=f(t)))(i||t)}})();static \u0275cmp=E({type:t,selectors:[["p-message"]],contentQueries:function(o,i,r){if(o&1&&(X(r,di,4),X(r,pi,4),X(r,hi,4),X(r,nt,4)),o&2){let s;B(s=R())&&(i.containerTemplate=s.first),B(s=R())&&(i.iconTemplate=s.first),B(s=R())&&(i.closeIconTemplate=s.first),B(s=R())&&(i.templates=s)}},inputs:{severity:"severity",text:"text",escape:[2,"escape","escape",x],style:"style",styleClass:"styleClass",closable:[2,"closable","closable",x],icon:"icon",closeIcon:"closeIcon",life:"life",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",size:"size",variant:"variant"},outputs:{onClose:"onClose"},features:[O([lo]),y],ngContentSelectors:gi,decls:1,vars:1,consts:[["escapeOut",""],[1,"p-message","p-component",3,"ngClass"],[1,"p-message-content"],[1,"p-message-icon",3,"ngClass"],[4,"ngIf","ngIfElse"],[3,"ngClass"],["pRipple","","type","button",1,"p-message-close-button"],[4,"ngTemplateOutlet"],[3,"ngClass","innerHTML",4,"ngIf"],[3,"ngClass","innerHTML"],[3,"ngClass",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["pRipple","","type","button",1,"p-message-close-button",3,"click"],[1,"p-message-close-icon",3,"ngClass"],["styleClass","p-message-close-icon"]],template:function(o,i){o&1&&(ye(),v(0,$i,10,15,"div",1)),o&2&&F(i.visible()?0:-1)},dependencies:[te,_e,Ze,Ke,so,ft,Z],encapsulation:2,data:{animation:[Ae("messageAnimation",[Se(":enter",[he({opacity:0,transform:"translateY(-25%)"}),xe("{{showTransitionParams}}")]),Se(":leave",[xe("{{hideTransitionParams}}",he({height:0,marginTop:0,marginBottom:0,marginLeft:0,marginRight:0,opacity:0}))])])]},changeDetection:0})}return t})();var uo=(()=>{class t{static zindex=1e3;static calculatedScrollbarWidth=null;static calculatedScrollbarHeight=null;static browser;static addClass(e,o){e&&o&&(e.classList?e.classList.add(o):e.className+=" "+o)}static addMultipleClasses(e,o){if(e&&o)if(e.classList){let i=o.trim().split(" ");for(let r=0;r<i.length;r++)e.classList.add(i[r])}else{let i=o.split(" ");for(let r=0;r<i.length;r++)e.className+=" "+i[r]}}static removeClass(e,o){e&&o&&(e.classList?e.classList.remove(o):e.className=e.className.replace(new RegExp("(^|\\b)"+o.split(" ").join("|")+"(\\b|$)","gi")," "))}static removeMultipleClasses(e,o){e&&o&&[o].flat().filter(Boolean).forEach(i=>i.split(" ").forEach(r=>this.removeClass(e,r)))}static hasClass(e,o){return e&&o?e.classList?e.classList.contains(o):new RegExp("(^| )"+o+"( |$)","gi").test(e.className):!1}static siblings(e){return Array.prototype.filter.call(e.parentNode.children,function(o){return o!==e})}static find(e,o){return Array.from(e.querySelectorAll(o))}static findSingle(e,o){return this.isElement(e)?e.querySelector(o):null}static index(e){let o=e.parentNode.childNodes,i=0;for(var r=0;r<o.length;r++){if(o[r]==e)return i;o[r].nodeType==1&&i++}return-1}static indexWithinGroup(e,o){let i=e.parentNode?e.parentNode.childNodes:[],r=0;for(var s=0;s<i.length;s++){if(i[s]==e)return r;i[s].attributes&&i[s].attributes[o]&&i[s].nodeType==1&&r++}return-1}static appendOverlay(e,o,i="self"){i!=="self"&&e&&o&&this.appendChild(e,o)}static alignOverlay(e,o,i="self",r=!0){e&&o&&(r&&(e.style.minWidth=`${t.getOuterWidth(o)}px`),i==="self"?this.relativePosition(e,o):this.absolutePosition(e,o))}static relativePosition(e,o,i=!0){let r=He=>{if(He)return getComputedStyle(He).getPropertyValue("position")==="relative"?He:r(He.parentElement)},s=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e),p=o.offsetHeight,m=o.getBoundingClientRect(),M=this.getWindowScrollTop(),w=this.getWindowScrollLeft(),V=this.getViewport(),k=r(e)?.getBoundingClientRect()||{top:-1*M,left:-1*w},W,ne;m.top+p+s.height>V.height?(W=m.top-k.top-s.height,e.style.transformOrigin="bottom",m.top+W<0&&(W=-1*m.top)):(W=p+m.top-k.top,e.style.transformOrigin="top");let Ut=m.left+s.width-V.width,So=m.left-k.left;s.width>V.width?ne=(m.left-k.left)*-1:Ut>0?ne=So-Ut:ne=m.left-k.left,e.style.top=W+"px",e.style.left=ne+"px",i&&(e.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static absolutePosition(e,o,i=!0){let r=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e),s=r.height,p=r.width,m=o.offsetHeight,M=o.offsetWidth,w=o.getBoundingClientRect(),V=this.getWindowScrollTop(),j=this.getWindowScrollLeft(),k=this.getViewport(),W,ne;w.top+m+s>k.height?(W=w.top+V-s,e.style.transformOrigin="bottom",W<0&&(W=V)):(W=m+w.top+V,e.style.transformOrigin="top"),w.left+p>k.width?ne=Math.max(0,w.left+j+M-p):ne=w.left+j,e.style.top=W+"px",e.style.left=ne+"px",i&&(e.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static getParents(e,o=[]){return e.parentNode===null?o:this.getParents(e.parentNode,o.concat([e.parentNode]))}static getScrollableParents(e){let o=[];if(e){let i=this.getParents(e),r=/(auto|scroll)/,s=p=>{let m=window.getComputedStyle(p,null);return r.test(m.getPropertyValue("overflow"))||r.test(m.getPropertyValue("overflowX"))||r.test(m.getPropertyValue("overflowY"))};for(let p of i){let m=p.nodeType===1&&p.dataset.scrollselectors;if(m){let M=m.split(",");for(let w of M){let V=this.findSingle(p,w);V&&s(V)&&o.push(V)}}p.nodeType!==9&&s(p)&&o.push(p)}}return o}static getHiddenElementOuterHeight(e){e.style.visibility="hidden",e.style.display="block";let o=e.offsetHeight;return e.style.display="none",e.style.visibility="visible",o}static getHiddenElementOuterWidth(e){e.style.visibility="hidden",e.style.display="block";let o=e.offsetWidth;return e.style.display="none",e.style.visibility="visible",o}static getHiddenElementDimensions(e){let o={};return e.style.visibility="hidden",e.style.display="block",o.width=e.offsetWidth,o.height=e.offsetHeight,e.style.display="none",e.style.visibility="visible",o}static scrollInView(e,o){let i=getComputedStyle(e).getPropertyValue("borderTopWidth"),r=i?parseFloat(i):0,s=getComputedStyle(e).getPropertyValue("paddingTop"),p=s?parseFloat(s):0,m=e.getBoundingClientRect(),w=o.getBoundingClientRect().top+document.body.scrollTop-(m.top+document.body.scrollTop)-r-p,V=e.scrollTop,j=e.clientHeight,k=this.getOuterHeight(o);w<0?e.scrollTop=V+w:w+k>j&&(e.scrollTop=V+w-j+k)}static fadeIn(e,o){e.style.opacity=0;let i=+new Date,r=0,s=function(){r=+e.style.opacity.replace(",",".")+(new Date().getTime()-i)/o,e.style.opacity=r,i=+new Date,+r<1&&(window.requestAnimationFrame&&requestAnimationFrame(s)||setTimeout(s,16))};s()}static fadeOut(e,o){var i=1,r=50,s=o,p=r/s;let m=setInterval(()=>{i=i-p,i<=0&&(i=0,clearInterval(m)),e.style.opacity=i},r)}static getWindowScrollTop(){let e=document.documentElement;return(window.pageYOffset||e.scrollTop)-(e.clientTop||0)}static getWindowScrollLeft(){let e=document.documentElement;return(window.pageXOffset||e.scrollLeft)-(e.clientLeft||0)}static matches(e,o){var i=Element.prototype,r=i.matches||i.webkitMatchesSelector||i.mozMatchesSelector||i.msMatchesSelector||function(s){return[].indexOf.call(document.querySelectorAll(s),this)!==-1};return r.call(e,o)}static getOuterWidth(e,o){let i=e.offsetWidth;if(o){let r=getComputedStyle(e);i+=parseFloat(r.marginLeft)+parseFloat(r.marginRight)}return i}static getHorizontalPadding(e){let o=getComputedStyle(e);return parseFloat(o.paddingLeft)+parseFloat(o.paddingRight)}static getHorizontalMargin(e){let o=getComputedStyle(e);return parseFloat(o.marginLeft)+parseFloat(o.marginRight)}static innerWidth(e){let o=e.offsetWidth,i=getComputedStyle(e);return o+=parseFloat(i.paddingLeft)+parseFloat(i.paddingRight),o}static width(e){let o=e.offsetWidth,i=getComputedStyle(e);return o-=parseFloat(i.paddingLeft)+parseFloat(i.paddingRight),o}static getInnerHeight(e){let o=e.offsetHeight,i=getComputedStyle(e);return o+=parseFloat(i.paddingTop)+parseFloat(i.paddingBottom),o}static getOuterHeight(e,o){let i=e.offsetHeight;if(o){let r=getComputedStyle(e);i+=parseFloat(r.marginTop)+parseFloat(r.marginBottom)}return i}static getHeight(e){let o=e.offsetHeight,i=getComputedStyle(e);return o-=parseFloat(i.paddingTop)+parseFloat(i.paddingBottom)+parseFloat(i.borderTopWidth)+parseFloat(i.borderBottomWidth),o}static getWidth(e){let o=e.offsetWidth,i=getComputedStyle(e);return o-=parseFloat(i.paddingLeft)+parseFloat(i.paddingRight)+parseFloat(i.borderLeftWidth)+parseFloat(i.borderRightWidth),o}static getViewport(){let e=window,o=document,i=o.documentElement,r=o.getElementsByTagName("body")[0],s=e.innerWidth||i.clientWidth||r.clientWidth,p=e.innerHeight||i.clientHeight||r.clientHeight;return{width:s,height:p}}static getOffset(e){var o=e.getBoundingClientRect();return{top:o.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:o.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}static replaceElementWith(e,o){let i=e.parentNode;if(!i)throw"Can't replace element";return i.replaceChild(o,e)}static getUserAgent(){if(navigator&&this.isClient())return navigator.userAgent}static isIE(){var e=window.navigator.userAgent,o=e.indexOf("MSIE ");if(o>0)return!0;var i=e.indexOf("Trident/");if(i>0){var r=e.indexOf("rv:");return!0}var s=e.indexOf("Edge/");return s>0}static isIOS(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream}static isAndroid(){return/(android)/i.test(navigator.userAgent)}static isTouchDevice(){return"ontouchstart"in window||navigator.maxTouchPoints>0}static appendChild(e,o){if(this.isElement(o))o.appendChild(e);else if(o&&o.el&&o.el.nativeElement)o.el.nativeElement.appendChild(e);else throw"Cannot append "+o+" to "+e}static removeChild(e,o){if(this.isElement(o))o.removeChild(e);else if(o.el&&o.el.nativeElement)o.el.nativeElement.removeChild(e);else throw"Cannot remove "+e+" from "+o}static removeElement(e){"remove"in Element.prototype?e.remove():e.parentNode.removeChild(e)}static isElement(e){return typeof HTMLElement=="object"?e instanceof HTMLElement:e&&typeof e=="object"&&e!==null&&e.nodeType===1&&typeof e.nodeName=="string"}static calculateScrollbarWidth(e){if(e){let o=getComputedStyle(e);return e.offsetWidth-e.clientWidth-parseFloat(o.borderLeftWidth)-parseFloat(o.borderRightWidth)}else{if(this.calculatedScrollbarWidth!==null)return this.calculatedScrollbarWidth;let o=document.createElement("div");o.className="p-scrollbar-measure",document.body.appendChild(o);let i=o.offsetWidth-o.clientWidth;return document.body.removeChild(o),this.calculatedScrollbarWidth=i,i}}static calculateScrollbarHeight(){if(this.calculatedScrollbarHeight!==null)return this.calculatedScrollbarHeight;let e=document.createElement("div");e.className="p-scrollbar-measure",document.body.appendChild(e);let o=e.offsetHeight-e.clientHeight;return document.body.removeChild(e),this.calculatedScrollbarWidth=o,o}static invokeElementMethod(e,o,i){e[o].apply(e,i)}static clearSelection(){if(window.getSelection)window.getSelection().empty?window.getSelection().empty():window.getSelection().removeAllRanges&&window.getSelection().rangeCount>0&&window.getSelection().getRangeAt(0).getClientRects().length>0&&window.getSelection().removeAllRanges();else if(document.selection&&document.selection.empty)try{document.selection.empty()}catch{}}static getBrowser(){if(!this.browser){let e=this.resolveUserAgent();this.browser={},e.browser&&(this.browser[e.browser]=!0,this.browser.version=e.version),this.browser.chrome?this.browser.webkit=!0:this.browser.webkit&&(this.browser.safari=!0)}return this.browser}static resolveUserAgent(){let e=navigator.userAgent.toLowerCase(),o=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:o[1]||"",version:o[2]||"0"}}static isInteger(e){return Number.isInteger?Number.isInteger(e):typeof e=="number"&&isFinite(e)&&Math.floor(e)===e}static isHidden(e){return!e||e.offsetParent===null}static isVisible(e){return e&&e.offsetParent!=null}static isExist(e){return e!==null&&typeof e<"u"&&e.nodeName&&e.parentNode}static focus(e,o){e&&document.activeElement!==e&&e.focus(o)}static getFocusableSelectorString(e=""){return`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        .p-inputtext:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        .p-button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e}`}static getFocusableElements(e,o=""){let i=this.find(e,this.getFocusableSelectorString(o)),r=[];for(let s of i){let p=getComputedStyle(s);this.isVisible(s)&&p.display!="none"&&p.visibility!="hidden"&&r.push(s)}return r}static getFocusableElement(e,o=""){let i=this.findSingle(e,this.getFocusableSelectorString(o));if(i){let r=getComputedStyle(i);if(this.isVisible(i)&&r.display!="none"&&r.visibility!="hidden")return i}return null}static getFirstFocusableElement(e,o=""){let i=this.getFocusableElements(e,o);return i.length>0?i[0]:null}static getLastFocusableElement(e,o){let i=this.getFocusableElements(e,o);return i.length>0?i[i.length-1]:null}static getNextFocusableElement(e,o=!1){let i=t.getFocusableElements(e),r=0;if(i&&i.length>0){let s=i.indexOf(i[0].ownerDocument.activeElement);o?s==-1||s===0?r=i.length-1:r=s-1:s!=-1&&s!==i.length-1&&(r=s+1)}return i[r]}static generateZIndex(){return this.zindex=this.zindex||999,++this.zindex}static getSelection(){return window.getSelection?window.getSelection().toString():document.getSelection?document.getSelection().toString():document.selection?document.selection.createRange().text:null}static getTargetElement(e,o){if(!e)return null;switch(e){case"document":return document;case"window":return window;case"@next":return o?.nextElementSibling;case"@prev":return o?.previousElementSibling;case"@parent":return o?.parentElement;case"@grandparent":return o?.parentElement.parentElement;default:let i=typeof e;if(i==="string")return document.querySelector(e);if(i==="object"&&e.hasOwnProperty("nativeElement"))return this.isExist(e.nativeElement)?e.nativeElement:void 0;let s=(p=>!!(p&&p.constructor&&p.call&&p.apply))(e)?e():e;return s&&s.nodeType===9||this.isExist(s)?s:null}}static isClient(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}static getAttribute(e,o){if(e){let i=e.getAttribute(o);return isNaN(i)?i==="true"||i==="false"?i==="true":i:+i}}static calculateBodyScrollbarWidth(){return window.innerWidth-document.documentElement.offsetWidth}static blockBodyScroll(e="p-overflow-hidden"){document.body.style.setProperty("--scrollbar-width",this.calculateBodyScrollbarWidth()+"px"),this.addClass(document.body,e)}static unblockBodyScroll(e="p-overflow-hidden"){document.body.style.removeProperty("--scrollbar-width"),this.removeClass(document.body,e)}static createElement(e,o={},...i){if(e){let r=document.createElement(e);return this.setAttributes(r,o),r.append(...i),r}}static setAttribute(e,o="",i){this.isElement(e)&&i!==null&&i!==void 0&&e.setAttribute(o,i)}static setAttributes(e,o={}){if(this.isElement(e)){let i=(r,s)=>{let p=e?.$attrs?.[r]?[e?.$attrs?.[r]]:[];return[s].flat().reduce((m,M)=>{if(M!=null){let w=typeof M;if(w==="string"||w==="number")m.push(M);else if(w==="object"){let V=Array.isArray(M)?i(r,M):Object.entries(M).map(([j,k])=>r==="style"&&(k||k===0)?`${j.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${k}`:k?j:void 0);m=V.length?m.concat(V.filter(j=>!!j)):m}}return m},p)};Object.entries(o).forEach(([r,s])=>{if(s!=null){let p=r.match(/^on(.+)/);p?e.addEventListener(p[1].toLowerCase(),s):r==="pBind"?this.setAttributes(e,s):(s=r==="class"?[...new Set(i("class",s))].join(" ").trim():r==="style"?i("style",s).join(";").trim():s,(e.$attrs=e.$attrs||{})&&(e.$attrs[r]=s),e.setAttribute(r,s))}})}}static isFocusableElement(e,o=""){return this.isElement(e)?e.matches(`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${o},
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${o},
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${o},
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${o},
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${o},
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${o},
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${o}`):!1}}return t})();var po=(()=>{class t extends H{autofocus=!1;_autofocus=!1;focused=!1;platformId=b(We);document=b(Xe);host=b(de);ngAfterContentChecked(){this.autofocus===!1?this.host.nativeElement.removeAttribute("autofocus"):this.host.nativeElement.setAttribute("autofocus",!0),this.focused||this.autoFocus()}ngAfterViewChecked(){this.focused||this.autoFocus()}autoFocus(){Je(this.platformId)&&this._autofocus&&setTimeout(()=>{let e=uo.getFocusableElements(this.host?.nativeElement);e.length===0&&this.host.nativeElement.focus(),e.length>0&&e[0].focus(),this.focused=!0})}static \u0275fac=(()=>{let e;return function(i){return(e||(e=f(t)))(i||t)}})();static \u0275dir=I({type:t,selectors:[["","pAutoFocus",""]],inputs:{autofocus:[2,"autofocus","autofocus",x],_autofocus:[0,"pAutoFocus","_autofocus"]},features:[y]})}return t})();var Ti=({dt:t})=>`
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
`,Ni={root:({props:t,instance:n})=>["p-badge p-component",{"p-badge-circle":It(t.value)&&String(t.value).length===1,"p-badge-dot":ge(t.value)&&!n.$slots.default,"p-badge-sm":t.size==="small","p-badge-lg":t.size==="large","p-badge-xl":t.size==="xlarge","p-badge-info":t.severity==="info","p-badge-success":t.severity==="success","p-badge-warn":t.severity==="warn","p-badge-danger":t.severity==="danger","p-badge-secondary":t.severity==="secondary","p-badge-contrast":t.severity==="contrast"}]},ho=(()=>{class t extends P{name="badge";theme=Ti;classes=Ni;static \u0275fac=(()=>{let e;return function(i){return(e||(e=f(t)))(i||t)}})();static \u0275prov=$({token:t,factory:t.\u0275fac})}return t})();var Wt=(()=>{class t extends H{styleClass=oe();style=oe();badgeSize=oe();size=oe();severity=oe();value=oe();badgeDisabled=oe(!1,{transform:x});_componentStyle=b(ho);containerClass=ae(()=>{let e="p-badge p-component";return It(this.value())&&String(this.value()).length===1&&(e+=" p-badge-circle"),this.badgeSize()==="large"?e+=" p-badge-lg":this.badgeSize()==="xlarge"?e+=" p-badge-xl":this.badgeSize()==="small"&&(e+=" p-badge-sm"),ge(this.value())&&(e+=" p-badge-dot"),this.styleClass()&&(e+=` ${this.styleClass()}`),this.severity()&&(e+=` p-badge-${this.severity()}`),e});static \u0275fac=(()=>{let e;return function(i){return(e||(e=f(t)))(i||t)}})();static \u0275cmp=E({type:t,selectors:[["p-badge"]],hostVars:6,hostBindings:function(o,i){o&2&&(rn(i.style()),ie(i.containerClass()),on("display",i.badgeDisabled()?"none":null))},inputs:{styleClass:[1,"styleClass"],style:[1,"style"],badgeSize:[1,"badgeSize"],size:[1,"size"],severity:[1,"severity"],value:[1,"value"],badgeDisabled:[1,"badgeDisabled"]},features:[O([ho]),y],decls:1,vars:1,template:function(o,i){o&1&&g(0),o&2&&ee(i.value())},dependencies:[te,Z],encapsulation:2,changeDetection:0})}return t})(),go=(()=>{class t{static \u0275fac=function(o){return new(o||t)};static \u0275mod=Y({type:t});static \u0275inj=U({imports:[Wt,Z,Z]})}return t})();var Bi=["content"],Ri=["loadingicon"],zi=["icon"],Hi=["*"],fo=t=>({class:t});function ji(t,n){t&1&&be(0)}function Wi(t,n){if(t&1&&h(0,"span",8),t&2){let e=d(3);l("ngClass",e.iconClass()),S("aria-hidden",!0)("data-pc-section","loadingicon")}}function Gi(t,n){if(t&1&&h(0,"SpinnerIcon",9),t&2){let e=d(3);l("styleClass",e.spinnerIconClass())("spin",!0),S("aria-hidden",!0)("data-pc-section","loadingicon")}}function Ui(t,n){if(t&1&&(qe(0),v(1,Wi,1,3,"span",6)(2,Gi,1,4,"SpinnerIcon",7),Ye()),t&2){let e=d(2);c(),l("ngIf",e.loadingIcon),c(),l("ngIf",!e.loadingIcon)}}function qi(t,n){}function Yi(t,n){if(t&1&&v(0,qi,0,0,"ng-template",10),t&2){let e=d(2);l("ngIf",e.loadingIconTemplate||e._loadingIconTemplate)}}function Qi(t,n){if(t&1&&(qe(0),v(1,Ui,3,2,"ng-container",2)(2,Yi,1,1,null,5),Ye()),t&2){let e=d();c(),l("ngIf",!e.loadingIconTemplate&&!e._loadingIconTemplate),c(),l("ngTemplateOutlet",e.loadingIconTemplate||e._loadingIconTemplate)("ngTemplateOutletContext",re(3,fo,e.iconClass()))}}function Xi(t,n){if(t&1&&h(0,"span",8),t&2){let e=d(2);ie(e.icon),l("ngClass",e.iconClass()),S("data-pc-section","icon")}}function Zi(t,n){}function Ki(t,n){if(t&1&&v(0,Zi,0,0,"ng-template",10),t&2){let e=d(2);l("ngIf",!e.icon&&(e.iconTemplate||e._iconTemplate))}}function Ji(t,n){if(t&1&&(qe(0),v(1,Xi,1,4,"span",11)(2,Ki,1,1,null,5),Ye()),t&2){let e=d();c(),l("ngIf",e.icon&&!e.iconTemplate&&!e._iconTemplate),c(),l("ngTemplateOutlet",e.iconTemplate||e._iconTemplate)("ngTemplateOutletContext",re(3,fo,e.iconClass()))}}function er(t,n){if(t&1&&(a(0,"span",12),g(1),u()),t&2){let e=d();S("aria-hidden",e.icon&&!e.label)("data-pc-section","label"),c(),ee(e.label)}}function tr(t,n){if(t&1&&h(0,"p-badge",13),t&2){let e=d();l("value",e.badge)("severity",e.badgeSeverity)}}var nr=({dt:t})=>`
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
`,or={root:({instance:t,props:n})=>["p-button p-component",{"p-button-icon-only":t.hasIcon&&!n.label&&!n.badge,"p-button-vertical":(n.iconPos==="top"||n.iconPos==="bottom")&&n.label,"p-button-loading":n.loading,"p-button-link":n.link,[`p-button-${n.severity}`]:n.severity,"p-button-raised":n.raised,"p-button-rounded":n.rounded,"p-button-text":n.text,"p-button-outlined":n.outlined,"p-button-sm":n.size==="small","p-button-lg":n.size==="large","p-button-plain":n.plain,"p-button-fluid":n.fluid}],loadingIcon:"p-button-loading-icon",icon:({props:t})=>["p-button-icon",{[`p-button-icon-${t.iconPos}`]:t.label}],label:"p-button-label"},mo=(()=>{class t extends P{name="button";theme=nr;classes=or;static \u0275fac=(()=>{let e;return function(i){return(e||(e=f(t)))(i||t)}})();static \u0275prov=$({token:t,factory:t.\u0275fac})}return t})();var ir=(()=>{class t extends H{type="button";iconPos="left";icon;badge;label;disabled;loading=!1;loadingIcon;raised=!1;rounded=!1;text=!1;plain=!1;severity;outlined=!1;link=!1;tabindex;size;variant;style;styleClass;badgeClass;badgeSeverity="secondary";ariaLabel;autofocus;fluid;onClick=new q;onFocus=new q;onBlur=new q;contentTemplate;loadingIconTemplate;iconTemplate;_buttonProps;get buttonProps(){return this._buttonProps}set buttonProps(e){this._buttonProps=e,e&&typeof e=="object"&&Object.entries(e).forEach(([o,i])=>this[`_${o}`]!==i&&(this[`_${o}`]=i))}get hasFluid(){let o=this.el.nativeElement.closest("p-fluid");return ge(this.fluid)?!!o:this.fluid}_componentStyle=b(mo);templates;_contentTemplate;_iconTemplate;_loadingIconTemplate;ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"content":this._contentTemplate=e.template;break;case"icon":this._iconTemplate=e.template;break;case"loadingicon":this._loadingIconTemplate=e.template;break;default:this._contentTemplate=e.template;break}})}ngOnChanges(e){super.ngOnChanges(e);let{buttonProps:o}=e;if(o){let i=o.currentValue;for(let r in i)this[r]=i[r]}}spinnerIconClass(){return Object.entries(this.iconClass()).filter(([,e])=>!!e).reduce((e,[o])=>e+` ${o}`,"p-button-loading-icon")}iconClass(){return{[`p-button-loading-icon pi-spin ${this.loadingIcon??""}`]:this.loading,"p-button-icon":!0,"p-button-icon-left":this.iconPos==="left"&&this.label,"p-button-icon-right":this.iconPos==="right"&&this.label,"p-button-icon-top":this.iconPos==="top"&&this.label,"p-button-icon-bottom":this.iconPos==="bottom"&&this.label}}get buttonClass(){return{"p-button p-component":!0,"p-button-icon-only":(this.icon||this.iconTemplate||this._iconTemplate||this.loadingIcon||this.loadingIconTemplate||this._loadingIconTemplate)&&!this.label,"p-button-vertical":(this.iconPos==="top"||this.iconPos==="bottom")&&this.label,"p-button-loading":this.loading,"p-button-loading-label-only":this.loading&&!this.icon&&this.label&&!this.loadingIcon&&this.iconPos==="left","p-button-link":this.link,[`p-button-${this.severity}`]:this.severity,"p-button-raised":this.raised,"p-button-rounded":this.rounded,"p-button-text":this.text||this.variant=="text","p-button-outlined":this.outlined||this.variant=="outlined","p-button-sm":this.size==="small","p-button-lg":this.size==="large","p-button-plain":this.plain,"p-button-fluid":this.hasFluid,[`${this.styleClass}`]:this.styleClass}}static \u0275fac=(()=>{let e;return function(i){return(e||(e=f(t)))(i||t)}})();static \u0275cmp=E({type:t,selectors:[["p-button"]],contentQueries:function(o,i,r){if(o&1&&(X(r,Bi,5),X(r,Ri,5),X(r,zi,5),X(r,nt,4)),o&2){let s;B(s=R())&&(i.contentTemplate=s.first),B(s=R())&&(i.loadingIconTemplate=s.first),B(s=R())&&(i.iconTemplate=s.first),B(s=R())&&(i.templates=s)}},inputs:{type:"type",iconPos:"iconPos",icon:"icon",badge:"badge",label:"label",disabled:[2,"disabled","disabled",x],loading:[2,"loading","loading",x],loadingIcon:"loadingIcon",raised:[2,"raised","raised",x],rounded:[2,"rounded","rounded",x],text:[2,"text","text",x],plain:[2,"plain","plain",x],severity:"severity",outlined:[2,"outlined","outlined",x],link:[2,"link","link",x],tabindex:[2,"tabindex","tabindex",dn],size:"size",variant:"variant",style:"style",styleClass:"styleClass",badgeClass:"badgeClass",badgeSeverity:"badgeSeverity",ariaLabel:"ariaLabel",autofocus:[2,"autofocus","autofocus",x],fluid:[2,"fluid","fluid",x],buttonProps:"buttonProps"},outputs:{onClick:"onClick",onFocus:"onFocus",onBlur:"onBlur"},features:[O([mo]),y,K],ngContentSelectors:Hi,decls:7,vars:14,consts:[["pRipple","",3,"click","focus","blur","ngStyle","disabled","ngClass","pAutoFocus"],[4,"ngTemplateOutlet"],[4,"ngIf"],["class","p-button-label",4,"ngIf"],[3,"value","severity",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"ngClass",4,"ngIf"],[3,"styleClass","spin",4,"ngIf"],[3,"ngClass"],[3,"styleClass","spin"],[3,"ngIf"],[3,"class","ngClass",4,"ngIf"],[1,"p-button-label"],[3,"value","severity"]],template:function(o,i){o&1&&(ye(),a(0,"button",0),D("click",function(s){return i.onClick.emit(s)})("focus",function(s){return i.onFocus.emit(s)})("blur",function(s){return i.onBlur.emit(s)}),ve(1),v(2,ji,1,0,"ng-container",1)(3,Qi,3,5,"ng-container",2)(4,Ji,3,5,"ng-container",2)(5,er,2,3,"span",3)(6,tr,1,2,"p-badge",4),u()),o&2&&(l("ngStyle",i.style)("disabled",i.disabled||i.loading)("ngClass",i.buttonClass)("pAutoFocus",i.autofocus),S("type",i.type)("aria-label",i.ariaLabel)("data-pc-name","button")("data-pc-section","root")("tabindex",i.tabindex),c(2),l("ngTemplateOutlet",i.contentTemplate||i._contentTemplate),c(),l("ngIf",i.loading),c(),l("ngIf",!i.loading),c(),l("ngIf",!i.contentTemplate&&!i._contentTemplate&&i.label),c(),l("ngIf",!i.contentTemplate&&!i._contentTemplate&&i.badge))},dependencies:[te,_e,Ze,Ke,hn,ft,po,ro,go,Wt,Z],encapsulation:2,changeDetection:0})}return t})(),bo=(()=>{class t{static \u0275fac=function(o){return new(o||t)};static \u0275mod=Y({type:t});static \u0275inj=U({imports:[te,ir,Z,Z]})}return t})();var bt=class t{constructor(n){this._http=n}apiServiceUrl=le.formspreeApi;sendFormData(n){return this._http.post(this.apiServiceUrl,n,{headers:{Accept:"application/json"}})}static \u0275fac=function(e){return new(e||t)(Zt(mn))};static \u0275prov=$({token:t,factory:t.\u0275fac,providedIn:"root"})};var sr=t=>({"hidden-footer":t}),ar=()=>[""],yo=()=>["about"],vo=()=>["releases"],_o=()=>["events"],Co=()=>["mixtape-archive"],wo=()=>["moreismoreismore"];function lr(t,n){t&1&&(a(0,"button",19),g(1,"Sending..."),u())}function cr(t,n){if(t&1&&(a(0,"button",20),g(1," Subscribe "),u()),t&2){let e=d();l("disabled",e.fgNewsletter.invalid)}}function ur(t,n){if(t&1&&(a(0,"p-message",24),g(1),u()),t&2){let e=d();l("life",3e3)("severity",e.messageForm.severity),c(),ee(e.messageForm.message)}}var yt=class t{constructor(n,e){this._formsspreeService=n;this.router=e;this.fgNewsletter=new Oe({email:new to().control("",[Re.required,Re.email])})}uriAssetsImages=le.uriAssetsImages;emailCopy="neanchepersognorecords@gmail.com";isHidden=!1;lastScrollTop=0;messageForm={};fgNewsletter;isLoadingForm=!1;visibleMessageForm=J(!1);ngOnInit(){this.visibleMessageForm.set(!1)}isHome(){return this.router.url==="/"}onWindowScroll(){if(window.innerWidth<=768&&this.isHome()){this.isHidden=!1;return}let n=window.scrollY||document.documentElement.scrollTop,e=document.documentElement.scrollHeight-window.innerHeight;if(e<=0){this.isHidden=!1;return}n>this.lastScrollTop?this.isHidden=!0:n<this.lastScrollTop&&n<e-50&&(this.isHidden=!1),this.lastScrollTop=n<=0?0:n}onSubmitForm(){if(this.isLoadingForm=!0,this.visibleMessageForm.set(!1),this.fgNewsletter.valid){let n=new FormData;n.append("email",this.fgNewsletter.value.email),this._formsspreeService.sendFormData(n).subscribe({next:e=>{console.log("ok: ",e),this.fgNewsletter.reset(),this.isLoadingForm=!1,this.messageForm={severity:"success",message:"Ti sei iscritto con successo!"}},error:e=>{this.fgNewsletter.reset(),console.error("Error submitting form: ",e),this.messageForm={severity:"error",message:"Oops! Qualcosa \xE8 andato male, riprova pi\xF9 tardi."},this.isLoadingForm=!1,this.visibleMessageForm.set(!0)}})}}onCopyEmail(){navigator.clipboard.writeText("neanchepersognorecords@gmail.com").then(()=>{this.emailCopy="Copied to clipboard!"}).catch(e=>{console.error("Failed to copy email: ",e)})}static \u0275fac=function(e){return new(e||t)(C(bt),C(Ce))};static \u0275cmp=E({type:t,selectors:[["app-footer"]],hostBindings:function(e,o){e&1&&D("scroll",function(){return o.onWindowScroll()},!1,tn)},decls:52,vars:31,consts:[[1,"floating-footer",3,"ngClass"],[1,"bottom-logo-container"],[3,"routerLink"],["alt","Logo Neanche Per Sogno",1,"bottom-logo",3,"src"],[1,"logo-credit"],["href","https://www.muah.studio","target","_blank","rel","noopener noreferrer"],[1,"bottom-links-container"],[1,"bottom-links"],[1,"bottom-links-row","row-desktop-only"],["routerLinkActive","active",3,"routerLink"],["href","https://nxsrecords.bandcamp.com/merch","target","_blank","rel","noopener noreferrer"],[1,"bottom-links-row","row-mobile-main"],[1,"bottom-links-row","row-mobile-secondary"],[1,"copy-email","copy-email-mobile",3,"click"],[1,"copy-email","copy-email-desktop",3,"click"],[1,"newsletter-wrapper"],[1,"newsletter-title"],["id","newsletter-form",1,"subscribe-box",3,"submit","formGroup"],["formControlName","email","type","email","id","email","name","email","placeholder","Email address","required",""],["type","submit"],["type","submit",3,"disabled"],["id","form-status",2,"margin-left","10px","font-size","0.7rem","color","rgb(127, 127, 127)"],[1,"messagge-form"],[1,"card","flex","flex-col"],["closable","",3,"life","severity"]],template:function(e,o){e&1&&(a(0,"div",0)(1,"div",1)(2,"a",2),h(3,"img",3),u(),a(4,"div",4),g(5," EST. 2022, Logo by "),a(6,"a",5),g(7,"Muah! Studio"),u()()(),a(8,"div",6)(9,"div",7)(10,"div",8)(11,"a",9),g(12,"About"),u(),a(13,"a",9),g(14,"Releases"),u(),a(15,"a",9),g(16,"Events"),u(),a(17,"a",9),g(18,"Mixtape Archive"),u(),a(19,"a",10),g(20,"Buy"),u(),a(21,"a",9),g(22,"MORE IS MORE IS MORE"),u()(),a(23,"div",11)(24,"a",9),g(25,"About"),u(),a(26,"a",9),g(27,"Releases"),u(),a(28,"a",9),g(29,"Events"),u(),a(30,"a",9),g(31,"Mixtape Archive"),u(),a(32,"a",10),g(33,"Buy"),u()(),a(34,"div",12)(35,"a",9),g(36,"MORE IS MORE IS MORE"),u(),a(37,"span",13),D("click",function(){return o.onCopyEmail()}),g(38),u()()(),a(39,"div",14),D("click",function(){return o.onCopyEmail()}),g(40),u(),a(41,"div",15)(42,"p",16),g(43,"Newsletter:"),u(),a(44,"form",17),D("submit",function(){return o.onSubmitForm()}),h(45,"input",18),v(46,lr,2,0,"button",19)(47,cr,2,1,"button",20),h(48,"span",21),u(),a(49,"div",22)(50,"div",23),v(51,ur,2,3,"p-message",24),u()()()()()),e&2&&(l("ngClass",re(18,sr,o.isHidden)),c(2),l("routerLink",z(20,ar)),c(),l("src",o.uriAssetsImages+"/nxs-logo.png",A),c(8),l("routerLink",z(21,yo)),c(2),l("routerLink",z(22,vo)),c(2),l("routerLink",z(23,_o)),c(2),l("routerLink",z(24,Co)),c(4),l("routerLink",z(25,wo)),c(3),l("routerLink",z(26,yo)),c(2),l("routerLink",z(27,vo)),c(2),l("routerLink",z(28,_o)),c(2),l("routerLink",z(29,Co)),c(5),l("routerLink",z(30,wo)),c(3),ee(o.emailCopy),c(2),ln(" ",o.emailCopy," "),c(4),l("formGroup",o.fgNewsletter),c(2),F(o.isLoadingForm?46:47),c(5),F(o.visibleMessageForm()?51:-1))},dependencies:[et,we,bn,_e,no,Kn,pt,qn,Yn,jt,oo,zt,Ht,co,bo],styles:['.floating-footer[_ngcontent-%COMP%]:before{content:"";position:absolute;top:-10px;left:0;width:100%;height:0px;background:linear-gradient(to bottom,#fff0,#fff);pointer-events:none;z-index:1}.floating-footer[_ngcontent-%COMP%]{position:fixed;bottom:25px;left:0;width:100%;background:#fff;display:flex;justify-content:space-between;align-items:center;padding:25px 50px;z-index:9998;transition:transform .8s ease;transform:translateZ(0)}.bottom-links-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-start;font-size:.7rem;font-weight:300;color:#787878;font-family:Helvetica,Arial,sans-serif;text-align:left;line-height:.8;max-width:280px;gap:12px}.bottom-links[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:5px}.bottom-links-row[_ngcontent-%COMP%]{display:flex;gap:16px;justify-content:flex-start;flex-wrap:wrap;line-height:.8}.bottom-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#787878;text-decoration:none;transition:color .3s ease;font-size:.7rem;line-height:.8}.bottom-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .bottom-links[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]{color:#000}.copy-email[_ngcontent-%COMP%]{cursor:pointer;text-decoration:underline;font-size:.7rem;color:#787878;line-height:.8}.copy-email-mobile[_ngcontent-%COMP%]{display:none}.copy-email-desktop[_ngcontent-%COMP%]{display:block;margin-bottom:10px;text-align:left}.newsletter-title[_ngcontent-%COMP%]{font-size:.7rem;font-weight:300;color:#787878;font-family:Helvetica,Arial,sans-serif;line-height:.8;margin:0;white-space:nowrap}.newsletter-wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:column;line-height:.8;text-align:left}.subscribe-box[_ngcontent-%COMP%]{display:flex;gap:8px;align-items:center}.subscribe-box[_ngcontent-%COMP%]   input[type=email][_ngcontent-%COMP%]{padding:5px 8px;font-size:.7rem;border:1px solid #777;border-radius:0;outline:none;width:180px;background-color:transparent;color:#000}.subscribe-box[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background:none;border:none;color:#787878;font-size:.7rem;cursor:pointer;padding:6px 12px}.subscribe-box[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{text-decoration:underline}.row-desktop-only[_ngcontent-%COMP%]{display:flex}.row-mobile-main[_ngcontent-%COMP%], .row-mobile-secondary[_ngcontent-%COMP%]{display:none}@media (min-width: 769px){.bottom-links-container[_ngcontent-%COMP%]{line-height:.8;transform:translateY(5px)}.bottom-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:inline-block;transform:translateY(4px)}.copy-email[_ngcontent-%COMP%]{transform:translateY(6px)}.newsletter-wrapper[_ngcontent-%COMP%]{flex-direction:column}.newsletter-title[_ngcontent-%COMP%]{margin-bottom:4px}}.bottom-logo-container[_ngcontent-%COMP%]{display:flex;justify-content:center;flex-direction:column;align-items:center;line-height:1.2;text-align:center}.bottom-logo[_ngcontent-%COMP%]{max-width:220px;height:auto;opacity:1;-webkit-user-select:none;user-select:none;cursor:pointer}.logo-credit[_ngcontent-%COMP%]{margin-top:6px;font-size:.6rem;color:#ccc;font-family:Helvetica,Arial,sans-serif;text-transform:none;line-height:1.2;text-align:left}.logo-credit[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#ccc;text-decoration:none}.logo-credit[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{text-decoration:underline}@media (max-width: 768px){.bottom-logo-container[_ngcontent-%COMP%]{display:none}.floating-footer[_ngcontent-%COMP%]{bottom:25px;padding:16px 10px;flex-direction:column;align-items:center;justify-content:center;gap:12px;width:100%}.bottom-links-container[_ngcontent-%COMP%]{transform:none;margin:0 auto;max-width:100%;width:100%;align-items:center;gap:12px}.bottom-links-row[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:center;gap:10px 20px;width:100%;line-height:.8}.row-desktop-only[_ngcontent-%COMP%]{display:none}.row-mobile-main[_ngcontent-%COMP%], .row-mobile-secondary[_ngcontent-%COMP%]{display:flex}.row-mobile-secondary[_ngcontent-%COMP%]{margin-top:4px;gap:10px 20px}.copy-email-mobile[_ngcontent-%COMP%]{display:inline}.copy-email-desktop[_ngcontent-%COMP%]{display:none}.newsletter-wrapper[_ngcontent-%COMP%]{flex-direction:row;align-items:center;gap:8px;width:100%;justify-content:center;text-align:left}.newsletter-title[_ngcontent-%COMP%]{text-align:center;margin:0;white-space:nowrap}.subscribe-box[_ngcontent-%COMP%]{justify-content:center;gap:0px;flex-wrap:nowrap}.subscribe-box[_ngcontent-%COMP%]   input[type=email][_ngcontent-%COMP%]{width:120px;padding:2px 6px;font-size:.65rem}.subscribe-box[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{font-size:.65rem;padding:4px 6px}#dynamic-content-container[_ngcontent-%COMP%]{padding:5px;margin:5px}#dynamic-content-container[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{border:none}}@media (max-width: 768px){.bottom-links[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;gap:12px}}@media (max-width: 580px){.floating-footer[_ngcontent-%COMP%]{gap:.75rem;padding:10px;justify-content:center}.bottom-links-container[_ngcontent-%COMP%]{max-width:100%;margin:0 auto}.bottom-links-row[_ngcontent-%COMP%]{gap:10px 30px}.subscribe-box[_ngcontent-%COMP%]{justify-content:center}}.hidden-footer[_ngcontent-%COMP%]{transform:translateY(100%)}']})};function dr(t,n){if(t&1&&(a(0,"div",0)(1,"a",1),h(2,"img",2),u()()),t&2){let e=d();c(2),l("src",e.uriAssetsImages+"/logo-main2.png",A)}}var vt=class t{constructor(n){this.router=n}uriAssetsImages=le.uriAssetsImages;isHome(){return this.router.url==="/"}static \u0275fac=function(e){return new(e||t)(C(Ce))};static \u0275cmp=E({type:t,selectors:[["app-header"]],decls:1,vars:1,consts:[[1,"floating-header"],["routerLink","/"],["alt","Logo Neanche Per Sogno",1,"header-logo",3,"src"]],template:function(e,o){e&1&&v(0,dr,3,1,"div",0),e&2&&F(o.isHome()?-1:0)},dependencies:[et,we],styles:[".floating-header[_ngcontent-%COMP%]{display:none}@media (max-width: 768px){.floating-header[_ngcontent-%COMP%]{display:flex;position:fixed;top:0;left:0;width:100%;height:25px;background:#fff;justify-content:flex-end;align-items:center;padding:0 10px;z-index:9999;overflow:hidden}.header-logo[_ngcontent-%COMP%]{height:16px;width:auto;cursor:pointer;-webkit-user-select:none;user-select:none}}"]})};var _t=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=E({type:t,selectors:[["app-scroll-bar-bottom"]],decls:36,vars:0,consts:[[1,"scroll-bar","bottom"],[1,"scroll-content"],[1,"scroll-wrapper"],["href","https://nxsrecords.bandcamp.com/album/almost-there-almost-broken","target","_blank","rel","noopener noreferrer"],["src","assets/images/logo-cerchio.png","alt","",1,"scroll-logo"],["href","https://on.soundcloud.com/EfIMrfSUgteGMhF5rs","target","_blank","rel","noopener noreferrer"],["aria-hidden","true",1,"scroll-wrapper"]],template:function(e,o){e&1&&(a(0,"div",0)(1,"div",1)(2,"div",2)(3,"span")(4,"a",3),g(5,"OUT NOW | ALMOST THERE, ALMOST BROKEN \u2014 NEW EP BY CORGIAT (NXS005)"),u()(),h(6,"img",4),a(7,"span")(8,"a",5),g(9,"LISTEN NOW | PARINI SECONDO'S NEW MIXTAPE"),u()(),h(10,"img",4),a(11,"span")(12,"a",3),g(13,"OUT NOW | ALMOST THERE, ALMOST BROKEN \u2014 NEW EP BY CORGIAT (NXS005)"),u()(),h(14,"img",4),a(15,"span")(16,"a",5),g(17,"LISTEN NOW | PARINI SECONDO'S NEW MIXTAPE"),u()(),h(18,"img",4),u(),a(19,"div",6)(20,"span")(21,"a",3),g(22,"OUT NOW | ALMOST THERE, ALMOST BROKEN \u2014 NEW EP BY CORGIAT (NXS005)"),u()(),h(23,"img",4),a(24,"span")(25,"a",5),g(26,"LISTEN NOW | PARINI SECONDO'S NEW MIXTAPE"),u()(),h(27,"img",4),a(28,"span")(29,"a",3),g(30,"OUT NOW | ALMOST THERE, ALMOST BROKEN \u2014 NEW EP BY CORGIAT (NXS005)"),u()(),h(31,"img",4),a(32,"span")(33,"a",5),g(34,"LISTEN NOW | PARINI SECONDO'S NEW MIXTAPE"),u()(),h(35,"img",4),u()()())},styles:[".scroll-bar[_ngcontent-%COMP%]{width:100%;height:25px;background:#000;overflow:hidden;display:flex;align-items:center;position:fixed;left:0;z-index:9999}.scroll-bar.bottom[_ngcontent-%COMP%]{bottom:0}.scroll-bar[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#fff;font-size:.8rem;font-weight:700;white-space:nowrap;padding-right:1.5rem}.scroll-bar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff;text-decoration:none;align-items:center;height:25px}.scroll-content[_ngcontent-%COMP%]{display:flex;align-items:center;white-space:nowrap;animation:_ngcontent-%COMP%_scroll-left 60s linear infinite}.scroll-wrapper[_ngcontent-%COMP%]{display:inline-flex;align-items:center;white-space:nowrap;flex-shrink:0}.scroll-logo[_ngcontent-%COMP%]{height:25px;width:auto;margin:0 1.5rem}@keyframes _ngcontent-%COMP%_scroll-left{0%{transform:translate(0)}to{transform:translate(-50%)}}"]})};var pr=["imageStrip"],hr=(t,n)=>"copy1-"+n,gr=(t,n)=>"copy2-"+n;function mr(t,n){if(t&1){let e=pe();a(0,"img",27),D("load",function(i){let r=N(e).$implicit,s=d(2);return L(s.onGalleryImageLoad(i,r))}),u()}if(t&2){let e=n.$implicit,o=d(2);l("src",o.uriAssetsImages+"/"+e+".png",A)("alt","Gallery image "+e),S("data-gallery-image",e)}}function fr(t,n){if(t&1){let e=pe();a(0,"img",27),D("load",function(i){let r=N(e).$implicit,s=d(2);return L(s.onGalleryImageLoad(i,r))}),u()}if(t&2){let e=n.$implicit,o=d(2);l("src",o.uriAssetsImages+"/"+e+".png",A)("alt","Gallery image "+e),S("data-gallery-image",e)}}function br(t,n){if(t&1){let e=pe();a(0,"img",27),D("load",function(i){let r=N(e).$implicit,s=d(2);return L(s.onGalleryImageLoad(i,r))}),u()}if(t&2){let e=n.$implicit,o=d(2);l("src",o.uriAssetsImages+"/"+e+".png",A)("alt","Gallery image "+e),S("data-gallery-image",e)}}function yr(t,n){if(t&1&&h(0,"img",25),t&2){let e=d(2);l("src",e.uriAssetsImages+"/-.png",A)}}function vr(t,n){if(t&1&&h(0,"img",26),t&2){let e=d(2);l("src",e.uriAssetsImages+"/+.png",A)}}function _r(t,n){if(t&1){let e=pe();a(0,"div",5)(1,"a",6),h(2,"img",7),u(),a(3,"div",8),g(4," EST. 2022, Logo by "),a(5,"a",9),g(6," Muah! Studio "),u()()(),a(7,"div",10)(8,"div",11)(9,"a",12),h(10,"img",13),u(),a(11,"a",14),h(12,"img",15),u()(),a(13,"button",16),D("click",function(){N(e);let i=d();return L(i.onFeaturedFlipToggle())}),fe(),a(14,"svg",17),h(15,"path",18)(16,"path",19),u()()(),Kt(),a(17,"div",20)(18,"div",21,1),D("scroll",function(){N(e);let i=d();return L(i.onImageStripScroll())})("mousedown",function(i){N(e);let r=d();return L(r.onImageStripMouseDown(i))})("mousemove",function(i){N(e);let r=d();return L(r.onImageStripMouseMove(i))})("mouseup",function(){N(e);let i=d();return L(i.onImageStripMouseUp())})("mouseleave",function(){N(e);let i=d();return L(i.onImageStripMouseUp())}),a(20,"div",22),Ge(21,mr,1,3,"img",23,sn),Ge(23,fr,1,3,"img",23,hr),Ge(25,br,1,3,"img",23,gr),u()()(),a(27,"button",24),D("click",function(){N(e);let i=d();return L(i.toggleImageStrip())}),v(28,yr,1,1,"img",25)(29,vr,1,1,"img",26),u()}if(t&2){let e=d();c(2),l("src",e.uriAssetsImages+"/nxs-logo.png",A),c(5),Q("hidden-by-image-strip",e.imageStripOpen),c(),Q("flipped",e.featuredFlipped),c(2),l("src",e.uriAssetsImages+"/corgiat-front.png",A),c(2),l("src",e.uriAssetsImages+"/corgiat.png",A),c(5),Q("open",e.imageStripOpen),c(4),Ue(e.shuffledImages),c(2),Ue(e.shuffledImages),c(2),Ue(e.shuffledImages),c(2),Q("open",e.imageStripOpen),S("aria-label",e.imageStripOpen?"Close gallery":"Open gallery"),c(),F(e.imageStripOpen?28:29)}}var Ct=class t{constructor(n){this.router=n}uriAssetsImages=le.uriAssetsImages;featuredFlipped=!1;featuredFlipInterval;shuffledImages=[];imageStripOpen=!1;imageStrip;imageSetWidth=0;isDragging=!1;dragStartX=0;scrollStartX=0;loadedGalleryImages=new Set;galleryImageSizes=new Map;ngOnInit(){this.imageStripOpen=!1,this.shuffleImages(),this.startFeaturedFlipInterval(),window.addEventListener("resize",this.onWindowResize)}ngOnDestroy(){clearInterval(this.featuredFlipInterval),window.removeEventListener("resize",this.onWindowResize)}onWindowResize=()=>{if(window.innerWidth<=768){this.resizeGalleryImages();return}this.resizeGalleryImages()};shuffleImages(){this.shuffledImages=Array.from({length:15},(n,e)=>e+1);for(let n=this.shuffledImages.length-1;n>0;n--){let e=Math.floor(Math.random()*(n+1));[this.shuffledImages[n],this.shuffledImages[e]]=[this.shuffledImages[e],this.shuffledImages[n]]}}toggleImageStrip(){this.imageStripOpen=!this.imageStripOpen,this.imageStripOpen&&requestAnimationFrame(()=>{let n=this.imageStrip?.nativeElement;n&&(this.imageSetWidth=n.scrollWidth/3,this.imageSetWidth>0&&(n.scrollLeft=this.imageSetWidth))})}onGalleryImageLoad(n,e){let o=n.currentTarget;if(!o||o.naturalWidth<=0||o.naturalHeight<=0)return;if(!this.galleryImageSizes.has(e)){let r=Math.min(550,window.innerHeight*.68),s=Math.max(r,Math.min(700,window.innerHeight*.82)),p=Math.floor(Math.random()*(s-r+1))+r,m,M;o.naturalWidth>=o.naturalHeight?(m=p,M=p*(o.naturalHeight/o.naturalWidth)):(M=p,m=p*(o.naturalWidth/o.naturalHeight)),this.galleryImageSizes.set(e,{width:m,height:M})}this.applyGalleryImageSize(o,e),o.style.opacity="1",this.loadedGalleryImages.add(e);let i=this.imageStrip?.nativeElement;i&&this.loadedGalleryImages.size>=15&&requestAnimationFrame(()=>{this.imageSetWidth=i.scrollWidth/3,this.imageStripOpen&&this.imageSetWidth>0&&(i.scrollLeft=this.imageSetWidth)})}applyGalleryImageSize(n,e){let o=this.galleryImageSizes.get(e);if(!o)return;if(window.innerWidth>768){let M=window.innerHeight*.75,w=Math.min(1,M/700);n.style.width=`${o.width*w}px`,n.style.height=`${o.height*w}px`;return}let r=window.innerHeight*.5,s=Math.min(1,r/700);n.style.width=`${o.width*s}px`,n.style.height=`${o.height*s}px`}resizeGalleryImages(){let n=this.imageStrip?.nativeElement;if(!n)return;n.querySelectorAll("img[data-gallery-image]").forEach(o=>{let i=o,r=Number(i.getAttribute("data-gallery-image"));!r||!this.galleryImageSizes.has(r)||this.applyGalleryImageSize(i,r)}),requestAnimationFrame(()=>{this.imageSetWidth=n.scrollWidth/3,this.imageStripOpen&&this.imageSetWidth>0&&(n.scrollLeft=this.imageSetWidth)})}onImageStripScroll(){let n=this.imageStrip?.nativeElement;if(!n||!this.imageSetWidth)return;let e=this.imageSetWidth;n.scrollLeft<e*.5&&(n.scrollLeft+=e),n.scrollLeft>e*1.5&&(n.scrollLeft-=e)}onImageStripMouseDown(n){let e=this.imageStrip?.nativeElement;e&&(this.isDragging=!0,this.dragStartX=n.pageX,this.scrollStartX=e.scrollLeft,n.preventDefault())}onImageStripMouseMove(n){if(!this.isDragging)return;let e=this.imageStrip?.nativeElement;if(!e)return;let o=n.pageX-this.dragStartX;e.scrollLeft=this.scrollStartX-o,this.onImageStripScroll()}onImageStripMouseUp(){this.isDragging=!1}startFeaturedFlipInterval(){clearInterval(this.featuredFlipInterval),this.featuredFlipInterval=setInterval(()=>{this.imageStripOpen||(this.featuredFlipped=!this.featuredFlipped)},7e3)}onFeaturedFlipToggle(){this.featuredFlipped=!this.featuredFlipped,this.startFeaturedFlipInterval()}isHome(){return this.router.url.split("?")[0]==="/"}prepareRoute(n){return n?.activatedRouteData?.animation}static \u0275fac=function(e){return new(e||t)(C(Ce))};static \u0275cmp=E({type:t,selectors:[["app-website-layout"]],viewQuery:function(e,o){if(e&1&&an(pr,5),e&2){let i;B(i=R())&&(o.imageStrip=i.first)}},decls:9,vars:5,consts:[["routerOutlet","outlet"],["imageStrip",""],[1,"preload"],["alt","Logo Neanche Per Sogno",3,"src"],[1,"main-content"],[1,"home-mobile-logo"],["routerLink","/"],["alt","Logo Neanche Per Sogno",1,"home-mobile-logo-img",3,"src"],[1,"home-mobile-logo-credit"],["href","https://www.muah.studio","target","_blank","rel","noopener noreferrer"],[1,"home-featured-link"],[1,"home-flip-inner"],["routerLink","/releases",1,"home-flip-front"],["alt","Featured",1,"home-featured-img",3,"src"],["routerLink","/releases",1,"home-flip-back"],["alt","Featured (back)",1,"home-featured-img",3,"src"],["aria-label","Flip image",1,"home-flip-btn",3,"click"],["viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2.5","stroke-linecap","round","stroke-linejoin","round"],["d","M5 12h14"],["d","m12 5 7 7-7 7"],[1,"home-image-strip-wrapper"],[1,"home-image-strip",3,"scroll","mousedown","mousemove","mouseup","mouseleave"],[1,"home-image-strip-track"],["draggable","false",3,"src","alt"],[1,"home-image-strip-toggle",3,"click"],["alt","Close gallery",1,"home-image-strip-toggle-img",3,"src"],["alt","Open gallery",1,"home-image-strip-toggle-img",3,"src"],["draggable","false",3,"load","src","alt"]],template:function(e,o){if(e&1&&(a(0,"div",2),h(1,"img",3),u(),v(2,_r,30,13),a(3,"main",4),h(4,"router-outlet",null,0),u(),h(6,"app-header")(7,"app-footer")(8,"app-scroll-bar-bottom")),e&2){let i=Qe(5);c(),l("src",o.uriAssetsImages+"/logo-main.png",A),c(),F(o.isHome()?2:-1),c(),Q("with-header",!o.isHome()),l("@routeAnimation",o.prepareRoute(i))}},dependencies:[yt,vt,_t,te,fn,we],styles:[".home-featured-link[_ngcontent-%COMP%]{position:fixed;bottom:14rem;right:50px;display:block;z-index:9997;max-width:280px;text-decoration:none;opacity:0;animation:_ngcontent-%COMP%_homeEnter .8s ease-out forwards;perspective:1400px;transition:opacity .4s ease,visibility .4s ease}@keyframes _ngcontent-%COMP%_homeEnter{0%{transform:translateY(10%);opacity:0}to{transform:translateY(0);opacity:1}}@keyframes _ngcontent-%COMP%_homeFeaturedExit{0%{transform:translateY(0);opacity:1}to{transform:translateY(100%);opacity:0}}.home-featured-link.hidden-by-image-strip[_ngcontent-%COMP%]{pointer-events:none;animation:_ngcontent-%COMP%_homeFeaturedExit .6s ease forwards}.home-featured-img[_ngcontent-%COMP%]{width:100%;height:auto;object-fit:cover;cursor:pointer;transition:transform .3s ease;display:block;--shadow-color: 20, 20, 20;animation:_ngcontent-%COMP%_pulse 3s ease-in-out infinite}.home-featured-img[_ngcontent-%COMP%]:hover{transform:scale(1.05)}.home-flip-inner[_ngcontent-%COMP%]{position:relative;transform-style:preserve-3d;transition:transform .8s cubic-bezier(.4,0,.2,1)}.home-flip-inner.flipped[_ngcontent-%COMP%]{transform:rotateY(180deg)}.home-flip-front[_ngcontent-%COMP%], .home-flip-back[_ngcontent-%COMP%]{display:block;backface-visibility:hidden;-webkit-backface-visibility:hidden}.home-flip-back[_ngcontent-%COMP%]{position:absolute;inset:0;transform:rotateY(180deg)}.home-flip-back[_ngcontent-%COMP%]   .home-featured-img[_ngcontent-%COMP%]{height:100%}.home-flip-back[_ngcontent-%COMP%]{pointer-events:none}.home-flip-inner.flipped[_ngcontent-%COMP%]   .home-flip-back[_ngcontent-%COMP%]{pointer-events:auto}.home-flip-inner.flipped[_ngcontent-%COMP%]   .home-flip-front[_ngcontent-%COMP%]{pointer-events:none}.home-flip-btn[_ngcontent-%COMP%]{position:absolute;top:8px;right:8px;z-index:10;width:26px;height:26px;padding:5px;background:#ffffff8c;-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px);border:none;border-radius:50%;cursor:pointer;display:flex;align-items:center;justify-content:center;opacity:0;transition:opacity .2s ease,background .2s ease}.home-featured-link[_ngcontent-%COMP%]:hover   .home-flip-btn[_ngcontent-%COMP%]{opacity:1}.home-flip-btn[_ngcontent-%COMP%]:hover{background:#ffffffd9}.home-flip-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:100%;height:100%;display:block}.home-image-strip-wrapper[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100vw;height:0;z-index:10000;pointer-events:none}.home-image-strip[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100vw;height:auto;overflow-x:auto;overflow-y:hidden;background:#fff;scrollbar-width:none;-ms-overflow-style:none;cursor:grab;-webkit-user-select:none;user-select:none;pointer-events:none;transform:translateY(-100%);transition:transform 1s ease}.home-image-strip[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}.home-image-strip-wrapper.open[_ngcontent-%COMP%]   .home-image-strip[_ngcontent-%COMP%]{transform:translateY(0);pointer-events:auto}.home-image-strip[_ngcontent-%COMP%]:active{cursor:grabbing}.home-image-strip-track[_ngcontent-%COMP%]{display:flex;align-items:flex-start;width:max-content;height:auto;gap:1px}.home-image-strip-track[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{display:block;width:auto;height:auto;flex:0 0 auto;object-fit:contain;-webkit-user-select:none;user-select:none;-webkit-user-drag:none;pointer-events:none;opacity:1;transition:opacity .1s ease,width .1s ease,height .1s ease}.home-image-strip-toggle[_ngcontent-%COMP%]{position:fixed;top:40px;right:50px;z-index:10002;width:40px;height:40px;padding:0;border:none;background:transparent;cursor:pointer;pointer-events:auto;opacity:.8;display:flex;align-items:center;justify-content:center;transition:opacity .2s ease}.home-image-strip-toggle[_ngcontent-%COMP%]:hover{opacity:1}.home-image-strip-toggle-img[_ngcontent-%COMP%]{display:block;width:36px;height:36px;object-fit:contain}.home-mobile-logo[_ngcontent-%COMP%]{display:none}@keyframes _ngcontent-%COMP%_homeLogoEnter{0%{transform:translateY(-10px);opacity:0}to{transform:translateY(0);opacity:1}}@keyframes _ngcontent-%COMP%_pulse{0%{box-shadow:0 0 8px rgba(var(--shadow-color),.3)}50%{box-shadow:0 0 15px rgba(var(--shadow-color),.5)}to{box-shadow:0 0 8px rgba(var(--shadow-color),.3)}}@media (max-width: 768px){.home-featured-link[_ngcontent-%COMP%]{display:none!important}.home-image-strip-wrapper[_ngcontent-%COMP%]{display:block!important;height:0;z-index:10000}.home-image-strip[_ngcontent-%COMP%]{width:100vw;height:auto;max-height:62vh;overflow-x:auto;overflow-y:hidden;-webkit-overflow-scrolling:touch;touch-action:pan-x;background:#fff}.home-image-strip-track[_ngcontent-%COMP%]{height:auto;width:max-content;align-items:flex-start}.home-image-strip-track[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:auto;width:auto;max-height:62vh}.home-image-strip-toggle[_ngcontent-%COMP%]{display:flex!important;position:fixed;top:18px;right:18px;width:42px;height:42px;padding:0;z-index:10002;opacity:.85;pointer-events:auto}.home-image-strip-toggle-img[_ngcontent-%COMP%]{width:38px;height:38px;object-fit:contain}.home-mobile-logo[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;position:fixed;bottom:8rem;left:0;right:0;z-index:9999;line-height:1.2;text-align:center;opacity:0;animation:_ngcontent-%COMP%_homeLogoEnter .8s ease-out forwards}.home-mobile-logo-img[_ngcontent-%COMP%]{max-width:320px;height:auto;-webkit-user-select:none;user-select:none;cursor:pointer}.home-mobile-logo-credit[_ngcontent-%COMP%]{margin-top:4px;font-size:.55rem;color:silver;font-family:Helvetica,Arial,sans-serif;text-transform:none;line-height:1.2;text-align:center}.home-mobile-logo-credit[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:silver;text-decoration:none}.main-content.with-header[_ngcontent-%COMP%]{margin-top:25px}}"],data:{animation:[Ae("routeAnimation",[Se("* <=> *",[he({transform:"translateY(10%)",opacity:0}),xe("800ms ease-out",he({transform:"translateY(0)",opacity:1}))])])]}})};var xl=[{path:"",component:Ct,children:[{path:"",loadComponent:()=>import("./chunk-CVQZJPQV.js").then(t=>t.HomeComponent),data:{animation:"HomePage"}},{path:"about",loadComponent:()=>import("./chunk-SGMJCQP5.js").then(t=>t.AboutComponent),data:{animation:"AboutPage"}},{path:"releases",loadComponent:()=>import("./chunk-WL2HMSXS.js").then(t=>t.ReleasesComponent),data:{animation:"ReleasesPage"}},{path:"events",loadComponent:()=>import("./chunk-2EH4VKAS.js").then(t=>t.EventsComponent),data:{animation:"EventsPage"}},{path:"mixtape-archive",loadComponent:()=>import("./chunk-WFJAF732.js").then(t=>t.MixtapeArchiveComponent),data:{animation:"MixtapeArchivePage"}},{path:"moreismoreismore",loadComponent:()=>import("./chunk-YGG66CVN.js").then(t=>t.MoreismoreismoreComponent),data:{animation:"MoreIsMoreIsMorePage"}},{path:"**",redirectTo:""}]}];export{xl as WEBSITE_LAYOUT_ROUTES};
