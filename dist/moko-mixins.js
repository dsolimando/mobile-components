export default{render(){return this.$el},destroy(){this.render().remove(),this.navigator&&this.navigator.onhashchange&&removeEventListener("hashchange",this.navigator.onhashchange)}};