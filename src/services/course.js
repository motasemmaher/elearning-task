const { courseModel } = require('../models');
const { courseValidations, sharedValidations } = require('../validations');
const { constant, validate } = require('../lib');

class Course {
    async getCourses() {
        const course = await courseModel.find();
        return course
    }

    async getCourseById(courseId) {
        await validate(sharedValidations.idValidations, { _id: courseId });
        const course = await courseModel.findById(courseId);
        return course
    }

    async updateCourse(courseId, course) {
        await validate(courseValidations, course, constant.VALIDATIONS_ALTER_KEYS.update);
        await validate(sharedValidations.idValidations, { _id: courseId });
        const result = await courseModel.updateOne({ _id: courseId }, course);
        return result;
    }

    async createCourse(course) {
        await validate(courseValidations, course, constant.VALIDATIONS_ALTER_KEYS.create);
        const result = await courseModel.create(course);
        return result;
    }

    async deleteCourse(courseId) {
        await validate(sharedValidations.idValidations, { _id: courseId });
        const result = await courseModel.deleteOne({ _id: courseId });
        return result;
    }
}

module.exports = new Course();