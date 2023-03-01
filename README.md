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
    Checked JSON formatter online to understand beach object. For example the https://api.coastal.ca.gov/access/v1/locations/id/1 
    record shows data like below :-
     
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
