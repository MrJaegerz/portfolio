import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import emailjs from "emailjs-com";
import { init } from 'emailjs-com';
init("user_HsgopNu7NlPzpR3FzsSzG");

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

function FormContact() {

    const classes = useStyles();

    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [subject, setSubject] = React.useState('');
    const [message, setMessage] = React.useState('');

    const handleSubmit = (e) => {
        e.preventDefault()

        // let nameId = document.getElementById('name')
        // let emailId = document.getElementById('email')
        // let subjectId = document.getElementById('subject')
        // let messageId = document.getElementById('message')

        const isEmail = () => {
            let isMail = document.getElementById('email')
            let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/

            if (email.match(regex)) {
                console.log('This email is good')
                return true
            }
            else {
                alert('Your email must be : example@example.com')
            }
        }
        console.log(name, message)
        if (isEmail()) {
            emailjs
                .send(
                    // your service ID
                    "service_rgxcytl",
                    // your template ID
                    "template_9ssvzld",
                    {
                        name,
                        email,
                        subject,
                        message,
                    },
                    // your user ID (protégé par .env)
                    process.env.REACT_APP_EMAILJS_KEY
                )
                .then(
                    () => {
                        setName("");
                        setEmail("");
                        setSubject("");
                        setMessage("");

                            alert("Message has be send")
                    },
                    (err) => {
                        console.log(err);
                        alert("Une erreur s'est produite, veuillez réessayer.")
                    }
                );
        } else {

            if (!name) {
                alert("Please enter a name")
            }
            if (!email) {
                alert("Please enter a email")
            }
            if (!message) {
                alert("Please enter a message")
            }
        }
    };


    return (
        <form className={classes.root} noValidate autoComplete="off" style={{ width: '75%' }}>
            <div className='content-separator'>
                <TextField
                    id="outlined-multiline-flexible name"
                    label="Name"
                    multiline
                    rowsMax={4}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    variant="outlined"
                    style={{ width: '50%' }}
                />
                <TextField
                    id="outlined-multiline-flexible email"
                    label="Email"
                    multiline
                    type="email"
                    rowsMax={4}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    variant="outlined"
                    style={{ width: '50%' }}
                />
            </div>
            <div className='content-separator'>
                <TextField
                    id="outlined-multiline-flexible subject"
                    label="Subject"
                    multiline
                    rowsMax={4}
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    variant="outlined"
                    style={{ width: '100%' }}
                />
            </div>
            <div className='content-separator'>
                <TextField
                    id="outlined-multiline-static message"
                    label="Message"
                    multiline
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    defaultValue=""
                    variant="outlined"
                    style={{ width: '100%' }}
                />
            </div>
            <div className='content-separator'>
                <Button
                    variant="outlined"
                    rows={4}
                    type="submit"
                    onClick={handleSubmit}
                    style={{ width: '100%', margin: 8 }}
                >Send</Button>
            </div>
        </form>
    );
}

export default FormContact
