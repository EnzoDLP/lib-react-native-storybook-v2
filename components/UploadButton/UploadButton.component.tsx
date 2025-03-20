import React, { useEffect } from 'react';
import { Text, View, Pressable, AccessibilityInfo } from 'react-native';
import IconCircleAddOutline from '../Icons/IconCircleAddOutline.component';
import ProgressBar from '../ProgressBar/ProgressBar.component';
import IconFileTextOutline from '../Icons/IconFileTextOutline.component';
import IconFileCheckSolid from '../Icons/IconFileCheckSolid.component';
import IconEyesOutline from '../Icons/IconEyesOutline.component';
import IconCircleDeleteSolid from '../Icons/IconCircleDeleteSolid.component';
import { Colors } from '../../theme';

interface UploadButtonProps {
  onPress: () => void;
  title: string;
  subTitle: string;
  error?: {
    title: string;
    subTitle: string;
  };
  loading?: {
    title: string;
    onStop: () => void;
  };
  loaded?: {
    title: string;
    size: string;
    onDelete: () => void;
    onCheck?: () => void;
  };
}

export const UploadButton = ({
  onPress,
  title,
  subTitle,
  error,
  loading,
  loaded,
}: UploadButtonProps) => {
  useEffect(() => {
    if (error) {
      AccessibilityInfo.announceForAccessibility(error.title);
    }
  }, [error]);

  if (loaded) {
    return (
      <View
        style={{
          padding: 15,
          backgroundColor: Colors.light.input.primary.background,
          borderRadius: 5,
          alignSelf: 'flex-start',
          flexDirection: 'row',
          alignItems: 'center',
          gap: 15,
          borderWidth: 1,
          borderColor: Colors.light.input.primary.border,
          borderStyle: 'solid',
          width: 325,
        }}
      >
        <View>
          <IconFileCheckSolid
            accessibilityLabel="Icône fichier chargé"
            color={Colors.light.text.link}
          />
        </View>
        <View style={{ gap: 6, flex: 1 }}>
          <Text
            style={{
              color: Colors.light.text.primary,
              fontSize: 14,
              fontWeight: '600',
              lineHeight: 20,
            }}
          >
            {loaded.title}
          </Text>
          <Text
            style={{
              color: Colors.light.text.primary,
              fontSize: 12,
              fontWeight: '400',
            }}
          >
            {loaded.size}
          </Text>
        </View>
        <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}>
          {Boolean(loaded.onCheck) && (
            <Pressable
              onPress={loaded.onCheck}
              hitSlop={{ top: 5, bottom: 5, left: 5, right: 5 }}
              accessibilityRole="button"
              accessibilityLabel="Aperçu"
              accessibilityHint="Double clic pour afficher l'aperçu du fichier."
            >
              <IconEyesOutline
                accessibilityLabel="Icône voir fichier"
                color={Colors.light.text.primary}
                size={20}
              />
            </Pressable>
          )}
          <Pressable
            onPress={loaded.onDelete}
            hitSlop={{ top: 5, bottom: 5, left: 5, right: 5 }}
            accessibilityRole="button"
            accessibilityLabel="Supprimer"
            accessibilityHint="Double clic pour supprimer le fichier."
          >
            <IconCircleDeleteSolid
              accessibilityLabel="Icône supprimer"
              color={Colors.light.text.primary}
              size={20}
            />
          </Pressable>
        </View>
      </View>
    );
  }

  if (loading) {
    return (
      <View
        style={{
          padding: 15,
          backgroundColor: Colors.light.input.primary.background,
          borderRadius: 5,
          alignSelf: 'flex-start',
          flexDirection: 'row',
          alignItems: 'center',
          gap: 15,
          borderWidth: 1,
          borderColor: Colors.light.input.primary.border,
          borderStyle: 'solid',
          width: 325,
        }}
      >
        <View style={{ opacity: 0.4 }}>
          <IconFileTextOutline
            accessibilityLabel="Icône fichier"
            color={Colors.light.text.primary}
          />
        </View>
        <View style={{ flex: 1 }}>
          <Text
            style={{
              color: Colors.light.text.primary,
              opacity: 0.4,
              fontSize: 14,
              fontWeight: '600',
              lineHeight: 20,
            }}
          >
            {loading.title}
          </Text>
          <View style={{ gap: 15, alignItems: 'center', flexDirection: 'row' }}>
            <View style={{ flex: 1 }}>
              <ProgressBar progress={10} />
            </View>
            <Pressable
              onPress={loading.onStop}
              hitSlop={{ top: 5, bottom: 5, left: 5, right: 5 }}
              accessibilityLabel="Arrêter"
              accessibilityRole="button"
              accessibilityHint="Double clic pour arrêter le chargement du fichier."
            >
              <IconCircleDeleteSolid
                accessibilityLabel="Icône fichier chargé"
                color={Colors.light.text.primary}
                size={20}
              />
            </Pressable>
          </View>
        </View>
      </View>
    );
  }

  return (
    <View style={{ gap: 10, alignSelf: 'flex-start' }}>
      <Pressable
        style={{
          padding: 15,
          backgroundColor: Colors.light.background.green,
          borderRadius: 5,
          alignSelf: 'flex-start',
          flexDirection: 'row',
          alignItems: 'center',
          gap: 15,
          borderWidth: 1,
          borderColor: Colors.light.border.primary,
          borderStyle: 'dashed',
          width: 325,
        }}
        accessibilityRole="button"
        accessibilityLabel={`${title}, ${subTitle}`}
        accessibilityHint="Double clic pour ouvrir le sélecteur de fichier."
        onPress={onPress}
      >
        <IconCircleAddOutline
          accessibilityLabel="Icône ajouter"
          color={Colors.light.text.link}
        />
        <View style={{ gap: 6, flex: 1 }}>
          <Text
            style={{
              color: Colors.light.text.primary,
              fontSize: 14,
              fontWeight: '700',
              lineHeight: 20,
            }}
          >
            {title}
          </Text>
          <Text
            style={{
              color: Colors.light.text.secondary,
              fontSize: 12,
              fontWeight: '300',
            }}
          >
            {subTitle}
          </Text>
        </View>
      </Pressable>
      {error && (
        <View style={{ width: 325 }}>
          <Text
            style={{
              color: Colors.light.text.error,
              fontSize: 14,
              fontWeight: '600',
              lineHeight: 20,
            }}
          >
            {error.title}
          </Text>
          <Text
            style={{
              color: Colors.light.text.error,
              fontSize: 12,
              fontWeight: '400',
              lineHeight: 20,
            }}
          >
            {error.subTitle}
          </Text>
        </View>
      )}
    </View>
  );
};

export default UploadButton;
