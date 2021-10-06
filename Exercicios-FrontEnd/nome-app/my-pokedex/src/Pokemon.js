import React from "react";
import './data'

class Pokemon extends React.Component {
    render() {
        const { pokemon: {name, type, averageWeight, image} } = this.props

        return (
        <div className = 'pokemon'> 
            <div>   
            <p> {name} </p>
            <p> {type} </p>
            <p> 
                {`Peso Total: ${averageWeight.value} ${averageWeight.measurementUnit}`} 
            </p>
            </div>
            <img src={ image } alt={ `${name} sprite` } />
            
        </div>
        )
    }
}

export default Pokemon


