const { courseModel } = require('../models');
const { courseValidations } = require('../validations');

class Course {
    getCourses() {
        return 'all courses'
    }

    getCourseById(courseId) {
        return 'course';
    }

    updateCourse(courseId, course) {
        console.log(courseId, course);
        return 'update course';
    }

    async createCourse(course) {
        await  courseValidations.validateAsync(course);
        const result = await courseModel.create(course);
        return result;
    }

    deleteCourse(courseId) {
        return 'course Id'
    }
}

module.exports = new Course();