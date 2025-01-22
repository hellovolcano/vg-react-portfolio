import React, { useState } from 'react'
import { useForm } from '@formspree/react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import SendIcon from '@mui/icons-material/Send'
import Stack from '@mui/material/Stack'
import Alert from '@mui/material/Alert'
import { validateEmail } from '../../utils/helpers'

const FollowUp = (
    <section className="contact">
        <h3>Thanks for reaching out!</h3>
        <Stack
        spacing={2} 
        sx={{
            mx: "auto",
        }}>
        I will try to respond to your message in 24-48 hours.
    </Stack>
    </section>
    
)

const ContactForm = () => {
    const [formState, setFormState] = useState({name: '', email: '', message: ''})
    const [errorMessage, setErrorMessage] = useState('')
    const { name, email, message } = formState

    const [state, handleSubmit] = useForm("mjvzdaro")
    if (state.succeeded) {
        return FollowUp
    }

    const handleChange = (e) => {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value)
            if (!isValid) {
                setErrorMessage('Please enter a valid email address')
            } else {
                setErrorMessage('')
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required`)
            } else {
                setErrorMessage('')
            }
        }

        if (!errorMessage) {
            setFormState({...formState, [e.target.name]: e.target.value })
        }
    }

    return(
        <section className="contact">

            
            <Stack 
                component="form" 
                spacing={1} 
                sx={{
                    width: 4/5,
                    mx: "auto",
                }}
                onSubmit={handleSubmit}
            >
                <h2>Contact Me</h2>
                <TextField  id="name" name="name" label="Name" variant="outlined" onBlur={handleChange} defaultValue={name} />
                <TextField  sx={{ fontFamily: 'Inter'}} id="email" name="email" label="Email" variant="outlined" onBlur={handleChange} defaultValue={email} />
                <TextField  id="message" name="message" label="Message" variant="outlined" onBlur={handleChange} defaultValue={message} multiline rows={4} sx={{ fontFamily: 'Poppins'}} />
                {errorMessage && <Alert severity="error" variant="filled" sx={{ fontFamily: 'Inter'}} >{errorMessage}</Alert>}
                <Button variant="outlined" type="submit" disabled={state.submitting}>
                    Submit  &nbsp;&nbsp;<SendIcon />
                </Button>
        </Stack>
        </section>
        
        
        
    )
}

export default ContactForm