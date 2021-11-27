import './myLabel.css';

export interface MyLabelProps {
  /**
   * Este es el mensaje a mostrar en la etiqueta
   */
  label: string;
  /**
   * Este es el tamaño de la etiqueta
   */
  size: 'normal' | 'h1' | 'h3';
  /**
   * Establece si el texto esta en mayúsculas o no
   */
  allCaps?: boolean;
  /**
   * Este es el color de la etiqueta
   */
  color?: 'primary' | 'secondary' | 'tertiary';
  /**
   * Color personalizado de la fuente
   */
  fontColor?: string;
  /**
   * Color personalizado para el fondo
   */
  backgroundColor?: string;
}

export const MyLabel = ({
  label = 'No Label',
  size = 'normal',
  allCaps = false,
  color = 'primary',
  fontColor,
  backgroundColor = 'transparent',
}: MyLabelProps) => {
  return (
    <span
      className={`label ${size} text-${color}`}
      style={{ color: fontColor, backgroundColor }}>
      {allCaps ? label.toUpperCase() : label}
    </span>
  );
};
