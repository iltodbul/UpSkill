﻿namespace UpSkill.Web.Areas.Owner.Course
{
    using System;
    using System.Collections.Generic;
    using System.Threading.Tasks;

    using Microsoft.AspNetCore.Authorization;
    using Microsoft.AspNetCore.Mvc;
    using UpSkill.Services.Data.Contracts.Owner;
    using UpSkill.Web.Infrastructure.Services;
    using UpSkill.Web.ViewModels.Course;
    using UpSkill.Web.ViewModels.Owner;

    using static Common.GlobalConstants;
    using static Common.GlobalConstants.ControllerRoutesConstants;

    [AllowAnonymous]
    public class CoursesController : OwnerBaseController
    {
        private readonly IOwnerCoursesService coursesService;
        private readonly ICurrentUserService currentUserService;

        public CoursesController(
            IOwnerCoursesService coursesService,
            ICurrentUserService currentUserService)
        {
            this.coursesService = coursesService;
            this.currentUserService = currentUserService;
        }

        [HttpPost]
        [Route(NewCourseRequest)]
        public async Task<IActionResult> RequestCourse(RequestCourseViewModel model)
        {
            try
            {
                await this.coursesService.RequestCourseAsync(model);
            }
            catch (Exception ex)
            {
                return this.BadRequest(ex.Message);
            }

            return this.Ok("👍");
        }

        [HttpPut]
        [Route("enable")]
        public async Task<IActionResult> EnableCourse(int id)
        {

            var currentUser = this.currentUserService.GetId();
            var result = await this.coursesService.EnableCourseAsync(id, currentUser);

            if (result.Failure)
            {
                return this.BadRequest(result.Error);
            }

            return this.Ok(result.Succeeded);
        }

        [HttpDelete]
        [Route("disable")]
        public async Task<IActionResult> DisableCourse(int id)
        {
            var currentUser = this.currentUserService.GetId();
            var result = await this.coursesService.DisableCourseAsync(id, currentUser);

            if (result.Failure)
            {
                return this.BadRequest(result.Error);
            }

            return this.Ok(result.Succeeded);
        }

        [HttpGet]
        [Route("getactivecourses")]
        public async Task<IEnumerable<DetailsViewModel>> GetActiveCourses()
        {
            return await this.coursesService
                             .GetActiveCoursesAsync<DetailsViewModel>(this.currentUserService.GetId());
        }

        [HttpGet]
        [Route("getavailablecourses")]
        public async Task<IEnumerable<DetailsViewModel>> GetAvailableCoursesAsync()
        {
            return await this.coursesService
                             .GetAvailableCoursesAsync<DetailsViewModel>(this.currentUserService.GetId());
        }
    }
}
