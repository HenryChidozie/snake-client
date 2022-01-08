/*
 * Write a function that joins the contents of conceptList together
 * into one String, concepts, with each list item separated from
 * the previous by a comma.
 *
 * To implement this we'll create a joinList function which will take
 * in any array of strings return a comma-separated string.
 *
 * Note: We can NOT use the built-in Array join function.
 */

// Write our function (we must define it too!) below
// ...

const joinList = function(list) {
  let concept = '';
  if (list.length > 0) {
    let slicedList = list.slice(0, -1);
    for (let i = 0; i < slicedList.length; i++) {
      concept += slicedList[i] + ', ';
    }
    return concept + list[list.length - 1];
  } else {
    return "";
  }
};


// Test / Driver Code below...
const conceptList = ["gists", "types", "operators", "iteration", "problem solving"];
const concepts = joinList(conceptList);
console.log(`Today I learned about ${concepts}.`);

