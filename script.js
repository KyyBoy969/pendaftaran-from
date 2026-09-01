const form = document.getElementById('form-pendaftaran');
const divHasil = document.getElementById('hasil');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  divHasil.innerHTML = `
    <div class="alert-success">
      <h4>Pendaftaran Berhasil!</h4>
      <p>Terima kasih telah mendaftar sebagai perwakilan kelas untuk Tech Fest 2026.</p>
    </div>
  `;

  form.reset();
  
  const btnSubmit = document.getElementById('btn-submit');
  btnSubmit.disabled = true;
});
