/* ============================================================
   WebAR Food Demo — Shared JavaScript
   ============================================================ */

/* ---- Smooth page fade-in on load ---- */
document.addEventListener('DOMContentLoaded', function () {
  document.body.style.opacity = '0';
  document.body.style.transition = 'opacity 0.4s ease';
  requestAnimationFrame(function () {
    document.body.style.opacity = '1';
  });

  /* ---- model-viewer: AR availability message ---- */
  const mv = document.querySelector('model-viewer');
  if (mv) {
    mv.addEventListener('ar-status', function (e) {
      if (e.detail.status === 'not-presenting') {
        console.log('AR session ended or not started.');
      }
    });

    /* Hide/show custom AR button based on AR support */
    mv.addEventListener('load', function () {
      const arBtn = mv.querySelector('.ar-button-custom');
      if (arBtn) {
        if (!mv.canActivateAR) {
          arBtn.textContent = '📱 AR Not Supported on This Device';
          arBtn.style.background = 'rgba(255,255,255,0.1)';
          arBtn.style.color = 'rgba(255,255,255,0.5)';
          arBtn.style.cursor = 'default';
          arBtn.style.boxShadow = 'none';
          arBtn.disabled = true;
        }
      }
    });
  }
});
