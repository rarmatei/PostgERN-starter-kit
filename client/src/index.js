import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import About from './containers/About';
import Status from './containers/Status';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Routes = () => {
    return (<Router>
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#">Graduation</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li class="nav-item">
                            <Link className="nav-link" to="/status">Status</Link>
                        </li>
                    </ul>
                </div>
            </nav>

            <div>
                <Route path="/" exact component={App} />
                <Route path="/about/" component={About} />
                <Route path="/status/" component={Status} />
            </div>
        </div>
    </Router>)
}

ReactDOM.render(<Routes />, document.getElementById('root'));

