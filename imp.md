1st step ->

Go to auth js
Go to getting started
Go to adapters
Go to prisma adapter and download the package

2nd step ->

Go to upgrade V5
Install package
Create auth.ts and copy the content
Create route.ts inside app/api/auth/[...nextauth]/route.ts
Create Middleware.ts
Change the matcher from clerk instead of nextAuth

3rd step
As we are using prisma creeate auth.config.ts
in auth.ts export singIn and signOut functions as well
Create a routes.ts file to manage all the routes
Do the logic inside of the login server action
