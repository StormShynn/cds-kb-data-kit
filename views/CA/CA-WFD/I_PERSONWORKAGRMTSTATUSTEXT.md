---
name: I_PERSONWORKAGRMTSTATUSTEXT
description: This view provides the prerequisites for answering the following business questions: What is text for the work agreement status code 0 and 1?
app_component: CA-WFD
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PERSONWORKAGRMTSTATUSTEXT')/$value
semantic_en: This view provides the prerequisites for answering the following business questions: What is text for the work agreement status code 0 and 1?
tags:
  - CA
  - bo:plant
  - CA-WFD
  - component:CA-WFD
  - interface-view
  - lob:cross_application components
  - metadata-only
---
# I_PERSONWORKAGRMTSTATUSTEXT

**This view provides the prerequisites for answering the following business questions: What is text for the work agreement status code 0 and 1?**

| Property | Value |
|---|---|
| App Component | `CA-WFD` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PERSONWORKAGRMTSTATUSTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` |  | |  |  | `LANG(1)` | Language Key |
| `WorkAgreementStatus` |  | |  |  | `CHAR(1)` | Model S: Employment Status |
| `WorkAgreementStatusName` |  | |  |  | `CHAR(60)` | Short Text for Fixed Values |
