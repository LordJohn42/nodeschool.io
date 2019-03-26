function getShortMessages(messages) {
    let result = [];
    messages = messages.filter(message => {
        // console.log([message.message.length <= 50 ? true : false, message.message.length]);
        return message.message.length <= 50 ? true : false;
    }).map(message => {
        if (message.hasOwnProperty('message')) {
            result.push(message.message)
        }
    });
    return result;
}
module.exports = getShortMessages