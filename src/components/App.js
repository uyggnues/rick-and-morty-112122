import logo from '../logo.svg';
import './App.css';
import characters from "../data/characters"
import SearchForm from './SearchForm';
import CharactersList from './CharactersList';
import React, {useState, useEffect} from 'react'

function App() {
  const [queryChar, setQueryChar] = useState("")
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3000/characters")
      const characters = await response.json()
      setCharacters(characters)
    }
    
    fetchData()
  }, [])
  
  const filteredCharacters = characters.filter(character => character.name.toLowerCase().includes(queryChar))
  
  return (
    <div className="App">
      <SearchForm query={queryChar} setQueryChar={setQueryChar}/>
      <CharactersList characters={filteredCharacters} />
    </div>
  );
}

export default App;
