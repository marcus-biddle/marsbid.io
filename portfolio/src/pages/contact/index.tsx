import { FormEvent, useEffect, useState } from "react"

async function saveFormData(data: object) {
    return await fetch("/api/form", {
        body: JSON.stringify(data),
        headers: {"Content-Type": "application/json"},
        method: "POST"
    })
}

const Form = () => {
    const [formData, setFormData] = useState({
        "first": "",
        "last": "",
        "email": "",
        "note": ""
    });

    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
        const response = await saveFormData(formData);
        // https://www.propelauth.com/post/creating-advanced-reusable-forms-in-next-js
    }

    useEffect(() => {
        console.log(formData);
    })

    return (
        <form onSubmit={onSubmit}>
            <label htmlFor="first">First name:</label>
            <input type="text" onChange={e => setFormData({...formData, first: e.target.value})} id="first" name="first" required={true}/>

            <label htmlFor="last">Last name:</label>
            <input type="text" onChange={e => setFormData({...formData, last: e.target.value})} id="last" name="last" required={true}/>

            <label htmlFor="email">Email:</label>
            <input type="text" onChange={e => setFormData({...formData, email: e.target.value})} id="email" name="email" required={true}/>

            <label htmlFor="note">Note:</label>
            <input type="text" onChange={e => setFormData({...formData, note: e.target.value})} id="note" name="note" required={true}/>

            <button type="submit">Submit</button>
        </form>
    )
}

export default function Contact() {
    return (
        <div>
            <h1 className='text-3xl font-bold'>Contact Me</h1>
            <p className=' my-5'>{'Below are my contact information. '}</p>

            <Form />
        </div>
    )
}