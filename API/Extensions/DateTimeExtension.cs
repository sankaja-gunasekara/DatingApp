using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Extensions
{
    public static class DateTimeExtension
    {
        public static int CalculateAge(this DateTime dob) { // this - adding an extension to the DateTime class
            var today = DateTime.Today;
            var age = today.Year - dob.Year; 
            if (dob.Date > today.AddYears(-age)) age--;
            return age;
        }
    }
}