/*
 * Copyright (c) 2025 - Shiny Superb Star
 * All rights reserved.
 *
 * This file is the property of Shiny Superb Star.
 * Unauthorized use, copying, or distribution is strictly prohibited.
 * Shiny Superb Star reserves the right to take legal action
 * against any person or entity who makes use of this file without the
 * express written permission of Shiny Superb Star.
 * 
 */

// export const addressOptions: IaddressOptions[] = [
//     {
//         id: 1,
//         value: "English",
//         label: "EN",
//     },
//     {
//         id: 2,
//         value: "Spanish",
//         label: "ES",
//     },
//     {
//         id: 3,
//         value: "French",
//         label: "FR",
//     },
//     {
//         id: 4,
//         value: "German",
//         label: "DE",
//     },
//     {
//         id: 5,
//         value: "Indonesian",
//         label: "IN",
//     },
//     {
//         id: 6,
//         value: "Japanese",
//         label: "JP",
//     }
// ]

import React, { Component } from 'react';
import PersonList from './personList'; // Assuming you have a PersonList component

// Define the type for a Person object
interface Person {
    name: string;
    age: number;
    hobby: string;
}

// Define the type for the component's state
interface PeopleState {
    personList: Person[];
}

class People extends Component<{}, PeopleState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            personList: [
                { name: 'maruyama', age: 24, hobby: 'reading' },
                { name: 'tanaka', age: 22, hobby: 'walking' }
            ]
        };
    }

    render() {
        return (
            <div>
                <PersonList personList={this.state.personList} />
            </div>
        );
    }
}

export default People;