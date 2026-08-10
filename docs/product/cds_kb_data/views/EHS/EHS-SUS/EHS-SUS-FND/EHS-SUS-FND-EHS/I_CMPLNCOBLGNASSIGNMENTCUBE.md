---
name: I_CMPLNCOBLGNASSIGNMENTCUBE
description: "This CDS view helps to retrieve the compliance obligation assignment. This CDS view provides the data to answer the following business questions: How many compliance obligation assignments are in the system? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: EHS-SUS-FND-EHS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CMPLNCOBLGNASSIGNMENTCUBE')/$value
semantic_en: "This CDS view helps to retrieve the compliance obligation assignment. This CDS view provides the data to answer the following business questions: How many compliance obligation assignments are in the system? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
tags:
  - EHS
  - bo:companycode
  - component:EHS-SUS-FND-EHS
  - EHS-SUS
  - EHS-SUS-FND
  - EHS-SUS-FND-EHS
  - interface-view
  - metadata-only
---
# I_CMPLNCOBLGNASSIGNMENTCUBE

**This CDS view helps to retrieve the compliance obligation assignment. This CDS view provides the data to answer the following business questions: How many compliance obligation assignments are in the system? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-FND-EHS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CMPLNCOBLGNASSIGNMENTCUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CmplncObligationAssignmentUUID` |  | |  |  | `RAW(16)` | Compliance Obligation Assignment UUID |
| `EHSLocationUUID` |  | |  |  | `RAW(16)` | Location |
| `EHSLocationName` |  | |  |  | `CHAR(60)` | Location Revision Text |
| `ComplianceObligationUUID` |  | |  |  | `RAW(16)` | Compliance Obligation |
| `CmplncOblgnAssgmtAppltyStatus` |  | |  |  | `CHAR(2)` | Applicability |
| `CmplncOblgnAssgmtCmplncStatus` |  | |  |  | `CHAR(2)` | Status |
| `CmplncOblgnAssgmtAppltyStsText` |  | |  |  | `CHAR(60)` | Short Text for Fixed Values |
| `CmplncOblgnAssgmtCmplncStsText` |  | |  |  | `CHAR(60)` | Short Text for Fixed Values |
| `ComplianceObligationTypeCode` |  | |  |  | `CHAR(2)` | Compliance Obligation Type |
| `CmplncOblgnTypeDescription` |  | |  |  | `CHAR(60)` | Compliance Obligation Type Description |
| `NumberOfRecords` |  | |  |  | `INT4(10)` | Number of Obligations |
| `NumberOfFulfilledObligations` |  | |  |  | `INT4(10)` | Number of Fulfilled Obligations |
| `CmplOblAsgtFulfilledUUID` |  | |  |  | `RAW(16)` | Compliance Obligation Assignment UUID |
| `ComplianceObligationDomainCode` |  | |  |  | `CHAR(21)` | Compliance Obligation Domain |
