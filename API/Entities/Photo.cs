using System.ComponentModel.DataAnnotations.Schema;

namespace API.Entities
{
    [Table("Photos")]
    public class Photo
    {
        public int Id { get; set; }
        public string Url { get; set; }
        public bool IsMain { get; set; }
        public string PublicId { get; set; }

        // Fully definig the relationship b/w AppUser and Photo
        public AppUser AppUser { get; set; } // Cannot be null
        public int AppUserId { get; set; }
    }
}