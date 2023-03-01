import { createTheme } from "@mui/material/styles";

// ############################################## Commonly used functions ##################################################################

export const theme = createTheme({
  breakpoints: {
    values: {
      xxs: 0, // small phone
      xs: 300, // phone
      sm: 600, // tablets
      md: 900, // small laptop
      lg: 1200, // desktop
      xl: 1536, // large screens
    },
  },
});

export const checkURL = (url) => {
  return url.toLowerCase().match(/\.(jpeg|jpg|gif|png)$/) != null;
};

// ################################################################ API And Data ######################################################################

export const CALIFORNIA_BEACHES_API_URL =
  "https://api.coastal.ca.gov/access/v1/locations";
export const filterData = [
  {
    _id: 1,
    name: "Fee",
    value: "FEE",
  },
  {
    _id: 2,
    name: "Parking",
    value: "PARKING",
  },
  {
    _id: 3,
    name: "Disability Access",
    value: "DSABLDACSS",
  },
  {
    _id: 4,
    name: "Restrooms",
    value: "RESTROOMS",
  },
  {
    _id: 5,
    name: "Visitor Center",
    value: "VISTOR_CTR",
  },
  {
    _id: 6,
    name: "Dog Friendly",
    value: "DOG_FRIENDLY",
  },
  {
    _id: 7,
    name: "Beach Strollers",
    value: "EZ4STROLLERS",
  },
  {
    _id: 8,
    name: "Picnic Area",
    value: "PCNC_AREA",
  },
  {
    _id: 9,
    name: "Campground",
    value: "CAMPGROUND",
  },
  {
    _id: 10,
    name: "Sandy Beach",
    value: "SNDY_BEACH",
  },
  {
    _id: 11,
    name: "Sand Dunes",
    value: "DUNES",
  },
  {
    _id: 12,
    name: "Rocky Shore",
    value: "RKY_SHORE",
  },
  {
    _id: 13,
    name: "Bluff",
    value: "BLUFF",
  },
  {
    _id: 14,
    name: "Stairs Beach",
    value: "STRS_BEACH",
  },
  {
    _id: 15,
    name: "Path Beach",
    value: "PTH_BEACH",
  },
  {
    _id: 16,
    name: "Blue Flag",
    value: "BLFTP_TRLS",
  },
  {
    _id: 17,
    name: "Blue Flag Trails",
    value: "BLFTP_TRLS",
  },
  {
    _id: 18,
    name: "Blue Flag Park",
    value: "BLFTP_PRK",
  },
  {
    _id: 19,
    name: "Wildlife Veg",
    value: "WLDLFE_VWG",
  },
  {
    _id: 20,
    name: "Tidepool",
    value: "TIDEPOOL",
  },
  {
    _id: 21,
    name: "Volleyball",
    value: "VOLLEYBALL",
  },
  {
    _id: 22,
    name: "Fishing",
    value: "FISHING",
  },
  {
    _id: 23,
    name: "Boating",
    value: "BOATING",
  },
  {
    _id: 24,
    name: "Beach Wheelchair",
    value: "Bch_whlchr",
  },
  {
    _id: 25,
    name: "Bike Path",
    value: "BIKE_PATH",
  },
];

const photoUrls = ["Photo_1", "Photo_2", "Photo_3", "Photo_4"];

export const checkValidUrl = (beach) => {
  let validUrl = null;
  for (let i = 0; i < photoUrls.length; i++) {
    if (beach[i] && checkURL(beach[i])) {
      validUrl = beach[i];
      break;
    }
  }
  return validUrl;
};

export const processBeachesData = (results) => {
  let newBeachData = [];
  results.forEach((beach) => {
    let beachObject = beach;
    beachObject.id = beach.ID;
    beachObject.image = ((beach.Photo_1 && checkURL(beach.Photo_1)) ? beach.Photo_1 
                            : (beach.Photo_2 && checkURL(beach.Photo_2) ? beach.Photo_2 
                                              : (beach.Photo_3 && checkURL(beach.Photo_3) ? beach.Photo_3 
                                                              : (beach.Photo_4 && checkURL(beach.Photo_4) ? beach.Photo_4 
                                                                : null))));
    beachObject.name = beach.NameMobileWeb;
    beachObject.lat = beach.LATITUDE;
    beachObject.lng = beach.LONGITUDE;
    beachObject.county = beach.COUNTY; 
    newBeachData.push(beachObject);   
  });
  return newBeachData; 
};

export const processBeachData = (currentBeach) => {
  let images = [];
  // TODO: refactor this later
  if(currentBeach.Photo_1 && checkURL(currentBeach.Photo_1)) { images.push(currentBeach.Photo_1); }
  if(currentBeach.Photo_2 && checkURL(currentBeach.Photo_2)) { images.push(currentBeach.Photo_2); } 
  if(currentBeach.Photo_3 && checkURL(currentBeach.Photo_3)) { images.push(currentBeach.Photo_3); } 
  if(currentBeach.Photo_4 && checkURL(currentBeach.Photo_4)) { images.push(currentBeach.Photo_4); }
  const noImage = require('../assets/image/noimage.jpg');
  if(images.length === 0) { images.push(noImage) }
  currentBeach.images = images;
  currentBeach.id = currentBeach.ID;
  currentBeach.name = currentBeach.NameMobileWeb;
  currentBeach.lat = currentBeach.LATITUDE;
  currentBeach.lng = currentBeach.LONGITUDE; 
  return currentBeach;
}

export const searchBeach = (searchTerm, beach) => {
  if(searchTerm === "") {
    return beach;
  } else if (beach.name.toLowerCase().includes(searchTerm.toLowerCase())) {
    return beach;
  } else if (beach.county.toLowerCase().includes(searchTerm.toLowerCase())) {
    return beach;
  }
}

export const filerBeaches = (beachData, selectedFilters) => {
  let newFilteredData = [];
  if(selectedFilters.length > 0) {
    newFilteredData = beachData.filter(beach => {
      return selectedFilters.every(filter => beach[filter] === 'Yes');
    });
  }
  return newFilteredData;
}

// ########################################################### Styles ########################################################################

// Beach Card Styles
export const textCenter = { textAlign: "center" };
export const linkStyle = { textDecoration: "none" };
export const cardMediaStyle = {
  margin: "auto",
  height: 150,
  width: { xxs: 300, xs: 300, sm: 300, md: 300, lg: 150, xl: 150 },
};
export const cardStyle = {
  paddingTop: 5,
  cursor: "pointer",
  backgroundColor: "black",
  color: "white",
  ":hover": { backgroundColor: "rgb(90, 90, 90)" },
};
export const nameStyle = {
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  ":hover": { overflow: "visible", whiteSpace: "pre-wrap" },
};

// Beaches Main Page Styles
export const loaderStyle = { marginTop: 100, marginLeft: 150 };
export const beachGridStyle = {
  textAlign: "center",
  padding: "40px 10px 10px 10px",
};
export const inputSearchStyle = {
  width: "70%",
  marginTop: "70px",
  padding: "15px",
  borderRadius: 5,
};
export const beachesMainBoxStyle = {
  height: "100%",
  width: "100%",
  backgroundColor: "rgb(68,68,68)",
  textAlign: "center",
  minHeight: "100vh",
};

// Beach Details Page Style
export const beachNameStyle = { textTransform: "upperCase", fontFamily: "fantasy" };
export const linkToMapStyle = { color: "green", textDecoration: "none", padding: 10 };
export const imageListStyle = {
  width: { xxs: 300, xs: 300, sm: 500, md: 800, lg: 1000, xl: 1000 },
  height: 500,
  margin: "auto",
};
export const beachDetailsBoxStyle = {
  backgroundColor: "black",
  color: "white",
  marginTop: 6,
  textAlign: "center",
  width: "100%",
};
export const detailsHeaderStyle = {
  display: "flex",
  margin: "30px 0",
  flexDirection: {
    xxs: "column",
    xs: "column",
    sm: "column",
    md: "row",
    lg: "row",
    xl: "row",
  },
  justifyContent: "space-between",
};
