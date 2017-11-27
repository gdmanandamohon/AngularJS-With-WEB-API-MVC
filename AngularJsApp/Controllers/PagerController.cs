using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Mvc;

namespace AngularJsApp.Controllers
{
    public class PagerController : ApiController
    {

        public IEnumerable<System.Web.Mvc.SelectListItem> Get()
        {
            List<System.Web.Mvc.SelectListItem> page = new List<System.Web.Mvc.SelectListItem>
            {
                new System.Web.Mvc.SelectListItem
                {
                    Text = "1",
                    Value = "1"
                },
                new System.Web.Mvc.SelectListItem
                {
                    Text = "2",
                    Value = "2"
                },
                new System.Web.Mvc.SelectListItem
                {
                    Text = "3",
                    Value = "3"
                }
            };
            return page;
        }  
    }
}