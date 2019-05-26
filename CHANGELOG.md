# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.2.0] - 2019-05-27

### Added
- Contributor Type in schema
- `bio`, `name`, `location`, `totalPullRequests`, `websiteUrl`, `email`, `firstContributionDate`, `avatarUrl` in User type.
- total count of `pr`, total count of `issue`, total count of `commits`, `contributors` for user in organization and for organization type.
- Organization in `.env`, client do not needs pass login for org, now it's set in `.env` file.
- Tests for all entities.
- Default token passed by org admin in `.env`.
- List of invalid users, for filter bot in contributors list.
- Description for fields, and types documentation

### Fixed
- Lint problems in project

## [0.1.0] - 2019-05-06

### Added
- Definition of schema that contains following informations: teams, repositories and members of an organization and user.
- Github Api V4 connection.
- Linter configuration
- Travis configuration
- Dockerfiles for node and mongo
- Dockercompose to orchestrating mongo and node services
- Apollo-Server configuration
- `.env` file to config server and front connection, and github oauth parameters.
