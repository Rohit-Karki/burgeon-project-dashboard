export const FONT_WEIGHT = {
    BOLD: 'bold',
    SEMI: 600,
    NORMAL: 'normal',
};

const textStyles = {
    display1: {
        fontSize: '68px',
        fontWeight: 800,
        lineHeight: '83px',
    },
    display2: {
        fontSize: '32px',
        fontWeight: 800,
        lineHeight: '39px',
    },
    title1: {
        fontWeight: 600,
        fontSize: '28px',
        lineHeight: '34px',
    },
    title2: {
        fontWeight: 600,
        fontSize: "24px",
        lineHeight: "29px"
    },
    title3: {
        fontWeight: 600,
        fontSize: '18px',
        lineHeight: '22px',
    },
    body1Semi: {
        fontSize: '2rem',
        fontWeight: FONT_WEIGHT.SEMI,
        lineHeight: '2.8rem',
    },
    body1: {
        fontSize: '2rem',
        fontWeight: FONT_WEIGHT.NORMAL,
        lineHeight: '2.8rem',
    },
    body2: {
        fontSize: '1.6rem',
        fontWeight: FONT_WEIGHT.NORMAL,
        lineHeight: '2.4rem',
    },
    body2Semi: {
        fontSize: '1.6rem',
        fontWeight: FONT_WEIGHT.SEMI,
        lineHeight: '2.4rem',
    },
    buttonTextSemi: {
        fontWeight: FONT_WEIGHT.SEMI,
        fontSize: '13px',
        lineHeight: '16px',
    }
}
export default textStyles;