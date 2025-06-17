"use client";

import { useState, ChangeEvent, useCallback, MouseEvent, useMemo } from "react";
import Link from "next/link";
import { SubmitButton } from "@/components/SubmitButton";
import { MdClear } from "react-icons/md";

export default function Admin() {
  const [selectedFile, setSelectedFile] = useState<File | undefined>();

  const selectedFileLabel = useMemo(
    () =>
      selectedFile
        ? ` ${selectedFile.name}, ${(selectedFile.size / (1024 * 1024)).toFixed(
            2
          )} Mb`
        : " No file selected",
    [selectedFile]
  );

  const handleFileChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];

      if (!file) return;

      setSelectedFile(file);
    },
    []
  );
  const handleFileClear = useCallback((e: MouseEvent<SVGElement>) => {
    e.preventDefault();
    setSelectedFile(undefined);
  }, []);

  const handleFileUpload = useCallback(() => {
    // TODO: Implement actual file upload logic here
    console.log(selectedFile);
  }, [selectedFile]);

  return (
    <main className="flex flex-1 justify-center flex-col gap-2">
      <form className="flex flex-col gap-4 w-xs md:w-sm">
        <div className="text-2xl font-medium">Upload embeddings</div>
        <label className="border p-4 rounded cursor-pointer relative">
          <span>Choose file:</span>
          <span className="text-foreground/80 italic">{selectedFileLabel}</span>
          <input type="file" className="hidden" onChange={handleFileChange} />
          {selectedFile && (
            <MdClear
              className="absolute top-1 right-1 text-lg hover:text-gray-400 transition-colors"
              onClick={handleFileClear}
            />
          )}
        </label>
        <SubmitButton disabled={!selectedFile} formAction={handleFileUpload}>
          Upload
        </SubmitButton>
      </form>

      <Link href="/" className="mt-5 text-center text-blue-500 underline">
        Go back to Home
      </Link>
      <div className="w-full p-[1px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent my-8" />
    </main>
  );
}
