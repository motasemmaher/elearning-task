const express = require('express');
const { courseService } = require('../services');
const { handleErrors } = require('../lib');

const router = express.Router()

router.post('/', async (req, res) => {
    try {
        const createdCourse = await courseService.createCourse(req.body);
        res.send(createdCourse);
    } catch (err) {
        const formattedError = await handleErrors(err);
        res.status(400).send(formattedError);
    }
});

router.get('/:id?', async (req, res) => {
    try {
        if (req.params.id) {
            const course = await courseService.getCourseById(req.params.id);
            return res.send(course);
        }
        const courses = await courseService.getCourses();
        res.send(courses);
    } catch (err) {
        const formattedError = await handleErrors(err);
        res.status(400).send(formattedError);
    }
});

router.put('/:id', async (req, res) => {
    try {
        const updatedCourse = await courseService.updateCourse(req.params.id, req.body);
        res.send(updatedCourse);
    } catch(err) {
        const formattedError = await handleErrors(err);
        res.status(400).send(formattedError);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const deletedCourse = await courseService.deleteCourse(req.params.id);
        res.send(deletedCourse);
    } catch(err) {
        const formattedError = await handleErrors(err);
        res.status(400).send(formattedError);
    }
});


module.exports = router;