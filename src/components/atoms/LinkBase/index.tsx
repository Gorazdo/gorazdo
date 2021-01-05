import Link from 'next/link';
import { forwardRef } from 'react';
import { ButtonBase } from '@material-ui/core';

export interface LinkProps {
  children: React.ReactNode;
  href: string;
  scroll?: boolean;
  prefetch?: boolean;
  replace?: boolean;
  shallow?: boolean;
  [key: string]: any;
}

export type Ref = HTMLAnchorElement;

export const LinkButtonBase = forwardRef<Ref, LinkProps>((props, ref) => {
  const {
    children,
    href,
    scroll,
    prefetch,
    replace,
    shallow,
    ...restProps
  } = props as LinkProps;

  return (
    <Link
      passHref
      href={href}
      scroll={scroll}
      prefetch={prefetch}
      replace={replace}
      shallow={shallow}
    >
      <ButtonBase component="a" {...restProps} ref={ref}>
        {children}
      </ButtonBase>
    </Link>
  );
});

export const LinkBase = forwardRef<Ref, LinkProps>((props, ref) => {
  const {
    children,
    href,
    scroll,
    prefetch,
    replace,
    shallow,
    ...restProps
  } = props as LinkProps;

  return (
    <Link
      passHref
      href={href}
      scroll={scroll}
      prefetch={prefetch}
      replace={replace}
      shallow={shallow}
    >
      <a {...restProps} ref={ref}>
        {children}
      </a>
    </Link>
  );
});
