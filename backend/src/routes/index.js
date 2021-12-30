const { Router } = require('express');
const router = Router();
const faker = require('faker');
const article = require('../models/articles')

router.get('/create', async(req, res) => {
    /*console.log(faker.image.imageUrl());
    console.log(faker.name.title());
    console.log(faker.lorem.paragraph());
    res.send('Hola Mundo')*/
    for(let i=0; i<100; i++){
        await article.create({
            title:faker.name.title(),
            imageUrl:faker.image.imageUrl(),
            description:faker.lorem.paragraph()
        })
    }
    res.json({message:'100 records created'});
})

router.get('/articles', (req, res) => {
    /* console.log(faker.image.imageUrl());
    console.log(faker.name.title());
    console.log(faker.lorem.paragraph());
    res.send('Hola Mundo') 
    const articles = await article.find();
    res.json({articles})*/
})

module.exports = router;