import tagCss from './Tag.module.css';

type Props = {name: string; className?: string;}

export const Tag = ({name, className}: Props) => {
  return (
    <div className={`${tagCss.tag} ${className}`}>{name}</div>
  )
}
