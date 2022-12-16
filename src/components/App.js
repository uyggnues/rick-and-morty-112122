import logo from '../logo.svg';
import './App.css';
import characters from "../data/characters"
import SearchForm from './SearchForm';
import CharactersList from './CharactersList';
import React, {useState} from 'react'

function App() {
  const [queryChar, setQueryChar] = useState("")

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
