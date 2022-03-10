import React, { Component } from 'react'
import PropTypes from "prop-types"
 class ChildBasedComponent extends Component {
    render() {
        
        return (
            <div>
                {this.props.username || 'dixith'}
            </div>
        )
    }
}
export default  ChildBasedComponent;

//ChildBasedComponent.defaultProps={
    // user:"again this also default props"
// };

ChildBasedComponent.propTypes={
    user:PropTypes.string,
};

