using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace API.DTOs
{
    public class RegisterDto
    {
        // Validation - [ApiController] in BaseApiController handles this validation
        // can be done in DTO level, entity level of DB level
        [Required]
        public string Username { get; set; }
        [Required]
        public string Password { get; set; }
    }
}