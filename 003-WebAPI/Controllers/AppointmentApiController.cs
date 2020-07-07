using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using QualishTestBLL;
using System;
using System.Collections.Generic;

namespace QualishTest
{
	[Route("api")]
	[ApiController]
	public class AppointmentApiController : ControllerBase
	{
		private readonly IAppointmentRepository appointmentRepository;
		public AppointmentApiController(IAppointmentRepository _appointmentRepository)
		{
			appointmentRepository = _appointmentRepository;
		}

		[HttpGet]
		[Route("appointments")]
		public IActionResult GetAllAppointments()
		{
			try
			{
				List<Appointment> allAppointment = appointmentRepository.GetAllAppointments();
				return Ok(allAppointment);
			}
			catch (Exception ex)
			{
				Errors errors = ErrorsHelper.GetErrors(ex);
				return StatusCode(StatusCodes.Status500InternalServerError, errors);
			}
		}

		//[HttpGet]
		//[Route("appointments/{currentDate}")]
		//public IActionResult GetAppointmentsByDate(DateTime currentDate)
		//{
		//	if (currentDate == null)
		//	{
		//		return BadRequest("Data is null.");
		//	}

		//	try
		//	{
		//		List<Appointment> allAppointment = appointmentRepository.GetAppointmentsByDate(currentDate);
		//		return Ok(allAppointment);
		//	}
		//	catch (Exception ex)
		//	{
		//		Errors errors = ErrorsHelper.GetErrors(ex);
		//		return StatusCode(StatusCodes.Status500InternalServerError, errors);
		//	}
		//}

		[HttpGet]
		[Route("appointments/{startDate}/{endDate}")]
		public IActionResult GetAppointmentsByDates(DateTime startDate, DateTime endDate)
		{
			try
			{
				List<Appointment> allAppointment = appointmentRepository.GetAppointmentsByDates(startDate, endDate);
				return Ok(allAppointment);
			}
			catch (Exception ex)
			{
				Errors errors = ErrorsHelper.GetErrors(ex);
				return StatusCode(StatusCodes.Status500InternalServerError, errors);
			}
		}

		[HttpGet]
		[Route("appointments/start/{startDate}")]
		public IActionResult GetAppointmentsByStart(DateTime startDate)
		{
			try
			{
				List<Appointment> allAppointment = appointmentRepository.GetAppointmentsByStart(startDate);
				return Ok(allAppointment);
			}
			catch (Exception ex)
			{
				Errors errors = ErrorsHelper.GetErrors(ex);
				return StatusCode(StatusCodes.Status500InternalServerError, errors);
			}
		}

		[HttpGet]
		[Route("appointments/end/{endDate}")]
		public IActionResult GetAppointmentsByEnd(DateTime endDate)
		{
			try
			{
				List<Appointment> allAppointment = appointmentRepository.GetAppointmentsByEnd(endDate);
				return Ok(allAppointment);
			}
			catch (Exception ex)
			{
				Errors errors = ErrorsHelper.GetErrors(ex);
				return StatusCode(StatusCodes.Status500InternalServerError, errors);
			}
		}

		[HttpGet]
		[Route("appointments/{appointmentId}")]
		public IActionResult GetOneAppointment(int appointmentId)
		{
			try
			{
				Appointment appointment = appointmentRepository.GetOneAppointment(appointmentId);
				return Ok(appointment);
			}
			catch (Exception ex)
			{
				Errors errors = ErrorsHelper.GetErrors(ex);
				return StatusCode(StatusCodes.Status500InternalServerError, errors);
			}
		}

		[HttpPost]
		[Route("appointments")]
		public IActionResult AddAppointment(Appointment appointment)
		{
			try
			{
				if (appointment == null)
				{
					return BadRequest("Data is null.");
				}
				if (!ModelState.IsValid)
				{
					Errors errors = ErrorsHelper.GetErrors(ModelState);
					return BadRequest(errors);
				}

				Appointment addedAppointment = appointmentRepository.AddAppointment(appointment);
				return StatusCode(StatusCodes.Status201Created, addedAppointment);
			}
			catch (Exception ex)
			{
				Errors errors = ErrorsHelper.GetErrors(ex);
				return StatusCode(StatusCodes.Status500InternalServerError, errors);
			}
		}

		[HttpPut]
		[Route("appointments/{appointmentId}")]
		public IActionResult UpdateAppointment(int appointmentId, Appointment appointment)
		{
			try
			{
				if (appointment == null)
				{
					return BadRequest("Data is null.");
				}
				if (!ModelState.IsValid)
				{
					Errors errors = ErrorsHelper.GetErrors(ModelState);
					return BadRequest(errors);
				}

				appointment.appointmentId = appointmentId;
				Appointment updatedAppointment = appointmentRepository.UpdateAppointment(appointment);
				return Ok(updatedAppointment);
			}
			catch (Exception ex)
			{
				Errors errors = ErrorsHelper.GetErrors(ex);
				return StatusCode(StatusCodes.Status500InternalServerError, errors);
			}
		}

		[HttpDelete]
		[Route("appointments/{appointmentId}")]
		public IActionResult DeleteAppointment(int appointmentId)
		{
			try
			{
				int i = appointmentRepository.DeleteAppointment(appointmentId);
				if (i > 0)
				{
					return NoContent();
				}
				return StatusCode(StatusCodes.Status500InternalServerError);

			}
			catch (Exception ex)
			{
				Errors errors = ErrorsHelper.GetErrors(ex);
				return StatusCode(StatusCodes.Status500InternalServerError, errors);
			}
		}
	}
}
