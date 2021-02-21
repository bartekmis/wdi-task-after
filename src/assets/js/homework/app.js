var myWorker = new Worker('/assets/js/homework/web-worker-chat.js');
myWorker.postMessage(1);

console.log(myWorker);