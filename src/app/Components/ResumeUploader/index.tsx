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
        <div>
          <label htmlFor="pdfFile" className="bg-chart-2 p-3 rounded-sm text-chart-4">Upload your resume here</label>
          <input id="pdfFile" type="file" accept="application/pdf" placeholder="info" className="hidden" onChange={(e) => setFile(e.target.files?.[0] || null)} />
        </div>
        <textarea
          placeholder="Paste job description here"
          className=""
          value={jobDescription}
          onChange={(e) => setJobDescription(e.target.value)}
        />
        <button onClick={handleOptimize} className="bg-chart-2 p-3 rounded-sm text-chart-4">Optimize Resume</button>

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
