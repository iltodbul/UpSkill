﻿namespace UpSkill.Services.Data.Contracts.Course
{
    using System.Threading.Tasks;

    using Common;
    using Web.ViewModels.Course;

    public interface ICoursesService
    {
        Task<Result> CreateAsync(CreateCourseViewModel model);

        Task<Result> EditAsync(EditCourseViewModel model);

        Task<Result> DeleteAsync(int id);

        Task<TModel> GetByIdAsync<TModel>(int id);

        Task RequestCourseAsync(RequestCourseViewModel model);
    }
}
