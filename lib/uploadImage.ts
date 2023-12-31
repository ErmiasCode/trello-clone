import { ID, storage } from "@/config/appwrite";


const uploadImage = async (file: File) => {
  if (!file) return;

  const fileUploaded = await storage.createFile(
    process.env.NEXT_PUBLIC_APPWRITE_STORAGE_ID!,
    ID.unique(),
    file,
  );

  return fileUploaded;
}

export default uploadImage;