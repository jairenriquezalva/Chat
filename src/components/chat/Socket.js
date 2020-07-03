const wsUri = "ws://localhost:3000/";
const protocol = 'echo-protocol';

const socket = new WebSocket(wsUri,protocol);

export default socket;