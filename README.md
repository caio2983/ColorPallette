<h1 align="center">Color Palette Finder 🎨🖌️</h1>

<p align="center">
   <img  src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React Badge"/>
  <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E"/>
</p>
 


<p align="center">Application where the user can see a picture's color palette by uploading it.</p>

<p align="center">
  <img src="https://private-user-images.githubusercontent.com/82726583/373906966-9db9e19d-470d-4913-9fed-d9e4b2702ecc.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjgxNjE1NzgsIm5iZiI6MTcyODE2MTI3OCwicGF0aCI6Ii84MjcyNjU4My8zNzM5MDY5NjYtOWRiOWUxOWQtNDcwZC00OTEzLTlmZWQtZDllNGIyNzAyZWNjLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDEwMDUlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQxMDA1VDIwNDc1OFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWNiNzc5ZjFlMTNkZTc1MWM5YWU2NzAyY2JiZWE5NTA1YjBmNmYxOWNkZDU1NDJkNWU1MmY2ZDE2Yjc2MDVmMmEmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.ARuwCZbaZXipiklSQUG8leQyHupVOEtO9wdjnB87qiw"/>
</p>
<p align="center">The picture is "The Fallen Angel" by Alexandre Cabanel.It depicts a striking and melancholic figure of a fallen angel, representing the themes of loss and beauty. The angel, with exquisite features and delicate wings, sits in a contemplative pose, embodying both grace and sorrow. The play of light and shadow enhances the angel's ethereal beauty while highlighting the sadness of its exile. The painting captures the tension between divine beauty and human vulnerability, inviting viewers to reflect on the complexity of existence and the nature of redemption. (chat gpt 👍)</p>

<h2>Technologies ⚙️</h2>

<p>Project Made with React while I was learning NextJS' basics.The image's color palette is found through a JavaScript algorithm that uses a technique called Color Quantization.Wikipedia describes Color Quantizationn as:
</p>

> "A process that reduces the number of distinct colors used in an image, usually with the intention that the new image should be as visually similar as possible to the original image." 

<p>The code generates a gigantic array with the RGBs of every pixel in the image.The algorithm then uses color quantization to reduce the number of items in that array,while maintaining the color set visually similar to the original set.</p>


This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
