const Rover = require('../rover.js');
const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.


describe("Rover class", function() {

  // 7 tests here!

});


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
