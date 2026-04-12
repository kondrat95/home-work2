import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{ // стили для слайдера // пишет студент
                color: '#00CC22',
                width: 147,
                '& .MuiSlider-rail': {
                    backgroundColor: '#8B8B8B',
                },
                '& .MuiSlider-track': {
                    backgroundColor: '#00CC22',
                },
                '& .MuiSlider-thumb': {
                    color: '#00CC22',
                    backgroundColor: '#fff',
                    border: '1px solid currentColor',
                    '&:hover, &.Mui-focusVisible, &.Mui-active': {
                        boxShadow: 'none',
                    },
                    '&:before': {
                        display: 'none',
                    },
                },
            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
