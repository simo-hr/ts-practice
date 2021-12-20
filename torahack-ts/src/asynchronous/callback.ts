export default function callbackSample() {
  const url = 'https://api.github.com/users/xxbbxx825'
  const fetchProfile = () => {
    fetch(url)
      .then((response) => {
        response
          .json()
          .then((json) => {
            console.log('Asynchronous Callback Sample 1', json)

            return json
          })
          .catch((error) => {
            console.error(error)
          })
      })
      .catch((error) => {
        console.error(error)
      })
  }
  const profile = fetchProfile()
  console.log('Asynchronous Callback Sample 2', profile)
}
