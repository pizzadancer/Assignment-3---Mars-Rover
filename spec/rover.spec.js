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
    let rover = new Rover(98382); // position
    let message = new Message("Test message with two commmands", ['TURN RIGHT', 'MOVE']);
    let response = rover.receiveMessage(message);
    expect(response["message"]).toEqual(message.name);
  });

  it("response returned by receiveMessage includes two results if two commands are sent in the message.", function() {
    let rover = new Rover(98383);
    let message = new Message("Test message with two commands", ['TURN RIGHT', 'MOVE']);
    let response = rover.receiveMessage(message);
    expect(response["results"].length).toEqual(2);
  });

  //TEST 10
  // it("responds correctly to status check command", function() {
  //   let rover = new Rover(98383);
  //   let message = new Message("Test message with two commands", ['TURN RIGHT', 'MOVE']);
  //   let response = rover.receiveMessage(message);
  //   expect(response["results"]).toEqual(jasmine.objectContaining(rover));
  // });
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
