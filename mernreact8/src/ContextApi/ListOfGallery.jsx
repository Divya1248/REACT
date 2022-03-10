import React from 'react'
import { GalleryContextApi } from './Gallery';
import Moment from 'react-moment';
const ListOfGallery = ({ id, created_at, updated_at, description, likes, links, urls, user }) => {

    return (
      <main>
        <figure>
          <img src={urls.thumb} alt={user.name} />
        </figure>
        <div className="block">
          <aside>
            <span className="iconBlock"> <i className="fas fa-user"></i> </span>
            <span className="spanContent"> {user.name}</span>
          </aside>
          <aside>
            <span className="iconBlock">  <i className="far fa-thumbs-up"></i> </span>
            <span className="spanContent"> {likes}</span>
          </aside>
        </div>
        <span className="contentdes">
        <img src={user.profile_image.small} alt={user.name} />
        <p><Moment
          fromNow>{created_at}</Moment></p>
          </span>
        <p>{description === null ? "" : description}</p>
       <footer>
        <a href={links.download} target="_blank" rel="noreferer">Download</a>
        </footer>
      </main>
    );
}

export default ListOfGallery
