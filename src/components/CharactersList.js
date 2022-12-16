import React from 'react'
import Character from "./Character"

const CharactersList = ({characters}) => {

    const characterComponentsList = characters.map(char => <Character {...char} key={char.id}/>)

    return (
        <div className='CharactersList'>
            <ul className="Characters">
                {characterComponentsList}
            </ul>
        </div>
    )
}

export default CharactersList