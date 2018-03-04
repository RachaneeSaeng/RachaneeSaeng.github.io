import * as React from 'react'; 
import * as ReactDOM from 'react-dom';

export default class Intro extends React.Component<any, any> {

	constructor(props: any) {
    super(props);
  }

	render() {
		return (
			 <header>
                <section id="header" className="success">
                    <div className="container">
                        <div className="row">
                            <div>
                                <img className="img-responsive" src="images/Profile2.png" alt="" />
                                <div className="intro-text">
                                    <span className="name">Rachanee Saengkrajai</span>
                                    <hr className="devider" />
                                    <span className="skills">Software Engineer at Agoda.com<br/>Proficient in C# .Net</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </header>
			);
	}

}