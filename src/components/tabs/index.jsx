import React from 'react';

import './index.scss';
import logo from "../../logo.svg";
import TabFilters from "../../enums/ETabFilter";

export class Tabs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTab: TabFilters.planets.id
        };
    }

    static defaultProps = {
        loading: false,
    }
    returnCurrentTab =  (tab) => {
        if(tab === TabFilters.planets.id) {
            return  (
                <React.Fragment>
                    <div className="card">
                        <div className="title">
                            Exemplo de planeta
                        </div>
                        <br/>
                        <div className="body">
                            Lorem ipsum
                        </div>

                    </div>
                    <div className="card">
                        <div className="title">
                            Exemplo de planeta
                        </div>
                        <br/>
                        <div className="body">
                            <div className="flex-1">
                                Planeta
                            </div>
                            <div className="flex-1">
                                teste
                            </div>
                            <div className="flex-1">
                                teste
                            </div>
                        </div>

                    </div>
                </React.Fragment>
            );
        } else if (tab === TabFilters.cars.id){
            return  (
                <React.Fragment>
                    <div className="card">
                        <div className="title">
                            Exemplo de carro
                        </div>
                        <br/>
                        <div className="body">
                            Lorem ipsum
                        </div>

                    </div>
                    <div className="card">
                        <div className="title">
                            Exemplo de carro
                        </div>
                        <br/>
                        <div className="body">
                            <div className="flex-1">
                                Planeta
                            </div>
                            <div className="flex-1">
                                teste
                            </div>
                            <div className="flex-1">
                                teste
                            </div>
                        </div>

                    </div>
                </React.Fragment>
            );
        } else if (tab === TabFilters.wings.id) {
            return  (
                <React.Fragment>
                    <div className="card">
                        <div className="title">
                            Exemplo de wing
                        </div>
                        <br/>
                        <div className="body">
                            Lorem ipsum
                        </div>

                    </div>
                    <div className="card">
                        <div className="title">
                            Exemplo de wing
                        </div>
                        <br/>
                        <div className="body">
                            <div className="flex-1">
                                Planeta
                            </div>
                            <div className="flex-1">
                                teste
                            </div>
                            <div className="flex-1">
                                teste
                            </div>
                        </div>

                    </div>
                </React.Fragment>
            );
        }
        return 'Não foi encontrado nenhum elemento';
    }

    selectTab = async (tab) => {
        await this.setState({
            currentTab: tab
        })
    }

    render() {
        const { loading } = this.props;
        const { currentTab } = this.state;
        return (
            <div className="container">
                <div className="">

                    {
                        loading ? (
                            <div>
                                <img src={logo} className="App-logo" alt="logo" />
                                <p>
                                    Carregando...
                                </p>
                            </div>

                        ): <div className="tabs">
                            <div className="tab_navigation">
                                <div className="title"
                                     onClick={() => this.selectTab(TabFilters.planets.id)}>
                                    {TabFilters.planets.name}
                                </div>
                                <div className="title"
                                     onClick={() => this.selectTab(TabFilters.cars.id)}>
                                    {TabFilters.cars.name}
                                </div>
                                <div className="title"
                                     onClick={() => this.selectTab(TabFilters.wings.id)}>
                                    {TabFilters.wings.name}
                                </div>

                            </div>
                            <div className="container">
                                { this.returnCurrentTab(currentTab)}
                            </div>
                        </div>

                    }

                </div>

            </div>
        )
    }
}


export default Tabs;
