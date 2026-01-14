<script>
  const form = document.getElementById("contactform");
  const successMsg = document.getElementById("form-success");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // evita erro 405

    // mostra mensagem
    successMsg.style.display = "block";

    // limpa formulário
    form.reset();

    // redireciona após 3 segundos
    setTimeout(function () {
      window.location.href = "index.html";
    }, 3000);
  });
</script>
