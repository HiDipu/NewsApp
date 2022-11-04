import React, {useEffect,useState} from 'react'
import NewsItem from './NewsItem'
import Spinner from '../spinner';
import propTypes from 'prop-types'


const News =(props)=>{
   const [articles, setArticles] = useState([])
   const [loading, setLoading] = useState(false)
   const [page, setPage] = useState(1)



    
    
    // constructor(props){
    //     super(props);
        
    // }

    const updateNews=async ()=>{
    const url ="https://newsapi.org/v2/top-headlines?country=in&apiKey=ff2c3a37217b4f8dbb623d117e142800";
    let data = await fetch(url);
    let parsedData =  await data.json();
    console.log(parsedData);
    setArticles(parsedData.articles)
    setLoading(false)
    }

      useEffect(() => {
      updateNews();
    }, [])

      //   async componentDidMount(){
      //   let url ="https://newsapi.org/v2/top-headlines?country=in&apiKey=5d67397afc504511b1ff66795433ba29";
      //   let data = await fetch(url);
      //   let parsedData =  await data.json();
      //   console.log(parsedData);
      //   this.setState({articles:parsedData.articles, totalResults: parsedData.totalResults});
      //   this.updateNews()
      //  }


     //const handlePrevClick =async ()=>{
        // console.log("Previous")
        // let url ="https://newsapi.org/v2/top-headlines?country=in&apiKey=dbe57b028aeb41e285a226a94865f7a7";
        // let data = await fetch(url);
        // let parsedData =  await data.json();
        // console.log(parsedData);
        // this.setState({
        //     page: this.state.page - 1,
        //     articles:parsedData.articles
        //})
        //this.setState({ page: this.state.page - 1})
        //setPage(page-1)
        //updateNews();

    //}

      //const handleNextClick = async()=>{
        // console.log("Next");
        // //if(this.state.totalResults/20)
        // let url ="https://newsapi.org/v2/top-headlines?country=in&apiKey=5d67397afc504511b1ff66795433ba29;
        // let data = await fetch(url);
        // let parsedData =  await data.json();
        // console.log(parsedData);
        // this.setState({
        //     page: this.state.page + 1,
        //     articles:parsedData.articles
        // })
        //this.setState({ page: this.state.page + 1})
        //setPage(page+1)
        //updateNews();
   // }


  
    return (
      <div className="container my-3">
        <h1 className="text-center" style={{marginTop:'90px'}}>IndiaNews-Top Headlines</h1>
       {loading && <Spinner/>}
        <div className="row">
        {articles.map((element)=>{
             return <div className="col md-4" key= {element.url}>
            <NewsItem title= {element?element.title.slice(0, 45): ""} decsription= {element.description}
             imageUrl = {element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
            </div>
        })}
        </div>

        {/* <div className="container d-flex justify-content-between">
        <button disabled = {this.state.page <=1} type="button" class="btn btn-dark" onClick={this.handlePrevClick}> &larr;Previous</button>
        <button  type="button" class="btn btn-dark" onClick={this.handleNextClick}>next &rarr;</button>
        </div> */}

      </div>
    )
}


News.defaultProps ={
  country:'in',
  pageSize: 8,
  category:'general'
}

News.propTypes ={
   country: propTypes.string,
   pageSize: propTypes.number,
   category:propTypes.string,

}

export default News