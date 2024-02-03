import { useState } from "react";


const Home = () => {

    // useState - can be of any types (string, int, array, object, etc)
    // const [name, setName] = useState('Mark')
    const [blogs, setBlogs] = useState([
        {id: 1, title: "The making of this blog", body: "Lorem ipsum...", author: "Mark Caadyang"},
        {id: 2, title: "Trying out keyboard modding!", body: "Lorem ipsum...", author: "Mark Caadyang"},
        {id: 3, title: "My Software Engineering Journey", body: "Lorem ipsum...", author: "Mark Caadyang"}
    ]);
    

    // const handleClick = () => {
    //     console.log("hello world");
    // }

    // const handleClickAgain = (name) => {
    //     console.log("hello " + name);
    // }

    // const handleClickReactive = () => {
    //     setName('Noe');
    // }

    return ( 
        <div className="home">
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>by {blog.author}</p>
                </div>
            ))}
            {/* <h2>Homepage</h2>
            <h1>{ name }</h1>
            <button onClick={handleClickReactive}>Click me!</button>
            <button onClick={() => handleClickAgain("Mark")}>Click me!</button> */}
        </div>
     );
}

export default Home;