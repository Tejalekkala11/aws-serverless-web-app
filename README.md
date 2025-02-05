# AWS Serverless Web Application

This project demonstrates a serverless web application built using AWS Lambda, API Gateway, DynamoDB, and S3. It includes both the backend (API) and frontend (React.js), allowing you to manage tasks with a scalable, serverless architecture.

## Features
- **Task Management**: Add, update, delete, and view tasks.
- **Serverless**: Fully built with serverless technologies using AWS Lambda, API Gateway, DynamoDB, and S3.
- **Scalable & Cost-effective**: The application leverages the serverless architecture for automatic scaling and cost optimization.

## Tech Stack
- **Frontend**: 
  - React.js for building the user interface
  - AWS S3 for hosting the frontend
- **Backend**:
  - AWS Lambda for serverless functions
  - AWS API Gateway for routing requests to Lambda functions
  - AWS DynamoDB for storing task data
- **Deployment**:
  - AWS SAM (Serverless Application Model) for easy deployment and management of serverless resources
  - AWS CLI for syncing the frontend to S3

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v14.x or above) for both backend and frontend development
- **AWS CLI** for interacting with AWS services and deploying the project
- **AWS SAM CLI** for deploying serverless resources (like Lambda functions, API Gateway, and DynamoDB)
- **Git** for version control

You will also need an AWS account and appropriate IAM roles configured for deploying the application.

## Backend

### Technologies:
- **AWS Lambda**: Executes the backend functions for task management (create, update, delete, fetch tasks).
- **API Gateway**: Routes HTTP requests to the appropriate Lambda functions.
- **DynamoDB**: Stores task data in a NoSQL database.

### Files:
- **`index.js`**: Contains the Lambda functions for creating, updating, deleting, and fetching tasks.
- **`template.yaml`**: AWS SAM template for defining serverless resources like DynamoDB table and Lambda functions.
- **`serverless.yaml`**: Optional file used for configuring serverless deployment (if you are using Serverless Framework).
- **`package.json`**: Lists the backend dependencies (e.g., AWS SDK).

### Setup:
1. **Install Dependencies**: Run `npm install` inside the `backend` folder.
2. **Deploy**: Use the `sam deploy --guided` command to deploy the backend resources using AWS SAM.

## Frontend

### Technologies:
- **React.js**: A JavaScript library for building user interfaces.
- **AWS S3**: For hosting the static frontend application after building.

### Files:
- **`src/`**:
  - **`App.js`**: Main React component that handles task management (viewing tasks, adding new tasks).
  - **`index.js`**: Entry point for the React application, rendering the `App` component.
  - **`components/TaskList.js`**: Displays a list of tasks fetched from the backend.
  - **`components/TaskForm.js`**: Allows users to add new tasks to the list.
- **`public/index.html`**: The HTML template that hosts the React app.
- **`package.json`**: Lists the frontend dependencies (e.g., React, ReactDOM).
- **`.gitignore`**: Specifies files to ignore in Git (e.g., `node_modules/` and `build/`).

### Setup:
1. **Install Dependencies**: Run `npm install` inside the `frontend` folder.
2. **Run Locally**: Use `npm start` to run the React application locally on `http://localhost:3000`.
3. **Build for Production**: Run `npm run build` to create the production-ready build.
4. **Deploy to S3**: Sync the build directory with your AWS S3 bucket using the AWS CLI.

## Deployment

### Backend:
1. **Install AWS SAM CLI** and configure your AWS credentials.
2. **Deploy**: From the `backend` directory, run the following command:
   ```bash
   sam deploy --guided
This will deploy the DynamoDB table, Lambda functions, and API Gateway.


### Frontend:
	
After building the frontend with npm run build, sync the build/ directory to your S3 bucket:
aws s3 sync build/ s3://your-bucket-name
Replace your-bucket-name with your actual S3 bucket name.




By following this guide, you'll have a fully functional serverless task management web application deployed to AWS, with both the backend and frontend components working together seamlessly.


This `README.md` provides an overview of the project, including the backend and frontend setup, deployment steps, and file descriptions, all in a clear and easy-to-understand format.


NOTE: serverless.yaml is optional

