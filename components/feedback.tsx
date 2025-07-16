"use client"
import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/button-1";
import { Material } from "@/components/material-1";
import { Textarea } from "@/components/textarea";
import clsx from "clsx";
import { useClickOutside } from "@/components/use-click-outside";
import { toast } from "sonner";

interface FeedbackData {
  rating: number;
  comment: string;
  timestamp: string;
}

const sendToDiscord = async (data: FeedbackData, webhookUrl: string) => {
  const emojiMap = ['😍', '🙂', '😐', '😤'];
  const ratingText = ['J\'adore', 'C\'est correct', 'Pas terrible', 'Je déteste'];
  
  const embed = {
    title: '💬 Nouveau feedback reçu',
    color: 0x5865F2,
    fields: [
      {
        name: '⭐ Note',
        value: `${emojiMap[data.rating]} ${ratingText[data.rating]}`,
        inline: true
      },
      {
        name: '📝 Commentaire',
        value: data.comment || 'Aucun commentaire',
        inline: false
      },
      {
        name: '🕒 Horodatage',
        value: new Date(data.timestamp).toLocaleString('fr-FR'),
        inline: true
      }
    ],
    timestamp: new Date(data.timestamp).toISOString(),
    footer: {
      text: 'Feedback Urahost'
    }
  };

  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: 'Urahost Feedback',
        embeds: [embed]
      })
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return { success: true };
  } catch (error: any) {
    console.error('Erreur lors de l\'envoi vers Discord:', error);
    return { success: false, error: error.message };
  }
};

interface FeedbackProps {
  label: string;
  type?: "default" | "inline";
  webhookUrl?: string;
}

const MSupportedIcon = () => (
  <svg
    fill="none"
    height="14"
    viewBox="0 0 22 14"
    width="22"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      clipRule="evenodd"
      d="M19.5 1.25H2.5C1.80964 1.25 1.25 1.80964 1.25 2.5V11.5C1.25 12.1904 1.80964 12.75 2.5 12.75H19.5C20.1904 12.75 20.75 12.1904 20.75 11.5V2.5C20.75 1.80964 20.1904 1.25 19.5 1.25ZM2.5 0C1.11929 0 0 1.11929 0 2.5V11.5C0 12.8807 1.11929 14 2.5 14H19.5C20.8807 14 22 12.8807 22 11.5V2.5C22 1.11929 20.8807 0 19.5 0H2.5ZM3 3.5H4H4.25H4.6899L4.98715 3.82428L7 6.02011L9.01285 3.82428L9.3101 3.5H9.75H10H11V4.5V10.5H9V6.79807L7.73715 8.17572L7 8.97989L6.26285 8.17572L5 6.79807V10.5H3V4.5V3.5ZM15 7V3.5H17V7H19.5L17 9.5L16 10.5L15 9.5L12.5 7H15Z"
      fill="var(--ds-gray-700)"
      fillRule="evenodd"
    />
  </svg>
);

const LoveItIcon = ({ pathClassName }: { pathClassName: string }) => (
  <svg
    height="16"
    strokeLinejoin="round"
    viewBox="0 0 16 16"
    width="16"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.5 8C14.5 11.5899 11.5899 14.5 8 14.5C4.41015 14.5 1.5 11.5899 1.5 8C1.5 4.41015 4.41015 1.5 8 1.5C11.5899 1.5 14.5 4.41015 14.5 8ZM16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM4.5 8.97498H3.875V9.59998C3.875 11.4747 5.81046 12.8637 7.99817 12.8637C10.1879 12.8637 12.125 11.4832 12.125 9.59998V8.97498H11.5H4.5ZM7.99817 11.6137C6.59406 11.6137 5.63842 10.9482 5.28118 10.225H10.7202C10.3641 10.9504 9.40797 11.6137 7.99817 11.6137Z"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.15295 4.92093L5.375 3.5L4.59705 4.92093L3 5.21885L4.11625 6.39495L3.90717 8L5.375 7.30593L6.84283 8L6.63375 6.39495L7.75 5.21885L6.15295 4.92093ZM11.403 4.92093L10.625 3.5L9.84705 4.92093L8.25 5.21885L9.36625 6.39495L9.15717 8L10.625 7.30593L12.0928 8L11.8837 6.39495L13 5.21885L11.403 4.92093Z"
      className={pathClassName}
    />
  </svg>
);

const ItsOkayIcon = () => (
  <svg
    height="16"
    strokeLinejoin="round"
    viewBox="0 0 16 16"
    width="16"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.5 8C14.5 11.5899 11.5899 14.5 8 14.5C4.41015 14.5 1.5 11.5899 1.5 8C1.5 4.41015 4.41015 1.5 8 1.5C11.5899 1.5 14.5 4.41015 14.5 8ZM16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM11.5249 10.8478L11.8727 10.3286L10.8342 9.6329L10.4863 10.1522C9.94904 10.9543 9.0363 11.4802 8.00098 11.4802C6.96759 11.4802 6.05634 10.9563 5.51863 10.1567L5.16986 9.63804L4.13259 10.3356L4.48137 10.8542C5.2414 11.9844 6.53398 12.7302 8.00098 12.7302C9.47073 12.7302 10.7654 11.9816 11.5249 10.8478ZM6.75 6.75C6.75 7.30228 6.30228 7.75 5.75 7.75C5.19772 7.75 4.75 7.30228 4.75 6.75C4.75 6.19772 5.19772 5.75 5.75 5.75C6.30228 5.75 6.75 6.19772 6.75 6.75ZM10.25 7.75C10.8023 7.75 11.25 7.30228 11.25 6.75C11.25 6.19772 10.8023 5.75 10.25 5.75C9.69771 5.75 9.25 6.19772 9.25 6.75C9.25 7.30228 9.69771 7.75 10.25 7.75Z"
    />
  </svg>
);

const NotGreaterIcon = () => (
  <svg
    height="16"
    strokeLinejoin="round"
    viewBox="0 0 16 16"
    width="16"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.5 8C14.5 11.5899 11.5899 14.5 8 14.5C4.41015 14.5 1.5 11.5899 1.5 8C1.5 4.41015 4.41015 1.5 8 1.5C11.5899 1.5 14.5 4.41015 14.5 8ZM16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM5.75 7.75C6.30228 7.75 6.75 7.30228 6.75 6.75C6.75 6.19772 6.30228 5.75 5.75 5.75C5.19772 5.75 4.75 6.19772 4.75 6.75C4.75 7.30228 5.19772 7.75 5.75 7.75ZM11.25 6.75C11.25 7.30228 10.8023 7.75 10.25 7.75C9.69771 7.75 9.25 7.30228 9.25 6.75C9.25 6.19772 9.69771 5.75 10.25 5.75C10.8023 5.75 11.25 6.19772 11.25 6.75ZM11.5249 11.2622L11.8727 11.7814L10.8342 12.4771L10.4863 11.9578C9.94904 11.1557 9.0363 10.6298 8.00098 10.6298C6.96759 10.6298 6.05634 11.1537 5.51863 11.9533L5.16986 12.4719L4.13259 11.7744L4.48137 11.2558C5.2414 10.1256 6.53398 9.37982 8.00098 9.37982C9.47073 9.37982 10.7654 10.1284 11.5249 11.2622Z"
    />
  </svg>
);

const HateIcon = () => (
  <svg
    height="16"
    strokeLinejoin="round"
    viewBox="0 0 16 16"
    width="16"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd" d="M4 9V16H5.5V9H4ZM12 9V16H10.5V9H12Z"
      fill="var(--ds-blue-700)"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.5 8C1.5 4.41015 4.41015 1.5 8 1.5C11.5899 1.5 14.5 4.41015 14.5 8C14.5 9.57941 13.9367 11.0273 13 12.1536V14.2454C14.8289 12.7793 16 10.5264 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 10.5264 1.17107 12.7793 3 14.2454V12.1536C2.06332 11.0273 1.5 9.57941 1.5 8ZM8 14.5C8.51627 14.5 9.01848 14.4398 9.5 14.3261V15.8596C9.01412 15.9518 8.51269 16 8 16C7.48731 16 6.98588 15.9518 6.5 15.8596V14.3261C6.98152 14.4398 7.48373 14.5 8 14.5ZM3.78568 8.36533C4.15863 7.98474 4.67623 7.75 5.25 7.75C5.82377 7.75 6.34137 7.98474 6.71432 8.36533L7.78568 7.31548C7.14222 6.65884 6.24318 6.25 5.25 6.25C4.25682 6.25 3.35778 6.65884 2.71432 7.31548L3.78568 8.36533ZM10.75 7.75C10.1762 7.75 9.65863 7.98474 9.28568 8.36533L8.21432 7.31548C8.85778 6.65884 9.75682 6.25 10.75 6.25C11.7432 6.25 12.6422 6.65884 13.2857 7.31548L12.2143 8.36533C11.8414 7.98474 11.3238 7.75 10.75 7.75ZM6.25 12H9.75C9.75 11.0335 8.9665 10.25 8 10.25C7.0335 10.25 6.25 11.0335 6.25 12Z"
    />
  </svg>
);

const Default = ({ label, webhookUrl }: { label: string; webhookUrl?: string }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedEmoji, setSelectedEmoji] = useState<number | null>(null);
  const [position, setPosition] = useState<{ top?: number, bottom?: number }>();
  const [comment, setComment] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const inputRef = useRef<HTMLButtonElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    const getPosition = () => {
      if (isOpen && inputRef && inputRef.current && menuRef.current) {
        const buttonRect = inputRef.current.getBoundingClientRect();
        const menuHeight = menuRef.current.offsetHeight;
        const viewportHeight = window.innerHeight;
        let _position;

        if (buttonRect.bottom + menuHeight <= viewportHeight) {
          _position = { top: buttonRect.height + 8 };
        } else if (buttonRect.top - menuHeight >= 0) {
          _position = { bottom: buttonRect.height + 8 };
        } else {
          _position = { top: buttonRect.height + 8 };
        }

        setPosition(_position);
      }
    };

    getPosition();

    window.addEventListener("resize", getPosition);
    window.addEventListener("scroll", getPosition);

    return () => {
      window.removeEventListener("resize", getPosition);
      window.removeEventListener("scroll", getPosition);
    };
  }, [isOpen]);

  useClickOutside(menuRef, () => {
    setIsOpen(false);
    setSelectedEmoji(null);
    setComment('');
  });

  return (
    <div className="relative flex justify-center sm:justify-start mx-auto">
      <Button
        type="secondary"
        size="small"
        ref={inputRef}
        onClick={() => setIsOpen(true)}
        className="font-medium"
      >
        {label}
      </Button>
      {isOpen && (
        <Material
          type="menu"
          className="absolute bg-background-100 w-[340px] max-w-[calc(100vw-2rem)] duration-200 font-sans left-1/2 -translate-x-1/2 opacity-100 z-50"
          style={{ ...position }}
          ref={menuRef}
        >
        <form onSubmit={async (e) => {
          e.preventDefault();
          if (selectedEmoji === null || !webhookUrl) return;
          
          setIsLoading(true);
          
          const feedbackData: FeedbackData = {
            rating: selectedEmoji,
            comment,
            timestamp: new Date().toISOString()
          };
          
          const result = await sendToDiscord(feedbackData, webhookUrl);
          
          if (result.success) {
            toast.success('Feedback envoyé avec succès !', {
              description: 'Merci pour votre retour, nous l\'avons bien reçu.',
              duration: 4000
            });
            setIsOpen(false);
            setSelectedEmoji(null);
            setComment('');
          } else {
            toast.error('Erreur lors de l\'envoi', {
              description: 'Le feedback n\'a pas pu être envoyé. Veuillez réessayer.',
              duration: 4000
            });
          }
          
          setIsLoading(false);
        }}>
          <div className="flex flex-col gap-2 p-2">
            <Textarea 
              ref={textareaRef}
              placeholder="Your feedback..." 
              className="h-[100px]" 
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <div className="flex items-center gap-1 text-sm text-gray-900 ml-auto">
              <MSupportedIcon /> supported.
            </div>
          </div>
          <div className="flex justify-between p-3 bg-accents-1 border-t border-accents-2">
            <span className="flex items-center justify-start cursor-pointer">
              <Button
                variant="unstyled"
                svgOnly
                shape="rounded"
                className={clsx(
                  "group hover:!bg-blue-300 hover:fill-blue-900 !w-8 !h-8 p-0 duration-200",
                  selectedEmoji === 0 ? "!bg-blue-300 fill-blue-900" : "bg-transparent fill-gray-900"
                )}
                onClick={(event) => {
                  event.preventDefault();
                  setSelectedEmoji(selectedEmoji === 0 ? null : 0);
                }}
              >
                <LoveItIcon pathClassName={clsx(
                  "group-hover:fill-blue-900 duration-200",
                  selectedEmoji === 0 ? "fill-blue-900" : "fill-amber-800"
                )} />
              </Button>
              <Button
                variant="unstyled"
                svgOnly
                shape="rounded"
                className={clsx(
                  "hover:!bg-blue-300 hover:fill-blue-900 !w-8 !h-8 p-0 duration-200",
                  selectedEmoji === 1 ? "!bg-blue-300 fill-blue-900" : "bg-transparent fill-gray-900"
                )}
                onClick={(event) => {
                  event.preventDefault();
                  setSelectedEmoji(selectedEmoji === 1 ? null : 1);
                }}
              >
                <ItsOkayIcon />
              </Button>
              <Button
                variant="unstyled"
                svgOnly
                shape="rounded"
                className={clsx(
                  "hover:!bg-blue-300 hover:fill-blue-900 !w-8 !h-8 p-0 duration-200",
                  selectedEmoji === 2 ? "!bg-blue-300 fill-blue-900" : "bg-transparent fill-gray-900"
                )}
                onClick={(event) => {
                  event.preventDefault();
                  setSelectedEmoji(selectedEmoji === 2 ? null : 2);
                }}
              >
                <NotGreaterIcon />
              </Button>
              <Button
                variant="unstyled"
                svgOnly
                shape="rounded"
                className={clsx(
                  "hover:!bg-blue-300 hover:fill-blue-900 !w-8 !h-8 p-0 duration-200",
                  selectedEmoji === 3 ? "!bg-blue-300 fill-blue-900" : "bg-transparent fill-gray-900"
                )}
                onClick={(event) => {
                  event.preventDefault();
                  setSelectedEmoji(selectedEmoji === 3 ? null : 3);
                }}
              >
                <HateIcon />
              </Button>
            </span>
            <Button 
              size="small" 
              disabled={selectedEmoji === null || isLoading}
              loading={isLoading}
            >
              {isLoading ? 'Envoi...' : 'Send'}
            </Button>
          </div>
        </form>
        </Material>
      )}
    </div>
  );
};

const Inline = ({ label, webhookUrl }: { label: string; webhookUrl?: string }) => {
  const [expanded, setExpanded] = useState<boolean>(false);
  const [selectedEmoji, setSelectedEmoji] = useState<number | null>(null);
  const [comment, setComment] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const textAreaRef = useRef<HTMLTextAreaElement | null>(null);
  const ref = useRef<HTMLDivElement | null>(null);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (expanded) {
      setShowContent(true);
      textAreaRef.current?.focus();
    } else {
      const timeout = setTimeout(() => setShowContent(false), 300);
      return () => clearTimeout(timeout);
    }
  }, [expanded]);

  useClickOutside(ref, () => {
    setExpanded(false);
    setSelectedEmoji(null);
    setComment('');
  });

  return (
    <div className="flex justify-center sm:justify-start">
      <div
        className={clsx(
          "bg-background-100 shadow-border-small duration-200 overflow-hidden w-fit flex flex-col justify-start",
          expanded ? "max-h-[243px] rounded-xl" : "max-h-12 rounded-[30px]"
        )}
        ref={ref}
      >
      <div className={clsx("flex items-center justify-center gap-2 py-2 pl-4 pr-2 duration-200", expanded && "!px-[60px]")}>
        <p className="text-gray-900 text-sm">{label}</p>
        <div className="flex justify-between">
          <span className="flex items-center gap-[1px] cursor-pointer">
            <Button
              variant="unstyled"
              svgOnly
              shape="rounded"
              className={clsx(
                "group hover:!bg-blue-300 hover:fill-blue-900 !w-8 !h-8 p-0 duration-200",
                selectedEmoji === 0 ? "!bg-blue-300 fill-blue-900" : "bg-transparent fill-gray-900"
              )}
              onClick={(event) => {
                event.preventDefault();
                setSelectedEmoji(selectedEmoji === 0 ? null : 0);
                setExpanded(selectedEmoji !== 0);
              }}
            >
              <LoveItIcon pathClassName={clsx(
                "group-hover:fill-blue-900 duration-200",
                selectedEmoji === 0 ? "fill-blue-900" : "fill-amber-800"
              )} />
            </Button>
            <Button
              variant="unstyled"
              svgOnly
              shape="rounded"
              className={clsx(
                "hover:!bg-blue-300 hover:fill-blue-900 !w-8 !h-8 p-0 duration-200",
                selectedEmoji === 1 ? "!bg-blue-300 fill-blue-900" : "bg-transparent fill-gray-900"
              )}
              onClick={(event) => {
                event.preventDefault();
                setSelectedEmoji(selectedEmoji === 1 ? null : 1);
                setExpanded(selectedEmoji !== 1);
              }}
            >
              <ItsOkayIcon />
            </Button>
            <Button
              variant="unstyled"
              svgOnly
              shape="rounded"
              className={clsx(
                "hover:!bg-blue-300 hover:fill-blue-900 !w-8 !h-8 p-0 duration-200",
                selectedEmoji === 2 ? "!bg-blue-300 fill-blue-900" : "bg-transparent fill-gray-900"
              )}
              onClick={(event) => {
                event.preventDefault();
                setSelectedEmoji(selectedEmoji === 2 ? null : 2);
                setExpanded(selectedEmoji !== 2);
              }}
            >
              <NotGreaterIcon />
            </Button>
            <Button
              variant="unstyled"
              svgOnly
              shape="rounded"
              className={clsx(
                "hover:!bg-blue-300 hover:fill-blue-900 !w-8 !h-8 p-0 duration-200",
                selectedEmoji === 3 ? "!bg-blue-300 fill-blue-900" : "bg-transparent fill-gray-900"
              )}
              onClick={(event) => {
                event.preventDefault();
                setSelectedEmoji(selectedEmoji === 3 ? null : 3);
                setExpanded(selectedEmoji !== 3);
              }}
            >
              <HateIcon />
            </Button>
          </span>
        </div>
      </div>
      {showContent && (
        <form className="w-full transition-opacity duration-300 opacity-100" onSubmit={async (e) => {
          e.preventDefault();
          if (selectedEmoji === null || !webhookUrl) return;
          
          setIsLoading(true);
          
          const feedbackData: FeedbackData = {
            rating: selectedEmoji,
            comment,
            timestamp: new Date().toISOString()
          };
          
          const result = await sendToDiscord(feedbackData, webhookUrl);
          
          if (result.success) {
            toast.success('Feedback envoyé avec succès !', {
              description: 'Merci pour votre retour, nous l\'avons bien reçu.',
              duration: 4000
            });
            setExpanded(false);
            setSelectedEmoji(null);
            setComment('');
          } else {
            toast.error('Erreur lors de l\'envoi', {
              description: 'Le feedback n\'a pas pu être envoyé. Veuillez réessayer.',
              duration: 4000
            });
          }
          
          setIsLoading(false);
        }}>
          <div className="flex flex-col gap-2 p-2 w-full">
            <Textarea 
              placeholder="Your feedback..." 
              className="h-[100px]" 
              ref={textAreaRef}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <div className="flex items-center gap-1 text-xs text-gray-900 ml-auto">
              <MSupportedIcon /> supported.
            </div>
          </div>
          <div className="flex justify-end p-3 bg-accents-1 border-t border-accents-2">
            <Button 
              size="small" 
              disabled={selectedEmoji === null || isLoading}
              loading={isLoading}
            >
              {isLoading ? 'Envoi...' : 'Send'}
            </Button>
          </div>
        </form>
      )}
      </div>
    </div>
  );
};

export const Feedback = ({ type = "default", label, webhookUrl }: FeedbackProps) => {
  return (type === "default" || type === undefined) ? <Default label={label} webhookUrl={webhookUrl} /> : <Inline label={label} webhookUrl={webhookUrl} />;
};