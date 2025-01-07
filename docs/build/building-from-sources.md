---
sidebar_position: 3
---

# Building From Sources

## Linux

### Install prerequisites

```
sudo apt-get install -y curl build-essential python3-dev autotools-dev libicu-dev libbz2-dev cmake git screen checkinstall zlib1g-dev gcc g++
```

### Download and build Boost

```
curl -OL https://archives.boost.io/release/1.84.0/source/boost_1_84_0.tar.bz2
tar -xjf boost_1_84_0.tar.bz2
cd boost_1_84_0
./bootstrap.sh --with-libraries=system,filesystem,thread,date_time,chrono,regex,serialization,atomic,program_options,locale,timer,log
./b2
```

### Install OpenSSL
Please, make sure the paths correspond to your environment (`/home/user/').

```
curl -OL https://www.openssl.org/source/openssl-1.1.1n.tar.gz
tar xaf openssl-1.1.1n.tar.gz 
cd openssl-1.1.1n/
./config --prefix=/home/user/openssl --openssldir=/home/user/openssl shared zlib
make
make install
```
### Checkout Infinium from Github

```
git clone --recursive https://github.com/Infinium-8/Infinium.git
```

### Set environment variables
For instance, by adding the following lines to ~/.bashrc

Server version:

```
export BOOST_ROOT=/home/user/boost_1_84_0
export OPENSSL_ROOT_DIR=/home/user/openssl
```

GUI version:

```
export BOOST_ROOT=/home/user/boost_1_84_0
export OPENSSL_ROOT_DIR=/home/user/openssl
export CMAKE_PREFIX_PATH=/home/user/Qt5.12.12/5.12.12/gcc_64
```

### Build the binaries

```
cd Infinium && mkdir build && cd build
cmake -D BOOST_ROOT=/home/user/boost_1_84_0 -D OPENSSL_ROOT_DIR=/home/user/openssl -D BUILD_GUI=OFF -D STATIC=ON -D CMAKE_BUILD_TYPE=Release -D BUILD_TESTS=OFF ..
make
```

### Build GUI

```
cd Infinium && mkdir build && cd build
cmake -D STATIC=TRUE -D BOOST_ROOT=/home/user/boost_1_84_0 -D OPENSSL_ROOT_DIR=/home/user/openssl -D CMAKE_PREFIX_PATH=/home/user/Qt5.12.12/5.12.12/gcc_64 -D BUILD_GUI=ON -D CMAKE_BUILD_TYPE=Release -D BUILD_TESTS=OFF ..
make
```

## Windows

You can build for 32-bit or 64-bit Windows. **If you're not sure, pick 64-bit.**

### Install prerequisites

-   Download the [Build Tools for Visual Studio 2022](https://visualstudio.microsoft.com/es/thank-you-downloading-visual-studio/?sku=Community&channel=Release&version=VS2022&source=VSLandingPage&cid=2030&passive=false) Installer.
-   When it opens up select **C++ build tools**, it automatically selects the needed parts. Make sure **MSVC v143 Build Tools** is selected.
-   Install Boost. Select the appropriate version for your system:
    -   [Boost 64-bit](https://boost.teeks99.com/bin/1.82.0/boost_1_82_0-msvc-14.3-64.exe)
    -   [Boost 32-bit](https://boost.teeks99.com/bin/1.82.0/boost_1_82_0-msvc-14.3-32.exe)
-   Install the latest full LTS version of OpenSSL (currently OpenSSL 3.0.15). Select the appropriate version for your system:
    -   [OpenSSL 64-bit](https://slproweb.com/download/Win64OpenSSL-3_0_15.msi)
    -   [OpenSSL 32-bit](https://slproweb.com/download/Win32OpenSSL-3_0_15.msi)
-   Install QT (Only GUI)
    -   [QT 5.12.12](https://download.qt.io/archive/qt/5.12/5.12.12/qt-opensource-windows-x86-5.12.12.exe)

### Checkout Infinium from Github

```
git clone --recursive https://github.com/Infinium-8/Infinium.git
```

### Build the binaries

```
cd Infinium && mkdir build && cd build
cmake -G "Visual Studio 17 2022" -A x64 -T host=x64 .. -DBUILD_GUI=OFF -D BOOST_ROOT=C:/local/boost_1_82_0 -D BOOST_LIBRARYDIR="C:/local/boost_1_82_0/lib64-msvc-14.3" -D OPENSSL_ROOT_DIR="C:/OpenSSL-Win64" -D STATIC=OFF
set PATH=%PATH%;C:\Program Files\Microsoft Visual Studio\2022\Community\MSBuild\Current\Bin
MSBuild infinium.sln /p:Configuration=Release /t:Build
```
