Things to Remember
- Container components can be nested as children just as any other component, even if they aren't actually displaying any visual content.
- For simplicity with testing, restaurant data stored in Redux should have text and id keys.



Steps to Take:
Restuarants
-----------
1. Start off by working the components for restaurants
2. create RestaurantsContainer component - container folder
    - connect to redux and pass props to children
3. Create RestaruarntInput component - create new restaurants - component folder
4. Create Restuarnat component - display list of restauants and ability to delete restaurant - component folder
5. Give each restaurant unique id

Reviews
-----------
1. Start off by working the components for restaurants
2. create RestaurantsContainer component - container folder
    - connect to redux and pass props to children
3. Create RestaruarntInput component - create new restaurants - component folder
4. Create Restuarnat component - display list of restauants and ability to delete restaurant - component folder
5. Give each restaurant unique id


6. users should be able to create a review that is specifically associated with the related restaurant, and those reviews should be displayed underneath the related restaurant. 
7. Because reviews are associated to specific restaurants, the ReviewsContainer should be nested within the Restaurant component. Users should also be able to delete a specific review.
8. Since you'll need to be able to associate reviews to restaurants, and delete specific reviews, reviews stored in Redux should have a text key for the review content, a restaurantId key to associate and display the review with a specific restaurant and an id key unique to the review itself.


