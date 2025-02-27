import { useState } from "react";
import { CardProduct } from "../../molecules/CardProduct/CardProduct";
import { FormCreateRaffle } from "../../molecules/FormCreateRaffle/FormCreateRaffle";
import imageDefault from "../../../assets/empty-image.png";
import { AppButton } from "../../atoms/AppButton/AppButton";
export const RaffleCreate = () => {
  const [data, setData] = useState({
    title: "",
    ticketPrice: "",
  });

  const [previewImage, setPreviewImage] = useState<string>(imageDefault);
  const [showPreview, setShowPreview] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = (data: any) => {
    console.log(data);
  };

  const handlePreview = () => {
    setShowPreview(!showPreview);
  };

  return (
    <div className="rounded-md p-5 bg-white">
      {showPreview ? (
        <div>
          <div className="flex justify-center items-center flex-1">
            <CardProduct
              description={data.title}
              cover={previewImage}
              ticketPrice={data.ticketPrice}
            />
          </div>
          <div className="flex justify-end"> 
          <AppButton
            title="Cerrar vista previa"
            appearance="outline"
            onClick={handlePreview}
          />
          </div>
        </div>
      ) : (
        <FormCreateRaffle
          handlePreview={handlePreview}
          onChange={(data) => setData({ ...data })}
          data={data}
          onSubmit={onSubmit}
          setPreviewImage={(data) => {
            setPreviewImage(data);
          }}
        />
      )}
    </div>
  );
};
