import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'

export default class AppHeader extends React.Component{

    constructor() {
        super()

        this.styles = {
            root: {
                backgroundColor: '#fff',
            },
            logo: {
                'padding': '8px 2px 8px 15px',
            },
            title: {
                fontSize: '16px',
                fontWeight: 'bold',
                letterSpacing: '3.5px',
                color: '#777777',
                'padding': '2px 2px 2px 12px',
                borderLeft: '1px solid #dddddd',
                cursor: 'pointer'
            },
            leftTitle: {
                fontSize: '12px',
                fontWeight: 'normal',
                color: '#777777',
                'padding': '8px 2px 2px 12px'
            },
            toolbar: {
                backgroundColor: '#E8E8E8',
            }
        };

        this.appMenues = [
            {
                name: 'UPC',
                subMenues: [
                    { name: 'UPC Generate', route: '/Upc/Generate' },
                    { name: 'UPC Reissue', route: '/Upc/Reissue' }
                ]
            }
        ]
    }

    handleTouchTap(event) {
        // This prevents ghost click.
        event.preventDefault();
        window.location.href = "/Home/Index";
    }

    render() {
        return (            
            <MuiThemeProvider>
                <div>
                    <AppBar style={this.styles.root}
                        title={<span style={this.styles.title}>Finance BackOffice</span>}
                        onTouchTap={this.handleTouchTap.bind(this)}
                        iconElementLeft={<img style={this.styles.logo} alt="Agoda" src="//cdn6.agoda.net/images/MVC/default/agoda-logo.png" />}
                                        iconElementRight={<span><p style={this.styles.leftTitle}>Hello, {this.props.userName}</p></span>}
                    />                    
                </div>
            </MuiThemeProvider>
        );
    }
}