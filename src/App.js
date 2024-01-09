import React from "react"
import { Formik,Field,ErrorMessage,Form} from "formik"
import * as yup from "yup"
const App = ()=>{

    const initialValue={
        name:"",
        email:"",
        password:"",
        confirmPassword:""
    }

    const validation = yup.object().shape({
        name:yup.string().min(2).max(16).required("Required"),
        email:yup.string().email("Invalid Email").required("Required"),
        password:yup.string().min(8).max(12).required("Required"),
        confirmPassword:yup.string().required("Required")

    })

    const handleChange = function(value){

        console.log("value",value)

    }
    return(
    <>
    <h1 className="heading">Form validation using formik and yup...!</h1>
    <Formik initialValues={initialValue}
    validationSchema={validation}
    onSubmit={handleChange}
    >
        <Form className="form">
            <div className="name">
            
                <Field type="text" placeholder="enter your name" name="name" className="form_data"></Field>
                <p className="error"><ErrorMessage name="name"/></p>


            </div>
            <div >
                <Field type="text" className="form_data" name="email" placeholder="Enter Your Email">

                </Field>
                <p className="error"><ErrorMessage name="email"/></p>


            </div>
            <div>
                <Field type="text" name="password" className="form_data" placeholder="Enter Your Password"></Field>
                <p className="error"><ErrorMessage name="password"/></p>
            </div>
            <div>
                <Field type="text" name="confirmPassword" className="form_data" placeholder="confirm password"></Field>
                <p className="error"><ErrorMessage name="confirmPassword"/></p>
            </div>
            <div>
            <button type="submit" className="btn" >Register</button>
            </div>


        </Form>
    </Formik>
    </>
    )
}

export default App