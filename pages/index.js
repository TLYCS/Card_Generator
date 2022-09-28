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
    name_2: "",
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
                <div className="flex flex-col items-center">
                  <div className="mb-1 flex w-full justify-center">
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
                  <div class="flex justify-center">
                    <div class="mb-3 xl:w-96">
                      <select
                        class="form-select appearance-none
                                block
                                w-full
                                px-3
                                py-1.5
                                text-base
                                font-normal
                                text-gray-700
                                bg-white bg-clip-padding bg-no-repeat
                                border border-solid border-gray-300
                                rounded
                                transition
                                ease-in-out
                                m-0
                                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        aria-label="Default select example"
                      >
                        <option selected>Select a Charity </option>
                        <option value="1">Against Malaria Foundation</option>
                        <option value="2">
                          Development Media International
                        </option>
                        <option value="3">Equalize Health</option>
                        <option value="4">Evidence Action</option>
                        <option value="5">Fistula Foundation</option>
                        <option value="6">The Fred Hollows Foundation</option>
                        <option value="7">GiveDirectly</option>
                        <option value="8">
                          GAIN’s Salt Iodization Program
                        </option>
                        <option value="9">Helen Keller International</option>
                        <option value="10">
                          Innovations for Poverty Action
                        </option>
                        <option value="11">Iodine Global Network</option>
                        <option value="12">Living Goods</option>
                        <option value="13">Malaria Consortium</option>
                        <option value="14">New Incentives</option>
                        <option value="15">One Acre Fund</option>
                        <option value="16">Oxfam</option>
                        <option value="17">
                          Population Services International
                        </option>
                        <option value="18">
                          Sanku – Project Healthy Children
                        </option>
                        <option value="19">SCI Foundation</option>
                        <option value="20">Seva Foundation</option>
                        <option value="21">Village Enterprise</option>
                        <option value="22">Zusha!</option>
                      </select>
                    </div>
                  </div>
                </div>
              ) : tab === "AW" ? (
                <div className="flex flex-col items-center">
                  <div className="flex mb-1 w-full justify-center">
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

                  <div class="flex justify-center">
                    <div class="mb-3 xl:w-96">
                      <select
                        class="form-select appearance-none
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        aria-label="Default select example"
                      >
                        <option selected>Select a Charity </option>
                        <option value="1">Animal Welfare Fund</option>
                        <option value="2">The Humane League</option>
                        <option value="3">Faunalytics</option>
                        <option value="4">Wild Animal Initiative</option>
                      </select>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center">
                  <div className="flex mb-1 w-full justify-center">
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
                  <div class="flex justify-center">
                    <div class="mb-3 xl:w-96">
                      <select
                        class="form-select appearance-none
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        aria-label="Default select example"
                      >
                        <option selected>Select a Charity </option>
                        <option value="1">Evergreen Collaborative</option>
                        <option value="2">Clean Air Task Force</option>
                        <option value="3">Carbon180</option>
                        <option value="4">Long-Term Future Fund</option>
                        <option value="5">Longtermism Fund</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}
              {formData.error && (
                <p className="text-sm text-red-500">Please select an image</p>
              )}
            </section>
          </CloudinaryContext>
          <div className="mb-6">
            <label className="block text-sm text-[#535353] mb-2">
              Specify Recipient:
            </label>
            <input
              required
              name="name_2"
              value={formData.name_2}
              onChange={handleChange}
              className="w-full h-10 border-[#B7B3B3] border rounded-sm p-2"
            />
          </div>
          <div className="mb-6">
            <div class="flex justify-center"></div>
            <label className="block text-sm text-[#535353] mb-2">
              Write a Personal Message:
            </label>
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
            <label className="block text-sm text-[#535353] mb-2">
              Sign your Name:
            </label>
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
