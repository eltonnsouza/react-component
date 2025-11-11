export function ListProdutosV1() {
    return (
        <div>
            <h1>Listar</h1>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div
                    style={{
                        backgroundColor: '#222', display: "flex",
                        justifyContent: 'space-between', paddingRight: '30px',
                        paddingLeft: '30px', color: '#fff', borderRadius: '20px',
                        cursor: 'pointer'
                    }}
                >
                    <p>Camisa 1</p>
                    <p>R$ 200,00</p>
                </div>

                <div style={{
                    backgroundColor: '#222', display: "flex",
                    justifyContent: 'space-between', paddingRight: '30px',
                    paddingLeft: '30px', color: '#fff', borderRadius: '20px',
                    cursor: 'pointer'
                }}>
                    <p>Camisa 2</p>
                    <p>R$ 240,00</p>
                </div>

                <div
                    style={{
                        backgroundColor: '#222', display: "flex",
                        justifyContent: 'space-between', paddingRight: '30px',
                        paddingLeft: '30px', color: '#fff', borderRadius: '20px',
                        cursor: 'pointer'
                    }}
                >
                    <p>Camisa 3</p>
                    <p>R$ 280,00</p>
                </div>

                <div
                    style={{
                        backgroundColor: '#222', display: "flex",
                        justifyContent: 'space-between', paddingRight: '30px',
                        paddingLeft: '30px', color: '#fff', borderRadius: '20px',
                        cursor: 'pointer'
                    }}>
                    <p>Camisa 4</p>
                    <p>R$ 300,00</p>
                </div>
            </div>
        </div>
    )
}