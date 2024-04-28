import { getS3Url, uploadToS3 } from "@/lib/s3";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { Inbox, Loader2 } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import toast from "react-hot-toast";

interface FileUploadProps {
  imageUrl: string;
  onChange: (date: string) => void;
  disabled: boolean;
}

const FileUpload: React.FC<FileUploadProps> = ({
  disabled,
  onChange,
  imageUrl,
}) => {
  const router = useRouter();

  const [uploading, setUploading] = useState(false);

  const { getRootProps, getInputProps } = useDropzone({
    accept: { "image/*": ["*.png", "*.jpg", "*.jpeg"] },
    maxFiles: 1,
    onDrop: async (acceptedFiles) => {
      console.log(acceptedFiles);
      const file = acceptedFiles[0];

      if (file.size > 10 * 1024 * 1024) {
        return toast.error("File too large");
      }

      try {
        setUploading(true);
        const data = await uploadToS3(file);
        if (!data?.file_name || !data.file_key) {
          return toast("Something went wrong !");
        }

        setUploading(false);

        const url = getS3Url(data.file_key);
        onChange(url);
      } catch (error) {
        console.log(error);
      } finally {
        setUploading(false);
      }
    },
  });

  return (
    <div>
      <div className="p-5 sm:w-[500px]  lg:h-72 w-screen px-10  rounded-xl ">
        <div
          {...getRootProps()}
          className="border-dashed border-2 rounded-xl lg:h-72 h-44 p-2 cursor-pointer bg-primary/10  flex justify-center items-center flex-col"
        >
          <input {...getInputProps()} />
          {!imageUrl ? (
            uploading ? (
              <>
                <Loader2 className="w-10 h-10 text-blue-500 animate-spin" />
                <p className="mt-2 text-sm text-slate-400 text-primary-foreground text-center">
                  Uploading image ...
                </p>
              </>
            ) : (
              <>
                <Inbox className="w-10 h-10 text-blue-500" />
                <p className="mt-2 text-sm text-slate-400 text-center">
                  Drag and drop or click to upload image
                </p>
              </>
            )
          ) : (
            <Image
              src={imageUrl}
              width={1000}
              height={1000}
            // fill
              className="rounded-md object-cover w-full h-full aspect-auto "
              alt="image"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default FileUpload;
