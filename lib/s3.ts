import AWS from "aws-sdk"
import {v4 as uuid} from "uuid"

export async function uploadToS3(file: File) {
    try {
        AWS.config.update({
            accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID,
            secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY,

        });
        const s3 = new AWS.S3({
            params: {
                Bucket: process.env.NEXT_PUBLIC_S3_BUCKET_NAME
            },
            region: process.env.NEXT_PUBLIC_AWS_REGION
        });

        const file_key = 'uploads/' + uuid() + file.name.replace(' ', '-')
        // const file_key = 'uploads/' +  Date.now().toString() + file.name.replace(' ', '-')

        const params = {
            Bucket: process.env.NEXT_PUBLIC_S3_BUCKET_NAME!,
            Key: file_key,
            Body: file
        }

        const upload = s3.upload(params).on("httpUploadProgress", (evt) => {
            console.log("uploading to s3...", parseInt(((evt.loaded * 100 / evt.total)).toString()), "%")
        }).promise()

        await upload.then((data:any) => {
            console.log("successfully uploaded to s3", file_key);

        })

        return Promise.resolve({ file_key: file_key, file_name: file.name })

    } catch (error) {

    }
}



export function getS3Url(file_key: string) {
    return `https://${process.env.NEXT_PUBLIC_S3_BUCKET_NAME}.s3.ap-southeast-1.amazonaws.com/${file_key}`
}