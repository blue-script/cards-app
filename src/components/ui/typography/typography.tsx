import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import s from './typography.module.scss'

type TagKeysType = keyof typeof Tags
type SpecificElementProps<T extends TagKeysType> = ComponentPropsWithoutRef<(typeof Tags)[T]>

const Tags = {
  body1: 'p',
  body2: 'p',
  caption: 'span',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  link1: 'a',
  link2: 'a',
  overline: 'p',
  subtitle1: 'p',
  subtitle2: 'p',
} as const

type TypographyProps<T extends TagKeysType> = {
  children: ReactNode
  tag: T
} & SpecificElementProps<T>

export const Typography = <T extends TagKeysType>(props: TypographyProps<T>) => {
  const { className, tag, ...rest } = props
  const Component = Tags[tag] as ElementType
  const classNameTag = s[`typography-${tag}`]

  return <Component className={`${classNameTag} ${className}`} {...rest} />
}
