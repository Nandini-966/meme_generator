import React from 'react';
import {useNavigate} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const MemeCard=(props) =>{
  const navigate=useNavigate();
    return(
       <Card style={{ width: '18rem', margin:"25px"}}>
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        
        <Button onClick={() => navigate(`/edit?url=${encodeURIComponent(props.img)}`)}  variant="primary">Edit</Button>
      </Card.Body>
    </Card>

    );
};
export default MemeCard;