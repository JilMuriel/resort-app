import React from 'react'
import {useContext} from 'react'
import {RoomContext} from "../context"
import Title from "../components/Title"
//get all unique values
const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))]
}

export default function RoomsFilter({rooms}) {
    const context = useContext(RoomContext)
    const {
        handleChange,
        type,
        capacity,
        price,
        minPrice,
        maxPrice,
        minSize,
        maxSize,
        breakfast,
        pets
    } = context;
    //get unique types
    let types = getUnique(rooms, 'type');
    // add all
    types = ['all', ...types];
    //map to jsx
    types = types.map((item, index)=>{
    return <option value={item} key={index}>{item}</option>
    })
    return (
        <section className="filter-container">
            <Title title="search rooms" />
            <form className="filter-form">
                {/* Select Type */}
                <div className="form-group">
                    <label htmlFor="type">Room Type</label>
                    <select name="type" id="type" value={type} onChange={handleChange} className="form-control">
                        {types}
                    </select>
                </div>
                {/* End of Select Type */}
                {/* Select Type */}
                <div className="form-group">
                    <label htmlFor="capacity">guess</label>
                    <select name="capacity" id="capacity" value={type} onChange={handleChange} className="form-control">
                        {types}
                    </select>
                </div>
                {/* End of Select Type */}
            </form>
        </section>
    )
}