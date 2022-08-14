import { CloudinaryContext, Transformation, Image } from "cloudinary-react";
import { useEffect, useRef, useState } from "react";

export const Card = ({ message, name, publicId }) => {
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
      <CloudinaryContext cloudName="dtgbzmpca">
        <Image publicId={publicId} width={1000} ref={ref}>
          <Transformation crop="fit" effect="blur:100" />
          <Transformation effect="brightness_hsb:-50" />
          <Transformation
            color="#FFFFFF"
            overlay={{
              background: "",
              fontFamily: "Neucha",
              fontSize: 100,
              fontWeight: "bold",
              text: message,
              textAlign: "center"
            }}
            width="1300"
            crop="fit"
          />
          <Transformation flags="layer_apply" />
          <Transformation
            color="#FFFFFF"
            overlay={{
              fontFamily: "Dancing Script",
              fontSize: 50,
              fontWeight: "bold",
              text: `from ${name}`
            }}
          />
          <Transformation
            flags="layer_apply"
            gravity="center"
            x="450"
            y="350"
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
