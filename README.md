# `Blockchain Node.js`

<image src="images/collab.png" width=500>

## This app is to emulate blockchain ecosystem in [node.js](http://nodejs.org)

[node.js](http://nodejs.org)로 구현한 블록체인 애플리케이션
<br/>
  
Running 5 diffrenet local servers(ports) declared in package.json<br/>
Each server(port) handles the blockchain process as if being chained as series of the nodes in the real world blockchain application.

Each end point API can be tested by postman and browser (UI page added by Angular) 

* /transaction-broadcast (postman) -- transaction of bitcoin on pending state 
* /register-and-broadcast-node (postman) -- connection of servers(nodes)
* /mine (on browser) -- mining successfully carried
* /consensus (on browser) -- addition of new server to the current nodes ecosystem
* /block-explorer (on browser) -- UI page 

Enjoy!


### install npm dependencies 
```bash
npm install
```
<br/>

### open 5 separate bashes to run each node on different port from 3001~3005 
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
* Explore the current state of blockchain

<br/>

### postman Rest API Control  
```
Post /localhost:3001/register-and-broadcast-node 
```
* Postman with JSON body {"newNodeUrl":"http://localhost:3002~5"}
* Connection of all servers(nodes) together
<br/>

```
Post /transaction-broadcast
```
* Postman with JSON body {"amount":1000, sender:"id", recipient:"id"} -- send bitcoin
* This automatically adds the transaction(on pending) to all of the nodes 
  
<br/>
Browser

```
Get /mine
```
* Carrying a succesful mining process as committing all of the transactions 
  
<br/>
Browser

```
Get //localhost:{{new port}}/consensus
```
* Add the past record of all blockchains to the new node and share the current state of other nodes 
* Make sure to register a new node to other nodes beforhand, executing "/localhost:3001/register-and-broadcast-node"

<br/>

Browser
```
Get /block-explorer
```

* You can explore the blocks in search of the transaction record, hash, and user history