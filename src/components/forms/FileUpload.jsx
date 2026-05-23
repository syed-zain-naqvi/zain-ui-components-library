import { useRef, useState } from 'react';
import { cn } from '../../utils/cn';
import { generateId } from '../../utils/generateId';
import { formatFileSize } from '../../utils/formatters';

export function FileUpload({
  id,
  label,
  helperText,
  errorMessage,
  isInvalid = false,
  isDisabled = false,
  isRequired = false,
  accept,
  multiple = false,
  maxSize,
  onFilesChange,
  className,
}) {
  const fileId = id || generateId('file-upload');
  const inputRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [files, setFiles] = useState([]);
  const [sizeError, setSizeError] = useState(null);

  const handleFiles = (newFiles) => {
    const fileArray = Array.from(newFiles);
    if (maxSize) {
      const oversized = fileArray.filter((f) => f.size > maxSize);
      if (oversized.length > 0) {
        setSizeError(`File exceeds maximum size of ${formatFileSize(maxSize)}`);
        return;
      }
    }
    setSizeError(null);
    setFiles(fileArray);
    onFilesChange && onFilesChange(fileArray);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    if (!isDisabled) handleFiles(e.dataTransfer.files);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    if (!isDisabled) setIsDragging(true);
  };

  const handleDragLeave = () => setIsDragging(false);

  const removeFile = (index) => {
    const updated = files.filter((_, i) => i !== index);
    setFiles(updated);
    onFilesChange && onFilesChange(updated);
  };

  return (
    <div className={cn('flex flex-col gap-2 w-full', className)}>
      {label && (
        <label
          htmlFor={fileId}
          className="text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          {label}
          {isRequired && (
            <span className="ml-1 text-red-500" aria-hidden="true">*</span>
          )}
        </label>
      )}
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onClick={() => !isDisabled && inputRef.current?.click()}
        className={cn(
          'flex flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed p-8 text-center cursor-pointer transition-all duration-150',
          isDragging
            ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20'
            : isInvalid || sizeError
            ? 'border-red-400 dark:border-red-500 bg-red-50 dark:bg-red-900/10'
            : 'border-gray-300 dark:border-gray-700 hover:border-primary-400 dark:hover:border-primary-500 bg-gray-50 dark:bg-gray-900/50 hover:bg-primary-50/50 dark:hover:bg-primary-900/10',
          isDisabled && 'opacity-50 cursor-not-allowed'
        )}
        role="button"
        aria-disabled={isDisabled}
        tabIndex={isDisabled ? -1 : 0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            !isDisabled && inputRef.current?.click();
          }
        }}
      >
        <input
          ref={inputRef}
          type="file"
          id={fileId}
          accept={accept}
          multiple={multiple}
          disabled={isDisabled}
          required={isRequired}
          className="sr-only"
          onChange={(e) => handleFiles(e.target.files)}
        />
        <div className="flex flex-col items-center gap-1">
          <svg
            className="h-8 w-8 text-gray-400 dark:text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
            />
          </svg>
          <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Drop files here or{' '}
            <span className="text-primary-600 dark:text-primary-400">browse</span>
          </p>
          {maxSize && (
            <p className="text-xs text-gray-400 dark:text-gray-500">
              Max size: {formatFileSize(maxSize)}
            </p>
          )}
        </div>
      </div>
      {files.length > 0 && (
        <ul className="flex flex-col gap-1.5 mt-1">
          {files.map((file, i) => (
            <li
              key={`${file.name}-${i}`}
              className="flex items-center justify-between rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2"
            >
              <div className="flex items-center gap-2 min-w-0">
                <svg className="h-4 w-4 flex-shrink-0 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                </svg>
                <span className="text-sm text-gray-700 dark:text-gray-300 truncate">{file.name}</span>
                <span className="text-xs text-gray-400 flex-shrink-0">{formatFileSize(file.size)}</span>
              </div>
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); removeFile(i); }}
                className="ml-2 flex-shrink-0 text-gray-400 hover:text-red-500 transition-colors"
                aria-label={`Remove ${file.name}`}
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </li>
          ))}
        </ul>
      )}
      {(isInvalid && errorMessage) || sizeError ? (
        <p className="text-xs text-red-500 dark:text-red-400">{sizeError || errorMessage}</p>
      ) : null}
      {helperText && !isInvalid && !sizeError && (
        <p className="text-xs text-gray-500 dark:text-gray-400">{helperText}</p>
      )}
    </div>
  );
}