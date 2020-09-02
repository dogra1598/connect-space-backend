class Room {
    constructor(roomId, roomTitle, namespace) {
        this.roomId = roomId;
        this.roomTitle = roomTitle;
        this.namespace = namespace;
        this.history = [];
    }

    addMessage(message) {
        this.history.push(message);
    }
};

module.exports = Room;