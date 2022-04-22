import React from "react";
import "./arena.component.css";

class Arena extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numberOfNodes: 0,
            nodes: []
        };
    }

    buildNodeMap() {
        const arena = document.getElementById("arena").getBoundingClientRect();
        const newNodes = [];
        for (let i = 0; i < this.state.numberOfNodes; i++) {
            newNodes.push({
                x: this.generateRandomNumber(36, arena.width - 36),
                y: this.generateRandomNumber(136, arena.height + 36),
                color: `rgb(
                    ${this.generateRandomNumber(0, 255)},
                    ${this.generateRandomNumber(0, 255)},
                    ${this.generateRandomNumber(0, 255)}
                )`,
                id: i
            });
        }
        this.setState({
            nodes: newNodes
        });
    }
    generateRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    render() {
        return (
            <div>
                <div className="h4 mt-4">Number of nodes to render:</div>
                <div className="my-2">
                    <span className="me-3">
                        <input className="arena__input" type="number"/>
                    </span>
                    <span className="btn btn-primary mb-1" onClick={this.buildNodeMap.bind(this)}>
                        BUILD
                    </span>
                </div>
                <div className="arena p-3" id="arena">
                </div>
            </div>
        );
    }
}

export default Arena;
