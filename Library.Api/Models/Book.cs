using System;

namespace Library.Api.Models;

public class Book
{
    public int Id {get; set;}
    public required string Title {get; set;}
    public required string Author {get; set;}
    public required DateOnly ReleaseDate{get; set;}

}
