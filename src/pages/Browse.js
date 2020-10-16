import React from 'react'
import BrowseContainer from '../containers/BrowseContainer'
import { useContent } from '../hooks'
import selectionFilter from './utils/selectionFilter'

export default function Browse() {

    const { series } = useContent('series')
    const { films } = useContent('films')
    const slides = selectionFilter({ series, films })
    console.log(slides)
    return (
        <BrowseContainer slides={slides} />
    )
}
