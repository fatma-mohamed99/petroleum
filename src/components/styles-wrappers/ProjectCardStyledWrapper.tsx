import styled from "styled-components";
import "../../app/globals.css";

export const ProjectCardStyledWrapper = styled.div`
  .card {
    width: min(400px);
    min-height: 500px;
    max-height: 500px;
    margin: auto;
    background-color: var(--color-bgCard);

    text-align: center;
    border-radius: .4rem;
    border: 3px solid var(--color-main);
    position: relative;
    overflow: hidden;
  }
  .card:hover {
    box-shadow: 0 4px 10px 0.5px var(--color-textColor);
  }

  .card__title {
    font-weight: 800;
    color: #121513;
    font-size: var(--text-header-sm);
    color: var(--color-main);
    white-space: nowrap;
    width: 100%;
    padding: 5px 0;
    min-height: 40px;
  }

  .card__paragraph {
    color: #303830;
    font-size: var(--text-dec-sm);
    padding: 5px 0 5px;
    width: 90%;
    margin: auto;
    color: var(--color-textColor);
  }

  .card__ribbon {
    margin-top: 2.6rem;
    display: grid;
    place-items: center;
    height: 50px;
    background-color: var(--color-main);
    position: relative;
    width: 110%;
    left: -5%;
    top: 10px;
    position: relative;
    transition: all;
    cursor: pointer;
    transition-duration: 300ms;
    transition-timing-function: linear;
  }
  .card__ribbon:hover {
    margin-top: 2.2rem;
  }

  .card__ribbon-label {
    display: block;
    width: 200px;
    aspect-ratio: 4/1;
    border: 4px solid var(--color-main);
    background-color: #fff;
    position: relative;
    transform: translateY(-50%);
    border-radius: 8px;
    display: grid;
    cursor: pointer;
    place-items: center;
    font-weight: 900;
    line-height: 1;
    font-size: 1.5rem;
  }
`;
