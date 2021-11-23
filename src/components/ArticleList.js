import Article from "./Article"
function ArticleList({arr}){
    return(
        <main>
            {arr.map(e=>{
                console.log(e)
                return <Article title = {e.title} date = {e.date} preview = {e.preview} key = {e.id}/>
            })}
        </main>
    )
}
export default ArticleList;