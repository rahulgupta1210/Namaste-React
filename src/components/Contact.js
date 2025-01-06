
const Contact =()=>{
    return (
        <div>
            <h1 className="font-bold text-3xl p-4 m-4">CONTACT</h1>
            <h2>This is contact US Page</h2>
            <form>
                <input type="text" placeholder="Enter your name" className="block m-4 p-2 border-black"/>
                <input type="text" placeholder="Enter your message" className="block m-4 p-2 border-black"/>
                <button className="border-black p-2 m-2 bg-gray-50">Submit</button>
            </form>
        </div>
    )
}

export default Contact;