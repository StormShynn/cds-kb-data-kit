---
name: I_EHSDEVIATIONINCIDENTCUBE
description: "Deviation Incident - Cube"
app_component: EHS-SUS-EM
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSDEVIATIONINCIDENTCUBE')/$value
semantic_en: "Deviation Incident - Cube"
tags:
  - EHS
  - bo:salesorganization
  - component:EHS-SUS-EM
  - EHS-SUS
  - EHS-SUS-EM
  - interface-view
  - metadata-only
---
# I_EHSDEVIATIONINCIDENTCUBE

**Deviation Incident - Cube**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-EM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSDEVIATIONINCIDENTCUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `DeviationUUID` |  | |  |  | `RAW(16)` | NodeID |
| `EHSMainLocationID` |  | |  |  | `CHAR(20)` | Location ID |
| `DeviationReportRequiredCode` |  | |  |  | `CHAR(1)` | Deviation Reporting Required |
| `IncidentRefUUID` |  | |  |  | `RAW(16)` | Incident Key |
| `CmplRqVersUUID` |  | |  |  | `RAW(16)` | Compliance Requirement UUID |
| `CmplRqVersName` |  | |  |  | `CHAR(255)` | Compliance Requirement Version Name |
| `ComplianceRequirement` |  | |  |  | `CHAR(30)` | Compliance Requirement |
| `CmplRqDomain` |  | |  |  | `CHAR(21)` | Compliance Requirement Domain |
| `CmplRqDomainText` |  | |  |  | `CHAR(40)` | Compliance Requirement Domain Description |
| `CmplRqStatus` |  | |  |  | `CHAR(2)` | Compliance Requirement Status |
| `CmplRqStatusName` |  | |  |  | `CHAR(60)` | Short Text for Fixed Values |
| `CmplRqType` |  | |  |  | `CHAR(2)` | Compliance Requirement Type |
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
| `IncidentCategory` |  | |  |  | `CHAR(3)` | Incident Category |
| `IncidentStatus` |  | |  |  | `CHAR(2)` | Incident Status |
| `IncidentTitle` |  | |  |  | `CHAR(80)` | Incident Title |
| `IncidentTimeZone` |  | |  |  | `CHAR(6)` | Time Zone of Incident Start |
| `IncidentEndTimeZone` |  | |  |  | `CHAR(6)` | Time Zone for Incident End |
| `IncidentUTCDateTime` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `IncidentUTCEndDateTime` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `IncidentDate` |  | |  |  | `DATS(8)` | Incident Start Date |
| `IncidentEndDate` |  | |  |  | `DATS(8)` | Incident End Date |
| `IncidentUTCYearMonth` |  | |  |  | `NUMC(6)` | Calendar Year and Month |
| `IncidentUTCEndDateYearMonth` |  | |  |  | `NUMC(6)` | Calendar Year and Month |
| `IncidentUTCYear` |  | |  |  | `NUMC(4)` | Year |
| `IncidentUTCEndDateYear` |  | |  |  | `NUMC(4)` | Year |
| `EHSLocationUUID` |  | |  |  | `RAW(16)` | Location |
| `IncidentAccessRestriction` |  | |  |  | `CHAR(1)` | Restricted Access to Incident Record |
| `Country` |  | |  |  | `CHAR(3)` | Country/Region of Incident |
| `CountryName` |  | |  |  | `CHAR(50)` | Country/Region Name |
| `Region` |  | |  |  | `CHAR(3)` | Region of Incident |
| `RegionName` |  | |  |  | `CHAR(20)` | Description |
| `Plant` |  | |  |  | `CHAR(4)` | Plant ID |
| `EHSLocationID` |  | |  |  | `CHAR(20)` | Location ID |
| `NumberOfRecords` |  | |  |  | `INT4(10)` | Number of Records |
