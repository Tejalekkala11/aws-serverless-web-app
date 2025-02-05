# Frontend for AWS Serverless Web Application

This is the frontend part of the serverless web application built using React.js. It interacts with the AWS Lambda backend to manage tasks in the DynamoDB database.

## Features
- Display a list of tasks fetched from the backend.
- Add new tasks to the list via a form.
- Scalable and simple UI.

## Tech Stack
- React.js
- Axios (optional, for making API requests)

## Getting Started

### Prerequisites
- Node.js (v14.x or above)
- npm (v6.x or above)

### Install Dependencies
	1. Navigate to the `frontend` directory:
   		```bash
  		 cd frontend
	2.Install the dependencies:
		'''bash
		npm install
### Running the Application Locally
	1.Start the development server:
		'''bash
		npm start
	2.Visit http://localhost:3000 in your browser to view the app.

### Building the Application for Production
	To build the React app for production (optimized for deployment to AWS S3):

	1.Run the build command:
		'''bash
		npm run build
	2.The production-ready files will be generated in the build/ directory.

### Deploying to AWS S3
	1.Sync the build/ directory to your S3 bucket :
		aws s3 sync build/ s3://your-bucket-name
	  Make sure to replace your-bucket-name with your actual S3 bucket name.
