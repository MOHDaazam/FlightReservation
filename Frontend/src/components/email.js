import React, { Component } from 'react';

class Email extends Component {



    render() {
        const api = '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'
        const sgMail = require('@sendgrid/mail');
        sgMail.setApiKey(api)
        const msg = {
            to: 'mohd.azam@cognizant.com ',
            from: 'salesmafiaonline@gmail.com',
            subject: 'Sending with Twilio SendGrid is Fun',
            text: 'and easy to do anywhere, even with Node.js',
            html: '<strong>and easy to do anywhere, even with Node.js</strong>',
        };
        sgMail.send(msg)
        // .then(reponse => {
        //     console.log(reponse)
        //     error => {
        //         console.log(error)
        //     }
        // })
        console.log('email sent')
        return (
            <div>from email</div>
        )
    }
}
export default Email;

