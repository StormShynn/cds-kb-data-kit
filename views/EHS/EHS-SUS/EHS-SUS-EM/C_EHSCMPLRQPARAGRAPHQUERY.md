---
name: C_EHSCMPLRQPARAGRAPHQUERY
description: Compliance Requirement Paragraph - Query
app_component: EHS-SUS-EM
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EHSCMPLRQPARAGRAPHQUERY')/$value
semantic_en: Compliance Requirement Paragraph - Query
tags:
  - EHS
  - component:EHS-SUS-EM
  - consumption-view
  - EHS-SUS
  - EHS-SUS-EM
  - metadata-only
---
# C_EHSCMPLRQPARAGRAPHQUERY

**Compliance Requirement Paragraph - Query**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-EM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EHSCMPLRQPARAGRAPHQUERY')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `CmplRqVersChildUUID` | `RAW(16)` | NodeID |
| `EHSMainLocationUUID` | `RAW(16)` | Location |
| `EHSLocClassifierRefUUID` | `RAW(16)` | NodeID |
| `CmplRqVersUUID` | `RAW(16)` | Compliance Requirement UUID |
| `CmplRqVersAppltyAreaUUID` | `RAW(16)` | NodeID |
| `EHSMainLocationID` | `CHAR(20)` | Location ID |
| `EHSLocClassifierID` | `CHAR(40)` | BCO ID |
| `CmplRqVersParagraphID` | `CHAR(30)` | Compliance Requirement Paragraph ID |
| `CmplRqVersParagraphName` | `CHAR(250)` | Paragraph Name |
| `CmplRqAmendmentDate` | `DATS(8)` | Amendment Date |
| `CmplRqContentName` | `CHAR(250)` | Compliance Requirement Paragraph Content Name |
| `CmplRqLegalTextName` | `CHAR(250)` | Compliance Requirement Legal Text Link |
| `CmplRqVersParagraphType` | `CHAR(20)` | Compliance Requirement Paragraph Type |
| `EHSLocClassifiersText` | `CHAR(250)` | Location Classifier Text |
| `CmplRqVersName` | `CHAR(250)` | Compliance Requirement Name |
| `CmplRqDomain` | `CHAR(21)` | Compliance Requirement Domain |
| `CmplRqDomainText` | `CHAR(40)` | Compliance Requirement Domain Description |
| `IssuingOrganization` | `CHAR(80)` | Issuing Organization |
| `BusinessPartner` | `CHAR(10)` | Business Partner Number |
| `EffectiveDate` | `DATS(8)` | Effective Date |
| `CmplRqVersValidToDate` | `DATS(8)` | Expiration Date |
| `CmplRqVersValidFromYear` | `NUMC(4)` | Year |
| `CmplRqVersValidToYear` | `NUMC(4)` | Year |
| `CmplRqVersMaintStatus` | `CHAR(2)` | Compliance Requirement Status |
| `CmplRqType` | `CHAR(2)` | Compliance Requirement Type |
| `CmplRqTypeName` | `CHAR(60)` | Short Text for Fixed Values |
| `CmplRqApplicationComponent` | `CHAR(5)` | Solution Area |
| `CmplRqVersPermitNumber` | `CHAR(80)` | Permit Number |
| `EHSCmplRqPermitLifecycle` | `CHAR(2)` | Permit Lifecycle ID |
| `EHSCmplRqPermitLifecycleName` | `CHAR(60)` | Permit Lifecycle Name |
| `ComplianceRequirement` | `CHAR(30)` | Compliance Requirement |
| `EHSLocationID` | `CHAR(20)` | Location ID |
| `EHSLocationName` | `CHAR(60)` | Location |
| `EHSLocationType` | `CHAR(21)` | Location Type |
| `EHSLocationTypeText` | `CHAR(40)` | Location Type Name |
| `ContentProvider` | `CHAR(30)` | Content Provider |
| `Country` | `CHAR(3)` | Country/Region |
| `CountryName` | `CHAR(50)` | Country/Region Name |
| `Region` | `CHAR(3)` | Region |
| `RegionName` | `CHAR(20)` | Description |
| `NumberOfRecords` | `INT1(3)` |  |
