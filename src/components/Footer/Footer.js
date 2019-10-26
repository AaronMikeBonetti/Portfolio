import React from 'react'
import './footer.css'
export default function Footer() {
    return (
        <div className='footer__container'>

            <ul className='footer__link__container'>
                <li><a href='https://www.linkedin.com/in/aaron-mike-bonetti/'><i className='fab fa-linkedin' aria-label='LinkedIn' rel='noopener noreferrer' target='_blank'></i></a></li>
                <li><a href='https://github.com/AaronMikeBonetti' aria-label='Github' rel='noopener noreferrer' target='_blank'><i className='fab fa-github-square'></i></a></li>
                <li><a href='mailto:aaronmikebonetti@gmail.com' aria-label='Mail' rel='noopener noreferrer' target='_blank'><i className='fas fa-envelope-square'></i></a></li>
                <li><a href='./AaronBonettiResume2019.pdf' aria-label='Download Resume' rel='noopener noreferrer' target='_blank' download><i className='far fa-file-pdf'></i></a></li>
            </ul>
            <h3>Aaron Bonetti 2019</h3>
            
        </div>
    )
}
