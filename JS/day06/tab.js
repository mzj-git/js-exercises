function Tab(btns, contents){
  var _this = this;   // 存 this
  this.btns = btns;
  this.contents = contents;
  this.len = this.btns.length;
  for(var i=0;i<this.len;i++){
    (function(index){
      this.btns[index].onclick = function(){
        _this.tab(index)
      }
    })(i)
  }
}
Tab.prototype.tab = function(index){
  for(var j=0;j<this.len;j++){
    this.btns[j].classList.remove('active')
    this.contents[j].classList.remove('active')
  }
  this.btns[index].classList.add('active')
  this.contents[index].classList.add('active')
}