# October 2nd Memory Experiment

This repository contains the October 2nd browser experiment code and the accompanying research paper PDF.

## Contents

- `October_2nd/GroupA_Session1_October2nd/` - Session 1 learning-pairs task.
- `October_2nd/GroupA_Session2_October2nd.zip/` - Session 2 which-is-closer and navigation tasks. This is a folder whose original name ends in `.zip`.
- `docs/Das.Elora.Rohini.ResearchPaper.RegeneronSTS.docx.pdf` - Research paper explaining the experiment.

## Running Locally

The experiment is a browser-based HTML/JavaScript app with PHP endpoints for MySQL data recording.

1. Configure PHP/MySQL credentials using environment variables:
   - `DB_HOST`
   - `DB_PORT`
   - `DB_USER`
   - `DB_PASSWORD`
   - `DB_NAME`
2. Serve either session folder from a PHP-capable web server.
3. Open `index.html` for the desired session.

Session 1 references the local demo image `LRPExpDemo4`; this upload includes that missing asset so the instruction page loads correctly.

## Notes

Database credentials are intentionally not committed. Use `dbConnectConfig.sample.php` as a reference if deploying to a server that expects local PHP config files.
