import axios from 'axios';
import { responseColors } from './definitions';
import { extractColors } from 'extract-colors';
import { options } from 'joi';
const getPixels = require("get-pixels")


export async function fetchColors() {
  "use server";
  
  const url = 'http://colormind.io/api/';
  const data = {
    model: "default",
    input: ["N", "N", "N", "N", "N"]
  };

  try {
    const response = await axios.post(url, data);
    console.log(response.data);
    
    return { responseColors: response.data.result };
  } catch (error) {
    console.error('Erro ao buscar dados na API Colormind:', error);
    return null;
  }
}


export async function Colorsfunction(source) {
  return new Promise((resolve, reject) => {
    getPixels(source, (err, pixels) => {
      if (err) {
        reject(err);
        return;
      }
      const data = [...pixels.data];
      const [width, height] = pixels.shape;

      const options = {
        pixels: 64000,
        distance: 0.22,
        saturationDistance: 0.2,
        lightnessDistance: 0.2,
        hueDistance: 0.083333333
      }

      extractColors({ data, width, height },options)
        .then((colors) => {
          resolve(colors);
        })
        .catch((err) => {
          reject(err);
        });
    });
  });
}