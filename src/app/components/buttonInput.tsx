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
        r: 0,
        g: 0,
        b: 0,
      },
      {
        r: 7,
        g: 4,
        b: 1,
      },
      {
        r: 27,
        g: 21,
        b: 3,
      },
      {
        r: 68,
        g: 54,
        b: 8,
      },
      {
        r: 66,
        g: 58,
        b: 34,
      },
      {
        r: 108,
        g: 95,
        b: 47,
      },
      {
        r: 108,
        g: 106,
        b: 96,
      },
      {
        r: 133,
        g: 148,
        b: 156,
      },
      {
        r: 169,
        g: 146,
        b: 100,
      },
      {
        r: 209,
        g: 187,
        b: 128,
      },
      {
        r: 182,
        g: 179,
        b: 178,
      },
      {
        r: 229,
        g: 216,
        b: 186,
      },
      {
        r: 194,
        g: 205,
        b: 220,
      },
      {
        r: 220,
        g: 234,
        b: 242,
      },
      {
        r: 250,
        g: 244,
        b: 224,
      },
      {
        r: 248,
        g: 251,
        b: 251,
      }
      
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
