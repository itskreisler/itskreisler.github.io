const useShareContent = async (dataToShare) => {
  try {
    await navigator.share(dataToShare)
  } catch (error) {
    console.error(error)
  }
}
const useCanShare = (shareData) => {
  const {
    title,
    text,
    url
  } = shareData
  navigator.canShare(shareData) && useShareContent(shareData)
}
export { useShareContent, useCanShare }
