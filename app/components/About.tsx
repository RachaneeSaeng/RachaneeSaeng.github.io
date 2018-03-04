import * as React from 'react'; 
import * as ReactDOM from 'react-dom';

export default class About extends React.Component<any, any> {

	constructor(props: any) {
    super(props);
  }

	render() {
		var about1 = "I'm a dev girl who proficient in C# .Net with more than five years experience. I'm enthusiastic, fast learner and untiring. I enjoy turning complex requirements into system architecture and develop it to be intelligent softwares.";
		var about2 = "I believe in concept of ‘lean&share’ because new technologies are released every day so we should avoid studying the same things. Exchanging knowledge among team members is the fastest method to improve their competence.";
		
        return (
			<section id="about">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h3>About Me</h3>
                            <hr />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-lg-offset-2">
                            <p>{about1}</p>
                        </div>
                        <div className="col-lg-4">
                            <p>{about2}</p>
                        </div>                
                    </div>
                </div>
            </section>
			);
	}
}