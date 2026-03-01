class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
    }
  
    parse(message) {
      const lower = message.toLowerCase();
      if (lower.includes("hello") || lower.includes("hi")) {
        this.actionProvider.handleHello();
      } else {
        this.actionProvider.handleDefault();
      }
    }
  }
  
  export default MessageParser;
  