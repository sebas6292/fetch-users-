const URL = 'https://randomuser.me/api';

const container = document.querySelector('.container');

//Picture , name, email, phone , toggle dob
const UserCard = ({ picture, name, email, phone, dob, ...rest }) => {
  const card = document.createElement('section');
  const img = document.createElement('img');
  const h2 = document.createElement('h2');
  const p = document.createElement('p');
  const p2 = document.createElement('p');
  const p3 = document.createElement('button');
  p3.className = 'getdob';

  img.src = picture.large;
  h2.innerHTML = `${name.first} ${name.last}`;
  p.innerHTML = `Email: ${email}`;
  p2.innerHTML = `Phone Number: ${phone}`;
  p3.innerHTML = `Display DOB`;

  p3.addEventListener('click', displayDob);

  function displayDob() {
    if (p3.innerHTML === 'Display DOB') {
      p3.innerHTML = `Birthday: ${dob.date}`;
    } else {
      p3.innerHTML = 'Display DOB';
    }
  }

  card.appendChild(img);
  card.appendChild(h2);
  card.appendChild(p);
  card.appendChild(p2);
  card.appendChild(p3);

  return card;
};

const fetchPeople = (event) => {
  axios
    .get(URL)
    .then((res) => {
      console.log(res.data.results);
      res.data.results.forEach((person) => {
        const card = UserCard(person);
        container.appendChild(card);
      });
    })
    .catch((err) => {
      debugger;
    });
};

Btn.addEventListener('click', fetchPeople);


function reset(){  
  document.getElementByClass("container").reset();  
}   
