/**
 * <div id="parent">
 *          <div id="child">
 *              <h1> i am an h1 tag</h1>
 *          </div>
 * </div>
 * 
 * 
 * 
 * ReactElement(object) => HTML(Browser understands)
 */




const parent = React.createElement(
    "div",
    { id: "parent" },
    React.createElement(
        "div",
        { id: "child" },
        [
            React.createElement("h1", {}, "i am an h1 tag"),
            React.createElement("h2", {}, 'i am an h1 tag')
        ]
    )
);

console.log(parent);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent)
