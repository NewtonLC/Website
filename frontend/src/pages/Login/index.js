import React, { useState } from 'react';
import api from '../../services/api';
import { useNavigate } from 'react-router-dom';
import { Container, Button, Form, FormGroup, Input } from 'reactstrap';

export default function Login(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();

    const handleSubmit = async evt => {                 //evt is short for event
        evt.preventDefault();

        const response = await api.post('/login', { email, password })
        const userId = response.data._id || false;

        if(userId){                                     //Successful login
            localStorage.setItem('user', userId)
            console.log("Successful login. Redirecting to dashboard");
            navigate('/dashboard')
        }else{                                          //Unsuccessful login
            const { message } = response.data
            console.log(message);
        }
    }

    return(
        <Container>
            <h2>Login:</h2>
            <p>Please <strong>Login</strong> to your account.</p>
            <Form onSubmit={handleSubmit}>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Input type="email" name="email" id="email" placeholder="Your email" onChange={evt => setEmail(evt.target.value)}/>
                </FormGroup>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Input type="password" name="password" id="password" placeholder="Your password" onChange={evt => setPassword(evt.target.value)}/>
                </FormGroup>
                <Button>Submit</Button>
            </Form>
        </Container>
    );
}