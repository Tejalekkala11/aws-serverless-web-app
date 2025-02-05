const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();

exports.createTaskHandler = async (event) => {
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

exports.updateTaskHandler = async (event) => {
    const { taskId } = event.pathParameters;
    const { taskName } = JSON.parse(event.body);
    const params = {
        TableName: 'TasksTable',
        Key: { taskId },
        UpdateExpression: 'set taskName = :taskName',
        ExpressionAttributeValues: {
            ':taskName': taskName,
        },
        ReturnValues: 'ALL_NEW',
    };
    await dynamoDb.update(params).promise();
    return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Task updated successfully!' }),
    };
};

exports.deleteTaskHandler = async (event) => {
    const { taskId } = event.pathParameters;
    const params = {
        TableName: 'TasksTable',
        Key: { taskId },
    };
    await dynamoDb.delete(params).promise();
    return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Task deleted successfully!' }),
    };
};

exports.getTasksHandler = async (event) => {
    const params = {
        TableName: 'TasksTable',
    };
    const data = await dynamoDb.scan(params).promise();
    return {
        statusCode: 200,
        body: JSON.stringify(data.Items),
    };
};

