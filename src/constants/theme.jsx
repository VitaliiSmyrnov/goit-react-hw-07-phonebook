export const theme = Object.freeze({
  colors: {
    white: '#fff',
    black: '#000',
    background: '#37393c',
    backgroundLight: '#646464',
    header: '#43d7ff',
    label: '#b6daff',
    border: '#a4a4a4',
    borderAccent: '#97b7d9',
  },
  spacing: value => `${4 * value}px`,
  fonts: {
    body: 'system-ui, sans-serif',
    heading: 'system-ui, sans-serif',
    monospace: 'Menlo, monospace',
  },
  fontSizes: {
    xs: '14px',
    sm: '16px',
    md: '24px',
    lg: '32px',
  },
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
    table: 1.75,
  },
  borders: {
    none: 'none',
    normal: '1px solid',
  },
  radii: {
    none: '0',
    normal: '4px',
    md: '10px',
    round: '50%',
  },
  transitions: {
    normal: '250ms cubic-bezier(0.4, 0, 0.2, 1)',
  },
  shadows: {
    normal: `1px 4px 6px 0 rgba(0, 0, 0, 0.16), 0 4px 4px 0 rgba(0, 0, 0, 0.06),
    0 1px 1px 0 rgba(0, 0, 0, 0.12)`,
    input: `inset 0 2px 4px rgba(0, 0, 0, 0.5),
    0 0 8px rgba(151, 183, 217, 0.6)`,
    button: `inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05)`,
  },
});
