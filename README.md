## Netflix clone with gpt 
   - vite configuration
   - tailwind in vite
   - Header
   - login form
   - Routing of app
   - sign up Form
   - form validation
   - useRef hook
   - Firebase setup
   - Deploying our app to production
   - Create SignUp User Account In 
   - Implement Sign in User API
   - created Redux Store with USerSlice
   - Implemented sign out
   - validation
   - created store
   - updated profile Api call
   - BugFix : Sign up user displayName and profile picture update
   - BugFix:if user is not logged in Redirect user to login page and    vice versa
   - Fetch from TMDB movies
   - Unsubscribed to the onAuthStateChanged callback
   - add hardcoded values to constants file
   - Register for TMDB api and get access token
   - Get data from TMDB now playing movies 
   - Creating our own custom hook for now playing movies
   - update store with movie data
   - create a movie slice
   - planning for main container and secondary container
   - fetched data for trailer video 
   - updated the store with trailer video data
   - embeded the you tube video and make it autoplay and mute
   - added tailwind classes to make main container look awesome
   - GPt Search feature
    


## Features 
- for logged out user or before logging in
    - sign in/sign up form
        - background with many movies
    - once logged in redirect to browse page


    - for a logged in user
        - browse page(after authentication)
        - header
        - background movie playing 
        - main movie
        - trailer in background
        - title and description
        - movie suggestions
            - movie list * n   




- we will add one more page which is netflix gpt
    - search bar
    - movie suggestions


- we will first build the login page



# react.strictmode 
it results in calling api twice even after using empty dependency array in use effect but it only happens while developing the app when hosted it will not happen 


## Browse page planning
- Main Container
    - video Background
    - Video Title
- Secondary Container
    - Movielist * n
    - Cards * n