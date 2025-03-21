import { Text, TextProps } from 'react-native';
import { Colors } from '../../theme';

type TypographyVariant = 'large' | 'medium' | 'small' | 'extraSmall';
type FontWeight = 'bold' | 'semiBold' | 'regular';
type TextColor = keyof typeof Colors.light.text;

interface TypographyProps extends TextProps {
  variant?: TypographyVariant;
  weight?: FontWeight;
  color?: TextColor;
  children: React.ReactNode;
}

const typographyStyles = {
  large: { fontSize: 18, lineHeight: 24 },
  medium: { fontSize: 16, lineHeight: 22 },
  small: { fontSize: 14, lineHeight: 20 },
  extraSmall: { fontSize: 12, lineHeight: 18 },
};

const fontWeights: Record<FontWeight, { fontWeight: '400' | '600' | '700' }> = {
  bold: { fontWeight: '700' },
  semiBold: { fontWeight: '600' },
  regular: { fontWeight: '400' },
};

const Typography: React.FC<TypographyProps> = ({
  variant = 'medium',
  weight = 'regular',
  color = 'primary',
  style,
  children,
  ...props
}) => {
  return (
    <Text
      style={[
        typographyStyles[variant],
        fontWeights[weight],
        style,
        { color: Colors.light.text[color] },
      ]}
      {...props}
    >
      {children}
    </Text>
  );
};

export default Typography;
