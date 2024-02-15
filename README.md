# startup-cs260-winter-2024

## Elevator Pitch

My startup project is for categorizing and discovering different useful websites. My project solves the problem that most people want to find a solution or website for their needs on the web, but they don't know how to start searching, my project pinpoints and finds the websites that users may want to search based on their needs. My website targets a wide range of users. It's useful to everyone on the Internet. Because I will be putting more and more different types of websites and categories on my site in the future. So it will be useful for almost everyone, depending on their needs.

## Design

![home page](images/home.jpg)
![home page](images/category.jpg)
![home page](images/find.jpg)
![home page](images/suggestion.jpg)

Here are all the pics. The home page shows all the websites on my project. The category page categorizes all the websites by different categories.  The find page can categorize all pages by different characteristics. The last page is the suggestion, users can log in to their account and leave their comments on the website.

## Key Features

- Users can easily find the different websites by the categories and characters they need.
- Users can easily find the brief introduction and link of each website they are looking for.
- Users can create and log in to their accounts to leave their valuable comments and suggestions.

## Technology

I am going to use the required technologies in the following ways.

- HTML - Uses correct HTML structure for the application. Four HTML pages. One for the home page, which I can div all websites, and use <a href> to put each website's link. I can also use <image> to put websites' pictures on it. I will not talk about more details. But I gonna write lots of HTML on each page in my project.
- CSS - I gonna change some font sizes and background colors, and put background images and so on on each page.
- Javascript - I will create a login and create an account part of my project.
- Service - I can connect data from the front desk to the back end. For example, I can get the data that users create or log in their accounts.
- DB/ Login - After I get the data from Javascript and Service, I can use DB to store these data, so that I will never lose it.
- WebSocket - By using the webSocket, Any user is updating something to the website, and the website can automatically update these contexts without refreshing. For example, if a user leaves his comment, the website gonna automatically updates his comment without refreshing.
- React - Application ported to use the React web framework.

## HTML:
 - HTML: For each page, I did header, main and footer to be structure. What is more, I use nav to be my navigation in header. I also use a lot of div for the layer. I use <a> to connect my each file page with each other. I use a lot of images on it. I also update some textual content so that you know what these html doing. 
 - LOGIN: In my index.html. I use login, so that user can type their name and login to account and go to the home page.
 - Database: I can store the user's name and user's comment they leave in suggestion page.
 - WebSocket: In my suggestion page, I created a form, so that people can leave their information and comments in the form and submit it. 
 - 3rd party service calls: In my suggestion page, I will create a random img on it. So that We can request and get a random picture, but not the current picture in suggestion page.

## CSS:
In all three structures I have linked the CSS files with selectors. For example, the size of the image has changed. I changed the subscript of the a tag. I changed the font size and color. I used bootstrap to change the shape and color of the button. I also made my own templates for each of the small sites using the card in Bootstrap. I also used flex for the responsive design. I made some specific tags in specific places in the box.
 
  
