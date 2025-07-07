// class Graph {
//     constructor(){
//         this.vertices = new Set();
//         this.edges =[];

// //     }
// //     addVertex(v){
// //         this.vertices.add(v);
// //     }
// //     addEdge(u,v,weight =1){

// //     }
// // }

// function createGraph(){
//     const vertices = new Set();
//     const edges = [];


// function addEdge(u,v,weight=1){
//     vertices.add(u);
//     vertices.add(v);
//     edges.push({from: u,to:v,weight:weight});

// }
// function displayGraph(){
//     console.log("Vertices",Array.from(vertices));
//     console.log("Edges :");
//     edges.forEach(edge => {
//         console.log(`${edge.from}--(${edge.weight})-->${edge.to}`)
        
//     });
    
    
// }
// return {
//     addEdge,
//     displayGraph,
//     vertices,
//     edges
// };
// }

// const graph = createGraph();
// graph.addEdge(0,1,4);
// graph.addEdge(0,2,3);
// graph.displayGraph();


// To asking question i get to know that why and when to make Set to Array
function createThought(){
    const vertices = new Set();
    const edges = [];
    function addThought(from,to,label="") {
        vertices.add(from);
        vertices.add(to);
        edges.push({from,to,label});
        
    }
    function displayGraph(){
        console.log(`${edges.from}-->${edges.to}`,label);
        
    }

}
const graphOne = createThought();

graphOne.addThought("hello","world","hiii")