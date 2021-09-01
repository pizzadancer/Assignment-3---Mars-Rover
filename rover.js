class Rover {
    constructor(position) {
        this.position = position;
        this.mode = 'NORMAL';
        this.generatorWatts = 110;
    }

    receiveMessage(message) {
        this.message = message;
        let response = {
            message: message.name,
            results: [] 
        }

        // Loops through the each command inside the message command property
        for (let command of message.commands) {
            if (command.commandType === "STATUS_CHECK") {
                response.results.push({ 
                    completed: true,
                    roverStatus: {
                      mode: this.mode,
                      generatorWatts: this.generatorWatts,
                      position: this.position        
                    }
                })
            } else if (command.commandType === "MODE_CHANGE") {
                this.mode = command.value,
                response.results.push({ 
                    completed: true
                })
            } else if ((command.commandType === "MOVE") && (this.mode === "LOW_POWER")) {
                response.results.push({ 
                    completed: false
                })
            } else if ((command.commandType === "MOVE") && (this.mode === "NORMAL")) {
                this.position = command.value,
                response.results.push({ 
                    completed: true
                })
            }
        }

        return response;
    }

}
module.exports = Rover;

/*
  >> Rover Class Description <<
constructor(position)
    position is a number representing the rover's position.
    Sets this.position to position
    Sets this.mode to 'NORMAL'
    Sets default value for generatorWatts to 110
receiveMessage(message)
    message is a Message object
    Returns an object containing at least two properties:
        message: the name of the original Message object
        results: an array of results. Each element in the array is an object that corresponds to one Command in message.commands.
    Updates certain properties of the rover object
        Details about how to respond to different commands are in the Command Types table.
*/