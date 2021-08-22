class Rover {
   // Write code here!
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