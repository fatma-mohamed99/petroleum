import styled from "styled-components";
import "../../app/globals.css";

export const StyledWrapper = styled.div<{
  $bgColor: string;
  $fullRounded: boolean;
  $size?: 'sm' | 'md' | 'lg';
  $noBefore?: boolean;
}>`
  .fancy {
    background-color: transparent;
    border: 2px solid var(--color-secondary);
    border-radius: ${props => props.$fullRounded ? '50%' : '0'};
    box-sizing: border-box;
    color: var(--color-secondary);
    cursor: pointer;
    display: inline-block;
    float: right;
    font-weight: 700;
    letter-spacing: 0.05em;
    margin: 0;
    outline: none;
    overflow: ${props => props.$fullRounded ? 'hidden' : 'visible'};
    padding: ${props => {
      if (props.$fullRounded) {
        return props.$size === 'sm' ? '0.75em' :
               props.$size === 'lg' ? '1.75em' : '1.25em';
      }
      return props.$size === 'sm' ? '0.75em 1.5em' :
             props.$size === 'lg' ? '1.75em 3em' : '1.25em 2em';
    }};
    position: relative;
    text-align: center;
    text-decoration: none;
    text-transform: none;
    transition: all 0.3s ease-in-out;
    user-select: none;
    font-size: ${props =>
      props.$size === 'sm' ? '11px' :
      props.$size === 'lg' ? '15px' : '13px'};
    aspect-ratio: ${props => props.$fullRounded ? '1/1' : 'auto'};
  }
  .fancy::before {
    content: ${props => (props.$noBefore) ? 'none' : '" "'};
    width: ${props =>
      props.$size === 'sm' ? '1rem' :
      props.$size === 'lg' ? '1.5625rem' : '1.5625rem;'}; 
    height: 2px;
    background: var(--color-secondary);
    top: 50%;
    left: 1.5em;
    position: absolute;
    transform: translateY(-50%);
    transform-origin: center;
    transition: background 0.3s linear, width 0.3s linear;
    display: ${props => props.$fullRounded ? 'none' : 'block'};
  }
  .fancy .text {
    font-size: ${props =>
      props.$size === 'sm' ? '0.875em' :
      props.$size === 'lg' ? '1.375em' : '1.125em'};
    line-height: 1.33333em;
    padding-left: ${props => props.$fullRounded ? '0' : '2em'};
    display: block;
    text-align: ${props => props.$fullRounded ? 'center' : 'left'};
    transition: all 0.3s ease-in-out;
    text-transform: uppercase;
    text-decoration: none;
    color: var(--color-secondary);
    margin: ${props => props.$fullRounded ? '0 auto' : '0'};
  }
  .fancy .top-key {
    height: 2px;
    width: 1.5625rem;
    top: -2px;
    left: 0.625rem;
    position: absolute;
    background: ${props => props.$bgColor};
    transition: width 0.5s ease-out, left 0.3s ease-out;
  }
  .fancy .bottom-key-1 {
    height: 2px;
    width: 1.5625rem;
    right: 1.875rem;
    bottom: -2px;
    position: absolute;
    background: ${props => props.$bgColor};
    transition: width 0.5s ease-out, right 0.3s ease-out;
  }
  .fancy .bottom-key-2 {
    height: 2px;
    width: 0.625rem;
    right: 0.625rem;
    bottom: -2px;
    position: absolute;
    background: ${props => props.$bgColor};
    transition: width 0.5s ease-out, right 0.3s ease-out;
  }
  .fancy:hover::before {
    width: ${props => props.$noBefore || props.$fullRounded ? '0' : '0.9375rem'};
    background: ${props => props.$bgColor};
  }
  .fancy:hover .text {
    padding-left: ${props => props.$fullRounded ? '0' : '1.5em'};
  }
  .fancy:hover .top-key {
    left: ${props => props.$fullRounded ? '0.625rem' : '-2px'};
    width: ${props => props.$fullRounded ? '1.5625rem' : '0px'};
  }
  .fancy:hover .bottom-key-1,
  .fancy:hover .bottom-key-2 {
    right: ${props => props.$fullRounded ? '1.875rem' : '0'};
    width: ${props => props.$fullRounded ? '1.5625rem' : '0'};
  }
`;