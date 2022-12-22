import logo from '../logo.svg';
import React, {useState, useEffect} from 'react'
import './App.css';
// import characters from "../data/characters"
import SearchForm from './SearchForm';
import CharactersList from './CharactersList';
import CharacterForm from './CharacterForm';
import {Switch, Route} from 'react-router-dom'
import ErrorPage from './ErrorPage';
import Character from './Character'

function App() {
  const [queryChar, setQueryChar] = useState("")
  const [characters, setCharacters] = useState([]);

  console.log("a") // sync, runs first
  useEffect(() => { // runs AFTER a component mounted
    console.log("b") // first line inside, has to happen first since it's sync
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/characters")
        console.log("c") // last to run because wrapped inside async code
        const characters = await response.json()
        setCharacters(characters)
      } catch (error) {
        alert(error)
      }
    }
    
    fetchData()
    console.log("d") // second sync line inside, has to happen second
    
  }, [])
  console.log("e") //sync runs second on initial mounting
  // a, e, b, d, c final order of console logs
  const filteredCharacters = characters.filter(character => character.name.toLowerCase().includes(queryChar))

  return (
    <>
      <div className="App transparent">
        <Switch>
        <Route path='/characters/new'>
          <CharacterForm setCharacters={setCharacters} />
        </Route>
          <Route path="/characters/:id">
            <Character />
          </Route>
        <Route path='/'>
          <SearchForm query={queryChar} setQueryChar={setQueryChar}/>
          <CharactersList characters={filteredCharacters} />
        </Route>
        <Route>
          <ErrorPage/>
        </Route>
        </Switch>
      </div>
      <div className='cursor'></div>
    </>
  );
}

export default App;
