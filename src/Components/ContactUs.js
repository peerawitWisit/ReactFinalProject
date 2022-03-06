import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styled from 'styled-components';
import { Button, Form } from 'react-bootstrap';
import { useToasts } from 'react-toast-notifications';
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form';

const schema = yup.object({
  name: yup.string().required('*Input Name,Please'),
  email: yup.string().required('*Input Email,Please').email('Format is invalid'),
}).required();

export const ContactUs = () => {

  const form = useRef();

  const { addToast } = useToasts()

  const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const sendEmail = (e) => {
    
      

      emailjs.sendForm('GmailService', 'EmailTemplate', form.current, 'P-Kh-dbekR6rvSYk9')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        form.current.reset()
        addToast('Send Successfully' , {appearance:'success', autoDismiss:true})
    
    
  };

  


  return (
    <ConStyled>
      <div className='container'>
        <form ref={form} onSubmit={handleSubmit(sendEmail)}>
          <div className='inputForm'>
            <h6>Name</h6>
            <input className={`form-control ${errors.name ? 'is-invalid' : ''}`} type="text" name="name" placeholder='Name' ref={register} />
            {
              errors.name && (
                <Form.Control.Feedback type='invalid'>
                    {errors.name.message}
                </Form.Control.Feedback>
              )
            }
          </div>
          <div className='inputForm'>
            <h6>Email</h6>
            <input className={`form-control ${errors.email ? 'is-invalid' : ''}`} type="email" name="email" placeholder='Email' ref={register} />
            {
              errors.email && (
                <Form.Control.Feedback className='red' type='invalid'>
                    {errors.email.message}
                </Form.Control.Feedback>
              )
            }
          </div>
          <div className='inputForm'>
            <h6>Subject</h6>
            <input type="text" name="subject" placeholder='Subject' />
          </div>
          <div className='inputForm'>
            <h6>Message</h6>
            <textarea name="message" placeholder='Message' />
          </div>
          <div className='inputButton'>
            <Button type="submit" value="Send" >Send</Button>
          </div>
        </form>
      </div>
    </ConStyled>
    
  );
};

const ConStyled = styled.div`

  h6{
    font-size: 1.5rem;
  }

  .container{
    margin: 2rem 0;
  }

  .inputForm{
    margin-bottom: 1rem;
  }

  input{
    width: 70%;
    padding: 5px 10px;
    border-radius: 5px;
    background-color: var(--background-dark-grey);
    color: white;
  }

  .invalid-feedback{
    color: red;
    font-size: 1rem;
  }

  textarea{
    width: 70%;
    height: 250px;
    padding: 5px 10px;
    border-radius: 5px;
    background-color: var(--background-dark-grey);
    color: white;
  }

  Button{
    margin-top: 1rem;
    width: 25%;
    height: 40px;
    background-color: rgba(0,0,0,0);
    color: var(--primary-color);
    border: 2px solid var(--primary-color);
    border-radius: 5px;
  }
`