import React, { useState, useEffect } from 'react'
import { Formik } from 'formik'

const BookingForm = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() => {

        console.log(email, password, 'FORM VALUES')

    }, [email, password])

    return (
        <Formik
            initialValues={{ email: email, password: password }}
            validate={values => {
                const errors = {}
                if (!values.email) {
                    errors.email = 'Required'
                } else if (!values.password) {
                    errors.password = 'Required'
                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                    errors.email = 'Invalid email address'
                }
                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}
        >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
            }) => (
                <form onSubmit={handleSubmit}>
                    <div style={{ display: "flex", margin: "30px auto", flexDirection: "column", width: "50%" }}>
                        <div style={{ textAlign: "center", marginBottom: "20px" }}>
                            <label>
                                {'Email: '}
                                <input
                                    type="email"
                                    name="email"
                                    onChange={(e) => {
                                        setEmail(e.target.value)
                                        handleChange(e)
                                    }}
                                    onBlur={handleBlur}
                                    value={values.email}
                                    style={{ width: '300px' }}
                                    placeholder='Please enter email'
                                />
                            </label>
                            {errors.email && touched.email && <div style={{ color: 'red' }}>{errors.email}</div>}
                        </div>
                        <div style={{ textAlign: "center", marginBottom: "20px" }}>
                            <label>
                                {'Password: '}
                                <input
                                    type="password"
                                    name="password"
                                    onChange={(e) => {
                                        setPassword(e.target.value)
                                        handleChange(e)
                                    }}
                                    onBlur={handleBlur}
                                    value={values.password}
                                    style={{ width: '300px' }}
                                    placeholder='Please enter password'
                                />
                            </label>
                            {errors.password && touched.password && <div style={{ color: 'red' }}>{errors.password}</div>}
                        </div>
                        <div style={{ textAlign: "center", marginBottom: "20px" }}>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                style={{ width: "200px", backgroundColor: '#4895d0', color: '#fff', fontWeight: "bold", padding: '5px' }}
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
            )}
        </Formik>
    )

}

export default BookingForm
