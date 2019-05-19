# $FreeBSD$

PORTNAME=	vscode
DISTVERSION=	1.35.0.g20190517
CATEGORIES=	editors
MASTER_SITES=	https://github.com/tagattie/FreeBSD-Electron/releases/download/v${ELECTRON_VER}/:electron \
DISTFILES=	electron-v${ELECTRON_VER}-freebsd12-x64.zip:electron \
		https://registry.yarnpkg.com/vscode-ripgrep/-/:vscode_ripgrep \
		https://github.com/tagattie/FreeBSD-VSCode/releases/download/${DISTVERSION}/:yarn_cache
		electron-v${ELECTRON_VER}-freebsd11-x64.zip:electron \
		vscode-ripgrep-${VSCODE_RIPGREP_VER}.tgz:vscode_ripgrep \
		yarn-cache-${DISTVERSION}${EXTRACT_SUFX}:yarn_cache
EXTRACT_ONLY=	${DISTNAME}${EXTRACT_SUFX} \
		yarn-cache-${DISTVERSION}${EXTRACT_SUFX}

MAINTAINER=	maintainer@example.com
COMMENT=	Code Editing. Redefined.

LICENSE=	MIT
LICENSE_FILE=	${WRKSRC}/LICENSE.txt

EXTRACT_DEPENDS=	${UNZIP_CMD}:archivers/unzip
# Set www/yarn option to use www/node10 before build
BUILD_DEPENDS=	yarn:www/yarn \
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

USES=		desktop-file-utils gnome jpeg python:2.7,build

USE_GITHUB=	yes
GH_ACCOUNT=	microsoft
GH_TAGNAME=	7b78242a5f63fd40322ff93e5be2b687fb3778cd

BINARY_ALIAS=	python=${PYTHON_CMD}

USE_GNOME=	atk pango gtk30 libxml2 libxslt

ELECTRON_VER=	4.2.2
VSCODE_RIPGREP_VER=	1.2.5

DATADIR=	${PREFIX}/share/code-oss

post-extract:
	cd ${WRKDIR} && ${UNZIP_CMD} -qo \
		${_DISTDIR}/electron-v${ELECTRON_VER}-freebsd${OSREL:R}-x64.zip -d electron
	${MKDIR} ${WRKDIR}/vscode-ripgrep
	${TAR} -xzf ${_DISTDIR}/vscode-ripgrep-${VSCODE_RIPGREP_VER}.tgz \
		--strip-components 1 -C ${WRKDIR}/vscode-ripgrep
	# for offline "yarn install" of all necessary node_modules
	${MKDIR} ${WRKDIR}/.cache
	${MV} ${WRKDIR}/yarn ${WRKDIR}/.cache

post-patch:
	${REINPLACE_CMD} -e 's/@@NAME_LONG@@/Code - OSS/; \
			s/@@NAME_SHORT@@/Code - OSS/; \
			s/@@NAME@@/code-oss/g; \
			s/@@ICON@@/com.visualstudio.code.oss/; \
			s/@@URLPROTOCOL@@/code-oss/; \
			s/@@LICENSE@@/MIT/; \
			s|/usr/share|${PREFIX}/share|' \
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
	${CP} ${FILESDIR}/package.json-package ${WRKSRC}/package.json
	cd ${WRKSRC} && ${SETENV} ${MAKE_ENV} yarn compile # --verbose --no-progress
	cd ${WRKSRC} && ${SETENV} ${MAKE_ENV} ${WRKSRC}/node_modules/.bin/gulp \
		vscode-linux-x64 --max_old_space_size=4095

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
	${RLN} ${STAGEDIR}${DATADIR}/code-oss ${STAGEDIR}${PREFIX}/bin

.include <bsd.port.mk>
