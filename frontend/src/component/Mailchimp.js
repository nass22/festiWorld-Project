import * as React from 'react';
import MailchimpSubscribe from "react-mailchimp-subscribe";



const Form = () => <MailchimpSubscribe url={url} />
const url = "https://hotmail.us20.list-manage.com/subscribe/post?u=3e3d0f4d0b691f629eadcf3a0&amp;id=c9dbd3753c"

function Mailchimp() {
    return (

        <MailchimpSubscribe
            url={url}
            render={({ subscribe, status, message }) => (

                <div>
                    <Form  onSubmitted={formData => subscribe(formData)} />
                    <div >
                        {status === "sending" && <div style={{ width: '100%', mt: 3, mb: 2, color: 'white' }}>sending...</div>}
                        {status === "error" && <div style={{ width: '100%', mt: 3, mb: 2, color: 'white' }} dangerouslySetInnerHTML={{ __html: message }} />}
                        {status === "success" && <div style={{ width: '100%', mt: 3, mb: 2, color: 'white' }}>Subscribed !</div>}
                    </div>
                </div>
            )} />
    )
}

export default Mailchimp