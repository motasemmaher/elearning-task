const express = require('express');
const { courseService } = require('../services');

const router = express.Router()

router.post('/', async (req, res) => {
    try {
        const createdCourse = await courseService.createCourse(req.body);
        res.send(createdCourse)
    } catch(err) {
        // call handle error
    }
});

router.get('/:id?', (req, res) => {
    if (req.params.id) {
        const course = courseService.getCourseById(req.params.id);
        return res.send(course);
    }
    const courses = courseService.getCourses();
    res.send(courses)
});

router.put('/:id', (req, res) => {
    const updatedCourse = courseService.updateCourse(req.params.id, req.body);
    res.send(updatedCourse)

});

router.delete('/:id', (req, res) => {
    const deletedCourse = courseService.deleteCourse(req.params.id);
    res.send(deletedCourse);

});


module.exports = router;