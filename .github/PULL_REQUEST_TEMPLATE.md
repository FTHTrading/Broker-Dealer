## Description

<!-- Provide a clear description of the changes -->

## Type of Change

- [ ] 🆕 New feature
- [ ] 🐛 Bug fix
- [ ] 🔒 Security fix
- [ ] ⚖️ Compliance/regulatory change
- [ ] ♻️ Refactoring
- [ ] 📝 Documentation
- [ ] 🏗️ Infrastructure/CI
- [ ] ⚡ Performance improvement

## Related Tickets

<!-- Link to JIRA/Linear tickets -->
- Resolves: #

## Checklist

### Code Quality
- [ ] TypeScript strict mode — zero type errors
- [ ] Lint rules pass (`pnpm lint`)
- [ ] No `any` types introduced
- [ ] Unit tests added/updated (≥ 94% coverage)
- [ ] Integration tests added/updated where applicable

### Security
- [ ] No hardcoded secrets or credentials
- [ ] Input validation on all new endpoints
- [ ] Authentication/authorization enforced
- [ ] Security scan clean (Snyk / CodeQL)

### Compliance (check if applicable)
- [ ] Audit trail logging added for state mutations
- [ ] Data classification documented for new fields
- [ ] Retention policies met (SEC 17a-4)
- [ ] PII properly encrypted/tokenized
- [ ] Compliance Officer review requested (if regulatory impact)

### Documentation
- [ ] README updated (if applicable)
- [ ] API documentation / OpenAPI spec updated
- [ ] Architecture Decision Record created (if significant change)
- [ ] Runbook updated (if operational change)

## Testing

<!-- Describe how this was tested -->

### Test Results
```
<!-- Paste relevant test output -->
```

## Screenshots / Diagrams

<!-- If applicable, add screenshots or diagrams -->

## Deployment Notes

<!-- Any special deployment considerations, migrations, feature flags, etc. -->

## Rollback Plan

<!-- How to revert if issues arise in production -->
