import React, { useState, useMemo } from 'react';
import api from '../../services/api'
import { Container, Button, Form, FormGroup, Input, Label } from 'reactstrap';
import cameraIcon from '../../assets/camera.png'
import './events.css';

//EventsPage will show all events
export default function EventsPage(){
    const user_id = localStorage.getItem('user');
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [thumbnail, setThumbnail] = useState(null)
    const [sport, setSport] = useState('')
    const [date, setDate] = useState('')

    const preview = useMemo(()=>{
        return thumbnail ? URL.createObjectURL(thumbnail): null;
    }, [thumbnail])

    /////////////////////////////////////37:17 IN THE VIDEO!!!
    const submitHandler = () => {
        return ""
    }
    
    return(
        <Container>
            <h1>Create your event.</h1>
            <Form onSubmit={submitHandler}>
                <FormGroup>
                    <Label>Upload Image: </Label>
                    <Label id='thumbnail' style={{backgroundImage : `url(${preview})`}} className={thumbnail ? 'has-thumbnail' : ''}>
                        <Input type="file" onChange={(evt) => setThumbnail(evt.target.files[0])}/>
                        <img src={cameraIcon} style={{ maxWidth: "50px" }} alt="upload icon image"/>
                    </Label>
                </FormGroup>
                <FormGroup>
                    <Label>Sport: </Label>
                    <Input id="sport" type="text" value={sport} placeholder={'Sport name'} onChange={(evt) => setSport(evt.target.value)}/>
                </FormGroup>
                <FormGroup>
                    <Label>Title: </Label>
                    <Input id="title" type="text" value={title} placeholder={'Event Title'} onChange={(evt) => setTitle(evt.target.value)}/>
                </FormGroup>
                <FormGroup>
                    <Label>Event Description: </Label>
                    <Input id="description" type="text" value={description} placeholder={'Event Description'} onChange={(evt) => setDescription(evt.target.value)}/>
                </FormGroup>
                <FormGroup>
                    <Label>Event Price: </Label>
                    <Input id="price" type="text" value={price} placeholder={'$0.00'} onChange={(evt) => setPrice(evt.target.value)}/>
                </FormGroup>
                <FormGroup>
                    <Label>Event Date: </Label>
                    <Input id="date" type="date" value={date} placeholder={'$0.00'} onChange={(evt) => setDate(evt.target.value)}/>
                </FormGroup>
                <Button type="submit">
                    Create Event
                </Button>
            </Form>
        </Container>
    )
}