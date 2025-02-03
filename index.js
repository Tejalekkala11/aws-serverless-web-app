const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
    const { taskId, taskName } = JSON.parse(event.body);
    const params = {
        TableName: 'TasksTable',
        Item: { taskId, taskName },
    };
    await dynamoDb.put(params).promise();
    return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Task created successfully!' }),
    };
};
