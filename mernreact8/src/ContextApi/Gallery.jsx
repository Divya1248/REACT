// import { Component } from "react";
// import { createContext } from "react";
// let access_key = "5tehLg8Z7eG7DY33hhca03rTbc8_JoBbL_lZ1bXKHw0";


// export let GalleryContextApi = createContext(null);

// class GalleryProvider extends Component{
//     state = {
//         unsplashPhotos:[],
//     }
//     async componentDidMount() {
//         let base_url = "https://api.unsplash.com";
//         let photos = await window.fetch(`${base_url}/photos/?client_id=${access_key}`);

//         let finalPhotos = await photos.json();
//         this.setState({
//             unsplashPhotos: finalPhotos})
//     }
//     render() {
//         return( <GalleryContextApi.Provider value={this.state.unsplashPhotos}>
//           {this.props.children}
//         </GalleryContextApi.Provider>
//         )
//     }
// }

// export default GalleryProvider;

import React, { useEffect, useState } from 'react'
import { createContext } from 'react';
let access_key = "5tehLg8Z7eG7DY33hhca03rTbc8_JoBbL_lZ1bXKHw0";

export let GalleryContextApi = createContext(null);
const GalleryProvider = ({ children }) => {
    let [state, setstate] = useState([]);
    useEffect(() => {
        let fetchData = async () => {
            let data = await window.fetch(`https://api.unsplash.com/photos/?client_id=${access_key}`);
            let finalData = await data.json();
            setstate(finalData);
        };
        fetchData();
    },[state])
    return (
        <div>
            <GalleryContextApi.Provider value={state}>
                {children}
            </GalleryContextApi.Provider>
         
        </div>
    )
}

export default GalleryProvider

