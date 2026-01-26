export interface IStructureMessage {
    nombre?: string;
    email?: string;
    asunto?: string;
    mensaje?: string;
}
export default function structureMessage({ nombre, email, asunto, mensaje }: IStructureMessage): string {
    const message = [];
    if (nombre) message.push(`Soy *${nombre}*.%0a`);
    if (email) message.push(`Mi correo es: ${email}%0a`);
    if (asunto) message.push(`Asunto:%0a`, asunto, '%0a');
    if (mensaje) message.push(`Mensaje:%0a`, mensaje);
    if (!nombre && !email && !asunto && !mensaje)
        message.push('Hola, quisiera saber más sobre Auténtica de mi pueblo.');

    return message.join('');
}
