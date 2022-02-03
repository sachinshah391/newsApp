import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";


const New=(props)=> {
const [articles, setArticles] = useState([]);
const [loading, setLoading] = useState(true);
const [page, setPage] = useState(1);
      
  
useEffect(() => {
  updateNews();
    
}, );

const updateNews= async ()=>{
    let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=ea277f9b031247d1baba30fca3af35c9&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data= await fetch(url);
    let parsedData= await data.json();
    //console.log(parsedData);
    setArticles(parsedData.articles);
    setLoading(false);
}

  const handleNextClick= async()=>{
    setPage(page+1);
    updateNews();
  }

  const handlePreviousClick=async()=>{
    setPage(page-1);
    updateNews();
  }

     return (
      
        <div className="container my-3">
            <h2 className="text-center">Top Headlines</h2>
            {loading && <Spinner/>}   

            {/* loading=true then show the spinner */}
          
             <div className="row">
                {articles.map((elements)=>{
              
                    return <div className="col-md-4" key={elements.url}>
                      <NewsItem 
                      title={elements.title===null ? "" : elements.title} 
                      description={elements.description===null ? "" : elements.description} 
                      imageUrl={elements.urlToImage===null ? "" : elements.urlToImage} 
                      newsUrl={elements.url===null ? "" : elements.url} 
                      author={elements.author===null ? "unknown" : elements.author} 
                      date={elements.publishedAt===null ? "" : elements.publishedAt}/>
                    </div>
                                        })
                }
          </div> 

          <div className="container d-flex justify-content-between">
              <button disabled={page<=1} type="button" className="btn btn-dark" onClick={handlePreviousClick}>&laquo; Previous</button>
              <button type="button" className="btn btn-dark" onClick={handleNextClick}>Next &raquo;</button>
          </div>
        </div>
        
    );
}
export default New;
