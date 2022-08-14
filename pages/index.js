import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { CloudinaryContext, Transformation, Image } from "cloudinary-react";
import { Card } from "../components/Card";
import harvest from "../utils/harvest.json";
import thanksgiving from "../utils/thanksgiving.json";
import diwali from "../utils/diwali.json";

export default function Home() {
  const [tab, setTab] = useState("harvest");
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
        <title>Holiday Card</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <h1 className="text-3xl">Give the Gift of Giving</h1>
        <header className="flex border-b-2 mt-7 mb-7">
          <Link href="#">
            <a
              className={`text-base capitalize mr-8 pb-4 ${
                tab === "harvest"
                  ? "font-bold border-b-4 border-[#1D4ED8] text-[#1D4ED8]"
                  : "text-[#5A5A7D]"
              } `}
              onClick={() => setTab("harvest")}
            >
              Global Health + Development
            </a>
          </Link>
          <Link href="#">
            <a
              className={`text-base capitalize mr-8 pb-4 ${
                tab === "thanksgiving"
                  ? "font-bold border-b-4 border-[#1D4ED8] text-[#1D4ED8]"
                  : "text-[#5A5A7D]"
              } `}
              onClick={() => setTab("thanksgiving")}
            >
              Animal Welfare
            </a>
          </Link>
          <Link href="#">
            <a
              className={`text-base capitalize mr-8 pb-4 ${
                tab === "diwali"
                  ? "font-bold border-b-4 border-[#1D4ED8] text-[#1D4ED8]"
                  : "text-[#5A5A7D]"
              } `}
              onClick={() => setTab("diwali")}
            >
              Sustainability + Futurism
            </a>
          </Link>
        </header>
        <form onSubmit={handleSubmit} className="lg:w-2/5">
          <CloudinaryContext cloudName="dtgbzmpca">
            <section className="mb-6">
              <label className="block text-sm text-[#535353] mb-2">
                Select Card Art:
              </label>
              {tab === "harvest" ? (
                <div className="flex items-center">
                  {harvest.map((img) => (
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
              ) : tab === "thanksgiving" ? (
                <div className="flex items-center">
                  {thanksgiving.map((img) => (
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
                  {diwali.map((img) => (
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
          <div className="mb-6">
            <label className="block text-sm text-[#535353] mb-2">Write a Personal Message:</label>
            <textarea
              rows="4"
              required
              name="message"
              value={formData.message}
              onChange={handleChange}
              maxLength={140}
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
