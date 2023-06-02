# deco2017_A4_FINAL
Introduction: 
The main goal of this tracking website is to provide users with a user-friendly and engaging platform that makes it easy to track and discover new wine and cheese pairings. The website will provide users with a database of wine and cheese pairings, allowing them to search for pairings based on specific criteria, such as type of wine or cheese, region, and flavour profiles. Additionally, users will be able to create and save their own pairings.

The target audience for this web application is individuals who enjoy exploring different wine and cheese combinations, including both casual wine and cheese lovers and more serious connoisseurs. The application is designed to cater to a wide range of users, from those just starting out in their exploration of wine and cheese to those with more experience and knowledge in the area.

Overall, this tracking website aims to create a vibrant and supportive community of wine and cheese enthusiasts, while also providing users with a useful tool for tracking their wine and cheese adventures.

Development:
The beauty of design and website deployment always results in multiple iterations of concepts due to practicality, failures and trial and error. This project was no exception, beautiful! 
The design concept my Web App Design involved at the top section of the website: 
- top pairings of wine and cheese
- nav bar with logo, drop down menu and profile. 
And the lower part of the website: 
- ratings and wish list section
- profiles that interacted with each other to compare pairings
- a sort by: of cheese and wines
- a graph of flavour notes that users had indulged in 
- carousel of wines/cheeses the user had not yet tried. 

My main feedback highlighted the discrepancy between the visually appealing top section of my website and the crowded and messy user experience (UX) at the bottom. Additionally, unnecessary data elements related to profile interactions and sort by functions were included, which deviated from the brief. To align with the brief and ensure feasible website development, I simplified the bottom section by stripping it down to its essential components. Now, it consists of a task tracker or wine and cheese rating section on the right, accompanied by the pairings on the left. I transformed the sections for adding ratings and results into two simplified cards, as implementing them within a CSS grid or columns proved to be messy and caused interference with my JavaScript functionality. In future designs, I will remember these lessons learned to enhance both the UX and development process. Although I desired to include a graph displaying user input data, such as wine and cheese flavour notes, to help users keep track of their favourites or areas to explore, I found the deployment of this feature challenging given my current skill level and time constraints. I have included this as a recommendation for future improvements. Additionally, I removed profiles, wish lists, and the sort by function to better align my website application with the brief, but I have also mentioned these in my recommendations. 

I was able to code the top part of my website more accurately to my initial designs. I encountered some problems when coding the navigation bar due to the size of the of the logo image, so the text in the nav bar turned out larger than expected. To achieve the desired placement of wine and cheese pairing images, I utilised a CSS grid. Although I encountered larger margins on the very left and right sides of the four images within the grid, the overall positioning of the images appears even and visually pleasing. Additionally, by implementing event listeners, I successfully implemented the flip function as originally envisioned in my initial concept. This function enables the display of a description for each pairing when triggered. The CSS grid is in pixels which unfortunately makes the top part of my website not viewable on mobile devices. In future, I would format my grid with fractions or percentages to ensure visibility on all types of screens. 

The rating section of my web application retains all the data elements outlined in my initial concept's data model, with the exception of the ability to display a specific pairing's photo, which was removed. I have a strong desire to incorporate a scanning feature that allows users to upload images of their wine and cheese pairings, often accompanied by friends, family, and other food arrangements. However, the implementation of such a feature significantly differed from my original HTML/CSS layout plan. To address feedback from my previous assessment, I completely simplified the layout and opted for text boxes and drop-down menus. At the time of designing the form, I had limited knowledge regarding the most appropriate data input fields to use. In future endeavours, I will dedicate more thought to this aspect, ensuring a better understanding of how to track user data effectively. Ratings are currently presented in a list format on the right side of the screen. Ideally, in future development, I would enhance the visual appeal of these results by formatting them in a more visually appealing manner. The two cards that have the rating section and results are sized by percentages and are viewable on mobile screens. 

I was not able to implement my local storage host due to skill shortages and time contraints. In future, I would give myself more time to implement this as it is a vital part of the brief. I was very dissappointed I could not do this as it is a vital part of the brief. In addition, there are two data elements that are undefined that I could not figure out how to fix. These are included in recommendations.  

Deployment strategies: 
GitHub Repository
Created a public repository on GitHub using a SSH key 
Cloned the repository to your desired terminal in this case I used VS Code 
In order to ensure the repository is linked to the terminal I created a test.html file using the commands:
git add test.html
git commit -m "added test.html file to learn about git"
git config --global user.email “pazios@icloud.com”
git config --global user.name “Georgia Pazios”
I tested the relationship by creating content in the test.html file and using the commands below to save my repository: 
git add .
git commit -m "added name to the page"
git push
I was confident the repository worked when I refreshed my GitHub browser and saw the tracked changes

Node.js
installed Node.js to enable server-side execution of my JavaScript code
input the command   npm init   to the terminal and followed the prompts to set up my project 
created a public folder that contained my index.html file, styles.css file and script.js file 
In the html file I used the keys ! then ‘tab’ to create the head and meta tags 
To ensure this all saves add, commit and push your changes to github, with the message "initial commit"
To check what my website was looking like I used the command    node server.js    in the terminal and putting localhost:8888 into my browser. 

My website works on Safari and Chrome I was not able to check on Edge or Firefox. 

Using the HTTPS link from my GItHub repository future developers are able to implement and improve my code. The below recommendations aim to enhance the functionality, performance, and user experience of the front-end database website:
Correct the errors in the rated pairings section to improve users experience 
Set up a local host storage that will remember users wine and cheese pairings. 
Fix undefined data elements in the form
Implement advanced search features such as filtering, sorting, and faceted search to provide users with more refined and personalised search results.
Enhance usability on different screen sizes by using sizing of fractions or percentages. 
Implement interactive graphs that can track users data input such as flavour notes so users can see their most rated data 
Integrate a robust authentication and authorisation system to secure user data and enable role-based access control for different user types. This could also involve social media platforms for interactivity. 
Explore the implementation of real-time updates using technologies like WebSockets or server-sent events to provide users with instant notifications and data updates.
Conduct performance profiling and implement optimisations such as caching strategies, code minification, and lazy loading to improve the website's loading speed and overall performance.
Enhance error handling mechanisms and implement robust logging to capture and track errors, helping to identify issues quickly and improve system stability.
Enable multi-language support to cater to a broader user base, allowing users to choose their preferred language and providing localised content.
Ensure compliance with accessibility standards (e.g., WCAG) to make the website accessible to users with disabilities, improving inclusivity and user satisfaction.
Expand the documentation to include comprehensive guides, tutorials, and a knowledge base to facilitate future development, maintenance, and onboarding of new developers.
Continuous Improvement: Foster a culture of continuous improvement by establishing feedback loops, conducting user testing, and gathering user feedback to drive ongoing enhancements and optimisations.
