import { ReactNode } from 'react';
import { Button } from './ButtonIcon.styled';

interface Props {
  children: ReactNode;
  onClick: () => void;
  [x: string]: any;
}

export const ButtonIcon = ({ children, onClick, ...allyProps }: Props) => {
  return (
    <Button type="button" onClick={onClick} {...allyProps}>
      {children}
    </Button>
  );
};
