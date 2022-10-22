# Overview

This is a clone version of Hulu - a streaming movie service. \
The project was created with NextJS as its core. You can find all the technologies I used in the projects below

A live deploy of this project can be found [here.](https://projects.haonguyen.tech)

Click [here](#set-up) for quick set up guide on how to run the project.

Summary:

- [Tech Stack](#tech-stack)
- [Quick Setup](#set-up)

## Tech Stack

---

Build with: \

- ReactJS
- NextJS
- Typescript
- TailwindCSS
- daisyui
- react-icons
- hero-icons
- axios
- plaiceholder
- TMDB Api

## Set up

---

First, you need to have an API key from TMDB in order to access the database\
Read more about how to get TMDB API key [here.](https://www.themoviedb.org/documentation/api)

Then, create a file in the root folder call `env.local`, and add your API key as follow \

```plain-text
API_KEY = YOUR_API_KEY
```

Second, run the development server:

```bash
pnpm install
pnpm dev
#or
npm install
npm run dev
```

Open <http://localhost:3000> with your browser to see the result.

You can start editing the page by modifying pages/index.tsx. The page auto-updates as you edit the file.
