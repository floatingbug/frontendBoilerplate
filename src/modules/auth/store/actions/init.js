export default async function init() {
	if (this.isInitialized) return

	try {
		await this.refreshToken()
	} catch (err) {
		this.clear()
	} finally {
		this.isInitialized = true
	}
}
