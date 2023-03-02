## Understanding the Requirements and Data

1. Before building the application it was important to identify the problem or need. In this case the purpose of this web application
is to show list of beaches California has to offer to beachgoers and public.

2. Identifying the detailed list of requirements by going through the requirements PDF shared to determine the features
 and functionalities I will need to include. These are but not limited to below but can be generalised as :-

    - should provide users with information about different beaches in California (Grid list)      
    - details about the beach on a detailed page 
      - ability to check all available photos of the beach
      - mark a beach as a favourite and list all favourite beaches
      - navigate to map view to see location
    - quickly find a beach on Google Maps (Map view)
    - search by name or county
    - filter beaches using available facilities

## Planning the architecture of the application to determine how different components will interact and how data will be managed.
    Checked JSON formatter online to understand beach object. 
    For example the https://api.coastal.ca.gov/access/v1/locations/id/1 record shows data like below :-
     
  [![beach.png](https://i.postimg.cc/fyZnZCBN/beach.png)](https://postimg.cc/HcSP9QqZ)
   
  1. Most of the data will come from beach object from https://api.coastal.ca.gov/access/v1/locations/id/1 so analysis is important first step.
 
    - API provided has 1265 items which is quite heavy data to load but can be optimized later using pagination 
      or infinite scroll and/or useMemo
      
    - Grid view page of all the beaches should be available to user (Beaches Component) to see all beaches 
       (name and image is good enough but some beaches not showing any image so a default image is needed to be shown
        that no image is available if photo in photos properties not found)
        
      - Search can be added later once all data is available and initial beaches page is showing records 
         (search is by name and/or county)
         
      - Filtering on the data can be added later once all data is available and initial beaches page is showing records
         (beach object has lots of params)
         
    - Details page should show all relevant data from the object for each beach relevant to user. 
        
    - Map view to show location of beach on Google Maps. Beach object has lat and long which can be used.
    
    - Favourite beaches page with Grid view list 

  2. Created a wireframe and prototype using few examples found online like Movies website to create a basic wireframe for Grid and Details pages

  3. Goal was to design a baisc user interface that is intuitive and user-friendly. This included choosing the right color scheme, typography.
   Referred a few websites over the internet to choose a basic theme and colors to go initally.

  4. Testing and Deployment are pending for later releases so to make it accessible to your target audience and maintain and update it to ensure it 
     remains secure and functional.
     
 
## npm commands used during the creation of this application

  1. npx create-react-app california-beaches
  2. npm i react-router-dom -s
  3. npm i @mui/icons-material @mui/material -s   // react 18 does not work with @material/core and @material/icons installations
  4. npm install axios
  5. npm i @mui/styles --force  // to make makeStyles work but uninstalled later to use sx which is inline to finish project
  6. npm install redux react-redux redux-persist -s
  7. npm install google-map-react -s

## Issues faced and links referred online during creation of this application

  1. Majorly issues are with breaking changes between new react version 18 and older versions.
     Many tutorials and apps on youtube and online as well as stackoverflow has more information on react 17 and lower
  2. https://stackoverflow.com/questions/65486256/module-not-found-cant-resolve-emotion-react
  3. https://stackoverflow.com/questions/68169108/attempted-import-error-makestyles-is-not-exported-from-material-ui-core-sty
  4. https://stackoverflow.com/questions/28329382/understanding-unique-keys-for-array-children-in-react-js
  5. refer for boilerplate code https://github.com/rt2zz/redux-persist
  6. https://stackoverflow.com/questions/71944111/redux-createstore-is-deprecated-cannot-get-state-from-getstate-in-redux-ac
  7. https://stackoverflow.com/questions/57444203/get-id-from-url-in-react-js
  8. https://stackoverflow.com/questions/58548767/react-router-dom-useparams-inside-class-component
  9. https://stackoverflow.com/questions/71948818/no-result-using-makestyles-material-ui-in-react-18
  10. Warning: ReactDOM.render is no longer supported in React 18. Use createRoot instead. 
     Until you switch to the new API, your app will behave as if it's running React 17. 
     Learn more: https://reactjs.org/link/switch-to-createroot 
     (Browser console error after running the app after integrating maps and changing the indexjs file)
  11. https://github.com/google-map-react/google-map-react/issues/1116#issuecomment-1150589667
  12. https://stackoverflow.com/questions/36376146/reactdom2-default-render-is-not-a-function
  13. https://ui.dev/react-router-pass-props-to-link
  14. https://stackoverflow.com/questions/55265604/uncaught-invariant-violation-too-many-re-renders-react-limits-the-number-of-re 
      (For Checkbox MUI checked state getting above error so used HTML input for now)   
  
  ## Steps to integrate Google Maps into react project
  
    1. npm install google-map-react -s  // https://www.npmjs.com/package/google-map-react
    2. go to https://console.cloud.google.com/getting-started
    3. Create a Project ----> California Beaches
    4. Search for Google Map Javascript API in Marketplace
    5. Enable it using Enable Button and do not provide credit card details to avoid billing
    6. Then go to credentials and create Credentials with API Key and copy Key generated
    7. copy and paste key in .env file in project
 
 ## Improvements requried in the current app
 
   1. CSS is inline. Find alternative to useStyles or put in common place
   2. Find better wireframes and UX to change page layouts later
   3. Refactor code and put repeated code in common place
   4. Mobile responsiveness handle in better way
   5. Add Pagination or load on scroll for beaches list
   6. Optimize app using below links and create pull requests whenever possible
      - https://blog.logrocket.com/render-large-lists-react-5-methods-examples/
      - https://reactjs.org/docs/optimizing-performance.html
      - https://blog.bitsrc.io/10-ways-to-optimize-your-react-apps-performance-e5e437c9abce
      - https://www.w3schools.com/react/react_usememo.asp ======> performance fix
   7. Images load slowly on details page. Optimize to load faster or in the background.
   8. Search and Filtering are slow for such huge data. Improve optmization and response time.
   9. https://github.com/bvaughn/react-window 
   10. https://github.com/bvaughn/react-virtualized

     
 ## Screenshots for different pages and use cases below created using ScreenToGif software :-
 
   1. Landing Page with Beaches Grid List 
   
   ![Landing-Page](https://user-images.githubusercontent.com/20744146/222199135-bacf5b76-383d-40c2-a9c7-7b98b9852e3d.gif)

   
   2. Details page with images and beach details 
    
   [![Details-Page.gif](https://i.postimg.cc/PxBDH0fC/Details-Page.gif)](https://postimg.cc/YGz0fnW7)


   3. Favourite Beach and List View of Favourite Beaches 
   
   ![Favourite Beach](https://user-images.githubusercontent.com/20744146/222202098-c8d2c8c7-3d5c-4676-8613-d1c2ac24bf27.gif)

   
   4. Map View of Beach 
      
   ![Map Beach](https://user-images.githubusercontent.com/20744146/222202668-a187a0ac-d802-4fef-94b2-9ab90a52cf31.gif)


   5. Search a Beach
   
   ![Search Beach](https://user-images.githubusercontent.com/20744146/222203070-af90030b-1c02-4ba2-bfd5-77e9a25467e4.gif)

   
   6. Filter Beach by facilities   
   
   ![Filter Beach](https://user-images.githubusercontent.com/20744146/222203928-78fc5f4b-0e96-42dd-82d1-af93e8b450b9.gif)

   7. Responsive Design

   [![Responsive-Design-2.gif](https://i.postimg.cc/j21tBrR1/Responsive-Design-2.gif)](https://postimg.cc/tnFKVwZd)
   
   
   [![Mobile-View.gif](https://i.postimg.cc/zXWG4VRS/Mobile-View.gif)](https://postimg.cc/4mfG94Pm)
   
   
    
    

