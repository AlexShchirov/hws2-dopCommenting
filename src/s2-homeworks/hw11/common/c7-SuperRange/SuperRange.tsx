import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{ // стили для слайдера // пишет студент
                color: '#64fe76', // цвет заполненной части слайдера
                '& .MuiSlider-thumb': {
                    height: 24, // высота ползунка
                    width: 24, // ширина ползунка
                    backgroundColor: '#ffffff', // цвет ползунка
                    border: '2px solid currentColor', // граница ползунка
                    '&:focus, &:hover, &.Mui-active': {
                        boxShadow: 'inherit', // тень ползунка при фокусе, наведении и активации
                    },
                },
                '& .MuiSlider-rail': {
                    color: '#E6E6E6', // цвет незаполненной части слайдера
                },
                '& .MuiSlider-track': {
                    border: 'none', // убираем границу заполненной части слайдера
                },
            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
