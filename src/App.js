import Header from "./components/header";
import Slider from "./components/slider";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/font.css';
import './styles/main.scss';
import {Col, Row} from "react-bootstrap";
import kitchen from "./assets/images/what we do.png";
import AwesomeSlider from "react-awesome-slider";
import image1 from "./assets/images/gallery1.png";
import image2 from "./assets/images/gallery2.png";
import image3 from "./assets/images/gallery3.png";
import image4 from "./assets/images/gallery4.png";
import Footer from "./components/footer";
function App() {
  return (
    <div className={'app'} style={{width:'100%'}}>
     <Header/>
        <section className={`top-slider`} >
            <Slider/>
        </section>

        <section>
            <div className={`handmade-kitchen`}>
                <Row>
                    <Col md={6} className={`image`}>
                        <img src={kitchen} alt=""/>
                    </Col>
                    <Col md={6}>
                        <div className={`side-content`}>
                            <p className={`text-gold text-uppercase`}>Quality Craftmanship from build to delivery</p>
                            <h3>Discover the beauty of a handmade kitchen</h3>
                            <p className={`text-description`}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget est sit amet sapien venenatis maximus vel in urna. Nam mauris arcu, feugiat in finibus vitae, sollicitudin id purus. Ut imperdiet, magna eu pharetra tincidunt, mauris purus ultrices.
                            </p>
                            <button className={`btn btn-round btn-gold`}>
                                about us
                            </button>
                        </div>
                    </Col>
                </Row>
            </div>
        </section>

        <section className={`testimonials`}>
            <Row className="row testimonials-cover">
                <AwesomeSlider>
                    <div className={`testimonial`}>
                        <p className={`text-gold text-uppercase caption`} >
                            What Our Customers Say
                        </p>
                        <h3 className={`text-center`}>
                            Over 35 years experience designing handmade kitchens
                        </h3>
                        <div className={`testimony`}>
                            <p className={`content text-display`}>
                                Since my first contact I have received a very high level of customer service and advice with my kitchen plans. Ben responded very quickly to all of my emails and delivery of the kitchen was as planned.
                            </p>
                            <p className={`name`}>Jane, Dundee</p>
                        </div>

                        <button className={`btn btn-round btn-gold`}>
                            Frequently Asked Questions
                        </button>
                    </div>
                </AwesomeSlider>
            </Row>
        </section>

        <section className={`gallery`}>
            <div className={`gallery-container`}>
                <h3>
                    Customer Gallery
                </h3>
                <div className="gallery-items-container">
                    <Row>
                        <Col  sm={6} md={3} xs={6}>
                            <img src={image1} alt=""/>
                        </Col>
                        <Col  sm={6} md={3} xs={6}>
                            <img src={image2} alt=""/>
                        </Col>
                        <Col  sm={6} md={3} xs={6}>
                            <img src={image3} alt=""/>
                        </Col>
                        <Col  sm={6} md={3} xs={6}>
                            <img src={image4} alt=""/>
                        </Col>
                    </Row>
                </div>
                <button className={`btn btn-gold btn-round`}>View more</button>
            </div>
        </section>
      <Footer/>
    </div>
  );
}

export default App;
