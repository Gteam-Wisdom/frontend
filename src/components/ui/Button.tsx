import styled from 'styled-components';

export default styled.button`
  border: none;
  outline: none;
  background: none;
  cursor: pointer;
  font-family: Nunito, Calibri, Arial, sans-serif;
  &.wide {
    min-width: 138px;
    height: 46px;
    border-radius: 23px;
  }
  &.accent {
    background: var(--c-purple02);
    color: white;
  }
  &.bold {
    font-weight: 700;
  }
  &.border {
    border: 1px solid var(--c-accent-purple);
  }
`;
