using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using QualishTestBLL;
using System;
using System.Collections.Generic;

namespace QualishTest
{
	[Route("api")]
	[ApiController]
	public class AppointmentImportanceApiController : ControllerBase
	{
		private readonly IAppointmentImportanceRepository appointmentImportanceRepository;
		public AppointmentImportanceApiController(IAppointmentImportanceRepository _appointmentImportanceRepository)
		{
			appointmentImportanceRepository = _appointmentImportanceRepository;
		}

		[HttpGet]
		[Route("appointmentImportances")]
		public IActionResult GetAllAppointmentImportances()
		{
			try
			{
				List<AppointmentImportance> allAppointmentImportances = appointmentImportanceRepository.GetAllAppointmentImportances();
				return Ok(allAppointmentImportances);
			}
			catch (Exception ex)
			{
				Errors errors = ErrorsHelper.GetErrors(ex);
				return StatusCode(StatusCodes.Status500InternalServerError, errors);
			}
		}

		[HttpGet]
		[Route("appointmentImportances/{importanceId}")]
		public IActionResult GetOneAppointmentImportance(int importanceId)
		{
			try
			{
				AppointmentImportance appointmentImportance = appointmentImportanceRepository.GetOneAppointmentImportance(importanceId);
				return Ok(appointmentImportance);
			}
			catch (Exception ex)
			{
				Errors errors = ErrorsHelper.GetErrors(ex);
				return StatusCode(StatusCodes.Status500InternalServerError, errors);
			}
		}

		[HttpPost]
		[Route("appointmentImportances")]
		public IActionResult AddAppointmentImportance(AppointmentImportance appointmentImportance)
		{
			try
			{
				if (appointmentImportance == null)
				{
					return BadRequest("Data is null.");
				}
				if (!ModelState.IsValid)
				{
					Errors errors = ErrorsHelper.GetErrors(ModelState);
					return BadRequest(errors);
				}

				AppointmentImportance addedAppointmentImportance = appointmentImportanceRepository.AddAppointmentImportance(appointmentImportance);
				return StatusCode(StatusCodes.Status201Created, addedAppointmentImportance);
			}
			catch (Exception ex)
			{
				Errors errors = ErrorsHelper.GetErrors(ex);
				return StatusCode(StatusCodes.Status500InternalServerError, errors);
			}
		}

		[HttpPut]
		[Route("appointmentImportances/{importanceId}")]
		public IActionResult UpdateAppointmentImportance(int importanceId, AppointmentImportance tmpAppointmentImportance)
		{
			try
			{
				if (tmpAppointmentImportance == null)
				{
					return BadRequest("Data is null.");
				}
				if (!ModelState.IsValid)
				{
					Errors errors = ErrorsHelper.GetErrors(ModelState);
					return BadRequest(errors);
				}

				tmpAppointmentImportance.importanceId = importanceId;
				AppointmentImportance updatedAppointmentImportance = appointmentImportanceRepository.UpdateAppointmentImportance(tmpAppointmentImportance);
				return Ok(updatedAppointmentImportance);
			}
			catch (Exception ex)
			{
				Errors errors = ErrorsHelper.GetErrors(ex);
				return StatusCode(StatusCodes.Status500InternalServerError, errors);
			}
		}

		[HttpDelete]
		[Route("appointmentImportances/{importanceId}")]
		public IActionResult DeleteAppointmentImportance(int importanceId)
		{
			try
			{
				int i = appointmentImportanceRepository.DeleteAppointmentImportance(importanceId);
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
