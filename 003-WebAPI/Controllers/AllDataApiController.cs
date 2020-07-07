using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using QualishTestBLL;
using System;

namespace QualishTest
{
	[Route("api")]
	[ApiController]
	public class AllDataApiController : ControllerBase
	{
		private readonly IAllDataRepository allDataRepository;
		public AllDataApiController(IAllDataRepository _allDataRepository)
		{
			allDataRepository = _allDataRepository;
		}

		[HttpGet]
		[Route("alldata")]
		public IActionResult GetAllAppointments()
		{
			try
			{
				AllData allData = allDataRepository.GetAllData();
				return Ok(allData);
			}
			catch (Exception ex)
			{
				Errors errors = ErrorsHelper.GetErrors(ex);
				return StatusCode(StatusCodes.Status500InternalServerError, errors);
			}
		}
	}
}
