export const fetchQuote = async () => {
  try {
    const response = await fetch('https://api.api-ninjas.com/v1/quotes?category=medical', {
      headers: { 'X-Api-Key': 'P7cnNQvrR9gPz8rrqxMyrQ==G0XhWVmC20zV9V80' } // TODO: Make env file for the quotes api
    });
    const data = await response.json();
    if (data.length > 0) {
      return {
        text: data[0].quote,
        author: data[0].author,
      };
    } else {
      throw new Error('No quotes found');
    }
  } catch (error) {
    console.error('Error fetching quote:', error);
    throw error;
  }
};
