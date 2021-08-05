const formReset = () => {
  document.getElementById('form').reset()
  document.getElementById('result').classList.add('d-none')
}

const getValue = (id) => {
  let e = document.getElementById(id)
  return e.value.length != 0 ? e.value : 0
}

const todayIndex = () => {
  let d = new Date()
  return d.getDay()
}

const estimate = (eps, minute_per_eps, spend) => {
  let day_idx = todayIndex()
  let total = eps * minute_per_eps

  let days = 0
  while (total > 0) {
    days += 1
    total -= spend[day_idx]

    day_idx = day_idx < 6 ? day_idx + 1 : 0
  }

  return days
}

const monthNameSwitcher = (m) => {
  let r = ''
  switch (m) {
    case 0:
      r = 'Januari';
      break;
    case 1:
      r = 'Februari';
      break;
    case 2:
      r = 'Maret';
      break;
    case 3:
      r = 'April';
      break;
    case 4:
      r = 'Mei';
      break;
    case 5:
      r = 'Juni';
      break;
    case 6:
      r = 'Juli';
      break;
    case 7:
      r = 'Agustus';
      break;
    case 8:
      r = 'September';
      break;
    case 9:
      r = 'Oktober';
      break;
    case 10:
      r = 'November';
      break;
    case 11:
      r = 'Desember';
      break;
  }
  return r
}

const estimate_date = (day_addition) => {
  let date = new Date();
  date.setDate(date.getDate() + day_addition);

  let d = date.getDate()
  let m = monthNameSwitcher(date.getMonth())
  let y = date.getFullYear()

  return `${d} ${m} ${y}`
}

const validate = (spend) => {
	return !spend.every((val) => val == 0)
}

const calculate = () => {
  let eps = getValue('episode')
  let minute_per_eps = getValue('duration')
  let spend = [
    getValue('sun'),
    getValue('mon'),
    getValue('tue'),
    getValue('wed'),
    getValue('thu'),
    getValue('fri'),
    getValue('sat')
  ]
  
  if (! validate(spend)) {
  	alert('Waktu yang diluangkan tidak valid')
  	return
  }

  let estimated_days = estimate(eps, minute_per_eps, spend)
  let estimated_date = estimate_date(estimated_days)

	document.getElementById('result-total').innerText = eps * minute_per_eps
  document.getElementById('result-days').innerText = estimated_days
  document.getElementById('result-date').innerText = estimated_date

  $('#result-modal').modal()
}
