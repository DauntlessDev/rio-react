import React from 'react'
import { Container, Input, Button, Text } from './styles/opt-form'

export default function OptForm({ children, ...restProps }) {
    return (
        <Container{...restProps}>
            {children}
        </Container>
    )
}

OptForm.Input = function OutFormInput({ ...restProps }) {
    return <Input {...restProps} />
}

OptForm.Button = function OutFormButton({ children, ...restProps }) {
    return (
        <Button {...restProps}>
            {children}
            <img src="/images/icons/chevron-right.png" alt="Try Now" />
        </Button>
    )
}

OptForm.Text = function OutFormText({ children, ...restProps }) {
    return (
        <Text {...restProps}>
            {children}
        </Text>
    )
}



OptForm.Break = function OutFormBreak({ ...restProps }) {
    return (
        <Text {...restProps} />
    )
}

