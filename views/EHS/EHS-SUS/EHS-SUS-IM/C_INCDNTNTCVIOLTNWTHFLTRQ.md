---
name: C_INCDNTNTCVIOLTNWTHFLTRQ
description: This CDS view retrieves the number of incident records for a given location (and its sublocations) that involve a notice of violation. The data can be aggregated by attributes, such as category, type, and source. This CDS view provides the data to answer the following business questions: How many incidents were reported at my location in the past year that involved a notice of violation? How many notices of violation of each category were issued to my organization for a given location? How many violations were reported by a particular source? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: EHS-SUS-IM
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_INCDNTNTCVIOLTNWTHFLTRQ')/$value
semantic_en: This CDS view retrieves the number of incident records for a given location (and its sublocations) that involve a notice of violation. The data can be aggregated by attributes, such as category, type, and source. This CDS view provides the data to answer the following business questions: How many incidents were reported at my location in the past year that involved a notice of violation? How many notices of violation of each category were issued to my organization for a given location? How many violations were reported by a particular source? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
tags:
  - EHS
  - bo:companycode
  - component:EHS-SUS-IM
  - consumption-view
  - EHS-SUS
  - EHS-SUS-IM
  - metadata-only
---
# C_INCDNTNTCVIOLTNWTHFLTRQ

**This CDS view retrieves the number of incident records for a given location (and its sublocations) that involve a notice of violation. The data can be aggregated by attributes, such as category, type, and source. This CDS view provides the data to answer the following business questions: How many incidents were reported at my location in the past year that involved a notice of violation? How many notices of violation of each category were issued to my organization for a given location? How many violations were reported by a particular source? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-IM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_INCDNTNTCVIOLTNWTHFLTRQ')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `NoticeOfViolationUUID` |  | |  |  | `RAW(16)` | NodeID |
| `IncidentID` |  | |  |  | `CHAR(20)` | Incident ID |
| `IncidentUUID` |  | |  |  | `RAW(16)` | Incident UUID |
| `IncidentTitle` |  | |  |  | `CHAR(80)` | Incident Title |
| `IncidentStatus` |  | |  |  | `CHAR(2)` | Incident Status |
| `IncidentDate` |  | |  |  | `DATS(8)` | Incident Start Date |
| `IncidentYear` |  | |  |  | `NUMC(4)` | Calendar Year |
| `IncidentMonth` |  | |  |  | `NUMC(2)` | Calendar Month |
| `IncidentYearMonth` |  | |  |  | `NUMC(6)` | Year Month |
| `IncidentYearQuarter` |  | |  |  | `NUMC(1)` | Calendar Quarter |
| `IncidentWeekDay` |  | |  |  | `NUMC(1)` | Week Day |
| `EHSLocationID` |  | |  |  | `CHAR(20)` | Location ID |
| `EHSLocationUUID` |  | |  |  | `RAW(16)` | Location |
| `Plant` |  | |  |  | `CHAR(4)` | Plant ID |
| `Country` |  | |  |  | `CHAR(3)` | Country/Region of Incident |
| `Region` |  | |  |  | `CHAR(3)` | Region of Incident |
| `IncidentMajorRootCause` |  | |  |  | `CHAR(21)` | Major Root Cause |
| `NoticeOfViolationCategory` |  | |  |  | `CHAR(21)` | Violation Category |
| `NoticeOfViolationType` |  | |  |  | `CHAR(21)` | Violation Type |
| `NoticeOfViolationSource` |  | |  |  | `CHAR(21)` | Violation Source |
| `ProposedPenaltyAmount` |  | |  |  | `CURR(15)` | Proposed Penalty Amount |
| `ProposedPenaltyCurrency` |  | |  |  | `CUKY(5)` | Currency for Proposed Penalty |
| `FinalPenaltyAmount` |  | |  |  | `CURR(15)` | Final Penalty Amount |
| `FinalPenaltyCurrency` |  | |  |  | `CUKY(5)` | Currency for Final Penalty |
| `NumberOfNoticeOfViolationCases` |  | |  |  | `INT4(10)` | Number of Notice Of Violation Cases |
