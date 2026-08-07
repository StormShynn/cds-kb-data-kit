---
name: I_EHSAMOUNTSCUBE
description: This CDS view provides the data to answer the following business questions: What amount of a specific pollutant has been released for a given location over a certain period of time? Which locations in the company produce the most emissions? What is the highest sampled value of a pollutant? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: EHS-SUS-EM
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSAMOUNTSCUBE')/$value
semantic_en: This CDS view provides the data to answer the following business questions: What amount of a specific pollutant has been released for a given location over a certain period of time? Which locations in the company produce the most emissions? What is the highest sampled value of a pollutant? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
tags:
  - EHS
  - bo:companycode
  - component:EHS-SUS-EM
  - EHS-SUS
  - EHS-SUS-EM
  - interface-view
  - metadata-only
---
# I_EHSAMOUNTSCUBE

**This CDS view provides the data to answer the following business questions: What amount of a specific pollutant has been released for a given location over a certain period of time? Which locations in the company produce the most emissions? What is the highest sampled value of a pollutant? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-EM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSAMOUNTSCUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EHSAmountUUID` |  | |  |  | `RAW(16)` | NodeID |
| `EHSMainLocationID` |  | |  |  | `CHAR(20)` | Location ID |
| `EHSDataClassifierID` |  | |  |  | `CHAR(30)` | Data Classifier for Location Aggregation |
| `EHSLocClassifierID` |  | |  |  | `CHAR(40)` | BCO ID |
| `EHSMainLocationName` |  | |  |  | `CHAR(60)` | Location |
| `EHSAmountSourceType` |  | |  |  | `CHAR(2)` | Data Source Type |
| `EHSSubjectType` |  | |  |  | `CHAR(2)` | Subject Type |
| `EHSSubjectUUID` |  | |  |  | `RAW(16)` | Reference to Subject Type BO Root Node ID |
| `EHSAmountUTCDateTime` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `EHSAmountUTCDate` |  | |  |  | `DATS(8)` | Date |
| `EHSAmountUTCYearMonth` |  | |  |  | `NUMC(6)` | Calendar Year and Month |
| `EHSAmountUTCYear` |  | |  |  | `NUMC(4)` | Year |
| `EHSAmountValue` |  | |  |  | `FLTP(16)` | Amount Value |
| `UnitOfMeasure` |  | |  |  | `UNIT(3)` | Units of Measurement of Various Types |
| `UnitOfMeasureDimension` |  | |  |  | `CHAR(6)` | Physical Dimension |
| `EHSAmountIsReplaced` |  | |  |  | `CHAR(1)` | Substituted Value |
| `EHSAmountDeviationID` |  | |  |  | `CHAR(20)` | Business Object ID |
| `EHSAmountIsPreliminary` |  | |  |  | `CHAR(1)` | Preliminary Result |
| `EHSAmountStatus` |  | |  |  | `CHAR(2)` | Amount Status |
| `EHSAmountExternalSource` |  | |  |  | `CHAR(80)` | External Source |
| `EHSComplianceScenActivityUUID` |  | |  |  | `RAW(16)` | NodeID |
| `EHSComplianceScenActivityID` |  | |  |  | `CHAR(20)` | Data Collection Definition ID |
| `EHSComplianceScenActivityName` |  | |  |  | `CHAR(132)` | Data Collection Definition Name |
| `EHSComplianceScenActivityTitle` |  | |  |  | `CHAR(132)` | Description (Long) |
| `DataUsagePeriodicity` |  | |  |  | `CHAR(3)` | Data Period of Data Collection Definition |
| `EHSLocationUUID` |  | |  |  | `RAW(16)` | Location |
| `EHSAmountIssueType` |  | |  |  | `CHAR(2)` | Amount Issue Type Values |
| `EHSAmountSourceTypeName` |  | |  |  | `CHAR(255)` | Text Field in OTR |
| `UnitOfMeasureName` |  | |  |  | `CHAR(10)` | Unit of Measurement Text (Maximum 10 Characters) |
| `UnitOfMeasureDimensionName` |  | |  |  | `CHAR(20)` | Dimension Text |
| `EHSAmountStatusName` |  | |  |  | `CHAR(60)` | Short Text for Fixed Values |
| `EHSDataPeriodText` |  | |  |  | `CHAR(60)` | Short Text for Fixed Values |
| `EHSAmountIssueTypeText` |  | |  |  | `CHAR(60)` | Short Text for Fixed Values |
| `EHSLocationName` |  | |  |  | `CHAR(60)` | Location |
| `EHSLocationType` |  | |  |  | `CHAR(21)` | Location Type |
| `EHSLocationRevisionUUID` |  | |  |  | `RAW(16)` | EHS Location - Revision UUID |
| `EHSLocationTypeText` |  | |  |  | `CHAR(40)` | Location Type Name |
| `Country` |  | |  |  | `CHAR(3)` | Country/Region |
| `CountryName` |  | |  |  | `CHAR(50)` | Country/Region Name |
| `Region` |  | |  |  | `CHAR(3)` | Region |
| `RegionName` |  | |  |  | `CHAR(20)` | Description |
| `Plant` |  | |  |  | `CHAR(4)` | Plant ID |
| `PlantName` |  | |  |  | `CHAR(30)` | Plant Name |
| `OrganizationalUnit` |  | |  |  | `NUMC(8)` | Organizational Unit ID |
| `OrganizationalUnitName` |  | |  |  | `CHAR(25)` | Short Text of Organizational Unit |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `ControllingAreaName` |  | |  |  | `CHAR(25)` | Controlling Area Name |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `CostCenterName` |  | |  |  | `CHAR(20)` | Cost Center Name |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `CompanyCodeName` |  | |  |  | `CHAR(25)` | Name of Company Code or Company |
| `EHSLocationStatus` |  | |  |  | `CHAR(2)` | Location Status |
| `EHSLocationAuthorizationGroup` |  | |  |  | `CHAR(21)` | Location Authorization Group |
| `BusinessArea` |  | |  |  | `CHAR(4)` | Business Area |
| `EHSLocationID` |  | |  |  | `CHAR(20)` | Location ID |
| `EHSLocClassifiersText` |  | |  |  | `CHAR(255)` | List of Classifiers (Comma Separated) - short |
| `EHSDataClassifiersText` |  | |  |  | `CHAR(255)` | Data Classifiers |
| `EHSSubjectID` |  | |  |  | `CHAR(20)` | id |
| `CASNumber` |  | |  |  | `CHAR(20)` | CAS Number |
| `EHSSubjectText` |  | |  |  | `CHAR(60)` | Name |
| `NumberOfRecords` |  | |  |  | `INT1(3)` |  |
| `EHSAmountDataMaxQuantity` |  | |  |  | `FLTP(16)` | Amount Value |
| `EHSAmountDataMinQuantity` |  | |  |  | `FLTP(16)` | Amount Value |
