import React from "react";
import { LightgalleryProvider, LightgalleryItem } from "react-lightgallery";

//Images
import media1 from "../../../public/assets/img/media/1.jpg"
import media2 from "../../../public/assets/img/media/2.jpg"
import media4 from "../../../public/assets/img/media/4.jpg"
import media5 from "../../../public/assets/img/media/5.jpg"
import media6 from "../../../public/assets/img/media/6.jpg"
import media7 from "../../../public/assets/img/media/7.jpg"
import media8 from "../../../public/assets/img/media/8.jpg"



function Memoriesbook({ url }) {
  return (
    <div>
      <img className="img-responsive br-5" src={url} alt="" />
    </div>
  );
}
const Photos = ({ image, group }) => (
  <div>
    <LightgalleryItem group={group} src={image}>
      <Memoriesbook url={image} />
    </LightgalleryItem>
  </div>
);
export default function Gallery2() {
  const images = [
    {
      id: "image1",
      className: "img-responsive br-5",
      src: media1.src,
    },
    {
      id: "image2",
      className: "img-responsive br-5",
      src: media8.src,
    },
    {
      id: "image3",
      className: "img-responsive br-5",
      src: media4.src,
    },
    {
      id: "image4",
      className: "img-responsive br-5",
      src: media5.src,
    },
    {
      id: "image5",
      className: "img-responsive br-5",
      src: media7.src,
    },
    {
      id: "image6",
      className: "img-responsive br-5",
      src: media2.src,
    },

    {
      id: "image7",
      className: "img-responsive br-5",
      src: media4.src,
    },
    {
      id: "image8",
      className: "img-responsive br-5",
      src: media5.src,
    },
    {
      id: "image9",
      className: "img-responsive br-5",
      src: media6.src,
    },
  ];
  return (
    <div id="lightgallery" className="list-unstyled row">
      <LightgalleryProvider>
        {images.map((image) => {
          return (
            <div
              className="col-xs-6 col-sm-4 col-md-4 col-xl-4 mb-5 border-bottom-0"
              key={image.id}
            >
              <Photos image={`${image.src}`} group="group1" />
            </div>
          );
        })}
      </LightgalleryProvider>
    </div>
  );
}
