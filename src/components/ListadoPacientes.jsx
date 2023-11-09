import Paciente from "./Paciente"

const ListadoPacientes = ({ pacientes, setPaciente, eliminarPaciente }) => {

    return (
        <div className="px-2 mt-4 md:w-1/2 lg:w-3/5 h-screen">

            {pacientes && pacientes.length ? (
                <>
                    <h2 className="font-bold text-2xl text-center">Listado Pacientes</h2>
                    <p className="text-lg mt-2 text-center mb-6">
                        Administra tus {''}
                        <span className="text-pink-600 font-bold">Pacientes y Cistas</span>
                    </p>

                    {pacientes.map((paciente) => (
                        <Paciente
                            key={paciente.id}
                            paciente={paciente}
                            setPaciente={setPaciente}
                            eliminarPaciente={eliminarPaciente}
                        />
                    ))}
                </>
            ) : (
                <>
                    <h2 className="font-bold text-2xl text-center">No hay pacientes</h2>
                    <p className="text-lg mt-2 text-center mb-6">
                        Comienza agregando pacientes {''}
                        <span className="text-pink-600 font-bold">y aparecerán en este lugar</span>
                    </p>
                </>
            )}
        </div>
    )
}

export default ListadoPacientes