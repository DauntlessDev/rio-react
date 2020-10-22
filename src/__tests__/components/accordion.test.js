import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import faqsData from '../../fixtures/faqs';
import { Accordion } from '../../components';

describe('<Accordion />', () => {
    it('renders the <Accordion /> with populated data', () => {
        const { container, getByText } = render(
            <Accordion>
                <Accordion.Title>Frequently Asked Questions</Accordion.Title>
                <Accordion.Frame>
                    {faqsData.map((item) => (
                        <Accordion.Item key={item.id}>
                            <Accordion.Header>{item.header}</Accordion.Header>
                            <Accordion.Body>{item.body}</Accordion.Body>
                        </Accordion.Item>
                    ))}
                </Accordion.Frame>
            </Accordion>
        );

        expect(getByText('Frequently Asked Questions')).toBeTruthy();
        expect(getByText('What is Rioflix?')).toBeTruthy();
        expect(getByText('How much does Rioflix cost?')).toBeTruthy();
        expect(getByText('Where can I watch?')).toBeTruthy();
        expect(getByText('How do I cancel?')).toBeTruthy();
        expect(getByText('What can I watch on Rioflix?')).toBeTruthy();
        expect(container.firstChild).toMatchSnapshot();
    });

    it('opens and closes the <Accordion /> component', () => {
        const { container, queryByText } = render(
            <Accordion>
                <Accordion.Title>Frequently Asked Questions</Accordion.Title>
                <Accordion.Frame>
                    {faqsData.map((item) => (

                        <Accordion.Item key={item.id}>
                            <Accordion.Header>{item.header}</Accordion.Header>
                            <Accordion.Body data-testid="accordion-body">{item.body}</Accordion.Body>
                        </Accordion.Item>
                    ))}
                </Accordion.Frame>
            </Accordion>
        );

        const bodyText = "Watch Rioflix on your smartphone, tablet, smart TV, laptop or streaming device, all for one low fixed monthly fee. Plans start from £5.99 a month. No extra costs or contracts."

        expect(queryByText(bodyText)).toBeFalsy();
        fireEvent.click(queryByText("How much does Rioflix cost?"));
        expect(queryByText(bodyText)).toBeTruthy();

        fireEvent.click(queryByText("How much does Rioflix cost?"));
        expect(queryByText(bodyText)).toBeFalsy();
        expect(container.firstChild).toMatchSnapshot();
    });
});
