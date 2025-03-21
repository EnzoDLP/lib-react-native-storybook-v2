import React, { useEffect } from 'react';
import { Text, View, Pressable, AccessibilityInfo } from 'react-native';
import IconCircleAddOutline from '../Icons/IconCircleAddOutline.component';
import ProgressBar from '../ProgressBar/ProgressBar.component';
import IconFileTextOutline from '../Icons/IconFileTextOutline.component';
import IconFileCheckSolid from '../Icons/IconFileCheckSolid.component';
import IconEyesOutline from '../Icons/IconEyesOutline.component';
import IconCircleDeleteSolid from '../Icons/IconCircleDeleteSolid.component';
import { Colors } from '../../theme';
import { ButtonIcon } from '../ButtonIcon/ButtonIcon.component';
import Typography from '../Typography/Typography.component';

interface UploadButtonProps {
  onPressUpload: () => void;
  title: string;
  subTitle: string;

  isError?: boolean;
  isLoading?: boolean;

  errorTitle?: string;
  errorSubtitle?: string;

  fileName?: string;
  fileSize?: string;

  onStopLoading: () => void;
  onDeleteFile: () => void;
  onCheckFile?: () => void;
}

export const UploadButton = ({
  onPressUpload,
  title,
  subTitle,
  isError = false,
  isLoading = false,
  errorTitle,
  errorSubtitle,
  fileName,
  fileSize,
  onStopLoading,
  onDeleteFile,
  onCheckFile,
}: UploadButtonProps) => {
  useEffect(() => {
    if (isError && errorTitle) {
      AccessibilityInfo.announceForAccessibility(errorTitle);
    }
  }, [isError, errorTitle]);

  if (!isLoading && fileName) {
    return (
      <View
        style={{
          padding: 15,
          backgroundColor: Colors.light.input.primary.background,
          borderRadius: 5,
          flexDirection: 'row',
          alignItems: 'center',
          gap: 15,
          borderWidth: 1,
          borderColor: Colors.light.input.primary.border,
          borderStyle: 'solid',
        }}
      >
        <View>
          <IconFileCheckSolid
            accessibilityLabel=""
            color={Colors.light.text.link}
          />
        </View>
        <View style={{ gap: 6, flex: 1 }}>
          <Typography variant="small" weight="semiBold">
            {fileName}
          </Typography>
          <Typography variant="extraSmall" weight="regular">
            {fileSize}
          </Typography>
        </View>
        <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}>
          {onCheckFile && (
            <ButtonIcon
              onPress={onCheckFile}
              accessibilityLabel="Aperçu"
              accessibilityHint="Double clic pour afficher l'aperçu du fichier."
            >
              <IconEyesOutline
                accessibilityLabel="Icône voir fichier"
                color={Colors.light.text.primary}
                size={20}
              />
            </ButtonIcon>
          )}
          <ButtonIcon
            onPress={onDeleteFile}
            accessibilityLabel="Supprimer"
            accessibilityHint="Double clic pour supprimer le fichier."
          >
            <IconCircleDeleteSolid
              accessibilityLabel="Icône supprimer"
              color={Colors.light.text.primary}
              size={20}
            />
          </ButtonIcon>
        </View>
      </View>
    );
  }

  if (isLoading) {
    return (
      <View
        style={{
          padding: 15,
          backgroundColor: Colors.light.input.primary.background,
          borderRadius: 5,
          flexDirection: 'row',
          alignItems: 'center',
          gap: 15,
          borderWidth: 1,
          borderColor: Colors.light.input.primary.border,
          borderStyle: 'solid',
        }}
      >
        <View style={{ opacity: 0.4 }}>
          <IconFileTextOutline
            accessibilityLabel=""
            color={Colors.light.text.primary}
          />
        </View>
        <View style={{ flex: 1 }}>
          <Typography
            variant="small"
            weight="semiBold"
            style={{ opacity: 0.4 }}
          >
            {fileName}
          </Typography>
          <View style={{ gap: 15, alignItems: 'center', flexDirection: 'row' }}>
            <View style={{ flex: 1 }}>
              <ProgressBar progress={10} />
            </View>
            <ButtonIcon
              onPress={onStopLoading}
              accessibilityLabel="Arrêter"
              accessibilityHint="Double clic pour arrêter le chargement du fichier."
            >
              <IconCircleDeleteSolid
                accessibilityLabel="Icône fichier chargé"
                color={Colors.light.text.primary}
                size={20}
              />
            </ButtonIcon>
          </View>
        </View>
      </View>
    );
  }

  return (
    <View style={{ gap: 10 }}>
      <Pressable
        style={{
          padding: 15,
          backgroundColor: Colors.light.background.green,
          borderRadius: 5,
          flexDirection: 'row',
          alignItems: 'center',
          gap: 15,
          borderWidth: 1,
          borderColor: Colors.light.border.primary,
          borderStyle: 'dashed',
        }}
        accessibilityRole="button"
        accessibilityLabel={`${title}, ${subTitle}`}
        accessibilityHint="Double clic pour ouvrir le sélecteur de fichier."
        onPress={onPressUpload}
      >
        <IconCircleAddOutline
          accessibilityLabel="Icône ajouter"
          color={Colors.light.text.link}
        />
        <View style={{ gap: 6, flex: 1 }}>
          <Typography variant="small" weight="bold">
            {title}
          </Typography>
          <Typography
            variant="extraSmall"
            color="secondary"
            style={{ fontWeight: '300' }}
          >
            {subTitle}
          </Typography>
        </View>
      </Pressable>
      {isError && (
        <View>
          <Typography variant="small" weight="semiBold" color="error">
            {errorTitle}
          </Typography>
          <Typography variant="small" weight="regular" color="error">
            {errorSubtitle}
          </Typography>
        </View>
      )}
    </View>
  );
};

export default UploadButton;
