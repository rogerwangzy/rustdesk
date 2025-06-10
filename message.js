export const encodeChroma = {
  I420: 0,
  I444: 1,
};

export const decodeChroma = {
  0: "I420",
  1: "I444",
};

export const encodeKeyboardMode = {
  Legacy: 0,
  Map: 1,
  Translate: 2,
  Auto: 3,
};

export const decodeKeyboardMode = {
  0: "Legacy",
  1: "Map",
  2: "Translate",
  3: "Auto",
};

export const encodeControlKey = {
  Unknown: 0,
  Alt: 1,
  Backspace: 2,
  CapsLock: 3,
  Control: 4,
  Delete: 5,
  DownArrow: 6,
  End: 7,
  Escape: 8,
  F1: 9,
  F10: 10,
  F11: 11,
  F12: 12,
  F2: 13,
  F3: 14,
  F4: 15,
  F5: 16,
  F6: 17,
  F7: 18,
  F8: 19,
  F9: 20,
  Home: 21,
  LeftArrow: 22,
  Meta: 23,
  Option: 24,
  PageDown: 25,
  PageUp: 26,
  Return: 27,
  RightArrow: 28,
  Shift: 29,
  Space: 30,
  Tab: 31,
  UpArrow: 32,
  Numpad0: 33,
  Numpad1: 34,
  Numpad2: 35,
  Numpad3: 36,
  Numpad4: 37,
  Numpad5: 38,
  Numpad6: 39,
  Numpad7: 40,
  Numpad8: 41,
  Numpad9: 42,
  Cancel: 43,
  Clear: 44,
  Menu: 45,
  Pause: 46,
  Kana: 47,
  Hangul: 48,
  Junja: 49,
  Final: 50,
  Hanja: 51,
  Kanji: 52,
  Convert: 53,
  Select: 54,
  Print: 55,
  Execute: 56,
  Snapshot: 57,
  Insert: 58,
  Help: 59,
  Sleep: 60,
  Separator: 61,
  Scroll: 62,
  NumLock: 63,
  RWin: 64,
  Apps: 65,
  Multiply: 66,
  Add: 67,
  Subtract: 68,
  Decimal: 69,
  Divide: 70,
  Equals: 71,
  NumpadEnter: 72,
  RShift: 73,
  RControl: 74,
  RAlt: 75,
  VolumeMute: 76,
  VolumeUp: 77,
  VolumeDown: 78,
  Power: 79,
  CtrlAltDel: 100,
  LockScreen: 101,
};

export const decodeControlKey = {
  0: "Unknown",
  1: "Alt",
  2: "Backspace",
  3: "CapsLock",
  4: "Control",
  5: "Delete",
  6: "DownArrow",
  7: "End",
  8: "Escape",
  9: "F1",
  10: "F10",
  11: "F11",
  12: "F12",
  13: "F2",
  14: "F3",
  15: "F4",
  16: "F5",
  17: "F6",
  18: "F7",
  19: "F8",
  20: "F9",
  21: "Home",
  22: "LeftArrow",
  23: "Meta",
  24: "Option",
  25: "PageDown",
  26: "PageUp",
  27: "Return",
  28: "RightArrow",
  29: "Shift",
  30: "Space",
  31: "Tab",
  32: "UpArrow",
  33: "Numpad0",
  34: "Numpad1",
  35: "Numpad2",
  36: "Numpad3",
  37: "Numpad4",
  38: "Numpad5",
  39: "Numpad6",
  40: "Numpad7",
  41: "Numpad8",
  42: "Numpad9",
  43: "Cancel",
  44: "Clear",
  45: "Menu",
  46: "Pause",
  47: "Kana",
  48: "Hangul",
  49: "Junja",
  50: "Final",
  51: "Hanja",
  52: "Kanji",
  53: "Convert",
  54: "Select",
  55: "Print",
  56: "Execute",
  57: "Snapshot",
  58: "Insert",
  59: "Help",
  60: "Sleep",
  61: "Separator",
  62: "Scroll",
  63: "NumLock",
  64: "RWin",
  65: "Apps",
  66: "Multiply",
  67: "Add",
  68: "Subtract",
  69: "Decimal",
  70: "Divide",
  71: "Equals",
  72: "NumpadEnter",
  73: "RShift",
  74: "RControl",
  75: "RAlt",
  76: "VolumeMute",
  77: "VolumeUp",
  78: "VolumeDown",
  79: "Power",
  100: "CtrlAltDel",
  101: "LockScreen",
};

export const encodeClipboardFormat = {
  Text: 0,
  Rtf: 1,
  Html: 2,
  ImageRgba: 21,
  ImagePng: 22,
  ImageSvg: 23,
  Special: 31,
};

export const decodeClipboardFormat = {
  0: "Text",
  1: "Rtf",
  2: "Html",
  21: "ImageRgba",
  22: "ImagePng",
  23: "ImageSvg",
  31: "Special",
};

export const encodeFileType = {
  Dir: 0,
  DirLink: 2,
  DirDrive: 3,
  File: 4,
  FileLink: 5,
};

export const decodeFileType = {
  0: "Dir",
  2: "DirLink",
  3: "DirDrive",
  4: "File",
  5: "FileLink",
};

export const encodeImageQuality = {
  NotSet: 0,
  Low: 2,
  Balanced: 3,
  Best: 4,
};

export const decodeImageQuality = {
  0: "NotSet",
  2: "Low",
  3: "Balanced",
  4: "Best",
};

export function encodeEncodedVideoFrame(message) {
  let bb = popByteBuffer();
  _encodeEncodedVideoFrame(message, bb);
  return toUint8Array(bb);
}

function _encodeEncodedVideoFrame(message, bb) {
  // optional bytes data = 1;
  let $data = message.data;
  if ($data !== undefined) {
    writeVarint32(bb, 10);
    writeVarint32(bb, $data.length), writeBytes(bb, $data);
  }

  // optional bool key = 2;
  let $key = message.key;
  if ($key !== undefined) {
    writeVarint32(bb, 16);
    writeByte(bb, $key ? 1 : 0);
  }

  // optional int64 pts = 3;
  let $pts = message.pts;
  if ($pts !== undefined) {
    writeVarint32(bb, 24);
    writeVarint64(bb, $pts);
  }
}

export function decodeEncodedVideoFrame(binary) {
  return _decodeEncodedVideoFrame(wrapByteBuffer(binary));
}

function _decodeEncodedVideoFrame(bb) {
  let message = {};

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional bytes data = 1;
      case 1: {
        message.data = readBytes(bb, readVarint32(bb));
        break;
      }

      // optional bool key = 2;
      case 2: {
        message.key = !!readByte(bb);
        break;
      }

      // optional int64 pts = 3;
      case 3: {
        message.pts = readVarint64(bb, /* unsigned */ false);
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export function encodeEncodedVideoFrames(message) {
  let bb = popByteBuffer();
  _encodeEncodedVideoFrames(message, bb);
  return toUint8Array(bb);
}

function _encodeEncodedVideoFrames(message, bb) {
  // repeated EncodedVideoFrame frames = 1;
  let array$frames = message.frames;
  if (array$frames !== undefined) {
    for (let value of array$frames) {
      writeVarint32(bb, 10);
      let nested = popByteBuffer();
      _encodeEncodedVideoFrame(value, nested);
      writeVarint32(bb, nested.limit);
      writeByteBuffer(bb, nested);
      pushByteBuffer(nested);
    }
  }
}

export function decodeEncodedVideoFrames(binary) {
  return _decodeEncodedVideoFrames(wrapByteBuffer(binary));
}

function _decodeEncodedVideoFrames(bb) {
  let message = {};

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // repeated EncodedVideoFrame frames = 1;
      case 1: {
        let limit = pushTemporaryLength(bb);
        let values = message.frames || (message.frames = []);
        values.push(_decodeEncodedVideoFrame(bb));
        bb.limit = limit;
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export function encodeRGB(message) {
  let bb = popByteBuffer();
  _encodeRGB(message, bb);
  return toUint8Array(bb);
}

function _encodeRGB(message, bb) {
  // optional bool compress = 1;
  let $compress = message.compress;
  if ($compress !== undefined) {
    writeVarint32(bb, 8);
    writeByte(bb, $compress ? 1 : 0);
  }
}

export function decodeRGB(binary) {
  return _decodeRGB(wrapByteBuffer(binary));
}

function _decodeRGB(bb) {
  let message = {};

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional bool compress = 1;
      case 1: {
        message.compress = !!readByte(bb);
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export function encodeYUV(message) {
  let bb = popByteBuffer();
  _encodeYUV(message, bb);
  return toUint8Array(bb);
}

function _encodeYUV(message, bb) {
  // optional bool compress = 1;
  let $compress = message.compress;
  if ($compress !== undefined) {
    writeVarint32(bb, 8);
    writeByte(bb, $compress ? 1 : 0);
  }

  // optional int32 stride = 2;
  let $stride = message.stride;
  if ($stride !== undefined) {
    writeVarint32(bb, 16);
    writeVarint64(bb, intToLong($stride));
  }
}

export function decodeYUV(binary) {
  return _decodeYUV(wrapByteBuffer(binary));
}

function _decodeYUV(bb) {
  let message = {};

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional bool compress = 1;
      case 1: {
        message.compress = !!readByte(bb);
        break;
      }

      // optional int32 stride = 2;
      case 2: {
        message.stride = readVarint32(bb);
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export function encodeVideoFrame(message) {
  let bb = popByteBuffer();
  _encodeVideoFrame(message, bb);
  return toUint8Array(bb);
}

function _encodeVideoFrame(message, bb) {
  // optional EncodedVideoFrames vp9s = 6;
  let $vp9s = message.vp9s;
  if ($vp9s !== undefined) {
    writeVarint32(bb, 50);
    let nested = popByteBuffer();
    _encodeEncodedVideoFrames($vp9s, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional RGB rgb = 7;
  let $rgb = message.rgb;
  if ($rgb !== undefined) {
    writeVarint32(bb, 58);
    let nested = popByteBuffer();
    _encodeRGB($rgb, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional YUV yuv = 8;
  let $yuv = message.yuv;
  if ($yuv !== undefined) {
    writeVarint32(bb, 66);
    let nested = popByteBuffer();
    _encodeYUV($yuv, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional EncodedVideoFrames h264s = 10;
  let $h264s = message.h264s;
  if ($h264s !== undefined) {
    writeVarint32(bb, 82);
    let nested = popByteBuffer();
    _encodeEncodedVideoFrames($h264s, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional EncodedVideoFrames h265s = 11;
  let $h265s = message.h265s;
  if ($h265s !== undefined) {
    writeVarint32(bb, 90);
    let nested = popByteBuffer();
    _encodeEncodedVideoFrames($h265s, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional EncodedVideoFrames vp8s = 12;
  let $vp8s = message.vp8s;
  if ($vp8s !== undefined) {
    writeVarint32(bb, 98);
    let nested = popByteBuffer();
    _encodeEncodedVideoFrames($vp8s, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional EncodedVideoFrames av1s = 13;
  let $av1s = message.av1s;
  if ($av1s !== undefined) {
    writeVarint32(bb, 106);
    let nested = popByteBuffer();
    _encodeEncodedVideoFrames($av1s, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional int32 display = 14;
  let $display = message.display;
  if ($display !== undefined) {
    writeVarint32(bb, 112);
    writeVarint64(bb, intToLong($display));
  }
}

export function decodeVideoFrame(binary) {
  return _decodeVideoFrame(wrapByteBuffer(binary));
}

function _decodeVideoFrame(bb) {
  let message = {};

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional EncodedVideoFrames vp9s = 6;
      case 6: {
        let limit = pushTemporaryLength(bb);
        message.vp9s = _decodeEncodedVideoFrames(bb);
        bb.limit = limit;
        break;
      }

      // optional RGB rgb = 7;
      case 7: {
        let limit = pushTemporaryLength(bb);
        message.rgb = _decodeRGB(bb);
        bb.limit = limit;
        break;
      }

      // optional YUV yuv = 8;
      case 8: {
        let limit = pushTemporaryLength(bb);
        message.yuv = _decodeYUV(bb);
        bb.limit = limit;
        break;
      }

      // optional EncodedVideoFrames h264s = 10;
      case 10: {
        let limit = pushTemporaryLength(bb);
        message.h264s = _decodeEncodedVideoFrames(bb);
        bb.limit = limit;
        break;
      }

      // optional EncodedVideoFrames h265s = 11;
      case 11: {
        let limit = pushTemporaryLength(bb);
        message.h265s = _decodeEncodedVideoFrames(bb);
        bb.limit = limit;
        break;
      }

      // optional EncodedVideoFrames vp8s = 12;
      case 12: {
        let limit = pushTemporaryLength(bb);
        message.vp8s = _decodeEncodedVideoFrames(bb);
        bb.limit = limit;
        break;
      }

      // optional EncodedVideoFrames av1s = 13;
      case 13: {
        let limit = pushTemporaryLength(bb);
        message.av1s = _decodeEncodedVideoFrames(bb);
        bb.limit = limit;
        break;
      }

      // optional int32 display = 14;
      case 14: {
        message.display = readVarint32(bb);
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export function encodeIdPk(message) {
  let bb = popByteBuffer();
  _encodeIdPk(message, bb);
  return toUint8Array(bb);
}

function _encodeIdPk(message, bb) {
  // optional string id = 1;
  let $id = message.id;
  if ($id !== undefined) {
    writeVarint32(bb, 10);
    writeString(bb, $id);
  }

  // optional bytes pk = 2;
  let $pk = message.pk;
  if ($pk !== undefined) {
    writeVarint32(bb, 18);
    writeVarint32(bb, $pk.length), writeBytes(bb, $pk);
  }
}

export function decodeIdPk(binary) {
  return _decodeIdPk(wrapByteBuffer(binary));
}

function _decodeIdPk(bb) {
  let message = {};

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional string id = 1;
      case 1: {
        message.id = readString(bb, readVarint32(bb));
        break;
      }

      // optional bytes pk = 2;
      case 2: {
        message.pk = readBytes(bb, readVarint32(bb));
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export function encodeDisplayInfo(message) {
  let bb = popByteBuffer();
  _encodeDisplayInfo(message, bb);
  return toUint8Array(bb);
}

function _encodeDisplayInfo(message, bb) {
  // optional sint32 x = 1;
  let $x = message.x;
  if ($x !== undefined) {
    writeVarint32(bb, 8);
    writeVarint32ZigZag(bb, $x);
  }

  // optional sint32 y = 2;
  let $y = message.y;
  if ($y !== undefined) {
    writeVarint32(bb, 16);
    writeVarint32ZigZag(bb, $y);
  }

  // optional int32 width = 3;
  let $width = message.width;
  if ($width !== undefined) {
    writeVarint32(bb, 24);
    writeVarint64(bb, intToLong($width));
  }

  // optional int32 height = 4;
  let $height = message.height;
  if ($height !== undefined) {
    writeVarint32(bb, 32);
    writeVarint64(bb, intToLong($height));
  }

  // optional string name = 5;
  let $name = message.name;
  if ($name !== undefined) {
    writeVarint32(bb, 42);
    writeString(bb, $name);
  }

  // optional bool online = 6;
  let $online = message.online;
  if ($online !== undefined) {
    writeVarint32(bb, 48);
    writeByte(bb, $online ? 1 : 0);
  }

  // optional bool cursor_embedded = 7;
  let $cursor_embedded = message.cursor_embedded;
  if ($cursor_embedded !== undefined) {
    writeVarint32(bb, 56);
    writeByte(bb, $cursor_embedded ? 1 : 0);
  }

  // optional Resolution original_resolution = 8;
  let $original_resolution = message.original_resolution;
  if ($original_resolution !== undefined) {
    writeVarint32(bb, 66);
    let nested = popByteBuffer();
    _encodeResolution($original_resolution, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional double scale = 9;
  let $scale = message.scale;
  if ($scale !== undefined) {
    writeVarint32(bb, 73);
    writeDouble(bb, $scale);
  }
}

export function decodeDisplayInfo(binary) {
  return _decodeDisplayInfo(wrapByteBuffer(binary));
}

function _decodeDisplayInfo(bb) {
  let message = {};

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional sint32 x = 1;
      case 1: {
        message.x = readVarint32ZigZag(bb);
        break;
      }

      // optional sint32 y = 2;
      case 2: {
        message.y = readVarint32ZigZag(bb);
        break;
      }

      // optional int32 width = 3;
      case 3: {
        message.width = readVarint32(bb);
        break;
      }

      // optional int32 height = 4;
      case 4: {
        message.height = readVarint32(bb);
        break;
      }

      // optional string name = 5;
      case 5: {
        message.name = readString(bb, readVarint32(bb));
        break;
      }

      // optional bool online = 6;
      case 6: {
        message.online = !!readByte(bb);
        break;
      }

      // optional bool cursor_embedded = 7;
      case 7: {
        message.cursor_embedded = !!readByte(bb);
        break;
      }

      // optional Resolution original_resolution = 8;
      case 8: {
        let limit = pushTemporaryLength(bb);
        message.original_resolution = _decodeResolution(bb);
        bb.limit = limit;
        break;
      }

      // optional double scale = 9;
      case 9: {
        message.scale = readDouble(bb);
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export function encodePortForward(message) {
  let bb = popByteBuffer();
  _encodePortForward(message, bb);
  return toUint8Array(bb);
}

function _encodePortForward(message, bb) {
  // optional string host = 1;
  let $host = message.host;
  if ($host !== undefined) {
    writeVarint32(bb, 10);
    writeString(bb, $host);
  }

  // optional int32 port = 2;
  let $port = message.port;
  if ($port !== undefined) {
    writeVarint32(bb, 16);
    writeVarint64(bb, intToLong($port));
  }
}

export function decodePortForward(binary) {
  return _decodePortForward(wrapByteBuffer(binary));
}

function _decodePortForward(bb) {
  let message = {};

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional string host = 1;
      case 1: {
        message.host = readString(bb, readVarint32(bb));
        break;
      }

      // optional int32 port = 2;
      case 2: {
        message.port = readVarint32(bb);
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export function encodeFileTransfer(message) {
  let bb = popByteBuffer();
  _encodeFileTransfer(message, bb);
  return toUint8Array(bb);
}

function _encodeFileTransfer(message, bb) {
  // optional string dir = 1;
  let $dir = message.dir;
  if ($dir !== undefined) {
    writeVarint32(bb, 10);
    writeString(bb, $dir);
  }

  // optional bool show_hidden = 2;
  let $show_hidden = message.show_hidden;
  if ($show_hidden !== undefined) {
    writeVarint32(bb, 16);
    writeByte(bb, $show_hidden ? 1 : 0);
  }
}

export function decodeFileTransfer(binary) {
  return _decodeFileTransfer(wrapByteBuffer(binary));
}

function _decodeFileTransfer(bb) {
  let message = {};

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional string dir = 1;
      case 1: {
        message.dir = readString(bb, readVarint32(bb));
        break;
      }

      // optional bool show_hidden = 2;
      case 2: {
        message.show_hidden = !!readByte(bb);
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export function encodeViewCamera(message) {
  let bb = popByteBuffer();
  _encodeViewCamera(message, bb);
  return toUint8Array(bb);
}

function _encodeViewCamera(message, bb) {
}

export function decodeViewCamera(binary) {
  return _decodeViewCamera(wrapByteBuffer(binary));
}

function _decodeViewCamera(bb) {
  let message = {};

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export function encodeOSLogin(message) {
  let bb = popByteBuffer();
  _encodeOSLogin(message, bb);
  return toUint8Array(bb);
}

function _encodeOSLogin(message, bb) {
  // optional string username = 1;
  let $username = message.username;
  if ($username !== undefined) {
    writeVarint32(bb, 10);
    writeString(bb, $username);
  }

  // optional string password = 2;
  let $password = message.password;
  if ($password !== undefined) {
    writeVarint32(bb, 18);
    writeString(bb, $password);
  }
}

export function decodeOSLogin(binary) {
  return _decodeOSLogin(wrapByteBuffer(binary));
}

function _decodeOSLogin(bb) {
  let message = {};

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional string username = 1;
      case 1: {
        message.username = readString(bb, readVarint32(bb));
        break;
      }

      // optional string password = 2;
      case 2: {
        message.password = readString(bb, readVarint32(bb));
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export function encodeLoginRequest(message) {
  let bb = popByteBuffer();
  _encodeLoginRequest(message, bb);
  return toUint8Array(bb);
}

function _encodeLoginRequest(message, bb) {
  // optional string username = 1;
  let $username = message.username;
  if ($username !== undefined) {
    writeVarint32(bb, 10);
    writeString(bb, $username);
  }

  // optional bytes password = 2;
  let $password = message.password;
  if ($password !== undefined) {
    writeVarint32(bb, 18);
    writeVarint32(bb, $password.length), writeBytes(bb, $password);
  }

  // optional string my_id = 4;
  let $my_id = message.my_id;
  if ($my_id !== undefined) {
    writeVarint32(bb, 34);
    writeString(bb, $my_id);
  }

  // optional string my_name = 5;
  let $my_name = message.my_name;
  if ($my_name !== undefined) {
    writeVarint32(bb, 42);
    writeString(bb, $my_name);
  }

  // optional OptionMessage option = 6;
  let $option = message.option;
  if ($option !== undefined) {
    writeVarint32(bb, 50);
    let nested = popByteBuffer();
    _encodeOptionMessage($option, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional FileTransfer file_transfer = 7;
  let $file_transfer = message.file_transfer;
  if ($file_transfer !== undefined) {
    writeVarint32(bb, 58);
    let nested = popByteBuffer();
    _encodeFileTransfer($file_transfer, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional PortForward port_forward = 8;
  let $port_forward = message.port_forward;
  if ($port_forward !== undefined) {
    writeVarint32(bb, 66);
    let nested = popByteBuffer();
    _encodePortForward($port_forward, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional ViewCamera view_camera = 15;
  let $view_camera = message.view_camera;
  if ($view_camera !== undefined) {
    writeVarint32(bb, 122);
    let nested = popByteBuffer();
    _encodeViewCamera($view_camera, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional bool video_ack_required = 9;
  let $video_ack_required = message.video_ack_required;
  if ($video_ack_required !== undefined) {
    writeVarint32(bb, 72);
    writeByte(bb, $video_ack_required ? 1 : 0);
  }

  // optional uint64 session_id = 10;
  let $session_id = message.session_id;
  if ($session_id !== undefined) {
    writeVarint32(bb, 80);
    writeVarint64(bb, $session_id);
  }

  // optional string version = 11;
  let $version = message.version;
  if ($version !== undefined) {
    writeVarint32(bb, 90);
    writeString(bb, $version);
  }

  // optional OSLogin os_login = 12;
  let $os_login = message.os_login;
  if ($os_login !== undefined) {
    writeVarint32(bb, 98);
    let nested = popByteBuffer();
    _encodeOSLogin($os_login, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional string my_platform = 13;
  let $my_platform = message.my_platform;
  if ($my_platform !== undefined) {
    writeVarint32(bb, 106);
    writeString(bb, $my_platform);
  }

  // optional bytes hwid = 14;
  let $hwid = message.hwid;
  if ($hwid !== undefined) {
    writeVarint32(bb, 114);
    writeVarint32(bb, $hwid.length), writeBytes(bb, $hwid);
  }
}

export function decodeLoginRequest(binary) {
  return _decodeLoginRequest(wrapByteBuffer(binary));
}

function _decodeLoginRequest(bb) {
  let message = {};

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional string username = 1;
      case 1: {
        message.username = readString(bb, readVarint32(bb));
        break;
      }

      // optional bytes password = 2;
      case 2: {
        message.password = readBytes(bb, readVarint32(bb));
        break;
      }

      // optional string my_id = 4;
      case 4: {
        message.my_id = readString(bb, readVarint32(bb));
        break;
      }

      // optional string my_name = 5;
      case 5: {
        message.my_name = readString(bb, readVarint32(bb));
        break;
      }

      // optional OptionMessage option = 6;
      case 6: {
        let limit = pushTemporaryLength(bb);
        message.option = _decodeOptionMessage(bb);
        bb.limit = limit;
        break;
      }

      // optional FileTransfer file_transfer = 7;
      case 7: {
        let limit = pushTemporaryLength(bb);
        message.file_transfer = _decodeFileTransfer(bb);
        bb.limit = limit;
        break;
      }

      // optional PortForward port_forward = 8;
      case 8: {
        let limit = pushTemporaryLength(bb);
        message.port_forward = _decodePortForward(bb);
        bb.limit = limit;
        break;
      }

      // optional ViewCamera view_camera = 15;
      case 15: {
        let limit = pushTemporaryLength(bb);
        message.view_camera = _decodeViewCamera(bb);
        bb.limit = limit;
        break;
      }

      // optional bool video_ack_required = 9;
      case 9: {
        message.video_ack_required = !!readByte(bb);
        break;
      }

      // optional uint64 session_id = 10;
      case 10: {
        message.session_id = readVarint64(bb, /* unsigned */ true);
        break;
      }

      // optional string version = 11;
      case 11: {
        message.version = readString(bb, readVarint32(bb));
        break;
      }

      // optional OSLogin os_login = 12;
      case 12: {
        let limit = pushTemporaryLength(bb);
        message.os_login = _decodeOSLogin(bb);
        bb.limit = limit;
        break;
      }

      // optional string my_platform = 13;
      case 13: {
        message.my_platform = readString(bb, readVarint32(bb));
        break;
      }

      // optional bytes hwid = 14;
      case 14: {
        message.hwid = readBytes(bb, readVarint32(bb));
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export function encodeAuth2FA(message) {
  let bb = popByteBuffer();
  _encodeAuth2FA(message, bb);
  return toUint8Array(bb);
}

function _encodeAuth2FA(message, bb) {
  // optional string code = 1;
  let $code = message.code;
  if ($code !== undefined) {
    writeVarint32(bb, 10);
    writeString(bb, $code);
  }

  // optional bytes hwid = 2;
  let $hwid = message.hwid;
  if ($hwid !== undefined) {
    writeVarint32(bb, 18);
    writeVarint32(bb, $hwid.length), writeBytes(bb, $hwid);
  }
}

export function decodeAuth2FA(binary) {
  return _decodeAuth2FA(wrapByteBuffer(binary));
}

function _decodeAuth2FA(bb) {
  let message = {};

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional string code = 1;
      case 1: {
        message.code = readString(bb, readVarint32(bb));
        break;
      }

      // optional bytes hwid = 2;
      case 2: {
        message.hwid = readBytes(bb, readVarint32(bb));
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export function encodeChatMessage(message) {
  let bb = popByteBuffer();
  _encodeChatMessage(message, bb);
  return toUint8Array(bb);
}

function _encodeChatMessage(message, bb) {
  // optional string text = 1;
  let $text = message.text;
  if ($text !== undefined) {
    writeVarint32(bb, 10);
    writeString(bb, $text);
  }
}

export function decodeChatMessage(binary) {
  return _decodeChatMessage(wrapByteBuffer(binary));
}

function _decodeChatMessage(bb) {
  let message = {};

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional string text = 1;
      case 1: {
        message.text = readString(bb, readVarint32(bb));
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export function encodeFeatures(message) {
  let bb = popByteBuffer();
  _encodeFeatures(message, bb);
  return toUint8Array(bb);
}

function _encodeFeatures(message, bb) {
  // optional bool privacy_mode = 1;
  let $privacy_mode = message.privacy_mode;
  if ($privacy_mode !== undefined) {
    writeVarint32(bb, 8);
    writeByte(bb, $privacy_mode ? 1 : 0);
  }
}

export function decodeFeatures(binary) {
  return _decodeFeatures(wrapByteBuffer(binary));
}

function _decodeFeatures(bb) {
  let message = {};

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional bool privacy_mode = 1;
      case 1: {
        message.privacy_mode = !!readByte(bb);
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export function encodeCodecAbility(message) {
  let bb = popByteBuffer();
  _encodeCodecAbility(message, bb);
  return toUint8Array(bb);
}

function _encodeCodecAbility(message, bb) {
  // optional bool vp8 = 1;
  let $vp8 = message.vp8;
  if ($vp8 !== undefined) {
    writeVarint32(bb, 8);
    writeByte(bb, $vp8 ? 1 : 0);
  }

  // optional bool vp9 = 2;
  let $vp9 = message.vp9;
  if ($vp9 !== undefined) {
    writeVarint32(bb, 16);
    writeByte(bb, $vp9 ? 1 : 0);
  }

  // optional bool av1 = 3;
  let $av1 = message.av1;
  if ($av1 !== undefined) {
    writeVarint32(bb, 24);
    writeByte(bb, $av1 ? 1 : 0);
  }

  // optional bool h264 = 4;
  let $h264 = message.h264;
  if ($h264 !== undefined) {
    writeVarint32(bb, 32);
    writeByte(bb, $h264 ? 1 : 0);
  }

  // optional bool h265 = 5;
  let $h265 = message.h265;
  if ($h265 !== undefined) {
    writeVarint32(bb, 40);
    writeByte(bb, $h265 ? 1 : 0);
  }
}

export function decodeCodecAbility(binary) {
  return _decodeCodecAbility(wrapByteBuffer(binary));
}

function _decodeCodecAbility(bb) {
  let message = {};

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional bool vp8 = 1;
      case 1: {
        message.vp8 = !!readByte(bb);
        break;
      }

      // optional bool vp9 = 2;
      case 2: {
        message.vp9 = !!readByte(bb);
        break;
      }

      // optional bool av1 = 3;
      case 3: {
        message.av1 = !!readByte(bb);
        break;
      }

      // optional bool h264 = 4;
      case 4: {
        message.h264 = !!readByte(bb);
        break;
      }

      // optional bool h265 = 5;
      case 5: {
        message.h265 = !!readByte(bb);
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export function encodeSupportedEncoding(message) {
  let bb = popByteBuffer();
  _encodeSupportedEncoding(message, bb);
  return toUint8Array(bb);
}

function _encodeSupportedEncoding(message, bb) {
  // optional bool h264 = 1;
  let $h264 = message.h264;
  if ($h264 !== undefined) {
    writeVarint32(bb, 8);
    writeByte(bb, $h264 ? 1 : 0);
  }

  // optional bool h265 = 2;
  let $h265 = message.h265;
  if ($h265 !== undefined) {
    writeVarint32(bb, 16);
    writeByte(bb, $h265 ? 1 : 0);
  }

  // optional bool vp8 = 3;
  let $vp8 = message.vp8;
  if ($vp8 !== undefined) {
    writeVarint32(bb, 24);
    writeByte(bb, $vp8 ? 1 : 0);
  }

  // optional bool av1 = 4;
  let $av1 = message.av1;
  if ($av1 !== undefined) {
    writeVarint32(bb, 32);
    writeByte(bb, $av1 ? 1 : 0);
  }

  // optional CodecAbility i444 = 5;
  let $i444 = message.i444;
  if ($i444 !== undefined) {
    writeVarint32(bb, 42);
    let nested = popByteBuffer();
    _encodeCodecAbility($i444, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }
}

export function decodeSupportedEncoding(binary) {
  return _decodeSupportedEncoding(wrapByteBuffer(binary));
}

function _decodeSupportedEncoding(bb) {
  let message = {};

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional bool h264 = 1;
      case 1: {
        message.h264 = !!readByte(bb);
        break;
      }

      // optional bool h265 = 2;
      case 2: {
        message.h265 = !!readByte(bb);
        break;
      }

      // optional bool vp8 = 3;
      case 3: {
        message.vp8 = !!readByte(bb);
        break;
      }

      // optional bool av1 = 4;
      case 4: {
        message.av1 = !!readByte(bb);
        break;
      }

      // optional CodecAbility i444 = 5;
      case 5: {
        let limit = pushTemporaryLength(bb);
        message.i444 = _decodeCodecAbility(bb);
        bb.limit = limit;
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export function encodePeerInfo(message) {
  let bb = popByteBuffer();
  _encodePeerInfo(message, bb);
  return toUint8Array(bb);
}

function _encodePeerInfo(message, bb) {
  // optional string username = 1;
  let $username = message.username;
  if ($username !== undefined) {
    writeVarint32(bb, 10);
    writeString(bb, $username);
  }

  // optional string hostname = 2;
  let $hostname = message.hostname;
  if ($hostname !== undefined) {
    writeVarint32(bb, 18);
    writeString(bb, $hostname);
  }

  // optional string platform = 3;
  let $platform = message.platform;
  if ($platform !== undefined) {
    writeVarint32(bb, 26);
    writeString(bb, $platform);
  }

  // repeated DisplayInfo displays = 4;
  let array$displays = message.displays;
  if (array$displays !== undefined) {
    for (let value of array$displays) {
      writeVarint32(bb, 34);
      let nested = popByteBuffer();
      _encodeDisplayInfo(value, nested);
      writeVarint32(bb, nested.limit);
      writeByteBuffer(bb, nested);
      pushByteBuffer(nested);
    }
  }

  // optional int32 current_display = 5;
  let $current_display = message.current_display;
  if ($current_display !== undefined) {
    writeVarint32(bb, 40);
    writeVarint64(bb, intToLong($current_display));
  }

  // optional bool sas_enabled = 6;
  let $sas_enabled = message.sas_enabled;
  if ($sas_enabled !== undefined) {
    writeVarint32(bb, 48);
    writeByte(bb, $sas_enabled ? 1 : 0);
  }

  // optional string version = 7;
  let $version = message.version;
  if ($version !== undefined) {
    writeVarint32(bb, 58);
    writeString(bb, $version);
  }

  // optional Features features = 9;
  let $features = message.features;
  if ($features !== undefined) {
    writeVarint32(bb, 74);
    let nested = popByteBuffer();
    _encodeFeatures($features, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional SupportedEncoding encoding = 10;
  let $encoding = message.encoding;
  if ($encoding !== undefined) {
    writeVarint32(bb, 82);
    let nested = popByteBuffer();
    _encodeSupportedEncoding($encoding, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional SupportedResolutions resolutions = 11;
  let $resolutions = message.resolutions;
  if ($resolutions !== undefined) {
    writeVarint32(bb, 90);
    let nested = popByteBuffer();
    _encodeSupportedResolutions($resolutions, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional string platform_additions = 12;
  let $platform_additions = message.platform_additions;
  if ($platform_additions !== undefined) {
    writeVarint32(bb, 98);
    writeString(bb, $platform_additions);
  }

  // optional WindowsSessions windows_sessions = 13;
  let $windows_sessions = message.windows_sessions;
  if ($windows_sessions !== undefined) {
    writeVarint32(bb, 106);
    let nested = popByteBuffer();
    _encodeWindowsSessions($windows_sessions, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }
}

export function decodePeerInfo(binary) {
  return _decodePeerInfo(wrapByteBuffer(binary));
}

function _decodePeerInfo(bb) {
  let message = {};

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional string username = 1;
      case 1: {
        message.username = readString(bb, readVarint32(bb));
        break;
      }

      // optional string hostname = 2;
      case 2: {
        message.hostname = readString(bb, readVarint32(bb));
        break;
      }

      // optional string platform = 3;
      case 3: {
        message.platform = readString(bb, readVarint32(bb));
        break;
      }

      // repeated DisplayInfo displays = 4;
      case 4: {
        let limit = pushTemporaryLength(bb);
        let values = message.displays || (message.displays = []);
        values.push(_decodeDisplayInfo(bb));
        bb.limit = limit;
        break;
      }

      // optional int32 current_display = 5;
      case 5: {
        message.current_display = readVarint32(bb);
        break;
      }

      // optional bool sas_enabled = 6;
      case 6: {
        message.sas_enabled = !!readByte(bb);
        break;
      }

      // optional string version = 7;
      case 7: {
        message.version = readString(bb, readVarint32(bb));
        break;
      }

      // optional Features features = 9;
      case 9: {
        let limit = pushTemporaryLength(bb);
        message.features = _decodeFeatures(bb);
        bb.limit = limit;
        break;
      }

      // optional SupportedEncoding encoding = 10;
      case 10: {
        let limit = pushTemporaryLength(bb);
        message.encoding = _decodeSupportedEncoding(bb);
        bb.limit = limit;
        break;
      }

      // optional SupportedResolutions resolutions = 11;
      case 11: {
        let limit = pushTemporaryLength(bb);
        message.resolutions = _decodeSupportedResolutions(bb);
        bb.limit = limit;
        break;
      }

      // optional string platform_additions = 12;
      case 12: {
        message.platform_additions = readString(bb, readVarint32(bb));
        break;
      }

      // optional WindowsSessions windows_sessions = 13;
      case 13: {
        let limit = pushTemporaryLength(bb);
        message.windows_sessions = _decodeWindowsSessions(bb);
        bb.limit = limit;
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export function encodeWindowsSession(message) {
  let bb = popByteBuffer();
  _encodeWindowsSession(message, bb);
  return toUint8Array(bb);
}

function _encodeWindowsSession(message, bb) {
  // optional uint32 sid = 1;
  let $sid = message.sid;
  if ($sid !== undefined) {
    writeVarint32(bb, 8);
    writeVarint32(bb, $sid);
  }

  // optional string name = 2;
  let $name = message.name;
  if ($name !== undefined) {
    writeVarint32(bb, 18);
    writeString(bb, $name);
  }
}

export function decodeWindowsSession(binary) {
  return _decodeWindowsSession(wrapByteBuffer(binary));
}

function _decodeWindowsSession(bb) {
  let message = {};

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional uint32 sid = 1;
      case 1: {
        message.sid = readVarint32(bb) >>> 0;
        break;
      }

      // optional string name = 2;
      case 2: {
        message.name = readString(bb, readVarint32(bb));
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export function encodeLoginResponse(message) {
  let bb = popByteBuffer();
  _encodeLoginResponse(message, bb);
  return toUint8Array(bb);
}

function _encodeLoginResponse(message, bb) {
  // optional string error = 1;
  let $error = message.error;
  if ($error !== undefined) {
    writeVarint32(bb, 10);
    writeString(bb, $error);
  }

  // optional PeerInfo peer_info = 2;
  let $peer_info = message.peer_info;
  if ($peer_info !== undefined) {
    writeVarint32(bb, 18);
    let nested = popByteBuffer();
    _encodePeerInfo($peer_info, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional bool enable_trusted_devices = 3;
  let $enable_trusted_devices = message.enable_trusted_devices;
  if ($enable_trusted_devices !== undefined) {
    writeVarint32(bb, 24);
    writeByte(bb, $enable_trusted_devices ? 1 : 0);
  }
}

export function decodeLoginResponse(binary) {
  return _decodeLoginResponse(wrapByteBuffer(binary));
}

function _decodeLoginResponse(bb) {
  let message = {};

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional string error = 1;
      case 1: {
        message.error = readString(bb, readVarint32(bb));
        break;
      }

      // optional PeerInfo peer_info = 2;
      case 2: {
        let limit = pushTemporaryLength(bb);
        message.peer_info = _decodePeerInfo(bb);
        bb.limit = limit;
        break;
      }

      // optional bool enable_trusted_devices = 3;
      case 3: {
        message.enable_trusted_devices = !!readByte(bb);
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export function encodeTouchScaleUpdate(message) {
  let bb = popByteBuffer();
  _encodeTouchScaleUpdate(message, bb);
  return toUint8Array(bb);
}

function _encodeTouchScaleUpdate(message, bb) {
  // optional int32 scale = 1;
  let $scale = message.scale;
  if ($scale !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, intToLong($scale));
  }
}

export function decodeTouchScaleUpdate(binary) {
  return _decodeTouchScaleUpdate(wrapByteBuffer(binary));
}

function _decodeTouchScaleUpdate(bb) {
  let message = {};

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional int32 scale = 1;
      case 1: {
        message.scale = readVarint32(bb);
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export function encodeTouchPanStart(message) {
  let bb = popByteBuffer();
  _encodeTouchPanStart(message, bb);
  return toUint8Array(bb);
}

function _encodeTouchPanStart(message, bb) {
  // optional int32 x = 1;
  let $x = message.x;
  if ($x !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, intToLong($x));
  }

  // optional int32 y = 2;
  let $y = message.y;
  if ($y !== undefined) {
    writeVarint32(bb, 16);
    writeVarint64(bb, intToLong($y));
  }
}

export function decodeTouchPanStart(binary) {
  return _decodeTouchPanStart(wrapByteBuffer(binary));
}

function _decodeTouchPanStart(bb) {
  let message = {};

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional int32 x = 1;
      case 1: {
        message.x = readVarint32(bb);
        break;
      }

      // optional int32 y = 2;
      case 2: {
        message.y = readVarint32(bb);
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export function encodeTouchPanUpdate(message) {
  let bb = popByteBuffer();
  _encodeTouchPanUpdate(message, bb);
  return toUint8Array(bb);
}

function _encodeTouchPanUpdate(message, bb) {
  // optional int32 x = 1;
  let $x = message.x;
  if ($x !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, intToLong($x));
  }

  // optional int32 y = 2;
  let $y = message.y;
  if ($y !== undefined) {
    writeVarint32(bb, 16);
    writeVarint64(bb, intToLong($y));
  }
}

export function decodeTouchPanUpdate(binary) {
  return _decodeTouchPanUpdate(wrapByteBuffer(binary));
}

function _decodeTouchPanUpdate(bb) {
  let message = {};

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional int32 x = 1;
      case 1: {
        message.x = readVarint32(bb);
        break;
      }

      // optional int32 y = 2;
      case 2: {
        message.y = readVarint32(bb);
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export function encodeTouchPanEnd(message) {
  let bb = popByteBuffer();
  _encodeTouchPanEnd(message, bb);
  return toUint8Array(bb);
}

function _encodeTouchPanEnd(message, bb) {
  // optional int32 x = 1;
  let $x = message.x;
  if ($x !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, intToLong($x));
  }

  // optional int32 y = 2;
  let $y = message.y;
  if ($y !== undefined) {
    writeVarint32(bb, 16);
    writeVarint64(bb, intToLong($y));
  }
}

export function decodeTouchPanEnd(binary) {
  return _decodeTouchPanEnd(wrapByteBuffer(binary));
}

function _decodeTouchPanEnd(bb) {
  let message = {};

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional int32 x = 1;
      case 1: {
        message.x = readVarint32(bb);
        break;
      }

      // optional int32 y = 2;
      case 2: {
        message.y = readVarint32(bb);
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export function encodeTouchEvent(message) {
  let bb = popByteBuffer();
  _encodeTouchEvent(message, bb);
  return toUint8Array(bb);
}

function _encodeTouchEvent(message, bb) {
  // optional TouchScaleUpdate scale_update = 1;
  let $scale_update = message.scale_update;
  if ($scale_update !== undefined) {
    writeVarint32(bb, 10);
    let nested = popByteBuffer();
    _encodeTouchScaleUpdate($scale_update, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional TouchPanStart pan_start = 2;
  let $pan_start = message.pan_start;
  if ($pan_start !== undefined) {
    writeVarint32(bb, 18);
    let nested = popByteBuffer();
    _encodeTouchPanStart($pan_start, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional TouchPanUpdate pan_update = 3;
  let $pan_update = message.pan_update;
  if ($pan_update !== undefined) {
    writeVarint32(bb, 26);
    let nested = popByteBuffer();
    _encodeTouchPanUpdate($pan_update, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional TouchPanEnd pan_end = 4;
  let $pan_end = message.pan_end;
  if ($pan_end !== undefined) {
    writeVarint32(bb, 34);
    let nested = popByteBuffer();
    _encodeTouchPanEnd($pan_end, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }
}

export function decodeTouchEvent(binary) {
  return _decodeTouchEvent(wrapByteBuffer(binary));
}

function _decodeTouchEvent(bb) {
  let message = {};

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional TouchScaleUpdate scale_update = 1;
      case 1: {
        let limit = pushTemporaryLength(bb);
        message.scale_update = _decodeTouchScaleUpdate(bb);
        bb.limit = limit;
        break;
      }

      // optional TouchPanStart pan_start = 2;
      case 2: {
        let limit = pushTemporaryLength(bb);
        message.pan_start = _decodeTouchPanStart(bb);
        bb.limit = limit;
        break;
      }

      // optional TouchPanUpdate pan_update = 3;
      case 3: {
        let limit = pushTemporaryLength(bb);
        message.pan_update = _decodeTouchPanUpdate(bb);
        bb.limit = limit;
        break;
      }

      // optional TouchPanEnd pan_end = 4;
      case 4: {
        let limit = pushTemporaryLength(bb);
        message.pan_end = _decodeTouchPanEnd(bb);
        bb.limit = limit;
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export function encodePointerDeviceEvent(message) {
  let bb = popByteBuffer();
  _encodePointerDeviceEvent(message, bb);
  return toUint8Array(bb);
}

function _encodePointerDeviceEvent(message, bb) {
  // optional TouchEvent touch_event = 1;
  let $touch_event = message.touch_event;
  if ($touch_event !== undefined) {
    writeVarint32(bb, 10);
    let nested = popByteBuffer();
    _encodeTouchEvent($touch_event, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // repeated ControlKey modifiers = 2;
  let array$modifiers = message.modifiers;
  if (array$modifiers !== undefined) {
    let packed = popByteBuffer();
    for (let value of array$modifiers) {
      writeVarint32(packed, encodeControlKey[value]);
    }
    writeVarint32(bb, 18);
    writeVarint32(bb, packed.offset);
    writeByteBuffer(bb, packed);
    pushByteBuffer(packed);
  }
}

export function decodePointerDeviceEvent(binary) {
  return _decodePointerDeviceEvent(wrapByteBuffer(binary));
}

function _decodePointerDeviceEvent(bb) {
  let message = {};

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional TouchEvent touch_event = 1;
      case 1: {
        let limit = pushTemporaryLength(bb);
        message.touch_event = _decodeTouchEvent(bb);
        bb.limit = limit;
        break;
      }

      // repeated ControlKey modifiers = 2;
      case 2: {
        let values = message.modifiers || (message.modifiers = []);
        if ((tag & 7) === 2) {
          let outerLimit = pushTemporaryLength(bb);
          while (!isAtEnd(bb)) {
            values.push(decodeControlKey[readVarint32(bb)]);
          }
          bb.limit = outerLimit;
        } else {
          values.push(decodeControlKey[readVarint32(bb)]);
        }
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export function encodeMouseEvent(message) {
  let bb = popByteBuffer();
  _encodeMouseEvent(message, bb);
  return toUint8Array(bb);
}

function _encodeMouseEvent(message, bb) {
  // optional int32 mask = 1;
  let $mask = message.mask;
  if ($mask !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, intToLong($mask));
  }

  // optional sint32 x = 2;
  let $x = message.x;
  if ($x !== undefined) {
    writeVarint32(bb, 16);
    writeVarint32ZigZag(bb, $x);
  }

  // optional sint32 y = 3;
  let $y = message.y;
  if ($y !== undefined) {
    writeVarint32(bb, 24);
    writeVarint32ZigZag(bb, $y);
  }

  // repeated ControlKey modifiers = 4;
  let array$modifiers = message.modifiers;
  if (array$modifiers !== undefined) {
    let packed = popByteBuffer();
    for (let value of array$modifiers) {
      writeVarint32(packed, encodeControlKey[value]);
    }
    writeVarint32(bb, 34);
    writeVarint32(bb, packed.offset);
    writeByteBuffer(bb, packed);
    pushByteBuffer(packed);
  }
}

export function decodeMouseEvent(binary) {
  return _decodeMouseEvent(wrapByteBuffer(binary));
}

function _decodeMouseEvent(bb) {
  let message = {};

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional int32 mask = 1;
      case 1: {
        message.mask = readVarint32(bb);
        break;
      }

      // optional sint32 x = 2;
      case 2: {
        message.x = readVarint32ZigZag(bb);
        break;
      }

      // optional sint32 y = 3;
      case 3: {
        message.y = readVarint32ZigZag(bb);
        break;
      }

      // repeated ControlKey modifiers = 4;
      case 4: {
        let values = message.modifiers || (message.modifiers = []);
        if ((tag & 7) === 2) {
          let outerLimit = pushTemporaryLength(bb);
          while (!isAtEnd(bb)) {
            values.push(decodeControlKey[readVarint32(bb)]);
          }
          bb.limit = outerLimit;
        } else {
          values.push(decodeControlKey[readVarint32(bb)]);
        }
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export function encodeKeyEvent(message) {
  let bb = popByteBuffer();
  _encodeKeyEvent(message, bb);
  return toUint8Array(bb);
}

function _encodeKeyEvent(message, bb) {
  // optional bool down = 1;
  let $down = message.down;
  if ($down !== undefined) {
    writeVarint32(bb, 8);
    writeByte(bb, $down ? 1 : 0);
  }

  // optional bool press = 2;
  let $press = message.press;
  if ($press !== undefined) {
    writeVarint32(bb, 16);
    writeByte(bb, $press ? 1 : 0);
  }

  // optional ControlKey control_key = 3;
  let $control_key = message.control_key;
  if ($control_key !== undefined) {
    writeVarint32(bb, 24);
    writeVarint32(bb, encodeControlKey[$control_key]);
  }

  // optional uint32 chr = 4;
  let $chr = message.chr;
  if ($chr !== undefined) {
    writeVarint32(bb, 32);
    writeVarint32(bb, $chr);
  }

  // optional uint32 unicode = 5;
  let $unicode = message.unicode;
  if ($unicode !== undefined) {
    writeVarint32(bb, 40);
    writeVarint32(bb, $unicode);
  }

  // optional string seq = 6;
  let $seq = message.seq;
  if ($seq !== undefined) {
    writeVarint32(bb, 50);
    writeString(bb, $seq);
  }

  // optional uint32 win2win_hotkey = 7;
  let $win2win_hotkey = message.win2win_hotkey;
  if ($win2win_hotkey !== undefined) {
    writeVarint32(bb, 56);
    writeVarint32(bb, $win2win_hotkey);
  }

  // repeated ControlKey modifiers = 8;
  let array$modifiers = message.modifiers;
  if (array$modifiers !== undefined) {
    let packed = popByteBuffer();
    for (let value of array$modifiers) {
      writeVarint32(packed, encodeControlKey[value]);
    }
    writeVarint32(bb, 66);
    writeVarint32(bb, packed.offset);
    writeByteBuffer(bb, packed);
    pushByteBuffer(packed);
  }

  // optional KeyboardMode mode = 9;
  let $mode = message.mode;
  if ($mode !== undefined) {
    writeVarint32(bb, 72);
    writeVarint32(bb, encodeKeyboardMode[$mode]);
  }
}

export function decodeKeyEvent(binary) {
  return _decodeKeyEvent(wrapByteBuffer(binary));
}

function _decodeKeyEvent(bb) {
  let message = {};

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional bool down = 1;
      case 1: {
        message.down = !!readByte(bb);
        break;
      }

      // optional bool press = 2;
      case 2: {
        message.press = !!readByte(bb);
        break;
      }

      // optional ControlKey control_key = 3;
      case 3: {
        message.control_key = decodeControlKey[readVarint32(bb)];
        break;
      }

      // optional uint32 chr = 4;
      case 4: {
        message.chr = readVarint32(bb) >>> 0;
        break;
      }

      // optional uint32 unicode = 5;
      case 5: {
        message.unicode = readVarint32(bb) >>> 0;
        break;
      }

      // optional string seq = 6;
      case 6: {
        message.seq = readString(bb, readVarint32(bb));
        break;
      }

      // optional uint32 win2win_hotkey = 7;
      case 7: {
        message.win2win_hotkey = readVarint32(bb) >>> 0;
        break;
      }

      // repeated ControlKey modifiers = 8;
      case 8: {
        let values = message.modifiers || (message.modifiers = []);
        if ((tag & 7) === 2) {
          let outerLimit = pushTemporaryLength(bb);
          while (!isAtEnd(bb)) {
            values.push(decodeControlKey[readVarint32(bb)]);
          }
          bb.limit = outerLimit;
        } else {
          values.push(decodeControlKey[readVarint32(bb)]);
        }
        break;
      }

      // optional KeyboardMode mode = 9;
      case 9: {
        message.mode = decodeKeyboardMode[readVarint32(bb)];
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export function encodeCursorData(message) {
  let bb = popByteBuffer();
  _encodeCursorData(message, bb);
  return toUint8Array(bb);
}

function _encodeCursorData(message, bb) {
  // optional uint64 id = 1;
  let $id = message.id;
  if ($id !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, $id);
  }

  // optional sint32 hotx = 2;
  let $hotx = message.hotx;
  if ($hotx !== undefined) {
    writeVarint32(bb, 16);
    writeVarint32ZigZag(bb, $hotx);
  }

  // optional sint32 hoty = 3;
  let $hoty = message.hoty;
  if ($hoty !== undefined) {
    writeVarint32(bb, 24);
    writeVarint32ZigZag(bb, $hoty);
  }

  // optional int32 width = 4;
  let $width = message.width;
  if ($width !== undefined) {
    writeVarint32(bb, 32);
    writeVarint64(bb, intToLong($width));
  }

  // optional int32 height = 5;
  let $height = message.height;
  if ($height !== undefined) {
    writeVarint32(bb, 40);
    writeVarint64(bb, intToLong($height));
  }

  // optional bytes colors = 6;
  let $colors = message.colors;
  if ($colors !== undefined) {
    writeVarint32(bb, 50);
    writeVarint32(bb, $colors.length), writeBytes(bb, $colors);
  }
}

export function decodeCursorData(binary) {
  return _decodeCursorData(wrapByteBuffer(binary));
}

function _decodeCursorData(bb) {
  let message = {};

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional uint64 id = 1;
      case 1: {
        message.id = readVarint64(bb, /* unsigned */ true);
        break;
      }

      // optional sint32 hotx = 2;
      case 2: {
        message.hotx = readVarint32ZigZag(bb);
        break;
      }

      // optional sint32 hoty = 3;
      case 3: {
        message.hoty = readVarint32ZigZag(bb);
        break;
      }

      // optional int32 width = 4;
      case 4: {
        message.width = readVarint32(bb);
        break;
      }

      // optional int32 height = 5;
      case 5: {
        message.height = readVarint32(bb);
        break;
      }

      // optional bytes colors = 6;
      case 6: {
        message.colors = readBytes(bb, readVarint32(bb));
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export function encodeCursorPosition(message) {
  let bb = popByteBuffer();
  _encodeCursorPosition(message, bb);
  return toUint8Array(bb);
}

function _encodeCursorPosition(message, bb) {
  // optional sint32 x = 1;
  let $x = message.x;
  if ($x !== undefined) {
    writeVarint32(bb, 8);
    writeVarint32ZigZag(bb, $x);
  }

  // optional sint32 y = 2;
  let $y = message.y;
  if ($y !== undefined) {
    writeVarint32(bb, 16);
    writeVarint32ZigZag(bb, $y);
  }
}

export function decodeCursorPosition(binary) {
  return _decodeCursorPosition(wrapByteBuffer(binary));
}

function _decodeCursorPosition(bb) {
  let message = {};

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional sint32 x = 1;
      case 1: {
        message.x = readVarint32ZigZag(bb);
        break;
      }

      // optional sint32 y = 2;
      case 2: {
        message.y = readVarint32ZigZag(bb);
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export function encodeHash(message) {
  let bb = popByteBuffer();
  _encodeHash(message, bb);
  return toUint8Array(bb);
}

function _encodeHash(message, bb) {
  // optional string salt = 1;
  let $salt = message.salt;
  if ($salt !== undefined) {
    writeVarint32(bb, 10);
    writeString(bb, $salt);
  }

  // optional string challenge = 2;
  let $challenge = message.challenge;
  if ($challenge !== undefined) {
    writeVarint32(bb, 18);
    writeString(bb, $challenge);
  }
}

export function decodeHash(binary) {
  return _decodeHash(wrapByteBuffer(binary));
}

function _decodeHash(bb) {
  let message = {};

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional string salt = 1;
      case 1: {
        message.salt = readString(bb, readVarint32(bb));
        break;
      }

      // optional string challenge = 2;
      case 2: {
        message.challenge = readString(bb, readVarint32(bb));
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export function encodeClipboard(message) {
  let bb = popByteBuffer();
  _encodeClipboard(message, bb);
  return toUint8Array(bb);
}

function _encodeClipboard(message, bb) {
  // optional bool compress = 1;
  let $compress = message.compress;
  if ($compress !== undefined) {
    writeVarint32(bb, 8);
    writeByte(bb, $compress ? 1 : 0);
  }

  // optional bytes content = 2;
  let $content = message.content;
  if ($content !== undefined) {
    writeVarint32(bb, 18);
    writeVarint32(bb, $content.length), writeBytes(bb, $content);
  }

  // optional int32 width = 3;
  let $width = message.width;
  if ($width !== undefined) {
    writeVarint32(bb, 24);
    writeVarint64(bb, intToLong($width));
  }

  // optional int32 height = 4;
  let $height = message.height;
  if ($height !== undefined) {
    writeVarint32(bb, 32);
    writeVarint64(bb, intToLong($height));
  }

  // optional ClipboardFormat format = 5;
  let $format = message.format;
  if ($format !== undefined) {
    writeVarint32(bb, 40);
    writeVarint32(bb, encodeClipboardFormat[$format]);
  }

  // optional string special_name = 6;
  let $special_name = message.special_name;
  if ($special_name !== undefined) {
    writeVarint32(bb, 50);
    writeString(bb, $special_name);
  }
}

export function decodeClipboard(binary) {
  return _decodeClipboard(wrapByteBuffer(binary));
}

function _decodeClipboard(bb) {
  let message = {};

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional bool compress = 1;
      case 1: {
        message.compress = !!readByte(bb);
        break;
      }

      // optional bytes content = 2;
      case 2: {
        message.content = readBytes(bb, readVarint32(bb));
        break;
      }

      // optional int32 width = 3;
      case 3: {
        message.width = readVarint32(bb);
        break;
      }

      // optional int32 height = 4;
      case 4: {
        message.height = readVarint32(bb);
        break;
      }

      // optional ClipboardFormat format = 5;
      case 5: {
        message.format = decodeClipboardFormat[readVarint32(bb)];
        break;
      }

      // optional string special_name = 6;
      case 6: {
        message.special_name = readString(bb, readVarint32(bb));
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export function encodeMultiClipboards(message) {
  let bb = popByteBuffer();
  _encodeMultiClipboards(message, bb);
  return toUint8Array(bb);
}

function _encodeMultiClipboards(message, bb) {
  // repeated Clipboard clipboards = 1;
  let array$clipboards = message.clipboards;
  if (array$clipboards !== undefined) {
    for (let value of array$clipboards) {
      writeVarint32(bb, 10);
      let nested = popByteBuffer();
      _encodeClipboard(value, nested);
      writeVarint32(bb, nested.limit);
      writeByteBuffer(bb, nested);
      pushByteBuffer(nested);
    }
  }
}

export function decodeMultiClipboards(binary) {
  return _decodeMultiClipboards(wrapByteBuffer(binary));
}

function _decodeMultiClipboards(bb) {
  let message = {};

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // repeated Clipboard clipboards = 1;
      case 1: {
        let limit = pushTemporaryLength(bb);
        let values = message.clipboards || (message.clipboards = []);
        values.push(_decodeClipboard(bb));
        bb.limit = limit;
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export function encodeFileEntry(message) {
  let bb = popByteBuffer();
  _encodeFileEntry(message, bb);
  return toUint8Array(bb);
}

function _encodeFileEntry(message, bb) {
  // optional FileType entry_type = 1;
  let $entry_type = message.entry_type;
  if ($entry_type !== undefined) {
    writeVarint32(bb, 8);
    writeVarint32(bb, encodeFileType[$entry_type]);
  }

  // optional string name = 2;
  let $name = message.name;
  if ($name !== undefined) {
    writeVarint32(bb, 18);
    writeString(bb, $name);
  }

  // optional bool is_hidden = 3;
  let $is_hidden = message.is_hidden;
  if ($is_hidden !== undefined) {
    writeVarint32(bb, 24);
    writeByte(bb, $is_hidden ? 1 : 0);
  }

  // optional uint64 size = 4;
  let $size = message.size;
  if ($size !== undefined) {
    writeVarint32(bb, 32);
    writeVarint64(bb, $size);
  }

  // optional uint64 modified_time = 5;
  let $modified_time = message.modified_time;
  if ($modified_time !== undefined) {
    writeVarint32(bb, 40);
    writeVarint64(bb, $modified_time);
  }
}

export function decodeFileEntry(binary) {
  return _decodeFileEntry(wrapByteBuffer(binary));
}

function _decodeFileEntry(bb) {
  let message = {};

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional FileType entry_type = 1;
      case 1: {
        message.entry_type = decodeFileType[readVarint32(bb)];
        break;
      }

      // optional string name = 2;
      case 2: {
        message.name = readString(bb, readVarint32(bb));
        break;
      }

      // optional bool is_hidden = 3;
      case 3: {
        message.is_hidden = !!readByte(bb);
        break;
      }

      // optional uint64 size = 4;
      case 4: {
        message.size = readVarint64(bb, /* unsigned */ true);
        break;
      }

      // optional uint64 modified_time = 5;
      case 5: {
        message.modified_time = readVarint64(bb, /* unsigned */ true);
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export function encodeFileDirectory(message) {
  let bb = popByteBuffer();
  _encodeFileDirectory(message, bb);
  return toUint8Array(bb);
}

function _encodeFileDirectory(message, bb) {
  // optional int32 id = 1;
  let $id = message.id;
  if ($id !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, intToLong($id));
  }

  // optional string path = 2;
  let $path = message.path;
  if ($path !== undefined) {
    writeVarint32(bb, 18);
    writeString(bb, $path);
  }

  // repeated FileEntry entries = 3;
  let array$entries = message.entries;
  if (array$entries !== undefined) {
    for (let value of array$entries) {
      writeVarint32(bb, 26);
      let nested = popByteBuffer();
      _encodeFileEntry(value, nested);
      writeVarint32(bb, nested.limit);
      writeByteBuffer(bb, nested);
      pushByteBuffer(nested);
    }
  }
}

export function decodeFileDirectory(binary) {
  return _decodeFileDirectory(wrapByteBuffer(binary));
}

function _decodeFileDirectory(bb) {
  let message = {};

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional int32 id = 1;
      case 1: {
        message.id = readVarint32(bb);
        break;
      }

      // optional string path = 2;
      case 2: {
        message.path = readString(bb, readVarint32(bb));
        break;
      }

      // repeated FileEntry entries = 3;
      case 3: {
        let limit = pushTemporaryLength(bb);
        let values = message.entries || (message.entries = []);
        values.push(_decodeFileEntry(bb));
        bb.limit = limit;
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export function encodeReadDir(message) {
  let bb = popByteBuffer();
  _encodeReadDir(message, bb);
  return toUint8Array(bb);
}

function _encodeReadDir(message, bb) {
  // optional string path = 1;
  let $path = message.path;
  if ($path !== undefined) {
    writeVarint32(bb, 10);
    writeString(bb, $path);
  }

  // optional bool include_hidden = 2;
  let $include_hidden = message.include_hidden;
  if ($include_hidden !== undefined) {
    writeVarint32(bb, 16);
    writeByte(bb, $include_hidden ? 1 : 0);
  }
}

export function decodeReadDir(binary) {
  return _decodeReadDir(wrapByteBuffer(binary));
}

function _decodeReadDir(bb) {
  let message = {};

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional string path = 1;
      case 1: {
        message.path = readString(bb, readVarint32(bb));
        break;
      }

      // optional bool include_hidden = 2;
      case 2: {
        message.include_hidden = !!readByte(bb);
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export function encodeReadEmptyDirs(message) {
  let bb = popByteBuffer();
  _encodeReadEmptyDirs(message, bb);
  return toUint8Array(bb);
}

function _encodeReadEmptyDirs(message, bb) {
  // optional string path = 1;
  let $path = message.path;
  if ($path !== undefined) {
    writeVarint32(bb, 10);
    writeString(bb, $path);
  }

  // optional bool include_hidden = 2;
  let $include_hidden = message.include_hidden;
  if ($include_hidden !== undefined) {
    writeVarint32(bb, 16);
    writeByte(bb, $include_hidden ? 1 : 0);
  }
}

export function decodeReadEmptyDirs(binary) {
  return _decodeReadEmptyDirs(wrapByteBuffer(binary));
}

function _decodeReadEmptyDirs(bb) {
  let message = {};

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional string path = 1;
      case 1: {
        message.path = readString(bb, readVarint32(bb));
        break;
      }

      // optional bool include_hidden = 2;
      case 2: {
        message.include_hidden = !!readByte(bb);
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export function encodeReadEmptyDirsResponse(message) {
  let bb = popByteBuffer();
  _encodeReadEmptyDirsResponse(message, bb);
  return toUint8Array(bb);
}

function _encodeReadEmptyDirsResponse(message, bb) {
  // optional string path = 1;
  let $path = message.path;
  if ($path !== undefined) {
    writeVarint32(bb, 10);
    writeString(bb, $path);
  }

  // repeated FileDirectory empty_dirs = 2;
  let array$empty_dirs = message.empty_dirs;
  if (array$empty_dirs !== undefined) {
    for (let value of array$empty_dirs) {
      writeVarint32(bb, 18);
      let nested = popByteBuffer();
      _encodeFileDirectory(value, nested);
      writeVarint32(bb, nested.limit);
      writeByteBuffer(bb, nested);
      pushByteBuffer(nested);
    }
  }
}

export function decodeReadEmptyDirsResponse(binary) {
  return _decodeReadEmptyDirsResponse(wrapByteBuffer(binary));
}

function _decodeReadEmptyDirsResponse(bb) {
  let message = {};

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional string path = 1;
      case 1: {
        message.path = readString(bb, readVarint32(bb));
        break;
      }

      // repeated FileDirectory empty_dirs = 2;
      case 2: {
        let limit = pushTemporaryLength(bb);
        let values = message.empty_dirs || (message.empty_dirs = []);
        values.push(_decodeFileDirectory(bb));
        bb.limit = limit;
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export function encodeReadAllFiles(message) {
  let bb = popByteBuffer();
  _encodeReadAllFiles(message, bb);
  return toUint8Array(bb);
}

function _encodeReadAllFiles(message, bb) {
  // optional int32 id = 1;
  let $id = message.id;
  if ($id !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, intToLong($id));
  }

  // optional string path = 2;
  let $path = message.path;
  if ($path !== undefined) {
    writeVarint32(bb, 18);
    writeString(bb, $path);
  }

  // optional bool include_hidden = 3;
  let $include_hidden = message.include_hidden;
  if ($include_hidden !== undefined) {
    writeVarint32(bb, 24);
    writeByte(bb, $include_hidden ? 1 : 0);
  }
}

export function decodeReadAllFiles(binary) {
  return _decodeReadAllFiles(wrapByteBuffer(binary));
}

function _decodeReadAllFiles(bb) {
  let message = {};

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional int32 id = 1;
      case 1: {
        message.id = readVarint32(bb);
        break;
      }

      // optional string path = 2;
      case 2: {
        message.path = readString(bb, readVarint32(bb));
        break;
      }

      // optional bool include_hidden = 3;
      case 3: {
        message.include_hidden = !!readByte(bb);
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export function encodeFileRename(message) {
  let bb = popByteBuffer();
  _encodeFileRename(message, bb);
  return toUint8Array(bb);
}

function _encodeFileRename(message, bb) {
  // optional int32 id = 1;
  let $id = message.id;
  if ($id !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, intToLong($id));
  }

  // optional string path = 2;
  let $path = message.path;
  if ($path !== undefined) {
    writeVarint32(bb, 18);
    writeString(bb, $path);
  }

  // optional string new_name = 3;
  let $new_name = message.new_name;
  if ($new_name !== undefined) {
    writeVarint32(bb, 26);
    writeString(bb, $new_name);
  }
}

export function decodeFileRename(binary) {
  return _decodeFileRename(wrapByteBuffer(binary));
}

function _decodeFileRename(bb) {
  let message = {};

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional int32 id = 1;
      case 1: {
        message.id = readVarint32(bb);
        break;
      }

      // optional string path = 2;
      case 2: {
        message.path = readString(bb, readVarint32(bb));
        break;
      }

      // optional string new_name = 3;
      case 3: {
        message.new_name = readString(bb, readVarint32(bb));
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export function encodeFileAction(message) {
  let bb = popByteBuffer();
  _encodeFileAction(message, bb);
  return toUint8Array(bb);
}

function _encodeFileAction(message, bb) {
  // optional ReadDir read_dir = 1;
  let $read_dir = message.read_dir;
  if ($read_dir !== undefined) {
    writeVarint32(bb, 10);
    let nested = popByteBuffer();
    _encodeReadDir($read_dir, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional FileTransferSendRequest send = 2;
  let $send = message.send;
  if ($send !== undefined) {
    writeVarint32(bb, 18);
    let nested = popByteBuffer();
    _encodeFileTransferSendRequest($send, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional FileTransferReceiveRequest receive = 3;
  let $receive = message.receive;
  if ($receive !== undefined) {
    writeVarint32(bb, 26);
    let nested = popByteBuffer();
    _encodeFileTransferReceiveRequest($receive, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional FileDirCreate create = 4;
  let $create = message.create;
  if ($create !== undefined) {
    writeVarint32(bb, 34);
    let nested = popByteBuffer();
    _encodeFileDirCreate($create, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional FileRemoveDir remove_dir = 5;
  let $remove_dir = message.remove_dir;
  if ($remove_dir !== undefined) {
    writeVarint32(bb, 42);
    let nested = popByteBuffer();
    _encodeFileRemoveDir($remove_dir, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional FileRemoveFile remove_file = 6;
  let $remove_file = message.remove_file;
  if ($remove_file !== undefined) {
    writeVarint32(bb, 50);
    let nested = popByteBuffer();
    _encodeFileRemoveFile($remove_file, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional ReadAllFiles all_files = 7;
  let $all_files = message.all_files;
  if ($all_files !== undefined) {
    writeVarint32(bb, 58);
    let nested = popByteBuffer();
    _encodeReadAllFiles($all_files, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional FileTransferCancel cancel = 8;
  let $cancel = message.cancel;
  if ($cancel !== undefined) {
    writeVarint32(bb, 66);
    let nested = popByteBuffer();
    _encodeFileTransferCancel($cancel, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional FileTransferSendConfirmRequest send_confirm = 9;
  let $send_confirm = message.send_confirm;
  if ($send_confirm !== undefined) {
    writeVarint32(bb, 74);
    let nested = popByteBuffer();
    _encodeFileTransferSendConfirmRequest($send_confirm, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional FileRename rename = 10;
  let $rename = message.rename;
  if ($rename !== undefined) {
    writeVarint32(bb, 82);
    let nested = popByteBuffer();
    _encodeFileRename($rename, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional ReadEmptyDirs read_empty_dirs = 11;
  let $read_empty_dirs = message.read_empty_dirs;
  if ($read_empty_dirs !== undefined) {
    writeVarint32(bb, 90);
    let nested = popByteBuffer();
    _encodeReadEmptyDirs($read_empty_dirs, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }
}

export function decodeFileAction(binary) {
  return _decodeFileAction(wrapByteBuffer(binary));
}

function _decodeFileAction(bb) {
  let message = {};

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional ReadDir read_dir = 1;
      case 1: {
        let limit = pushTemporaryLength(bb);
        message.read_dir = _decodeReadDir(bb);
        bb.limit = limit;
        break;
      }

      // optional FileTransferSendRequest send = 2;
      case 2: {
        let limit = pushTemporaryLength(bb);
        message.send = _decodeFileTransferSendRequest(bb);
        bb.limit = limit;
        break;
      }

      // optional FileTransferReceiveRequest receive = 3;
      case 3: {
        let limit = pushTemporaryLength(bb);
        message.receive = _decodeFileTransferReceiveRequest(bb);
        bb.limit = limit;
        break;
      }

      // optional FileDirCreate create = 4;
      case 4: {
        let limit = pushTemporaryLength(bb);
        message.create = _decodeFileDirCreate(bb);
        bb.limit = limit;
        break;
      }

      // optional FileRemoveDir remove_dir = 5;
      case 5: {
        let limit = pushTemporaryLength(bb);
        message.remove_dir = _decodeFileRemoveDir(bb);
        bb.limit = limit;
        break;
      }

      // optional FileRemoveFile remove_file = 6;
      case 6: {
        let limit = pushTemporaryLength(bb);
        message.remove_file = _decodeFileRemoveFile(bb);
        bb.limit = limit;
        break;
      }

      // optional ReadAllFiles all_files = 7;
      case 7: {
        let limit = pushTemporaryLength(bb);
        message.all_files = _decodeReadAllFiles(bb);
        bb.limit = limit;
        break;
      }

      // optional FileTransferCancel cancel = 8;
      case 8: {
        let limit = pushTemporaryLength(bb);
        message.cancel = _decodeFileTransferCancel(bb);
        bb.limit = limit;
        break;
      }

      // optional FileTransferSendConfirmRequest send_confirm = 9;
      case 9: {
        let limit = pushTemporaryLength(bb);
        message.send_confirm = _decodeFileTransferSendConfirmRequest(bb);
        bb.limit = limit;
        break;
      }

      // optional FileRename rename = 10;
      case 10: {
        let limit = pushTemporaryLength(bb);
        message.rename = _decodeFileRename(bb);
        bb.limit = limit;
        break;
      }

      // optional ReadEmptyDirs read_empty_dirs = 11;
      case 11: {
        let limit = pushTemporaryLength(bb);
        message.read_empty_dirs = _decodeReadEmptyDirs(bb);
        bb.limit = limit;
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export function encodeFileTransferCancel(message) {
  let bb = popByteBuffer();
  _encodeFileTransferCancel(message, bb);
  return toUint8Array(bb);
}

function _encodeFileTransferCancel(message, bb) {
  // optional int32 id = 1;
  let $id = message.id;
  if ($id !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, intToLong($id));
  }
}

export function decodeFileTransferCancel(binary) {
  return _decodeFileTransferCancel(wrapByteBuffer(binary));
}

function _decodeFileTransferCancel(bb) {
  let message = {};

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional int32 id = 1;
      case 1: {
        message.id = readVarint32(bb);
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export function encodeFileResponse(message) {
  let bb = popByteBuffer();
  _encodeFileResponse(message, bb);
  return toUint8Array(bb);
}

function _encodeFileResponse(message, bb) {
  // optional FileDirectory dir = 1;
  let $dir = message.dir;
  if ($dir !== undefined) {
    writeVarint32(bb, 10);
    let nested = popByteBuffer();
    _encodeFileDirectory($dir, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional FileTransferBlock block = 2;
  let $block = message.block;
  if ($block !== undefined) {
    writeVarint32(bb, 18);
    let nested = popByteBuffer();
    _encodeFileTransferBlock($block, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional FileTransferError error = 3;
  let $error = message.error;
  if ($error !== undefined) {
    writeVarint32(bb, 26);
    let nested = popByteBuffer();
    _encodeFileTransferError($error, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional FileTransferDone done = 4;
  let $done = message.done;
  if ($done !== undefined) {
    writeVarint32(bb, 34);
    let nested = popByteBuffer();
    _encodeFileTransferDone($done, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional FileTransferDigest digest = 5;
  let $digest = message.digest;
  if ($digest !== undefined) {
    writeVarint32(bb, 42);
    let nested = popByteBuffer();
    _encodeFileTransferDigest($digest, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional ReadEmptyDirsResponse empty_dirs = 6;
  let $empty_dirs = message.empty_dirs;
  if ($empty_dirs !== undefined) {
    writeVarint32(bb, 50);
    let nested = popByteBuffer();
    _encodeReadEmptyDirsResponse($empty_dirs, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }
}

export function decodeFileResponse(binary) {
  return _decodeFileResponse(wrapByteBuffer(binary));
}

function _decodeFileResponse(bb) {
  let message = {};

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional FileDirectory dir = 1;
      case 1: {
        let limit = pushTemporaryLength(bb);
        message.dir = _decodeFileDirectory(bb);
        bb.limit = limit;
        break;
      }

      // optional FileTransferBlock block = 2;
      case 2: {
        let limit = pushTemporaryLength(bb);
        message.block = _decodeFileTransferBlock(bb);
        bb.limit = limit;
        break;
      }

      // optional FileTransferError error = 3;
      case 3: {
        let limit = pushTemporaryLength(bb);
        message.error = _decodeFileTransferError(bb);
        bb.limit = limit;
        break;
      }

      // optional FileTransferDone done = 4;
      case 4: {
        let limit = pushTemporaryLength(bb);
        message.done = _decodeFileTransferDone(bb);
        bb.limit = limit;
        break;
      }

      // optional FileTransferDigest digest = 5;
      case 5: {
        let limit = pushTemporaryLength(bb);
        message.digest = _decodeFileTransferDigest(bb);
        bb.limit = limit;
        break;
      }

      // optional ReadEmptyDirsResponse empty_dirs = 6;
      case 6: {
        let limit = pushTemporaryLength(bb);
        message.empty_dirs = _decodeReadEmptyDirsResponse(bb);
        bb.limit = limit;
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export function encodeFileTransferDigest(message) {
  let bb = popByteBuffer();
  _encodeFileTransferDigest(message, bb);
  return toUint8Array(bb);
}

function _encodeFileTransferDigest(message, bb) {
  // optional int32 id = 1;
  let $id = message.id;
  if ($id !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, intToLong($id));
  }

  // optional sint32 file_num = 2;
  let $file_num = message.file_num;
  if ($file_num !== undefined) {
    writeVarint32(bb, 16);
    writeVarint32ZigZag(bb, $file_num);
  }

  // optional uint64 last_modified = 3;
  let $last_modified = message.last_modified;
  if ($last_modified !== undefined) {
    writeVarint32(bb, 24);
    writeVarint64(bb, $last_modified);
  }

  // optional uint64 file_size = 4;
  let $file_size = message.file_size;
  if ($file_size !== undefined) {
    writeVarint32(bb, 32);
    writeVarint64(bb, $file_size);
  }

  // optional bool is_upload = 5;
  let $is_upload = message.is_upload;
  if ($is_upload !== undefined) {
    writeVarint32(bb, 40);
    writeByte(bb, $is_upload ? 1 : 0);
  }

  // optional bool is_identical = 6;
  let $is_identical = message.is_identical;
  if ($is_identical !== undefined) {
    writeVarint32(bb, 48);
    writeByte(bb, $is_identical ? 1 : 0);
  }
}

export function decodeFileTransferDigest(binary) {
  return _decodeFileTransferDigest(wrapByteBuffer(binary));
}

function _decodeFileTransferDigest(bb) {
  let message = {};

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional int32 id = 1;
      case 1: {
        message.id = readVarint32(bb);
        break;
      }

      // optional sint32 file_num = 2;
      case 2: {
        message.file_num = readVarint32ZigZag(bb);
        break;
      }

      // optional uint64 last_modified = 3;
      case 3: {
        message.last_modified = readVarint64(bb, /* unsigned */ true);
        break;
      }

      // optional uint64 file_size = 4;
      case 4: {
        message.file_size = readVarint64(bb, /* unsigned */ true);
        break;
      }

      // optional bool is_upload = 5;
      case 5: {
        message.is_upload = !!readByte(bb);
        break;
      }

      // optional bool is_identical = 6;
      case 6: {
        message.is_identical = !!readByte(bb);
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export function encodeFileTransferBlock(message) {
  let bb = popByteBuffer();
  _encodeFileTransferBlock(message, bb);
  return toUint8Array(bb);
}

function _encodeFileTransferBlock(message, bb) {
  // optional int32 id = 1;
  let $id = message.id;
  if ($id !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, intToLong($id));
  }

  // optional sint32 file_num = 2;
  let $file_num = message.file_num;
  if ($file_num !== undefined) {
    writeVarint32(bb, 16);
    writeVarint32ZigZag(bb, $file_num);
  }

  // optional bytes data = 3;
  let $data = message.data;
  if ($data !== undefined) {
    writeVarint32(bb, 26);
    writeVarint32(bb, $data.length), writeBytes(bb, $data);
  }

  // optional bool compressed = 4;
  let $compressed = message.compressed;
  if ($compressed !== undefined) {
    writeVarint32(bb, 32);
    writeByte(bb, $compressed ? 1 : 0);
  }

  // optional uint32 blk_id = 5;
  let $blk_id = message.blk_id;
  if ($blk_id !== undefined) {
    writeVarint32(bb, 40);
    writeVarint32(bb, $blk_id);
  }
}

export function decodeFileTransferBlock(binary) {
  return _decodeFileTransferBlock(wrapByteBuffer(binary));
}

function _decodeFileTransferBlock(bb) {
  let message = {};

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional int32 id = 1;
      case 1: {
        message.id = readVarint32(bb);
        break;
      }

      // optional sint32 file_num = 2;
      case 2: {
        message.file_num = readVarint32ZigZag(bb);
        break;
      }

      // optional bytes data = 3;
      case 3: {
        message.data = readBytes(bb, readVarint32(bb));
        break;
      }

      // optional bool compressed = 4;
      case 4: {
        message.compressed = !!readByte(bb);
        break;
      }

      // optional uint32 blk_id = 5;
      case 5: {
        message.blk_id = readVarint32(bb) >>> 0;
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export function encodeFileTransferError(message) {
  let bb = popByteBuffer();
  _encodeFileTransferError(message, bb);
  return toUint8Array(bb);
}

function _encodeFileTransferError(message, bb) {
  // optional int32 id = 1;
  let $id = message.id;
  if ($id !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, intToLong($id));
  }

  // optional string error = 2;
  let $error = message.error;
  if ($error !== undefined) {
    writeVarint32(bb, 18);
    writeString(bb, $error);
  }

  // optional sint32 file_num = 3;
  let $file_num = message.file_num;
  if ($file_num !== undefined) {
    writeVarint32(bb, 24);
    writeVarint32ZigZag(bb, $file_num);
  }
}

export function decodeFileTransferError(binary) {
  return _decodeFileTransferError(wrapByteBuffer(binary));
}

function _decodeFileTransferError(bb) {
  let message = {};

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional int32 id = 1;
      case 1: {
        message.id = readVarint32(bb);
        break;
      }

      // optional string error = 2;
      case 2: {
        message.error = readString(bb, readVarint32(bb));
        break;
      }

      // optional sint32 file_num = 3;
      case 3: {
        message.file_num = readVarint32ZigZag(bb);
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export function encodeFileTransferSendRequest(message) {
  let bb = popByteBuffer();
  _encodeFileTransferSendRequest(message, bb);
  return toUint8Array(bb);
}

function _encodeFileTransferSendRequest(message, bb) {
  // optional int32 id = 1;
  let $id = message.id;
  if ($id !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, intToLong($id));
  }

  // optional string path = 2;
  let $path = message.path;
  if ($path !== undefined) {
    writeVarint32(bb, 18);
    writeString(bb, $path);
  }

  // optional bool include_hidden = 3;
  let $include_hidden = message.include_hidden;
  if ($include_hidden !== undefined) {
    writeVarint32(bb, 24);
    writeByte(bb, $include_hidden ? 1 : 0);
  }

  // optional int32 file_num = 4;
  let $file_num = message.file_num;
  if ($file_num !== undefined) {
    writeVarint32(bb, 32);
    writeVarint64(bb, intToLong($file_num));
  }

  // optional FileType file_type = 5;
  let $file_type = message.file_type;
  if ($file_type !== undefined) {
    writeVarint32(bb, 40);
    writeVarint32(bb, encodeFileType[$file_type]);
  }
}

export function decodeFileTransferSendRequest(binary) {
  return _decodeFileTransferSendRequest(wrapByteBuffer(binary));
}

function _decodeFileTransferSendRequest(bb) {
  let message = {};

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional int32 id = 1;
      case 1: {
        message.id = readVarint32(bb);
        break;
      }

      // optional string path = 2;
      case 2: {
        message.path = readString(bb, readVarint32(bb));
        break;
      }

      // optional bool include_hidden = 3;
      case 3: {
        message.include_hidden = !!readByte(bb);
        break;
      }

      // optional int32 file_num = 4;
      case 4: {
        message.file_num = readVarint32(bb);
        break;
      }

      // optional FileType file_type = 5;
      case 5: {
        message.file_type = decodeFileType[readVarint32(bb)];
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export function encodeFileTransferSendConfirmRequest(message) {
  let bb = popByteBuffer();
  _encodeFileTransferSendConfirmRequest(message, bb);
  return toUint8Array(bb);
}

function _encodeFileTransferSendConfirmRequest(message, bb) {
  // optional int32 id = 1;
  let $id = message.id;
  if ($id !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, intToLong($id));
  }

  // optional sint32 file_num = 2;
  let $file_num = message.file_num;
  if ($file_num !== undefined) {
    writeVarint32(bb, 16);
    writeVarint32ZigZag(bb, $file_num);
  }

  // optional bool skip = 3;
  let $skip = message.skip;
  if ($skip !== undefined) {
    writeVarint32(bb, 24);
    writeByte(bb, $skip ? 1 : 0);
  }

  // optional uint32 offset_blk = 4;
  let $offset_blk = message.offset_blk;
  if ($offset_blk !== undefined) {
    writeVarint32(bb, 32);
    writeVarint32(bb, $offset_blk);
  }
}

export function decodeFileTransferSendConfirmRequest(binary) {
  return _decodeFileTransferSendConfirmRequest(wrapByteBuffer(binary));
}

function _decodeFileTransferSendConfirmRequest(bb) {
  let message = {};

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional int32 id = 1;
      case 1: {
        message.id = readVarint32(bb);
        break;
      }

      // optional sint32 file_num = 2;
      case 2: {
        message.file_num = readVarint32ZigZag(bb);
        break;
      }

      // optional bool skip = 3;
      case 3: {
        message.skip = !!readByte(bb);
        break;
      }

      // optional uint32 offset_blk = 4;
      case 4: {
        message.offset_blk = readVarint32(bb) >>> 0;
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export function encodeFileTransferDone(message) {
  let bb = popByteBuffer();
  _encodeFileTransferDone(message, bb);
  return toUint8Array(bb);
}

function _encodeFileTransferDone(message, bb) {
  // optional int32 id = 1;
  let $id = message.id;
  if ($id !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, intToLong($id));
  }

  // optional sint32 file_num = 2;
  let $file_num = message.file_num;
  if ($file_num !== undefined) {
    writeVarint32(bb, 16);
    writeVarint32ZigZag(bb, $file_num);
  }
}

export function decodeFileTransferDone(binary) {
  return _decodeFileTransferDone(wrapByteBuffer(binary));
}

function _decodeFileTransferDone(bb) {
  let message = {};

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional int32 id = 1;
      case 1: {
        message.id = readVarint32(bb);
        break;
      }

      // optional sint32 file_num = 2;
      case 2: {
        message.file_num = readVarint32ZigZag(bb);
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export function encodeFileTransferReceiveRequest(message) {
  let bb = popByteBuffer();
  _encodeFileTransferReceiveRequest(message, bb);
  return toUint8Array(bb);
}

function _encodeFileTransferReceiveRequest(message, bb) {
  // optional int32 id = 1;
  let $id = message.id;
  if ($id !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, intToLong($id));
  }

  // optional string path = 2;
  let $path = message.path;
  if ($path !== undefined) {
    writeVarint32(bb, 18);
    writeString(bb, $path);
  }

  // repeated FileEntry files = 3;
  let array$files = message.files;
  if (array$files !== undefined) {
    for (let value of array$files) {
      writeVarint32(bb, 26);
      let nested = popByteBuffer();
      _encodeFileEntry(value, nested);
      writeVarint32(bb, nested.limit);
      writeByteBuffer(bb, nested);
      pushByteBuffer(nested);
    }
  }

  // optional int32 file_num = 4;
  let $file_num = message.file_num;
  if ($file_num !== undefined) {
    writeVarint32(bb, 32);
    writeVarint64(bb, intToLong($file_num));
  }

  // optional uint64 total_size = 5;
  let $total_size = message.total_size;
  if ($total_size !== undefined) {
    writeVarint32(bb, 40);
    writeVarint64(bb, $total_size);
  }
}

export function decodeFileTransferReceiveRequest(binary) {
  return _decodeFileTransferReceiveRequest(wrapByteBuffer(binary));
}

function _decodeFileTransferReceiveRequest(bb) {
  let message = {};

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional int32 id = 1;
      case 1: {
        message.id = readVarint32(bb);
        break;
      }

      // optional string path = 2;
      case 2: {
        message.path = readString(bb, readVarint32(bb));
        break;
      }

      // repeated FileEntry files = 3;
      case 3: {
        let limit = pushTemporaryLength(bb);
        let values = message.files || (message.files = []);
        values.push(_decodeFileEntry(bb));
        bb.limit = limit;
        break;
      }

      // optional int32 file_num = 4;
      case 4: {
        message.file_num = readVarint32(bb);
        break;
      }

      // optional uint64 total_size = 5;
      case 5: {
        message.total_size = readVarint64(bb, /* unsigned */ true);
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export function encodeFileRemoveDir(message) {
  let bb = popByteBuffer();
  _encodeFileRemoveDir(message, bb);
  return toUint8Array(bb);
}

function _encodeFileRemoveDir(message, bb) {
  // optional int32 id = 1;
  let $id = message.id;
  if ($id !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, intToLong($id));
  }

  // optional string path = 2;
  let $path = message.path;
  if ($path !== undefined) {
    writeVarint32(bb, 18);
    writeString(bb, $path);
  }

  // optional bool recursive = 3;
  let $recursive = message.recursive;
  if ($recursive !== undefined) {
    writeVarint32(bb, 24);
    writeByte(bb, $recursive ? 1 : 0);
  }
}

export function decodeFileRemoveDir(binary) {
  return _decodeFileRemoveDir(wrapByteBuffer(binary));
}

function _decodeFileRemoveDir(bb) {
  let message = {};

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional int32 id = 1;
      case 1: {
        message.id = readVarint32(bb);
        break;
      }

      // optional string path = 2;
      case 2: {
        message.path = readString(bb, readVarint32(bb));
        break;
      }

      // optional bool recursive = 3;
      case 3: {
        message.recursive = !!readByte(bb);
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export function encodeFileRemoveFile(message) {
  let bb = popByteBuffer();
  _encodeFileRemoveFile(message, bb);
  return toUint8Array(bb);
}

function _encodeFileRemoveFile(message, bb) {
  // optional int32 id = 1;
  let $id = message.id;
  if ($id !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, intToLong($id));
  }

  // optional string path = 2;
  let $path = message.path;
  if ($path !== undefined) {
    writeVarint32(bb, 18);
    writeString(bb, $path);
  }

  // optional sint32 file_num = 3;
  let $file_num = message.file_num;
  if ($file_num !== undefined) {
    writeVarint32(bb, 24);
    writeVarint32ZigZag(bb, $file_num);
  }
}

export function decodeFileRemoveFile(binary) {
  return _decodeFileRemoveFile(wrapByteBuffer(binary));
}

function _decodeFileRemoveFile(bb) {
  let message = {};

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional int32 id = 1;
      case 1: {
        message.id = readVarint32(bb);
        break;
      }

      // optional string path = 2;
      case 2: {
        message.path = readString(bb, readVarint32(bb));
        break;
      }

      // optional sint32 file_num = 3;
      case 3: {
        message.file_num = readVarint32ZigZag(bb);
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export function encodeFileDirCreate(message) {
  let bb = popByteBuffer();
  _encodeFileDirCreate(message, bb);
  return toUint8Array(bb);
}

function _encodeFileDirCreate(message, bb) {
  // optional int32 id = 1;
  let $id = message.id;
  if ($id !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, intToLong($id));
  }

  // optional string path = 2;
  let $path = message.path;
  if ($path !== undefined) {
    writeVarint32(bb, 18);
    writeString(bb, $path);
  }
}

export function decodeFileDirCreate(binary) {
  return _decodeFileDirCreate(wrapByteBuffer(binary));
}

function _decodeFileDirCreate(bb) {
  let message = {};

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional int32 id = 1;
      case 1: {
        message.id = readVarint32(bb);
        break;
      }

      // optional string path = 2;
      case 2: {
        message.path = readString(bb, readVarint32(bb));
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export function encodeCliprdrMonitorReady(message) {
  let bb = popByteBuffer();
  _encodeCliprdrMonitorReady(message, bb);
  return toUint8Array(bb);
}

function _encodeCliprdrMonitorReady(message, bb) {
}

export function decodeCliprdrMonitorReady(binary) {
  return _decodeCliprdrMonitorReady(wrapByteBuffer(binary));
}

function _decodeCliprdrMonitorReady(bb) {
  let message = {};

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export function encodeCliprdrFormat(message) {
  let bb = popByteBuffer();
  _encodeCliprdrFormat(message, bb);
  return toUint8Array(bb);
}

function _encodeCliprdrFormat(message, bb) {
  // optional int32 id = 2;
  let $id = message.id;
  if ($id !== undefined) {
    writeVarint32(bb, 16);
    writeVarint64(bb, intToLong($id));
  }

  // optional string format = 3;
  let $format = message.format;
  if ($format !== undefined) {
    writeVarint32(bb, 26);
    writeString(bb, $format);
  }
}

export function decodeCliprdrFormat(binary) {
  return _decodeCliprdrFormat(wrapByteBuffer(binary));
}

function _decodeCliprdrFormat(bb) {
  let message = {};

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional int32 id = 2;
      case 2: {
        message.id = readVarint32(bb);
        break;
      }

      // optional string format = 3;
      case 3: {
        message.format = readString(bb, readVarint32(bb));
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export function encodeCliprdrServerFormatList(message) {
  let bb = popByteBuffer();
  _encodeCliprdrServerFormatList(message, bb);
  return toUint8Array(bb);
}

function _encodeCliprdrServerFormatList(message, bb) {
  // repeated CliprdrFormat formats = 2;
  let array$formats = message.formats;
  if (array$formats !== undefined) {
    for (let value of array$formats) {
      writeVarint32(bb, 18);
      let nested = popByteBuffer();
      _encodeCliprdrFormat(value, nested);
      writeVarint32(bb, nested.limit);
      writeByteBuffer(bb, nested);
      pushByteBuffer(nested);
    }
  }
}

export function decodeCliprdrServerFormatList(binary) {
  return _decodeCliprdrServerFormatList(wrapByteBuffer(binary));
}

function _decodeCliprdrServerFormatList(bb) {
  let message = {};

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // repeated CliprdrFormat formats = 2;
      case 2: {
        let limit = pushTemporaryLength(bb);
        let values = message.formats || (message.formats = []);
        values.push(_decodeCliprdrFormat(bb));
        bb.limit = limit;
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export function encodeCliprdrServerFormatListResponse(message) {
  let bb = popByteBuffer();
  _encodeCliprdrServerFormatListResponse(message, bb);
  return toUint8Array(bb);
}

function _encodeCliprdrServerFormatListResponse(message, bb) {
  // optional int32 msg_flags = 2;
  let $msg_flags = message.msg_flags;
  if ($msg_flags !== undefined) {
    writeVarint32(bb, 16);
    writeVarint64(bb, intToLong($msg_flags));
  }
}

export function decodeCliprdrServerFormatListResponse(binary) {
  return _decodeCliprdrServerFormatListResponse(wrapByteBuffer(binary));
}

function _decodeCliprdrServerFormatListResponse(bb) {
  let message = {};

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional int32 msg_flags = 2;
      case 2: {
        message.msg_flags = readVarint32(bb);
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export function encodeCliprdrServerFormatDataRequest(message) {
  let bb = popByteBuffer();
  _encodeCliprdrServerFormatDataRequest(message, bb);
  return toUint8Array(bb);
}

function _encodeCliprdrServerFormatDataRequest(message, bb) {
  // optional int32 requested_format_id = 2;
  let $requested_format_id = message.requested_format_id;
  if ($requested_format_id !== undefined) {
    writeVarint32(bb, 16);
    writeVarint64(bb, intToLong($requested_format_id));
  }
}

export function decodeCliprdrServerFormatDataRequest(binary) {
  return _decodeCliprdrServerFormatDataRequest(wrapByteBuffer(binary));
}

function _decodeCliprdrServerFormatDataRequest(bb) {
  let message = {};

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional int32 requested_format_id = 2;
      case 2: {
        message.requested_format_id = readVarint32(bb);
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export function encodeCliprdrServerFormatDataResponse(message) {
  let bb = popByteBuffer();
  _encodeCliprdrServerFormatDataResponse(message, bb);
  return toUint8Array(bb);
}

function _encodeCliprdrServerFormatDataResponse(message, bb) {
  // optional int32 msg_flags = 2;
  let $msg_flags = message.msg_flags;
  if ($msg_flags !== undefined) {
    writeVarint32(bb, 16);
    writeVarint64(bb, intToLong($msg_flags));
  }

  // optional bytes format_data = 3;
  let $format_data = message.format_data;
  if ($format_data !== undefined) {
    writeVarint32(bb, 26);
    writeVarint32(bb, $format_data.length), writeBytes(bb, $format_data);
  }
}

export function decodeCliprdrServerFormatDataResponse(binary) {
  return _decodeCliprdrServerFormatDataResponse(wrapByteBuffer(binary));
}

function _decodeCliprdrServerFormatDataResponse(bb) {
  let message = {};

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional int32 msg_flags = 2;
      case 2: {
        message.msg_flags = readVarint32(bb);
        break;
      }

      // optional bytes format_data = 3;
      case 3: {
        message.format_data = readBytes(bb, readVarint32(bb));
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export function encodeCliprdrFileContentsRequest(message) {
  let bb = popByteBuffer();
  _encodeCliprdrFileContentsRequest(message, bb);
  return toUint8Array(bb);
}

function _encodeCliprdrFileContentsRequest(message, bb) {
  // optional int32 stream_id = 2;
  let $stream_id = message.stream_id;
  if ($stream_id !== undefined) {
    writeVarint32(bb, 16);
    writeVarint64(bb, intToLong($stream_id));
  }

  // optional int32 list_index = 3;
  let $list_index = message.list_index;
  if ($list_index !== undefined) {
    writeVarint32(bb, 24);
    writeVarint64(bb, intToLong($list_index));
  }

  // optional int32 dw_flags = 4;
  let $dw_flags = message.dw_flags;
  if ($dw_flags !== undefined) {
    writeVarint32(bb, 32);
    writeVarint64(bb, intToLong($dw_flags));
  }

  // optional int32 n_position_low = 5;
  let $n_position_low = message.n_position_low;
  if ($n_position_low !== undefined) {
    writeVarint32(bb, 40);
    writeVarint64(bb, intToLong($n_position_low));
  }

  // optional int32 n_position_high = 6;
  let $n_position_high = message.n_position_high;
  if ($n_position_high !== undefined) {
    writeVarint32(bb, 48);
    writeVarint64(bb, intToLong($n_position_high));
  }

  // optional int32 cb_requested = 7;
  let $cb_requested = message.cb_requested;
  if ($cb_requested !== undefined) {
    writeVarint32(bb, 56);
    writeVarint64(bb, intToLong($cb_requested));
  }

  // optional bool have_clip_data_id = 8;
  let $have_clip_data_id = message.have_clip_data_id;
  if ($have_clip_data_id !== undefined) {
    writeVarint32(bb, 64);
    writeByte(bb, $have_clip_data_id ? 1 : 0);
  }

  // optional int32 clip_data_id = 9;
  let $clip_data_id = message.clip_data_id;
  if ($clip_data_id !== undefined) {
    writeVarint32(bb, 72);
    writeVarint64(bb, intToLong($clip_data_id));
  }
}

export function decodeCliprdrFileContentsRequest(binary) {
  return _decodeCliprdrFileContentsRequest(wrapByteBuffer(binary));
}

function _decodeCliprdrFileContentsRequest(bb) {
  let message = {};

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional int32 stream_id = 2;
      case 2: {
        message.stream_id = readVarint32(bb);
        break;
      }

      // optional int32 list_index = 3;
      case 3: {
        message.list_index = readVarint32(bb);
        break;
      }

      // optional int32 dw_flags = 4;
      case 4: {
        message.dw_flags = readVarint32(bb);
        break;
      }

      // optional int32 n_position_low = 5;
      case 5: {
        message.n_position_low = readVarint32(bb);
        break;
      }

      // optional int32 n_position_high = 6;
      case 6: {
        message.n_position_high = readVarint32(bb);
        break;
      }

      // optional int32 cb_requested = 7;
      case 7: {
        message.cb_requested = readVarint32(bb);
        break;
      }

      // optional bool have_clip_data_id = 8;
      case 8: {
        message.have_clip_data_id = !!readByte(bb);
        break;
      }

      // optional int32 clip_data_id = 9;
      case 9: {
        message.clip_data_id = readVarint32(bb);
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export function encodeCliprdrFileContentsResponse(message) {
  let bb = popByteBuffer();
  _encodeCliprdrFileContentsResponse(message, bb);
  return toUint8Array(bb);
}

function _encodeCliprdrFileContentsResponse(message, bb) {
  // optional int32 msg_flags = 3;
  let $msg_flags = message.msg_flags;
  if ($msg_flags !== undefined) {
    writeVarint32(bb, 24);
    writeVarint64(bb, intToLong($msg_flags));
  }

  // optional int32 stream_id = 4;
  let $stream_id = message.stream_id;
  if ($stream_id !== undefined) {
    writeVarint32(bb, 32);
    writeVarint64(bb, intToLong($stream_id));
  }

  // optional bytes requested_data = 5;
  let $requested_data = message.requested_data;
  if ($requested_data !== undefined) {
    writeVarint32(bb, 42);
    writeVarint32(bb, $requested_data.length), writeBytes(bb, $requested_data);
  }
}

export function decodeCliprdrFileContentsResponse(binary) {
  return _decodeCliprdrFileContentsResponse(wrapByteBuffer(binary));
}

function _decodeCliprdrFileContentsResponse(bb) {
  let message = {};

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional int32 msg_flags = 3;
      case 3: {
        message.msg_flags = readVarint32(bb);
        break;
      }

      // optional int32 stream_id = 4;
      case 4: {
        message.stream_id = readVarint32(bb);
        break;
      }

      // optional bytes requested_data = 5;
      case 5: {
        message.requested_data = readBytes(bb, readVarint32(bb));
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export function encodeCliprdrTryEmpty(message) {
  let bb = popByteBuffer();
  _encodeCliprdrTryEmpty(message, bb);
  return toUint8Array(bb);
}

function _encodeCliprdrTryEmpty(message, bb) {
}

export function decodeCliprdrTryEmpty(binary) {
  return _decodeCliprdrTryEmpty(wrapByteBuffer(binary));
}

function _decodeCliprdrTryEmpty(bb) {
  let message = {};

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export function encodeCliprdr(message) {
  let bb = popByteBuffer();
  _encodeCliprdr(message, bb);
  return toUint8Array(bb);
}

function _encodeCliprdr(message, bb) {
  // optional CliprdrMonitorReady ready = 1;
  let $ready = message.ready;
  if ($ready !== undefined) {
    writeVarint32(bb, 10);
    let nested = popByteBuffer();
    _encodeCliprdrMonitorReady($ready, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional CliprdrServerFormatList format_list = 2;
  let $format_list = message.format_list;
  if ($format_list !== undefined) {
    writeVarint32(bb, 18);
    let nested = popByteBuffer();
    _encodeCliprdrServerFormatList($format_list, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional CliprdrServerFormatListResponse format_list_response = 3;
  let $format_list_response = message.format_list_response;
  if ($format_list_response !== undefined) {
    writeVarint32(bb, 26);
    let nested = popByteBuffer();
    _encodeCliprdrServerFormatListResponse($format_list_response, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional CliprdrServerFormatDataRequest format_data_request = 4;
  let $format_data_request = message.format_data_request;
  if ($format_data_request !== undefined) {
    writeVarint32(bb, 34);
    let nested = popByteBuffer();
    _encodeCliprdrServerFormatDataRequest($format_data_request, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional CliprdrServerFormatDataResponse format_data_response = 5;
  let $format_data_response = message.format_data_response;
  if ($format_data_response !== undefined) {
    writeVarint32(bb, 42);
    let nested = popByteBuffer();
    _encodeCliprdrServerFormatDataResponse($format_data_response, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional CliprdrFileContentsRequest file_contents_request = 6;
  let $file_contents_request = message.file_contents_request;
  if ($file_contents_request !== undefined) {
    writeVarint32(bb, 50);
    let nested = popByteBuffer();
    _encodeCliprdrFileContentsRequest($file_contents_request, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional CliprdrFileContentsResponse file_contents_response = 7;
  let $file_contents_response = message.file_contents_response;
  if ($file_contents_response !== undefined) {
    writeVarint32(bb, 58);
    let nested = popByteBuffer();
    _encodeCliprdrFileContentsResponse($file_contents_response, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional CliprdrTryEmpty try_empty = 8;
  let $try_empty = message.try_empty;
  if ($try_empty !== undefined) {
    writeVarint32(bb, 66);
    let nested = popByteBuffer();
    _encodeCliprdrTryEmpty($try_empty, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }
}

export function decodeCliprdr(binary) {
  return _decodeCliprdr(wrapByteBuffer(binary));
}

function _decodeCliprdr(bb) {
  let message = {};

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional CliprdrMonitorReady ready = 1;
      case 1: {
        let limit = pushTemporaryLength(bb);
        message.ready = _decodeCliprdrMonitorReady(bb);
        bb.limit = limit;
        break;
      }

      // optional CliprdrServerFormatList format_list = 2;
      case 2: {
        let limit = pushTemporaryLength(bb);
        message.format_list = _decodeCliprdrServerFormatList(bb);
        bb.limit = limit;
        break;
      }

      // optional CliprdrServerFormatListResponse format_list_response = 3;
      case 3: {
        let limit = pushTemporaryLength(bb);
        message.format_list_response = _decodeCliprdrServerFormatListResponse(bb);
        bb.limit = limit;
        break;
      }

      // optional CliprdrServerFormatDataRequest format_data_request = 4;
      case 4: {
        let limit = pushTemporaryLength(bb);
        message.format_data_request = _decodeCliprdrServerFormatDataRequest(bb);
        bb.limit = limit;
        break;
      }

      // optional CliprdrServerFormatDataResponse format_data_response = 5;
      case 5: {
        let limit = pushTemporaryLength(bb);
        message.format_data_response = _decodeCliprdrServerFormatDataResponse(bb);
        bb.limit = limit;
        break;
      }

      // optional CliprdrFileContentsRequest file_contents_request = 6;
      case 6: {
        let limit = pushTemporaryLength(bb);
        message.file_contents_request = _decodeCliprdrFileContentsRequest(bb);
        bb.limit = limit;
        break;
      }

      // optional CliprdrFileContentsResponse file_contents_response = 7;
      case 7: {
        let limit = pushTemporaryLength(bb);
        message.file_contents_response = _decodeCliprdrFileContentsResponse(bb);
        bb.limit = limit;
        break;
      }

      // optional CliprdrTryEmpty try_empty = 8;
      case 8: {
        let limit = pushTemporaryLength(bb);
        message.try_empty = _decodeCliprdrTryEmpty(bb);
        bb.limit = limit;
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export function encodeResolution(message) {
  let bb = popByteBuffer();
  _encodeResolution(message, bb);
  return toUint8Array(bb);
}

function _encodeResolution(message, bb) {
  // optional int32 width = 1;
  let $width = message.width;
  if ($width !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, intToLong($width));
  }

  // optional int32 height = 2;
  let $height = message.height;
  if ($height !== undefined) {
    writeVarint32(bb, 16);
    writeVarint64(bb, intToLong($height));
  }
}

export function decodeResolution(binary) {
  return _decodeResolution(wrapByteBuffer(binary));
}

function _decodeResolution(bb) {
  let message = {};

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional int32 width = 1;
      case 1: {
        message.width = readVarint32(bb);
        break;
      }

      // optional int32 height = 2;
      case 2: {
        message.height = readVarint32(bb);
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export function encodeDisplayResolution(message) {
  let bb = popByteBuffer();
  _encodeDisplayResolution(message, bb);
  return toUint8Array(bb);
}

function _encodeDisplayResolution(message, bb) {
  // optional int32 display = 1;
  let $display = message.display;
  if ($display !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, intToLong($display));
  }

  // optional Resolution resolution = 2;
  let $resolution = message.resolution;
  if ($resolution !== undefined) {
    writeVarint32(bb, 18);
    let nested = popByteBuffer();
    _encodeResolution($resolution, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }
}

export function decodeDisplayResolution(binary) {
  return _decodeDisplayResolution(wrapByteBuffer(binary));
}

function _decodeDisplayResolution(bb) {
  let message = {};

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional int32 display = 1;
      case 1: {
        message.display = readVarint32(bb);
        break;
      }

      // optional Resolution resolution = 2;
      case 2: {
        let limit = pushTemporaryLength(bb);
        message.resolution = _decodeResolution(bb);
        bb.limit = limit;
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export function encodeSupportedResolutions(message) {
  let bb = popByteBuffer();
  _encodeSupportedResolutions(message, bb);
  return toUint8Array(bb);
}

function _encodeSupportedResolutions(message, bb) {
  // repeated Resolution resolutions = 1;
  let array$resolutions = message.resolutions;
  if (array$resolutions !== undefined) {
    for (let value of array$resolutions) {
      writeVarint32(bb, 10);
      let nested = popByteBuffer();
      _encodeResolution(value, nested);
      writeVarint32(bb, nested.limit);
      writeByteBuffer(bb, nested);
      pushByteBuffer(nested);
    }
  }
}

export function decodeSupportedResolutions(binary) {
  return _decodeSupportedResolutions(wrapByteBuffer(binary));
}

function _decodeSupportedResolutions(bb) {
  let message = {};

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // repeated Resolution resolutions = 1;
      case 1: {
        let limit = pushTemporaryLength(bb);
        let values = message.resolutions || (message.resolutions = []);
        values.push(_decodeResolution(bb));
        bb.limit = limit;
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export function encodeSwitchDisplay(message) {
  let bb = popByteBuffer();
  _encodeSwitchDisplay(message, bb);
  return toUint8Array(bb);
}

function _encodeSwitchDisplay(message, bb) {
  // optional int32 display = 1;
  let $display = message.display;
  if ($display !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, intToLong($display));
  }

  // optional sint32 x = 2;
  let $x = message.x;
  if ($x !== undefined) {
    writeVarint32(bb, 16);
    writeVarint32ZigZag(bb, $x);
  }

  // optional sint32 y = 3;
  let $y = message.y;
  if ($y !== undefined) {
    writeVarint32(bb, 24);
    writeVarint32ZigZag(bb, $y);
  }

  // optional int32 width = 4;
  let $width = message.width;
  if ($width !== undefined) {
    writeVarint32(bb, 32);
    writeVarint64(bb, intToLong($width));
  }

  // optional int32 height = 5;
  let $height = message.height;
  if ($height !== undefined) {
    writeVarint32(bb, 40);
    writeVarint64(bb, intToLong($height));
  }

  // optional bool cursor_embedded = 6;
  let $cursor_embedded = message.cursor_embedded;
  if ($cursor_embedded !== undefined) {
    writeVarint32(bb, 48);
    writeByte(bb, $cursor_embedded ? 1 : 0);
  }

  // optional SupportedResolutions resolutions = 7;
  let $resolutions = message.resolutions;
  if ($resolutions !== undefined) {
    writeVarint32(bb, 58);
    let nested = popByteBuffer();
    _encodeSupportedResolutions($resolutions, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional Resolution original_resolution = 8;
  let $original_resolution = message.original_resolution;
  if ($original_resolution !== undefined) {
    writeVarint32(bb, 66);
    let nested = popByteBuffer();
    _encodeResolution($original_resolution, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }
}

export function decodeSwitchDisplay(binary) {
  return _decodeSwitchDisplay(wrapByteBuffer(binary));
}

function _decodeSwitchDisplay(bb) {
  let message = {};

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional int32 display = 1;
      case 1: {
        message.display = readVarint32(bb);
        break;
      }

      // optional sint32 x = 2;
      case 2: {
        message.x = readVarint32ZigZag(bb);
        break;
      }

      // optional sint32 y = 3;
      case 3: {
        message.y = readVarint32ZigZag(bb);
        break;
      }

      // optional int32 width = 4;
      case 4: {
        message.width = readVarint32(bb);
        break;
      }

      // optional int32 height = 5;
      case 5: {
        message.height = readVarint32(bb);
        break;
      }

      // optional bool cursor_embedded = 6;
      case 6: {
        message.cursor_embedded = !!readByte(bb);
        break;
      }

      // optional SupportedResolutions resolutions = 7;
      case 7: {
        let limit = pushTemporaryLength(bb);
        message.resolutions = _decodeSupportedResolutions(bb);
        bb.limit = limit;
        break;
      }

      // optional Resolution original_resolution = 8;
      case 8: {
        let limit = pushTemporaryLength(bb);
        message.original_resolution = _decodeResolution(bb);
        bb.limit = limit;
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export function encodeCaptureDisplays(message) {
  let bb = popByteBuffer();
  _encodeCaptureDisplays(message, bb);
  return toUint8Array(bb);
}

function _encodeCaptureDisplays(message, bb) {
  // repeated int32 add = 1;
  let array$add = message.add;
  if (array$add !== undefined) {
    let packed = popByteBuffer();
    for (let value of array$add) {
      writeVarint64(packed, intToLong(value));
    }
    writeVarint32(bb, 10);
    writeVarint32(bb, packed.offset);
    writeByteBuffer(bb, packed);
    pushByteBuffer(packed);
  }

  // repeated int32 sub = 2;
  let array$sub = message.sub;
  if (array$sub !== undefined) {
    let packed = popByteBuffer();
    for (let value of array$sub) {
      writeVarint64(packed, intToLong(value));
    }
    writeVarint32(bb, 18);
    writeVarint32(bb, packed.offset);
    writeByteBuffer(bb, packed);
    pushByteBuffer(packed);
  }

  // repeated int32 set = 3;
  let array$set = message.set;
  if (array$set !== undefined) {
    let packed = popByteBuffer();
    for (let value of array$set) {
      writeVarint64(packed, intToLong(value));
    }
    writeVarint32(bb, 26);
    writeVarint32(bb, packed.offset);
    writeByteBuffer(bb, packed);
    pushByteBuffer(packed);
  }
}

export function decodeCaptureDisplays(binary) {
  return _decodeCaptureDisplays(wrapByteBuffer(binary));
}

function _decodeCaptureDisplays(bb) {
  let message = {};

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // repeated int32 add = 1;
      case 1: {
        let values = message.add || (message.add = []);
        if ((tag & 7) === 2) {
          let outerLimit = pushTemporaryLength(bb);
          while (!isAtEnd(bb)) {
            values.push(readVarint32(bb));
          }
          bb.limit = outerLimit;
        } else {
          values.push(readVarint32(bb));
        }
        break;
      }

      // repeated int32 sub = 2;
      case 2: {
        let values = message.sub || (message.sub = []);
        if ((tag & 7) === 2) {
          let outerLimit = pushTemporaryLength(bb);
          while (!isAtEnd(bb)) {
            values.push(readVarint32(bb));
          }
          bb.limit = outerLimit;
        } else {
          values.push(readVarint32(bb));
        }
        break;
      }

      // repeated int32 set = 3;
      case 3: {
        let values = message.set || (message.set = []);
        if ((tag & 7) === 2) {
          let outerLimit = pushTemporaryLength(bb);
          while (!isAtEnd(bb)) {
            values.push(readVarint32(bb));
          }
          bb.limit = outerLimit;
        } else {
          values.push(readVarint32(bb));
        }
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export function encodeToggleVirtualDisplay(message) {
  let bb = popByteBuffer();
  _encodeToggleVirtualDisplay(message, bb);
  return toUint8Array(bb);
}

function _encodeToggleVirtualDisplay(message, bb) {
  // optional int32 display = 1;
  let $display = message.display;
  if ($display !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, intToLong($display));
  }

  // optional bool on = 2;
  let $on = message.on;
  if ($on !== undefined) {
    writeVarint32(bb, 16);
    writeByte(bb, $on ? 1 : 0);
  }
}

export function decodeToggleVirtualDisplay(binary) {
  return _decodeToggleVirtualDisplay(wrapByteBuffer(binary));
}

function _decodeToggleVirtualDisplay(bb) {
  let message = {};

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional int32 display = 1;
      case 1: {
        message.display = readVarint32(bb);
        break;
      }

      // optional bool on = 2;
      case 2: {
        message.on = !!readByte(bb);
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export function encodeTogglePrivacyMode(message) {
  let bb = popByteBuffer();
  _encodeTogglePrivacyMode(message, bb);
  return toUint8Array(bb);
}

function _encodeTogglePrivacyMode(message, bb) {
  // optional string impl_key = 1;
  let $impl_key = message.impl_key;
  if ($impl_key !== undefined) {
    writeVarint32(bb, 10);
    writeString(bb, $impl_key);
  }

  // optional bool on = 2;
  let $on = message.on;
  if ($on !== undefined) {
    writeVarint32(bb, 16);
    writeByte(bb, $on ? 1 : 0);
  }
}

export function decodeTogglePrivacyMode(binary) {
  return _decodeTogglePrivacyMode(wrapByteBuffer(binary));
}

function _decodeTogglePrivacyMode(bb) {
  let message = {};

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional string impl_key = 1;
      case 1: {
        message.impl_key = readString(bb, readVarint32(bb));
        break;
      }

      // optional bool on = 2;
      case 2: {
        message.on = !!readByte(bb);
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export function encodePermissionInfo(message) {
  let bb = popByteBuffer();
  _encodePermissionInfo(message, bb);
  return toUint8Array(bb);
}

function _encodePermissionInfo(message, bb) {
  // optional Permission permission = 1;
  let $permission = message.permission;
  if ($permission !== undefined) {
    writeVarint32(bb, 10);
    let nested = popByteBuffer();
    _encodePermission($permission, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional bool enabled = 2;
  let $enabled = message.enabled;
  if ($enabled !== undefined) {
    writeVarint32(bb, 16);
    writeByte(bb, $enabled ? 1 : 0);
  }
}

export function decodePermissionInfo(binary) {
  return _decodePermissionInfo(wrapByteBuffer(binary));
}

function _decodePermissionInfo(bb) {
  let message = {};

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional Permission permission = 1;
      case 1: {
        let limit = pushTemporaryLength(bb);
        message.permission = _decodePermission(bb);
        bb.limit = limit;
        break;
      }

      // optional bool enabled = 2;
      case 2: {
        message.enabled = !!readByte(bb);
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export function encodeSupportedDecoding(message) {
  let bb = popByteBuffer();
  _encodeSupportedDecoding(message, bb);
  return toUint8Array(bb);
}

function _encodeSupportedDecoding(message, bb) {
  // optional int32 ability_vp9 = 1;
  let $ability_vp9 = message.ability_vp9;
  if ($ability_vp9 !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, intToLong($ability_vp9));
  }

  // optional int32 ability_h264 = 2;
  let $ability_h264 = message.ability_h264;
  if ($ability_h264 !== undefined) {
    writeVarint32(bb, 16);
    writeVarint64(bb, intToLong($ability_h264));
  }

  // optional int32 ability_h265 = 3;
  let $ability_h265 = message.ability_h265;
  if ($ability_h265 !== undefined) {
    writeVarint32(bb, 24);
    writeVarint64(bb, intToLong($ability_h265));
  }

  // optional PreferCodec prefer = 4;
  let $prefer = message.prefer;
  if ($prefer !== undefined) {
    writeVarint32(bb, 34);
    let nested = popByteBuffer();
    _encodePreferCodec($prefer, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional int32 ability_vp8 = 5;
  let $ability_vp8 = message.ability_vp8;
  if ($ability_vp8 !== undefined) {
    writeVarint32(bb, 40);
    writeVarint64(bb, intToLong($ability_vp8));
  }

  // optional int32 ability_av1 = 6;
  let $ability_av1 = message.ability_av1;
  if ($ability_av1 !== undefined) {
    writeVarint32(bb, 48);
    writeVarint64(bb, intToLong($ability_av1));
  }

  // optional CodecAbility i444 = 7;
  let $i444 = message.i444;
  if ($i444 !== undefined) {
    writeVarint32(bb, 58);
    let nested = popByteBuffer();
    _encodeCodecAbility($i444, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional Chroma prefer_chroma = 8;
  let $prefer_chroma = message.prefer_chroma;
  if ($prefer_chroma !== undefined) {
    writeVarint32(bb, 64);
    writeVarint32(bb, encodeChroma[$prefer_chroma]);
  }
}

export function decodeSupportedDecoding(binary) {
  return _decodeSupportedDecoding(wrapByteBuffer(binary));
}

function _decodeSupportedDecoding(bb) {
  let message = {};

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional int32 ability_vp9 = 1;
      case 1: {
        message.ability_vp9 = readVarint32(bb);
        break;
      }

      // optional int32 ability_h264 = 2;
      case 2: {
        message.ability_h264 = readVarint32(bb);
        break;
      }

      // optional int32 ability_h265 = 3;
      case 3: {
        message.ability_h265 = readVarint32(bb);
        break;
      }

      // optional PreferCodec prefer = 4;
      case 4: {
        let limit = pushTemporaryLength(bb);
        message.prefer = _decodePreferCodec(bb);
        bb.limit = limit;
        break;
      }

      // optional int32 ability_vp8 = 5;
      case 5: {
        message.ability_vp8 = readVarint32(bb);
        break;
      }

      // optional int32 ability_av1 = 6;
      case 6: {
        message.ability_av1 = readVarint32(bb);
        break;
      }

      // optional CodecAbility i444 = 7;
      case 7: {
        let limit = pushTemporaryLength(bb);
        message.i444 = _decodeCodecAbility(bb);
        bb.limit = limit;
        break;
      }

      // optional Chroma prefer_chroma = 8;
      case 8: {
        message.prefer_chroma = decodeChroma[readVarint32(bb)];
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export function encodeOptionMessage(message) {
  let bb = popByteBuffer();
  _encodeOptionMessage(message, bb);
  return toUint8Array(bb);
}

function _encodeOptionMessage(message, bb) {
  // optional ImageQuality image_quality = 1;
  let $image_quality = message.image_quality;
  if ($image_quality !== undefined) {
    writeVarint32(bb, 8);
    writeVarint32(bb, encodeImageQuality[$image_quality]);
  }

  // optional BoolOption lock_after_session_end = 2;
  let $lock_after_session_end = message.lock_after_session_end;
  if ($lock_after_session_end !== undefined) {
    writeVarint32(bb, 18);
    let nested = popByteBuffer();
    _encodeBoolOption($lock_after_session_end, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional BoolOption show_remote_cursor = 3;
  let $show_remote_cursor = message.show_remote_cursor;
  if ($show_remote_cursor !== undefined) {
    writeVarint32(bb, 26);
    let nested = popByteBuffer();
    _encodeBoolOption($show_remote_cursor, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional BoolOption privacy_mode = 4;
  let $privacy_mode = message.privacy_mode;
  if ($privacy_mode !== undefined) {
    writeVarint32(bb, 34);
    let nested = popByteBuffer();
    _encodeBoolOption($privacy_mode, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional BoolOption block_input = 5;
  let $block_input = message.block_input;
  if ($block_input !== undefined) {
    writeVarint32(bb, 42);
    let nested = popByteBuffer();
    _encodeBoolOption($block_input, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional int32 custom_image_quality = 6;
  let $custom_image_quality = message.custom_image_quality;
  if ($custom_image_quality !== undefined) {
    writeVarint32(bb, 48);
    writeVarint64(bb, intToLong($custom_image_quality));
  }

  // optional BoolOption disable_audio = 7;
  let $disable_audio = message.disable_audio;
  if ($disable_audio !== undefined) {
    writeVarint32(bb, 58);
    let nested = popByteBuffer();
    _encodeBoolOption($disable_audio, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional BoolOption disable_clipboard = 8;
  let $disable_clipboard = message.disable_clipboard;
  if ($disable_clipboard !== undefined) {
    writeVarint32(bb, 66);
    let nested = popByteBuffer();
    _encodeBoolOption($disable_clipboard, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional BoolOption enable_file_transfer = 9;
  let $enable_file_transfer = message.enable_file_transfer;
  if ($enable_file_transfer !== undefined) {
    writeVarint32(bb, 74);
    let nested = popByteBuffer();
    _encodeBoolOption($enable_file_transfer, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional SupportedDecoding supported_decoding = 10;
  let $supported_decoding = message.supported_decoding;
  if ($supported_decoding !== undefined) {
    writeVarint32(bb, 82);
    let nested = popByteBuffer();
    _encodeSupportedDecoding($supported_decoding, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional int32 custom_fps = 11;
  let $custom_fps = message.custom_fps;
  if ($custom_fps !== undefined) {
    writeVarint32(bb, 88);
    writeVarint64(bb, intToLong($custom_fps));
  }

  // optional BoolOption disable_keyboard = 12;
  let $disable_keyboard = message.disable_keyboard;
  if ($disable_keyboard !== undefined) {
    writeVarint32(bb, 98);
    let nested = popByteBuffer();
    _encodeBoolOption($disable_keyboard, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional BoolOption follow_remote_cursor = 15;
  let $follow_remote_cursor = message.follow_remote_cursor;
  if ($follow_remote_cursor !== undefined) {
    writeVarint32(bb, 122);
    let nested = popByteBuffer();
    _encodeBoolOption($follow_remote_cursor, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional BoolOption follow_remote_window = 16;
  let $follow_remote_window = message.follow_remote_window;
  if ($follow_remote_window !== undefined) {
    writeVarint32(bb, 130);
    let nested = popByteBuffer();
    _encodeBoolOption($follow_remote_window, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional BoolOption disable_camera = 17;
  let $disable_camera = message.disable_camera;
  if ($disable_camera !== undefined) {
    writeVarint32(bb, 138);
    let nested = popByteBuffer();
    _encodeBoolOption($disable_camera, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }
}

export function decodeOptionMessage(binary) {
  return _decodeOptionMessage(wrapByteBuffer(binary));
}

function _decodeOptionMessage(bb) {
  let message = {};

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional ImageQuality image_quality = 1;
      case 1: {
        message.image_quality = decodeImageQuality[readVarint32(bb)];
        break;
      }

      // optional BoolOption lock_after_session_end = 2;
      case 2: {
        let limit = pushTemporaryLength(bb);
        message.lock_after_session_end = _decodeBoolOption(bb);
        bb.limit = limit;
        break;
      }

      // optional BoolOption show_remote_cursor = 3;
      case 3: {
        let limit = pushTemporaryLength(bb);
        message.show_remote_cursor = _decodeBoolOption(bb);
        bb.limit = limit;
        break;
      }

      // optional BoolOption privacy_mode = 4;
      case 4: {
        let limit = pushTemporaryLength(bb);
        message.privacy_mode = _decodeBoolOption(bb);
        bb.limit = limit;
        break;
      }

      // optional BoolOption block_input = 5;
      case 5: {
        let limit = pushTemporaryLength(bb);
        message.block_input = _decodeBoolOption(bb);
        bb.limit = limit;
        break;
      }

      // optional int32 custom_image_quality = 6;
      case 6: {
        message.custom_image_quality = readVarint32(bb);
        break;
      }

      // optional BoolOption disable_audio = 7;
      case 7: {
        let limit = pushTemporaryLength(bb);
        message.disable_audio = _decodeBoolOption(bb);
        bb.limit = limit;
        break;
      }

      // optional BoolOption disable_clipboard = 8;
      case 8: {
        let limit = pushTemporaryLength(bb);
        message.disable_clipboard = _decodeBoolOption(bb);
        bb.limit = limit;
        break;
      }

      // optional BoolOption enable_file_transfer = 9;
      case 9: {
        let limit = pushTemporaryLength(bb);
        message.enable_file_transfer = _decodeBoolOption(bb);
        bb.limit = limit;
        break;
      }

      // optional SupportedDecoding supported_decoding = 10;
      case 10: {
        let limit = pushTemporaryLength(bb);
        message.supported_decoding = _decodeSupportedDecoding(bb);
        bb.limit = limit;
        break;
      }

      // optional int32 custom_fps = 11;
      case 11: {
        message.custom_fps = readVarint32(bb);
        break;
      }

      // optional BoolOption disable_keyboard = 12;
      case 12: {
        let limit = pushTemporaryLength(bb);
        message.disable_keyboard = _decodeBoolOption(bb);
        bb.limit = limit;
        break;
      }

      // optional BoolOption follow_remote_cursor = 15;
      case 15: {
        let limit = pushTemporaryLength(bb);
        message.follow_remote_cursor = _decodeBoolOption(bb);
        bb.limit = limit;
        break;
      }

      // optional BoolOption follow_remote_window = 16;
      case 16: {
        let limit = pushTemporaryLength(bb);
        message.follow_remote_window = _decodeBoolOption(bb);
        bb.limit = limit;
        break;
      }

      // optional BoolOption disable_camera = 17;
      case 17: {
        let limit = pushTemporaryLength(bb);
        message.disable_camera = _decodeBoolOption(bb);
        bb.limit = limit;
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export function encodeTestDelay(message) {
  let bb = popByteBuffer();
  _encodeTestDelay(message, bb);
  return toUint8Array(bb);
}

function _encodeTestDelay(message, bb) {
  // optional int64 time = 1;
  let $time = message.time;
  if ($time !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, $time);
  }

  // optional bool from_client = 2;
  let $from_client = message.from_client;
  if ($from_client !== undefined) {
    writeVarint32(bb, 16);
    writeByte(bb, $from_client ? 1 : 0);
  }

  // optional uint32 last_delay = 3;
  let $last_delay = message.last_delay;
  if ($last_delay !== undefined) {
    writeVarint32(bb, 24);
    writeVarint32(bb, $last_delay);
  }

  // optional uint32 target_bitrate = 4;
  let $target_bitrate = message.target_bitrate;
  if ($target_bitrate !== undefined) {
    writeVarint32(bb, 32);
    writeVarint32(bb, $target_bitrate);
  }
}

export function decodeTestDelay(binary) {
  return _decodeTestDelay(wrapByteBuffer(binary));
}

function _decodeTestDelay(bb) {
  let message = {};

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional int64 time = 1;
      case 1: {
        message.time = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional bool from_client = 2;
      case 2: {
        message.from_client = !!readByte(bb);
        break;
      }

      // optional uint32 last_delay = 3;
      case 3: {
        message.last_delay = readVarint32(bb) >>> 0;
        break;
      }

      // optional uint32 target_bitrate = 4;
      case 4: {
        message.target_bitrate = readVarint32(bb) >>> 0;
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export function encodePublicKey(message) {
  let bb = popByteBuffer();
  _encodePublicKey(message, bb);
  return toUint8Array(bb);
}

function _encodePublicKey(message, bb) {
  // optional bytes asymmetric_value = 1;
  let $asymmetric_value = message.asymmetric_value;
  if ($asymmetric_value !== undefined) {
    writeVarint32(bb, 10);
    writeVarint32(bb, $asymmetric_value.length), writeBytes(bb, $asymmetric_value);
  }

  // optional bytes symmetric_value = 2;
  let $symmetric_value = message.symmetric_value;
  if ($symmetric_value !== undefined) {
    writeVarint32(bb, 18);
    writeVarint32(bb, $symmetric_value.length), writeBytes(bb, $symmetric_value);
  }
}

export function decodePublicKey(binary) {
  return _decodePublicKey(wrapByteBuffer(binary));
}

function _decodePublicKey(bb) {
  let message = {};

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional bytes asymmetric_value = 1;
      case 1: {
        message.asymmetric_value = readBytes(bb, readVarint32(bb));
        break;
      }

      // optional bytes symmetric_value = 2;
      case 2: {
        message.symmetric_value = readBytes(bb, readVarint32(bb));
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export function encodeSignedId(message) {
  let bb = popByteBuffer();
  _encodeSignedId(message, bb);
  return toUint8Array(bb);
}

function _encodeSignedId(message, bb) {
  // optional bytes id = 1;
  let $id = message.id;
  if ($id !== undefined) {
    writeVarint32(bb, 10);
    writeVarint32(bb, $id.length), writeBytes(bb, $id);
  }
}

export function decodeSignedId(binary) {
  return _decodeSignedId(wrapByteBuffer(binary));
}

function _decodeSignedId(bb) {
  let message = {};

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional bytes id = 1;
      case 1: {
        message.id = readBytes(bb, readVarint32(bb));
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export function encodeAudioFormat(message) {
  let bb = popByteBuffer();
  _encodeAudioFormat(message, bb);
  return toUint8Array(bb);
}

function _encodeAudioFormat(message, bb) {
  // optional uint32 sample_rate = 1;
  let $sample_rate = message.sample_rate;
  if ($sample_rate !== undefined) {
    writeVarint32(bb, 8);
    writeVarint32(bb, $sample_rate);
  }

  // optional uint32 channels = 2;
  let $channels = message.channels;
  if ($channels !== undefined) {
    writeVarint32(bb, 16);
    writeVarint32(bb, $channels);
  }
}

export function decodeAudioFormat(binary) {
  return _decodeAudioFormat(wrapByteBuffer(binary));
}

function _decodeAudioFormat(bb) {
  let message = {};

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional uint32 sample_rate = 1;
      case 1: {
        message.sample_rate = readVarint32(bb) >>> 0;
        break;
      }

      // optional uint32 channels = 2;
      case 2: {
        message.channels = readVarint32(bb) >>> 0;
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export function encodeAudioFrame(message) {
  let bb = popByteBuffer();
  _encodeAudioFrame(message, bb);
  return toUint8Array(bb);
}

function _encodeAudioFrame(message, bb) {
  // optional bytes data = 1;
  let $data = message.data;
  if ($data !== undefined) {
    writeVarint32(bb, 10);
    writeVarint32(bb, $data.length), writeBytes(bb, $data);
  }
}

export function decodeAudioFrame(binary) {
  return _decodeAudioFrame(wrapByteBuffer(binary));
}

function _decodeAudioFrame(bb) {
  let message = {};

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional bytes data = 1;
      case 1: {
        message.data = readBytes(bb, readVarint32(bb));
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export function encodeMessageBox(message) {
  let bb = popByteBuffer();
  _encodeMessageBox(message, bb);
  return toUint8Array(bb);
}

function _encodeMessageBox(message, bb) {
  // optional string msgtype = 1;
  let $msgtype = message.msgtype;
  if ($msgtype !== undefined) {
    writeVarint32(bb, 10);
    writeString(bb, $msgtype);
  }

  // optional string title = 2;
  let $title = message.title;
  if ($title !== undefined) {
    writeVarint32(bb, 18);
    writeString(bb, $title);
  }

  // optional string text = 3;
  let $text = message.text;
  if ($text !== undefined) {
    writeVarint32(bb, 26);
    writeString(bb, $text);
  }

  // optional string link = 4;
  let $link = message.link;
  if ($link !== undefined) {
    writeVarint32(bb, 34);
    writeString(bb, $link);
  }
}

export function decodeMessageBox(binary) {
  return _decodeMessageBox(wrapByteBuffer(binary));
}

function _decodeMessageBox(bb) {
  let message = {};

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional string msgtype = 1;
      case 1: {
        message.msgtype = readString(bb, readVarint32(bb));
        break;
      }

      // optional string title = 2;
      case 2: {
        message.title = readString(bb, readVarint32(bb));
        break;
      }

      // optional string text = 3;
      case 3: {
        message.text = readString(bb, readVarint32(bb));
        break;
      }

      // optional string link = 4;
      case 4: {
        message.link = readString(bb, readVarint32(bb));
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export function encodeBackNotification(message) {
  let bb = popByteBuffer();
  _encodeBackNotification(message, bb);
  return toUint8Array(bb);
}

function _encodeBackNotification(message, bb) {
  // optional PrivacyModeState privacy_mode_state = 1;
  let $privacy_mode_state = message.privacy_mode_state;
  if ($privacy_mode_state !== undefined) {
    writeVarint32(bb, 10);
    let nested = popByteBuffer();
    _encodePrivacyModeState($privacy_mode_state, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional BlockInputState block_input_state = 2;
  let $block_input_state = message.block_input_state;
  if ($block_input_state !== undefined) {
    writeVarint32(bb, 18);
    let nested = popByteBuffer();
    _encodeBlockInputState($block_input_state, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional string details = 3;
  let $details = message.details;
  if ($details !== undefined) {
    writeVarint32(bb, 26);
    writeString(bb, $details);
  }

  // optional string impl_key = 4;
  let $impl_key = message.impl_key;
  if ($impl_key !== undefined) {
    writeVarint32(bb, 34);
    writeString(bb, $impl_key);
  }
}

export function decodeBackNotification(binary) {
  return _decodeBackNotification(wrapByteBuffer(binary));
}

function _decodeBackNotification(bb) {
  let message = {};

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional PrivacyModeState privacy_mode_state = 1;
      case 1: {
        let limit = pushTemporaryLength(bb);
        message.privacy_mode_state = _decodePrivacyModeState(bb);
        bb.limit = limit;
        break;
      }

      // optional BlockInputState block_input_state = 2;
      case 2: {
        let limit = pushTemporaryLength(bb);
        message.block_input_state = _decodeBlockInputState(bb);
        bb.limit = limit;
        break;
      }

      // optional string details = 3;
      case 3: {
        message.details = readString(bb, readVarint32(bb));
        break;
      }

      // optional string impl_key = 4;
      case 4: {
        message.impl_key = readString(bb, readVarint32(bb));
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export function encodeElevationRequestWithLogon(message) {
  let bb = popByteBuffer();
  _encodeElevationRequestWithLogon(message, bb);
  return toUint8Array(bb);
}

function _encodeElevationRequestWithLogon(message, bb) {
  // optional string username = 1;
  let $username = message.username;
  if ($username !== undefined) {
    writeVarint32(bb, 10);
    writeString(bb, $username);
  }

  // optional string password = 2;
  let $password = message.password;
  if ($password !== undefined) {
    writeVarint32(bb, 18);
    writeString(bb, $password);
  }
}

export function decodeElevationRequestWithLogon(binary) {
  return _decodeElevationRequestWithLogon(wrapByteBuffer(binary));
}

function _decodeElevationRequestWithLogon(bb) {
  let message = {};

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional string username = 1;
      case 1: {
        message.username = readString(bb, readVarint32(bb));
        break;
      }

      // optional string password = 2;
      case 2: {
        message.password = readString(bb, readVarint32(bb));
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export function encodeElevationRequest(message) {
  let bb = popByteBuffer();
  _encodeElevationRequest(message, bb);
  return toUint8Array(bb);
}

function _encodeElevationRequest(message, bb) {
  // optional bool direct = 1;
  let $direct = message.direct;
  if ($direct !== undefined) {
    writeVarint32(bb, 8);
    writeByte(bb, $direct ? 1 : 0);
  }

  // optional ElevationRequestWithLogon logon = 2;
  let $logon = message.logon;
  if ($logon !== undefined) {
    writeVarint32(bb, 18);
    let nested = popByteBuffer();
    _encodeElevationRequestWithLogon($logon, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }
}

export function decodeElevationRequest(binary) {
  return _decodeElevationRequest(wrapByteBuffer(binary));
}

function _decodeElevationRequest(bb) {
  let message = {};

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional bool direct = 1;
      case 1: {
        message.direct = !!readByte(bb);
        break;
      }

      // optional ElevationRequestWithLogon logon = 2;
      case 2: {
        let limit = pushTemporaryLength(bb);
        message.logon = _decodeElevationRequestWithLogon(bb);
        bb.limit = limit;
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export function encodeSwitchSidesRequest(message) {
  let bb = popByteBuffer();
  _encodeSwitchSidesRequest(message, bb);
  return toUint8Array(bb);
}

function _encodeSwitchSidesRequest(message, bb) {
  // optional bytes uuid = 1;
  let $uuid = message.uuid;
  if ($uuid !== undefined) {
    writeVarint32(bb, 10);
    writeVarint32(bb, $uuid.length), writeBytes(bb, $uuid);
  }
}

export function decodeSwitchSidesRequest(binary) {
  return _decodeSwitchSidesRequest(wrapByteBuffer(binary));
}

function _decodeSwitchSidesRequest(bb) {
  let message = {};

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional bytes uuid = 1;
      case 1: {
        message.uuid = readBytes(bb, readVarint32(bb));
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export function encodeSwitchSidesResponse(message) {
  let bb = popByteBuffer();
  _encodeSwitchSidesResponse(message, bb);
  return toUint8Array(bb);
}

function _encodeSwitchSidesResponse(message, bb) {
  // optional bytes uuid = 1;
  let $uuid = message.uuid;
  if ($uuid !== undefined) {
    writeVarint32(bb, 10);
    writeVarint32(bb, $uuid.length), writeBytes(bb, $uuid);
  }

  // optional LoginRequest lr = 2;
  let $lr = message.lr;
  if ($lr !== undefined) {
    writeVarint32(bb, 18);
    let nested = popByteBuffer();
    _encodeLoginRequest($lr, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }
}

export function decodeSwitchSidesResponse(binary) {
  return _decodeSwitchSidesResponse(wrapByteBuffer(binary));
}

function _decodeSwitchSidesResponse(bb) {
  let message = {};

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional bytes uuid = 1;
      case 1: {
        message.uuid = readBytes(bb, readVarint32(bb));
        break;
      }

      // optional LoginRequest lr = 2;
      case 2: {
        let limit = pushTemporaryLength(bb);
        message.lr = _decodeLoginRequest(bb);
        bb.limit = limit;
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export function encodeSwitchBack(message) {
  let bb = popByteBuffer();
  _encodeSwitchBack(message, bb);
  return toUint8Array(bb);
}

function _encodeSwitchBack(message, bb) {
}

export function decodeSwitchBack(binary) {
  return _decodeSwitchBack(wrapByteBuffer(binary));
}

function _decodeSwitchBack(bb) {
  let message = {};

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export function encodePluginRequest(message) {
  let bb = popByteBuffer();
  _encodePluginRequest(message, bb);
  return toUint8Array(bb);
}

function _encodePluginRequest(message, bb) {
  // optional string id = 1;
  let $id = message.id;
  if ($id !== undefined) {
    writeVarint32(bb, 10);
    writeString(bb, $id);
  }

  // optional bytes content = 2;
  let $content = message.content;
  if ($content !== undefined) {
    writeVarint32(bb, 18);
    writeVarint32(bb, $content.length), writeBytes(bb, $content);
  }
}

export function decodePluginRequest(binary) {
  return _decodePluginRequest(wrapByteBuffer(binary));
}

function _decodePluginRequest(bb) {
  let message = {};

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional string id = 1;
      case 1: {
        message.id = readString(bb, readVarint32(bb));
        break;
      }

      // optional bytes content = 2;
      case 2: {
        message.content = readBytes(bb, readVarint32(bb));
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export function encodePluginFailure(message) {
  let bb = popByteBuffer();
  _encodePluginFailure(message, bb);
  return toUint8Array(bb);
}

function _encodePluginFailure(message, bb) {
  // optional string id = 1;
  let $id = message.id;
  if ($id !== undefined) {
    writeVarint32(bb, 10);
    writeString(bb, $id);
  }

  // optional string name = 2;
  let $name = message.name;
  if ($name !== undefined) {
    writeVarint32(bb, 18);
    writeString(bb, $name);
  }

  // optional string msg = 3;
  let $msg = message.msg;
  if ($msg !== undefined) {
    writeVarint32(bb, 26);
    writeString(bb, $msg);
  }
}

export function decodePluginFailure(binary) {
  return _decodePluginFailure(wrapByteBuffer(binary));
}

function _decodePluginFailure(bb) {
  let message = {};

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional string id = 1;
      case 1: {
        message.id = readString(bb, readVarint32(bb));
        break;
      }

      // optional string name = 2;
      case 2: {
        message.name = readString(bb, readVarint32(bb));
        break;
      }

      // optional string msg = 3;
      case 3: {
        message.msg = readString(bb, readVarint32(bb));
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export function encodeWindowsSessions(message) {
  let bb = popByteBuffer();
  _encodeWindowsSessions(message, bb);
  return toUint8Array(bb);
}

function _encodeWindowsSessions(message, bb) {
  // repeated WindowsSession sessions = 1;
  let array$sessions = message.sessions;
  if (array$sessions !== undefined) {
    for (let value of array$sessions) {
      writeVarint32(bb, 10);
      let nested = popByteBuffer();
      _encodeWindowsSession(value, nested);
      writeVarint32(bb, nested.limit);
      writeByteBuffer(bb, nested);
      pushByteBuffer(nested);
    }
  }

  // optional uint32 current_sid = 2;
  let $current_sid = message.current_sid;
  if ($current_sid !== undefined) {
    writeVarint32(bb, 16);
    writeVarint32(bb, $current_sid);
  }
}

export function decodeWindowsSessions(binary) {
  return _decodeWindowsSessions(wrapByteBuffer(binary));
}

function _decodeWindowsSessions(bb) {
  let message = {};

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // repeated WindowsSession sessions = 1;
      case 1: {
        let limit = pushTemporaryLength(bb);
        let values = message.sessions || (message.sessions = []);
        values.push(_decodeWindowsSession(bb));
        bb.limit = limit;
        break;
      }

      // optional uint32 current_sid = 2;
      case 2: {
        message.current_sid = readVarint32(bb) >>> 0;
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export function encodeMessageQuery(message) {
  let bb = popByteBuffer();
  _encodeMessageQuery(message, bb);
  return toUint8Array(bb);
}

function _encodeMessageQuery(message, bb) {
  // optional int32 switch_display = 1;
  let $switch_display = message.switch_display;
  if ($switch_display !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, intToLong($switch_display));
  }
}

export function decodeMessageQuery(binary) {
  return _decodeMessageQuery(wrapByteBuffer(binary));
}

function _decodeMessageQuery(bb) {
  let message = {};

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional int32 switch_display = 1;
      case 1: {
        message.switch_display = readVarint32(bb);
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export function encodeMisc(message) {
  let bb = popByteBuffer();
  _encodeMisc(message, bb);
  return toUint8Array(bb);
}

function _encodeMisc(message, bb) {
  // optional ChatMessage chat_message = 4;
  let $chat_message = message.chat_message;
  if ($chat_message !== undefined) {
    writeVarint32(bb, 34);
    let nested = popByteBuffer();
    _encodeChatMessage($chat_message, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional SwitchDisplay switch_display = 5;
  let $switch_display = message.switch_display;
  if ($switch_display !== undefined) {
    writeVarint32(bb, 42);
    let nested = popByteBuffer();
    _encodeSwitchDisplay($switch_display, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional PermissionInfo permission_info = 6;
  let $permission_info = message.permission_info;
  if ($permission_info !== undefined) {
    writeVarint32(bb, 50);
    let nested = popByteBuffer();
    _encodePermissionInfo($permission_info, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional OptionMessage option = 7;
  let $option = message.option;
  if ($option !== undefined) {
    writeVarint32(bb, 58);
    let nested = popByteBuffer();
    _encodeOptionMessage($option, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional AudioFormat audio_format = 8;
  let $audio_format = message.audio_format;
  if ($audio_format !== undefined) {
    writeVarint32(bb, 66);
    let nested = popByteBuffer();
    _encodeAudioFormat($audio_format, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional string close_reason = 9;
  let $close_reason = message.close_reason;
  if ($close_reason !== undefined) {
    writeVarint32(bb, 74);
    writeString(bb, $close_reason);
  }

  // optional bool refresh_video = 10;
  let $refresh_video = message.refresh_video;
  if ($refresh_video !== undefined) {
    writeVarint32(bb, 80);
    writeByte(bb, $refresh_video ? 1 : 0);
  }

  // optional bool video_received = 12;
  let $video_received = message.video_received;
  if ($video_received !== undefined) {
    writeVarint32(bb, 96);
    writeByte(bb, $video_received ? 1 : 0);
  }

  // optional BackNotification back_notification = 13;
  let $back_notification = message.back_notification;
  if ($back_notification !== undefined) {
    writeVarint32(bb, 106);
    let nested = popByteBuffer();
    _encodeBackNotification($back_notification, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional bool restart_remote_device = 14;
  let $restart_remote_device = message.restart_remote_device;
  if ($restart_remote_device !== undefined) {
    writeVarint32(bb, 112);
    writeByte(bb, $restart_remote_device ? 1 : 0);
  }

  // optional bool uac = 15;
  let $uac = message.uac;
  if ($uac !== undefined) {
    writeVarint32(bb, 120);
    writeByte(bb, $uac ? 1 : 0);
  }

  // optional bool foreground_window_elevated = 16;
  let $foreground_window_elevated = message.foreground_window_elevated;
  if ($foreground_window_elevated !== undefined) {
    writeVarint32(bb, 128);
    writeByte(bb, $foreground_window_elevated ? 1 : 0);
  }

  // optional bool stop_service = 17;
  let $stop_service = message.stop_service;
  if ($stop_service !== undefined) {
    writeVarint32(bb, 136);
    writeByte(bb, $stop_service ? 1 : 0);
  }

  // optional ElevationRequest elevation_request = 18;
  let $elevation_request = message.elevation_request;
  if ($elevation_request !== undefined) {
    writeVarint32(bb, 146);
    let nested = popByteBuffer();
    _encodeElevationRequest($elevation_request, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional string elevation_response = 19;
  let $elevation_response = message.elevation_response;
  if ($elevation_response !== undefined) {
    writeVarint32(bb, 154);
    writeString(bb, $elevation_response);
  }

  // optional bool portable_service_running = 20;
  let $portable_service_running = message.portable_service_running;
  if ($portable_service_running !== undefined) {
    writeVarint32(bb, 160);
    writeByte(bb, $portable_service_running ? 1 : 0);
  }

  // optional SwitchSidesRequest switch_sides_request = 21;
  let $switch_sides_request = message.switch_sides_request;
  if ($switch_sides_request !== undefined) {
    writeVarint32(bb, 170);
    let nested = popByteBuffer();
    _encodeSwitchSidesRequest($switch_sides_request, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional SwitchBack switch_back = 22;
  let $switch_back = message.switch_back;
  if ($switch_back !== undefined) {
    writeVarint32(bb, 178);
    let nested = popByteBuffer();
    _encodeSwitchBack($switch_back, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional Resolution change_resolution = 24;
  let $change_resolution = message.change_resolution;
  if ($change_resolution !== undefined) {
    writeVarint32(bb, 194);
    let nested = popByteBuffer();
    _encodeResolution($change_resolution, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional PluginRequest plugin_request = 25;
  let $plugin_request = message.plugin_request;
  if ($plugin_request !== undefined) {
    writeVarint32(bb, 202);
    let nested = popByteBuffer();
    _encodePluginRequest($plugin_request, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional PluginFailure plugin_failure = 26;
  let $plugin_failure = message.plugin_failure;
  if ($plugin_failure !== undefined) {
    writeVarint32(bb, 210);
    let nested = popByteBuffer();
    _encodePluginFailure($plugin_failure, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional uint32 full_speed_fps = 27;
  let $full_speed_fps = message.full_speed_fps;
  if ($full_speed_fps !== undefined) {
    writeVarint32(bb, 216);
    writeVarint32(bb, $full_speed_fps);
  }

  // optional uint32 auto_adjust_fps = 28;
  let $auto_adjust_fps = message.auto_adjust_fps;
  if ($auto_adjust_fps !== undefined) {
    writeVarint32(bb, 224);
    writeVarint32(bb, $auto_adjust_fps);
  }

  // optional bool client_record_status = 29;
  let $client_record_status = message.client_record_status;
  if ($client_record_status !== undefined) {
    writeVarint32(bb, 232);
    writeByte(bb, $client_record_status ? 1 : 0);
  }

  // optional CaptureDisplays capture_displays = 30;
  let $capture_displays = message.capture_displays;
  if ($capture_displays !== undefined) {
    writeVarint32(bb, 242);
    let nested = popByteBuffer();
    _encodeCaptureDisplays($capture_displays, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional int32 refresh_video_display = 31;
  let $refresh_video_display = message.refresh_video_display;
  if ($refresh_video_display !== undefined) {
    writeVarint32(bb, 248);
    writeVarint64(bb, intToLong($refresh_video_display));
  }

  // optional ToggleVirtualDisplay toggle_virtual_display = 32;
  let $toggle_virtual_display = message.toggle_virtual_display;
  if ($toggle_virtual_display !== undefined) {
    writeVarint32(bb, 258);
    let nested = popByteBuffer();
    _encodeToggleVirtualDisplay($toggle_virtual_display, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional TogglePrivacyMode toggle_privacy_mode = 33;
  let $toggle_privacy_mode = message.toggle_privacy_mode;
  if ($toggle_privacy_mode !== undefined) {
    writeVarint32(bb, 266);
    let nested = popByteBuffer();
    _encodeTogglePrivacyMode($toggle_privacy_mode, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional SupportedEncoding supported_encoding = 34;
  let $supported_encoding = message.supported_encoding;
  if ($supported_encoding !== undefined) {
    writeVarint32(bb, 274);
    let nested = popByteBuffer();
    _encodeSupportedEncoding($supported_encoding, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional uint32 selected_sid = 35;
  let $selected_sid = message.selected_sid;
  if ($selected_sid !== undefined) {
    writeVarint32(bb, 280);
    writeVarint32(bb, $selected_sid);
  }

  // optional DisplayResolution change_display_resolution = 36;
  let $change_display_resolution = message.change_display_resolution;
  if ($change_display_resolution !== undefined) {
    writeVarint32(bb, 290);
    let nested = popByteBuffer();
    _encodeDisplayResolution($change_display_resolution, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional MessageQuery message_query = 37;
  let $message_query = message.message_query;
  if ($message_query !== undefined) {
    writeVarint32(bb, 298);
    let nested = popByteBuffer();
    _encodeMessageQuery($message_query, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional int32 follow_current_display = 38;
  let $follow_current_display = message.follow_current_display;
  if ($follow_current_display !== undefined) {
    writeVarint32(bb, 304);
    writeVarint64(bb, intToLong($follow_current_display));
  }
}

export function decodeMisc(binary) {
  return _decodeMisc(wrapByteBuffer(binary));
}

function _decodeMisc(bb) {
  let message = {};

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional ChatMessage chat_message = 4;
      case 4: {
        let limit = pushTemporaryLength(bb);
        message.chat_message = _decodeChatMessage(bb);
        bb.limit = limit;
        break;
      }

      // optional SwitchDisplay switch_display = 5;
      case 5: {
        let limit = pushTemporaryLength(bb);
        message.switch_display = _decodeSwitchDisplay(bb);
        bb.limit = limit;
        break;
      }

      // optional PermissionInfo permission_info = 6;
      case 6: {
        let limit = pushTemporaryLength(bb);
        message.permission_info = _decodePermissionInfo(bb);
        bb.limit = limit;
        break;
      }

      // optional OptionMessage option = 7;
      case 7: {
        let limit = pushTemporaryLength(bb);
        message.option = _decodeOptionMessage(bb);
        bb.limit = limit;
        break;
      }

      // optional AudioFormat audio_format = 8;
      case 8: {
        let limit = pushTemporaryLength(bb);
        message.audio_format = _decodeAudioFormat(bb);
        bb.limit = limit;
        break;
      }

      // optional string close_reason = 9;
      case 9: {
        message.close_reason = readString(bb, readVarint32(bb));
        break;
      }

      // optional bool refresh_video = 10;
      case 10: {
        message.refresh_video = !!readByte(bb);
        break;
      }

      // optional bool video_received = 12;
      case 12: {
        message.video_received = !!readByte(bb);
        break;
      }

      // optional BackNotification back_notification = 13;
      case 13: {
        let limit = pushTemporaryLength(bb);
        message.back_notification = _decodeBackNotification(bb);
        bb.limit = limit;
        break;
      }

      // optional bool restart_remote_device = 14;
      case 14: {
        message.restart_remote_device = !!readByte(bb);
        break;
      }

      // optional bool uac = 15;
      case 15: {
        message.uac = !!readByte(bb);
        break;
      }

      // optional bool foreground_window_elevated = 16;
      case 16: {
        message.foreground_window_elevated = !!readByte(bb);
        break;
      }

      // optional bool stop_service = 17;
      case 17: {
        message.stop_service = !!readByte(bb);
        break;
      }

      // optional ElevationRequest elevation_request = 18;
      case 18: {
        let limit = pushTemporaryLength(bb);
        message.elevation_request = _decodeElevationRequest(bb);
        bb.limit = limit;
        break;
      }

      // optional string elevation_response = 19;
      case 19: {
        message.elevation_response = readString(bb, readVarint32(bb));
        break;
      }

      // optional bool portable_service_running = 20;
      case 20: {
        message.portable_service_running = !!readByte(bb);
        break;
      }

      // optional SwitchSidesRequest switch_sides_request = 21;
      case 21: {
        let limit = pushTemporaryLength(bb);
        message.switch_sides_request = _decodeSwitchSidesRequest(bb);
        bb.limit = limit;
        break;
      }

      // optional SwitchBack switch_back = 22;
      case 22: {
        let limit = pushTemporaryLength(bb);
        message.switch_back = _decodeSwitchBack(bb);
        bb.limit = limit;
        break;
      }

      // optional Resolution change_resolution = 24;
      case 24: {
        let limit = pushTemporaryLength(bb);
        message.change_resolution = _decodeResolution(bb);
        bb.limit = limit;
        break;
      }

      // optional PluginRequest plugin_request = 25;
      case 25: {
        let limit = pushTemporaryLength(bb);
        message.plugin_request = _decodePluginRequest(bb);
        bb.limit = limit;
        break;
      }

      // optional PluginFailure plugin_failure = 26;
      case 26: {
        let limit = pushTemporaryLength(bb);
        message.plugin_failure = _decodePluginFailure(bb);
        bb.limit = limit;
        break;
      }

      // optional uint32 full_speed_fps = 27;
      case 27: {
        message.full_speed_fps = readVarint32(bb) >>> 0;
        break;
      }

      // optional uint32 auto_adjust_fps = 28;
      case 28: {
        message.auto_adjust_fps = readVarint32(bb) >>> 0;
        break;
      }

      // optional bool client_record_status = 29;
      case 29: {
        message.client_record_status = !!readByte(bb);
        break;
      }

      // optional CaptureDisplays capture_displays = 30;
      case 30: {
        let limit = pushTemporaryLength(bb);
        message.capture_displays = _decodeCaptureDisplays(bb);
        bb.limit = limit;
        break;
      }

      // optional int32 refresh_video_display = 31;
      case 31: {
        message.refresh_video_display = readVarint32(bb);
        break;
      }

      // optional ToggleVirtualDisplay toggle_virtual_display = 32;
      case 32: {
        let limit = pushTemporaryLength(bb);
        message.toggle_virtual_display = _decodeToggleVirtualDisplay(bb);
        bb.limit = limit;
        break;
      }

      // optional TogglePrivacyMode toggle_privacy_mode = 33;
      case 33: {
        let limit = pushTemporaryLength(bb);
        message.toggle_privacy_mode = _decodeTogglePrivacyMode(bb);
        bb.limit = limit;
        break;
      }

      // optional SupportedEncoding supported_encoding = 34;
      case 34: {
        let limit = pushTemporaryLength(bb);
        message.supported_encoding = _decodeSupportedEncoding(bb);
        bb.limit = limit;
        break;
      }

      // optional uint32 selected_sid = 35;
      case 35: {
        message.selected_sid = readVarint32(bb) >>> 0;
        break;
      }

      // optional DisplayResolution change_display_resolution = 36;
      case 36: {
        let limit = pushTemporaryLength(bb);
        message.change_display_resolution = _decodeDisplayResolution(bb);
        bb.limit = limit;
        break;
      }

      // optional MessageQuery message_query = 37;
      case 37: {
        let limit = pushTemporaryLength(bb);
        message.message_query = _decodeMessageQuery(bb);
        bb.limit = limit;
        break;
      }

      // optional int32 follow_current_display = 38;
      case 38: {
        message.follow_current_display = readVarint32(bb);
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export function encodeVoiceCallRequest(message) {
  let bb = popByteBuffer();
  _encodeVoiceCallRequest(message, bb);
  return toUint8Array(bb);
}

function _encodeVoiceCallRequest(message, bb) {
  // optional int64 req_timestamp = 1;
  let $req_timestamp = message.req_timestamp;
  if ($req_timestamp !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, $req_timestamp);
  }

  // optional bool is_connect = 2;
  let $is_connect = message.is_connect;
  if ($is_connect !== undefined) {
    writeVarint32(bb, 16);
    writeByte(bb, $is_connect ? 1 : 0);
  }
}

export function decodeVoiceCallRequest(binary) {
  return _decodeVoiceCallRequest(wrapByteBuffer(binary));
}

function _decodeVoiceCallRequest(bb) {
  let message = {};

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional int64 req_timestamp = 1;
      case 1: {
        message.req_timestamp = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional bool is_connect = 2;
      case 2: {
        message.is_connect = !!readByte(bb);
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export function encodeVoiceCallResponse(message) {
  let bb = popByteBuffer();
  _encodeVoiceCallResponse(message, bb);
  return toUint8Array(bb);
}

function _encodeVoiceCallResponse(message, bb) {
  // optional bool accepted = 1;
  let $accepted = message.accepted;
  if ($accepted !== undefined) {
    writeVarint32(bb, 8);
    writeByte(bb, $accepted ? 1 : 0);
  }

  // optional int64 req_timestamp = 2;
  let $req_timestamp = message.req_timestamp;
  if ($req_timestamp !== undefined) {
    writeVarint32(bb, 16);
    writeVarint64(bb, $req_timestamp);
  }

  // optional int64 ack_timestamp = 3;
  let $ack_timestamp = message.ack_timestamp;
  if ($ack_timestamp !== undefined) {
    writeVarint32(bb, 24);
    writeVarint64(bb, $ack_timestamp);
  }
}

export function decodeVoiceCallResponse(binary) {
  return _decodeVoiceCallResponse(wrapByteBuffer(binary));
}

function _decodeVoiceCallResponse(bb) {
  let message = {};

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional bool accepted = 1;
      case 1: {
        message.accepted = !!readByte(bb);
        break;
      }

      // optional int64 req_timestamp = 2;
      case 2: {
        message.req_timestamp = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional int64 ack_timestamp = 3;
      case 3: {
        message.ack_timestamp = readVarint64(bb, /* unsigned */ false);
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export function encodeScreenshotRequest(message) {
  let bb = popByteBuffer();
  _encodeScreenshotRequest(message, bb);
  return toUint8Array(bb);
}

function _encodeScreenshotRequest(message, bb) {
  // optional int32 display = 1;
  let $display = message.display;
  if ($display !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, intToLong($display));
  }

  // optional string sid = 2;
  let $sid = message.sid;
  if ($sid !== undefined) {
    writeVarint32(bb, 18);
    writeString(bb, $sid);
  }
}

export function decodeScreenshotRequest(binary) {
  return _decodeScreenshotRequest(wrapByteBuffer(binary));
}

function _decodeScreenshotRequest(bb) {
  let message = {};

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional int32 display = 1;
      case 1: {
        message.display = readVarint32(bb);
        break;
      }

      // optional string sid = 2;
      case 2: {
        message.sid = readString(bb, readVarint32(bb));
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export function encodeScreenshotResponse(message) {
  let bb = popByteBuffer();
  _encodeScreenshotResponse(message, bb);
  return toUint8Array(bb);
}

function _encodeScreenshotResponse(message, bb) {
  // optional string sid = 1;
  let $sid = message.sid;
  if ($sid !== undefined) {
    writeVarint32(bb, 10);
    writeString(bb, $sid);
  }

  // optional string msg = 2;
  let $msg = message.msg;
  if ($msg !== undefined) {
    writeVarint32(bb, 18);
    writeString(bb, $msg);
  }

  // optional bytes data = 3;
  let $data = message.data;
  if ($data !== undefined) {
    writeVarint32(bb, 26);
    writeVarint32(bb, $data.length), writeBytes(bb, $data);
  }
}

export function decodeScreenshotResponse(binary) {
  return _decodeScreenshotResponse(wrapByteBuffer(binary));
}

function _decodeScreenshotResponse(bb) {
  let message = {};

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional string sid = 1;
      case 1: {
        message.sid = readString(bb, readVarint32(bb));
        break;
      }

      // optional string msg = 2;
      case 2: {
        message.msg = readString(bb, readVarint32(bb));
        break;
      }

      // optional bytes data = 3;
      case 3: {
        message.data = readBytes(bb, readVarint32(bb));
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export function encodeMessage(message) {
  let bb = popByteBuffer();
  _encodeMessage(message, bb);
  return toUint8Array(bb);
}

function _encodeMessage(message, bb) {
  // optional SignedId signed_id = 3;
  let $signed_id = message.signed_id;
  if ($signed_id !== undefined) {
    writeVarint32(bb, 26);
    let nested = popByteBuffer();
    _encodeSignedId($signed_id, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional PublicKey public_key = 4;
  let $public_key = message.public_key;
  if ($public_key !== undefined) {
    writeVarint32(bb, 34);
    let nested = popByteBuffer();
    _encodePublicKey($public_key, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional TestDelay test_delay = 5;
  let $test_delay = message.test_delay;
  if ($test_delay !== undefined) {
    writeVarint32(bb, 42);
    let nested = popByteBuffer();
    _encodeTestDelay($test_delay, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional VideoFrame video_frame = 6;
  let $video_frame = message.video_frame;
  if ($video_frame !== undefined) {
    writeVarint32(bb, 50);
    let nested = popByteBuffer();
    _encodeVideoFrame($video_frame, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional LoginRequest login_request = 7;
  let $login_request = message.login_request;
  if ($login_request !== undefined) {
    writeVarint32(bb, 58);
    let nested = popByteBuffer();
    _encodeLoginRequest($login_request, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional LoginResponse login_response = 8;
  let $login_response = message.login_response;
  if ($login_response !== undefined) {
    writeVarint32(bb, 66);
    let nested = popByteBuffer();
    _encodeLoginResponse($login_response, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional Hash hash = 9;
  let $hash = message.hash;
  if ($hash !== undefined) {
    writeVarint32(bb, 74);
    let nested = popByteBuffer();
    _encodeHash($hash, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional MouseEvent mouse_event = 10;
  let $mouse_event = message.mouse_event;
  if ($mouse_event !== undefined) {
    writeVarint32(bb, 82);
    let nested = popByteBuffer();
    _encodeMouseEvent($mouse_event, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional AudioFrame audio_frame = 11;
  let $audio_frame = message.audio_frame;
  if ($audio_frame !== undefined) {
    writeVarint32(bb, 90);
    let nested = popByteBuffer();
    _encodeAudioFrame($audio_frame, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional CursorData cursor_data = 12;
  let $cursor_data = message.cursor_data;
  if ($cursor_data !== undefined) {
    writeVarint32(bb, 98);
    let nested = popByteBuffer();
    _encodeCursorData($cursor_data, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional CursorPosition cursor_position = 13;
  let $cursor_position = message.cursor_position;
  if ($cursor_position !== undefined) {
    writeVarint32(bb, 106);
    let nested = popByteBuffer();
    _encodeCursorPosition($cursor_position, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional uint64 cursor_id = 14;
  let $cursor_id = message.cursor_id;
  if ($cursor_id !== undefined) {
    writeVarint32(bb, 112);
    writeVarint64(bb, $cursor_id);
  }

  // optional KeyEvent key_event = 15;
  let $key_event = message.key_event;
  if ($key_event !== undefined) {
    writeVarint32(bb, 122);
    let nested = popByteBuffer();
    _encodeKeyEvent($key_event, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional Clipboard clipboard = 16;
  let $clipboard = message.clipboard;
  if ($clipboard !== undefined) {
    writeVarint32(bb, 130);
    let nested = popByteBuffer();
    _encodeClipboard($clipboard, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional FileAction file_action = 17;
  let $file_action = message.file_action;
  if ($file_action !== undefined) {
    writeVarint32(bb, 138);
    let nested = popByteBuffer();
    _encodeFileAction($file_action, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional FileResponse file_response = 18;
  let $file_response = message.file_response;
  if ($file_response !== undefined) {
    writeVarint32(bb, 146);
    let nested = popByteBuffer();
    _encodeFileResponse($file_response, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional Misc misc = 19;
  let $misc = message.misc;
  if ($misc !== undefined) {
    writeVarint32(bb, 154);
    let nested = popByteBuffer();
    _encodeMisc($misc, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional Cliprdr cliprdr = 20;
  let $cliprdr = message.cliprdr;
  if ($cliprdr !== undefined) {
    writeVarint32(bb, 162);
    let nested = popByteBuffer();
    _encodeCliprdr($cliprdr, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional MessageBox message_box = 21;
  let $message_box = message.message_box;
  if ($message_box !== undefined) {
    writeVarint32(bb, 170);
    let nested = popByteBuffer();
    _encodeMessageBox($message_box, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional SwitchSidesResponse switch_sides_response = 22;
  let $switch_sides_response = message.switch_sides_response;
  if ($switch_sides_response !== undefined) {
    writeVarint32(bb, 178);
    let nested = popByteBuffer();
    _encodeSwitchSidesResponse($switch_sides_response, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional VoiceCallRequest voice_call_request = 23;
  let $voice_call_request = message.voice_call_request;
  if ($voice_call_request !== undefined) {
    writeVarint32(bb, 186);
    let nested = popByteBuffer();
    _encodeVoiceCallRequest($voice_call_request, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional VoiceCallResponse voice_call_response = 24;
  let $voice_call_response = message.voice_call_response;
  if ($voice_call_response !== undefined) {
    writeVarint32(bb, 194);
    let nested = popByteBuffer();
    _encodeVoiceCallResponse($voice_call_response, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional PeerInfo peer_info = 25;
  let $peer_info = message.peer_info;
  if ($peer_info !== undefined) {
    writeVarint32(bb, 202);
    let nested = popByteBuffer();
    _encodePeerInfo($peer_info, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional PointerDeviceEvent pointer_device_event = 26;
  let $pointer_device_event = message.pointer_device_event;
  if ($pointer_device_event !== undefined) {
    writeVarint32(bb, 210);
    let nested = popByteBuffer();
    _encodePointerDeviceEvent($pointer_device_event, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional Auth2FA auth_2fa = 27;
  let $auth_2fa = message.auth_2fa;
  if ($auth_2fa !== undefined) {
    writeVarint32(bb, 218);
    let nested = popByteBuffer();
    _encodeAuth2FA($auth_2fa, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional MultiClipboards multi_clipboards = 28;
  let $multi_clipboards = message.multi_clipboards;
  if ($multi_clipboards !== undefined) {
    writeVarint32(bb, 226);
    let nested = popByteBuffer();
    _encodeMultiClipboards($multi_clipboards, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional ScreenshotRequest screenshot_request = 29;
  let $screenshot_request = message.screenshot_request;
  if ($screenshot_request !== undefined) {
    writeVarint32(bb, 234);
    let nested = popByteBuffer();
    _encodeScreenshotRequest($screenshot_request, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional ScreenshotResponse screenshot_response = 30;
  let $screenshot_response = message.screenshot_response;
  if ($screenshot_response !== undefined) {
    writeVarint32(bb, 242);
    let nested = popByteBuffer();
    _encodeScreenshotResponse($screenshot_response, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }
}

export function decodeMessage(binary) {
  return _decodeMessage(wrapByteBuffer(binary));
}

function _decodeMessage(bb) {
  let message = {};

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional SignedId signed_id = 3;
      case 3: {
        let limit = pushTemporaryLength(bb);
        message.signed_id = _decodeSignedId(bb);
        bb.limit = limit;
        break;
      }

      // optional PublicKey public_key = 4;
      case 4: {
        let limit = pushTemporaryLength(bb);
        message.public_key = _decodePublicKey(bb);
        bb.limit = limit;
        break;
      }

      // optional TestDelay test_delay = 5;
      case 5: {
        let limit = pushTemporaryLength(bb);
        message.test_delay = _decodeTestDelay(bb);
        bb.limit = limit;
        break;
      }

      // optional VideoFrame video_frame = 6;
      case 6: {
        let limit = pushTemporaryLength(bb);
        message.video_frame = _decodeVideoFrame(bb);
        bb.limit = limit;
        break;
      }

      // optional LoginRequest login_request = 7;
      case 7: {
        let limit = pushTemporaryLength(bb);
        message.login_request = _decodeLoginRequest(bb);
        bb.limit = limit;
        break;
      }

      // optional LoginResponse login_response = 8;
      case 8: {
        let limit = pushTemporaryLength(bb);
        message.login_response = _decodeLoginResponse(bb);
        bb.limit = limit;
        break;
      }

      // optional Hash hash = 9;
      case 9: {
        let limit = pushTemporaryLength(bb);
        message.hash = _decodeHash(bb);
        bb.limit = limit;
        break;
      }

      // optional MouseEvent mouse_event = 10;
      case 10: {
        let limit = pushTemporaryLength(bb);
        message.mouse_event = _decodeMouseEvent(bb);
        bb.limit = limit;
        break;
      }

      // optional AudioFrame audio_frame = 11;
      case 11: {
        let limit = pushTemporaryLength(bb);
        message.audio_frame = _decodeAudioFrame(bb);
        bb.limit = limit;
        break;
      }

      // optional CursorData cursor_data = 12;
      case 12: {
        let limit = pushTemporaryLength(bb);
        message.cursor_data = _decodeCursorData(bb);
        bb.limit = limit;
        break;
      }

      // optional CursorPosition cursor_position = 13;
      case 13: {
        let limit = pushTemporaryLength(bb);
        message.cursor_position = _decodeCursorPosition(bb);
        bb.limit = limit;
        break;
      }

      // optional uint64 cursor_id = 14;
      case 14: {
        message.cursor_id = readVarint64(bb, /* unsigned */ true);
        break;
      }

      // optional KeyEvent key_event = 15;
      case 15: {
        let limit = pushTemporaryLength(bb);
        message.key_event = _decodeKeyEvent(bb);
        bb.limit = limit;
        break;
      }

      // optional Clipboard clipboard = 16;
      case 16: {
        let limit = pushTemporaryLength(bb);
        message.clipboard = _decodeClipboard(bb);
        bb.limit = limit;
        break;
      }

      // optional FileAction file_action = 17;
      case 17: {
        let limit = pushTemporaryLength(bb);
        message.file_action = _decodeFileAction(bb);
        bb.limit = limit;
        break;
      }

      // optional FileResponse file_response = 18;
      case 18: {
        let limit = pushTemporaryLength(bb);
        message.file_response = _decodeFileResponse(bb);
        bb.limit = limit;
        break;
      }

      // optional Misc misc = 19;
      case 19: {
        let limit = pushTemporaryLength(bb);
        message.misc = _decodeMisc(bb);
        bb.limit = limit;
        break;
      }

      // optional Cliprdr cliprdr = 20;
      case 20: {
        let limit = pushTemporaryLength(bb);
        message.cliprdr = _decodeCliprdr(bb);
        bb.limit = limit;
        break;
      }

      // optional MessageBox message_box = 21;
      case 21: {
        let limit = pushTemporaryLength(bb);
        message.message_box = _decodeMessageBox(bb);
        bb.limit = limit;
        break;
      }

      // optional SwitchSidesResponse switch_sides_response = 22;
      case 22: {
        let limit = pushTemporaryLength(bb);
        message.switch_sides_response = _decodeSwitchSidesResponse(bb);
        bb.limit = limit;
        break;
      }

      // optional VoiceCallRequest voice_call_request = 23;
      case 23: {
        let limit = pushTemporaryLength(bb);
        message.voice_call_request = _decodeVoiceCallRequest(bb);
        bb.limit = limit;
        break;
      }

      // optional VoiceCallResponse voice_call_response = 24;
      case 24: {
        let limit = pushTemporaryLength(bb);
        message.voice_call_response = _decodeVoiceCallResponse(bb);
        bb.limit = limit;
        break;
      }

      // optional PeerInfo peer_info = 25;
      case 25: {
        let limit = pushTemporaryLength(bb);
        message.peer_info = _decodePeerInfo(bb);
        bb.limit = limit;
        break;
      }

      // optional PointerDeviceEvent pointer_device_event = 26;
      case 26: {
        let limit = pushTemporaryLength(bb);
        message.pointer_device_event = _decodePointerDeviceEvent(bb);
        bb.limit = limit;
        break;
      }

      // optional Auth2FA auth_2fa = 27;
      case 27: {
        let limit = pushTemporaryLength(bb);
        message.auth_2fa = _decodeAuth2FA(bb);
        bb.limit = limit;
        break;
      }

      // optional MultiClipboards multi_clipboards = 28;
      case 28: {
        let limit = pushTemporaryLength(bb);
        message.multi_clipboards = _decodeMultiClipboards(bb);
        bb.limit = limit;
        break;
      }

      // optional ScreenshotRequest screenshot_request = 29;
      case 29: {
        let limit = pushTemporaryLength(bb);
        message.screenshot_request = _decodeScreenshotRequest(bb);
        bb.limit = limit;
        break;
      }

      // optional ScreenshotResponse screenshot_response = 30;
      case 30: {
        let limit = pushTemporaryLength(bb);
        message.screenshot_response = _decodeScreenshotResponse(bb);
        bb.limit = limit;
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

function pushTemporaryLength(bb) {
  let length = readVarint32(bb);
  let limit = bb.limit;
  bb.limit = bb.offset + length;
  return limit;
}

function skipUnknownField(bb, type) {
  switch (type) {
    case 0: while (readByte(bb) & 0x80) { } break;
    case 2: skip(bb, readVarint32(bb)); break;
    case 5: skip(bb, 4); break;
    case 1: skip(bb, 8); break;
    default: throw new Error("Unimplemented type: " + type);
  }
}

function stringToLong(value) {
  return {
    low: value.charCodeAt(0) | (value.charCodeAt(1) << 16),
    high: value.charCodeAt(2) | (value.charCodeAt(3) << 16),
    unsigned: false,
  };
}

function longToString(value) {
  let low = value.low;
  let high = value.high;
  return String.fromCharCode(
    low & 0xFFFF,
    low >>> 16,
    high & 0xFFFF,
    high >>> 16);
}

// The code below was modified from https://github.com/protobufjs/bytebuffer.js
// which is under the Apache License 2.0.

let f32 = new Float32Array(1);
let f32_u8 = new Uint8Array(f32.buffer);

let f64 = new Float64Array(1);
let f64_u8 = new Uint8Array(f64.buffer);

function intToLong(value) {
  value |= 0;
  return {
    low: value,
    high: value >> 31,
    unsigned: value >= 0,
  };
}

let bbStack = [];

function popByteBuffer() {
  const bb = bbStack.pop();
  if (!bb) return { bytes: new Uint8Array(64), offset: 0, limit: 0 };
  bb.offset = bb.limit = 0;
  return bb;
}

function pushByteBuffer(bb) {
  bbStack.push(bb);
}

function wrapByteBuffer(bytes) {
  return { bytes, offset: 0, limit: bytes.length };
}

function toUint8Array(bb) {
  let bytes = bb.bytes;
  let limit = bb.limit;
  return bytes.length === limit ? bytes : bytes.subarray(0, limit);
}

function skip(bb, offset) {
  if (bb.offset + offset > bb.limit) {
    throw new Error('Skip past limit');
  }
  bb.offset += offset;
}

function isAtEnd(bb) {
  return bb.offset >= bb.limit;
}

function grow(bb, count) {
  let bytes = bb.bytes;
  let offset = bb.offset;
  let limit = bb.limit;
  let finalOffset = offset + count;
  if (finalOffset > bytes.length) {
    let newBytes = new Uint8Array(finalOffset * 2);
    newBytes.set(bytes);
    bb.bytes = newBytes;
  }
  bb.offset = finalOffset;
  if (finalOffset > limit) {
    bb.limit = finalOffset;
  }
  return offset;
}

function advance(bb, count) {
  let offset = bb.offset;
  if (offset + count > bb.limit) {
    throw new Error('Read past limit');
  }
  bb.offset += count;
  return offset;
}

function readBytes(bb, count) {
  let offset = advance(bb, count);
  return bb.bytes.subarray(offset, offset + count);
}

function writeBytes(bb, buffer) {
  let offset = grow(bb, buffer.length);
  bb.bytes.set(buffer, offset);
}

function readString(bb, count) {
  // Sadly a hand-coded UTF8 decoder is much faster than subarray+TextDecoder in V8
  let offset = advance(bb, count);
  let fromCharCode = String.fromCharCode;
  let bytes = bb.bytes;
  let invalid = '\uFFFD';
  let text = '';

  for (let i = 0; i < count; i++) {
    let c1 = bytes[i + offset], c2, c3, c4, c;

    // 1 byte
    if ((c1 & 0x80) === 0) {
      text += fromCharCode(c1);
    }

    // 2 bytes
    else if ((c1 & 0xE0) === 0xC0) {
      if (i + 1 >= count) text += invalid;
      else {
        c2 = bytes[i + offset + 1];
        if ((c2 & 0xC0) !== 0x80) text += invalid;
        else {
          c = ((c1 & 0x1F) << 6) | (c2 & 0x3F);
          if (c < 0x80) text += invalid;
          else {
            text += fromCharCode(c);
            i++;
          }
        }
      }
    }

    // 3 bytes
    else if ((c1 & 0xF0) == 0xE0) {
      if (i + 2 >= count) text += invalid;
      else {
        c2 = bytes[i + offset + 1];
        c3 = bytes[i + offset + 2];
        if (((c2 | (c3 << 8)) & 0xC0C0) !== 0x8080) text += invalid;
        else {
          c = ((c1 & 0x0F) << 12) | ((c2 & 0x3F) << 6) | (c3 & 0x3F);
          if (c < 0x0800 || (c >= 0xD800 && c <= 0xDFFF)) text += invalid;
          else {
            text += fromCharCode(c);
            i += 2;
          }
        }
      }
    }

    // 4 bytes
    else if ((c1 & 0xF8) == 0xF0) {
      if (i + 3 >= count) text += invalid;
      else {
        c2 = bytes[i + offset + 1];
        c3 = bytes[i + offset + 2];
        c4 = bytes[i + offset + 3];
        if (((c2 | (c3 << 8) | (c4 << 16)) & 0xC0C0C0) !== 0x808080) text += invalid;
        else {
          c = ((c1 & 0x07) << 0x12) | ((c2 & 0x3F) << 0x0C) | ((c3 & 0x3F) << 0x06) | (c4 & 0x3F);
          if (c < 0x10000 || c > 0x10FFFF) text += invalid;
          else {
            c -= 0x10000;
            text += fromCharCode((c >> 10) + 0xD800, (c & 0x3FF) + 0xDC00);
            i += 3;
          }
        }
      }
    }

    else text += invalid;
  }

  return text;
}

function writeString(bb, text) {
  // Sadly a hand-coded UTF8 encoder is much faster than TextEncoder+set in V8
  let n = text.length;
  let byteCount = 0;

  // Write the byte count first
  for (let i = 0; i < n; i++) {
    let c = text.charCodeAt(i);
    if (c >= 0xD800 && c <= 0xDBFF && i + 1 < n) {
      c = (c << 10) + text.charCodeAt(++i) - 0x35FDC00;
    }
    byteCount += c < 0x80 ? 1 : c < 0x800 ? 2 : c < 0x10000 ? 3 : 4;
  }
  writeVarint32(bb, byteCount);

  let offset = grow(bb, byteCount);
  let bytes = bb.bytes;

  // Then write the bytes
  for (let i = 0; i < n; i++) {
    let c = text.charCodeAt(i);
    if (c >= 0xD800 && c <= 0xDBFF && i + 1 < n) {
      c = (c << 10) + text.charCodeAt(++i) - 0x35FDC00;
    }
    if (c < 0x80) {
      bytes[offset++] = c;
    } else {
      if (c < 0x800) {
        bytes[offset++] = ((c >> 6) & 0x1F) | 0xC0;
      } else {
        if (c < 0x10000) {
          bytes[offset++] = ((c >> 12) & 0x0F) | 0xE0;
        } else {
          bytes[offset++] = ((c >> 18) & 0x07) | 0xF0;
          bytes[offset++] = ((c >> 12) & 0x3F) | 0x80;
        }
        bytes[offset++] = ((c >> 6) & 0x3F) | 0x80;
      }
      bytes[offset++] = (c & 0x3F) | 0x80;
    }
  }
}

function writeByteBuffer(bb, buffer) {
  let offset = grow(bb, buffer.limit);
  let from = bb.bytes;
  let to = buffer.bytes;

  // This for loop is much faster than subarray+set on V8
  for (let i = 0, n = buffer.limit; i < n; i++) {
    from[i + offset] = to[i];
  }
}

function readByte(bb) {
  return bb.bytes[advance(bb, 1)];
}

function writeByte(bb, value) {
  let offset = grow(bb, 1);
  bb.bytes[offset] = value;
}

function readFloat(bb) {
  let offset = advance(bb, 4);
  let bytes = bb.bytes;

  // Manual copying is much faster than subarray+set in V8
  f32_u8[0] = bytes[offset++];
  f32_u8[1] = bytes[offset++];
  f32_u8[2] = bytes[offset++];
  f32_u8[3] = bytes[offset++];
  return f32[0];
}

function writeFloat(bb, value) {
  let offset = grow(bb, 4);
  let bytes = bb.bytes;
  f32[0] = value;

  // Manual copying is much faster than subarray+set in V8
  bytes[offset++] = f32_u8[0];
  bytes[offset++] = f32_u8[1];
  bytes[offset++] = f32_u8[2];
  bytes[offset++] = f32_u8[3];
}

function readDouble(bb) {
  let offset = advance(bb, 8);
  let bytes = bb.bytes;

  // Manual copying is much faster than subarray+set in V8
  f64_u8[0] = bytes[offset++];
  f64_u8[1] = bytes[offset++];
  f64_u8[2] = bytes[offset++];
  f64_u8[3] = bytes[offset++];
  f64_u8[4] = bytes[offset++];
  f64_u8[5] = bytes[offset++];
  f64_u8[6] = bytes[offset++];
  f64_u8[7] = bytes[offset++];
  return f64[0];
}

function writeDouble(bb, value) {
  let offset = grow(bb, 8);
  let bytes = bb.bytes;
  f64[0] = value;

  // Manual copying is much faster than subarray+set in V8
  bytes[offset++] = f64_u8[0];
  bytes[offset++] = f64_u8[1];
  bytes[offset++] = f64_u8[2];
  bytes[offset++] = f64_u8[3];
  bytes[offset++] = f64_u8[4];
  bytes[offset++] = f64_u8[5];
  bytes[offset++] = f64_u8[6];
  bytes[offset++] = f64_u8[7];
}

function readInt32(bb) {
  let offset = advance(bb, 4);
  let bytes = bb.bytes;
  return (
    bytes[offset] |
    (bytes[offset + 1] << 8) |
    (bytes[offset + 2] << 16) |
    (bytes[offset + 3] << 24)
  );
}

function writeInt32(bb, value) {
  let offset = grow(bb, 4);
  let bytes = bb.bytes;
  bytes[offset] = value;
  bytes[offset + 1] = value >> 8;
  bytes[offset + 2] = value >> 16;
  bytes[offset + 3] = value >> 24;
}

function readInt64(bb, unsigned) {
  return {
    low: readInt32(bb),
    high: readInt32(bb),
    unsigned,
  };
}

function writeInt64(bb, value) {
  writeInt32(bb, value.low);
  writeInt32(bb, value.high);
}

function readVarint32(bb) {
  let c = 0;
  let value = 0;
  let b;
  do {
    b = readByte(bb);
    if (c < 32) value |= (b & 0x7F) << c;
    c += 7;
  } while (b & 0x80);
  return value;
}

function writeVarint32(bb, value) {
  value >>>= 0;
  while (value >= 0x80) {
    writeByte(bb, (value & 0x7f) | 0x80);
    value >>>= 7;
  }
  writeByte(bb, value);
}

function readVarint64(bb, unsigned) {
  let part0 = 0;
  let part1 = 0;
  let part2 = 0;
  let b;

  b = readByte(bb); part0 = (b & 0x7F); if (b & 0x80) {
    b = readByte(bb); part0 |= (b & 0x7F) << 7; if (b & 0x80) {
      b = readByte(bb); part0 |= (b & 0x7F) << 14; if (b & 0x80) {
        b = readByte(bb); part0 |= (b & 0x7F) << 21; if (b & 0x80) {

          b = readByte(bb); part1 = (b & 0x7F); if (b & 0x80) {
            b = readByte(bb); part1 |= (b & 0x7F) << 7; if (b & 0x80) {
              b = readByte(bb); part1 |= (b & 0x7F) << 14; if (b & 0x80) {
                b = readByte(bb); part1 |= (b & 0x7F) << 21; if (b & 0x80) {

                  b = readByte(bb); part2 = (b & 0x7F); if (b & 0x80) {
                    b = readByte(bb); part2 |= (b & 0x7F) << 7;
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  return {
    low: part0 | (part1 << 28),
    high: (part1 >>> 4) | (part2 << 24),
    unsigned,
  };
}

function writeVarint64(bb, value) {
  let part0 = value.low >>> 0;
  let part1 = ((value.low >>> 28) | (value.high << 4)) >>> 0;
  let part2 = value.high >>> 24;

  // ref: src/google/protobuf/io/coded_stream.cc
  let size =
    part2 === 0 ?
      part1 === 0 ?
        part0 < 1 << 14 ?
          part0 < 1 << 7 ? 1 : 2 :
          part0 < 1 << 21 ? 3 : 4 :
        part1 < 1 << 14 ?
          part1 < 1 << 7 ? 5 : 6 :
          part1 < 1 << 21 ? 7 : 8 :
      part2 < 1 << 7 ? 9 : 10;

  let offset = grow(bb, size);
  let bytes = bb.bytes;

  switch (size) {
    case 10: bytes[offset + 9] = (part2 >>> 7) & 0x01;
    case 9: bytes[offset + 8] = size !== 9 ? part2 | 0x80 : part2 & 0x7F;
    case 8: bytes[offset + 7] = size !== 8 ? (part1 >>> 21) | 0x80 : (part1 >>> 21) & 0x7F;
    case 7: bytes[offset + 6] = size !== 7 ? (part1 >>> 14) | 0x80 : (part1 >>> 14) & 0x7F;
    case 6: bytes[offset + 5] = size !== 6 ? (part1 >>> 7) | 0x80 : (part1 >>> 7) & 0x7F;
    case 5: bytes[offset + 4] = size !== 5 ? part1 | 0x80 : part1 & 0x7F;
    case 4: bytes[offset + 3] = size !== 4 ? (part0 >>> 21) | 0x80 : (part0 >>> 21) & 0x7F;
    case 3: bytes[offset + 2] = size !== 3 ? (part0 >>> 14) | 0x80 : (part0 >>> 14) & 0x7F;
    case 2: bytes[offset + 1] = size !== 2 ? (part0 >>> 7) | 0x80 : (part0 >>> 7) & 0x7F;
    case 1: bytes[offset] = size !== 1 ? part0 | 0x80 : part0 & 0x7F;
  }
}

function readVarint32ZigZag(bb) {
  let value = readVarint32(bb);

  // ref: src/google/protobuf/wire_format_lite.h
  return (value >>> 1) ^ -(value & 1);
}

function writeVarint32ZigZag(bb, value) {
  // ref: src/google/protobuf/wire_format_lite.h
  writeVarint32(bb, (value << 1) ^ (value >> 31));
}

function readVarint64ZigZag(bb) {
  let value = readVarint64(bb, /* unsigned */ false);
  let low = value.low;
  let high = value.high;
  let flip = -(low & 1);

  // ref: src/google/protobuf/wire_format_lite.h
  return {
    low: ((low >>> 1) | (high << 31)) ^ flip,
    high: (high >>> 1) ^ flip,
    unsigned: false,
  };
}

function writeVarint64ZigZag(bb, value) {
  let low = value.low;
  let high = value.high;
  let flip = high >> 31;

  // ref: src/google/protobuf/wire_format_lite.h
  writeVarint64(bb, {
    low: (low << 1) ^ flip,
    high: ((high << 1) | (low >>> 31)) ^ flip,
    unsigned: false,
  });
}
