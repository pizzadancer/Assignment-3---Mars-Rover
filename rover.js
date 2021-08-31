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
            results: [] // ['MOVE', 'STATUS_CHECK']
        }

        // Loops through the each command inside the message command property
        for (let command of message.commands) {
            if (command === "STATUS_CHECK") {
                response.results.push({ 
                    completed: true,
                    roverStatus: {
                      mode: this.mode,
                      generatorWatts: this.generatorWatts,
                      position: this.position
                      // tests            
                    }
                })
            }
        }
            
        // name and array of response objects
        // append to response.results

        return response;
    }

    // move(position, amountToMove) {
    //     this.position = position;
    //     returns this.position + amountToMove;
    // }

    status_check() {

    }
}
module.exports = Rover;

// STATUS_CHECK	No values sent with this command.	No updates {completed: true, roverStatus: {mode: 'NORMAL', generatorWatts: 110, position: 87382098}} Values for mode, generatorWatts, position will depend on current state of rover.


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