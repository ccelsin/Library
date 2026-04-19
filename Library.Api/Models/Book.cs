using System;
using System.ComponentModel.DataAnnotations;

namespace Library.Api.Models;

public class Book
{
    public int Id {get; set;}
    [Required]
    public required string Title {get; set;}
    [Required]
    public required string Author {get; set;}
    [Required]
    public required DateOnly ReleaseDate{get; set;}

}
