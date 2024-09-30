const fan = document.getElementById('fanImage');
const speedButton = document.getElementById('speedButton');
const fanVideo = document.getElementById('fanVideo'); // Video element
const progressBar = document.getElementById('progressBar'); // Progress bar element
let speed = 4; // Start with a higher initial speed for smoother rotation (in seconds)
const speedThreshold = 100; // Total percentage for the progress bar to fill
let currentProgress = 0; // Current progress in percentage

speedButton.addEventListener('click', () => {
  // Increase current progress on button click
  currentProgress += 8; // Increase progress by 10% for each click

  // Ensure progress does not exceed 100%
  if (currentProgress > speedThreshold) {
    currentProgress = speedThreshold;
  }

  // Update the progress bar width
  progressBar.style.width = `${currentProgress}%`;

  // Increase fan speed by reducing the animation duration by 20% of the current speed
  speed *= 0.8; // Reduce duration to 80% of the current speed
  fan.style.animationDuration = `${speed}s`; // Update the fan's rotation speed

  // Check if the progress is complete to play the video
  if (currentProgress >= speedThreshold) {
    fanVideo.style.display = 'block'; // Show the video
    fanVideo.play(); // Play the video automatically
    
    // Hide the fan and button after a short delay when the video starts
    setTimeout(() => {
      fan.style.display = 'none'; // Hide the fan
      speedButton.style.display = 'none'; // Hide the button
    }, 1000); // Delay to allow video to start playing before hiding the elements
  }
});

