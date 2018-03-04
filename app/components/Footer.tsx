import * as React from 'react'; 
import * as ReactDOM from 'react-dom';

export default class Footer extends React.Component<any, any> {
	constructor(props: any) {
    super(props);
  }
	render() {
        var items = [
            {
                url: "https://www.facebook.com/crital.ple",
                iconClass: "fa fa-facebook"
            }, {
                url: "https://th.linkedin.com/in/RachaneeS",
                iconClass: "fa fa-fw fa-linkedin"
            }, {
                url: "https://medium.com/@plesaengkrajai",
                iconClass: "fa fa-medium"
            }
        ];

        const liItems = items.map((item, index) => 
            <li key={index}>
                <a href={item.url} target="_blank" className="btn-social btn-outline" >
                    <i className={item.iconClass}></i>
                </a>
            </li> 
        );
        
		return (
			<footer id="contact" className="text-center">
                <div className="footer-above text-center">
                   <h4>Get In Touch</h4>
                    <p>E-mail: rachanee.saeng@gmail.com<br/>Tel: +669 3324 4514</p>
                    <p></p>
                    <ul className="list-inline">
                        {liItems}						
                    </ul>
                </div>       
            </footer>	
			);
	}
}