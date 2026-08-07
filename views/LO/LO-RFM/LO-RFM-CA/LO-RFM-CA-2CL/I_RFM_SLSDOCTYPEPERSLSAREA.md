---
name: I_RFM_SLSDOCTYPEPERSLSAREA
description: Retail Fashion Management Sales Document Type per Sales Area
app_component: LO-RFM-CA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RFM_SLSDOCTYPEPERSLSAREA')/$value
semantic_en: Retail Fashion Management Sales Document Type per Sales Area
tags:
  - LO
  - bo:salesorganization
  - component:LO-RFM-CA-2CL
  - document
  - interface-view
  - LO-RFM
  - LO-RFM-CA
  - LO-RFM-CA-2CL
  - lob:cross_application components
  - lob:logistics general
  - metadata-only
---
# I_RFM_SLSDOCTYPEPERSLSAREA

**Retail Fashion Management Sales Document Type per Sales Area**

| Property | Value |
|---|---|
| App Component | `LO-RFM-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RFM_SLSDOCTYPEPERSLSAREA')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SalesDocumentType` |  | |  |  | `CHAR(4)` | Sales Document Type |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `Division` |  | |  |  | `CHAR(2)` | Division |
| `SeasonDetnControl` |  | |  |  | `CHAR(1)` | Season Processing |
| `SeasonDeterminationMessageType` |  | |  |  | `CHAR(1)` | Season Processing Message Type |
| `DelivDteFrmSeasnMstrIsPrpsd` |  | |  |  | `CHAR(1)` | Delivery Date Proposal Flag |
