// src/components/QuoteModal.jsx
import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import styles for toast notifications

const QuoteModal = ({ show, handleClose }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        try {
            const response = await fetch('http://localhost:3000/submit-quote', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const result = await response.json();
            toast.success(result.message || 'Quote submitted successfully!');
            handleClose(); // Close modal after submission
        } catch (error) {
            toast.error(`Error submitting quote: ${error.message}`);
        }
    };

    return (
        <>
            <Modal show={show} onHide={handleClose} className="quote-modal">
                <Modal.Header closeButton>
                    <Modal.Title>Request a Quote</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form id="quoteForm" onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group controlId="formName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter your name"
                                {...register('name', { required: 'Name is required' })}
                            />
                            {errors.name && <Form.Text className="text-danger">{errors.name.message}</Form.Text>}
                        </Form.Group>

                        <Form.Group controlId="formEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter your email"
                                {...register('email', { required: 'Email is required' })}
                            />
                            {errors.email && <Form.Text className="text-danger">{errors.email.message}</Form.Text>}
                        </Form.Group>

                        <Form.Group controlId="formPhone">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control
                                type="tel"
                                placeholder="Enter your phone number"
                                {...register('phone', { required: 'Phone number is required' })}
                            />
                            {errors.phone && <Form.Text className="text-danger">{errors.phone.message}</Form.Text>}
                        </Form.Group>

                        <Form.Group controlId="formMessage">
                            <Form.Label>Message</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                placeholder="Provide details about your bricklaying needs"
                                {...register('message', { required: 'Message is required' })}
                            />
                            {errors.message && <Form.Text className="text-danger">{errors.message.message}</Form.Text>}
                        </Form.Group>

                        <Form.Group controlId="formWorkType">
                            <Form.Label>Type of Work</Form.Label>
                            <Form.Control
                                as="select"
                                {...register('workType', { required: 'Please select the type of work' })}
                            >
                                <option value="">Select...</option>
                                <option value="newConstruction">New Construction</option>
                                <option value="renovation">Renovation</option>
                                <option value="repair">Repair</option>
                                <option value="other">Other</option>
                            </Form.Control>
                            {errors.workType && <Form.Text className="text-danger">{errors.workType.message}</Form.Text>}
                        </Form.Group>

                        <Form.Group controlId="formWorkDate">
                            <Form.Label>Expected Work Date</Form.Label>
                            <Form.Control
                                type="date"
                                {...register('workDate', { required: 'Expected work date is required' })}
                            />
                            {errors.workDate && <Form.Text className="text-danger">{errors.workDate.message}</Form.Text>}
                        </Form.Group>

                        <Form.Group controlId="formAdditionalInfo">
                            <Form.Label>Additional Information</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                placeholder="Any other details or requirements"
                                {...register('additionalInfo')}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" type="submit" form="quoteForm">
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal>
            <ToastContainer /> {/* Toast notifications container */}
        </>
    );
};

export default QuoteModal;
