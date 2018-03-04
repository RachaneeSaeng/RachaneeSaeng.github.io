import React from 'react'
import FlatButton from 'material-ui/FlatButton'
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';

export default class AppMenu extends React.Component {

    constructor() {
        super()
        this.state = { open: false }
    }

    handleTouchTap(event) {
        // This prevents ghost click.
        event.preventDefault();
        this.setState({
            open: true,
            anchorEl: event.currentTarget,
        });
    }

    handleRequestClose() {
        this.setState({
            open: false,
        });
    }

    createSubMenues(subMenues) {
       return subMenues.map((subMenu) => {
            if (subMenu.route) {
                return this.createMenuLink(subMenu.name, subMenu.route)
            }
            else if (subMenu.subMenues) {
                var menueItems = this.createSubMenues(subMenu.subMenues);
                return <MenuItem
                    key={subMenu.name}
                    primaryText={subMenu.name}
                    rightIcon={<ArrowDropRight />}
                    menuItems={menueItems}
                />                
            }
        })        
    }

    createMenuLink(name, route) {       
        return <a key={name} style={{ textDecoration: 'none'}} href={route}>
                    <MenuItem primaryText={name} />
               </a> 
    }

    render() {
        return (
            <span>
                <FlatButton
                    label={this.props.name}
                    onTouchTap={this.handleTouchTap.bind(this)}                    
                    labelPosition="before"
                    icon={<NavigationExpandMoreIcon />}
                />
                <Popover
                    open={this.state.open}
                    anchorEl={this.state.anchorEl}
                    anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
                    targetOrigin={{ horizontal: 'left', vertical: 'top' }}
                    onRequestClose={this.handleRequestClose.bind(this)}
                >
                    <Menu>
                        {this.createSubMenues(this.props.subMenues)} 
                    </Menu>
                </Popover>
            </span>
        );
    }
}