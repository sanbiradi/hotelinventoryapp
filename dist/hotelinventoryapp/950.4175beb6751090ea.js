"use strict";(self.webpackChunkhotelinventoryapp=self.webpackChunkhotelinventoryapp||[]).push([[950],{6950:(C,l,c)=>{c.r(l),c.d(l,{CommentModule:()=>i});var u=c(6895),p=c(8869),t=c(4650),d=c(529);class m{constructor(o){this.http=o}getComments(){return this.http.get("https://jsonplaceholder.typicode.com/commentss")}}function h(e,o){if(1&e&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA()()),2&e){const n=o.$implicit;t.xp6(2),t.hij(" ",n.id," "),t.xp6(2),t.hij(" ",n.postId," "),t.xp6(2),t.hij(" ",n.name," "),t.xp6(2),t.hij(" ",n.email," ")}}m.\u0275fac=function(o){return new(o||m)(t.LFG(d.eN))},m.\u0275prov=t.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"});class a{constructor(o,n){this.commentService=o,this.activatedRoute=n,this.comments$=this.commentService.getComments()}ngOnInit(){}}a.\u0275fac=function(o){return new(o||a)(t.Y36(m),t.Y36(p.gz))},a.\u0275cmp=t.Xpm({type:a,selectors:[["hinv-comment"]],decls:12,vars:3,consts:[[1,"table"],[4,"ngFor","ngForOf"]],template:function(o,n){1&o&&(t.TgZ(0,"table",0)(1,"tr")(2,"th"),t._uU(3," ID "),t.qZA(),t.TgZ(4,"th"),t._uU(5," postID "),t.qZA(),t.TgZ(6,"th"),t._uU(7," Name "),t.qZA(),t.TgZ(8,"th"),t._uU(9," Email "),t.qZA()(),t.YNc(10,h,9,4,"tr",1),t.ALo(11,"async"),t.qZA()),2&o&&(t.xp6(10),t.Q6J("ngForOf",t.lcZ(11,1,n.comments$)))},dependencies:[u.sg,u.Ov]});class r{constructor(o){this.commentService=o}resolve(o,n){return this.commentService.getComments()}}r.\u0275fac=function(o){return new(o||r)(t.LFG(m))},r.\u0275prov=t.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"});const f=[{path:"",component:a,resolve:{comment:r}}];class s{}s.\u0275fac=function(o){return new(o||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[p.Bz.forChild(f),p.Bz]});class i{}i.\u0275fac=function(o){return new(o||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[u.ez,s]})}}]);