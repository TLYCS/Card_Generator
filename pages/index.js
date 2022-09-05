import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { CloudinaryContext, Transformation, Image } from "cloudinary-react";
import { Card } from "../components/Card";
import GHD from "../utils/GHD.json";
import AW from "../utils/AW.json";
import SF from "../utils/SF.json";


export default function Home() {
  const [tab, setTab] = useState("GHD");
  const [imageId, setImageId] = useState(null);
  const [formData, setFormData] = useState({
    message: "",
    name: "",
    name_2:"",
    publicId: null,
    error: false
  });
  const [showCard, setShowCard] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (imageId) {
      setShowCard(true);
    } else {
      setFormData({ ...formData, error: true });
    }
  };

  return (
    
    <div className="p-10">
      <Head>
        <title>Warm Glow Giving</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <h1 className="text-3xl">Give the Gift of Giving</h1>
        <header className="flex border-b-2 mt-7 mb-7">
          <Link href="#">
            <a
              className={`text-base capitalize mr-8 pb-4 ${
                tab === "GHD"
                  ? "font-bold border-b-4 border-[#1D4ED8] text-[#1D4ED8]"
                  : "text-[#5A5A7D]"
              } `}
              onClick={() => setTab("GHD")}
            >
              Global Health + Development
            </a>
          </Link>
          <Link href="#">
            <a
              className={`text-base capitalize mr-8 pb-4 ${
                tab === "AW"
                  ? "font-bold border-b-4 border-[#1D4ED8] text-[#1D4ED8]"
                  : "text-[#5A5A7D]"
              } `}
              onClick={() => setTab("AW")}
            >
              Animal Welfare
            </a>
          </Link>
          <Link href="#">
            <a
              className={`text-base capitalize mr-8 pb-4 ${
                tab === "SF"
                  ? "font-bold border-b-4 border-[#1D4ED8] text-[#1D4ED8]"
                  : "text-[#5A5A7D]"
              } `}
              onClick={() => setTab("SF")}
            >
              Sustainability + Futurism
            </a>
          </Link>
        </header>
        <form onSubmit={handleSubmit} className="lg:w-2/5">
          <CloudinaryContext cloudName="warmglowgiving">
            <section className="mb-6">
              <label className="block text-sm text-[#535353] mb-2">
                Select Card Art:
              </label>
              {tab === "GHD" ? (
                <div className="flex items-center">
                  {GHD.map((img) => (
                    <div
                      key={img.id}
                      className={`mr-2 ${
                        img.id === imageId ? "border-[#1D4ED8] border-4" : ""
                      }`}
                      onClick={() => {
                        setImageId(img.id);
                        setFormData({
                          ...formData,
                          publicId: img.publicId,
                          error: false
                        });
                        setShowCard(false);
                      }}
                    >
                      <Image publicId={img.publicId}>
                        <Transformation crop="scale" width="80" height="80" />
                      </Image>
                    </div>
                  ))}
                </div>
              ) : tab === "AW" ? (
                <div className="flex items-center">
                  {AW.map((img) => (
                    <div
                      key={img.id}
                      className={`mr-2 ${
                        img.id === imageId ? "border-[#1D4ED8] border-4" : ""
                      }`}
                      onClick={() => {
                        setImageId(img.id);
                        setFormData({
                          ...formData,
                          publicId: img.publicId,
                          error: false
                        });
                        setShowCard(false);
                      }}
                    >
                      <Image publicId={img.publicId}>
                        <Transformation crop="scale" width="80" height="80" />
                      </Image>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex items-center">
                  {SF.map((img) => (
                    <div
                      key={img.id}
                      className={`mr-2 ${
                        img.id === imageId ? "border-[#1D4ED8] border-4" : ""
                      }`}
                      onClick={() => {
                        setImageId(img.id);
                        setFormData({
                          ...formData,
                          publicId: img.publicId,
                          error: false
                        });
                        setShowCard(false);
                      }}
                    >
                      <Image publicId={img.publicId}>
                        <Transformation crop="scale" width="80" height="80" />
                      </Image>
                    </div>
                  ))}
                </div>
                
              )}
              {formData.error && (
                <p className="text-sm text-red-500">Please select an image</p>
              )}
            </section>
            
          </CloudinaryContext>
        <div className="mb-6">
            <label className="block text-sm text-[#535353] mb-2">Specify Recipient:</label>
            <input
              required
              name="name_2"
              value={formData.name_2}
              onChange={handleChange}
              className="w-full h-10 border-[#B7B3B3] border rounded-sm p-2"
            />
          </div>
          <div class="flex justify-center">
            <div>
              <div class="dropdown relative">
                <button
                  className="
                    dropdown-toggle
                    px-6
                    py-2.5
                    bg-blue-600
                    text-white
                    font-medium
                    text-xs
                    leading-tight
                    uppercase
                    rounded
                    shadow-md
                    hover:bg-blue-700 hover:shadow-lg
                    focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
                    active:bg-blue-800 active:shadow-lg active:text-white
                    transition
                    duration-150
                    ease-in-out
                    flex
                    items-center
                    whitespace-nowrap
                  "
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown button
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="caret-down"
                    class="w-2 ml-2"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                  >
                    <path
                      fill="currentColor"
                      d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                    ></path>
                  </svg>
                </button>
                <ul
                  className="
                    dropdown-menu
                    min-w-max
                    absolute
                    hidden
                    bg-white
                    text-base
                    z-50
                    float-left
                    py-2
                    list-none
                    text-left
                    rounded-lg
                    shadow-lg
                    mt-1
                    hidden
                    m-0
                    bg-clip-padding
                    border-none
                  "
                  aria-labelledby="dropdownMenuButton1"
                >
                  <li>
                    <a
                      className="
                        dropdown-item
                        text-sm
                        py-2
                        px-4
                        font-normal
                        block
                        w-full
                        whitespace-nowrap
                        bg-transparent
                        text-gray-700
                        hover:bg-gray-100
                      "
                      href="#"
                      >Action</a
                    >
                  </li>
                  <li>
                    <a
                      className="
                        dropdown-item
                        text-sm
                        py-2
                        px-4
                        font-normal
                        block
                        w-full
                        whitespace-nowrap
                        bg-transparent
                        text-gray-700
                        hover:bg-gray-100
                      "
                      href="#"
                      >Another action</a
                    >
                  </li>
                  <li>
                    <a
                      className="
                        dropdown-item
                        text-sm
                        py-2
                        px-4
                        font-normal
                        block
                        w-full
                        whitespace-nowrap
                        bg-transparent
                        text-gray-700
                        hover:bg-gray-100
                      "
                      href="#"
                      >Something else here</a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-sm text-[#535353] mb-2">Write a Personal Message:</label>
            <textarea
              rows="4"
              required
              name="message"
              value={formData.message}
              onChange={handleChange}
              maxLength={500}
              className="w-full border-[#B7B3B3] border rounded-sm p-2"
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm text-[#535353] mb-2">Sign your Name:</label>
            <input
              required
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full h-10 border-[#B7B3B3] border rounded-sm p-2"
            />
          </div>
          <button className="bg-[#1D4ED8] py-3 px-7 rounded-[5px] text-white font-semibold">
            Generate Card
          </button>
        </form>

        {showCard && (
          <div className="mt-10">
            <Card
              message={formData.message}
              name={formData.name}
              name_2={formData.name_2}
              publicId={formData.publicId}
            />
          </div>
        )}
      </main>
    </div>
  );
}
