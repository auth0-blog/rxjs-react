import React, { Component } from 'react';
import { ajax } from 'rxjs/ajax';
// import { Observable, fromEvent } from 'rxjs';
// import { pluck } from 'rxjs/operators';

class Protected extends Component {
    constructor(props) {
        super(props);

        let httpObservables$ = ajax.getJSON(`https://swapi.co/api/films/`);

        httpObservables$.subscribe(
            (value) => console.log(value.results),
            (err) => console.log(err),
            () => console.log("All Done!")
        )
        return;
    }

    render() {
        return (
            <div>
                <p>hi there</p>
            </div>
        )
    }
}

export default Protected;