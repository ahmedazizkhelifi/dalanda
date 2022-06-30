checkURL = (url) => {
  gmail = 'https://mail.google.com/mail/u';
  gmail2 = '#inbox';
  if (url.indexOf(gmail) > -1) {
    if (url.indexOf(gmail2) == -1) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
};

async function getSender(link, i) {
  // bel code couleur hedha #00681C
  console.log(i);
  a = '';
  await fetch(link)
    .then((response) => response.text())
    .then((text) => {
      a = text;
    });
  return a;
}

async function main() {
  if (!checkURL(document.location.href)) {
    alert('Go to gmail HTML');
  } else {
    table = document.getElementsByClassName('th').item(0);
    scraped = [];
    for (let i = 0; i < table.rows.length; i++) {
      table.rows[i].bgColor = 'blue';
      _ = {};
      _.title = table.rows[i].cells[1].textContent;
      _.content = table.rows[i].cells[2].textContent;
      _.link = table.rows[i].cells[2].firstElementChild.href;
      _.date = table.rows[i].cells[3].textContent;
      let x = '';
      x = await getSender(_.link, i);
      table.rows[i].bgColor = 'green';
      scraped.push(_);
    }
    //document.getElementsByClassName("searchPageLink")[1].click();

    console.log(scraped);
  }
}

main();

console.log('document.referrer', document.referrer);

/* alert("hello " + document.location.href);
console.log(document); */
