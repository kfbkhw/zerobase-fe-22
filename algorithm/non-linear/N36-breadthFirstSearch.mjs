import Queue from './N36A-queue.mjs';

class Graph {
    constructor() {
        this.edge = {};
        this.visited = {};
    }

    addVertex(v) {
        this.edge[v] = [];
        this.visited[v] = false;
    }
    addEdge(v1, v2) {
        this.edge[v1].push(v2);
    }

    print() {
        for (let vertex in this.edge) {
            let neighbors = this.edge[vertex];
            if (neighbors.length === 0) continue;

            process.stdout.write(`${vertex} -> `);
            for (let i = 0; i < neighbors.length; i++) {
                process.stdout.write(`${neighbors[i]} `);
            }
            console.log('');
        }
        console.log('');
    }

    _bfsLoopVisit(vertex) {
        let queue = new Queue();
        queue.enqueue(vertex);

        while (!queue.isEmpty()) {
            let vertex = queue.dequeue();
            if (this.visited[vertex]) {
                continue;
            }

            this.visited[vertex] = true;
            console.log(`visit "${vertex}"`);

            let neighbors = this.edge[vertex];
            for (let i = 0; i < neighbors.length; i++) {
                queue.enqueue(neighbors[i]);
            }
        }
    }
    bfs(startVertex) {
        this._bfsLoopVisit(startVertex);
    }
}

let graph = new Graph();
let vertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];

for (let i = 0; i < vertices.length; i++) {
    graph.addVertex(vertices[i]);
}

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('A', 'D');
graph.addEdge('C', 'G');
graph.addEdge('D', 'G');
graph.addEdge('D', 'H');
graph.addEdge('B', 'E');
graph.addEdge('B', 'F');
graph.addEdge('E', 'I');

graph.print();

graph.bfs('A');
