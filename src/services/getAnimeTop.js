export const getAnimeTop = async () =>{
    try {
        const responseData = await fetch('https://api.jikan.moe/v4/top/anime')
        const animeJson = await responseData.json()
        const animeList = animeJson.data
        return animeList
      } catch (error) {
        console.log(error)
      }
} 