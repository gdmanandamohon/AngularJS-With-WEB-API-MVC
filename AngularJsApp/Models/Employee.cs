using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace AngularJsApp.Models
{
    [Table("Employee")]
    public class Employee
    {
        public long EmployeeId
        {
            get;
            set;
        }
        [Required]
        [StringLength(20)]
        public string FirstName
        {
            get;
            set;
        }
        [Required]
        [StringLength(20)]
        public string LastName
        {
            get;
            set;
        }
        [Required]
        [StringLength(100)]
        public string Description
        {
            get;
            set;
        }
        public decimal Salary
        {
            get;
            set;
        }
        /*[Required]*/
        [StringLength(50)]
        public string Country
        {
            get;
            set;
        }
        /*[Required]*/
        [StringLength(50)]
        public string State
        {
            get;
            set;
        }
        public DateTime DateofBirth
        {
            get;
            set;
        }
        public bool IsActive
        {
            get;
            set;
        }
    }   
}