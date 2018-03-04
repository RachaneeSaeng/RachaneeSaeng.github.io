import * as React from 'react'; 
import * as ReactDOM from 'react-dom';

import {default as Header} from './Header';
import {default as Intro} from './Intro';
import {default as About} from './About';
import {default as Skill} from './Skill';
import {default as Experience} from './Experience';
import {default as Port} from './Port';
import {default as Footer} from './Footer';

// export default function App(props) {
//   return (<h1>Hello... it's me!!!</h1>);
// }

// Inheitance pattern can trig hot-loader (conposition pattern don't)
export default class App extends React.Component<any, any> {
	constructor(props: any) {
    super(props);
  }
	render() {
		return (
			<div>
				<Header />
				<Intro />
				<About />
				<Experience />
				<Skill />				
				<Port />
				<Footer />
			</div>
			);
	}
}

// 	
				// 	
				// <About />	
				// <Skill />
				// <Experience />
				// <Port />
				// <Footer />


				
				