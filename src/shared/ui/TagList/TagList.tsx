import type { FC } from "react"
import style from './TagList.module.scss'
import Tag from "../Tag/Tag"

type ITagList = {
    tags: string[]
}

const TagList: FC<ITagList> = ({tags}) => {
  return (
    <div className={style['tag-list']}>
        {
            tags.map(el => (
                <Tag key={el}>{el}</Tag>
            ))
        }
    </div>
  )
}

export default TagList