import React, { useRef, useState, useEffect, useCallback } from 'react';
import { Volume2, Play } from 'lucide-react';
import { salesContent } from '../data/salesContent';

export const VideoPlayer: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    const playAttempt = () => {
      const p = video.play();
      if (p && typeof p.catch === 'function') {
        p.catch(() => {});
      }
    };

    playAttempt();
    video.addEventListener('canplay', playAttempt);
    return () => {
      video.removeEventListener('canplay', playAttempt);
    };
  }, []);

  const handleTimeUpdate = useCallback(() => {
    const video = videoRef.current;
    if (!video || !video.duration || Number.isNaN(video.duration)) return;
    setProgress((video.currentTime / video.duration) * 100);
  }, []);

  const handleEnableSound = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;
    video.muted = false;
    video.volume = 1;
    video.currentTime = 0;
    setProgress(0);
    setIsMuted(false);
    setIsPlaying(true);
    const p = video.play();
    if (p && typeof p.catch === 'function') {
      p.catch(() => {});
    }
  }, []);

  const handleTogglePlay = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  }, []);

  return (
    <div id="video-wrapper" className="mx-auto mb-2 w-full max-w-[320px] sm:max-w-[360px] px-1">
      <div
        id="video-container"
        className="relative w-full overflow-hidden rounded-3xl shadow-2xl cursor-pointer select-none bg-slate-950"
        style={{ aspectRatio: '9 / 16' }}
        onClick={handleTogglePlay}
      >
        <video
          ref={videoRef}
          poster={salesContent.hero.video.poster}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onTimeUpdate={handleTimeUpdate}
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src={salesContent.hero.video.mp4} type="video/mp4" />
          <source src={salesContent.hero.video.remoteMp4Fallback} type="video/mp4" />
        </video>

        {/* Big sound activation button overlay */}
        {isMuted && (
          <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none p-4">
            <button
              id="btn-enable-sound"
              type="button"
              onClick={handleEnableSound}
              className="pointer-events-auto flex aspect-square w-40 sm:w-48 flex-col items-center justify-center gap-2.5 border border-white/40 bg-blue-600/40 p-4 backdrop-blur-md rounded-2xl transition-all duration-200 hover:bg-blue-600/60 hover:scale-105 active:scale-95 shadow-xl"
            >
              <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white text-blue-600 shadow-lg">
                <Volume2 className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <span className="text-center text-[11px] sm:text-[13px] font-black leading-tight tracking-tight text-white uppercase drop-shadow-sm">
                APERTE PARA ATIVAR O SOM
              </span>
            </button>
          </div>
        )}

        {/* Pause indicator overlay */}
        {!isPlaying && !isMuted && (
          <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/40 pointer-events-none">
            <div className="rounded-full bg-white/25 p-5 backdrop-blur-sm">
              <Play className="h-12 w-12 text-white fill-white ml-1" />
            </div>
          </div>
        )}

        {/* Video progress indicator line */}
        <div className="absolute bottom-0 left-0 right-0 h-2 sm:h-3 z-30 bg-white/20">
          <div
            className="h-full transition-[width] duration-150 ease-linear"
            style={{
              width: `${progress}%`,
              background: `linear-gradient(90deg, #3b82f6, ${salesContent.brand.primary})`,
            }}
          />
        </div>
      </div>
    </div>
  );
};
