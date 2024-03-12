import React, { useEffect, useState } from 'react'
import style from './FilterPage.module.css'
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
// import { styled } from '@mui/material/styles';
// import getMuiTheme from '@mui/material/getMuiTheme';
import { MuiThemeProvider } from '@mui/material/Slider';

const FilterPage = () => {

    const CustomSliderStyles = {
        '& .MuiSlider-thumb': {
            color: "black"
        },
        '& .MuiSlider-track': {
            color: "#F86338"
        },
        '& .MuiSlider-rail': {
            color: "#CECECE"
        },
        '& .MuiSlider-active': {
            color: "orange"
        }
    };

    const [minValue, setMinValue] = useState(20);
    const [maxValue, setMaxValue] = useState(80);

    
    const minDistance = 2;

    const [sliderValues, setSliderValues] = React.useState([20, 80]);

    const handleSliderChange = (event, newValue, activeThumb) => {
        if (!Array.isArray(newValue)) {
            return;
        }

        if (activeThumb === 0) {
            setSliderValues([Math.min(newValue[0], sliderValues[1] - minDistance), sliderValues[1]]);
        } else {
            setSliderValues([sliderValues[0], Math.max(newValue[1], sliderValues[0] + minDistance)]);
        }

        setMinValue(sliderValues[0])
        setMaxValue(sliderValues[1])

    };

    return (
        <div className={style.main}>
            <div className={style.top}>
                <p className={style.closeButton}>x</p>
                <p>Filter</p>
            </div>
            <div className={style.content}>


                <div className={style.price}>

                    <p className={style.priceTitle}>Qiymət</p>
                    <hr />
                    <div className={style.minmax}>

                        <div className={style.min}>
                            <p>Min</p>
                            <input value={minValue} onChange={e => setMinValue(e.value)} type="number"></input>
                        </div>

                        <div className={style.max}>
                            <p>Max</p>
                            <input value={maxValue} onChange={e => setMaxValue(e.value)} type="number"></input>
                        </div>

                    </div>


                    <div className={style.priceSlider}>
                        <Box sx={{ width: "62.44vw" }}>
                            <Slider sx={CustomSliderStyles}
                                getAriaLabel={() => 'Minimum distance'}
                                value={sliderValues}
                                onChange={handleSliderChange}
                                valueLabelDisplay="auto"
                                // getAriaValueText={valuetext}
                                disableSwap
                            />
                        </Box>
                    </div>



                </div>
            </div>
        </div>
    )
}

export default FilterPage