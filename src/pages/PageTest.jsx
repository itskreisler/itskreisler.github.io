import React, {  } from 'react'
import { Container, Form, Accordion, Button } from 'react-bootstrap'
import { useForm } from 'react-hook-form'

const ChildForm1 = ({ register }) => {
  return (<><input type="text" {...register('responsable', { required: true })} /></>)
}
const PageTest = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({ shouldUseNativeValidation: true })

  const onSubmit = (data) => console.log(data)
  
  return (
        <Container>
            
            <Form onSubmit={handleSubmit(onSubmit)} noValidate>
                {['responsable','otravarible','etc'].map((value)=> errors[value]?.type === 'required' && `se requiere ${value}`)}
                <Accordion alwaysOpen>

                    <Accordion.Item eventKey='0'>
                        <Accordion.Header>
                            Retencion
                        </Accordion.Header>
                        <Accordion.Body>
                            <ChildForm1 register={register} />
                        </Accordion.Body>

                    </Accordion.Item>
                </Accordion>
                <Button variant='success' type='submit'>Submit</Button>
            </Form>
        </Container>
  )
}

export default PageTest
