import React, { useCallback} from 'react';
import PropTypes from 'prop-types'
import bg from '../assets/default-image.png'
import CardStyle from './styles/card-style.css'
import { Card, Icon, Button } from 'antd';

const { Meta } = Card;

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

const CardEvent = ({title, place, owner, followers})=>{
    const handleClick  = useCallback( () => {
        console.info("holi")
       
      })

    return (
        <>
             <Card
                style={{ width: 300 }}
                cover={
                <img
                    alt="poster"
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
                }
            >
                <Meta
                    title={title}
                    description=
                    {
                        <div style={{ display:'flex' }}>
                            <span style={{ width:' 90%' }}>
                                <p>{place} <br/>
                                <span style={{fontSize: "smaller"}}>{owner}</span></p>
                            </span>
                            <span style={{display: "flex"}}>
                                <span>{followers}</span>
                                <Button type="primary"  ghost="true" icon="heart" style={{border: 'none'}} />
        
                            </span>
                        </div>
                    }
                />
            </Card>
   
        </>
        );
}

Card.propTypes={
    title: PropTypes.string.isRequired,
    place: PropTypes.string.isRequired,
    owner: PropTypes.string.isRequired,
}


export default CardEvent;