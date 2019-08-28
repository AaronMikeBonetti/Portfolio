import React from 'react'
import './footer.css'
export default function Footer() {
    return (
        <div className='footer__container'>

            <ul className='footer__link__container'>
                <li><a href='https://www.linkedin.com/in/aaron-mike-bonetti/'><i className='fab fa-linkedin'></i></a></li>
                <li><a href='https://github.com/AaronMikeBonetti'><i className='fab fa-github-square'></i></a></li>
                <li><a href='mailto:aaronmikebonetti@gmail.com'><i className='fas fa-envelope-square'></i></a></li>
                <li><a href='../../assests/AaronBonettiResume2019.pdf' download><i className='far fa-file-pdf'></i></a></li>
            </ul>
            <h3>Aaron Bonetti 2019</h3>
            
        </div>
    )
}
