# Frame → Block Text

A mobile-friendly, browser-local converter for turning images or image sequences into block-text markup.

## Features

- Import individual JPG, PNG, and WEBP images.
- Import a `.zip` containing JPG/PNG/WEBP frames.
- Sort ZIP entries naturally (`frame_2.jpg` before `frame_10.jpg`).
- Scrub through the loaded sequence with a frame slider and thumbnail strip.
- Apply one shared conversion profile to every frame.
- Preview the currently selected frame and edit its generated text before copying.
- Copy the current frame or all frame markup.
- Download every converted frame as `frame_00001.txt`, etc., inside a new ZIP.
- Runs entirely in the browser; source images are not uploaded to a server.

## Use

1. Open `index.html` in a modern browser.
2. Choose images or a ZIP of frames.
3. Adjust the shared profile. The preview and current markup update as you change it.
4. Scrub to inspect any frame.
5. Choose **Download TXT ZIP** to export the complete sequence.

The ZIP import/export feature uses JSZip from jsDelivr, so an internet connection is needed when opening the hosted page. For fully offline use, vendor JSZip locally and update the script source in `index.html`.

## GitHub Pages

This is a static site. In GitHub, open **Settings → Pages**, choose **Deploy from a branch**, select the default branch and `/ (root)`, then save. The published site will use the repository's `index.html`.

## Conversion notes

The browser converter follows the same main ideas as the companion Python workflow: orientation-specific dimensions are represented by the grid controls, enhancement controls are shared across all frames, palette quantization is available for colour modes, background thresholding creates transparent `00` stops, and exported filenames are numbered for video-like playback.

For very large sequences, browser memory and ZIP size limits may be reached. Lowering the grid size or splitting the sequence into batches is recommended.
