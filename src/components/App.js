import logo from '../logo.svg';
import './App.css';
// import characters from "../data/characters"
import SearchForm from './SearchForm';
import CharactersList from './CharactersList';
import {useState, useEffect} from 'react'

function App() {
  const [queryChar, setQueryChar] = useState("")
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetch(`http://localhost:3000/characters`)
        const characterList = await resp.json()
        setCharacters(characterList)
      } catch (error) {
        alert(error)
      }
    }

    fetchData()

  }, []);
  

  const filteredCharacters = characters.filter(character => character.name.toLowerCase().includes(queryChar))

  // const conditionalRender = queryChar === "" ? characters : filteredCharacters

  return (
    <div className="App">
      <SearchForm query={queryChar} setQueryChar={setQueryChar}/>
      <CharactersList characters={filteredCharacters} />
    </div>
  );
}

export default App;
