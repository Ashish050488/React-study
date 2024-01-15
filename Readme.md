DAY 1
const heading = React.createElement("h1",{},"hello world from react");

{} = this blank object is the place where we palce attributes to the tag

console.log(heading); // it object

root.render()  // Reander method just take a object and put it up convert it into tags and put it in dom, in other words its converrts object intho html or whatever needed and show in browser

Day2

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "i am an h1 tag")
    // this is for  single  h1 tag what if we want to create mutliple tags sibling like "h1" and "h2". how do we do it?
    //THE ANSWER IS PUT IT INSIDE AN ARRAY THIS IS ALSO APLLIED FOR SIMILAR SIBILING OF PARENT DIV
  )
);



<!-- <div id="root">
        <h1>ashish is here!</h1>
        <!-- if any thing is inside the root root.render() method will replace it it will not as first html code will print and and then js file after that js code the root.render(). this happens very fast  -->
        <!-- ROOT.RENDER()  will only replace the code inside root div code above and below root div will be left untuched -->
</div> -->

