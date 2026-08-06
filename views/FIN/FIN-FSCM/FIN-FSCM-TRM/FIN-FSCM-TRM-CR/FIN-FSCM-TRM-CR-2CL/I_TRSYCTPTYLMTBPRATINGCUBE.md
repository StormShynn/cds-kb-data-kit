---
name: I_TRSYCTPTYLMTBPRATINGCUBE
description: This CDS view provides the prerequisites for answering the following business questions for the business partner rating: How is the business partner rated by rating agencies? What are the expectations for the development of the business partner rating in the future? What is the validity period of the available rating information? What is the creation date of the rating information?
app_component: FIN-FSCM-TRM-CR-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRSYCTPTYLMTBPRATINGCUBE')/$value
semantic_en: This CDS view provides the prerequisites for answering the following business questions for the business partner rating: How is the business partner rated by rating agencies? What are the expectations for the development of the business partner rating in the future? What is the validity period of the available rating information? What is the creation date of the rating information?
tags:
  - FIN
  - bo:businesspartner
  - component:FIN-FSCM-TRM-CR-2CL
  - FIN-FSCM
  - FIN-FSCM-TRM
  - FIN-FSCM-TRM-CR
  - FIN-FSCM-TRM-CR-2CL
  - interface-view
  - lob:finance
  - metadata-only
---
# I_TRSYCTPTYLMTBPRATINGCUBE

**This CDS view provides the prerequisites for answering the following business questions for the business partner rating: How is the business partner rated by rating agencies? What are the expectations for the development of the business partner rating in the future? What is the validity period of the available rating information? What is the creation date of the rating information?**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-CR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRSYCTPTYLMTBPRATINGCUBE')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `BusinessPartner` | `CHAR(10)` | Business Partner Number |
| `BusinessPartnerRatingProcedure` | `CHAR(10)` | Rating Procedure |
| `BPRatingValidityEndDate` | `DATS(8)` | Valid-to Date for Rating |
| `BPRatingValidityStartDate` | `DATS(8)` | Valid-from Date for Rating |
| `BusinessPartnerRatingGrade` | `CHAR(10)` | Rating |
| `BusinessPartnerRatingTrend` | `CHAR(2)` | Trend |
| `BPRatingCreationDate` | `DATS(8)` | Entered-on Date for Rating |
| `BusinessPartnerRatingComment` | `CHAR(60)` | Text for Ratings |
| `BusinessPartnerRatingIsAllowed` | `CHAR(1)` | Rating Allowed |
| `BPRatingIsValidOnKeyDate` | `CHAR(1)` | Business Partner Rating is valid on Key Date |
| `BusinessPartnerRatingIsExpired` | `CHAR(1)` | Rating Validity is Expired according to Permitted Period |
| `NumberOfRecords` | `INT4(10)` | Number of Records |
