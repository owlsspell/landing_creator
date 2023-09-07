<h1 align="center">Landing creator</h1>

<div align="center">
  
[![Typescript](https://img.shields.io/badge/-Typescript-282C34?style=for-the-badge&logo=Typescript)](https://www.typescriptlang.org/)
[![Next](https://img.shields.io/badge/-Next-282C34?style=for-the-badge&logo=nextdotjs)](https://nextjs.org/docs)
[![tailwindcss](https://img.shields.io/badge/-tailwind-282C34?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/)
[![mongodb](https://img.shields.io/badge/-mongodb-282C34?style=for-the-badge&logo=mongodb)](https://www.mongodb.com/)
[![Digitalocean](https://img.shields.io/badge/-digitalocean-282C34?style=for-the-badge&logo=digitalocean)](https://www.digitalocean.com/)

</div>

<img src="./public/readme_assets/art-featured.jpg" width="100%">

<h2 align="center"><a  href="https://landing-creator-2cxosu15i-owlsspell.vercel.app/captiveportal">Live Demo</a></h2>

## Description

It is a form editor that dynamically updates the appearance of the site.
The project is based on the Next.js 13 template and styled with Tailwind CSS.

### Fields update

Just try something to change

<img src="./public/readme_assets/example_2.gif" width="80%"></p>

### Font update

You can change fonts on the entire site in an instant

<img src="./public/readme_assets/example_1.gif" width="80%"></p>

### Images update

You can upload an image, preview it, crop and save it. Or just choose from a previously saved gallery

<img src="./public/readme_assets/example_3.gif" width="80%"></p>

### About the project

The application implements the functions of dynamically updating data with saving it in the Zustang state. Tailwind values are used to update styles. The data is stored in MongoDB.

Pictures are saved in a local directory, but there is also the option to save them in the cloud. Before sending pictures to the server, the user can preview and crop them in advance. Images are automatically reduced before being saved.

Authorization is released using the clerk. Users from the same organization provided by the clerk can edit the same template.

### Stack of technologies:

- Typescript
- Next.js 13
- Zustand
- Tailwind
- Shadcn ui
- Clerk
- Mongodb
- DigitalOcean

## How to run

npm install

npm run dev
