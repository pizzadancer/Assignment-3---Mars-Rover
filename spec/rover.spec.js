const Rover = require('../rover.js');
const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.


describe("Rover class", function() {

  it("constructor sets position and default values for mode and generatorWatts", function() {
    let rover = new Rover(98382);
    expect(rover.position).toEqual(98382);
    expect(rover.mode).toEqual('NORMAL');
    expect(rover.generatorWatts).toEqual(110);
  });

  it("response returned by receiveMessage contains name of message", function() {
    let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
    let message = new Message("Test message with two commmands", commands);
    let rover = new Rover(98382); // position    
    let response = rover.receiveMessage(message);
    expect(response.message).toEqual(message.name);
  });

  it("response returned by receiveMessage includes two results if two commands are sent in the message.", function() {
    let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
    let message = new Message("Test message with two commmands", commands);
    let rover = new Rover(98382); // position    
    let response = rover.receiveMessage(message);
    expect(response.results.length).toEqual(message.commands.length);
  });

  //TEST 10
  it("responds correctly to status check command", function() {
    let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
    let message = new Message("Test message with two commmands", commands);
    let rover = new Rover(98382); // position    
    let response = rover.receiveMessage(message);
    expect(response.results[1]).toEqual(jasmine.objectContaining({
      completed: true,
      roverStatus: { mode: 'LOW_POWER', generatorWatts: 110, position: 98382 }
    }));
  });

   //TEST 11
   it("responds correctly to mode change command", function() {
    let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
    let message = new Message("Test message with two commmands", commands);
    let rover = new Rover(98382); // position    
    let response = rover.receiveMessage(message);
    expect(response.results[0]).toEqual({completed: true});
    expect(rover.mode).toEqual("LOW_POWER");
  });

  //TEST 12
  it("responds with false completed value when attempting to move in LOW_POWER mode", function() {
    let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('MOVE', 12000)];
    let message = new Message("Test message with two commmands", commands);
    let rover = new Rover(98382); // position    
    let response = rover.receiveMessage(message);
    expect(rover.mode).toEqual("LOW_POWER");
    expect(response.results[1]).toEqual({completed: false});
  });
});

// expect(object).toEqual(jasmine.objectContaining(objectToCompare))
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
