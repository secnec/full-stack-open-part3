(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,n){e.exports=n(42)},40:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var a=n(10),r=n.n(a),l=n(0),o=n.n(l),i=n(11),u=n(12),s=n(14),c=n(13),m=n(15),d=function(e){var t=e.value,n=e.filterFunction;return o.a.createElement("div",null,"Rajaa n\xe4ytett\xe4vi\xe4: ",o.a.createElement("input",{value:t,onChange:n}))},f=function(e){var t=e.persons,n=e.search,a=(e.filter,e.onClick),r=t.filter(function(e){return n(e)}).map(function(e){return o.a.createElement("tr",{key:e.id},o.a.createElement("td",null,e.name),o.a.createElement("td",null,e.number),o.a.createElement("td",null,o.a.createElement("button",{type:"button",onClick:function(){return a(e)}},"Poista")))});return o.a.createElement("div",null,o.a.createElement("table",null,o.a.createElement("tbody",null,r)))},h=n(2),p=n.n(h),v="/api/persons",g={getAll:function(){return p.a.get(v).then(function(e){return e.data})},createPerson:function(e){return p.a.post(v,e).then(function(e){return e.data})},deletePerson:function(e){return console.log(e.id),p.a.delete("".concat(v,"/").concat(e.id)).then(function(e){return e.data})},modifyPerson:function(e){return p.a.put("".concat(v,"/").concat(e.id),e).then(function(e){return e.data})}},w=function(e){var t=e.message;return""===t?null:o.a.createElement("div",{className:"message"},t)},E=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(c.a)(t).call(this,e))).addPerson=function(e){e.preventDefault();var t={name:n.state.newName,number:n.state.newNumber},a=n.state.persons.map(function(e){return e.name});""===t.name?window.alert("Anna henkil\xf6lle nimi"):!1===a.includes(t.name)?n.createPerson(t):n.updatePerson(t)},n.createPerson=function(e){g.createPerson(e).then(function(e){n.setState({persons:n.state.persons.concat(e),newName:"",newNumber:"",filter:"",message:e.name+" lis\xe4ttiin palvelimelle"}),setTimeout(function(){n.setState({message:""})},4e3)})},n.updatePerson=function(e){if(!0===window.confirm(e.name+" on jo luettelossa - korvataanko vanha numero uudella?")){var t=n.state.persons.find(function(t){return t.name===e.name});t.number=n.state.newNumber,g.modifyPerson(t).catch(function(a){!0===window.confirm("Henkil\xf6n '".concat(t.name,"' tiedot on jo poistettu palvelimelta - lis\xe4t\xe4\xe4nk\xf6 antamasi tiedot uudelleen palvelimelle?"))&&n.createPerson(e)}).then(function(){return g.getAll().then(function(t){n.setState({persons:t,newName:"",newNumber:"",filter:"",message:e.name+" numeroa muutettiin"}),setTimeout(function(){n.setState({message:""})},4e3)})})}},n.handleAddPerson=function(e){console.log(e.target.value),n.setState({newName:e.target.value})},n.handleAddNum=function(e){console.log(e.target.value),n.setState({newNumber:e.target.value})},n.handleFind=function(e){console.log(e.target.value),n.setState({filter:e.target.value})},n.findPerson=function(e){var t=e.name+" "+e.number;return 0===n.state.filter.length||t.match(new RegExp(n.state.filter,"i"))},n.onClick=function(e){if(window.confirm("Haluatko varmasti poistaa henkil\xf6n "+e.name)){console.log(e),g.deletePerson(e).catch(function(t){window.alert("Henkil\xf6\xe4 nimelt\xe4 '".concat(e.name,"' ei l\xf6ydy palvelimelta"))});var t=n.state.persons.filter(function(t){return t.id!==e.id});n.setState({persons:t,message:e.name+" poistettiin palvelimelta"}),setTimeout(function(){n.setState({message:""})},4e3)}},n.state={persons:[],newName:"",newNumber:"",filter:"",message:""},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;console.log("did mount"),g.getAll().then(function(t){e.setState({persons:t})})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement("h1",null,"Puhelinluettelo"),o.a.createElement(w,{message:this.state.message}),o.a.createElement("form",{onSubmit:this.findPerson},o.a.createElement(d,{value:this.state.filter,filterFunction:this.handleFind})),o.a.createElement("h2",null,"Lis\xe4\xe4 uusi"),o.a.createElement("form",{onSubmit:this.addPerson},o.a.createElement("div",null,"nimi: ",o.a.createElement("input",{value:this.state.newName,onChange:this.handleAddPerson})),o.a.createElement("div",null,"numero: ",o.a.createElement("input",{value:this.state.newNumber,onChange:this.handleAddNum})),o.a.createElement("div",null,o.a.createElement("button",{type:"submit"},"lis\xe4\xe4"))),o.a.createElement("h2",null,"Numerot"),o.a.createElement(f,{search:function(t){return e.findPerson(t)},persons:this.state.persons,onClick:this.onClick}))}}]),t}(o.a.Component);n(40);r.a.render(o.a.createElement(E,null),document.getElementById("root"))}},[[16,2,1]]]);
//# sourceMappingURL=main.f41f77cc.chunk.js.map