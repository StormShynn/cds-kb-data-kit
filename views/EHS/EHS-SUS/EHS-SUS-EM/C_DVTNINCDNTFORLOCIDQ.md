---
name: C_DVTNINCDNTFORLOCIDQ
description: "This CDS view retrieves the number of the open deviation incidents over a specific period of time. This CDS view provides the data to answer the following business questions: How many open deviation incidents are currently reported for each compliance requirement type? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: EHS-SUS-EM
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_DVTNINCDNTFORLOCIDQ')/$value
semantic_en: "This CDS view retrieves the number of the open deviation incidents over a specific period of time. This CDS view provides the data to answer the following business questions: How many open deviation incidents are currently reported for each compliance requirement type? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
tags:
  - EHS
  - bo:companycode
  - component:EHS-SUS-EM
  - consumption-view
  - EHS-SUS
  - EHS-SUS-EM
  - metadata-only
---
# C_DVTNINCDNTFORLOCIDQ

**This CDS view retrieves the number of the open deviation incidents over a specific period of time. This CDS view provides the data to answer the following business questions: How many open deviation incidents are currently reported for each compliance requirement type? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-EM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_DVTNINCDNTFORLOCIDQ')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EHSLocationUUID` |  | |  |  | `RAW(16)` | Location |
| `DeviationUUID` |  | |  |  | `RAW(16)` | NodeID |
| `DeviationReportRequiredCode` |  | |  |  | `CHAR(1)` | Deviation Reporting Required |
| `IncidentRefUUID` |  | |  |  | `RAW(16)` | Incident Key |
| `IncidentStatus` |  | |  |  | `CHAR(2)` | Incident Status |
| `IncidentTitle` |  | |  |  | `CHAR(80)` | Incident Title |
| `IncidentTimeZone` |  | |  |  | `CHAR(6)` | Time Zone of Incident Start |
| `IncidentEndTimeZone` |  | |  |  | `CHAR(6)` | Time Zone for Incident End |
| `IncidentDate` |  | |  |  | `DATS(8)` | Incident Start Date |
| `IncidentEndDate` |  | |  |  | `DATS(8)` | Incident End Date |
| `IncidentUTCYearMonth` |  | |  |  | `NUMC(6)` | Calendar Year and Month |
| `IncidentUTCEndDateYearMonth` |  | |  |  | `NUMC(6)` | Calendar Year and Month |
| `IncidentUTCYear` |  | |  |  | `NUMC(4)` | Year |
| `IncidentUTCEndDateYear` |  | |  |  | `NUMC(4)` | Year |
| `IncidentUTCDateTime` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `IncidentUTCEndDateTime` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `CmplRqVersUUID` |  | |  |  | `RAW(16)` | Compliance Requirement UUID |
| `CmplRqVersName` |  | |  |  | `CHAR(255)` | Compliance Requirement Version Name |
| `ComplianceRequirement` |  | |  |  | `CHAR(30)` | Compliance Requirement |
| `CmplRqDomain` |  | |  |  | `CHAR(21)` | Compliance Requirement Domain |
| `CmplRqType` |  | |  |  | `CHAR(2)` | Compliance Requirement Type |
| `CmplRqDomainText` |  | |  |  | `CHAR(40)` | Compliance Requirement Domain Description |
| `CmplRqStatus` |  | |  |  | `CHAR(2)` | Compliance Requirement Status |
| `CmplRqStatusName` |  | |  |  | `CHAR(60)` | Short Text for Fixed Values |
| `IssuingOrganization` |  | |  |  | `CHAR(80)` | Issuing Organization |
| `CmplRqCountry` |  | |  |  | `CHAR(3)` | Country/Region |
| `CmplRqCountryName` |  | |  |  | `CHAR(50)` | Country/Region Name |
| `CmplRqRegion` |  | |  |  | `CHAR(3)` | Region |
| `CmplRqRegionName` |  | |  |  | `CHAR(20)` | Description |
| `CmplRqVersPermitNumber` |  | |  |  | `CHAR(80)` | Permit Number |
| `EHSCmplRqPermitLifecycle` |  | |  |  | `CHAR(2)` | Permit Lifecycle ID |
| `EHSCmplRqPermitLifecycleName` |  | |  |  | `CHAR(60)` | Permit Lifecycle Name |
| `BusinessPartner` |  | |  |  | `CHAR(10)` | Business Partner Number |
| `ComplianceRequirementNameText` |  | |  |  | `CHAR(255)` | Compliance Requirement Version Name |
| `NumberOfRecords` |  | |  |  | `INT4(10)` | Number of Records |
