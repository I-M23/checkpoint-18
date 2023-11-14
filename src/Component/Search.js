import React from 'react';
import Card from './MovieCard';
import { redirectDocument } from 'react-router-dom';

function SearchList ({ }) {
    // const filtered = filteredPersons.map (person=> <Card key={person.id} person={person} />);
    return (
        <div>
            {/* {filtered} */}
            <input type="text" />
        </div>
    );
}

export default SearchList;