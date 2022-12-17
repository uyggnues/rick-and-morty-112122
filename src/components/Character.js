import { useState } from 'react'

const Character = ({id, url, image, name, status, species, type, gender}) => {

  const [showImage, setShowImage] = useState(true);

  const handleMouseAction= () => {
    setShowImage(currentValue => !currentValue)
  }

  return (
    <div className="Character" id={id} onMouseEnter={handleMouseAction} onMouseLeave={handleMouseAction}>
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