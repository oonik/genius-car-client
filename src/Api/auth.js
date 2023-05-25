export const setAuthToken = (user) =>{
    const currentUser = {
        email: user?.email
      };
      fetch('https://genius-car-server-two-alpha.vercel.app/jwt', {
        method: 'POST',
        headers: {
          'content-type':'application/json'
        },
        body: JSON.stringify(currentUser)
      })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        // local storage is not the best place to store jwt token(easy system)
        localStorage.setItem('genius-token',data.token) 
        
      });
}
