# `Blockchain Node.js`

<image src="images/collab.png" width=500>

## This app is to emulate blockchain ecosystem in [node.js](http://nodejs.org)

[node.js](http://nodejs.org)로 구현한 블록체인 애플리케이션
<br/>

* Backend - Node.js
* Frontend - Angular
  
Porting 5 diffrenet local ports declared in package.json<br/>
Each port(node) handles the process of blockchain as if being chained as series of the nodes in the real world.

Each end point can be tested by postman 

* /transaction-broadcast (postman)
* /register-and-broadcast-node (postman)
* /mine (on browser)
* /consensus (on browser)
* /block-explorer (on browser)

Enjoy!


### install npm dependencies 
```bash
npm install
```
<br/>

### open 5 separate bashes to run nodes on different port from 3001~3005 
```bash
npm run node_1
npm run node_2
npm run node_3
npm run node_4
npm run node_5
```

<br/>

```bash
Get /localhost:3001/blockchain
```
* Explore the state of blockchain in each node(port)

<br/>

### postman Rest API Control  
```
Post /localhost:3001/register-and-broadcast-node 
```
* Send JSON from POST method with body {"newNodeUrl":"http://localhost:3002~5"}
* This will chain all of nodes set in the different port

<br/>

```
Post /transaction-broadcast
```
* You can send amount of bitcoin including sender and recipient on any port, on pending state {"amount":1000, sender:"id", recipient:"id"}
* this will notify all nodes of the trasaction (still pending)
  
<br/>
Browser

```
Get /mine
```
* On any port of url, this will generate mining process and successfully add the block on each node, committing all transactions on pending
  
<br/>
Browser

```
Get /consensus
```
* When a new node added with different port, this will copy all of the transaction history, blocks, and nodes to the new node
* before making this, make sure to chain the new node, executing "/localhost:3001/register-and-broadcast-node" beforehand  

<br/>

Browser
```
Get /block-explorer
```

* You can explore the blocks in search of transaction history, hash, and block Id