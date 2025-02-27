import { FormEvent, useRef } from "react";
import { AppButton } from "../../atoms/AppButton/AppButton";
import AppInput from "../../atoms/AppInput/AppInput";
interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onSubmit: (data: any) => void;
  setPreviewImage: (preview: string) => void;
  data: {
    title: string;
    ticketPrice: string;
  };
  onChange: (data: { title: string; ticketPrice: string }) => void;
  handlePreview: () =>void
}

export const FormCreateRaffle = ({
  onSubmit,
  setPreviewImage,
  onChange,
  data,
  handlePreview
}: Props) => {
  const title = useRef<HTMLInputElement | null>(null);
  const description = useRef<HTMLTextAreaElement | null>(null);
  const image = useRef<HTMLInputElement | null>(null);
  const priceTicket = useRef<HTMLInputElement | null>(null);
  const date = useRef<HTMLInputElement | null>(null);
  const countTickets = useRef<HTMLInputElement | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setPreviewImage("");
    }
  };

  const sendData = (e: FormEvent) => {
    e.preventDefault();
    onSubmit({
      title: title.current?.value,
      description: description.current?.value,
      image: image.current?.files?.[0], // Enviar el archivo de imagen
      priceTicket: priceTicket.current?.value,
      date: date.current?.value,
      countTickets: countTickets.current?.value,
    });
  };

  return (
    <form onSubmit={sendData} className="grid grid-cols-2 gap-4">
    {/* Nombre de la rifa */}
    <div className="grid">
      <AppInput
        type="text"
        placeholder="Nombre de la rifa"
        label="Nombre:"
        ref={title}
        onChange={(newData) => onChange({ ...data, title: newData })}
      />
    </div>
  
    {/* Fecha del sorteo */}
    <div className="grid">
      <AppInput type="date" label="Fecha del sorteo" ref={date} />
    </div>
  
    {/* Descripción (ocupa dos columnas) */}
    <div className="col-span-2">
      <label htmlFor="description">Descripcion:</label>
      <textarea
        name="description"
        id="description"
        placeholder="Agrega la descripcion"
        ref={description}
        className="p-3 border w-full"
      ></textarea>
    </div>
  

    {/* Precio del ticket */}
    <AppInput
      type="number"
      placeholder="1$"
      label="Precio del ticket"
      ref={priceTicket}
      onChange={(newData) => onChange({ ...data, ticketPrice: newData })}
    />
  
    {/* Cantidad de tickets a sortear */}
    <AppInput
      type="number"
      placeholder="100..."
      label="Cantidad de tickets a sortear"
      ref={countTickets}
    />
      {/* Agrega el cover */}
      <div className="grid">
      <label htmlFor="file">Agrega el cover</label>
      <input
        type="file"
        name="file"
        id="file"
        ref={image}
        onChange={handleImageChange}
        accept="image/*"
      />
    </div>
  
    {/* Botón de crear sorteo */}
    <div className="col-span-2 flex justify-end gap-2 ">
    <AppButton title="Vista previa" appearance="text" onClick={handlePreview}/>
    <AppButton title="Crear sorteo" />
    </div>
  </form>
  );
};
