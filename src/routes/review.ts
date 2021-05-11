import express from 'express';

const routes = express.Router();

routes.get('/', (req, res) => {
    res.render('review');
});


routes.post('/confirmation', (req, res) => {
    const review = req.body;
    res.render('review-confirmation', { review });
});

export default routes;