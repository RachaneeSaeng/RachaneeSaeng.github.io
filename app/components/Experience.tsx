import * as React from 'react'; 
import * as ReactDOM from 'react-dom';

export default class Experience extends React.Component<any, any> {
	constructor(props: any) {
    super(props);
  }
	render() {
        var desc = "Since I was graduated in 2011, I started working with Seagate Technology for about 5 years and then moved to Agoda.com.";
		
        return (
			<section id="experience" className="success" >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h3>Experience</h3>
                        <hr />
                        </div>
                    </div>
                    <div className="row">                
                        <div className="col-lg-12"> 
                             <p>{desc}</p>  
                             <div>
                                <h4>Agoda.com</h4>
                                <div>IT Finance Development: <em>April 2016 - Present</em></div>
                                <ul>
                                    <li>Develop and enhance applications to work on financial payment and reconciliation systems. These systems are the backbone of our company, ensuring that hotels get paid on time for each customer bookings.</li>
                                    <li>The applications are developed by various C# .Net technologies i.e. Windows service, WPF, WCF, MVC and Web API service.</li>
                                    <li>We use many cutting edge technologies and tools in development process e.g. Git, TeamCity, Puppet, cSpider and Jira etc.</li>
                                </ul> 
                             </div>                                 
                             <div>
                                <h4>Seagate Technology</h4>
                                <div>IT Factory Information Service: <em>May 2011 - March 2016</em></div>   
                                <ul>
                                    <li>Captured user requirements and analyze business conditions in order to design architecture and programming logic.</li>
                                    <li>Developed, integrated, tested and implemented related application components including front-end, back-end and database.</li>
                                    <li>Provided system documents including system requirement, design, test plan and user guide.</li>
                                </ul>
                             </div>                                                      
                        </div>
                    </div>
                </div>
            </section>
			);
	}
}