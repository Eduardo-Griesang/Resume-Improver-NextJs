import Link from "next/link";

export default function About () {
    return (
        <section className="text-left max-w-2xl justify-start">
            <h2 className="text-3xl font-bold text-secondary-foreground mb-6">
                Are you tired of getting automated rejections from companies?
            </h2>
            <span className="text-lg text-secondary-foreground block mb-2">
                Maybe your resume doesn't have the right keywords or is not ATS ready!
            </span>
            <p className="text-base text-destructive mb-6">
                Upload your resume with the job description that you're applying for and get it ATS ready right now.
            </p>
            <hr className="flex h-1 bg-chart-2 rounded-full mb-6"></hr>
        </section>
    )
}