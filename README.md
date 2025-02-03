<h1 align="center">PixelFind</h1>
<p align="center"> <strong><i>This photo tagging app build as a part of Odin Project Project Curriculum</strong></i> </p>

<p align="center">
  <img src="https://github.com/NewGen2022/photo-tagging-app/blob/main/frontend/src/assets/icons/find_pixel.png" alt="App Icon">
</p>

# About The Project
This was a project assignment from The Odin Project's 2024 NodeJS course. 
The assignment was to create a photo tagging app as Where`s Waldo with leaderboard (without authentication).

## Technologies used
- ExpressJs API: Handles backend logic and routing.
- ReactJs: For frontend displaying logic.
- PostgreSQL: Serves as the relational database to store leaderboard data.
- Prisma ORM: Provides an Object-Relational Mapping approach for interacting with the PostgreSQL database.
- TainwindCss: Enhances the visual appeal and styling of the frontend.

(For deploying you can use railway.app and for cloud storage of game images use supabase or analogies (at your own request)) 
- railway.app: A platform for deploying the full-stack application.
- supabase: Acts as the cloud storage provider for securely managing user-uploaded files.

## Functionality of the app
The user can choose a game to play (in this version, only one game is available).
Using the mouse, the user must find all the game characters displayed on the right side of the header as quickly as possible.
If the user selects the correct character, a success message will appear at the top of the screen, and the character will be marked as found in the header. Otherwise, a message will indicate that the selection is incorrect.
Once all characters are found, the game will end, and a prompt will appear asking the user to enter their name to save their completion time.
After that, the user can view the leaderboard for each game on the leaderboard page.

There are two themes available: dark and light. Also app is responsive to any screen size.

## For developers

To run the app on a local machine, clone the repository and follow these steps:
1. Open in VS code (or another preferred code editor) two consoles
2. In first run `cd /frontend` -> `npm run dev`
3. In second run `cd /backend` -> `npm run dev`

To add new games use file `/frontend/src/gameData.js` (add all needed information as used in original code)

Contribute🚀 and enjoy🎉

# App preview
![app preview](https://github.com/NewGen2022/photo-tagging-app/blob/main/app_preview/photo-1.png)
![app preview](https://github.com/NewGen2022/photo-tagging-app/blob/main/app_preview/photo-2.png)
![app preview](https://github.com/NewGen2022/photo-tagging-app/blob/main/app_preview/photo-3.png)
![app preview](https://github.com/NewGen2022/photo-tagging-app/blob/main/app_preview/photo-4.png)
![app preview](https://github.com/NewGen2022/photo-tagging-app/blob/main/app_preview/photo-5.png)
![app preview](https://github.com/NewGen2022/photo-tagging-app/blob/main/app_preview/photo-6.png)
![app preview](https://github.com/NewGen2022/photo-tagging-app/blob/main/app_preview/photo-7.png)
![app preview](https://github.com/NewGen2022/photo-tagging-app/blob/main/app_preview/photo-8.png)
![app preview](https://github.com/NewGen2022/photo-tagging-app/blob/main/app_preview/photo-9.png)
![app preview](https://github.com/NewGen2022/photo-tagging-app/blob/main/app_preview/photo-10.png)
![app preview](https://github.com/NewGen2022/photo-tagging-app/blob/main/app_preview/photo-11.png)

