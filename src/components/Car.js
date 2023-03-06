import React from 'react'
import cars from '../cars.json'
// Import {useParams} from "react-router-dom" here //
import { useParams } from 'react-router'
import { Chip } from '@mui/material'

// import MUI components here //
// Container, Paper, Chip //

const Car = (props) => {
    // Non Destructured 
    // const params = useParams()
    // Destructured Way
    const { id } = useParams()

    // Not needed but can be helpful!
    // const renderCar = () => {
    //     // Looping over an object
    //     // "For In Loop" - Could be a "For Of Loop"
    //     for(let key in car){
    //         console.log(key, " : ", car[key])
    //     }
    // }

    // Same as - cars.find((x) => x.id === +id)
    const car = cars.find((x) => x.id === +id)
    console.log(car)

    return (

        <>
            <div>
                <h2>{car.Name}</h2>
                <Chip label={`Name: ${car.Name}`} />
                <Chip label={`Horsepower: ${car.Horsepower}`} />
                <Chip label={`Miles Per Gallon: ${car.Miles_per_Gallon}`} />
                <Chip label={`Year: ${car.Year}`} />
                <Chip label={`Cylinders: ${car.Cylinders}`} />
                <Chip label={`Displacement: ${car.Displacement}`} />
                <Chip label={`Weight in Pounds: ${car.Weight_in_lbs}`} />
                <Chip label={`Acceleration: ${car.Acceleration}`} />
                <Chip label={`Origin: ${car.Origin}`} />
            </div>

        </>
        // <h1>{renderCar()}</h1>
        // <h1>A specific car {id}</h1>
    )
}

export default Car

// "id": 1,
// "Name":"chevrolet chevelle malibu",
// "Miles_per_Gallon":18,
// "Cylinders":8,
// "Displacement":307,
// "Horsepower":130,
// "Weight_in_lbs":3504,
// "Acceleration":12,
// "Year":"1970-01-01",
// "Origin":"USA"