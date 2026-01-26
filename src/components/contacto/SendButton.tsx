import type { IStructureMessage } from './structureMessage';
import structureMessage from './structureMessage';

export default function SendButton({ state }: { state: IStructureMessage }) {
    return (
        <a
            href={'https://wa.me/523334906904/?text=' + structureMessage(state)}
            target="_blank"
            className="text-center block mx-auto mt-10 outline-yellow-800 hover:bg-yellow-900 bg-yellow-800 text-white rounded p-2.5"
        >
            Enviar tu mensaje
        </a>
    );
}
