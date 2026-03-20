# How to Install and Run?

To Install and run this Blockchain based crowdfunding platform locally, one must follow all the steps mentioned below:

Clone the repository:

     https://github.com/2shaaaa/FundVerse.git
Navigate to the web3 repository:

     cd web3
Install required dependencies:

     npm install
Navigate to the client repository:

     cd client
Install required dependencies:

     npm install
Start the development server:

     npm run dev
Open your browser and visit http://localhost:5173 to view the user interface of the crowdfunding platform.


# One tap with Docker?

Stay in the `FundVerse` directory and run this command:

     docker build -t fundverse -f dockerClone/Dockerfile .
Once the image has been built, run the container with the command:

     docker run -d -p 8080:80 --name fundverse-container fundverse
Open your browser and visit http://localhost:8080 to view the user interface of the crowdfunding platform.
