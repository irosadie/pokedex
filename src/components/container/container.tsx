import React, { FC, Fragment, ReactNode } from 'react'

export type ContainerProps = {
    children: ReactNode
}

const Container: FC<ContainerProps> = ({ children }) => <Fragment>{children}</Fragment>

export default Container
