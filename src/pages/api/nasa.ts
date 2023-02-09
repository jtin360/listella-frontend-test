export const getRover = async (page: string = '1') => {
    const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${process.env.NASA_API}`;
    const response = await fetch(url);
    return await response.json();
};
  
export default async (req: any, res: { statusCode: number; json: (arg0: { status: string; }) => void; }) => {
    try {
        const data = await getRover();
        res.statusCode = 200;
        res.json(data);
    } catch (e) {
        res.statusCode = 500;
        res.json({ status: "error" });
    }
};


  // let response;
  // let page = '1';
  // const URL = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=${page}&api_key=${process.env.NASA_API}`;
  // console.log(`URL ${URL}`);
  // try {
  //     response = await fetch(URL);
  // } catch (error) {
  //     if (error instanceof Error) {
  //       throw new Error(error.message);
  //     }
  // }

  // if (response) {
  //   if (response.status >= 400) {
  //     if (response.status === 404) {
  //       return {
  //         notFound: true,
  //       };
  //     }
  //     if (response.status === 500) {
  //       throw new Error('500_Internal_Server_Error');
  //     }
  //     return {
  //       redirect: { destination: `/error/${response.status}`, permanent: false },
  //     };
  //   }
  //   const data: { photos?: Photo[] } = await response.json();
  //   return {
  //     props: { photos: data.photos },
  //   };
  // } 
  // else {
  //   return {
  //     props: {}
  //   };
  // }