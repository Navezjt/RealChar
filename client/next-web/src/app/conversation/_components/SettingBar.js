import SpeakerControl from './SpeakerControl';
import MicrophoneControl from './MicrophoneControl';
import LanguageModelControl from './LanguageModelControl';
import ShareButton from './ShareButton';
import SettingsButton from './SettingsButton';
import { Avatar } from '@nextui-org/avatar';
import { useAppStore } from '@/lib/store';

export default function SettingBar({
  isTextMode,
  isMute,
  toggleMute,
}) {
  const { character } = useAppStore();

  return (
    <>
    <div className={`flex flex-row px-4 ${isTextMode?"justify-center":"justify-end"} md:hidden`}>
    { isTextMode && (
      <div className="flex gap-1 items-center">
        <Avatar
          name={character.name}
          src={character.image_url}
        />
        <span className="pl-2">{character.name}</span>
        <div>
          <SpeakerControl
            isMute={isMute}
            toggleMute={toggleMute}
          />
        </div>
      </div>
      )
    }
    </div>
    <div className="hidden md:flex justify-between">
      <div className="flex gap-6">
        <SpeakerControl
          isMute={isMute}
          toggleMute={toggleMute}
        />
        {!isTextMode && (
          <MicrophoneControl/>
        )}
      </div>
      { isTextMode && (
        <div className="flex gap-1 items-center">
          <Avatar
            name={character.name}
            src={character.image_url}
          />
          <span className="lg:text-3xl">{character.name}</span>
        </div>
        )
      }
      <div className="flex gap-8">
        <LanguageModelControl/>
        <ShareButton/>
        <SettingsButton/>
      </div>
    </div>
    {!isTextMode && (
      <div className="mt-4 sm:mt-6">
        <Avatar
          name={character.name}
          src={character.image_url}
          classNames={{
            base: "block w-56 h-56 md:w-60 md:h-60 mx-auto"
          }}
        />
        <p className="text-center font-medium text-2xl sm:text-3xl mt-4">{character.name}</p>
      </div>
    )}
    </>
  );
}
