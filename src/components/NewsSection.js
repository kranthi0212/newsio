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