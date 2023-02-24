import React from 'react';
import s from './Footer.module.scss';
import {faLinkedin, faInstagram, faGithub, faFacebook} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Footer = () => {
    return (
        <div className={s.footer}>
            <div className={s.footerContainer}>
                <div className={s.block}>
                    <a className={s.item}
                       href={'https://github.com/vlad1907'}
                       target={"_blank"}
                       rel={"noopener noreferrer"}>
                        <FontAwesomeIcon icon={faGithub}/>
                    </a>
                    <a className={s.item}
                       href={'https://www.linkedin.com/in/vovcenco-vladislav'}
                       target={"_blank"}
                       rel={"noopener noreferrer"}>
                        <FontAwesomeIcon icon={faLinkedin}/>
                    </a>
                    <a className={s.item}
                       href={'https://www.facebook.com/vlad.vovchenko.39/'}
                       target={"_blank"}
                       rel={"noopener noreferrer"}>
                        <FontAwesomeIcon icon={faFacebook}/>
                    </a>
                    <a className={s.item}
                       href={'https://www.instagram.com/vladislav_vovcenco/'}
                       target={"_blank"}
                       rel={"noopener noreferrer"}>
                        <FontAwesomeIcon icon={faInstagram}/>
                    </a>
                </div>
                <span className={s.allRights}>Copyright © 2022 All rights reserved</span>
            </div>
        </div>
    );
};

export default Footer;