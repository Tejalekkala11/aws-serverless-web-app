#!/bin/bash
cd backend
sam deploy --guided
cd ../frontend
npm run build
aws s3 sync build/ s3://your-bucket-name


