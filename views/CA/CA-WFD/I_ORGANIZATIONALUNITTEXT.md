---
name: I_ORGANIZATIONALUNITTEXT
description: This view provides the prerequisites for answering the following business questions: What is the short and long name of Organizational Unit?
app_component: CA-WFD
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ORGANIZATIONALUNITTEXT')/$value
semantic_en: This view provides the prerequisites for answering the following business questions: What is the short and long name of Organizational Unit?
tags:
  - CA
  - bo:companycode
  - CA-WFD
  - component:CA-WFD
  - interface-view
  - lob:cross_application components
  - metadata-only
---
# I_ORGANIZATIONALUNITTEXT

**This view provides the prerequisites for answering the following business questions: What is the short and long name of Organizational Unit?**

| Property | Value |
|---|---|
| App Component | `CA-WFD` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ORGANIZATIONALUNITTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `OrganizationalUnit` |  | |  |  | `NUMC(8)` | Object ID |
| `Language` |  | |  |  | `LANG(1)` | Language Key |
| `StartDate` |  | |  |  | `DATS(8)` | Start Date |
| `EndDate` |  | |  |  | `DATS(8)` | End Date |
| `OrganizationalUnitShortName` |  | |  |  | `CHAR(12)` | Object Abbreviation |
| `OrganizationalUnitName` |  | |  |  | `CHAR(40)` | Object Name |
