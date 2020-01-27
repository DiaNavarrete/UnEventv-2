import React, { useCallback} from 'react';
import PropTypes from 'prop-types'
//const React = require('react')
/*
class Card extends React.Component{
    handleChangeCurrency( event) {
        console.log("click")
      //  this.setState({ currency: this.state.currency === '€' ? '$' : '€' })
      }
    render(){
        return (
            <>
        <h1>Cardd</h1>
        <button onClick={this.handleChangeCurrency}>btn</button>
        </>
        );
    }
}*/

const Card = ({title, place, owner})=>{
    const handleClick  = useCallback( () => {
        console.info("holi")
       
      })
    return (
        <>
            <h1>{title}</h1>
            <h2>{place}</h2>
            <h3>{owner}</h3>
            <button onClick={handleClick }>boton</button>
        </>
        );
}

Card.propTypes={
    title: PropTypes.string.isRequired,
    place: PropTypes.string.isRequired,
    owner: PropTypes.string.isRequired
}


export default Card;