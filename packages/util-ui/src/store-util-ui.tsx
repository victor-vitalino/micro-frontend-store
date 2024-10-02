import React from "react";
import { navigateToUrl } from "single-spa";
// import { Container } from './styles';

interface IPropsNavigate {
  path: string;
  children?: React.ReactNode;
}

const Navigate: React.FC<IPropsNavigate> = ({ children, path }) => {
  const handleRedirect = (e: React.MouseEvent<HTMLButtonElement>) => {
    navigateToUrl(e.currentTarget.name);
  };
  return (
    <button name={path} onClick={handleRedirect}>
      {children}
    </button>
  );
};

export { Navigate };
