---
name: I_CNSLDTNMDSOURCET
description: Master Data Source - Text
app_component: FIN-CS-MD-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNMDSOURCET')/$value
semantic_en: Master Data Source - Text
tags:
  - FIN
  - bo:businesspartner
  - component:FIN-CS-MD-2CL
  - FIN-CS
  - FIN-CS-MD
  - FIN-CS-MD-2CL
  - interface-view
  - lob:finance
  - master-data
  - metadata-only
---
# I_CNSLDTNMDSOURCET

**Master Data Source - Text**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNMDSOURCET')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` |  | |  |  | `LANG(1)` | Language Key |
| `AdditionalMasterDataSource` |  | |  |  | `CHAR(10)` | Master Data Source |
| `MDSourceForConsolidationFields` |  | |  |  | `CHAR(60)` | Description |
| `DomainValue` |  | |  |  | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
