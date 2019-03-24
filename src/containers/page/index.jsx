import React from 'react';
import Axios from 'axios';

import Timeline from "../../components/timeline";
import Filters from "../../components/filters";

import './index.scss';

export class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            peopleList: [],
            count: 0,
        };
    }

    componentDidMount(){
        this.listPeoples();
        console.log('State: ', this.state);
    }

    listPeoples = () => {
        // REF: https://swapi.co/documentation#people
        const url = 'https://swapi.co/api/people';
        Axios.get(url).then((res) => {
            console.log('Res: ', res.data);
            this.setState({
                peopleList: res.data.results || [],
                count: res.data.count || 0,
            })
        }).catch((error) => {
            console.error('Erro on listPeoples: ', error)
        })
    }

    listPeopleByName = async (name) => {
        // aply filter
        const { peopleList } =  this.state;
        if(name && peopleList) {
            let filteredPeople = await peopleList.
            filter(people =>
                people.name.toLowerCase() === name.toLowerCase());

            this.setState({
                peopleList: filteredPeople,
            })

        }
    }

    clearFilters = () => {
        this.listPeoples();
    }

    render() {
        const { peopleList } = this.state;
        return (
            <div>
                <div className="container_page">

                    <Timeline
                        peoples={peopleList}
                        handleFilter={this.listPeopleByName}
                        loading={peopleList && peopleList.length === 0}
                    />
                    <Filters
                        peoples={peopleList}
                        handleFilter={this.listPeopleByName}
                        loading={peopleList && peopleList.length === 0}
                        clear={this.clearFilters}
                    />

                </div>
            </div>
        )
    }
}

export default Page;