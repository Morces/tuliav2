import React from 'react'

const Contact = () => {
  return (
    <div className="bg-gray-100" id='contact'>
        <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
            <h2 className="text-base text-[#13497B] font-semibold tracking-wide uppercase">Contact Us</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Get in touch
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                If you have any questions about our property management services or would like to schedule a consultation, please fill out the form below or give us a call. Our office is located in Juja, Kenya.
            </p>
            </div>
            <div className="mt-20 md:mt-12 md:grid md:grid-cols-2 md:gap-6">
            <div className="md:col-span-1">
                <div className="px-4 sm:px-0">
                    <iframe 
                        frameBorder="0" 
                        className='w-full h-96' 
                        src="https://www.openstreetmap.org/export/embed.html?bbox=37.017504572868354%2C-1.102116085918884%2C37.02989637851716%2C-1.0957282391618082&amp;layer=mapnik" 
                    >
                    </iframe>
                    <br/>
                    <small>
                        <a href="https://www.openstreetmap.org/#map=18/-1.09892/37.02370&amp;layers=N" target={'_blank'}>
                            View Larger Map
                        </a>
                    </small>
                </div>
            </div>
            <div className="mt-12 md:mt-0 md:col-span-1">
                <form action="#" method="POST">
                    <div className="shadow-lg overflow-hidden sm:rounded-md">
                        <div className="px-4 py-5 bg-white sm:p-6">
                            <div className="grid grid-cols-6 gap-6">
                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">First name</label>
                                    <input type="text" name="first_name" id="first_name" autoComplete="given-name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full h-10 shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                </div>

                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">Last name</label>
                                    <input type="text" name="last_name" id="last_name" autoComplete="family-name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full h-10 shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                </div>

                                <div className="col-span-6 sm:col-span-4">
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
                                    <input type="text" name="email" id="email" autoComplete="email" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full h-10 shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                </div>

                                <div className="col-span-6 sm:col-span-4">
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                                        Message
                                        <textarea name="message" id="message" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" rows={4} cols={50} ></textarea>
                                    </label>                      
                                </div>
                                
                            </div>
                            <div className="w-full flex justify-center p-4 bg-[#13497B] rounded-md mt-5 text-white">
                                <button type="submit">Submit</button>
                            </div> 
                        </div>   
                             
                    </div>  
                </form>  
            </div>
            </div>  
        </div>  
    </div>
  )
}

export default Contact
