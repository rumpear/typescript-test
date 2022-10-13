import styled from 'styled-components';
export const Button = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  width: 40px;
  height: 40px;

  background-color: #f5f4fa;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);

  font-family: inherit;
  font-size: 16px;
  font-weight: 500;

  text-align: center;
  border-radius: 50%;
  border: none;

  line-height: 1.87;
  letter-spacing: 0.06em;
  color: red;
  transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1);

  cursor: pointer;

  :hover {
    background-color: rgba(77, 77, 77, 0.1);
  }

  :last-child {
    margin-right: 0;
  }
`;
