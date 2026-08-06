---
name: C_CMPLOBLASGTCMPLNCRATEQ
description: Cmplnc Oblgn Assign Cmplnc Rate - Query
app_component: EHS-SUS-FND-EHS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CMPLOBLASGTCMPLNCRATEQ')/$value
semantic_en: Cmplnc Oblgn Assign Cmplnc Rate - Query
tags:
  - EHS
  - component:EHS-SUS-FND-EHS
  - consumption-view
  - EHS-SUS
  - EHS-SUS-FND
  - EHS-SUS-FND-EHS
  - metadata-only
---
# C_CMPLOBLASGTCMPLNCRATEQ

**Cmplnc Oblgn Assign Cmplnc Rate - Query**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-FND-EHS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CMPLOBLASGTCMPLNCRATEQ')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `CmplncObligationAssignmentUUID` | `RAW(16)` | Compliance Obligation Assignment UUID |
| `EHSLocationUUID` | `RAW(16)` | Location |
| `EHSLocationName` | `CHAR(60)` | Location Revision Text |
| `ComplianceObligationUUID` | `RAW(16)` | Compliance Obligation |
| `CmplncOblgnAssgmtAppltyStatus` | `CHAR(2)` | Applicability |
| `CmplncOblgnAssgmtCmplncStatus` | `CHAR(2)` | Status |
| `ComplianceObligationTypeCode` | `CHAR(2)` | Compliance Obligation Type |
| `ComplianceObligationDomainCode` | `CHAR(21)` | Compliance Obligation Domain |
| `NumberOfFulfilledObligations` | `INT4(10)` | Number of Obligations |
| `NumberOfRecords` | `INT4(10)` | Number of Obligations |
| `CmplOblAsgtFlfmtAggrgdValue` | `INT4(10)` | Number of Obligations |
| `FulfillmentPercentageValue` | `DEC(5)` | Percentage of Fullfilled Obligations |
