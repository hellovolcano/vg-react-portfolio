import React from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import SendIcon from '@mui/icons-material/Send'
import Stack from '@mui/material/Stack'

const ContactForm = () => {
    return(
        <section>
            <h2>Contact Me</h2>
            <Stack 
            component="form" 
            spacing={2} 
            sx={{
                width: 4/5,
                mx: "auto"
        }}>
                <TextField id="name" label="Name" variant="outlined" />
                <TextField id="email" label="Email" variant="outlined" />
                <TextField id="message" label="Message" variant="outlined" multiline rows={4} />
                <Button variant="outlined">
                    Submit  &nbsp;&nbsp;<SendIcon />
                </Button>
        </Stack>
        </section>
        
        
        
    )
}

export default ContactForm