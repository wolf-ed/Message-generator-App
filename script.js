// Initializing an array that stores quotes
const messageObjArray = [];

// Create message object
function createMessage (author, quote) {
    const obj = {
        author: author,
        quote: quote
    }
    return obj;
}

// Add message object to object array
function addMessage (author, quote) {
    messageObjArray.push(createMessage(author, quote));
}
// Add a quote here
addMessage('Abraham Lincoln', 'I\'m a success today because I had a friend who believed in me and I didn\'t have the heart to let him down.');
addMessage('Andrew Carnegie', 'No man will make a great leader who wants to do it all himself or get all the credit for doing it.');
addMessage('Eckhart Tolle', 'The moment you realize you are not present, you are present. Whenever you are able to observe your mind, you are no longer trapped in it. Another factor has come in, something that is not of the mind: the witnessing presence.');
addMessage('Lao Tzu', 'Be content with what you have; rejoice in the way things are. When you realize there is nothing lacking, the whole world belongs to you.');
addMessage('Shunryu Suzuki','If your mind is empty, it is always ready for anything, it is open to everything. In the beginner\'s mind there are many possibilities, but in the expert\'s mind there are few.');
addMessage('Darren Hardy', 'You will never change your life until you change something you do daily. The secret of your success is found in your daily routine.');
addMessage('Jim Rohn', 'Don’t wish it were easier, wish you were better.');

// function that returns random message object
let generatedMessage = () => {
    let randomIndex = Math.floor(Math.random() * messageObjArray.length)
    return messageObjArray[randomIndex];
}

let returnedObj = generatedMessage();

console.log(`${returnedObj.author} says: `)
console.log(`${returnedObj.quote}`)
