import React, { useState, useEffect } from 'react'
import 'antd/dist/antd.css';
import { Row, Col, Divider, Card } from 'antd';
import { fetchNews } from '../api';
import ReactHtmlParser from 'react-html-parser';
const { Meta } = Card;

const NewsSection = (request) => {
    const [newsSection, setNewsSection] = useState([]);
    useEffect(() => {
        const fetchAPI = async () => {
            setNewsSection(await fetchNews(request));
        };
        fetchAPI();
    }, [request]);

    return (
        <div>
            <Row>
                <Col>
                    <h1 style={{ fontSize: '30px' }}>{request.topHeading} </h1>

                    <div className="countryName" style={{marginBottom:"10px",marginTop:"10px",marginLeft:"1px",fontWeight:"bold"}}>
                        
                        <span>
                            {
                                (request.topHeading === 'ABC News') ?
                                "CountryName: United states" :""
                            }
                        </span>
                        <span>
                            {
                                (request.topHeading === 'Aftenposten') ?
                                "Norway" :""
                            }
                        </span>
                        <span>
                            {
                                (request.topHeading === 'Al Jazeera English') ?
                                "Qatar" :""
                            }
                        </span>
                        <span>
                            {
                                (request.topHeading === 'Agenzia Nazionale Stampa Associata') ?
                                "Italy" :""
                            }
                        </span>
                        <span>
                            {
                                (request.topHeading === 'Argaam') ?
                                "Saudi Arabian" :""
                            }
                        </span>
                        <span>
                            {
                                (request.topHeading === 'Ars Technica') ?
                                "Massachusetts" :""
                            }
                        </span>
                        <span>
                            {
                                (request.topHeading === 'Ary News') ?
                                "Pakistan" :""
                            }
                        </span>
                        <span>
                            {
                                (request.topHeading === 'Axios media') ?
                                "America" :""
                            }
                        </span>
                        <span>
                            {
                                (request.topHeading === 'Australian financial review') ?
                                "Australia" :""
                            }
                        </span>
                        <span>
                            {
                                (request.topHeading === 'BBC News') ?
                                "London" :""
                            }
                        </span>
                        <span>
                            {
                                (request.topHeading === 'BBC Sports') ?
                                "London" :""
                            }
                        </span>
                        <span>
                            {
                                (request.topHeading === 'Bild') ?
                                "Germany" :""
                            }
                        </span>
                        <span>
                            {
                                (request.topHeading === 'Blasting news') ?
                                "London" :""
                            }
                        </span>
                        <span>
                            {
                                (request.topHeading === 'Bleacher Report') ?
                                "California" :""
                            }
                        </span>
                        <span>
                            {
                                (request.topHeading === 'Bloomberg') ?
                                "United states" :""
                            }
                        </span>
                        <span>
                            {
                                (request.topHeading === 'Bloomberg Business') ?
                                "United states" :""
                            }
                        </span>
                        <span>
                            {
                                (request.topHeading === 'Bloomberg News') ?
                                "United states" :"" 
                            }
                        </span>
                        <span>
                            {
                                (request.topHeading === 'Breitbart News') ?
                                "United states" :""
                            }
                        </span>
                        <span>
                            {
                                (request.topHeading === 'Business Insider') ?
                                "United states" :""
                            }
                        </span>
                        <span>
                            {
                                (request.topHeading === 'Business Insider (UK)') ?
                                "United states" :""
                            }
                        </span>
                        <span>
                            {
                                (request.topHeading === 'Buzzfeed') ?
                                "United states" :""
                            }
                        </span>
                        <span>
                            {
                                (request.topHeading === 'CBC News') ?
                                "Canada" :""
                            }
                        </span>
                        <span>
                            {
                                (request.topHeading === 'CBS News') ?
                                "United states" :""
                            }
                        </span>

                        <span>
                            
                            {
                                (request.topHeading === 'CNN') ?
                                "United states" :""
                            }
                        </span>
                        <span>
                            
                            {
                                (request.topHeading === 'CNN Spanish') ?
                                "United states" :""
                            }
                        </span>
                        <span>
                            
                            {
                                (request.topHeading === 'Der Tagesspiegel') ?
                                "United states" :""
                            }
                        </span>
                        <span>
                            
                            {
                                (request.topHeading === 'Die Zeit') ?
                                "United states" :""
                            }
                        </span>
                        <span>
                            
                            {
                                (request.topHeading === 'El Mundo') ?
                                "United states" :""
                            }
                        </span>
                        <span>
                            
                            {
                                (request.topHeading === 'Engadget') ?
                                "United states" :""
                            }
                        </span>
                        <span>
                            
                            {
                                (request.topHeading === 'Focus') ?
                                "United states" :""
                            }
                        </span>
                        <span>
                            
                            {
                                (request.topHeading === 'Fortune') ?
                                "United states" :""
                            }
                        </span>
                        <span>
                            
                            {
                                (request.topHeading === 'FourFourTow') ?
                                "United states" :""
                            }
                        </span>
                        <span>
                            
                            {
                                (request.topHeading === 'Fox News') ?
                                "United states" :""
                            }
                        </span>
                        <span>
                            
                            {
                                (request.topHeading === 'Fox Sports') ?
                                "United states" :""
                            }
                        </span>
                        <span>
                            
                            {
                                (request.topHeading === 'Globo') ?
                                "United states" :""
                            }
                        </span>
                        <span>
                            
                            {
                                (request.topHeading === 'Göteborgs-Posten') ?
                                "United states" :""
                            }
                        </span>
                        <span>
                            
                            {
                                (request.topHeading === 'Gruenderzene') ?
                                "United states" :""
                            }
                        </span>
                        <span>
                            
                            {
                                (request.topHeading === 'Hacker News') ?
                                "United states" :""
                            }
                        </span>
                        <span>
                            {
                                (request.topHeading === 'Handelsblatt') ?
                                "United states" :""
                            }
                        </span>
                        <span>
                            {
                                (request.topHeading === 'IGN') ?
                                "United states" :""
                            }
                        </span>
                        <span>
                            {
                                (request.topHeading === 'Il Sole 24 Ore') ?
                                "United states" :""
                            }
                        </span>
                        <span>
                            {
                                (request.topHeading === 'Independent') ?
                                "United states" :""
                            }
                        </span>
                        <span>
                            {
                                (request.topHeading === 'Infobae') ?
                                "United states" :""
                            }
                        </span>
                        <span>
                            {
                                (request.topHeading === 'InfoMoney') ?
                                "United states" :""
                            }
                        </span>
                        <span>
                            {
                                (request.topHeading === 'La Gaceta') ?
                                "United states" :""
                            }
                        </span>
                        <span>
                            {
                                (request.topHeading === 'La Nacion') ?
                                "United states" :""
                            }
                        </span>
                        <span>
                            {
                                (request.topHeading === 'La Repubblica') ?
                                "United states" :""
                            }
                        </span>
                        <span>
                            {
                                (request.topHeading === 'Le Monde') ?
                                "United states" :""
                            }
                        </span>
                        <span>
                            {
                                (request.topHeading === 'Lenta') ?
                                "United states" :""
                            }
                        </span>
                        <span>
                            {
                                (request.topHeading === 'Libération') ?
                                "United states" :""
                            }
                        </span>
                        <span>
                            {
                                (request.topHeading === 'Les Echos') ?
                                "United states" :""
                            }
                        </span>
                        <span>
                            {
                                (request.topHeading === 'Marca') ?
                                "United states" :""
                            }
                        </span>
                        <span>
                            {
                                (request.topHeading === 'Mashable') ?
                                "United states" :""
                            }
                        </span>
                        <span>
                            {
                                (request.topHeading === 'MSNBC') ?
                                "United states" :""
                            }
                        </span>
                        <span>
                            {
                                (request.topHeading === 'MTV News') ?
                                "United states" :""
                            }
                        </span>
                        <span>
                            {
                                (request.topHeading === 'National Review') ?
                                "United states" :""
                            }
                        </span>
                        <span>
                            {
                                (request.topHeading === 'NBC News') ?
                                "United states" :""
                            }
                        </span>
                        <span>
                            {
                                (request.topHeading === 'News24') ?
                                "United states" :""
                            }
                        </span>
                        <span>
                            {
                                (request.topHeading === 'New Scientist') ?
                                "United states" :""
                            }
                        </span>
                        <span>
                            {
                                (request.topHeading === 'Newsweek') ?
                                "United states" :""
                            }
                        </span>
                        <span>
                            {
                                (request.topHeading === 'New York Magazine') ?
                                "United states" :""
                            }
                        </span>
                        <span>
                            {
                                (request.topHeading === 'Next Big Future') ?
                                "United states" :""
                            }
                        </span>
                        <span>
                            {
                                (request.topHeading === 'NHL News') ?
                                "United states" :""
                            }
                        </span>
                        <span>
                            {
                                (request.topHeading === 'NRK') ?
                                "United states" :""
                            }
                        </span>
                        <span>
                            {
                                (request.topHeading === 'Politico') ?
                                "United states" :""
                            }
                        </span>
                        <span>
                            {
                                (request.topHeading === 'Polygon') ?
                                "United states" :""
                            }
                        </span>
                        <span>
                            {
                                (request.topHeading === 'RBC') ?
                                "United states" :""
                            }
                        </span>
                        <span>
                            {
                                (request.topHeading === 'Recode') ?
                                "United states" :""
                            }
                        </span>
                        <span>
                            {
                                (request.topHeading === 'Reddit') ?
                                "United states" :""
                            }
                        </span>
                        <span>
                            {
                                (request.topHeading === 'Reuters/r/all') ?
                                "United states" :""
                            }
                        </span>
                        <span>
                            {
                                (request.topHeading === 'RT') ?
                                "United states" :""
                            }
                        </span>
                        <span>
                            {
                                (request.topHeading === 'RTE') ?
                                "United states" :""
                            }
                        </span>
                        <span>
                            {
                                (request.topHeading === 'RTL Nieuws') ?
                                "United states" :""
                            }   
                        </span>
                        <span>
                            {
                                (request.topHeading === 'SABQ') ?
                                "United states" :""
                            }
                        </span>
                        <span>
                            {
                                (request.topHeading === 'Spiegel Online') ?
                                "United states" :""
                            }
                        </span>
                        <span>
                            {
                                (request.topHeading === 'Svenska Dagbladet') ?
                                "United states" :""
                            }   
                        </span>
                        <span>
                            {
                                (request.topHeading === 'T3n') ?
                                "United states" :""
                            }
                        </span>
                        <span>
                            {
                                (request.topHeading === 'TechCrunch') ?
                                "United states" :""
                            }
                        </span>
                        <span>
                            {
                                (request.topHeading === 'TechRadar') ?
                                "United states" :""
                            }
                        </span>
                        <span>
                            {
                                (request.topHeading === 'The Globe And Mail') ?
                                "United states" :""
                            }
                        </span>
                        <span>
                            {
                                (request.topHeading === 'The Hill') ?
                                "United states" :""
                            }
                        </span>
                        <span>
                            {
                                (request.topHeading === 'The Hindu') ?
                                "United states" :""
                            }
                        </span>
                        <span>
                            {
                                (request.topHeading === 'The Huffington Post') ?
                                "United states" :""
                            }
                        </span>
                        <span>
                            {
                                (request.topHeading === 'The Irish Times') ?
                                "United states" :""
                            }
                        </span>
                        <span>
                            {
                                (request.topHeading === 'The Jerusalem Post') ?
                                "United states" :""
                            }
                        </span>
                        <span>
                            {
                                (request.topHeading === 'The Lab Bible') ?
                                "United states" :""
                            }
                        </span>
                        <span>
                            {
                                (request.topHeading === 'The Next Web') ?
                                "United states" :""
                            }
                        </span>
                        <span>
                            {
                                (request.topHeading === 'The Sport Bible') ?
                                "United states" :""
                            }
                        </span>
                        <span>
                            {
                                (request.topHeading === 'The Times of India') ?
                                "United states" :""
                            }
                        </span>
                        <span>
                            {
                                (request.topHeading === 'The Verge') ?
                                "United states" :""
                            }
                        </span>
                        <span>
                            {
                                (request.topHeading === 'The Wall Street Journal') ?
                                "United states" :""
                            }
                        </span>
                        <span>
                            {
                                (request.topHeading === 'The Washington Post') ?
                                "United states" :""
                            }
                        </span>
                        <span>
                            {
                                (request.topHeading === 'The Washington Times') ?
                                "United states" :""
                            }
                        </span>
                        <span>
                            {
                                (request.topHeading === 'Time') ?
                                "United states" :""
                            }
                        </span>
                        <span>
                            {
                                (request.topHeading === 'USA Today') ?
                                "United states" :""
                            }
                        </span>
                        <span>
                            {
                                (request.topHeading === 'Vice News') ?
                                "United states" :""
                            }
                        </span>
                        <span>
                            {
                                (request.topHeading === 'Wired') ?
                                "United states" :""
                            }
                        </span>
                        <span>
                            {
                                (request.topHeading === 'Wired.de') ?
                                "United states" :""
                            }
                        </span>
                        <span>
                            {
                                (request.topHeading === 'Wirtschafts Woche') ?
                                "United states" :""
                            }
                        </span>
                        <span>
                            {
                                (request.topHeading === 'The Wall Street Journal') ?
                                "United states" :""
                            }
                        </span>
                        <span>
                            {
                                (request.topHeading === 'The Washington Post') ?
                                "United states" :""
                            }
                        </span>
                        <span>
                            {
                                (request.topHeading === 'The Washington Times') ?
                                "United states" :""
                            }
                        </span>
                        <span>
                            {
                                (request.topHeading === 'Vice News') ?
                                "United states" :""
                            }
                        </span>
                        <span>
                            {
                                (request.topHeading === 'Xinhua Net') ?
                                "United states" :""
                            }
                        </span>
                        <span>
                            {
                                (request.topHeading === 'Ynet') ?
                                "United states" :""
                            }
                        </span>
                        




                        
                       
                    </div>
                    





                    
                </Col>
            </Row>
            <Row>
                {newsSection.length > 1 ?
                    newsSection.map((article, key) =>
                        article.urlToImage === "" || article.urlToImage === null ? null :
                            <Col key={key} md={{ span: 8 }} sm={{ span: 24 }} >
                                <Card onClick={() => window.open(article.url, "_blank")} type="inner" hoverable="true"
                                    style={{ width: 380, marginBottom: 20 }}
                                    cover={article.urlToImage === "" || article.urlToImage === null ? null :
                                        <img
                                            alt={article.title}
                                            src={article.urlToImage}
                                        />
                                    }
                                    title={article.source.name === "" || article.source.name === null ? null : "Source: " + ReactHtmlParser(article.source.name)}
                                    extra={article.author === "" || article.author === null ? null : "Author: " + ReactHtmlParser(article.author)}
                                >
                                    <h3>{ReactHtmlParser(article.title)}</h3>
                                    <Meta
                                        description={ReactHtmlParser(article.description)}
                                    />
                                </Card>
                            </Col>
                    )
                    : "Loading.."}
            </Row>
            {request.linkText != null ?
                <Row>
                    <Col>
                        <Divider />
                    </Col>
                </Row> : null}
        </div>
    )
}

export default NewsSection;