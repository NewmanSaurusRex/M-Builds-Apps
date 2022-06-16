/*
 * Steps to Solve:
 *
 * 1. Create a fetchAnswer function and call the API
 * 2. Output the API's response
 * 3. Attach fetchAnswer to an event listener
 * 4. Clear output after 3 seconds
 * 5. Optional: add loading/error states
 */

function fetchAnswer() {
  let apiUrl = "https://yesno.wtf/api";
  axios.get(apiUrl, fetchAnswer);
}
