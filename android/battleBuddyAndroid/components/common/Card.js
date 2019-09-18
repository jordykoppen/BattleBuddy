import React from 'react';
import styled, {css} from 'styled-components/native';
import PropTypes from 'prop-types';

const StyledCard = styled.ImageBackground`
  /* prettier-ignore */
  aspectRatio: 1.77;
  width: 100%;
  padding: 16px;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  margin-bottom: 20px;

  /* Conditions for positioning texts by textPosition string. */
  /* e.g.: textProps="bottom left" will include both conditions. */
  ${(props) =>
    props.textPosition.includes('right') &&
    css`
      align-items: flex-end;
    `}

  ${(props) =>
    props.textPosition.includes('bottom') &&
    css`
      justify-content: flex-end;
    `}
`;

// Increased text-size some
// Added text shadow prop so text would stand out more
const Text = styled.Text`
  font-size: 35px;
  color: white;
  font-weight: bold;
  /* prettier-ignore */
  textShadowColor: black;
  /* prettier-ignore */
  textShadowRadius: 10;
`;

const Card = ({image, text, ...props}) => {
  return (
    <StyledCard source={image} {...props}>
      <Text>{text}</Text>
    </StyledCard>
  );
};

Card.defaultProps = {
  text: 'Card Text',
  textPosition: ''
};

Card.propTypes = {
  text: PropTypes.string.isRequired,
  image: PropTypes.any.isRequired,
  textPosition: PropTypes.string
};

export default Card;
