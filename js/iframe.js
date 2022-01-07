window.onload = () => {
    let iframeName = document.getElementById('iframeName');
    let iframeContent = iframeName.contentDocument;
    iframeContent.body.innerHTML = iframeContent.body.innerHTML + '<style>.iframe-css{color: #d92909}</style>';
}