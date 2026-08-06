---
name: I_WORKFORCEPERSONSKILLTAGS
description: Workforce Person Skill Tags
app_component: CA-WFD
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKFORCEPERSONSKILLTAGS')/$value
semantic_en: Workforce Person Skill Tags
tags:
  - CA
  - bo:salesorder
  - CA-WFD
  - component:CA-WFD
  - interface-view
  - lob:cross_application components
  - metadata-only
---
# I_WORKFORCEPERSONSKILLTAGS

**Workforce Person Skill Tags**

| Property | Value |
|---|---|
| App Component | `CA-WFD` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKFORCEPERSONSKILLTAGS')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `Person` | `CHAR(45)` | ID of Related Object |
| `WorkforcePersonSkillTagID` | `RAW(16)` | GUID in 'RAW' format |
| `WorkforcePersonSkillTagType` | `CHAR(1)` | Tag Type |
| `SystemOfRecordID` | `CHAR(80)` | System ID |
| `LastChangeDate` | `DEC(21)` | UTC Time Stamp in Long Form (YYYYMMDDhhmmssmmmuuun) |
| `LastChangedByUser` | `CHAR(12)` | User Name |
| `AuthorizationGroup` | `CHAR(4)` | Authorization Group |
| `BusinessPartner` | `CHAR(10)` | Business Partner Number |
