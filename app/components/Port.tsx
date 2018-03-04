import * as React from 'react'; 
import * as ReactDOM from 'react-dom';
import * as axios from 'axios';

import {default as PortPhotoswipe} from './PortPhotoswipe';

export default class Port extends React.Component<any, any> {

	constructor(props: any) {
    super(props);   
    this.state = { data: [] }; 	
  }

  componentDidMount() {
    axios.get("data/ports.json")
      .then(result => {       
        this.setState({ data: result.data.data});
      });
  }

	render() {
    var items = this.state.data;

    const divItems = items.filter(item => item.isShow).map((item, index) => 
        <div className="col-xs-6 col-sm-4 col-md-3 portfolio-item" key={index}>
            <figure itemProp="associatedMedia" itemScope itemType="http://schema.org/ImageObject" >
                <a href={item.imgUrl} itemProp="contentUrl" data-size={item.imgSize} className="portfolio-link">							
                  <img src={item.thumnailUrl} className="img-responsive" itemProp="thumbnail" alt={item.description} />
                </a>
                <figcaption itemProp="caption description" className="hidden">{item.description}</figcaption>
            </figure>					
       </div>
    );

		return (    
      <div>
        <section id="portfolio" className="success">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h3>Portfolio</h3>
                        <hr />
                    </div>
                </div>
                <div className="row my-gallery">
                  {divItems}
                </div>
              </div>
        </section>
        <PortPhotoswipe />        
      </div>
      
    );
	}
}