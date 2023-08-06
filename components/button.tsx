import React from 'react'
import { ButtonProps, Button as MantineButton } from '@mantine/core'

const Button = React.forwardRef<HTMLInputElement, ButtonProps>((props, ref) => {
  return (
    <MantineButton h="4.5rem" radius="md" {...props}>
      {props.children}
    </MantineButton>
  )
})

Button.displayName = 'Button'

export default Button