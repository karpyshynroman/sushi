import React from 'react';
import {Card, CardDeck} from "react-bootstrap";

const Main = () => {
    return (
        <div>
            <div className="main-carousel">
                <div className="main-carousel__info">
                    <h1>Lorem Ipsum simply dummy text</h1>
                    <button type="button" className="btn btn-danger">Contact us &rarr;</button>
                </div>
            </div>
            <div className="main-menu">
                <CardDeck>
                    <Card className="main-menu__card">
                        <Card.Img variant="top"
                                  src="https://www.sushiexpress.lt/wp-content/uploads/2017/01/gunkan-su-lasisa-ir-karai-padazu-580x430.jpg"
                                  className="main-menu-image"
                        />
                        <Card.Body>
                            <Card.Title>Gunkan</Card.Title>
                        </Card.Body>
                    </Card>
                    <Card className="main-menu__card">
                        <Card.Img variant="top"
                                  src="https://www.sushiart.ae/product-6667-400x400/seabream-poke-bowl.png"
                                  className="main-menu-image"
                        />
                        <Card.Body>
                            <Card.Title>Pokebowl</Card.Title>
                        </Card.Body>
                    </Card>
                    <Card className="main-menu__card">
                        <Card.Img variant="top"
                                  src="https://pngriver.com/wp-content/uploads/2018/04/Download-Sushi-PNG-Image.png"
                                  className="main-menu-image"
                        />
                        <Card.Body>
                            <Card.Title>Maki</Card.Title>
                        </Card.Body>
                    </Card>
                </CardDeck>
                <CardDeck>
                    <Card className="main-menu__card">
                        <Card.Img variant="top"
                                  src="https://www.sushiexpress.lt/wp-content/uploads/2017/01/gunkan-su-lasisa-ir-karai-padazu-580x430.jpg"
                                  className="main-menu-image"
                        />
                        <Card.Body>
                            <Card.Title>Gunkan</Card.Title>
                        </Card.Body>
                    </Card>
                    <Card className="main-menu__card">
                        <Card.Img variant="top"
                                  src="https://www.sushiart.ae/product-6667-400x400/seabream-poke-bowl.png"
                                  className="main-menu-image"
                        />
                        <Card.Body>
                            <Card.Title>Pokebowl</Card.Title>
                        </Card.Body>
                    </Card>
                    <Card className="main-menu__card">
                        <Card.Img variant="top"
                                  src="https://pngriver.com/wp-content/uploads/2018/04/Download-Sushi-PNG-Image.png"
                                  className="main-menu-image"
                        />
                        <Card.Body>
                            <Card.Title>Maki</Card.Title>
                        </Card.Body>
                    </Card>
                </CardDeck>
                <CardDeck>
                    <Card className="main-menu__card">
                        <Card.Img variant="top"
                                  src="https://www.sushiexpress.lt/wp-content/uploads/2017/01/gunkan-su-lasisa-ir-karai-padazu-580x430.jpg"
                                  className="main-menu-image"
                        />
                        <Card.Body>
                            <Card.Title>Gunkan</Card.Title>
                        </Card.Body>
                    </Card>
                    <Card className="main-menu__card">
                        <Card.Img variant="top"
                                  src="https://www.sushiart.ae/product-6667-400x400/seabream-poke-bowl.png"
                                  className="main-menu-image"
                        />
                        <Card.Body>
                            <Card.Title>Pokebowl</Card.Title>
                        </Card.Body>
                    </Card>
                    <Card className="main-menu__card">
                        <Card.Img variant="top"
                                  src="https://pngriver.com/wp-content/uploads/2018/04/Download-Sushi-PNG-Image.png"
                                  className="main-menu-image"
                        />
                        <Card.Body>
                            <Card.Title>Maki</Card.Title>
                        </Card.Body>
                    </Card>
                </CardDeck>
            </div>
        </div>
    );
};

export default Main;
