import Link from 'next/link'

export default function ServerErrorFallback() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 px-6 py-24 text-center text-gray-900">
      <div className="max-w-xl space-y-6">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#4932B0]">
          Error 500
        </p>
        <h1 className="text-4xl font-medium tracking-tight">
          Something went wrong.
        </h1>
        <p className="text-lg text-gray-600">
          Please refresh the page or return home while we investigate the issue.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center rounded-full bg-[#4932B0] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#35218a]"
          >
            Go home
          </Link>
          <Link
            href="mailto:support@nooralquran.app"
            className="inline-flex items-center rounded-full border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-700 transition hover:border-gray-400"
          >
            Contact support
          </Link>
        </div>
      </div>
    </main>
  )
}


