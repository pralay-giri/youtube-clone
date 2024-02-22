# Youtube UI clone using React.js

## [visit website](https://youtube-clone-nine-blue.vercel.app/)

## installation process

1. clone the repo

    ```sh
    $ git clone https://github.com/pralay-giri/youtube-clone.git
    ```

2. go to the repo
    ```sh
    $ cd youtube-clone
    ```
3. install all the dependencies
    ```
    npm i
    ```
    ### or
    ```sh
    npm install
    ```
4. run your code in dev mode
    ```sh
    npm run dev
    ```

## App Layout

-   App
    -   Header
        -   hambar
        -   brand
        -   search bar
        -   profile
    -   Body
        -   side nav
            -   section\*n
                -   section item\*n
        -   main container
            -   filter btns
            -   video card continer
        -   watch page
            -   video player
            -   title
            -   channel info
                -   name
                -   profile
                -   btns
            -   describtion
            -   comments \* n
                -   profile
                -   name
                -   time
                -   comment
                -   like btns \* 2
                -   replays to all the comments

## App Time line

-   configuring tailwindcss && init the tailwindcss package
-   configuring the redux store
-   adding the sidebar hide and open functionality
-   adding a hook that fetch popuer youtube video from youtube API
-   rendering all the video in the video container
-   fixing some bugs
-   fetching comments and rendering the comment component
-   adding sorting feature (for sorting data will come from server)
-   creating a search Slice
-   adding search functionality

   **NOTE :** you need to have your youtube data api key to use the youtube api to fetch data. you can visit [google api referance](https://console.cloud.google.com/apis/library) 
