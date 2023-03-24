const { Box } = require("@mui/material");
const { styled } = require("@mui/system");

// "Styled" components are ways for us to re-use styles/CSS in a component-like manner
const FlexBetween = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export default FlexBetween;
