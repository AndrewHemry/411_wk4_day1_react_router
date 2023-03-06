import React from 'react'
import { Card, CardContent, CardActions, Divider } from '@mui/material'
import cars from '../cars.json'
import { Link } from 'react-router-dom'

const Home = () => {
    console.log('CARS', cars)
    return (
        <div className="card-container">
            {cars.map((car, idx) => (
                <Card key={idx} className="card">
                    <CardContent className="text-gray">
                        <span>{car.Name.toUpperCase()}</span>
                        <ul>
                        <li>Miles_per_Gallon: {car["Miles_per_Gallon"]}</li>
                        <li>Cylinders: {car["Cylinders"]}</li>
                        <li>Displacement: {car["Displacement"]}</li>
                        <li>Horsepower: {car["Horsepower"]}</li>
                        </ul>
                    </CardContent>
                    <Divider />
                    <CardActions style={{ color: 'mediumblue' }}>
                        {/* Change a tag to Link */}
                        <Link to={`/car/${car.id}`}>See more Details</Link>
                        {/* <Link to={`/car/${idx + 1}`}>See more Details</Link> */}
                    </CardActions>
                </Card>
            ))}
        </div>
    )
}

export default Home