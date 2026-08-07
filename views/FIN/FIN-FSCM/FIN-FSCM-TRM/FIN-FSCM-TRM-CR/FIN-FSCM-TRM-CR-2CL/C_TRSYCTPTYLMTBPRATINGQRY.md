---
name: C_TRSYCTPTYLMTBPRATINGQRY
description: This CDS view provides the prerequisites for answering the following business questions for the business partner rating: How is the business partner rated by rating agencies at a specific date? What are the expectations for the development of the business partner rating in the future?
app_component: FIN-FSCM-TRM-CR-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_TRSYCTPTYLMTBPRATINGQRY')/$value
semantic_en: This CDS view provides the prerequisites for answering the following business questions for the business partner rating: How is the business partner rated by rating agencies at a specific date? What are the expectations for the development of the business partner rating in the future?
tags:
  - FIN
  - bo:businesspartner
  - component:FIN-FSCM-TRM-CR-2CL
  - consumption-view
  - FIN-FSCM
  - FIN-FSCM-TRM
  - FIN-FSCM-TRM-CR
  - FIN-FSCM-TRM-CR-2CL
  - lob:finance
  - metadata-only
---
# C_TRSYCTPTYLMTBPRATINGQRY

**This CDS view provides the prerequisites for answering the following business questions for the business partner rating: How is the business partner rated by rating agencies at a specific date? What are the expectations for the development of the business partner rating in the future?**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-CR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_TRSYCTPTYLMTBPRATINGQRY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BusinessPartner` |  | |  |  | `CHAR(10)` | Business Partner Number |
| `BusinessPartnerRatingProcedure` |  | |  |  | `CHAR(10)` | Rating Procedure |
| `BusinessPartnerRatingGrade` |  | |  |  | `CHAR(10)` | Rating |
| `BusinessPartnerRatingTrend` |  | |  |  | `CHAR(2)` | Trend |
| `NumberOfRecords` |  | |  |  | `INT4(10)` | Number of Records |
