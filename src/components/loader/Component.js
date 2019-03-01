import React from 'react'
import Placeholder from 'rn-placeholder'

export let imagePlaceholder = ({ isLoaded, children })=> {
    <Placeholder.ImageContent
        lineNumber={3}
        textSize={14}
        lineSpacing={5}
        animate="fade"
        onReady={isLoaded}
    >
        { children }
    </Placeholder.ImageContent>
}