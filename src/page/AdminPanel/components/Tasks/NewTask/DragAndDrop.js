import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { AiOutlineUpload } from "react-icons/ai";
import "./style.css";

const DragAndDrop = ({ setFileInfo, setSizeLimitReached }) => {
  let MB = 0;

  let limit = 52428800; //50MB
  let testLimit = 20971520; //20MB

  const onDrop = useCallback((acceptedFiles) => {
    let MB2 = MB;

    acceptedFiles.map((file, index, array) => {
      getBase64(file)
        .then((result) => {
          // handle base64 response for each image and limit upload size
          MB2 += file.size;

          //create the object for upload
          setFileInfo((prev) => {
            let fileObj = {
              fileName: file.name,
              fileSize: file.size,
              fileType: file.type,
              base64: result,
            };

            //check upload size
            if (MB2 > testLimit) {
              setSizeLimitReached(true);
              return [...prev];
            } else {
              setSizeLimitReached(false);
              MB += file.size;
              return [...prev, fileObj];
            }
          });
        })
        .catch((err) => {
          console.log(err);
        });
    });
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()}>
      <input className="input-zone" {...getInputProps()} />

      {isDragActive ? (
        <div className="dragAndDropFeature">
          <p className="dragAndDropFeature__drop">Drop files here!</p>
        </div>
      ) : (
        <div className="dragAndDropFeature">
          <div className="uploadIcon">
            <AiOutlineUpload style={{ height: "50px", width: "50px" }} />
          </div>
          <div className="browse">Click to browse or drag and drop</div>
          <div className="supportedFormat">
            Supported formats: jpeg, jpg, png,avi, mkv... Maximum size 50 MB
          </div>
        </div>
      )}
    </div>
  );
};

export default DragAndDrop;

const getBase64 = (file) => {
  return new Promise((resolve) => {
    let baseURL = "";
    let reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onload = () => {
      baseURL = reader.result.split(",")[1];
      resolve(baseURL);
    };
  });
};

// function formatBytes(bytes, decimals = 3) {
//   if (!+bytes) return "0 Bytes";

//   const k = 1024;
//   const dm = decimals < 0 ? 0 : decimals;
//   const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

//   const i = Math.floor(Math.log(bytes) / Math.log(k));

//   return (bytes / Math.pow(k, i)).toFixed(dm);
// }
