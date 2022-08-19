const complimentBtn = document.getElementById("complimentButton")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

complimentBtn.addEventListener('click', getCompliment)

const fortuneBtn = document.querySelector('#fortuneButton')

const getFortune = () => {
    axios.get('http://localhost:4000/api/fortune/')
    .then((res) => {
        const data = res.data
        alert(data)
    })
}

fortuneBtn.addEventListener('click', getFortune)

const addGoal = (body) => {
    axios.post('http://localhost:4000/api/goals/', body)
    .then((res) => {
        const printData = document.createElement('p')
        printData.textContent = res.data
        document.querySelector('body').appendChild(printData)
    })
}

const vacationBtn = document.querySelector('#vacationButton')

const randomVacation = () => {
    axios.get('http://localhost:4000/api/vacations/')
    .then((res) => {
        const data = res.data
        alert(data)
    })
}

vacationBtn.addEventListener('click', randomVacation)

const submitHandler = (e) => {
    e.preventDefault()

    let text = document.querySelector('#addGoals')

    let bodyObj = {
        text: text.value
    }
    addGoal(bodyObj)

    text.value = ''
}

document.querySelector('form').addEventListener('submit', submitHandler)

const deleteBtn = document.querySelector('#delete')

const deleteGoals = () => {
    axios.delete('http://localhost:4000/api/goals/')
    .then((res) => {
        const data = res.data
        alert(data)
    })
}

deleteBtn.addEventListener('click', deleteGoals)

const inspoBtn = document.querySelector('#inspirationButton')

const getInspo = () => {
    axios.get('http://localhost:4000/api/inspiration/')
    .then((res) => {
        const data = res.data
        alert(data)
    })
}

inspoBtn.addEventListener('click', getInspo)

