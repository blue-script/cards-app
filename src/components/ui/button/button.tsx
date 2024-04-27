import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import { Icon } from '@/components/ui/icon/icon'

import s from './button.module.scss'

export type ButtonProps<T extends ElementType = 'button'> = {
  as?: T
  children: ReactNode
  fullWidth?: boolean
  variant?: 'primary' | 'primary-icon' | 'secondary' | 'secondary-icon'
} & ComponentPropsWithoutRef<T>

export const Button = <T extends ElementType = 'button'>(props: ButtonProps<T>) => {
  const { as: Component = 'button', className, fullWidth, variant = 'primary', ...rest } = props
  const [classVariant, isIconVariant] = variant.split('-')

  return (
    <Component
      className={`${s.button}  ${s[classVariant]} ${fullWidth ? s.fullWidth : ''} ${className}`}
      {...rest}
    >
      {isIconVariant && <Icon iconId={'logOut'} />}
      {rest.children}
    </Component>
  )
}
