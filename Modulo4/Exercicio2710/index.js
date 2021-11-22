const getToken = async(email, password) => {
    // const setPost = await axios({
    //     method: 'post',
    //     url: `https://private-3923c4-santandercoders809.apiary-mock.com/login`,
    //     body:{
    //         email: email,
    //         senha: password,
    //       }
    //   });
    const setPost = await fetch(`https://private-3923c4-santandercoders809.apiary-mock.com/login`,{
        method: 'POST',
        body:{
            email: email,
            senha: password,
          }
      });
    // axios.post(`https://private-3923c4-santandercoders809.apiary-mock.com/${email}`)
    console.log(await setPost.json())
    console.log(await setPost.json())
    return setPost.data
}


document.addEventListener('click', async(e) => {
    e.preventDefault();
    const buttonEl = e.target.innerText;
    if(buttonEl !== 'Log In') return
    const email = document.querySelector('.email').value
    const password = document.querySelector('.password').value
    const token = await getToken(email, password)
    console.log(password,email, token)
    localStorage.setItem('login', JSON.stringify({email: email, password: password, token: token}))
})