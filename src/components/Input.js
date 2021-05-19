import React, {useState} from 'react';
import {Formik, Form, Field} from 'formik';
import * as Yup from 'yup';


const DisplayingErrorMessagesSchema = Yup.object().shape({
    full_url: Yup.string()
        .url('Введите корректную ссылку')
        .required('Обязаельное поле'),
});

export const Input = ({createUrl}) => {

    return (
        <Formik
            initialValues={{
                full_url: '',
            }}
            validationSchema={DisplayingErrorMessagesSchema}
            onSubmit={(form, {setSubmitting, setErrors, resetForm}) => {
                createUrl(form)
                resetForm()
            }}
        >
            {({errors, touched, values}) => (
                <Form>
                    <div className="input-group mb-3">
                        <Field
                            name="full_url"
                            type="url"
                            placeholder="https://example.com/"
                            className={['form-control form-control-lg ',
                                    touched.full_url && errors.full_url
                                        ? 'is-invalid'
                                        : ''
                                    ].join(' ')}
                            id="url-input"
                        />
                        <button type="submit" className="btn btn-outline-success">Сократить</button>
                    </div>
                    {
                        touched.full_url && errors.full_url &&
                        <div className="invalid-feedback">{errors.full_url}</div>
                    }
                </Form>
            )}
        </Formik>
    )
};