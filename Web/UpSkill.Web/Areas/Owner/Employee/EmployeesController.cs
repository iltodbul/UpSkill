﻿namespace UpSkill.Web.Areas.Company.Employee
{
    using System.Collections.Generic;
    using System.Threading.Tasks;

    using Microsoft.AspNetCore.Mvc;
   
    using UpSkill.Services.Data.Contracts.Employee;
    using UpSkill.Web.Areas.Owner;
    using UpSkill.Web.Infrastructure.Extensions;
    using UpSkill.Web.Infrastructure.Services;
    using UpSkill.Web.ViewModels.Employee;

    using static Common.GlobalConstants.ControllerRoutesConstants;

    public class EmployeesController : OwnerBaseController
    {
        private readonly IEmployeeService employeeService;
        private readonly ICurrentUserService currentUser;

        public EmployeesController(
            IEmployeeService employeeService,
            ICurrentUserService currentUser)
        {
            this.employeeService = employeeService;
            this.currentUser = currentUser;
        }

        [HttpGet]
        [Route(GetAllRoute)]
        public async Task<IEnumerable<EmployeesListingModel>> GetAll()
        {
            NLogExtensions.GetInstance().Info("Entering getAll action");
            return await this.employeeService.GetCompanyEmployeesAsync<EmployeesListingModel>(this.currentUser.GetId());
        }

    }
}
