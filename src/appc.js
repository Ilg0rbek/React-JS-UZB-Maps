import styled from 'styled-components';

export const Map = styled.div`
margin: 1rem auto;
width: 500px;

svg {
  stroke: #fff;
  path {
    fill: #7693AE;
    cursor: pointer;
    outline: none;

    // When a layer is hovered
    &:hover {
      fill:#4F6478;
    }

    // When a layer is focused.
    &:focus {
      fill: rgba(168,43,43,0.6);
    }

    // When a layer is 'checked' (via checkedLayers prop).
    &[aria-checked='true'] {
      fill: rgba(56,43,168,1);
    }

    // When a layer is 'selected' (via currentLayers prop).
    &[aria-current='true'] {
      fill: rgba(56,43,168,0.83);
    }

    // You can also highlight a specific layer via it's id
    &[id="nz-can"] {
      fill: rgba(56,43,168,0.6);
    }
  }
}
`;