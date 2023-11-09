


const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {

    const { nombre, propietario, email, fecha, sintomas, id } = paciente
    
    const handleEliminar = () => {
        const respuesta = confirm('Deseas eliminar este paciente?');

        if(respuesta) {
            eliminarPaciente(id)
        }
    }

    return (

        <div className="bg-white shadow-md rounded-md py-4 px-5 mb-2">
            <p className="font-bold mb-1 text-grey-700 uppercase">
                Nombre: {''}
                <span className="font-normal normal-case">{paciente.nombre}</span>
            </p>

            <p className="font-bold mb-1 text-grey-700 uppercase">
                Propietario: {''}
                <span className="font-normal normal-case">{paciente.propietario}</span>
            </p>

            <p className="font-bold mb-1 text-grey-700 uppercase">
                Email: {''}
                <span className="font-normal normal-case">{paciente.email}</span>
            </p>

            <p className="font-bold mb-1 text-grey-700 uppercase">
                Fecha Alta: {''}
                <span className="font-normal normal-case">{paciente.nombre}fecha</span>
            </p>

            <p className="font-bold text-grey-700 uppercase">
                Sintomas: {''}
                <span className="font-normal normal-case">{paciente.sintomas}</span>
            </p>

            <div className="flex justify-between mt-4">
                <button
                    type="button" className="py-2 px-8 text-white font-bold uppercase rounded-md bg-pink-600 hover:bg-pink-900"
                    onClick={() => setPaciente(paciente)}
                >Editar</button>

                <button
                    type="button" className="py-2 px-8 text-white font-bold uppercase rounded-md bg-red-600 hover:bg-red-900"
                    onClick={handleEliminar}
                >Eliminar</button>
            </div>
        </div>

    )
}

export default Paciente