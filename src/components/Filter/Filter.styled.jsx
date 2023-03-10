import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-top: ${p => p.theme.spacing(2)};

  label {
    color: ${p => p.theme.colors.label};
  }

  input {
    margin-top: ${p => p.theme.spacing(1)};
    display: inline-block;
    width: 250px;
    height: ${p => p.theme.spacing(4.5)};
    padding: ${p => p.theme.spacing(1)};
    line-height: ${p => p.theme.lineHeights.body};

    color: #efefef;
    background-color: #202223;

    border: ${p => p.theme.borders.normal} ${p => p.theme.colors.border};
    border-radius: ${p => p.theme.radii.normal};

    transition: border linear 0.2s, box-shadow linear 0.2s;
  }

  input:focus {
    border: ${p => p.theme.borders.normal} ${p => p.theme.colors.borderAccent};
    outline: none;
    box-shadow: ${p => p.theme.shadows.input};
  }
`;
