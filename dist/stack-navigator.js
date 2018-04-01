export class StackState{get options(){return this.options}set options(t){this.options=t}get viewController(){return this.viewController}set viewController(t){this.viewController=t}};export class StackNavigator{constructor(t,e){this.stack=[e],this.passiveController=null,this.transition=t,this.renderRootView(e)}push(t){const e=this.stack[this.stack.length-2];this.stack.push(t),e&&this.passiveController.render().remove(),this.showCurrentViewAndHidePrevious(t.viewController)}pop(){const t=this.stack[this.stack.length-3];this.stack.pop(),this.showPreviousViewAndDeleteCurrent(t)}renderRootView(t){this.activeController=new t.viewController(t.props),this.activeController.navigator=this,this.insertNavigationBarForPush();const e=this.activeController.render();"cover-vertical"==this.transition?e.style.transform="translateY(0)":"cover-horizontal"==this.transition&&(e.style.transform="translateX(0)"),e.style.opacity=1,e.style.transition="transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",document.body.appendChild(e),e.addEventListener("dom-complete",t=>{alert("toto")}),setTimeout(t=>{const s=e.querySelector("scell-navigation-bar");s.leftSlotAssignedNode.hide(),s.shadowRoot.querySelector(".center-zone > span").style.transition="transform 0.2s  cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)",e.style.paddingTop=getComputedStyle(s).height},100)}insertNavigationBarForPush(){const t=this.stack[this.stack.length-2],e=this.stack[this.stack.length-1].options.title||`Title${this.stack.length}`;let s="";t&&(s=t.options.title||"Back");this.activeController.render().insertAdjacentHTML("afterbegin",`<scell-navigation-bar anim-back-title="true" title="${e}" back-title="${s}"><scell-back-button/></scell-navigation-bar>`);this.activeController.render().querySelector("scell-navigation-bar").navigator=this}insertNavigationBarForPop(){this.stack[this.stack.length-1];const t=this.stack[this.stack.length-2],e=this.stack[this.stack.length-3],s=t.options.title||`Title${this.stack.length}`;let o="";e&&(o=e.options.title||"Back");this.passiveController.render().insertAdjacentHTML("afterbegin",`<scell-navigation-bar title="${s}" back-title="${o}"><scell-back-button></scell-back-button></scell-navigation-bar>`);this.activeController.render().querySelector("scell-navigation-bar").navigator=this}showCurrentViewAndHidePrevious(t){this.passiveController=this.activeController,this.activeController=new t(this.activeController.props),this.activeController.navigator=this,this.insertNavigationBarForPush();const e=this.passiveController.render(),s=this.activeController.render();document.body.appendChild(s);const o=e.querySelector("scell-navigation-bar");s.style.paddingTop=getComputedStyle(o).height;const r=s.querySelector("scell-navigation-bar"),i=r.shadowRoot.querySelector(".center-zone > span"),n=r.shadowRoot.querySelector(".back-zone > span");n.parentElement.onclick=(t=>{this.pop()});const a=o.shadowRoot.querySelector(".center-zone > span"),l=r.leftSlotAssignedNode;"cover-vertical"==this.transition?(s.style.transform="translateY(10%)",s.style.opacity=.5):(s.style.transform="translateX(100%)",i.style.opacity=0,n.style.opacity=.3,a.style.opacity=0,l.style.opacity=0),setTimeout(t=>{s.style.transition="transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",n.style.transition="transform 0.2s 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.2s 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",i.style.transition="transform 0.2s  cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.4s 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",l.style.transition="opacity 0.4s 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)";const o=e.shadowRoot.querySelector(".shadow-pane");o.style.display="",l.style.opacity=1,setTimeout(t=>{"cover-vertical"==this.transition?(s.style.transform="translateY(0)",s.style.opacity=1,setTimeout(t=>{e.style.display="none"},500)):"cover-horizontal"==this.transition&&(e.style.transform="translateX(-30%)",o.style.opacity=.4,s.style.transform="translateX(0)",i.style.opacity=1,n.style.transform="translateX(0%)",n.style.opacity=1,setTimeout(t=>{e.style.display="none"},500))},100)},16)}showPreviousViewAndDeleteCurrent(t){const e=null!=t?t.viewController:null,s=this.passiveController.render(),o=this.activeController.render(),r=s.shadowRoot.querySelector(".shadow-pane");s.style.display="";const i=s.querySelector("scell-navigation-bar"),n=o.querySelector("scell-navigation-bar"),a=(n.shadowRoot.querySelector(".center-zone > span"),n.shadowRoot.querySelector(".back-zone > span")),l=i.shadowRoot.querySelector(".center-zone > span"),c=i.shadowRoot.querySelector(".back-zone > span"),h=i.leftSlotAssignedNode;"cover-vertical"==!this.transition&&(l.style.opacity=0,c.style.transform="translateX(-50%)",a.style.opacity=.3,h.style.opacity=0),setTimeout(n=>{if("cover-vertical"==this.transition?(s.style.display="block",o.style.transform="translateY(10%)",o.style.opacity=0):(a.style.opacity=0,l.style.opacity=1,o.style.transform="translateX(100%)",s.style.transform="translateX(0%)",c.style.transform="translateX(0%)",r.style.opacity=0,h.style.opacity=1,setTimeout(t=>{r.style.display="none"},400)),!e){this.passiveController.render().querySelector("scell-navigation-bar").leftSlotAssignedNode.hide()}setTimeout(s=>{o.remove(),this.activeController=this.passiveController,e&&(this.passiveController=new e(t.props),this.passiveController.router=this,this.insertNavigationBarForPop(),this.passiveController.render().style.paddingTop=getComputedStyle(i).height,document.body.insertBefore(this.passiveController.render(),this.activeController.render()),"cover-vertical"==this.transition?this.passiveController.render().style.transform="":(this.passiveController.render().style.transform="translateX(-30%)",this.passiveController.render().style.transition="transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)"))},500)},100)}};