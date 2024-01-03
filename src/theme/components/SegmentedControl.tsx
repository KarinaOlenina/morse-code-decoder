import { styled } from '@mui/material';
import React, { PropsWithChildren } from 'react';
import Row from '../../components/Row/Row';
import MorseTypography from '../MorseTypography';

interface SegmentWrapperProps {
  active?: string;
}

const SegmentWrapper = styled(Row)<SegmentWrapperProps>(
  ({ theme, active }) => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    cursor: 'pointer',
    borderRadius: '12px',
    padding: '6px',
    color: theme.palette.custom.textSecondary,
    gap: '4px',
    ...(active === 'true' && {
      backgroundColor: theme.palette.custom.accentPink,
      color: theme.palette.custom.accentGreen,
    }),
    '&:hover': {
      backgroundColor:
        active === 'true'
          ? theme.palette.custom.accentPink
          : theme.palette.custom.backgroundModule,
      color: theme.palette.custom.background,
    },
    transition: `${theme.transitions.duration.standard} ${theme.transitions.easing.easeInOut}`,
  })
);

type SegmentProps<T> = PropsWithChildren<{
  active?: boolean;
  value: T;
  Icon?: any;
  onSelect?: (v: T) => void;
  testId?: string;
}>;
export function Segment<T>({
  active,
  value,
  Icon,
  onSelect,
  testId,
  children,
}: SegmentProps<T>): JSX.Element {
  return (
    <SegmentWrapper
      active={active?.toString()}
      onClick={() => onSelect?.(value)}
      data-testid={testId}>
      {Icon && <Icon size={20} stroke="currentColor" />}
      <MorseTypography
        fontWeight={500}
        fontSize="16px"
        lineHeight="24px"
        textAlign="left"
        color="custom.currentColor">
        {children}
      </MorseTypography>
    </SegmentWrapper>
  );
}

const SegmentedControlWrapper = styled(Row)(({ theme }) => ({
  borderRadius: '16px',
  gap: '4px',
  padding: '4px',
  outline: `1px solid ${theme.palette.custom.accentPink}`,
  outlineOffset: '-1px',
  width: '70%',
}));

export function SegmentedControl<T>({
  selected,
  onSelect,
  children,
}: {
  selected: T;
  onSelect: (v: T) => void;
  children: React.ReactElement<SegmentProps<T>>[];
}): React.ReactElement {
  return (
    <SegmentedControlWrapper>
      {/* Defaults child segment onSelect & active props based on control parent input */}
      {children.map((segment, index) => {
        if (segment?.type != Segment) {
          console.warn('<SegmentedControl> children must be of type <Segment>');
          return null;
        }
        return (
          <Segment
            {...segment.props}
            onSelect={segment.props.onSelect ?? onSelect}
            active={segment.props.active ?? segment.props.value === selected}
            key={`segment ${index}`}
          />
        );
      })}
    </SegmentedControlWrapper>
  );
}
