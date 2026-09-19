import{c as Ne,d as Me,f as ge,g as Ee}from"./chunk-C5P3YSZX.js";import{A as vn,B as _n,C as It,D as Cn,E as fe,F as Dt,G as wn,H as Le,I as it,J as Z,L as Ft,M as be,N as De,O as N,P as xn,a as Ze,b as Mt,c as we,d as Ke,e as pn,f as Je,g as te,h as et,i as mn,m as hn,o as gn,p as fn,q as xe,r as Se,s as bn,v as tt,w as nt,x as Ie,y as yn,z as Et}from"./chunk-FEUUSPM2.js";import{a as le}from"./chunk-66XS3EV4.js";import{$ as ye,$a as V,Aa as nn,Ab as cn,Ba as a,Eb as St,Fa as Te,Ga as x,Hb as M,Ib as un,Jb as se,Kb as ae,L as Ue,La as E,Lb as dn,M as Ae,Ma as Q,N as A,Na as D,O as W,Oa as v,Pa as _,Q as ue,Ra as on,S as Kt,T as y,Va as C,Wa as l,Xa as rn,Y as K,Ya as Y,Z as G,Za as sn,_ as U,_a as oe,a as w,aa as Jt,ab as pe,b as j,ba as f,bb as me,cb as c,da as xt,db as u,eb as m,fb as Qe,gb as Ye,ha as q,hb as ve,i as Qt,ia as en,ib as he,ka as ie,kb as I,l as Yt,la as de,lb as p,ma as J,mb as _e,nb as Ce,ob as X,pb as Pe,q as Xt,qa as qe,qb as T,rb as P,sb as Xe,tb as h,ub as ee,vb as an,w as Zt,wb as k,xa as tn,xb as B,ya as O,yb as re,zb as ln}from"./chunk-GK4235OP.js";var kn=(()=>{class t{_renderer;_elementRef;onChange=e=>{};onTouched=()=>{};constructor(e,i){this._renderer=e,this._elementRef=i}setProperty(e,i){this._renderer.setProperty(this._elementRef.nativeElement,e,i)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}static \u0275fac=function(i){return new(i||t)(x(Te),x(de))};static \u0275dir=D({type:t})}return t})(),Si=(()=>{class t extends kn{static \u0275fac=(()=>{let e;return function(o){return(e||(e=f(t)))(o||t)}})();static \u0275dir=D({type:t,features:[v]})}return t})(),$n=new ue("");var Mi={provide:$n,useExisting:Ae(()=>mt),multi:!0};function Ei(){let t=Mt()?Mt().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var Ii=new ue(""),mt=(()=>{class t extends kn{_compositionMode;_composing=!1;constructor(e,i,o){super(e,i),this._compositionMode=o,this._compositionMode==null&&(this._compositionMode=!Ei())}writeValue(e){let i=e??"";this.setProperty("value",i)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}static \u0275fac=function(i){return new(i||t)(x(Te),x(de),x(Ii,8))};static \u0275dir=D({type:t,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(i,o){i&1&&I("input",function(s){return o._handleInput(s.target.value)})("blur",function(){return o.onTouched()})("compositionstart",function(){return o._compositionStart()})("compositionend",function(s){return o._compositionEnd(s.target.value)})},standalone:!1,features:[k([Mi]),v]})}return t})();function Tt(t){return t==null||Pt(t)===0}function Pt(t){return t==null?null:Array.isArray(t)||typeof t=="string"?t.length:t instanceof Set?t.size:null}var Nt=new ue(""),An=new ue(""),Di=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,je=class{static min(n){return Fi(n)}static max(n){return Oi(n)}static required(n){return Tn(n)}static requiredTrue(n){return Vi(n)}static email(n){return ki(n)}static minLength(n){return $i(n)}static maxLength(n){return Ai(n)}static pattern(n){return Ti(n)}static nullValidator(n){return st()}static compose(n){return zn(n)}static composeAsync(n){return jn(n)}};function Fi(t){return n=>{if(n.value==null||t==null)return null;let e=parseFloat(n.value);return!isNaN(e)&&e<t?{min:{min:t,actual:n.value}}:null}}function Oi(t){return n=>{if(n.value==null||t==null)return null;let e=parseFloat(n.value);return!isNaN(e)&&e>t?{max:{max:t,actual:n.value}}:null}}function Tn(t){return Tt(t.value)?{required:!0}:null}function Vi(t){return t.value===!0?null:{required:!0}}function ki(t){return Tt(t.value)||Di.test(t.value)?null:{email:!0}}function $i(t){return n=>{let e=n.value?.length??Pt(n.value);return e===null||e===0?null:e<t?{minlength:{requiredLength:t,actualLength:e}}:null}}function Ai(t){return n=>{let e=n.value?.length??Pt(n.value);return e!==null&&e>t?{maxlength:{requiredLength:t,actualLength:e}}:null}}function Ti(t){if(!t)return st;let n,e;return typeof t=="string"?(e="",t.charAt(0)!=="^"&&(e+="^"),e+=t,t.charAt(t.length-1)!=="$"&&(e+="$"),n=new RegExp(e)):(e=t.toString(),n=t),i=>{if(Tt(i.value))return null;let o=i.value;return n.test(o)?null:{pattern:{requiredPattern:e,actualValue:o}}}}function st(t){return null}function Pn(t){return t!=null}function Nn(t){return on(t)?Yt(t):t}function Ln(t){let n={};return t.forEach(e=>{n=e!=null?w(w({},n),e):n}),Object.keys(n).length===0?null:n}function Bn(t,n){return n.map(e=>e(t))}function Pi(t){return!t.validate}function Rn(t){return t.map(n=>Pi(n)?n:e=>n.validate(e))}function zn(t){if(!t)return null;let n=t.filter(Pn);return n.length==0?null:function(e){return Ln(Bn(e,n))}}function Hn(t){return t!=null?zn(Rn(t)):null}function jn(t){if(!t)return null;let n=t.filter(Pn);return n.length==0?null:function(e){let i=Bn(e,n).map(Nn);return Zt(i).pipe(Xt(Ln))}}function Wn(t){return t!=null?jn(Rn(t)):null}function Sn(t,n){return t===null?[n]:Array.isArray(t)?[...t,n]:[t,n]}function Gn(t){return t._rawValidators}function Un(t){return t._rawAsyncValidators}function Ot(t){return t?Array.isArray(t)?t:[t]:[]}function at(t,n){return Array.isArray(t)?t.includes(n):t===n}function Mn(t,n){let e=Ot(n);return Ot(t).forEach(o=>{at(e,o)||e.push(o)}),e}function En(t,n){return Ot(n).filter(e=>!at(t,e))}var lt=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(n){this._rawValidators=n||[],this._composedValidatorFn=Hn(this._rawValidators)}_setAsyncValidators(n){this._rawAsyncValidators=n||[],this._composedAsyncValidatorFn=Wn(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(n){this._onDestroyCallbacks.push(n)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(n=>n()),this._onDestroyCallbacks=[]}reset(n=void 0){this.control&&this.control.reset(n)}hasError(n,e){return this.control?this.control.hasError(n,e):!1}getError(n,e){return this.control?this.control.getError(n,e):null}},Ve=class extends lt{name;get formDirective(){return null}get path(){return null}},We=class extends lt{_parent=null;name=null;valueAccessor=null},ct=class{_cd;constructor(n){this._cd=n}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}},Ni={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},Ur=j(w({},Ni),{"[class.ng-submitted]":"isSubmitted"}),qn=(()=>{class t extends ct{constructor(e){super(e)}static \u0275fac=function(i){return new(i||t)(x(We,2))};static \u0275dir=D({type:t,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(i,o){i&2&&Y("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)},standalone:!1,features:[v]})}return t})(),Qn=(()=>{class t extends ct{constructor(e){super(e)}static \u0275fac=function(i){return new(i||t)(x(Ve,10))};static \u0275dir=D({type:t,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(i,o){i&2&&Y("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)("ng-submitted",o.isSubmitted)},standalone:!1,features:[v]})}return t})();var Be="VALID",ot="INVALID",Fe="PENDING",Re="DISABLED",ce=class{},ut=class extends ce{value;source;constructor(n,e){super(),this.value=n,this.source=e}},ze=class extends ce{pristine;source;constructor(n,e){super(),this.pristine=n,this.source=e}},He=class extends ce{touched;source;constructor(n,e){super(),this.touched=n,this.source=e}},Oe=class extends ce{status;source;constructor(n,e){super(),this.status=n,this.source=e}},Vt=class extends ce{source;constructor(n){super(),this.source=n}},kt=class extends ce{source;constructor(n){super(),this.source=n}};function Lt(t){return(ht(t)?t.validators:t)||null}function Li(t){return Array.isArray(t)?Hn(t):t||null}function Bt(t,n){return(ht(n)?n.asyncValidators:t)||null}function Bi(t){return Array.isArray(t)?Wn(t):t||null}function ht(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}function Yn(t,n,e){let i=t.controls;if(!(n?Object.keys(i):i).length)throw new Ue(1e3,"");if(!i[e])throw new Ue(1001,"")}function Xn(t,n,e){t._forEachChild((i,o)=>{if(e[o]===void 0)throw new Ue(1002,"")})}var ke=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(n,e){this._assignValidators(n),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(n){this._rawValidators=this._composedValidatorFn=n}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(n){this._rawAsyncValidators=this._composedAsyncValidatorFn=n}get parent(){return this._parent}get status(){return se(this.statusReactive)}set status(n){se(()=>this.statusReactive.set(n))}_status=ae(()=>this.statusReactive());statusReactive=J(void 0);get valid(){return this.status===Be}get invalid(){return this.status===ot}get pending(){return this.status==Fe}get disabled(){return this.status===Re}get enabled(){return this.status!==Re}errors;get pristine(){return se(this.pristineReactive)}set pristine(n){se(()=>this.pristineReactive.set(n))}_pristine=ae(()=>this.pristineReactive());pristineReactive=J(!0);get dirty(){return!this.pristine}get touched(){return se(this.touchedReactive)}set touched(n){se(()=>this.touchedReactive.set(n))}_touched=ae(()=>this.touchedReactive());touchedReactive=J(!1);get untouched(){return!this.touched}_events=new Qt;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(n){this._assignValidators(n)}setAsyncValidators(n){this._assignAsyncValidators(n)}addValidators(n){this.setValidators(Mn(n,this._rawValidators))}addAsyncValidators(n){this.setAsyncValidators(Mn(n,this._rawAsyncValidators))}removeValidators(n){this.setValidators(En(n,this._rawValidators))}removeAsyncValidators(n){this.setAsyncValidators(En(n,this._rawAsyncValidators))}hasValidator(n){return at(this._rawValidators,n)}hasAsyncValidator(n){return at(this._rawAsyncValidators,n)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(n={}){let e=this.touched===!1;this.touched=!0;let i=n.sourceControl??this;this._parent&&!n.onlySelf&&this._parent.markAsTouched(j(w({},n),{sourceControl:i})),e&&n.emitEvent!==!1&&this._events.next(new He(!0,i))}markAllAsTouched(n={}){this.markAsTouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(n))}markAsUntouched(n={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let i=n.sourceControl??this;this._forEachChild(o=>{o.markAsUntouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:i})}),this._parent&&!n.onlySelf&&this._parent._updateTouched(n,i),e&&n.emitEvent!==!1&&this._events.next(new He(!1,i))}markAsDirty(n={}){let e=this.pristine===!0;this.pristine=!1;let i=n.sourceControl??this;this._parent&&!n.onlySelf&&this._parent.markAsDirty(j(w({},n),{sourceControl:i})),e&&n.emitEvent!==!1&&this._events.next(new ze(!1,i))}markAsPristine(n={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let i=n.sourceControl??this;this._forEachChild(o=>{o.markAsPristine({onlySelf:!0,emitEvent:n.emitEvent})}),this._parent&&!n.onlySelf&&this._parent._updatePristine(n,i),e&&n.emitEvent!==!1&&this._events.next(new ze(!0,i))}markAsPending(n={}){this.status=Fe;let e=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new Oe(this.status,e)),this.statusChanges.emit(this.status)),this._parent&&!n.onlySelf&&this._parent.markAsPending(j(w({},n),{sourceControl:e}))}disable(n={}){let e=this._parentMarkedDirty(n.onlySelf);this.status=Re,this.errors=null,this._forEachChild(o=>{o.disable(j(w({},n),{onlySelf:!0}))}),this._updateValue();let i=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new ut(this.value,i)),this._events.next(new Oe(this.status,i)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(j(w({},n),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(o=>o(!0))}enable(n={}){let e=this._parentMarkedDirty(n.onlySelf);this.status=Be,this._forEachChild(i=>{i.enable(j(w({},n),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent}),this._updateAncestors(j(w({},n),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(n,e){this._parent&&!n.onlySelf&&(this._parent.updateValueAndValidity(n),n.skipPristineCheck||this._parent._updatePristine({},e),this._parent._updateTouched({},e))}setParent(n){this._parent=n}getRawValue(){return this.value}updateValueAndValidity(n={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let i=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===Be||this.status===Fe)&&this._runAsyncValidator(i,n.emitEvent)}let e=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new ut(this.value,e)),this._events.next(new Oe(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!n.onlySelf&&this._parent.updateValueAndValidity(j(w({},n),{sourceControl:e}))}_updateTreeValidity(n={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(n)),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?Re:Be}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(n,e){if(this.asyncValidator){this.status=Fe,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1};let i=Nn(this.asyncValidator(this));this._asyncValidationSubscription=i.subscribe(o=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(o,{emitEvent:e,shouldHaveEmitted:n})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let n=this._hasOwnPendingAsyncValidator?.emitEvent??!1;return this._hasOwnPendingAsyncValidator=null,n}return!1}setErrors(n,e={}){this.errors=n,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(n){let e=n;return e==null||(Array.isArray(e)||(e=e.split(".")),e.length===0)?null:e.reduce((i,o)=>i&&i._find(o),this)}getError(n,e){let i=e?this.get(e):this;return i&&i.errors?i.errors[n]:null}hasError(n,e){return!!this.getError(n,e)}get root(){let n=this;for(;n._parent;)n=n._parent;return n}_updateControlsErrors(n,e,i){this.status=this._calculateStatus(),n&&this.statusChanges.emit(this.status),(n||i)&&this._events.next(new Oe(this.status,e)),this._parent&&this._parent._updateControlsErrors(n,e,i)}_initObservables(){this.valueChanges=new q,this.statusChanges=new q}_calculateStatus(){return this._allControlsDisabled()?Re:this.errors?ot:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(Fe)?Fe:this._anyControlsHaveStatus(ot)?ot:Be}_anyControlsHaveStatus(n){return this._anyControls(e=>e.status===n)}_anyControlsDirty(){return this._anyControls(n=>n.dirty)}_anyControlsTouched(){return this._anyControls(n=>n.touched)}_updatePristine(n,e){let i=!this._anyControlsDirty(),o=this.pristine!==i;this.pristine=i,this._parent&&!n.onlySelf&&this._parent._updatePristine(n,e),o&&this._events.next(new ze(this.pristine,e))}_updateTouched(n={},e){this.touched=this._anyControlsTouched(),this._events.next(new He(this.touched,e)),this._parent&&!n.onlySelf&&this._parent._updateTouched(n,e)}_onDisabledChange=[];_registerOnCollectionChange(n){this._onCollectionChange=n}_setUpdateStrategy(n){ht(n)&&n.updateOn!=null&&(this._updateOn=n.updateOn)}_parentMarkedDirty(n){let e=this._parent&&this._parent.dirty;return!n&&!!e&&!this._parent._anyControlsDirty()}_find(n){return null}_assignValidators(n){this._rawValidators=Array.isArray(n)?n.slice():n,this._composedValidatorFn=Li(this._rawValidators)}_assignAsyncValidators(n){this._rawAsyncValidators=Array.isArray(n)?n.slice():n,this._composedAsyncValidatorFn=Bi(this._rawAsyncValidators)}},$e=class extends ke{constructor(n,e,i){super(Lt(e),Bt(i,e)),this.controls=n,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(n,e){return this.controls[n]?this.controls[n]:(this.controls[n]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(n,e,i={}){this.registerControl(n,e),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}removeControl(n,e={}){this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),delete this.controls[n],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(n,e,i={}){this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),delete this.controls[n],e&&this.registerControl(n,e),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}contains(n){return this.controls.hasOwnProperty(n)&&this.controls[n].enabled}setValue(n,e={}){Xn(this,!0,n),Object.keys(n).forEach(i=>{Yn(this,!0,i),this.controls[i].setValue(n[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(n,e={}){n!=null&&(Object.keys(n).forEach(i=>{let o=this.controls[i];o&&o.patchValue(n[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(n={},e={}){this._forEachChild((i,o)=>{i.reset(n?n[o]:null,{onlySelf:!0,emitEvent:e.emitEvent})}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e)}getRawValue(){return this._reduceChildren({},(n,e,i)=>(n[i]=e.getRawValue(),n))}_syncPendingControls(){let n=this._reduceChildren(!1,(e,i)=>i._syncPendingControls()?!0:e);return n&&this.updateValueAndValidity({onlySelf:!0}),n}_forEachChild(n){Object.keys(this.controls).forEach(e=>{let i=this.controls[e];i&&n(i,e)})}_setUpControls(){this._forEachChild(n=>{n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(n){for(let[e,i]of Object.entries(this.controls))if(this.contains(e)&&n(i))return!0;return!1}_reduceValue(){let n={};return this._reduceChildren(n,(e,i,o)=>((i.enabled||this.disabled)&&(e[o]=i.value),e))}_reduceChildren(n,e){let i=n;return this._forEachChild((o,r)=>{i=e(i,o,r)}),i}_allControlsDisabled(){for(let n of Object.keys(this.controls))if(this.controls[n].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(n){return this.controls.hasOwnProperty(n)?this.controls[n]:null}};var $t=class extends $e{};var Rt=new ue("",{providedIn:"root",factory:()=>gt}),gt="always";function Ri(t,n){return[...n.path,t]}function In(t,n,e=gt){zt(t,n),n.valueAccessor.writeValue(t.value),(t.disabled||e==="always")&&n.valueAccessor.setDisabledState?.(t.disabled),Hi(t,n),Wi(t,n),ji(t,n),zi(t,n)}function Dn(t,n,e=!0){let i=()=>{};n.valueAccessor&&(n.valueAccessor.registerOnChange(i),n.valueAccessor.registerOnTouched(i)),pt(t,n),t&&(n._invokeOnDestroyCallbacks(),t._registerOnCollectionChange(()=>{}))}function dt(t,n){t.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(n)})}function zi(t,n){if(n.valueAccessor.setDisabledState){let e=i=>{n.valueAccessor.setDisabledState(i)};t.registerOnDisabledChange(e),n._registerOnDestroy(()=>{t._unregisterOnDisabledChange(e)})}}function zt(t,n){let e=Gn(t);n.validator!==null?t.setValidators(Sn(e,n.validator)):typeof e=="function"&&t.setValidators([e]);let i=Un(t);n.asyncValidator!==null?t.setAsyncValidators(Sn(i,n.asyncValidator)):typeof i=="function"&&t.setAsyncValidators([i]);let o=()=>t.updateValueAndValidity();dt(n._rawValidators,o),dt(n._rawAsyncValidators,o)}function pt(t,n){let e=!1;if(t!==null){if(n.validator!==null){let o=Gn(t);if(Array.isArray(o)&&o.length>0){let r=o.filter(s=>s!==n.validator);r.length!==o.length&&(e=!0,t.setValidators(r))}}if(n.asyncValidator!==null){let o=Un(t);if(Array.isArray(o)&&o.length>0){let r=o.filter(s=>s!==n.asyncValidator);r.length!==o.length&&(e=!0,t.setAsyncValidators(r))}}}let i=()=>{};return dt(n._rawValidators,i),dt(n._rawAsyncValidators,i),e}function Hi(t,n){n.valueAccessor.registerOnChange(e=>{t._pendingValue=e,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&Zn(t,n)})}function ji(t,n){n.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&Zn(t,n),t.updateOn!=="submit"&&t.markAsTouched()})}function Zn(t,n){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),n.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function Wi(t,n){let e=(i,o)=>{n.valueAccessor.writeValue(i),o&&n.viewToModelUpdate(i)};t.registerOnChange(e),n._registerOnDestroy(()=>{t._unregisterOnChange(e)})}function Gi(t,n){t==null,zt(t,n)}function Ui(t,n){return pt(t,n)}function qi(t,n){if(!t.hasOwnProperty("model"))return!1;let e=t.model;return e.isFirstChange()?!0:!Object.is(n,e.currentValue)}function Qi(t){return Object.getPrototypeOf(t.constructor)===Si}function Yi(t,n){t._syncPendingControls(),n.forEach(e=>{let i=e.control;i.updateOn==="submit"&&i._pendingChange&&(e.viewToModelUpdate(i._pendingValue),i._pendingChange=!1)})}function Xi(t,n){if(!n)return null;Array.isArray(n);let e,i,o;return n.forEach(r=>{r.constructor===mt?e=r:Qi(r)?i=r:o=r}),o||i||e||null}function Zi(t,n){let e=t.indexOf(n);e>-1&&t.splice(e,1)}function Fn(t,n){let e=t.indexOf(n);e>-1&&t.splice(e,1)}function On(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var rt=class extends ke{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(n=null,e,i){super(Lt(e),Bt(i,e)),this._applyFormState(n),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),ht(e)&&(e.nonNullable||e.initialValueIsDefault)&&(On(n)?this.defaultValue=n.value:this.defaultValue=n)}setValue(n,e={}){this.value=this._pendingValue=n,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)}patchValue(n,e={}){this.setValue(n,e)}reset(n=this.defaultValue,e={}){this._applyFormState(n),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),this._pendingChange=!1}_updateValue(){}_anyControls(n){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(n){this._onChange.push(n)}_unregisterOnChange(n){Fn(this._onChange,n)}registerOnDisabledChange(n){this._onDisabledChange.push(n)}_unregisterOnDisabledChange(n){Fn(this._onDisabledChange,n)}_forEachChild(n){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(n){On(n)?(this.value=this._pendingValue=n.value,n.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=n}};var Ki=t=>t instanceof rt;var Kn=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=D({type:t,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""],standalone:!1})}return t})();var Jn=new ue("");var Ji={provide:Ve,useExisting:Ae(()=>Ht)},Ht=(()=>{class t extends Ve{callSetDisabledState;get submitted(){return se(this._submittedReactive)}set submitted(e){this._submittedReactive.set(e)}_submitted=ae(()=>this._submittedReactive());_submittedReactive=J(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];form=null;ngSubmit=new q;constructor(e,i,o){super(),this.callSetDisabledState=o,this._setValidators(e),this._setAsyncValidators(i)}ngOnChanges(e){e.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}ngOnDestroy(){this.form&&(pt(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get control(){return this.form}get path(){return[]}addControl(e){let i=this.form.get(e.path);return In(i,e,this.callSetDisabledState),i.updateValueAndValidity({emitEvent:!1}),this.directives.push(e),i}getControl(e){return this.form.get(e.path)}removeControl(e){Dn(e.control||null,e,!1),Zi(this.directives,e)}addFormGroup(e){this._setUpFormContainer(e)}removeFormGroup(e){this._cleanUpFormContainer(e)}getFormGroup(e){return this.form.get(e.path)}addFormArray(e){this._setUpFormContainer(e)}removeFormArray(e){this._cleanUpFormContainer(e)}getFormArray(e){return this.form.get(e.path)}updateModel(e,i){this.form.get(e.path).setValue(i)}onSubmit(e){return this._submittedReactive.set(!0),Yi(this.form,this.directives),this.ngSubmit.emit(e),this.form._events.next(new Vt(this.control)),e?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this._submittedReactive.set(!1),this.form._events.next(new kt(this.form))}_updateDomValue(){this.directives.forEach(e=>{let i=e.control,o=this.form.get(e.path);i!==o&&(Dn(i||null,e),Ki(o)&&(In(o,e,this.callSetDisabledState),e.control=o))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(e){let i=this.form.get(e.path);Gi(i,e),i.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(e){if(this.form){let i=this.form.get(e.path);i&&Ui(i,e)&&i.updateValueAndValidity({emitEvent:!1})}}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm&&this._oldForm._registerOnCollectionChange(()=>{})}_updateValidators(){zt(this.form,this),this._oldForm&&pt(this._oldForm,this)}static \u0275fac=function(i){return new(i||t)(x(Nt,10),x(An,10),x(Rt,8))};static \u0275dir=D({type:t,selectors:[["","formGroup",""]],hostBindings:function(i,o){i&1&&I("submit",function(s){return o.onSubmit(s)})("reset",function(){return o.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[k([Ji]),v,K]})}return t})();var eo={provide:We,useExisting:Ae(()=>jt)},jt=(()=>{class t extends We{_ngModelWarningConfig;_added=!1;viewModel;control;name=null;set isDisabled(e){}model;update=new q;static _ngModelWarningSentOnce=!1;_ngModelWarningSent=!1;constructor(e,i,o,r,s){super(),this._ngModelWarningConfig=s,this._parent=e,this._setValidators(i),this._setAsyncValidators(o),this.valueAccessor=Xi(this,r)}ngOnChanges(e){this._added||this._setUpControl(),qi(e,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}get path(){return Ri(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_setUpControl(){this.control=this.formDirective.addControl(this),this._added=!0}static \u0275fac=function(i){return new(i||t)(x(Ve,13),x(Nt,10),x(An,10),x($n,10),x(Jn,8))};static \u0275dir=D({type:t,selectors:[["","formControlName",""]],inputs:{name:[0,"formControlName","name"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},standalone:!1,features:[k([eo]),v,K]})}return t})();var to=(()=>{class t{_validator=st;_onChange;_enabled;ngOnChanges(e){if(this.inputName in e){let i=this.normalizeInput(e[this.inputName].currentValue);this._enabled=this.enabled(i),this._validator=this._enabled?this.createValidator(i):st,this._onChange&&this._onChange()}}validate(e){return this._validator(e)}registerOnValidatorChange(e){this._onChange=e}enabled(e){return e!=null}static \u0275fac=function(i){return new(i||t)};static \u0275dir=D({type:t,features:[K]})}return t})();var no={provide:Nt,useExisting:Ae(()=>Wt),multi:!0};var Wt=(()=>{class t extends to{required;inputName="required";normalizeInput=M;createValidator=e=>Tn;enabled(e){return e}static \u0275fac=(()=>{let e;return function(o){return(e||(e=f(t)))(o||t)}})();static \u0275dir=D({type:t,selectors:[["","required","","formControlName","",3,"type","checkbox"],["","required","","formControl","",3,"type","checkbox"],["","required","","ngModel","",3,"type","checkbox"]],hostVars:1,hostBindings:function(i,o){i&2&&C("required",o._enabled?"":null)},inputs:{required:"required"},standalone:!1,features:[k([no]),v]})}return t})();var ei=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=Q({type:t});static \u0275inj=W({})}return t})(),At=class extends ke{constructor(n,e,i){super(Lt(e),Bt(i,e)),this.controls=n,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;at(n){return this.controls[this._adjustIndex(n)]}push(n,e={}){this.controls.push(n),this._registerControl(n),this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}insert(n,e,i={}){this.controls.splice(n,0,e),this._registerControl(e),this.updateValueAndValidity({emitEvent:i.emitEvent})}removeAt(n,e={}){let i=this._adjustIndex(n);i<0&&(i=0),this.controls[i]&&this.controls[i]._registerOnCollectionChange(()=>{}),this.controls.splice(i,1),this.updateValueAndValidity({emitEvent:e.emitEvent})}setControl(n,e,i={}){let o=this._adjustIndex(n);o<0&&(o=0),this.controls[o]&&this.controls[o]._registerOnCollectionChange(()=>{}),this.controls.splice(o,1),e&&(this.controls.splice(o,0,e),this._registerControl(e)),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(n,e={}){Xn(this,!1,n),n.forEach((i,o)=>{Yn(this,!1,o),this.at(o).setValue(i,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(n,e={}){n!=null&&(n.forEach((i,o)=>{this.at(o)&&this.at(o).patchValue(i,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(n=[],e={}){this._forEachChild((i,o)=>{i.reset(n[o],{onlySelf:!0,emitEvent:e.emitEvent})}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e)}getRawValue(){return this.controls.map(n=>n.getRawValue())}clear(n={}){this.controls.length<1||(this._forEachChild(e=>e._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:n.emitEvent}))}_adjustIndex(n){return n<0?n+this.length:n}_syncPendingControls(){let n=this.controls.reduce((e,i)=>i._syncPendingControls()?!0:e,!1);return n&&this.updateValueAndValidity({onlySelf:!0}),n}_forEachChild(n){this.controls.forEach((e,i)=>{n(e,i)})}_updateValue(){this.value=this.controls.filter(n=>n.enabled||this.disabled).map(n=>n.value)}_anyControls(n){return this.controls.some(e=>e.enabled&&n(e))}_setUpControls(){this._forEachChild(n=>this._registerControl(n))}_allControlsDisabled(){for(let n of this.controls)if(n.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(n){n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange)}_find(n){return this.at(n)??null}};function Vn(t){return!!t&&(t.asyncValidators!==void 0||t.validators!==void 0||t.updateOn!==void 0)}var ti=(()=>{class t{useNonNullable=!1;get nonNullable(){let e=new t;return e.useNonNullable=!0,e}group(e,i=null){let o=this._reduceControls(e),r={};return Vn(i)?r=i:i!==null&&(r.validators=i.validator,r.asyncValidators=i.asyncValidator),new $e(o,r)}record(e,i=null){let o=this._reduceControls(e);return new $t(o,i)}control(e,i,o){let r={};return this.useNonNullable?(Vn(i)?r=i:(r.validators=i,r.asyncValidators=o),new rt(e,j(w({},r),{nonNullable:!0}))):new rt(e,i,o)}array(e,i,o){let r=e.map(s=>this._createControl(s));return new At(r,i,o)}_reduceControls(e){let i={};return Object.keys(e).forEach(o=>{i[o]=this._createControl(e[o])}),i}_createControl(e){if(e instanceof rt)return e;if(e instanceof ke)return e;if(Array.isArray(e)){let i=e[0],o=e.length>1?e[1]:null,r=e.length>2?e[2]:null;return this.control(i,o,r)}else return this.control(e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=A({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var ni=(()=>{class t{static withConfig(e){return{ngModule:t,providers:[{provide:Rt,useValue:e.callSetDisabledState??gt}]}}static \u0275fac=function(i){return new(i||t)};static \u0275mod=Q({type:t});static \u0275inj=W({imports:[ei]})}return t})(),ii=(()=>{class t{static withConfig(e){return{ngModule:t,providers:[{provide:Jn,useValue:e.warnOnNgModelWithFormControl??"always"},{provide:Rt,useValue:e.callSetDisabledState??gt}]}}static \u0275fac=function(i){return new(i||t)};static \u0275mod=Q({type:t});static \u0275inj=W({imports:[ei]})}return t})();var oi=(()=>{class t extends N{name="common";static \u0275fac=(()=>{let e;return function(o){return(e||(e=f(t)))(o||t)}})();static \u0275prov=A({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),R=(()=>{class t{document=y(Ze);platformId=y(qe);el=y(de);injector=y(xt);cd=y(St);renderer=y(Te);config=y(xn);baseComponentStyle=y(oi);baseStyle=y(N);scopedStyleEl;rootEl;dt;get styleOptions(){return{nonce:this.config?.csp().nonce}}get _name(){return this.constructor.name.replace(/^_/,"").toLowerCase()}get componentStyle(){return this._componentStyle}attrSelector=Le("pc");themeChangeListeners=[];_getHostInstance(e){if(e)return e?this.hostName?e.name===this.hostName?e:this._getHostInstance(e.parentInstance):e.parentInstance:void 0}_getOptionValue(e,i="",o={}){return wn(e,i,o)}ngOnInit(){this.document&&this._loadStyles()}ngAfterViewInit(){this.rootEl=this.el?.nativeElement,this.rootEl&&this.rootEl?.setAttribute(this.attrSelector,"")}ngOnChanges(e){if(this.document&&!mn(this.platformId)){let{dt:i}=e;i&&i.currentValue&&(this._loadScopedThemeStyles(i.currentValue),this._themeChangeListener(()=>this._loadScopedThemeStyles(i.currentValue)))}}ngOnDestroy(){this._unloadScopedThemeStyles(),this.themeChangeListeners.forEach(e=>Ft.off("theme:change",e))}_loadStyles(){let e=()=>{De.isStyleNameLoaded("base")||(this.baseStyle.loadGlobalCSS(this.styleOptions),De.setLoadedStyleName("base")),this._loadThemeStyles()};e(),this._themeChangeListener(()=>e())}_loadCoreStyles(){!De.isStyleNameLoaded("base")&&this._name&&(this.baseComponentStyle.loadCSS(this.styleOptions),this.componentStyle&&this.componentStyle?.loadCSS(this.styleOptions),De.setLoadedStyleName(this.componentStyle?.name))}_loadThemeStyles(){if(!be.isStyleNameLoaded("common")){let{primitive:e,semantic:i,global:o,style:r}=this.componentStyle?.getCommonTheme?.()||{};this.baseStyle.load(e?.css,w({name:"primitive-variables"},this.styleOptions)),this.baseStyle.load(i?.css,w({name:"semantic-variables"},this.styleOptions)),this.baseStyle.load(o?.css,w({name:"global-variables"},this.styleOptions)),this.baseStyle.loadGlobalTheme(w({name:"global-style"},this.styleOptions),r),be.setLoadedStyleName("common")}if(!be.isStyleNameLoaded(this.componentStyle?.name)&&this.componentStyle?.name){let{css:e,style:i}=this.componentStyle?.getComponentTheme?.()||{};this.componentStyle?.load(e,w({name:`${this.componentStyle?.name}-variables`},this.styleOptions)),this.componentStyle?.loadTheme(w({name:`${this.componentStyle?.name}-style`},this.styleOptions),i),be.setLoadedStyleName(this.componentStyle?.name)}if(!be.isStyleNameLoaded("layer-order")){let e=this.componentStyle?.getLayerOrderThemeCSS?.();this.baseStyle.load(e,w({name:"layer-order",first:!0},this.styleOptions)),be.setLoadedStyleName("layer-order")}this.dt&&(this._loadScopedThemeStyles(this.dt),this._themeChangeListener(()=>this._loadScopedThemeStyles(this.dt)))}_loadScopedThemeStyles(e){let{css:i}=this.componentStyle?.getPresetTheme?.(e,`[${this.attrSelector}]`)||{},o=this.componentStyle?.load(i,w({name:`${this.attrSelector}-${this.componentStyle?.name}`},this.styleOptions));this.scopedStyleEl=o?.el}_unloadScopedThemeStyles(){this.scopedStyleEl?.remove()}_themeChangeListener(e=()=>{}){De.clearLoadedStyleNames(),Ft.on("theme:change",e),this.themeChangeListeners.push(e)}cx(e,i){let o=this.parent?this.parent.componentStyle?.classes?.[e]:this.componentStyle?.classes?.[e];return typeof o=="function"?o({instance:this}):typeof o=="string"?o:e}sx(e){let i=this.componentStyle?.inlineStyles?.[e];return typeof i=="function"?i({instance:this}):typeof i=="string"?i:w({},i)}get parent(){return this.parentInstance}static \u0275fac=function(i){return new(i||t)};static \u0275dir=D({type:t,inputs:{dt:"dt"},features:[k([oi,N]),K]})}return t})();var oo=["*"],ro=`
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
`,so=(()=>{class t extends N{name="baseicon";inlineStyles=ro;static \u0275fac=(()=>{let e;return function(o){return(e||(e=f(t)))(o||t)}})();static \u0275prov=A({token:t,factory:t.\u0275fac})}return t})();var ft=(()=>{class t extends R{label;spin=!1;styleClass;role;ariaLabel;ariaHidden;ngOnInit(){super.ngOnInit(),this.getAttributes()}getAttributes(){let e=fe(this.label);this.role=e?void 0:"img",this.ariaLabel=e?void 0:this.label,this.ariaHidden=e}getClassNames(){return`p-icon ${this.styleClass?this.styleClass+" ":""}${this.spin?"p-icon-spin":""}`}static \u0275fac=(()=>{let e;return function(o){return(e||(e=f(t)))(o||t)}})();static \u0275cmp=E({type:t,selectors:[["ng-component"]],hostAttrs:[1,"p-component","p-iconwrapper"],inputs:{label:"label",spin:[2,"spin","spin",M],styleClass:"styleClass"},features:[k([so]),v],ngContentSelectors:oo,decls:1,vars:0,template:function(i,o){i&1&&(_e(),Ce(0))},encapsulation:2,changeDetection:0})}return t})();var ri=(()=>{class t extends ft{pathId;ngOnInit(){this.pathId="url(#"+Le()+")"}static \u0275fac=(()=>{let e;return function(o){return(e||(e=f(t)))(o||t)}})();static \u0275cmp=E({type:t,selectors:[["SpinnerIcon"]],features:[v],decls:6,vars:7,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(i,o){i&1&&(ye(),c(0,"svg",0)(1,"g"),m(2,"path",1),u(),c(3,"defs")(4,"clipPath",2),m(5,"rect",3),u()()()),i&2&&(oe(o.getClassNames()),C("aria-label",o.ariaLabel)("aria-hidden",o.ariaHidden)("role",o.role),a(),C("clip-path",o.pathId),a(3),l("id",o.pathId))},encapsulation:2})}return t})();var si=(()=>{class t extends ft{static \u0275fac=(()=>{let e;return function(o){return(e||(e=f(t)))(o||t)}})();static \u0275cmp=E({type:t,selectors:[["TimesIcon"]],features:[v],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M8.01186 7.00933L12.27 2.75116C12.341 2.68501 12.398 2.60524 12.4375 2.51661C12.4769 2.42798 12.4982 2.3323 12.4999 2.23529C12.5016 2.13827 12.4838 2.0419 12.4474 1.95194C12.4111 1.86197 12.357 1.78024 12.2884 1.71163C12.2198 1.64302 12.138 1.58893 12.0481 1.55259C11.9581 1.51625 11.8617 1.4984 11.7647 1.50011C11.6677 1.50182 11.572 1.52306 11.4834 1.56255C11.3948 1.60204 11.315 1.65898 11.2488 1.72997L6.99067 5.98814L2.7325 1.72997C2.59553 1.60234 2.41437 1.53286 2.22718 1.53616C2.03999 1.53946 1.8614 1.61529 1.72901 1.74767C1.59663 1.88006 1.5208 2.05865 1.5175 2.24584C1.5142 2.43303 1.58368 2.61419 1.71131 2.75116L5.96948 7.00933L1.71131 11.2675C1.576 11.403 1.5 11.5866 1.5 11.7781C1.5 11.9696 1.576 12.1532 1.71131 12.2887C1.84679 12.424 2.03043 12.5 2.2219 12.5C2.41338 12.5 2.59702 12.424 2.7325 12.2887L6.99067 8.03052L11.2488 12.2887C11.3843 12.424 11.568 12.5 11.7594 12.5C11.9509 12.5 12.1346 12.424 12.27 12.2887C12.4053 12.1532 12.4813 11.9696 12.4813 11.7781C12.4813 11.5866 12.4053 11.403 12.27 11.2675L8.01186 7.00933Z","fill","currentColor"]],template:function(i,o){i&1&&(ye(),c(0,"svg",0),m(1,"path",1),u()),i&2&&(oe(o.getClassNames()),C("aria-label",o.ariaLabel)("aria-hidden",o.ariaHidden)("role",o.role))},encapsulation:2})}return t})();var ao=({dt:t})=>`
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
`,lo={root:"p-ink"},ai=(()=>{class t extends N{name="ripple";theme=ao;classes=lo;static \u0275fac=(()=>{let e;return function(o){return(e||(e=f(t)))(o||t)}})();static \u0275prov=A({token:t,factory:t.\u0275fac})}return t})();var bt=(()=>{class t extends R{zone=y(en);_componentStyle=y(ai);animationListener;mouseDownListener;timeout;constructor(){super(),dn(()=>{et(this.platformId)&&(this.config.ripple()?this.zone.runOutsideAngular(()=>{this.create(),this.mouseDownListener=this.renderer.listen(this.el.nativeElement,"mousedown",this.onMouseDown.bind(this))}):this.remove())})}ngAfterViewInit(){super.ngAfterViewInit()}onMouseDown(e){let i=this.getInk();if(!i||this.document.defaultView?.getComputedStyle(i,null).display==="none")return;if(Ie(i,"p-ink-active"),!Et(i)&&!It(i)){let d=Math.max(yn(this.el.nativeElement),_n(this.el.nativeElement));i.style.height=d+"px",i.style.width=d+"px"}let o=vn(this.el.nativeElement),r=e.pageX-o.left+this.document.body.scrollTop-It(i)/2,s=e.pageY-o.top+this.document.body.scrollLeft-Et(i)/2;this.renderer.setStyle(i,"top",s+"px"),this.renderer.setStyle(i,"left",r+"px"),nt(i,"p-ink-active"),this.timeout=setTimeout(()=>{let d=this.getInk();d&&Ie(d,"p-ink-active")},401)}getInk(){let e=this.el.nativeElement.children;for(let i=0;i<e.length;i++)if(typeof e[i].className=="string"&&e[i].className.indexOf("p-ink")!==-1)return e[i];return null}resetInk(){let e=this.getInk();e&&Ie(e,"p-ink-active")}onAnimationEnd(e){this.timeout&&clearTimeout(this.timeout),Ie(e.currentTarget,"p-ink-active")}create(){let e=this.renderer.createElement("span");this.renderer.addClass(e,"p-ink"),this.renderer.appendChild(this.el.nativeElement,e),this.renderer.setAttribute(e,"aria-hidden","true"),this.renderer.setAttribute(e,"role","presentation"),this.animationListener||(this.animationListener=this.renderer.listen(e,"animationend",this.onAnimationEnd.bind(this)))}remove(){let e=this.getInk();e&&(this.mouseDownListener&&this.mouseDownListener(),this.animationListener&&this.animationListener(),this.mouseDownListener=null,this.animationListener=null,Cn(e))}ngOnDestroy(){this.config&&this.config.ripple()&&this.remove(),super.ngOnDestroy()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=D({type:t,selectors:[["","pRipple",""]],hostAttrs:[1,"p-ripple"],features:[k([ai]),v]})}return t})();var uo=["container"],po=["icon"],mo=["closeicon"],ho=["*"],go=(t,n)=>({showTransitionParams:t,hideTransitionParams:n}),fo=t=>({value:"visible()",params:t}),bo=t=>({closeCallback:t});function yo(t,n){t&1&&ve(0)}function vo(t,n){if(t&1&&_(0,yo,1,0,"ng-container",7),t&2){let e=p(2);l("ngTemplateOutlet",e.iconTemplate||e.iconTemplate)}}function _o(t,n){if(t&1&&m(0,"i",3),t&2){let e=p(2);l("ngClass",e.icon)}}function Co(t,n){if(t&1&&m(0,"span",9),t&2){let e=p(3);l("ngClass",e.cx("text"))("innerHTML",e.text,tn)}}function wo(t,n){if(t&1&&(c(0,"div"),_(1,Co,1,2,"span",8),u()),t&2){let e=p(2);a(),l("ngIf",!e.escape)}}function xo(t,n){if(t&1&&(c(0,"span",5),h(1),u()),t&2){let e=p(3);l("ngClass",e.cx("text")),a(),ee(e.text)}}function So(t,n){if(t&1&&_(0,xo,2,2,"span",10),t&2){let e=p(2);l("ngIf",e.escape&&e.text)}}function Mo(t,n){t&1&&ve(0)}function Eo(t,n){if(t&1&&_(0,Mo,1,0,"ng-container",11),t&2){let e=p(2);l("ngTemplateOutlet",e.containerTemplate||e.containerTemplate)("ngTemplateOutletContext",re(2,bo,e.close.bind(e)))}}function Io(t,n){if(t&1&&(c(0,"span",5),Ce(1),u()),t&2){let e=p(2);l("ngClass",e.cx("text"))}}function Do(t,n){if(t&1&&m(0,"i",13),t&2){let e=p(3);l("ngClass",e.closeIcon)}}function Fo(t,n){t&1&&ve(0)}function Oo(t,n){if(t&1&&_(0,Fo,1,0,"ng-container",7),t&2){let e=p(3);l("ngTemplateOutlet",e.closeIconTemplate||e._closeIconTemplate)}}function Vo(t,n){t&1&&m(0,"TimesIcon",14)}function ko(t,n){if(t&1){let e=he();c(0,"button",12),I("click",function(o){G(e);let r=p(2);return U(r.close(o))}),_(1,Do,1,1,"i",13)(2,Oo,1,1,"ng-container")(3,Vo,1,0,"TimesIcon",14),u()}if(t&2){let e=p(2);C("aria-label",e.closeAriaLabel),a(),V(e.closeIcon?1:-1),a(),V(e.closeIconTemplate||e._closeIconTemplate?2:-1),a(),V(!e.closeIconTemplate&&!e._closeIconTemplate&&!e.closeIcon?3:-1)}}function $o(t,n){if(t&1&&(c(0,"div",1)(1,"div",2),_(2,vo,1,1,"ng-container")(3,_o,1,1,"i",3)(4,wo,2,1,"div",4)(5,So,1,1,"ng-template",null,0,cn)(7,Eo,1,4,"ng-container")(8,Io,2,1,"span",5)(9,ko,4,4,"button",6),u()()),t&2){let e=Xe(6),i=p();l("ngClass",i.containerClass)("@messageAnimation",re(13,fo,ln(10,go,i.showTransitionOptions,i.hideTransitionOptions))),C("aria-live","polite")("role","alert"),a(2),V(i.iconTemplate||i._iconTemplate?2:-1),a(),V(i.icon?3:-1),a(),l("ngIf",!i.escape)("ngIfElse",e),a(3),V(i.containerTemplate||i._containerTemplate?7:8),a(2),V(i.closable?9:-1)}}var Ao=({dt:t})=>`
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
}`,To={root:({props:t})=>["p-message p-component p-message-"+t.severity,{"p-message-simple":t.variant==="simple"}],content:"p-message-content",icon:"p-message-icon",text:"p-message-text",closeButton:"p-message-close-button",closeIcon:"p-message-close-icon"},li=(()=>{class t extends N{name="message";theme=Ao;classes=To;static \u0275fac=(()=>{let e;return function(o){return(e||(e=f(t)))(o||t)}})();static \u0275prov=A({token:t,factory:t.\u0275fac})}return t})();var ci=(()=>{class t extends R{severity="info";text;escape=!0;style;styleClass;closable=!1;icon;closeIcon;life;showTransitionOptions="300ms ease-out";hideTransitionOptions="200ms cubic-bezier(0.86, 0, 0.07, 1)";size;variant;onClose=new q;get closeAriaLabel(){return this.config.translation.aria?this.config.translation.aria.close:void 0}get containerClass(){let e=this.variant==="outlined"?"p-message-outlined":this.variant==="simple"?"p-message-simple":"",i=this.size==="small"?"p-message-sm":this.size==="large"?"p-message-lg":"";return`p-message-${this.severity} ${e} ${i}`.trim()+(this.styleClass?" "+this.styleClass:"")}visible=J(!0);_componentStyle=y(li);containerTemplate;iconTemplate;closeIconTemplate;templates;_containerTemplate;_iconTemplate;_closeIconTemplate;ngOnInit(){super.ngOnInit(),this.life&&setTimeout(()=>{this.visible.set(!1)},this.life)}ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"container":this._containerTemplate=e.template;break;case"icon":this._iconTemplate=e.template;break;case"closeicon":this._closeIconTemplate=e.template;break}})}close(e){this.visible.set(!1),this.onClose.emit({originalEvent:e})}static \u0275fac=(()=>{let e;return function(o){return(e||(e=f(t)))(o||t)}})();static \u0275cmp=E({type:t,selectors:[["p-message"]],contentQueries:function(i,o,r){if(i&1&&(X(r,uo,4),X(r,po,4),X(r,mo,4),X(r,it,4)),i&2){let s;T(s=P())&&(o.containerTemplate=s.first),T(s=P())&&(o.iconTemplate=s.first),T(s=P())&&(o.closeIconTemplate=s.first),T(s=P())&&(o.templates=s)}},inputs:{severity:"severity",text:"text",escape:[2,"escape","escape",M],style:"style",styleClass:"styleClass",closable:[2,"closable","closable",M],icon:"icon",closeIcon:"closeIcon",life:"life",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",size:"size",variant:"variant"},outputs:{onClose:"onClose"},features:[k([li]),v],ngContentSelectors:ho,decls:1,vars:1,consts:[["escapeOut",""],[1,"p-message","p-component",3,"ngClass"],[1,"p-message-content"],[1,"p-message-icon",3,"ngClass"],[4,"ngIf","ngIfElse"],[3,"ngClass"],["pRipple","","type","button",1,"p-message-close-button"],[4,"ngTemplateOutlet"],[3,"ngClass","innerHTML",4,"ngIf"],[3,"ngClass","innerHTML"],[3,"ngClass",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["pRipple","","type","button",1,"p-message-close-button",3,"click"],[1,"p-message-close-icon",3,"ngClass"],["styleClass","p-message-close-icon"]],template:function(i,o){i&1&&(_e(),_(0,$o,10,15,"div",1)),i&2&&V(o.visible()?0:-1)},dependencies:[te,we,Ke,Je,si,bt,Z],encapsulation:2,data:{animation:[Ne("messageAnimation",[Ee(":enter",[ge({opacity:0,transform:"translateY(-25%)"}),Me("{{showTransitionParams}}")]),Ee(":leave",[Me("{{hideTransitionParams}}",ge({height:0,marginTop:0,marginBottom:0,marginLeft:0,marginRight:0,opacity:0}))])])]},changeDetection:0})}return t})();var ui=(()=>{class t{static zindex=1e3;static calculatedScrollbarWidth=null;static calculatedScrollbarHeight=null;static browser;static addClass(e,i){e&&i&&(e.classList?e.classList.add(i):e.className+=" "+i)}static addMultipleClasses(e,i){if(e&&i)if(e.classList){let o=i.trim().split(" ");for(let r=0;r<o.length;r++)e.classList.add(o[r])}else{let o=i.split(" ");for(let r=0;r<o.length;r++)e.className+=" "+o[r]}}static removeClass(e,i){e&&i&&(e.classList?e.classList.remove(i):e.className=e.className.replace(new RegExp("(^|\\b)"+i.split(" ").join("|")+"(\\b|$)","gi")," "))}static removeMultipleClasses(e,i){e&&i&&[i].flat().filter(Boolean).forEach(o=>o.split(" ").forEach(r=>this.removeClass(e,r)))}static hasClass(e,i){return e&&i?e.classList?e.classList.contains(i):new RegExp("(^| )"+i+"( |$)","gi").test(e.className):!1}static siblings(e){return Array.prototype.filter.call(e.parentNode.children,function(i){return i!==e})}static find(e,i){return Array.from(e.querySelectorAll(i))}static findSingle(e,i){return this.isElement(e)?e.querySelector(i):null}static index(e){let i=e.parentNode.childNodes,o=0;for(var r=0;r<i.length;r++){if(i[r]==e)return o;i[r].nodeType==1&&o++}return-1}static indexWithinGroup(e,i){let o=e.parentNode?e.parentNode.childNodes:[],r=0;for(var s=0;s<o.length;s++){if(o[s]==e)return r;o[s].attributes&&o[s].attributes[i]&&o[s].nodeType==1&&r++}return-1}static appendOverlay(e,i,o="self"){o!=="self"&&e&&i&&this.appendChild(e,i)}static alignOverlay(e,i,o="self",r=!0){e&&i&&(r&&(e.style.minWidth=`${t.getOuterWidth(i)}px`),o==="self"?this.relativePosition(e,i):this.absolutePosition(e,i))}static relativePosition(e,i,o=!0){let r=Ge=>{if(Ge)return getComputedStyle(Ge).getPropertyValue("position")==="relative"?Ge:r(Ge.parentElement)},s=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e),d=i.offsetHeight,g=i.getBoundingClientRect(),b=this.getWindowScrollTop(),S=this.getWindowScrollLeft(),F=this.getViewport(),$=r(e)?.getBoundingClientRect()||{top:-1*b,left:-1*S},H,ne;g.top+d+s.height>F.height?(H=g.top-$.top-s.height,e.style.transformOrigin="bottom",g.top+H<0&&(H=-1*g.top)):(H=d+g.top-$.top,e.style.transformOrigin="top");let qt=g.left+s.width-F.width,xi=g.left-$.left;s.width>F.width?ne=(g.left-$.left)*-1:qt>0?ne=xi-qt:ne=g.left-$.left,e.style.top=H+"px",e.style.left=ne+"px",o&&(e.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static absolutePosition(e,i,o=!0){let r=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e),s=r.height,d=r.width,g=i.offsetHeight,b=i.offsetWidth,S=i.getBoundingClientRect(),F=this.getWindowScrollTop(),z=this.getWindowScrollLeft(),$=this.getViewport(),H,ne;S.top+g+s>$.height?(H=S.top+F-s,e.style.transformOrigin="bottom",H<0&&(H=F)):(H=g+S.top+F,e.style.transformOrigin="top"),S.left+d>$.width?ne=Math.max(0,S.left+z+b-d):ne=S.left+z,e.style.top=H+"px",e.style.left=ne+"px",o&&(e.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static getParents(e,i=[]){return e.parentNode===null?i:this.getParents(e.parentNode,i.concat([e.parentNode]))}static getScrollableParents(e){let i=[];if(e){let o=this.getParents(e),r=/(auto|scroll)/,s=d=>{let g=window.getComputedStyle(d,null);return r.test(g.getPropertyValue("overflow"))||r.test(g.getPropertyValue("overflowX"))||r.test(g.getPropertyValue("overflowY"))};for(let d of o){let g=d.nodeType===1&&d.dataset.scrollselectors;if(g){let b=g.split(",");for(let S of b){let F=this.findSingle(d,S);F&&s(F)&&i.push(F)}}d.nodeType!==9&&s(d)&&i.push(d)}}return i}static getHiddenElementOuterHeight(e){e.style.visibility="hidden",e.style.display="block";let i=e.offsetHeight;return e.style.display="none",e.style.visibility="visible",i}static getHiddenElementOuterWidth(e){e.style.visibility="hidden",e.style.display="block";let i=e.offsetWidth;return e.style.display="none",e.style.visibility="visible",i}static getHiddenElementDimensions(e){let i={};return e.style.visibility="hidden",e.style.display="block",i.width=e.offsetWidth,i.height=e.offsetHeight,e.style.display="none",e.style.visibility="visible",i}static scrollInView(e,i){let o=getComputedStyle(e).getPropertyValue("borderTopWidth"),r=o?parseFloat(o):0,s=getComputedStyle(e).getPropertyValue("paddingTop"),d=s?parseFloat(s):0,g=e.getBoundingClientRect(),S=i.getBoundingClientRect().top+document.body.scrollTop-(g.top+document.body.scrollTop)-r-d,F=e.scrollTop,z=e.clientHeight,$=this.getOuterHeight(i);S<0?e.scrollTop=F+S:S+$>z&&(e.scrollTop=F+S-z+$)}static fadeIn(e,i){e.style.opacity=0;let o=+new Date,r=0,s=function(){r=+e.style.opacity.replace(",",".")+(new Date().getTime()-o)/i,e.style.opacity=r,o=+new Date,+r<1&&(window.requestAnimationFrame&&requestAnimationFrame(s)||setTimeout(s,16))};s()}static fadeOut(e,i){var o=1,r=50,s=i,d=r/s;let g=setInterval(()=>{o=o-d,o<=0&&(o=0,clearInterval(g)),e.style.opacity=o},r)}static getWindowScrollTop(){let e=document.documentElement;return(window.pageYOffset||e.scrollTop)-(e.clientTop||0)}static getWindowScrollLeft(){let e=document.documentElement;return(window.pageXOffset||e.scrollLeft)-(e.clientLeft||0)}static matches(e,i){var o=Element.prototype,r=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.msMatchesSelector||function(s){return[].indexOf.call(document.querySelectorAll(s),this)!==-1};return r.call(e,i)}static getOuterWidth(e,i){let o=e.offsetWidth;if(i){let r=getComputedStyle(e);o+=parseFloat(r.marginLeft)+parseFloat(r.marginRight)}return o}static getHorizontalPadding(e){let i=getComputedStyle(e);return parseFloat(i.paddingLeft)+parseFloat(i.paddingRight)}static getHorizontalMargin(e){let i=getComputedStyle(e);return parseFloat(i.marginLeft)+parseFloat(i.marginRight)}static innerWidth(e){let i=e.offsetWidth,o=getComputedStyle(e);return i+=parseFloat(o.paddingLeft)+parseFloat(o.paddingRight),i}static width(e){let i=e.offsetWidth,o=getComputedStyle(e);return i-=parseFloat(o.paddingLeft)+parseFloat(o.paddingRight),i}static getInnerHeight(e){let i=e.offsetHeight,o=getComputedStyle(e);return i+=parseFloat(o.paddingTop)+parseFloat(o.paddingBottom),i}static getOuterHeight(e,i){let o=e.offsetHeight;if(i){let r=getComputedStyle(e);o+=parseFloat(r.marginTop)+parseFloat(r.marginBottom)}return o}static getHeight(e){let i=e.offsetHeight,o=getComputedStyle(e);return i-=parseFloat(o.paddingTop)+parseFloat(o.paddingBottom)+parseFloat(o.borderTopWidth)+parseFloat(o.borderBottomWidth),i}static getWidth(e){let i=e.offsetWidth,o=getComputedStyle(e);return i-=parseFloat(o.paddingLeft)+parseFloat(o.paddingRight)+parseFloat(o.borderLeftWidth)+parseFloat(o.borderRightWidth),i}static getViewport(){let e=window,i=document,o=i.documentElement,r=i.getElementsByTagName("body")[0],s=e.innerWidth||o.clientWidth||r.clientWidth,d=e.innerHeight||o.clientHeight||r.clientHeight;return{width:s,height:d}}static getOffset(e){var i=e.getBoundingClientRect();return{top:i.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:i.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}static replaceElementWith(e,i){let o=e.parentNode;if(!o)throw"Can't replace element";return o.replaceChild(i,e)}static getUserAgent(){if(navigator&&this.isClient())return navigator.userAgent}static isIE(){var e=window.navigator.userAgent,i=e.indexOf("MSIE ");if(i>0)return!0;var o=e.indexOf("Trident/");if(o>0){var r=e.indexOf("rv:");return!0}var s=e.indexOf("Edge/");return s>0}static isIOS(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream}static isAndroid(){return/(android)/i.test(navigator.userAgent)}static isTouchDevice(){return"ontouchstart"in window||navigator.maxTouchPoints>0}static appendChild(e,i){if(this.isElement(i))i.appendChild(e);else if(i&&i.el&&i.el.nativeElement)i.el.nativeElement.appendChild(e);else throw"Cannot append "+i+" to "+e}static removeChild(e,i){if(this.isElement(i))i.removeChild(e);else if(i.el&&i.el.nativeElement)i.el.nativeElement.removeChild(e);else throw"Cannot remove "+e+" from "+i}static removeElement(e){"remove"in Element.prototype?e.remove():e.parentNode.removeChild(e)}static isElement(e){return typeof HTMLElement=="object"?e instanceof HTMLElement:e&&typeof e=="object"&&e!==null&&e.nodeType===1&&typeof e.nodeName=="string"}static calculateScrollbarWidth(e){if(e){let i=getComputedStyle(e);return e.offsetWidth-e.clientWidth-parseFloat(i.borderLeftWidth)-parseFloat(i.borderRightWidth)}else{if(this.calculatedScrollbarWidth!==null)return this.calculatedScrollbarWidth;let i=document.createElement("div");i.className="p-scrollbar-measure",document.body.appendChild(i);let o=i.offsetWidth-i.clientWidth;return document.body.removeChild(i),this.calculatedScrollbarWidth=o,o}}static calculateScrollbarHeight(){if(this.calculatedScrollbarHeight!==null)return this.calculatedScrollbarHeight;let e=document.createElement("div");e.className="p-scrollbar-measure",document.body.appendChild(e);let i=e.offsetHeight-e.clientHeight;return document.body.removeChild(e),this.calculatedScrollbarWidth=i,i}static invokeElementMethod(e,i,o){e[i].apply(e,o)}static clearSelection(){if(window.getSelection)window.getSelection().empty?window.getSelection().empty():window.getSelection().removeAllRanges&&window.getSelection().rangeCount>0&&window.getSelection().getRangeAt(0).getClientRects().length>0&&window.getSelection().removeAllRanges();else if(document.selection&&document.selection.empty)try{document.selection.empty()}catch{}}static getBrowser(){if(!this.browser){let e=this.resolveUserAgent();this.browser={},e.browser&&(this.browser[e.browser]=!0,this.browser.version=e.version),this.browser.chrome?this.browser.webkit=!0:this.browser.webkit&&(this.browser.safari=!0)}return this.browser}static resolveUserAgent(){let e=navigator.userAgent.toLowerCase(),i=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:i[1]||"",version:i[2]||"0"}}static isInteger(e){return Number.isInteger?Number.isInteger(e):typeof e=="number"&&isFinite(e)&&Math.floor(e)===e}static isHidden(e){return!e||e.offsetParent===null}static isVisible(e){return e&&e.offsetParent!=null}static isExist(e){return e!==null&&typeof e<"u"&&e.nodeName&&e.parentNode}static focus(e,i){e&&document.activeElement!==e&&e.focus(i)}static getFocusableSelectorString(e=""){return`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        .p-inputtext:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        .p-button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e}`}static getFocusableElements(e,i=""){let o=this.find(e,this.getFocusableSelectorString(i)),r=[];for(let s of o){let d=getComputedStyle(s);this.isVisible(s)&&d.display!="none"&&d.visibility!="hidden"&&r.push(s)}return r}static getFocusableElement(e,i=""){let o=this.findSingle(e,this.getFocusableSelectorString(i));if(o){let r=getComputedStyle(o);if(this.isVisible(o)&&r.display!="none"&&r.visibility!="hidden")return o}return null}static getFirstFocusableElement(e,i=""){let o=this.getFocusableElements(e,i);return o.length>0?o[0]:null}static getLastFocusableElement(e,i){let o=this.getFocusableElements(e,i);return o.length>0?o[o.length-1]:null}static getNextFocusableElement(e,i=!1){let o=t.getFocusableElements(e),r=0;if(o&&o.length>0){let s=o.indexOf(o[0].ownerDocument.activeElement);i?s==-1||s===0?r=o.length-1:r=s-1:s!=-1&&s!==o.length-1&&(r=s+1)}return o[r]}static generateZIndex(){return this.zindex=this.zindex||999,++this.zindex}static getSelection(){return window.getSelection?window.getSelection().toString():document.getSelection?document.getSelection().toString():document.selection?document.selection.createRange().text:null}static getTargetElement(e,i){if(!e)return null;switch(e){case"document":return document;case"window":return window;case"@next":return i?.nextElementSibling;case"@prev":return i?.previousElementSibling;case"@parent":return i?.parentElement;case"@grandparent":return i?.parentElement.parentElement;default:let o=typeof e;if(o==="string")return document.querySelector(e);if(o==="object"&&e.hasOwnProperty("nativeElement"))return this.isExist(e.nativeElement)?e.nativeElement:void 0;let s=(d=>!!(d&&d.constructor&&d.call&&d.apply))(e)?e():e;return s&&s.nodeType===9||this.isExist(s)?s:null}}static isClient(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}static getAttribute(e,i){if(e){let o=e.getAttribute(i);return isNaN(o)?o==="true"||o==="false"?o==="true":o:+o}}static calculateBodyScrollbarWidth(){return window.innerWidth-document.documentElement.offsetWidth}static blockBodyScroll(e="p-overflow-hidden"){document.body.style.setProperty("--scrollbar-width",this.calculateBodyScrollbarWidth()+"px"),this.addClass(document.body,e)}static unblockBodyScroll(e="p-overflow-hidden"){document.body.style.removeProperty("--scrollbar-width"),this.removeClass(document.body,e)}static createElement(e,i={},...o){if(e){let r=document.createElement(e);return this.setAttributes(r,i),r.append(...o),r}}static setAttribute(e,i="",o){this.isElement(e)&&o!==null&&o!==void 0&&e.setAttribute(i,o)}static setAttributes(e,i={}){if(this.isElement(e)){let o=(r,s)=>{let d=e?.$attrs?.[r]?[e?.$attrs?.[r]]:[];return[s].flat().reduce((g,b)=>{if(b!=null){let S=typeof b;if(S==="string"||S==="number")g.push(b);else if(S==="object"){let F=Array.isArray(b)?o(r,b):Object.entries(b).map(([z,$])=>r==="style"&&($||$===0)?`${z.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${$}`:$?z:void 0);g=F.length?g.concat(F.filter(z=>!!z)):g}}return g},d)};Object.entries(i).forEach(([r,s])=>{if(s!=null){let d=r.match(/^on(.+)/);d?e.addEventListener(d[1].toLowerCase(),s):r==="pBind"?this.setAttributes(e,s):(s=r==="class"?[...new Set(o("class",s))].join(" ").trim():r==="style"?o("style",s).join(";").trim():s,(e.$attrs=e.$attrs||{})&&(e.$attrs[r]=s),e.setAttribute(r,s))}})}}static isFocusableElement(e,i=""){return this.isElement(e)?e.matches(`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i}`):!1}}return t})();var di=(()=>{class t extends R{autofocus=!1;_autofocus=!1;focused=!1;platformId=y(qe);document=y(Ze);host=y(de);ngAfterContentChecked(){this.autofocus===!1?this.host.nativeElement.removeAttribute("autofocus"):this.host.nativeElement.setAttribute("autofocus",!0),this.focused||this.autoFocus()}ngAfterViewChecked(){this.focused||this.autoFocus()}autoFocus(){et(this.platformId)&&this._autofocus&&setTimeout(()=>{let e=ui.getFocusableElements(this.host?.nativeElement);e.length===0&&this.host.nativeElement.focus(),e.length>0&&e[0].focus(),this.focused=!0})}static \u0275fac=(()=>{let e;return function(o){return(e||(e=f(t)))(o||t)}})();static \u0275dir=D({type:t,selectors:[["","pAutoFocus",""]],inputs:{autofocus:[2,"autofocus","autofocus",M],_autofocus:[0,"pAutoFocus","_autofocus"]},features:[v]})}return t})();var Po=({dt:t})=>`
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
`,No={root:({props:t,instance:n})=>["p-badge p-component",{"p-badge-circle":Dt(t.value)&&String(t.value).length===1,"p-badge-dot":fe(t.value)&&!n.$slots.default,"p-badge-sm":t.size==="small","p-badge-lg":t.size==="large","p-badge-xl":t.size==="xlarge","p-badge-info":t.severity==="info","p-badge-success":t.severity==="success","p-badge-warn":t.severity==="warn","p-badge-danger":t.severity==="danger","p-badge-secondary":t.severity==="secondary","p-badge-contrast":t.severity==="contrast"}]},pi=(()=>{class t extends N{name="badge";theme=Po;classes=No;static \u0275fac=(()=>{let e;return function(o){return(e||(e=f(t)))(o||t)}})();static \u0275prov=A({token:t,factory:t.\u0275fac})}return t})();var Gt=(()=>{class t extends R{styleClass=ie();style=ie();badgeSize=ie();size=ie();severity=ie();value=ie();badgeDisabled=ie(!1,{transform:M});_componentStyle=y(pi);containerClass=ae(()=>{let e="p-badge p-component";return Dt(this.value())&&String(this.value()).length===1&&(e+=" p-badge-circle"),this.badgeSize()==="large"?e+=" p-badge-lg":this.badgeSize()==="xlarge"?e+=" p-badge-xl":this.badgeSize()==="small"&&(e+=" p-badge-sm"),fe(this.value())&&(e+=" p-badge-dot"),this.styleClass()&&(e+=` ${this.styleClass()}`),this.severity()&&(e+=` p-badge-${this.severity()}`),e});static \u0275fac=(()=>{let e;return function(o){return(e||(e=f(t)))(o||t)}})();static \u0275cmp=E({type:t,selectors:[["p-badge"]],hostVars:6,hostBindings:function(i,o){i&2&&(sn(o.style()),oe(o.containerClass()),rn("display",o.badgeDisabled()?"none":null))},inputs:{styleClass:[1,"styleClass"],style:[1,"style"],badgeSize:[1,"badgeSize"],size:[1,"size"],severity:[1,"severity"],value:[1,"value"],badgeDisabled:[1,"badgeDisabled"]},features:[k([pi]),v],decls:1,vars:1,template:function(i,o){i&1&&h(0),i&2&&ee(o.value())},dependencies:[te,Z],encapsulation:2,changeDetection:0})}return t})(),mi=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=Q({type:t});static \u0275inj=W({imports:[Gt,Z,Z]})}return t})();var Bo=["content"],Ro=["loadingicon"],zo=["icon"],Ho=["*"],gi=t=>({class:t});function jo(t,n){t&1&&ve(0)}function Wo(t,n){if(t&1&&m(0,"span",8),t&2){let e=p(3);l("ngClass",e.iconClass()),C("aria-hidden",!0)("data-pc-section","loadingicon")}}function Go(t,n){if(t&1&&m(0,"SpinnerIcon",9),t&2){let e=p(3);l("styleClass",e.spinnerIconClass())("spin",!0),C("aria-hidden",!0)("data-pc-section","loadingicon")}}function Uo(t,n){if(t&1&&(Qe(0),_(1,Wo,1,3,"span",6)(2,Go,1,4,"SpinnerIcon",7),Ye()),t&2){let e=p(2);a(),l("ngIf",e.loadingIcon),a(),l("ngIf",!e.loadingIcon)}}function qo(t,n){}function Qo(t,n){if(t&1&&_(0,qo,0,0,"ng-template",10),t&2){let e=p(2);l("ngIf",e.loadingIconTemplate||e._loadingIconTemplate)}}function Yo(t,n){if(t&1&&(Qe(0),_(1,Uo,3,2,"ng-container",2)(2,Qo,1,1,null,5),Ye()),t&2){let e=p();a(),l("ngIf",!e.loadingIconTemplate&&!e._loadingIconTemplate),a(),l("ngTemplateOutlet",e.loadingIconTemplate||e._loadingIconTemplate)("ngTemplateOutletContext",re(3,gi,e.iconClass()))}}function Xo(t,n){if(t&1&&m(0,"span",8),t&2){let e=p(2);oe(e.icon),l("ngClass",e.iconClass()),C("data-pc-section","icon")}}function Zo(t,n){}function Ko(t,n){if(t&1&&_(0,Zo,0,0,"ng-template",10),t&2){let e=p(2);l("ngIf",!e.icon&&(e.iconTemplate||e._iconTemplate))}}function Jo(t,n){if(t&1&&(Qe(0),_(1,Xo,1,4,"span",11)(2,Ko,1,1,null,5),Ye()),t&2){let e=p();a(),l("ngIf",e.icon&&!e.iconTemplate&&!e._iconTemplate),a(),l("ngTemplateOutlet",e.iconTemplate||e._iconTemplate)("ngTemplateOutletContext",re(3,gi,e.iconClass()))}}function er(t,n){if(t&1&&(c(0,"span",12),h(1),u()),t&2){let e=p();C("aria-hidden",e.icon&&!e.label)("data-pc-section","label"),a(),ee(e.label)}}function tr(t,n){if(t&1&&m(0,"p-badge",13),t&2){let e=p();l("value",e.badge)("severity",e.badgeSeverity)}}var nr=({dt:t})=>`
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
`,ir={root:({instance:t,props:n})=>["p-button p-component",{"p-button-icon-only":t.hasIcon&&!n.label&&!n.badge,"p-button-vertical":(n.iconPos==="top"||n.iconPos==="bottom")&&n.label,"p-button-loading":n.loading,"p-button-link":n.link,[`p-button-${n.severity}`]:n.severity,"p-button-raised":n.raised,"p-button-rounded":n.rounded,"p-button-text":n.text,"p-button-outlined":n.outlined,"p-button-sm":n.size==="small","p-button-lg":n.size==="large","p-button-plain":n.plain,"p-button-fluid":n.fluid}],loadingIcon:"p-button-loading-icon",icon:({props:t})=>["p-button-icon",{[`p-button-icon-${t.iconPos}`]:t.label}],label:"p-button-label"},hi=(()=>{class t extends N{name="button";theme=nr;classes=ir;static \u0275fac=(()=>{let e;return function(o){return(e||(e=f(t)))(o||t)}})();static \u0275prov=A({token:t,factory:t.\u0275fac})}return t})();var or=(()=>{class t extends R{type="button";iconPos="left";icon;badge;label;disabled;loading=!1;loadingIcon;raised=!1;rounded=!1;text=!1;plain=!1;severity;outlined=!1;link=!1;tabindex;size;variant;style;styleClass;badgeClass;badgeSeverity="secondary";ariaLabel;autofocus;fluid;onClick=new q;onFocus=new q;onBlur=new q;contentTemplate;loadingIconTemplate;iconTemplate;_buttonProps;get buttonProps(){return this._buttonProps}set buttonProps(e){this._buttonProps=e,e&&typeof e=="object"&&Object.entries(e).forEach(([i,o])=>this[`_${i}`]!==o&&(this[`_${i}`]=o))}get hasFluid(){let i=this.el.nativeElement.closest("p-fluid");return fe(this.fluid)?!!i:this.fluid}_componentStyle=y(hi);templates;_contentTemplate;_iconTemplate;_loadingIconTemplate;ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"content":this._contentTemplate=e.template;break;case"icon":this._iconTemplate=e.template;break;case"loadingicon":this._loadingIconTemplate=e.template;break;default:this._contentTemplate=e.template;break}})}ngOnChanges(e){super.ngOnChanges(e);let{buttonProps:i}=e;if(i){let o=i.currentValue;for(let r in o)this[r]=o[r]}}spinnerIconClass(){return Object.entries(this.iconClass()).filter(([,e])=>!!e).reduce((e,[i])=>e+` ${i}`,"p-button-loading-icon")}iconClass(){return{[`p-button-loading-icon pi-spin ${this.loadingIcon??""}`]:this.loading,"p-button-icon":!0,"p-button-icon-left":this.iconPos==="left"&&this.label,"p-button-icon-right":this.iconPos==="right"&&this.label,"p-button-icon-top":this.iconPos==="top"&&this.label,"p-button-icon-bottom":this.iconPos==="bottom"&&this.label}}get buttonClass(){return{"p-button p-component":!0,"p-button-icon-only":(this.icon||this.iconTemplate||this._iconTemplate||this.loadingIcon||this.loadingIconTemplate||this._loadingIconTemplate)&&!this.label,"p-button-vertical":(this.iconPos==="top"||this.iconPos==="bottom")&&this.label,"p-button-loading":this.loading,"p-button-loading-label-only":this.loading&&!this.icon&&this.label&&!this.loadingIcon&&this.iconPos==="left","p-button-link":this.link,[`p-button-${this.severity}`]:this.severity,"p-button-raised":this.raised,"p-button-rounded":this.rounded,"p-button-text":this.text||this.variant=="text","p-button-outlined":this.outlined||this.variant=="outlined","p-button-sm":this.size==="small","p-button-lg":this.size==="large","p-button-plain":this.plain,"p-button-fluid":this.hasFluid,[`${this.styleClass}`]:this.styleClass}}static \u0275fac=(()=>{let e;return function(o){return(e||(e=f(t)))(o||t)}})();static \u0275cmp=E({type:t,selectors:[["p-button"]],contentQueries:function(i,o,r){if(i&1&&(X(r,Bo,5),X(r,Ro,5),X(r,zo,5),X(r,it,4)),i&2){let s;T(s=P())&&(o.contentTemplate=s.first),T(s=P())&&(o.loadingIconTemplate=s.first),T(s=P())&&(o.iconTemplate=s.first),T(s=P())&&(o.templates=s)}},inputs:{type:"type",iconPos:"iconPos",icon:"icon",badge:"badge",label:"label",disabled:[2,"disabled","disabled",M],loading:[2,"loading","loading",M],loadingIcon:"loadingIcon",raised:[2,"raised","raised",M],rounded:[2,"rounded","rounded",M],text:[2,"text","text",M],plain:[2,"plain","plain",M],severity:"severity",outlined:[2,"outlined","outlined",M],link:[2,"link","link",M],tabindex:[2,"tabindex","tabindex",un],size:"size",variant:"variant",style:"style",styleClass:"styleClass",badgeClass:"badgeClass",badgeSeverity:"badgeSeverity",ariaLabel:"ariaLabel",autofocus:[2,"autofocus","autofocus",M],fluid:[2,"fluid","fluid",M],buttonProps:"buttonProps"},outputs:{onClick:"onClick",onFocus:"onFocus",onBlur:"onBlur"},features:[k([hi]),v,K],ngContentSelectors:Ho,decls:7,vars:14,consts:[["pRipple","",3,"click","focus","blur","ngStyle","disabled","ngClass","pAutoFocus"],[4,"ngTemplateOutlet"],[4,"ngIf"],["class","p-button-label",4,"ngIf"],[3,"value","severity",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"ngClass",4,"ngIf"],[3,"styleClass","spin",4,"ngIf"],[3,"ngClass"],[3,"styleClass","spin"],[3,"ngIf"],[3,"class","ngClass",4,"ngIf"],[1,"p-button-label"],[3,"value","severity"]],template:function(i,o){i&1&&(_e(),c(0,"button",0),I("click",function(s){return o.onClick.emit(s)})("focus",function(s){return o.onFocus.emit(s)})("blur",function(s){return o.onBlur.emit(s)}),Ce(1),_(2,jo,1,0,"ng-container",1)(3,Yo,3,5,"ng-container",2)(4,Jo,3,5,"ng-container",2)(5,er,2,3,"span",3)(6,tr,1,2,"p-badge",4),u()),i&2&&(l("ngStyle",o.style)("disabled",o.disabled||o.loading)("ngClass",o.buttonClass)("pAutoFocus",o.autofocus),C("type",o.type)("aria-label",o.ariaLabel)("data-pc-name","button")("data-pc-section","root")("tabindex",o.tabindex),a(2),l("ngTemplateOutlet",o.contentTemplate||o._contentTemplate),a(),l("ngIf",o.loading),a(),l("ngIf",!o.loading),a(),l("ngIf",!o.contentTemplate&&!o._contentTemplate&&o.label),a(),l("ngIf",!o.contentTemplate&&!o._contentTemplate&&o.badge))},dependencies:[te,we,Ke,Je,pn,bt,di,ri,mi,Gt,Z],encapsulation:2,changeDetection:0})}return t})(),fi=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=Q({type:t});static \u0275inj=W({imports:[te,or,Z,Z]})}return t})();var yt=class t{constructor(n){this._http=n}apiServiceUrl=le.formspreeApi;sendFormData(n){return this._http.post(this.apiServiceUrl,n,{headers:{Accept:"application/json"}})}static \u0275fac=function(e){return new(e||t)(Kt(hn))};static \u0275prov=A({token:t,factory:t.\u0275fac,providedIn:"root"})};var sr=t=>({"hidden-footer":t}),ar=()=>[""],bi=()=>["about"],yi=()=>["releases"],vi=()=>["events"],_i=()=>["mixtape-archive"],Ci=()=>["moreismoreismore"];function lr(t,n){t&1&&(c(0,"button",19),h(1,"Sending..."),u())}function cr(t,n){if(t&1&&(c(0,"button",20),h(1," Subscribe "),u()),t&2){let e=p();l("disabled",e.fgNewsletter.invalid)}}function ur(t,n){if(t&1&&(c(0,"p-message",24),h(1),u()),t&2){let e=p();l("life",3e3)("severity",e.messageForm.severity),a(),ee(e.messageForm.message)}}var vt=class t{constructor(n,e){this._formsspreeService=n;this.router=e;this.fgNewsletter=new $e({email:new ti().control("",[je.required,je.email])})}uriAssetsImages=le.uriAssetsImages;emailCopy="neanchepersognorecords@gmail.com";isHidden=!1;lastScrollTop=0;messageForm={};fgNewsletter;isLoadingForm=!1;visibleMessageForm=J(!1);ngOnInit(){this.visibleMessageForm.set(!1)}isHome(){return this.router.url.split(/[?#]/)[0]==="/"}onWindowScroll(){if(this.isHome()){this.isHidden=!1;return}let n=window.scrollY||document.documentElement.scrollTop,e=document.documentElement.scrollHeight-window.innerHeight;if(e<=0){this.isHidden=!1;return}n>this.lastScrollTop?this.isHidden=!0:n<this.lastScrollTop&&n<e-50&&(this.isHidden=!1),this.lastScrollTop=n<=0?0:n}onSubmitForm(){if(this.isLoadingForm=!0,this.visibleMessageForm.set(!1),this.fgNewsletter.valid){let n=new FormData;n.append("email",this.fgNewsletter.value.email),this._formsspreeService.sendFormData(n).subscribe({next:e=>{console.log("ok: ",e),this.fgNewsletter.reset(),this.isLoadingForm=!1,this.messageForm={severity:"success",message:"Ti sei iscritto con successo!"}},error:e=>{this.fgNewsletter.reset(),console.error("Error submitting form: ",e),this.messageForm={severity:"error",message:"Oops! Qualcosa \xE8 andato male, riprova pi\xF9 tardi."},this.isLoadingForm=!1,this.visibleMessageForm.set(!0)}})}}onCopyEmail(){navigator.clipboard.writeText("neanchepersognorecords@gmail.com").then(()=>{this.emailCopy="Copied to clipboard!"}).catch(e=>{console.error("Failed to copy email: ",e)})}static \u0275fac=function(e){return new(e||t)(x(yt),x(xe))};static \u0275cmp=E({type:t,selectors:[["app-footer"]],hostBindings:function(e,i){e&1&&I("scroll",function(){return i.onWindowScroll()},!1,nn)},decls:52,vars:31,consts:[[1,"floating-footer",3,"ngClass"],[1,"bottom-logo-container"],[3,"routerLink"],["alt","Logo Neanche Per Sogno",1,"bottom-logo",3,"src"],[1,"logo-credit"],["href","https://www.muah.studio","target","_blank","rel","noopener noreferrer"],[1,"bottom-links-container"],[1,"bottom-links"],[1,"bottom-links-row","row-desktop-only"],["routerLinkActive","active",3,"routerLink"],["href","https://nxsrecords.bandcamp.com/merch","target","_blank","rel","noopener noreferrer"],[1,"bottom-links-row","row-mobile-main"],[1,"bottom-links-row","row-mobile-secondary"],[1,"copy-email","copy-email-mobile",3,"click"],[1,"copy-email","copy-email-desktop",3,"click"],[1,"newsletter-wrapper"],[1,"newsletter-title"],["id","newsletter-form",1,"subscribe-box",3,"submit","formGroup"],["formControlName","email","type","email","id","email","name","email","placeholder","Email address","required",""],["type","submit"],["type","submit",3,"disabled"],["id","form-status",2,"margin-left","10px","font-size","0.7rem","color","rgb(127, 127, 127)"],[1,"messagge-form"],[1,"card","flex","flex-col"],["closable","",3,"life","severity"]],template:function(e,i){e&1&&(c(0,"div",0)(1,"div",1)(2,"a",2),m(3,"img",3),u(),c(4,"div",4),h(5," EST. 2022, Logo by "),c(6,"a",5),h(7,"Muah! Studio"),u()()(),c(8,"div",6)(9,"div",7)(10,"div",8)(11,"a",9),h(12,"About"),u(),c(13,"a",9),h(14,"Releases"),u(),c(15,"a",9),h(16,"Events"),u(),c(17,"a",9),h(18,"Mixtape Archive"),u(),c(19,"a",10),h(20,"Buy"),u(),c(21,"a",9),h(22,"MORE IS MORE IS MORE"),u()(),c(23,"div",11)(24,"a",9),h(25,"About"),u(),c(26,"a",9),h(27,"Releases"),u(),c(28,"a",9),h(29,"Events"),u(),c(30,"a",9),h(31,"Mixtape Archive"),u(),c(32,"a",10),h(33,"Buy"),u()(),c(34,"div",12)(35,"a",9),h(36,"MORE IS MORE IS MORE"),u(),c(37,"span",13),I("click",function(){return i.onCopyEmail()}),h(38),u()()(),c(39,"div",14),I("click",function(){return i.onCopyEmail()}),h(40),u(),c(41,"div",15)(42,"p",16),h(43,"Newsletter:"),u(),c(44,"form",17),I("submit",function(){return i.onSubmitForm()}),m(45,"input",18),_(46,lr,2,0,"button",19)(47,cr,2,1,"button",20),m(48,"span",21),u(),c(49,"div",22)(50,"div",23),_(51,ur,2,3,"p-message",24),u()()()()()),e&2&&(l("ngClass",re(18,sr,i.isHidden)),a(2),l("routerLink",B(20,ar)),a(),l("src",i.uriAssetsImages+"/nxs-logo.png",O),a(8),l("routerLink",B(21,bi)),a(2),l("routerLink",B(22,yi)),a(2),l("routerLink",B(23,vi)),a(2),l("routerLink",B(24,_i)),a(4),l("routerLink",B(25,Ci)),a(3),l("routerLink",B(26,bi)),a(2),l("routerLink",B(27,yi)),a(2),l("routerLink",B(28,vi)),a(2),l("routerLink",B(29,_i)),a(5),l("routerLink",B(30,Ci)),a(3),ee(i.emailCopy),a(2),an(" ",i.emailCopy," "),a(4),l("formGroup",i.fgNewsletter),a(2),V(i.isLoadingForm?46:47),a(5),V(i.visibleMessageForm()?51:-1))},dependencies:[tt,Se,bn,we,ni,Kn,mt,qn,Qn,Wt,ii,Ht,jt,ci,fi],styles:['[_nghost-%COMP%]{display:block}.floating-footer[_ngcontent-%COMP%]:before{content:"";position:absolute;top:-10px;left:0;width:100%;height:0px;background:linear-gradient(to bottom,#fff0,#fff);pointer-events:none;z-index:1}.floating-footer[_ngcontent-%COMP%]{position:fixed;bottom:25px;left:0;width:100%;background:#fff;display:flex;justify-content:space-between;align-items:center;padding:25px 50px;z-index:9998;transition:transform .8s ease;transform:translateZ(0)}.bottom-links-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-start;font-size:.7rem;font-weight:300;color:#787878;font-family:Helvetica,Arial,sans-serif;text-align:left;line-height:.8;max-width:280px;gap:12px}.bottom-links[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:5px}.bottom-links-row[_ngcontent-%COMP%]{display:flex;gap:16px;justify-content:flex-start;flex-wrap:wrap;line-height:.8}.bottom-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#787878;text-decoration:none;transition:color .3s ease;font-size:.7rem;line-height:.8}.bottom-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .bottom-links[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]{color:#000}.copy-email[_ngcontent-%COMP%]{cursor:pointer;text-decoration:underline;font-size:.7rem;color:#787878;line-height:.8}.copy-email-mobile[_ngcontent-%COMP%]{display:none}.copy-email-desktop[_ngcontent-%COMP%]{display:block;margin-bottom:10px;text-align:left}.newsletter-title[_ngcontent-%COMP%]{font-size:.7rem;font-weight:300;color:#787878;font-family:Helvetica,Arial,sans-serif;line-height:.8;margin:0;white-space:nowrap}.newsletter-wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:column;line-height:.8;text-align:left}.subscribe-box[_ngcontent-%COMP%]{display:flex;gap:8px;align-items:center}.subscribe-box[_ngcontent-%COMP%]   input[type=email][_ngcontent-%COMP%]{padding:5px 8px;font-size:.7rem;border:1px solid #777;border-radius:0;outline:none;width:180px;background-color:transparent;color:#000}.subscribe-box[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background:none;border:none;color:#787878;font-size:.7rem;cursor:pointer;padding:6px 12px}.subscribe-box[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{text-decoration:underline}.row-desktop-only[_ngcontent-%COMP%]{display:flex}.row-mobile-main[_ngcontent-%COMP%], .row-mobile-secondary[_ngcontent-%COMP%]{display:none}@media (min-width: 769px){.bottom-links-container[_ngcontent-%COMP%]{line-height:.8;transform:translateY(5px)}.bottom-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:inline-block;transform:translateY(4px)}.copy-email[_ngcontent-%COMP%]{transform:translateY(6px)}.newsletter-wrapper[_ngcontent-%COMP%]{flex-direction:column}.newsletter-title[_ngcontent-%COMP%]{margin-bottom:4px}}.bottom-logo-container[_ngcontent-%COMP%]{display:flex;justify-content:center;flex-direction:column;align-items:center;line-height:1.2;text-align:center}.bottom-logo[_ngcontent-%COMP%]{max-width:220px;height:auto;opacity:1;-webkit-user-select:none;user-select:none;cursor:pointer}.logo-credit[_ngcontent-%COMP%]{margin-top:6px;font-size:.6rem;color:#ccc;font-family:Helvetica,Arial,sans-serif;text-transform:none;line-height:1.2;text-align:left}.logo-credit[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#ccc;text-decoration:none}.logo-credit[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{text-decoration:underline}@media (max-width: 768px){.bottom-logo-container[_ngcontent-%COMP%]{display:none}.floating-footer[_ngcontent-%COMP%]{bottom:25px;padding:16px 10px;flex-direction:column;align-items:center;justify-content:center;gap:12px;width:100%}.bottom-links-container[_ngcontent-%COMP%]{transform:none;margin:0 auto;max-width:100%;width:100%;align-items:center;gap:12px}.bottom-links-row[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:center;gap:10px 20px;width:100%;line-height:.8}.row-desktop-only[_ngcontent-%COMP%]{display:none}.row-mobile-main[_ngcontent-%COMP%], .row-mobile-secondary[_ngcontent-%COMP%]{display:flex}.row-mobile-secondary[_ngcontent-%COMP%]{margin-top:4px;gap:10px 20px}.copy-email-mobile[_ngcontent-%COMP%]{display:inline}.copy-email-desktop[_ngcontent-%COMP%]{display:none}.newsletter-wrapper[_ngcontent-%COMP%]{flex-direction:row;align-items:center;gap:8px;width:100%;justify-content:center;text-align:left}.newsletter-title[_ngcontent-%COMP%]{text-align:center;margin:0;white-space:nowrap}.subscribe-box[_ngcontent-%COMP%]{justify-content:center;gap:0px;flex-wrap:nowrap}.subscribe-box[_ngcontent-%COMP%]   input[type=email][_ngcontent-%COMP%]{width:120px;padding:2px 6px;font-size:.65rem}.subscribe-box[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{font-size:.65rem;padding:4px 6px}#dynamic-content-container[_ngcontent-%COMP%]{padding:5px;margin:5px}#dynamic-content-container[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{border:none}}@media (max-width: 768px){.bottom-links[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;gap:12px}}@media (max-width: 580px){.floating-footer[_ngcontent-%COMP%]{gap:.75rem;padding:10px;justify-content:center}.bottom-links-container[_ngcontent-%COMP%]{max-width:100%;margin:0 auto}.bottom-links-row[_ngcontent-%COMP%]{gap:10px 30px}.subscribe-box[_ngcontent-%COMP%]{justify-content:center}}.hidden-footer[_ngcontent-%COMP%]{transform:translateY(100%)}']})};function dr(t,n){if(t&1&&(c(0,"div",0)(1,"a",1),m(2,"img",2),u()()),t&2){let e=p();a(2),l("src",e.uriAssetsImages+"/logo-main2.png",O)}}var _t=class t{constructor(n){this.router=n}uriAssetsImages=le.uriAssetsImages;isHome(){return this.router.url.split(/[?#]/)[0]==="/"}static \u0275fac=function(e){return new(e||t)(x(xe))};static \u0275cmp=E({type:t,selectors:[["app-header"]],decls:1,vars:1,consts:[[1,"floating-header"],["routerLink","/"],["alt","Logo Neanche Per Sogno",1,"header-logo",3,"src"]],template:function(e,i){e&1&&_(0,dr,3,1,"div",0),e&2&&V(i.isHome()?-1:0)},dependencies:[tt,Se],styles:["[_nghost-%COMP%]{display:block}.floating-header[_ngcontent-%COMP%]{display:none}@media (max-width: 768px){.floating-header[_ngcontent-%COMP%]{display:flex;position:fixed;top:0;left:0;width:100%;height:25px;background:#fff;justify-content:flex-end;align-items:center;padding:0 10px;z-index:9999;overflow:hidden}.header-logo[_ngcontent-%COMP%]{height:16px;width:auto;cursor:pointer;-webkit-user-select:none;user-select:none}}"]})};var pr=["scrollContent"],Ct=class t{scrollContent;animationFrame;lastTimestamp=0;speed=60;ngAfterViewInit(){this.startScrolling()}ngOnDestroy(){this.animationFrame&&cancelAnimationFrame(this.animationFrame)}startScrolling(){let n=this.scrollContent?.nativeElement;if(!n)return;let e=n.children[0];if(!e)return;let i=e.offsetWidth;if(!i)return;let o=r=>{this.lastTimestamp||(this.lastTimestamp=r);let s=r-this.lastTimestamp;this.lastTimestamp=r;let d=this.speed*s/1e3,b=this.getCurrentTranslateX(n)-d;Math.abs(b)>=i&&(b+=i),n.style.transform=`translate3d(${b}px, 0, 0)`,this.animationFrame=requestAnimationFrame(o)};this.animationFrame=requestAnimationFrame(o)}getCurrentTranslateX(n){let e=window.getComputedStyle(n).transform;return!e||e==="none"?0:new DOMMatrix(e).m41}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=E({type:t,selectors:[["app-scroll-bar-bottom"]],viewQuery:function(e,i){if(e&1&&Pe(pr,5),e&2){let o;T(o=P())&&(i.scrollContent=o.first)}},decls:37,vars:0,consts:[["scrollContent",""],[1,"scroll-bar","bottom"],[1,"scroll-content"],[1,"scroll-wrapper"],["href","https://nxsrecords.bandcamp.com/album/almost-there-almost-broken","target","_blank","rel","noopener noreferrer"],["src","assets/images/logo-cerchio.png","alt","",1,"scroll-logo"],["href","https://on.soundcloud.com/EfIMrfSUgteGMhF5rs","target","_blank","rel","noopener noreferrer"],["aria-hidden","true",1,"scroll-wrapper"]],template:function(e,i){e&1&&(c(0,"div",1)(1,"div",2,0)(3,"div",3)(4,"span")(5,"a",4),h(6," OUT NOW | ALMOST THERE, ALMOST BROKEN \u2014 NEW EP BY CORGIAT (NXS005) "),u()(),m(7,"img",5),c(8,"span")(9,"a",6),h(10," LISTEN NOW | PARINI SECONDO'S NEW MIXTAPE "),u()(),m(11,"img",5),c(12,"span")(13,"a",4),h(14," OUT NOW | ALMOST THERE, ALMOST BROKEN \u2014 NEW EP BY CORGIAT (NXS005) "),u()(),m(15,"img",5),c(16,"span")(17,"a",6),h(18," LISTEN NOW | PARINI SECONDO'S NEW MIXTAPE "),u()(),m(19,"img",5),u(),c(20,"div",7)(21,"span")(22,"a",4),h(23," OUT NOW | ALMOST THERE, ALMOST BROKEN \u2014 NEW EP BY CORGIAT (NXS005) "),u()(),m(24,"img",5),c(25,"span")(26,"a",6),h(27," LISTEN NOW | PARINI SECONDO'S NEW MIXTAPE "),u()(),m(28,"img",5),c(29,"span")(30,"a",4),h(31," OUT NOW | ALMOST THERE, ALMOST BROKEN \u2014 NEW EP BY CORGIAT (NXS005) "),u()(),m(32,"img",5),c(33,"span")(34,"a",6),h(35," LISTEN NOW | PARINI SECONDO'S NEW MIXTAPE "),u()(),m(36,"img",5),u()()())},styles:["[_nghost-%COMP%]{display:block}.scroll-bar[_ngcontent-%COMP%]{width:100%;height:25px;background:#000;overflow:hidden;display:flex;align-items:center;position:fixed;left:0;z-index:9999}.scroll-bar.bottom[_ngcontent-%COMP%]{bottom:0}.scroll-bar[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#fff;font-size:.8rem;font-weight:700;white-space:nowrap;padding-right:1.5rem}.scroll-bar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff;text-decoration:none;align-items:center;height:25px}.scroll-content[_ngcontent-%COMP%]{display:flex;align-items:center;white-space:nowrap;will-change:transform}.scroll-wrapper[_ngcontent-%COMP%]{display:inline-flex;align-items:center;white-space:nowrap;flex-shrink:0}.scroll-logo[_ngcontent-%COMP%]{height:25px;width:auto;margin:0 1.5rem}"]})};var mr=["imageStrip"],hr=["mobileImageStrip"],gr=(t,n)=>"copy1-"+n,fr=(t,n)=>"copy2-"+n,br=(t,n)=>"copy3-"+n,yr=(t,n)=>"mobile-copy1-"+n,vr=(t,n)=>"mobile-copy2-"+n,_r=(t,n)=>"mobile-copy3-"+n;function Cr(t,n){if(t&1){let e=he();c(0,"img",31),I("load",function(o){let r=G(e).$implicit,s=p(2);return U(s.onGalleryImageLoad(o,r))}),u()}if(t&2){let e=n.$implicit,i=p(2);l("src",i.uriAssetsImages+"/"+e+".png",O)("alt","Gallery image "+e),C("data-gallery-image",e)}}function wr(t,n){if(t&1){let e=he();c(0,"img",31),I("load",function(o){let r=G(e).$implicit,s=p(2);return U(s.onGalleryImageLoad(o,r))}),u()}if(t&2){let e=n.$implicit,i=p(2);l("src",i.uriAssetsImages+"/"+e+".png",O)("alt","Gallery image "+e),C("data-gallery-image",e)}}function xr(t,n){if(t&1){let e=he();c(0,"img",31),I("load",function(o){let r=G(e).$implicit,s=p(2);return U(s.onGalleryImageLoad(o,r))}),u()}if(t&2){let e=n.$implicit,i=p(2);l("src",i.uriAssetsImages+"/"+e+".png",O)("alt","Gallery image "+e),C("data-gallery-image",e)}}function Sr(t,n){if(t&1&&m(0,"img",24),t&2){let e=n.$implicit,i=p(2);l("src",i.uriAssetsImages+"/"+e+"v.png",O)("alt","Vertical gallery image "+e),C("data-vertical-gallery-image",e)}}function Mr(t,n){if(t&1&&m(0,"img",24),t&2){let e=n.$implicit,i=p(2);l("src",i.uriAssetsImages+"/"+e+"v.png",O)("alt","Vertical gallery image "+e),C("data-vertical-gallery-image",e)}}function Er(t,n){if(t&1&&m(0,"img",24),t&2){let e=n.$implicit,i=p(2);l("src",i.uriAssetsImages+"/"+e+"v.png",O)("alt","Vertical gallery image "+e),C("data-vertical-gallery-image",e)}}function Ir(t,n){if(t&1&&m(0,"img",29),t&2){let e=p(2);l("src",e.uriAssetsImages+"/-.png",O)}}function Dr(t,n){if(t&1&&m(0,"img",30),t&2){let e=p(2);l("src",e.uriAssetsImages+"/+.png",O)}}function Fr(t,n){if(t&1){let e=he();c(0,"div",6)(1,"a",7),m(2,"img",8),u(),c(3,"div",9),h(4," EST. 2022, Logo by "),c(5,"a",10),h(6," Muah! Studio "),u()()(),c(7,"div",11)(8,"div",12)(9,"a",13),m(10,"img",14),u(),c(11,"a",15),m(12,"img",16),u()(),c(13,"button",17),I("click",function(){G(e);let o=p();return U(o.onFeaturedFlipToggle())}),ye(),c(14,"svg",18),m(15,"path",19)(16,"path",20),u()()(),Jt(),c(17,"div",21)(18,"div",22,1),I("scroll",function(){G(e);let o=p();return U(o.onImageStripScroll())})("mousedown",function(o){G(e);let r=p();return U(r.onImageStripMouseDown(o))}),c(20,"div",23),pe(21,Cr,1,3,"img",24,gr),pe(23,wr,1,3,"img",24,fr),pe(25,xr,1,3,"img",24,br),u()()(),c(27,"div",25)(28,"div",26,2),I("scroll",function(){G(e);let o=p();return U(o.onMobileImageStripScroll())}),c(30,"div",27),pe(31,Sr,1,3,"img",24,yr),pe(33,Mr,1,3,"img",24,vr),pe(35,Er,1,3,"img",24,_r),u()()(),c(37,"button",28),I("click",function(){G(e);let o=p();return U(o.toggleImageStrip())}),_(38,Ir,1,1,"img",29)(39,Dr,1,1,"img",30),u()}if(t&2){let e=p();a(2),l("src",e.uriAssetsImages+"/nxs-logo.png",O),a(5),Y("hidden-by-image-strip",e.imageStripOpen),a(),Y("flipped",e.featuredFlipped),a(2),l("src",e.uriAssetsImages+"/corgiat-front.png",O),a(2),l("src",e.uriAssetsImages+"/corgiat.png",O),a(5),Y("open",e.imageStripOpen),a(4),me(e.shuffledImages),a(2),me(e.shuffledImages),a(2),me(e.shuffledImages),a(2),Y("open",e.imageStripOpen),a(4),me(e.verticalImages),a(2),me(e.verticalImages),a(2),me(e.verticalImages),a(2),Y("open",e.imageStripOpen),C("aria-label",e.imageStripOpen?"Close gallery":"Open gallery"),a(),V(e.imageStripOpen?38:39)}}var wt=class t{constructor(n){this.router=n}uriAssetsImages=le.uriAssetsImages;featuredFlipped=!1;featuredFlipInterval;shuffledImages=[];verticalImages=[];imageStripOpen=!1;imageStrip;mobileImageStrip;imageSetWidth=0;mobileImageSetWidth=0;isDragging=!1;dragLastX=0;dragLastTime=0;dragVelocity=0;momentumFrame=0;routerEventsSub;loadedGalleryImages=new Set;galleryImageSizes=new Map;ngOnInit(){this.imageStripOpen=!1,this.shuffleImages(),this.shuffleVerticalImages(),this.startFeaturedFlipInterval(),this.routerEventsSub=this.router.events.subscribe(n=>{n instanceof gn&&(this.imageStripOpen=!1,cancelAnimationFrame(this.momentumFrame),this.onImageStripMouseUp())}),window.addEventListener("resize",this.onWindowResize)}ngOnDestroy(){clearInterval(this.featuredFlipInterval),cancelAnimationFrame(this.momentumFrame),this.onImageStripMouseUp(),this.routerEventsSub?.unsubscribe(),window.removeEventListener("resize",this.onWindowResize)}onWindowResize=()=>{this.resizeGalleryImages(),this.resizeMobileVerticalImages()};shuffleImages(){this.shuffledImages=Array.from({length:15},(n,e)=>e+1);for(let n=this.shuffledImages.length-1;n>0;n--){let e=Math.floor(Math.random()*(n+1));[this.shuffledImages[n],this.shuffledImages[e]]=[this.shuffledImages[e],this.shuffledImages[n]]}}shuffleVerticalImages(){this.verticalImages=Array.from({length:10},(n,e)=>e+1);for(let n=this.verticalImages.length-1;n>0;n--){let e=Math.floor(Math.random()*(n+1));[this.verticalImages[n],this.verticalImages[e]]=[this.verticalImages[e],this.verticalImages[n]]}}toggleImageStrip(){this.imageStripOpen=!this.imageStripOpen,this.imageStripOpen&&requestAnimationFrame(()=>{let n=this.imageStrip?.nativeElement;n&&(this.imageSetWidth=n.scrollWidth/3,this.imageSetWidth>0&&(n.scrollLeft=this.imageSetWidth));let e=this.mobileImageStrip?.nativeElement;e&&(this.resizeMobileVerticalImages(),requestAnimationFrame(()=>{this.mobileImageSetWidth=e.scrollWidth/3,this.mobileImageSetWidth>0&&(e.scrollLeft=this.mobileImageSetWidth)}))})}onGalleryImageLoad(n,e){let i=n.currentTarget;if(!i||i.naturalWidth<=0||i.naturalHeight<=0)return;if(!this.galleryImageSizes.has(e)){let r=Math.min(550,window.innerHeight*.68),s=Math.max(r,Math.min(700,window.innerHeight*.82)),d=Math.floor(Math.random()*(s-r+1))+r,g,b;i.naturalWidth>=i.naturalHeight?(g=d,b=d*(i.naturalHeight/i.naturalWidth)):(b=d,g=d*(i.naturalWidth/i.naturalHeight)),this.galleryImageSizes.set(e,{width:g,height:b})}this.applyGalleryImageSize(i,e),i.style.opacity="1",this.loadedGalleryImages.add(e);let o=this.imageStrip?.nativeElement;o&&this.loadedGalleryImages.size>=15&&requestAnimationFrame(()=>{this.imageSetWidth=o.scrollWidth/3,this.imageStripOpen&&this.imageSetWidth>0&&(o.scrollLeft=this.imageSetWidth)})}applyGalleryImageSize(n,e){let i=this.galleryImageSizes.get(e);if(!i)return;if(window.innerWidth>768){let b=window.innerHeight*.75,S=Math.min(1,b/700);n.style.width=`${i.width*S}px`,n.style.height=`${i.height*S}px`;return}let r=window.innerHeight*.95,s=Math.min(1,r/700);n.style.width=`${i.width*s}px`,n.style.height=`${i.height*s}px`}resizeGalleryImages(){let n=this.imageStrip?.nativeElement;if(!n)return;n.querySelectorAll("img[data-gallery-image]").forEach(i=>{let o=i,r=Number(o.getAttribute("data-gallery-image"));!r||!this.galleryImageSizes.has(r)||this.applyGalleryImageSize(o,r)}),requestAnimationFrame(()=>{this.imageSetWidth=n.scrollWidth/3,this.imageStripOpen&&this.imageSetWidth>0&&(n.scrollLeft=this.imageSetWidth)})}resizeMobileVerticalImages(){let n=this.mobileImageStrip?.nativeElement;if(!n)return;let e=n.querySelectorAll("img[data-vertical-gallery-image]"),i=window.innerHeight-26;e.forEach(o=>{let r=o;if(r.naturalWidth<=0||r.naturalHeight<=0)return;let s=i/r.naturalHeight;r.style.height=`${i}px`,r.style.width=`${r.naturalWidth*s}px`}),requestAnimationFrame(()=>{this.mobileImageSetWidth=n.scrollWidth/3,this.imageStripOpen&&this.mobileImageSetWidth>0&&(n.scrollLeft<this.mobileImageSetWidth*.5&&(n.scrollLeft+=this.mobileImageSetWidth),n.scrollLeft>this.mobileImageSetWidth*1.5&&(n.scrollLeft-=this.mobileImageSetWidth))})}onImageStripScroll(){let n=this.imageStrip?.nativeElement;if(!n||!this.imageSetWidth)return;let e=this.imageSetWidth;n.scrollLeft<e*.5&&(n.scrollLeft+=e),n.scrollLeft>e*1.5&&(n.scrollLeft-=e)}onMobileImageStripScroll(){let n=this.mobileImageStrip?.nativeElement;if(!n||!this.mobileImageSetWidth)return;let e=this.mobileImageSetWidth;n.scrollLeft<e*.5&&(n.scrollLeft+=e),n.scrollLeft>e*1.5&&(n.scrollLeft-=e)}onImageStripMouseDown(n){let e=this.imageStrip?.nativeElement;!e||!(n.target instanceof HTMLImageElement)||(cancelAnimationFrame(this.momentumFrame),this.isDragging=!0,this.dragLastX=n.pageX,this.dragLastTime=performance.now(),this.dragVelocity=0,e.classList.add("dragging"),window.addEventListener("mousemove",this.onImageStripMouseMove),window.addEventListener("mouseup",this.onImageStripMouseUp),n.preventDefault())}onImageStripMouseMove=n=>{if(!this.isDragging)return;let e=this.imageStrip?.nativeElement;if(!e)return;let i=performance.now(),o=n.pageX-this.dragLastX,r=Math.max(i-this.dragLastTime,1);e.scrollLeft-=o,this.onImageStripScroll(),this.dragVelocity=.8*(o/r)+.2*this.dragVelocity,this.dragLastX=n.pageX,this.dragLastTime=i};onImageStripMouseUp=()=>{window.removeEventListener("mousemove",this.onImageStripMouseMove),window.removeEventListener("mouseup",this.onImageStripMouseUp),this.imageStrip?.nativeElement.classList.remove("dragging"),this.isDragging&&(this.isDragging=!1,!(performance.now()-this.dragLastTime>100)&&this.startMomentum())};startMomentum(){let n=this.imageStrip?.nativeElement;if(!n)return;let e=this.dragVelocity,i=n.scrollLeft,o=performance.now(),r=s=>{let d=Math.min(s-o,32);o=s,i-=e*d,n.scrollLeft=i;let g=n.scrollLeft;this.onImageStripScroll(),i+=n.scrollLeft-g,e*=Math.pow(.95,d/16),Math.abs(e)>.02&&(this.momentumFrame=requestAnimationFrame(r))};this.momentumFrame=requestAnimationFrame(r)}startFeaturedFlipInterval(){clearInterval(this.featuredFlipInterval),this.featuredFlipInterval=setInterval(()=>{this.imageStripOpen||(this.featuredFlipped=!this.featuredFlipped)},7e3)}onFeaturedFlipToggle(){this.featuredFlipped=!this.featuredFlipped,this.startFeaturedFlipInterval()}isHome(){return this.router.url.split("?")[0]==="/"}prepareRoute(n){return n?.activatedRouteData?.animation}static \u0275fac=function(e){return new(e||t)(x(xe))};static \u0275cmp=E({type:t,selectors:[["app-website-layout"]],viewQuery:function(e,i){if(e&1&&(Pe(mr,5),Pe(hr,5)),e&2){let o;T(o=P())&&(i.imageStrip=o.first),T(o=P())&&(i.mobileImageStrip=o.first)}},decls:9,vars:5,consts:[["routerOutlet","outlet"],["imageStrip",""],["mobileImageStrip",""],[1,"preload"],["alt","Logo Neanche Per Sogno",3,"src"],[1,"main-content"],[1,"home-mobile-logo"],["routerLink","/"],["alt","Logo Neanche Per Sogno",1,"home-mobile-logo-img",3,"src"],[1,"home-mobile-logo-credit"],["href","https://www.muah.studio","target","_blank","rel","noopener noreferrer"],[1,"home-featured-link"],[1,"home-flip-inner"],["routerLink","/releases",1,"home-flip-front"],["alt","Featured",1,"home-featured-img",3,"src"],["routerLink","/releases",1,"home-flip-back"],["alt","Featured (back)",1,"home-featured-img",3,"src"],["aria-label","Flip image",1,"home-flip-btn",3,"click"],["viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2.5","stroke-linecap","round","stroke-linejoin","round"],["d","M5 12h14"],["d","m12 5 7 7-7 7"],[1,"home-image-strip-wrapper"],[1,"home-image-strip",3,"scroll","mousedown"],[1,"home-image-strip-track"],["draggable","false",3,"src","alt"],[1,"home-mobile-vertical-gallery"],[1,"home-mobile-vertical-strip",3,"scroll"],[1,"home-mobile-vertical-track"],[1,"home-image-strip-toggle",3,"click"],["alt","Close gallery",1,"home-image-strip-toggle-img",3,"src"],["alt","Open gallery",1,"home-image-strip-toggle-img",3,"src"],["draggable","false",3,"load","src","alt"]],template:function(e,i){if(e&1&&(c(0,"div",3),m(1,"img",4),u(),_(2,Fr,40,15),c(3,"main",5),m(4,"router-outlet",null,0),u(),m(6,"app-header")(7,"app-footer")(8,"app-scroll-bar-bottom")),e&2){let o=Xe(5);a(),l("src",i.uriAssetsImages+"/logo-main.png",O),a(),V(i.isHome()?2:-1),a(),Y("with-header",!i.isHome()),l("@routeAnimation",i.prepareRoute(o))}},dependencies:[vt,_t,Ct,te,fn,Se],styles:[".home-featured-link[_ngcontent-%COMP%]{position:fixed;bottom:14rem;right:50px;display:block;z-index:9997;max-width:280px;text-decoration:none;opacity:0;animation:_ngcontent-%COMP%_homeEnter .8s ease-out forwards;perspective:1400px;transition:opacity .4s ease,visibility .4s ease}@keyframes _ngcontent-%COMP%_homeEnter{0%{transform:translateY(10%);opacity:0}to{transform:translateY(0);opacity:1}}@keyframes _ngcontent-%COMP%_homeFeaturedExit{0%{transform:translateY(0);opacity:1}to{transform:translateY(100%);opacity:0}}.home-featured-link.hidden-by-image-strip[_ngcontent-%COMP%]{pointer-events:none;animation:_ngcontent-%COMP%_homeFeaturedExit 1s ease forwards}.home-featured-img[_ngcontent-%COMP%]{width:100%;height:auto;object-fit:cover;cursor:pointer;transition:transform .3s ease;display:block;--shadow-color: 20, 20, 20;animation:_ngcontent-%COMP%_pulse 3s ease-in-out infinite}.home-featured-img[_ngcontent-%COMP%]:hover{transform:scale(1.05)}.home-flip-inner[_ngcontent-%COMP%]{position:relative;transform-style:preserve-3d;transition:transform .8s cubic-bezier(.4,0,.2,1)}.home-flip-inner.flipped[_ngcontent-%COMP%]{transform:rotateY(180deg)}.home-flip-front[_ngcontent-%COMP%], .home-flip-back[_ngcontent-%COMP%]{display:block;backface-visibility:hidden;-webkit-backface-visibility:hidden}.home-flip-back[_ngcontent-%COMP%]{position:absolute;inset:0;transform:rotateY(180deg)}.home-flip-back[_ngcontent-%COMP%]   .home-featured-img[_ngcontent-%COMP%]{height:100%}.home-flip-back[_ngcontent-%COMP%]{pointer-events:none}.home-flip-inner.flipped[_ngcontent-%COMP%]   .home-flip-back[_ngcontent-%COMP%]{pointer-events:auto}.home-flip-inner.flipped[_ngcontent-%COMP%]   .home-flip-front[_ngcontent-%COMP%]{pointer-events:none}.home-flip-btn[_ngcontent-%COMP%]{position:absolute;top:8px;right:8px;z-index:10;width:26px;height:26px;padding:5px;background:#ffffff8c;-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px);border:none;border-radius:50%;cursor:pointer;display:flex;align-items:center;justify-content:center;opacity:0;transition:opacity .2s ease,background .2s ease}.home-featured-link[_ngcontent-%COMP%]:hover   .home-flip-btn[_ngcontent-%COMP%]{opacity:1}.home-flip-btn[_ngcontent-%COMP%]:hover{background:#ffffffd9}.home-flip-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:100%;height:100%;display:block}.home-image-strip-wrapper[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100vw;height:0;z-index:10000;pointer-events:none}.home-image-strip[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100vw;height:auto;overflow-x:auto;overflow-y:hidden;background:#fff;scrollbar-width:none;-ms-overflow-style:none;-webkit-user-select:none;user-select:none;pointer-events:none;transform:translateY(-100%);transition:transform 1s ease}.home-image-strip[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}.home-image-strip-wrapper.open[_ngcontent-%COMP%]   .home-image-strip[_ngcontent-%COMP%]{transform:translateY(0);pointer-events:auto}.home-image-strip-wrapper.open[_ngcontent-%COMP%]   .home-image-strip-track[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{pointer-events:auto;cursor:grab}.home-image-strip.dragging[_ngcontent-%COMP%]   .home-image-strip-track[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{cursor:grabbing}.home-image-strip-track[_ngcontent-%COMP%]{display:flex;align-items:flex-start;width:max-content;height:auto;gap:1px}.home-image-strip-track[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{display:block;width:auto;height:auto;flex:0 0 auto;object-fit:contain;-webkit-user-select:none;user-select:none;-webkit-user-drag:none;pointer-events:none;opacity:1;transition:opacity .1s ease,width .1s ease,height .1s ease}.home-image-strip-toggle[_ngcontent-%COMP%]{position:fixed;top:40px;right:50px;z-index:10002;width:40px;height:40px;padding:0;border:none;background:transparent;cursor:pointer;pointer-events:auto;opacity:.8;display:flex;align-items:center;justify-content:center;transition:opacity .2s ease}.home-image-strip-toggle[_ngcontent-%COMP%]:hover{opacity:1}.home-image-strip-toggle-img[_ngcontent-%COMP%]{display:block;width:36px;height:36px;object-fit:contain}.home-mobile-logo[_ngcontent-%COMP%], .home-mobile-vertical-gallery[_ngcontent-%COMP%]{display:none}@keyframes _ngcontent-%COMP%_homeLogoEnter{0%{transform:translateY(-10px);opacity:0}to{transform:translateY(0);opacity:1}}@keyframes _ngcontent-%COMP%_pulse{0%{box-shadow:0 0 8px rgba(var(--shadow-color),.3)}50%{box-shadow:0 0 15px rgba(var(--shadow-color),.5)}to{box-shadow:0 0 8px rgba(var(--shadow-color),.3)}}@media (max-width: 768px){.home-featured-link[_ngcontent-%COMP%]{display:none!important}.home-mobile-logo[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;position:fixed;bottom:8rem;left:0;right:0;z-index:9999;line-height:1.2;text-align:center;opacity:0;animation:_ngcontent-%COMP%_homeLogoEnter .8s ease-out forwards;transition:opacity .5s ease,transform 1s ease}.home-mobile-logo-img[_ngcontent-%COMP%]{max-width:320px;height:auto;-webkit-user-select:none;user-select:none;cursor:pointer;transition:max-width 1s ease}.home-mobile-logo[_ngcontent-%COMP%]:has(~.home-image-strip-wrapper.open){opacity:0!important;pointer-events:none}.home-mobile-logo-credit[_ngcontent-%COMP%]{margin-top:4px;font-size:.55rem;color:silver;font-family:Helvetica,Arial,sans-serif;text-transform:none;line-height:1.2;text-align:center}.home-mobile-logo-credit[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:silver;text-decoration:none}.home-image-strip-wrapper[_ngcontent-%COMP%]{display:none!important}.home-mobile-vertical-gallery[_ngcontent-%COMP%]{display:block;position:fixed;top:0;left:0;width:100vw;height:calc(100dvh - 26px);z-index:10001;background:#fff;pointer-events:none;opacity:0;transform:translateY(-100%);transition:transform 1s ease,opacity .3s ease;overflow:hidden}.home-mobile-vertical-gallery.open[_ngcontent-%COMP%]{pointer-events:auto;opacity:1;transform:translateY(0)}.home-mobile-vertical-strip[_ngcontent-%COMP%]{width:100vw;height:calc(100dvh - 12px);overflow-x:auto;overflow-y:hidden;-webkit-overflow-scrolling:touch;touch-action:pan-x;scrollbar-width:none;background:#fff}.home-mobile-vertical-track[_ngcontent-%COMP%]{display:flex;align-items:flex-start;width:max-content;height:calc(100dvh - 12px);gap:0}.home-mobile-vertical-track[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{display:block;flex:0 0 auto;height:calc(100dvh - 12px);width:auto;max-height:none;object-fit:contain;-webkit-user-select:none;user-select:none;-webkit-user-drag:none;pointer-events:none}[_nghost-%COMP%]:has(.home-mobile-vertical-gallery.open)   .main-content[_ngcontent-%COMP%], [_nghost-%COMP%]:has(.home-mobile-vertical-gallery.open)   app-header[_ngcontent-%COMP%], [_nghost-%COMP%]:has(.home-mobile-vertical-gallery.open)   app-footer[_ngcontent-%COMP%]{opacity:0!important;visibility:hidden!important;pointer-events:none!important}.home-image-strip-toggle[_ngcontent-%COMP%]{display:flex!important;position:fixed;top:18px;right:18px;width:42px;height:42px;padding:0;z-index:10003;opacity:.85;pointer-events:auto}.home-image-strip-toggle-img[_ngcontent-%COMP%]{width:38px;height:38px;object-fit:contain}.main-content.with-header[_ngcontent-%COMP%]{margin-top:25px}}"],data:{animation:[Ne("routeAnimation",[Ee("* <=> *",[ge({transform:"translateY(10%)",opacity:0}),Me("800ms ease-out",ge({transform:"translateY(0)",opacity:1}))])])]}})};var kl=[{path:"",component:wt,children:[{path:"",loadComponent:()=>import("./chunk-EUTBOKXH.js").then(t=>t.HomeComponent),data:{animation:"HomePage"}},{path:"about",loadComponent:()=>import("./chunk-6XURULKD.js").then(t=>t.AboutComponent),data:{animation:"AboutPage"}},{path:"releases",loadComponent:()=>import("./chunk-KSE5YJ3N.js").then(t=>t.ReleasesComponent),data:{animation:"ReleasesPage"}},{path:"events",loadComponent:()=>import("./chunk-7PFJ5AIU.js").then(t=>t.EventsComponent),data:{animation:"EventsPage"}},{path:"mixtape-archive",loadComponent:()=>import("./chunk-HS3YGX6W.js").then(t=>t.MixtapeArchiveComponent),data:{animation:"MixtapeArchivePage"}},{path:"moreismoreismore",loadComponent:()=>import("./chunk-6OJ4JVAP.js").then(t=>t.MoreismoreismoreComponent),data:{animation:"MoreIsMoreIsMorePage"}},{path:"**",redirectTo:""}]}];export{kl as WEBSITE_LAYOUT_ROUTES};
