import Head from "next/head";
import Link from "next/link";
import { useMemo, useState } from "react";
import { CloudinaryContext, Transformation, Image } from "cloudinary-react";
import { Card } from "../components/Card";
import GHD from "../utils/GHD.json";
import GHDCharityList from "../utils/GHD_charity_list.json";
import AWCharityList from "../utils/AW_charity_list.json";
import SFCharityList from "../utils/SF_charity_list.json";
import AW from "../utils/AW.json";
import SF from "../utils/SF.json";

export default function Home() {
  const [tab, setTab] = useState("GHD");
  const [imageId, setImageId] = useState(null);
  const [showCharityDescription, setShowCharityDescription] = useState(true);
  const fullList = GHDCharityList.concat(AWCharityList).concat(SFCharityList);
  const [selectedCharity, setSelectedCharity] = useState();

  const selectedBlerb = useMemo(() => {
    return fullList.find((c) => c.name === selectedCharity)?.blerb;
  }, [selectedCharity, fullList]);

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

  const handleChangeCharity = (e) => {
    setSelectedCharity(e.target.value);
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
                        value={selectedCharity}
                        onChange={handleChangeCharity}
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
                        {GHDCharityList.map((c) => (
                          <option key={c.name} value={c.name}>
                            {c.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="mb-6">
                    {
                      GHDCharityList.find((c) => c.name === selectedCharity)
                        ?.blerb
                    }
                  </div>
                  <div class="form-check">
                    <input
                      className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      type="checkbox"
                      value=""
                      checked={showCharityDescription}
                      onChange={(e) =>
                        setShowCharityDescription(e.target.checked)
                      }
                      id="flexCheckDefault"
                    />
                    <label for="flexCheckDefault">
                      Show charity description on Card
                    </label>
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
                        value={selectedCharity}
                        onChange={handleChangeCharity}
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
                        {AWCharityList.map((c) => (
                          <option key={c.name} value={c.name}>
                            {c.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="mb-6">
                    {
                      AWCharityList.find((c) => c.name === selectedCharity)
                        ?.blerb
                    }
                  </div>
                  <div class="form-check">
                    <input
                      className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      type="checkbox"
                      value=""
                      checked={showCharityDescription}
                      onChange={(e) =>
                        setShowCharityDescription(e.target.checked)
                      }
                      id="flexCheckDefault"
                    />
                    <label for="flexCheckDefault">
                      Show charity description on Card
                    </label>
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
                        value={selectedCharity}
                        onChange={handleChangeCharity}
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
                        {SFCharityList.map((c) => (
                          <option key={c.name} value={c.name}>
                            {c.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="mb-6">
                    {
                      SFCharityList.find((c) => c.name === selectedCharity)
                        ?.blerb
                    }
                  </div>
                  <div class="form-check">
                    <input
                      className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      type="checkbox"
                      value=""
                      checked={showCharityDescription}
                      onChange={(e) =>
                        setShowCharityDescription(e.target.checked)
                      }
                      id="flexCheckDefault"
                    />
                    <label for="flexCheckDefault">
                      Show charity description on Card
                    </label>
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
              blerb={selectedBlerb}
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
