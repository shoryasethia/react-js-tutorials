[Article](https://github.com/acdlite/react-fiber-architecture)

#### What is reconcilliation?
The algorithm, react uses to diff one tree with another tree to determine which parts needs to be changed.

Reconciliation is the algorithm behind what is popularly understood as the "virtual DOM". 
A high-level description goes something like this: when you render a React application, a tree of nodes that describes the app is generated and saved in memory. This tree is then flushed to the rendering environment — for example, in the case of a browser application, it's translated to a set of DOM operations. When the app is updated (usually via setState), a new tree is generated. The new tree is diffed with the previous tree to compute which operations are needed to update the rendered app.