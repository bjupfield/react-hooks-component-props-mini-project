function About({link = "https://via.placeholder.com/215",aboutText}){
    return(
        <aside>
           <img src= {link} alt="blog logo"></img> 
           <p>{aboutText}</p>
        </aside>
    )
}
export default About