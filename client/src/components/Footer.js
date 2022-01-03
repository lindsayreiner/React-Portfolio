import React from 'react';

import resume from '../images/Lindsay C. Reiner Web Dev Resume 12.1.2021.pdf';



export default function Footer() {
    return (
        <>
            <footer id="contact" className="footerCont">
                <ul className="footerUl">
                    <li className="footerLi">954.560.5612</li>
                    <li className="footerLi footerLiLink"><a className="footerLiLink" href="mailto:lindsayreiner@hey.com">Email me!</a></li>
                    <li className="footerLi"><a className="footerLiLink" href="https://www.linkedin.com/in/lindsay-c-reiner-97098a2a/">LinkedIn</a></li>
                    <li className="footerLi"><a className="footerLiLink" href="https://github.com/lindsayreiner">GitHub</a></li>
                    <li className="footerLi"><a className="footerLiLink" href={resume} target="_blank" rel="noreferrer">Resume</a></li>
                    <li className="footerLi">©2021 Lindsay Reiner</li>
                </ul>
            </footer>
        </>
    )
}
