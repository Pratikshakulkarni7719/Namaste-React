/* 
  <div id="root">
   <h1>Welcome to react</h1>
  </div>

 */

/* 
  <div id="parent">
    <div id="child1">
    <h1>This is heading 1</h1>
    <h1>This is heading 2</h1>
    </div>
     <div id="child2">
    <h1>This is heading 1</h1>
    <h1>This is heading 2</h1>
    </div>
  </div>
   */

const div = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "This is 1st heading"),
    React.createElement("h1", {}, "This is 2nd heading"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "This is 1st heading"),
    React.createElement("h1", {}, "This is 2nd heading"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(div);
