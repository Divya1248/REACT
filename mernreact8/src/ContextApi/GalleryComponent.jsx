import React, { useContext } from 'react'
import { Fragment } from 'react/cjs/react.production.min';
import { GalleryContextApi } from './Gallery';
import ListOfGallery from './ListOfGallery';

const GalleryComponent = () => {
    let GalleryData = useContext(GalleryContextApi);
    return (
        <Fragment>
            {GalleryData.map(x => {
                console.log(x);
                return <ListOfGallery key={x.id} {...x}/>
            })}
        </Fragment>
    )
}

export default GalleryComponent;
