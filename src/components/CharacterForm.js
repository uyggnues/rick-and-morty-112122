import { useState } from 'react'

const CharacterForm = ({setCharacters}) => {
    // const [name, setName] = useState("")
    // const [image, setImage] = useState("")
    // const [status, setStatus] = useState("")
    // const [species, setSpecies] = useState("")
    // const [type, setType] = useState("")
    // const [gender, setGender] = useState("")
    const [showForm, setShowForm] = useState(false)
    const [newCharacter, setNewCharacter] = useState({
        name: "",
        status: "",
        species: "",
        type: "",
        gender: "",
        image: ""
    })

    const handleChange = ({target: {name, value}}) => { //"Name", "testw"
        // const {name, value} = e.target
        setNewCharacter({...newCharacter, [name]: value})
    }

    const handleSubmit = (e) => {
        //step 0: prevent the default behavior
        e.preventDefault() 
        
        // step 1: pack the data into a new object matching the structure from the db.json
        // VERISION 1: 
        // const newCharacter = {name, status, species, type, gender, image}
        // VERSION 2 does not need this step because the info is already inside an object

        //step 2 for VERSIONS 1 & 2: let the json server know about the new addition with a POST fetch request
        fetch("http://localhost:3000/characters", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newCharacter)
        })
        //step 3 let the local state know about the new addition using setCharacters
        .then(res => res.json())
        .then(newData => setCharacters(currentListOfCharacters => [...currentListOfCharacters, newData]))

        //step 4: empty the form MEANS resetting state to its initial value
        //SOLUTION 1
        // setName("")
        // setImage("")
        // setStatus("")
        // setSpecies("")
        // setType("")
        // setGender("")

        // SOLUTION 2
        setNewCharacter({
            name: "",
            status: "",
            species: "",
            type: "",
            gender: "",
            image: ""
        })
    }

    return (
        <div>
            <button class="form-btn btn" onClick={() => setShowForm(currentVal => !currentVal)}>{showForm ? "Hide Form" : "Show Form"}</button>
            {showForm ? <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" value={newCharacter.name} onChange={handleChange} /><br />
                <label htmlFor="image">Image Url</label>
                <input type="text" name="image" value={newCharacter.image} onChange={handleChange} /><br />
                <label htmlFor="status">Status</label>
                <input type="text" name="status" value={newCharacter.status} onChange={handleChange} /><br />
                <label htmlFor="species">Species</label>
                <input type="text" name="species" value={newCharacter.species} onChange={handleChange} /><br />
                <label htmlFor="type">Type</label>
                <input type="text" name="type" value={newCharacter.type} onChange={handleChange} /><br />
                <label htmlFor="gender">Gender</label>
                <input type="text" name="gender" value={newCharacter.gender} onChange={handleChange} /><br />
                <input type="submit" value="Create" />
            </form> : null}
        </div>
    )
}

export default CharacterForm