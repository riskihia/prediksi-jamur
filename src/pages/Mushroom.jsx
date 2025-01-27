import React, { useState, useEffect } from "react";

function MushroomClassifier() {
  const [selectedMushroom, setSelectedMushroom] = useState(null);
  const [mushrooms, setMushrooms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://mymushroom.my.id/mushroom")
      .then((response) => response.json())
      .then((data) => {
        setMushrooms(data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching mushrooms:", error);
        setLoading(false);
      });
  }, []);

  const handleMushroomSelect = (mushroomId) => {
    const mushroom = mushrooms.find((mushroom) => mushroom.id === mushroomId);
    setSelectedMushroom(mushroom);
  };

  return (
    <section id="mushroom" className="pt-36 pb-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-full mx-auto text-center mb-2">
          <h4 className="font-semibold text-lg text-primary mb-2">
            Mushroom List
          </h4>
          <h2 className="font-bold text-saildark text-3xl mb-4">
            Mushroom List
          </h2>
          <h4 className="font-semibold text-2xl text-primary mb-2">Edible</h4>
        </div>
        <div className="py-4 flex flex-wrap justify-between">
          <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-2 group">
            <a href="detail.html">
              <div className="max-w-sm rounded-lg overflow-hidden shadow-lg border border-gray-300 transition duration-300 transform group-hover:scale-105 lg:font-semibold">
                <div className="relative">
                  <img
                    src="/src/assets/img/edible/Champignon.jpg"
                    alt="Maitake"
                    className="w-full overflow-hidden rounded-t-lg"
                    style="max-height: 200px; object-fit: cover"
                  />
                </div>
                <div className="px-6 py-4 p-4">
                  <div className="text-dark text-2xl max-w-md">
                    <p className="text-gray-700 text-base mb-2 text-center">
                      <span className="font-bold text-primary">Edible</span>
                    </p>
                    <h2 className="font-bold mb-4 lg:text-xl">Champignon</h2>
                  </div>
                  <p className="text-gray-700 text-base mb-4 text-justify">
                    <span className="font-bold">Nama Latin : </span>Agaricus
                    bisporus
                  </p>
                  <p className="text-gray-700 text-base mb-2 text-justify">
                    <span className="font-bold">Champignon</span>, juga dikenal
                    sebagai jamur putih, adalah salah satu jamur yang paling
                    umum dikonsumsi di seluruh dunia. Mereka memiliki tudung
                    putih hingga coklat muda dan biasanya tumbuh di atas tanah.
                  </p>
                  <p className="text-gray-700 text-base mb-2 text-justify">
                    <span className="font-bold">Nutrisi :</span>
                    <li>
                      <span className="font-bold">Kalori :</span> Rendah
                    </li>
                    <li>
                      <span className="font-bold">Protein :</span> Tinggi
                    </li>
                    <li>
                      <span className="font-bold">Vitamin :</span> B, D
                    </li>
                    <li>
                      <span className="font-bold">Mineral :</span>
                      selenium, zat besi, zink
                    </li>
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-10 group">
            <a href="detail.html">
              <div className="max-w-sm rounded-lg overflow-hidden shadow-lg border border-gray-300 transition duration-300 transform group-hover:scale-105 lg:font-semibold">
                <div className="relative">
                  <img
                    src="/src/assets/img/edible/Champignon.jpg"
                    alt="Maitake"
                    className="w-full overflow-hidden rounded-t-lg"
                    style="max-height: 200px; object-fit: cover"
                  />
                </div>
                <div className="px-6 py-4 p-4">
                  <div className="text-dark text-2xl max-w-md">
                    <p className="text-gray-700 text-base mb-2 text-center">
                      <span className="font-bold text-primary">Edible</span>
                    </p>
                    <h2 className="font-bold mb-4 lg:text-xl">Champignon</h2>
                  </div>
                  <p className="text-gray-700 text-base mb-4 text-justify">
                    <span className="font-bold">Nama Latin : </span>Agaricus
                    bisporus
                  </p>
                  <p className="text-gray-700 text-base mb-2 text-justify">
                    <span className="font-bold">Champignon</span>, juga dikenal
                    sebagai jamur putih, adalah salah satu jamur yang paling
                    umum dikonsumsi di seluruh dunia. Mereka memiliki tudung
                    putih hingga coklat muda dan biasanya tumbuh di atas tanah.
                  </p>
                  <p className="text-gray-700 text-base mb-2 text-justify">
                    <span className="font-bold">Nutrisi :</span>
                    <li>
                      <span className="font-bold">Kalori :</span> Rendah
                    </li>
                    <li>
                      <span className="font-bold">Protein :</span> Tinggi
                    </li>
                    <li>
                      <span className="font-bold">Vitamin :</span> B, D
                    </li>
                    <li>
                      <span className="font-bold">Mineral :</span>
                      selenium, zat besi, zink
                    </li>
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-2 group">
            <a href="detail.html">
              <div className="max-w-sm rounded-lg overflow-hidden shadow-lg border border-gray-300 transition duration-300 transform group-hover:scale-105 lg:font-semibold">
                <div className="relative">
                  <img
                    src="/src/assets/img/edible/Champignon.jpg"
                    alt="Maitake"
                    className="w-full overflow-hidden rounded-t-lg"
                    style="max-height: 200px; object-fit: cover"
                  />
                </div>
                <div className="px-6 py-4 p-4">
                  <div className="text-dark text-2xl max-w-md">
                    <p className="text-gray-700 text-base mb-2 text-center">
                      <span className="font-bold text-primary">Edible</span>
                    </p>
                    <h2 className="font-bold mb-4 lg:text-xl">Champignon</h2>
                  </div>
                  <p className="text-gray-700 text-base mb-4 text-justify">
                    <span className="font-bold">Nama Latin : </span>Agaricus
                    bisporus
                  </p>
                  <p className="text-gray-700 text-base mb-2 text-justify">
                    <span className="font-bold">Champignon</span>, juga dikenal
                    sebagai jamur putih, adalah salah satu jamur yang paling
                    umum dikonsumsi di seluruh dunia. Mereka memiliki tudung
                    putih hingga coklat muda dan biasanya tumbuh di atas tanah.
                  </p>
                  <p className="text-gray-700 text-base mb-2 text-justify">
                    <span className="font-bold">Nutrisi :</span>
                    <li>
                      <span className="font-bold">Kalori :</span> Rendah
                    </li>
                    <li>
                      <span className="font-bold">Protein :</span> Tinggi
                    </li>
                    <li>
                      <span className="font-bold">Vitamin :</span> B, D
                    </li>
                    <li>
                      <span className="font-bold">Mineral :</span>
                      selenium, zat besi, zink
                    </li>
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-2 group">
            <a href="detail.html">
              <div className="max-w-sm rounded-lg overflow-hidden shadow-lg border border-gray-300 transition duration-300 transform group-hover:scale-105 lg:font-semibold">
                <div className="relative">
                  <img
                    src="/src/assets/img/edible/Champignon.jpg"
                    alt="Maitake"
                    className="w-full overflow-hidden rounded-t-lg"
                    style="max-height: 200px; object-fit: cover"
                  />
                </div>
                <div className="px-6 py-4 p-4">
                  <div className="text-dark text-2xl max-w-md">
                    <p className="text-gray-700 text-base mb-2 text-center">
                      <span className="font-bold text-primary">Edible</span>
                    </p>
                    <h2 className="font-bold mb-4 lg:text-xl">Champignon</h2>
                  </div>
                  <p className="text-gray-700 text-base mb-4 text-justify">
                    <span className="font-bold">Nama Latin : </span>Agaricus
                    bisporus
                  </p>
                  <p className="text-gray-700 text-base mb-2 text-justify">
                    <span className="font-bold">Champignon</span>, juga dikenal
                    sebagai jamur putih, adalah salah satu jamur yang paling
                    umum dikonsumsi di seluruh dunia. Mereka memiliki tudung
                    putih hingga coklat muda dan biasanya tumbuh di atas tanah.
                  </p>
                  <p className="text-gray-700 text-base mb-2 text-justify">
                    <span className="font-bold">Nutrisi :</span>
                    <li>
                      <span className="font-bold">Kalori :</span> Rendah
                    </li>
                    <li>
                      <span className="font-bold">Protein :</span> Tinggi
                    </li>
                    <li>
                      <span className="font-bold">Vitamin :</span> B, D
                    </li>
                    <li>
                      <span className="font-bold">Mineral :</span>
                      selenium, zat besi, zink
                    </li>
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-2 group">
            <a href="detail.html">
              <div className="max-w-sm rounded-lg overflow-hidden shadow-lg border border-gray-300 transition duration-300 transform group-hover:scale-105 lg:font-semibold">
                <div className="relative">
                  <img
                    src="/src/assets/img/edible/Champignon.jpg"
                    alt="Maitake"
                    className="w-full overflow-hidden rounded-t-lg"
                    style="max-height: 200px; object-fit: cover"
                  />
                </div>
                <div className="px-6 py-4 p-4">
                  <div className="text-dark text-2xl max-w-md">
                    <p className="text-gray-700 text-base mb-2 text-center">
                      <span className="font-bold text-primary">Edible</span>
                    </p>
                    <h2 className="font-bold mb-4 lg:text-xl">Champignon</h2>
                  </div>
                  <p className="text-gray-700 text-base mb-4 text-justify">
                    <span className="font-bold">Nama Latin : </span>Agaricus
                    bisporus
                  </p>
                  <p className="text-gray-700 text-base mb-2 text-justify">
                    <span className="font-bold">Champignon</span>, juga dikenal
                    sebagai jamur putih, adalah salah satu jamur yang paling
                    umum dikonsumsi di seluruh dunia. Mereka memiliki tudung
                    putih hingga coklat muda dan biasanya tumbuh di atas tanah.
                  </p>
                  <p className="text-gray-700 text-base mb-2 text-justify">
                    <span className="font-bold">Nutrisi :</span>
                    <li>
                      <span className="font-bold">Kalori :</span> Rendah
                    </li>
                    <li>
                      <span className="font-bold">Protein :</span> Tinggi
                    </li>
                    <li>
                      <span className="font-bold">Vitamin :</span> B, D
                    </li>
                    <li>
                      <span className="font-bold">Mineral :</span>
                      selenium, zat besi, zink
                    </li>
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-2 group">
            <a href="detail.html">
              <div className="max-w-sm rounded-lg overflow-hidden shadow-lg border border-gray-300 transition duration-300 transform group-hover:scale-105 lg:font-semibold">
                <div className="relative">
                  <img
                    src="/src/assets/img/edible/Champignon.jpg"
                    alt="Maitake"
                    className="w-full overflow-hidden rounded-t-lg"
                    style="max-height: 200px; object-fit: cover"
                  />
                </div>
                <div className="px-6 py-4 p-4">
                  <div className="text-dark text-2xl max-w-md">
                    <p className="text-gray-700 text-base mb-2 text-center">
                      <span className="font-bold text-primary">Edible</span>
                    </p>
                    <h2 className="font-bold mb-4 lg:text-xl">Champignon</h2>
                  </div>
                  <p className="text-gray-700 text-base mb-4 text-justify">
                    <span className="font-bold">Nama Latin : </span>Agaricus
                    bisporus
                  </p>
                  <p className="text-gray-700 text-base mb-2 text-justify">
                    <span className="font-bold">Champignon</span>, juga dikenal
                    sebagai jamur putih, adalah salah satu jamur yang paling
                    umum dikonsumsi di seluruh dunia. Mereka memiliki tudung
                    putih hingga coklat muda dan biasanya tumbuh di atas tanah.
                  </p>
                  <p className="text-gray-700 text-base mb-2 text-justify">
                    <span className="font-bold">Nutrisi :</span>
                    <li>
                      <span className="font-bold">Kalori :</span> Rendah
                    </li>
                    <li>
                      <span className="font-bold">Protein :</span> Tinggi
                    </li>
                    <li>
                      <span className="font-bold">Vitamin :</span> B, D
                    </li>
                    <li>
                      <span className="font-bold">Mineral :</span>
                      selenium, zat besi, zink
                    </li>
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-2 group">
            <a href="detail.html">
              <div className="max-w-sm rounded-lg overflow-hidden shadow-lg border border-gray-300 transition duration-300 transform group-hover:scale-105 lg:font-semibold">
                <div className="relative">
                  <img
                    src="/src/assets/img/edible/Champignon.jpg"
                    alt="Maitake"
                    className="w-full overflow-hidden rounded-t-lg"
                    style="max-height: 200px; object-fit: cover"
                  />
                </div>
                <div className="px-6 py-4 p-4">
                  <div className="text-dark text-2xl max-w-md">
                    <p className="text-gray-700 text-base mb-2 text-center">
                      <span className="font-bold text-primary">Edible</span>
                    </p>
                    <h2 className="font-bold mb-4 lg:text-xl">Champignon</h2>
                  </div>
                  <p className="text-gray-700 text-base mb-4 text-justify">
                    <span className="font-bold">Nama Latin : </span>Agaricus
                    bisporus
                  </p>
                  <p className="text-gray-700 text-base mb-2 text-justify">
                    <span className="font-bold">Champignon</span>, juga dikenal
                    sebagai jamur putih, adalah salah satu jamur yang paling
                    umum dikonsumsi di seluruh dunia. Mereka memiliki tudung
                    putih hingga coklat muda dan biasanya tumbuh di atas tanah.
                  </p>
                  <p className="text-gray-700 text-base mb-2 text-justify">
                    <span className="font-bold">Nutrisi :</span>
                    <li>
                      <span className="font-bold">Kalori :</span> Rendah
                    </li>
                    <li>
                      <span className="font-bold">Protein :</span> Tinggi
                    </li>
                    <li>
                      <span className="font-bold">Vitamin :</span> B, D
                    </li>
                    <li>
                      <span className="font-bold">Mineral :</span>
                      selenium, zat besi, zink
                    </li>
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-full mx-auto text-center mb-6 mt-6">
          <h4 className="font-semibold text-2xl text-red-600 mb-2">Inedible</h4>
        </div>
        <div className="py-8 flex flex-wrap justify-between">
          <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-10 group">
            <a href="detail.html">
              <div className="max-w-sm rounded-lg overflow-hidden shadow-lg border border-gray-300 transition duration-300 transform group-hover:scale-105">
                <div className="relative">
                  <img
                    src="/src/assets/img/inedible/Death Cap.jpg"
                    alt="Maitake"
                    className="w-full overflow-hidden rounded-t-lg"
                    style="max-height: 200px; object-fit: cover"
                  />
                </div>
                <div className="px-6 py-4 p-4">
                  <div className="text-dark text-2xl max-w-md">
                    <p className="text-gray-700 text-base mb-2 text-center">
                      <span className="font-bold text-red-500">Inedible</span>
                    </p>
                    <h2 className="font-bold mb-4 lg:text-xl">
                      Daedaleopsis Tricolor
                    </h2>
                  </div>
                  <p className="text-gray-700 text-base mb-4 text-justify">
                    <span className="font-bold">Nama Latin : </span>Daedaleopsis
                    confragosa
                  </p>
                  <p className="text-gray-700 text-base mb-2 text-justify">
                    <span className="font-bold">Daedaleopsis tricolor</span>
                    adalah kelompok jamur beracun. Sering ditemukan pada kayu
                    mati di hutan-hutan berdaun dan campuran. Jamur ini memiliki
                    tudung yang berwarna coklat kemerahan hingga oranye dengan
                    pola zonasi, dan porus berwarna putih hingga kekuningan di
                    bagian bawah tudung.
                  </p>
                  <p className="text-gray-700 text-base mb-2 text-justify">
                    <span className="font-bold">Toksisitas :</span>
                    Beracun jika dimakan mentah atau kurang dimasak.
                  </p>
                  <p className="text-gray-700 text-base mb-2 text-justify">
                    <span className="font-bold">Gejala :</span> Gejalanya
                    mungkin muncul setelah beberapa jam hingga beberapa hari
                    setelah konsumsi, termasuk mual, muntah, diare, kebingungan,
                    seperti halusinasi, perubahan persepsi.
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-2 group">
            <a href="detail.html">
              <div className="max-w-sm rounded-lg overflow-hidden shadow-lg border border-gray-300 transition duration-300 transform group-hover:scale-105">
                <div className="relative">
                  <img
                    src="/src/assets/img/inedible/Death Cap.jpg"
                    alt="Maitake"
                    className="w-full overflow-hidden rounded-t-lg"
                    style="max-height: 200px; object-fit: cover"
                  />
                </div>
                <div className="px-6 py-4 p-4">
                  <div className="text-dark text-2xl max-w-md">
                    <p className="text-gray-700 text-base mb-2 text-center">
                      <span className="font-bold text-red-500">Inedible</span>
                    </p>
                    <h2 className="font-bold mb-4 lg:text-xl">
                      Daedaleopsis Tricolor
                    </h2>
                  </div>
                  <p className="text-gray-700 text-base mb-4 text-justify">
                    <span className="font-bold">Nama Latin : </span>Daedaleopsis
                    confragosa
                  </p>
                  <p className="text-gray-700 text-base mb-2 text-justify">
                    <span className="font-bold">Daedaleopsis tricolor</span>
                    adalah kelompok jamur beracun. Sering ditemukan pada kayu
                    mati di hutan-hutan berdaun dan campuran. Jamur ini memiliki
                    tudung yang berwarna coklat kemerahan hingga oranye dengan
                    pola zonasi, dan porus berwarna putih hingga kekuningan di
                    bagian bawah tudung.
                  </p>
                  <p className="text-gray-700 text-base mb-2 text-justify">
                    <span className="font-bold">Toksisitas :</span>
                    Beracun jika dimakan mentah atau kurang dimasak.
                  </p>
                  <p className="text-gray-700 text-base mb-2 text-justify">
                    <span className="font-bold">Gejala :</span> Gejalanya
                    mungkin muncul setelah beberapa jam hingga beberapa hari
                    setelah konsumsi, termasuk mual, muntah, diare, kebingungan,
                    seperti halusinasi, perubahan persepsi.
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-2 group">
            <a href="detail.html">
              <div className="max-w-sm rounded-lg overflow-hidden shadow-lg border border-gray-300 transition duration-300 transform group-hover:scale-105">
                <div className="relative">
                  <img
                    src="/src/assets/img/inedible/Death Cap.jpg"
                    alt="Maitake"
                    className="w-full overflow-hidden rounded-t-lg"
                    style="max-height: 200px; object-fit: cover"
                  />
                </div>
                <div className="px-6 py-4 p-4">
                  <div className="text-dark text-2xl max-w-md">
                    <p className="text-gray-700 text-base mb-2 text-center">
                      <span className="font-bold text-red-500">Inedible</span>
                    </p>
                    <h2 className="font-bold mb-4 lg:text-xl">
                      Daedaleopsis Tricolor
                    </h2>
                  </div>
                  <p className="text-gray-700 text-base mb-4 text-justify">
                    <span className="font-bold">Nama Latin : </span>Daedaleopsis
                    confragosa
                  </p>
                  <p className="text-gray-700 text-base mb-2 text-justify">
                    <span className="font-bold">Daedaleopsis tricolor</span>
                    adalah kelompok jamur beracun. Sering ditemukan pada kayu
                    mati di hutan-hutan berdaun dan campuran. Jamur ini memiliki
                    tudung yang berwarna coklat kemerahan hingga oranye dengan
                    pola zonasi, dan porus berwarna putih hingga kekuningan di
                    bagian bawah tudung.
                  </p>
                  <p className="text-gray-700 text-base mb-2 text-justify">
                    <span className="font-bold">Toksisitas :</span>
                    Beracun jika dimakan mentah atau kurang dimasak.
                  </p>
                  <p className="text-gray-700 text-base mb-2 text-justify">
                    <span className="font-bold">Gejala :</span> Gejalanya
                    mungkin muncul setelah beberapa jam hingga beberapa hari
                    setelah konsumsi, termasuk mual, muntah, diare, kebingungan,
                    seperti halusinasi, perubahan persepsi.
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-2 group">
            <a href="detail.html">
              <div className="max-w-sm rounded-lg overflow-hidden shadow-lg border border-gray-300 transition duration-300 transform group-hover:scale-105">
                <div className="relative">
                  <img
                    src="/src/assets/img/inedible/Death Cap.jpg"
                    alt="Maitake"
                    className="w-full overflow-hidden rounded-t-lg"
                    style="max-height: 200px; object-fit: cover"
                  />
                </div>
                <div className="px-6 py-4 p-4">
                  <div className="text-dark text-2xl max-w-md">
                    <p className="text-gray-700 text-base mb-2 text-center">
                      <span className="font-bold text-red-500">Inedible</span>
                    </p>
                    <h2 className="font-bold mb-4 lg:text-xl">
                      Daedaleopsis Tricolor
                    </h2>
                  </div>
                  <p className="text-gray-700 text-base mb-4 text-justify">
                    <span className="font-bold">Nama Latin : </span>Daedaleopsis
                    confragosa
                  </p>
                  <p className="text-gray-700 text-base mb-2 text-justify">
                    <span className="font-bold">Daedaleopsis tricolor</span>
                    adalah kelompok jamur beracun. Sering ditemukan pada kayu
                    mati di hutan-hutan berdaun dan campuran. Jamur ini memiliki
                    tudung yang berwarna coklat kemerahan hingga oranye dengan
                    pola zonasi, dan porus berwarna putih hingga kekuningan di
                    bagian bawah tudung.
                  </p>
                  <p className="text-gray-700 text-base mb-2 text-justify">
                    <span className="font-bold">Toksisitas :</span>
                    Beracun jika dimakan mentah atau kurang dimasak.
                  </p>
                  <p className="text-gray-700 text-base mb-2 text-justify">
                    <span className="font-bold">Gejala :</span> Gejalanya
                    mungkin muncul setelah beberapa jam hingga beberapa hari
                    setelah konsumsi, termasuk mual, muntah, diare, kebingungan,
                    seperti halusinasi, perubahan persepsi.
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-2 group">
            <a href="detail.html">
              <div className="max-w-sm rounded-lg overflow-hidden shadow-lg border border-gray-300 transition duration-300 transform group-hover:scale-105">
                <div className="relative">
                  <img
                    src="/src/assets/img/inedible/Death Cap.jpg"
                    alt="Maitake"
                    className="w-full overflow-hidden rounded-t-lg"
                    style="max-height: 200px; object-fit: cover"
                  />
                </div>
                <div className="px-6 py-4 p-4">
                  <div className="text-dark text-2xl max-w-md">
                    <p className="text-gray-700 text-base mb-2 text-center">
                      <span className="font-bold text-red-500">Inedible</span>
                    </p>
                    <h2 className="font-bold mb-4 lg:text-xl">
                      Daedaleopsis Tricolor
                    </h2>
                  </div>
                  <p className="text-gray-700 text-base mb-4 text-justify">
                    <span className="font-bold">Nama Latin : </span>Daedaleopsis
                    confragosa
                  </p>
                  <p className="text-gray-700 text-base mb-2 text-justify">
                    <span className="font-bold">Daedaleopsis tricolor</span>
                    adalah kelompok jamur beracun. Sering ditemukan pada kayu
                    mati di hutan-hutan berdaun dan campuran. Jamur ini memiliki
                    tudung yang berwarna coklat kemerahan hingga oranye dengan
                    pola zonasi, dan porus berwarna putih hingga kekuningan di
                    bagian bawah tudung.
                  </p>
                  <p className="text-gray-700 text-base mb-2 text-justify">
                    <span className="font-bold">Toksisitas :</span>
                    Beracun jika dimakan mentah atau kurang dimasak.
                  </p>
                  <p className="text-gray-700 text-base mb-2 text-justify">
                    <span className="font-bold">Gejala :</span> Gejalanya
                    mungkin muncul setelah beberapa jam hingga beberapa hari
                    setelah konsumsi, termasuk mual, muntah, diare, kebingungan,
                    seperti halusinasi, perubahan persepsi.
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-2 group">
            <a href="detail.html">
              <div className="max-w-sm rounded-lg overflow-hidden shadow-lg border border-gray-300 transition duration-300 transform group-hover:scale-105">
                <div className="relative">
                  <img
                    src="/src/assets/img/inedible/Death Cap.jpg"
                    alt="Maitake"
                    className="w-full overflow-hidden rounded-t-lg"
                    style="max-height: 200px; object-fit: cover"
                  />
                </div>
                <div className="px-6 py-4 p-4">
                  <div className="text-dark text-2xl max-w-md">
                    <p className="text-gray-700 text-base mb-2 text-center">
                      <span className="font-bold text-red-500">Inedible</span>
                    </p>
                    <h2 className="font-bold mb-4 lg:text-xl">
                      Daedaleopsis Tricolor
                    </h2>
                  </div>
                  <p className="text-gray-700 text-base mb-4 text-justify">
                    <span className="font-bold">Nama Latin : </span>Daedaleopsis
                    confragosa
                  </p>
                  <p className="text-gray-700 text-base mb-2 text-justify">
                    <span className="font-bold">Daedaleopsis tricolor</span>
                    adalah kelompok jamur beracun. Sering ditemukan pada kayu
                    mati di hutan-hutan berdaun dan campuran. Jamur ini memiliki
                    tudung yang berwarna coklat kemerahan hingga oranye dengan
                    pola zonasi, dan porus berwarna putih hingga kekuningan di
                    bagian bawah tudung.
                  </p>
                  <p className="text-gray-700 text-base mb-2 text-justify">
                    <span className="font-bold">Toksisitas :</span>
                    Beracun jika dimakan mentah atau kurang dimasak.
                  </p>
                  <p className="text-gray-700 text-base mb-2 text-justify">
                    <span className="font-bold">Gejala :</span> Gejalanya
                    mungkin muncul setelah beberapa jam hingga beberapa hari
                    setelah konsumsi, termasuk mual, muntah, diare, kebingungan,
                    seperti halusinasi, perubahan persepsi.
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-2 group">
            <a href="detail.html">
              <div className="max-w-sm rounded-lg overflow-hidden shadow-lg border border-gray-300 transition duration-300 transform group-hover:scale-105">
                <div className="relative">
                  <img
                    src="/src/assets/img/inedible/Death Cap.jpg"
                    alt="Maitake"
                    className="w-full overflow-hidden rounded-t-lg"
                    style="max-height: 200px; object-fit: cover"
                  />
                </div>
                <div className="px-6 py-4 p-4">
                  <div className="text-dark text-2xl max-w-md">
                    <p className="text-gray-700 text-base mb-2 text-center">
                      <span className="font-bold text-red-500">Inedible</span>
                    </p>
                    <h2 className="font-bold mb-4 lg:text-xl">
                      Daedaleopsis Tricolor
                    </h2>
                  </div>
                  <p className="text-gray-700 text-base mb-4 text-justify">
                    <span className="font-bold">Nama Latin : </span>Daedaleopsis
                    confragosa
                  </p>
                  <p className="text-gray-700 text-base mb-2 text-justify">
                    <span className="font-bold">Daedaleopsis tricolor</span>
                    adalah kelompok jamur beracun. Sering ditemukan pada kayu
                    mati di hutan-hutan berdaun dan campuran. Jamur ini memiliki
                    tudung yang berwarna coklat kemerahan hingga oranye dengan
                    pola zonasi, dan porus berwarna putih hingga kekuningan di
                    bagian bawah tudung.
                  </p>
                  <p className="text-gray-700 text-base mb-2 text-justify">
                    <span className="font-bold">Toksisitas :</span>
                    Beracun jika dimakan mentah atau kurang dimasak.
                  </p>
                  <p className="text-gray-700 text-base mb-2 text-justify">
                    <span className="font-bold">Gejala :</span> Gejalanya
                    mungkin muncul setelah beberapa jam hingga beberapa hari
                    setelah konsumsi, termasuk mual, muntah, diare, kebingungan,
                    seperti halusinasi, perubahan persepsi.
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MushroomClassifier;
