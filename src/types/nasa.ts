export type Photo = {
    id: number;
    sol: number;
    camera: Camera;
    img_src: string;
    earth_date: string;
    rover: Rover;
};
  
export type Camera = {
    id: number;
    name: string;
    rover_id: number;
    full_name: string;
};
  
export type Rover = {
    id: number;
    name: string;
    landing_date: string;
    launch_date: string;
    status: string;
};

//https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY
//type layout
// "photos": [
//     {
//       "id": 102693,
//       "sol": 1000,
//       "camera": {
//         "id": 20,
//         "name": "FHAZ",
//         "rover_id": 5,
//         "full_name": "Front Hazard Avoidance Camera"
//       },
//       "img_src": "http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FLB_486265257EDR_F0481570FHAZ00323M_.JPG",
//       "earth_date": "2015-05-30",
//       "rover": {
//         "id": 5,
//         "name": "Curiosity",
//         "landing_date": "2012-08-06",
//         "launch_date": "2011-11-26",
//         "status": "active"
//       }
//     },
//...