﻿FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build

WORKDIR /app
COPY . ./
RUN dotnet restore

RUN dotnet publish -c Release -o /publish

FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS runtime

WORKDIR /app
COPY --from=build /publish .

EXPOSE 5000

ENTRYPOINT ["dotnet", "Portfolio.dll"]
