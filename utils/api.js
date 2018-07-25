const BASE_API = 'https://swapi.co/api'
const PEOPLE = `${BASE_API}/people`
const PLANETS = `${BASE_API}/planets`
const FILMS = `${BASE_API}/films`
const SPECIES = `${BASE_API}/species`
const VEHICLES = `${BASE_API}/vehicles`
const STARSHIPS = `${BASE_API}/starships`

class Api {
  async getPeopleList(page = 1) {
    const query = await fetch(`${PEOPLE}/?page=${page}`);
    console.log(query)
    const { results } = await query.json();
    return results
  }
}

export default new Api()