function howManyReindeers(reindeerTypes, gifts) {
    return gifts.map(({ country, weight: countryWeight }) => {
        
        const filterReindeers = reindeerTypes
            .filter(({ weightCapacity }) => weightCapacity <= countryWeight)
            .sort(({ weightCapacity: a }, { weightCapacity: b }) => b - a);

        let sumReindeersWeight = filterReindeers
            .reduce((acc, { weightCapacity }) => acc + weightCapacity, 0)

        const reindeers = filterReindeers
            .reduce((acc, { type, weightCapacity }) => {
                const num = Math.trunc(countryWeight / sumReindeersWeight);

                sumReindeersWeight -= weightCapacity;
                countryWeight -= num * weightCapacity;

                acc.push({ type, num });

                return acc;
            }, [])
            .filter(({ num }) => num > 0);


        return {
            country,
            reindeers: reindeers
        }
    });
}


console.log("Expected:", [
    {
        "country": "Spain",
        "reindeers": [
            {
                "type": "Electric",
                "num": 1
            },
            {
                "type": "Gasoline",
                "num": 3
            },
            {
                "type": "Diesel",
                "num": 5
            }
        ]
    },
    {
        "country": "France",
        "reindeers": [
            {
                "type": "Electric",
                "num": 1
            },
            {
                "type": "Gasoline",
                "num": 1
            },
            {
                "type": "Diesel",
                "num": 2
            }
        ]
    },
    {
        "country": "Italy",
        "reindeers": [
            {
                "type": "Electric",
                "num": 3
            },
            {
                "type": "Gasoline",
                "num": 3
            },
            {
                "type": "Diesel",
                "num": 5
            }
        ]
    }
], "Actual:", howManyReindeers([
    { type: 'Nuclear', weightCapacity: 50 },
    { type: 'Electric', weightCapacity: 10 },
    { type: 'Gasoline', weightCapacity: 5 },
    { type: 'Diesel', weightCapacity: 1 }
], [
    { country: 'Spain', weight: 30 },
    { country: 'France', weight: 17 },
    { country: 'Italy', weight: 50 }
]));

console.log("Expected:", [
    {
        "country": "Spain",
        "reindeers": [
            {
                "type": "Electric",
                "num": 1
            },
            {
                "type": "Gasoline",
                "num": 3
            },
            {
                "type": "Diesel",
                "num": 5
            }
        ]
    },
    {
        "country": "Germany",
        "reindeers": [
            {
                "type": "Gasoline",
                "num": 1
            },
            {
                "type": "Diesel",
                "num": 2
            }
        ]
    },
    {
        "country": "France",
        "reindeers": [
            {
                "type": "Electric",
                "num": 1
            },
            {
                "type": "Gasoline",
                "num": 1
            },
            {
                "type": "Diesel",
                "num": 2
            }
        ]
    },
    {
        "country": "Italy",
        "reindeers": [
            {
                "type": "Electric",
                "num": 3
            },
            {
                "type": "Gasoline",
                "num": 3
            },
            {
                "type": "Diesel",
                "num": 5
            }
        ]
    }
], "Actual:", howManyReindeers(
    [
        { type: 'Nuclear', weightCapacity: 50 },
        { type: 'Electric', weightCapacity: 10 },
        { type: 'Gasoline', weightCapacity: 5 },
        { type: 'Diesel', weightCapacity: 1 }
    ],
    [
        { country: 'Spain', weight: 30 },
        { country: 'Germany', weight: 7 },
        { country: 'France', weight: 17 },
        { country: 'Italy', weight: 50 }
    ]));
