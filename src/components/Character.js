import { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'

const Character = ({character}) => {
  const {id} = useParams()
  const [showImage, setShowImage] = useState(true);
  const [char, setChar] = useState(null);


  useEffect(() => {
    if (!character) {
      fetch(`http://localhost:3000/characters/${id}`)
      .then(resp => resp.json())
      .then(charObj => setChar(charObj))
      .catch(err => alert(err))
    }
  }, [character, id]);

  const handleMouseAction= () => {
    setShowImage(currentValue => !currentValue)
  }

const finalChar = character ? character : char
if(!finalChar) {
  return <h3>Loading...</h3>
}
  const {url, name, image, status, type, gender, species} = finalChar
  return (
    <div className="Character" onMouseEnter={handleMouseAction} onMouseLeave={handleMouseAction}>
        <li>
            <a href={url} target="_blank" rel="noreferrer"><h4>{name}</h4></a>
            {showImage ? (<img src={image} alt={name} />) : <>
                <span className="card-detail">Status: {status}</span>
                <span className="card-detail">Species: {species}</span>
                <span className="card-detail">Type: {type}</span>
                <span className="card-detail">Gender: {gender}</span>
              </>}
        </li>
    </div>
  )
}

export default Character