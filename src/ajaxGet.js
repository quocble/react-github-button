var githubButtonJsonCBFunc = null;
window.githubButtonJsonCB = function(res) {
  githubButtonJsonCBFunc && githubButtonJsonCBFunc(res.data);
};

export default function ajaxGet(url, callback) {
  githubButtonJsonCBFunc = callback;
  var script = document.createElement('script');
  script.src = url + '?callback=githubButtonJsonCB';
  document.getElementsByTagName('head')[0].appendChild(script);
}
