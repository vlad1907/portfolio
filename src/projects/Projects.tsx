import React from 'react';
import s from './Projects.module.scss'
import Project from './project/Project';
import stylesContainer from '../common/styles/Container.module.css';
import Title from '../common/components/title/Title';

const Fade = require("react-reveal/Fade");

const Projects = () => {
    return (
        <div id={'projects'} className={s.projectsBlock}>
            <div className={`${s.projectsContainer} ${stylesContainer.container}`}>
                <Fade top>
                    <Title title={'Here are a few of my projects'}/>
                </Fade>
                <div className={s.projects}>
                    <Fade bottom>
                        <Project
                            img={"todolist"}
                            title={'Todolist'}
                            description={'Stack: TypeScript, React, Redux, Redux Toolkit, Redux-Thunk, ' +
                                'React-Router-dom, Axios, Formik, TDD, Material UI, Storybook.'}
                            link={''}
                            codeLink={''}
                        />
                        <Project
                            img={"cards"}
                            title={'Learning App'}
                            description={'Stack: TypeScript, React, Redux, Redux-Thunk, ' +
                                'React-Router-dom, Axios, Formik, Material UI. Team development.'}
                            link={''}
                            codeLink={''}
                        />
                        <Project
                            img={"social"}
                            title={'Social Network'}
                            description={'Stack: TypeScript, React, Redux, Redux-Thunk, ' +
                                'React-Router-dom, Axios, Formik, Reselect, TDD.'}
                            link={''}
                            codeLink={''}
                        />
                    </Fade>
                </div>
            </div>
        </div>
    );
};

export default Projects;