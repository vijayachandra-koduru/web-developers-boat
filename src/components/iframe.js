import React from 'react';
class iframes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            href: "https://goo.gl/maps/QK6JZEDHWWevmRYU6"
        };
    }
   
    render() {
        return (
            <div>
                {this.state.href()}
            </div>
        );
    }
}
export default iframes;