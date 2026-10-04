(function () {
  var vids = Array.prototype.slice.call(document.querySelectorAll('video[data-inview]'));
  if (!vids.length) return;
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  function play(v) { v.muted = true; var p = v.play(); if (p && p.catch) p.catch(function () {}); }
  if (!('IntersectionObserver' in window)) { vids.forEach(play); return; }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) { if (e.isIntersecting) play(e.target); else e.target.pause(); });
  }, { threshold: 0.35 });
  vids.forEach(function (v) { io.observe(v); });
})();
