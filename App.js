const headingEle = React.createElement("h1",{id:"heading", class:"myClass"}, "hellow worlsdfghjgfdgd from the react!");
const childEle = React.createElement("div", {id:"child", class:"child-ele"}, headingEle);
const parentEle = React.createElement("div", {id:"parent", class:"parent-ele"}, [headingEle, childEle, headingEle], [headingEle, childEle, headingEle]);
console.log(parentEle);
nbvn
const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(parentEle);