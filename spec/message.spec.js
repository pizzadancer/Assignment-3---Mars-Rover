const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.
/*
 * Message Class Description
 *  This class builds an object with two properties. constructor(name, commands)
 *  name is a string that is the name of the message.
 *  commands is an array of Command objects.
 */


describe("Message class", function() {
  it("throws error if a name is NOT passed into the constructor as the first parameter", function () {
    expect( function() { new Message();}).toThrow(new Error('Name required.'))
  });

  it("constructor sets name", function() {
    let message = new Message('Sending message');
    expect(message.name).toEqual('Sending message')
  });

  it("contains a commands array passed into the constructor as 2nd argument.", function() {
    let message = new Message('Sending message', ['TURN', 'MOVE']);
    expect(message.commands).toEqual(['TURN', 'MOVE']);
  });
});
