/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const hn="srgb",gs="srgb-linear",Zr="linear",ot="srgb";const Zc="300 es";class As{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Ut=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],qo=Math.PI/180,Ea=180/Math.PI;function tr(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ut[i&255]+Ut[i>>8&255]+Ut[i>>16&255]+Ut[i>>24&255]+"-"+Ut[e&255]+Ut[e>>8&255]+"-"+Ut[e>>16&15|64]+Ut[e>>24&255]+"-"+Ut[t&63|128]+Ut[t>>8&255]+"-"+Ut[t>>16&255]+Ut[t>>24&255]+Ut[n&255]+Ut[n>>8&255]+Ut[n>>16&255]+Ut[n>>24&255]).toLowerCase()}function Ye(i,e,t){return Math.max(e,Math.min(t,i))}function id(i,e){return(i%e+e)%e}function Xo(i,e,t){return(1-t)*i+t*e}function ks(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Zt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Ue{constructor(e=0,t=0){Ue.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ye(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ye(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ve{constructor(e,t,n,s,r,o,a,c,l){Ve.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l)}set(e,t,n,s,r,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],h=n[7],d=n[2],m=n[5],_=n[8],g=s[0],p=s[3],f=s[6],b=s[1],T=s[4],x=s[7],y=s[2],E=s[5],A=s[8];return r[0]=o*g+a*b+c*y,r[3]=o*p+a*T+c*E,r[6]=o*f+a*x+c*A,r[1]=l*g+u*b+h*y,r[4]=l*p+u*T+h*E,r[7]=l*f+u*x+h*A,r[2]=d*g+m*b+_*y,r[5]=d*p+m*T+_*E,r[8]=d*f+m*x+_*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-n*r*u+n*a*c+s*r*l-s*o*c}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=u*o-a*l,d=a*c-u*r,m=l*r-o*c,_=t*h+n*d+s*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=h*g,e[1]=(s*l-u*n)*g,e[2]=(a*n-s*o)*g,e[3]=d*g,e[4]=(u*t-s*c)*g,e[5]=(s*r-a*t)*g,e[6]=m*g,e[7]=(n*c-l*t)*g,e[8]=(o*t-n*r)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Yo.makeScale(e,t)),this}rotate(e){return this.premultiply(Yo.makeRotation(-e)),this}translate(e,t){return this.premultiply(Yo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Yo=new Ve;function yu(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function $r(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function sd(){const i=$r("canvas");return i.style.display="block",i}const $c={};function os(i){i in $c||($c[i]=!0,console.warn(i))}function rd(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function od(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function ad(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Kc=new Ve().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Qc=new Ve().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function cd(){const i={enabled:!0,workingColorSpace:gs,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ot&&(s.r=$n(s.r),s.g=$n(s.g),s.b=$n(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ot&&(s.r=fs(s.r),s.g=fs(s.g),s.b=fs(s.b))),s},fromWorkingColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},toWorkingColorSpace:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===""?Zr:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[gs]:{primaries:e,whitePoint:n,transfer:Zr,toXYZ:Kc,fromXYZ:Qc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:hn},outputColorSpaceConfig:{drawingBufferColorSpace:hn}},[hn]:{primaries:e,whitePoint:n,transfer:ot,toXYZ:Kc,fromXYZ:Qc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:hn}}}),i}const Qe=cd();function $n(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function fs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Xi;class ld{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Xi===void 0&&(Xi=$r("canvas")),Xi.width=e.width,Xi.height=e.height;const n=Xi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Xi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=$r("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=$n(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor($n(t[n]/255)*255):t[n]=$n(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ud=0,Su=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ud++}),this.uuid=tr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(jo(s[o].image)):r.push(jo(s[o]))}else r=jo(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function jo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ld.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let hd=0;class Qt extends As{constructor(e=Qt.DEFAULT_IMAGE,t=Qt.DEFAULT_MAPPING,n=1001,s=1001,r=1006,o=1008,a=1023,c=1009,l=Qt.DEFAULT_ANISOTROPY,u=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hd++}),this.uuid=tr(),this.name="",this.source=new Su(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Ue(0,0),this.repeat=new Ue(1,1),this.center=new Ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case 1e3:e.x=e.x-Math.floor(e.x);break;case 1001:e.x=e.x<0?0:1;break;case 1002:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case 1e3:e.y=e.y-Math.floor(e.y);break;case 1001:e.y=e.y<0?0:1;break;case 1002:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Qt.DEFAULT_IMAGE=null;Qt.DEFAULT_MAPPING=300;Qt.DEFAULT_ANISOTROPY=1;class ct{constructor(e=0,t=0,n=0,s=1){ct.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const c=e.elements,l=c[0],u=c[4],h=c[8],d=c[1],m=c[5],_=c[9],g=c[2],p=c[6],f=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-g)<.01&&Math.abs(_-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+g)<.1&&Math.abs(_+p)<.1&&Math.abs(l+m+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(l+1)/2,x=(m+1)/2,y=(f+1)/2,E=(u+d)/4,A=(h+g)/4,C=(_+p)/4;return T>x&&T>y?T<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(T),s=E/n,r=A/n):x>y?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=E/s,r=C/s):y<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(y),n=A/r,s=C/r),this.set(n,s,r,t),this}let b=Math.sqrt((p-_)*(p-_)+(h-g)*(h-g)+(d-u)*(d-u));return Math.abs(b)<.001&&(b=1),this.x=(p-_)/b,this.y=(h-g)/b,this.z=(d-u)/b,this.w=Math.acos((l+m+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this.z=Ye(this.z,e.z,t.z),this.w=Ye(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this.z=Ye(this.z,e,t),this.w=Ye(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ye(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class dd extends As{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ct(0,0,e,t),this.scissorTest=!1,this.viewport=new ct(0,0,e,t);const s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Qt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const t=Object.assign({},e.texture.image);return this.texture.source=new Su(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class bn extends dd{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Mu extends Qt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class fd extends Qt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Cs{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let c=n[s+0],l=n[s+1],u=n[s+2],h=n[s+3];const d=r[o+0],m=r[o+1],_=r[o+2],g=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=m,e[t+2]=_,e[t+3]=g;return}if(h!==g||c!==d||l!==m||u!==_){let p=1-a;const f=c*d+l*m+u*_+h*g,b=f>=0?1:-1,T=1-f*f;if(T>Number.EPSILON){const y=Math.sqrt(T),E=Math.atan2(y,f*b);p=Math.sin(p*E)/y,a=Math.sin(a*E)/y}const x=a*b;if(c=c*p+d*x,l=l*p+m*x,u=u*p+_*x,h=h*p+g*x,p===1-a){const y=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=y,l*=y,u*=y,h*=y}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],u=n[s+3],h=r[o],d=r[o+1],m=r[o+2],_=r[o+3];return e[t]=a*_+u*h+c*m-l*d,e[t+1]=c*_+u*d+l*h-a*m,e[t+2]=l*_+u*m+a*d-c*h,e[t+3]=u*_-a*h-c*d-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(s/2),h=a(r/2),d=c(n/2),m=c(s/2),_=c(r/2);switch(o){case"XYZ":this._x=d*u*h+l*m*_,this._y=l*m*h-d*u*_,this._z=l*u*_+d*m*h,this._w=l*u*h-d*m*_;break;case"YXZ":this._x=d*u*h+l*m*_,this._y=l*m*h-d*u*_,this._z=l*u*_-d*m*h,this._w=l*u*h+d*m*_;break;case"ZXY":this._x=d*u*h-l*m*_,this._y=l*m*h+d*u*_,this._z=l*u*_+d*m*h,this._w=l*u*h-d*m*_;break;case"ZYX":this._x=d*u*h-l*m*_,this._y=l*m*h+d*u*_,this._z=l*u*_-d*m*h,this._w=l*u*h+d*m*_;break;case"YZX":this._x=d*u*h+l*m*_,this._y=l*m*h+d*u*_,this._z=l*u*_-d*m*h,this._w=l*u*h-d*m*_;break;case"XZY":this._x=d*u*h-l*m*_,this._y=l*m*h-d*u*_,this._z=l*u*_+d*m*h,this._w=l*u*h+d*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(u-c)*m,this._y=(r-l)*m,this._z=(o-s)*m}else if(n>a&&n>h){const m=2*Math.sqrt(1+n-a-h);this._w=(u-c)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+l)/m}else if(a>h){const m=2*Math.sqrt(1+a-n-h);this._w=(r-l)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(c+u)/m}else{const m=2*Math.sqrt(1+h-n-a);this._w=(o-s)/m,this._x=(r+l)/m,this._y=(c+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ye(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-n*l,this._z=r*u+o*l+n*c-s*a,this._w=o*u-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*s+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-t)*u)/l,d=Math.sin(t*u)/l;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,t=0,n=0){U.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Jc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Jc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*n),u=2*(a*t-r*s),h=2*(r*n-o*t);return this.x=t+c*l+o*h-a*u,this.y=n+c*u+a*l-r*h,this.z=s+c*h+r*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this.z=Ye(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this.z=Ye(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ye(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Zo.copy(this).projectOnVector(e),this.sub(Zo)}reflect(e){return this.sub(Zo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ye(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Zo=new U,Jc=new Cs;class nr{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(vn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(vn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=vn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,vn):vn.fromBufferAttribute(r,o),vn.applyMatrix4(e.matrixWorld),this.expandByPoint(vn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),vr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),vr.copy(n.boundingBox)),vr.applyMatrix4(e.matrixWorld),this.union(vr)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,vn),vn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Vs),xr.subVectors(this.max,Vs),Yi.subVectors(e.a,Vs),ji.subVectors(e.b,Vs),Zi.subVectors(e.c,Vs),ri.subVectors(ji,Yi),oi.subVectors(Zi,ji),Mi.subVectors(Yi,Zi);let t=[0,-ri.z,ri.y,0,-oi.z,oi.y,0,-Mi.z,Mi.y,ri.z,0,-ri.x,oi.z,0,-oi.x,Mi.z,0,-Mi.x,-ri.y,ri.x,0,-oi.y,oi.x,0,-Mi.y,Mi.x,0];return!$o(t,Yi,ji,Zi,xr)||(t=[1,0,0,0,1,0,0,0,1],!$o(t,Yi,ji,Zi,xr))?!1:(yr.crossVectors(ri,oi),t=[yr.x,yr.y,yr.z],$o(t,Yi,ji,Zi,xr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,vn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(vn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Gn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Gn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Gn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Gn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Gn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Gn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Gn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Gn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Gn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Gn=[new U,new U,new U,new U,new U,new U,new U,new U],vn=new U,vr=new nr,Yi=new U,ji=new U,Zi=new U,ri=new U,oi=new U,Mi=new U,Vs=new U,xr=new U,yr=new U,Ti=new U;function $o(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Ti.fromArray(i,r);const a=s.x*Math.abs(Ti.x)+s.y*Math.abs(Ti.y)+s.z*Math.abs(Ti.z),c=e.dot(Ti),l=t.dot(Ti),u=n.dot(Ti);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const pd=new nr,zs=new U,Ko=new U;class za{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):pd.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;zs.subVectors(e,this.center);const t=zs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(zs,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ko.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(zs.copy(e.center).add(Ko)),this.expandByPoint(zs.copy(e.center).sub(Ko))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Hn=new U,Qo=new U,Sr=new U,ai=new U,Jo=new U,Mr=new U,ea=new U;class md{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Hn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Hn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Hn.copy(this.origin).addScaledVector(this.direction,t),Hn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Qo.copy(e).add(t).multiplyScalar(.5),Sr.copy(t).sub(e).normalize(),ai.copy(this.origin).sub(Qo);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Sr),a=ai.dot(this.direction),c=-ai.dot(Sr),l=ai.lengthSq(),u=Math.abs(1-o*o);let h,d,m,_;if(u>0)if(h=o*c-a,d=o*a-c,_=r*u,h>=0)if(d>=-_)if(d<=_){const g=1/u;h*=g,d*=g,m=h*(h+o*d+2*a)+d*(o*h+d+2*c)+l}else d=r,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*c)+l;else d=-r,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*c)+l;else d<=-_?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-c),r),m=-h*h+d*(d+2*c)+l):d<=_?(h=0,d=Math.min(Math.max(-r,-c),r),m=d*(d+2*c)+l):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-c),r),m=-h*h+d*(d+2*c)+l);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Qo).addScaledVector(Sr,d),m}intersectSphere(e,t){Hn.subVectors(e.center,this.origin);const n=Hn.dot(this.direction),s=Hn.dot(Hn)-n*n,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Hn)!==null}intersectTriangle(e,t,n,s,r){Jo.subVectors(t,e),Mr.subVectors(n,e),ea.crossVectors(Jo,Mr);let o=this.direction.dot(ea),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ai.subVectors(this.origin,e);const c=a*this.direction.dot(Mr.crossVectors(ai,Mr));if(c<0)return null;const l=a*this.direction.dot(Jo.cross(ai));if(l<0||c+l>o)return null;const u=-a*ai.dot(ea);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class vt{constructor(e,t,n,s,r,o,a,c,l,u,h,d,m,_,g,p){vt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l,u,h,d,m,_,g,p)}set(e,t,n,s,r,o,a,c,l,u,h,d,m,_,g,p){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=c,f[2]=l,f[6]=u,f[10]=h,f[14]=d,f[3]=m,f[7]=_,f[11]=g,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new vt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/$i.setFromMatrixColumn(e,0).length(),r=1/$i.setFromMatrixColumn(e,1).length(),o=1/$i.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const d=o*u,m=o*h,_=a*u,g=a*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=m+_*l,t[5]=d-g*l,t[9]=-a*c,t[2]=g-d*l,t[6]=_+m*l,t[10]=o*c}else if(e.order==="YXZ"){const d=c*u,m=c*h,_=l*u,g=l*h;t[0]=d+g*a,t[4]=_*a-m,t[8]=o*l,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=m*a-_,t[6]=g+d*a,t[10]=o*c}else if(e.order==="ZXY"){const d=c*u,m=c*h,_=l*u,g=l*h;t[0]=d-g*a,t[4]=-o*h,t[8]=_+m*a,t[1]=m+_*a,t[5]=o*u,t[9]=g-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const d=o*u,m=o*h,_=a*u,g=a*h;t[0]=c*u,t[4]=_*l-m,t[8]=d*l+g,t[1]=c*h,t[5]=g*l+d,t[9]=m*l-_,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const d=o*c,m=o*l,_=a*c,g=a*l;t[0]=c*u,t[4]=g-d*h,t[8]=_*h+m,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=m*h+_,t[10]=d-g*h}else if(e.order==="XZY"){const d=o*c,m=o*l,_=a*c,g=a*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=d*h+g,t[5]=o*u,t[9]=m*h-_,t[2]=_*h-m,t[6]=a*u,t[10]=g*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(_d,e,gd)}lookAt(e,t,n){const s=this.elements;return nn.subVectors(e,t),nn.lengthSq()===0&&(nn.z=1),nn.normalize(),ci.crossVectors(n,nn),ci.lengthSq()===0&&(Math.abs(n.z)===1?nn.x+=1e-4:nn.z+=1e-4,nn.normalize(),ci.crossVectors(n,nn)),ci.normalize(),Tr.crossVectors(nn,ci),s[0]=ci.x,s[4]=Tr.x,s[8]=nn.x,s[1]=ci.y,s[5]=Tr.y,s[9]=nn.y,s[2]=ci.z,s[6]=Tr.z,s[10]=nn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],h=n[5],d=n[9],m=n[13],_=n[2],g=n[6],p=n[10],f=n[14],b=n[3],T=n[7],x=n[11],y=n[15],E=s[0],A=s[4],C=s[8],S=s[12],v=s[1],R=s[5],P=s[9],N=s[13],B=s[2],H=s[6],k=s[10],G=s[14],V=s[3],j=s[7],Q=s[11],ne=s[15];return r[0]=o*E+a*v+c*B+l*V,r[4]=o*A+a*R+c*H+l*j,r[8]=o*C+a*P+c*k+l*Q,r[12]=o*S+a*N+c*G+l*ne,r[1]=u*E+h*v+d*B+m*V,r[5]=u*A+h*R+d*H+m*j,r[9]=u*C+h*P+d*k+m*Q,r[13]=u*S+h*N+d*G+m*ne,r[2]=_*E+g*v+p*B+f*V,r[6]=_*A+g*R+p*H+f*j,r[10]=_*C+g*P+p*k+f*Q,r[14]=_*S+g*N+p*G+f*ne,r[3]=b*E+T*v+x*B+y*V,r[7]=b*A+T*R+x*H+y*j,r[11]=b*C+T*P+x*k+y*Q,r[15]=b*S+T*N+x*G+y*ne,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],h=e[6],d=e[10],m=e[14],_=e[3],g=e[7],p=e[11],f=e[15];return _*(+r*c*h-s*l*h-r*a*d+n*l*d+s*a*m-n*c*m)+g*(+t*c*m-t*l*d+r*o*d-s*o*m+s*l*u-r*c*u)+p*(+t*l*h-t*a*m-r*o*h+n*o*m+r*a*u-n*l*u)+f*(-s*a*u-t*c*h+t*a*d+s*o*h-n*o*d+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=e[9],d=e[10],m=e[11],_=e[12],g=e[13],p=e[14],f=e[15],b=h*p*l-g*d*l+g*c*m-a*p*m-h*c*f+a*d*f,T=_*d*l-u*p*l-_*c*m+o*p*m+u*c*f-o*d*f,x=u*g*l-_*h*l+_*a*m-o*g*m-u*a*f+o*h*f,y=_*h*c-u*g*c-_*a*d+o*g*d+u*a*p-o*h*p,E=t*b+n*T+s*x+r*y;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/E;return e[0]=b*A,e[1]=(g*d*r-h*p*r-g*s*m+n*p*m+h*s*f-n*d*f)*A,e[2]=(a*p*r-g*c*r+g*s*l-n*p*l-a*s*f+n*c*f)*A,e[3]=(h*c*r-a*d*r-h*s*l+n*d*l+a*s*m-n*c*m)*A,e[4]=T*A,e[5]=(u*p*r-_*d*r+_*s*m-t*p*m-u*s*f+t*d*f)*A,e[6]=(_*c*r-o*p*r-_*s*l+t*p*l+o*s*f-t*c*f)*A,e[7]=(o*d*r-u*c*r+u*s*l-t*d*l-o*s*m+t*c*m)*A,e[8]=x*A,e[9]=(_*h*r-u*g*r-_*n*m+t*g*m+u*n*f-t*h*f)*A,e[10]=(o*g*r-_*a*r+_*n*l-t*g*l-o*n*f+t*a*f)*A,e[11]=(u*a*r-o*h*r-u*n*l+t*h*l+o*n*m-t*a*m)*A,e[12]=y*A,e[13]=(u*g*s-_*h*s+_*n*d-t*g*d-u*n*p+t*h*p)*A,e[14]=(_*a*s-o*g*s-_*n*c+t*g*c+o*n*p-t*a*p)*A,e[15]=(o*h*s-u*a*s+u*n*c-t*h*c-o*n*d+t*a*d)*A,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,u=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+n,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,u=o+o,h=a+a,d=r*l,m=r*u,_=r*h,g=o*u,p=o*h,f=a*h,b=c*l,T=c*u,x=c*h,y=n.x,E=n.y,A=n.z;return s[0]=(1-(g+f))*y,s[1]=(m+x)*y,s[2]=(_-T)*y,s[3]=0,s[4]=(m-x)*E,s[5]=(1-(d+f))*E,s[6]=(p+b)*E,s[7]=0,s[8]=(_+T)*A,s[9]=(p-b)*A,s[10]=(1-(d+g))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=$i.set(s[0],s[1],s[2]).length();const o=$i.set(s[4],s[5],s[6]).length(),a=$i.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],xn.copy(this);const l=1/r,u=1/o,h=1/a;return xn.elements[0]*=l,xn.elements[1]*=l,xn.elements[2]*=l,xn.elements[4]*=u,xn.elements[5]*=u,xn.elements[6]*=u,xn.elements[8]*=h,xn.elements[9]*=h,xn.elements[10]*=h,t.setFromRotationMatrix(xn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=2e3){const c=this.elements,l=2*r/(t-e),u=2*r/(n-s),h=(t+e)/(t-e),d=(n+s)/(n-s);let m,_;if(a===2e3)m=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===2001)m=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=2e3){const c=this.elements,l=1/(t-e),u=1/(n-s),h=1/(o-r),d=(t+e)*l,m=(n+s)*u;let _,g;if(a===2e3)_=(o+r)*h,g=-2*h;else if(a===2001)_=r*h,g=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=g,c[14]=-_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const $i=new U,xn=new vt,_d=new U(0,0,0),gd=new U(1,1,1),ci=new U,Tr=new U,nn=new U,el=new vt,tl=new Cs;class Jn{constructor(e=0,t=0,n=0,s=Jn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],h=s[2],d=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(Ye(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ye(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ye(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ye(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Ye(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Ye(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return el.makeRotationFromQuaternion(e),this.setFromRotationMatrix(el,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return tl.setFromEuler(this),this.setFromQuaternion(tl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Jn.DEFAULT_ORDER="XYZ";class Tu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let vd=0;const nl=new U,Ki=new Cs,Wn=new vt,Er=new U,Gs=new U,xd=new U,yd=new Cs,il=new U(1,0,0),sl=new U(0,1,0),rl=new U(0,0,1),ol={type:"added"},Sd={type:"removed"},Qi={type:"childadded",child:null},ta={type:"childremoved",child:null};class Ft extends As{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vd++}),this.uuid=tr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ft.DEFAULT_UP.clone();const e=new U,t=new Jn,n=new Cs,s=new U(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new vt},normalMatrix:{value:new Ve}}),this.matrix=new vt,this.matrixWorld=new vt,this.matrixAutoUpdate=Ft.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Tu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ki.setFromAxisAngle(e,t),this.quaternion.multiply(Ki),this}rotateOnWorldAxis(e,t){return Ki.setFromAxisAngle(e,t),this.quaternion.premultiply(Ki),this}rotateX(e){return this.rotateOnAxis(il,e)}rotateY(e){return this.rotateOnAxis(sl,e)}rotateZ(e){return this.rotateOnAxis(rl,e)}translateOnAxis(e,t){return nl.copy(e).applyQuaternion(this.quaternion),this.position.add(nl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(il,e)}translateY(e){return this.translateOnAxis(sl,e)}translateZ(e){return this.translateOnAxis(rl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Wn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Er.copy(e):Er.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Gs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Wn.lookAt(Gs,Er,this.up):Wn.lookAt(Er,Gs,this.up),this.quaternion.setFromRotationMatrix(Wn),s&&(Wn.extractRotation(s.matrixWorld),Ki.setFromRotationMatrix(Wn),this.quaternion.premultiply(Ki.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ol),Qi.child=e,this.dispatchEvent(Qi),Qi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Sd),ta.child=e,this.dispatchEvent(ta),ta.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Wn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Wn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Wn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ol),Qi.child=e,this.dispatchEvent(Qi),Qi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gs,e,xd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gs,yd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];r(e.shapes,h)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),m=o(e.animations),_=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),_.length>0&&(n.nodes=_)}return n.object=s,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}Ft.DEFAULT_UP=new U(0,1,0);Ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const yn=new U,qn=new U,na=new U,Xn=new U,Ji=new U,es=new U,al=new U,ia=new U,sa=new U,ra=new U,oa=new ct,aa=new ct,ca=new ct;class Mn{constructor(e=new U,t=new U,n=new U){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),yn.subVectors(e,t),s.cross(yn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){yn.subVectors(s,t),qn.subVectors(n,t),na.subVectors(e,t);const o=yn.dot(yn),a=yn.dot(qn),c=yn.dot(na),l=qn.dot(qn),u=qn.dot(na),h=o*l-a*a;if(h===0)return r.set(0,0,0),null;const d=1/h,m=(l*c-a*u)*d,_=(o*u-a*c)*d;return r.set(1-m-_,_,m)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Xn)===null?!1:Xn.x>=0&&Xn.y>=0&&Xn.x+Xn.y<=1}static getInterpolation(e,t,n,s,r,o,a,c){return this.getBarycoord(e,t,n,s,Xn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Xn.x),c.addScaledVector(o,Xn.y),c.addScaledVector(a,Xn.z),c)}static getInterpolatedAttribute(e,t,n,s,r,o){return oa.setScalar(0),aa.setScalar(0),ca.setScalar(0),oa.fromBufferAttribute(e,t),aa.fromBufferAttribute(e,n),ca.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(oa,r.x),o.addScaledVector(aa,r.y),o.addScaledVector(ca,r.z),o}static isFrontFacing(e,t,n,s){return yn.subVectors(n,t),qn.subVectors(e,t),yn.cross(qn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return yn.subVectors(this.c,this.b),qn.subVectors(this.a,this.b),yn.cross(qn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Mn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Mn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return Mn.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return Mn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Mn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let o,a;Ji.subVectors(s,n),es.subVectors(r,n),ia.subVectors(e,n);const c=Ji.dot(ia),l=es.dot(ia);if(c<=0&&l<=0)return t.copy(n);sa.subVectors(e,s);const u=Ji.dot(sa),h=es.dot(sa);if(u>=0&&h<=u)return t.copy(s);const d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(n).addScaledVector(Ji,o);ra.subVectors(e,r);const m=Ji.dot(ra),_=es.dot(ra);if(_>=0&&m<=_)return t.copy(r);const g=m*l-c*_;if(g<=0&&l>=0&&_<=0)return a=l/(l-_),t.copy(n).addScaledVector(es,a);const p=u*_-m*h;if(p<=0&&h-u>=0&&m-_>=0)return al.subVectors(r,s),a=(h-u)/(h-u+(m-_)),t.copy(s).addScaledVector(al,a);const f=1/(p+g+d);return o=g*f,a=d*f,t.copy(n).addScaledVector(Ji,o).addScaledVector(es,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Eu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},li={h:0,s:0,l:0},br={h:0,s:0,l:0};function la(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class We{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=hn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=Qe.workingColorSpace){return this.r=e,this.g=t,this.b=n,Qe.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=Qe.workingColorSpace){if(e=id(e,1),t=Ye(t,0,1),n=Ye(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=la(o,r,e+1/3),this.g=la(o,r,e),this.b=la(o,r,e-1/3)}return Qe.toWorkingColorSpace(this,s),this}setStyle(e,t=hn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=hn){const n=Eu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=$n(e.r),this.g=$n(e.g),this.b=$n(e.b),this}copyLinearToSRGB(e){return this.r=fs(e.r),this.g=fs(e.g),this.b=fs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=hn){return Qe.fromWorkingColorSpace(Bt.copy(this),e),Math.round(Ye(Bt.r*255,0,255))*65536+Math.round(Ye(Bt.g*255,0,255))*256+Math.round(Ye(Bt.b*255,0,255))}getHexString(e=hn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Qe.workingColorSpace){Qe.fromWorkingColorSpace(Bt.copy(this),t);const n=Bt.r,s=Bt.g,r=Bt.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case n:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-n)/h+2;break;case r:c=(n-s)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=Qe.workingColorSpace){return Qe.fromWorkingColorSpace(Bt.copy(this),t),e.r=Bt.r,e.g=Bt.g,e.b=Bt.b,e}getStyle(e=hn){Qe.fromWorkingColorSpace(Bt.copy(this),e);const t=Bt.r,n=Bt.g,s=Bt.b;return e!==hn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(li),this.setHSL(li.h+e,li.s+t,li.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(li),e.getHSL(br);const n=Xo(li.h,br.h,t),s=Xo(li.s,br.s,t),r=Xo(li.l,br.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Bt=new We;We.NAMES=Eu;let Md=0;class mo extends As{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Md++}),this.uuid=tr(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new We(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==204&&(n.blendSrc=this.blendSrc),this.blendDst!==205&&(n.blendDst=this.blendDst),this.blendEquation!==100&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==7680&&(n.stencilFail=this.stencilFail),this.stencilZFail!==7680&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==7680&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class _o extends mo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const bt=new U,wr=new Ue;class In{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)wr.fromBufferAttribute(this,t),wr.applyMatrix3(e),this.setXY(t,wr.x,wr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix3(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix4(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyNormalMatrix(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.transformDirection(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ks(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Zt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ks(t,this.array)),t}setX(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ks(t,this.array)),t}setY(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ks(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ks(t,this.array)),t}setW(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Zt(t,this.array),n=Zt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Zt(t,this.array),n=Zt(n,this.array),s=Zt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Zt(t,this.array),n=Zt(n,this.array),s=Zt(s,this.array),r=Zt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==35044&&(e.usage=this.usage),e}}class bu extends In{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class wu extends In{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class qt extends In{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Td=0;const un=new vt,ua=new Ft,ts=new U,sn=new nr,Hs=new nr,Dt=new U;class Un extends As{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Td++}),this.uuid=tr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(yu(e)?wu:bu)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ve().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return un.makeRotationFromQuaternion(e),this.applyMatrix4(un),this}rotateX(e){return un.makeRotationX(e),this.applyMatrix4(un),this}rotateY(e){return un.makeRotationY(e),this.applyMatrix4(un),this}rotateZ(e){return un.makeRotationZ(e),this.applyMatrix4(un),this}translate(e,t,n){return un.makeTranslation(e,t,n),this.applyMatrix4(un),this}scale(e,t,n){return un.makeScale(e,t,n),this.applyMatrix4(un),this}lookAt(e){return ua.lookAt(e),ua.updateMatrix(),this.applyMatrix4(ua.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ts).negate(),this.translate(ts.x,ts.y,ts.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new qt(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new nr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];sn.setFromBufferAttribute(r),this.morphTargetsRelative?(Dt.addVectors(this.boundingBox.min,sn.min),this.boundingBox.expandByPoint(Dt),Dt.addVectors(this.boundingBox.max,sn.max),this.boundingBox.expandByPoint(Dt)):(this.boundingBox.expandByPoint(sn.min),this.boundingBox.expandByPoint(sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new za);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){const n=this.boundingSphere.center;if(sn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Hs.setFromBufferAttribute(a),this.morphTargetsRelative?(Dt.addVectors(sn.min,Hs.min),sn.expandByPoint(Dt),Dt.addVectors(sn.max,Hs.max),sn.expandByPoint(Dt)):(sn.expandByPoint(Hs.min),sn.expandByPoint(Hs.max))}sn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Dt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Dt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Dt.fromBufferAttribute(a,l),c&&(ts.fromBufferAttribute(e,l),Dt.add(ts)),s=Math.max(s,n.distanceToSquared(Dt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new In(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let C=0;C<n.count;C++)a[C]=new U,c[C]=new U;const l=new U,u=new U,h=new U,d=new Ue,m=new Ue,_=new Ue,g=new U,p=new U;function f(C,S,v){l.fromBufferAttribute(n,C),u.fromBufferAttribute(n,S),h.fromBufferAttribute(n,v),d.fromBufferAttribute(r,C),m.fromBufferAttribute(r,S),_.fromBufferAttribute(r,v),u.sub(l),h.sub(l),m.sub(d),_.sub(d);const R=1/(m.x*_.y-_.x*m.y);isFinite(R)&&(g.copy(u).multiplyScalar(_.y).addScaledVector(h,-m.y).multiplyScalar(R),p.copy(h).multiplyScalar(m.x).addScaledVector(u,-_.x).multiplyScalar(R),a[C].add(g),a[S].add(g),a[v].add(g),c[C].add(p),c[S].add(p),c[v].add(p))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let C=0,S=b.length;C<S;++C){const v=b[C],R=v.start,P=v.count;for(let N=R,B=R+P;N<B;N+=3)f(e.getX(N+0),e.getX(N+1),e.getX(N+2))}const T=new U,x=new U,y=new U,E=new U;function A(C){y.fromBufferAttribute(s,C),E.copy(y);const S=a[C];T.copy(S),T.sub(y.multiplyScalar(y.dot(S))).normalize(),x.crossVectors(E,S);const R=x.dot(c[C])<0?-1:1;o.setXYZW(C,T.x,T.y,T.z,R)}for(let C=0,S=b.length;C<S;++C){const v=b[C],R=v.start,P=v.count;for(let N=R,B=R+P;N<B;N+=3)A(e.getX(N+0)),A(e.getX(N+1)),A(e.getX(N+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new In(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);const s=new U,r=new U,o=new U,a=new U,c=new U,l=new U,u=new U,h=new U;if(e)for(let d=0,m=e.count;d<m;d+=3){const _=e.getX(d+0),g=e.getX(d+1),p=e.getX(d+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,g),o.fromBufferAttribute(t,p),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),l.fromBufferAttribute(n,p),a.add(u),c.add(u),l.add(u),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(g,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let d=0,m=t.count;d<m;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Dt.fromBufferAttribute(e,t),Dt.normalize(),e.setXYZ(t,Dt.x,Dt.y,Dt.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,h=a.normalized,d=new l.constructor(c.length*u);let m=0,_=0;for(let g=0,p=c.length;g<p;g++){a.isInterleavedBufferAttribute?m=c[g]*a.data.stride+a.offset:m=c[g]*u;for(let f=0;f<u;f++)d[_++]=l[m++]}return new In(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Un,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=e(c,n);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let u=0,h=l.length;u<h;u++){const d=l[u],m=e(d,n);c.push(m)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){const m=l[h];u.push(m.toJSON(e.data))}u.length>0&&(s[c]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(t))}const r=e.morphAttributes;for(const l in r){const u=[],h=r[l];for(let d=0,m=h.length;d<m;d++)u.push(h[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const cl=new vt,Ei=new md,Ar=new za,ll=new U,Cr=new U,Rr=new U,Dr=new U,ha=new U,Pr=new U,ul=new U,Ir=new U;class Tn extends Ft{constructor(e=new Un,t=new _o){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){Pr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=a[c],h=r[c];u!==0&&(ha.fromBufferAttribute(h,e),o?Pr.addScaledVector(ha,u):Pr.addScaledVector(ha.sub(t),u))}t.add(Pr)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ar.copy(n.boundingSphere),Ar.applyMatrix4(r),Ei.copy(e.ray).recast(e.near),!(Ar.containsPoint(Ei.origin)===!1&&(Ei.intersectSphere(Ar,ll)===null||Ei.origin.distanceToSquared(ll)>(e.far-e.near)**2))&&(cl.copy(r).invert(),Ei.copy(e.ray).applyMatrix4(cl),!(n.boundingBox!==null&&Ei.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ei)))}_computeIntersections(e,t,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=d.length;_<g;_++){const p=d[_],f=o[p.materialIndex],b=Math.max(p.start,m.start),T=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let x=b,y=T;x<y;x+=3){const E=a.getX(x),A=a.getX(x+1),C=a.getX(x+2);s=Nr(this,f,e,n,l,u,h,E,A,C),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const _=Math.max(0,m.start),g=Math.min(a.count,m.start+m.count);for(let p=_,f=g;p<f;p+=3){const b=a.getX(p),T=a.getX(p+1),x=a.getX(p+2);s=Nr(this,o,e,n,l,u,h,b,T,x),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let _=0,g=d.length;_<g;_++){const p=d[_],f=o[p.materialIndex],b=Math.max(p.start,m.start),T=Math.min(c.count,Math.min(p.start+p.count,m.start+m.count));for(let x=b,y=T;x<y;x+=3){const E=x,A=x+1,C=x+2;s=Nr(this,f,e,n,l,u,h,E,A,C),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const _=Math.max(0,m.start),g=Math.min(c.count,m.start+m.count);for(let p=_,f=g;p<f;p+=3){const b=p,T=p+1,x=p+2;s=Nr(this,o,e,n,l,u,h,b,T,x),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}}function Ed(i,e,t,n,s,r,o,a){let c;if(e.side===1?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,e.side===0,a),c===null)return null;Ir.copy(a),Ir.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Ir);return l<t.near||l>t.far?null:{distance:l,point:Ir.clone(),object:i}}function Nr(i,e,t,n,s,r,o,a,c,l){i.getVertexPosition(a,Cr),i.getVertexPosition(c,Rr),i.getVertexPosition(l,Dr);const u=Ed(i,e,t,n,Cr,Rr,Dr,ul);if(u){const h=new U;Mn.getBarycoord(ul,Cr,Rr,Dr,h),s&&(u.uv=Mn.getInterpolatedAttribute(s,a,c,l,h,new Ue)),r&&(u.uv1=Mn.getInterpolatedAttribute(r,a,c,l,h,new Ue)),o&&(u.normal=Mn.getInterpolatedAttribute(o,a,c,l,h,new U),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new U,materialIndex:0};Mn.getNormal(Cr,Rr,Dr,d.normal),u.face=d,u.barycoord=h}return u}class Rs extends Un{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],u=[],h=[];let d=0,m=0;_("z","y","x",-1,-1,n,t,e,o,r,0),_("z","y","x",1,-1,n,t,-e,o,r,1),_("x","z","y",1,1,e,n,t,s,o,2),_("x","z","y",1,-1,e,n,-t,s,o,3),_("x","y","z",1,-1,e,t,n,s,r,4),_("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new qt(l,3)),this.setAttribute("normal",new qt(u,3)),this.setAttribute("uv",new qt(h,2));function _(g,p,f,b,T,x,y,E,A,C,S){const v=x/A,R=y/C,P=x/2,N=y/2,B=E/2,H=A+1,k=C+1;let G=0,V=0;const j=new U;for(let Q=0;Q<k;Q++){const ne=Q*R-N;for(let ge=0;ge<H;ge++){const Be=ge*v-P;j[g]=Be*b,j[p]=ne*T,j[f]=B,l.push(j.x,j.y,j.z),j[g]=0,j[p]=0,j[f]=E>0?1:-1,u.push(j.x,j.y,j.z),h.push(ge/A),h.push(1-Q/C),G+=1}}for(let Q=0;Q<C;Q++)for(let ne=0;ne<A;ne++){const ge=d+ne+H*Q,Be=d+ne+H*(Q+1),Y=d+(ne+1)+H*(Q+1),Z=d+(ne+1)+H*Q;c.push(ge,Be,Z),c.push(Be,Y,Z),V+=6}a.addGroup(m,V,S),m+=V,d+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function vs(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Gt(i){const e={};for(let t=0;t<i.length;t++){const n=vs(i[t]);for(const s in n)e[s]=n[s]}return e}function bd(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Au(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Qe.workingColorSpace}const Kr={clone:vs,merge:Gt};var wd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ad=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class kt extends mo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wd,this.fragmentShader=Ad,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=vs(e.uniforms),this.uniformsGroups=bd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Cu extends Ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new vt,this.projectionMatrix=new vt,this.projectionMatrixInverse=new vt,this.coordinateSystem=2e3}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ui=new U,hl=new Ue,dl=new Ue;class rn extends Cu{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ea*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(qo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ea*2*Math.atan(Math.tan(qo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ui.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ui.x,ui.y).multiplyScalar(-e/ui.z),ui.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ui.x,ui.y).multiplyScalar(-e/ui.z)}getViewSize(e,t){return this.getViewBounds(e,hl,dl),t.subVectors(dl,hl)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(qo*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ns=-90,is=1;class Cd extends Ft{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new rn(ns,is,e,t);s.layers=this.layers,this.add(s);const r=new rn(ns,is,e,t);r.layers=this.layers,this.add(r);const o=new rn(ns,is,e,t);o.layers=this.layers,this.add(o);const a=new rn(ns,is,e,t);a.layers=this.layers,this.add(a);const c=new rn(ns,is,e,t);c.layers=this.layers,this.add(c);const l=new rn(ns,is,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,c]=t;for(const l of t)this.remove(l);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(h,d,m),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class Ru extends Qt{constructor(e,t,n,s,r,o,a,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:301,super(e,t,n,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Rd extends bn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Ru(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:1006}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Rs(5,5,5),r=new kt({name:"CubemapFromEquirect",uniforms:vs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});r.uniforms.tEquirect.value=t;const o=new Tn(s,r),a=t.minFilter;return t.minFilter===1008&&(t.minFilter=1006),new Cd(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}}class Ga{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new We(e),this.near=t,this.far=n}clone(){return new Ga(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Dd extends Ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Jn,this.environmentIntensity=1,this.environmentRotation=new Jn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const da=new U,Pd=new U,Id=new Ve;class Di{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=da.subVectors(n,t).cross(Pd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(da),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Id.getNormalMatrix(e),s=this.coplanarPoint(da).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const bi=new za,Fr=new U;class Ha{constructor(e=new Di,t=new Di,n=new Di,s=new Di,r=new Di,o=new Di){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=2e3){const n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],u=s[5],h=s[6],d=s[7],m=s[8],_=s[9],g=s[10],p=s[11],f=s[12],b=s[13],T=s[14],x=s[15];if(n[0].setComponents(c-r,d-l,p-m,x-f).normalize(),n[1].setComponents(c+r,d+l,p+m,x+f).normalize(),n[2].setComponents(c+o,d+u,p+_,x+b).normalize(),n[3].setComponents(c-o,d-u,p-_,x-b).normalize(),n[4].setComponents(c-a,d-h,p-g,x-T).normalize(),t===2e3)n[5].setComponents(c+a,d+h,p+g,x+T).normalize();else if(t===2001)n[5].setComponents(a,h,g,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),bi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),bi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(bi)}intersectsSprite(e){return bi.center.set(0,0,0),bi.radius=.7071067811865476,bi.applyMatrix4(e.matrixWorld),this.intersectsSphere(bi)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Fr.x=s.normal.x>0?e.max.x:e.min.x,Fr.y=s.normal.y>0?e.max.y:e.min.y,Fr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Fr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}let Lr=class extends Ft{constructor(){super(),this.isGroup=!0,this.type="Group"}};class Du extends Qt{constructor(e,t,n,s,r,o,a,c,l,u=1026){if(u!==1026&&u!==1027)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===1026&&(n=1014),n===void 0&&u===1027&&(n=1020),super(null,s,r,o,a,c,u,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:1003,this.minFilter=c!==void 0?c:1003,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class go extends Un{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(s),l=a+1,u=c+1,h=e/a,d=t/c,m=[],_=[],g=[],p=[];for(let f=0;f<u;f++){const b=f*d-o;for(let T=0;T<l;T++){const x=T*h-r;_.push(x,-b,0),g.push(0,0,1),p.push(T/a),p.push(1-f/c)}}for(let f=0;f<c;f++)for(let b=0;b<a;b++){const T=b+l*f,x=b+l*(f+1),y=b+1+l*(f+1),E=b+1+l*f;m.push(T,x,E),m.push(x,y,E)}this.setIndex(m),this.setAttribute("position",new qt(_,3)),this.setAttribute("normal",new qt(g,3)),this.setAttribute("uv",new qt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new go(e.width,e.height,e.widthSegments,e.heightSegments)}}class Wa extends Un{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const u=[],h=new U,d=new U,m=[],_=[],g=[],p=[];for(let f=0;f<=n;f++){const b=[],T=f/n;let x=0;f===0&&o===0?x=.5/t:f===n&&c===Math.PI&&(x=-.5/t);for(let y=0;y<=t;y++){const E=y/t;h.x=-e*Math.cos(s+E*r)*Math.sin(o+T*a),h.y=e*Math.cos(o+T*a),h.z=e*Math.sin(s+E*r)*Math.sin(o+T*a),_.push(h.x,h.y,h.z),d.copy(h).normalize(),g.push(d.x,d.y,d.z),p.push(E+x,1-T),b.push(l++)}u.push(b)}for(let f=0;f<n;f++)for(let b=0;b<t;b++){const T=u[f][b+1],x=u[f][b],y=u[f+1][b],E=u[f+1][b+1];(f!==0||o>0)&&m.push(T,x,E),(f!==n-1||c<Math.PI)&&m.push(x,y,E)}this.setIndex(m),this.setAttribute("position",new qt(_,3)),this.setAttribute("normal",new qt(g,3)),this.setAttribute("uv",new qt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wa(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class qa extends Un{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],c=[],l=[],u=new U,h=new U,d=new U;for(let m=0;m<=n;m++)for(let _=0;_<=s;_++){const g=_/s*r,p=m/n*Math.PI*2;h.x=(e+t*Math.cos(p))*Math.cos(g),h.y=(e+t*Math.cos(p))*Math.sin(g),h.z=t*Math.sin(p),a.push(h.x,h.y,h.z),u.x=e*Math.cos(g),u.y=e*Math.sin(g),d.subVectors(h,u).normalize(),c.push(d.x,d.y,d.z),l.push(_/s),l.push(m/n)}for(let m=1;m<=n;m++)for(let _=1;_<=s;_++){const g=(s+1)*m+_-1,p=(s+1)*(m-1)+_-1,f=(s+1)*(m-1)+_,b=(s+1)*m+_;o.push(g,p,b),o.push(p,f,b)}this.setIndex(o),this.setAttribute("position",new qt(a,3)),this.setAttribute("normal",new qt(c,3)),this.setAttribute("uv",new qt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qa(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Nd extends mo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Fd extends mo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Xa extends Ft{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new We(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const fa=new vt,fl=new U,pl=new U;class Pu{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ue(512,512),this.map=null,this.mapPass=null,this.matrix=new vt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ha,this._frameExtents=new Ue(1,1),this._viewportCount=1,this._viewports=[new ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;fl.setFromMatrixPosition(e.matrixWorld),t.position.copy(fl),pl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(pl),t.updateMatrixWorld(),fa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(fa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(fa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const ml=new vt,Ws=new U,pa=new U;class Ld extends Pu{constructor(){super(new rn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ue(4,2),this._viewportCount=6,this._viewports=[new ct(2,1,1,1),new ct(0,1,1,1),new ct(3,1,1,1),new ct(1,1,1,1),new ct(3,0,1,1),new ct(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ws.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ws),pa.copy(n.position),pa.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(pa),n.updateMatrixWorld(),s.makeTranslation(-Ws.x,-Ws.y,-Ws.z),ml.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ml)}}class Od extends Xa{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Ld}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Ya extends Cu{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Ud extends Pu{constructor(){super(new Ya(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Bd extends Xa{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.target=new Ft,this.shadow=new Ud}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class kd extends Xa{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}let Or;class Vd{static getContext(){return Or===void 0&&(Or=new(window.AudioContext||window.webkitAudioContext)),Or}static setContext(e){Or=e}}class zd extends rn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}let ja=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=_l(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=_l();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function _l(){return performance.now()}const wi=new U,gl=new Cs,Gd=new U,Ai=new U;class vl extends Ft{constructor(){super(),this.type="AudioListener",this.context=Vd.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new ja}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e);const t=this.context.listener,n=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(wi,gl,Gd),Ai.set(0,0,-1).applyQuaternion(gl),t.positionX){const s=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(wi.x,s),t.positionY.linearRampToValueAtTime(wi.y,s),t.positionZ.linearRampToValueAtTime(wi.z,s),t.forwardX.linearRampToValueAtTime(Ai.x,s),t.forwardY.linearRampToValueAtTime(Ai.y,s),t.forwardZ.linearRampToValueAtTime(Ai.z,s),t.upX.linearRampToValueAtTime(n.x,s),t.upY.linearRampToValueAtTime(n.y,s),t.upZ.linearRampToValueAtTime(n.z,s)}else t.setPosition(wi.x,wi.y,wi.z),t.setOrientation(Ai.x,Ai.y,Ai.z,n.x,n.y,n.z)}}function xl(i,e,t,n){const s=Hd(n);switch(t){case 1021:return i*e;case 1024:return i*e;case 1025:return i*e*2;case 1028:return i*e/s.components*s.byteLength;case 1029:return i*e/s.components*s.byteLength;case 1030:return i*e*2/s.components*s.byteLength;case 1031:return i*e*2/s.components*s.byteLength;case 1022:return i*e*3/s.components*s.byteLength;case 1023:return i*e*4/s.components*s.byteLength;case 1033:return i*e*4/s.components*s.byteLength;case 33776:case 33777:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case 33778:case 33779:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case 35841:case 35843:return Math.max(i,16)*Math.max(e,8)/4;case 35840:case 35842:return Math.max(i,8)*Math.max(e,8)/2;case 36196:case 37492:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case 37496:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case 37808:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case 37809:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case 37810:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case 37811:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case 37812:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case 37813:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case 37814:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case 37815:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case 37816:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case 37817:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case 37818:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case 37819:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case 37820:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case 37821:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(i/4)*Math.ceil(e/4)*16;case 36283:case 36284:return Math.ceil(i/4)*Math.ceil(e/4)*8;case 36285:case 36286:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Hd(i){switch(i){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"172"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="172");/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Iu(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Wd(i){const e=new WeakMap;function t(a,c){const l=a.array,u=a.usage,h=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,u),a.onUploadCallback();let m;if(l instanceof Float32Array)m=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=i.SHORT;else if(l instanceof Uint32Array)m=i.UNSIGNED_INT;else if(l instanceof Int32Array)m=i.INT;else if(l instanceof Int8Array)m=i.BYTE;else if(l instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,c,l){const u=c.array,h=c.updateRanges;if(i.bindBuffer(l,a),h.length===0)i.bufferSubData(l,0,u);else{h.sort((m,_)=>m.start-_.start);let d=0;for(let m=1;m<h.length;m++){const _=h[d],g=h[m];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++d,h[d]=g)}h.length=d+1;for(let m=0,_=h.length;m<_;m++){const g=h[m];i.bufferSubData(l,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var qd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Xd=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Yd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,jd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,$d=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Kd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Qd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Jd=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,ef=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,tf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,nf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,sf=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,rf=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,of=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,af=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,cf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,lf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,uf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,hf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,df=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ff=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,pf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,mf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,_f=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,gf=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,vf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,yf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Sf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Mf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Tf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ef=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,bf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,wf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Af=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Cf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Rf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Df=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Pf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,If=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Nf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Ff=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Lf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Of=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Uf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Bf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,kf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Vf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Gf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Hf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Wf=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,qf=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Xf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Yf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,jf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Zf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$f=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Kf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Qf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Jf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ep=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,tp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,np=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ip=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,sp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,rp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,op=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ap=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,cp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,up=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,hp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,pp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,mp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_p=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,gp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,vp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,yp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Sp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Mp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Tp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ep=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,bp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,wp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ap=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Cp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Rp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Dp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Pp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ip=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Np=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Fp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Lp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Op=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Up=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Bp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,kp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Vp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,zp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Gp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Hp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Wp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const qp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Xp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$p=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Qp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Jp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,em=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,tm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,nm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,im=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,rm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,om=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,am=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,um=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,dm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,fm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,_m=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,ym=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Sm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Mm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Tm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Em=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,He={alphahash_fragment:qd,alphahash_pars_fragment:Xd,alphamap_fragment:Yd,alphamap_pars_fragment:jd,alphatest_fragment:Zd,alphatest_pars_fragment:$d,aomap_fragment:Kd,aomap_pars_fragment:Qd,batching_pars_vertex:Jd,batching_vertex:ef,begin_vertex:tf,beginnormal_vertex:nf,bsdfs:sf,iridescence_fragment:rf,bumpmap_pars_fragment:of,clipping_planes_fragment:af,clipping_planes_pars_fragment:cf,clipping_planes_pars_vertex:lf,clipping_planes_vertex:uf,color_fragment:hf,color_pars_fragment:df,color_pars_vertex:ff,color_vertex:pf,common:mf,cube_uv_reflection_fragment:_f,defaultnormal_vertex:gf,displacementmap_pars_vertex:vf,displacementmap_vertex:xf,emissivemap_fragment:yf,emissivemap_pars_fragment:Sf,colorspace_fragment:Mf,colorspace_pars_fragment:Tf,envmap_fragment:Ef,envmap_common_pars_fragment:bf,envmap_pars_fragment:wf,envmap_pars_vertex:Af,envmap_physical_pars_fragment:Bf,envmap_vertex:Cf,fog_vertex:Rf,fog_pars_vertex:Df,fog_fragment:Pf,fog_pars_fragment:If,gradientmap_pars_fragment:Nf,lightmap_pars_fragment:Ff,lights_lambert_fragment:Lf,lights_lambert_pars_fragment:Of,lights_pars_begin:Uf,lights_toon_fragment:kf,lights_toon_pars_fragment:Vf,lights_phong_fragment:zf,lights_phong_pars_fragment:Gf,lights_physical_fragment:Hf,lights_physical_pars_fragment:Wf,lights_fragment_begin:qf,lights_fragment_maps:Xf,lights_fragment_end:Yf,logdepthbuf_fragment:jf,logdepthbuf_pars_fragment:Zf,logdepthbuf_pars_vertex:$f,logdepthbuf_vertex:Kf,map_fragment:Qf,map_pars_fragment:Jf,map_particle_fragment:ep,map_particle_pars_fragment:tp,metalnessmap_fragment:np,metalnessmap_pars_fragment:ip,morphinstance_vertex:sp,morphcolor_vertex:rp,morphnormal_vertex:op,morphtarget_pars_vertex:ap,morphtarget_vertex:cp,normal_fragment_begin:lp,normal_fragment_maps:up,normal_pars_fragment:hp,normal_pars_vertex:dp,normal_vertex:fp,normalmap_pars_fragment:pp,clearcoat_normal_fragment_begin:mp,clearcoat_normal_fragment_maps:_p,clearcoat_pars_fragment:gp,iridescence_pars_fragment:vp,opaque_fragment:xp,packing:yp,premultiplied_alpha_fragment:Sp,project_vertex:Mp,dithering_fragment:Tp,dithering_pars_fragment:Ep,roughnessmap_fragment:bp,roughnessmap_pars_fragment:wp,shadowmap_pars_fragment:Ap,shadowmap_pars_vertex:Cp,shadowmap_vertex:Rp,shadowmask_pars_fragment:Dp,skinbase_vertex:Pp,skinning_pars_vertex:Ip,skinning_vertex:Np,skinnormal_vertex:Fp,specularmap_fragment:Lp,specularmap_pars_fragment:Op,tonemapping_fragment:Up,tonemapping_pars_fragment:Bp,transmission_fragment:kp,transmission_pars_fragment:Vp,uv_pars_fragment:zp,uv_pars_vertex:Gp,uv_vertex:Hp,worldpos_vertex:Wp,background_vert:qp,background_frag:Xp,backgroundCube_vert:Yp,backgroundCube_frag:jp,cube_vert:Zp,cube_frag:$p,depth_vert:Kp,depth_frag:Qp,distanceRGBA_vert:Jp,distanceRGBA_frag:em,equirect_vert:tm,equirect_frag:nm,linedashed_vert:im,linedashed_frag:sm,meshbasic_vert:rm,meshbasic_frag:om,meshlambert_vert:am,meshlambert_frag:cm,meshmatcap_vert:lm,meshmatcap_frag:um,meshnormal_vert:hm,meshnormal_frag:dm,meshphong_vert:fm,meshphong_frag:pm,meshphysical_vert:mm,meshphysical_frag:_m,meshtoon_vert:gm,meshtoon_frag:vm,points_vert:xm,points_frag:ym,shadow_vert:Sm,shadow_frag:Mm,sprite_vert:Tm,sprite_frag:Em},he={common:{diffuse:{value:new We(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},envMapRotation:{value:new Ve},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new Ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new We(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new We(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new We(16777215)},opacity:{value:1},center:{value:new Ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},Pn={basic:{uniforms:Gt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:Gt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new We(0)}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:Gt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new We(0)},specular:{value:new We(1118481)},shininess:{value:30}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:Gt([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new We(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:Gt([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new We(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:Gt([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:Gt([he.points,he.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:Gt([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:Gt([he.common,he.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:Gt([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:Gt([he.sprite,he.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ve}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distanceRGBA:{uniforms:Gt([he.common,he.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distanceRGBA_vert,fragmentShader:He.distanceRGBA_frag},shadow:{uniforms:Gt([he.lights,he.fog,{color:{value:new We(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};Pn.physical={uniforms:Gt([Pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new Ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new We(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new Ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new We(0)},specularColor:{value:new We(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new Ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};const Ur={r:0,b:0,g:0},Ci=new Jn,bm=new vt;function wm(i,e,t,n,s,r,o){const a=new We(0);let c=r===!0?0:1,l,u,h=null,d=0,m=null;function _(T){let x=T.isScene===!0?T.background:null;return x&&x.isTexture&&(x=(T.backgroundBlurriness>0?t:e).get(x)),x}function g(T){let x=!1;const y=_(T);y===null?f(a,c):y&&y.isColor&&(f(y,1),x=!0);const E=i.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,o):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(T,x){const y=_(x);y&&(y.isCubeTexture||y.mapping===306)?(u===void 0&&(u=new Tn(new Rs(1,1,1),new kt({name:"BackgroundCubeMaterial",uniforms:vs(Pn.backgroundCube.uniforms),vertexShader:Pn.backgroundCube.vertexShader,fragmentShader:Pn.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(E,A,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Ci.copy(x.backgroundRotation),Ci.x*=-1,Ci.y*=-1,Ci.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Ci.y*=-1,Ci.z*=-1),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(bm.makeRotationFromEuler(Ci)),u.material.toneMapped=Qe.getTransfer(y.colorSpace)!==ot,(h!==y||d!==y.version||m!==i.toneMapping)&&(u.material.needsUpdate=!0,h=y,d=y.version,m=i.toneMapping),u.layers.enableAll(),T.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Tn(new go(2,2),new kt({name:"BackgroundMaterial",uniforms:vs(Pn.background.uniforms),vertexShader:Pn.background.vertexShader,fragmentShader:Pn.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=Qe.getTransfer(y.colorSpace)!==ot,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||d!==y.version||m!==i.toneMapping)&&(l.material.needsUpdate=!0,h=y,d=y.version,m=i.toneMapping),l.layers.enableAll(),T.unshift(l,l.geometry,l.material,0,0,null))}function f(T,x){T.getRGB(Ur,Au(i)),n.buffers.color.setClear(Ur.r,Ur.g,Ur.b,x,o)}function b(){u!==void 0&&(u.geometry.dispose(),u.material.dispose()),l!==void 0&&(l.geometry.dispose(),l.material.dispose())}return{getClearColor:function(){return a},setClearColor:function(T,x=1){a.set(T),c=x,f(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(T){c=T,f(a,c)},render:g,addToRenderList:p,dispose:b}}function Am(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,o=!1;function a(v,R,P,N,B){let H=!1;const k=h(N,P,R);r!==k&&(r=k,l(r.object)),H=m(v,N,P,B),H&&_(v,N,P,B),B!==null&&e.update(B,i.ELEMENT_ARRAY_BUFFER),(H||o)&&(o=!1,x(v,R,P,N),B!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function c(){return i.createVertexArray()}function l(v){return i.bindVertexArray(v)}function u(v){return i.deleteVertexArray(v)}function h(v,R,P){const N=P.wireframe===!0;let B=n[v.id];B===void 0&&(B={},n[v.id]=B);let H=B[R.id];H===void 0&&(H={},B[R.id]=H);let k=H[N];return k===void 0&&(k=d(c()),H[N]=k),k}function d(v){const R=[],P=[],N=[];for(let B=0;B<t;B++)R[B]=0,P[B]=0,N[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:P,attributeDivisors:N,object:v,attributes:{},index:null}}function m(v,R,P,N){const B=r.attributes,H=R.attributes;let k=0;const G=P.getAttributes();for(const V in G)if(G[V].location>=0){const Q=B[V];let ne=H[V];if(ne===void 0&&(V==="instanceMatrix"&&v.instanceMatrix&&(ne=v.instanceMatrix),V==="instanceColor"&&v.instanceColor&&(ne=v.instanceColor)),Q===void 0||Q.attribute!==ne||ne&&Q.data!==ne.data)return!0;k++}return r.attributesNum!==k||r.index!==N}function _(v,R,P,N){const B={},H=R.attributes;let k=0;const G=P.getAttributes();for(const V in G)if(G[V].location>=0){let Q=H[V];Q===void 0&&(V==="instanceMatrix"&&v.instanceMatrix&&(Q=v.instanceMatrix),V==="instanceColor"&&v.instanceColor&&(Q=v.instanceColor));const ne={};ne.attribute=Q,Q&&Q.data&&(ne.data=Q.data),B[V]=ne,k++}r.attributes=B,r.attributesNum=k,r.index=N}function g(){const v=r.newAttributes;for(let R=0,P=v.length;R<P;R++)v[R]=0}function p(v){f(v,0)}function f(v,R){const P=r.newAttributes,N=r.enabledAttributes,B=r.attributeDivisors;P[v]=1,N[v]===0&&(i.enableVertexAttribArray(v),N[v]=1),B[v]!==R&&(i.vertexAttribDivisor(v,R),B[v]=R)}function b(){const v=r.newAttributes,R=r.enabledAttributes;for(let P=0,N=R.length;P<N;P++)R[P]!==v[P]&&(i.disableVertexAttribArray(P),R[P]=0)}function T(v,R,P,N,B,H,k){k===!0?i.vertexAttribIPointer(v,R,P,B,H):i.vertexAttribPointer(v,R,P,N,B,H)}function x(v,R,P,N){g();const B=N.attributes,H=P.getAttributes(),k=R.defaultAttributeValues;for(const G in H){const V=H[G];if(V.location>=0){let j=B[G];if(j===void 0&&(G==="instanceMatrix"&&v.instanceMatrix&&(j=v.instanceMatrix),G==="instanceColor"&&v.instanceColor&&(j=v.instanceColor)),j!==void 0){const Q=j.normalized,ne=j.itemSize,ge=e.get(j);if(ge===void 0)continue;const Be=ge.buffer,Y=ge.type,Z=ge.bytesPerElement,oe=Y===i.INT||Y===i.UNSIGNED_INT||j.gpuType===1013;if(j.isInterleavedBufferAttribute){const se=j.data,ee=se.stride,Ce=j.offset;if(se.isInstancedInterleavedBuffer){for(let Ie=0;Ie<V.locationSize;Ie++)f(V.location+Ie,se.meshPerAttribute);v.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let Ie=0;Ie<V.locationSize;Ie++)p(V.location+Ie);i.bindBuffer(i.ARRAY_BUFFER,Be);for(let Ie=0;Ie<V.locationSize;Ie++)T(V.location+Ie,ne/V.locationSize,Y,Q,ee*Z,(Ce+ne/V.locationSize*Ie)*Z,oe)}else{if(j.isInstancedBufferAttribute){for(let se=0;se<V.locationSize;se++)f(V.location+se,j.meshPerAttribute);v.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let se=0;se<V.locationSize;se++)p(V.location+se);i.bindBuffer(i.ARRAY_BUFFER,Be);for(let se=0;se<V.locationSize;se++)T(V.location+se,ne/V.locationSize,Y,Q,ne*Z,ne/V.locationSize*se*Z,oe)}}else if(k!==void 0){const Q=k[G];if(Q!==void 0)switch(Q.length){case 2:i.vertexAttrib2fv(V.location,Q);break;case 3:i.vertexAttrib3fv(V.location,Q);break;case 4:i.vertexAttrib4fv(V.location,Q);break;default:i.vertexAttrib1fv(V.location,Q)}}}}b()}function y(){C();for(const v in n){const R=n[v];for(const P in R){const N=R[P];for(const B in N)u(N[B].object),delete N[B];delete R[P]}delete n[v]}}function E(v){if(n[v.id]===void 0)return;const R=n[v.id];for(const P in R){const N=R[P];for(const B in N)u(N[B].object),delete N[B];delete R[P]}delete n[v.id]}function A(v){for(const R in n){const P=n[R];if(P[v.id]===void 0)continue;const N=P[v.id];for(const B in N)u(N[B].object),delete N[B];delete P[v.id]}}function C(){S(),o=!0,r!==s&&(r=s,l(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:C,resetDefaultState:S,dispose:y,releaseStatesOfGeometry:E,releaseStatesOfProgram:A,initAttributes:g,enableAttribute:p,disableUnusedAttributes:b}}function Cm(i,e,t){let n;function s(l){n=l}function r(l,u){i.drawArrays(n,l,u),t.update(u,n,1)}function o(l,u,h){h!==0&&(i.drawArraysInstanced(n,l,u,h),t.update(u,n,h))}function a(l,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,h);let m=0;for(let _=0;_<h;_++)m+=u[_];t.update(m,n,1)}function c(l,u,h,d){if(h===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<l.length;_++)o(l[_],u[_],d[_]);else{m.multiDrawArraysInstancedWEBGL(n,l,0,u,0,d,0,h);let _=0;for(let g=0;g<h;g++)_+=u[g]*d[g];t.update(_,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Rm(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(A){return!(A!==1023&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const C=A===1016&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==1009&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==1015&&!C)}function c(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),y=_>0,E=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:m,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:p,maxAttributes:f,maxVertexUniforms:b,maxVaryings:T,maxFragmentUniforms:x,vertexTextures:y,maxSamples:E}}function Dm(i){const e=this;let t=null,n=0,s=!1,r=!1;const o=new Di,a=new Ve,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const m=h.length!==0||d||n!==0||s;return s=d,n=h.length,m},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,m){const _=h.clippingPlanes,g=h.clipIntersection,p=h.clipShadows,f=i.get(h);if(!s||_===null||_.length===0||r&&!p)r?u(null):l();else{const b=r?0:n,T=b*4;let x=f.clippingState||null;c.value=x,x=u(_,d,T,m);for(let y=0;y!==T;++y)x[y]=t[y];f.clippingState=x,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,m,_){const g=h!==null?h.length:0;let p=null;if(g!==0){if(p=c.value,_!==!0||p===null){const f=m+g*4,b=d.matrixWorldInverse;a.getNormalMatrix(b),(p===null||p.length<f)&&(p=new Float32Array(f));for(let T=0,x=m;T!==g;++T,x+=4)o.copy(h[T]).applyMatrix4(b,a),o.normal.toArray(p,x),p[x+3]=o.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,p}}function Pm(i){let e=new WeakMap;function t(o,a){return a===303?o.mapping=301:a===304&&(o.mapping=302),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===303||a===304)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Rd(c.height);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",s),t(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const cs=4,yl=[.125,.215,.35,.446,.526,.582],Fi=20,ma=new Ya,Sl=new We;let _a=null,ga=0,va=0,xa=!1;const Pi=(1+Math.sqrt(5))/2,ss=1/Pi,Ml=[new U(-Pi,ss,0),new U(Pi,ss,0),new U(-ss,0,Pi),new U(ss,0,Pi),new U(0,Pi,-ss),new U(0,Pi,ss),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)];class Tl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){_a=this._renderer.getRenderTarget(),ga=this._renderer.getActiveCubeFace(),va=this._renderer.getActiveMipmapLevel(),xa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=bl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(_a,ga,va),this._renderer.xr.enabled=xa,e.scissorTest=!1,Br(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),_a=this._renderer.getRenderTarget(),ga=this._renderer.getActiveCubeFace(),va=this._renderer.getActiveMipmapLevel(),xa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:1006,minFilter:1006,generateMipmaps:!1,type:1016,format:1023,colorSpace:gs,depthBuffer:!1},s=El(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=El(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Im(r)),this._blurMaterial=Nm(r,e,t)}return s}_compileMaterial(e){const t=new Tn(this._lodPlanes[0],e);this._renderer.compile(t,ma)}_sceneToCubeUV(e,t,n,s){const a=new rn(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(Sl),u.toneMapping=0,u.autoClear=!1;const m=new _o({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1}),_=new Tn(new Rs,m);let g=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,g=!0):(m.color.copy(Sl),g=!0);for(let f=0;f<6;f++){const b=f%3;b===0?(a.up.set(0,c[f],0),a.lookAt(l[f],0,0)):b===1?(a.up.set(0,0,c[f]),a.lookAt(0,l[f],0)):(a.up.set(0,c[f],0),a.lookAt(0,0,l[f]));const T=this._cubeSize;Br(s,b*T,f>2?T:0,T,T),u.setRenderTarget(s),g&&u.render(_,a),u.render(e,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===301||e.mapping===302;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=wl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=bl());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Tn(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;Br(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,ma)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Ml[(s-r-1)%Ml.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Tn(this._lodPlanes[s],l),d=l.uniforms,m=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Fi-1),g=r/_,p=isFinite(r)?1+Math.floor(u*g):Fi;p>Fi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Fi}`);const f=[];let b=0;for(let A=0;A<Fi;++A){const C=A/g,S=Math.exp(-C*C/2);f.push(S),A===0?b+=S:A<p&&(b+=2*S)}for(let A=0;A<f.length;A++)f[A]=f[A]/b;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:T}=this;d.dTheta.value=_,d.mipInt.value=T-n;const x=this._sizeLods[s],y=3*x*(s>T-cs?s-T+cs:0),E=4*(this._cubeSize-x);Br(t,y,E,3*x,2*x),c.setRenderTarget(t),c.render(h,ma)}}function Im(i){const e=[],t=[],n=[];let s=i;const r=i-cs+1+yl.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let c=1/a;o>i-cs?c=yl[o-i+cs-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,_=6,g=3,p=2,f=1,b=new Float32Array(g*_*m),T=new Float32Array(p*_*m),x=new Float32Array(f*_*m);for(let E=0;E<m;E++){const A=E%3*2/3-1,C=E>2?0:-1,S=[A,C,0,A+2/3,C,0,A+2/3,C+1,0,A,C,0,A+2/3,C+1,0,A,C+1,0];b.set(S,g*_*E),T.set(d,p*_*E);const v=[E,E,E,E,E,E];x.set(v,f*_*E)}const y=new Un;y.setAttribute("position",new In(b,g)),y.setAttribute("uv",new In(T,p)),y.setAttribute("faceIndex",new In(x,f)),e.push(y),s>cs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function El(i,e,t){const n=new bn(i,e,t);return n.texture.mapping=306,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Br(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Nm(i,e,t){const n=new Float32Array(Fi),s=new U(0,1,0);return new kt({name:"SphericalGaussianBlur",defines:{n:Fi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Za(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function bl(){return new kt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Za(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function wl(){return new kt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Za(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Za(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Fm(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===303||c===304,u=c===301||c===302;if(l||u){let h=e.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new Tl(i)),h=l?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const m=a.image;return l&&m&&m.height>0||u&&m&&s(m)?(t===null&&(t=new Tl(i)),h=l?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Lm(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&os("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Om(i,e,t,n){const s={},r=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);d.removeEventListener("dispose",o),delete s[d.id];const m=r.get(d);m&&(e.remove(m),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function c(h){const d=h.attributes;for(const m in d)e.update(d[m],i.ARRAY_BUFFER)}function l(h){const d=[],m=h.index,_=h.attributes.position;let g=0;if(m!==null){const b=m.array;g=m.version;for(let T=0,x=b.length;T<x;T+=3){const y=b[T+0],E=b[T+1],A=b[T+2];d.push(y,E,E,A,A,y)}}else if(_!==void 0){const b=_.array;g=_.version;for(let T=0,x=b.length/3-1;T<x;T+=3){const y=T+0,E=T+1,A=T+2;d.push(y,E,E,A,A,y)}}else return;const p=new(yu(d)?wu:bu)(d,1);p.version=g;const f=r.get(h);f&&e.remove(f),r.set(h,p)}function u(h){const d=r.get(h);if(d){const m=h.index;m!==null&&d.version<m.version&&l(h)}else l(h);return r.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function Um(i,e,t){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,m){i.drawElements(n,m,r,d*o),t.update(m,n,1)}function l(d,m,_){_!==0&&(i.drawElementsInstanced(n,m,r,d*o,_),t.update(m,n,_))}function u(d,m,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,r,d,0,_);let p=0;for(let f=0;f<_;f++)p+=m[f];t.update(p,n,1)}function h(d,m,_,g){if(_===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let f=0;f<d.length;f++)l(d[f]/o,m[f],g[f]);else{p.multiDrawElementsInstancedWEBGL(n,m,0,r,d,0,g,0,_);let f=0;for(let b=0;b<_;b++)f+=m[b]*g[b];t.update(f,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Bm(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function km(i,e,t){const n=new WeakMap,s=new ct;function r(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(a);if(d===void 0||d.count!==h){let v=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",v)};var m=v;d!==void 0&&d.texture.dispose();const _=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],b=a.morphAttributes.normal||[],T=a.morphAttributes.color||[];let x=0;_===!0&&(x=1),g===!0&&(x=2),p===!0&&(x=3);let y=a.attributes.position.count*x,E=1;y>e.maxTextureSize&&(E=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const A=new Float32Array(y*E*4*h),C=new Mu(A,y,E,h);C.type=1015,C.needsUpdate=!0;const S=x*4;for(let R=0;R<h;R++){const P=f[R],N=b[R],B=T[R],H=y*E*4*R;for(let k=0;k<P.count;k++){const G=k*S;_===!0&&(s.fromBufferAttribute(P,k),A[H+G+0]=s.x,A[H+G+1]=s.y,A[H+G+2]=s.z,A[H+G+3]=0),g===!0&&(s.fromBufferAttribute(N,k),A[H+G+4]=s.x,A[H+G+5]=s.y,A[H+G+6]=s.z,A[H+G+7]=0),p===!0&&(s.fromBufferAttribute(B,k),A[H+G+8]=s.x,A[H+G+9]=s.y,A[H+G+10]=s.z,A[H+G+11]=B.itemSize===4?s.w:1)}}d={count:h,texture:C,size:new Ue(y,E)},n.set(a,d),a.addEventListener("dispose",v)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let _=0;for(let p=0;p<l.length;p++)_+=l[p];const g=a.morphTargetsRelative?1:1-_;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Vm(i,e,t,n){let s=new WeakMap;function r(c){const l=n.render.frame,u=c.geometry,h=e.get(c,u);if(s.get(h)!==l&&(e.update(h),s.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return h}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}const Nu=new Qt,Al=new Du(1,1),Fu=new Mu,Lu=new fd,Ou=new Ru,Cl=[],Rl=[],Dl=new Float32Array(16),Pl=new Float32Array(9),Il=new Float32Array(4);function Ds(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=Cl[s];if(r===void 0&&(r=new Float32Array(s),Cl[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function At(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Ct(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function vo(i,e){let t=Rl[e];t===void 0&&(t=new Int32Array(e),Rl[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function zm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Gm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;i.uniform2fv(this.addr,e),Ct(t,e)}}function Hm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(At(t,e))return;i.uniform3fv(this.addr,e),Ct(t,e)}}function Wm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;i.uniform4fv(this.addr,e),Ct(t,e)}}function qm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(At(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Ct(t,e)}else{if(At(t,n))return;Il.set(n),i.uniformMatrix2fv(this.addr,!1,Il),Ct(t,n)}}function Xm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(At(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Ct(t,e)}else{if(At(t,n))return;Pl.set(n),i.uniformMatrix3fv(this.addr,!1,Pl),Ct(t,n)}}function Ym(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(At(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Ct(t,e)}else{if(At(t,n))return;Dl.set(n),i.uniformMatrix4fv(this.addr,!1,Dl),Ct(t,n)}}function jm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Zm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;i.uniform2iv(this.addr,e),Ct(t,e)}}function $m(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(At(t,e))return;i.uniform3iv(this.addr,e),Ct(t,e)}}function Km(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;i.uniform4iv(this.addr,e),Ct(t,e)}}function Qm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Jm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;i.uniform2uiv(this.addr,e),Ct(t,e)}}function e_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(At(t,e))return;i.uniform3uiv(this.addr,e),Ct(t,e)}}function t_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;i.uniform4uiv(this.addr,e),Ct(t,e)}}function n_(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Al.compareFunction=515,r=Al):r=Nu,t.setTexture2D(e||r,s)}function i_(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Lu,s)}function s_(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Ou,s)}function r_(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Fu,s)}function o_(i){switch(i){case 5126:return zm;case 35664:return Gm;case 35665:return Hm;case 35666:return Wm;case 35674:return qm;case 35675:return Xm;case 35676:return Ym;case 5124:case 35670:return jm;case 35667:case 35671:return Zm;case 35668:case 35672:return $m;case 35669:case 35673:return Km;case 5125:return Qm;case 36294:return Jm;case 36295:return e_;case 36296:return t_;case 35678:case 36198:case 36298:case 36306:case 35682:return n_;case 35679:case 36299:case 36307:return i_;case 35680:case 36300:case 36308:case 36293:return s_;case 36289:case 36303:case 36311:case 36292:return r_}}function a_(i,e){i.uniform1fv(this.addr,e)}function c_(i,e){const t=Ds(e,this.size,2);i.uniform2fv(this.addr,t)}function l_(i,e){const t=Ds(e,this.size,3);i.uniform3fv(this.addr,t)}function u_(i,e){const t=Ds(e,this.size,4);i.uniform4fv(this.addr,t)}function h_(i,e){const t=Ds(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function d_(i,e){const t=Ds(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function f_(i,e){const t=Ds(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function p_(i,e){i.uniform1iv(this.addr,e)}function m_(i,e){i.uniform2iv(this.addr,e)}function __(i,e){i.uniform3iv(this.addr,e)}function g_(i,e){i.uniform4iv(this.addr,e)}function v_(i,e){i.uniform1uiv(this.addr,e)}function x_(i,e){i.uniform2uiv(this.addr,e)}function y_(i,e){i.uniform3uiv(this.addr,e)}function S_(i,e){i.uniform4uiv(this.addr,e)}function M_(i,e,t){const n=this.cache,s=e.length,r=vo(t,s);At(n,r)||(i.uniform1iv(this.addr,r),Ct(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Nu,r[o])}function T_(i,e,t){const n=this.cache,s=e.length,r=vo(t,s);At(n,r)||(i.uniform1iv(this.addr,r),Ct(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Lu,r[o])}function E_(i,e,t){const n=this.cache,s=e.length,r=vo(t,s);At(n,r)||(i.uniform1iv(this.addr,r),Ct(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Ou,r[o])}function b_(i,e,t){const n=this.cache,s=e.length,r=vo(t,s);At(n,r)||(i.uniform1iv(this.addr,r),Ct(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Fu,r[o])}function w_(i){switch(i){case 5126:return a_;case 35664:return c_;case 35665:return l_;case 35666:return u_;case 35674:return h_;case 35675:return d_;case 35676:return f_;case 5124:case 35670:return p_;case 35667:case 35671:return m_;case 35668:case 35672:return __;case 35669:case 35673:return g_;case 5125:return v_;case 36294:return x_;case 36295:return y_;case 36296:return S_;case 35678:case 36198:case 36298:case 36306:case 35682:return M_;case 35679:case 36299:case 36307:return T_;case 35680:case 36300:case 36308:case 36293:return E_;case 36289:case 36303:case 36311:case 36292:return b_}}class A_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=o_(t.type)}}class C_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=w_(t.type)}}class R_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],n)}}}const ya=/(\w+)(\])?(\[|\.)?/g;function Nl(i,e){i.seq.push(e),i.map[e.id]=e}function D_(i,e,t){const n=i.name,s=n.length;for(ya.lastIndex=0;;){const r=ya.exec(n),o=ya.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Nl(t,l===void 0?new A_(a,i,e):new C_(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new R_(a),Nl(t,h)),t=h}}}class Xr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);D_(r,o,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function Fl(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const P_=37297;let I_=0;function N_(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const Ll=new Ve;function F_(i){Qe._getMatrix(Ll,Qe.workingColorSpace,i);const e=`mat3( ${Ll.elements.map(t=>t.toFixed(4))} )`;switch(Qe.getTransfer(i)){case Zr:return[e,"LinearTransferOETF"];case ot:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Ol(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+N_(i.getShaderSource(e),o)}else return s}function L_(i,e){const t=F_(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function O_(i,e){let t;switch(e){case 1:t="Linear";break;case 2:t="Reinhard";break;case 3:t="Cineon";break;case 4:t="ACESFilmic";break;case 6:t="AgX";break;case 7:t="Neutral";break;case 5:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const kr=new U;function U_(){Qe.getLuminanceCoefficients(kr);const i=kr.x.toFixed(4),e=kr.y.toFixed(4),t=kr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function B_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xs).join(`
`)}function k_(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function V_(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Xs(i){return i!==""}function Ul(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Bl(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const z_=/^[ \t]*#include +<([\w\d./]+)>/gm;function ba(i){return i.replace(z_,H_)}const G_=new Map;function H_(i,e){let t=He[e];if(t===void 0){const n=G_.get(e);if(n!==void 0)t=He[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return ba(t)}const W_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function kl(i){return i.replace(W_,q_)}function q_(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Vl(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function X_(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===1?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===2?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===3&&(e="SHADOWMAP_TYPE_VSM"),e}function Y_(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case 301:case 302:e="ENVMAP_TYPE_CUBE";break;case 306:e="ENVMAP_TYPE_CUBE_UV";break}return e}function j_(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case 302:e="ENVMAP_MODE_REFRACTION";break}return e}function Z_(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case 0:e="ENVMAP_BLENDING_MULTIPLY";break;case 1:e="ENVMAP_BLENDING_MIX";break;case 2:e="ENVMAP_BLENDING_ADD";break}return e}function $_(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function K_(i,e,t,n){const s=i.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=X_(t),l=Y_(t),u=j_(t),h=Z_(t),d=$_(t),m=B_(t),_=k_(r),g=s.createProgram();let p,f,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Xs).join(`
`),p.length>0&&(p+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Xs).join(`
`),f.length>0&&(f+=`
`)):(p=[Vl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xs).join(`
`),f=[Vl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==0?"#define TONE_MAPPING":"",t.toneMapping!==0?He.tonemapping_pars_fragment:"",t.toneMapping!==0?O_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",He.colorspace_pars_fragment,L_("linearToOutputTexel",t.outputColorSpace),U_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Xs).join(`
`)),o=ba(o),o=Ul(o,t),o=Bl(o,t),a=ba(a),a=Ul(a,t),a=Bl(a,t),o=kl(o),a=kl(a),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,f=["#define varying in",t.glslVersion===Zc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Zc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const T=b+p+o,x=b+f+a,y=Fl(s,s.VERTEX_SHADER,T),E=Fl(s,s.FRAGMENT_SHADER,x);s.attachShader(g,y),s.attachShader(g,E),t.index0AttributeName!==void 0?s.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function A(R){if(i.debug.checkShaderErrors){const P=s.getProgramInfoLog(g).trim(),N=s.getShaderInfoLog(y).trim(),B=s.getShaderInfoLog(E).trim();let H=!0,k=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(H=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,y,E);else{const G=Ol(s,y,"vertex"),V=Ol(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+P+`
`+G+`
`+V)}else P!==""?console.warn("THREE.WebGLProgram: Program Info Log:",P):(N===""||B==="")&&(k=!1);k&&(R.diagnostics={runnable:H,programLog:P,vertexShader:{log:N,prefix:p},fragmentShader:{log:B,prefix:f}})}s.deleteShader(y),s.deleteShader(E),C=new Xr(s,g),S=V_(s,g)}let C;this.getUniforms=function(){return C===void 0&&A(this),C};let S;this.getAttributes=function(){return S===void 0&&A(this),S};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=s.getProgramParameter(g,P_)),v},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=I_++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=y,this.fragmentShader=E,this}let Q_=0;class J_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new eg(e),t.set(e,n)),n}}class eg{constructor(e){this.id=Q_++,this.code=e,this.usedTimes=0}}function tg(i,e,t,n,s,r,o){const a=new Tu,c=new J_,l=new Set,u=[],h=s.logarithmicDepthBuffer,d=s.vertexTextures;let m=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(S){return l.add(S),S===0?"uv":`uv${S}`}function p(S,v,R,P,N){const B=P.fog,H=N.geometry,k=S.isMeshStandardMaterial?P.environment:null,G=(S.isMeshStandardMaterial?t:e).get(S.envMap||k),V=G&&G.mapping===306?G.image.height:null,j=_[S.type];S.precision!==null&&(m=s.getMaxPrecision(S.precision),m!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",m,"instead."));const Q=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,ne=Q!==void 0?Q.length:0;let ge=0;H.morphAttributes.position!==void 0&&(ge=1),H.morphAttributes.normal!==void 0&&(ge=2),H.morphAttributes.color!==void 0&&(ge=3);let Be,Y,Z,oe;if(j){const it=Pn[j];Be=it.vertexShader,Y=it.fragmentShader}else Be=S.vertexShader,Y=S.fragmentShader,c.update(S),Z=c.getVertexShaderID(S),oe=c.getFragmentShaderID(S);const se=i.getRenderTarget(),ee=i.state.buffers.depth.getReversed(),Ce=N.isInstancedMesh===!0,Ie=N.isBatchedMesh===!0,et=!!S.map,ze=!!S.matcap,_t=!!G,I=!!S.aoMap,ce=!!S.lightMap,ae=!!S.bumpMap,we=!!S.normalMap,le=!!S.displacementMap,Te=!!S.emissiveMap,ue=!!S.metalnessMap,D=!!S.roughnessMap,M=S.anisotropy>0,z=S.clearcoat>0,K=S.dispersion>0,te=S.iridescence>0,$=S.sheen>0,Ee=S.transmission>0,pe=M&&!!S.anisotropyMap,xe=z&&!!S.clearcoatMap,Ze=z&&!!S.clearcoatNormalMap,re=z&&!!S.clearcoatRoughnessMap,ye=te&&!!S.iridescenceMap,Pe=te&&!!S.iridescenceThicknessMap,Ne=$&&!!S.sheenColorMap,Se=$&&!!S.sheenRoughnessMap,je=!!S.specularMap,Ge=!!S.specularColorMap,ht=!!S.specularIntensityMap,F=Ee&&!!S.transmissionMap,de=Ee&&!!S.thicknessMap,X=!!S.gradientMap,J=!!S.alphaMap,_e=S.alphaTest>0,me=!!S.alphaHash,ke=!!S.extensions;let xt=0;S.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(xt=i.toneMapping);const Ot={shaderID:j,shaderType:S.type,shaderName:S.name,vertexShader:Be,fragmentShader:Y,defines:S.defines,customVertexShaderID:Z,customFragmentShaderID:oe,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:m,batching:Ie,batchingColor:Ie&&N._colorsTexture!==null,instancing:Ce,instancingColor:Ce&&N.instanceColor!==null,instancingMorph:Ce&&N.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:se===null?i.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:gs,alphaToCoverage:!!S.alphaToCoverage,map:et,matcap:ze,envMap:_t,envMapMode:_t&&G.mapping,envMapCubeUVHeight:V,aoMap:I,lightMap:ce,bumpMap:ae,normalMap:we,displacementMap:d&&le,emissiveMap:Te,normalMapObjectSpace:we&&S.normalMapType===1,normalMapTangentSpace:we&&S.normalMapType===0,metalnessMap:ue,roughnessMap:D,anisotropy:M,anisotropyMap:pe,clearcoat:z,clearcoatMap:xe,clearcoatNormalMap:Ze,clearcoatRoughnessMap:re,dispersion:K,iridescence:te,iridescenceMap:ye,iridescenceThicknessMap:Pe,sheen:$,sheenColorMap:Ne,sheenRoughnessMap:Se,specularMap:je,specularColorMap:Ge,specularIntensityMap:ht,transmission:Ee,transmissionMap:F,thicknessMap:de,gradientMap:X,opaque:S.transparent===!1&&S.blending===1&&S.alphaToCoverage===!1,alphaMap:J,alphaTest:_e,alphaHash:me,combine:S.combine,mapUv:et&&g(S.map.channel),aoMapUv:I&&g(S.aoMap.channel),lightMapUv:ce&&g(S.lightMap.channel),bumpMapUv:ae&&g(S.bumpMap.channel),normalMapUv:we&&g(S.normalMap.channel),displacementMapUv:le&&g(S.displacementMap.channel),emissiveMapUv:Te&&g(S.emissiveMap.channel),metalnessMapUv:ue&&g(S.metalnessMap.channel),roughnessMapUv:D&&g(S.roughnessMap.channel),anisotropyMapUv:pe&&g(S.anisotropyMap.channel),clearcoatMapUv:xe&&g(S.clearcoatMap.channel),clearcoatNormalMapUv:Ze&&g(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:re&&g(S.clearcoatRoughnessMap.channel),iridescenceMapUv:ye&&g(S.iridescenceMap.channel),iridescenceThicknessMapUv:Pe&&g(S.iridescenceThicknessMap.channel),sheenColorMapUv:Ne&&g(S.sheenColorMap.channel),sheenRoughnessMapUv:Se&&g(S.sheenRoughnessMap.channel),specularMapUv:je&&g(S.specularMap.channel),specularColorMapUv:Ge&&g(S.specularColorMap.channel),specularIntensityMapUv:ht&&g(S.specularIntensityMap.channel),transmissionMapUv:F&&g(S.transmissionMap.channel),thicknessMapUv:de&&g(S.thicknessMap.channel),alphaMapUv:J&&g(S.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(we||M),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!H.attributes.uv&&(et||J),fog:!!B,useFog:S.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:ee,skinning:N.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:ne,morphTextureStride:ge,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:xt,decodeVideoTexture:et&&S.map.isVideoTexture===!0&&Qe.getTransfer(S.map.colorSpace)===ot,decodeVideoTextureEmissive:Te&&S.emissiveMap.isVideoTexture===!0&&Qe.getTransfer(S.emissiveMap.colorSpace)===ot,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===2,flipSided:S.side===1,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:ke&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ke&&S.extensions.multiDraw===!0||Ie)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Ot.vertexUv1s=l.has(1),Ot.vertexUv2s=l.has(2),Ot.vertexUv3s=l.has(3),l.clear(),Ot}function f(S){const v=[];if(S.shaderID?v.push(S.shaderID):(v.push(S.customVertexShaderID),v.push(S.customFragmentShaderID)),S.defines!==void 0)for(const R in S.defines)v.push(R),v.push(S.defines[R]);return S.isRawShaderMaterial===!1&&(b(v,S),T(v,S),v.push(i.outputColorSpace)),v.push(S.customProgramCacheKey),v.join()}function b(S,v){S.push(v.precision),S.push(v.outputColorSpace),S.push(v.envMapMode),S.push(v.envMapCubeUVHeight),S.push(v.mapUv),S.push(v.alphaMapUv),S.push(v.lightMapUv),S.push(v.aoMapUv),S.push(v.bumpMapUv),S.push(v.normalMapUv),S.push(v.displacementMapUv),S.push(v.emissiveMapUv),S.push(v.metalnessMapUv),S.push(v.roughnessMapUv),S.push(v.anisotropyMapUv),S.push(v.clearcoatMapUv),S.push(v.clearcoatNormalMapUv),S.push(v.clearcoatRoughnessMapUv),S.push(v.iridescenceMapUv),S.push(v.iridescenceThicknessMapUv),S.push(v.sheenColorMapUv),S.push(v.sheenRoughnessMapUv),S.push(v.specularMapUv),S.push(v.specularColorMapUv),S.push(v.specularIntensityMapUv),S.push(v.transmissionMapUv),S.push(v.thicknessMapUv),S.push(v.combine),S.push(v.fogExp2),S.push(v.sizeAttenuation),S.push(v.morphTargetsCount),S.push(v.morphAttributeCount),S.push(v.numDirLights),S.push(v.numPointLights),S.push(v.numSpotLights),S.push(v.numSpotLightMaps),S.push(v.numHemiLights),S.push(v.numRectAreaLights),S.push(v.numDirLightShadows),S.push(v.numPointLightShadows),S.push(v.numSpotLightShadows),S.push(v.numSpotLightShadowsWithMaps),S.push(v.numLightProbes),S.push(v.shadowMapType),S.push(v.toneMapping),S.push(v.numClippingPlanes),S.push(v.numClipIntersection),S.push(v.depthPacking)}function T(S,v){a.disableAll(),v.supportsVertexTextures&&a.enable(0),v.instancing&&a.enable(1),v.instancingColor&&a.enable(2),v.instancingMorph&&a.enable(3),v.matcap&&a.enable(4),v.envMap&&a.enable(5),v.normalMapObjectSpace&&a.enable(6),v.normalMapTangentSpace&&a.enable(7),v.clearcoat&&a.enable(8),v.iridescence&&a.enable(9),v.alphaTest&&a.enable(10),v.vertexColors&&a.enable(11),v.vertexAlphas&&a.enable(12),v.vertexUv1s&&a.enable(13),v.vertexUv2s&&a.enable(14),v.vertexUv3s&&a.enable(15),v.vertexTangents&&a.enable(16),v.anisotropy&&a.enable(17),v.alphaHash&&a.enable(18),v.batching&&a.enable(19),v.dispersion&&a.enable(20),v.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.reverseDepthBuffer&&a.enable(4),v.skinning&&a.enable(5),v.morphTargets&&a.enable(6),v.morphNormals&&a.enable(7),v.morphColors&&a.enable(8),v.premultipliedAlpha&&a.enable(9),v.shadowMapEnabled&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.decodeVideoTextureEmissive&&a.enable(20),v.alphaToCoverage&&a.enable(21),S.push(a.mask)}function x(S){const v=_[S.type];let R;if(v){const P=Pn[v];R=Kr.clone(P.uniforms)}else R=S.uniforms;return R}function y(S,v){let R;for(let P=0,N=u.length;P<N;P++){const B=u[P];if(B.cacheKey===v){R=B,++R.usedTimes;break}}return R===void 0&&(R=new K_(i,v,S,r),u.push(R)),R}function E(S){if(--S.usedTimes===0){const v=u.indexOf(S);u[v]=u[u.length-1],u.pop(),S.destroy()}}function A(S){c.remove(S)}function C(){c.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:x,acquireProgram:y,releaseProgram:E,releaseShaderCache:A,programs:u,dispose:C}}function ng(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function ig(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function zl(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Gl(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(h,d,m,_,g,p){let f=i[e];return f===void 0?(f={id:h.id,object:h,geometry:d,material:m,groupOrder:_,renderOrder:h.renderOrder,z:g,group:p},i[e]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=m,f.groupOrder=_,f.renderOrder=h.renderOrder,f.z=g,f.group=p),e++,f}function a(h,d,m,_,g,p){const f=o(h,d,m,_,g,p);m.transmission>0?n.push(f):m.transparent===!0?s.push(f):t.push(f)}function c(h,d,m,_,g,p){const f=o(h,d,m,_,g,p);m.transmission>0?n.unshift(f):m.transparent===!0?s.unshift(f):t.unshift(f)}function l(h,d){t.length>1&&t.sort(h||ig),n.length>1&&n.sort(d||zl),s.length>1&&s.sort(d||zl)}function u(){for(let h=e,d=i.length;h<d;h++){const m=i[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:u,sort:l}}function sg(){let i=new WeakMap;function e(n,s){const r=i.get(n);let o;return r===void 0?(o=new Gl,i.set(n,[o])):s>=r.length?(o=new Gl,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function rg(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new We};break;case"SpotLight":t={position:new U,direction:new U,color:new We,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new We,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new We,groundColor:new We};break;case"RectAreaLight":t={color:new We,position:new U,halfWidth:new U,halfHeight:new U};break}return i[e.id]=t,t}}}function og(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let ag=0;function cg(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function lg(i){const e=new rg,t=og(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new U);const s=new U,r=new vt,o=new vt;function a(l){let u=0,h=0,d=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let m=0,_=0,g=0,p=0,f=0,b=0,T=0,x=0,y=0,E=0,A=0;l.sort(cg);for(let S=0,v=l.length;S<v;S++){const R=l[S],P=R.color,N=R.intensity,B=R.distance,H=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)u+=P.r*N,h+=P.g*N,d+=P.b*N;else if(R.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(R.sh.coefficients[k],N);A++}else if(R.isDirectionalLight){const k=e.get(R);if(k.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const G=R.shadow,V=t.get(R);V.shadowIntensity=G.intensity,V.shadowBias=G.bias,V.shadowNormalBias=G.normalBias,V.shadowRadius=G.radius,V.shadowMapSize=G.mapSize,n.directionalShadow[m]=V,n.directionalShadowMap[m]=H,n.directionalShadowMatrix[m]=R.shadow.matrix,b++}n.directional[m]=k,m++}else if(R.isSpotLight){const k=e.get(R);k.position.setFromMatrixPosition(R.matrixWorld),k.color.copy(P).multiplyScalar(N),k.distance=B,k.coneCos=Math.cos(R.angle),k.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),k.decay=R.decay,n.spot[g]=k;const G=R.shadow;if(R.map&&(n.spotLightMap[y]=R.map,y++,G.updateMatrices(R),R.castShadow&&E++),n.spotLightMatrix[g]=G.matrix,R.castShadow){const V=t.get(R);V.shadowIntensity=G.intensity,V.shadowBias=G.bias,V.shadowNormalBias=G.normalBias,V.shadowRadius=G.radius,V.shadowMapSize=G.mapSize,n.spotShadow[g]=V,n.spotShadowMap[g]=H,x++}g++}else if(R.isRectAreaLight){const k=e.get(R);k.color.copy(P).multiplyScalar(N),k.halfWidth.set(R.width*.5,0,0),k.halfHeight.set(0,R.height*.5,0),n.rectArea[p]=k,p++}else if(R.isPointLight){const k=e.get(R);if(k.color.copy(R.color).multiplyScalar(R.intensity),k.distance=R.distance,k.decay=R.decay,R.castShadow){const G=R.shadow,V=t.get(R);V.shadowIntensity=G.intensity,V.shadowBias=G.bias,V.shadowNormalBias=G.normalBias,V.shadowRadius=G.radius,V.shadowMapSize=G.mapSize,V.shadowCameraNear=G.camera.near,V.shadowCameraFar=G.camera.far,n.pointShadow[_]=V,n.pointShadowMap[_]=H,n.pointShadowMatrix[_]=R.shadow.matrix,T++}n.point[_]=k,_++}else if(R.isHemisphereLight){const k=e.get(R);k.skyColor.copy(R.color).multiplyScalar(N),k.groundColor.copy(R.groundColor).multiplyScalar(N),n.hemi[f]=k,f++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=he.LTC_FLOAT_1,n.rectAreaLTC2=he.LTC_FLOAT_2):(n.rectAreaLTC1=he.LTC_HALF_1,n.rectAreaLTC2=he.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const C=n.hash;(C.directionalLength!==m||C.pointLength!==_||C.spotLength!==g||C.rectAreaLength!==p||C.hemiLength!==f||C.numDirectionalShadows!==b||C.numPointShadows!==T||C.numSpotShadows!==x||C.numSpotMaps!==y||C.numLightProbes!==A)&&(n.directional.length=m,n.spot.length=g,n.rectArea.length=p,n.point.length=_,n.hemi.length=f,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=T,n.pointShadowMap.length=T,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=T,n.spotLightMatrix.length=x+y-E,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=A,C.directionalLength=m,C.pointLength=_,C.spotLength=g,C.rectAreaLength=p,C.hemiLength=f,C.numDirectionalShadows=b,C.numPointShadows=T,C.numSpotShadows=x,C.numSpotMaps=y,C.numLightProbes=A,n.version=ag++)}function c(l,u){let h=0,d=0,m=0,_=0,g=0;const p=u.matrixWorldInverse;for(let f=0,b=l.length;f<b;f++){const T=l[f];if(T.isDirectionalLight){const x=n.directional[h];x.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(p),h++}else if(T.isSpotLight){const x=n.spot[m];x.position.setFromMatrixPosition(T.matrixWorld),x.position.applyMatrix4(p),x.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(p),m++}else if(T.isRectAreaLight){const x=n.rectArea[_];x.position.setFromMatrixPosition(T.matrixWorld),x.position.applyMatrix4(p),o.identity(),r.copy(T.matrixWorld),r.premultiply(p),o.extractRotation(r),x.halfWidth.set(T.width*.5,0,0),x.halfHeight.set(0,T.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),_++}else if(T.isPointLight){const x=n.point[d];x.position.setFromMatrixPosition(T.matrixWorld),x.position.applyMatrix4(p),d++}else if(T.isHemisphereLight){const x=n.hemi[g];x.direction.setFromMatrixPosition(T.matrixWorld),x.direction.transformDirection(p),g++}}}return{setup:a,setupView:c,state:n}}function Hl(i){const e=new lg(i),t=[],n=[];function s(u){l.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function ug(i){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new Hl(i),e.set(s,[a])):r>=o.length?(a=new Hl(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const hg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,dg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function fg(i,e,t){let n=new Ha;const s=new Ue,r=new Ue,o=new ct,a=new Nd({depthPacking:3201}),c=new Fd,l={},u=t.maxTextureSize,h={0:1,1:0,2:2},d=new kt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ue},radius:{value:4}},vertexShader:hg,fragmentShader:dg}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const _=new Un;_.setAttribute("position",new In(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Tn(_,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let f=this.type;this.render=function(E,A,C){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;const S=i.getRenderTarget(),v=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),P=i.state;P.setBlending(0),P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);const N=f!==3&&this.type===3,B=f===3&&this.type!==3;for(let H=0,k=E.length;H<k;H++){const G=E[H],V=G.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",G,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);const j=V.getFrameExtents();if(s.multiply(j),r.copy(V.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/j.x),s.x=r.x*j.x,V.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/j.y),s.y=r.y*j.y,V.mapSize.y=r.y)),V.map===null||N===!0||B===!0){const ne=this.type!==3?{minFilter:1003,magFilter:1003}:{};V.map!==null&&V.map.dispose(),V.map=new bn(s.x,s.y,ne),V.map.texture.name=G.name+".shadowMap",V.camera.updateProjectionMatrix()}i.setRenderTarget(V.map),i.clear();const Q=V.getViewportCount();for(let ne=0;ne<Q;ne++){const ge=V.getViewport(ne);o.set(r.x*ge.x,r.y*ge.y,r.x*ge.z,r.y*ge.w),P.viewport(o),V.updateMatrices(G,ne),n=V.getFrustum(),x(A,C,V.camera,G,this.type)}V.isPointLightShadow!==!0&&this.type===3&&b(V,C),V.needsUpdate=!1}f=this.type,p.needsUpdate=!1,i.setRenderTarget(S,v,R)};function b(E,A){const C=e.update(g);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,m.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new bn(s.x,s.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(A,null,C,d,g,null),m.uniforms.shadow_pass.value=E.mapPass.texture,m.uniforms.resolution.value=E.mapSize,m.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(A,null,C,m,g,null)}function T(E,A,C,S){let v=null;const R=C.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(R!==void 0)v=R;else if(v=C.isPointLight===!0?c:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const P=v.uuid,N=A.uuid;let B=l[P];B===void 0&&(B={},l[P]=B);let H=B[N];H===void 0&&(H=v.clone(),B[N]=H,A.addEventListener("dispose",y)),v=H}if(v.visible=A.visible,v.wireframe=A.wireframe,S===3?v.side=A.shadowSide!==null?A.shadowSide:A.side:v.side=A.shadowSide!==null?A.shadowSide:h[A.side],v.alphaMap=A.alphaMap,v.alphaTest=A.alphaTest,v.map=A.map,v.clipShadows=A.clipShadows,v.clippingPlanes=A.clippingPlanes,v.clipIntersection=A.clipIntersection,v.displacementMap=A.displacementMap,v.displacementScale=A.displacementScale,v.displacementBias=A.displacementBias,v.wireframeLinewidth=A.wireframeLinewidth,v.linewidth=A.linewidth,C.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const P=i.properties.get(v);P.light=C}return v}function x(E,A,C,S,v){if(E.visible===!1)return;if(E.layers.test(A.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&v===3)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,E.matrixWorld);const N=e.update(E),B=E.material;if(Array.isArray(B)){const H=N.groups;for(let k=0,G=H.length;k<G;k++){const V=H[k],j=B[V.materialIndex];if(j&&j.visible){const Q=T(E,j,S,v);E.onBeforeShadow(i,E,A,C,N,Q,V),i.renderBufferDirect(C,null,N,Q,E,V),E.onAfterShadow(i,E,A,C,N,Q,V)}}}else if(B.visible){const H=T(E,B,S,v);E.onBeforeShadow(i,E,A,C,N,H,null),i.renderBufferDirect(C,null,N,H,E,null),E.onAfterShadow(i,E,A,C,N,H,null)}}const P=E.children;for(let N=0,B=P.length;N<B;N++)x(P[N],A,C,S,v)}function y(E){E.target.removeEventListener("dispose",y);for(const C in l){const S=l[C],v=E.target.uuid;v in S&&(S[v].dispose(),delete S[v])}}}const pg={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3};function mg(i,e){function t(){let F=!1;const de=new ct;let X=null;const J=new ct(0,0,0,0);return{setMask:function(_e){X!==_e&&!F&&(i.colorMask(_e,_e,_e,_e),X=_e)},setLocked:function(_e){F=_e},setClear:function(_e,me,ke,xt,Ot){Ot===!0&&(_e*=xt,me*=xt,ke*=xt),de.set(_e,me,ke,xt),J.equals(de)===!1&&(i.clearColor(_e,me,ke,xt),J.copy(de))},reset:function(){F=!1,X=null,J.set(-1,0,0,0)}}}function n(){let F=!1,de=!1,X=null,J=null,_e=null;return{setReversed:function(me){if(de!==me){const ke=e.get("EXT_clip_control");de?ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.ZERO_TO_ONE_EXT):ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.NEGATIVE_ONE_TO_ONE_EXT);const xt=_e;_e=null,this.setClear(xt)}de=me},getReversed:function(){return de},setTest:function(me){me?se(i.DEPTH_TEST):ee(i.DEPTH_TEST)},setMask:function(me){X!==me&&!F&&(i.depthMask(me),X=me)},setFunc:function(me){if(de&&(me=pg[me]),J!==me){switch(me){case 0:i.depthFunc(i.NEVER);break;case 1:i.depthFunc(i.ALWAYS);break;case 2:i.depthFunc(i.LESS);break;case 3:i.depthFunc(i.LEQUAL);break;case 4:i.depthFunc(i.EQUAL);break;case 5:i.depthFunc(i.GEQUAL);break;case 6:i.depthFunc(i.GREATER);break;case 7:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}J=me}},setLocked:function(me){F=me},setClear:function(me){_e!==me&&(de&&(me=1-me),i.clearDepth(me),_e=me)},reset:function(){F=!1,X=null,J=null,_e=null,de=!1}}}function s(){let F=!1,de=null,X=null,J=null,_e=null,me=null,ke=null,xt=null,Ot=null;return{setTest:function(it){F||(it?se(i.STENCIL_TEST):ee(i.STENCIL_TEST))},setMask:function(it){de!==it&&!F&&(i.stencilMask(it),de=it)},setFunc:function(it,_n,zn){(X!==it||J!==_n||_e!==zn)&&(i.stencilFunc(it,_n,zn),X=it,J=_n,_e=zn)},setOp:function(it,_n,zn){(me!==it||ke!==_n||xt!==zn)&&(i.stencilOp(it,_n,zn),me=it,ke=_n,xt=zn)},setLocked:function(it){F=it},setClear:function(it){Ot!==it&&(i.clearStencil(it),Ot=it)},reset:function(){F=!1,de=null,X=null,J=null,_e=null,me=null,ke=null,xt=null,Ot=null}}}const r=new t,o=new n,a=new s,c=new WeakMap,l=new WeakMap;let u={},h={},d=new WeakMap,m=[],_=null,g=!1,p=null,f=null,b=null,T=null,x=null,y=null,E=null,A=new We(0,0,0),C=0,S=!1,v=null,R=null,P=null,N=null,B=null;const H=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,G=0;const V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(V)[1]),k=G>=1):V.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),k=G>=2);let j=null,Q={};const ne=i.getParameter(i.SCISSOR_BOX),ge=i.getParameter(i.VIEWPORT),Be=new ct().fromArray(ne),Y=new ct().fromArray(ge);function Z(F,de,X,J){const _e=new Uint8Array(4),me=i.createTexture();i.bindTexture(F,me),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ke=0;ke<X;ke++)F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?i.texImage3D(de,0,i.RGBA,1,1,J,0,i.RGBA,i.UNSIGNED_BYTE,_e):i.texImage2D(de+ke,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,_e);return me}const oe={};oe[i.TEXTURE_2D]=Z(i.TEXTURE_2D,i.TEXTURE_2D,1),oe[i.TEXTURE_CUBE_MAP]=Z(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),oe[i.TEXTURE_2D_ARRAY]=Z(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),oe[i.TEXTURE_3D]=Z(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),se(i.DEPTH_TEST),o.setFunc(3),ae(!1),we(1),se(i.CULL_FACE),I(0);function se(F){u[F]!==!0&&(i.enable(F),u[F]=!0)}function ee(F){u[F]!==!1&&(i.disable(F),u[F]=!1)}function Ce(F,de){return h[F]!==de?(i.bindFramebuffer(F,de),h[F]=de,F===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=de),F===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=de),!0):!1}function Ie(F,de){let X=m,J=!1;if(F){X=d.get(de),X===void 0&&(X=[],d.set(de,X));const _e=F.textures;if(X.length!==_e.length||X[0]!==i.COLOR_ATTACHMENT0){for(let me=0,ke=_e.length;me<ke;me++)X[me]=i.COLOR_ATTACHMENT0+me;X.length=_e.length,J=!0}}else X[0]!==i.BACK&&(X[0]=i.BACK,J=!0);J&&i.drawBuffers(X)}function et(F){return _!==F?(i.useProgram(F),_=F,!0):!1}const ze={100:i.FUNC_ADD,101:i.FUNC_SUBTRACT,102:i.FUNC_REVERSE_SUBTRACT};ze[103]=i.MIN,ze[104]=i.MAX;const _t={200:i.ZERO,201:i.ONE,202:i.SRC_COLOR,204:i.SRC_ALPHA,210:i.SRC_ALPHA_SATURATE,208:i.DST_COLOR,206:i.DST_ALPHA,203:i.ONE_MINUS_SRC_COLOR,205:i.ONE_MINUS_SRC_ALPHA,209:i.ONE_MINUS_DST_COLOR,207:i.ONE_MINUS_DST_ALPHA,211:i.CONSTANT_COLOR,212:i.ONE_MINUS_CONSTANT_COLOR,213:i.CONSTANT_ALPHA,214:i.ONE_MINUS_CONSTANT_ALPHA};function I(F,de,X,J,_e,me,ke,xt,Ot,it){if(F===0){g===!0&&(ee(i.BLEND),g=!1);return}if(g===!1&&(se(i.BLEND),g=!0),F!==5){if(F!==p||it!==S){if((f!==100||x!==100)&&(i.blendEquation(i.FUNC_ADD),f=100,x=100),it)switch(F){case 1:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case 2:i.blendFunc(i.ONE,i.ONE);break;case 3:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case 4:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case 1:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case 2:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case 3:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case 4:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}b=null,T=null,y=null,E=null,A.set(0,0,0),C=0,p=F,S=it}return}_e=_e||de,me=me||X,ke=ke||J,(de!==f||_e!==x)&&(i.blendEquationSeparate(ze[de],ze[_e]),f=de,x=_e),(X!==b||J!==T||me!==y||ke!==E)&&(i.blendFuncSeparate(_t[X],_t[J],_t[me],_t[ke]),b=X,T=J,y=me,E=ke),(xt.equals(A)===!1||Ot!==C)&&(i.blendColor(xt.r,xt.g,xt.b,Ot),A.copy(xt),C=Ot),p=F,S=!1}function ce(F,de){F.side===2?ee(i.CULL_FACE):se(i.CULL_FACE);let X=F.side===1;de&&(X=!X),ae(X),F.blending===1&&F.transparent===!1?I(0):I(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),r.setMask(F.colorWrite);const J=F.stencilWrite;a.setTest(J),J&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Te(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?se(i.SAMPLE_ALPHA_TO_COVERAGE):ee(i.SAMPLE_ALPHA_TO_COVERAGE)}function ae(F){v!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),v=F)}function we(F){F!==0?(se(i.CULL_FACE),F!==R&&(F===1?i.cullFace(i.BACK):F===2?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ee(i.CULL_FACE),R=F}function le(F){F!==P&&(k&&i.lineWidth(F),P=F)}function Te(F,de,X){F?(se(i.POLYGON_OFFSET_FILL),(N!==de||B!==X)&&(i.polygonOffset(de,X),N=de,B=X)):ee(i.POLYGON_OFFSET_FILL)}function ue(F){F?se(i.SCISSOR_TEST):ee(i.SCISSOR_TEST)}function D(F){F===void 0&&(F=i.TEXTURE0+H-1),j!==F&&(i.activeTexture(F),j=F)}function M(F,de,X){X===void 0&&(j===null?X=i.TEXTURE0+H-1:X=j);let J=Q[X];J===void 0&&(J={type:void 0,texture:void 0},Q[X]=J),(J.type!==F||J.texture!==de)&&(j!==X&&(i.activeTexture(X),j=X),i.bindTexture(F,de||oe[F]),J.type=F,J.texture=de)}function z(){const F=Q[j];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function K(){try{i.compressedTexImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function te(){try{i.compressedTexImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function $(){try{i.texSubImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ee(){try{i.texSubImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function pe(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function xe(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ze(){try{i.texStorage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function re(){try{i.texStorage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ye(){try{i.texImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Pe(){try{i.texImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ne(F){Be.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),Be.copy(F))}function Se(F){Y.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),Y.copy(F))}function je(F,de){let X=l.get(de);X===void 0&&(X=new WeakMap,l.set(de,X));let J=X.get(F);J===void 0&&(J=i.getUniformBlockIndex(de,F.name),X.set(F,J))}function Ge(F,de){const J=l.get(de).get(F);c.get(de)!==J&&(i.uniformBlockBinding(de,J,F.__bindingPointIndex),c.set(de,J))}function ht(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},j=null,Q={},h={},d=new WeakMap,m=[],_=null,g=!1,p=null,f=null,b=null,T=null,x=null,y=null,E=null,A=new We(0,0,0),C=0,S=!1,v=null,R=null,P=null,N=null,B=null,Be.set(0,0,i.canvas.width,i.canvas.height),Y.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:se,disable:ee,bindFramebuffer:Ce,drawBuffers:Ie,useProgram:et,setBlending:I,setMaterial:ce,setFlipSided:ae,setCullFace:we,setLineWidth:le,setPolygonOffset:Te,setScissorTest:ue,activeTexture:D,bindTexture:M,unbindTexture:z,compressedTexImage2D:K,compressedTexImage3D:te,texImage2D:ye,texImage3D:Pe,updateUBOMapping:je,uniformBlockBinding:Ge,texStorage2D:Ze,texStorage3D:re,texSubImage2D:$,texSubImage3D:Ee,compressedTexSubImage2D:pe,compressedTexSubImage3D:xe,scissor:Ne,viewport:Se,reset:ht}}function _g(i,e,t,n,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ue,u=new WeakMap;let h;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(D,M){return m?new OffscreenCanvas(D,M):$r("canvas")}function g(D,M,z){let K=1;const te=ue(D);if((te.width>z||te.height>z)&&(K=z/Math.max(te.width,te.height)),K<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const $=Math.floor(K*te.width),Ee=Math.floor(K*te.height);h===void 0&&(h=_($,Ee));const pe=M?_($,Ee):h;return pe.width=$,pe.height=Ee,pe.getContext("2d").drawImage(D,0,0,$,Ee),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+$+"x"+Ee+")."),pe}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),D;return D}function p(D){return D.generateMipmaps}function f(D){i.generateMipmap(D)}function b(D){return D.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?i.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(D,M,z,K,te=!1){if(D!==null){if(i[D]!==void 0)return i[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let $=M;if(M===i.RED&&(z===i.FLOAT&&($=i.R32F),z===i.HALF_FLOAT&&($=i.R16F),z===i.UNSIGNED_BYTE&&($=i.R8)),M===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&($=i.R8UI),z===i.UNSIGNED_SHORT&&($=i.R16UI),z===i.UNSIGNED_INT&&($=i.R32UI),z===i.BYTE&&($=i.R8I),z===i.SHORT&&($=i.R16I),z===i.INT&&($=i.R32I)),M===i.RG&&(z===i.FLOAT&&($=i.RG32F),z===i.HALF_FLOAT&&($=i.RG16F),z===i.UNSIGNED_BYTE&&($=i.RG8)),M===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&($=i.RG8UI),z===i.UNSIGNED_SHORT&&($=i.RG16UI),z===i.UNSIGNED_INT&&($=i.RG32UI),z===i.BYTE&&($=i.RG8I),z===i.SHORT&&($=i.RG16I),z===i.INT&&($=i.RG32I)),M===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&($=i.RGB8UI),z===i.UNSIGNED_SHORT&&($=i.RGB16UI),z===i.UNSIGNED_INT&&($=i.RGB32UI),z===i.BYTE&&($=i.RGB8I),z===i.SHORT&&($=i.RGB16I),z===i.INT&&($=i.RGB32I)),M===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&($=i.RGBA8UI),z===i.UNSIGNED_SHORT&&($=i.RGBA16UI),z===i.UNSIGNED_INT&&($=i.RGBA32UI),z===i.BYTE&&($=i.RGBA8I),z===i.SHORT&&($=i.RGBA16I),z===i.INT&&($=i.RGBA32I)),M===i.RGB&&z===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),M===i.RGBA){const Ee=te?Zr:Qe.getTransfer(K);z===i.FLOAT&&($=i.RGBA32F),z===i.HALF_FLOAT&&($=i.RGBA16F),z===i.UNSIGNED_BYTE&&($=Ee===ot?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function x(D,M){let z;return D?M===null||M===1014||M===1020?z=i.DEPTH24_STENCIL8:M===1015?z=i.DEPTH32F_STENCIL8:M===1012&&(z=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===1014||M===1020?z=i.DEPTH_COMPONENT24:M===1015?z=i.DEPTH_COMPONENT32F:M===1012&&(z=i.DEPTH_COMPONENT16),z}function y(D,M){return p(D)===!0||D.isFramebufferTexture&&D.minFilter!==1003&&D.minFilter!==1006?Math.log2(Math.max(M.width,M.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?M.mipmaps.length:1}function E(D){const M=D.target;M.removeEventListener("dispose",E),C(M),M.isVideoTexture&&u.delete(M)}function A(D){const M=D.target;M.removeEventListener("dispose",A),v(M)}function C(D){const M=n.get(D);if(M.__webglInit===void 0)return;const z=D.source,K=d.get(z);if(K){const te=K[M.__cacheKey];te.usedTimes--,te.usedTimes===0&&S(D),Object.keys(K).length===0&&d.delete(z)}n.remove(D)}function S(D){const M=n.get(D);i.deleteTexture(M.__webglTexture);const z=D.source,K=d.get(z);delete K[M.__cacheKey],o.memory.textures--}function v(D){const M=n.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),n.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(M.__webglFramebuffer[K]))for(let te=0;te<M.__webglFramebuffer[K].length;te++)i.deleteFramebuffer(M.__webglFramebuffer[K][te]);else i.deleteFramebuffer(M.__webglFramebuffer[K]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[K])}else{if(Array.isArray(M.__webglFramebuffer))for(let K=0;K<M.__webglFramebuffer.length;K++)i.deleteFramebuffer(M.__webglFramebuffer[K]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let K=0;K<M.__webglColorRenderbuffer.length;K++)M.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[K]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const z=D.textures;for(let K=0,te=z.length;K<te;K++){const $=n.get(z[K]);$.__webglTexture&&(i.deleteTexture($.__webglTexture),o.memory.textures--),n.remove(z[K])}n.remove(D)}let R=0;function P(){R=0}function N(){const D=R;return D>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+s.maxTextures),R+=1,D}function B(D){const M=[];return M.push(D.wrapS),M.push(D.wrapT),M.push(D.wrapR||0),M.push(D.magFilter),M.push(D.minFilter),M.push(D.anisotropy),M.push(D.internalFormat),M.push(D.format),M.push(D.type),M.push(D.generateMipmaps),M.push(D.premultiplyAlpha),M.push(D.flipY),M.push(D.unpackAlignment),M.push(D.colorSpace),M.join()}function H(D,M){const z=n.get(D);if(D.isVideoTexture&&le(D),D.isRenderTargetTexture===!1&&D.version>0&&z.__version!==D.version){const K=D.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(z,D,M);return}}t.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+M)}function k(D,M){const z=n.get(D);if(D.version>0&&z.__version!==D.version){Y(z,D,M);return}t.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+M)}function G(D,M){const z=n.get(D);if(D.version>0&&z.__version!==D.version){Y(z,D,M);return}t.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+M)}function V(D,M){const z=n.get(D);if(D.version>0&&z.__version!==D.version){Z(z,D,M);return}t.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+M)}const j={1e3:i.REPEAT,1001:i.CLAMP_TO_EDGE,1002:i.MIRRORED_REPEAT},Q={1003:i.NEAREST,1004:i.NEAREST_MIPMAP_NEAREST,1005:i.NEAREST_MIPMAP_LINEAR,1006:i.LINEAR,1007:i.LINEAR_MIPMAP_NEAREST,1008:i.LINEAR_MIPMAP_LINEAR},ne={512:i.NEVER,519:i.ALWAYS,513:i.LESS,515:i.LEQUAL,514:i.EQUAL,518:i.GEQUAL,516:i.GREATER,517:i.NOTEQUAL};function ge(D,M){if(M.type===1015&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===1006||M.magFilter===1007||M.magFilter===1005||M.magFilter===1008||M.minFilter===1006||M.minFilter===1007||M.minFilter===1005||M.minFilter===1008)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(D,i.TEXTURE_WRAP_S,j[M.wrapS]),i.texParameteri(D,i.TEXTURE_WRAP_T,j[M.wrapT]),(D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY)&&i.texParameteri(D,i.TEXTURE_WRAP_R,j[M.wrapR]),i.texParameteri(D,i.TEXTURE_MAG_FILTER,Q[M.magFilter]),i.texParameteri(D,i.TEXTURE_MIN_FILTER,Q[M.minFilter]),M.compareFunction&&(i.texParameteri(D,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(D,i.TEXTURE_COMPARE_FUNC,ne[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===1003||M.minFilter!==1005&&M.minFilter!==1008||M.type===1015&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");i.texParameterf(D,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function Be(D,M){let z=!1;D.__webglInit===void 0&&(D.__webglInit=!0,M.addEventListener("dispose",E));const K=M.source;let te=d.get(K);te===void 0&&(te={},d.set(K,te));const $=B(M);if($!==D.__cacheKey){te[$]===void 0&&(te[$]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,z=!0),te[$].usedTimes++;const Ee=te[D.__cacheKey];Ee!==void 0&&(te[D.__cacheKey].usedTimes--,Ee.usedTimes===0&&S(M)),D.__cacheKey=$,D.__webglTexture=te[$].texture}return z}function Y(D,M,z){let K=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(K=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(K=i.TEXTURE_3D);const te=Be(D,M),$=M.source;t.bindTexture(K,D.__webglTexture,i.TEXTURE0+z);const Ee=n.get($);if($.version!==Ee.__version||te===!0){t.activeTexture(i.TEXTURE0+z);const pe=Qe.getPrimaries(Qe.workingColorSpace),xe=M.colorSpace===""?null:Qe.getPrimaries(M.colorSpace),Ze=M.colorSpace===""||pe===xe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ze);let re=g(M.image,!1,s.maxTextureSize);re=Te(M,re);const ye=r.convert(M.format,M.colorSpace),Pe=r.convert(M.type);let Ne=T(M.internalFormat,ye,Pe,M.colorSpace,M.isVideoTexture);ge(K,M);let Se;const je=M.mipmaps,Ge=M.isVideoTexture!==!0,ht=Ee.__version===void 0||te===!0,F=$.dataReady,de=y(M,re);if(M.isDepthTexture)Ne=x(M.format===1027,M.type),ht&&(Ge?t.texStorage2D(i.TEXTURE_2D,1,Ne,re.width,re.height):t.texImage2D(i.TEXTURE_2D,0,Ne,re.width,re.height,0,ye,Pe,null));else if(M.isDataTexture)if(je.length>0){Ge&&ht&&t.texStorage2D(i.TEXTURE_2D,de,Ne,je[0].width,je[0].height);for(let X=0,J=je.length;X<J;X++)Se=je[X],Ge?F&&t.texSubImage2D(i.TEXTURE_2D,X,0,0,Se.width,Se.height,ye,Pe,Se.data):t.texImage2D(i.TEXTURE_2D,X,Ne,Se.width,Se.height,0,ye,Pe,Se.data);M.generateMipmaps=!1}else Ge?(ht&&t.texStorage2D(i.TEXTURE_2D,de,Ne,re.width,re.height),F&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,re.width,re.height,ye,Pe,re.data)):t.texImage2D(i.TEXTURE_2D,0,Ne,re.width,re.height,0,ye,Pe,re.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Ge&&ht&&t.texStorage3D(i.TEXTURE_2D_ARRAY,de,Ne,je[0].width,je[0].height,re.depth);for(let X=0,J=je.length;X<J;X++)if(Se=je[X],M.format!==1023)if(ye!==null)if(Ge){if(F)if(M.layerUpdates.size>0){const _e=xl(Se.width,Se.height,M.format,M.type);for(const me of M.layerUpdates){const ke=Se.data.subarray(me*_e/Se.data.BYTES_PER_ELEMENT,(me+1)*_e/Se.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,me,Se.width,Se.height,1,ye,ke)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,Se.width,Se.height,re.depth,ye,Se.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,X,Ne,Se.width,Se.height,re.depth,0,Se.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ge?F&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,Se.width,Se.height,re.depth,ye,Pe,Se.data):t.texImage3D(i.TEXTURE_2D_ARRAY,X,Ne,Se.width,Se.height,re.depth,0,ye,Pe,Se.data)}else{Ge&&ht&&t.texStorage2D(i.TEXTURE_2D,de,Ne,je[0].width,je[0].height);for(let X=0,J=je.length;X<J;X++)Se=je[X],M.format!==1023?ye!==null?Ge?F&&t.compressedTexSubImage2D(i.TEXTURE_2D,X,0,0,Se.width,Se.height,ye,Se.data):t.compressedTexImage2D(i.TEXTURE_2D,X,Ne,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?F&&t.texSubImage2D(i.TEXTURE_2D,X,0,0,Se.width,Se.height,ye,Pe,Se.data):t.texImage2D(i.TEXTURE_2D,X,Ne,Se.width,Se.height,0,ye,Pe,Se.data)}else if(M.isDataArrayTexture)if(Ge){if(ht&&t.texStorage3D(i.TEXTURE_2D_ARRAY,de,Ne,re.width,re.height,re.depth),F)if(M.layerUpdates.size>0){const X=xl(re.width,re.height,M.format,M.type);for(const J of M.layerUpdates){const _e=re.data.subarray(J*X/re.data.BYTES_PER_ELEMENT,(J+1)*X/re.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,J,re.width,re.height,1,ye,Pe,_e)}M.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,ye,Pe,re.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ne,re.width,re.height,re.depth,0,ye,Pe,re.data);else if(M.isData3DTexture)Ge?(ht&&t.texStorage3D(i.TEXTURE_3D,de,Ne,re.width,re.height,re.depth),F&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,ye,Pe,re.data)):t.texImage3D(i.TEXTURE_3D,0,Ne,re.width,re.height,re.depth,0,ye,Pe,re.data);else if(M.isFramebufferTexture){if(ht)if(Ge)t.texStorage2D(i.TEXTURE_2D,de,Ne,re.width,re.height);else{let X=re.width,J=re.height;for(let _e=0;_e<de;_e++)t.texImage2D(i.TEXTURE_2D,_e,Ne,X,J,0,ye,Pe,null),X>>=1,J>>=1}}else if(je.length>0){if(Ge&&ht){const X=ue(je[0]);t.texStorage2D(i.TEXTURE_2D,de,Ne,X.width,X.height)}for(let X=0,J=je.length;X<J;X++)Se=je[X],Ge?F&&t.texSubImage2D(i.TEXTURE_2D,X,0,0,ye,Pe,Se):t.texImage2D(i.TEXTURE_2D,X,Ne,ye,Pe,Se);M.generateMipmaps=!1}else if(Ge){if(ht){const X=ue(re);t.texStorage2D(i.TEXTURE_2D,de,Ne,X.width,X.height)}F&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ye,Pe,re)}else t.texImage2D(i.TEXTURE_2D,0,Ne,ye,Pe,re);p(M)&&f(K),Ee.__version=$.version,M.onUpdate&&M.onUpdate(M)}D.__version=M.version}function Z(D,M,z){if(M.image.length!==6)return;const K=Be(D,M),te=M.source;t.bindTexture(i.TEXTURE_CUBE_MAP,D.__webglTexture,i.TEXTURE0+z);const $=n.get(te);if(te.version!==$.__version||K===!0){t.activeTexture(i.TEXTURE0+z);const Ee=Qe.getPrimaries(Qe.workingColorSpace),pe=M.colorSpace===""?null:Qe.getPrimaries(M.colorSpace),xe=M.colorSpace===""||Ee===pe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const Ze=M.isCompressedTexture||M.image[0].isCompressedTexture,re=M.image[0]&&M.image[0].isDataTexture,ye=[];for(let J=0;J<6;J++)!Ze&&!re?ye[J]=g(M.image[J],!0,s.maxCubemapSize):ye[J]=re?M.image[J].image:M.image[J],ye[J]=Te(M,ye[J]);const Pe=ye[0],Ne=r.convert(M.format,M.colorSpace),Se=r.convert(M.type),je=T(M.internalFormat,Ne,Se,M.colorSpace),Ge=M.isVideoTexture!==!0,ht=$.__version===void 0||K===!0,F=te.dataReady;let de=y(M,Pe);ge(i.TEXTURE_CUBE_MAP,M);let X;if(Ze){Ge&&ht&&t.texStorage2D(i.TEXTURE_CUBE_MAP,de,je,Pe.width,Pe.height);for(let J=0;J<6;J++){X=ye[J].mipmaps;for(let _e=0;_e<X.length;_e++){const me=X[_e];M.format!==1023?Ne!==null?Ge?F&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,_e,0,0,me.width,me.height,Ne,me.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,_e,je,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ge?F&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,_e,0,0,me.width,me.height,Ne,Se,me.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,_e,je,me.width,me.height,0,Ne,Se,me.data)}}}else{if(X=M.mipmaps,Ge&&ht){X.length>0&&de++;const J=ue(ye[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,de,je,J.width,J.height)}for(let J=0;J<6;J++)if(re){Ge?F&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,ye[J].width,ye[J].height,Ne,Se,ye[J].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,je,ye[J].width,ye[J].height,0,Ne,Se,ye[J].data);for(let _e=0;_e<X.length;_e++){const ke=X[_e].image[J].image;Ge?F&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,_e+1,0,0,ke.width,ke.height,Ne,Se,ke.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,_e+1,je,ke.width,ke.height,0,Ne,Se,ke.data)}}else{Ge?F&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Ne,Se,ye[J]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,je,Ne,Se,ye[J]);for(let _e=0;_e<X.length;_e++){const me=X[_e];Ge?F&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,_e+1,0,0,Ne,Se,me.image[J]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,_e+1,je,Ne,Se,me.image[J])}}}p(M)&&f(i.TEXTURE_CUBE_MAP),$.__version=te.version,M.onUpdate&&M.onUpdate(M)}D.__version=M.version}function oe(D,M,z,K,te,$){const Ee=r.convert(z.format,z.colorSpace),pe=r.convert(z.type),xe=T(z.internalFormat,Ee,pe,z.colorSpace),Ze=n.get(M),re=n.get(z);if(re.__renderTarget=M,!Ze.__hasExternalTextures){const ye=Math.max(1,M.width>>$),Pe=Math.max(1,M.height>>$);te===i.TEXTURE_3D||te===i.TEXTURE_2D_ARRAY?t.texImage3D(te,$,xe,ye,Pe,M.depth,0,Ee,pe,null):t.texImage2D(te,$,xe,ye,Pe,0,Ee,pe,null)}t.bindFramebuffer(i.FRAMEBUFFER,D),we(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,te,re.__webglTexture,0,ae(M)):(te===i.TEXTURE_2D||te>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,K,te,re.__webglTexture,$),t.bindFramebuffer(i.FRAMEBUFFER,null)}function se(D,M,z){if(i.bindRenderbuffer(i.RENDERBUFFER,D),M.depthBuffer){const K=M.depthTexture,te=K&&K.isDepthTexture?K.type:null,$=x(M.stencilBuffer,te),Ee=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pe=ae(M);we(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,pe,$,M.width,M.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,pe,$,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,$,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ee,i.RENDERBUFFER,D)}else{const K=M.textures;for(let te=0;te<K.length;te++){const $=K[te],Ee=r.convert($.format,$.colorSpace),pe=r.convert($.type),xe=T($.internalFormat,Ee,pe,$.colorSpace),Ze=ae(M);z&&we(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ze,xe,M.width,M.height):we(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ze,xe,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,xe,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ee(D,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,D),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=n.get(M.depthTexture);K.__renderTarget=M,(!K.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),H(M.depthTexture,0);const te=K.__webglTexture,$=ae(M);if(M.depthTexture.format===1026)we(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,te,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,te,0);else if(M.depthTexture.format===1027)we(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,te,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function Ce(D){const M=n.get(D),z=D.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==D.depthTexture){const K=D.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),K){const te=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,K.removeEventListener("dispose",te)};K.addEventListener("dispose",te),M.__depthDisposeCallback=te}M.__boundDepthTexture=K}if(D.depthTexture&&!M.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");ee(M.__webglFramebuffer,D)}else if(z){M.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[K]),M.__webglDepthbuffer[K]===void 0)M.__webglDepthbuffer[K]=i.createRenderbuffer(),se(M.__webglDepthbuffer[K],D,!1);else{const te=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=M.__webglDepthbuffer[K];i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,te,i.RENDERBUFFER,$)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),se(M.__webglDepthbuffer,D,!1);else{const K=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,te=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,te),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,te)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ie(D,M,z){const K=n.get(D);M!==void 0&&oe(K.__webglFramebuffer,D,D.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&Ce(D)}function et(D){const M=D.texture,z=n.get(D),K=n.get(M);D.addEventListener("dispose",A);const te=D.textures,$=D.isWebGLCubeRenderTarget===!0,Ee=te.length>1;if(Ee||(K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture()),K.__version=M.version,o.memory.textures++),$){z.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(M.mipmaps&&M.mipmaps.length>0){z.__webglFramebuffer[pe]=[];for(let xe=0;xe<M.mipmaps.length;xe++)z.__webglFramebuffer[pe][xe]=i.createFramebuffer()}else z.__webglFramebuffer[pe]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){z.__webglFramebuffer=[];for(let pe=0;pe<M.mipmaps.length;pe++)z.__webglFramebuffer[pe]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(Ee)for(let pe=0,xe=te.length;pe<xe;pe++){const Ze=n.get(te[pe]);Ze.__webglTexture===void 0&&(Ze.__webglTexture=i.createTexture(),o.memory.textures++)}if(D.samples>0&&we(D)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let pe=0;pe<te.length;pe++){const xe=te[pe];z.__webglColorRenderbuffer[pe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[pe]);const Ze=r.convert(xe.format,xe.colorSpace),re=r.convert(xe.type),ye=T(xe.internalFormat,Ze,re,xe.colorSpace,D.isXRRenderTarget===!0),Pe=ae(D);i.renderbufferStorageMultisample(i.RENDERBUFFER,Pe,ye,D.width,D.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.RENDERBUFFER,z.__webglColorRenderbuffer[pe])}i.bindRenderbuffer(i.RENDERBUFFER,null),D.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),se(z.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if($){t.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),ge(i.TEXTURE_CUBE_MAP,M);for(let pe=0;pe<6;pe++)if(M.mipmaps&&M.mipmaps.length>0)for(let xe=0;xe<M.mipmaps.length;xe++)oe(z.__webglFramebuffer[pe][xe],D,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,xe);else oe(z.__webglFramebuffer[pe],D,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);p(M)&&f(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ee){for(let pe=0,xe=te.length;pe<xe;pe++){const Ze=te[pe],re=n.get(Ze);t.bindTexture(i.TEXTURE_2D,re.__webglTexture),ge(i.TEXTURE_2D,Ze),oe(z.__webglFramebuffer,D,Ze,i.COLOR_ATTACHMENT0+pe,i.TEXTURE_2D,0),p(Ze)&&f(i.TEXTURE_2D)}t.unbindTexture()}else{let pe=i.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(pe=D.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(pe,K.__webglTexture),ge(pe,M),M.mipmaps&&M.mipmaps.length>0)for(let xe=0;xe<M.mipmaps.length;xe++)oe(z.__webglFramebuffer[xe],D,M,i.COLOR_ATTACHMENT0,pe,xe);else oe(z.__webglFramebuffer,D,M,i.COLOR_ATTACHMENT0,pe,0);p(M)&&f(pe),t.unbindTexture()}D.depthBuffer&&Ce(D)}function ze(D){const M=D.textures;for(let z=0,K=M.length;z<K;z++){const te=M[z];if(p(te)){const $=b(D),Ee=n.get(te).__webglTexture;t.bindTexture($,Ee),f($),t.unbindTexture()}}}const _t=[],I=[];function ce(D){if(D.samples>0){if(we(D)===!1){const M=D.textures,z=D.width,K=D.height;let te=i.COLOR_BUFFER_BIT;const $=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ee=n.get(D),pe=M.length>1;if(pe)for(let xe=0;xe<M.length;xe++)t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let xe=0;xe<M.length;xe++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(te|=i.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(te|=i.STENCIL_BUFFER_BIT)),pe){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ee.__webglColorRenderbuffer[xe]);const Ze=n.get(M[xe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ze,0)}i.blitFramebuffer(0,0,z,K,0,0,z,K,te,i.NEAREST),c===!0&&(_t.length=0,I.length=0,_t.push(i.COLOR_ATTACHMENT0+xe),D.depthBuffer&&D.resolveDepthBuffer===!1&&(_t.push($),I.push($),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,I)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,_t))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),pe)for(let xe=0;xe<M.length;xe++){t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.RENDERBUFFER,Ee.__webglColorRenderbuffer[xe]);const Ze=n.get(M[xe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.TEXTURE_2D,Ze,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&c){const M=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function ae(D){return Math.min(s.maxSamples,D.samples)}function we(D){const M=n.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function le(D){const M=o.render.frame;u.get(D)!==M&&(u.set(D,M),D.update())}function Te(D,M){const z=D.colorSpace,K=D.format,te=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||z!==gs&&z!==""&&(Qe.getTransfer(z)===ot?(K!==1023||te!==1009)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),M}function ue(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(l.width=D.naturalWidth||D.width,l.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(l.width=D.displayWidth,l.height=D.displayHeight):(l.width=D.width,l.height=D.height),l}this.allocateTextureUnit=N,this.resetTextureUnits=P,this.setTexture2D=H,this.setTexture2DArray=k,this.setTexture3D=G,this.setTextureCube=V,this.rebindTextures=Ie,this.setupRenderTarget=et,this.updateRenderTargetMipmap=ze,this.updateMultisampleRenderTarget=ce,this.setupDepthRenderbuffer=Ce,this.setupFrameBufferTexture=oe,this.useMultisampledRTT=we}function gg(i,e){function t(n,s=""){let r;const o=Qe.getTransfer(s);if(n===1009)return i.UNSIGNED_BYTE;if(n===1017)return i.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return i.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===1010)return i.BYTE;if(n===1011)return i.SHORT;if(n===1012)return i.UNSIGNED_SHORT;if(n===1013)return i.INT;if(n===1014)return i.UNSIGNED_INT;if(n===1015)return i.FLOAT;if(n===1016)return i.HALF_FLOAT;if(n===1021)return i.ALPHA;if(n===1022)return i.RGB;if(n===1023)return i.RGBA;if(n===1024)return i.LUMINANCE;if(n===1025)return i.LUMINANCE_ALPHA;if(n===1026)return i.DEPTH_COMPONENT;if(n===1027)return i.DEPTH_STENCIL;if(n===1028)return i.RED;if(n===1029)return i.RED_INTEGER;if(n===1030)return i.RG;if(n===1031)return i.RG_INTEGER;if(n===1033)return i.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779)if(o===ot)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===33776)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===33776)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===35840||n===35841||n===35842||n===35843)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===35840)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===36196||n===37492||n===37496)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===36196||n===37492)return o===ot?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===37496)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===37808)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===36492||n===36494||n===36495)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===36492)return o===ot?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===36283||n===36284||n===36285||n===36286)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===36492)return r.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===1020?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const vg={type:"move"};class Sa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Lr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Lr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Lr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const g of e.hand.values()){const p=t.getJointPose(g,n),f=this._getHandJoint(l,g);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),m=.02,_=.005;l.inputState.pinching&&d>m+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=m-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(vg)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Lr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const xg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,yg=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Sg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new Qt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new kt({vertexShader:xg,fragmentShader:yg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Tn(new go(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Mg extends As{constructor(e,t){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,d=null,m=null,_=null;const g=new Sg,p=t.getContextAttributes();let f=null,b=null;const T=[],x=[],y=new Ue;let E=null;const A=new rn;A.viewport=new ct;const C=new rn;C.viewport=new ct;const S=[A,C],v=new zd;let R=null,P=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let Z=T[Y];return Z===void 0&&(Z=new Sa,T[Y]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(Y){let Z=T[Y];return Z===void 0&&(Z=new Sa,T[Y]=Z),Z.getGripSpace()},this.getHand=function(Y){let Z=T[Y];return Z===void 0&&(Z=new Sa,T[Y]=Z),Z.getHandSpace()};function N(Y){const Z=x.indexOf(Y.inputSource);if(Z===-1)return;const oe=T[Z];oe!==void 0&&(oe.update(Y.inputSource,Y.frame,l||o),oe.dispatchEvent({type:Y.type,data:Y.inputSource}))}function B(){s.removeEventListener("select",N),s.removeEventListener("selectstart",N),s.removeEventListener("selectend",N),s.removeEventListener("squeeze",N),s.removeEventListener("squeezestart",N),s.removeEventListener("squeezeend",N),s.removeEventListener("end",B),s.removeEventListener("inputsourceschange",H);for(let Y=0;Y<T.length;Y++){const Z=x[Y];Z!==null&&(x[Y]=null,T[Y].disconnect(Z))}R=null,P=null,g.reset(),e.setRenderTarget(f),m=null,d=null,h=null,s=null,b=null,Be.stop(),n.isPresenting=!1,e.setPixelRatio(E),e.setSize(y.width,y.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(f=e.getRenderTarget(),s.addEventListener("select",N),s.addEventListener("selectstart",N),s.addEventListener("selectend",N),s.addEventListener("squeeze",N),s.addEventListener("squeezestart",N),s.addEventListener("squeezeend",N),s.addEventListener("end",B),s.addEventListener("inputsourceschange",H),p.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(y),s.enabledFeatures!==void 0&&s.enabledFeatures.includes("layers")){let oe=null,se=null,ee=null;p.depth&&(ee=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,oe=p.stencil?1027:1026,se=p.stencil?1020:1014);const Ce={colorFormat:t.RGBA8,depthFormat:ee,scaleFactor:r};h=new XRWebGLBinding(s,t),d=h.createProjectionLayer(Ce),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),b=new bn(d.textureWidth,d.textureHeight,{format:1023,type:1009,depthTexture:new Du(d.textureWidth,d.textureHeight,se,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}else{const oe={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,oe),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),b=new bn(m.framebufferWidth,m.framebufferHeight,{format:1023,type:1009,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}b.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Be.setContext(s),Be.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function H(Y){for(let Z=0;Z<Y.removed.length;Z++){const oe=Y.removed[Z],se=x.indexOf(oe);se>=0&&(x[se]=null,T[se].disconnect(oe))}for(let Z=0;Z<Y.added.length;Z++){const oe=Y.added[Z];let se=x.indexOf(oe);if(se===-1){for(let Ce=0;Ce<T.length;Ce++)if(Ce>=x.length){x.push(oe),se=Ce;break}else if(x[Ce]===null){x[Ce]=oe,se=Ce;break}if(se===-1)break}const ee=T[se];ee&&ee.connect(oe)}}const k=new U,G=new U;function V(Y,Z,oe){k.setFromMatrixPosition(Z.matrixWorld),G.setFromMatrixPosition(oe.matrixWorld);const se=k.distanceTo(G),ee=Z.projectionMatrix.elements,Ce=oe.projectionMatrix.elements,Ie=ee[14]/(ee[10]-1),et=ee[14]/(ee[10]+1),ze=(ee[9]+1)/ee[5],_t=(ee[9]-1)/ee[5],I=(ee[8]-1)/ee[0],ce=(Ce[8]+1)/Ce[0],ae=Ie*I,we=Ie*ce,le=se/(-I+ce),Te=le*-I;if(Z.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Te),Y.translateZ(le),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),ee[10]===-1)Y.projectionMatrix.copy(Z.projectionMatrix),Y.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{const ue=Ie+le,D=et+le,M=ae-Te,z=we+(se-Te),K=ze*et/D*ue,te=_t*et/D*ue;Y.projectionMatrix.makePerspective(M,z,K,te,ue,D),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function j(Y,Z){Z===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(Z.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let Z=Y.near,oe=Y.far;g.texture!==null&&(g.depthNear>0&&(Z=g.depthNear),g.depthFar>0&&(oe=g.depthFar)),v.near=C.near=A.near=Z,v.far=C.far=A.far=oe,(R!==v.near||P!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),R=v.near,P=v.far),A.layers.mask=Y.layers.mask|2,C.layers.mask=Y.layers.mask|4,v.layers.mask=A.layers.mask|C.layers.mask;const se=Y.parent,ee=v.cameras;j(v,se);for(let Ce=0;Ce<ee.length;Ce++)j(ee[Ce],se);ee.length===2?V(v,A,C):v.projectionMatrix.copy(A.projectionMatrix),Q(Y,v,se)};function Q(Y,Z,oe){oe===null?Y.matrix.copy(Z.matrixWorld):(Y.matrix.copy(oe.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(Z.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(Z.projectionMatrix),Y.projectionMatrixInverse.copy(Z.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Ea*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(d===null&&m===null))return c},this.setFoveation=function(Y){c=Y,d!==null&&(d.fixedFoveation=Y),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Y)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(v)};let ne=null;function ge(Y,Z){if(u=Z.getViewerPose(l||o),_=Z,u!==null){const oe=u.views;m!==null&&(e.setRenderTargetFramebuffer(b,m.framebuffer),e.setRenderTarget(b));let se=!1;oe.length!==v.cameras.length&&(v.cameras.length=0,se=!0);for(let Ce=0;Ce<oe.length;Ce++){const Ie=oe[Ce];let et=null;if(m!==null)et=m.getViewport(Ie);else{const _t=h.getViewSubImage(d,Ie);et=_t.viewport,Ce===0&&(e.setRenderTargetTextures(b,_t.colorTexture,d.ignoreDepthValues?void 0:_t.depthStencilTexture),e.setRenderTarget(b))}let ze=S[Ce];ze===void 0&&(ze=new rn,ze.layers.enable(Ce),ze.viewport=new ct,S[Ce]=ze),ze.matrix.fromArray(Ie.transform.matrix),ze.matrix.decompose(ze.position,ze.quaternion,ze.scale),ze.projectionMatrix.fromArray(Ie.projectionMatrix),ze.projectionMatrixInverse.copy(ze.projectionMatrix).invert(),ze.viewport.set(et.x,et.y,et.width,et.height),Ce===0&&(v.matrix.copy(ze.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),se===!0&&v.cameras.push(ze)}const ee=s.enabledFeatures;if(ee&&ee.includes("depth-sensing")){const Ce=h.getDepthInformation(oe[0]);Ce&&Ce.isValid&&Ce.texture&&g.init(e,Ce,s.renderState)}}for(let oe=0;oe<T.length;oe++){const se=x[oe],ee=T[oe];se!==null&&ee!==void 0&&ee.update(se,Z,l||o)}ne&&ne(Y,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),_=null}const Be=new Iu;Be.setAnimationLoop(ge),this.setAnimationLoop=function(Y){ne=Y},this.dispose=function(){}}}const Ri=new Jn,Tg=new vt;function Eg(i,e){function t(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function n(p,f){f.color.getRGB(p.fogColor.value,Au(i)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function s(p,f,b,T,x){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(p,f):f.isMeshToonMaterial?(r(p,f),h(p,f)):f.isMeshPhongMaterial?(r(p,f),u(p,f)):f.isMeshStandardMaterial?(r(p,f),d(p,f),f.isMeshPhysicalMaterial&&m(p,f,x)):f.isMeshMatcapMaterial?(r(p,f),_(p,f)):f.isMeshDepthMaterial?r(p,f):f.isMeshDistanceMaterial?(r(p,f),g(p,f)):f.isMeshNormalMaterial?r(p,f):f.isLineBasicMaterial?(o(p,f),f.isLineDashedMaterial&&a(p,f)):f.isPointsMaterial?c(p,f,b,T):f.isSpriteMaterial?l(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,t(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===1&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,t(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===1&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,t(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,t(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const b=e.get(f),T=b.envMap,x=b.envMapRotation;T&&(p.envMap.value=T,Ri.copy(x),Ri.x*=-1,Ri.y*=-1,Ri.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Ri.y*=-1,Ri.z*=-1),p.envMapRotation.value.setFromMatrix4(Tg.makeRotationFromEuler(Ri)),p.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap&&(p.lightMap.value=f.lightMap,p.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,p.lightMapTransform)),f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,p.aoMapTransform))}function o(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform))}function a(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function c(p,f,b,T){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*b,p.scale.value=T*.5,f.map&&(p.map.value=f.map,t(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function l(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function u(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function h(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function d(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,p.roughnessMapTransform)),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,b){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===1&&p.clearcoatNormalScale.value.negate())),f.dispersion>0&&(p.dispersion.value=f.dispersion),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=b.texture,p.transmissionSamplerSize.value.set(b.width,b.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,f){f.matcap&&(p.matcap.value=f.matcap)}function g(p,f){const b=e.get(f).light;p.referencePosition.value.setFromMatrixPosition(b.matrixWorld),p.nearDistance.value=b.shadow.camera.near,p.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function bg(i,e,t,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(b,T){const x=T.program;n.uniformBlockBinding(b,x)}function l(b,T){let x=s[b.id];x===void 0&&(_(b),x=u(b),s[b.id]=x,b.addEventListener("dispose",p));const y=T.program;n.updateUBOMapping(b,y);const E=e.render.frame;r[b.id]!==E&&(d(b),r[b.id]=E)}function u(b){const T=h();b.__bindingPointIndex=T;const x=i.createBuffer(),y=b.__size,E=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,y,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,T,x),x}function h(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){const T=s[b.id],x=b.uniforms,y=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let E=0,A=x.length;E<A;E++){const C=Array.isArray(x[E])?x[E]:[x[E]];for(let S=0,v=C.length;S<v;S++){const R=C[S];if(m(R,E,S,y)===!0){const P=R.__offset,N=Array.isArray(R.value)?R.value:[R.value];let B=0;for(let H=0;H<N.length;H++){const k=N[H],G=g(k);typeof k=="number"||typeof k=="boolean"?(R.__data[0]=k,i.bufferSubData(i.UNIFORM_BUFFER,P+B,R.__data)):k.isMatrix3?(R.__data[0]=k.elements[0],R.__data[1]=k.elements[1],R.__data[2]=k.elements[2],R.__data[3]=0,R.__data[4]=k.elements[3],R.__data[5]=k.elements[4],R.__data[6]=k.elements[5],R.__data[7]=0,R.__data[8]=k.elements[6],R.__data[9]=k.elements[7],R.__data[10]=k.elements[8],R.__data[11]=0):(k.toArray(R.__data,B),B+=G.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,P,R.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(b,T,x,y){const E=b.value,A=T+"_"+x;if(y[A]===void 0)return typeof E=="number"||typeof E=="boolean"?y[A]=E:y[A]=E.clone(),!0;{const C=y[A];if(typeof E=="number"||typeof E=="boolean"){if(C!==E)return y[A]=E,!0}else if(C.equals(E)===!1)return C.copy(E),!0}return!1}function _(b){const T=b.uniforms;let x=0;const y=16;for(let A=0,C=T.length;A<C;A++){const S=Array.isArray(T[A])?T[A]:[T[A]];for(let v=0,R=S.length;v<R;v++){const P=S[v],N=Array.isArray(P.value)?P.value:[P.value];for(let B=0,H=N.length;B<H;B++){const k=N[B],G=g(k),V=x%y,j=V%G.boundary,Q=V+j;x+=j,Q!==0&&y-Q<G.storage&&(x+=y-Q),P.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=x,x+=G.storage}}}const E=x%y;return E>0&&(x+=y-E),b.__size=x,b.__cache={},this}function g(b){const T={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(T.boundary=4,T.storage=4):b.isVector2?(T.boundary=8,T.storage=8):b.isVector3||b.isColor?(T.boundary=16,T.storage=12):b.isVector4?(T.boundary=16,T.storage=16):b.isMatrix3?(T.boundary=48,T.storage=48):b.isMatrix4?(T.boundary=64,T.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),T}function p(b){const T=b.target;T.removeEventListener("dispose",p);const x=o.indexOf(T.__bindingPointIndex);o.splice(x,1),i.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function f(){for(const b in s)i.deleteBuffer(s[b]);o=[],s={},r={}}return{bind:c,update:l,dispose:f}}class wg{constructor(e={}){const{canvas:t=sd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;const _=new Uint32Array(4),g=new Int32Array(4);let p=null,f=null;const b=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=hn,this.toneMapping=0,this.toneMappingExposure=1;const x=this;let y=!1,E=0,A=0,C=null,S=-1,v=null;const R=new ct,P=new ct;let N=null;const B=new We(0);let H=0,k=t.width,G=t.height,V=1,j=null,Q=null;const ne=new ct(0,0,k,G),ge=new ct(0,0,k,G);let Be=!1;const Y=new Ha;let Z=!1,oe=!1;this.transmissionResolutionScale=1;const se=new vt,ee=new vt,Ce=new U,Ie=new ct,et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ze=!1;function _t(){return C===null?V:1}let I=n;function ce(w,L){return t.getContext(w,L)}try{const w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r172"),t.addEventListener("webglcontextlost",J,!1),t.addEventListener("webglcontextrestored",_e,!1),t.addEventListener("webglcontextcreationerror",me,!1),I===null){const L="webgl2";if(I=ce(L,w),I===null)throw ce(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let ae,we,le,Te,ue,D,M,z,K,te,$,Ee,pe,xe,Ze,re,ye,Pe,Ne,Se,je,Ge,ht,F;function de(){ae=new Lm(I),ae.init(),Ge=new gg(I,ae),we=new Rm(I,ae,e,Ge),le=new mg(I,ae),we.reverseDepthBuffer&&d&&le.buffers.depth.setReversed(!0),Te=new Bm(I),ue=new ng,D=new _g(I,ae,le,ue,we,Ge,Te),M=new Pm(x),z=new Fm(x),K=new Wd(I),ht=new Am(I,K),te=new Om(I,K,Te,ht),$=new Vm(I,te,K,Te),Ne=new km(I,we,D),re=new Dm(ue),Ee=new tg(x,M,z,ae,we,ht,re),pe=new Eg(x,ue),xe=new sg,Ze=new ug(ae),Pe=new wm(x,M,z,le,$,m,c),ye=new fg(x,$,we),F=new bg(I,Te,we,le),Se=new Cm(I,ae,Te),je=new Um(I,ae,Te),Te.programs=Ee.programs,x.capabilities=we,x.extensions=ae,x.properties=ue,x.renderLists=xe,x.shadowMap=ye,x.state=le,x.info=Te}de();const X=new Mg(x,I);this.xr=X,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const w=ae.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=ae.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(w){w!==void 0&&(V=w,this.setSize(k,G,!1))},this.getSize=function(w){return w.set(k,G)},this.setSize=function(w,L,W=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=w,G=L,t.width=Math.floor(w*V),t.height=Math.floor(L*V),W===!0&&(t.style.width=w+"px",t.style.height=L+"px"),this.setViewport(0,0,w,L)},this.getDrawingBufferSize=function(w){return w.set(k*V,G*V).floor()},this.setDrawingBufferSize=function(w,L,W){k=w,G=L,V=W,t.width=Math.floor(w*W),t.height=Math.floor(L*W),this.setViewport(0,0,w,L)},this.getCurrentViewport=function(w){return w.copy(R)},this.getViewport=function(w){return w.copy(ne)},this.setViewport=function(w,L,W,q){w.isVector4?ne.set(w.x,w.y,w.z,w.w):ne.set(w,L,W,q),le.viewport(R.copy(ne).multiplyScalar(V).round())},this.getScissor=function(w){return w.copy(ge)},this.setScissor=function(w,L,W,q){w.isVector4?ge.set(w.x,w.y,w.z,w.w):ge.set(w,L,W,q),le.scissor(P.copy(ge).multiplyScalar(V).round())},this.getScissorTest=function(){return Be},this.setScissorTest=function(w){le.setScissorTest(Be=w)},this.setOpaqueSort=function(w){j=w},this.setTransparentSort=function(w){Q=w},this.getClearColor=function(w){return w.copy(Pe.getClearColor())},this.setClearColor=function(){Pe.setClearColor.apply(Pe,arguments)},this.getClearAlpha=function(){return Pe.getClearAlpha()},this.setClearAlpha=function(){Pe.setClearAlpha.apply(Pe,arguments)},this.clear=function(w=!0,L=!0,W=!0){let q=0;if(w){let O=!1;if(C!==null){const ie=C.texture.format;O=ie===1033||ie===1031||ie===1029}if(O){const ie=C.texture.type,fe=ie===1009||ie===1014||ie===1012||ie===1020||ie===1017||ie===1018,ve=Pe.getClearColor(),Me=Pe.getClearAlpha(),Fe=ve.r,Le=ve.g,Re=ve.b;fe?(_[0]=Fe,_[1]=Le,_[2]=Re,_[3]=Me,I.clearBufferuiv(I.COLOR,0,_)):(g[0]=Fe,g[1]=Le,g[2]=Re,g[3]=Me,I.clearBufferiv(I.COLOR,0,g))}else q|=I.COLOR_BUFFER_BIT}L&&(q|=I.DEPTH_BUFFER_BIT),W&&(q|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",J,!1),t.removeEventListener("webglcontextrestored",_e,!1),t.removeEventListener("webglcontextcreationerror",me,!1),Pe.dispose(),xe.dispose(),Ze.dispose(),ue.dispose(),M.dispose(),z.dispose(),$.dispose(),ht.dispose(),F.dispose(),Ee.dispose(),X.dispose(),X.removeEventListener("sessionstart",Gc),X.removeEventListener("sessionend",Hc),yi.stop()};function J(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function _e(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const w=Te.autoReset,L=ye.enabled,W=ye.autoUpdate,q=ye.needsUpdate,O=ye.type;de(),Te.autoReset=w,ye.enabled=L,ye.autoUpdate=W,ye.needsUpdate=q,ye.type=O}function me(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function ke(w){const L=w.target;L.removeEventListener("dispose",ke),xt(L)}function xt(w){Ot(w),ue.remove(w)}function Ot(w){const L=ue.get(w).programs;L!==void 0&&(L.forEach(function(W){Ee.releaseProgram(W)}),w.isShaderMaterial&&Ee.releaseShaderCache(w))}this.renderBufferDirect=function(w,L,W,q,O,ie){L===null&&(L=et);const fe=O.isMesh&&O.matrixWorld.determinant()<0,ve=Kh(w,L,W,q,O);le.setMaterial(q,fe);let Me=W.index,Fe=1;if(q.wireframe===!0){if(Me=te.getWireframeAttribute(W),Me===void 0)return;Fe=2}const Le=W.drawRange,Re=W.attributes.position;let $e=Le.start*Fe,tt=(Le.start+Le.count)*Fe;ie!==null&&($e=Math.max($e,ie.start*Fe),tt=Math.min(tt,(ie.start+ie.count)*Fe)),Me!==null?($e=Math.max($e,0),tt=Math.min(tt,Me.count)):Re!=null&&($e=Math.max($e,0),tt=Math.min(tt,Re.count));const Et=tt-$e;if(Et<0||Et===1/0)return;ht.setup(O,q,ve,W,Me);let yt,Ke=Se;if(Me!==null&&(yt=K.get(Me),Ke=je,Ke.setIndex(yt)),O.isMesh)q.wireframe===!0?(le.setLineWidth(q.wireframeLinewidth*_t()),Ke.setMode(I.LINES)):Ke.setMode(I.TRIANGLES);else if(O.isLine){let De=q.linewidth;De===void 0&&(De=1),le.setLineWidth(De*_t()),O.isLineSegments?Ke.setMode(I.LINES):O.isLineLoop?Ke.setMode(I.LINE_LOOP):Ke.setMode(I.LINE_STRIP)}else O.isPoints?Ke.setMode(I.POINTS):O.isSprite&&Ke.setMode(I.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)Ke.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(ae.get("WEBGL_multi_draw"))Ke.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const De=O._multiDrawStarts,It=O._multiDrawCounts,nt=O._multiDrawCount,gn=Me?K.get(Me).bytesPerElement:1,qi=ue.get(q).currentProgram.getUniforms();for(let tn=0;tn<nt;tn++)qi.setValue(I,"_gl_DrawID",tn),Ke.render(De[tn]/gn,It[tn])}else if(O.isInstancedMesh)Ke.renderInstances($e,Et,O.count);else if(W.isInstancedBufferGeometry){const De=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,It=Math.min(W.instanceCount,De);Ke.renderInstances($e,Et,It)}else Ke.render($e,Et)};function it(w,L,W){w.transparent===!0&&w.side===2&&w.forceSinglePass===!1?(w.side=1,w.needsUpdate=!0,gr(w,L,W),w.side=0,w.needsUpdate=!0,gr(w,L,W),w.side=2):gr(w,L,W)}this.compile=function(w,L,W=null){W===null&&(W=w),f=Ze.get(W),f.init(L),T.push(f),W.traverseVisible(function(O){O.isLight&&O.layers.test(L.layers)&&(f.pushLight(O),O.castShadow&&f.pushShadow(O))}),w!==W&&w.traverseVisible(function(O){O.isLight&&O.layers.test(L.layers)&&(f.pushLight(O),O.castShadow&&f.pushShadow(O))}),f.setupLights();const q=new Set;return w.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const ie=O.material;if(ie)if(Array.isArray(ie))for(let fe=0;fe<ie.length;fe++){const ve=ie[fe];it(ve,W,O),q.add(ve)}else it(ie,W,O),q.add(ie)}),T.pop(),f=null,q},this.compileAsync=function(w,L,W=null){const q=this.compile(w,L,W);return new Promise(O=>{function ie(){if(q.forEach(function(fe){ue.get(fe).currentProgram.isReady()&&q.delete(fe)}),q.size===0){O(w);return}setTimeout(ie,10)}ae.get("KHR_parallel_shader_compile")!==null?ie():setTimeout(ie,10)})};let _n=null;function zn(w){_n&&_n(w)}function Gc(){yi.stop()}function Hc(){yi.start()}const yi=new Iu;yi.setAnimationLoop(zn),typeof self<"u"&&yi.setContext(self),this.setAnimationLoop=function(w){_n=w,X.setAnimationLoop(w),w===null?yi.stop():yi.start()},X.addEventListener("sessionstart",Gc),X.addEventListener("sessionend",Hc),this.render=function(w,L){if(L!==void 0&&L.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(L),L=X.getCamera()),w.isScene===!0&&w.onBeforeRender(x,w,L,C),f=Ze.get(w,T.length),f.init(L),T.push(f),ee.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),Y.setFromProjectionMatrix(ee),oe=this.localClippingEnabled,Z=re.init(this.clippingPlanes,oe),p=xe.get(w,b.length),p.init(),b.push(p),X.enabled===!0&&X.isPresenting===!0){const ie=x.xr.getDepthSensingMesh();ie!==null&&Ho(ie,L,-1/0,x.sortObjects)}Ho(w,L,0,x.sortObjects),p.finish(),x.sortObjects===!0&&p.sort(j,Q),ze=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,ze&&Pe.addToRenderList(p,w),this.info.render.frame++,Z===!0&&re.beginShadows();const W=f.state.shadowsArray;ye.render(W,w,L),Z===!0&&re.endShadows(),this.info.autoReset===!0&&this.info.reset();const q=p.opaque,O=p.transmissive;if(f.setupLights(),L.isArrayCamera){const ie=L.cameras;if(O.length>0)for(let fe=0,ve=ie.length;fe<ve;fe++){const Me=ie[fe];qc(q,O,w,Me)}ze&&Pe.render(w);for(let fe=0,ve=ie.length;fe<ve;fe++){const Me=ie[fe];Wc(p,w,Me,Me.viewport)}}else O.length>0&&qc(q,O,w,L),ze&&Pe.render(w),Wc(p,w,L);C!==null&&A===0&&(D.updateMultisampleRenderTarget(C),D.updateRenderTargetMipmap(C)),w.isScene===!0&&w.onAfterRender(x,w,L),ht.resetDefaultState(),S=-1,v=null,T.pop(),T.length>0?(f=T[T.length-1],Z===!0&&re.setGlobalState(x.clippingPlanes,f.state.camera)):f=null,b.pop(),b.length>0?p=b[b.length-1]:p=null};function Ho(w,L,W,q){if(w.visible===!1)return;if(w.layers.test(L.layers)){if(w.isGroup)W=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(L);else if(w.isLight)f.pushLight(w),w.castShadow&&f.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Y.intersectsSprite(w)){q&&Ie.setFromMatrixPosition(w.matrixWorld).applyMatrix4(ee);const fe=$.update(w),ve=w.material;ve.visible&&p.push(w,fe,ve,W,Ie.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Y.intersectsObject(w))){const fe=$.update(w),ve=w.material;if(q&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ie.copy(w.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),Ie.copy(fe.boundingSphere.center)),Ie.applyMatrix4(w.matrixWorld).applyMatrix4(ee)),Array.isArray(ve)){const Me=fe.groups;for(let Fe=0,Le=Me.length;Fe<Le;Fe++){const Re=Me[Fe],$e=ve[Re.materialIndex];$e&&$e.visible&&p.push(w,fe,$e,W,Ie.z,Re)}}else ve.visible&&p.push(w,fe,ve,W,Ie.z,null)}}const ie=w.children;for(let fe=0,ve=ie.length;fe<ve;fe++)Ho(ie[fe],L,W,q)}function Wc(w,L,W,q){const O=w.opaque,ie=w.transmissive,fe=w.transparent;f.setupLightsView(W),Z===!0&&re.setGlobalState(x.clippingPlanes,W),q&&le.viewport(R.copy(q)),O.length>0&&_r(O,L,W),ie.length>0&&_r(ie,L,W),fe.length>0&&_r(fe,L,W),le.buffers.depth.setTest(!0),le.buffers.depth.setMask(!0),le.buffers.color.setMask(!0),le.setPolygonOffset(!1)}function qc(w,L,W,q){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[q.id]===void 0&&(f.state.transmissionRenderTarget[q.id]=new bn(1,1,{generateMipmaps:!0,type:ae.has("EXT_color_buffer_half_float")||ae.has("EXT_color_buffer_float")?1016:1009,minFilter:1008,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qe.workingColorSpace}));const ie=f.state.transmissionRenderTarget[q.id],fe=q.viewport||R;ie.setSize(fe.z*x.transmissionResolutionScale,fe.w*x.transmissionResolutionScale);const ve=x.getRenderTarget();x.setRenderTarget(ie),x.getClearColor(B),H=x.getClearAlpha(),H<1&&x.setClearColor(16777215,.5),x.clear(),ze&&Pe.render(W);const Me=x.toneMapping;x.toneMapping=0;const Fe=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),f.setupLightsView(q),Z===!0&&re.setGlobalState(x.clippingPlanes,q),_r(w,W,q),D.updateMultisampleRenderTarget(ie),D.updateRenderTargetMipmap(ie),ae.has("WEBGL_multisampled_render_to_texture")===!1){let Le=!1;for(let Re=0,$e=L.length;Re<$e;Re++){const tt=L[Re],Et=tt.object,yt=tt.geometry,Ke=tt.material,De=tt.group;if(Ke.side===2&&Et.layers.test(q.layers)){const It=Ke.side;Ke.side=1,Ke.needsUpdate=!0,Xc(Et,W,q,yt,Ke,De),Ke.side=It,Ke.needsUpdate=!0,Le=!0}}Le===!0&&(D.updateMultisampleRenderTarget(ie),D.updateRenderTargetMipmap(ie))}x.setRenderTarget(ve),x.setClearColor(B,H),Fe!==void 0&&(q.viewport=Fe),x.toneMapping=Me}function _r(w,L,W){const q=L.isScene===!0?L.overrideMaterial:null;for(let O=0,ie=w.length;O<ie;O++){const fe=w[O],ve=fe.object,Me=fe.geometry,Fe=q===null?fe.material:q,Le=fe.group;ve.layers.test(W.layers)&&Xc(ve,L,W,Me,Fe,Le)}}function Xc(w,L,W,q,O,ie){w.onBeforeRender(x,L,W,q,O,ie),w.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),O.onBeforeRender(x,L,W,q,w,ie),O.transparent===!0&&O.side===2&&O.forceSinglePass===!1?(O.side=1,O.needsUpdate=!0,x.renderBufferDirect(W,L,q,O,w,ie),O.side=0,O.needsUpdate=!0,x.renderBufferDirect(W,L,q,O,w,ie),O.side=2):x.renderBufferDirect(W,L,q,O,w,ie),w.onAfterRender(x,L,W,q,O,ie)}function gr(w,L,W){L.isScene!==!0&&(L=et);const q=ue.get(w),O=f.state.lights,ie=f.state.shadowsArray,fe=O.state.version,ve=Ee.getParameters(w,O.state,ie,L,W),Me=Ee.getProgramCacheKey(ve);let Fe=q.programs;q.environment=w.isMeshStandardMaterial?L.environment:null,q.fog=L.fog,q.envMap=(w.isMeshStandardMaterial?z:M).get(w.envMap||q.environment),q.envMapRotation=q.environment!==null&&w.envMap===null?L.environmentRotation:w.envMapRotation,Fe===void 0&&(w.addEventListener("dispose",ke),Fe=new Map,q.programs=Fe);let Le=Fe.get(Me);if(Le!==void 0){if(q.currentProgram===Le&&q.lightsStateVersion===fe)return jc(w,ve),Le}else ve.uniforms=Ee.getUniforms(w),w.onBeforeCompile(ve,x),Le=Ee.acquireProgram(ve,Me),Fe.set(Me,Le),q.uniforms=ve.uniforms;const Re=q.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Re.clippingPlanes=re.uniform),jc(w,ve),q.needsLights=Jh(w),q.lightsStateVersion=fe,q.needsLights&&(Re.ambientLightColor.value=O.state.ambient,Re.lightProbe.value=O.state.probe,Re.directionalLights.value=O.state.directional,Re.directionalLightShadows.value=O.state.directionalShadow,Re.spotLights.value=O.state.spot,Re.spotLightShadows.value=O.state.spotShadow,Re.rectAreaLights.value=O.state.rectArea,Re.ltc_1.value=O.state.rectAreaLTC1,Re.ltc_2.value=O.state.rectAreaLTC2,Re.pointLights.value=O.state.point,Re.pointLightShadows.value=O.state.pointShadow,Re.hemisphereLights.value=O.state.hemi,Re.directionalShadowMap.value=O.state.directionalShadowMap,Re.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Re.spotShadowMap.value=O.state.spotShadowMap,Re.spotLightMatrix.value=O.state.spotLightMatrix,Re.spotLightMap.value=O.state.spotLightMap,Re.pointShadowMap.value=O.state.pointShadowMap,Re.pointShadowMatrix.value=O.state.pointShadowMatrix),q.currentProgram=Le,q.uniformsList=null,Le}function Yc(w){if(w.uniformsList===null){const L=w.currentProgram.getUniforms();w.uniformsList=Xr.seqWithValue(L.seq,w.uniforms)}return w.uniformsList}function jc(w,L){const W=ue.get(w);W.outputColorSpace=L.outputColorSpace,W.batching=L.batching,W.batchingColor=L.batchingColor,W.instancing=L.instancing,W.instancingColor=L.instancingColor,W.instancingMorph=L.instancingMorph,W.skinning=L.skinning,W.morphTargets=L.morphTargets,W.morphNormals=L.morphNormals,W.morphColors=L.morphColors,W.morphTargetsCount=L.morphTargetsCount,W.numClippingPlanes=L.numClippingPlanes,W.numIntersection=L.numClipIntersection,W.vertexAlphas=L.vertexAlphas,W.vertexTangents=L.vertexTangents,W.toneMapping=L.toneMapping}function Kh(w,L,W,q,O){L.isScene!==!0&&(L=et),D.resetTextureUnits();const ie=L.fog,fe=q.isMeshStandardMaterial?L.environment:null,ve=C===null?x.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:gs,Me=(q.isMeshStandardMaterial?z:M).get(q.envMap||fe),Fe=q.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Le=!!W.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Re=!!W.morphAttributes.position,$e=!!W.morphAttributes.normal,tt=!!W.morphAttributes.color;let Et=0;q.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Et=x.toneMapping);const yt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Ke=yt!==void 0?yt.length:0,De=ue.get(q),It=f.state.lights;if(Z===!0&&(oe===!0||w!==v)){const zt=w===v&&q.id===S;re.setState(q,w,zt)}let nt=!1;q.version===De.__version?(De.needsLights&&De.lightsStateVersion!==It.state.version||De.outputColorSpace!==ve||O.isBatchedMesh&&De.batching===!1||!O.isBatchedMesh&&De.batching===!0||O.isBatchedMesh&&De.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&De.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&De.instancing===!1||!O.isInstancedMesh&&De.instancing===!0||O.isSkinnedMesh&&De.skinning===!1||!O.isSkinnedMesh&&De.skinning===!0||O.isInstancedMesh&&De.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&De.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&De.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&De.instancingMorph===!1&&O.morphTexture!==null||De.envMap!==Me||q.fog===!0&&De.fog!==ie||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==re.numPlanes||De.numIntersection!==re.numIntersection)||De.vertexAlphas!==Fe||De.vertexTangents!==Le||De.morphTargets!==Re||De.morphNormals!==$e||De.morphColors!==tt||De.toneMapping!==Et||De.morphTargetsCount!==Ke)&&(nt=!0):(nt=!0,De.__version=q.version);let gn=De.currentProgram;nt===!0&&(gn=gr(q,L,O));let qi=!1,tn=!1,Bs=!1;const pt=gn.getUniforms(),cn=De.uniforms;if(le.useProgram(gn.program)&&(qi=!0,tn=!0,Bs=!0),q.id!==S&&(S=q.id,tn=!0),qi||v!==w){le.buffers.depth.getReversed()?(se.copy(w.projectionMatrix),od(se),ad(se),pt.setValue(I,"projectionMatrix",se)):pt.setValue(I,"projectionMatrix",w.projectionMatrix),pt.setValue(I,"viewMatrix",w.matrixWorldInverse);const jt=pt.map.cameraPosition;jt!==void 0&&jt.setValue(I,Ce.setFromMatrixPosition(w.matrixWorld)),we.logarithmicDepthBuffer&&pt.setValue(I,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&pt.setValue(I,"isOrthographic",w.isOrthographicCamera===!0),v!==w&&(v=w,tn=!0,Bs=!0)}if(O.isSkinnedMesh){pt.setOptional(I,O,"bindMatrix"),pt.setOptional(I,O,"bindMatrixInverse");const zt=O.skeleton;zt&&(zt.boneTexture===null&&zt.computeBoneTexture(),pt.setValue(I,"boneTexture",zt.boneTexture,D))}O.isBatchedMesh&&(pt.setOptional(I,O,"batchingTexture"),pt.setValue(I,"batchingTexture",O._matricesTexture,D),pt.setOptional(I,O,"batchingIdTexture"),pt.setValue(I,"batchingIdTexture",O._indirectTexture,D),pt.setOptional(I,O,"batchingColorTexture"),O._colorsTexture!==null&&pt.setValue(I,"batchingColorTexture",O._colorsTexture,D));const ln=W.morphAttributes;if((ln.position!==void 0||ln.normal!==void 0||ln.color!==void 0)&&Ne.update(O,W,gn),(tn||De.receiveShadow!==O.receiveShadow)&&(De.receiveShadow=O.receiveShadow,pt.setValue(I,"receiveShadow",O.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(cn.envMap.value=Me,cn.flipEnvMap.value=Me.isCubeTexture&&Me.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&L.environment!==null&&(cn.envMapIntensity.value=L.environmentIntensity),tn&&(pt.setValue(I,"toneMappingExposure",x.toneMappingExposure),De.needsLights&&Qh(cn,Bs),ie&&q.fog===!0&&pe.refreshFogUniforms(cn,ie),pe.refreshMaterialUniforms(cn,q,V,G,f.state.transmissionRenderTarget[w.id]),Xr.upload(I,Yc(De),cn,D)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Xr.upload(I,Yc(De),cn,D),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&pt.setValue(I,"center",O.center),pt.setValue(I,"modelViewMatrix",O.modelViewMatrix),pt.setValue(I,"normalMatrix",O.normalMatrix),pt.setValue(I,"modelMatrix",O.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const zt=q.uniformsGroups;for(let jt=0,Wo=zt.length;jt<Wo;jt++){const Si=zt[jt];F.update(Si,gn),F.bind(Si,gn)}}return gn}function Qh(w,L){w.ambientLightColor.needsUpdate=L,w.lightProbe.needsUpdate=L,w.directionalLights.needsUpdate=L,w.directionalLightShadows.needsUpdate=L,w.pointLights.needsUpdate=L,w.pointLightShadows.needsUpdate=L,w.spotLights.needsUpdate=L,w.spotLightShadows.needsUpdate=L,w.rectAreaLights.needsUpdate=L,w.hemisphereLights.needsUpdate=L}function Jh(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(w,L,W){ue.get(w.texture).__webglTexture=L,ue.get(w.depthTexture).__webglTexture=W;const q=ue.get(w);q.__hasExternalTextures=!0,q.__autoAllocateDepthBuffer=W===void 0,q.__autoAllocateDepthBuffer||ae.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,L){const W=ue.get(w);W.__webglFramebuffer=L,W.__useDefaultFramebuffer=L===void 0};const ed=I.createFramebuffer();this.setRenderTarget=function(w,L=0,W=0){C=w,E=L,A=W;let q=!0,O=null,ie=!1,fe=!1;if(w){const Me=ue.get(w);if(Me.__useDefaultFramebuffer!==void 0)le.bindFramebuffer(I.FRAMEBUFFER,null),q=!1;else if(Me.__webglFramebuffer===void 0)D.setupRenderTarget(w);else if(Me.__hasExternalTextures)D.rebindTextures(w,ue.get(w.texture).__webglTexture,ue.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Re=w.depthTexture;if(Me.__boundDepthTexture!==Re){if(Re!==null&&ue.has(Re)&&(w.width!==Re.image.width||w.height!==Re.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(w)}}const Fe=w.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(fe=!0);const Le=ue.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Le[L])?O=Le[L][W]:O=Le[L],ie=!0):w.samples>0&&D.useMultisampledRTT(w)===!1?O=ue.get(w).__webglMultisampledFramebuffer:Array.isArray(Le)?O=Le[W]:O=Le,R.copy(w.viewport),P.copy(w.scissor),N=w.scissorTest}else R.copy(ne).multiplyScalar(V).floor(),P.copy(ge).multiplyScalar(V).floor(),N=Be;if(W!==0&&(O=ed),le.bindFramebuffer(I.FRAMEBUFFER,O)&&q&&le.drawBuffers(w,O),le.viewport(R),le.scissor(P),le.setScissorTest(N),ie){const Me=ue.get(w.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+L,Me.__webglTexture,W)}else if(fe){const Me=ue.get(w.texture),Fe=L;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Me.__webglTexture,W,Fe)}else if(w!==null&&W!==0){const Me=ue.get(w.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Me.__webglTexture,W)}S=-1},this.readRenderTargetPixels=function(w,L,W,q,O,ie,fe){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ve=ue.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&fe!==void 0&&(ve=ve[fe]),ve){le.bindFramebuffer(I.FRAMEBUFFER,ve);try{const Me=w.texture,Fe=Me.format,Le=Me.type;if(!we.textureFormatReadable(Fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!we.textureTypeReadable(Le)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=w.width-q&&W>=0&&W<=w.height-O&&I.readPixels(L,W,q,O,Ge.convert(Fe),Ge.convert(Le),ie)}finally{const Me=C!==null?ue.get(C).__webglFramebuffer:null;le.bindFramebuffer(I.FRAMEBUFFER,Me)}}},this.readRenderTargetPixelsAsync=async function(w,L,W,q,O,ie,fe){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ve=ue.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&fe!==void 0&&(ve=ve[fe]),ve){const Me=w.texture,Fe=Me.format,Le=Me.type;if(!we.textureFormatReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!we.textureTypeReadable(Le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(L>=0&&L<=w.width-q&&W>=0&&W<=w.height-O){le.bindFramebuffer(I.FRAMEBUFFER,ve);const Re=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Re),I.bufferData(I.PIXEL_PACK_BUFFER,ie.byteLength,I.STREAM_READ),I.readPixels(L,W,q,O,Ge.convert(Fe),Ge.convert(Le),0);const $e=C!==null?ue.get(C).__webglFramebuffer:null;le.bindFramebuffer(I.FRAMEBUFFER,$e);const tt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await rd(I,tt,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Re),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,ie),I.deleteBuffer(Re),I.deleteSync(tt),ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,L=null,W=0){w.isTexture!==!0&&(os("WebGLRenderer: copyFramebufferToTexture function signature has changed."),L=arguments[0]||null,w=arguments[1]);const q=Math.pow(2,-W),O=Math.floor(w.image.width*q),ie=Math.floor(w.image.height*q),fe=L!==null?L.x:0,ve=L!==null?L.y:0;D.setTexture2D(w,0),I.copyTexSubImage2D(I.TEXTURE_2D,W,0,0,fe,ve,O,ie),le.unbindTexture()};const td=I.createFramebuffer(),nd=I.createFramebuffer();this.copyTextureToTexture=function(w,L,W=null,q=null,O=0,ie=null){w.isTexture!==!0&&(os("WebGLRenderer: copyTextureToTexture function signature has changed."),q=arguments[0]||null,w=arguments[1],L=arguments[2],ie=arguments[3]||0,W=null),ie===null&&(O!==0?(os("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ie=O,O=0):ie=0);let fe,ve,Me,Fe,Le,Re,$e,tt,Et;const yt=w.isCompressedTexture?w.mipmaps[ie]:w.image;if(W!==null)fe=W.max.x-W.min.x,ve=W.max.y-W.min.y,Me=W.isBox3?W.max.z-W.min.z:1,Fe=W.min.x,Le=W.min.y,Re=W.isBox3?W.min.z:0;else{const ln=Math.pow(2,-O);fe=Math.floor(yt.width*ln),ve=Math.floor(yt.height*ln),w.isDataArrayTexture?Me=yt.depth:w.isData3DTexture?Me=Math.floor(yt.depth*ln):Me=1,Fe=0,Le=0,Re=0}q!==null?($e=q.x,tt=q.y,Et=q.z):($e=0,tt=0,Et=0);const Ke=Ge.convert(L.format),De=Ge.convert(L.type);let It;L.isData3DTexture?(D.setTexture3D(L,0),It=I.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(D.setTexture2DArray(L,0),It=I.TEXTURE_2D_ARRAY):(D.setTexture2D(L,0),It=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,L.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,L.unpackAlignment);const nt=I.getParameter(I.UNPACK_ROW_LENGTH),gn=I.getParameter(I.UNPACK_IMAGE_HEIGHT),qi=I.getParameter(I.UNPACK_SKIP_PIXELS),tn=I.getParameter(I.UNPACK_SKIP_ROWS),Bs=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,yt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,yt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Fe),I.pixelStorei(I.UNPACK_SKIP_ROWS,Le),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Re);const pt=w.isDataArrayTexture||w.isData3DTexture,cn=L.isDataArrayTexture||L.isData3DTexture;if(w.isDepthTexture){const ln=ue.get(w),zt=ue.get(L),jt=ue.get(ln.__renderTarget),Wo=ue.get(zt.__renderTarget);le.bindFramebuffer(I.READ_FRAMEBUFFER,jt.__webglFramebuffer),le.bindFramebuffer(I.DRAW_FRAMEBUFFER,Wo.__webglFramebuffer);for(let Si=0;Si<Me;Si++)pt&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,ue.get(w).__webglTexture,O,Re+Si),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,ue.get(L).__webglTexture,ie,Et+Si)),I.blitFramebuffer(Fe,Le,fe,ve,$e,tt,fe,ve,I.DEPTH_BUFFER_BIT,I.NEAREST);le.bindFramebuffer(I.READ_FRAMEBUFFER,null),le.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(O!==0||w.isRenderTargetTexture||ue.has(w)){const ln=ue.get(w),zt=ue.get(L);le.bindFramebuffer(I.READ_FRAMEBUFFER,td),le.bindFramebuffer(I.DRAW_FRAMEBUFFER,nd);for(let jt=0;jt<Me;jt++)pt?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,ln.__webglTexture,O,Re+jt):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,ln.__webglTexture,O),cn?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,zt.__webglTexture,ie,Et+jt):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,zt.__webglTexture,ie),O!==0?I.blitFramebuffer(Fe,Le,fe,ve,$e,tt,fe,ve,I.COLOR_BUFFER_BIT,I.NEAREST):cn?I.copyTexSubImage3D(It,ie,$e,tt,Et+jt,Fe,Le,fe,ve):I.copyTexSubImage2D(It,ie,$e,tt,Fe,Le,fe,ve);le.bindFramebuffer(I.READ_FRAMEBUFFER,null),le.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else cn?w.isDataTexture||w.isData3DTexture?I.texSubImage3D(It,ie,$e,tt,Et,fe,ve,Me,Ke,De,yt.data):L.isCompressedArrayTexture?I.compressedTexSubImage3D(It,ie,$e,tt,Et,fe,ve,Me,Ke,yt.data):I.texSubImage3D(It,ie,$e,tt,Et,fe,ve,Me,Ke,De,yt):w.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,ie,$e,tt,fe,ve,Ke,De,yt.data):w.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,ie,$e,tt,yt.width,yt.height,Ke,yt.data):I.texSubImage2D(I.TEXTURE_2D,ie,$e,tt,fe,ve,Ke,De,yt);I.pixelStorei(I.UNPACK_ROW_LENGTH,nt),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,gn),I.pixelStorei(I.UNPACK_SKIP_PIXELS,qi),I.pixelStorei(I.UNPACK_SKIP_ROWS,tn),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Bs),ie===0&&L.generateMipmaps&&I.generateMipmap(It),le.unbindTexture()},this.copyTextureToTexture3D=function(w,L,W=null,q=null,O=0){return w.isTexture!==!0&&(os("WebGLRenderer: copyTextureToTexture3D function signature has changed."),W=arguments[0]||null,q=arguments[1]||null,w=arguments[2],L=arguments[3],O=arguments[4]||0),os('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,L,W,q,O)},this.initRenderTarget=function(w){ue.get(w).__webglFramebuffer===void 0&&D.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?D.setTextureCube(w,0):w.isData3DTexture?D.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?D.setTexture2DArray(w,0):D.setTexture2D(w,0),le.unbindTexture()},this.resetState=function(){E=0,A=0,C=null,le.reset(),ht.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return 2e3}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Qe._getUnpackColorSpace()}}const Uu={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class ir{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Ag=new Ya(-1,1,1,-1,0,1);class Cg extends Un{constructor(){super(),this.setAttribute("position",new qt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new qt([0,2,0,0,2,0],2))}}const Rg=new Cg;class Bu{constructor(e){this._mesh=new Tn(Rg,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Ag)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class wa extends ir{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof kt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Kr.clone(e.uniforms),this.material=new kt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Bu(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Wl extends ir{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class Dg extends ir{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Pg{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new Ue);this._width=n.width,this._height=n.height,t=new bn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:1016}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new wa(Uu),this.copyPass.material.blending=0,this.clock=new ja}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const a=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Wl!==void 0&&(o instanceof Wl?n=!0:o instanceof Dg&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Ue);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Ig extends ir{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new We}render(e,t,n){const s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}}const Ng={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new We(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class xs extends ir{constructor(e,t,n,s){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new Ue(e.x,e.y):new Ue(256,256),this.clearColor=new We(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new bn(r,o,{type:1016}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const d=new bn(r,o,{type:1016});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const m=new bn(r,o,{type:1016});m.texture.name="UnrealBloomPass.v"+h,m.texture.generateMipmaps=!1,this.renderTargetsVertical.push(m),r=Math.round(r/2),o=Math.round(o/2)}const a=Ng;this.highPassUniforms=Kr.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new kt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const c=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeparableBlurMaterial(c[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new Ue(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new U(1,1,1),new U(1,1,1),new U(1,1,1),new U(1,1,1),new U(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const u=Uu;this.copyUniforms=Kr.clone(u.uniforms),this.blendMaterial=new kt({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:2,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new We,this.oldClearAlpha=1,this.basic=new _o,this.fsQuad=new Bu(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Ue(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this.fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[c].uniforms.direction.value=xs.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=xs.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[c];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeparableBlurMaterial(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new kt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Ue(.5,.5)},direction:{value:new Ue(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new kt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}xs.BlurDirectionX=new Ue(1,0);xs.BlurDirectionY=new Ue(0,1);const ku="15.0.4",ql=(i,e,t)=>({endTime:e,insertTime:t,type:"exponentialRampToValue",value:i}),Xl=(i,e,t)=>({endTime:e,insertTime:t,type:"linearRampToValue",value:i}),Aa=(i,e)=>({startTime:e,type:"setValue",value:i}),Vu=(i,e,t)=>({duration:t,startTime:e,type:"setValueCurve",values:i}),zu=(i,e,{startTime:t,target:n,timeConstant:s})=>n+(e-n)*Math.exp((t-i)/s),ls=i=>i.type==="exponentialRampToValue",Qr=i=>i.type==="linearRampToValue",di=i=>ls(i)||Qr(i),$a=i=>i.type==="setValue",jn=i=>i.type==="setValueCurve",Jr=(i,e,t,n)=>{const s=i[e];return s===void 0?n:di(s)||$a(s)?s.value:jn(s)?s.values[s.values.length-1]:zu(t,Jr(i,e-1,s.startTime,n),s)},Yl=(i,e,t,n,s)=>t===void 0?[n.insertTime,s]:di(t)?[t.endTime,t.value]:$a(t)?[t.startTime,t.value]:jn(t)?[t.startTime+t.duration,t.values[t.values.length-1]]:[t.startTime,Jr(i,e-1,t.startTime,s)],Ca=i=>i.type==="cancelAndHold",Ra=i=>i.type==="cancelScheduledValues",hi=i=>Ca(i)||Ra(i)?i.cancelTime:ls(i)||Qr(i)?i.endTime:i.startTime,jl=(i,e,t,{endTime:n,value:s})=>t===s?s:0<t&&0<s||t<0&&s<0?t*(s/t)**((i-e)/(n-e)):0,Zl=(i,e,t,{endTime:n,value:s})=>t+(i-e)/(n-e)*(s-t),Fg=(i,e)=>{const t=Math.floor(e),n=Math.ceil(e);return t===n?i[t]:(1-(e-t))*i[t]+(1-(n-e))*i[n]},Lg=(i,{duration:e,startTime:t,values:n})=>{const s=(i-t)/e*(n.length-1);return Fg(n,s)},Vr=i=>i.type==="setTarget";class Og{constructor(e){this._automationEvents=[],this._currenTime=0,this._defaultValue=e}[Symbol.iterator](){return this._automationEvents[Symbol.iterator]()}add(e){const t=hi(e);if(Ca(e)||Ra(e)){const n=this._automationEvents.findIndex(r=>Ra(e)&&jn(r)?r.startTime+r.duration>=t:hi(r)>=t),s=this._automationEvents[n];if(n!==-1&&(this._automationEvents=this._automationEvents.slice(0,n)),Ca(e)){const r=this._automationEvents[this._automationEvents.length-1];if(s!==void 0&&di(s)){if(r!==void 0&&Vr(r))throw new Error("The internal list is malformed.");const o=r===void 0?s.insertTime:jn(r)?r.startTime+r.duration:hi(r),a=r===void 0?this._defaultValue:jn(r)?r.values[r.values.length-1]:r.value,c=ls(s)?jl(t,o,a,s):Zl(t,o,a,s),l=ls(s)?ql(c,t,this._currenTime):Xl(c,t,this._currenTime);this._automationEvents.push(l)}if(r!==void 0&&Vr(r)&&this._automationEvents.push(Aa(this.getValue(t),t)),r!==void 0&&jn(r)&&r.startTime+r.duration>t){const o=t-r.startTime,a=(r.values.length-1)/r.duration,c=Math.max(2,1+Math.ceil(o*a)),l=o/(c-1)*a,u=r.values.slice(0,c);if(l<1)for(let h=1;h<c;h+=1){const d=l*h%1;u[h]=r.values[h-1]*(1-d)+r.values[h]*d}this._automationEvents[this._automationEvents.length-1]=Vu(u,r.startTime,o)}}}else{const n=this._automationEvents.findIndex(o=>hi(o)>t),s=n===-1?this._automationEvents[this._automationEvents.length-1]:this._automationEvents[n-1];if(s!==void 0&&jn(s)&&hi(s)+s.duration>t)return!1;const r=ls(e)?ql(e.value,e.endTime,this._currenTime):Qr(e)?Xl(e.value,t,this._currenTime):e;if(n===-1)this._automationEvents.push(r);else{if(jn(e)&&t+e.duration>hi(this._automationEvents[n]))return!1;this._automationEvents.splice(n,0,r)}}return!0}flush(e){const t=this._automationEvents.findIndex(n=>hi(n)>e);if(t>1){const n=this._automationEvents.slice(t-1),s=n[0];Vr(s)&&n.unshift(Aa(Jr(this._automationEvents,t-2,s.startTime,this._defaultValue),s.startTime)),this._automationEvents=n}}getValue(e){if(this._automationEvents.length===0)return this._defaultValue;const t=this._automationEvents.findIndex(o=>hi(o)>e),n=this._automationEvents[t],s=(t===-1?this._automationEvents.length:t)-1,r=this._automationEvents[s];if(r!==void 0&&Vr(r)&&(n===void 0||!di(n)||n.insertTime>e))return zu(e,Jr(this._automationEvents,s-1,r.startTime,this._defaultValue),r);if(r!==void 0&&$a(r)&&(n===void 0||!di(n)))return r.value;if(r!==void 0&&jn(r)&&(n===void 0||!di(n)||r.startTime+r.duration>e))return e<r.startTime+r.duration?Lg(e,r):r.values[r.values.length-1];if(r!==void 0&&di(r)&&(n===void 0||!di(n)))return r.value;if(n!==void 0&&ls(n)){const[o,a]=Yl(this._automationEvents,s,r,n,this._defaultValue);return jl(e,o,a,n)}if(n!==void 0&&Qr(n)){const[o,a]=Yl(this._automationEvents,s,r,n,this._defaultValue);return Zl(e,o,a,n)}return this._defaultValue}}const Ug=i=>({cancelTime:i,type:"cancelAndHold"}),Bg=i=>({cancelTime:i,type:"cancelScheduledValues"}),kg=(i,e)=>({endTime:e,type:"exponentialRampToValue",value:i}),Vg=(i,e)=>({endTime:e,type:"linearRampToValue",value:i}),zg=(i,e,t)=>({startTime:e,target:i,timeConstant:t,type:"setTarget"}),Gg=()=>new DOMException("","AbortError"),Hg=i=>(e,t,[n,s,r],o)=>{i(e[s],[t,n,r],a=>a[0]===t&&a[1]===n,o)},Wg=i=>(e,t,n)=>{const s=[];for(let r=0;r<n.numberOfInputs;r+=1)s.push(new Set);i.set(e,{activeInputs:s,outputs:new Set,passiveInputs:new WeakMap,renderer:t})},qg=i=>(e,t)=>{i.set(e,{activeInputs:new Set,passiveInputs:new WeakMap,renderer:t})},ys=new WeakSet,Gu=new WeakMap,Ka=new WeakMap,Hu=new WeakMap,Qa=new WeakMap,xo=new WeakMap,Wu=new WeakMap,Da=new WeakMap,Pa=new WeakMap,Ia=new WeakMap,qu={construct(){return qu}},Xg=i=>{try{const e=new Proxy(i,qu);new e}catch{return!1}return!0},$l=/^import(?:(?:[\s]+[\w]+|(?:[\s]+[\w]+[\s]*,)?[\s]*\{[\s]*[\w]+(?:[\s]+as[\s]+[\w]+)?(?:[\s]*,[\s]*[\w]+(?:[\s]+as[\s]+[\w]+)?)*[\s]*}|(?:[\s]+[\w]+[\s]*,)?[\s]*\*[\s]+as[\s]+[\w]+)[\s]+from)?(?:[\s]*)("([^"\\]|\\.)+"|'([^'\\]|\\.)+')(?:[\s]*);?/,Kl=(i,e)=>{const t=[];let n=i.replace(/^[\s]+/,""),s=n.match($l);for(;s!==null;){const r=s[1].slice(1,-1),o=s[0].replace(/([\s]+)?;?$/,"").replace(r,new URL(r,e).toString());t.push(o),n=n.slice(s[0].length).replace(/^[\s]+/,""),s=n.match($l)}return[t.join(";"),n]},Ql=i=>{if(i!==void 0&&!Array.isArray(i))throw new TypeError("The parameterDescriptors property of given value for processorCtor is not an array.")},Jl=i=>{if(!Xg(i))throw new TypeError("The given value for processorCtor should be a constructor.");if(i.prototype===null||typeof i.prototype!="object")throw new TypeError("The given value for processorCtor should have a prototype.")},Yg=(i,e,t,n,s,r,o,a,c,l,u,h,d)=>{let m=0;return(_,g,p={credentials:"omit"})=>{const f=u.get(_);if(f!==void 0&&f.has(g))return Promise.resolve();const b=l.get(_);if(b!==void 0){const y=b.get(g);if(y!==void 0)return y}const T=r(_),x=T.audioWorklet===void 0?s(g).then(([y,E])=>{const[A,C]=Kl(y,E),S=`${A};((a,b)=>{(a[b]=a[b]||[]).push((AudioWorkletProcessor,global,registerProcessor,sampleRate,self,window)=>{${C}
})})(window,'_AWGS')`;return t(S)}).then(()=>{const y=d._AWGS.pop();if(y===void 0)throw new SyntaxError;n(T.currentTime,T.sampleRate,()=>y(class{},void 0,(E,A)=>{if(E.trim()==="")throw e();const C=Pa.get(T);if(C!==void 0){if(C.has(E))throw e();Jl(A),Ql(A.parameterDescriptors),C.set(E,A)}else Jl(A),Ql(A.parameterDescriptors),Pa.set(T,new Map([[E,A]]))},T.sampleRate,void 0,void 0))}):Promise.all([s(g),Promise.resolve(i(h,h))]).then(([[y,E],A])=>{const C=m+1;m=C;const[S,v]=Kl(y,E),B=`${S};((AudioWorkletProcessor,registerProcessor)=>{${v}
})(${A?"AudioWorkletProcessor":"class extends AudioWorkletProcessor {__b=new WeakSet();constructor(){super();(p=>p.postMessage=(q=>(m,t)=>q.call(p,m,t?t.filter(u=>!this.__b.has(u)):t))(p.postMessage))(this.port)}}"},(n,p)=>registerProcessor(n,class extends p{${A?"":"__c = (a) => a.forEach(e=>this.__b.add(e.buffer));"}process(i,o,p){${A?"":"i.forEach(this.__c);o.forEach(this.__c);this.__c(Object.values(p));"}return super.process(i.map(j=>j.some(k=>k.length===0)?[]:j),o,p)}}));registerProcessor('__sac${C}',class extends AudioWorkletProcessor{process(){return !1}})`,H=new Blob([B],{type:"application/javascript; charset=utf-8"}),k=URL.createObjectURL(H);return T.audioWorklet.addModule(k,p).then(()=>{if(a(T))return T;const G=o(T);return G.audioWorklet.addModule(k,p).then(()=>G)}).then(G=>{if(c===null)throw new SyntaxError;try{new c(G,`__sac${C}`)}catch{throw new SyntaxError}}).finally(()=>URL.revokeObjectURL(k))});return b===void 0?l.set(_,new Map([[g,x]])):b.set(g,x),x.then(()=>{const y=u.get(_);y===void 0?u.set(_,new Set([g])):y.add(g)}).finally(()=>{const y=l.get(_);y!==void 0&&y.delete(g)}),x}},An=(i,e)=>{const t=i.get(e);if(t===void 0)throw new Error("A value with the given key could not be found.");return t},yo=(i,e)=>{const t=Array.from(i).filter(e);if(t.length>1)throw Error("More than one element was found.");if(t.length===0)throw Error("No element was found.");const[n]=t;return i.delete(n),n},Xu=(i,e,t,n)=>{const s=An(i,e),r=yo(s,o=>o[0]===t&&o[1]===n);return s.size===0&&i.delete(e),r},sr=i=>An(Wu,i),Ss=i=>{if(ys.has(i))throw new Error("The AudioNode is already stored.");ys.add(i),sr(i).forEach(e=>e(!0))},Yu=i=>"port"in i,rr=i=>{if(!ys.has(i))throw new Error("The AudioNode is not stored.");ys.delete(i),sr(i).forEach(e=>e(!1))},Na=(i,e)=>{!Yu(i)&&e.every(t=>t.size===0)&&rr(i)},jg=(i,e,t,n,s,r,o,a,c,l,u,h,d)=>{const m=new WeakMap;return(_,g,p,f,b)=>{const{activeInputs:T,passiveInputs:x}=r(g),{outputs:y}=r(_),E=a(_),A=C=>{const S=c(g),v=c(_);if(C){const R=Xu(x,_,p,f);i(T,_,R,!1),!b&&!h(_)&&t(v,S,p,f),d(g)&&Ss(g)}else{const R=n(T,_,p,f);e(x,f,R,!1),!b&&!h(_)&&s(v,S,p,f);const P=o(g);if(P===0)u(g)&&Na(g,T);else{const N=m.get(g);N!==void 0&&clearTimeout(N),m.set(g,setTimeout(()=>{u(g)&&Na(g,T)},P*1e3))}}};return l(y,[g,p,f],C=>C[0]===g&&C[1]===p&&C[2]===f,!0)?(E.add(A),u(_)?i(T,_,[p,f,A],!0):e(x,f,[_,p,A],!0),!0):!1}},Zg=i=>(e,t,[n,s,r],o)=>{const a=e.get(n);a===void 0?e.set(n,new Set([[s,t,r]])):i(a,[s,t,r],c=>c[0]===s&&c[1]===t,o)},$g=i=>(e,t)=>{const n=i(e,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",gain:0});t.connect(n).connect(e.destination);const s=()=>{t.removeEventListener("ended",s),t.disconnect(n),n.disconnect()};t.addEventListener("ended",s)},Kg=i=>(e,t)=>{i(e).add(t)},Qg={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",fftSize:2048,maxDecibels:-30,minDecibels:-100,smoothingTimeConstant:.8},Jg=(i,e,t,n,s,r)=>class extends i{constructor(a,c){const l=s(a),u={...Qg,...c},h=n(l,u),d=r(l)?e():null;super(a,!1,h,d),this._nativeAnalyserNode=h}get fftSize(){return this._nativeAnalyserNode.fftSize}set fftSize(a){this._nativeAnalyserNode.fftSize=a}get frequencyBinCount(){return this._nativeAnalyserNode.frequencyBinCount}get maxDecibels(){return this._nativeAnalyserNode.maxDecibels}set maxDecibels(a){const c=this._nativeAnalyserNode.maxDecibels;if(this._nativeAnalyserNode.maxDecibels=a,!(a>this._nativeAnalyserNode.minDecibels))throw this._nativeAnalyserNode.maxDecibels=c,t()}get minDecibels(){return this._nativeAnalyserNode.minDecibels}set minDecibels(a){const c=this._nativeAnalyserNode.minDecibels;if(this._nativeAnalyserNode.minDecibels=a,!(this._nativeAnalyserNode.maxDecibels>a))throw this._nativeAnalyserNode.minDecibels=c,t()}get smoothingTimeConstant(){return this._nativeAnalyserNode.smoothingTimeConstant}set smoothingTimeConstant(a){this._nativeAnalyserNode.smoothingTimeConstant=a}getByteFrequencyData(a){this._nativeAnalyserNode.getByteFrequencyData(a)}getByteTimeDomainData(a){this._nativeAnalyserNode.getByteTimeDomainData(a)}getFloatFrequencyData(a){this._nativeAnalyserNode.getFloatFrequencyData(a)}getFloatTimeDomainData(a){this._nativeAnalyserNode.getFloatTimeDomainData(a)}},Vt=(i,e)=>i.context===e,ev=(i,e,t)=>()=>{const n=new WeakMap,s=async(r,o)=>{let a=e(r);if(!Vt(a,o)){const l={channelCount:a.channelCount,channelCountMode:a.channelCountMode,channelInterpretation:a.channelInterpretation,fftSize:a.fftSize,maxDecibels:a.maxDecibels,minDecibels:a.minDecibels,smoothingTimeConstant:a.smoothingTimeConstant};a=i(o,l)}return n.set(o,a),await t(r,o,a),a};return{render(r,o){const a=n.get(o);return a!==void 0?Promise.resolve(a):s(r,o)}}},eo=i=>{try{i.copyToChannel(new Float32Array(1),0,-1)}catch{return!1}return!0},Bn=()=>new DOMException("","IndexSizeError"),Ja=i=>{i.getChannelData=(e=>t=>{try{return e.call(i,t)}catch(n){throw n.code===12?Bn():n}})(i.getChannelData)},tv={numberOfChannels:1},nv=(i,e,t,n,s,r,o,a)=>{let c=null;return class ju{constructor(u){if(s===null)throw new Error("Missing the native OfflineAudioContext constructor.");const{length:h,numberOfChannels:d,sampleRate:m}={...tv,...u};c===null&&(c=new s(1,1,44100));const _=n!==null&&e(r,r)?new n({length:h,numberOfChannels:d,sampleRate:m}):c.createBuffer(d,h,m);if(_.numberOfChannels===0)throw t();return typeof _.copyFromChannel!="function"?(o(_),Ja(_)):e(eo,()=>eo(_))||a(_),i.add(_),_}static[Symbol.hasInstance](u){return u!==null&&typeof u=="object"&&Object.getPrototypeOf(u)===ju.prototype||i.has(u)}}},Kt=-34028234663852886e22,Ht=-Kt,Kn=i=>ys.has(i),iv={buffer:null,channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",loop:!1,loopEnd:0,loopStart:0,playbackRate:1},sv=(i,e,t,n,s,r,o,a)=>class extends i{constructor(l,u){const h=r(l),d={...iv,...u},m=s(h,d),_=o(h),g=_?e():null;super(l,!1,m,g),this._audioBufferSourceNodeRenderer=g,this._isBufferNullified=!1,this._isBufferSet=d.buffer!==null,this._nativeAudioBufferSourceNode=m,this._onended=null,this._playbackRate=t(this,_,m.playbackRate,Ht,Kt)}get buffer(){return this._isBufferNullified?null:this._nativeAudioBufferSourceNode.buffer}set buffer(l){if(this._nativeAudioBufferSourceNode.buffer=l,l!==null){if(this._isBufferSet)throw n();this._isBufferSet=!0}}get loop(){return this._nativeAudioBufferSourceNode.loop}set loop(l){this._nativeAudioBufferSourceNode.loop=l}get loopEnd(){return this._nativeAudioBufferSourceNode.loopEnd}set loopEnd(l){this._nativeAudioBufferSourceNode.loopEnd=l}get loopStart(){return this._nativeAudioBufferSourceNode.loopStart}set loopStart(l){this._nativeAudioBufferSourceNode.loopStart=l}get onended(){return this._onended}set onended(l){const u=typeof l=="function"?a(this,l):null;this._nativeAudioBufferSourceNode.onended=u;const h=this._nativeAudioBufferSourceNode.onended;this._onended=h!==null&&h===u?l:h}get playbackRate(){return this._playbackRate}start(l=0,u=0,h){if(this._nativeAudioBufferSourceNode.start(l,u,h),this._audioBufferSourceNodeRenderer!==null&&(this._audioBufferSourceNodeRenderer.start=h===void 0?[l,u]:[l,u,h]),this.context.state!=="closed"){Ss(this);const d=()=>{this._nativeAudioBufferSourceNode.removeEventListener("ended",d),Kn(this)&&rr(this)};this._nativeAudioBufferSourceNode.addEventListener("ended",d)}}stop(l=0){this._nativeAudioBufferSourceNode.stop(l),this._audioBufferSourceNodeRenderer!==null&&(this._audioBufferSourceNodeRenderer.stop=l)}},rv=(i,e,t,n,s)=>()=>{const r=new WeakMap;let o=null,a=null;const c=async(l,u)=>{let h=t(l);const d=Vt(h,u);if(!d){const m={buffer:h.buffer,channelCount:h.channelCount,channelCountMode:h.channelCountMode,channelInterpretation:h.channelInterpretation,loop:h.loop,loopEnd:h.loopEnd,loopStart:h.loopStart,playbackRate:h.playbackRate.value};h=e(u,m),o!==null&&h.start(...o),a!==null&&h.stop(a)}return r.set(u,h),d?await i(u,l.playbackRate,h.playbackRate):await n(u,l.playbackRate,h.playbackRate),await s(l,u,h),h};return{set start(l){o=l},set stop(l){a=l},render(l,u){const h=r.get(u);return h!==void 0?Promise.resolve(h):c(l,u)}}},ov=i=>"playbackRate"in i,av=i=>"frequency"in i&&"gain"in i,cv=i=>"offset"in i,lv=i=>!("frequency"in i)&&"gain"in i,uv=i=>"detune"in i&&"frequency"in i&&!("gain"in i),hv=i=>"pan"in i,Wt=i=>An(Gu,i),or=i=>An(Hu,i),Fa=(i,e)=>{const{activeInputs:t}=Wt(i);t.forEach(s=>s.forEach(([r])=>{e.includes(i)||Fa(r,[...e,i])}));const n=ov(i)?[i.playbackRate]:Yu(i)?Array.from(i.parameters.values()):av(i)?[i.Q,i.detune,i.frequency,i.gain]:cv(i)?[i.offset]:lv(i)?[i.gain]:uv(i)?[i.detune,i.frequency]:hv(i)?[i.pan]:[];for(const s of n){const r=or(s);r!==void 0&&r.activeInputs.forEach(([o])=>Fa(o,e))}Kn(i)&&rr(i)},Zu=i=>{Fa(i.destination,[])},dv=i=>i===void 0||typeof i=="number"||typeof i=="string"&&(i==="balanced"||i==="interactive"||i==="playback"),fv=(i,e,t,n,s,r,o,a,c)=>class extends i{constructor(u={}){if(c===null)throw new Error("Missing the native AudioContext constructor.");let h;try{h=new c(u)}catch(_){throw _.code===12&&_.message==="sampleRate is not in range"?t():_}if(h===null)throw n();if(!dv(u.latencyHint))throw new TypeError(`The provided value '${u.latencyHint}' is not a valid enum value of type AudioContextLatencyCategory.`);if(u.sampleRate!==void 0&&h.sampleRate!==u.sampleRate)throw t();super(h,2);const{latencyHint:d}=u,{sampleRate:m}=h;if(this._baseLatency=typeof h.baseLatency=="number"?h.baseLatency:d==="balanced"?512/m:d==="interactive"||d===void 0?256/m:d==="playback"?1024/m:Math.max(2,Math.min(128,Math.round(d*m/128)))*128/m,this._nativeAudioContext=h,c.name==="webkitAudioContext"?(this._nativeGainNode=h.createGain(),this._nativeOscillatorNode=h.createOscillator(),this._nativeGainNode.gain.value=1e-37,this._nativeOscillatorNode.connect(this._nativeGainNode).connect(h.destination),this._nativeOscillatorNode.start()):(this._nativeGainNode=null,this._nativeOscillatorNode=null),this._state=null,h.state==="running"){this._state="suspended";const _=()=>{this._state==="suspended"&&(this._state=null),h.removeEventListener("statechange",_)};h.addEventListener("statechange",_)}}get baseLatency(){return this._baseLatency}get state(){return this._state!==null?this._state:this._nativeAudioContext.state}close(){return this.state==="closed"?this._nativeAudioContext.close().then(()=>{throw e()}):(this._state==="suspended"&&(this._state=null),this._nativeAudioContext.close().then(()=>{this._nativeGainNode!==null&&this._nativeOscillatorNode!==null&&(this._nativeOscillatorNode.stop(),this._nativeGainNode.disconnect(),this._nativeOscillatorNode.disconnect()),Zu(this)}))}createMediaElementSource(u){return new s(this,{mediaElement:u})}createMediaStreamDestination(){return new r(this)}createMediaStreamSource(u){return new o(this,{mediaStream:u})}createMediaStreamTrackSource(u){return new a(this,{mediaStreamTrack:u})}resume(){return this._state==="suspended"?new Promise((u,h)=>{const d=()=>{this._nativeAudioContext.removeEventListener("statechange",d),this._nativeAudioContext.state==="running"?u():this.resume().then(u,h)};this._nativeAudioContext.addEventListener("statechange",d)}):this._nativeAudioContext.resume().catch(u=>{throw u===void 0||u.code===15?e():u})}suspend(){return this._nativeAudioContext.suspend().catch(u=>{throw u===void 0?e():u})}},pv=(i,e,t,n,s,r,o,a)=>class extends i{constructor(l,u){const h=r(l),d=o(h),m=s(h,u,d),_=d?e(a):null;super(l,!1,m,_),this._isNodeOfNativeOfflineAudioContext=d,this._nativeAudioDestinationNode=m}get channelCount(){return this._nativeAudioDestinationNode.channelCount}set channelCount(l){if(this._isNodeOfNativeOfflineAudioContext)throw n();if(l>this._nativeAudioDestinationNode.maxChannelCount)throw t();this._nativeAudioDestinationNode.channelCount=l}get channelCountMode(){return this._nativeAudioDestinationNode.channelCountMode}set channelCountMode(l){if(this._isNodeOfNativeOfflineAudioContext)throw n();this._nativeAudioDestinationNode.channelCountMode=l}get maxChannelCount(){return this._nativeAudioDestinationNode.maxChannelCount}},mv=i=>{const e=new WeakMap,t=async(n,s)=>{const r=s.destination;return e.set(s,r),await i(n,s,r),r};return{render(n,s){const r=e.get(s);return r!==void 0?Promise.resolve(r):t(n,s)}}},_v=(i,e,t,n,s,r,o,a)=>(c,l)=>{const u=l.listener,h=()=>{const y=new Float32Array(1),E=e(l,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:9}),A=o(l);let C=!1,S=[0,0,-1,0,1,0],v=[0,0,0];const R=()=>{if(C)return;C=!0;const H=n(l,256,9,0);H.onaudioprocess=({inputBuffer:k})=>{const G=[r(k,y,0),r(k,y,1),r(k,y,2),r(k,y,3),r(k,y,4),r(k,y,5)];G.some((j,Q)=>j!==S[Q])&&(u.setOrientation(...G),S=G);const V=[r(k,y,6),r(k,y,7),r(k,y,8)];V.some((j,Q)=>j!==v[Q])&&(u.setPosition(...V),v=V)},E.connect(H)},P=H=>k=>{k!==S[H]&&(S[H]=k,u.setOrientation(...S))},N=H=>k=>{k!==v[H]&&(v[H]=k,u.setPosition(...v))},B=(H,k,G)=>{const V=t(l,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",offset:k});V.connect(E,0,H),V.start(),Object.defineProperty(V.offset,"defaultValue",{get(){return k}});const j=i({context:c},A,V.offset,Ht,Kt);return a(j,"value",Q=>()=>Q.call(j),Q=>ne=>{try{Q.call(j,ne)}catch(ge){if(ge.code!==9)throw ge}R(),A&&G(ne)}),j.cancelAndHoldAtTime=(Q=>A?()=>{throw s()}:(...ne)=>{const ge=Q.apply(j,ne);return R(),ge})(j.cancelAndHoldAtTime),j.cancelScheduledValues=(Q=>A?()=>{throw s()}:(...ne)=>{const ge=Q.apply(j,ne);return R(),ge})(j.cancelScheduledValues),j.exponentialRampToValueAtTime=(Q=>A?()=>{throw s()}:(...ne)=>{const ge=Q.apply(j,ne);return R(),ge})(j.exponentialRampToValueAtTime),j.linearRampToValueAtTime=(Q=>A?()=>{throw s()}:(...ne)=>{const ge=Q.apply(j,ne);return R(),ge})(j.linearRampToValueAtTime),j.setTargetAtTime=(Q=>A?()=>{throw s()}:(...ne)=>{const ge=Q.apply(j,ne);return R(),ge})(j.setTargetAtTime),j.setValueAtTime=(Q=>A?()=>{throw s()}:(...ne)=>{const ge=Q.apply(j,ne);return R(),ge})(j.setValueAtTime),j.setValueCurveAtTime=(Q=>A?()=>{throw s()}:(...ne)=>{const ge=Q.apply(j,ne);return R(),ge})(j.setValueCurveAtTime),j};return{forwardX:B(0,0,P(0)),forwardY:B(1,0,P(1)),forwardZ:B(2,-1,P(2)),positionX:B(6,0,N(0)),positionY:B(7,0,N(1)),positionZ:B(8,0,N(2)),upX:B(3,0,P(3)),upY:B(4,1,P(4)),upZ:B(5,0,P(5))}},{forwardX:d,forwardY:m,forwardZ:_,positionX:g,positionY:p,positionZ:f,upX:b,upY:T,upZ:x}=u.forwardX===void 0?h():u;return{get forwardX(){return d},get forwardY(){return m},get forwardZ(){return _},get positionX(){return g},get positionY(){return p},get positionZ(){return f},get upX(){return b},get upY(){return T},get upZ(){return x}}},to=i=>"context"in i,ar=i=>to(i[0]),Gi=(i,e,t,n)=>{for(const s of i)if(t(s)){if(n)return!1;throw Error("The set contains at least one similar element.")}return i.add(e),!0},eu=(i,e,[t,n],s)=>{Gi(i,[e,t,n],r=>r[0]===e&&r[1]===t,s)},tu=(i,[e,t,n],s)=>{const r=i.get(e);r===void 0?i.set(e,new Set([[t,n]])):Gi(r,[t,n],o=>o[0]===t,s)},Ps=i=>"inputs"in i,no=(i,e,t,n)=>{if(Ps(e)){const s=e.inputs[n];return i.connect(s,t,0),[s,t,0]}return i.connect(e,t,n),[e,t,n]},$u=(i,e,t)=>{for(const n of i)if(n[0]===e&&n[1]===t)return i.delete(n),n;return null},gv=(i,e,t)=>yo(i,n=>n[0]===e&&n[1]===t),Ku=(i,e)=>{if(!sr(i).delete(e))throw new Error("Missing the expected event listener.")},Qu=(i,e,t)=>{const n=An(i,e),s=yo(n,r=>r[0]===t);return n.size===0&&i.delete(e),s},io=(i,e,t,n)=>{Ps(e)?i.disconnect(e.inputs[n],t,0):i.disconnect(e,t,n)},ft=i=>An(Ka,i),Ks=i=>An(Qa,i),ki=i=>Da.has(i),Yr=i=>!ys.has(i),nu=(i,e)=>new Promise(t=>{if(e!==null)t(!0);else{const n=i.createScriptProcessor(256,1,1),s=i.createGain(),r=i.createBuffer(1,2,44100),o=r.getChannelData(0);o[0]=1,o[1]=1;const a=i.createBufferSource();a.buffer=r,a.loop=!0,a.connect(n).connect(i.destination),a.connect(s),a.disconnect(s),n.onaudioprocess=c=>{const l=c.inputBuffer.getChannelData(0);Array.prototype.some.call(l,u=>u===1)?t(!0):t(!1),a.stop(),n.onaudioprocess=null,a.disconnect(n),n.disconnect(i.destination)},a.start()}}),Ma=(i,e)=>{const t=new Map;for(const n of i)for(const s of n){const r=t.get(s);t.set(s,r===void 0?1:r+1)}t.forEach((n,s)=>e(s,n))},so=i=>"context"in i,vv=i=>{const e=new Map;i.connect=(t=>(n,s=0,r=0)=>{const o=so(n)?t(n,s,r):t(n,s),a=e.get(n);return a===void 0?e.set(n,[{input:r,output:s}]):a.every(c=>c.input!==r||c.output!==s)&&a.push({input:r,output:s}),o})(i.connect.bind(i)),i.disconnect=(t=>(n,s,r)=>{if(t.apply(i),n===void 0)e.clear();else if(typeof n=="number")for(const[o,a]of e){const c=a.filter(l=>l.output!==n);c.length===0?e.delete(o):e.set(o,c)}else if(e.has(n))if(s===void 0)e.delete(n);else{const o=e.get(n);if(o!==void 0){const a=o.filter(c=>c.output!==s&&(c.input!==r||r===void 0));a.length===0?e.delete(n):e.set(n,a)}}for(const[o,a]of e)a.forEach(c=>{so(o)?i.connect(o,c.output,c.input):i.connect(o,c.output)})})(i.disconnect)},xv=(i,e,t,n)=>{const{activeInputs:s,passiveInputs:r}=or(e),{outputs:o}=Wt(i),a=sr(i),c=l=>{const u=ft(i),h=Ks(e);if(l){const d=Qu(r,i,t);eu(s,i,d,!1),!n&&!ki(i)&&u.connect(h,t)}else{const d=gv(s,i,t);tu(r,d,!1),!n&&!ki(i)&&u.disconnect(h,t)}};return Gi(o,[e,t],l=>l[0]===e&&l[1]===t,!0)?(a.add(c),Kn(i)?eu(s,i,[t,c],!0):tu(r,[i,t,c],!0),!0):!1},yv=(i,e,t,n)=>{const{activeInputs:s,passiveInputs:r}=Wt(e),o=$u(s[n],i,t);return o===null?[Xu(r,i,t,n)[2],!1]:[o[2],!0]},Sv=(i,e,t)=>{const{activeInputs:n,passiveInputs:s}=or(e),r=$u(n,i,t);return r===null?[Qu(s,i,t)[1],!1]:[r[2],!0]},ec=(i,e,t,n,s)=>{const[r,o]=yv(i,t,n,s);if(r!==null&&(Ku(i,r),o&&!e&&!ki(i)&&io(ft(i),ft(t),n,s)),Kn(t)){const{activeInputs:a}=Wt(t);Na(t,a)}},tc=(i,e,t,n)=>{const[s,r]=Sv(i,t,n);s!==null&&(Ku(i,s),r&&!e&&!ki(i)&&ft(i).disconnect(Ks(t),n))},Mv=(i,e)=>{const t=Wt(i),n=[];for(const s of t.outputs)ar(s)?ec(i,e,...s):tc(i,e,...s),n.push(s[0]);return t.outputs.clear(),n},Tv=(i,e,t)=>{const n=Wt(i),s=[];for(const r of n.outputs)r[1]===t&&(ar(r)?ec(i,e,...r):tc(i,e,...r),s.push(r[0]),n.outputs.delete(r));return s},Ev=(i,e,t,n,s)=>{const r=Wt(i);return Array.from(r.outputs).filter(o=>o[0]===t&&(n===void 0||o[1]===n)&&(s===void 0||o[2]===s)).map(o=>(ar(o)?ec(i,e,...o):tc(i,e,...o),r.outputs.delete(o),o[0]))},bv=(i,e,t,n,s,r,o,a,c,l,u,h,d,m,_,g)=>class extends l{constructor(f,b,T,x){super(T),this._context=f,this._nativeAudioNode=T;const y=u(f);h(y)&&t(nu,()=>nu(y,g))!==!0&&vv(T),Ka.set(this,T),Wu.set(this,new Set),f.state!=="closed"&&b&&Ss(this),i(this,x,T)}get channelCount(){return this._nativeAudioNode.channelCount}set channelCount(f){this._nativeAudioNode.channelCount=f}get channelCountMode(){return this._nativeAudioNode.channelCountMode}set channelCountMode(f){this._nativeAudioNode.channelCountMode=f}get channelInterpretation(){return this._nativeAudioNode.channelInterpretation}set channelInterpretation(f){this._nativeAudioNode.channelInterpretation=f}get context(){return this._context}get numberOfInputs(){return this._nativeAudioNode.numberOfInputs}get numberOfOutputs(){return this._nativeAudioNode.numberOfOutputs}connect(f,b=0,T=0){if(b<0||b>=this._nativeAudioNode.numberOfOutputs)throw s();const x=u(this._context),y=_(x);if(d(f)||m(f))throw r();if(to(f)){const C=ft(f);try{const v=no(this._nativeAudioNode,C,b,T),R=Yr(this);(y||R)&&this._nativeAudioNode.disconnect(...v),this.context.state!=="closed"&&!R&&Yr(f)&&Ss(f)}catch(v){throw v.code===12?r():v}if(e(this,f,b,T,y)){const v=c([this],f);Ma(v,n(y))}return f}const E=Ks(f);if(E.name==="playbackRate"&&E.maxValue===1024)throw o();try{this._nativeAudioNode.connect(E,b),(y||Yr(this))&&this._nativeAudioNode.disconnect(E,b)}catch(C){throw C.code===12?r():C}if(xv(this,f,b,y)){const C=c([this],f);Ma(C,n(y))}}disconnect(f,b,T){let x;const y=u(this._context),E=_(y);if(f===void 0)x=Mv(this,E);else if(typeof f=="number"){if(f<0||f>=this.numberOfOutputs)throw s();x=Tv(this,E,f)}else{if(b!==void 0&&(b<0||b>=this.numberOfOutputs)||to(f)&&T!==void 0&&(T<0||T>=f.numberOfInputs))throw s();if(x=Ev(this,E,f,b,T),x.length===0)throw r()}for(const A of x){const C=c([this],A);Ma(C,a)}}},wv=(i,e,t,n,s,r,o,a,c,l,u,h,d)=>(m,_,g,p=null,f=null)=>{const b=g.value,T=new Og(b),x=_?n(T):null,y={get defaultValue(){return b},get maxValue(){return p===null?g.maxValue:p},get minValue(){return f===null?g.minValue:f},get value(){return g.value},set value(E){g.value=E,y.setValueAtTime(E,m.context.currentTime)},cancelAndHoldAtTime(E){if(typeof g.cancelAndHoldAtTime=="function")x===null&&T.flush(m.context.currentTime),T.add(s(E)),g.cancelAndHoldAtTime(E);else{const A=Array.from(T).pop();x===null&&T.flush(m.context.currentTime),T.add(s(E));const C=Array.from(T).pop();g.cancelScheduledValues(E),A!==C&&C!==void 0&&(C.type==="exponentialRampToValue"?g.exponentialRampToValueAtTime(C.value,C.endTime):C.type==="linearRampToValue"?g.linearRampToValueAtTime(C.value,C.endTime):C.type==="setValue"?g.setValueAtTime(C.value,C.startTime):C.type==="setValueCurve"&&g.setValueCurveAtTime(C.values,C.startTime,C.duration))}return y},cancelScheduledValues(E){return x===null&&T.flush(m.context.currentTime),T.add(r(E)),g.cancelScheduledValues(E),y},exponentialRampToValueAtTime(E,A){if(E===0)throw new RangeError;if(!Number.isFinite(A)||A<0)throw new RangeError;const C=m.context.currentTime;return x===null&&T.flush(C),Array.from(T).length===0&&(T.add(l(b,C)),g.setValueAtTime(b,C)),T.add(o(E,A)),g.exponentialRampToValueAtTime(E,A),y},linearRampToValueAtTime(E,A){const C=m.context.currentTime;return x===null&&T.flush(C),Array.from(T).length===0&&(T.add(l(b,C)),g.setValueAtTime(b,C)),T.add(a(E,A)),g.linearRampToValueAtTime(E,A),y},setTargetAtTime(E,A,C){return x===null&&T.flush(m.context.currentTime),T.add(c(E,A,C)),g.setTargetAtTime(E,A,C),y},setValueAtTime(E,A){return x===null&&T.flush(m.context.currentTime),T.add(l(E,A)),g.setValueAtTime(E,A),y},setValueCurveAtTime(E,A,C){const S=E instanceof Float32Array?E:new Float32Array(E);if(h!==null&&h.name==="webkitAudioContext"){const v=A+C,R=m.context.sampleRate,P=Math.ceil(A*R),N=Math.floor(v*R),B=N-P,H=new Float32Array(B);for(let G=0;G<B;G+=1){const V=(S.length-1)/C*((P+G)/R-A),j=Math.floor(V),Q=Math.ceil(V);H[G]=j===Q?S[j]:(1-(V-j))*S[j]+(1-(Q-V))*S[Q]}x===null&&T.flush(m.context.currentTime),T.add(u(H,A,C)),g.setValueCurveAtTime(H,A,C);const k=N/R;k<v&&d(y,H[H.length-1],k),d(y,S[S.length-1],v)}else x===null&&T.flush(m.context.currentTime),T.add(u(S,A,C)),g.setValueCurveAtTime(S,A,C);return y}};return t.set(y,g),e.set(y,m),i(y,x),y},Av=i=>({replay(e){for(const t of i)if(t.type==="exponentialRampToValue"){const{endTime:n,value:s}=t;e.exponentialRampToValueAtTime(s,n)}else if(t.type==="linearRampToValue"){const{endTime:n,value:s}=t;e.linearRampToValueAtTime(s,n)}else if(t.type==="setTarget"){const{startTime:n,target:s,timeConstant:r}=t;e.setTargetAtTime(s,n,r)}else if(t.type==="setValue"){const{startTime:n,value:s}=t;e.setValueAtTime(s,n)}else if(t.type==="setValueCurve"){const{duration:n,startTime:s,values:r}=t;e.setValueCurveAtTime(r,s,n)}else throw new Error("Can't apply an unknown automation.")}});class Ju{constructor(e){this._map=new Map(e)}get size(){return this._map.size}entries(){return this._map.entries()}forEach(e,t=null){return this._map.forEach((n,s)=>e.call(t,n,s,this))}get(e){return this._map.get(e)}has(e){return this._map.has(e)}keys(){return this._map.keys()}values(){return this._map.values()}}const Cv={channelCount:2,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:1,numberOfOutputs:1,parameterData:{},processorOptions:{}},Rv=(i,e,t,n,s,r,o,a,c,l,u,h,d,m)=>class extends e{constructor(g,p,f){var b;const T=a(g),x=c(T),y=u({...Cv,...f});d(y);const E=Pa.get(T),A=E?.get(p),C=x||T.state!=="closed"?T:(b=o(T))!==null&&b!==void 0?b:T,S=s(C,x?null:g.baseLatency,l,p,A,y),v=x?n(p,y,A):null;super(g,!0,S,v);const R=[];S.parameters.forEach((N,B)=>{const H=t(this,x,N);R.push([B,H])}),this._nativeAudioWorkletNode=S,this._onprocessorerror=null,this._parameters=new Ju(R),x&&i(T,this);const{activeInputs:P}=r(this);h(S,P)}get onprocessorerror(){return this._onprocessorerror}set onprocessorerror(g){const p=typeof g=="function"?m(this,g):null;this._nativeAudioWorkletNode.onprocessorerror=p;const f=this._nativeAudioWorkletNode.onprocessorerror;this._onprocessorerror=f!==null&&f===p?g:f}get parameters(){return this._parameters===null?this._nativeAudioWorkletNode.parameters:this._parameters}get port(){return this._nativeAudioWorkletNode.port}};function ro(i,e,t,n,s){if(typeof i.copyFromChannel=="function")e[t].byteLength===0&&(e[t]=new Float32Array(128)),i.copyFromChannel(e[t],n,s);else{const r=i.getChannelData(n);if(e[t].byteLength===0)e[t]=r.slice(s,s+128);else{const o=new Float32Array(r.buffer,s*Float32Array.BYTES_PER_ELEMENT,128);e[t].set(o)}}}const eh=(i,e,t,n,s)=>{typeof i.copyToChannel=="function"?e[t].byteLength!==0&&i.copyToChannel(e[t],n,s):e[t].byteLength!==0&&i.getChannelData(n).set(e[t],s)},oo=(i,e)=>{const t=[];for(let n=0;n<i;n+=1){const s=[],r=typeof e=="number"?e:e[n];for(let o=0;o<r;o+=1)s.push(new Float32Array(128));t.push(s)}return t},Dv=(i,e)=>{const t=An(Ia,i),n=ft(e);return An(t,n)},Pv=async(i,e,t,n,s,r,o)=>{const a=e===null?Math.ceil(i.context.length/128)*128:e.length,c=n.channelCount*n.numberOfInputs,l=s.reduce((p,f)=>p+f,0),u=l===0?null:t.createBuffer(l,a,t.sampleRate);if(r===void 0)throw new Error("Missing the processor constructor.");const h=Wt(i),d=await Dv(t,i),m=oo(n.numberOfInputs,n.channelCount),_=oo(n.numberOfOutputs,s),g=Array.from(i.parameters.keys()).reduce((p,f)=>({...p,[f]:new Float32Array(128)}),{});for(let p=0;p<a;p+=128){if(n.numberOfInputs>0&&e!==null)for(let f=0;f<n.numberOfInputs;f+=1)for(let b=0;b<n.channelCount;b+=1)ro(e,m[f],b,b,p);r.parameterDescriptors!==void 0&&e!==null&&r.parameterDescriptors.forEach(({name:f},b)=>{ro(e,g,f,c+b,p)});for(let f=0;f<n.numberOfInputs;f+=1)for(let b=0;b<s[f];b+=1)_[f][b].byteLength===0&&(_[f][b]=new Float32Array(128));try{const f=m.map((T,x)=>h.activeInputs[x].size===0?[]:T),b=o(p/t.sampleRate,t.sampleRate,()=>d.process(f,_,g));if(u!==null)for(let T=0,x=0;T<n.numberOfOutputs;T+=1){for(let y=0;y<s[T];y+=1)eh(u,_[T],y,x+y,p);x+=s[T]}if(!b)break}catch(f){i.dispatchEvent(new ErrorEvent("processorerror",{colno:f.colno,filename:f.filename,lineno:f.lineno,message:f.message}));break}}return u},Iv=(i,e,t,n,s,r,o,a,c,l,u,h,d,m,_,g)=>(p,f,b)=>{const T=new WeakMap;let x=null;const y=async(E,A)=>{let C=u(E),S=null;const v=Vt(C,A),R=Array.isArray(f.outputChannelCount)?f.outputChannelCount:Array.from(f.outputChannelCount);if(h===null){const P=R.reduce((k,G)=>k+G,0),N=s(A,{channelCount:Math.max(1,P),channelCountMode:"explicit",channelInterpretation:"discrete",numberOfOutputs:Math.max(1,P)}),B=[];for(let k=0;k<E.numberOfOutputs;k+=1)B.push(n(A,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:R[k]}));const H=o(A,{channelCount:f.channelCount,channelCountMode:f.channelCountMode,channelInterpretation:f.channelInterpretation,gain:1});H.connect=e.bind(null,B),H.disconnect=c.bind(null,B),S=[N,B,H]}else v||(C=new h(A,p));if(T.set(A,S===null?C:S[2]),S!==null){if(x===null){if(b===void 0)throw new Error("Missing the processor constructor.");if(d===null)throw new Error("Missing the native OfflineAudioContext constructor.");const G=E.channelCount*E.numberOfInputs,V=b.parameterDescriptors===void 0?0:b.parameterDescriptors.length,j=G+V;x=Pv(E,j===0?null:await(async()=>{const ne=new d(j,Math.ceil(E.context.length/128)*128,A.sampleRate),ge=[],Be=[];for(let oe=0;oe<f.numberOfInputs;oe+=1)ge.push(o(ne,{channelCount:f.channelCount,channelCountMode:f.channelCountMode,channelInterpretation:f.channelInterpretation,gain:1})),Be.push(s(ne,{channelCount:f.channelCount,channelCountMode:"explicit",channelInterpretation:"discrete",numberOfOutputs:f.channelCount}));const Y=await Promise.all(Array.from(E.parameters.values()).map(async oe=>{const se=r(ne,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",offset:oe.value});return await m(ne,oe,se.offset),se})),Z=n(ne,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:Math.max(1,G+V)});for(let oe=0;oe<f.numberOfInputs;oe+=1){ge[oe].connect(Be[oe]);for(let se=0;se<f.channelCount;se+=1)Be[oe].connect(Z,se,oe*f.channelCount+se)}for(const[oe,se]of Y.entries())se.connect(Z,0,G+oe),se.start(0);return Z.connect(ne.destination),await Promise.all(ge.map(oe=>_(E,ne,oe))),g(ne)})(),A,f,R,b,l)}const P=await x,N=t(A,{buffer:null,channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",loop:!1,loopEnd:0,loopStart:0,playbackRate:1}),[B,H,k]=S;P!==null&&(N.buffer=P,N.start(0)),N.connect(B);for(let G=0,V=0;G<E.numberOfOutputs;G+=1){const j=H[G];for(let Q=0;Q<R[G];Q+=1)B.connect(j,V+Q,Q);V+=R[G]}return k}if(v)for(const[P,N]of E.parameters.entries())await i(A,N,C.parameters.get(P));else for(const[P,N]of E.parameters.entries())await m(A,N,C.parameters.get(P));return await _(E,A,C),C};return{render(E,A){a(A,E);const C=T.get(A);return C!==void 0?Promise.resolve(C):y(E,A)}}},Nv=(i,e,t,n,s,r,o,a,c,l,u,h,d,m,_,g,p,f,b,T)=>class extends _{constructor(y,E){super(y,E),this._nativeContext=y,this._audioWorklet=i===void 0?void 0:{addModule:(A,C)=>i(this,A,C)}}get audioWorklet(){return this._audioWorklet}createAnalyser(){return new e(this)}createBiquadFilter(){return new s(this)}createBuffer(y,E,A){return new t({length:E,numberOfChannels:y,sampleRate:A})}createBufferSource(){return new n(this)}createChannelMerger(y=6){return new r(this,{numberOfInputs:y})}createChannelSplitter(y=6){return new o(this,{numberOfOutputs:y})}createConstantSource(){return new a(this)}createConvolver(){return new c(this)}createDelay(y=1){return new u(this,{maxDelayTime:y})}createDynamicsCompressor(){return new h(this)}createGain(){return new d(this)}createIIRFilter(y,E){return new m(this,{feedback:E,feedforward:y})}createOscillator(){return new g(this)}createPanner(){return new p(this)}createPeriodicWave(y,E,A={disableNormalization:!1}){return new f(this,{...A,imag:E,real:y})}createStereoPanner(){return new b(this)}createWaveShaper(){return new T(this)}decodeAudioData(y,E,A){return l(this._nativeContext,y).then(C=>(typeof E=="function"&&E(C),C),C=>{throw typeof A=="function"&&A(C),C})}},Fv={Q:1,channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",detune:0,frequency:350,gain:0,type:"lowpass"},Lv=(i,e,t,n,s,r,o,a)=>class extends i{constructor(l,u){const h=r(l),d={...Fv,...u},m=s(h,d),_=o(h),g=_?t():null;super(l,!1,m,g),this._Q=e(this,_,m.Q,Ht,Kt),this._detune=e(this,_,m.detune,1200*Math.log2(Ht),-1200*Math.log2(Ht)),this._frequency=e(this,_,m.frequency,l.sampleRate/2,0),this._gain=e(this,_,m.gain,40*Math.log10(Ht),Kt),this._nativeBiquadFilterNode=m,a(this,1)}get detune(){return this._detune}get frequency(){return this._frequency}get gain(){return this._gain}get Q(){return this._Q}get type(){return this._nativeBiquadFilterNode.type}set type(l){this._nativeBiquadFilterNode.type=l}getFrequencyResponse(l,u,h){try{this._nativeBiquadFilterNode.getFrequencyResponse(l,u,h)}catch(d){throw d.code===11?n():d}if(l.length!==u.length||u.length!==h.length)throw n()}},Ov=(i,e,t,n,s)=>()=>{const r=new WeakMap,o=async(a,c)=>{let l=t(a);const u=Vt(l,c);if(!u){const h={Q:l.Q.value,channelCount:l.channelCount,channelCountMode:l.channelCountMode,channelInterpretation:l.channelInterpretation,detune:l.detune.value,frequency:l.frequency.value,gain:l.gain.value,type:l.type};l=e(c,h)}return r.set(c,l),u?(await i(c,a.Q,l.Q),await i(c,a.detune,l.detune),await i(c,a.frequency,l.frequency),await i(c,a.gain,l.gain)):(await n(c,a.Q,l.Q),await n(c,a.detune,l.detune),await n(c,a.frequency,l.frequency),await n(c,a.gain,l.gain)),await s(a,c,l),l};return{render(a,c){const l=r.get(c);return l!==void 0?Promise.resolve(l):o(a,c)}}},Uv=(i,e)=>(t,n)=>{const s=e.get(t);if(s!==void 0)return s;const r=i.get(t);if(r!==void 0)return r;try{const o=n();return o instanceof Promise?(i.set(t,o),o.catch(()=>!1).then(a=>(i.delete(t),e.set(t,a),a))):(e.set(t,o),o)}catch{return e.set(t,!1),!1}},Bv={channelCount:1,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:6},kv=(i,e,t,n,s)=>class extends i{constructor(o,a){const c=n(o),l={...Bv,...a},u=t(c,l),h=s(c)?e():null;super(o,!1,u,h)}},Vv=(i,e,t)=>()=>{const n=new WeakMap,s=async(r,o)=>{let a=e(r);if(!Vt(a,o)){const l={channelCount:a.channelCount,channelCountMode:a.channelCountMode,channelInterpretation:a.channelInterpretation,numberOfInputs:a.numberOfInputs};a=i(o,l)}return n.set(o,a),await t(r,o,a),a};return{render(r,o){const a=n.get(o);return a!==void 0?Promise.resolve(a):s(r,o)}}},zv={channelCount:6,channelCountMode:"explicit",channelInterpretation:"discrete",numberOfOutputs:6},Gv=(i,e,t,n,s,r)=>class extends i{constructor(a,c){const l=n(a),u=r({...zv,...c}),h=t(l,u),d=s(l)?e():null;super(a,!1,h,d)}},Hv=(i,e,t)=>()=>{const n=new WeakMap,s=async(r,o)=>{let a=e(r);if(!Vt(a,o)){const l={channelCount:a.channelCount,channelCountMode:a.channelCountMode,channelInterpretation:a.channelInterpretation,numberOfOutputs:a.numberOfOutputs};a=i(o,l)}return n.set(o,a),await t(r,o,a),a};return{render(r,o){const a=n.get(o);return a!==void 0?Promise.resolve(a):s(r,o)}}},Wv=i=>(e,t,n)=>i(t,e,n),qv=i=>(e,t,n=0,s=0)=>{const r=e[n];if(r===void 0)throw i();return so(t)?r.connect(t,0,s):r.connect(t,0)},Xv=i=>(e,t)=>{const n=i(e,{buffer:null,channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",loop:!1,loopEnd:0,loopStart:0,playbackRate:1}),s=e.createBuffer(1,2,44100);return n.buffer=s,n.loop=!0,n.connect(t),n.start(),()=>{n.stop(),n.disconnect(t)}},Yv={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",offset:1},jv=(i,e,t,n,s,r,o)=>class extends i{constructor(c,l){const u=s(c),h={...Yv,...l},d=n(u,h),m=r(u),_=m?t():null;super(c,!1,d,_),this._constantSourceNodeRenderer=_,this._nativeConstantSourceNode=d,this._offset=e(this,m,d.offset,Ht,Kt),this._onended=null}get offset(){return this._offset}get onended(){return this._onended}set onended(c){const l=typeof c=="function"?o(this,c):null;this._nativeConstantSourceNode.onended=l;const u=this._nativeConstantSourceNode.onended;this._onended=u!==null&&u===l?c:u}start(c=0){if(this._nativeConstantSourceNode.start(c),this._constantSourceNodeRenderer!==null&&(this._constantSourceNodeRenderer.start=c),this.context.state!=="closed"){Ss(this);const l=()=>{this._nativeConstantSourceNode.removeEventListener("ended",l),Kn(this)&&rr(this)};this._nativeConstantSourceNode.addEventListener("ended",l)}}stop(c=0){this._nativeConstantSourceNode.stop(c),this._constantSourceNodeRenderer!==null&&(this._constantSourceNodeRenderer.stop=c)}},Zv=(i,e,t,n,s)=>()=>{const r=new WeakMap;let o=null,a=null;const c=async(l,u)=>{let h=t(l);const d=Vt(h,u);if(!d){const m={channelCount:h.channelCount,channelCountMode:h.channelCountMode,channelInterpretation:h.channelInterpretation,offset:h.offset.value};h=e(u,m),o!==null&&h.start(o),a!==null&&h.stop(a)}return r.set(u,h),d?await i(u,l.offset,h.offset):await n(u,l.offset,h.offset),await s(l,u,h),h};return{set start(l){o=l},set stop(l){a=l},render(l,u){const h=r.get(u);return h!==void 0?Promise.resolve(h):c(l,u)}}},$v=i=>e=>(i[0]=e,i[0]),Kv={buffer:null,channelCount:2,channelCountMode:"clamped-max",channelInterpretation:"speakers",disableNormalization:!1},Qv=(i,e,t,n,s,r)=>class extends i{constructor(a,c){const l=n(a),u={...Kv,...c},h=t(l,u),m=s(l)?e():null;super(a,!1,h,m),this._isBufferNullified=!1,this._nativeConvolverNode=h,u.buffer!==null&&r(this,u.buffer.duration)}get buffer(){return this._isBufferNullified?null:this._nativeConvolverNode.buffer}set buffer(a){if(this._nativeConvolverNode.buffer=a,a===null&&this._nativeConvolverNode.buffer!==null){const c=this._nativeConvolverNode.context;this._nativeConvolverNode.buffer=c.createBuffer(1,1,c.sampleRate),this._isBufferNullified=!0,r(this,0)}else this._isBufferNullified=!1,r(this,this._nativeConvolverNode.buffer===null?0:this._nativeConvolverNode.buffer.duration)}get normalize(){return this._nativeConvolverNode.normalize}set normalize(a){this._nativeConvolverNode.normalize=a}},Jv=(i,e,t)=>()=>{const n=new WeakMap,s=async(r,o)=>{let a=e(r);if(!Vt(a,o)){const l={buffer:a.buffer,channelCount:a.channelCount,channelCountMode:a.channelCountMode,channelInterpretation:a.channelInterpretation,disableNormalization:!a.normalize};a=i(o,l)}return n.set(o,a),Ps(a)?await t(r,o,a.inputs[0]):await t(r,o,a),a};return{render(r,o){const a=n.get(o);return a!==void 0?Promise.resolve(a):s(r,o)}}},e0=(i,e)=>(t,n,s)=>{if(e===null)throw new Error("Missing the native OfflineAudioContext constructor.");try{return new e(t,n,s)}catch(r){throw r.name==="SyntaxError"?i():r}},t0=()=>new DOMException("","DataCloneError"),iu=i=>{const{port1:e,port2:t}=new MessageChannel;return new Promise(n=>{const s=()=>{t.onmessage=null,e.close(),t.close(),n()};t.onmessage=()=>s();try{e.postMessage(i,[i])}catch{}finally{s()}})},n0=(i,e,t,n,s,r,o,a,c,l,u)=>(h,d)=>{const m=o(h)?h:r(h);if(s.has(d)){const _=t();return Promise.reject(_)}try{s.add(d)}catch{}return e(c,()=>c(m))?m.decodeAudioData(d).then(_=>(iu(d).catch(()=>{}),e(a,()=>a(_))||u(_),i.add(_),_)):new Promise((_,g)=>{const p=async()=>{try{await iu(d)}catch{}},f=b=>{g(b),p()};try{m.decodeAudioData(d,b=>{typeof b.copyFromChannel!="function"&&(l(b),Ja(b)),i.add(b),p().then(()=>_(b))},b=>{f(b===null?n():b)})}catch(b){f(b)}})},i0=(i,e,t,n,s,r,o,a)=>(c,l)=>{const u=e.get(c);if(u===void 0)throw new Error("Missing the expected cycle count.");const h=r(c.context),d=a(h);if(u===l){if(e.delete(c),!d&&o(c)){const m=n(c),{outputs:_}=t(c);for(const g of _)if(ar(g)){const p=n(g[0]);i(m,p,g[1],g[2])}else{const p=s(g[0]);m.connect(p,g[1])}}}else e.set(c,u-l)},s0={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",delayTime:0,maxDelayTime:1},r0=(i,e,t,n,s,r,o)=>class extends i{constructor(c,l){const u=s(c),h={...s0,...l},d=n(u,h),m=r(u),_=m?t(h.maxDelayTime):null;super(c,!1,d,_),this._delayTime=e(this,m,d.delayTime),o(this,h.maxDelayTime)}get delayTime(){return this._delayTime}},o0=(i,e,t,n,s)=>r=>{const o=new WeakMap,a=async(c,l)=>{let u=t(c);const h=Vt(u,l);if(!h){const d={channelCount:u.channelCount,channelCountMode:u.channelCountMode,channelInterpretation:u.channelInterpretation,delayTime:u.delayTime.value,maxDelayTime:r};u=e(l,d)}return o.set(l,u),h?await i(l,c.delayTime,u.delayTime):await n(l,c.delayTime,u.delayTime),await s(c,l,u),u};return{render(c,l){const u=o.get(l);return u!==void 0?Promise.resolve(u):a(c,l)}}},a0=i=>(e,t,n,s)=>i(e[s],r=>r[0]===t&&r[1]===n),c0=i=>(e,t)=>{i(e).delete(t)},l0=i=>"delayTime"in i,u0=(i,e,t)=>function n(s,r){const o=to(r)?r:t(i,r);if(l0(o))return[];if(s[0]===o)return[s];if(s.includes(o))return[];const{outputs:a}=e(o);return Array.from(a).map(c=>n([...s,o],c[0])).reduce((c,l)=>c.concat(l),[])},zr=(i,e,t)=>{const n=e[t];if(n===void 0)throw i();return n},h0=i=>(e,t=void 0,n=void 0,s=0)=>t===void 0?e.forEach(r=>r.disconnect()):typeof t=="number"?zr(i,e,t).disconnect():so(t)?n===void 0?e.forEach(r=>r.disconnect(t)):s===void 0?zr(i,e,n).disconnect(t,0):zr(i,e,n).disconnect(t,0,s):n===void 0?e.forEach(r=>r.disconnect(t)):zr(i,e,n).disconnect(t,0),d0={attack:.003,channelCount:2,channelCountMode:"clamped-max",channelInterpretation:"speakers",knee:30,ratio:12,release:.25,threshold:-24},f0=(i,e,t,n,s,r,o,a)=>class extends i{constructor(l,u){const h=r(l),d={...d0,...u},m=n(h,d),_=o(h),g=_?t():null;super(l,!1,m,g),this._attack=e(this,_,m.attack),this._knee=e(this,_,m.knee),this._nativeDynamicsCompressorNode=m,this._ratio=e(this,_,m.ratio),this._release=e(this,_,m.release),this._threshold=e(this,_,m.threshold),a(this,.006)}get attack(){return this._attack}get channelCount(){return this._nativeDynamicsCompressorNode.channelCount}set channelCount(l){const u=this._nativeDynamicsCompressorNode.channelCount;if(this._nativeDynamicsCompressorNode.channelCount=l,l>2)throw this._nativeDynamicsCompressorNode.channelCount=u,s()}get channelCountMode(){return this._nativeDynamicsCompressorNode.channelCountMode}set channelCountMode(l){const u=this._nativeDynamicsCompressorNode.channelCountMode;if(this._nativeDynamicsCompressorNode.channelCountMode=l,l==="max")throw this._nativeDynamicsCompressorNode.channelCountMode=u,s()}get knee(){return this._knee}get ratio(){return this._ratio}get reduction(){return typeof this._nativeDynamicsCompressorNode.reduction.value=="number"?this._nativeDynamicsCompressorNode.reduction.value:this._nativeDynamicsCompressorNode.reduction}get release(){return this._release}get threshold(){return this._threshold}},p0=(i,e,t,n,s)=>()=>{const r=new WeakMap,o=async(a,c)=>{let l=t(a);const u=Vt(l,c);if(!u){const h={attack:l.attack.value,channelCount:l.channelCount,channelCountMode:l.channelCountMode,channelInterpretation:l.channelInterpretation,knee:l.knee.value,ratio:l.ratio.value,release:l.release.value,threshold:l.threshold.value};l=e(c,h)}return r.set(c,l),u?(await i(c,a.attack,l.attack),await i(c,a.knee,l.knee),await i(c,a.ratio,l.ratio),await i(c,a.release,l.release),await i(c,a.threshold,l.threshold)):(await n(c,a.attack,l.attack),await n(c,a.knee,l.knee),await n(c,a.ratio,l.ratio),await n(c,a.release,l.release),await n(c,a.threshold,l.threshold)),await s(a,c,l),l};return{render(a,c){const l=r.get(c);return l!==void 0?Promise.resolve(l):o(a,c)}}},m0=()=>new DOMException("","EncodingError"),_0=i=>e=>new Promise((t,n)=>{if(i===null){n(new SyntaxError);return}const s=i.document.head;if(s===null)n(new SyntaxError);else{const r=i.document.createElement("script"),o=new Blob([e],{type:"application/javascript"}),a=URL.createObjectURL(o),c=i.onerror,l=()=>{i.onerror=c,URL.revokeObjectURL(a)};i.onerror=(u,h,d,m,_)=>{if(h===a||h===i.location.href&&d===1&&m===1)return l(),n(_),!1;if(c!==null)return c(u,h,d,m,_)},r.onerror=()=>{l(),n(new SyntaxError)},r.onload=()=>{l(),t()},r.src=a,r.type="module",s.appendChild(r)}}),g0=i=>class{constructor(t){this._nativeEventTarget=t,this._listeners=new WeakMap}addEventListener(t,n,s){if(n!==null){let r=this._listeners.get(n);r===void 0&&(r=i(this,n),typeof n=="function"&&this._listeners.set(n,r)),this._nativeEventTarget.addEventListener(t,r,s)}}dispatchEvent(t){return this._nativeEventTarget.dispatchEvent(t)}removeEventListener(t,n,s){const r=n===null?void 0:this._listeners.get(n);this._nativeEventTarget.removeEventListener(t,r===void 0?null:r,s)}},v0=i=>(e,t,n)=>{Object.defineProperties(i,{currentFrame:{configurable:!0,get(){return Math.round(e*t)}},currentTime:{configurable:!0,get(){return e}}});try{return n()}finally{i!==null&&(delete i.currentFrame,delete i.currentTime)}},x0=i=>async e=>{try{const t=await fetch(e);if(t.ok)return[await t.text(),t.url]}catch{}throw i()},y0={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",gain:1},S0=(i,e,t,n,s,r)=>class extends i{constructor(a,c){const l=s(a),u={...y0,...c},h=n(l,u),d=r(l),m=d?t():null;super(a,!1,h,m),this._gain=e(this,d,h.gain,Ht,Kt)}get gain(){return this._gain}},M0=(i,e,t,n,s)=>()=>{const r=new WeakMap,o=async(a,c)=>{let l=t(a);const u=Vt(l,c);if(!u){const h={channelCount:l.channelCount,channelCountMode:l.channelCountMode,channelInterpretation:l.channelInterpretation,gain:l.gain.value};l=e(c,h)}return r.set(c,l),u?await i(c,a.gain,l.gain):await n(c,a.gain,l.gain),await s(a,c,l),l};return{render(a,c){const l=r.get(c);return l!==void 0?Promise.resolve(l):o(a,c)}}},T0=(i,e)=>t=>e(i,t),E0=i=>e=>{const t=i(e);if(t.renderer===null)throw new Error("Missing the renderer of the given AudioNode in the audio graph.");return t.renderer},b0=i=>e=>{var t;return(t=i.get(e))!==null&&t!==void 0?t:0},w0=i=>e=>{const t=i(e);if(t.renderer===null)throw new Error("Missing the renderer of the given AudioParam in the audio graph.");return t.renderer},A0=i=>e=>i.get(e),Pt=()=>new DOMException("","InvalidStateError"),C0=i=>e=>{const t=i.get(e);if(t===void 0)throw Pt();return t},R0=(i,e)=>t=>{let n=i.get(t);if(n!==void 0)return n;if(e===null)throw new Error("Missing the native OfflineAudioContext constructor.");return n=new e(1,1,44100),i.set(t,n),n},D0=i=>e=>{const t=i.get(e);if(t===void 0)throw new Error("The context has no set of AudioWorkletNodes.");return t},So=()=>new DOMException("","InvalidAccessError"),P0=i=>{i.getFrequencyResponse=(e=>(t,n,s)=>{if(t.length!==n.length||n.length!==s.length)throw So();return e.call(i,t,n,s)})(i.getFrequencyResponse)},I0={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers"},N0=(i,e,t,n,s,r)=>class extends i{constructor(a,c){const l=n(a),u=s(l),h={...I0,...c},d=e(l,u?null:a.baseLatency,h),m=u?t(h.feedback,h.feedforward):null;super(a,!1,d,m),P0(d),this._nativeIIRFilterNode=d,r(this,1)}getFrequencyResponse(a,c,l){return this._nativeIIRFilterNode.getFrequencyResponse(a,c,l)}},th=(i,e,t,n,s,r,o,a,c,l,u)=>{const h=l.length;let d=a;for(let m=0;m<h;m+=1){let _=t[0]*l[m];for(let g=1;g<s;g+=1){const p=d-g&c-1;_+=t[g]*r[p],_-=i[g]*o[p]}for(let g=s;g<n;g+=1)_+=t[g]*r[d-g&c-1];for(let g=s;g<e;g+=1)_-=i[g]*o[d-g&c-1];r[d]=l[m],o[d]=_,d=d+1&c-1,u[m]=_}return d},F0=(i,e,t,n)=>{const s=t instanceof Float64Array?t:new Float64Array(t),r=n instanceof Float64Array?n:new Float64Array(n),o=s.length,a=r.length,c=Math.min(o,a);if(s[0]!==1){for(let _=0;_<o;_+=1)r[_]/=s[0];for(let _=1;_<a;_+=1)s[_]/=s[0]}const l=32,u=new Float32Array(l),h=new Float32Array(l),d=e.createBuffer(i.numberOfChannels,i.length,i.sampleRate),m=i.numberOfChannels;for(let _=0;_<m;_+=1){const g=i.getChannelData(_),p=d.getChannelData(_);u.fill(0),h.fill(0),th(s,o,r,a,c,u,h,0,l,g,p)}return d},L0=(i,e,t,n,s)=>(r,o)=>{const a=new WeakMap;let c=null;const l=async(u,h)=>{let d=null,m=e(u);const _=Vt(m,h);if(h.createIIRFilter===void 0?d=i(h,{buffer:null,channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",loop:!1,loopEnd:0,loopStart:0,playbackRate:1}):_||(m=h.createIIRFilter(o,r)),a.set(h,d===null?m:d),d!==null){if(c===null){if(t===null)throw new Error("Missing the native OfflineAudioContext constructor.");const p=new t(u.context.destination.channelCount,u.context.length,h.sampleRate);c=(async()=>{await n(u,p,p.destination);const f=await s(p);return F0(f,h,r,o)})()}const g=await c;return d.buffer=g,d.start(0),d}return await n(u,h,m),m};return{render(u,h){const d=a.get(h);return d!==void 0?Promise.resolve(d):l(u,h)}}},O0=(i,e,t,n,s,r)=>o=>(a,c)=>{const l=i.get(a);if(l===void 0){if(!o&&r(a)){const u=n(a),{outputs:h}=t(a);for(const d of h)if(ar(d)){const m=n(d[0]);e(u,m,d[1],d[2])}else{const m=s(d[0]);u.disconnect(m,d[1])}}i.set(a,c)}else i.set(a,l+c)},U0=(i,e)=>t=>{const n=i.get(t);return e(n)||e(t)},B0=(i,e)=>t=>i.has(t)||e(t),k0=(i,e)=>t=>i.has(t)||e(t),V0=(i,e)=>t=>{const n=i.get(t);return e(n)||e(t)},z0=i=>e=>i!==null&&e instanceof i,G0=i=>e=>i!==null&&typeof i.AudioNode=="function"&&e instanceof i.AudioNode,H0=i=>e=>i!==null&&typeof i.AudioParam=="function"&&e instanceof i.AudioParam,W0=(i,e)=>t=>i(t)||e(t),q0=i=>e=>i!==null&&e instanceof i,X0=i=>i!==null&&i.isSecureContext,Y0=(i,e,t,n)=>class extends i{constructor(r,o){const a=t(r),c=e(a,o);if(n(a))throw TypeError();super(r,!0,c,null),this._nativeMediaElementAudioSourceNode=c}get mediaElement(){return this._nativeMediaElementAudioSourceNode.mediaElement}},j0={channelCount:2,channelCountMode:"explicit",channelInterpretation:"speakers"},Z0=(i,e,t,n)=>class extends i{constructor(r,o){const a=t(r);if(n(a))throw new TypeError;const c={...j0,...o},l=e(a,c);super(r,!1,l,null),this._nativeMediaStreamAudioDestinationNode=l}get stream(){return this._nativeMediaStreamAudioDestinationNode.stream}},$0=(i,e,t,n)=>class extends i{constructor(r,o){const a=t(r),c=e(a,o);if(n(a))throw new TypeError;super(r,!0,c,null),this._nativeMediaStreamAudioSourceNode=c}get mediaStream(){return this._nativeMediaStreamAudioSourceNode.mediaStream}},K0=(i,e,t)=>class extends i{constructor(s,r){const o=t(s),a=e(o,r);super(s,!0,a,null)}},Q0=(i,e,t,n,s,r)=>class extends t{constructor(a,c){super(a),this._nativeContext=a,xo.set(this,a),n(a)&&s.set(a,new Set),this._destination=new i(this,c),this._listener=e(this,a),this._onstatechange=null}get currentTime(){return this._nativeContext.currentTime}get destination(){return this._destination}get listener(){return this._listener}get onstatechange(){return this._onstatechange}set onstatechange(a){const c=typeof a=="function"?r(this,a):null;this._nativeContext.onstatechange=c;const l=this._nativeContext.onstatechange;this._onstatechange=l!==null&&l===c?a:l}get sampleRate(){return this._nativeContext.sampleRate}get state(){return this._nativeContext.state}},Qs=i=>{const e=new Uint32Array([1179011410,40,1163280727,544501094,16,131073,44100,176400,1048580,1635017060,4,0]);try{const t=i.decodeAudioData(e.buffer,()=>{});return t===void 0?!1:(t.catch(()=>{}),!0)}catch{}return!1},J0=(i,e)=>(t,n,s)=>{const r=new Set;return t.connect=(o=>(a,c=0,l=0)=>{const u=r.size===0;if(e(a))return o.call(t,a,c,l),i(r,[a,c,l],h=>h[0]===a&&h[1]===c&&h[2]===l,!0),u&&n(),a;o.call(t,a,c),i(r,[a,c],h=>h[0]===a&&h[1]===c,!0),u&&n()})(t.connect),t.disconnect=(o=>(a,c,l)=>{const u=r.size>0;if(a===void 0)o.apply(t),r.clear();else if(typeof a=="number"){o.call(t,a);for(const d of r)d[1]===a&&r.delete(d)}else{e(a)?o.call(t,a,c,l):o.call(t,a,c);for(const d of r)d[0]===a&&(c===void 0||d[1]===c)&&(l===void 0||d[2]===l)&&r.delete(d)}const h=r.size===0;u&&h&&s()})(t.disconnect),t},mt=(i,e,t)=>{const n=e[t];n!==void 0&&n!==i[t]&&(i[t]=n)},Rt=(i,e)=>{mt(i,e,"channelCount"),mt(i,e,"channelCountMode"),mt(i,e,"channelInterpretation")},su=i=>typeof i.getFloatTimeDomainData=="function",ex=i=>{i.getFloatTimeDomainData=e=>{const t=new Uint8Array(e.length);i.getByteTimeDomainData(t);const n=Math.max(t.length,i.fftSize);for(let s=0;s<n;s+=1)e[s]=(t[s]-128)*.0078125;return e}},tx=(i,e)=>(t,n)=>{const s=t.createAnalyser();if(Rt(s,n),!(n.maxDecibels>n.minDecibels))throw e();return mt(s,n,"fftSize"),mt(s,n,"maxDecibels"),mt(s,n,"minDecibels"),mt(s,n,"smoothingTimeConstant"),i(su,()=>su(s))||ex(s),s},nx=i=>i===null?null:i.hasOwnProperty("AudioBuffer")?i.AudioBuffer:null,St=(i,e,t)=>{const n=e[t];n!==void 0&&n!==i[t].value&&(i[t].value=n)},ix=i=>{i.start=(e=>{let t=!1;return(n=0,s=0,r)=>{if(t)throw Pt();e.call(i,n,s,r),t=!0}})(i.start)},nc=i=>{i.start=(e=>(t=0,n=0,s)=>{if(typeof s=="number"&&s<0||n<0||t<0)throw new RangeError("The parameters can't be negative.");e.call(i,t,n,s)})(i.start)},ic=i=>{i.stop=(e=>(t=0)=>{if(t<0)throw new RangeError("The parameter can't be negative.");e.call(i,t)})(i.stop)},sx=(i,e,t,n,s,r,o,a,c,l,u)=>(h,d)=>{const m=h.createBufferSource();return Rt(m,d),St(m,d,"playbackRate"),mt(m,d,"buffer"),mt(m,d,"loop"),mt(m,d,"loopEnd"),mt(m,d,"loopStart"),e(t,()=>t(h))||ix(m),e(n,()=>n(h))||c(m),e(s,()=>s(h))||l(m,h),e(r,()=>r(h))||nc(m),e(o,()=>o(h))||u(m,h),e(a,()=>a(h))||ic(m),i(h,m),m},rx=i=>i===null?null:i.hasOwnProperty("AudioContext")?i.AudioContext:i.hasOwnProperty("webkitAudioContext")?i.webkitAudioContext:null,ox=(i,e)=>(t,n,s)=>{const r=t.destination;if(r.channelCount!==n)try{r.channelCount=n}catch{}s&&r.channelCountMode!=="explicit"&&(r.channelCountMode="explicit"),r.maxChannelCount===0&&Object.defineProperty(r,"maxChannelCount",{value:n});const o=i(t,{channelCount:n,channelCountMode:r.channelCountMode,channelInterpretation:r.channelInterpretation,gain:1});return e(o,"channelCount",a=>()=>a.call(o),a=>c=>{a.call(o,c);try{r.channelCount=c}catch(l){if(c>r.maxChannelCount)throw l}}),e(o,"channelCountMode",a=>()=>a.call(o),a=>c=>{a.call(o,c),r.channelCountMode=c}),e(o,"channelInterpretation",a=>()=>a.call(o),a=>c=>{a.call(o,c),r.channelInterpretation=c}),Object.defineProperty(o,"maxChannelCount",{get:()=>r.maxChannelCount}),o.connect(r),o},ax=i=>i===null?null:i.hasOwnProperty("AudioWorkletNode")?i.AudioWorkletNode:null,cx=i=>{const{port1:e}=new MessageChannel;try{e.postMessage(i)}finally{e.close()}},lx=(i,e,t,n,s)=>(r,o,a,c,l,u)=>{if(a!==null)try{const h=new a(r,c,u),d=new Map;let m=null;if(Object.defineProperties(h,{channelCount:{get:()=>u.channelCount,set:()=>{throw i()}},channelCountMode:{get:()=>"explicit",set:()=>{throw i()}},onprocessorerror:{get:()=>m,set:_=>{typeof m=="function"&&h.removeEventListener("processorerror",m),m=typeof _=="function"?_:null,typeof m=="function"&&h.addEventListener("processorerror",m)}}}),h.addEventListener=(_=>(...g)=>{if(g[0]==="processorerror"){const p=typeof g[1]=="function"?g[1]:typeof g[1]=="object"&&g[1]!==null&&typeof g[1].handleEvent=="function"?g[1].handleEvent:null;if(p!==null){const f=d.get(g[1]);f!==void 0?g[1]=f:(g[1]=b=>{b.type==="error"?(Object.defineProperties(b,{type:{value:"processorerror"}}),p(b)):p(new ErrorEvent(g[0],{...b}))},d.set(p,g[1]))}}return _.call(h,"error",g[1],g[2]),_.call(h,...g)})(h.addEventListener),h.removeEventListener=(_=>(...g)=>{if(g[0]==="processorerror"){const p=d.get(g[1]);p!==void 0&&(d.delete(g[1]),g[1]=p)}return _.call(h,"error",g[1],g[2]),_.call(h,g[0],g[1],g[2])})(h.removeEventListener),u.numberOfOutputs!==0){const _=t(r,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",gain:0});return h.connect(_).connect(r.destination),s(h,()=>_.disconnect(),()=>_.connect(r.destination))}return h}catch(h){throw h.code===11?n():h}if(l===void 0)throw n();return cx(u),e(r,o,l,u)},nh=(i,e)=>i===null?512:Math.max(512,Math.min(16384,Math.pow(2,Math.round(Math.log2(i*e))))),ux=i=>new Promise((e,t)=>{const{port1:n,port2:s}=new MessageChannel;n.onmessage=({data:r})=>{n.close(),s.close(),e(r)},n.onmessageerror=({data:r})=>{n.close(),s.close(),t(r)},s.postMessage(i)}),hx=async(i,e)=>{const t=await ux(e);return new i(t)},dx=(i,e,t,n)=>{let s=Ia.get(i);s===void 0&&(s=new WeakMap,Ia.set(i,s));const r=hx(t,n);return s.set(e,r),r},fx=(i,e,t,n,s,r,o,a,c,l,u,h,d)=>(m,_,g,p)=>{if(p.numberOfInputs===0&&p.numberOfOutputs===0)throw c();const f=Array.isArray(p.outputChannelCount)?p.outputChannelCount:Array.from(p.outputChannelCount);if(f.some(ce=>ce<1))throw c();if(f.length!==p.numberOfOutputs)throw e();if(p.channelCountMode!=="explicit")throw c();const b=p.channelCount*p.numberOfInputs,T=f.reduce((ce,ae)=>ce+ae,0),x=g.parameterDescriptors===void 0?0:g.parameterDescriptors.length;if(b+x>6||T>6)throw c();const y=new MessageChannel,E=[],A=[];for(let ce=0;ce<p.numberOfInputs;ce+=1)E.push(o(m,{channelCount:p.channelCount,channelCountMode:p.channelCountMode,channelInterpretation:p.channelInterpretation,gain:1})),A.push(s(m,{channelCount:p.channelCount,channelCountMode:"explicit",channelInterpretation:"discrete",numberOfOutputs:p.channelCount}));const C=[];if(g.parameterDescriptors!==void 0)for(const{defaultValue:ce,maxValue:ae,minValue:we,name:le}of g.parameterDescriptors){const Te=r(m,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",offset:p.parameterData[le]!==void 0?p.parameterData[le]:ce===void 0?0:ce});Object.defineProperties(Te.offset,{defaultValue:{get:()=>ce===void 0?0:ce},maxValue:{get:()=>ae===void 0?Ht:ae},minValue:{get:()=>we===void 0?Kt:we}}),C.push(Te)}const S=n(m,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:Math.max(1,b+x)}),v=nh(_,m.sampleRate),R=a(m,v,b+x,Math.max(1,T)),P=s(m,{channelCount:Math.max(1,T),channelCountMode:"explicit",channelInterpretation:"discrete",numberOfOutputs:Math.max(1,T)}),N=[];for(let ce=0;ce<p.numberOfOutputs;ce+=1)N.push(n(m,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:f[ce]}));for(let ce=0;ce<p.numberOfInputs;ce+=1){E[ce].connect(A[ce]);for(let ae=0;ae<p.channelCount;ae+=1)A[ce].connect(S,ae,ce*p.channelCount+ae)}const B=new Ju(g.parameterDescriptors===void 0?[]:g.parameterDescriptors.map(({name:ce},ae)=>{const we=C[ae];return we.connect(S,0,b+ae),we.start(0),[ce,we.offset]}));S.connect(R);let H=p.channelInterpretation,k=null;const G=p.numberOfOutputs===0?[R]:N,V={get bufferSize(){return v},get channelCount(){return p.channelCount},set channelCount(ce){throw t()},get channelCountMode(){return p.channelCountMode},set channelCountMode(ce){throw t()},get channelInterpretation(){return H},set channelInterpretation(ce){for(const ae of E)ae.channelInterpretation=ce;H=ce},get context(){return R.context},get inputs(){return E},get numberOfInputs(){return p.numberOfInputs},get numberOfOutputs(){return p.numberOfOutputs},get onprocessorerror(){return k},set onprocessorerror(ce){typeof k=="function"&&V.removeEventListener("processorerror",k),k=typeof ce=="function"?ce:null,typeof k=="function"&&V.addEventListener("processorerror",k)},get parameters(){return B},get port(){return y.port2},addEventListener(...ce){return R.addEventListener(ce[0],ce[1],ce[2])},connect:i.bind(null,G),disconnect:l.bind(null,G),dispatchEvent(...ce){return R.dispatchEvent(ce[0])},removeEventListener(...ce){return R.removeEventListener(ce[0],ce[1],ce[2])}},j=new Map;y.port1.addEventListener=(ce=>(...ae)=>{if(ae[0]==="message"){const we=typeof ae[1]=="function"?ae[1]:typeof ae[1]=="object"&&ae[1]!==null&&typeof ae[1].handleEvent=="function"?ae[1].handleEvent:null;if(we!==null){const le=j.get(ae[1]);le!==void 0?ae[1]=le:(ae[1]=Te=>{u(m.currentTime,m.sampleRate,()=>we(Te))},j.set(we,ae[1]))}}return ce.call(y.port1,ae[0],ae[1],ae[2])})(y.port1.addEventListener),y.port1.removeEventListener=(ce=>(...ae)=>{if(ae[0]==="message"){const we=j.get(ae[1]);we!==void 0&&(j.delete(ae[1]),ae[1]=we)}return ce.call(y.port1,ae[0],ae[1],ae[2])})(y.port1.removeEventListener);let Q=null;Object.defineProperty(y.port1,"onmessage",{get:()=>Q,set:ce=>{typeof Q=="function"&&y.port1.removeEventListener("message",Q),Q=typeof ce=="function"?ce:null,typeof Q=="function"&&(y.port1.addEventListener("message",Q),y.port1.start())}}),g.prototype.port=y.port1;let ne=null;dx(m,V,g,p).then(ce=>ne=ce);const Be=oo(p.numberOfInputs,p.channelCount),Y=oo(p.numberOfOutputs,f),Z=g.parameterDescriptors===void 0?[]:g.parameterDescriptors.reduce((ce,{name:ae})=>({...ce,[ae]:new Float32Array(128)}),{});let oe=!0;const se=()=>{p.numberOfOutputs>0&&R.disconnect(P);for(let ce=0,ae=0;ce<p.numberOfOutputs;ce+=1){const we=N[ce];for(let le=0;le<f[ce];le+=1)P.disconnect(we,ae+le,le);ae+=f[ce]}},ee=new Map;R.onaudioprocess=({inputBuffer:ce,outputBuffer:ae})=>{if(ne!==null){const we=h(V);for(let le=0;le<v;le+=128){for(let Te=0;Te<p.numberOfInputs;Te+=1)for(let ue=0;ue<p.channelCount;ue+=1)ro(ce,Be[Te],ue,ue,le);g.parameterDescriptors!==void 0&&g.parameterDescriptors.forEach(({name:Te},ue)=>{ro(ce,Z,Te,b+ue,le)});for(let Te=0;Te<p.numberOfInputs;Te+=1)for(let ue=0;ue<f[Te];ue+=1)Y[Te][ue].byteLength===0&&(Y[Te][ue]=new Float32Array(128));try{const Te=Be.map((D,M)=>{if(we[M].size>0)return ee.set(M,v/128),D;const K=ee.get(M);return K===void 0?[]:(D.every(te=>te.every($=>$===0))&&(K===1?ee.delete(M):ee.set(M,K-1)),D)});oe=u(m.currentTime+le/m.sampleRate,m.sampleRate,()=>ne.process(Te,Y,Z));for(let D=0,M=0;D<p.numberOfOutputs;D+=1){for(let z=0;z<f[D];z+=1)eh(ae,Y[D],z,M+z,le);M+=f[D]}}catch(Te){oe=!1,V.dispatchEvent(new ErrorEvent("processorerror",{colno:Te.colno,filename:Te.filename,lineno:Te.lineno,message:Te.message}))}if(!oe){for(let Te=0;Te<p.numberOfInputs;Te+=1){E[Te].disconnect(A[Te]);for(let ue=0;ue<p.channelCount;ue+=1)A[le].disconnect(S,ue,Te*p.channelCount+ue)}if(g.parameterDescriptors!==void 0){const Te=g.parameterDescriptors.length;for(let ue=0;ue<Te;ue+=1){const D=C[ue];D.disconnect(S,0,b+ue),D.stop()}}S.disconnect(R),R.onaudioprocess=null,Ce?se():ze();break}}}};let Ce=!1;const Ie=o(m,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",gain:0}),et=()=>R.connect(Ie).connect(m.destination),ze=()=>{R.disconnect(Ie),Ie.disconnect()},_t=()=>{if(oe){ze(),p.numberOfOutputs>0&&R.connect(P);for(let ce=0,ae=0;ce<p.numberOfOutputs;ce+=1){const we=N[ce];for(let le=0;le<f[ce];le+=1)P.connect(we,ae+le,le);ae+=f[ce]}}Ce=!0},I=()=>{oe&&(et(),se()),Ce=!1};return et(),d(V,_t,I)},ih=(i,e)=>{const t=i.createBiquadFilter();return Rt(t,e),St(t,e,"Q"),St(t,e,"detune"),St(t,e,"frequency"),St(t,e,"gain"),mt(t,e,"type"),t},px=(i,e)=>(t,n)=>{const s=t.createChannelMerger(n.numberOfInputs);return i!==null&&i.name==="webkitAudioContext"&&e(t,s),Rt(s,n),s},mx=i=>{const e=i.numberOfOutputs;Object.defineProperty(i,"channelCount",{get:()=>e,set:t=>{if(t!==e)throw Pt()}}),Object.defineProperty(i,"channelCountMode",{get:()=>"explicit",set:t=>{if(t!=="explicit")throw Pt()}}),Object.defineProperty(i,"channelInterpretation",{get:()=>"discrete",set:t=>{if(t!=="discrete")throw Pt()}})},cr=(i,e)=>{const t=i.createChannelSplitter(e.numberOfOutputs);return Rt(t,e),mx(t),t},_x=(i,e,t,n,s)=>(r,o)=>{if(r.createConstantSource===void 0)return t(r,o);const a=r.createConstantSource();return Rt(a,o),St(a,o,"offset"),e(n,()=>n(r))||nc(a),e(s,()=>s(r))||ic(a),i(r,a),a},Is=(i,e)=>(i.connect=e.connect.bind(e),i.disconnect=e.disconnect.bind(e),i),gx=(i,e,t,n)=>(s,{offset:r,...o})=>{const a=s.createBuffer(1,2,44100),c=e(s,{buffer:null,channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",loop:!1,loopEnd:0,loopStart:0,playbackRate:1}),l=t(s,{...o,gain:r}),u=a.getChannelData(0);u[0]=1,u[1]=1,c.buffer=a,c.loop=!0;const h={get bufferSize(){},get channelCount(){return l.channelCount},set channelCount(_){l.channelCount=_},get channelCountMode(){return l.channelCountMode},set channelCountMode(_){l.channelCountMode=_},get channelInterpretation(){return l.channelInterpretation},set channelInterpretation(_){l.channelInterpretation=_},get context(){return l.context},get inputs(){return[]},get numberOfInputs(){return c.numberOfInputs},get numberOfOutputs(){return l.numberOfOutputs},get offset(){return l.gain},get onended(){return c.onended},set onended(_){c.onended=_},addEventListener(..._){return c.addEventListener(_[0],_[1],_[2])},dispatchEvent(..._){return c.dispatchEvent(_[0])},removeEventListener(..._){return c.removeEventListener(_[0],_[1],_[2])},start(_=0){c.start.call(c,_)},stop(_=0){c.stop.call(c,_)}},d=()=>c.connect(l),m=()=>c.disconnect(l);return i(s,c),n(Is(h,l),d,m)},vx=(i,e)=>(t,n)=>{const s=t.createConvolver();if(Rt(s,n),n.disableNormalization===s.normalize&&(s.normalize=!n.disableNormalization),mt(s,n,"buffer"),n.channelCount>2||(e(s,"channelCount",r=>()=>r.call(s),r=>o=>{if(o>2)throw i();return r.call(s,o)}),n.channelCountMode==="max"))throw i();return e(s,"channelCountMode",r=>()=>r.call(s),r=>o=>{if(o==="max")throw i();return r.call(s,o)}),s},sh=(i,e)=>{const t=i.createDelay(e.maxDelayTime);return Rt(t,e),St(t,e,"delayTime"),t},xx=i=>(e,t)=>{const n=e.createDynamicsCompressor();if(Rt(n,t),t.channelCount>2||t.channelCountMode==="max")throw i();return St(n,t,"attack"),St(n,t,"knee"),St(n,t,"ratio"),St(n,t,"release"),St(n,t,"threshold"),n},en=(i,e)=>{const t=i.createGain();return Rt(t,e),St(t,e,"gain"),t},yx=i=>(e,t,n)=>{if(e.createIIRFilter===void 0)return i(e,t,n);const s=e.createIIRFilter(n.feedforward,n.feedback);return Rt(s,n),s};function Sx(i,e){const t=e[0]*e[0]+e[1]*e[1];return[(i[0]*e[0]+i[1]*e[1])/t,(i[1]*e[0]-i[0]*e[1])/t]}function Mx(i,e){return[i[0]*e[0]-i[1]*e[1],i[0]*e[1]+i[1]*e[0]]}function ru(i,e){let t=[0,0];for(let n=i.length-1;n>=0;n-=1)t=Mx(t,e),t[0]+=i[n];return t}const Tx=(i,e,t,n)=>(s,r,{channelCount:o,channelCountMode:a,channelInterpretation:c,feedback:l,feedforward:u})=>{const h=nh(r,s.sampleRate),d=l instanceof Float64Array?l:new Float64Array(l),m=u instanceof Float64Array?u:new Float64Array(u),_=d.length,g=m.length,p=Math.min(_,g);if(_===0||_>20)throw n();if(d[0]===0)throw e();if(g===0||g>20)throw n();if(m[0]===0)throw e();if(d[0]!==1){for(let C=0;C<g;C+=1)m[C]/=d[0];for(let C=1;C<_;C+=1)d[C]/=d[0]}const f=t(s,h,o,o);f.channelCount=o,f.channelCountMode=a,f.channelInterpretation=c;const b=32,T=[],x=[],y=[];for(let C=0;C<o;C+=1){T.push(0);const S=new Float32Array(b),v=new Float32Array(b);S.fill(0),v.fill(0),x.push(S),y.push(v)}f.onaudioprocess=C=>{const S=C.inputBuffer,v=C.outputBuffer,R=S.numberOfChannels;for(let P=0;P<R;P+=1){const N=S.getChannelData(P),B=v.getChannelData(P);T[P]=th(d,_,m,g,p,x[P],y[P],T[P],b,N,B)}};const E=s.sampleRate/2;return Is({get bufferSize(){return h},get channelCount(){return f.channelCount},set channelCount(C){f.channelCount=C},get channelCountMode(){return f.channelCountMode},set channelCountMode(C){f.channelCountMode=C},get channelInterpretation(){return f.channelInterpretation},set channelInterpretation(C){f.channelInterpretation=C},get context(){return f.context},get inputs(){return[f]},get numberOfInputs(){return f.numberOfInputs},get numberOfOutputs(){return f.numberOfOutputs},addEventListener(...C){return f.addEventListener(C[0],C[1],C[2])},dispatchEvent(...C){return f.dispatchEvent(C[0])},getFrequencyResponse(C,S,v){if(C.length!==S.length||S.length!==v.length)throw i();const R=C.length;for(let P=0;P<R;P+=1){const N=-Math.PI*(C[P]/E),B=[Math.cos(N),Math.sin(N)],H=ru(m,B),k=ru(d,B),G=Sx(H,k);S[P]=Math.sqrt(G[0]*G[0]+G[1]*G[1]),v[P]=Math.atan2(G[1],G[0])}},removeEventListener(...C){return f.removeEventListener(C[0],C[1],C[2])}},f)},Ex=(i,e)=>i.createMediaElementSource(e.mediaElement),bx=(i,e)=>{const t=i.createMediaStreamDestination();return Rt(t,e),t.numberOfOutputs===1&&Object.defineProperty(t,"numberOfOutputs",{get:()=>0}),t},wx=(i,{mediaStream:e})=>{const t=e.getAudioTracks();t.sort((r,o)=>r.id<o.id?-1:r.id>o.id?1:0);const n=t.slice(0,1),s=i.createMediaStreamSource(new MediaStream(n));return Object.defineProperty(s,"mediaStream",{value:e}),s},Ax=(i,e)=>(t,{mediaStreamTrack:n})=>{if(typeof t.createMediaStreamTrackSource=="function")return t.createMediaStreamTrackSource(n);const s=new MediaStream([n]),r=t.createMediaStreamSource(s);if(n.kind!=="audio")throw i();if(e(t))throw new TypeError;return r},Cx=i=>i===null?null:i.hasOwnProperty("OfflineAudioContext")?i.OfflineAudioContext:i.hasOwnProperty("webkitOfflineAudioContext")?i.webkitOfflineAudioContext:null,Rx=(i,e,t,n,s,r)=>(o,a)=>{const c=o.createOscillator();return Rt(c,a),St(c,a,"detune"),St(c,a,"frequency"),a.periodicWave!==void 0?c.setPeriodicWave(a.periodicWave):mt(c,a,"type"),e(t,()=>t(o))||nc(c),e(n,()=>n(o))||r(c,o),e(s,()=>s(o))||ic(c),i(o,c),c},Dx=i=>(e,t)=>{const n=e.createPanner();return n.orientationX===void 0?i(e,t):(Rt(n,t),St(n,t,"orientationX"),St(n,t,"orientationY"),St(n,t,"orientationZ"),St(n,t,"positionX"),St(n,t,"positionY"),St(n,t,"positionZ"),mt(n,t,"coneInnerAngle"),mt(n,t,"coneOuterAngle"),mt(n,t,"coneOuterGain"),mt(n,t,"distanceModel"),mt(n,t,"maxDistance"),mt(n,t,"panningModel"),mt(n,t,"refDistance"),mt(n,t,"rolloffFactor"),n)},Px=(i,e,t,n,s,r,o,a,c,l)=>(u,{coneInnerAngle:h,coneOuterAngle:d,coneOuterGain:m,distanceModel:_,maxDistance:g,orientationX:p,orientationY:f,orientationZ:b,panningModel:T,positionX:x,positionY:y,positionZ:E,refDistance:A,rolloffFactor:C,...S})=>{const v=u.createPanner();if(S.channelCount>2||S.channelCountMode==="max")throw o();Rt(v,S);const R={channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete"},P=t(u,{...R,channelInterpretation:"speakers",numberOfInputs:6}),N=n(u,{...S,gain:1}),B=n(u,{...R,gain:1}),H=n(u,{...R,gain:0}),k=n(u,{...R,gain:0}),G=n(u,{...R,gain:0}),V=n(u,{...R,gain:0}),j=n(u,{...R,gain:0}),Q=s(u,256,6,1),ne=r(u,{...R,curve:new Float32Array([1,1]),oversample:"none"});let ge=[p,f,b],Be=[x,y,E];const Y=new Float32Array(1);Q.onaudioprocess=({inputBuffer:ee})=>{const Ce=[c(ee,Y,0),c(ee,Y,1),c(ee,Y,2)];Ce.some((et,ze)=>et!==ge[ze])&&(v.setOrientation(...Ce),ge=Ce);const Ie=[c(ee,Y,3),c(ee,Y,4),c(ee,Y,5)];Ie.some((et,ze)=>et!==Be[ze])&&(v.setPosition(...Ie),Be=Ie)},Object.defineProperty(H.gain,"defaultValue",{get:()=>0}),Object.defineProperty(k.gain,"defaultValue",{get:()=>0}),Object.defineProperty(G.gain,"defaultValue",{get:()=>0}),Object.defineProperty(V.gain,"defaultValue",{get:()=>0}),Object.defineProperty(j.gain,"defaultValue",{get:()=>0});const Z={get bufferSize(){},get channelCount(){return v.channelCount},set channelCount(ee){if(ee>2)throw o();N.channelCount=ee,v.channelCount=ee},get channelCountMode(){return v.channelCountMode},set channelCountMode(ee){if(ee==="max")throw o();N.channelCountMode=ee,v.channelCountMode=ee},get channelInterpretation(){return v.channelInterpretation},set channelInterpretation(ee){N.channelInterpretation=ee,v.channelInterpretation=ee},get coneInnerAngle(){return v.coneInnerAngle},set coneInnerAngle(ee){v.coneInnerAngle=ee},get coneOuterAngle(){return v.coneOuterAngle},set coneOuterAngle(ee){v.coneOuterAngle=ee},get coneOuterGain(){return v.coneOuterGain},set coneOuterGain(ee){if(ee<0||ee>1)throw e();v.coneOuterGain=ee},get context(){return v.context},get distanceModel(){return v.distanceModel},set distanceModel(ee){v.distanceModel=ee},get inputs(){return[N]},get maxDistance(){return v.maxDistance},set maxDistance(ee){if(ee<0)throw new RangeError;v.maxDistance=ee},get numberOfInputs(){return v.numberOfInputs},get numberOfOutputs(){return v.numberOfOutputs},get orientationX(){return B.gain},get orientationY(){return H.gain},get orientationZ(){return k.gain},get panningModel(){return v.panningModel},set panningModel(ee){v.panningModel=ee},get positionX(){return G.gain},get positionY(){return V.gain},get positionZ(){return j.gain},get refDistance(){return v.refDistance},set refDistance(ee){if(ee<0)throw new RangeError;v.refDistance=ee},get rolloffFactor(){return v.rolloffFactor},set rolloffFactor(ee){if(ee<0)throw new RangeError;v.rolloffFactor=ee},addEventListener(...ee){return N.addEventListener(ee[0],ee[1],ee[2])},dispatchEvent(...ee){return N.dispatchEvent(ee[0])},removeEventListener(...ee){return N.removeEventListener(ee[0],ee[1],ee[2])}};h!==Z.coneInnerAngle&&(Z.coneInnerAngle=h),d!==Z.coneOuterAngle&&(Z.coneOuterAngle=d),m!==Z.coneOuterGain&&(Z.coneOuterGain=m),_!==Z.distanceModel&&(Z.distanceModel=_),g!==Z.maxDistance&&(Z.maxDistance=g),p!==Z.orientationX.value&&(Z.orientationX.value=p),f!==Z.orientationY.value&&(Z.orientationY.value=f),b!==Z.orientationZ.value&&(Z.orientationZ.value=b),T!==Z.panningModel&&(Z.panningModel=T),x!==Z.positionX.value&&(Z.positionX.value=x),y!==Z.positionY.value&&(Z.positionY.value=y),E!==Z.positionZ.value&&(Z.positionZ.value=E),A!==Z.refDistance&&(Z.refDistance=A),C!==Z.rolloffFactor&&(Z.rolloffFactor=C),(ge[0]!==1||ge[1]!==0||ge[2]!==0)&&v.setOrientation(...ge),(Be[0]!==0||Be[1]!==0||Be[2]!==0)&&v.setPosition(...Be);const oe=()=>{N.connect(v),i(N,ne,0,0),ne.connect(B).connect(P,0,0),ne.connect(H).connect(P,0,1),ne.connect(k).connect(P,0,2),ne.connect(G).connect(P,0,3),ne.connect(V).connect(P,0,4),ne.connect(j).connect(P,0,5),P.connect(Q).connect(u.destination)},se=()=>{N.disconnect(v),a(N,ne,0,0),ne.disconnect(B),B.disconnect(P),ne.disconnect(H),H.disconnect(P),ne.disconnect(k),k.disconnect(P),ne.disconnect(G),G.disconnect(P),ne.disconnect(V),V.disconnect(P),ne.disconnect(j),j.disconnect(P),P.disconnect(Q),Q.disconnect(u.destination)};return l(Is(Z,v),oe,se)},Ix=i=>(e,{disableNormalization:t,imag:n,real:s})=>{const r=n instanceof Float32Array?n:new Float32Array(n),o=s instanceof Float32Array?s:new Float32Array(s),a=e.createPeriodicWave(o,r,{disableNormalization:t});if(Array.from(n).length<2)throw i();return a},lr=(i,e,t,n)=>i.createScriptProcessor(e,t,n),Nx=(i,e)=>(t,n)=>{const s=n.channelCountMode;if(s==="clamped-max")throw e();if(t.createStereoPanner===void 0)return i(t,n);const r=t.createStereoPanner();return Rt(r,n),St(r,n,"pan"),Object.defineProperty(r,"channelCountMode",{get:()=>s,set:o=>{if(o!==s)throw e()}}),r},Fx=(i,e,t,n,s,r)=>{const a=new Float32Array([1,1]),c=Math.PI/2,l={channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete"},u={...l,oversample:"none"},h=(_,g,p,f)=>{const b=new Float32Array(16385),T=new Float32Array(16385);for(let S=0;S<16385;S+=1){const v=S/16384*c;b[S]=Math.cos(v),T[S]=Math.sin(v)}const x=t(_,{...l,gain:0}),y=n(_,{...u,curve:b}),E=n(_,{...u,curve:a}),A=t(_,{...l,gain:0}),C=n(_,{...u,curve:T});return{connectGraph(){g.connect(x),g.connect(E.inputs===void 0?E:E.inputs[0]),g.connect(A),E.connect(p),p.connect(y.inputs===void 0?y:y.inputs[0]),p.connect(C.inputs===void 0?C:C.inputs[0]),y.connect(x.gain),C.connect(A.gain),x.connect(f,0,0),A.connect(f,0,1)},disconnectGraph(){g.disconnect(x),g.disconnect(E.inputs===void 0?E:E.inputs[0]),g.disconnect(A),E.disconnect(p),p.disconnect(y.inputs===void 0?y:y.inputs[0]),p.disconnect(C.inputs===void 0?C:C.inputs[0]),y.disconnect(x.gain),C.disconnect(A.gain),x.disconnect(f,0,0),A.disconnect(f,0,1)}}},d=(_,g,p,f)=>{const b=new Float32Array(16385),T=new Float32Array(16385),x=new Float32Array(16385),y=new Float32Array(16385),E=Math.floor(16385/2);for(let G=0;G<16385;G+=1)if(G>E){const V=(G-E)/(16384-E)*c;b[G]=Math.cos(V),T[G]=Math.sin(V),x[G]=0,y[G]=1}else{const V=G/(16384-E)*c;b[G]=1,T[G]=0,x[G]=Math.cos(V),y[G]=Math.sin(V)}const A=e(_,{channelCount:2,channelCountMode:"explicit",channelInterpretation:"discrete",numberOfOutputs:2}),C=t(_,{...l,gain:0}),S=n(_,{...u,curve:b}),v=t(_,{...l,gain:0}),R=n(_,{...u,curve:T}),P=n(_,{...u,curve:a}),N=t(_,{...l,gain:0}),B=n(_,{...u,curve:x}),H=t(_,{...l,gain:0}),k=n(_,{...u,curve:y});return{connectGraph(){g.connect(A),g.connect(P.inputs===void 0?P:P.inputs[0]),A.connect(C,0),A.connect(v,0),A.connect(N,1),A.connect(H,1),P.connect(p),p.connect(S.inputs===void 0?S:S.inputs[0]),p.connect(R.inputs===void 0?R:R.inputs[0]),p.connect(B.inputs===void 0?B:B.inputs[0]),p.connect(k.inputs===void 0?k:k.inputs[0]),S.connect(C.gain),R.connect(v.gain),B.connect(N.gain),k.connect(H.gain),C.connect(f,0,0),N.connect(f,0,0),v.connect(f,0,1),H.connect(f,0,1)},disconnectGraph(){g.disconnect(A),g.disconnect(P.inputs===void 0?P:P.inputs[0]),A.disconnect(C,0),A.disconnect(v,0),A.disconnect(N,1),A.disconnect(H,1),P.disconnect(p),p.disconnect(S.inputs===void 0?S:S.inputs[0]),p.disconnect(R.inputs===void 0?R:R.inputs[0]),p.disconnect(B.inputs===void 0?B:B.inputs[0]),p.disconnect(k.inputs===void 0?k:k.inputs[0]),S.disconnect(C.gain),R.disconnect(v.gain),B.disconnect(N.gain),k.disconnect(H.gain),C.disconnect(f,0,0),N.disconnect(f,0,0),v.disconnect(f,0,1),H.disconnect(f,0,1)}}},m=(_,g,p,f,b)=>{if(g===1)return h(_,p,f,b);if(g===2)return d(_,p,f,b);throw s()};return(_,{channelCount:g,channelCountMode:p,pan:f,...b})=>{if(p==="max")throw s();const T=i(_,{...b,channelCount:1,channelCountMode:p,numberOfInputs:2}),x=t(_,{...b,channelCount:g,channelCountMode:p,gain:1}),y=t(_,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",gain:f});let{connectGraph:E,disconnectGraph:A}=m(_,g,x,y,T);Object.defineProperty(y.gain,"defaultValue",{get:()=>0}),Object.defineProperty(y.gain,"maxValue",{get:()=>1}),Object.defineProperty(y.gain,"minValue",{get:()=>-1});const C={get bufferSize(){},get channelCount(){return x.channelCount},set channelCount(P){x.channelCount!==P&&(S&&A(),{connectGraph:E,disconnectGraph:A}=m(_,P,x,y,T),S&&E()),x.channelCount=P},get channelCountMode(){return x.channelCountMode},set channelCountMode(P){if(P==="clamped-max"||P==="max")throw s();x.channelCountMode=P},get channelInterpretation(){return x.channelInterpretation},set channelInterpretation(P){x.channelInterpretation=P},get context(){return x.context},get inputs(){return[x]},get numberOfInputs(){return x.numberOfInputs},get numberOfOutputs(){return x.numberOfOutputs},get pan(){return y.gain},addEventListener(...P){return x.addEventListener(P[0],P[1],P[2])},dispatchEvent(...P){return x.dispatchEvent(P[0])},removeEventListener(...P){return x.removeEventListener(P[0],P[1],P[2])}};let S=!1;const v=()=>{E(),S=!0},R=()=>{A(),S=!1};return r(Is(C,T),v,R)}},Lx=(i,e,t,n,s,r,o)=>(a,c)=>{const l=a.createWaveShaper();if(r!==null&&r.name==="webkitAudioContext"&&a.createGain().gain.automationRate===void 0)return t(a,c);Rt(l,c);const u=c.curve===null||c.curve instanceof Float32Array?c.curve:new Float32Array(c.curve);if(u!==null&&u.length<2)throw e();mt(l,{curve:u},"curve"),mt(l,c,"oversample");let h=null,d=!1;return o(l,"curve",g=>()=>g.call(l),g=>p=>(g.call(l,p),d&&(n(p)&&h===null?h=i(a,l):!n(p)&&h!==null&&(h(),h=null)),p)),s(l,()=>{d=!0,n(l.curve)&&(h=i(a,l))},()=>{d=!1,h!==null&&(h(),h=null)})},Ox=(i,e,t,n,s)=>(r,{curve:o,oversample:a,...c})=>{const l=r.createWaveShaper(),u=r.createWaveShaper();Rt(l,c),Rt(u,c);const h=t(r,{...c,gain:1}),d=t(r,{...c,gain:-1}),m=t(r,{...c,gain:1}),_=t(r,{...c,gain:-1});let g=null,p=!1,f=null;const b={get bufferSize(){},get channelCount(){return l.channelCount},set channelCount(y){h.channelCount=y,d.channelCount=y,l.channelCount=y,m.channelCount=y,u.channelCount=y,_.channelCount=y},get channelCountMode(){return l.channelCountMode},set channelCountMode(y){h.channelCountMode=y,d.channelCountMode=y,l.channelCountMode=y,m.channelCountMode=y,u.channelCountMode=y,_.channelCountMode=y},get channelInterpretation(){return l.channelInterpretation},set channelInterpretation(y){h.channelInterpretation=y,d.channelInterpretation=y,l.channelInterpretation=y,m.channelInterpretation=y,u.channelInterpretation=y,_.channelInterpretation=y},get context(){return l.context},get curve(){return f},set curve(y){if(y!==null&&y.length<2)throw e();if(y===null)l.curve=y,u.curve=y;else{const E=y.length,A=new Float32Array(E+2-E%2),C=new Float32Array(E+2-E%2);A[0]=y[0],C[0]=-y[E-1];const S=Math.ceil((E+1)/2),v=(E+1)/2-1;for(let R=1;R<S;R+=1){const P=R/S*v,N=Math.floor(P),B=Math.ceil(P);A[R]=N===B?y[N]:(1-(P-N))*y[N]+(1-(B-P))*y[B],C[R]=N===B?-y[E-1-N]:-((1-(P-N))*y[E-1-N])-(1-(B-P))*y[E-1-B]}A[S]=E%2===1?y[S-1]:(y[S-2]+y[S-1])/2,l.curve=A,u.curve=C}f=y,p&&(n(f)&&g===null?g=i(r,h):g!==null&&(g(),g=null))},get inputs(){return[h]},get numberOfInputs(){return l.numberOfInputs},get numberOfOutputs(){return l.numberOfOutputs},get oversample(){return l.oversample},set oversample(y){l.oversample=y,u.oversample=y},addEventListener(...y){return h.addEventListener(y[0],y[1],y[2])},dispatchEvent(...y){return h.dispatchEvent(y[0])},removeEventListener(...y){return h.removeEventListener(y[0],y[1],y[2])}};o!==null&&(b.curve=o instanceof Float32Array?o:new Float32Array(o)),a!==b.oversample&&(b.oversample=a);const T=()=>{h.connect(l).connect(m),h.connect(d).connect(u).connect(_).connect(m),p=!0,n(f)&&(g=i(r,h))},x=()=>{h.disconnect(l),l.disconnect(m),h.disconnect(d),d.disconnect(u),u.disconnect(_),_.disconnect(m),p=!1,g!==null&&(g(),g=null)};return s(Is(b,m),T,x)},Yt=()=>new DOMException("","NotSupportedError"),Ux={numberOfChannels:1},Bx=(i,e,t,n,s)=>class extends i{constructor(o,a,c){let l;if(typeof o=="number"&&a!==void 0&&c!==void 0)l={length:a,numberOfChannels:o,sampleRate:c};else if(typeof o=="object")l=o;else throw new Error("The given parameters are not valid.");const{length:u,numberOfChannels:h,sampleRate:d}={...Ux,...l},m=n(h,u,d);e(Qs,()=>Qs(m))||m.addEventListener("statechange",(()=>{let _=0;const g=p=>{this._state==="running"&&(_>0?(m.removeEventListener("statechange",g),p.stopImmediatePropagation(),this._waitForThePromiseToSettle(p)):_+=1)};return g})()),super(m,h),this._length=u,this._nativeOfflineAudioContext=m,this._state=null}get length(){return this._nativeOfflineAudioContext.length===void 0?this._length:this._nativeOfflineAudioContext.length}get state(){return this._state===null?this._nativeOfflineAudioContext.state:this._state}startRendering(){return this._state==="running"?Promise.reject(t()):(this._state="running",s(this.destination,this._nativeOfflineAudioContext).finally(()=>{this._state=null,Zu(this)}))}_waitForThePromiseToSettle(o){this._state===null?this._nativeOfflineAudioContext.dispatchEvent(o):setTimeout(()=>this._waitForThePromiseToSettle(o))}},kx={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",detune:0,frequency:440,periodicWave:void 0,type:"sine"},Vx=(i,e,t,n,s,r,o)=>class extends i{constructor(c,l){const u=s(c),h={...kx,...l},d=t(u,h),m=r(u),_=m?n():null,g=c.sampleRate/2;super(c,!1,d,_),this._detune=e(this,m,d.detune,153600,-153600),this._frequency=e(this,m,d.frequency,g,-g),this._nativeOscillatorNode=d,this._onended=null,this._oscillatorNodeRenderer=_,this._oscillatorNodeRenderer!==null&&h.periodicWave!==void 0&&(this._oscillatorNodeRenderer.periodicWave=h.periodicWave)}get detune(){return this._detune}get frequency(){return this._frequency}get onended(){return this._onended}set onended(c){const l=typeof c=="function"?o(this,c):null;this._nativeOscillatorNode.onended=l;const u=this._nativeOscillatorNode.onended;this._onended=u!==null&&u===l?c:u}get type(){return this._nativeOscillatorNode.type}set type(c){this._nativeOscillatorNode.type=c,this._oscillatorNodeRenderer!==null&&(this._oscillatorNodeRenderer.periodicWave=null)}setPeriodicWave(c){this._nativeOscillatorNode.setPeriodicWave(c),this._oscillatorNodeRenderer!==null&&(this._oscillatorNodeRenderer.periodicWave=c)}start(c=0){if(this._nativeOscillatorNode.start(c),this._oscillatorNodeRenderer!==null&&(this._oscillatorNodeRenderer.start=c),this.context.state!=="closed"){Ss(this);const l=()=>{this._nativeOscillatorNode.removeEventListener("ended",l),Kn(this)&&rr(this)};this._nativeOscillatorNode.addEventListener("ended",l)}}stop(c=0){this._nativeOscillatorNode.stop(c),this._oscillatorNodeRenderer!==null&&(this._oscillatorNodeRenderer.stop=c)}},zx=(i,e,t,n,s)=>()=>{const r=new WeakMap;let o=null,a=null,c=null;const l=async(u,h)=>{let d=t(u);const m=Vt(d,h);if(!m){const _={channelCount:d.channelCount,channelCountMode:d.channelCountMode,channelInterpretation:d.channelInterpretation,detune:d.detune.value,frequency:d.frequency.value,periodicWave:o===null?void 0:o,type:d.type};d=e(h,_),a!==null&&d.start(a),c!==null&&d.stop(c)}return r.set(h,d),m?(await i(h,u.detune,d.detune),await i(h,u.frequency,d.frequency)):(await n(h,u.detune,d.detune),await n(h,u.frequency,d.frequency)),await s(u,h,d),d};return{set periodicWave(u){o=u},set start(u){a=u},set stop(u){c=u},render(u,h){const d=r.get(h);return d!==void 0?Promise.resolve(d):l(u,h)}}},Gx={channelCount:2,channelCountMode:"clamped-max",channelInterpretation:"speakers",coneInnerAngle:360,coneOuterAngle:360,coneOuterGain:0,distanceModel:"inverse",maxDistance:1e4,orientationX:1,orientationY:0,orientationZ:0,panningModel:"equalpower",positionX:0,positionY:0,positionZ:0,refDistance:1,rolloffFactor:1},Hx=(i,e,t,n,s,r,o)=>class extends i{constructor(c,l){const u=s(c),h={...Gx,...l},d=t(u,h),m=r(u),_=m?n():null;super(c,!1,d,_),this._nativePannerNode=d,this._orientationX=e(this,m,d.orientationX,Ht,Kt),this._orientationY=e(this,m,d.orientationY,Ht,Kt),this._orientationZ=e(this,m,d.orientationZ,Ht,Kt),this._positionX=e(this,m,d.positionX,Ht,Kt),this._positionY=e(this,m,d.positionY,Ht,Kt),this._positionZ=e(this,m,d.positionZ,Ht,Kt),o(this,1)}get coneInnerAngle(){return this._nativePannerNode.coneInnerAngle}set coneInnerAngle(c){this._nativePannerNode.coneInnerAngle=c}get coneOuterAngle(){return this._nativePannerNode.coneOuterAngle}set coneOuterAngle(c){this._nativePannerNode.coneOuterAngle=c}get coneOuterGain(){return this._nativePannerNode.coneOuterGain}set coneOuterGain(c){this._nativePannerNode.coneOuterGain=c}get distanceModel(){return this._nativePannerNode.distanceModel}set distanceModel(c){this._nativePannerNode.distanceModel=c}get maxDistance(){return this._nativePannerNode.maxDistance}set maxDistance(c){this._nativePannerNode.maxDistance=c}get orientationX(){return this._orientationX}get orientationY(){return this._orientationY}get orientationZ(){return this._orientationZ}get panningModel(){return this._nativePannerNode.panningModel}set panningModel(c){this._nativePannerNode.panningModel=c}get positionX(){return this._positionX}get positionY(){return this._positionY}get positionZ(){return this._positionZ}get refDistance(){return this._nativePannerNode.refDistance}set refDistance(c){this._nativePannerNode.refDistance=c}get rolloffFactor(){return this._nativePannerNode.rolloffFactor}set rolloffFactor(c){this._nativePannerNode.rolloffFactor=c}},Wx=(i,e,t,n,s,r,o,a,c,l)=>()=>{const u=new WeakMap;let h=null;const d=async(m,_)=>{let g=null,p=r(m);const f={channelCount:p.channelCount,channelCountMode:p.channelCountMode,channelInterpretation:p.channelInterpretation},b={...f,coneInnerAngle:p.coneInnerAngle,coneOuterAngle:p.coneOuterAngle,coneOuterGain:p.coneOuterGain,distanceModel:p.distanceModel,maxDistance:p.maxDistance,panningModel:p.panningModel,refDistance:p.refDistance,rolloffFactor:p.rolloffFactor},T=Vt(p,_);if("bufferSize"in p)g=n(_,{...f,gain:1});else if(!T){const x={...b,orientationX:p.orientationX.value,orientationY:p.orientationY.value,orientationZ:p.orientationZ.value,positionX:p.positionX.value,positionY:p.positionY.value,positionZ:p.positionZ.value};p=s(_,x)}if(u.set(_,g===null?p:g),g!==null){if(h===null){if(o===null)throw new Error("Missing the native OfflineAudioContext constructor.");const R=new o(6,m.context.length,_.sampleRate),P=e(R,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:6});P.connect(R.destination),h=(async()=>{const N=await Promise.all([m.orientationX,m.orientationY,m.orientationZ,m.positionX,m.positionY,m.positionZ].map(async(B,H)=>{const k=t(R,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",offset:H===0?1:0});return await a(R,B,k.offset),k}));for(let B=0;B<6;B+=1)N[B].connect(P,0,B),N[B].start(0);return l(R)})()}const x=await h,y=n(_,{...f,gain:1});await c(m,_,y);const E=[];for(let R=0;R<x.numberOfChannels;R+=1)E.push(x.getChannelData(R));let A=[E[0][0],E[1][0],E[2][0]],C=[E[3][0],E[4][0],E[5][0]],S=n(_,{...f,gain:1}),v=s(_,{...b,orientationX:A[0],orientationY:A[1],orientationZ:A[2],positionX:C[0],positionY:C[1],positionZ:C[2]});y.connect(S).connect(v.inputs[0]),v.connect(g);for(let R=128;R<x.length;R+=128){const P=[E[0][R],E[1][R],E[2][R]],N=[E[3][R],E[4][R],E[5][R]];if(P.some((B,H)=>B!==A[H])||N.some((B,H)=>B!==C[H])){A=P,C=N;const B=R/_.sampleRate;S.gain.setValueAtTime(0,B),S=n(_,{...f,gain:0}),v=s(_,{...b,orientationX:A[0],orientationY:A[1],orientationZ:A[2],positionX:C[0],positionY:C[1],positionZ:C[2]}),S.gain.setValueAtTime(1,B),y.connect(S).connect(v.inputs[0]),v.connect(g)}}return g}return T?(await i(_,m.orientationX,p.orientationX),await i(_,m.orientationY,p.orientationY),await i(_,m.orientationZ,p.orientationZ),await i(_,m.positionX,p.positionX),await i(_,m.positionY,p.positionY),await i(_,m.positionZ,p.positionZ)):(await a(_,m.orientationX,p.orientationX),await a(_,m.orientationY,p.orientationY),await a(_,m.orientationZ,p.orientationZ),await a(_,m.positionX,p.positionX),await a(_,m.positionY,p.positionY),await a(_,m.positionZ,p.positionZ)),Ps(p)?await c(m,_,p.inputs[0]):await c(m,_,p),p};return{render(m,_){const g=u.get(_);return g!==void 0?Promise.resolve(g):d(m,_)}}},qx={disableNormalization:!1},Xx=(i,e,t,n)=>class rh{constructor(r,o){const a=e(r),c=n({...qx,...o}),l=i(a,c);return t.add(l),l}static[Symbol.hasInstance](r){return r!==null&&typeof r=="object"&&Object.getPrototypeOf(r)===rh.prototype||t.has(r)}},Yx=(i,e)=>(t,n,s)=>(i(n).replay(s),e(n,t,s)),jx=(i,e,t)=>async(n,s,r)=>{const o=i(n);await Promise.all(o.activeInputs.map((a,c)=>Array.from(a).map(async([l,u])=>{const d=await e(l).render(l,s),m=n.context.destination;!t(l)&&(n!==m||!t(n))&&d.connect(r,u,c)})).reduce((a,c)=>[...a,...c],[]))},Zx=(i,e,t)=>async(n,s,r)=>{const o=e(n);await Promise.all(Array.from(o.activeInputs).map(async([a,c])=>{const u=await i(a).render(a,s);t(a)||u.connect(r,c)}))},$x=(i,e,t,n)=>s=>i(Qs,()=>Qs(s))?Promise.resolve(i(n,n)).then(r=>{if(!r){const o=t(s,512,0,1);s.oncomplete=()=>{o.onaudioprocess=null,o.disconnect()},o.onaudioprocess=()=>s.currentTime,o.connect(s.destination)}return s.startRendering()}):new Promise(r=>{const o=e(s,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",gain:0});s.oncomplete=a=>{o.disconnect(),r(a.renderedBuffer)},o.connect(s.destination),s.startRendering()}),Kx=i=>(e,t)=>{i.set(e,t)},Qx=i=>(e,t)=>i.set(e,t),Jx=(i,e,t,n,s,r,o,a)=>(c,l)=>t(c).render(c,l).then(()=>Promise.all(Array.from(n(l)).map(u=>t(u).render(u,l)))).then(()=>s(l)).then(u=>(typeof u.copyFromChannel!="function"?(o(u),Ja(u)):e(r,()=>r(u))||a(u),i.add(u),u)),ey={channelCount:2,channelCountMode:"explicit",channelInterpretation:"speakers",pan:0},ty=(i,e,t,n,s,r)=>class extends i{constructor(a,c){const l=s(a),u={...ey,...c},h=t(l,u),d=r(l),m=d?n():null;super(a,!1,h,m),this._pan=e(this,d,h.pan)}get pan(){return this._pan}},ny=(i,e,t,n,s)=>()=>{const r=new WeakMap,o=async(a,c)=>{let l=t(a);const u=Vt(l,c);if(!u){const h={channelCount:l.channelCount,channelCountMode:l.channelCountMode,channelInterpretation:l.channelInterpretation,pan:l.pan.value};l=e(c,h)}return r.set(c,l),u?await i(c,a.pan,l.pan):await n(c,a.pan,l.pan),Ps(l)?await s(a,c,l.inputs[0]):await s(a,c,l),l};return{render(a,c){const l=r.get(c);return l!==void 0?Promise.resolve(l):o(a,c)}}},iy=i=>()=>{if(i===null)return!1;try{new i({length:1,sampleRate:44100})}catch{return!1}return!0},sy=(i,e)=>async()=>{if(i===null)return!0;if(e===null)return!1;const t=new Blob(['class A extends AudioWorkletProcessor{process(i){this.port.postMessage(i,[i[0][0].buffer])}}registerProcessor("a",A)'],{type:"application/javascript; charset=utf-8"}),n=new e(1,128,44100),s=URL.createObjectURL(t);let r=!1,o=!1;try{await n.audioWorklet.addModule(s);const a=new i(n,"a",{numberOfOutputs:0}),c=n.createOscillator();a.port.onmessage=()=>r=!0,a.onprocessorerror=()=>o=!0,c.connect(a),c.start(0),await n.startRendering(),await new Promise(l=>setTimeout(l))}catch{}finally{URL.revokeObjectURL(s)}return r&&!o},ry=(i,e)=>()=>{if(e===null)return Promise.resolve(!1);const t=new e(1,1,44100),n=i(t,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",gain:0});return new Promise(s=>{t.oncomplete=()=>{n.disconnect(),s(t.currentTime!==0)},t.startRendering()})},oy=()=>new DOMException("","UnknownError"),ay={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",curve:null,oversample:"none"},cy=(i,e,t,n,s,r,o)=>class extends i{constructor(c,l){const u=s(c),h={...ay,...l},d=t(u,h),_=r(u)?n():null;super(c,!0,d,_),this._isCurveNullified=!1,this._nativeWaveShaperNode=d,o(this,1)}get curve(){return this._isCurveNullified?null:this._nativeWaveShaperNode.curve}set curve(c){if(c===null)this._isCurveNullified=!0,this._nativeWaveShaperNode.curve=new Float32Array([0,0]);else{if(c.length<2)throw e();this._isCurveNullified=!1,this._nativeWaveShaperNode.curve=c}}get oversample(){return this._nativeWaveShaperNode.oversample}set oversample(c){this._nativeWaveShaperNode.oversample=c}},ly=(i,e,t)=>()=>{const n=new WeakMap,s=async(r,o)=>{let a=e(r);if(!Vt(a,o)){const l={channelCount:a.channelCount,channelCountMode:a.channelCountMode,channelInterpretation:a.channelInterpretation,curve:a.curve,oversample:a.oversample};a=i(o,l)}return n.set(o,a),Ps(a)?await t(r,o,a.inputs[0]):await t(r,o,a),a};return{render(r,o){const a=n.get(o);return a!==void 0?Promise.resolve(a):s(r,o)}}},uy=()=>typeof window>"u"?null:window,hy=(i,e)=>t=>{t.copyFromChannel=(n,s,r=0)=>{const o=i(r),a=i(s);if(a>=t.numberOfChannels)throw e();const c=t.length,l=t.getChannelData(a),u=n.length;for(let h=o<0?-o:0;h+o<c&&h<u;h+=1)n[h]=l[h+o]},t.copyToChannel=(n,s,r=0)=>{const o=i(r),a=i(s);if(a>=t.numberOfChannels)throw e();const c=t.length,l=t.getChannelData(a),u=n.length;for(let h=o<0?-o:0;h+o<c&&h<u;h+=1)l[h+o]=n[h]}},dy=i=>e=>{e.copyFromChannel=(t=>(n,s,r=0)=>{const o=i(r),a=i(s);if(o<e.length)return t.call(e,n,a,o)})(e.copyFromChannel),e.copyToChannel=(t=>(n,s,r=0)=>{const o=i(r),a=i(s);if(o<e.length)return t.call(e,n,a,o)})(e.copyToChannel)},fy=i=>(e,t)=>{const n=t.createBuffer(1,1,44100);e.buffer===null&&(e.buffer=n),i(e,"buffer",s=>()=>{const r=s.call(e);return r===n?null:r},s=>r=>s.call(e,r===null?n:r))},py=(i,e)=>(t,n)=>{n.channelCount=1,n.channelCountMode="explicit",Object.defineProperty(n,"channelCount",{get:()=>1,set:()=>{throw i()}}),Object.defineProperty(n,"channelCountMode",{get:()=>"explicit",set:()=>{throw i()}});const s=t.createBufferSource();e(n,()=>{const a=n.numberOfInputs;for(let c=0;c<a;c+=1)s.connect(n,0,c)},()=>s.disconnect(n))},oh=(i,e,t)=>i.copyFromChannel===void 0?i.getChannelData(t)[0]:(i.copyFromChannel(e,t),e[0]),ah=i=>{if(i===null)return!1;const e=i.length;return e%2!==0?i[Math.floor(e/2)]!==0:i[e/2-1]+i[e/2]!==0},ur=(i,e,t,n)=>{let s=i;for(;!s.hasOwnProperty(e);)s=Object.getPrototypeOf(s);const{get:r,set:o}=Object.getOwnPropertyDescriptor(s,e);Object.defineProperty(i,e,{get:t(r),set:n(o)})},my=i=>({...i,outputChannelCount:i.outputChannelCount!==void 0?i.outputChannelCount:i.numberOfInputs===1&&i.numberOfOutputs===1?[i.channelCount]:Array.from({length:i.numberOfOutputs},()=>1)}),_y=i=>({...i,channelCount:i.numberOfOutputs}),gy=i=>{const{imag:e,real:t}=i;return e===void 0?t===void 0?{...i,imag:[0,0],real:[0,0]}:{...i,imag:Array.from(t,()=>0),real:t}:t===void 0?{...i,imag:e,real:Array.from(e,()=>0)}:{...i,imag:e,real:t}},ch=(i,e,t)=>{try{i.setValueAtTime(e,t)}catch(n){if(n.code!==9)throw n;ch(i,e,t+1e-7)}},vy=i=>{const e=i.createBufferSource();e.start();try{e.start()}catch{return!0}return!1},xy=i=>{const e=i.createBufferSource(),t=i.createBuffer(1,1,44100);e.buffer=t;try{e.start(0,1)}catch{return!1}return!0},yy=i=>{const e=i.createBufferSource();e.start();try{e.stop()}catch{return!1}return!0},sc=i=>{const e=i.createOscillator();try{e.start(-1)}catch(t){return t instanceof RangeError}return!1},lh=i=>{const e=i.createBuffer(1,1,44100),t=i.createBufferSource();t.buffer=e,t.start(),t.stop();try{return t.stop(),!0}catch{return!1}},rc=i=>{const e=i.createOscillator();try{e.stop(-1)}catch(t){return t instanceof RangeError}return!1},Sy=i=>{const{port1:e,port2:t}=new MessageChannel;try{e.postMessage(i)}finally{e.close(),t.close()}},My=i=>{i.start=(e=>(t=0,n=0,s)=>{const r=i.buffer,o=r===null?n:Math.min(r.duration,n);r!==null&&o>r.duration-.5/i.context.sampleRate?e.call(i,t,0,0):e.call(i,t,o,s)})(i.start)},uh=(i,e)=>{const t=e.createGain();i.connect(t);const n=(s=>()=>{s.call(i,t),i.removeEventListener("ended",n)})(i.disconnect);i.addEventListener("ended",n),Is(i,t),i.stop=(s=>{let r=!1;return(o=0)=>{if(r)try{s.call(i,o)}catch{t.gain.setValueAtTime(0,o)}else s.call(i,o),r=!0}})(i.stop)},Ns=(i,e)=>t=>{const n={value:i};return Object.defineProperties(t,{currentTarget:n,target:n}),typeof e=="function"?e.call(i,t):e.handleEvent.call(i,t)},Ty=Hg(Gi),Ey=Zg(Gi),by=a0(yo),hh=new WeakMap,wy=b0(hh),Cn=Uv(new Map,new WeakMap),Nn=uy(),dh=tx(Cn,Bn),oc=E0(Wt),Lt=jx(Wt,oc,ki),Ay=ev(dh,ft,Lt),dt=C0(xo),ni=Cx(Nn),lt=q0(ni),fh=new WeakMap,ph=g0(Ns),hr=rx(Nn),ac=z0(hr),cc=G0(Nn),mh=H0(Nn),Js=ax(Nn),Tt=bv(Wg(Gu),jg(Ty,Ey,no,by,io,Wt,wy,sr,ft,Gi,Kn,ki,Yr),Cn,O0(Da,io,Wt,ft,Ks,Kn),Bn,So,Yt,i0(no,Da,Wt,ft,Ks,dt,Kn,lt),u0(fh,Wt,An),ph,dt,ac,cc,mh,lt,Js),Cy=Jg(Tt,Ay,Bn,dh,dt,lt),lc=new WeakSet,ou=nx(Nn),_h=$v(new Uint32Array(1)),uc=hy(_h,Bn),hc=dy(_h),gh=nv(lc,Cn,Yt,ou,ni,iy(ou),uc,hc),Mo=$g(en),vh=Zx(oc,or,ki),kn=Wv(vh),Fs=sx(Mo,Cn,vy,xy,yy,sc,lh,rc,My,fy(ur),uh),Vn=Yx(w0(or),vh),Ry=rv(kn,Fs,ft,Vn,Lt),Rn=wv(qg(Hu),fh,Qa,Av,Ug,Bg,kg,Vg,zg,Aa,Vu,hr,ch),Dy=sv(Tt,Ry,Rn,Pt,Fs,dt,lt,Ns),Py=pv(Tt,mv,Bn,Pt,ox(en,ur),dt,lt,Lt),Iy=Ov(kn,ih,ft,Vn,Lt),Hi=Qx(hh),Ny=Lv(Tt,Rn,Iy,So,ih,dt,lt,Hi),gi=J0(Gi,cc),Fy=py(Pt,gi),vi=px(hr,Fy),Ly=Vv(vi,ft,Lt),Oy=kv(Tt,Ly,vi,dt,lt),Uy=Hv(cr,ft,Lt),By=Gv(Tt,Uy,cr,dt,lt,_y),ky=gx(Mo,Fs,en,gi),Ls=_x(Mo,Cn,ky,sc,rc),Vy=Zv(kn,Ls,ft,Vn,Lt),zy=jv(Tt,Rn,Vy,Ls,dt,lt,Ns),xh=vx(Yt,ur),Gy=Jv(xh,ft,Lt),Hy=Qv(Tt,Gy,xh,dt,lt,Hi),Wy=o0(kn,sh,ft,Vn,Lt),qy=r0(Tt,Rn,Wy,sh,dt,lt,Hi),yh=xx(Yt),Xy=p0(kn,yh,ft,Vn,Lt),Yy=f0(Tt,Rn,Xy,yh,Yt,dt,lt,Hi),jy=M0(kn,en,ft,Vn,Lt),Zy=S0(Tt,Rn,jy,en,dt,lt),$y=Tx(So,Pt,lr,Yt),To=$x(Cn,en,lr,ry(en,ni)),Ky=L0(Fs,ft,ni,Lt,To),Qy=yx($y),Jy=N0(Tt,Qy,Ky,dt,lt,Hi),eS=_v(Rn,vi,Ls,lr,Yt,oh,lt,ur),Sh=new WeakMap,tS=Q0(Py,eS,ph,lt,Sh,Ns),Mh=Rx(Mo,Cn,sc,lh,rc,uh),nS=zx(kn,Mh,ft,Vn,Lt),iS=Vx(Tt,Rn,Mh,nS,dt,lt,Ns),Th=Xv(Fs),sS=Ox(Th,Pt,en,ah,gi),Eo=Lx(Th,Pt,sS,ah,gi,hr,ur),rS=Px(no,Pt,vi,en,lr,Eo,Yt,io,oh,gi),Eh=Dx(rS),oS=Wx(kn,vi,Ls,en,Eh,ft,ni,Vn,Lt,To),aS=Hx(Tt,Rn,Eh,oS,dt,lt,Hi),cS=Ix(Bn),lS=Xx(cS,dt,new WeakSet,gy),uS=Fx(vi,cr,en,Eo,Yt,gi),bh=Nx(uS,Yt),hS=ny(kn,bh,ft,Vn,Lt),dS=ty(Tt,Rn,bh,hS,dt,lt),fS=ly(Eo,ft,Lt),pS=cy(Tt,Pt,Eo,fS,dt,lt,Hi),wh=X0(Nn),dc=v0(Nn),Ah=new WeakMap,mS=R0(Ah,ni),_S=wh?Yg(Cn,Yt,_0(Nn),dc,x0(Gg),dt,mS,lt,Js,new WeakMap,new WeakMap,sy(Js,ni),Nn):void 0,gS=W0(ac,lt),vS=n0(lc,Cn,t0,m0,new WeakSet,dt,gS,eo,Qs,uc,hc),Ch=Nv(_S,Cy,gh,Dy,Ny,Oy,By,zy,Hy,vS,qy,Yy,Zy,Jy,tS,iS,aS,lS,dS,pS),xS=Y0(Tt,Ex,dt,lt),yS=Z0(Tt,bx,dt,lt),SS=$0(Tt,wx,dt,lt),MS=Ax(Pt,lt),TS=K0(Tt,MS,dt),ES=fv(Ch,Pt,Yt,oy,xS,yS,SS,TS,hr),fc=D0(Sh),bS=Kg(fc),Rh=qv(Bn),wS=c0(fc),Dh=h0(Bn),Ph=new WeakMap,AS=T0(Ph,An),CS=fx(Rh,Bn,Pt,vi,cr,Ls,en,lr,Yt,Dh,dc,AS,gi),RS=lx(Pt,CS,en,Yt,gi),DS=Iv(kn,Rh,Fs,vi,cr,Ls,en,wS,Dh,dc,ft,Js,ni,Vn,Lt,To),PS=A0(Ah),IS=Kx(Ph),au=wh?Rv(bS,Tt,Rn,DS,RS,Wt,PS,dt,lt,Js,my,IS,Sy,Ns):void 0,NS=e0(Yt,ni),FS=Jx(lc,Cn,oc,fc,To,eo,uc,hc),LS=Bx(Ch,Cn,Pt,NS,FS),OS=U0(xo,ac),US=B0(Ka,cc),BS=k0(Qa,mh),kS=V0(xo,lt);function pn(i){return i===void 0}function Xe(i){return i!==void 0}function VS(i){return typeof i=="function"}function mi(i){return typeof i=="number"}function Bi(i){return Object.prototype.toString.call(i)==="[object Object]"&&i.constructor===Object}function zS(i){return typeof i=="boolean"}function wn(i){return Array.isArray(i)}function ei(i){return typeof i=="string"}function Gr(i){return ei(i)&&/^([a-g]{1}(?:b|#|x|bb)?)(-?[0-9]+)/i.test(i)}function Oe(i,e){if(!i)throw new Error(e)}function Fn(i,e,t=1/0){if(!(e<=i&&i<=t))throw new RangeError(`Value must be within [${e}, ${t}], got: ${i}`)}function Ih(i){!i.isOffline&&i.state!=="running"&&pc('The AudioContext is "suspended". Invoke Tone.start() from a user action to start the audio.')}let Nh=!1,cu=!1;function lu(i){Nh=i}function GS(i){pn(i)&&Nh&&!cu&&(cu=!0,pc("Events scheduled inside of scheduled callbacks should use the passed in scheduling time. See https://github.com/Tonejs/Tone.js/wiki/Accurate-Timing"))}let Fh=console;function HS(...i){Fh.log(...i)}function pc(...i){Fh.warn(...i)}function WS(i){return new ES(i)}function qS(i,e,t){return new LS(i,e,t)}const on=typeof self=="object"?self:null,XS=on&&(on.hasOwnProperty("AudioContext")||on.hasOwnProperty("webkitAudioContext"));function YS(i,e,t){return Oe(Xe(au),"AudioWorkletNode only works in a secure context (https or localhost)"),new(i instanceof on?.BaseAudioContext?on?.AudioWorkletNode:au)(i,e,t)}function Dn(i,e,t,n){var s=arguments.length,r=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(o=i[a])&&(r=(s<3?o(r):s>3?o(e,t,r):o(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r}function Mt(i,e,t,n){function s(r){return r instanceof t?r:new t(function(o){o(r)})}return new(t||(t=Promise))(function(r,o){function a(u){try{l(n.next(u))}catch(h){o(h)}}function c(u){try{l(n.throw(u))}catch(h){o(h)}}function l(u){u.done?r(u.value):s(u.value).then(a,c)}l((n=n.apply(i,e||[])).next())})}class jS{constructor(e,t,n,s){this._callback=e,this._type=t,this._minimumUpdateInterval=Math.max(128/(s||44100),.001),this.updateInterval=n,this._createClock()}_createWorker(){const e=new Blob([`
			// the initial timeout time
			let timeoutTime =  ${(this._updateInterval*1e3).toFixed(1)};
			// onmessage callback
			self.onmessage = function(msg){
				timeoutTime = parseInt(msg.data);
			};
			// the tick function which posts a message
			// and schedules a new tick
			function tick(){
				setTimeout(tick, timeoutTime);
				self.postMessage('tick');
			}
			// call tick initially
			tick();
			`],{type:"text/javascript"}),t=URL.createObjectURL(e),n=new Worker(t);n.onmessage=this._callback.bind(this),this._worker=n}_createTimeout(){this._timeout=setTimeout(()=>{this._createTimeout(),this._callback()},this._updateInterval*1e3)}_createClock(){if(this._type==="worker")try{this._createWorker()}catch{this._type="timeout",this._createClock()}else this._type==="timeout"&&this._createTimeout()}_disposeClock(){this._timeout&&clearTimeout(this._timeout),this._worker&&(this._worker.terminate(),this._worker.onmessage=null)}get updateInterval(){return this._updateInterval}set updateInterval(e){var t;this._updateInterval=Math.max(e,this._minimumUpdateInterval),this._type==="worker"&&((t=this._worker)===null||t===void 0||t.postMessage(this._updateInterval*1e3))}get type(){return this._type}set type(e){this._disposeClock(),this._type=e,this._createClock()}dispose(){this._disposeClock()}}function Vi(i){return BS(i)}function pi(i){return US(i)}function jr(i){return kS(i)}function as(i){return OS(i)}function ZS(i){return i instanceof gh}function $S(i,e){return i==="value"||Vi(e)||pi(e)||ZS(e)}function ps(i,...e){if(!e.length)return i;const t=e.shift();if(Bi(i)&&Bi(t))for(const n in t)$S(n,t[n])?i[n]=t[n]:Bi(t[n])?(i[n]||Object.assign(i,{[n]:{}}),ps(i[n],t[n])):Object.assign(i,{[n]:t[n]});return ps(i,...e)}function KS(i,e){return i.length===e.length&&i.every((t,n)=>e[n]===t)}function be(i,e,t=[],n){const s={},r=Array.from(e);if(Bi(r[0])&&n&&!Reflect.has(r[0],n)&&(Object.keys(r[0]).some(a=>Reflect.has(i,a))||(ps(s,{[n]:r[0]}),t.splice(t.indexOf(n),1),r.shift())),r.length===1&&Bi(r[0]))ps(s,r[0]);else for(let o=0;o<t.length;o++)Xe(r[o])&&(s[t[o]]=r[o]);return ps(i,s)}function QS(i){return i.constructor.getDefaults()}function ms(i,e){return pn(i)?e:i}function uu(i,e){return e.forEach(t=>{Reflect.has(i,t)&&delete i[t]}),i}/**
 * Tone.js
 * @author Yotam Mann
 * @license http://opensource.org/licenses/MIT MIT License
 * @copyright 2014-2024 Yotam Mann
 */class ii{constructor(){this.debug=!1,this._wasDisposed=!1}static getDefaults(){return{}}log(...e){(this.debug||on&&this.toString()===on.TONE_DEBUG_CLASS)&&HS(this,...e)}dispose(){return this._wasDisposed=!0,this}get disposed(){return this._wasDisposed}toString(){return this.name}}ii.version=ku;const mc=1e-6;function Ms(i,e){return i>e+mc}function La(i,e){return Ms(i,e)||Sn(i,e)}function ao(i,e){return i+mc<e}function Sn(i,e){return Math.abs(i-e)<mc}function JS(i,e,t){return Math.max(Math.min(i,t),e)}class mn extends ii{constructor(){super(),this.name="Timeline",this._timeline=[];const e=be(mn.getDefaults(),arguments,["memory"]);this.memory=e.memory,this.increasing=e.increasing}static getDefaults(){return{memory:1/0,increasing:!1}}get length(){return this._timeline.length}add(e){if(Oe(Reflect.has(e,"time"),"Timeline: events must have a time attribute"),e.time=e.time.valueOf(),this.increasing&&this.length){const t=this._timeline[this.length-1];Oe(La(e.time,t.time),"The time must be greater than or equal to the last scheduled time"),this._timeline.push(e)}else{const t=this._search(e.time);this._timeline.splice(t+1,0,e)}if(this.length>this.memory){const t=this.length-this.memory;this._timeline.splice(0,t)}return this}remove(e){const t=this._timeline.indexOf(e);return t!==-1&&this._timeline.splice(t,1),this}get(e,t="time"){const n=this._search(e,t);return n!==-1?this._timeline[n]:null}peek(){return this._timeline[0]}shift(){return this._timeline.shift()}getAfter(e,t="time"){const n=this._search(e,t);return n+1<this._timeline.length?this._timeline[n+1]:null}getBefore(e){const t=this._timeline.length;if(t>0&&this._timeline[t-1].time<e)return this._timeline[t-1];const n=this._search(e);return n-1>=0?this._timeline[n-1]:null}cancel(e){if(this._timeline.length>1){let t=this._search(e);if(t>=0)if(Sn(this._timeline[t].time,e)){for(let n=t;n>=0&&Sn(this._timeline[n].time,e);n--)t=n;this._timeline=this._timeline.slice(0,t)}else this._timeline=this._timeline.slice(0,t+1);else this._timeline=[]}else this._timeline.length===1&&La(this._timeline[0].time,e)&&(this._timeline=[]);return this}cancelBefore(e){const t=this._search(e);return t>=0&&(this._timeline=this._timeline.slice(t+1)),this}previousEvent(e){const t=this._timeline.indexOf(e);return t>0?this._timeline[t-1]:null}_search(e,t="time"){if(this._timeline.length===0)return-1;let n=0;const s=this._timeline.length;let r=s;if(s>0&&this._timeline[s-1][t]<=e)return s-1;for(;n<r;){let o=Math.floor(n+(r-n)/2);const a=this._timeline[o],c=this._timeline[o+1];if(Sn(a[t],e)){for(let l=o;l<this._timeline.length;l++){const u=this._timeline[l];if(Sn(u[t],e))o=l;else break}return o}else{if(ao(a[t],e)&&Ms(c[t],e))return o;Ms(a[t],e)?r=o:n=o+1}}return-1}_iterate(e,t=0,n=this._timeline.length-1){this._timeline.slice(t,n+1).forEach(e)}forEach(e){return this._iterate(e),this}forEachBefore(e,t){const n=this._search(e);return n!==-1&&this._iterate(t,0,n),this}forEachAfter(e,t){const n=this._search(e);return this._iterate(t,n+1),this}forEachBetween(e,t,n){let s=this._search(e),r=this._search(t);return s!==-1&&r!==-1?(this._timeline[s].time!==e&&(s+=1),this._timeline[r].time===t&&(r-=1),this._iterate(n,s,r)):s===-1&&this._iterate(n,0,r),this}forEachFrom(e,t){let n=this._search(e);for(;n>=0&&this._timeline[n].time>=e;)n--;return this._iterate(t,n+1),this}forEachAtTime(e,t){const n=this._search(e);if(n!==-1&&Sn(this._timeline[n].time,e)){let s=n;for(let r=n;r>=0&&Sn(this._timeline[r].time,e);r--)s=r;this._iterate(r=>{t(r)},s,n)}return this}dispose(){return super.dispose(),this._timeline=[],this}}const Lh=[];function bo(i){Lh.push(i)}function eM(i){Lh.forEach(e=>e(i))}const Oh=[];function wo(i){Oh.push(i)}function tM(i){Oh.forEach(e=>e(i))}class dr extends ii{constructor(){super(...arguments),this.name="Emitter"}on(e,t){return e.split(/\W+/).forEach(s=>{pn(this._events)&&(this._events={}),this._events.hasOwnProperty(s)||(this._events[s]=[]),this._events[s].push(t)}),this}once(e,t){const n=(...s)=>{t(...s),this.off(e,n)};return this.on(e,n),this}off(e,t){return e.split(/\W+/).forEach(s=>{if(pn(this._events)&&(this._events={}),this._events.hasOwnProperty(s))if(pn(t))this._events[s]=[];else{const r=this._events[s];for(let o=r.length-1;o>=0;o--)r[o]===t&&r.splice(o,1)}}),this}emit(e,...t){if(this._events&&this._events.hasOwnProperty(e)){const n=this._events[e].slice(0);for(let s=0,r=n.length;s<r;s++)n[s].apply(this,t)}return this}static mixin(e){["on","once","off","emit"].forEach(t=>{const n=Object.getOwnPropertyDescriptor(dr.prototype,t);Object.defineProperty(e.prototype,t,n)})}dispose(){return super.dispose(),this._events=void 0,this}}class Uh extends dr{constructor(){super(...arguments),this.isOffline=!1}toJSON(){return{}}}class fr extends Uh{constructor(){var e,t;super(),this.name="Context",this._constants=new Map,this._timeouts=new mn,this._timeoutIds=0,this._initialized=!1,this._closeStarted=!1,this.isOffline=!1,this._workletPromise=null;const n=be(fr.getDefaults(),arguments,["context"]);n.context?(this._context=n.context,this._latencyHint=((e=arguments[0])===null||e===void 0?void 0:e.latencyHint)||""):(this._context=WS({latencyHint:n.latencyHint}),this._latencyHint=n.latencyHint),this._ticker=new jS(this.emit.bind(this,"tick"),n.clockSource,n.updateInterval,this._context.sampleRate),this.on("tick",this._timeoutLoop.bind(this)),this._context.onstatechange=()=>{this.emit("statechange",this.state)},this[!((t=arguments[0])===null||t===void 0)&&t.hasOwnProperty("updateInterval")?"_lookAhead":"lookAhead"]=n.lookAhead}static getDefaults(){return{clockSource:"worker",latencyHint:"interactive",lookAhead:.1,updateInterval:.05}}initialize(){return this._initialized||(eM(this),this._initialized=!0),this}createAnalyser(){return this._context.createAnalyser()}createOscillator(){return this._context.createOscillator()}createBufferSource(){return this._context.createBufferSource()}createBiquadFilter(){return this._context.createBiquadFilter()}createBuffer(e,t,n){return this._context.createBuffer(e,t,n)}createChannelMerger(e){return this._context.createChannelMerger(e)}createChannelSplitter(e){return this._context.createChannelSplitter(e)}createConstantSource(){return this._context.createConstantSource()}createConvolver(){return this._context.createConvolver()}createDelay(e){return this._context.createDelay(e)}createDynamicsCompressor(){return this._context.createDynamicsCompressor()}createGain(){return this._context.createGain()}createIIRFilter(e,t){return this._context.createIIRFilter(e,t)}createPanner(){return this._context.createPanner()}createPeriodicWave(e,t,n){return this._context.createPeriodicWave(e,t,n)}createStereoPanner(){return this._context.createStereoPanner()}createWaveShaper(){return this._context.createWaveShaper()}createMediaStreamSource(e){return Oe(as(this._context),"Not available if OfflineAudioContext"),this._context.createMediaStreamSource(e)}createMediaElementSource(e){return Oe(as(this._context),"Not available if OfflineAudioContext"),this._context.createMediaElementSource(e)}createMediaStreamDestination(){return Oe(as(this._context),"Not available if OfflineAudioContext"),this._context.createMediaStreamDestination()}decodeAudioData(e){return this._context.decodeAudioData(e)}get currentTime(){return this._context.currentTime}get state(){return this._context.state}get sampleRate(){return this._context.sampleRate}get listener(){return this.initialize(),this._listener}set listener(e){Oe(!this._initialized,"The listener cannot be set after initialization."),this._listener=e}get transport(){return this.initialize(),this._transport}set transport(e){Oe(!this._initialized,"The transport cannot be set after initialization."),this._transport=e}get draw(){return this.initialize(),this._draw}set draw(e){Oe(!this._initialized,"Draw cannot be set after initialization."),this._draw=e}get destination(){return this.initialize(),this._destination}set destination(e){Oe(!this._initialized,"The destination cannot be set after initialization."),this._destination=e}createAudioWorkletNode(e,t){return YS(this.rawContext,e,t)}addAudioWorkletModule(e){return Mt(this,void 0,void 0,function*(){Oe(Xe(this.rawContext.audioWorklet),"AudioWorkletNode is only available in a secure context (https or localhost)"),this._workletPromise||(this._workletPromise=this.rawContext.audioWorklet.addModule(e)),yield this._workletPromise})}workletsAreReady(){return Mt(this,void 0,void 0,function*(){(yield this._workletPromise)?this._workletPromise:Promise.resolve()})}get updateInterval(){return this._ticker.updateInterval}set updateInterval(e){this._ticker.updateInterval=e}get clockSource(){return this._ticker.type}set clockSource(e){this._ticker.type=e}get lookAhead(){return this._lookAhead}set lookAhead(e){this._lookAhead=e,this.updateInterval=e?e/2:.01}get latencyHint(){return this._latencyHint}get rawContext(){return this._context}now(){return this._context.currentTime+this._lookAhead}immediate(){return this._context.currentTime}resume(){return as(this._context)?this._context.resume():Promise.resolve()}close(){return Mt(this,void 0,void 0,function*(){as(this._context)&&this.state!=="closed"&&!this._closeStarted&&(this._closeStarted=!0,yield this._context.close()),this._initialized&&tM(this)})}getConstant(e){if(this._constants.has(e))return this._constants.get(e);{const t=this._context.createBuffer(1,128,this._context.sampleRate),n=t.getChannelData(0);for(let r=0;r<n.length;r++)n[r]=e;const s=this._context.createBufferSource();return s.channelCount=1,s.channelCountMode="explicit",s.buffer=t,s.loop=!0,s.start(0),this._constants.set(e,s),s}}dispose(){return super.dispose(),this._ticker.dispose(),this._timeouts.dispose(),Object.keys(this._constants).map(e=>this._constants[e].disconnect()),this.close(),this}_timeoutLoop(){const e=this.now();let t=this._timeouts.peek();for(;this._timeouts.length&&t&&t.time<=e;)t.callback(),this._timeouts.shift(),t=this._timeouts.peek()}setTimeout(e,t){this._timeoutIds++;const n=this.now();return this._timeouts.add({callback:e,id:this._timeoutIds,time:n+t}),this._timeoutIds}clearTimeout(e){return this._timeouts.forEach(t=>{t.id===e&&this._timeouts.remove(t)}),this}clearInterval(e){return this.clearTimeout(e)}setInterval(e,t){const n=++this._timeoutIds,s=()=>{const r=this.now();this._timeouts.add({callback:()=>{e(),s()},id:n,time:r+t})};return s(),n}}class nM extends Uh{constructor(){super(...arguments),this.lookAhead=0,this.latencyHint=0,this.isOffline=!1}createAnalyser(){return{}}createOscillator(){return{}}createBufferSource(){return{}}createBiquadFilter(){return{}}createBuffer(e,t,n){return{}}createChannelMerger(e){return{}}createChannelSplitter(e){return{}}createConstantSource(){return{}}createConvolver(){return{}}createDelay(e){return{}}createDynamicsCompressor(){return{}}createGain(){return{}}createIIRFilter(e,t){return{}}createPanner(){return{}}createPeriodicWave(e,t,n){return{}}createStereoPanner(){return{}}createWaveShaper(){return{}}createMediaStreamSource(e){return{}}createMediaElementSource(e){return{}}createMediaStreamDestination(){return{}}decodeAudioData(e){return Promise.resolve({})}createAudioWorkletNode(e,t){return{}}get rawContext(){return{}}addAudioWorkletModule(e){return Mt(this,void 0,void 0,function*(){return Promise.resolve()})}resume(){return Promise.resolve()}setTimeout(e,t){return 0}clearTimeout(e){return this}setInterval(e,t){return 0}clearInterval(e){return this}getConstant(e){return{}}get currentTime(){return 0}get state(){return{}}get sampleRate(){return 0}get listener(){return{}}get transport(){return{}}get draw(){return{}}set draw(e){}get destination(){return{}}set destination(e){}now(){return 0}immediate(){return 0}}function rt(i,e){wn(e)?e.forEach(t=>rt(i,t)):Object.defineProperty(i,e,{enumerable:!0,writable:!1})}function _c(i,e){wn(e)?e.forEach(t=>_c(i,t)):Object.defineProperty(i,e,{writable:!0})}const st=()=>{};class at extends ii{constructor(){super(),this.name="ToneAudioBuffer",this.onload=st;const e=be(at.getDefaults(),arguments,["url","onload","onerror"]);this.reverse=e.reverse,this.onload=e.onload,ei(e.url)?this.load(e.url).catch(e.onerror):e.url&&this.set(e.url)}static getDefaults(){return{onerror:st,onload:st,reverse:!1}}get sampleRate(){return this._buffer?this._buffer.sampleRate:dn().sampleRate}set(e){return e instanceof at?e.loaded?this._buffer=e.get():e.onload=()=>{this.set(e),this.onload(this)}:this._buffer=e,this._reversed&&this._reverse(),this}get(){return this._buffer}load(e){return Mt(this,void 0,void 0,function*(){const t=at.load(e).then(n=>{this.set(n),this.onload(this)});at.downloads.push(t);try{yield t}finally{const n=at.downloads.indexOf(t);at.downloads.splice(n,1)}return this})}dispose(){return super.dispose(),this._buffer=void 0,this}fromArray(e){const t=wn(e)&&e[0].length>0,n=t?e.length:1,s=t?e[0].length:e.length,r=dn(),o=r.createBuffer(n,s,r.sampleRate),a=!t&&n===1?[e]:e;for(let c=0;c<n;c++)o.copyToChannel(a[c],c);return this._buffer=o,this}toMono(e){if(mi(e))this.fromArray(this.toArray(e));else{let t=new Float32Array(this.length);const n=this.numberOfChannels;for(let s=0;s<n;s++){const r=this.toArray(s);for(let o=0;o<r.length;o++)t[o]+=r[o]}t=t.map(s=>s/n),this.fromArray(t)}return this}toArray(e){if(mi(e))return this.getChannelData(e);if(this.numberOfChannels===1)return this.toArray(0);{const t=[];for(let n=0;n<this.numberOfChannels;n++)t[n]=this.getChannelData(n);return t}}getChannelData(e){return this._buffer?this._buffer.getChannelData(e):new Float32Array(0)}slice(e,t=this.duration){Oe(this.loaded,"Buffer is not loaded");const n=Math.floor(e*this.sampleRate),s=Math.floor(t*this.sampleRate);Oe(n<s,"The start time must be less than the end time");const r=s-n,o=dn().createBuffer(this.numberOfChannels,r,this.sampleRate);for(let a=0;a<this.numberOfChannels;a++)o.copyToChannel(this.getChannelData(a).subarray(n,s),a);return new at(o)}_reverse(){if(this.loaded)for(let e=0;e<this.numberOfChannels;e++)this.getChannelData(e).reverse();return this}get loaded(){return this.length>0}get duration(){return this._buffer?this._buffer.duration:0}get length(){return this._buffer?this._buffer.length:0}get numberOfChannels(){return this._buffer?this._buffer.numberOfChannels:0}get reverse(){return this._reversed}set reverse(e){this._reversed!==e&&(this._reversed=e,this._reverse())}static fromArray(e){return new at().fromArray(e)}static fromUrl(e){return Mt(this,void 0,void 0,function*(){return yield new at().load(e)})}static load(e){return Mt(this,void 0,void 0,function*(){const t=e.match(/\[([^\]\[]+\|.+)\]$/);if(t){const c=t[1].split("|");let l=c[0];for(const u of c)if(at.supportsType(u)){l=u;break}e=e.replace(t[0],l)}const n=at.baseUrl===""||at.baseUrl.endsWith("/")?at.baseUrl:at.baseUrl+"/",s=document.createElement("a");s.href=n+e,s.pathname=(s.pathname+s.hash).split("/").map(encodeURIComponent).join("/");const r=yield fetch(s.href);if(!r.ok)throw new Error(`could not load url: ${e}`);const o=yield r.arrayBuffer();return yield dn().decodeAudioData(o)})}static supportsType(e){const t=e.split("."),n=t[t.length-1];return document.createElement("audio").canPlayType("audio/"+n)!==""}static loaded(){return Mt(this,void 0,void 0,function*(){for(yield Promise.resolve();at.downloads.length;)yield at.downloads[0]})}}at.baseUrl="";at.downloads=[];class Ao extends fr{constructor(){super({clockSource:"offline",context:jr(arguments[0])?arguments[0]:qS(arguments[0],arguments[1]*arguments[2],arguments[2]),lookAhead:0,updateInterval:jr(arguments[0])?128/arguments[0].sampleRate:128/arguments[2]}),this.name="OfflineContext",this._currentTime=0,this.isOffline=!0,this._duration=jr(arguments[0])?arguments[0].length/arguments[0].sampleRate:arguments[1]}now(){return this._currentTime}get currentTime(){return this._currentTime}_renderClock(e){return Mt(this,void 0,void 0,function*(){let t=0;for(;this._duration-this._currentTime>=0;){this.emit("tick"),this._currentTime+=128/this.sampleRate,t++;const n=Math.floor(this.sampleRate/128);e&&t%n===0&&(yield new Promise(s=>setTimeout(s,1)))}})}render(){return Mt(this,arguments,void 0,function*(e=!0){yield this.workletsAreReady(),yield this._renderClock(e);const t=yield this._context.startRendering();return new at(t)})}close(){return Promise.resolve()}}const Bh=new nM;let Oi=Bh;function dn(){return Oi===Bh&&XS&&iM(new fr),Oi}function iM(i,e=!1){e&&Oi.dispose(),as(i)?Oi=new fr(i):jr(i)?Oi=new Ao(i):Oi=i}function sM(){return Oi.resume()}if(on&&!on.TONE_SILENCE_LOGGING){const e=` * Tone.js v${ku} * `;console.log(`%c${e}`,"background: #000; color: #fff")}function rM(i){return Math.pow(10,i/20)}function oM(i){return 20*(Math.log(i)/Math.LN10)}function kh(i){return Math.pow(2,i/12)}let Co=440;function aM(){return Co}function cM(i){Co=i}function Oa(i){return Math.round(Vh(i))}function Vh(i){return 69+12*Math.log2(i/Co)}function lM(i){return Co*Math.pow(2,(i-69)/12)}class gc extends ii{constructor(e,t,n){super(),this.defaultUnits="s",this._val=t,this._units=n,this.context=e,this._expressions=this._getExpressions()}_getExpressions(){return{hz:{method:e=>this._frequencyToUnits(parseFloat(e)),regexp:/^(\d+(?:\.\d+)?)hz$/i},i:{method:e=>this._ticksToUnits(parseInt(e,10)),regexp:/^(\d+)i$/i},m:{method:e=>this._beatsToUnits(parseInt(e,10)*this._getTimeSignature()),regexp:/^(\d+)m$/i},n:{method:(e,t)=>{const n=parseInt(e,10),s=t==="."?1.5:1;return n===1?this._beatsToUnits(this._getTimeSignature())*s:this._beatsToUnits(4/n)*s},regexp:/^(\d+)n(\.?)$/i},number:{method:e=>this._expressions[this.defaultUnits].method.call(this,e),regexp:/^(\d+(?:\.\d+)?)$/},s:{method:e=>this._secondsToUnits(parseFloat(e)),regexp:/^(\d+(?:\.\d+)?)s$/},samples:{method:e=>parseInt(e,10)/this.context.sampleRate,regexp:/^(\d+)samples$/},t:{method:e=>{const t=parseInt(e,10);return this._beatsToUnits(8/(Math.floor(t)*3))},regexp:/^(\d+)t$/i},tr:{method:(e,t,n)=>{let s=0;return e&&e!=="0"&&(s+=this._beatsToUnits(this._getTimeSignature()*parseFloat(e))),t&&t!=="0"&&(s+=this._beatsToUnits(parseFloat(t))),n&&n!=="0"&&(s+=this._beatsToUnits(parseFloat(n)/4)),s},regexp:/^(\d+(?:\.\d+)?):(\d+(?:\.\d+)?):?(\d+(?:\.\d+)?)?$/}}}valueOf(){if(this._val instanceof gc&&this.fromType(this._val),pn(this._val))return this._noArg();if(ei(this._val)&&pn(this._units)){for(const e in this._expressions)if(this._expressions[e].regexp.test(this._val.trim())){this._units=e;break}}else if(Bi(this._val)){let e=0;for(const t in this._val)if(Xe(this._val[t])){const n=this._val[t],s=new this.constructor(this.context,t).valueOf()*n;e+=s}return e}if(Xe(this._units)){const e=this._expressions[this._units],t=this._val.toString().trim().match(e.regexp);return t?e.method.apply(this,t.slice(1)):e.method.call(this,this._val)}else return ei(this._val)?parseFloat(this._val):this._val}_frequencyToUnits(e){return 1/e}_beatsToUnits(e){return 60/this._getBpm()*e}_secondsToUnits(e){return e}_ticksToUnits(e){return e*this._beatsToUnits(1)/this._getPPQ()}_noArg(){return this._now()}_getBpm(){return this.context.transport.bpm.value}_getTimeSignature(){return this.context.transport.timeSignature}_getPPQ(){return this.context.transport.PPQ}fromType(e){switch(this._units=void 0,this.defaultUnits){case"s":this._val=e.toSeconds();break;case"i":this._val=e.toTicks();break;case"hz":this._val=e.toFrequency();break;case"midi":this._val=e.toMidi();break}return this}toFrequency(){return 1/this.toSeconds()}toSamples(){return this.toSeconds()*this.context.sampleRate}toMilliseconds(){return this.toSeconds()*1e3}}class En extends gc{constructor(){super(...arguments),this.name="TimeClass"}_getExpressions(){return Object.assign(super._getExpressions(),{now:{method:e=>this._now()+new this.constructor(this.context,e).valueOf(),regexp:/^\+(.+)/},quantize:{method:e=>{const t=new En(this.context,e).valueOf();return this._secondsToUnits(this.context.transport.nextSubdivision(t))},regexp:/^@(.+)/}})}quantize(e,t=1){const n=new this.constructor(this.context,e).valueOf(),s=this.valueOf(),a=Math.round(s/n)*n-s;return s+a*t}toNotation(){const e=this.toSeconds(),t=["1m"];for(let r=1;r<9;r++){const o=Math.pow(2,r);t.push(o+"n."),t.push(o+"n"),t.push(o+"t")}t.push("0");let n=t[0],s=new En(this.context,t[0]).toSeconds();return t.forEach(r=>{const o=new En(this.context,r).toSeconds();Math.abs(o-e)<Math.abs(s-e)&&(n=r,s=o)}),n}toBarsBeatsSixteenths(){const e=this._beatsToUnits(1);let t=this.valueOf()/e;t=parseFloat(t.toFixed(4));const n=Math.floor(t/this._getTimeSignature());let s=t%1*4;t=Math.floor(t)%this._getTimeSignature();const r=s.toString();return r.length>3&&(s=parseFloat(parseFloat(r).toFixed(3))),[n,t,s].join(":")}toTicks(){const e=this._beatsToUnits(1);return this.valueOf()/e*this._getPPQ()}toSeconds(){return this.valueOf()}toMidi(){return Oa(this.toFrequency())}_now(){return this.context.now()}}class fn extends En{constructor(){super(...arguments),this.name="Frequency",this.defaultUnits="hz"}static get A4(){return aM()}static set A4(e){cM(e)}_getExpressions(){return Object.assign({},super._getExpressions(),{midi:{regexp:/^(\d+(?:\.\d+)?midi)/,method(e){return this.defaultUnits==="midi"?e:fn.mtof(e)}},note:{regexp:/^([a-g]{1}(?:b|#|##|x|bb|###|#x|x#|bbb)?)(-?[0-9]+)/i,method(e,t){const s=uM[e.toLowerCase()]+(parseInt(t,10)+1)*12;return this.defaultUnits==="midi"?s:fn.mtof(s)}},tr:{regexp:/^(\d+(?:\.\d+)?):(\d+(?:\.\d+)?):?(\d+(?:\.\d+)?)?/,method(e,t,n){let s=1;return e&&e!=="0"&&(s*=this._beatsToUnits(this._getTimeSignature()*parseFloat(e))),t&&t!=="0"&&(s*=this._beatsToUnits(parseFloat(t))),n&&n!=="0"&&(s*=this._beatsToUnits(parseFloat(n)/4)),s}}})}transpose(e){return new fn(this.context,this.valueOf()*kh(e))}harmonize(e){return e.map(t=>this.transpose(t))}toMidi(){return Oa(this.valueOf())}toNote(){const e=this.toFrequency(),t=Math.log2(e/fn.A4);let n=Math.round(12*t)+57;const s=Math.floor(n/12);return s<0&&(n+=-12*s),hM[n%12]+s.toString()}toSeconds(){return 1/super.toSeconds()}toTicks(){const e=this._beatsToUnits(1),t=this.valueOf()/e;return Math.floor(t*this._getPPQ())}_noArg(){return 0}_frequencyToUnits(e){return e}_ticksToUnits(e){return 1/(e*60/(this._getBpm()*this._getPPQ()))}_beatsToUnits(e){return 1/super._beatsToUnits(e)}_secondsToUnits(e){return 1/e}static mtof(e){return lM(e)}static ftom(e){return Oa(e)}}const uM={cbbb:-3,cbb:-2,cb:-1,c:0,"c#":1,cx:2,"c##":2,"c###":3,"cx#":3,"c#x":3,dbbb:-1,dbb:0,db:1,d:2,"d#":3,dx:4,"d##":4,"d###":5,"dx#":5,"d#x":5,ebbb:1,ebb:2,eb:3,e:4,"e#":5,ex:6,"e##":6,"e###":7,"ex#":7,"e#x":7,fbbb:2,fbb:3,fb:4,f:5,"f#":6,fx:7,"f##":7,"f###":8,"fx#":8,"f#x":8,gbbb:4,gbb:5,gb:6,g:7,"g#":8,gx:9,"g##":9,"g###":10,"gx#":10,"g#x":10,abbb:6,abb:7,ab:8,a:9,"a#":10,ax:11,"a##":11,"a###":12,"ax#":12,"a#x":12,bbbb:8,bbb:9,bb:10,b:11,"b#":12,bx:13,"b##":13,"b###":14,"bx#":14,"b#x":14},hM=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"];class Zs extends En{constructor(){super(...arguments),this.name="TransportTime"}_now(){return this.context.transport.seconds}}class Jt extends ii{constructor(){super();const e=be(Jt.getDefaults(),arguments,["context"]);this.defaultContext?this.context=this.defaultContext:this.context=e.context}static getDefaults(){return{context:dn()}}now(){return this.context.currentTime+this.context.lookAhead}immediate(){return this.context.currentTime}get sampleTime(){return 1/this.context.sampleRate}get blockTime(){return 128/this.context.sampleRate}toSeconds(e){return GS(e),new En(this.context,e).toSeconds()}toFrequency(e){return new fn(this.context,e).toFrequency()}toTicks(e){return new Zs(this.context,e).toTicks()}_getPartialProperties(e){const t=this.get();return Object.keys(t).forEach(n=>{pn(e[n])&&delete t[n]}),t}get(){const e=QS(this);return Object.keys(e).forEach(t=>{if(Reflect.has(this,t)){const n=this[t];Xe(n)&&Xe(n.value)&&Xe(n.setValueAtTime)?e[t]=n.value:n instanceof Jt?e[t]=n._getPartialProperties(e[t]):wn(n)||mi(n)||ei(n)||zS(n)?e[t]=n:delete e[t]}}),e}set(e){return Object.keys(e).forEach(t=>{Reflect.has(this,t)&&Xe(this[t])&&(this[t]&&Xe(this[t].value)&&Xe(this[t].setValueAtTime)?this[t].value!==e[t]&&(this[t].value=e[t]):this[t]instanceof Jt?this[t].set(e[t]):this[t]=e[t])}),this}}class vc extends mn{constructor(e="stopped"){super(),this.name="StateTimeline",this._initial=e,this.setStateAtTime(this._initial,0)}getValueAtTime(e){const t=this.get(e);return t!==null?t.state:this._initial}setStateAtTime(e,t,n){return Fn(t,0),this.add(Object.assign({},n,{state:e,time:t})),this}getLastState(e,t){const n=this._search(t);for(let s=n;s>=0;s--){const r=this._timeline[s];if(r.state===e)return r}}getNextState(e,t){const n=this._search(t);if(n!==-1)for(let s=n;s<this._timeline.length;s++){const r=this._timeline[s];if(r.state===e)return r}}}class qe extends Jt{constructor(){const e=be(qe.getDefaults(),arguments,["param","units","convert"]);for(super(e),this.name="Param",this.overridden=!1,this._minOutput=1e-7,Oe(Xe(e.param)&&(Vi(e.param)||e.param instanceof qe),"param must be an AudioParam");!Vi(e.param);)e.param=e.param._param;this._swappable=Xe(e.swappable)?e.swappable:!1,this._swappable?(this.input=this.context.createGain(),this._param=e.param,this.input.connect(this._param)):this._param=this.input=e.param,this._events=new mn(1e3),this._initialValue=this._param.defaultValue,this.units=e.units,this.convert=e.convert,this._minValue=e.minValue,this._maxValue=e.maxValue,Xe(e.value)&&e.value!==this._toType(this._initialValue)&&this.setValueAtTime(e.value,0)}static getDefaults(){return Object.assign(Jt.getDefaults(),{convert:!0,units:"number"})}get value(){const e=this.now();return this.getValueAtTime(e)}set value(e){this.cancelScheduledValues(this.now()),this.setValueAtTime(e,this.now())}get minValue(){return Xe(this._minValue)?this._minValue:this.units==="time"||this.units==="frequency"||this.units==="normalRange"||this.units==="positive"||this.units==="transportTime"||this.units==="ticks"||this.units==="bpm"||this.units==="hertz"||this.units==="samples"?0:this.units==="audioRange"?-1:this.units==="decibels"?-1/0:this._param.minValue}get maxValue(){return Xe(this._maxValue)?this._maxValue:this.units==="normalRange"||this.units==="audioRange"?1:this._param.maxValue}_is(e,t){return this.units===t}_assertRange(e){return Xe(this.maxValue)&&Xe(this.minValue)&&Fn(e,this._fromType(this.minValue),this._fromType(this.maxValue)),e}_fromType(e){return this.convert&&!this.overridden?this._is(e,"time")?this.toSeconds(e):this._is(e,"decibels")?rM(e):this._is(e,"frequency")?this.toFrequency(e):e:this.overridden?0:e}_toType(e){return this.convert&&this.units==="decibels"?oM(e):e}setValueAtTime(e,t){const n=this.toSeconds(t),s=this._fromType(e);return Oe(isFinite(s)&&isFinite(n),`Invalid argument(s) to setValueAtTime: ${JSON.stringify(e)}, ${JSON.stringify(t)}`),this._assertRange(s),this.log(this.units,"setValueAtTime",e,n),this._events.add({time:n,type:"setValueAtTime",value:s}),this._param.setValueAtTime(s,n),this}getValueAtTime(e){const t=Math.max(this.toSeconds(e),0),n=this._events.getAfter(t),s=this._events.get(t);let r=this._initialValue;if(s===null)r=this._initialValue;else if(s.type==="setTargetAtTime"&&(n===null||n.type==="setValueAtTime")){const o=this._events.getBefore(s.time);let a;o===null?a=this._initialValue:a=o.value,s.type==="setTargetAtTime"&&(r=this._exponentialApproach(s.time,a,s.value,s.constant,t))}else if(n===null)r=s.value;else if(n.type==="linearRampToValueAtTime"||n.type==="exponentialRampToValueAtTime"){let o=s.value;if(s.type==="setTargetAtTime"){const a=this._events.getBefore(s.time);a===null?o=this._initialValue:o=a.value}n.type==="linearRampToValueAtTime"?r=this._linearInterpolate(s.time,o,n.time,n.value,t):r=this._exponentialInterpolate(s.time,o,n.time,n.value,t)}else r=s.value;return this._toType(r)}setRampPoint(e){e=this.toSeconds(e);let t=this.getValueAtTime(e);return this.cancelAndHoldAtTime(e),this._fromType(t)===0&&(t=this._toType(this._minOutput)),this.setValueAtTime(t,e),this}linearRampToValueAtTime(e,t){const n=this._fromType(e),s=this.toSeconds(t);return Oe(isFinite(n)&&isFinite(s),`Invalid argument(s) to linearRampToValueAtTime: ${JSON.stringify(e)}, ${JSON.stringify(t)}`),this._assertRange(n),this._events.add({time:s,type:"linearRampToValueAtTime",value:n}),this.log(this.units,"linearRampToValueAtTime",e,s),this._param.linearRampToValueAtTime(n,s),this}exponentialRampToValueAtTime(e,t){let n=this._fromType(e);n=Sn(n,0)?this._minOutput:n,this._assertRange(n);const s=this.toSeconds(t);return Oe(isFinite(n)&&isFinite(s),`Invalid argument(s) to exponentialRampToValueAtTime: ${JSON.stringify(e)}, ${JSON.stringify(t)}`),this._events.add({time:s,type:"exponentialRampToValueAtTime",value:n}),this.log(this.units,"exponentialRampToValueAtTime",e,s),this._param.exponentialRampToValueAtTime(n,s),this}exponentialRampTo(e,t,n){return n=this.toSeconds(n),this.setRampPoint(n),this.exponentialRampToValueAtTime(e,n+this.toSeconds(t)),this}linearRampTo(e,t,n){return n=this.toSeconds(n),this.setRampPoint(n),this.linearRampToValueAtTime(e,n+this.toSeconds(t)),this}targetRampTo(e,t,n){return n=this.toSeconds(n),this.setRampPoint(n),this.exponentialApproachValueAtTime(e,n,t),this}exponentialApproachValueAtTime(e,t,n){t=this.toSeconds(t),n=this.toSeconds(n);const s=Math.log(n+1)/Math.log(200);return this.setTargetAtTime(e,t,s),this.cancelAndHoldAtTime(t+n*.9),this.linearRampToValueAtTime(e,t+n),this}setTargetAtTime(e,t,n){const s=this._fromType(e);Oe(isFinite(n)&&n>0,"timeConstant must be a number greater than 0");const r=this.toSeconds(t);return this._assertRange(s),Oe(isFinite(s)&&isFinite(r),`Invalid argument(s) to setTargetAtTime: ${JSON.stringify(e)}, ${JSON.stringify(t)}`),this._events.add({constant:n,time:r,type:"setTargetAtTime",value:s}),this.log(this.units,"setTargetAtTime",e,r,n),this._param.setTargetAtTime(s,r,n),this}setValueCurveAtTime(e,t,n,s=1){n=this.toSeconds(n),t=this.toSeconds(t);const r=this._fromType(e[0])*s;this.setValueAtTime(this._toType(r),t);const o=n/(e.length-1);for(let a=1;a<e.length;a++){const c=this._fromType(e[a])*s;this.linearRampToValueAtTime(this._toType(c),t+a*o)}return this}cancelScheduledValues(e){const t=this.toSeconds(e);return Oe(isFinite(t),`Invalid argument to cancelScheduledValues: ${JSON.stringify(e)}`),this._events.cancel(t),this._param.cancelScheduledValues(t),this.log(this.units,"cancelScheduledValues",t),this}cancelAndHoldAtTime(e){const t=this.toSeconds(e),n=this._fromType(this.getValueAtTime(t));Oe(isFinite(t),`Invalid argument to cancelAndHoldAtTime: ${JSON.stringify(e)}`),this.log(this.units,"cancelAndHoldAtTime",t,"value="+n);const s=this._events.get(t),r=this._events.getAfter(t);return s&&Sn(s.time,t)?r?(this._param.cancelScheduledValues(r.time),this._events.cancel(r.time)):(this._param.cancelAndHoldAtTime(t),this._events.cancel(t+this.sampleTime)):r&&(this._param.cancelScheduledValues(r.time),this._events.cancel(r.time),r.type==="linearRampToValueAtTime"?this.linearRampToValueAtTime(this._toType(n),t):r.type==="exponentialRampToValueAtTime"&&this.exponentialRampToValueAtTime(this._toType(n),t)),this._events.add({time:t,type:"setValueAtTime",value:n}),this._param.setValueAtTime(n,t),this}rampTo(e,t=.1,n){return this.units==="frequency"||this.units==="bpm"||this.units==="decibels"?this.exponentialRampTo(e,t,n):this.linearRampTo(e,t,n),this}apply(e){const t=this.context.currentTime;e.setValueAtTime(this.getValueAtTime(t),t);const n=this._events.get(t);if(n&&n.type==="setTargetAtTime"){const s=this._events.getAfter(n.time),r=s?s.time:t+2,o=(r-t)/10;for(let a=t;a<r;a+=o)e.linearRampToValueAtTime(this.getValueAtTime(a),a)}return this._events.forEachAfter(this.context.currentTime,s=>{s.type==="cancelScheduledValues"?e.cancelScheduledValues(s.time):s.type==="setTargetAtTime"?e.setTargetAtTime(s.value,s.time,s.constant):e[s.type](s.value,s.time)}),this}setParam(e){Oe(this._swappable,"The Param must be assigned as 'swappable' in the constructor");const t=this.input;return t.disconnect(this._param),this.apply(e),this._param=e,t.connect(this._param),this}dispose(){return super.dispose(),this._events.dispose(),this}get defaultValue(){return this._toType(this._param.defaultValue)}_exponentialApproach(e,t,n,s,r){return n+(t-n)*Math.exp(-(r-e)/s)}_linearInterpolate(e,t,n,s,r){return t+(s-t)*((r-e)/(n-e))}_exponentialInterpolate(e,t,n,s,r){return t*Math.pow(s/t,(r-e)/(n-e))}}class Ae extends Jt{constructor(){super(...arguments),this._internalChannels=[]}get numberOfInputs(){return Xe(this.input)?Vi(this.input)||this.input instanceof qe?1:this.input.numberOfInputs:0}get numberOfOutputs(){return Xe(this.output)?this.output.numberOfOutputs:0}_isAudioNode(e){return Xe(e)&&(e instanceof Ae||pi(e))}_getInternalNodes(){const e=this._internalChannels.slice(0);return this._isAudioNode(this.input)&&e.push(this.input),this._isAudioNode(this.output)&&this.input!==this.output&&e.push(this.output),e}_setChannelProperties(e){this._getInternalNodes().forEach(n=>{n.channelCount=e.channelCount,n.channelCountMode=e.channelCountMode,n.channelInterpretation=e.channelInterpretation})}_getChannelProperties(){const e=this._getInternalNodes();Oe(e.length>0,"ToneAudioNode does not have any internal nodes");const t=e[0];return{channelCount:t.channelCount,channelCountMode:t.channelCountMode,channelInterpretation:t.channelInterpretation}}get channelCount(){return this._getChannelProperties().channelCount}set channelCount(e){const t=this._getChannelProperties();this._setChannelProperties(Object.assign(t,{channelCount:e}))}get channelCountMode(){return this._getChannelProperties().channelCountMode}set channelCountMode(e){const t=this._getChannelProperties();this._setChannelProperties(Object.assign(t,{channelCountMode:e}))}get channelInterpretation(){return this._getChannelProperties().channelInterpretation}set channelInterpretation(e){const t=this._getChannelProperties();this._setChannelProperties(Object.assign(t,{channelInterpretation:e}))}connect(e,t=0,n=0){return ti(this,e,t,n),this}toDestination(){return this.connect(this.context.destination),this}toMaster(){return pc("toMaster() has been renamed toDestination()"),this.toDestination()}disconnect(e,t=0,n=0){return zh(this,e,t,n),this}chain(...e){return er(this,...e),this}fan(...e){return e.forEach(t=>this.connect(t)),this}dispose(){return super.dispose(),Xe(this.input)&&(this.input instanceof Ae?this.input.dispose():pi(this.input)&&this.input.disconnect()),Xe(this.output)&&(this.output instanceof Ae?this.output.dispose():pi(this.output)&&this.output.disconnect()),this._internalChannels=[],this}}function er(...i){const e=i.shift();i.reduce((t,n)=>(t instanceof Ae?t.connect(n):pi(t)&&ti(t,n),n),e)}function ti(i,e,t=0,n=0){for(Oe(Xe(i),"Cannot connect from undefined node"),Oe(Xe(e),"Cannot connect to undefined node"),(e instanceof Ae||pi(e))&&Oe(e.numberOfInputs>0,"Cannot connect to node with no inputs"),Oe(i.numberOfOutputs>0,"Cannot connect from node with no outputs");e instanceof Ae||e instanceof qe;)Xe(e.input)&&(e=e.input);for(;i instanceof Ae;)Xe(i.output)&&(i=i.output);Vi(e)?i.connect(e,t):i.connect(e,t,n)}function zh(i,e,t=0,n=0){if(Xe(e))for(;e instanceof Ae;)e=e.input;for(;!pi(i);)Xe(i.output)&&(i=i.output);Vi(e)?i.disconnect(e,t):pi(e)?i.disconnect(e,t,n):i.disconnect()}class Je extends Ae{constructor(){const e=be(Je.getDefaults(),arguments,["gain","units"]);super(e),this.name="Gain",this._gainNode=this.context.createGain(),this.input=this._gainNode,this.output=this._gainNode,this.gain=new qe({context:this.context,convert:e.convert,param:this._gainNode.gain,units:e.units,value:e.gain,minValue:e.minValue,maxValue:e.maxValue}),rt(this,"gain")}static getDefaults(){return Object.assign(Ae.getDefaults(),{convert:!0,gain:1,units:"gain"})}dispose(){return super.dispose(),this._gainNode.disconnect(),this.gain.dispose(),this}}class Ts extends Ae{constructor(e){super(e),this.onended=st,this._startTime=-1,this._stopTime=-1,this._timeout=-1,this.output=new Je({context:this.context,gain:0}),this._gainNode=this.output,this.getStateAtTime=function(t){const n=this.toSeconds(t);return this._startTime!==-1&&n>=this._startTime&&(this._stopTime===-1||n<=this._stopTime)?"started":"stopped"},this._fadeIn=e.fadeIn,this._fadeOut=e.fadeOut,this._curve=e.curve,this.onended=e.onended}static getDefaults(){return Object.assign(Ae.getDefaults(),{curve:"linear",fadeIn:0,fadeOut:0,onended:st})}_startGain(e,t=1){Oe(this._startTime===-1,"Source cannot be started more than once");const n=this.toSeconds(this._fadeIn);return this._startTime=e+n,this._startTime=Math.max(this._startTime,this.context.currentTime),n>0?(this._gainNode.gain.setValueAtTime(0,e),this._curve==="linear"?this._gainNode.gain.linearRampToValueAtTime(t,e+n):this._gainNode.gain.exponentialApproachValueAtTime(t,e,n)):this._gainNode.gain.setValueAtTime(t,e),this}stop(e){return this.log("stop",e),this._stopGain(this.toSeconds(e)),this}_stopGain(e){Oe(this._startTime!==-1,"'start' must be called before 'stop'"),this.cancelStop();const t=this.toSeconds(this._fadeOut);return this._stopTime=this.toSeconds(e)+t,this._stopTime=Math.max(this._stopTime,this.now()),t>0?this._curve==="linear"?this._gainNode.gain.linearRampTo(0,t,e):this._gainNode.gain.targetRampTo(0,t,e):(this._gainNode.gain.cancelAndHoldAtTime(e),this._gainNode.gain.setValueAtTime(0,e)),this.context.clearTimeout(this._timeout),this._timeout=this.context.setTimeout(()=>{const n=this._curve==="exponential"?t*2:0;this._stopSource(this.now()+n),this._onended()},this._stopTime-this.context.currentTime),this}_onended(){if(this.onended!==st&&(this.onended(this),this.onended=st,!this.context.isOffline)){const e=()=>this.dispose();typeof window.requestIdleCallback<"u"?window.requestIdleCallback(e):setTimeout(e,1e3)}}get state(){return this.getStateAtTime(this.now())}cancelStop(){return this.log("cancelStop"),Oe(this._startTime!==-1,"Source is not started"),this._gainNode.gain.cancelScheduledValues(this._startTime+this.sampleTime),this.context.clearTimeout(this._timeout),this._stopTime=-1,this}dispose(){return super.dispose(),this._gainNode.dispose(),this.onended=st,this}}class xc extends Ts{constructor(){const e=be(xc.getDefaults(),arguments,["offset"]);super(e),this.name="ToneConstantSource",this._source=this.context.createConstantSource(),ti(this._source,this._gainNode),this.offset=new qe({context:this.context,convert:e.convert,param:this._source.offset,units:e.units,value:e.offset,minValue:e.minValue,maxValue:e.maxValue})}static getDefaults(){return Object.assign(Ts.getDefaults(),{convert:!0,offset:1,units:"number"})}start(e){const t=this.toSeconds(e);return this.log("start",t),this._startGain(t),this._source.start(t),this}_stopSource(e){this._source.stop(e)}dispose(){return super.dispose(),this.state==="started"&&this.stop(),this._source.disconnect(),this.offset.dispose(),this}}class ut extends Ae{constructor(){const e=be(ut.getDefaults(),arguments,["value","units"]);super(e),this.name="Signal",this.override=!0,this.output=this._constantSource=new xc({context:this.context,convert:e.convert,offset:e.value,units:e.units,minValue:e.minValue,maxValue:e.maxValue}),this._constantSource.start(0),this.input=this._param=this._constantSource.offset}static getDefaults(){return Object.assign(Ae.getDefaults(),{convert:!0,units:"number",value:0})}connect(e,t=0,n=0){return Ro(this,e,t,n),this}dispose(){return super.dispose(),this._param.dispose(),this._constantSource.dispose(),this}setValueAtTime(e,t){return this._param.setValueAtTime(e,t),this}getValueAtTime(e){return this._param.getValueAtTime(e)}setRampPoint(e){return this._param.setRampPoint(e),this}linearRampToValueAtTime(e,t){return this._param.linearRampToValueAtTime(e,t),this}exponentialRampToValueAtTime(e,t){return this._param.exponentialRampToValueAtTime(e,t),this}exponentialRampTo(e,t,n){return this._param.exponentialRampTo(e,t,n),this}linearRampTo(e,t,n){return this._param.linearRampTo(e,t,n),this}targetRampTo(e,t,n){return this._param.targetRampTo(e,t,n),this}exponentialApproachValueAtTime(e,t,n){return this._param.exponentialApproachValueAtTime(e,t,n),this}setTargetAtTime(e,t,n){return this._param.setTargetAtTime(e,t,n),this}setValueCurveAtTime(e,t,n,s){return this._param.setValueCurveAtTime(e,t,n,s),this}cancelScheduledValues(e){return this._param.cancelScheduledValues(e),this}cancelAndHoldAtTime(e){return this._param.cancelAndHoldAtTime(e),this}rampTo(e,t,n){return this._param.rampTo(e,t,n),this}get value(){return this._param.value}set value(e){this._param.value=e}get convert(){return this._param.convert}set convert(e){this._param.convert=e}get units(){return this._param.units}get overridden(){return this._param.overridden}set overridden(e){this._param.overridden=e}get maxValue(){return this._param.maxValue}get minValue(){return this._param.minValue}apply(e){return this._param.apply(e),this}}function Ro(i,e,t,n){(e instanceof qe||Vi(e)||e instanceof ut&&e.override)&&(e.cancelScheduledValues(0),e.setValueAtTime(0,0),e instanceof ut&&(e.overridden=!0)),ti(i,e,t,n)}class yc extends qe{constructor(){const e=be(yc.getDefaults(),arguments,["value"]);super(e),this.name="TickParam",this._events=new mn(1/0),this._multiplier=1,this._multiplier=e.multiplier,this._events.cancel(0),this._events.add({ticks:0,time:0,type:"setValueAtTime",value:this._fromType(e.value)}),this.setValueAtTime(e.value,0)}static getDefaults(){return Object.assign(qe.getDefaults(),{multiplier:1,units:"hertz",value:1})}setTargetAtTime(e,t,n){t=this.toSeconds(t),this.setRampPoint(t);const s=this._fromType(e),r=this._events.get(t),o=Math.round(Math.max(1/n,1));for(let a=0;a<=o;a++){const c=n*a+t,l=this._exponentialApproach(r.time,r.value,s,n,c);this.linearRampToValueAtTime(this._toType(l),c)}return this}setValueAtTime(e,t){const n=this.toSeconds(t);super.setValueAtTime(e,t);const s=this._events.get(n),r=this._events.previousEvent(s),o=this._getTicksUntilEvent(r,n);return s.ticks=Math.max(o,0),this}linearRampToValueAtTime(e,t){const n=this.toSeconds(t);super.linearRampToValueAtTime(e,t);const s=this._events.get(n),r=this._events.previousEvent(s),o=this._getTicksUntilEvent(r,n);return s.ticks=Math.max(o,0),this}exponentialRampToValueAtTime(e,t){t=this.toSeconds(t);const n=this._fromType(e),s=this._events.get(t),r=Math.round(Math.max((t-s.time)*10,1)),o=(t-s.time)/r;for(let a=0;a<=r;a++){const c=o*a+s.time,l=this._exponentialInterpolate(s.time,s.value,t,n,c);this.linearRampToValueAtTime(this._toType(l),c)}return this}_getTicksUntilEvent(e,t){if(e===null)e={ticks:0,time:0,type:"setValueAtTime",value:0};else if(pn(e.ticks)){const o=this._events.previousEvent(e);e.ticks=this._getTicksUntilEvent(o,e.time)}const n=this._fromType(this.getValueAtTime(e.time));let s=this._fromType(this.getValueAtTime(t));const r=this._events.get(t);return r&&r.time===t&&r.type==="setValueAtTime"&&(s=this._fromType(this.getValueAtTime(t-this.sampleTime))),.5*(t-e.time)*(n+s)+e.ticks}getTicksAtTime(e){const t=this.toSeconds(e),n=this._events.get(t);return Math.max(this._getTicksUntilEvent(n,t),0)}getDurationOfTicks(e,t){const n=this.toSeconds(t),s=this.getTicksAtTime(t);return this.getTimeOfTick(s+e)-n}getTimeOfTick(e){const t=this._events.get(e,"ticks"),n=this._events.getAfter(e,"ticks");if(t&&t.ticks===e)return t.time;if(t&&n&&n.type==="linearRampToValueAtTime"&&t.value!==n.value){const s=this._fromType(this.getValueAtTime(t.time)),o=(this._fromType(this.getValueAtTime(n.time))-s)/(n.time-t.time),a=Math.sqrt(Math.pow(s,2)-2*o*(t.ticks-e)),c=(-s+a)/o,l=(-s-a)/o;return(c>0?c:l)+t.time}else return t?t.value===0?1/0:t.time+(e-t.ticks)/t.value:e/this._initialValue}ticksToTime(e,t){return this.getDurationOfTicks(e,t)}timeToTicks(e,t){const n=this.toSeconds(t),s=this.toSeconds(e),r=this.getTicksAtTime(n);return this.getTicksAtTime(n+s)-r}_fromType(e){return this.units==="bpm"&&this.multiplier?1/(60/e/this.multiplier):super._fromType(e)}_toType(e){return this.units==="bpm"&&this.multiplier?e/this.multiplier*60:super._toType(e)}get multiplier(){return this._multiplier}set multiplier(e){const t=this.value;this._multiplier=e,this.cancelScheduledValues(0),this.setValueAtTime(t,0)}}class Sc extends ut{constructor(){const e=be(Sc.getDefaults(),arguments,["value"]);super(e),this.name="TickSignal",this.input=this._param=new yc({context:this.context,convert:e.convert,multiplier:e.multiplier,param:this._constantSource.offset,units:e.units,value:e.value})}static getDefaults(){return Object.assign(ut.getDefaults(),{multiplier:1,units:"hertz",value:1})}ticksToTime(e,t){return this._param.ticksToTime(e,t)}timeToTicks(e,t){return this._param.timeToTicks(e,t)}getTimeOfTick(e){return this._param.getTimeOfTick(e)}getDurationOfTicks(e,t){return this._param.getDurationOfTicks(e,t)}getTicksAtTime(e){return this._param.getTicksAtTime(e)}get multiplier(){return this._param.multiplier}set multiplier(e){this._param.multiplier=e}dispose(){return super.dispose(),this._param.dispose(),this}}class Mc extends Jt{constructor(){const e=be(Mc.getDefaults(),arguments,["frequency"]);super(e),this.name="TickSource",this._state=new vc,this._tickOffset=new mn,this._ticksAtTime=new mn,this._secondsAtTime=new mn,this.frequency=new Sc({context:this.context,units:e.units,value:e.frequency}),rt(this,"frequency"),this._state.setStateAtTime("stopped",0),this.setTicksAtTime(0,0)}static getDefaults(){return Object.assign({frequency:1,units:"hertz"},Jt.getDefaults())}get state(){return this.getStateAtTime(this.now())}start(e,t){const n=this.toSeconds(e);return this._state.getValueAtTime(n)!=="started"&&(this._state.setStateAtTime("started",n),Xe(t)&&this.setTicksAtTime(t,n),this._ticksAtTime.cancel(n),this._secondsAtTime.cancel(n)),this}stop(e){const t=this.toSeconds(e);if(this._state.getValueAtTime(t)==="stopped"){const n=this._state.get(t);n&&n.time>0&&(this._tickOffset.cancel(n.time),this._state.cancel(n.time))}return this._state.cancel(t),this._state.setStateAtTime("stopped",t),this.setTicksAtTime(0,t),this._ticksAtTime.cancel(t),this._secondsAtTime.cancel(t),this}pause(e){const t=this.toSeconds(e);return this._state.getValueAtTime(t)==="started"&&(this._state.setStateAtTime("paused",t),this._ticksAtTime.cancel(t),this._secondsAtTime.cancel(t)),this}cancel(e){return e=this.toSeconds(e),this._state.cancel(e),this._tickOffset.cancel(e),this._ticksAtTime.cancel(e),this._secondsAtTime.cancel(e),this}getTicksAtTime(e){const t=this.toSeconds(e),n=this._state.getLastState("stopped",t),s=this._ticksAtTime.get(t),r={state:"paused",time:t};this._state.add(r);let o=s||n,a=s?s.ticks:0,c=null;return this._state.forEachBetween(o.time,t+this.sampleTime,l=>{let u=o.time;const h=this._tickOffset.get(l.time);h&&h.time>=o.time&&(a=h.ticks,u=h.time),o.state==="started"&&l.state!=="started"&&(a+=this.frequency.getTicksAtTime(l.time)-this.frequency.getTicksAtTime(u),l.time!==r.time&&(c={state:l.state,time:l.time,ticks:a})),o=l}),this._state.remove(r),c&&this._ticksAtTime.add(c),a}get ticks(){return this.getTicksAtTime(this.now())}set ticks(e){this.setTicksAtTime(e,this.now())}get seconds(){return this.getSecondsAtTime(this.now())}set seconds(e){const t=this.now(),n=this.frequency.timeToTicks(e,t);this.setTicksAtTime(n,t)}getSecondsAtTime(e){e=this.toSeconds(e);const t=this._state.getLastState("stopped",e),n={state:"paused",time:e};this._state.add(n);const s=this._secondsAtTime.get(e);let r=s||t,o=s?s.seconds:0,a=null;return this._state.forEachBetween(r.time,e+this.sampleTime,c=>{let l=r.time;const u=this._tickOffset.get(c.time);u&&u.time>=r.time&&(o=u.seconds,l=u.time),r.state==="started"&&c.state!=="started"&&(o+=c.time-l,c.time!==n.time&&(a={state:c.state,time:c.time,seconds:o})),r=c}),this._state.remove(n),a&&this._secondsAtTime.add(a),o}setTicksAtTime(e,t){return t=this.toSeconds(t),this._tickOffset.cancel(t),this._tickOffset.add({seconds:this.frequency.getDurationOfTicks(e,t),ticks:e,time:t}),this._ticksAtTime.cancel(t),this._secondsAtTime.cancel(t),this}getStateAtTime(e){return e=this.toSeconds(e),this._state.getValueAtTime(e)}getTimeOfTick(e,t=this.now()){const n=this._tickOffset.get(t),s=this._state.get(t),r=Math.max(n.time,s.time),o=this.frequency.getTicksAtTime(r)+e-n.ticks;return this.frequency.getTimeOfTick(o)}forEachTickBetween(e,t,n){let s=this._state.get(e);this._state.forEachBetween(e,t,o=>{s&&s.state==="started"&&o.state!=="started"&&this.forEachTickBetween(Math.max(s.time,e),o.time-this.sampleTime,n),s=o});let r=null;if(s&&s.state==="started"){const o=Math.max(s.time,e),a=this.frequency.getTicksAtTime(o),c=this.frequency.getTicksAtTime(s.time),l=a-c;let u=Math.ceil(l)-l;u=Sn(u,1)?0:u;let h=this.frequency.getTimeOfTick(a+u);for(;h<t;){try{n(h,Math.round(this.getTicksAtTime(h)))}catch(d){r=d;break}h+=this.frequency.getDurationOfTicks(1,h)}}if(r)throw r;return this}dispose(){return super.dispose(),this._state.dispose(),this._tickOffset.dispose(),this._ticksAtTime.dispose(),this._secondsAtTime.dispose(),this.frequency.dispose(),this}}class Do extends Jt{constructor(){const e=be(Do.getDefaults(),arguments,["callback","frequency"]);super(e),this.name="Clock",this.callback=st,this._lastUpdate=0,this._state=new vc("stopped"),this._boundLoop=this._loop.bind(this),this.callback=e.callback,this._tickSource=new Mc({context:this.context,frequency:e.frequency,units:e.units}),this._lastUpdate=0,this.frequency=this._tickSource.frequency,rt(this,"frequency"),this._state.setStateAtTime("stopped",0),this.context.on("tick",this._boundLoop)}static getDefaults(){return Object.assign(Jt.getDefaults(),{callback:st,frequency:1,units:"hertz"})}get state(){return this._state.getValueAtTime(this.now())}start(e,t){Ih(this.context);const n=this.toSeconds(e);return this.log("start",n),this._state.getValueAtTime(n)!=="started"&&(this._state.setStateAtTime("started",n),this._tickSource.start(n,t),n<this._lastUpdate&&this.emit("start",n,t)),this}stop(e){const t=this.toSeconds(e);return this.log("stop",t),this._state.cancel(t),this._state.setStateAtTime("stopped",t),this._tickSource.stop(t),t<this._lastUpdate&&this.emit("stop",t),this}pause(e){const t=this.toSeconds(e);return this._state.getValueAtTime(t)==="started"&&(this._state.setStateAtTime("paused",t),this._tickSource.pause(t),t<this._lastUpdate&&this.emit("pause",t)),this}get ticks(){return Math.ceil(this.getTicksAtTime(this.now()))}set ticks(e){this._tickSource.ticks=e}get seconds(){return this._tickSource.seconds}set seconds(e){this._tickSource.seconds=e}getSecondsAtTime(e){return this._tickSource.getSecondsAtTime(e)}setTicksAtTime(e,t){return this._tickSource.setTicksAtTime(e,t),this}getTimeOfTick(e,t=this.now()){return this._tickSource.getTimeOfTick(e,t)}getTicksAtTime(e){return this._tickSource.getTicksAtTime(e)}nextTickTime(e,t){const n=this.toSeconds(t),s=this.getTicksAtTime(n);return this._tickSource.getTimeOfTick(s+e,n)}_loop(){const e=this._lastUpdate,t=this.now();this._lastUpdate=t,this.log("loop",e,t),e!==t&&(this._state.forEachBetween(e,t,n=>{switch(n.state){case"started":const s=this._tickSource.getTicksAtTime(n.time);this.emit("start",n.time,s);break;case"stopped":n.time!==0&&this.emit("stop",n.time);break;case"paused":this.emit("pause",n.time);break}}),this._tickSource.forEachTickBetween(e,t,(n,s)=>{this.callback(n,s)}))}getStateAtTime(e){const t=this.toSeconds(e);return this._state.getValueAtTime(t)}dispose(){return super.dispose(),this.context.off("tick",this._boundLoop),this._tickSource.dispose(),this._state.dispose(),this}}dr.mixin(Do);class Tc extends Ae{constructor(){const e=be(Tc.getDefaults(),arguments,["delayTime","maxDelay"]);super(e),this.name="Delay";const t=this.toSeconds(e.maxDelay);this._maxDelay=Math.max(t,this.toSeconds(e.delayTime)),this._delayNode=this.input=this.output=this.context.createDelay(t),this.delayTime=new qe({context:this.context,param:this._delayNode.delayTime,units:"time",value:e.delayTime,minValue:0,maxValue:this.maxDelay}),rt(this,"delayTime")}static getDefaults(){return Object.assign(Ae.getDefaults(),{delayTime:0,maxDelay:1})}get maxDelay(){return this._maxDelay}dispose(){return super.dispose(),this._delayNode.disconnect(),this.delayTime.dispose(),this}}class Os extends Ae{constructor(){const e=be(Os.getDefaults(),arguments,["volume"]);super(e),this.name="Volume",this.input=this.output=new Je({context:this.context,gain:e.volume,units:"decibels"}),this.volume=this.output.gain,rt(this,"volume"),this._unmutedVolume=e.volume,this.mute=e.mute}static getDefaults(){return Object.assign(Ae.getDefaults(),{mute:!1,volume:0})}get mute(){return this.volume.value===-1/0}set mute(e){!this.mute&&e?(this._unmutedVolume=this.volume.value,this.volume.value=-1/0):this.mute&&!e&&(this.volume.value=this._unmutedVolume)}dispose(){return super.dispose(),this.input.dispose(),this.volume.dispose(),this}}class Ec extends Ae{constructor(){const e=be(Ec.getDefaults(),arguments);super(e),this.name="Destination",this.input=new Os({context:this.context}),this.output=new Je({context:this.context}),this.volume=this.input.volume,er(this.input,this.output,this.context.rawContext.destination),this.mute=e.mute,this._internalChannels=[this.input,this.context.rawContext.destination,this.output]}static getDefaults(){return Object.assign(Ae.getDefaults(),{mute:!1,volume:0})}get mute(){return this.input.mute}set mute(e){this.input.mute=e}chain(...e){return this.input.disconnect(),e.unshift(this.input),e.push(this.output),er(...e),this}get maxChannelCount(){return this.context.rawContext.destination.maxChannelCount}dispose(){return super.dispose(),this.volume.dispose(),this}}bo(i=>{i.destination=new Ec({context:i})});wo(i=>{i.destination.dispose()});class dM extends Ae{constructor(){super(...arguments),this.name="Listener",this.positionX=new qe({context:this.context,param:this.context.rawContext.listener.positionX}),this.positionY=new qe({context:this.context,param:this.context.rawContext.listener.positionY}),this.positionZ=new qe({context:this.context,param:this.context.rawContext.listener.positionZ}),this.forwardX=new qe({context:this.context,param:this.context.rawContext.listener.forwardX}),this.forwardY=new qe({context:this.context,param:this.context.rawContext.listener.forwardY}),this.forwardZ=new qe({context:this.context,param:this.context.rawContext.listener.forwardZ}),this.upX=new qe({context:this.context,param:this.context.rawContext.listener.upX}),this.upY=new qe({context:this.context,param:this.context.rawContext.listener.upY}),this.upZ=new qe({context:this.context,param:this.context.rawContext.listener.upZ})}static getDefaults(){return Object.assign(Ae.getDefaults(),{positionX:0,positionY:0,positionZ:0,forwardX:0,forwardY:0,forwardZ:-1,upX:0,upY:1,upZ:0})}dispose(){return super.dispose(),this.positionX.dispose(),this.positionY.dispose(),this.positionZ.dispose(),this.forwardX.dispose(),this.forwardY.dispose(),this.forwardZ.dispose(),this.upX.dispose(),this.upY.dispose(),this.upZ.dispose(),this}}bo(i=>{i.listener=new dM({context:i})});wo(i=>{i.listener.dispose()});class bc extends ii{constructor(){super(),this.name="ToneAudioBuffers",this._buffers=new Map,this._loadingCount=0;const e=be(bc.getDefaults(),arguments,["urls","onload","baseUrl"],"urls");this.baseUrl=e.baseUrl,Object.keys(e.urls).forEach(t=>{this._loadingCount++;const n=e.urls[t];this.add(t,n,this._bufferLoaded.bind(this,e.onload),e.onerror)})}static getDefaults(){return{baseUrl:"",onerror:st,onload:st,urls:{}}}has(e){return this._buffers.has(e.toString())}get(e){return Oe(this.has(e),`ToneAudioBuffers has no buffer named: ${e}`),this._buffers.get(e.toString())}_bufferLoaded(e){this._loadingCount--,this._loadingCount===0&&e&&e()}get loaded(){return Array.from(this._buffers).every(([e,t])=>t.loaded)}add(e,t,n=st,s=st){return ei(t)?(this.baseUrl&&t.trim().substring(0,11).toLowerCase()==="data:audio/"&&(this.baseUrl=""),this._buffers.set(e.toString(),new at(this.baseUrl+t,n,s))):this._buffers.set(e.toString(),new at(t,n,s)),this}dispose(){return super.dispose(),this._buffers.forEach(e=>e.dispose()),this._buffers.clear(),this}}class us extends Zs{constructor(){super(...arguments),this.name="Ticks",this.defaultUnits="i"}_now(){return this.context.transport.ticks}_beatsToUnits(e){return this._getPPQ()*e}_secondsToUnits(e){return Math.floor(e/(60/this._getBpm())*this._getPPQ())}_ticksToUnits(e){return e}toTicks(){return this.valueOf()}toSeconds(){return this.valueOf()/this._getPPQ()*(60/this._getBpm())}}class fM extends Jt{constructor(){super(...arguments),this.name="Draw",this.expiration=.25,this.anticipation=.008,this._events=new mn,this._boundDrawLoop=this._drawLoop.bind(this),this._animationFrame=-1}schedule(e,t){return this._events.add({callback:e,time:this.toSeconds(t)}),this._events.length===1&&(this._animationFrame=requestAnimationFrame(this._boundDrawLoop)),this}cancel(e){return this._events.cancel(this.toSeconds(e)),this}_drawLoop(){const e=this.context.currentTime;for(;this._events.length&&this._events.peek().time-this.anticipation<=e;){const t=this._events.shift();t&&e-t.time<=this.expiration&&t.callback()}this._events.length>0&&(this._animationFrame=requestAnimationFrame(this._boundDrawLoop))}dispose(){return super.dispose(),this._events.dispose(),cancelAnimationFrame(this._animationFrame),this}}bo(i=>{i.draw=new fM({context:i})});wo(i=>{i.draw.dispose()});class pM extends ii{constructor(){super(...arguments),this.name="IntervalTimeline",this._root=null,this._length=0}add(e){Oe(Xe(e.time),"Events must have a time property"),Oe(Xe(e.duration),"Events must have a duration parameter"),e.time=e.time.valueOf();let t=new mM(e.time,e.time+e.duration,e);for(this._root===null?this._root=t:this._root.insert(t),this._length++;t!==null;)t.updateHeight(),t.updateMax(),this._rebalance(t),t=t.parent;return this}remove(e){if(this._root!==null){const t=[];this._root.search(e.time,t);for(const n of t)if(n.event===e){this._removeNode(n),this._length--;break}}return this}get length(){return this._length}cancel(e){return this.forEachFrom(e,t=>this.remove(t)),this}_setRoot(e){this._root=e,this._root!==null&&(this._root.parent=null)}_replaceNodeInParent(e,t){e.parent!==null?(e.isLeftChild()?e.parent.left=t:e.parent.right=t,this._rebalance(e.parent)):this._setRoot(t)}_removeNode(e){if(e.left===null&&e.right===null)this._replaceNodeInParent(e,null);else if(e.right===null)this._replaceNodeInParent(e,e.left);else if(e.left===null)this._replaceNodeInParent(e,e.right);else{const t=e.getBalance();let n,s=null;if(t>0)if(e.left.right===null)n=e.left,n.right=e.right,s=n;else{for(n=e.left.right;n.right!==null;)n=n.right;n.parent&&(n.parent.right=n.left,s=n.parent,n.left=e.left,n.right=e.right)}else if(e.right.left===null)n=e.right,n.left=e.left,s=n;else{for(n=e.right.left;n.left!==null;)n=n.left;n.parent&&(n.parent.left=n.right,s=n.parent,n.left=e.left,n.right=e.right)}e.parent!==null?e.isLeftChild()?e.parent.left=n:e.parent.right=n:this._setRoot(n),s&&this._rebalance(s)}e.dispose()}_rotateLeft(e){const t=e.parent,n=e.isLeftChild(),s=e.right;s&&(e.right=s.left,s.left=e),t!==null?n?t.left=s:t.right=s:this._setRoot(s)}_rotateRight(e){const t=e.parent,n=e.isLeftChild(),s=e.left;s&&(e.left=s.right,s.right=e),t!==null?n?t.left=s:t.right=s:this._setRoot(s)}_rebalance(e){const t=e.getBalance();t>1&&e.left?e.left.getBalance()<0?this._rotateLeft(e.left):this._rotateRight(e):t<-1&&e.right&&(e.right.getBalance()>0?this._rotateRight(e.right):this._rotateLeft(e))}get(e){if(this._root!==null){const t=[];if(this._root.search(e,t),t.length>0){let n=t[0];for(let s=1;s<t.length;s++)t[s].low>n.low&&(n=t[s]);return n.event}}return null}forEach(e){if(this._root!==null){const t=[];this._root.traverse(n=>t.push(n)),t.forEach(n=>{n.event&&e(n.event)})}return this}forEachAtTime(e,t){if(this._root!==null){const n=[];this._root.search(e,n),n.forEach(s=>{s.event&&t(s.event)})}return this}forEachFrom(e,t){if(this._root!==null){const n=[];this._root.searchAfter(e,n),n.forEach(s=>{s.event&&t(s.event)})}return this}dispose(){return super.dispose(),this._root!==null&&this._root.traverse(e=>e.dispose()),this._root=null,this}}class mM{constructor(e,t,n){this._left=null,this._right=null,this.parent=null,this.height=0,this.event=n,this.low=e,this.high=t,this.max=this.high}insert(e){e.low<=this.low?this.left===null?this.left=e:this.left.insert(e):this.right===null?this.right=e:this.right.insert(e)}search(e,t){e>this.max||(this.left!==null&&this.left.search(e,t),this.low<=e&&this.high>e&&t.push(this),!(this.low>e)&&this.right!==null&&this.right.search(e,t))}searchAfter(e,t){this.low>=e&&(t.push(this),this.left!==null&&this.left.searchAfter(e,t)),this.right!==null&&this.right.searchAfter(e,t)}traverse(e){e(this),this.left!==null&&this.left.traverse(e),this.right!==null&&this.right.traverse(e)}updateHeight(){this.left!==null&&this.right!==null?this.height=Math.max(this.left.height,this.right.height)+1:this.right!==null?this.height=this.right.height+1:this.left!==null?this.height=this.left.height+1:this.height=0}updateMax(){this.max=this.high,this.left!==null&&(this.max=Math.max(this.max,this.left.max)),this.right!==null&&(this.max=Math.max(this.max,this.right.max))}getBalance(){let e=0;return this.left!==null&&this.right!==null?e=this.left.height-this.right.height:this.left!==null?e=this.left.height+1:this.right!==null&&(e=-(this.right.height+1)),e}isLeftChild(){return this.parent!==null&&this.parent.left===this}get left(){return this._left}set left(e){this._left=e,e!==null&&(e.parent=this),this.updateHeight(),this.updateMax()}get right(){return this._right}set right(e){this._right=e,e!==null&&(e.parent=this),this.updateHeight(),this.updateMax()}dispose(){this.parent=null,this._left=null,this._right=null,this.event=null}}class _M extends ii{constructor(e){super(),this.name="TimelineValue",this._timeline=new mn({memory:10}),this._initialValue=e}set(e,t){return this._timeline.add({value:e,time:t}),this}get(e){const t=this._timeline.get(e);return t?t.value:this._initialValue}}class Ln extends Ae{constructor(){super(be(Ln.getDefaults(),arguments,["context"]))}connect(e,t=0,n=0){return Ro(this,e,t,n),this}}class Us extends Ln{constructor(){const e=be(Us.getDefaults(),arguments,["mapping","length"]);super(e),this.name="WaveShaper",this._shaper=this.context.createWaveShaper(),this.input=this._shaper,this.output=this._shaper,wn(e.mapping)||e.mapping instanceof Float32Array?this.curve=Float32Array.from(e.mapping):VS(e.mapping)&&this.setMap(e.mapping,e.length)}static getDefaults(){return Object.assign(ut.getDefaults(),{length:1024})}setMap(e,t=1024){const n=new Float32Array(t);for(let s=0,r=t;s<r;s++){const o=s/(r-1)*2-1;n[s]=e(o,s)}return this.curve=n,this}get curve(){return this._shaper.curve}set curve(e){this._shaper.curve=e}get oversample(){return this._shaper.oversample}set oversample(e){const t=["none","2x","4x"].some(n=>n.includes(e));Oe(t,"oversampling must be either 'none', '2x', or '4x'"),this._shaper.oversample=e}dispose(){return super.dispose(),this._shaper.disconnect(),this}}class wc extends Ln{constructor(){const e=be(wc.getDefaults(),arguments,["value"]);super(e),this.name="Pow",this._exponentScaler=this.input=this.output=new Us({context:this.context,mapping:this._expFunc(e.value),length:8192}),this._exponent=e.value}static getDefaults(){return Object.assign(Ln.getDefaults(),{value:1})}_expFunc(e){return t=>Math.pow(Math.abs(t),e)}get value(){return this._exponent}set value(e){this._exponent=e,this._exponentScaler.setMap(this._expFunc(this._exponent))}dispose(){return super.dispose(),this._exponentScaler.dispose(),this}}class _i{constructor(e,t){this.id=_i._eventId++,this._remainderTime=0;const n=Object.assign(_i.getDefaults(),t);this.transport=e,this.callback=n.callback,this._once=n.once,this.time=Math.floor(n.time),this._remainderTime=n.time-this.time}static getDefaults(){return{callback:st,once:!1,time:0}}get floatTime(){return this.time+this._remainderTime}invoke(e){if(this.callback){const t=this.transport.bpm.getDurationOfTicks(1,e);this.callback(e+this._remainderTime*t),this._once&&this.transport.clear(this.id)}}dispose(){return this.callback=void 0,this}}_i._eventId=0;class Ac extends _i{constructor(e,t){super(e,t),this._currentId=-1,this._nextId=-1,this._nextTick=this.time,this._boundRestart=this._restart.bind(this);const n=Object.assign(Ac.getDefaults(),t);this.duration=n.duration,this._interval=n.interval,this._nextTick=n.time,this.transport.on("start",this._boundRestart),this.transport.on("loopStart",this._boundRestart),this.transport.on("ticks",this._boundRestart),this.context=this.transport.context,this._restart()}static getDefaults(){return Object.assign({},_i.getDefaults(),{duration:1/0,interval:1,once:!1})}invoke(e){this._createEvents(e),super.invoke(e)}_createEvent(){return ao(this._nextTick,this.floatTime+this.duration)?this.transport.scheduleOnce(this.invoke.bind(this),new us(this.context,this._nextTick).toSeconds()):-1}_createEvents(e){ao(this._nextTick+this._interval,this.floatTime+this.duration)&&(this._nextTick+=this._interval,this._currentId=this._nextId,this._nextId=this.transport.scheduleOnce(this.invoke.bind(this),new us(this.context,this._nextTick).toSeconds()))}_restart(e){this.transport.clear(this._currentId),this.transport.clear(this._nextId),this._nextTick=this.floatTime;const t=this.transport.getTicksAtTime(e);Ms(t,this.time)&&(this._nextTick=this.floatTime+Math.ceil((t-this.floatTime)/this._interval)*this._interval),this._currentId=this._createEvent(),this._nextTick+=this._interval,this._nextId=this._createEvent()}dispose(){return super.dispose(),this.transport.clear(this._currentId),this.transport.clear(this._nextId),this.transport.off("start",this._boundRestart),this.transport.off("loopStart",this._boundRestart),this.transport.off("ticks",this._boundRestart),this}}class Po extends Jt{constructor(){const e=be(Po.getDefaults(),arguments);super(e),this.name="Transport",this._loop=new _M(!1),this._loopStart=0,this._loopEnd=0,this._scheduledEvents={},this._timeline=new mn,this._repeatedEvents=new pM,this._syncedSignals=[],this._swingAmount=0,this._ppq=e.ppq,this._clock=new Do({callback:this._processTick.bind(this),context:this.context,frequency:0,units:"bpm"}),this._bindClockEvents(),this.bpm=this._clock.frequency,this._clock.frequency.multiplier=e.ppq,this.bpm.setValueAtTime(e.bpm,0),rt(this,"bpm"),this._timeSignature=e.timeSignature,this._swingTicks=e.ppq/2}static getDefaults(){return Object.assign(Jt.getDefaults(),{bpm:120,loopEnd:"4m",loopStart:0,ppq:192,swing:0,swingSubdivision:"8n",timeSignature:4})}_processTick(e,t){if(this._loop.get(e)&&t>=this._loopEnd&&(this.emit("loopEnd",e),this._clock.setTicksAtTime(this._loopStart,e),t=this._loopStart,this.emit("loopStart",e,this._clock.getSecondsAtTime(e)),this.emit("loop",e)),this._swingAmount>0&&t%this._ppq!==0&&t%(this._swingTicks*2)!==0){const n=t%(this._swingTicks*2)/(this._swingTicks*2),s=Math.sin(n*Math.PI)*this._swingAmount;e+=new us(this.context,this._swingTicks*2/3).toSeconds()*s}lu(!0),this._timeline.forEachAtTime(t,n=>n.invoke(e)),lu(!1)}schedule(e,t){const n=new _i(this,{callback:e,time:new Zs(this.context,t).toTicks()});return this._addEvent(n,this._timeline)}scheduleRepeat(e,t,n,s=1/0){const r=new Ac(this,{callback:e,duration:new En(this.context,s).toTicks(),interval:new En(this.context,t).toTicks(),time:new Zs(this.context,n).toTicks()});return this._addEvent(r,this._repeatedEvents)}scheduleOnce(e,t){const n=new _i(this,{callback:e,once:!0,time:new Zs(this.context,t).toTicks()});return this._addEvent(n,this._timeline)}clear(e){if(this._scheduledEvents.hasOwnProperty(e)){const t=this._scheduledEvents[e.toString()];t.timeline.remove(t.event),t.event.dispose(),delete this._scheduledEvents[e.toString()]}return this}_addEvent(e,t){return this._scheduledEvents[e.id.toString()]={event:e,timeline:t},t.add(e),e.id}cancel(e=0){const t=this.toTicks(e);return this._timeline.forEachFrom(t,n=>this.clear(n.id)),this._repeatedEvents.forEachFrom(t,n=>this.clear(n.id)),this}_bindClockEvents(){this._clock.on("start",(e,t)=>{t=new us(this.context,t).toSeconds(),this.emit("start",e,t)}),this._clock.on("stop",e=>{this.emit("stop",e)}),this._clock.on("pause",e=>{this.emit("pause",e)})}get state(){return this._clock.getStateAtTime(this.now())}start(e,t){this.context.resume();let n;return Xe(t)&&(n=this.toTicks(t)),this._clock.start(e,n),this}stop(e){return this._clock.stop(e),this}pause(e){return this._clock.pause(e),this}toggle(e){return e=this.toSeconds(e),this._clock.getStateAtTime(e)!=="started"?this.start(e):this.stop(e),this}get timeSignature(){return this._timeSignature}set timeSignature(e){wn(e)&&(e=e[0]/e[1]*4),this._timeSignature=e}get loopStart(){return new En(this.context,this._loopStart,"i").toSeconds()}set loopStart(e){this._loopStart=this.toTicks(e)}get loopEnd(){return new En(this.context,this._loopEnd,"i").toSeconds()}set loopEnd(e){this._loopEnd=this.toTicks(e)}get loop(){return this._loop.get(this.now())}set loop(e){this._loop.set(e,this.now())}setLoopPoints(e,t){return this.loopStart=e,this.loopEnd=t,this}get swing(){return this._swingAmount}set swing(e){this._swingAmount=e}get swingSubdivision(){return new us(this.context,this._swingTicks).toNotation()}set swingSubdivision(e){this._swingTicks=this.toTicks(e)}get position(){const e=this.now(),t=this._clock.getTicksAtTime(e);return new us(this.context,t).toBarsBeatsSixteenths()}set position(e){const t=this.toTicks(e);this.ticks=t}get seconds(){return this._clock.seconds}set seconds(e){const t=this.now(),n=this._clock.frequency.timeToTicks(e,t);this.ticks=n}get progress(){if(this.loop){const e=this.now();return(this._clock.getTicksAtTime(e)-this._loopStart)/(this._loopEnd-this._loopStart)}else return 0}get ticks(){return this._clock.ticks}set ticks(e){if(this._clock.ticks!==e){const t=this.now();if(this.state==="started"){const n=this._clock.getTicksAtTime(t),s=this._clock.frequency.getDurationOfTicks(Math.ceil(n)-n,t),r=t+s;this.emit("stop",r),this._clock.setTicksAtTime(e,r),this.emit("start",r,this._clock.getSecondsAtTime(r))}else this.emit("ticks",t),this._clock.setTicksAtTime(e,t)}}getTicksAtTime(e){return this._clock.getTicksAtTime(e)}getSecondsAtTime(e){return this._clock.getSecondsAtTime(e)}get PPQ(){return this._clock.frequency.multiplier}set PPQ(e){this._clock.frequency.multiplier=e}nextSubdivision(e){if(e=this.toTicks(e),this.state!=="started")return 0;{const t=this.now(),n=this.getTicksAtTime(t),s=e-n%e;return this._clock.nextTickTime(s,t)}}syncSignal(e,t){const n=this.now();let s=this.bpm,r=1/(60/s.getValueAtTime(n)/this.PPQ),o=[];if(e.units==="time"){const c=.015625/r,l=new Je(c),u=new wc(-1),h=new Je(c);s.chain(l,u,h),s=h,r=1/r,o=[l,u,h]}t||(e.getValueAtTime(n)!==0?t=e.getValueAtTime(n)/r:t=0);const a=new Je(t);return s.connect(a),a.connect(e._param),o.push(a),this._syncedSignals.push({initial:e.value,nodes:o,signal:e}),e.value=0,this}unsyncSignal(e){for(let t=this._syncedSignals.length-1;t>=0;t--){const n=this._syncedSignals[t];n.signal===e&&(n.nodes.forEach(s=>s.dispose()),n.signal.value=n.initial,this._syncedSignals.splice(t,1))}return this}dispose(){return super.dispose(),this._clock.dispose(),_c(this,"bpm"),this._timeline.dispose(),this._repeatedEvents.dispose(),this}}dr.mixin(Po);bo(i=>{i.transport=new Po({context:i})});wo(i=>{i.transport.dispose()});class Xt extends Ae{constructor(e){super(e),this.input=void 0,this._state=new vc("stopped"),this._synced=!1,this._scheduled=[],this._syncedStart=st,this._syncedStop=st,this._state.memory=100,this._state.increasing=!0,this._volume=this.output=new Os({context:this.context,mute:e.mute,volume:e.volume}),this.volume=this._volume.volume,rt(this,"volume"),this.onstop=e.onstop}static getDefaults(){return Object.assign(Ae.getDefaults(),{mute:!1,onstop:st,volume:0})}get state(){return this._synced?this.context.transport.state==="started"?this._state.getValueAtTime(this.context.transport.seconds):"stopped":this._state.getValueAtTime(this.now())}get mute(){return this._volume.mute}set mute(e){this._volume.mute=e}_clampToCurrentTime(e){return this._synced?e:Math.max(e,this.context.currentTime)}start(e,t,n){let s=pn(e)&&this._synced?this.context.transport.seconds:this.toSeconds(e);if(s=this._clampToCurrentTime(s),!this._synced&&this._state.getValueAtTime(s)==="started")Oe(Ms(s,this._state.get(s).time),"Start time must be strictly greater than previous start time"),this._state.cancel(s),this._state.setStateAtTime("started",s),this.log("restart",s),this.restart(s,t,n);else if(this.log("start",s),this._state.setStateAtTime("started",s),this._synced){const r=this._state.get(s);r&&(r.offset=this.toSeconds(ms(t,0)),r.duration=n?this.toSeconds(n):void 0);const o=this.context.transport.schedule(a=>{this._start(a,t,n)},s);this._scheduled.push(o),this.context.transport.state==="started"&&this.context.transport.getSecondsAtTime(this.immediate())>s&&this._syncedStart(this.now(),this.context.transport.seconds)}else Ih(this.context),this._start(s,t,n);return this}stop(e){let t=pn(e)&&this._synced?this.context.transport.seconds:this.toSeconds(e);if(t=this._clampToCurrentTime(t),this._state.getValueAtTime(t)==="started"||Xe(this._state.getNextState("started",t))){if(this.log("stop",t),!this._synced)this._stop(t);else{const n=this.context.transport.schedule(this._stop.bind(this),t);this._scheduled.push(n)}this._state.cancel(t),this._state.setStateAtTime("stopped",t)}return this}restart(e,t,n){return e=this.toSeconds(e),this._state.getValueAtTime(e)==="started"&&(this._state.cancel(e),this._restart(e,t,n)),this}sync(){return this._synced||(this._synced=!0,this._syncedStart=(e,t)=>{if(Ms(t,0)){const n=this._state.get(t);if(n&&n.state==="started"&&n.time!==t){const s=t-this.toSeconds(n.time);let r;n.duration&&(r=this.toSeconds(n.duration)-s),this._start(e,this.toSeconds(n.offset)+s,r)}}},this._syncedStop=e=>{const t=this.context.transport.getSecondsAtTime(Math.max(e-this.sampleTime,0));this._state.getValueAtTime(t)==="started"&&this._stop(e)},this.context.transport.on("start",this._syncedStart),this.context.transport.on("loopStart",this._syncedStart),this.context.transport.on("stop",this._syncedStop),this.context.transport.on("pause",this._syncedStop),this.context.transport.on("loopEnd",this._syncedStop)),this}unsync(){return this._synced&&(this.context.transport.off("stop",this._syncedStop),this.context.transport.off("pause",this._syncedStop),this.context.transport.off("loopEnd",this._syncedStop),this.context.transport.off("start",this._syncedStart),this.context.transport.off("loopStart",this._syncedStart)),this._synced=!1,this._scheduled.forEach(e=>this.context.transport.clear(e)),this._scheduled=[],this._state.cancel(0),this._stop(0),this}dispose(){return super.dispose(),this.onstop=st,this.unsync(),this._volume.dispose(),this._state.dispose(),this}}class pr extends Ts{constructor(){const e=be(pr.getDefaults(),arguments,["url","onload"]);super(e),this.name="ToneBufferSource",this._source=this.context.createBufferSource(),this._internalChannels=[this._source],this._sourceStarted=!1,this._sourceStopped=!1,ti(this._source,this._gainNode),this._source.onended=()=>this._stopSource(),this.playbackRate=new qe({context:this.context,param:this._source.playbackRate,units:"positive",value:e.playbackRate}),this.loop=e.loop,this.loopStart=e.loopStart,this.loopEnd=e.loopEnd,this._buffer=new at(e.url,e.onload,e.onerror),this._internalChannels.push(this._source)}static getDefaults(){return Object.assign(Ts.getDefaults(),{url:new at,loop:!1,loopEnd:0,loopStart:0,onload:st,onerror:st,playbackRate:1})}get fadeIn(){return this._fadeIn}set fadeIn(e){this._fadeIn=e}get fadeOut(){return this._fadeOut}set fadeOut(e){this._fadeOut=e}get curve(){return this._curve}set curve(e){this._curve=e}start(e,t,n,s=1){Oe(this.buffer.loaded,"buffer is either not set or not loaded");const r=this.toSeconds(e);this._startGain(r,s),this.loop?t=ms(t,this.loopStart):t=ms(t,0);let o=Math.max(this.toSeconds(t),0);if(this.loop){const a=this.toSeconds(this.loopEnd)||this.buffer.duration,c=this.toSeconds(this.loopStart),l=a-c;La(o,a)&&(o=(o-c)%l+c),Sn(o,this.buffer.duration)&&(o=0)}if(this._source.buffer=this.buffer.get(),this._source.loopEnd=this.toSeconds(this.loopEnd)||this.buffer.duration,ao(o,this.buffer.duration)&&(this._sourceStarted=!0,this._source.start(r,o)),Xe(n)){let a=this.toSeconds(n);a=Math.max(a,0),this.stop(r+a)}return this}_stopSource(e){!this._sourceStopped&&this._sourceStarted&&(this._sourceStopped=!0,this._source.stop(this.toSeconds(e)),this._onended())}get loopStart(){return this._source.loopStart}set loopStart(e){this._source.loopStart=this.toSeconds(e)}get loopEnd(){return this._source.loopEnd}set loopEnd(e){this._source.loopEnd=this.toSeconds(e)}get buffer(){return this._buffer}set buffer(e){this._buffer.set(e)}get loop(){return this._source.loop}set loop(e){this._source.loop=e,this._sourceStarted&&this.cancelStop()}dispose(){return super.dispose(),this._source.onended=null,this._source.disconnect(),this._buffer.dispose(),this.playbackRate.dispose(),this}}class co extends Xt{constructor(){const e=be(co.getDefaults(),arguments,["type"]);super(e),this.name="Noise",this._source=null,this._playbackRate=e.playbackRate,this.type=e.type,this._fadeIn=e.fadeIn,this._fadeOut=e.fadeOut}static getDefaults(){return Object.assign(Xt.getDefaults(),{fadeIn:0,fadeOut:0,playbackRate:1,type:"white"})}get type(){return this._type}set type(e){if(Oe(e in hu,"Noise: invalid type: "+e),this._type!==e&&(this._type=e,this.state==="started")){const t=this.now();this._stop(t),this._start(t)}}get playbackRate(){return this._playbackRate}set playbackRate(e){this._playbackRate=e,this._source&&(this._source.playbackRate.value=e)}_start(e){const t=hu[this._type];this._source=new pr({url:t,context:this.context,fadeIn:this._fadeIn,fadeOut:this._fadeOut,loop:!0,onended:()=>this.onstop(this),playbackRate:this._playbackRate}).connect(this.output),this._source.start(this.toSeconds(e),Math.random()*(t.duration-.001))}_stop(e){this._source&&(this._source.stop(this.toSeconds(e)),this._source=null)}get fadeIn(){return this._fadeIn}set fadeIn(e){this._fadeIn=e,this._source&&(this._source.fadeIn=this._fadeIn)}get fadeOut(){return this._fadeOut}set fadeOut(e){this._fadeOut=e,this._source&&(this._source.fadeOut=this._fadeOut)}_restart(e){this._stop(e),this._start(e)}dispose(){return super.dispose(),this._source&&this._source.disconnect(),this}}const rs=44100*5,Ta=2,Yn={brown:null,pink:null,white:null},hu={get brown(){if(!Yn.brown){const i=[];for(let e=0;e<Ta;e++){const t=new Float32Array(rs);i[e]=t;let n=0;for(let s=0;s<rs;s++){const r=Math.random()*2-1;t[s]=(n+.02*r)/1.02,n=t[s],t[s]*=3.5}}Yn.brown=new at().fromArray(i)}return Yn.brown},get pink(){if(!Yn.pink){const i=[];for(let e=0;e<Ta;e++){const t=new Float32Array(rs);i[e]=t;let n,s,r,o,a,c,l;n=s=r=o=a=c=l=0;for(let u=0;u<rs;u++){const h=Math.random()*2-1;n=.99886*n+h*.0555179,s=.99332*s+h*.0750759,r=.969*r+h*.153852,o=.8665*o+h*.3104856,a=.55*a+h*.5329522,c=-.7616*c-h*.016898,t[u]=n+s+r+o+a+c+l+h*.5362,t[u]*=.11,l=h*.115926}}Yn.pink=new at().fromArray(i)}return Yn.pink},get white(){if(!Yn.white){const i=[];for(let e=0;e<Ta;e++){const t=new Float32Array(rs);i[e]=t;for(let n=0;n<rs;n++)t[n]=Math.random()*2-1}Yn.white=new at().fromArray(i)}return Yn.white}};function Wi(i,e){return Mt(this,void 0,void 0,function*(){const t=e/i.context.sampleRate,n=new Ao(1,t,i.context.sampleRate);return new i.constructor(Object.assign(i.get(),{frequency:2/t,detune:0,context:n})).toDestination().start(0),(yield n.render()).getChannelData(0)})}class Cc extends Ts{constructor(){const e=be(Cc.getDefaults(),arguments,["frequency","type"]);super(e),this.name="ToneOscillatorNode",this._oscillator=this.context.createOscillator(),this._internalChannels=[this._oscillator],ti(this._oscillator,this._gainNode),this.type=e.type,this.frequency=new qe({context:this.context,param:this._oscillator.frequency,units:"frequency",value:e.frequency}),this.detune=new qe({context:this.context,param:this._oscillator.detune,units:"cents",value:e.detune}),rt(this,["frequency","detune"])}static getDefaults(){return Object.assign(Ts.getDefaults(),{detune:0,frequency:440,type:"sine"})}start(e){const t=this.toSeconds(e);return this.log("start",t),this._startGain(t),this._oscillator.start(t),this}_stopSource(e){this._oscillator.stop(e)}setPeriodicWave(e){return this._oscillator.setPeriodicWave(e),this}get type(){return this._oscillator.type}set type(e){this._oscillator.type=e}dispose(){return super.dispose(),this.state==="started"&&this.stop(),this._oscillator.disconnect(),this.frequency.dispose(),this.detune.dispose(),this}}class gt extends Xt{constructor(){const e=be(gt.getDefaults(),arguments,["frequency","type"]);super(e),this.name="Oscillator",this._oscillator=null,this.frequency=new ut({context:this.context,units:"frequency",value:e.frequency}),rt(this,"frequency"),this.detune=new ut({context:this.context,units:"cents",value:e.detune}),rt(this,"detune"),this._partials=e.partials,this._partialCount=e.partialCount,this._type=e.type,e.partialCount&&e.type!=="custom"&&(this._type=this.baseType+e.partialCount.toString()),this.phase=e.phase}static getDefaults(){return Object.assign(Xt.getDefaults(),{detune:0,frequency:440,partialCount:0,partials:[],phase:0,type:"sine"})}_start(e){const t=this.toSeconds(e),n=new Cc({context:this.context,onended:()=>this.onstop(this)});this._oscillator=n,this._wave?this._oscillator.setPeriodicWave(this._wave):this._oscillator.type=this._type,this._oscillator.connect(this.output),this.frequency.connect(this._oscillator.frequency),this.detune.connect(this._oscillator.detune),this._oscillator.start(t)}_stop(e){const t=this.toSeconds(e);this._oscillator&&this._oscillator.stop(t)}_restart(e){const t=this.toSeconds(e);return this.log("restart",t),this._oscillator&&this._oscillator.cancelStop(),this._state.cancel(t),this}syncFrequency(){return this.context.transport.syncSignal(this.frequency),this}unsyncFrequency(){return this.context.transport.unsyncSignal(this.frequency),this}_getCachedPeriodicWave(){if(this._type==="custom")return gt._periodicWaveCache.find(t=>t.phase===this._phase&&KS(t.partials,this._partials));{const e=gt._periodicWaveCache.find(t=>t.type===this._type&&t.phase===this._phase);return this._partialCount=e?e.partialCount:this._partialCount,e}}get type(){return this._type}set type(e){this._type=e;const t=["sine","square","sawtooth","triangle"].indexOf(e)!==-1;if(this._phase===0&&t)this._wave=void 0,this._partialCount=0,this._oscillator!==null&&(this._oscillator.type=e);else{const n=this._getCachedPeriodicWave();if(Xe(n)){const{partials:s,wave:r}=n;this._wave=r,this._partials=s,this._oscillator!==null&&this._oscillator.setPeriodicWave(this._wave)}else{const[s,r]=this._getRealImaginary(e,this._phase),o=this.context.createPeriodicWave(s,r);this._wave=o,this._oscillator!==null&&this._oscillator.setPeriodicWave(this._wave),gt._periodicWaveCache.push({imag:r,partialCount:this._partialCount,partials:this._partials,phase:this._phase,real:s,type:this._type,wave:this._wave}),gt._periodicWaveCache.length>100&&gt._periodicWaveCache.shift()}}}get baseType(){return this._type.replace(this.partialCount.toString(),"")}set baseType(e){this.partialCount&&this._type!=="custom"&&e!=="custom"?this.type=e+this.partialCount:this.type=e}get partialCount(){return this._partialCount}set partialCount(e){Fn(e,0);let t=this._type;const n=/^(sine|triangle|square|sawtooth)(\d+)$/.exec(this._type);if(n&&(t=n[1]),this._type!=="custom")e===0?this.type=t:this.type=t+e.toString();else{const s=new Float32Array(e);this._partials.forEach((r,o)=>s[o]=r),this._partials=Array.from(s),this.type=this._type}}_getRealImaginary(e,t){let s=2048;const r=new Float32Array(s),o=new Float32Array(s);let a=1;if(e==="custom"){if(a=this._partials.length+1,this._partialCount=this._partials.length,s=a,this._partials.length===0)return[r,o]}else{const c=/^(sine|triangle|square|sawtooth)(\d+)$/.exec(e);c?(a=parseInt(c[2],10)+1,this._partialCount=parseInt(c[2],10),e=c[1],a=Math.max(a,2),s=a):this._partialCount=0,this._partials=[]}for(let c=1;c<s;++c){const l=2/(c*Math.PI);let u;switch(e){case"sine":u=c<=a?1:0,this._partials[c-1]=u;break;case"square":u=c&1?2*l:0,this._partials[c-1]=u;break;case"sawtooth":u=l*(c&1?1:-1),this._partials[c-1]=u;break;case"triangle":c&1?u=2*(l*l)*(c-1>>1&1?-1:1):u=0,this._partials[c-1]=u;break;case"custom":u=this._partials[c-1];break;default:throw new TypeError("Oscillator: invalid type: "+e)}u!==0?(r[c]=-u*Math.sin(t*c),o[c]=u*Math.cos(t*c)):(r[c]=0,o[c]=0)}return[r,o]}_inverseFFT(e,t,n){let s=0;const r=e.length;for(let o=0;o<r;o++)s+=e[o]*Math.cos(o*n)+t[o]*Math.sin(o*n);return s}getInitialValue(){const[e,t]=this._getRealImaginary(this._type,0);let n=0;const s=Math.PI*2,r=32;for(let o=0;o<r;o++)n=Math.max(this._inverseFFT(e,t,o/r*s),n);return JS(-this._inverseFFT(e,t,this._phase)/n,-1,1)}get partials(){return this._partials.slice(0,this.partialCount)}set partials(e){this._partials=e,this._partialCount=this._partials.length,e.length&&(this.type="custom")}get phase(){return this._phase*(180/Math.PI)}set phase(e){this._phase=e*Math.PI/180,this.type=this._type}asArray(){return Mt(this,arguments,void 0,function*(e=1024){return Wi(this,e)})}dispose(){return super.dispose(),this._oscillator!==null&&this._oscillator.dispose(),this._wave=void 0,this.frequency.dispose(),this.detune.dispose(),this}}gt._periodicWaveCache=[];class Gh extends Ln{constructor(){super(...arguments),this.name="AudioToGain",this._norm=new Us({context:this.context,mapping:e=>(e+1)/2}),this.input=this._norm,this.output=this._norm}dispose(){return super.dispose(),this._norm.dispose(),this}}class zi extends ut{constructor(){const e=be(zi.getDefaults(),arguments,["value"]);super(e),this.name="Multiply",this.override=!1,this._mult=this.input=this.output=new Je({context:this.context,minValue:e.minValue,maxValue:e.maxValue}),this.factor=this._param=this._mult.gain,this.factor.setValueAtTime(e.value,0)}static getDefaults(){return Object.assign(ut.getDefaults(),{value:0})}dispose(){return super.dispose(),this._mult.dispose(),this}}class Io extends Xt{constructor(){const e=be(Io.getDefaults(),arguments,["frequency","type","modulationType"]);super(e),this.name="AMOscillator",this._modulationScale=new Gh({context:this.context}),this._modulationNode=new Je({context:this.context}),this._carrier=new gt({context:this.context,detune:e.detune,frequency:e.frequency,onstop:()=>this.onstop(this),phase:e.phase,type:e.type}),this.frequency=this._carrier.frequency,this.detune=this._carrier.detune,this._modulator=new gt({context:this.context,phase:e.phase,type:e.modulationType}),this.harmonicity=new zi({context:this.context,units:"positive",value:e.harmonicity}),this.frequency.chain(this.harmonicity,this._modulator.frequency),this._modulator.chain(this._modulationScale,this._modulationNode.gain),this._carrier.chain(this._modulationNode,this.output),rt(this,["frequency","detune","harmonicity"])}static getDefaults(){return Object.assign(gt.getDefaults(),{harmonicity:1,modulationType:"square"})}_start(e){this._modulator.start(e),this._carrier.start(e)}_stop(e){this._modulator.stop(e),this._carrier.stop(e)}_restart(e){this._modulator.restart(e),this._carrier.restart(e)}get type(){return this._carrier.type}set type(e){this._carrier.type=e}get baseType(){return this._carrier.baseType}set baseType(e){this._carrier.baseType=e}get partialCount(){return this._carrier.partialCount}set partialCount(e){this._carrier.partialCount=e}get modulationType(){return this._modulator.type}set modulationType(e){this._modulator.type=e}get phase(){return this._carrier.phase}set phase(e){this._carrier.phase=e,this._modulator.phase=e}get partials(){return this._carrier.partials}set partials(e){this._carrier.partials=e}asArray(){return Mt(this,arguments,void 0,function*(e=1024){return Wi(this,e)})}dispose(){return super.dispose(),this.frequency.dispose(),this.detune.dispose(),this.harmonicity.dispose(),this._carrier.dispose(),this._modulator.dispose(),this._modulationNode.dispose(),this._modulationScale.dispose(),this}}class No extends Xt{constructor(){const e=be(No.getDefaults(),arguments,["frequency","type","modulationType"]);super(e),this.name="FMOscillator",this._modulationNode=new Je({context:this.context,gain:0}),this._carrier=new gt({context:this.context,detune:e.detune,frequency:0,onstop:()=>this.onstop(this),phase:e.phase,type:e.type}),this.detune=this._carrier.detune,this.frequency=new ut({context:this.context,units:"frequency",value:e.frequency}),this._modulator=new gt({context:this.context,phase:e.phase,type:e.modulationType}),this.harmonicity=new zi({context:this.context,units:"positive",value:e.harmonicity}),this.modulationIndex=new zi({context:this.context,units:"positive",value:e.modulationIndex}),this.frequency.connect(this._carrier.frequency),this.frequency.chain(this.harmonicity,this._modulator.frequency),this.frequency.chain(this.modulationIndex,this._modulationNode),this._modulator.connect(this._modulationNode.gain),this._modulationNode.connect(this._carrier.frequency),this._carrier.connect(this.output),this.detune.connect(this._modulator.detune),rt(this,["modulationIndex","frequency","detune","harmonicity"])}static getDefaults(){return Object.assign(gt.getDefaults(),{harmonicity:1,modulationIndex:2,modulationType:"square"})}_start(e){this._modulator.start(e),this._carrier.start(e)}_stop(e){this._modulator.stop(e),this._carrier.stop(e)}_restart(e){return this._modulator.restart(e),this._carrier.restart(e),this}get type(){return this._carrier.type}set type(e){this._carrier.type=e}get baseType(){return this._carrier.baseType}set baseType(e){this._carrier.baseType=e}get partialCount(){return this._carrier.partialCount}set partialCount(e){this._carrier.partialCount=e}get modulationType(){return this._modulator.type}set modulationType(e){this._modulator.type=e}get phase(){return this._carrier.phase}set phase(e){this._carrier.phase=e,this._modulator.phase=e}get partials(){return this._carrier.partials}set partials(e){this._carrier.partials=e}asArray(){return Mt(this,arguments,void 0,function*(e=1024){return Wi(this,e)})}dispose(){return super.dispose(),this.frequency.dispose(),this.harmonicity.dispose(),this._carrier.dispose(),this._modulator.dispose(),this._modulationNode.dispose(),this.modulationIndex.dispose(),this}}class mr extends Xt{constructor(){const e=be(mr.getDefaults(),arguments,["frequency","width"]);super(e),this.name="PulseOscillator",this._widthGate=new Je({context:this.context,gain:0}),this._thresh=new Us({context:this.context,mapping:t=>t<=0?-1:1}),this.width=new ut({context:this.context,units:"audioRange",value:e.width}),this._triangle=new gt({context:this.context,detune:e.detune,frequency:e.frequency,onstop:()=>this.onstop(this),phase:e.phase,type:"triangle"}),this.frequency=this._triangle.frequency,this.detune=this._triangle.detune,this._triangle.chain(this._thresh,this.output),this.width.chain(this._widthGate,this._thresh),rt(this,["width","frequency","detune"])}static getDefaults(){return Object.assign(Xt.getDefaults(),{detune:0,frequency:440,phase:0,type:"pulse",width:.2})}_start(e){e=this.toSeconds(e),this._triangle.start(e),this._widthGate.gain.setValueAtTime(1,e)}_stop(e){e=this.toSeconds(e),this._triangle.stop(e),this._widthGate.gain.cancelScheduledValues(e),this._widthGate.gain.setValueAtTime(0,e)}_restart(e){this._triangle.restart(e),this._widthGate.gain.cancelScheduledValues(e),this._widthGate.gain.setValueAtTime(1,e)}get phase(){return this._triangle.phase}set phase(e){this._triangle.phase=e}get type(){return"pulse"}get baseType(){return"pulse"}get partials(){return[]}get partialCount(){return 0}set carrierType(e){this._triangle.type=e}asArray(){return Mt(this,arguments,void 0,function*(e=1024){return Wi(this,e)})}dispose(){return super.dispose(),this._triangle.dispose(),this.width.dispose(),this._widthGate.dispose(),this._thresh.dispose(),this}}class Fo extends Xt{constructor(){const e=be(Fo.getDefaults(),arguments,["frequency","type","spread"]);super(e),this.name="FatOscillator",this._oscillators=[],this.frequency=new ut({context:this.context,units:"frequency",value:e.frequency}),this.detune=new ut({context:this.context,units:"cents",value:e.detune}),this._spread=e.spread,this._type=e.type,this._phase=e.phase,this._partials=e.partials,this._partialCount=e.partialCount,this.count=e.count,rt(this,["frequency","detune"])}static getDefaults(){return Object.assign(gt.getDefaults(),{count:3,spread:20,type:"sawtooth"})}_start(e){e=this.toSeconds(e),this._forEach(t=>t.start(e))}_stop(e){e=this.toSeconds(e),this._forEach(t=>t.stop(e))}_restart(e){this._forEach(t=>t.restart(e))}_forEach(e){for(let t=0;t<this._oscillators.length;t++)e(this._oscillators[t],t)}get type(){return this._type}set type(e){this._type=e,this._forEach(t=>t.type=e)}get spread(){return this._spread}set spread(e){if(this._spread=e,this._oscillators.length>1){const t=-e/2,n=e/(this._oscillators.length-1);this._forEach((s,r)=>s.detune.value=t+n*r)}}get count(){return this._oscillators.length}set count(e){if(Fn(e,1),this._oscillators.length!==e){this._forEach(t=>t.dispose()),this._oscillators=[];for(let t=0;t<e;t++){const n=new gt({context:this.context,volume:-6-e*1.1,type:this._type,phase:this._phase+t/e*360,partialCount:this._partialCount,onstop:t===0?()=>this.onstop(this):st});this.type==="custom"&&(n.partials=this._partials),this.frequency.connect(n.frequency),this.detune.connect(n.detune),n.detune.overridden=!1,n.connect(this.output),this._oscillators[t]=n}this.spread=this._spread,this.state==="started"&&this._forEach(t=>t.start())}}get phase(){return this._phase}set phase(e){this._phase=e,this._forEach((t,n)=>t.phase=this._phase+n/this.count*360)}get baseType(){return this._oscillators[0].baseType}set baseType(e){this._forEach(t=>t.baseType=e),this._type=this._oscillators[0].type}get partials(){return this._oscillators[0].partials}set partials(e){this._partials=e,this._partialCount=this._partials.length,e.length&&(this._type="custom",this._forEach(t=>t.partials=e))}get partialCount(){return this._oscillators[0].partialCount}set partialCount(e){this._partialCount=e,this._forEach(t=>t.partialCount=e),this._type=this._oscillators[0].type}asArray(){return Mt(this,arguments,void 0,function*(e=1024){return Wi(this,e)})}dispose(){return super.dispose(),this.frequency.dispose(),this.detune.dispose(),this._forEach(e=>e.dispose()),this}}class Lo extends Xt{constructor(){const e=be(Lo.getDefaults(),arguments,["frequency","modulationFrequency"]);super(e),this.name="PWMOscillator",this.sourceType="pwm",this._scale=new zi({context:this.context,value:2}),this._pulse=new mr({context:this.context,frequency:e.modulationFrequency}),this._pulse.carrierType="sine",this.modulationFrequency=this._pulse.frequency,this._modulator=new gt({context:this.context,detune:e.detune,frequency:e.frequency,onstop:()=>this.onstop(this),phase:e.phase}),this.frequency=this._modulator.frequency,this.detune=this._modulator.detune,this._modulator.chain(this._scale,this._pulse.width),this._pulse.connect(this.output),rt(this,["modulationFrequency","frequency","detune"])}static getDefaults(){return Object.assign(Xt.getDefaults(),{detune:0,frequency:440,modulationFrequency:.4,phase:0,type:"pwm"})}_start(e){e=this.toSeconds(e),this._modulator.start(e),this._pulse.start(e)}_stop(e){e=this.toSeconds(e),this._modulator.stop(e),this._pulse.stop(e)}_restart(e){this._modulator.restart(e),this._pulse.restart(e)}get type(){return"pwm"}get baseType(){return"pwm"}get partials(){return[]}get partialCount(){return 0}get phase(){return this._modulator.phase}set phase(e){this._modulator.phase=e}asArray(){return Mt(this,arguments,void 0,function*(e=1024){return Wi(this,e)})}dispose(){return super.dispose(),this._pulse.dispose(),this._scale.dispose(),this._modulator.dispose(),this}}const du={am:Io,fat:Fo,fm:No,oscillator:gt,pulse:mr,pwm:Lo};class lo extends Xt{constructor(){const e=be(lo.getDefaults(),arguments,["frequency","type"]);super(e),this.name="OmniOscillator",this.frequency=new ut({context:this.context,units:"frequency",value:e.frequency}),this.detune=new ut({context:this.context,units:"cents",value:e.detune}),rt(this,["frequency","detune"]),this.set(e)}static getDefaults(){return Object.assign(gt.getDefaults(),No.getDefaults(),Io.getDefaults(),Fo.getDefaults(),mr.getDefaults(),Lo.getDefaults())}_start(e){this._oscillator.start(e)}_stop(e){this._oscillator.stop(e)}_restart(e){return this._oscillator.restart(e),this}get type(){let e="";return["am","fm","fat"].some(t=>this._sourceType===t)&&(e=this._sourceType),e+this._oscillator.type}set type(e){e.substr(0,2)==="fm"?(this._createNewOscillator("fm"),this._oscillator=this._oscillator,this._oscillator.type=e.substr(2)):e.substr(0,2)==="am"?(this._createNewOscillator("am"),this._oscillator=this._oscillator,this._oscillator.type=e.substr(2)):e.substr(0,3)==="fat"?(this._createNewOscillator("fat"),this._oscillator=this._oscillator,this._oscillator.type=e.substr(3)):e==="pwm"?(this._createNewOscillator("pwm"),this._oscillator=this._oscillator):e==="pulse"?this._createNewOscillator("pulse"):(this._createNewOscillator("oscillator"),this._oscillator=this._oscillator,this._oscillator.type=e)}get partials(){return this._oscillator.partials}set partials(e){!this._getOscType(this._oscillator,"pulse")&&!this._getOscType(this._oscillator,"pwm")&&(this._oscillator.partials=e)}get partialCount(){return this._oscillator.partialCount}set partialCount(e){!this._getOscType(this._oscillator,"pulse")&&!this._getOscType(this._oscillator,"pwm")&&(this._oscillator.partialCount=e)}set(e){return Reflect.has(e,"type")&&e.type&&(this.type=e.type),super.set(e),this}_createNewOscillator(e){if(e!==this._sourceType){this._sourceType=e;const t=du[e],n=this.now();if(this._oscillator){const s=this._oscillator;s.stop(n),this.context.setTimeout(()=>s.dispose(),this.blockTime)}this._oscillator=new t({context:this.context}),this.frequency.connect(this._oscillator.frequency),this.detune.connect(this._oscillator.detune),this._oscillator.connect(this.output),this._oscillator.onstop=()=>this.onstop(this),this.state==="started"&&this._oscillator.start(n)}}get phase(){return this._oscillator.phase}set phase(e){this._oscillator.phase=e}get sourceType(){return this._sourceType}set sourceType(e){let t="sine";this._oscillator.type!=="pwm"&&this._oscillator.type!=="pulse"&&(t=this._oscillator.type),e==="fm"?this.type="fm"+t:e==="am"?this.type="am"+t:e==="fat"?this.type="fat"+t:e==="oscillator"?this.type=t:e==="pulse"?this.type="pulse":e==="pwm"&&(this.type="pwm")}_getOscType(e,t){return e instanceof du[t]}get baseType(){return this._oscillator.baseType}set baseType(e){!this._getOscType(this._oscillator,"pulse")&&!this._getOscType(this._oscillator,"pwm")&&e!=="pulse"&&e!=="pwm"&&(this._oscillator.baseType=e)}get width(){if(this._getOscType(this._oscillator,"pulse"))return this._oscillator.width}get count(){if(this._getOscType(this._oscillator,"fat"))return this._oscillator.count}set count(e){this._getOscType(this._oscillator,"fat")&&mi(e)&&(this._oscillator.count=e)}get spread(){if(this._getOscType(this._oscillator,"fat"))return this._oscillator.spread}set spread(e){this._getOscType(this._oscillator,"fat")&&mi(e)&&(this._oscillator.spread=e)}get modulationType(){if(this._getOscType(this._oscillator,"fm")||this._getOscType(this._oscillator,"am"))return this._oscillator.modulationType}set modulationType(e){(this._getOscType(this._oscillator,"fm")||this._getOscType(this._oscillator,"am"))&&ei(e)&&(this._oscillator.modulationType=e)}get modulationIndex(){if(this._getOscType(this._oscillator,"fm"))return this._oscillator.modulationIndex}get harmonicity(){if(this._getOscType(this._oscillator,"fm")||this._getOscType(this._oscillator,"am"))return this._oscillator.harmonicity}get modulationFrequency(){if(this._getOscType(this._oscillator,"pwm"))return this._oscillator.modulationFrequency}asArray(){return Mt(this,arguments,void 0,function*(e=1024){return Wi(this,e)})}dispose(){return super.dispose(),this.detune.dispose(),this.frequency.dispose(),this._oscillator.dispose(),this}}class Rc extends ut{constructor(){super(be(Rc.getDefaults(),arguments,["value"])),this.override=!1,this.name="Add",this._sum=new Je({context:this.context}),this.input=this._sum,this.output=this._sum,this.addend=this._param,er(this._constantSource,this._sum)}static getDefaults(){return Object.assign(ut.getDefaults(),{value:0})}dispose(){return super.dispose(),this._sum.dispose(),this}}class Dc extends Ln{constructor(){const e=be(Dc.getDefaults(),arguments,["min","max"]);super(e),this.name="Scale",this._mult=this.input=new zi({context:this.context,value:e.max-e.min}),this._add=this.output=new Rc({context:this.context,value:e.min}),this._min=e.min,this._max=e.max,this.input.connect(this.output)}static getDefaults(){return Object.assign(Ln.getDefaults(),{max:1,min:0})}get min(){return this._min}set min(e){this._min=e,this._setRange()}get max(){return this._max}set max(e){this._max=e,this._setRange()}_setRange(){this._add.value=this._min,this._mult.value=this._max-this._min}dispose(){return super.dispose(),this._add.dispose(),this._mult.dispose(),this}}class Pc extends Ln{constructor(){super(be(Pc.getDefaults(),arguments)),this.name="Zero",this._gain=new Je({context:this.context}),this.output=this._gain,this.input=void 0,ti(this.context.getConstant(0),this._gain)}dispose(){return super.dispose(),zh(this.context.getConstant(0),this._gain),this}}class Ic extends Ae{constructor(){const e=be(Ic.getDefaults(),arguments,["frequency","min","max"]);super(e),this.name="LFO",this._stoppedValue=0,this._units="number",this.convert=!0,this._fromType=qe.prototype._fromType,this._toType=qe.prototype._toType,this._is=qe.prototype._is,this._clampValue=qe.prototype._clampValue,this._oscillator=new gt(e),this.frequency=this._oscillator.frequency,this._amplitudeGain=new Je({context:this.context,gain:e.amplitude,units:"normalRange"}),this.amplitude=this._amplitudeGain.gain,this._stoppedSignal=new ut({context:this.context,units:"audioRange",value:0}),this._zeros=new Pc({context:this.context}),this._a2g=new Gh({context:this.context}),this._scaler=this.output=new Dc({context:this.context,max:e.max,min:e.min}),this.units=e.units,this.min=e.min,this.max=e.max,this._oscillator.chain(this._amplitudeGain,this._a2g,this._scaler),this._zeros.connect(this._a2g),this._stoppedSignal.connect(this._a2g),rt(this,["amplitude","frequency"]),this.phase=e.phase}static getDefaults(){return Object.assign(gt.getDefaults(),{amplitude:1,frequency:"4n",max:1,min:0,type:"sine",units:"number"})}start(e){return e=this.toSeconds(e),this._stoppedSignal.setValueAtTime(0,e),this._oscillator.start(e),this}stop(e){return e=this.toSeconds(e),this._stoppedSignal.setValueAtTime(this._stoppedValue,e),this._oscillator.stop(e),this}sync(){return this._oscillator.sync(),this._oscillator.syncFrequency(),this}unsync(){return this._oscillator.unsync(),this._oscillator.unsyncFrequency(),this}_setStoppedValue(){this._stoppedValue=this._oscillator.getInitialValue(),this._stoppedSignal.value=this._stoppedValue}get min(){return this._toType(this._scaler.min)}set min(e){e=this._fromType(e),this._scaler.min=e}get max(){return this._toType(this._scaler.max)}set max(e){e=this._fromType(e),this._scaler.max=e}get type(){return this._oscillator.type}set type(e){this._oscillator.type=e,this._setStoppedValue()}get partials(){return this._oscillator.partials}set partials(e){this._oscillator.partials=e,this._setStoppedValue()}get phase(){return this._oscillator.phase}set phase(e){this._oscillator.phase=e,this._setStoppedValue()}get units(){return this._units}set units(e){const t=this.min,n=this.max;this._units=e,this.min=t,this.max=n}get state(){return this._oscillator.state}connect(e,t,n){return(e instanceof qe||e instanceof ut)&&(this.convert=e.convert,this.units=e.units),Ro(this,e,t,n),this}dispose(){return super.dispose(),this._oscillator.dispose(),this._stoppedSignal.dispose(),this._zeros.dispose(),this._scaler.dispose(),this._a2g.dispose(),this._amplitudeGain.dispose(),this.amplitude.dispose(),this}}function Hh(i,e=1/0){const t=new WeakMap;return function(n,s){Reflect.defineProperty(n,s,{configurable:!0,enumerable:!0,get:function(){return t.get(this)},set:function(r){Fn(r,i,e),t.set(this,r)}})}}function si(i,e=1/0){const t=new WeakMap;return function(n,s){Reflect.defineProperty(n,s,{configurable:!0,enumerable:!0,get:function(){return t.get(this)},set:function(r){Fn(this.toSeconds(r),i,e),t.set(this,r)}})}}class Oo extends Xt{constructor(){const e=be(Oo.getDefaults(),arguments,["url","onload"]);super(e),this.name="Player",this._activeSources=new Set,this._buffer=new at({onload:this._onload.bind(this,e.onload),onerror:e.onerror,reverse:e.reverse,url:e.url}),this.autostart=e.autostart,this._loop=e.loop,this._loopStart=e.loopStart,this._loopEnd=e.loopEnd,this._playbackRate=e.playbackRate,this.fadeIn=e.fadeIn,this.fadeOut=e.fadeOut}static getDefaults(){return Object.assign(Xt.getDefaults(),{autostart:!1,fadeIn:0,fadeOut:0,loop:!1,loopEnd:0,loopStart:0,onload:st,onerror:st,playbackRate:1,reverse:!1})}load(e){return Mt(this,void 0,void 0,function*(){return yield this._buffer.load(e),this._onload(),this})}_onload(e=st){e(),this.autostart&&this.start()}_onSourceEnd(e){this.onstop(this),this._activeSources.delete(e),this._activeSources.size===0&&!this._synced&&this._state.getValueAtTime(this.now())==="started"&&(this._state.cancel(this.now()),this._state.setStateAtTime("stopped",this.now()))}start(e,t,n){return super.start(e,t,n),this}_start(e,t,n){this._loop?t=ms(t,this._loopStart):t=ms(t,0);const s=this.toSeconds(t),r=n;n=ms(n,Math.max(this._buffer.duration-s,0));let o=this.toSeconds(n);o=o/this._playbackRate,e=this.toSeconds(e);const a=new pr({url:this._buffer,context:this.context,fadeIn:this.fadeIn,fadeOut:this.fadeOut,loop:this._loop,loopEnd:this._loopEnd,loopStart:this._loopStart,onended:this._onSourceEnd.bind(this),playbackRate:this._playbackRate}).connect(this.output);!this._loop&&!this._synced&&(this._state.cancel(e+o),this._state.setStateAtTime("stopped",e+o,{implicitEnd:!0})),this._activeSources.add(a),this._loop&&pn(r)?a.start(e,s):a.start(e,s,o-this.toSeconds(this.fadeOut))}_stop(e){const t=this.toSeconds(e);this._activeSources.forEach(n=>n.stop(t))}restart(e,t,n){return super.restart(e,t,n),this}_restart(e,t,n){var s;(s=[...this._activeSources].pop())===null||s===void 0||s.stop(e),this._start(e,t,n)}seek(e,t){const n=this.toSeconds(t);if(this._state.getValueAtTime(n)==="started"){const s=this.toSeconds(e);this._stop(n),this._start(n,s)}return this}setLoopPoints(e,t){return this.loopStart=e,this.loopEnd=t,this}get loopStart(){return this._loopStart}set loopStart(e){this._loopStart=e,this.buffer.loaded&&Fn(this.toSeconds(e),0,this.buffer.duration),this._activeSources.forEach(t=>{t.loopStart=e})}get loopEnd(){return this._loopEnd}set loopEnd(e){this._loopEnd=e,this.buffer.loaded&&Fn(this.toSeconds(e),0,this.buffer.duration),this._activeSources.forEach(t=>{t.loopEnd=e})}get buffer(){return this._buffer}set buffer(e){this._buffer.set(e)}get loop(){return this._loop}set loop(e){if(this._loop!==e&&(this._loop=e,this._activeSources.forEach(t=>{t.loop=e}),e)){const t=this._state.getNextState("stopped",this.now());t&&this._state.cancel(t.time)}}get playbackRate(){return this._playbackRate}set playbackRate(e){this._playbackRate=e;const t=this.now(),n=this._state.getNextState("stopped",t);n&&n.implicitEnd&&(this._state.cancel(n.time),this._activeSources.forEach(s=>s.cancelStop())),this._activeSources.forEach(s=>{s.playbackRate.setValueAtTime(e,t)})}get reverse(){return this._buffer.reverse}set reverse(e){this._buffer.reverse=e}get loaded(){return this._buffer.loaded}dispose(){return super.dispose(),this._activeSources.forEach(e=>e.dispose()),this._activeSources.clear(),this._buffer.dispose(),this}}Dn([si(0)],Oo.prototype,"fadeIn",void 0);Dn([si(0)],Oo.prototype,"fadeOut",void 0);class gM extends Ln{constructor(){super(...arguments),this.name="GainToAudio",this._norm=new Us({context:this.context,mapping:e=>Math.abs(e)*2-1}),this.input=this._norm,this.output=this._norm}dispose(){return super.dispose(),this._norm.dispose(),this}}class xi extends Ae{constructor(){const e=be(xi.getDefaults(),arguments,["attack","decay","sustain","release"]);super(e),this.name="Envelope",this._sig=new ut({context:this.context,value:0}),this.output=this._sig,this.input=void 0,this.attack=e.attack,this.decay=e.decay,this.sustain=e.sustain,this.release=e.release,this.attackCurve=e.attackCurve,this.releaseCurve=e.releaseCurve,this.decayCurve=e.decayCurve}static getDefaults(){return Object.assign(Ae.getDefaults(),{attack:.01,attackCurve:"linear",decay:.1,decayCurve:"exponential",release:1,releaseCurve:"exponential",sustain:.5})}get value(){return this.getValueAtTime(this.now())}_getCurve(e,t){if(ei(e))return e;{let n;for(n in Hr)if(Hr[n][t]===e)return n;return e}}_setCurve(e,t,n){if(ei(n)&&Reflect.has(Hr,n)){const s=Hr[n];Bi(s)?e!=="_decayCurve"&&(this[e]=s[t]):this[e]=s}else if(wn(n)&&e!=="_decayCurve")this[e]=n;else throw new Error("Envelope: invalid curve: "+n)}get attackCurve(){return this._getCurve(this._attackCurve,"In")}set attackCurve(e){this._setCurve("_attackCurve","In",e)}get releaseCurve(){return this._getCurve(this._releaseCurve,"Out")}set releaseCurve(e){this._setCurve("_releaseCurve","Out",e)}get decayCurve(){return this._getCurve(this._decayCurve,"Out")}set decayCurve(e){this._setCurve("_decayCurve","Out",e)}triggerAttack(e,t=1){this.log("triggerAttack",e,t),e=this.toSeconds(e);let s=this.toSeconds(this.attack);const r=this.toSeconds(this.decay),o=this.getValueAtTime(e);if(o>0){const a=1/s;s=(1-o)/a}if(s<this.sampleTime)this._sig.cancelScheduledValues(e),this._sig.setValueAtTime(t,e);else if(this._attackCurve==="linear")this._sig.linearRampTo(t,s,e);else if(this._attackCurve==="exponential")this._sig.targetRampTo(t,s,e);else{this._sig.cancelAndHoldAtTime(e);let a=this._attackCurve;for(let c=1;c<a.length;c++)if(a[c-1]<=o&&o<=a[c]){a=this._attackCurve.slice(c),a[0]=o;break}this._sig.setValueCurveAtTime(a,e,s,t)}if(r&&this.sustain<1){const a=t*this.sustain,c=e+s;this.log("decay",c),this._decayCurve==="linear"?this._sig.linearRampToValueAtTime(a,r+c):this._sig.exponentialApproachValueAtTime(a,c,r)}return this}triggerRelease(e){this.log("triggerRelease",e),e=this.toSeconds(e);const t=this.getValueAtTime(e);if(t>0){const n=this.toSeconds(this.release);n<this.sampleTime?this._sig.setValueAtTime(0,e):this._releaseCurve==="linear"?this._sig.linearRampTo(0,n,e):this._releaseCurve==="exponential"?this._sig.targetRampTo(0,n,e):(Oe(wn(this._releaseCurve),"releaseCurve must be either 'linear', 'exponential' or an array"),this._sig.cancelAndHoldAtTime(e),this._sig.setValueCurveAtTime(this._releaseCurve,e,n,t))}return this}getValueAtTime(e){return this._sig.getValueAtTime(e)}triggerAttackRelease(e,t,n=1){return t=this.toSeconds(t),this.triggerAttack(t,n),this.triggerRelease(t+this.toSeconds(e)),this}cancel(e){return this._sig.cancelScheduledValues(this.toSeconds(e)),this}connect(e,t=0,n=0){return Ro(this,e,t,n),this}asArray(){return Mt(this,arguments,void 0,function*(e=1024){const t=e/this.context.sampleRate,n=new Ao(1,t,this.context.sampleRate),s=this.toSeconds(this.attack)+this.toSeconds(this.decay),r=s+this.toSeconds(this.release),o=r*.1,a=r+o,c=new this.constructor(Object.assign(this.get(),{attack:t*this.toSeconds(this.attack)/a,decay:t*this.toSeconds(this.decay)/a,release:t*this.toSeconds(this.release)/a,context:n}));return c._sig.toDestination(),c.triggerAttackRelease(t*(s+o)/a,0),(yield n.render()).getChannelData(0)})}dispose(){return super.dispose(),this._sig.dispose(),this}}Dn([si(0)],xi.prototype,"attack",void 0);Dn([si(0)],xi.prototype,"decay",void 0);Dn([Hh(0,1)],xi.prototype,"sustain",void 0);Dn([si(0)],xi.prototype,"release",void 0);const Hr=(()=>{let e,t;const n=[];for(e=0;e<128;e++)n[e]=Math.sin(e/127*(Math.PI/2));const s=[],r=6.4;for(e=0;e<127;e++){t=e/127;const d=Math.sin(t*(Math.PI*2)*r-Math.PI/2)+1;s[e]=d/10+t*.83}s[127]=1;const o=[],a=5;for(e=0;e<128;e++)o[e]=Math.ceil(e/127*a)/a;const c=[];for(e=0;e<128;e++)t=e/127,c[e]=.5*(1-Math.cos(Math.PI*t));const l=[];for(e=0;e<128;e++){t=e/127;const d=Math.pow(t,3)*4+.2,m=Math.cos(d*Math.PI*2*t);l[e]=Math.abs(m*(1-t))}function u(d){const m=new Array(d.length);for(let _=0;_<d.length;_++)m[_]=1-d[_];return m}function h(d){return d.slice(0).reverse()}return{bounce:{In:u(l),Out:l},cosine:{In:n,Out:h(n)},exponential:"exponential",linear:"linear",ripple:{In:s,Out:u(s)},sine:{In:c,Out:u(c)},step:{In:o,Out:u(o)}}})();class Es extends Ae{constructor(){const e=be(Es.getDefaults(),arguments);super(e),this._scheduledEvents=[],this._synced=!1,this._original_triggerAttack=this.triggerAttack,this._original_triggerRelease=this.triggerRelease,this._syncedRelease=t=>this._original_triggerRelease(t),this._volume=this.output=new Os({context:this.context,volume:e.volume}),this.volume=this._volume.volume,rt(this,"volume")}static getDefaults(){return Object.assign(Ae.getDefaults(),{volume:0})}sync(){return this._syncState()&&(this._syncMethod("triggerAttack",1),this._syncMethod("triggerRelease",0),this.context.transport.on("stop",this._syncedRelease),this.context.transport.on("pause",this._syncedRelease),this.context.transport.on("loopEnd",this._syncedRelease)),this}_syncState(){let e=!1;return this._synced||(this._synced=!0,e=!0),e}_syncMethod(e,t){const n=this["_original_"+e]=this[e];this[e]=(...s)=>{const r=s[t],o=this.context.transport.schedule(a=>{s[t]=a,n.apply(this,s)},r);this._scheduledEvents.push(o)}}unsync(){return this._scheduledEvents.forEach(e=>this.context.transport.clear(e)),this._scheduledEvents=[],this._synced&&(this._synced=!1,this.triggerAttack=this._original_triggerAttack,this.triggerRelease=this._original_triggerRelease,this.context.transport.off("stop",this._syncedRelease),this.context.transport.off("pause",this._syncedRelease),this.context.transport.off("loopEnd",this._syncedRelease)),this}triggerAttackRelease(e,t,n,s){const r=this.toSeconds(n),o=this.toSeconds(t);return this.triggerAttack(e,r,s),this.triggerRelease(r+o),this}dispose(){return super.dispose(),this._volume.dispose(),this.unsync(),this._scheduledEvents=[],this}}class bs extends Es{constructor(){const e=be(bs.getDefaults(),arguments);super(e),this.portamento=e.portamento,this.onsilence=e.onsilence}static getDefaults(){return Object.assign(Es.getDefaults(),{detune:0,onsilence:st,portamento:0})}triggerAttack(e,t,n=1){this.log("triggerAttack",e,t,n);const s=this.toSeconds(t);return this._triggerEnvelopeAttack(s,n),this.setNote(e,s),this}triggerRelease(e){this.log("triggerRelease",e);const t=this.toSeconds(e);return this._triggerEnvelopeRelease(t),this}setNote(e,t){const n=this.toSeconds(t),s=e instanceof fn?e.toFrequency():e;if(this.portamento>0&&this.getLevelAtTime(n)>.05){const r=this.toSeconds(this.portamento);this.frequency.exponentialRampTo(s,r,n)}else this.frequency.setValueAtTime(s,n);return this}}Dn([si(0)],bs.prototype,"portamento",void 0);class Nc extends xi{constructor(){super(be(Nc.getDefaults(),arguments,["attack","decay","sustain","release"])),this.name="AmplitudeEnvelope",this._gainNode=new Je({context:this.context,gain:0}),this.output=this._gainNode,this.input=this._gainNode,this._sig.connect(this._gainNode.gain),this.output=this._gainNode,this.input=this._gainNode}dispose(){return super.dispose(),this._gainNode.dispose(),this}}class uo extends bs{constructor(){const e=be(uo.getDefaults(),arguments);super(e),this.name="Synth",this.oscillator=new lo(Object.assign({context:this.context,detune:e.detune,onstop:()=>this.onsilence(this)},e.oscillator)),this.frequency=this.oscillator.frequency,this.detune=this.oscillator.detune,this.envelope=new Nc(Object.assign({context:this.context},e.envelope)),this.oscillator.chain(this.envelope,this.output),rt(this,["oscillator","frequency","detune","envelope"])}static getDefaults(){return Object.assign(bs.getDefaults(),{envelope:Object.assign(uu(xi.getDefaults(),Object.keys(Ae.getDefaults())),{attack:.005,decay:.1,release:1,sustain:.3}),oscillator:Object.assign(uu(lo.getDefaults(),[...Object.keys(Xt.getDefaults()),"frequency","detune"]),{type:"triangle"})})}_triggerEnvelopeAttack(e,t){if(this.envelope.triggerAttack(e,t),this.oscillator.start(e),this.envelope.sustain===0){const n=this.toSeconds(this.envelope.attack),s=this.toSeconds(this.envelope.decay);this.oscillator.stop(e+n+s)}}_triggerEnvelopeRelease(e){this.envelope.triggerRelease(e),this.oscillator.stop(e+this.toSeconds(this.envelope.release))}getLevelAtTime(e){return e=this.toSeconds(e),this.envelope.getValueAtTime(e)}dispose(){return super.dispose(),this.oscillator.dispose(),this.envelope.dispose(),this}}class ho extends Ae{constructor(){const e=be(ho.getDefaults(),arguments,["frequency","type"]);super(e),this.name="BiquadFilter",this._filter=this.context.createBiquadFilter(),this.input=this.output=this._filter,this.Q=new qe({context:this.context,units:"number",value:e.Q,param:this._filter.Q}),this.frequency=new qe({context:this.context,units:"frequency",value:e.frequency,param:this._filter.frequency}),this.detune=new qe({context:this.context,units:"cents",value:e.detune,param:this._filter.detune}),this.gain=new qe({context:this.context,units:"decibels",convert:!1,value:e.gain,param:this._filter.gain}),this.type=e.type}static getDefaults(){return Object.assign(Ae.getDefaults(),{Q:1,type:"lowpass",frequency:350,detune:0,gain:0})}get type(){return this._filter.type}set type(e){Oe(["lowpass","highpass","bandpass","lowshelf","highshelf","notch","allpass","peaking"].indexOf(e)!==-1,`Invalid filter type: ${e}`),this._filter.type=e}getFrequencyResponse(e=128){const t=new Float32Array(e);for(let o=0;o<e;o++){const c=Math.pow(o/e,2)*19980+20;t[o]=c}const n=new Float32Array(e),s=new Float32Array(e),r=this.context.createBiquadFilter();return r.type=this.type,r.Q.value=this.Q.value,r.frequency.value=this.frequency.value,r.gain.value=this.gain.value,r.getFrequencyResponse(t,n,s),n}dispose(){return super.dispose(),this._filter.disconnect(),this.Q.dispose(),this.frequency.dispose(),this.gain.dispose(),this.detune.dispose(),this}}class Fc extends Ae{constructor(){const e=be(Fc.getDefaults(),arguments,["frequency","type","rolloff"]);super(e),this.name="Filter",this.input=new Je({context:this.context}),this.output=new Je({context:this.context}),this._filters=[],this._filters=[],this.Q=new ut({context:this.context,units:"positive",value:e.Q}),this.frequency=new ut({context:this.context,units:"frequency",value:e.frequency}),this.detune=new ut({context:this.context,units:"cents",value:e.detune}),this.gain=new ut({context:this.context,units:"decibels",convert:!1,value:e.gain}),this._type=e.type,this.rolloff=e.rolloff,rt(this,["detune","frequency","gain","Q"])}static getDefaults(){return Object.assign(Ae.getDefaults(),{Q:1,detune:0,frequency:350,gain:0,rolloff:-12,type:"lowpass"})}get type(){return this._type}set type(e){Oe(["lowpass","highpass","bandpass","lowshelf","highshelf","notch","allpass","peaking"].indexOf(e)!==-1,`Invalid filter type: ${e}`),this._type=e,this._filters.forEach(n=>n.type=e)}get rolloff(){return this._rolloff}set rolloff(e){const t=mi(e)?e:parseInt(e,10),n=[-12,-24,-48,-96];let s=n.indexOf(t);Oe(s!==-1,`rolloff can only be ${n.join(", ")}`),s+=1,this._rolloff=t,this.input.disconnect(),this._filters.forEach(r=>r.disconnect()),this._filters=new Array(s);for(let r=0;r<s;r++){const o=new ho({context:this.context});o.type=this._type,this.frequency.connect(o.frequency),this.detune.connect(o.detune),this.Q.connect(o.Q),this.gain.connect(o.gain),this._filters[r]=o}this._internalChannels=this._filters,er(this.input,...this._internalChannels,this.output)}getFrequencyResponse(e=128){const t=new ho({frequency:this.frequency.value,gain:this.gain.value,Q:this.Q.value,type:this._type,detune:this.detune.value}),n=new Float32Array(e).map(()=>1);return this._filters.forEach(()=>{t.getFrequencyResponse(e).forEach((r,o)=>n[o]*=r)}),t.dispose(),n}dispose(){return super.dispose(),this._filters.forEach(e=>{e.dispose()}),_c(this,["detune","frequency","gain","Q"]),this.frequency.dispose(),this.Q.dispose(),this.detune.dispose(),this.gain.dispose(),this}}class Uo extends uo{constructor(){const e=be(Uo.getDefaults(),arguments);super(e),this.name="MembraneSynth",this.portamento=0,this.pitchDecay=e.pitchDecay,this.octaves=e.octaves,rt(this,["oscillator","envelope"])}static getDefaults(){return ps(bs.getDefaults(),uo.getDefaults(),{envelope:{attack:.001,attackCurve:"exponential",decay:.4,release:1.4,sustain:.01},octaves:10,oscillator:{type:"sine"},pitchDecay:.05})}setNote(e,t){const n=this.toSeconds(t),s=this.toFrequency(e instanceof fn?e.toFrequency():e),r=s*this.octaves;return this.oscillator.frequency.setValueAtTime(r,n),this.oscillator.frequency.exponentialRampToValueAtTime(s,n+this.toSeconds(this.pitchDecay)),this}dispose(){return super.dispose(),this}}Dn([Hh(0)],Uo.prototype,"octaves",void 0);Dn([si(0)],Uo.prototype,"pitchDecay",void 0);const Wh=new Set;function Lc(i){Wh.add(i)}function qh(i,e){const t=`registerProcessor("${i}", ${e})`;Wh.add(t)}const vM=`
	/**
	 * The base AudioWorkletProcessor for use in Tone.js. Works with the {@link ToneAudioWorklet}. 
	 */
	class ToneAudioWorkletProcessor extends AudioWorkletProcessor {

		constructor(options) {
			
			super(options);
			/**
			 * If the processor was disposed or not. Keep alive until it's disposed.
			 */
			this.disposed = false;
		   	/** 
			 * The number of samples in the processing block
			 */
			this.blockSize = 128;
			/**
			 * the sample rate
			 */
			this.sampleRate = sampleRate;

			this.port.onmessage = (event) => {
				// when it receives a dispose 
				if (event.data === "dispose") {
					this.disposed = true;
				}
			};
		}
	}
`;Lc(vM);const xM=`
	/**
	 * Abstract class for a single input/output processor. 
	 * has a 'generate' function which processes one sample at a time
	 */
	class SingleIOProcessor extends ToneAudioWorkletProcessor {

		constructor(options) {
			super(Object.assign(options, {
				numberOfInputs: 1,
				numberOfOutputs: 1
			}));
			/**
			 * Holds the name of the parameter and a single value of that
			 * parameter at the current sample
			 * @type { [name: string]: number }
			 */
			this.params = {}
		}

		/**
		 * Generate an output sample from the input sample and parameters
		 * @abstract
		 * @param input number
		 * @param channel number
		 * @param parameters { [name: string]: number }
		 * @returns number
		 */
		generate(){}

		/**
		 * Update the private params object with the 
		 * values of the parameters at the given index
		 * @param parameters { [name: string]: Float32Array },
		 * @param index number
		 */
		updateParams(parameters, index) {
			for (const paramName in parameters) {
				const param = parameters[paramName];
				if (param.length > 1) {
					this.params[paramName] = parameters[paramName][index];
				} else {
					this.params[paramName] = parameters[paramName][0];
				}
			}
		}

		/**
		 * Process a single frame of the audio
		 * @param inputs Float32Array[][]
		 * @param outputs Float32Array[][]
		 */
		process(inputs, outputs, parameters) {
			const input = inputs[0];
			const output = outputs[0];
			// get the parameter values
			const channelCount = Math.max(input && input.length || 0, output.length);
			for (let sample = 0; sample < this.blockSize; sample++) {
				this.updateParams(parameters, sample);
				for (let channel = 0; channel < channelCount; channel++) {
					const inputSample = input && input.length ? input[channel][sample] : 0;
					output[channel][sample] = this.generate(inputSample, channel, this.params);
				}
			}
			return !this.disposed;
		}
	};
`;Lc(xM);const yM=`
	/**
	 * A multichannel buffer for use within an AudioWorkletProcessor as a delay line
	 */
	class DelayLine {
		
		constructor(size, channels) {
			this.buffer = [];
			this.writeHead = []
			this.size = size;

			// create the empty channels
			for (let i = 0; i < channels; i++) {
				this.buffer[i] = new Float32Array(this.size);
				this.writeHead[i] = 0;
			}
		}

		/**
		 * Push a value onto the end
		 * @param channel number
		 * @param value number
		 */
		push(channel, value) {
			this.writeHead[channel] += 1;
			if (this.writeHead[channel] > this.size) {
				this.writeHead[channel] = 0;
			}
			this.buffer[channel][this.writeHead[channel]] = value;
		}

		/**
		 * Get the recorded value of the channel given the delay
		 * @param channel number
		 * @param delay number delay samples
		 */
		get(channel, delay) {
			let readHead = this.writeHead[channel] - Math.floor(delay);
			if (readHead < 0) {
				readHead += this.size;
			}
			return this.buffer[channel][readHead];
		}
	}
`;Lc(yM);const SM="feedback-comb-filter",MM=`
	class FeedbackCombFilterWorklet extends SingleIOProcessor {

		constructor(options) {
			super(options);
			this.delayLine = new DelayLine(this.sampleRate, options.channelCount || 2);
		}

		static get parameterDescriptors() {
			return [{
				name: "delayTime",
				defaultValue: 0.1,
				minValue: 0,
				maxValue: 1,
				automationRate: "k-rate"
			}, {
				name: "feedback",
				defaultValue: 0.5,
				minValue: 0,
				maxValue: 0.9999,
				automationRate: "k-rate"
			}];
		}

		generate(input, channel, parameters) {
			const delayedSample = this.delayLine.get(channel, parameters.delayTime * this.sampleRate);
			this.delayLine.push(channel, input + delayedSample * parameters.feedback);
			return delayedSample;
		}
	}
`;qh(SM,MM);class Bo extends Es{constructor(){const e=be(Bo.getDefaults(),arguments,["urls","onload","baseUrl"],"urls");super(e),this.name="Sampler",this._activeSources=new Map;const t={};Object.keys(e.urls).forEach(n=>{const s=parseInt(n,10);if(Oe(Gr(n)||mi(s)&&isFinite(s),`url key is neither a note or midi pitch: ${n}`),Gr(n)){const r=new fn(this.context,n).toMidi();t[r]=e.urls[n]}else mi(s)&&isFinite(s)&&(t[s]=e.urls[s])}),this._buffers=new bc({urls:t,onload:e.onload,baseUrl:e.baseUrl,onerror:e.onerror}),this.attack=e.attack,this.release=e.release,this.curve=e.curve,this._buffers.loaded&&Promise.resolve().then(e.onload)}static getDefaults(){return Object.assign(Es.getDefaults(),{attack:0,baseUrl:"",curve:"exponential",onload:st,onerror:st,release:.1,urls:{}})}_findClosest(e){let n=0;for(;n<96;){if(this._buffers.has(e+n))return-n;if(this._buffers.has(e-n))return n;n++}throw new Error(`No available buffers for note: ${e}`)}triggerAttack(e,t,n=1){return this.log("triggerAttack",e,t,n),Array.isArray(e)||(e=[e]),e.forEach(s=>{const r=Vh(new fn(this.context,s).toFrequency()),o=Math.round(r),a=r-o,c=this._findClosest(o),l=o-c,u=this._buffers.get(l),h=kh(c+a),d=new pr({url:u,context:this.context,curve:this.curve,fadeIn:this.attack,fadeOut:this.release,playbackRate:h}).connect(this.output);d.start(t,0,u.duration/h,n),wn(this._activeSources.get(o))||this._activeSources.set(o,[]),this._activeSources.get(o).push(d),d.onended=()=>{if(this._activeSources&&this._activeSources.has(o)){const m=this._activeSources.get(o),_=m.indexOf(d);_!==-1&&m.splice(_,1)}}}),this}triggerRelease(e,t){return this.log("triggerRelease",e,t),Array.isArray(e)||(e=[e]),e.forEach(n=>{const s=new fn(this.context,n).toMidi();if(this._activeSources.has(s)&&this._activeSources.get(s).length){const r=this._activeSources.get(s);t=this.toSeconds(t),r.forEach(o=>{o.stop(t)}),this._activeSources.set(s,[])}}),this}releaseAll(e){const t=this.toSeconds(e);return this._activeSources.forEach(n=>{for(;n.length;)n.shift().stop(t)}),this}sync(){return this._syncState()&&(this._syncMethod("triggerAttack",1),this._syncMethod("triggerRelease",1)),this}triggerAttackRelease(e,t,n,s=1){const r=this.toSeconds(n);return this.triggerAttack(e,r,s),wn(t)?(Oe(wn(e),"notes must be an array when duration is array"),e.forEach((o,a)=>{const c=t[Math.min(a,t.length-1)];this.triggerRelease(o,r+this.toSeconds(c))})):this.triggerRelease(e,r+this.toSeconds(t)),this}add(e,t,n){if(Oe(Gr(e)||isFinite(e),`note must be a pitch or midi: ${e}`),Gr(e)){const s=new fn(this.context,e).toMidi();this._buffers.add(s,t,n)}else this._buffers.add(e,t,n);return this}get loaded(){return this._buffers.loaded}dispose(){return super.dispose(),this._buffers.dispose(),this._activeSources.forEach(e=>{e.forEach(t=>t.dispose())}),this._activeSources.clear(),this}}Dn([si(0)],Bo.prototype,"attack",void 0);Dn([si(0)],Bo.prototype,"release",void 0);class ko extends Ae{constructor(){const e=be(ko.getDefaults(),arguments,["fade"]);super(e),this.name="CrossFade",this._panner=this.context.createStereoPanner(),this._split=this.context.createChannelSplitter(2),this._g2a=new gM({context:this.context}),this.a=new Je({context:this.context,gain:0}),this.b=new Je({context:this.context,gain:0}),this.output=new Je({context:this.context}),this._internalChannels=[this.a,this.b],this.fade=new ut({context:this.context,units:"normalRange",value:e.fade}),rt(this,"fade"),this.context.getConstant(1).connect(this._panner),this._panner.connect(this._split),this._panner.channelCount=1,this._panner.channelCountMode="explicit",ti(this._split,this.a.gain,0),ti(this._split,this.b.gain,1),this.fade.chain(this._g2a,this._panner.pan),this.a.connect(this.output),this.b.connect(this.output)}static getDefaults(){return Object.assign(Ae.getDefaults(),{fade:.5})}dispose(){return super.dispose(),this.a.dispose(),this.b.dispose(),this.output.dispose(),this.fade.dispose(),this._g2a.dispose(),this._panner.disconnect(),this._split.disconnect(),this}}class fo extends Ae{constructor(e){super(e),this.name="Effect",this._dryWet=new ko({context:this.context}),this.wet=this._dryWet.fade,this.effectSend=new Je({context:this.context}),this.effectReturn=new Je({context:this.context}),this.input=new Je({context:this.context}),this.output=this._dryWet,this.input.fan(this._dryWet.a,this.effectSend),this.effectReturn.connect(this._dryWet.b),this.wet.setValueAtTime(e.wet,0),this._internalChannels=[this.effectReturn,this.effectSend],rt(this,"wet")}static getDefaults(){return Object.assign(Ae.getDefaults(),{wet:1})}connectEffect(e){return this._internalChannels.push(e),this.effectSend.chain(e,this.effectReturn),this}dispose(){return super.dispose(),this._dryWet.dispose(),this.effectSend.dispose(),this.effectReturn.dispose(),this.wet.dispose(),this}}class Oc extends Ae{constructor(){const e=be(Oc.getDefaults(),arguments,["pan"]);super(e),this.name="Panner",this._panner=this.context.createStereoPanner(),this.input=this._panner,this.output=this._panner,this.pan=new qe({context:this.context,param:this._panner.pan,value:e.pan,minValue:-1,maxValue:1}),this._panner.channelCount=e.channelCount,this._panner.channelCountMode="explicit",rt(this,"pan")}static getDefaults(){return Object.assign(Ae.getDefaults(),{pan:0,channelCount:1})}dispose(){return super.dispose(),this._panner.disconnect(),this.pan.dispose(),this}}const TM="bit-crusher",EM=`
	class BitCrusherWorklet extends SingleIOProcessor {

		static get parameterDescriptors() {
			return [{
				name: "bits",
				defaultValue: 12,
				minValue: 1,
				maxValue: 16,
				automationRate: 'k-rate'
			}];
		}

		generate(input, _channel, parameters) {
			const step = Math.pow(0.5, parameters.bits - 1);
			const val = step * Math.floor(input / step + 0.5);
			return val;
		}
	}
`;qh(TM,EM);class Uc extends Ae{constructor(){const e=be(Uc.getDefaults(),arguments,["channels"]);super(e),this.name="Split",this._splitter=this.input=this.output=this.context.createChannelSplitter(e.channels),this._internalChannels=[this._splitter]}static getDefaults(){return Object.assign(Ae.getDefaults(),{channels:2})}dispose(){return super.dispose(),this._splitter.disconnect(),this}}class Bc extends Ae{constructor(){const e=be(Bc.getDefaults(),arguments,["channels"]);super(e),this.name="Merge",this._merger=this.output=this.input=this.context.createChannelMerger(e.channels)}static getDefaults(){return Object.assign(Ae.getDefaults(),{channels:2})}dispose(){return super.dispose(),this._merger.disconnect(),this}}class fu extends fo{constructor(e){super(e),this.name="FeedbackEffect",this._feedbackGain=new Je({context:this.context,gain:e.feedback,units:"normalRange"}),this.feedback=this._feedbackGain.gain,rt(this,"feedback"),this.effectReturn.chain(this._feedbackGain,this.effectSend)}static getDefaults(){return Object.assign(fo.getDefaults(),{feedback:.125})}dispose(){return super.dispose(),this._feedbackGain.dispose(),this.feedback.dispose(),this}}class Vo extends fu{constructor(){const e=be(Vo.getDefaults(),arguments,["delayTime","feedback"]);super(e),this.name="FeedbackDelay",this._delayNode=new Tc({context:this.context,delayTime:e.delayTime,maxDelay:e.maxDelay}),this.delayTime=this._delayNode.delayTime,this.connectEffect(this._delayNode),rt(this,"delayTime")}static getDefaults(){return Object.assign(fu.getDefaults(),{delayTime:.25,maxDelay:1})}dispose(){return super.dispose(),this._delayNode.dispose(),this.delayTime.dispose(),this}}class zo extends fo{constructor(){const e=be(zo.getDefaults(),arguments,["decay"]);super(e),this.name="Reverb",this._convolver=this.context.createConvolver(),this.ready=Promise.resolve(),this._decay=e.decay,this._preDelay=e.preDelay,this.generate(),this.connectEffect(this._convolver)}static getDefaults(){return Object.assign(fo.getDefaults(),{decay:1.5,preDelay:.01})}get decay(){return this._decay}set decay(e){e=this.toSeconds(e),Fn(e,.001),this._decay=e,this.generate()}get preDelay(){return this._preDelay}set preDelay(e){e=this.toSeconds(e),Fn(e,0),this._preDelay=e,this.generate()}generate(){return Mt(this,void 0,void 0,function*(){const e=this.ready,t=new Ao(2,this._decay+this._preDelay,this.context.sampleRate),n=new co({context:t}),s=new co({context:t}),r=new Bc({context:t});n.connect(r,0,0),s.connect(r,0,1);const o=new Je({context:t}).toDestination();r.connect(o),n.start(0),s.start(0),o.gain.setValueAtTime(0,0),o.gain.setValueAtTime(1,this._preDelay),o.gain.exponentialApproachValueAtTime(0,this._preDelay,this.decay);const a=t.render();return this.ready=a.then(st),yield e,this._convolver.buffer=(yield a).get(),this})}dispose(){return super.dispose(),this._convolver.disconnect(),this}}class wt extends Ae{constructor(){const e=be(wt.getDefaults(),arguments,["solo"]);super(e),this.name="Solo",this.input=this.output=new Je({context:this.context}),wt._allSolos.has(this.context)||wt._allSolos.set(this.context,new Set),wt._allSolos.get(this.context).add(this),this.solo=e.solo}static getDefaults(){return Object.assign(Ae.getDefaults(),{solo:!1})}get solo(){return this._isSoloed()}set solo(e){e?this._addSolo():this._removeSolo(),wt._allSolos.get(this.context).forEach(t=>t._updateSolo())}get muted(){return this.input.gain.value===0}_addSolo(){wt._soloed.has(this.context)||wt._soloed.set(this.context,new Set),wt._soloed.get(this.context).add(this)}_removeSolo(){wt._soloed.has(this.context)&&wt._soloed.get(this.context).delete(this)}_isSoloed(){return wt._soloed.has(this.context)&&wt._soloed.get(this.context).has(this)}_noSolos(){return!wt._soloed.has(this.context)||wt._soloed.has(this.context)&&wt._soloed.get(this.context).size===0}_updateSolo(){this._isSoloed()?this.input.gain.value=1:this._noSolos()?this.input.gain.value=1:this.input.gain.value=0}dispose(){return super.dispose(),wt._allSolos.get(this.context).delete(this),this._removeSolo(),this}}wt._allSolos=new Map;wt._soloed=new Map;class kc extends Ae{constructor(){const e=be(kc.getDefaults(),arguments,["pan","volume"]);super(e),this.name="PanVol",this._panner=this.input=new Oc({context:this.context,pan:e.pan,channelCount:e.channelCount}),this.pan=this._panner.pan,this._volume=this.output=new Os({context:this.context,volume:e.volume}),this.volume=this._volume.volume,this._panner.connect(this._volume),this.mute=e.mute,rt(this,["pan","volume"])}static getDefaults(){return Object.assign(Ae.getDefaults(),{mute:!1,pan:0,volume:0,channelCount:1})}get mute(){return this._volume.mute}set mute(e){this._volume.mute=e}dispose(){return super.dispose(),this._panner.dispose(),this.pan.dispose(),this._volume.dispose(),this.volume.dispose(),this}}class hs extends Ae{constructor(){const e=be(hs.getDefaults(),arguments,["volume","pan"]);super(e),this.name="Channel",this._solo=this.input=new wt({solo:e.solo,context:this.context}),this._panVol=this.output=new kc({context:this.context,pan:e.pan,volume:e.volume,mute:e.mute,channelCount:e.channelCount}),this.pan=this._panVol.pan,this.volume=this._panVol.volume,this._solo.connect(this._panVol),rt(this,["pan","volume"])}static getDefaults(){return Object.assign(Ae.getDefaults(),{pan:0,volume:0,mute:!1,solo:!1,channelCount:1})}get solo(){return this._solo.solo}set solo(e){this._solo.solo=e}get muted(){return this._solo.muted||this.mute}get mute(){return this._panVol.mute}set mute(e){this._panVol.mute=e}_getBus(e){return hs.buses.has(e)||hs.buses.set(e,new Je({context:this.context})),hs.buses.get(e)}send(e,t=0){const n=this._getBus(e),s=new Je({context:this.context,units:"decibels",gain:t});return this.connect(s),s.connect(n),s}receive(e){return this._getBus(e).connect(this),this}dispose(){return super.dispose(),this._panVol.dispose(),this.pan.dispose(),this.volume.dispose(),this._solo.dispose(),this}}hs.buses=new Map;class Vc extends Ae{constructor(){const e=be(Vc.getDefaults(),arguments,["positionX","positionY","positionZ"]);super(e),this.name="Panner3D",this._panner=this.input=this.output=this.context.createPanner(),this.panningModel=e.panningModel,this.maxDistance=e.maxDistance,this.distanceModel=e.distanceModel,this.coneOuterGain=e.coneOuterGain,this.coneOuterAngle=e.coneOuterAngle,this.coneInnerAngle=e.coneInnerAngle,this.refDistance=e.refDistance,this.rolloffFactor=e.rolloffFactor,this.positionX=new qe({context:this.context,param:this._panner.positionX,value:e.positionX}),this.positionY=new qe({context:this.context,param:this._panner.positionY,value:e.positionY}),this.positionZ=new qe({context:this.context,param:this._panner.positionZ,value:e.positionZ}),this.orientationX=new qe({context:this.context,param:this._panner.orientationX,value:e.orientationX}),this.orientationY=new qe({context:this.context,param:this._panner.orientationY,value:e.orientationY}),this.orientationZ=new qe({context:this.context,param:this._panner.orientationZ,value:e.orientationZ})}static getDefaults(){return Object.assign(Ae.getDefaults(),{coneInnerAngle:360,coneOuterAngle:360,coneOuterGain:0,distanceModel:"inverse",maxDistance:1e4,orientationX:0,orientationY:0,orientationZ:0,panningModel:"equalpower",positionX:0,positionY:0,positionZ:0,refDistance:1,rolloffFactor:1})}setPosition(e,t,n){return this.positionX.value=e,this.positionY.value=t,this.positionZ.value=n,this}setOrientation(e,t,n){return this.orientationX.value=e,this.orientationY.value=t,this.orientationZ.value=n,this}get panningModel(){return this._panner.panningModel}set panningModel(e){this._panner.panningModel=e}get refDistance(){return this._panner.refDistance}set refDistance(e){this._panner.refDistance=e}get rolloffFactor(){return this._panner.rolloffFactor}set rolloffFactor(e){this._panner.rolloffFactor=e}get distanceModel(){return this._panner.distanceModel}set distanceModel(e){this._panner.distanceModel=e}get coneInnerAngle(){return this._panner.coneInnerAngle}set coneInnerAngle(e){this._panner.coneInnerAngle=e}get coneOuterAngle(){return this._panner.coneOuterAngle}set coneOuterAngle(e){this._panner.coneOuterAngle=e}get coneOuterGain(){return this._panner.coneOuterGain}set coneOuterGain(e){this._panner.coneOuterGain=e}get maxDistance(){return this._panner.maxDistance}set maxDistance(e){this._panner.maxDistance=e}dispose(){return super.dispose(),this._panner.disconnect(),this.orientationX.dispose(),this.orientationY.dispose(),this.orientationZ.dispose(),this.positionX.dispose(),this.positionY.dispose(),this.positionZ.dispose(),this}}dn().transport;const bM=dn().destination;dn().destination;function Ua(){return dn().destination}dn().listener;dn().draw;const Xh=dn();var _s=Object.freeze({Linear:Object.freeze({None:function(i){return i},In:function(i){return i},Out:function(i){return i},InOut:function(i){return i}}),Quadratic:Object.freeze({In:function(i){return i*i},Out:function(i){return i*(2-i)},InOut:function(i){return(i*=2)<1?.5*i*i:-.5*(--i*(i-2)-1)}}),Cubic:Object.freeze({In:function(i){return i*i*i},Out:function(i){return--i*i*i+1},InOut:function(i){return(i*=2)<1?.5*i*i*i:.5*((i-=2)*i*i+2)}}),Quartic:Object.freeze({In:function(i){return i*i*i*i},Out:function(i){return 1- --i*i*i*i},InOut:function(i){return(i*=2)<1?.5*i*i*i*i:-.5*((i-=2)*i*i*i-2)}}),Quintic:Object.freeze({In:function(i){return i*i*i*i*i},Out:function(i){return--i*i*i*i*i+1},InOut:function(i){return(i*=2)<1?.5*i*i*i*i*i:.5*((i-=2)*i*i*i*i+2)}}),Sinusoidal:Object.freeze({In:function(i){return 1-Math.sin((1-i)*Math.PI/2)},Out:function(i){return Math.sin(i*Math.PI/2)},InOut:function(i){return .5*(1-Math.sin(Math.PI*(.5-i)))}}),Exponential:Object.freeze({In:function(i){return i===0?0:Math.pow(1024,i-1)},Out:function(i){return i===1?1:1-Math.pow(2,-10*i)},InOut:function(i){return i===0?0:i===1?1:(i*=2)<1?.5*Math.pow(1024,i-1):.5*(-Math.pow(2,-10*(i-1))+2)}}),Circular:Object.freeze({In:function(i){return 1-Math.sqrt(1-i*i)},Out:function(i){return Math.sqrt(1- --i*i)},InOut:function(i){return(i*=2)<1?-.5*(Math.sqrt(1-i*i)-1):.5*(Math.sqrt(1-(i-=2)*i)+1)}}),Elastic:Object.freeze({In:function(i){return i===0?0:i===1?1:-Math.pow(2,10*(i-1))*Math.sin((i-1.1)*5*Math.PI)},Out:function(i){return i===0?0:i===1?1:Math.pow(2,-10*i)*Math.sin((i-.1)*5*Math.PI)+1},InOut:function(i){return i===0?0:i===1?1:(i*=2,i<1?-.5*Math.pow(2,10*(i-1))*Math.sin((i-1.1)*5*Math.PI):.5*Math.pow(2,-10*(i-1))*Math.sin((i-1.1)*5*Math.PI)+1)}}),Back:Object.freeze({In:function(i){var e=1.70158;return i===1?1:i*i*((e+1)*i-e)},Out:function(i){var e=1.70158;return i===0?0:--i*i*((e+1)*i+e)+1},InOut:function(i){var e=2.5949095;return(i*=2)<1?.5*(i*i*((e+1)*i-e)):.5*((i-=2)*i*((e+1)*i+e)+2)}}),Bounce:Object.freeze({In:function(i){return 1-_s.Bounce.Out(1-i)},Out:function(i){return i<1/2.75?7.5625*i*i:i<2/2.75?7.5625*(i-=1.5/2.75)*i+.75:i<2.5/2.75?7.5625*(i-=2.25/2.75)*i+.9375:7.5625*(i-=2.625/2.75)*i+.984375},InOut:function(i){return i<.5?_s.Bounce.In(i*2)*.5:_s.Bounce.Out(i*2-1)*.5+.5}}),generatePow:function(i){return i===void 0&&(i=4),i=i<Number.EPSILON?Number.EPSILON:i,i=i>1e4?1e4:i,{In:function(e){return Math.pow(e,i)},Out:function(e){return 1-Math.pow(1-e,i)},InOut:function(e){return e<.5?Math.pow(e*2,i)/2:(1-Math.pow(2-e*2,i))/2+.5}}}}),ds=function(){return performance.now()},Yh=(function(){function i(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._tweens={},this._tweensAddedDuringUpdate={},this.add.apply(this,e)}return i.prototype.getAll=function(){var e=this;return Object.keys(this._tweens).map(function(t){return e._tweens[t]})},i.prototype.removeAll=function(){this._tweens={}},i.prototype.add=function(){for(var e,t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];for(var s=0,r=t;s<r.length;s++){var o=r[s];(e=o._group)===null||e===void 0||e.remove(o),o._group=this,this._tweens[o.getId()]=o,this._tweensAddedDuringUpdate[o.getId()]=o}},i.prototype.remove=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];for(var n=0,s=e;n<s.length;n++){var r=s[n];r._group=void 0,delete this._tweens[r.getId()],delete this._tweensAddedDuringUpdate[r.getId()]}},i.prototype.allStopped=function(){return this.getAll().every(function(e){return!e.isPlaying()})},i.prototype.update=function(e,t){e===void 0&&(e=ds()),t===void 0&&(t=!0);var n=Object.keys(this._tweens);if(n.length!==0)for(;n.length>0;){this._tweensAddedDuringUpdate={};for(var s=0;s<n.length;s++){var r=this._tweens[n[s]],o=!t;r&&r.update(e,o)===!1&&!t&&this.remove(r)}n=Object.keys(this._tweensAddedDuringUpdate)}},i})(),Ui={Linear:function(i,e){var t=i.length-1,n=t*e,s=Math.floor(n),r=Ui.Utils.Linear;return e<0?r(i[0],i[1],n):e>1?r(i[t],i[t-1],t-n):r(i[s],i[s+1>t?t:s+1],n-s)},Bezier:function(i,e){for(var t=0,n=i.length-1,s=Math.pow,r=Ui.Utils.Bernstein,o=0;o<=n;o++)t+=s(1-e,n-o)*s(e,o)*i[o]*r(n,o);return t},CatmullRom:function(i,e){var t=i.length-1,n=t*e,s=Math.floor(n),r=Ui.Utils.CatmullRom;return i[0]===i[t]?(e<0&&(s=Math.floor(n=t*(1+e))),r(i[(s-1+t)%t],i[s],i[(s+1)%t],i[(s+2)%t],n-s)):e<0?i[0]-(r(i[0],i[0],i[1],i[1],-n)-i[0]):e>1?i[t]-(r(i[t],i[t],i[t-1],i[t-1],n-t)-i[t]):r(i[s?s-1:0],i[s],i[t<s+1?t:s+1],i[t<s+2?t:s+2],n-s)},Utils:{Linear:function(i,e,t){return(e-i)*t+i},Bernstein:function(i,e){var t=Ui.Utils.Factorial;return t(i)/t(e)/t(i-e)},Factorial:(function(){var i=[1];return function(e){var t=1;if(i[e])return i[e];for(var n=e;n>1;n--)t*=n;return i[e]=t,t}})(),CatmullRom:function(i,e,t,n,s){var r=(t-i)*.5,o=(n-e)*.5,a=s*s,c=s*a;return(2*e-2*t+r+o)*c+(-3*e+3*t-2*r-o)*a+r*s+e}}},zc=(function(){function i(){}return i.nextId=function(){return i._nextId++},i._nextId=0,i})(),Ba=new Yh,wM=(function(){function i(e,t){this._isPaused=!1,this._pauseStart=0,this._valuesStart={},this._valuesEnd={},this._valuesStartRepeat={},this._duration=1e3,this._isDynamic=!1,this._initialRepeat=0,this._repeat=0,this._yoyo=!1,this._isPlaying=!1,this._reversed=!1,this._delayTime=0,this._startTime=0,this._easingFunction=_s.Linear.None,this._interpolationFunction=Ui.Linear,this._chainedTweens=[],this._onStartCallbackFired=!1,this._onEveryStartCallbackFired=!1,this._id=zc.nextId(),this._isChainStopped=!1,this._propertiesAreSetUp=!1,this._goToEnd=!1,this._object=e,typeof t=="object"?(this._group=t,t.add(this)):t===!0&&(this._group=Ba,Ba.add(this))}return i.prototype.getId=function(){return this._id},i.prototype.isPlaying=function(){return this._isPlaying},i.prototype.isPaused=function(){return this._isPaused},i.prototype.getDuration=function(){return this._duration},i.prototype.to=function(e,t){if(t===void 0&&(t=1e3),this._isPlaying)throw new Error("Can not call Tween.to() while Tween is already started or paused. Stop the Tween first.");return this._valuesEnd=e,this._propertiesAreSetUp=!1,this._duration=t<0?0:t,this},i.prototype.duration=function(e){return e===void 0&&(e=1e3),this._duration=e<0?0:e,this},i.prototype.dynamic=function(e){return e===void 0&&(e=!1),this._isDynamic=e,this},i.prototype.start=function(e,t){if(e===void 0&&(e=ds()),t===void 0&&(t=!1),this._isPlaying)return this;if(this._repeat=this._initialRepeat,this._reversed){this._reversed=!1;for(var n in this._valuesStartRepeat)this._swapEndStartRepeatValues(n),this._valuesStart[n]=this._valuesStartRepeat[n]}if(this._isPlaying=!0,this._isPaused=!1,this._onStartCallbackFired=!1,this._onEveryStartCallbackFired=!1,this._isChainStopped=!1,this._startTime=e,this._startTime+=this._delayTime,!this._propertiesAreSetUp||t){if(this._propertiesAreSetUp=!0,!this._isDynamic){var s={};for(var r in this._valuesEnd)s[r]=this._valuesEnd[r];this._valuesEnd=s}this._setupProperties(this._object,this._valuesStart,this._valuesEnd,this._valuesStartRepeat,t)}return this},i.prototype.startFromCurrentValues=function(e){return this.start(e,!0)},i.prototype._setupProperties=function(e,t,n,s,r){for(var o in n){var a=e[o],c=Array.isArray(a),l=c?"array":typeof a,u=!c&&Array.isArray(n[o]);if(!(l==="undefined"||l==="function")){if(u){var h=n[o];if(h.length===0)continue;for(var d=[a],m=0,_=h.length;m<_;m+=1){var g=this._handleRelativeValue(a,h[m]);if(isNaN(g)){u=!1,console.warn("Found invalid interpolation list. Skipping.");break}d.push(g)}u&&(n[o]=d)}if((l==="object"||c)&&a&&!u){t[o]=c?[]:{};var p=a;for(var f in p)t[o][f]=p[f];s[o]=c?[]:{};var h=n[o];if(!this._isDynamic){var b={};for(var f in h)b[f]=h[f];n[o]=h=b}this._setupProperties(p,t[o],h,s[o],r)}else(typeof t[o]>"u"||r)&&(t[o]=a),c||(t[o]*=1),u?s[o]=n[o].slice().reverse():s[o]=t[o]||0}}},i.prototype.stop=function(){return this._isChainStopped||(this._isChainStopped=!0,this.stopChainedTweens()),this._isPlaying?(this._isPlaying=!1,this._isPaused=!1,this._onStopCallback&&this._onStopCallback(this._object),this):this},i.prototype.end=function(){return this._goToEnd=!0,this.update(this._startTime+this._duration),this},i.prototype.pause=function(e){return e===void 0&&(e=ds()),this._isPaused||!this._isPlaying?this:(this._isPaused=!0,this._pauseStart=e,this)},i.prototype.resume=function(e){return e===void 0&&(e=ds()),!this._isPaused||!this._isPlaying?this:(this._isPaused=!1,this._startTime+=e-this._pauseStart,this._pauseStart=0,this)},i.prototype.stopChainedTweens=function(){for(var e=0,t=this._chainedTweens.length;e<t;e++)this._chainedTweens[e].stop();return this},i.prototype.group=function(e){return e?(e.add(this),this):(console.warn("tween.group() without args has been removed, use group.add(tween) instead."),this)},i.prototype.remove=function(){var e;return(e=this._group)===null||e===void 0||e.remove(this),this},i.prototype.delay=function(e){return e===void 0&&(e=0),this._delayTime=e,this},i.prototype.repeat=function(e){return e===void 0&&(e=0),this._initialRepeat=e,this._repeat=e,this},i.prototype.repeatDelay=function(e){return this._repeatDelayTime=e,this},i.prototype.yoyo=function(e){return e===void 0&&(e=!1),this._yoyo=e,this},i.prototype.easing=function(e){return e===void 0&&(e=_s.Linear.None),this._easingFunction=e,this},i.prototype.interpolation=function(e){return e===void 0&&(e=Ui.Linear),this._interpolationFunction=e,this},i.prototype.chain=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return this._chainedTweens=e,this},i.prototype.onStart=function(e){return this._onStartCallback=e,this},i.prototype.onEveryStart=function(e){return this._onEveryStartCallback=e,this},i.prototype.onUpdate=function(e){return this._onUpdateCallback=e,this},i.prototype.onRepeat=function(e){return this._onRepeatCallback=e,this},i.prototype.onComplete=function(e){return this._onCompleteCallback=e,this},i.prototype.onStop=function(e){return this._onStopCallback=e,this},i.prototype.update=function(e,t){var n=this,s;if(e===void 0&&(e=ds()),t===void 0&&(t=i.autoStartOnUpdate),this._isPaused)return!0;var r;if(!this._goToEnd&&!this._isPlaying)if(t)this.start(e,!0);else return!1;if(this._goToEnd=!1,e<this._startTime)return!0;this._onStartCallbackFired===!1&&(this._onStartCallback&&this._onStartCallback(this._object),this._onStartCallbackFired=!0),this._onEveryStartCallbackFired===!1&&(this._onEveryStartCallback&&this._onEveryStartCallback(this._object),this._onEveryStartCallbackFired=!0);var o=e-this._startTime,a=this._duration+((s=this._repeatDelayTime)!==null&&s!==void 0?s:this._delayTime),c=this._duration+this._repeat*a,l=function(){if(n._duration===0||o>c)return 1;var g=Math.trunc(o/a),p=o-g*a,f=Math.min(p/n._duration,1);return f===0&&o===n._duration?1:f},u=l(),h=this._easingFunction(u);if(this._updateProperties(this._object,this._valuesStart,this._valuesEnd,h),this._onUpdateCallback&&this._onUpdateCallback(this._object,u),this._duration===0||o>=this._duration)if(this._repeat>0){var d=Math.min(Math.trunc((o-this._duration)/a)+1,this._repeat);isFinite(this._repeat)&&(this._repeat-=d);for(r in this._valuesStartRepeat)!this._yoyo&&typeof this._valuesEnd[r]=="string"&&(this._valuesStartRepeat[r]=this._valuesStartRepeat[r]+parseFloat(this._valuesEnd[r])),this._yoyo&&this._swapEndStartRepeatValues(r),this._valuesStart[r]=this._valuesStartRepeat[r];return this._yoyo&&(this._reversed=!this._reversed),this._startTime+=a*d,this._onRepeatCallback&&this._onRepeatCallback(this._object),this._onEveryStartCallbackFired=!1,!0}else{this._onCompleteCallback&&this._onCompleteCallback(this._object);for(var m=0,_=this._chainedTweens.length;m<_;m++)this._chainedTweens[m].start(this._startTime+this._duration,!1);return this._isPlaying=!1,!1}return!0},i.prototype._updateProperties=function(e,t,n,s){for(var r in n)if(t[r]!==void 0){var o=t[r]||0,a=n[r],c=Array.isArray(e[r]),l=Array.isArray(a),u=!c&&l;u?e[r]=this._interpolationFunction(a,s):typeof a=="object"&&a?this._updateProperties(e[r],o,a,s):(a=this._handleRelativeValue(o,a),typeof a=="number"&&(e[r]=o+(a-o)*s))}},i.prototype._handleRelativeValue=function(e,t){return typeof t!="string"?t:t.charAt(0)==="+"||t.charAt(0)==="-"?e+parseFloat(t):parseFloat(t)},i.prototype._swapEndStartRepeatValues=function(e){var t=this._valuesStartRepeat[e],n=this._valuesEnd[e];typeof n=="string"?this._valuesStartRepeat[e]=this._valuesStartRepeat[e]+parseFloat(n):this._valuesStartRepeat[e]=this._valuesEnd[e],this._valuesEnd[e]=t},i.autoStartOnUpdate=!1,i})(),AM="25.0.0",CM=zc.nextId,On=Ba,RM=On.getAll.bind(On),DM=On.removeAll.bind(On),PM=On.add.bind(On),IM=On.remove.bind(On),NM=On.update.bind(On),FM={Easing:_s,Group:Yh,Interpolation:Ui,now:ds,Sequence:zc,nextId:CM,Tween:wM,VERSION:AM,getAll:RM,removeAll:DM,add:PM,remove:IM,update:NM};function LM(){let i,e,t,n={sphereOscillators:null,sphereGrainPlayers:null,cubeOscillators:null,lightingBarNoise:null,pulseOscillators:null,floatingModelAudio:null,reverbSend:null,delaySend:null},s,r=!1;const o=()=>(console.log("Initializing Audio Mixer"),i=new Je(.8).toDestination(),e=new zo({decay:5,wet:.5,preDelay:.1}),t=new Vo({delayTime:.25,feedback:.4,wet:.3}),Object.keys(n).forEach(_=>{n[_]=new Je(.8),_!=="reverbSend"&&_!=="delaySend"&&n[_].connect(i)}),n.reverbSend.connect(e),e.connect(i),n.delaySend.connect(t),t.connect(i),u(),{gainNodes:n,masterGain:i,reverbNode:e,delayNode:t}),a=(_,g)=>{if(!(!_||!n[g])){try{_.disconnect(bM)}catch{}if(_.connect(n[g]),g.includes("Oscillators")||g.includes("GrainPlayers")||g==="floatingModelAudio"){const p=new Uc;_.connect(p),p.connect(n.reverbSend,0),p.connect(n.delaySend,1)}console.log(`Connected ${g} to mixer`)}},c=(_,g)=>{if(!_)return;const p=_.getVolume(),f={setVolume:b=>{_.setVolume(p*b)}};l[g]=f,console.log(`Connected Three.js ${g} to mixer`)},l={},u=()=>{s=document.createElement("div"),s.id="audio-mixer",s.style.position="fixed",s.style.bottom="15px",s.style.right="15px",s.style.width="200px",s.style.backgroundColor="rgba(0, 0, 0, 0.7)",s.style.borderRadius="0px",s.style.padding="10px",s.style.color="#fff",s.style.fontFamily="Arial, sans-serif",s.style.zIndex="1000",s.style.display="none",s.style.boxShadow="0 0 20px rgba(197, 197, 197, 0.5)",s.style.backdropFilter="blur(10px)";const _=document.createElement("h2");_.textContent="",_.style.margin="0 0 15px 0",_.style.textAlign="center",_.style.color="rgba(188, 188, 188, 1)",s.appendChild(_),h(s,"Master Volume",.8,p=>{i.gain.value=p}),d(s,"Sound Sources"),h(s,"Sphere Oscillators",.8,p=>{n.sphereOscillators&&(n.sphereOscillators.gain.value=Math.min(1,Math.max(0,p)))}),h(s,"Sphere Grain Players",.8,p=>{n.sphereGrainPlayers&&(n.sphereGrainPlayers.gain.value=Math.min(1,Math.max(0,p)))}),h(s,"Cube Oscillators",.8,p=>{n.cubeOscillators&&(n.cubeOscillators.gain.value=Math.min(1,Math.max(0,p)))}),h(s,"Lighting Bar Noise",.8,p=>{n.lightingBarNoise&&(n.lightingBarNoise.gain.value=Math.min(1,Math.max(0,p)))}),h(s,"Pulse Oscillators",.8,p=>{n.pulseOscillators&&(n.pulseOscillators.gain.value=Math.min(1,Math.max(0,p)))}),h(s,"Floating Model Audio",.8,p=>{n.floatingModelAudio&&(n.floatingModelAudio.gain.value=Math.min(1,Math.max(0,p))),l.floatingModelAudio&&l.floatingModelAudio.setVolume(Math.min(1,Math.max(0,p)))}),d(s,"Effects"),h(s,"Reverb Amount",1,p=>{e.wet.value=Math.min(1,Math.max(0,p))}),h(s,"Delay Amount",.3,p=>{t.wet.value=Math.min(1,Math.max(0,p))}),h(s,"Delay Time",.25,p=>{t.delayTime.value=Math.min(2,Math.max(0,p*2))}),h(s,"Delay Feedback",.4,p=>{t.feedback.value=Math.min(1,Math.max(0,p))});const g=document.createElement("button");g.textContent="mixer",g.style.position="fixed",g.style.bottom="15px",g.style.right="15px",g.style.padding="10px 10px",g.style.backgroundColor="rgba(0, 0, 0, 0.7)",g.style.color="rgba(147, 147, 147, 1)",g.style.border="1px solid rgba(218, 218, 218, 1)",g.style.borderRadius="5px",g.style.cursor="pointer",g.style.zIndex="1001",g.style.boxShadow="0 0 10px rgba(146, 146, 146, 0.5)",g.onclick=()=>{r=!r,s.style.display=r?"block":"none",g.textContent=r?"mixer-":"mixer+"},document.body.appendChild(s),document.body.appendChild(g)},h=(_,g,p,f)=>{const b=document.createElement("div");b.style.marginBottom="10px";const T=document.createElement("div");T.textContent=g,T.style.marginBottom="5px",b.appendChild(T);const x=document.createElement("div");x.style.display="flex",x.style.alignItems="center";const y=document.createElement("input");y.type="range",y.min="0",y.max="1",y.step="0.01",y.value=p.toString(),y.style.flex="1",y.style.height="20px",y.style.accentColor="rgba(222, 222, 222, 1)";const E=document.createElement("span");E.textContent=p.toFixed(2),E.style.marginLeft="10px",E.style.width="40px",E.style.textAlign="right",y.oninput=()=>{const A=parseFloat(y.value),C=Math.min(1,Math.max(0,A));E.textContent=C.toFixed(2),f(C)},x.appendChild(y),x.appendChild(E),b.appendChild(x),_.appendChild(b)},d=(_,g)=>{const p=document.createElement("div");p.style.margin="15px 0",p.style.borderBottom="1px solid rgba(164, 164, 164, 1)",p.style.paddingBottom="5px",p.style.color="rgba(118, 118, 118, 1)",p.style.fontWeight="bold",p.textContent=g,_.appendChild(p)};return{init:o,connectNode:a,connectThreeAudio:c,updateAudioContext:_=>{_&&_.state==="running"?audioContextReady=!0:audioContextReady=!1},getGainNodes:()=>n,getMasterGain:()=>i,getReverbNode:()=>e,getDelayNode:()=>t}}const fi={zSpeed:.5,moduleSpawnDistance:150,moduleLifetime:100,fogNear:20,fogFar:180,fogColor:1705248},Nt={reverbDecay:10,reverbWet:1,delayTime:5,delayFeedback:0,delayWet:.1,masterVolume:-6,spatialRolloff:1,oscVolume:-15},qs={bloomStrength:.8,bloomRadius:.6,bloomThreshold:.7,saturation:1.4,brightness:.9};let Qn=new Dd,an=new rn(70,window.innerWidth/window.innerHeight,.1,500),Li=new wg({antialias:!0,alpha:!1}),Zn,$s,po,pu,mu,_u,gu=new ja,jh=!1,Go=!1,ws=0,ka=[],OM=0,Ys=0,js=0,Ii=0,Ni=0;const Wr=3e-4,vu=.95,qr=.005,$t={},UM=`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,BM=`
    uniform sampler2D tDiffuse;
    uniform vec2 lightPosition;
    uniform float exposure;
    uniform float decay;
    uniform float density;
    uniform float weight;
    uniform int samples;
    varying vec2 vUv;

    void main() {
      vec2 texCoord = vUv;
      vec2 deltaTextCoord = texCoord - lightPosition;
      deltaTextCoord *= 1.0 / float(samples) * density;
      
      vec4 color = texture2D(tDiffuse, texCoord);
      float illuminationDecay = 1.0;
      
      for(int i = 0; i < 100; i++) {
        if(i >= samples) break;
        texCoord -= deltaTextCoord;
        vec4 texSample = texture2D(tDiffuse, texCoord);
        texSample *= illuminationDecay * weight;
        color += texSample;
        illuminationDecay *= decay;
      }
      
      gl_FragColor = color * exposure;
    }
  `,Zh=i=>{const e={id:OM++,type:i,mesh:null,audio:null,position:new U((Math.random()-.5)*40,(Math.random()-.5)*30,ws+fi.moduleSpawnDistance),velocity:new U((Math.random()-.5)*.02,(Math.random()-.5)*.02,(Math.random()-.5)*.05),rotation:new U(Math.random()*Math.PI*2,Math.random()*Math.PI*2,Math.random()*Math.PI*2),rotationSpeed:new U((Math.random()-.5)*.003,(Math.random()-.5)*.003,(Math.random()-.5)*.003),scale:.5+Math.random()*1,birthZ:ws+fi.moduleSpawnDistance};let t,n;i==="sphere"?(t=new Wa(2*e.scale,32,32),n=new kt({uniforms:{time:{value:0},color1:{value:new We(16711935)},color2:{value:new We(65535)}},vertexShader:`
          varying vec3 vPosition;
          varying vec3 vNormal;
          void main() {
            vPosition = position;
            vNormal = normal;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,fragmentShader:`
          uniform float time;
          uniform vec3 color1;
          uniform vec3 color2;
          varying vec3 vPosition;
          varying vec3 vNormal;
          
          void main() {
            float pattern = sin(vPosition.y * 5.0 + time * 0.3) * 0.5 + 0.5;
            vec3 color = mix(color1, color2, pattern);
            float fresnel = pow(1.0 - abs(dot(vNormal, vec3(0, 0, 1))), 2.0);
            color += fresnel * 0.5;
            gl_FragColor = vec4(color, 0.6);
          }
        `,transparent:!0,blending:2,side:2})):i==="cube"?(t=new Rs(3*e.scale,3*e.scale,3*e.scale),n=new kt({uniforms:{time:{value:0},color1:{value:new We(16711833)},color2:{value:new We(16776960)}},vertexShader:`
          varying vec2 vUv;
          varying vec3 vNormal;
          void main() {
            vUv = uv;
            vNormal = normal;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,fragmentShader:`
          uniform float time;
          uniform vec3 color1;
          uniform vec3 color2;
          varying vec2 vUv;
          varying vec3 vNormal;
          
          void main() {
            // Grid pattern
            float grid = 0.0;
            if (mod(vUv.x * 10.0, 1.0) < 0.1 || mod(vUv.y * 10.0, 1.0) < 0.1) {
              grid = 1.0;
            }
            
            vec3 color = mix(color1, color2, vUv.y);
            color = mix(color, vec3(1.0), grid * 0.5);
            
            float fresnel = pow(1.0 - abs(dot(vNormal, vec3(0, 0, 1))), 3.0);
            color += fresnel * 0.7;
            
            gl_FragColor = vec4(color, 0.5);
          }
        `,transparent:!0,blending:2,side:2})):(t=new qa(2*e.scale,.4*e.scale,16,32),n=new _o({color:new We(Math.random(),Math.random(),Math.random()),transparent:!0,opacity:.4,wireframe:!0})),e.mesh=new Tn(t,n),e.mesh.position.copy(e.position),e.mesh.rotation.set(e.rotation.x,e.rotation.y,e.rotation.z),Qn.add(e.mesh);const s=new We(.5+Math.random()*.5,.5+Math.random()*.5,.5+Math.random()*.5);if(e.light=new Od(s,.8,30),e.light.position.copy(e.position),Qn.add(e.light),Go&&Xh.state==="running")try{const r=27.5+Math.random()*200,o=["sine","triangle","sawtooth"],a=new gt({frequency:r,type:o[Math.floor(Math.random()*o.length)],volume:Nt.oscVolume}).start(),c=new Ic({frequency:.1+Math.random()*.3,min:r*.95,max:r*1.05}).start();c.connect(a.frequency);const l=new Fc({type:"lowpass",frequency:800+Math.random()*1200,Q:1}),u=new ko(.8),h=new Vc({positionX:e.position.x,positionY:e.position.y,positionZ:e.position.z,rolloffFactor:Nt.spatialRolloff,distanceModel:"exponential",maxDistance:1e4,refDistance:10});a.connect(u.a),a.connect(l),l.connect(u.b),u.connect(h),$s&&po?(h.connect($s),h.connect(po)):h.toDestination(),e.audio={osc:a,lfo:c,filter:l,filterWet:u,panner:h}}catch(r){console.error("Error creating module audio:",r)}return ka.push(e),e},kM=()=>{const i=Date.now()*.001;if(ka.forEach((e,t)=>{if(e.position.x+=e.velocity.x,e.position.y+=e.velocity.y,e.position.z+=e.velocity.z,Math.abs(e.position.x)>25&&(e.velocity.x*=-.9),Math.abs(e.position.y)>20&&(e.velocity.y*=-.9),e.mesh){e.mesh.position.copy(e.position),e.mesh.rotation.x+=e.rotationSpeed.x,e.mesh.rotation.y+=e.rotationSpeed.y,e.mesh.rotation.z+=e.rotationSpeed.z,e.mesh.material.uniforms&&e.mesh.material.uniforms.time&&(e.mesh.material.uniforms.time.value=i);const n=1+Math.sin(i*.5+e.id)*.1;e.mesh.scale.setScalar(e.scale*n)}if(e.light&&(e.light.position.copy(e.position),e.light.intensity=.5+Math.sin(i*.3+e.id)*.3),e.audio&&e.audio.panner){e.audio.panner.positionX.value=e.position.x,e.audio.panner.positionY.value=e.position.y,e.audio.panner.positionZ.value=e.position.z;const n=ws-e.position.z;if(n>0){const s=Math.max(0,1-n/30);e.audio.osc.volume.value=Nt.oscVolume+s*15}else e.audio.osc.volume.value=Nt.oscVolume}e.position.z<ws-fi.moduleLifetime&&(e.mesh&&Qn.remove(e.mesh),e.light&&Qn.remove(e.light),e.audio&&(e.audio.osc&&e.audio.osc.stop(),e.audio.lfo&&e.audio.lfo.stop(),e.audio.osc&&e.audio.osc.dispose(),e.audio.lfo&&e.audio.lfo.dispose(),e.audio.filter&&e.audio.filter.dispose(),e.audio.panner&&e.audio.panner.dispose()),ka.splice(t,1))}),Math.random()<.03){const e=["sphere","cube","pulse"],t=e[Math.floor(Math.random()*e.length)];Zh(t)}},VM=()=>{Li.setSize(window.innerWidth,window.innerHeight),Li.setPixelRatio(Math.min(window.devicePixelRatio,2)),Li.setClearColor(fi.fogColor,1),an.position.set(0,0,0),an.lookAt(0,0,100),Qn.fog=new Ga(fi.fogColor,fi.fogNear,fi.fogFar);const i=new kd(4465220,.3);Qn.add(i);const e=new Bd(16711935,.5);e.position.set(10,10,50),Qn.add(e);const t=document.getElementById("three-container");if(t){for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(Li.domElement)}window.addEventListener("resize",()=>{an.aspect=window.innerWidth/window.innerHeight,an.updateProjectionMatrix(),Li.setSize(window.innerWidth,window.innerHeight),Zn&&Zn.setSize(window.innerWidth,window.innerHeight)})},zM=()=>{Zn=new Pg(Li);const i=new Ig(Qn,an);Zn.addPass(i);const e={uniforms:{tDiffuse:{value:null},lightPosition:{value:new Ue(.5,.5)},exposure:{value:.3},decay:{value:.95},density:{value:.5},weight:{value:.4},samples:{value:50}},vertexShader:UM,fragmentShader:BM},t=new wa(e);Zn.addPass(t);const n=new xs(new Ue(window.innerWidth,window.innerHeight),qs.bloomStrength,qs.bloomRadius,qs.bloomThreshold);Zn.addPass(n);const s={uniforms:{tDiffuse:{value:null},saturation:{value:qs.saturation},brightness:{value:qs.brightness},contrast:{value:1.1}},vertexShader:`
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        uniform sampler2D tDiffuse;
        uniform float saturation;
        uniform float brightness;
        uniform float contrast;
        varying vec2 vUv;
        
        void main() {
          vec4 color = texture2D(tDiffuse, vUv);
          
          // Brightness
          color.rgb *= brightness;
          
          // Contrast
          color.rgb = (color.rgb - 0.5) * contrast + 0.5;
          
          // Saturation
          float luminance = dot(color.rgb, vec3(0.299, 0.587, 0.114));
          color.rgb = mix(vec3(luminance), color.rgb, saturation);
          
          gl_FragColor = color;
        }
      `},r=new wa(s);Zn.addPass(r)},Va=async()=>{try{console.log("🎵 Starting audio setup..."),await sM(),console.log("✓ Tone.js started, context state:",Xh.state),mu=new vl,an.add(mu),$s=new zo({decay:Nt.reverbDecay,wet:Nt.reverbWet}),await $s.generate(),$s.toDestination(),console.log("✓ Reverb configured:",Nt.reverbDecay+"s decay,",Nt.reverbWet*100+"% wet"),po=new Vo({delayTime:Nt.delayTime,feedback:Nt.delayFeedback,wet:Nt.delayWet}),po.toDestination(),console.log("✓ Delay configured:",Nt.delayTime+"s time,",Nt.delayFeedback*100+"% feedback,",Nt.delayWet*100+"% wet"),_u=LM();const i=_u.init();return Ua().volume.value=Nt.masterVolume,console.log("✓ Master volume set to:",Nt.masterVolume,"dB"),pu=new vl,an.add(pu),Go=!0,jh=!0,console.log("✨ Audio setup complete! Continuous spatial audio modules running..."),!0}catch(i){return console.error("❌ Audio setup error:",i),!1}},$h=()=>{requestAnimationFrame($h),gu.getDelta();const i=gu.getElapsedTime();ws+=fi.zSpeed,an.position.z=ws,($t.ArrowLeft||$t.a||$t.A)&&(Ni+=Wr),($t.ArrowRight||$t.d||$t.D)&&(Ni-=Wr),($t.ArrowUp||$t.w||$t.W)&&(Ii+=Wr),($t.ArrowDown||$t.s||$t.S)&&(Ii-=Wr),Ii*=vu,Ni*=vu,Ii=Math.max(-qr,Math.min(qr,Ii)),Ni=Math.max(-qr,Math.min(qr,Ni)),Ys+=Ii,js+=Ni,Ys=Math.max(-Math.PI/4,Math.min(Math.PI/4,Ys)),js=Math.max(-Math.PI/3,Math.min(Math.PI/3,js)),an.rotation.x=Ys,an.rotation.y=js;const e=Math.sin(i*.1)*.2,t=Math.cos(i*.15)*.15;an.position.x=e,an.position.y=t,kM(),FM.update(),Zn?Zn.render():Li.render(Qn,an)},xu=async()=>{try{console.log("🌊 Initializing Vaporwave Z-Tunnel Experience..."),VM(),zM();for(let e=0;e<15;e++){const t=["sphere","cube","pulse"],n=t[Math.floor(Math.random()*t.length)];Zh(n)}const i=document.getElementById("start-audio-btn");try{await Va(),i&&(i.style.display="none")}catch{console.log("Auto-start failed, showing button"),i&&(i.style.display="block",i.addEventListener("click",async()=>{await Va(),i.style.display="none"}))}return $h(),console.log("✨ Z-Tunnel initialized successfully"),!0}catch(i){return console.error("Error initializing:",i),!1}};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",xu):xu();["click","touchstart","keydown"].forEach(i=>{document.addEventListener(i,async()=>{if(!Go&&!jh){await Va();const e=document.getElementById("start-audio-btn");e&&(e.style.display="none")}},{once:!0})});window.addEventListener("scrollVolumeChange",i=>{if(Go&&Ua()){const e=i.detail.volumeFactor;let t;if(e<=.001)t=-100;else{const n=20*Math.log10(e);t=Nt.masterVolume+n}Ua().volume.rampTo(t,.1)}});window.addEventListener("keydown",i=>{$t[i.key]=!0});window.addEventListener("keyup",i=>{$t[i.key]=!1});window.addEventListener("keydown",i=>{(i.key===" "||i.key==="Spacebar")&&(Ys=0,js=0,Ii=0,Ni=0,i.preventDefault())});
