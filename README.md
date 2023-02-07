## Getting Started

Install all dependecies using the following command:

npm i
# or
yarn

To run the dev server use the following command:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Some notes to consider

1. I assumed that this test should support some degree of mobile design. The design is responsive to the size of a tablet but nothing less of that.

2. This app does server-side rendering and it pulls up to 1k images in one api fetch if it is available to. The intent of this is show you that even though it is pulling a lot of data it not displaying everything at once. By effectively utilizing virtual window, it is not inserting every single image element into the dom and rendering it out but rather displaying the images within the window size. To even improve the efficiency further, we could've fetch like 50 or so images and continue to fetch when we close to the 50th image. By doing so, we are combining pagination and infinite scrolling and providing users with the best user experience. I felt like this was an overkill for the test so virtualize window was sufficient within the timeline.

3. NextJS provides a great way to display images using their version of <img> that already does out of the box optimization. It is great if we know the dimensions of the images before hand. Using Nasa's api, we don't really know these so we could not optimize to the best of our ability and provide the srcset for different device sizes. 

If I created the api myself, I would integrate cloudinary into a middleware for the image upload. It would be compressed to webp and ready for the frontend.It would be able to easily use the appropriate size for given device size. It would look something like this:

https://res.cloudinary.com/dtlqlf4de/image/upload/f_auto,q_100,w_256/v1675452816/astronaut_uhzhrl.webp 256w,
https://res.cloudinary.com/dtlqlf4de/image/upload/f_auto,q_100,w_512/v1675452816/astronaut_uhzhrl.webp 512w,
https://res.cloudinary.com/dtlqlf4de/image/upload/f_auto,q_100,w_768/v1675452816/astronaut_uhzhrl.webp 768w,
https://res.cloudinary.com/dtlqlf4de/image/upload/f_auto,q_100,w_1024/v1675452816/astronaut_uhzhrl.webp 1024w,
https://res.cloudinary.com/dtlqlf4de/image/upload/f_auto,q_100,w_1280/v1675452816/astronaut_uhzhrl.webp 1280w'

4. http://localhost:3000/error/404 -> Force an error to see if api fetch error handling works

5. Drag and drop -> Max 5 files and 5mb size accepting only 3 image extensions

To test if this works, you can create a button that console.log files from the context provider after dropping some image files or selecting as input.


FYI:

In the real-world, I would've created branches and incrementally committed my changes and also not push the env file.
