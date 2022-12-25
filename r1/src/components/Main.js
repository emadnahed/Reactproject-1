import logo from "../logo.svg";
import React from "react"

export default function Main() {
    return (
        <main>
            <div className="completeinfo">
            <div className="data">
            <h1 className="main--title">Fun facts about React</h1>
            <ul className="main--facts">
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps</li>
            </ul>
            </div>

            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                </header>
            </div>


            <div className="data">
            <h1 className="main--title">Benefits of React</h1>
            <ul className="main--facts">
                <li>SEO-Friendliness</li>
                <li>Community support</li>
                <li>Mobile-Friendliness</li>
                <li>Reusable Components</li>
                <li>Testing Capacities</li>
            </ul>
            </div>
            </div>
        </main>
    )
}
