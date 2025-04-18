import Link from "next/link";

export default function About () {
    return (
        <section className="text-left max-w-2xl mx-20 justify-start">
            <h2 className="text-3xl font-bold text-gray-200 mb-6">
                Are you tired of getting automated rejections from companies?
            </h2>
            <span className="text-lg text-gray-200 block mb-2">
                Maybe your resume doesn't have the right keywords or is not ATS ready!
            </span>
            <p className="text-base text-gray-300 mb-4">
                Upload your resume with the job description that you're applying for and get it ATS ready right now.
            </p>
            <Link
                href={"/pages/Improver"}
                className="inline-block bg-slate-900 hover:bg-slate-950 text-gray-100 font-medium py-2 px-4 rounded-lg transition"
            >
                Improve your resume
            </Link>
        </section>
    )
}