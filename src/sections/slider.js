import React from 'react'
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import Typography from '@material-ui/core/typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import vancouver from "./vancouver.jpg"

import 'react-awesome-slider/dist/styles.css';
import { typography } from '@material-ui/system';

const AutoplaySlider = withAutoplay(AwesomeSlider);

const slider = () => (
    <div className='main-slider' style={{display:'block', margin: '1em', height: '650px'}}>
        <AutoplaySlider
            play={true}
            cancelOnInteraction={false} // should stop playing on user interaction
            interval={3000}
            fillParent={true}
            className="slideshow"            
        >
            <div>1</div>
            <div data-src={`${vancouver}`}></div>
            <div>3</div>
 
        </AutoplaySlider>
        <div className="title">
            <Typography variant="h3" component="h1">
                Jennifer Chow
            </Typography>
            <Typography variant="h4" component="h2">
                Web Developer
            </Typography>
        </div>
        <div class="scroll-down"> <a href="#"><ExpandMoreIcon fontSize={'large'}/></a> </div> 
    </div>
)


export default slider 