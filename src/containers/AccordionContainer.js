import faqsData from '../fixtures/faqs.json';
import { Accordion } from '../components'
import React from 'react'
import { OptForm } from '../components'

export default function AccordionContainer() {
    return (
        <Accordion>
            <Accordion.Title>Frequently Asked Questions</Accordion.Title>
            {faqsData.map(item => <Accordion.Item key={item.id}>
                <Accordion.Header>{item.header}</Accordion.Header>
                <Accordion.Body>{item.body}</Accordion.Body>
            </Accordion.Item>)}

            <OptForm>
                <OptForm.Input placeholder="Email address" />
                <OptForm.Button>Get started</OptForm.Button>
                <OptForm.Text>Ready to watch? Enter your email to create or restart your membership</OptForm.Text>
            </OptForm>
        </Accordion>
    )
}
