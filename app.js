const $form = document.getElementById("form");
const $input = document.getElementById("input");
const $submit = document.getElementById('submit')
const $results = document.getElementById('results')


const OPTIONS = {
  method: "GET",
  headers: {
    "X-RapidAPI-KEY": "XXX",
    "X-RapidAPI-Host": "YYY",
  },
};

const fetchIpInfo = (ip) => {
  return fetch(`https://freeipapi.com/api/json/${ip}`, OPTIONS)
    .then((res) => res.json())
    .catch((err) => console.error(err));
};

$form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const { value } = $input;
  if (!value) return;

  $submit.setAttribute('disabled', '')
  $submit.setAttribute('aria-busy', 'true')
  
  const ipInfo = await fetchIpInfo(value)

  if(ipInfo){
    $results.innerHTML = JSON.stringify(ipInfo, null, 2)
  }
  

  $submit.removeAttribute('disabled')
  $submit.removeAttribute('aria-busy', 'true')
});
