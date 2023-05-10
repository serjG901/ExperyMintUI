# ExperyMintUI
CRA + tailwindcss + vanilla-tilt + react-router <-> simple js fetch

UI for ExperyMint App (url - https://github.com/serjG901/ExperyMintServer.git)

Adaptive flex design, 3 main page - account, game, closest people.

16 colors theme. ThemeProvider

3 languages. LanguageProvider

User may register in app with unique name and password.
Unique name - its _id for insert user data in mongodb.
User may change public name in account page, but unique name stay his login name.

User may set tags - info about himself.
User may upload any png/jpg avatar, but avatar resize in  400*400px (max) PNG in base64.

User statistic placed in account and game page.

Game - user see random image, he may rotate image thanks to vanilla-tilt.
User do choice - leave or remove image - it is he result for this image (imageN: true/false), user.score +1.
If in future user see this image and do another choice, he add +1 in fickle (user.mistruth +1).
User statistic: 
- score, 
- fickle, 
- unique - it is computing index, user image choice compare with choice all sorted users (for default they sort by max score, min fickle, min last action date, limited 1000 users, provide by mongodb).

Closest People - it is computing list of person, who closeness for user. User may send message for them.


Find people who are really close to you!
