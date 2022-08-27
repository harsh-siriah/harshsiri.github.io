class UrlHelper {
  openInNewTab(url) {
    window.open(url, "_blank", "noopener,noreferrer");
  }
}
export default new UrlHelper();
