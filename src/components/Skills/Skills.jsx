import React from "react";
import cppLogo from "../../assets/skills/c++logo.png"
import javaLogo from "../../assets/skills/javalogo.png"
import pythonLogo from "../../assets/skills/pythonlogo.png"
import mySQLlogo from "../../assets/skills/mysql.png"

export const Experience = () => {
    return <section id = "skills"> 
        <h2>Skills</h2>
        <div>
            <div>
                <ul>
                    <li>
                        <img src={cppLogo} alt="C++ Logo" />
                        <div>
                            <p>C++</p>
                        </div>
                    </li>
                    <li>
                        <img src={javaLogo} alt="Java Logo" />
                        <div>
                            <p>Java</p>
                        </div>
                    </li>
                    <li>
                        <img src={pythonLogo} alt="Python Logo" />
                        <div>
                            <p>Python</p>
                        </div>
                    </li>
                    <li>
                        <img src={mySQLlogo} alt="mySQL Logo" />
                        <div>
                            <p>mySQL</p>
                        </div>
                    </li>
                </ul>
            </div>
            <ul></ul>
        </div>
    </section>
}