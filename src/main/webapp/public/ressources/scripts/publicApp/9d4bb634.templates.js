Ember.TEMPLATES.application=Ember.Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{};var f,g,h="",i=this.escapeExpression;return e.buffer.push('<div>\n    <nav class="navbar navbar-default navbar-fixed-top" role="navigation">\n        <div class="navbar-header">\n            <button type="button" class="navbar-toggle" >\n                <span class="sr-only">Toggle navigation</span>\n                <span class="icon-bar"></span>\n                <span class="icon-bar"></span>\n                <span class="icon-bar"></span>\n            </button>\n            <a class="navbar-brand" href="#">Upemgur</a>\n            <a class="navbar-brand" href="/upemgur/index">Login</a>\n        </div>\n\n    </nav>\n</div>\n<div class="col-md-9">\n            '),f={},g={},e.buffer.push(i(c._triageMustache.call(b,"outlet",{hash:{},contexts:[b],types:["ID"],hashContexts:g,hashTypes:f,data:e}))),e.buffer.push("\n</div>"),h}),Ember.TEMPLATES.index=Ember.Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{},e.buffer.push('<div class="well welcome">\n    Welcome to Yeoman and Ember.js!\n</div>\n\n')}),Ember.TEMPLATES.modal=Ember.Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{};var f,g,h="",i=this.escapeExpression;return e.buffer.push('<div class="modal-backdrop fade">&nbsp;</div>  \r\n<div class="modal fade show" >\r\n	<div class="modal-dialog">\r\n		<div class="modal-content">\r\n			<div class="modal-header">\r\n				<button type="button" class="close" '),f={target:b},g={target:"STRING"},e.buffer.push(i(c.action.call(b,"closeErrorView",{hash:{target:"view"},contexts:[b],types:["ID"],hashContexts:f,hashTypes:g,data:e}))),e.buffer.push(">&times;</button>\r\n				<h4>"),g={},f={},e.buffer.push(i(c._triageMustache.call(b,"header",{hash:{},contexts:[b],types:["ID"],hashContexts:f,hashTypes:g,data:e}))),e.buffer.push('</h4>\r\n			</div>\r\n			<div class="modal-body">\r\n				<p>'),g={},f={},e.buffer.push(i(c._triageMustache.call(b,"content",{hash:{},contexts:[b],types:["ID"],hashContexts:f,hashTypes:g,data:e}))),e.buffer.push('</p>\r\n			</div>\r\n			<div class="modal-footer">\r\n				<a href="#" class="btn btn-primary" '),f={target:b},g={target:"STRING"},e.buffer.push(i(c.action.call(b,"closeErrorView",{hash:{target:"view"},contexts:[b],types:["ID"],hashContexts:f,hashTypes:g,data:e}))),e.buffer.push(">Close</a>\r\n			</div>\r\n		</div>\r\n	</div>\r\n</div>\r\n"),h}),Ember.TEMPLATES.publicImage=Ember.Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{};var f,g,h,i,j="",k=c.helperMissing,l=this.escapeExpression;return e.buffer.push('<div class="clientImage">\r\n	<div class="clientImage">\r\n		<img id="clientImageUploaded" '),g={src:b},h={src:"ID"},i={hash:{src:"base64"},contexts:[],types:[],hashContexts:g,hashTypes:h,data:e},e.buffer.push(l((f=c["bind-attr"]||b["bind-attr"],f?f.call(b,i):k.call(b,"bind-attr",i)))),e.buffer.push(' class="img-thumbnail" width="300" height="300" align="middle">\r\n	</div>\r\n\r\n	<h5 class="alert alert-info" role="alert">\r\n		Exif : </br>\r\n		'),h={},g={},e.buffer.push(l(c._triageMustache.call(b,"imageExif",{hash:{},contexts:[b],types:["ID"],hashContexts:g,hashTypes:h,data:e}))),e.buffer.push("\r\n	</h5>\r\n</div>\r\n"),j}),Ember.TEMPLATES.publicImages=Ember.Handlebars.template(function(a,b,c,d,e){function f(a,b){var d,e,f,h,i,j="";return b.buffer.push("\r\n                                  "),f={},h={},i={hash:{},inverse:n.noop,fn:n.program(2,g,b),contexts:[a,a],types:["STRING","ID"],hashContexts:h,hashTypes:f,data:b},d=c["link-to"]||a["link-to"],e=d?d.call(a,"publicImage","image",i):l.call(a,"link-to","publicImage","image",i),(e||0===e)&&b.buffer.push(e),b.buffer.push("\r\n                                "),j}function g(a,b){var d,e,f,g,h="";return b.buffer.push('\r\n                                    <li class="list-group-item">'),e={},f={},g={hash:{},contexts:[a],types:["ID"],hashContexts:f,hashTypes:e,data:b},b.buffer.push(m((d=c.getImageName||a.getImageName,d?d.call(a,"image.url",g):l.call(a,"getImageName","image.url",g)))),b.buffer.push("</li>\r\n                                  "),h}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{};var h,i,j,k="",l=c.helperMissing,m=this.escapeExpression,n=this;return e.buffer.push('\r\n<div class="container" id="main">\r\n<div class="row">\r\n    <div>\r\n        <div class="col-md-3">\r\n            <div class="sidebar-nav">\r\n\r\n                <div class="panel panel-primary">\r\n                         <div class="panel-heading">\r\n                         <h3 class="panel-title">Public Pictures</h3>\r\n                      </div>\r\n                      <div class="panel-body">\r\n                        \r\n                        <ul class="list-group">\r\n                                '),i={},j={},h=c.each.call(b,"image","in","model",{hash:{},inverse:n.noop,fn:n.program(1,f,e),contexts:[b,b,b],types:["ID","ID","ID"],hashContexts:j,hashTypes:i,data:e}),(h||0===h)&&e.buffer.push(h),e.buffer.push('\r\n                        </ul>\r\n                       \r\n\r\n                      </div>\r\n                </div>\r\n\r\n               \r\n               \r\n            </div>\r\n        </div>\r\n        <div class="col-md-9">\r\n            '),i={},j={},e.buffer.push(m(c._triageMustache.call(b,"outlet",{hash:{},contexts:[b],types:["ID"],hashContexts:j,hashTypes:i,data:e}))),e.buffer.push("\r\n        </div>\r\n    </div>\r\n</div>\r\n</div>\r\n\r\n"),k});