---
name: I_PERSONWORKAGRMTJOBTEXT
description: This view provides the prerequisites for answering the following business questions: What is the short and long name of Job?
app_component: CA-WFD
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PERSONWORKAGRMTJOBTEXT')/$value
semantic_en: This view provides the prerequisites for answering the following business questions: What is the short and long name of Job?
tags:
  - CA
  - bo:plant
  - CA-WFD
  - component:CA-WFD
  - interface-view
  - lob:cross_application components
  - metadata-only
---
# I_PERSONWORKAGRMTJOBTEXT

**This view provides the prerequisites for answering the following business questions: What is the short and long name of Job?**

| Property | Value |
|---|---|
| App Component | `CA-WFD` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PERSONWORKAGRMTJOBTEXT')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `Job` | `CHAR(128)` | Job Code |
| `Language` | `LANG(1)` | Language Key |
| `StartDate` | `DATS(8)` | Start Date |
| `EndDate` | `DATS(8)` | End Date |
| `JobShortName` | `CHAR(128)` | Job Code |
| `JobName` | `CHAR(256)` | Job Title |
