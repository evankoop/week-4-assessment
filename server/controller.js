module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    getFortune: (req, res) => {
        const fortunes = ['You will purchase a t-shirt in your future', 'You will own the Detroit Lions', 'You will be the Prime Minister of Finland', 'You will earn more than $10 in your lifetime', 'You will solve the Israel-Palestine conflict']
        let randomIndex = Math.floor(Math.random() * fortunes.length)
        let randomFortune = fortunes[randomIndex]

        res.status(200).send(randomFortune)

    },
    addGoals: (req, res) => {
        console.log(req.body)
        let {text} = req.body
        res.status(200).send(`Your new goal is ${text}`)
    },
    deleteGoals: (req, res) => {
        res.status(200).send('Goals deleted')
    },
    randomVacation: (req, res) => {
        const vacations = ['Spain', 'Mexico', 'Paris', 'London', 'Florida', 'Tokyo', 'Australia', 'Salt Lake City']
        let randomIndex = Math.floor(Math.random() * vacations.length)
        let randomVacationSpot = vacations[randomIndex]

        res.status(200).send(`You should travel to ${randomVacationSpot}`)
    },
    getInspo: (req, res) => {
        const inspiration = ['You got this!', 'You can do it!', 'You\'re so strong!', 'Get through today!']
        let randomIndex = Math.floor(Math.random() * inspiration.length)
        let randomInspiration = inspiration[randomIndex]

        res.status(200).send(randomInspiration)
    }

}