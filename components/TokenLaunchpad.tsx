


export function TokenLaunchpad() {

    function createToken() {
        const name = (document.getElementById('name') as HTMLInputElement).value;
        const symbol = (document.getElementById('symbol') as HTMLInputElement).value;
        const image = (document.getElementById('image') as HTMLInputElement).value;
        const initialSupply = (document.getElementById('initialSupply') as HTMLInputElement).value;
    }

    return  <div style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    }}>
        <h1>Solana Token Launchpad</h1>
        <input className='inputText' type='text' placeholder='Name'></input> <br />
        <input className='inputText' type='text' placeholder='Symbol'></input> <br />
        <input className='inputText' type='text' placeholder='Image URL'></input> <br />
        <input className='inputText' type='text' placeholder='Initial Supply'></input> <br />
        <button className='btn'>Create a token</button>
    </div>
}