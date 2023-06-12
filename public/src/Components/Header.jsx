import React from 'react'
import './Header.css'
function Header(){
    return(
        React.createElement(
            "div",
            { className: "header" },
            React.createElement(
                 "h1",
                 null,
                 "E. Subramanyam Reddy"
            ),
            React.createElement(
                 "p",
                 null,
                 " Full Stack Developer"
            ),
            React.createElement(
                 "div",
                 null,
                 React.createElement(
                      "a",
                      { href: "https://www.linkedin.com/in/subramaneshwar-reddy/" },
                      "Linkedin"
                 ),
                 " ",
                 React.createElement(
                      "a",
                      { href: "https://github.com/subramaneshwar" },
                      "Github"
                 )
            ),
            React.createElement("hr", null)
       )
       
       
    )
}
export default Header