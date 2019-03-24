import React from 'react';

import './index.scss';

export class Filters extends React.Component {
    constructor(props) {
        super(props);
        this.state = { };
    }

    static defaultProps = {
        handleFilter: () => {},
        peoples: [],
        loading: false,
    }

    render() {
        const { loading, peoples, handleFilter, clear } = this.props;
        return (
            <div className="filters">
                <div className="item">
                    <h3>Aply filter by name</h3>
                    <h5 onClick={() => clear()}>
                        &times;
                        Clear filter
                    </h5>
                </div>

                <div className="container">
                    {
                        loading ? 'Carregando...' :
                            peoples && peoples.map(people => (
                                <div
                                    key={`${people.id}-${people.name}`}
                                    className="item"
                                    onClick={() => handleFilter(people.name || '')}>
                                    {people.name}
                                </div>
                            ))

                    }

                </div>
            </div>
        )
    }
}

export default Filters;