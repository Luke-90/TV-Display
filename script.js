<!DOCTYPE html>
<html>
<head>
    <title>My Web Page</title>
    <script>
    setInterval(function() {
        document.querySelector('.timetable tbody').insertBefore(
            document.querySelector('.timetable tbody').firstChild,
            null
        );
    }, 5000); // Every 5 seconds, move the first row to the bottom
</script>
</head>
<body>
    <h1>Welcome to My Web Page</h1>
</body>
</html>
