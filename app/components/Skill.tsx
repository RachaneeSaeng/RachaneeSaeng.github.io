import * as React from 'react'; 
import * as ReactDOM from 'react-dom';

export default class Skill extends React.Component<any, any> {

	constructor(props: any) {
    super(props);
  }

	render() {
		return (
			<section id="skill">
                <div className="container">
                    <div className="row">
                        <div className="text-center">
                            <h3>Professional Skill</h3>
                        <hr />
                        </div>
                    </div>
                    <div className="row">
                        <div id="skillChart" className="text-center" width="100%"></div>                
                    </div>
                </div>
            </section>
			);
	}
}