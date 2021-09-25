import axios from 'axios';

axios.defaults.baseURL = 'https://app.ticketmaster.com/discovery/v2/events.json?';


export async function fetchEvents(query, page, classification, country) {
  const { data } = await axios.get(
    `size=20&keyword=${query}&page=${page}&sort=relevance,desc&classificationName=${classification}&countryCode=${country}&apikey=1twKLyrauG3OZrFZiN9ApTE1ANWFyZTo`,
  );
 return data;
}


