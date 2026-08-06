---
name: C_CMPLOBLASGTCMPLNCFLTRQ
description: Obligation Assignment Compliance - Query
app_component: EHS-SUS-FND-EHS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CMPLOBLASGTCMPLNCFLTRQ')/$value
semantic_en: Obligation Assignment Compliance - Query
tags:
  - EHS
  - component:EHS-SUS-FND-EHS
  - consumption-view
  - EHS-SUS
  - EHS-SUS-FND
  - EHS-SUS-FND-EHS
  - metadata-only
---
# C_CMPLOBLASGTCMPLNCFLTRQ

**Obligation Assignment Compliance - Query**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-FND-EHS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CMPLOBLASGTCMPLNCFLTRQ')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `CmplncObligationAssignmentUUID` | `RAW(16)` | Compliance Obligation Assignment UUID |
| `EHSLocationUUID` | `RAW(16)` | Location |
| `EHSLocationName` | `CHAR(60)` | Location Revision Text |
| `ComplianceObligationUUID` | `RAW(16)` | Compliance Obligation |
| `CmplncOblgnAssgmtCmplncStatus` | `CHAR(2)` | Status |
| `NumberOfRecords` | `INT4(10)` | Number of Obligations |
| `NumberOfFulfilledObligations` | `INT4(10)` | Number of Fulfilled Obligations |
| `ComplianceObligationTypeCode` | `CHAR(2)` | Compliance Obligation Type |
| `ComplianceObligationDomainCode` | `CHAR(21)` | Compliance Obligation Domain |
| `FulfillmentPercentageValue` | `DEC(5)` | Percentage of Fullfilled Obligations |
