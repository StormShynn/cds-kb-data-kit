---
name: I_SALESDEAL
description: "This CDS view provides the prerequisites for answering the following business questions: What is the description of sales deal? What is the type of sales deal? What is the sales organization or distribution channel of sales deal? What is the validity period of sales deal?"
app_component: SD-BF-PR-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SALESDEAL')/$value
semantic_en: "This CDS view provides the prerequisites for answering the following business questions: What is the description of sales deal? What is the type of sales deal? What is the sales organization or distribution channel of sales deal? What is the validity period of sales deal?"
tags:
  - SD
  - bo:plant
  - component:SD-BF-PR-2CL
  - interface-view
  - lob:sales & distribution
  - SD-BF
  - SD-BF-PR
  - SD-BF-PR-2CL
  - metadata-only
---
# I_SALESDEAL

**This CDS view provides the prerequisites for answering the following business questions: What is the description of sales deal? What is the type of sales deal? What is the sales organization or distribution channel of sales deal? What is the validity period of sales deal?**

| Property | Value |
|---|---|
| App Component | `SD-BF-PR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SALESDEAL')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SalesDeal` |  | |  |  | `CHAR(10)` | Agreement (various conditions grouped together) |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `Division` |  | |  |  | `CHAR(2)` | Division |
| `SalesDealType` |  | |  |  | `CHAR(4)` | Agreement type |
| `SalesDealValidityStartDate` |  | |  |  | `DATS(8)` | Agreement valid-from date |
| `SalesDealValidityEndDate` |  | |  |  | `DATS(8)` | Agreement valid-to date |
| `SalesDealDescription` |  | |  |  | `CHAR(40)` | Description of agreement (e.g. sales deal, promotion) |
