import React from 'react';
import './Skills.css'
function Skills (){
    return (
        React.createElement(
            "div",
            { className: "skills" },
            React.createElement(
                "h1",
                null,
                "Skills"
            ),
            React.createElement(
                "ul",
                null,
                React.createElement(
                    "li",
                    null,
                    "Java"
                ),
                React.createElement(
                    "li",
                    null,
                    "Javascript"
                ),
                React.createElement(
                    "li",
                    null,
                    "React"
                ),
                React.createElement(
                    "li",
                    null,
                    "SQl"
                ),
                React.createElement(
                    "li",
                    null,
                    "Github"
                )
            ),
            React.createElement("hr", null)
        )
        
        
    )
}
export default Skills