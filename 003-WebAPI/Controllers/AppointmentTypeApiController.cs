using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using QualishTestBLL;
using System;
using System.Collections.Generic;

namespace QualishTest
{
	[Route("api")]
	[ApiController]
	public class AppointmentTypeApiController : ControllerBase
	{
		private readonly IAppointmentTypeRepository appointmentTypeRepository;
		public AppointmentTypeApiController(IAppointmentTypeRepository _appointmentTypeRepository)
		{
			appointmentTypeRepository = _appointmentTypeRepository;
		}

		[HttpGet]
		[Route("appointmentTypes")]
		public IActionResult GetAllAppointmentTypes()
		{
			try
			{
				List<AppointmentType> allAppointmentTypes = appointmentTypeRepository.GetAllAppointmentTypes();
				return Ok(allAppointmentTypes);
			}
			catch (Exception ex)
			{
				Errors errors = ErrorsHelper.GetErrors(ex);
				return StatusCode(StatusCodes.Status500InternalServerError, errors);
			}
		}

		[HttpGet]
		[Route("appointmentTypes/{appointmentTypeId}")]
		public IActionResult GetOneAppointmentType(int appointmentTypeId)
		{
			try
			{
				AppointmentType appointmentType = appointmentTypeRepository.GetOneAppointmentType(appointmentTypeId);
				return Ok(appointmentType);
			}
			catch (Exception ex)
			{
				Errors errors = ErrorsHelper.GetErrors(ex);
				return StatusCode(StatusCodes.Status500InternalServerError, errors);
			}
		}

		[HttpPost]
		[Route("appointmentTypes")]
		public IActionResult AddAppointmentType(AppointmentType appointmentType)
		{
			try
			{
				if (appointmentType == null)
				{
					return BadRequest("Data is null.");
				}
				if (!ModelState.IsValid)
				{
					Errors errors = ErrorsHelper.GetErrors(ModelState);
					return BadRequest(errors);
				}

				AppointmentType addedAppointmentType = appointmentTypeRepository.AddAppointmentType(appointmentType);
				return StatusCode(StatusCodes.Status201Created, addedAppointmentType);
			}
			catch (Exception ex)
			{
				Errors errors = ErrorsHelper.GetErrors(ex);
				return StatusCode(StatusCodes.Status500InternalServerError, errors);
			}
		}

		[HttpPut]
		[Route("appointmentTypes/{appointmentTypeId}")]
		public IActionResult UpdateAppointmentType(int appointmentTypeId, AppointmentType appointmentType)
		{
			try
			{
				if (appointmentType == null)
				{
					return BadRequest("Data is null.");
				}
				if (!ModelState.IsValid)
				{
					Errors errors = ErrorsHelper.GetErrors(ModelState);
					return BadRequest(errors);
				}

				appointmentType.appointmentTypeId = appointmentTypeId;
				AppointmentType updatedAppointmentType = appointmentTypeRepository.UpdateAppointmentType(appointmentType);
				return Ok(updatedAppointmentType);
			}
			catch (Exception ex)
			{
				Errors errors = ErrorsHelper.GetErrors(ex);
				return StatusCode(StatusCodes.Status500InternalServerError, errors);
			}
		}

		[HttpDelete]
		[Route("appointmentTypes/{appointmentTypeId}")]
		public IActionResult DeleteAppointmentType(int appointmentTypeId)
		{
			try
			{
				int i = appointmentTypeRepository.DeleteAppointmentType(appointmentTypeId);
				return NoContent();
			}
			catch (Exception ex)
			{
				Errors errors = ErrorsHelper.GetErrors(ex);
				return StatusCode(StatusCodes.Status500InternalServerError, errors);
			}
		}
	}
}
