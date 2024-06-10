import React from 'react'
import {Slider, SliderProps} from '@mui/material'
import styled from '@emotion/styled'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <MySlider
            sx={{ // стили для слайдера // пишет студент

            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

const MySlider = styled(Slider)({
    color: '#00CC22',
    height: 4,
    width: '200px',

    '& .MuiSlider-track': {
      border: 'none',
    },
    '& .MuiSlider-thumb': {
      height: 24,
      width: 24,
      backgroundColor: '#fff',
      border: '2px solid currentColor',
      '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
        boxShadow: 'inherit',
      },
      '&::before': {
        display: 'none',
      },
    },
    '& .MuiSlider-rail': {
        opacity: 0.5,
        boxShadow: 'inset 0px 0px 4px -2px #000',
        backgroundColor: '#d0d0d0',
    },
  });

export default SuperRange