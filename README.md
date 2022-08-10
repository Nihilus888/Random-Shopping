# Random-Shopping

## Summary

A simple standalone ecommerce shopping website with user login and some additional features like adding wishlist, deleting items from your wishlist
and creating your wishlist. Only authenticated users will be able to have this additional features and authentication will expire after
a short while due to the cookie expiring. This will increase the security of the user's account and prevent cyber threats like session
hijacking, unauthorized login if the person's computer has been stolen, etc.

## Planning Stages and approach taken

1. Wireframing
   Not logged in wireframe flowchart

   Add images
   Screenshot 2022-07-29 at 7.30.37 PM.png

Logged in wireframe flowchart

   Add images
S  creenshot 2022-07-30 at 6.06.01 PM.png

Entire wireframe flowchart

   Add images
   Screenshot 2022-07-30 at 6.07.20 PM.png

The wireframe flowchart gives us an idea of how to different pages are suppose to look and shows the relationship between the different web
pages and how they interact. This wireframe gives an idea of what to include in my web design and what I have missed. However, I was not able to wireframe everything and plan it out properly due to the time constrain of this project which will be briefly touched on later.

2. Flowchart

   Add images of flowchart

This flowchart gives a high level overview of how the system is suppose to run. It is impossible to foresee all the edge cases that might happen, but this helps to reduce the probability of such things occurring. However, I believe that we can plan better when we do it first as we can conceptualize the edge cases better. Drafting this flowchart was hard initially as I attempted to combine all of it into a uni-directional flow chart which was a big mistake. After some prodding from my instructors, I managed to clean it up and divide it into various stages for easier viewing and overview.

3. Building

I decided to start with the front-end by developing the UI/UX of the website first before coming out with the routing parameters. This ensure that I have all the webpages interconnected first so I can see how the user flow will go. By doing this, it gives me a high-level overview of what I need to do by understanding where I need to authenticate and how easy it is for me to navigate and use this application. Afterwards, I started to work on setting up my data schema validation for my user and wishlist which was planned out previously. To test it out, I used Mongo Atlas to connect to my VS Studio Code using mongoose and randomly seeded data to ensure that my data schema validation works. Once that was successful, I could proceed by working on my sign up/log in functionality and middleware authentication. When that is settled, I proceeded to work on the CRUD for my wishlist. I systemtically work on the create, before the read, the delete and finally the update function which took some time. Last but not least, writing the README.md was not easy as I had to think of the process of what I wanted to cover by writing in succinctly and covering the main topics. 
 

## Application 

The application and tools that were used were much more and harder to integrate together in comparison with the previous projects. With the same amount of time of slightly less than 2 weeks to build a working product, it was definitely a huge jump from the previous projects.

1. Tech Stacks

There were a plethora of tech stacks and applications that were used in this project to conceptualize and build it

Tech Stacks:
1. HTML (Front-end)
2. CSS Tailwind (Front-end)
3. EJS (Front-end)
4. Express JS (Middle-ware for routing)
5. ENV (Middle-ware for storing password)
6. Bcrypt (Middle-ware for encrypting password)
7. Express-session (Middle-ware for maintaining login sessions)
8. JOI (username and password validation)
9. MongoDB (Back-end) 

Applications Used:

1. Figma (UI Design)
2. Visual Studio Code (IDE)
3. MongoDB (Database)
4. Github (Version Control)
5. Heroku (Deployment)

## Things that I would have added if I had more time (Unsolved problems)

Due to the severe time constraint to build a viable full-stack product in a matter of slightly less than 2 weeks which includes the planning proces, wireframing the front-end website design and flowcharting the process, there were some things that I left out and would work on it more if I had more time. 

1. User with their own unique wishlist

Unfortunately, all the users have a shared wishlist and none of them have a unique one. I did not have the time to conceptualize the entity relationship diagram for this project to properly draft out how the different collections relate to one another. I have to admit that I was focusing a bit too much on the front-end by trying to learn how to wireframe and to learn a new CSS framework in a short intense period of a few days.

2. My routing name conventions are utterly dreadful

I do acknowledge that my route naming is still rather egregious as I still have not properly grasp the entire concept of how routing functions work in its entirety. To make up for this, I have been watching youtube videos and using online articles to supplement and plug the holes in my knowledge where there are gaps. Once again due to time constraints, I am unable to amend it for practical reasons such as the entire collapse of my applications and not knowledgable enough to patch it. 
