# 1st step ->

Go to auth js
Go to getting started
Go to adapters
Go to prisma adapter and download the package

# 2nd step ->

Go to upgrade V5
Install package
Create auth.ts and copy the content
Create route.ts inside app/api/auth/[...nextauth]/route.ts
Create Middleware.ts
Change the matcher from clerk instead of nextAuth

# 3rd step

As we are using prisma creeate auth.config.ts
in auth.ts export singIn and signOut functions as well
Create a routes.ts file to manage all the routes
Do the logic inside of the login server action

# O auth logics ->

add github and google from nextauth
add clientId clientIdSecret in the function of google and github
go to github dev settings and create a app and find the env variables
go to google console create project then do the consent screen and then go to credentials o auth credentials and find them and add it to the env files
obv we dont want a confirmation if the user signs through gmail or github so we need to mark them verified right
for that add a event in the auth.ts and on linkedaccount just mark the users email as verified

# Solving the wierd error when logged in with github and google with sameaccounts ->

just add pages in auth.ts

# Token issuing when logged in with credentials

Create functions in data folder for getting token with email and getting token with token
Create generateVerificationToken inside lib folder to generate token using uuid and also creating a model for it in prisma and pushing it
Also in auth.ts under callbacks do the same with sign in if provider is credentials if user is not verified dont let them sign in

# Verification Email

create a accoutn on resend email service
create a function in lib folder for mailing
use it on the login and register actions

# Aftermath of email

create the same page where the link from the email goes
then create a new verification form mark the route as public route
create a new server action for the verification
