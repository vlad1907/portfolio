import React from 'react';
import s from './ContactForm.module.scss';
import d from '../../common/components/button/Button.module.scss';
import {useFormik} from "formik";
import * as Yup from 'yup';
import emailjs from '@emailjs/browser';
const ContactForm = () => {

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: ''
        },
        validationSchema: Yup.object({
            name: Yup.string().max(50, 'Max length 50 symbols').required('name required'),
            email: Yup.string().required('Required').email('Invalid email format'),
            message: Yup.string().max(1000, 'Max length 1000 symbols').required('message required')
        }),
        onSubmit: (values) => {
            debugger
            emailjs.send('service_ppo35ui', 'template_tr0c7as', values, 'wpCy17UR47MgWBbhz')
                .then(res => {
                    formik.resetForm()
                    alert('successes')
                })
        }
    });
    return (
        <div className={s.contactContainer}>
            <form className={s.formContainer} onSubmit={formik.handleSubmit}>
                <input
                    className={s.textField}
                    id="name"
                    name="name"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                    placeholder={'Your name'}
                />
                {formik.touched.name && formik.errors.name && <div style={{color: 'red'}}>{formik.errors.name}</div>}
                <input
                    className={s.textField}
                    placeholder={'Your email'}
                    id="email"
                    name="email"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email && <div style={{color: 'red'}}>{formik.errors.email}</div>}
                <textarea
                    className={s.textarea}
                    placeholder={'Your message'}
                    id="message"
                    name="message"
                    onChange={formik.handleChange}
                    value={formik.values.message}
                />
                {formik.touched.message && formik.errors.message && <div style={{color: 'red'}}>{formik.errors.message}</div>}
                <div className={s.buttonContainer}>
                    <button type={'submit'} className={`${s.button} ${d.button}`}>Send</button>
                </div>

            </form>
        </div>
    );
};

export default ContactForm;