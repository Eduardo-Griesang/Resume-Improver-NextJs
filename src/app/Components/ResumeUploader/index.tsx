"use client"
import { useState } from "react";
import axios from "axios";

export default function ResumeUploader() {
  const [file, setFile] = useState<File | null>(null);
  const [jobDescription, setJobDescription] = useState("");
  const [missingKeywords, setMissingKeywords] = useState<string[]>([]);
  const [optimizedResume, setOptimizedResume] = useState("");

  const handleUpload = async () => {
    if (!file || !jobDescription) return alert("Upload resume and enter job description");

    const formData = new FormData();
    formData.append("file", file);
    formData.append("job_description", jobDescription);

    try {
      const response = await axios.post("http://127.0.0.1:8000/process-resume/", formData);
      setMissingKeywords(response.data.missing_keywords);
    } catch (error) {
      console.error("Error processing resume", error);
    }
  };

  const handleOptimize = async () => {
    if (!file || !jobDescription) return alert("Upload resume and enter job description");

    const formData = new FormData();
    formData.append("file", file);
    formData.append("job_description", jobDescription);

    try {
      const response = await axios.post("http://127.0.0.1:8000/optimize-resume/", formData);
      setOptimizedResume(response.data.optimized_resume);
    } catch (error) {
      console.error("Error optimizing resume", error);
    }
  };

  return (
    <div className="container">
      <h2>Upload Resume and Compare with Job</h2>
      <input type="file" accept="application/pdf" onChange={(e) => setFile(e.target.files?.[0] || null)} />
      <textarea
        placeholder="Paste job description here"
        value={jobDescription}
        onChange={(e) => setJobDescription(e.target.value)}
      />
      <button onClick={handleUpload}>Upload & Compare</button>
      <button onClick={handleOptimize}>Optimize Resume</button>

      {missingKeywords.length > 0 && (
        <div>
          <h3>Missing Keywords</h3>
          <ul>
            {missingKeywords.map((word, idx) => (
              <li key={idx}>{word}</li>
            ))}
          </ul>
        </div>
      )}

      {optimizedResume && (
        <div>
          <h3>Optimized Resume</h3>
          <pre>{optimizedResume}</pre>
        </div>
      )}
    </div>
  );
}
