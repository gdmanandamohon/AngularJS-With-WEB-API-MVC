using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using AngularJsApp.Models;

namespace AngularJsApp.DB
{
    public class EmployeeDbContext : DbContext
    {
        public EmployeeDbContext()
            : base()
        {
            this.Configuration.ProxyCreationEnabled = true;
            this.Configuration.LazyLoadingEnabled = true;
        }
        public DbSet<Employee> Employees{get;set;}
    }
}