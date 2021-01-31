from kinopoisk.movie import Movie

movie = Movie(id=591914)
movie.get_content('main_page')

print("Yee - " + str(movie.title) + str(movie.title_en))