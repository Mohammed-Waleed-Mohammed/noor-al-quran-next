// Live catalog size from the MP3Quran v3 API — the same source the app uses —
// so the site never shows a reciter count that has gone stale. Revalidated
// weekly; on any failure the number is simply not shown.

const API = 'https://www.mp3quran.net/api/v3/reciters?language=ar'

export async function getReciterCount(): Promise<number | null> {
  try {
    const res = await fetch(API, { next: { revalidate: 60 * 60 * 24 * 7 } })
    if (!res.ok) return null
    const json = (await res.json()) as { reciters?: unknown[] }
    const n = json.reciters?.length ?? 0
    return n > 0 ? n : null
  } catch {
    return null
  }
}
