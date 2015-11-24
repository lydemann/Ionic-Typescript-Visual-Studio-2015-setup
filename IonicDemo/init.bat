@rem This script configures some settings for command line development with local node_modules 

@rem Add the node_modules\.bin folder (found with 'npm bin') to the path
@cd %~dp0
@for /f "delims=|" %%i in ('npm bin') do set PATH=%%i;%PATH%