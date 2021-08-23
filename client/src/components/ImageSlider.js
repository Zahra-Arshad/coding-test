import React, { useState } from "react";
import { ImageData } from './ImageData';
import { CatList } from './CatList';
import { SharkList } from './SharkList';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'

function ImageSlider() {
    const [current, setCurrent] = React.useState(0);
    const [choice, setChoice] = React.useState(ImageData);
    const [choiceDisplay, setChoiceDisplay] = React.useState('Cats and Sharks');
    const [isToggled, setToggled] = useState(false);

    // toggle between cats and sharks
    const togglePictures = () => {
        setToggled(!isToggled)
        if (isToggled.toString() === 'true') {
            setChoice(CatList);
            setChoiceDisplay('Cats');
        } else {
            setChoice(SharkList);
            setChoiceDisplay('Sharks');
        }
        console.log(isToggled)
    }

    // toggle all images
    const toggleAll = () => {
        setToggled(!isToggled)
        if (isToggled.toString() === 'true') {
            setCurrent(0)
            setChoice(ImageData);
            setChoiceDisplay('Cats and Sharks');
        }
        console.log(isToggled)
    }

    // lenght of the chosen array
    const length = choice.length

    // next image
    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    // previous image
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };
    // console.log(current);


    if (!Array.isArray(choice) || choice.length <= 0) {
        return null
    }

    return (
        <section className="slider">
            <div className="selection">
                <button className="toggleBtn" onClick={togglePictures}>
                    <h4>Toggle Cats or Sharks</h4>
                </button>
                <button className="toggleBtn" onClick={toggleAll}>
                    <h4>Show all</h4>
                </button>
                <h2 className="title">{choiceDisplay}</h2>
            </div>
            <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
            <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
            {choice.map((slide, index) => {
                // console.log(choice);
                return (
                    <div className={index === current ? 'slide active' : 'active'} key={index} >
                        {index === current && (<img src={slide.image} alt="animal" className="image" />)}
                    </div>
                )
            })
            }
        </section>
    );
}

export default ImageSlider;
