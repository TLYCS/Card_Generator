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
  const fullList = GHDCharityList.concat(AWCharityList).concat(SFCharityList);
  const [selectedCharity, setSelectedCharity] = useState();
  const [selectedFontSize, setSelectedFontSize] = useState(28);

  const selectedBlerb = useMemo(() => {
    return fullList.find((c) => c.name === selectedCharity)?.blerb;
  }, [selectedCharity, fullList]);

  const [formData, setFormData] = useState({
    message: "",
    name: "",
    name_2: "",
    publicId: null,
    blerb: "",
    text: 400,
    fontSize: 28,
    error: false
  });
  const [showCard, setShowCard] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleChangeCharity = (e) => {
    setSelectedCharity(e.target.value);
  };

  const handleFontSize = (e) => {
    setSelectedFontSize(e.target.value);
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
        <ul class="p-5">
          <ol class="list-decimal">
            <li>Select the cause area your recipient is interested in.</li>
            <li>Select art for the card.</li>
            <li>Select the charity to give to.</li>
            <li>Make a donation to that charity.</li>
            <li>Personalize your card.</li>
            <li>Send your recipient the image or link to your card.</li>
          </ol>
        </ul>
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
              <div class="flex flex-col justify-left items-left">
                <label className="block text-sm text-[#535353] mb-2">
                  Select Card Art:
                </label>
              </div>

              {tab === "GHD" ? (
                <div className="flex flex-col items-left">
                  <div className="mb-1 flex w-full justify-left">
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
                            text: img.size,
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
                  <label className="block text-sm text-[#535353] mb-2">
                    Select a Charity:
                  </label>
                  <div className="mb-6">
                    <div class="flex justify-left">
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
                          <option selected> </option>
                          {GHDCharityList.map((c) => (
                            <option key={c.name} value={c.name}>
                              {c.name}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="p-1">
                    <a
                      href={
                        GHDCharityList.find((c) => c.name === selectedCharity)
                          ?.link
                      }
                      class="text-blue-500 underline"
                    >
                      {selectedCharity}
                    </a>
                  </div>
                  <div className="p-1">
                    {
                      GHDCharityList.find((c) => c.name === selectedCharity)
                        ?.blerb
                    }
                  </div>
                </div>
              ) : tab === "AW" ? (
                <div className="flex flex-col items-left">
                  <div className="flex mb-1 w-full justify-left">
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
                            text: img.size,
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

                  <label className="block text-sm text-[#535353] mb-2">
                    Select Charity:
                  </label>

                  <div class="flex justify-left"></div>
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
                      <option selected> </option>
                      {AWCharityList.map((c) => (
                        <option key={c.name} value={c.name}>
                          {c.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="p-1">
                    <a
                      href={
                        AWCharityList.find((c) => c.name === selectedCharity)
                          ?.link
                      }
                      class="text-blue-500 underline"
                    >
                      {selectedCharity}
                    </a>
                  </div>
                  <div className="p-1">
                    {
                      AWCharityList.find((c) => c.name === selectedCharity)
                        ?.blerb
                    }
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-left">
                  <div className="flex mb-1 w-full justify-left">
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
                            text: img.size,
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
                  <label className="block text-sm text-[#535353] mb-2">
                    Select Charity:
                  </label>
                  <div class="flex justify-left"></div>
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
                      <option selected> </option>
                      {SFCharityList.map((c) => (
                        <option key={c.name} value={c.name}>
                          {c.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="p-1">
                    <a
                      href={
                        SFCharityList.find((c) => c.name === selectedCharity)
                          ?.link
                      }
                      class="text-blue-500 underline"
                    >
                      {selectedCharity}
                    </a>
                  </div>
                  <div className="p-1">
                    {
                      SFCharityList.find((c) => c.name === selectedCharity)
                        ?.blerb
                    }
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
            <div class="flex justify-left"></div>
            <label className="block text-sm text-[#535353] mb-2">
              Write a Personal Message (does not support hard returns):
            </label>
            <textarea
              rows="4"
              required
              name="message"
              value={formData.message}
              onChange={handleChange}
              maxLength={350}
              className="w-full border-[#B7B3B3] border rounded-sm p-2"
            />
          </div>
          <div className="mb-6">
            <div class="flex justify-left"></div>
            <label className="block text-sm text-[#535353] mb-2">
              Select a font size:
            </label>
            <div class="mb-3 xl:w-96">
              <select
                value={selectedFontSize}
                onChange={handleFontSize}
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
                <option value="20">20</option>
                <option value="22">22</option>
                <option value="24">24</option>
                <option value="26">26</option>
                <option value="28">28</option>
                <option value="30">30</option>
                <option value="32">32</option>
                <option value="34">34</option>
                <option value="36">36</option>
              </select>
            </div>
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
              fontSize={selectedFontSize}
            />
          </div>
        )}
      </main>
    </div>
  );
}
