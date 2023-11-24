import moment from "moment";
import Gallery from './Gallery1';

// Define a state to keep track of the conversation state
let conversationState = 'initial'; // Initial state

export const analyze = (text) => {
  if (text.includes('hi') || text.includes('hai') || text.includes('hello')) {
    return 'Hi, How can I help you?';
  } else if (text.includes('i want an order') || text.includes('I want an order')) {
    // Update the conversation state to address collection
    conversationState = 'collectAddress';
    return 'Please enter your delivery address, or type "exit" to cancel the order.';
  }

  if (conversationState === 'collectAddress') {
    if (text.toLowerCase() === 'exit' || text.toLowerCase() === 'cancel') {
      // Handle the "exit" or "cancel" request at the address collection step
      conversationState = 'initial'; // Reset the conversation state
      return 'Order process canceled. How can I assist you now?';
    }

    // Handle the address input here and store it in a variable
    const address = extractAddress(text);

    if (address) {
      // Update the conversation state to order confirmation
      conversationState = 'orderConfirmation';
      return `Great! Your order will be delivered to: ${address}. Is that correct? (yes/no)`;
    } else {
      return 'Please enter a valid address or type "exit" to cancel the order.';
    }
  }

  // Check for images confirmation
  else if (conversationState === 'orderConfirmation' && text.toLowerCase() === 'yes') {
    // Display images
    conversationState = 'orderConfirmation'; // Mark the conversation as completed
    return (
      <div>
        <Gallery />
        <h1>Enter the names of your preferred foods</h1>
      </div>
    );
  }const foodnames = extractFoodNames(text);
  if (foodnames) {
    // Update the conversation state to order confirmation
    conversationState = 'orderConfirmation';
    return `Great! Your ordered foods are ${foodnames}. Is that correct? (yes/no)`;
  }
  // Check for food names confirmation
  else if (conversationState === 'orderConfirmation' && text.toLowerCase() === 'no') {
    conversationState = 'collectAddress'; // Go back to address collection
    return 'Please re-enter your delivery address, or type "exit" to cancel the order.';
  }

  // Check for order confirmation
  else if (conversationState === 'orderConfirmation' && text.toLowerCase() === 'order') {
    // Continue with the order confirmation logic
    conversationState = 'completed'; // Mark the conversation as completed
    return 'Your order is confirmed. Thank you!';
  }

  // Handle additional conversation logic after order confirmation
  else if (conversationState === 'completed') {
    if (text.toLowerCase() === 'exit' || text.toLowerCase() === 'cancel') {
      // Handle the "exit" or "cancel" request at the completed step
      conversationState = 'initial'; // Reset the conversation state
      return 'Order process canceled. How can I assist you now?';
    }

    // Handle any additional conversation logic here
    if (text.includes('date')) {
      return moment().format('MMMM Do YYYY');
    } else if (text.includes('time')) {
      return moment().format('h:mm:ss a');
    } else if (text.includes('interest')) {
      return 'Bank interest rate is 8.67';
    } else if (text.includes('thank you')) {
      return 'Thanks for contacting me';
    } else if (text.includes('image')) {
      return (
        <div>
          <Gallery />
        </div>
      );
    }
  }

  // Handle other cases
  return "I can't understand your message. Can you rephrase it?";
};

function extractAddress(text) {
  // Implement your logic to extract the address from the user's message
  // You can use regular expressions or other methods to find address-like patterns.
  // This example attempts to extract the first continuous sequence of words as an address.

  const addressRegex = /[A-Za-z0-9\s\.,/;:'"-]+/g; // A simple regex to match words and spaces

  const matches = text.match(addressRegex);

  if (matches && matches.length > 0) {
    // Assuming the first match is the address
    return matches[0].trim();
  }

  return null; // Return null if no address-like pattern is found
}

function extractFoodNames(text) {
  // Implement your logic to extract the address from the user's message
  // You can use regular expressions or other methods to find address-like patterns.
  // This example attempts to extract the first continuous sequence of words as an address.

  const addressRegex = /[A-Za-z0-9\s\.,/;:'"-]+/g; // A simple regex to match words and spaces

  const matches = text.match(addressRegex);

  if (matches && matches.length > 0) {
    // Assuming the first match is the address
    return matches[0].trim();
  }

  return null; // Return null if no address-like pattern is found
}
