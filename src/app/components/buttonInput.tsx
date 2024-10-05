"use client";

import { useState, useEffect } from "react";
import { main } from "@/app/lib/images.js";
import ColorPalette from "@/app/components/ColorPalette";

export default function ButtonInput() {
  const [colors, setColors] = useState(null);
  const [imgSrc, setImgSrc] = useState(null);

  const handleClick = async () => {
    const result = await main();
    console.log(result);
    setColors(result);
  };

  useEffect(() => {
    if (colors) {
      let background = document.getElementById("background");

      let rgbs = colors.map(
        (color) => `rgb(${color.r}, ${color.g}, ${color.b})`
      );
      let backgroundStyle = rgbs.join(", ");

      background.style.setProperty(
        "background",
        `linear-gradient(to right, ${backgroundStyle})`
      );
    }
  }, [colors]);

  useEffect(() => {
    setColors([
      {
        r: 8,
        g: 7,
        b: 4,
      },
      {
        r: 10,
        g: 10,
        b: 6,
      },
      {
        r: 14,
        g: 13,
        b: 9,
      },
      {
        r: 18,
        g: 16,
        b: 12,
      },
      {
        r: 22,
        g: 21,
        b: 16,
      },
      {
        r: 29,
        g: 26,
        b: 21,
      },
      {
        r: 35,
        g: 32,
        b: 27,
      },
      {
        r: 43,
        g: 40,
        b: 33,
      },
      {
        r: 52,
        g: 47,
        b: 40,
      },
      {
        r: 67,
        g: 62,
        b: 53,
      },
      {
        r: 88,
        g: 81,
        b: 72,
      },
      {
        r: 111,
        g: 98,
        b: 89,
      },
      {
        r: 132,
        g: 121,
        b: 108,
      },
      {
        r: 162,
        g: 147,
        b: 130,
      },
      {
        r: 208,
        g: 188,
        b: 162,
      },
      {
        r: 236,
        g: 219,
        b: 187,
      },
    ]);

    setImgSrc("/guts.jpg");
  }, []);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImgSrc(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };
  return (
    <div
      className=" bg-customGray gradient-div flex flex-row  justify-center  p-4"
      id="background"
      style={{
        height: "100%",
        backgroundSize: "200% 200%",
      }}
    >
      <canvas id="canvas" className="hidden"></canvas>
      <div className="w-1/2 justify-center flex p-4 inline-block">
        <img
          id="image"
          src={imgSrc}
          alt="Loaded"
          className="w-auto  h-5/6 max-w-1/2  border border-gray-300 shadow-lg "
        />
      </div>
      <div className="w-1/2 m-4 p-4">
        <form action="#" className="w-full  items-center">
          <input
            type="file"
            id="imgfile"
            onChange={handleFileChange}
            className="mb-4 p-2 border border-gray-300 rounded shadow-sm"
          />
          <div>
            <input
              type="button"
              id="btnLoad"
              value="Load"
              onClick={handleClick}
              className="mb-4 p-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600"
            />
          </div>
        </form>
        {colors && <ColorPalette colors={colors} />}
      </div>
    </div>
  );
}
