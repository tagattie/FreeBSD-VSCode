# $FreeBSD$

PORTNAME=	vscode
DISTVERSION=	1.35.0.g20190517
CATEGORIES=	editors
MASTER_SITES=	https://github.com/tagattie/FreeBSD-Electron/releases/download/v${ELECTRON_VER}/:electron \
		https://atom.io/download/electron/v${ELECTRON_VER}/:electron_headers \
		https://github.com/electron/electron/releases/download/v${ELECTRON_VER}/:electron_linux \
		https://registry.yarnpkg.com/vscode-ripgrep/-/:vscode_ripgrep \
		https://github.com/tagattie/FreeBSD-VSCode/releases/download/${DISTVERSION}/:yarn_cache
DISTFILES=	SHASUMS256.txt:electron \
		node-v${ELECTRON_VER}-headers${EXTRACT_SUFX}:electron_headers \
		electron-v${ELECTRON_VER}-linux-x64.zip:electron_linux \
		ffmpeg-v${ELECTRON_VER}-linux-x64.zip:electron_linux \
		vscode-ripgrep-${VSCODE_RIPGREP_VER}.tgz:vscode_ripgrep \
		yarn-offline-cache-${DISTVERSION}${EXTRACT_SUFX}:yarn_cache \
		vscode-marketplace-exts-${DISTVERSION}${EXTRACT_SUFX}:yarn_cache
.if make(makesum)
DISTFILES+=	electron-v${ELECTRON_VER}-freebsd11-x64.zip:electron \
		electron-v${ELECTRON_VER}-freebsd12-x64.zip:electron
.else
DISTFILES+=	electron-v${ELECTRON_VER}-freebsd${OSREL:R}-x64.zip:electron
.endif
DIST_SUBDIR=	${PORTNAME}/${PORTVERSION}
EXTRACT_ONLY=	${DISTNAME}${EXTRACT_SUFX} \
		node-v${ELECTRON_VER}-headers${EXTRACT_SUFX} \
		yarn-offline-cache-${DISTVERSION}${EXTRACT_SUFX} \
		vscode-marketplace-exts-${DISTVERSION}${EXTRACT_SUFX}

MAINTAINER=	maintainer@example.com
COMMENT=	Code Editing. Redefined.

LICENSE=	MIT
LICENSE_FILE=	${WRKSRC}/LICENSE.txt

EXTRACT_DEPENDS=	${UNZIP_CMD}:archivers/unzip
# FIXME: Introduce yarn ports using node 8 and 10 LTS like npm-node8 and npm-node10
#	 For now, set www/yarn option to use www/node10 before build
BUILD_DEPENDS=	npm:www/npm-node10 \
		yarn:www/yarn \
		rg:textproc/ripgrep
LIB_DEPENDS=	libatk-bridge-2.0.so:accessibility/at-spi2-atk \
		libsnappy.so:archivers/snappy \
		libFLAC.so:audio/flac \
		libopus.so:audio/opus \
		libinotify.so:devel/libinotify \
		libnotify.so:devel/libnotify \
		libpci.so:devel/libpci \
		libdrm.so:graphics/libdrm \
		libwebp.so:graphics/webp \
		libavcodec.so:multimedia/ffmpeg \
		libopenh264.so:multimedia/openh264 \
		libfreetype.so:print/freetype2 \
		libharfbuzz.so:print/harfbuzz \
		libsecret-1.so:security/libsecret \
		libnss3.so:security/nss \
		libfontconfig.so:x11-fonts/fontconfig
RUN_DEPENDS=	xdg-open:devel/xdg-utils
TEST_DEPENDS=	bash:shells/bash

USES=		desktop-file-utils gmake gnome jpeg pkgconfig \
		python:2.7,build shebangfix

USE_GITHUB=	yes
GH_ACCOUNT=	microsoft
GH_TAGNAME=	7b78242a5f63fd40322ff93e5be2b687fb3778cd

SOURCE_COMMIT_HASH=	7b78242a5f63fd40322ff93e5be2b687fb3778cd

BINARY_ALIAS=	python=${PYTHON_CMD}

USE_XORG=	x11 xkbfile
USE_GNOME=	atk pango gtk30 libxml2 libxslt

USE_LDCONFIG=	${DATADIR}

ELECTRON_VER=	4.2.2
VSCODE_RIPGREP_VER=	1.2.5

SHEBANG_FILES=	resources/linux/bin/code.sh \
		scripts/test.sh

DATADIR=	${PREFIX}/share/code-oss
TMPDIR=		${WRKDIR}

MAKE_ENV+=	BUILD_SOURCEVERSION=${SOURCE_COMMIT_HASH}

post-extract:
	cd ${WRKDIR} && ${UNZIP_CMD} -qo \
		${DISTDIR}/${DIST_SUBDIR}/electron-v${ELECTRON_VER}-freebsd${OSREL:R}-x64.zip -d electron
	${MKDIR} ${WRKDIR}/vscode-ripgrep
	${TAR} -xzf ${DISTDIR}/${DIST_SUBDIR}/vscode-ripgrep-${VSCODE_RIPGREP_VER}.tgz \
		--strip-components 1 -C ${WRKDIR}/vscode-ripgrep
	# setup electron headers for node-gyp
	${MKDIR} ${WRKDIR}/.node-gyp
	${MV} ${WRKDIR}/node_headers ${WRKDIR}/.node-gyp/${ELECTRON_VER}
	${ECHO} 9 > ${WRKDIR}/.node-gyp/${ELECTRON_VER}/installVersion
	# setup download cache for gulp-atom-electron
	${MKDIR} ${WRKDIR}/gulp-electron-cache/atom/electron
	${CP} ${DISTDIR}/${DIST_SUBDIR}/electron-v${ELECTRON_VER}-linux-x64.zip \
		${WRKDIR}/gulp-electron-cache/atom/electron
	${CP} ${DISTDIR}/${DIST_SUBDIR}/ffmpeg-v${ELECTRON_VER}-linux-x64.zip \
		${WRKDIR}/gulp-electron-cache/atom/electron
	# for offline "yarn install" of all necessary node_modules
	${SED} -e 's|$${WRKDIR}|${WRKDIR}|' \
		${FILESDIR}/yarnrc-offline-mirror >> ${WRKSRC}/.yarnrc
	# for unit tests dependency
	${MKDIR} ${WRKSRC}/.build
	cd ${WRKDIR} && \
		${TAR} -cf - electron | ${TAR} -xf - -C ${WRKSRC}/.build
	cd ${WRKSRC}/.build/electron && ${MV} electron code-oss
	# for UI smoke tests dependency
	${MKDIR} ${WRKDIR}/.cache/electron
	${SED} -e 's/freebsd${OSREL:R}/freebsd/' ${DISTDIR}/${DIST_SUBDIR}/SHASUMS256.txt > \
		${WRKDIR}/.cache/electron/SHASUMS256.txt-${ELECTRON_VER}
	${CP} ${DISTDIR}/${DIST_SUBDIR}/electron-v${ELECTRON_VER}-freebsd${OSREL:R}-x64.zip \
		${WRKDIR}/.cache/electron/electron-v${ELECTRON_VER}-freebsd-x64.zip

post-patch:
	${REINPLACE_CMD} -e 's/@@NAME_LONG@@/Code - OSS/; \
			s/@@NAME_SHORT@@/Code - OSS/; \
			s/@@PRODNAME@@/Code - OSS/; \
			s/@@NAME@@/code-oss/g; \
			s/@@ICON@@/com.visualstudio.code.oss/; \
			s/@@URLPROTOCOL@@/code-oss/; \
			s/@@LICENSE@@/MIT/; \
			s|/usr/share|${PREFIX}/share|' \
		${WRKSRC}/resources/linux/bin/code.sh \
		${WRKSRC}/resources/linux/code.appdata.xml \
		${WRKSRC}/resources/linux/code.desktop \
		${WRKSRC}/resources/linux/code-url-handler.desktop

pre-build:
	${MKDIR} ${WRKDIR}/vscode-ripgrep/bin
	${CP} ${LOCALBASE}/bin/rg ${WRKDIR}/vscode-ripgrep/bin

do-build:
	${CP} ${FILESDIR}/package.json-build ${WRKSRC}/package.json
	cd ${WRKSRC} && ${SETENV} ${MAKE_ENV} yarn --frozen-lockfile --offline # --no-progress
	${MV} ${WRKDIR}/vscode-ripgrep ${WRKSRC}/node_modules
	${CP} ${WRKSRC}/src/vs/vscode.d.ts ${WRKSRC}/extensions/vscode-colorize-tests/node_modules/vscode
	${CP} ${FILESDIR}/package.json-package ${WRKSRC}/package.json
	cd ${WRKSRC} && ${SETENV} ${MAKE_ENV} yarn compile
	cd ${WRKSRC} && ${SETENV} ${MAKE_ENV} yarn gulp vscode-linux-x64-min
	${MV} ${WRKDIR}/builtInExtensions/* ${WRKDIR}/VSCode-linux-x64/resources/app/extensions

do-install:
	${MKDIR} ${STAGEDIR}${PREFIX}/share/appdata
	${INSTALL_DATA} ${WRKSRC}/resources/linux/code.appdata.xml \
		${STAGEDIR}${PREFIX}/share/appdata/code-oss.appdata.xml
	${MKDIR} ${STAGEDIR}${PREFIX}/share/applications
.for f in code.desktop code-url-handler.desktop
	${INSTALL_DATA} ${WRKSRC}/resources/linux/${f} \
		${STAGEDIR}${PREFIX}/share/applications/${f:S/code/code-oss/}
.endfor
	${MKDIR} ${STAGEDIR}${PREFIX}/share/pixmaps
	${INSTALL_DATA} ${WRKSRC}/resources/linux/code.png \
		${STAGEDIR}${PREFIX}/share/pixmaps/com.visualstudio.code.oss.png
	${MKDIR} ${STAGEDIR}${DATADIR}
	${INSTALL_PROGRAM} ${WRKDIR}/electron/electron \
		${STAGEDIR}${DATADIR}/code-oss
.for f in libEGL.so libGLESv2.so libVkICD_mock_icd.so
	${INSTALL_LIB} ${WRKDIR}/electron/${f} \
		${STAGEDIR}${DATADIR}
.endfor
.for f in chrome_100_percent.pak chrome_200_percent.pak icudtl.dat natives_blob.bin resources.pak snapshot_blob.bin v8_context_snapshot.bin
	${INSTALL_DATA} ${WRKDIR}/electron/${f} ${STAGEDIR}${DATADIR}
.endfor
.for d in locales resources swiftshader
	cd ${WRKDIR}/electron/${d} && ${COPYTREE_SHARE} . \
		${STAGEDIR}${DATADIR}/${d} "! -name default_app.asar"
.endfor
	cd ${WRKDIR}/VSCode-linux-x64/bin && \
		${COPYTREE_BIN} . ${STAGEDIR}${DATADIR}/bin
	cd ${WRKDIR}/VSCode-linux-x64/resources/app && \
		${COPYTREE_SHARE} . ${STAGEDIR}${DATADIR}/resources/app
	cd ${STAGEDIR}${DATADIR}/resources/app/node_modules.asar.unpacked && \
		${FIND} . -type f -exec ${CHMOD} ${BINMODE} {} ';'
	${RLN} ${STAGEDIR}${DATADIR}/bin/code-oss ${STAGEDIR}${PREFIX}/bin

do-test:
	# Note: Xvfb or something similar is necessary for headless testing
	# unit tests
	cd ${WRKSRC} && ${SETENV} ${TEST_ENV} ./scripts/test.sh || ${TRUE}
	# UI smoke tests
	cd ${WRKSRC} && ${SETENV} ${TEST_ENV} yarn smoketest

.include <bsd.port.mk>
