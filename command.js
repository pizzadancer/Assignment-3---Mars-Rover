/*
 *  Types of commands : 'MODE_CHANGE', 'MOVE', or 'STATUS_CHECK'.
 */

class Command {
  constructor(commandType, value) {
    this.commandType = commandType;
    if (!commandType) {
      throw Error("Command type required.");
    }
    this.value = value;
  }

}

module.exports = Command;