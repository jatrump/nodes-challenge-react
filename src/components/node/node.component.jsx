import React from "react";
import "./node.component.css";

class Node extends React.Component {
    render() {
        return (
            <div
                className="node"
                style={{
                    top: `${this.props.y}px`,
                    left: `${this.props.x}px`,
                    background: this.props.selected
                        ? "black"
                        : `radial-gradient(circle at 24px 24px, #fff -70%, ${this.props.color} 70%)`
                }}
            />
        );
    }
}

export default Node;
