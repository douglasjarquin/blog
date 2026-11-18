/**
 * Encode one ARD identifier segment. ARD allows only [A-Za-z0-9._-] in a segment.
 *
 * Letters, digits, "." and "-" pass through unchanged. Every other character,
 * including "_" itself, becomes "_" plus the two uppercase hex digits of each
 * UTF-8 byte (like percent-encoding, with "_" in place of "%"). Since "_" only
 * appears as an escape, the mapping is deterministic, reversible and
 * collision-free: "café" -> "caf_C3_A9", "a_b" -> "a_5Fb".
 */
export function encodeUrnSegment(segment: string): string {
	let out = "";
	for (const char of segment) {
		if (/^[A-Za-z0-9.-]$/.test(char)) {
			out += char;
			continue;
		}
		for (const byte of new TextEncoder().encode(char)) {
			out += `_${byte.toString(16).toUpperCase().padStart(2, "0")}`;
		}
	}
	return out;
}

/** Join raw parts into ARD identifier segments; a "/"-nested content ID contributes one segment per path part. */
export const urnSegments = (...parts: string[]) =>
	parts
		.flatMap((part) => part.split("/"))
		.map(encodeUrnSegment)
		.join(":");
