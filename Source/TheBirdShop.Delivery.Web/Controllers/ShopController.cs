using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Text.RegularExpressions;

namespace TheBirdShop.Delivery.Web.Controllers {
    [Route("api/[controller]")]
    public class ShopController : Controller {
        // GET api/values
        [HttpGet]        
        public IEnumerable<Bird> Get() {
            var seed = Convert.ToInt32(Regex.Match(Guid.NewGuid().ToString(), @"\d+").Value);
            var r = new Random(seed);
            
            List<Bird> birds = new List<Bird>();

            for(var i = 1; i < 11; i++) {
                birds.Add(new Bird {
                    Id = i,
                    Name = $"Bird {i}",
                    Chirps = r.Next(1, 200) % 3 == 0,
                    Flies = r.Next(1, 200) % 5 == 0,
                    Talks = r.Next(1, 200) % 6 == 0,
                    Basket = r.Next(1, 4).ToString()
                });
            }            

            return birds;
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public string Get(int id) {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]string value) {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value) {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id) {
        }
    }

    public class Bird {
        public int Id { get; set; }
        public string Name { get; set; }
        public bool Chirps { get; set; }
        public bool Flies { get; set; }
        public bool Talks { get; set; }
        public string Basket { get; set; }
    }
}
