import React, { Component } from 'react'

export default class Navbar extends Component {
    render() {
        return (
            <nav style={{ position: "fixed", zIndex: "1000000" }} class="w-100 navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="/">مدیریت مهد کودک</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <a class="nav-link" href="/add-child">افزودن کودک</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/add-class">افزودن کلاس</a>
                        </li>

                    </ul>
                </div>
            </nav>
        )
    }
}
