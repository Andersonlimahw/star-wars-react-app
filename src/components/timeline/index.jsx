import React from 'react';

import './index.scss';
import logo from "../../logo.svg";

export class Timeline extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    static defaultProps = {
        peoples: [],
        loading: false,
    }

    render() {
        const { loading, peoples } = this.props;
        return (
            <div className="container">
                <div className="timeline_title">
                    <h1>
                        Star Wars
                    </h1>
                </div>
                <div className="timeline">

                    {
                        loading ? (
                            <div>
                                <img src={logo} className="App-logo" alt="logo" />
                                <p>
                                    Carregando...
                                </p>
                            </div>

                        ):
                        peoples && peoples.map(people => (
                            <div className="card" key={`${people.id}-${people.name}`}>
                                <div className="title">
                                    {people.name}
                                </div>
                                <br/>
                                <div className="body">
                                    <div className="flex-1">
                                        Birth: {people.birth_year}
                                    </div>
                                    <div className="flex-1">
                                        Gender: {people.gender}
                                    </div>
                                    <div className="flex-1">
                                        Eye: {people.eye_color}
                                    </div>
                                </div>

                            </div>
                        ))
                    }

                </div>

            </div>
        )
    }
}


export default Timeline;
