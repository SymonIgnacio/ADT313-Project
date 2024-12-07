
<?php
header("Content-Type: application/json");

$host = 'localhost';
$db = 'movieprojectdb';
$user = 'root';
$pass = '';

try {
    $pdo = new PDO("mysql:host=$host;dbname=$db", $user, $pass);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Fetch total number of movies
    $movieStmt = $pdo->query("SELECT COUNT(*) as totalMovies FROM movies");
    $totalMovies = $movieStmt->fetch(PDO::FETCH_ASSOC)['totalMovies'];

    // Fetch total number of genres
    $genreStmt = $pdo->query("SELECT COUNT(*) as totalGenres FROM genres");
    $totalGenres = $genreStmt->fetch(PDO::FETCH_ASSOC)['totalGenres'];

    // Fetch total number of actors
    $actorStmt = $pdo->query("SELECT COUNT(*) as totalActors FROM actors");
    $totalActors = $actorStmt->fetch(PDO::FETCH_ASSOC)['totalActors'];

    // Fetch total number of reviews
    $reviewStmt = $pdo->query("SELECT COUNT(*) as totalReviews FROM reviews");
    $totalReviews = $reviewStmt->fetch(PDO::FETCH_ASSOC)['totalReviews'];

    // Fetch user statistics
    $userStmt = $pdo->query("SELECT COUNT(*) as totalUsers, 
                                    SUM(CASE WHEN active = 1 THEN 1 ELSE 0 END) as activeUsers, 
                                    SUM(CASE WHEN role = 'admin' THEN 1 ELSE 0 END) as adminUsers 
                             FROM users");
    $userStats = $userStmt->fetch(PDO::FETCH_ASSOC);

    // Fetch website performance
    $performanceStmt = $pdo->query("SELECT date, dailyVisitors, trafficSource FROM website_performance");
    $performanceData = $performanceStmt->fetchAll(PDO::FETCH_ASSOC);

    // Fetch recent activity logs
    $activityStmt = $pdo->query("SELECT activity, timestamp FROM activity_logs ORDER BY timestamp DESC LIMIT 10");
    $recentActivities = $activityStmt->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode([
        'totalMovies' => $totalMovies,
        'totalGenres' => $totalGenres,
        'totalActors' => $totalActors,
        'totalReviews' => $totalReviews,
        'userStats' => $userStats,
        'performanceData' => $performanceData,
        'recentActivities' => $recentActivities
    ]);
} catch (PDOException $e) {
    echo json_encode(['error' => $e->getMessage()]);
} catch (Exception $e) {
    echo json_encode(['error' => $e->getMessage()]);
=======
<?php
header("Content-Type: application/json");

$host = 'localhost';
$db = 'movieprojectdb';
$user = 'root';
$pass = '';

try {
    $pdo = new PDO("mysql:host=$host;dbname=$db", $user, $pass);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Fetch total number of movies
    $movieStmt = $pdo->query("SELECT COUNT(*) as totalMovies FROM movies");
    $totalMovies = $movieStmt->fetch(PDO::FETCH_ASSOC)['totalMovies'];

    // Fetch total number of genres
    $genreStmt = $pdo->query("SELECT COUNT(*) as totalGenres FROM genres");
    $totalGenres = $genreStmt->fetch(PDO::FETCH_ASSOC)['totalGenres'];

    // Fetch total number of actors
    $actorStmt = $pdo->query("SELECT COUNT(*) as totalActors FROM actors");
    $totalActors = $actorStmt->fetch(PDO::FETCH_ASSOC)['totalActors'];

    // Fetch total number of reviews
    $reviewStmt = $pdo->query("SELECT COUNT(*) as totalReviews FROM reviews");
    $totalReviews = $reviewStmt->fetch(PDO::FETCH_ASSOC)['totalReviews'];

    // Fetch user statistics
    $userStmt = $pdo->query("SELECT COUNT(*) as totalUsers, 
                                    SUM(CASE WHEN active = 1 THEN 1 ELSE 0 END) as activeUsers, 
                                    SUM(CASE WHEN role = 'admin' THEN 1 ELSE 0 END) as adminUsers 
                             FROM users");
    $userStats = $userStmt->fetch(PDO::FETCH_ASSOC);

    // Fetch website performance
    $performanceStmt = $pdo->query("SELECT date, dailyVisitors, trafficSource FROM website_performance");
    $performanceData = $performanceStmt->fetchAll(PDO::FETCH_ASSOC);

    // Fetch recent activity logs
    $activityStmt = $pdo->query("SELECT activity, timestamp FROM activity_logs ORDER BY timestamp DESC LIMIT 10");
    $recentActivities = $activityStmt->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode([
        'totalMovies' => $totalMovies,
        'totalGenres' => $totalGenres,
        'totalActors' => $totalActors,
        'totalReviews' => $totalReviews,
        'userStats' => $userStats,
        'performanceData' => $performanceData,
        'recentActivities' => $recentActivities
    ]);
} catch (PDOException $e) {
    echo json_encode(['error' => $e->getMessage()]);
} catch (Exception $e) {
    echo json_encode(['error' => $e->getMessage()]);

}