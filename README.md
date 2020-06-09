# AutoCompleteFrontEnd

## Environment configuration.

Step - 1. Install docker in your system.
step - 2. login into https://www.docker.com/, if not registered, register and then login.

## Deployment configuration.
step - 1. extract the binaries given.
step - 2. open the folder (AutoCompleteFrontEnd) and look for dockerfile.
step - 3. open command prompt in that folder and execute the command "docker build . "
step - 4. Once image build collect the image id from console or run command docker images and take latest                builded image id
step - 5. execute the command docker run -p 127.0.0.1:4200:80 IMAGE_ID

## Note
Please make sure both of server are running on same machine as we are not exposing services to outside.
This UI is not reponsive.