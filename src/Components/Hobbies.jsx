import React from 'react'
import './Hobbies.css'
function Hobbies(){
    return (
        React.createElement(
            "div",
            { className: "hobbies" },
            React.createElement(
                "h1",
                null,
                "Hobbies"
            ),
            React.createElement(
                "ol",
                null,
                React.createElement(
                    "li",
                    null,
                    "Cricket"
                ),
                React.createElement(
                    "li",
                    null,
                    "Listening Pocats songs"
                ),
                React.createElement(
                    "li",
                    null,
                    "Reading Blogs"
                ),
                React.createElement(
                    "li",
                    null,
                    "Exploring new Technology"
                )
            ),
            React.createElement("hr", null)
        )
    )
}
export default Hobbies