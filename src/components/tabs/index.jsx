import React from 'react';

import './index.scss';
import logo from "../../logo.svg";
import TabFilters from "../../enums/ETabFilter";
import Axios from "axios";

export class Tabs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTab: TabFilters.planets,
            tabContent: [],
            count: 0,
            loading: false,
        };
    }

    componentDidMount() {
        this.loadFilter('planets');
    }

    returnCurrentTab =  (tab) => {
        const { tabContent, count, loading } = this.state;
        if (loading) {
            return (
                <div>
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Carregando...
                    </p>
                </div>
            );
        }
        if(tab != null && tab !== '') {
            console.log('tabContent ', tabContent);
            return  (
                <React.Fragment>
                    <div className="count">
                        { count }
                    </div>
                    {
                        tabContent.map((item) =>

                            <div className="card" key={`${item.id}-${item.name}-${item.id *2}`}>
                                <div className="title">
                                    {item.name}
                                </div>
                                <br/>
                                <div className="body">
                                    <div className="flex-1">
                                        Films: {item.films.length}
                                    </div>

                                </div>
                            </div>

                        )
                    }
                </React.Fragment>
            );
        }
        return null;
    }

    /*
    * @param Enum ETabFilter
    * tab {
    *  id: string,
    *  name: string,
    *  endpoint: string
    * }
    */
    selectTab = async (tab) => {
        await this.setState({
            currentTab: tab,
            loading: true,
        }, this.loadFilter(tab.endpoint))
    }

    /*
    * @param endpoint, string
    * defaultValue = 'planets'
    */
    loadFilter = (endpoint = 'planets') => {
        // REF: https://swapi.co/documentation#people
        const url = `https://swapi.co/api/${endpoint}`;
        Axios.get(url).then((res) => {
            console.log('Res: ', res.data);
            this.setState({
                tabContent: res.data.results || [],
                count: res.data.count || 0,
                loading: false
            })
        }).catch((error) => {
            console.error('Erro on loadFilter: ', error)
        })
    }



    render() {
        const { currentTab } = this.state;
        return (
            <div className="container">
                <div className="">

                    {
                        <div className="tabs">
                            <div className="tab_navigation">
                                <div className={`title ${currentTab.id === TabFilters.planets.id ? 'active' : ''}`}
                                     onClick={() => this.selectTab(TabFilters.planets)}>
                                    {TabFilters.planets.name}
                                </div>
                                <div className={`title ${currentTab.id === TabFilters.cars.id ? 'active' : ''}`}
                                     onClick={() => this.selectTab(TabFilters.cars)}>
                                    {TabFilters.cars.name}
                                </div>
                                <div className={`title ${currentTab.id === TabFilters.species.id ? 'active' : ''}`}
                                     onClick={() => this.selectTab(TabFilters.species)}>
                                    {TabFilters.species.name}
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
