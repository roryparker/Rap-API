const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

let rappers = {
    '21 savage': {
        'age': 28,
        'birthName': 'Shéyaa Bin Abraham-Joseph',
        'birthdate': '22 October 1992',
        'birthLocation': 'London, England',
        'origin': 'Atlanta, Georgia',
        'genre': 'hip hop, trap, rap, horrorcore',
        'occupation': 'rapper, songwriter, record producer',
        'yearsActive': '2013-present',
        'labels': 'Epic, Slaughter Gang',
        'children': 3
    },
    'Chance the Rapper': {
        'age': 28,
        'birthName': 'Chancelor Jonathan Bennett',
        'birthdate': 'April 16, 1993',
        'birthLocation': 'London, England',
        'origin': 'Chicago, Illinois',
        'genre': 'hip hop, alternative hip hop, r & b',
        'occupation': 'rapper, singer, song writer, record producer, activist, actor, philanthropist',
        'yearsActive': '2011-present',
        'labels': 'none',
        'children': 0
    },
    'Jay Z': {
        'age': '51',
        'birthName': 'Shawn Corey Carter',
        'birthdate': 'December 4, 1969',
        'birthLocation': 'New York City, New York',
        'origin': 'New York City',
        'genre': 'Rap, Hip Hop',
        'occupation': 'Rapper, Clothing Designer',
        'yearsActive': '20',
        'labels': 'Roc Nation, Atlantic, Def Jam, Roc-A-Fella, Priority',
        'children': '3'
    },
    'Nikki Minaj': {
        'age': 'unknown',
        'birthName': 'unknown',
        'birthdate': 'unknown',
        'birthLocation': 'unknown',
        'origin': 'unknown',
        'genre': 'unknown',
        'occupation': 'unknown',
        'yearsActive': 'unknown',
        'labels': 'unknown',
        'children': 'unknown'
    },
    'unknown': {
        'age': 'unknown',
        'birthName': 'unknown',
        'birthdate': 'unknown',
        'birthLocation': 'unknown',
        'origin': 'unknown',
        'genre': 'unknown',
        'occupation': 'unknown',
        'yearsActive': 'unknown',
        'labels': 'unknown',
        'children': 'unknown'
    },
    'unknown': {
        'age': 'unknown',
        'birthName': 'unknown',
        'birthdate': 'unknown',
        'birthLocation': 'unknown',
        'origin': 'unknown',
        'genre': 'unknown',
        'occupation': 'unknown',
        'yearsActive': 'unknown',
        'labels': 'unknown',
        'children': 'unknown'
    },
    'unknown': {
        'age': 'unknown',
        'birthName': 'unknown',
        'birthdate': 'unknown',
        'birthLocation': 'unknown',
        'origin': 'unknown',
        'genre': 'unknown',
        'occupation': 'unknown',
        'yearsActive': 'unknown',
        'labels': 'unknown',
        'children': 'unknown'
    },
    'unknown': {
        'age': 'unknown',
        'birthName': 'unknown',
        'birthdate': 'unknown',
        'birthLocation': 'unknown',
        'origin': 'unknown',
        'genre': 'unknown',
        'occupation': 'unknown',
        'yearsActive': 'unknown',
        'labels': 'unknown',
        'children': 'unknown'
    },
    'unknown': {
        'age': 'unknown',
        'birthName': 'unknown',
        'birthdate': 'unknown',
        'birthLocation': 'unknown',
        'origin': 'unknown',
        'genre': 'unknown',
        'occupation': 'unknown',
        'yearsActive': 'unknown',
        'labels': 'unknown',
        'children': 'unknown'
    },
    'unknown': {
        'age': 'unknown',
        'birthName': 'unknown',
        'birthdate': 'unknown',
        'birthLocation': 'unknown',
        'origin': 'unknown',
        'genre': 'unknown',
        'occupation': 'unknown',
        'yearsActive': 'unknown',
        'labels': 'unknown',
        'children': 'unknown'
    },
    'unknown': {
        'age': 'unknown',
        'birthName': 'unknown',
        'birthdate': 'unknown',
        'birthLocation': 'unknown',
        'origin': 'unknown',
        'genre': 'unknown',
        'occupation': 'unknown',
        'yearsActive': 'unknown',
        'labels': 'unknown',
        'children': 'unknown'
    },
    'unknown': {
        'age': 'unknown',
        'birthName': 'unknown',
        'birthdate': 'unknown',
        'birthLocation': 'unknown',
        'origin': 'unknown',
        'genre': 'unknown',
        'occupation': 'unknown',
        'yearsActive': 'unknown',
        'labels': 'unknown',
        'children': 'unknown'
    },
    'unknown': {
        'age': 'unknown',
        'birthName': 'unknown',
        'birthdate': 'unknown',
        'birthLocation': 'unknown',
        'origin': 'unknown',
        'genre': 'unknown',
        'occupation': 'unknown',
        'yearsActive': 'unknown',
        'labels': 'unknown',
        'children': 'unknown'
    },
    'unknown': {
        'age': 'unknown',
        'birthName': 'unknown',
        'birthdate': 'unknown',
        'birthLocation': 'unknown',
        'origin': 'unknown',
        'genre': 'unknown',
        'occupation': 'unknown',
        'yearsActive': 'unknown',
        'labels': 'unknown',
        'children': 'unknown'
    },
    'unknown': {
        'age': 'unknown',
        'birthName': 'unknown',
        'birthdate': 'unknown',
        'birthLocation': 'unknown',
        'origin': 'unknown',
        'genre': 'unknown',
        'occupation': 'unknown',
        'yearsActive': 'unknown',
        'labels': 'unknown',
        'children': 'unknown'
    },
    'unknown': {
        'age': 'unknown',
        'birthName': 'unknown',
        'birthdate': 'unknown',
        'birthLocation': 'unknown',
        'origin': 'unknown',
        'genre': 'unknown',
        'occupation': 'unknown',
        'yearsActive': 'unknown',
        'labels': 'unknown',
        'children': 'unknown'
    },
    'unknown': {
        'age': 'unknown',
        'birthName': 'unknown',
        'birthdate': 'unknown',
        'birthLocation': 'unknown',
        'origin': 'unknown',
        'genre': 'unknown',
        'occupation': 'unknown',
        'yearsActive': 'unknown',
        'labels': 'unknown',
        'children': 'unknown'
    },
    'unknown': {
        'age': 'unknown',
        'birthName': 'unknown',
        'birthdate': 'unknown',
        'birthLocation': 'unknown',
        'origin': 'unknown',
        'genre': 'unknown',
        'occupation': 'unknown',
        'yearsActive': 'unknown',
        'labels': 'unknown',
        'children': 'unknown'
    }
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response) => {
    const rapperName = request.params.name.toLowerCase()
    if (rappers[rapperName]) {
        response.json(rappers[rapperName])
    } else {
        response.json(rappers['unknown'])
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server running on port ${PORT}`)
})