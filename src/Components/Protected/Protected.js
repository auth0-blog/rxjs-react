// import React from 'react';
// import { ajax } from 'rxjs/ajax';
// import { Observable, fromPromise } from 'rxjs';
// import { pluck } from 'rxjs/operators';

// function Protected() {
//     // const [swapi, setSwapi] = useState();

//     let httpObservables$ = ajax.getJSON(`https://swapi.co/api/films/`);

//     httpObservables$.pipe(
//         pluck("title")
//     )
//     httpObservables$.subscribe(
//         (value) => console.log(value.results),
//         (err) => console.log(err),
//         () => console.log("All Done!")
//     )




//     return (
//         <div>
//             <p></p>
//         </div>
//     );

// }

// export default Protected;

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Subject, from } from 'rxjs';
import { filter, flatMap, debounceTime } from 'rxjs/operators';

class Protected extends Component {
    input$ = new Subject();
    state = { message: '', user: null };

    componentDidMount() {
        this.input$
            .pipe(
                debounceTime(3000),
                filter(value => value.length > 3),
                flatMap(this.githubUser$)
            )
            .subscribe(user => {
                this.setState({ user });
            });
    }

    githubUser$ = username =>
        from((username = this.getGithubUser(username)));

    getGithubUser = username =>
        fetch(
            `https://api.github.com/users/${username}?access_token=99b6ae2c1ac6541bd90286841e3cb3f41e5206f1`
        ).then(res => res.json());

    render() {
        const { user } = this.state;

        return (
            <div>
                <p>
                    Type in any GitHub user to view information
        </p>
                {user && (
                    <div>
                        <img src={user.avatar_url} />
                        <p>{user.login}</p>
                    </div>
                )}
                <input onChange={e => this.input$.next(e.target.value)} />
            </div>
        );
    }
}

// const rootElement = document.getElementById('root');
// ReactDOM.render(<App />, rootElement);

export default Protected;