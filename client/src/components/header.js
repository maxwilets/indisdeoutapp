import React, {Component} from "react";

class Header extends Component {
    render(){
        return(
            <div>
                <header id="header">
                    <h4 style={{whiteSpace: "pre"}}>
                      <ul className="hashhome"><a href="/">Home</a></ul>
                      <ul className="nav1"><a href="https://wwww.github.com">Info</a></ul>
                      <ul className="nav2"><a href="https://www.insideoutdev.com/">About Us</a></ul>
                    </h4>
                </header>
            </div>
        )
    }

};
export default Header;