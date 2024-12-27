import { Text } from "@react-three/drei"
import { fadeOnBeforeCompile, fadeOnBeforeCompileFlat } from "../utils/fadeMaterial"

export const TextSection = ({title, subtitle, ...props})=> {
    return (
        <group {...props}>

        {/* render it only if there is a title */}
        { !!title && (
            <Text
            color="white"
            anchorX={"left"}
            anchorY={"bottom"}
            fontSize={0.52}
            maxWidth={2.5}
            lineHeight={1}
            font={"./fonts/DMSerifDisplay-Regular.ttf"}
            >
                {title}
                <meshStandardMaterial color={"white"} onBeforeCompile={fadeOnBeforeCompileFlat} />
            </Text>
        )}

        <Text
        color="white"
        anchorX={"left"}
        anchorY={"top"}
        fontSize={0.2}
        maxWidth={2.5}
        font={"./fonts/Inter-Regular.ttf"}
        >
          {subtitle}
        </Text>
      </group>
    )
}