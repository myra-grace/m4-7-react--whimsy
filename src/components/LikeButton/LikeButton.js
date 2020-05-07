import React from 'react';
import styled from 'styled-components';

import Heart from './Heart';
import PoppingCircle from '../PoppingCircle/PoppingCircle';
import ScaleIn from './ScaleIn';
import { ConfettiPiece } from '../ConfettiPiece';
import { range } from '../../utils';

const PARTICLE_COLORS = ['#e53935', '#1e88e5', '#43a047', '#fdd835', '#fb8c00'];

const LikeButton = ({ isLiked, size = 40 }) => {
  const heartSize = size * 0.6;
  

  return (
    <Wrapper style={{ width: size, height: size }}>
      <BringForeward>
      {isLiked ? (
        <ScaleIn>
          <Heart width={heartSize} isToggled={isLiked} />
        </ScaleIn>
      ) : (
        <Heart width={heartSize} isToggled={isLiked} />
      )}
      </BringForeward>

      <MoveBackward>
      {isLiked && <PoppingCircle size={size} color="#E790F7" />}
      

      {isLiked &&
            range(12).map(i => (
            <ConfettiPiece 
                key={i}
                angle={360 * (i / 12)}
                distance={20}
                color={PARTICLE_COLORS[0]}
            />
            ))}
      </MoveBackward>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BringForeward = styled.div`
  position: absolute;
  z-index: 1;
`;

const MoveBackward = styled.div`
  position: absolute;
  z-index: 0;
`;

export default LikeButton;
