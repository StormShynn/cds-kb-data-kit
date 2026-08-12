---
name: C_DVTNINCDNTFORLOCIDQ
description: "This CDS view retrieves the number of the open deviation incidents over a specific period of time. This CDS view provides the data to answer the following business questions: How many open deviation incidents are currently reported for each compliance requirement type? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: EHS-SUS-EM
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_DVTNINCDNTFORLOCIDQ')/$value
semantic_en: "This CDS view retrieves the number of the open deviation incidents over a specific period of time. This CDS view provides the data to answer the following business questions: How many open deviation incidents are currently reported for each compliance requirement type? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Deviation Incident Case Query — CDS view tiêu dùng dựa trên Deviation Incident Case Query."
keywords:
  - "deviation"
  - "incident"
  - "case"
  - "query"
  - "location"
  - "report"
  - "required"
  - "code"
  - "status"
tags:
  - EHS
  - bo:companycode
  - component:EHS-SUS-EM
  - consumption-view
  - EHS-SUS
  - EHS-SUS-EM
---
# C_DVTNINCDNTFORLOCIDQ

**This CDS view retrieves the number of the open deviation incidents over a specific period of time. This CDS view provides the data to answer the following business questions: How many open deviation incidents are currently reported for each compliance requirement type? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-EM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_DVTNINCDNTFORLOCIDQ')/$value) |

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
| `CmplRqCountry` |  | |  | `[{ entity: { name: 'I_CountryVH', element: 'Country' } }] CmplRqCountry` | `CHAR(3)` | Country/Region |
| `CmplRqCountryName` |  | |  |  | `CHAR(50)` | Country/Region Name |
| `CmplRqRegion` |  | |  |  | `CHAR(3)` | Region |
| `CmplRqRegionName` |  | |  |  | `CHAR(20)` | Description |
| `CmplRqVersPermitNumber` |  | |  |  | `CHAR(80)` | Permit Number |
| `EHSCmplRqPermitLifecycle` |  | |  |  | `CHAR(2)` | Permit Lifecycle ID |
| `EHSCmplRqPermitLifecycleName` |  | |  |  | `CHAR(60)` | Permit Lifecycle Name |
| `BusinessPartner` |  | |  |  | `CHAR(10)` | Business Partner Number |
| `ComplianceRequirementNameText` |  | |  |  | `CHAR(255)` | Compliance Requirement Version Name |
| `NumberOfRecords` |  | |  |  | `INT4(10)` | Number of Records |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_DVTNINCDNTFORLOCIDQ')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_DVTNINCDNTFORLOCIDQ')/$value)*

```abap
@EndUserText.label: 'Deviation Incident Case Query'
@VDM.viewType: #CONSUMPTION
@AccessControl.authorizationCheck: #NOT_ALLOWED

@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #ANALYTICAL_QUERY
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_QUERY ]

@ObjectModel.usageType: {serviceQuality: #D,
                         sizeCategory: #L,
                         dataClass: #MIXED}

define transient view entity C_DvtnIncdntForLocIDQ
  provider contract analytical_query
  with parameters
    // without this annotation when accessing the Analytics from different clients the metadata of service breaks
    // due to some buffering of hierarchy keys (not in our logic -> the analytical engine works in this way)
    // and we need to clear the cache everytime, because the app is throwing an exception
    // it is working together with hierarchyBinding : [ { type: #PARAMETER, value: 'p_hierkey'} ]
    @Consumption.hidden: true
    @Consumption.derivation: {
        lookupEntity : 'I_EHSLtstLocHierarchyRevision',
        resultElement : 'EHSLocHierarchyUUID'
      }
    P_EHSLocHierarchyUUID : ehfnd_conf_key,

    @EndUserText.label: 'Location'    
    @Consumption.valueHelpDefinition: [{ entity.name: 'C_EHSLocationIdentifierVH', entity.element: 'EHSLocationID' }]
    P_EHSLocID            : ehfnd_loc_id,

    @Consumption.hidden: true
    @Environment.systemField: #SYSTEM_DATE
    P_Date                : sydatum,
    @Consumption.hidden: true
    @Environment.systemField: #SYSTEM_LANGUAGE
    P_Language            : sylangu
  as projection on I_EHSDeviationIncidentCube
                   ( P_Date: $parameters.P_Date, P_Language: $parameters.P_Language )

{
  //Location
  @AnalyticsDetails.query.hidden: true
  @AnalyticsDetails.query.displayHierarchy: #FILTER
  @AnalyticsDetails.query.hierarchyInitialLevel: 1
  @Consumption.filter.hidden: true
  @Consumption.filter: {
    selectionType: #HIERARCHY_NODE,
    multipleSelections: true,
    hierarchyBinding : [ { type: #PARAMETER, value: 'P_EHSLocHierarchyUUID'} ]
  }
  @Consumption.derivation: {
   lookupEntity: 'I_EHSLocationWithFilter',
   resultHierarchyNode:{nodeTypeElement: 'HierarchyNodeType' },
   binding: [{
     targetParameter: 'P_EHSLocID',
     type: #PARAMETER,
     value: 'P_EHSLocID'
   }]
  }
  EHSLocationUUID,

  // Deviation Incident / Incident
  @AnalyticsDetails.query.axis: #FREE
  @Consumption.filter : { selectionType : #SINGLE, multipleSelections : true}
  DeviationUUID,

  @AnalyticsDetails.query.axis: #FREE
  @UI.textArrangement: #TEXT_FIRST
  @Consumption.filter : { selectionType : #SINGLE, multipleSelections : false}  
  DeviationReportRequiredCode,

  @AnalyticsDetails.query.axis: #FREE
  @Consumption.filter : { selectionType : #SINGLE, multipleSelections : true}
  IncidentRefUUID,

  @AnalyticsDetails.query.axis: #FREE
  @UI.textArrangement: #TEXT_FIRST
  @Consumption.filter : { selectionType : #SINGLE, multipleSelections : true}
  IncidentStatus,

  @AnalyticsDetails.query.axis: #FREE
  @Semantics.text: true
  @Consumption.filter : { selectionType : #SINGLE, multipleSelections : true}
  IncidentTitle,

  @AnalyticsDetails.query.axis: #FREE
  @Consumption.filter : { selectionType : #SINGLE, multipleSelections : true}
  IncidentTimeZone,

  @AnalyticsDetails.query.axis: #FREE
  @Consumption.filter : { selectionType : #SINGLE, multipleSelections : true}
  IncidentEndTimeZone,

  @AnalyticsDetails.query.axis: #FREE
  @Consumption.filter : { selectionType : #INTERVAL, multipleSelections : false}
  IncidentDate,

  @AnalyticsDetails.query.axis: #FREE
  @Consumption.filter : { selectionType : #INTERVAL, multipleSelections : false}
  IncidentEndDate,

  @AnalyticsDetails.query.axis: #FREE
  @Consumption.filter : { selectionType : #INTERVAL, multipleSelections : false}
  IncidentUTCYearMonth,

  @AnalyticsDetails.query.axis: #FREE
  @Consumption.filter : { selectionType : #INTERVAL, multipleSelections : false}
  IncidentUTCEndDateYearMonth,

  @AnalyticsDetails.query.axis: #FREE
  @Consumption.filter : { selectionType : #INTERVAL, multipleSelections : false}
  IncidentUTCYear,

  @AnalyticsDetails.query.axis: #FREE
  @Consumption.filter : { selectionType : #INTERVAL, multipleSelections : false}
  IncidentUTCEndDateYear,

  @AnalyticsDetails.query.axis: #FREE
  @Consumption.filter : { selectionType : #INTERVAL, multipleSelections : false}
  IncidentUTCDateTime,

  @AnalyticsDetails.query.axis: #FREE
  @Consumption.filter : { selectionType : #INTERVAL, multipleSelections : false}
  IncidentUTCEndDateTime,

  // Compliance Requirenment
  @AnalyticsDetails.query.axis: #FREE
  @Consumption.filter : { selectionType : #SINGLE, multipleSelections : true}
  CmplRqVersUUID,

  @AnalyticsDetails.query.axis: #FREE
  @Consumption.filter : { selectionType : #SINGLE, multipleSelections : true}
  CmplRqVersName,

  @AnalyticsDetails.query.axis: #FREE
  @Consumption.filter : { selectionType : #SINGLE, multipleSelections : true}
  ComplianceRequirement,

  @AnalyticsDetails.query.axis: #FREE
  @UI.textArrangement: #TEXT_FIRST
  @Consumption.filter : { selectionType : #SINGLE, multipleSelections : true}
  CmplRqDomain,

  @AnalyticsDetails.query.axis: #FREE
  @UI.textArrangement: #TEXT_FIRST
  @Consumption.filter : { selectionType : #SINGLE, multipleSelections : true}
  CmplRqType,

  @Semantics.text: true
  CmplRqDomainText,

  @AnalyticsDetails.query.axis: #FREE
  @UI.textArrangement: #TEXT_FIRST
  @Consumption.filter : { selectionType : #SINGLE, multipleSelections : true}
  CmplRqStatus,

  @Semantics.text: true
  CmplRqStatusName,

  @AnalyticsDetails.query.axis: #FREE
  @Semantics.text: true
  @Consumption.filter : { selectionType : #SINGLE, multipleSelections : true}
  IssuingOrganization,

  @AnalyticsDetails.query.axis: #FREE
  @UI.textArrangement: #TEXT_FIRST
  @Consumption.filter : { selectionType : #SINGLE, multipleSelections : true}
  @Consumption.valueHelpDefinition:
  [{ entity: {
        name: 'I_CountryVH',
        element: 'Country' } }]
  CmplRqCountry,

  @Semantics.text: true
  CmplRqCountryName,

  @AnalyticsDetails.query.axis: #FREE
  @UI.textArrangement: #TEXT_FIRST
  @Consumption.filter : { selectionType : #SINGLE, multipleSelections : true}
  CmplRqRegion,

  @Semantics.text: true
  CmplRqRegionName,

  @AnalyticsDetails.query.axis: #FREE
  @Semantics.text: true
  @Consumption.filter : { selectionType : #SINGLE, multipleSelections : true}
  CmplRqVersPermitNumber,

  @AnalyticsDetails.query.axis: #FREE
  @UI.textArrangement: #TEXT_FIRST
  @Consumption.filter : { selectionType : #SINGLE, multipleSelections : true}
  EHSCmplRqPermitLifecycle,

  @Semantics.text: true
  EHSCmplRqPermitLifecycleName,

  @AnalyticsDetails.query.axis: #FREE
  @Consumption.filter : { selectionType : #SINGLE, multipleSelections : true}
  BusinessPartner,

  @AnalyticsDetails.query.axis: #FREE
  @Semantics.text: true
  ComplianceRequirementNameText,

  @EndUserText.label: 'Number of Records'
  @AnalyticsDetails.query.axis: #COLUMNS
  NumberOfRecords
}
```
