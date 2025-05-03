"use client"
import { useState } from "react";
import axios from "axios";

export default function ResumeUploader() {
  const [file, setFile] = useState<File | null>(null);
  const [jobDescription, setJobDescription] = useState("");
  const [optimizedResume, setOptimizedResume] = useState("");

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
      <h2 className="font-bold text-secondary-foreground text-2xl">Upload Resume and Compare with Job description</h2>

      <section className="flex gap-4 my-10 align-middle">
        <input type="file" accept="application/pdf" onChange={(e) => setFile(e.target.files?.[0] || null)} />
        <textarea
          placeholder="Paste job description here"
          value={jobDescription}
          onChange={(e) => setJobDescription(e.target.value)}
        />
        <button onClick={handleOptimize}>Optimize Resume</button>

        {optimizedResume && (
          <div>
            <h3>Optimized Resume</h3>
            <pre>{optimizedResume}</pre>
          </div>
        )}
      </section>
    </div>
  );
}
