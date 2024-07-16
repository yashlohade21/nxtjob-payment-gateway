# Payment Gateway

This project is a Node.js-based payment gateway API using Express and Swagger for documentation.

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Deployment on AWS](#deployment-on-aws)
- [License](#license)

## Description
The Payment Gateway API handles payment transactions with basic functionalities such as creating, retrieving, updating, and deleting payments.

## Installation
To run this project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/yashlohade21/payment-gateway.git
   cd payment-gateway
   ```

2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:
   Create a .env file in the root directory and add the following:
   ```bash
   PORT=3000
   ```

Usage
To start the server, run: npm start

The server will start at http://localhost:3000.

API Documentation
API documentation is generated using Swagger. Access the API documentation at http://localhost:3000/docs.

Deployment on AWS
  To deploy this application on AWS, follow these steps:

  EC2 Instance Setup:
  
    Launch an EC2 instance with Ubuntu Server.
    Connect to your instance using SSH.
  
  Install Docker:
  
  Install Docker on your EC2 instance:
     ```bash
      sudo apt update
      sudo apt install docker.io
     ```

  Build Docker Image:

  Create a Dockerfile in your project root :-
     ```bash
      FROM node:14
      
      WORKDIR /usr/src/app
      
      COPY package*.json ./
      
      RUN npm install
      
      COPY . .
      
      EXPOSE 3000
      
      CMD ["node", "app.js"],
      
     ```

  Build the Docker image:

      sudo docker build -t payment-gateway .

  Run Docker Container:

      Run the Docker container:
      sudo docker run -d -p 3000:3000 payment-gateway

  Configure Security Groups:
      Update security groups to allow inbound traffic on port 3000.
  
  Access the Application:
    Access your application on the instance's public IP or domain, e.g., http://<instance-ip>:3000.

  License
    This project is licensed under the ISC License - see the LICENSE.md file for details.

    ### Notes:
    - Replace `<instance-ip>` with your actual EC2 instance IP address or domain after deployment.
    - Ensure your AWS environment setup includes appropriate security configurations and IAM roles for production deployments.
    
    This `README.md` file provides comprehensive instructions from installation to deployment on AWS, making it easier for users to understand and use your payment gateway API. Adjust details as necessary based on your specific deployment environment and requirements.
