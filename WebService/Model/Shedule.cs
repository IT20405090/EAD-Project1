using System;
using System.ComponentModel.DataAnnotations;

public class Shedule
{
    [Key]
    public int Id { get; set; }

    [Required]
    public DateTime Date { get; set; }

    [Required]
    public TimeSpan StartTime { get; set; }

    [Required]
    public TimeSpan EndTime { get; set; }

    [Required]
    public string StartingStation { get; set; } = string.Empty;

    [Required]
    public string EndingStation { get; set; } = string.Empty;

    [Required]
    public double Duration { get; set; }

    [Required]
    public string TrainEngine { get; set; } = string.Empty;

    [Required]
    public string TrainName { get; set; } = string.Empty;

    [Required]
    public int AvailableSeats { get; set; }

    public string SpecialNotices { get; set; } = string.Empty;
}
