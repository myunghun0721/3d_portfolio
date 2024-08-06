import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'


const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({name: '', email: '', message: ''})
  const [isLoading, setIsLoading] = useState(false)
  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    setIsLoading(true)
    emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        to_name: 'Myunghun Choi',
        from_email: form.email,
        to_email: 'myunghun0721@gmail.com',
        message: form.message
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    ).then(()=>{
      setIsLoading(false)
      //to do success message

      setForm({name:'', email: '', message: ''});
    }).catch((error)=>{
      setIsLoading(false)
      console.log(error)
      // to do error message
    })
  }

  return (
    <section className='relative flex lg:flex-row flex-col max-container h-[100vh]'>
      <div className='flex-1 min-w-[50%] flex flex-col'>
        <h2 className='head-text'>Get in touch</h2>
        <hr />


        <form
        className='w-full flex flex-col gap-3 mt-10'
        onSubmit={handleSubmit}
        >
          <label className='text-black-500 font-semibold'>
            Name
          </label>
          <input
            type='text'
            name='name'
            className='input'
            placeholder='Name'
            required
            value={form.name}
            onChange={handleChange}
          />

          <label className='text-black-500 font-semibold'>
            Email
          </label>
          <input
            type='text'
            name='email'
            className='input'
            placeholder='email@gmail.com'
            required
            value={form.email}
            onChange={handleChange}
          />

          <label className='text-black-500 font-semibold'>
            Your Message
          </label>
          <textarea
            name='message'
            rows={4}
            className='textarea'
            placeholder='Let me know how I can help you!'
            required
            value={form.message}
            onChange={handleChange}
          />

          <button
            type='submit'
            className='btn'
            disabled={isLoading}
          >
            {isLoading ? 'Sending...' : 'Send Message'}

          </button>
        </form>

      </div>
      <div className='ml-11 mt-11'>
        <br/>
        <h2 className='font-medium'>Contact information</h2>
        <div className="text-white-50"><i className="fa-solid fa-envelope-open-text"></i> myunghun0721@gmail.com
        </div>
        <div className="text-white-50"><i className="fa-solid fa-phone"></i> +1 (315) 746-0872</div>
        <div className="text-white-50"><i className="fa-solid fa-file"></i><a href="./Hun choi's resume.pdf" target="_blank"> Resume</a></div>
        <a href="https://github.com/myunghun0721/API-project" target="_blank"><i className="fa-brands fa-github"
        ></i> GitHub</a>
        <a href="https://linkedin.com/in/hunchoi/" target="_blank"><i className="fa-brands fa-linkedin"
        ></i> LinkedIn</a>
      </div>
    </section>
  )
}

export default Contact
