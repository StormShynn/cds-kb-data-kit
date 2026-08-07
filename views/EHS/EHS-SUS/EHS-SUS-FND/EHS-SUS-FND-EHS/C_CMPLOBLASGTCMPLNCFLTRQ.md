---
name: C_CMPLOBLASGTCMPLNCFLTRQ
description: This CDS view retrieves the compliance (fulfillment) status of the compliance obligation assignment. This CDS view provides the data to answer the following business questions: How many obligation assignments are in Fulfilled status? How many obligation assignments are in Fulfilled with Variance status? How many obligation assignments are in Not Assessed status? How many obligation assignments are in Not Fulfilled status? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: EHS-SUS-FND-EHS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CMPLOBLASGTCMPLNCFLTRQ')/$value
semantic_en: This CDS view retrieves the compliance (fulfillment) status of the compliance obligation assignment. This CDS view provides the data to answer the following business questions: How many obligation assignments are in Fulfilled status? How many obligation assignments are in Fulfilled with Variance status? How many obligation assignments are in Not Assessed status? How many obligation assignments are in Not Fulfilled status? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
tags:
  - EHS
  - bo:companycode
  - component:EHS-SUS-FND-EHS
  - consumption-view
  - EHS-SUS
  - EHS-SUS-FND
  - EHS-SUS-FND-EHS
  - metadata-only
---
# C_CMPLOBLASGTCMPLNCFLTRQ

**This CDS view retrieves the compliance (fulfillment) status of the compliance obligation assignment. This CDS view provides the data to answer the following business questions: How many obligation assignments are in Fulfilled status? How many obligation assignments are in Fulfilled with Variance status? How many obligation assignments are in Not Assessed status? How many obligation assignments are in Not Fulfilled status? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-FND-EHS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CMPLOBLASGTCMPLNCFLTRQ')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CmplncObligationAssignmentUUID` |  | |  |  | `RAW(16)` | Compliance Obligation Assignment UUID |
| `EHSLocationUUID` |  | |  |  | `RAW(16)` | Location |
| `EHSLocationName` |  | |  |  | `CHAR(60)` | Location Revision Text |
| `ComplianceObligationUUID` |  | |  |  | `RAW(16)` | Compliance Obligation |
| `CmplncOblgnAssgmtCmplncStatus` |  | |  |  | `CHAR(2)` | Status |
| `NumberOfRecords` |  | |  |  | `INT4(10)` | Number of Obligations |
| `NumberOfFulfilledObligations` |  | |  |  | `INT4(10)` | Number of Fulfilled Obligations |
| `ComplianceObligationTypeCode` |  | |  |  | `CHAR(2)` | Compliance Obligation Type |
| `ComplianceObligationDomainCode` |  | |  |  | `CHAR(21)` | Compliance Obligation Domain |
| `CmplOblAsgtFulfilledUUID` |  | |  |  | `RAW(16)` | Compliance Obligation Assignment UUID |
| `FulfillmentPercentageValue` |  | |  |  | `DEC(5)` | Percentage of Fullfilled Obligations |
