import { CloudinaryContext, Transformation, Image } from "cloudinary-react";
import { useEffect, useRef, useState } from "react";

export const Card = ({ blerb, message, name, publicId, name_2 }) => {
  const ref = useRef(null);
  const [url, setURL] = useState("");
  const [copy, setCopy] = useState("Copy File");

  useEffect(() => {
    setURL(ref.current.element.current.src);
    return () => {};
  }, []);

  const handleCopyToClip = () => {
    navigator.clipboard
      .writeText(url)
      .then(() => setCopy("Copied!"))
      .catch((err) => console.log("error copying to clipboard", err));
  };

  return (
    <div>
      <CloudinaryContext cloudName="warmglowgiving">
        <Image publicId={publicId} width={1000} ref={ref}>
          <Transformation crop="fit" effect="blur:100" />
          <Transformation effect="brightness_hsb:-50" />
          <Transformation
            color="#050505"
            flags="text_disallow_overflow"
            overlay={{
              background: "",
              fontFamily: "indie flower",
              fontSize: 40,
              fontWeight: "bold",
              text: message,
              textAlign: "center"
            }}
            width="900"
            crop="fit"
          />
          <Transformation flags="layer_apply" gravity="south" y="350" />
          <Transformation
            color="#3b0505"
            flags="text_disallow_overflow"
            overlay={{
              background: "",
              fontFamily: "indie flower",
              fontSize: 40,
              fontWeight: "bold",
              text: blerb,
              textAlign: "center"
            }}
            width="900"
            crop="fit"
          />
          <Transformation flags="layer_apply" gravity="north" y="250" />

          <Transformation
            color="#050505"
            overlay={{
              fontFamily: "indie flower",
              fontSize: 50,
              fontWeight: "bold",
              text: `From, ${name}`
            }}
          />
          <Transformation
            flags="layer_apply"
            gravity="south_east"
            y="50"
            x="50"
          />
          <Transformation
            color="#050505"
            overlay={{
              fontFamily: "indie flower",
              fontSize: 50,
              fontWeight: "bold",
              text: `Dear ${name_2},`
            }}
          />
          <Transformation
            flags="layer_apply"
            gravity="north_west"
            y="100"
            x="50"
          />
        </Image>
      </CloudinaryContext>

      <div className="mt-10">
        <h5>Shareable link</h5>
        <input
          disabled
          value={url}
          className="w-full lg:w-2/5 h-10 border-[#B7B3B3] border rounded-sm p-2 mr-4"
        />
        <button
          className="bg-gray-600 py-2 px-6 rounded-[5px] text-white font-semibold"
          onClick={handleCopyToClip}
        >
          {copy}
        </button>
      </div>
    </div>
  );
};
