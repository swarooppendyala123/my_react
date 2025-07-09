function App() {
  async function handleClick(re){
    let state = 'Pending';
    console.log(state);
    const promise = new Promise ((resolve, reject) => {
      if (re){
        resolve("resolved")
        state = 'resolve';
      } else {
        reject("rejected")
        state = 'reject'
      }
    })
    try {
      const message = await promise;
      console.log('✅ Success:', message, state);
    } catch(error){
      console.error('❌ Error:', error, state);
    }
}
return (
  <>
      <button onClick= {() => handleClick(true)}>Resolve</button>
      <button onClick = {() => handleClick(false)}>Reject</button>
  </>   
)
}

export default App;
