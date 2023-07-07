export const Imagen = (props) => {

    const {src,width,height,alt,className} = props;

    return(
        <>
            <img src={require(src)} alt={alt} width={width} height={height} className={className}/>
        </>
    )
}

