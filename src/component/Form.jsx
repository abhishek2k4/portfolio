import React from 'react'

const Form = () => {
  return (
    <div name="contact" className="flex justify-center items-center w-full py-16 bg-gradient-to-b from-gray-950 via-gray-950 via-20%  to-gray-700">
        {/* wrapper */}
        <div className="max-w-screen-lg px-3 pt-14 w-full">
            {/* title  */}
            <div className="pb-8 mx-auto">
                <h2 className="text-4xl font-semibold inline text-amber-50 border-b-4 border-amber-400">
                    Contact
                </h2>
                <p className="text-gray-300 text-base mt-4 font-light ">
                    Submit the form below to get in touch with me
                </p>
            </div>

            {/* form  */}
            <div className='w-full '>
                <form action="https://getform.io/f/bejypjpa" method='POST' className='flex flex-col gap-8 w-full md:w-1/2'>
                    <input type="text" name="name" placeholder="Name" className='p-2 focus:outline-none rounded-lg bg-transparent border-2 border-amber-400 placeholder-gray-500 text-amber-50 text-lg' spellCheck="false"/>
                    <input type="email" name="email" placeholder="Email" className='p-2 focus:outline-none rounded-lg bg-transparent border-2 border-amber-400 placeholder-gray-500 text-amber-50 text-lg' spellCheck="false"/>
                    <textarea name="message" rows={5} placeholder='Your message' className='p-2 focus:outline-none rounded-lg bg-transparent border-2 border-amber-400 placeholder-gray-500 text-amber-50 text-lg' defaultValue="Hello, I would like to connect with you"></textarea>
                    <button className='p-2 bg-gradient-to-b from-amber-400 to-amber-600 hover:to-amber-700 w-1/2 mx-auto rounded-lg text-amber-50 hover:scale-[1.02] hover:shadow-lg duration-200'>Let's Talk</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Form