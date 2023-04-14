const API_URL = 'https://randomuser.me/api/';

export const fetchUsers = async (count) => {
  try {
    const response = await fetch(`${API_URL}?results=${count}`);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error(error);
  }
};