import styled from "styled-components";
import "../../app/globals.css";

export const ProjectCardStyledWrapper = styled.div`
  .card {
    width: 340px;
    min-height: 300px;
    max-height: 500px;
    margin: auto;
    background-color: var(--color-bgCard);
    text-align: center;
    border: 3px solid var(--color-main);
    position: relative;
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
 
  
  .card__body {
    padding: 0 0 1rem;
  }
  
  .card__title {
    font-weight: 800;
    font-size: var(--text-header-sm);
    color: var(--color-textColor);
    padding: 1rem 0.5rem;
    margin-top: 0.5rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  
  .card__paragraph {
    color: var(--color-textColor);
    font-size: var(--text-dec-sm);
    line-height: 1.5;
    padding: 0 1.5rem 1rem;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  
  .card__ribbon {
    display: grid;
    place-items: center;
    height: 50px;
  }
  
 
  
  .card__ribbon-label {
    width: 210px;
        color: var(--color-textColor);

    background-color: #ffffff;
    border: none;
    position: relative;
    transform: translateY(-50%);
    display: grid;
    place-items: center;
    font-weight: 700;
    font-size: 1.25rem;
    padding: 0.5rem 1rem;
    cursor: pointer;
    transition: all 0.3s ease;
    display:flex;
    gap: 3px;
  }
  
  .card__ribbon-label:hover {
    letter-spacing: 1px;
  }
`;
