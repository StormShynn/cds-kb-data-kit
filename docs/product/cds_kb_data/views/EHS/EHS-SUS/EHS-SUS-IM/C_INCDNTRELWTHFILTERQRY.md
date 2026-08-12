---
name: C_INCDNTRELWTHFILTERQRY
description: "This CDS view retrieves the number of incident records for a specific location and its sublocations that involve an environmental release. The data can be aggregated by attributes, such as the type and size of release. This CDS view provides the data to answer the following business questions: How many incidents were reported at my location in the past year that involved an environmental release? How many releases were reported of each type? How many large releases have there been at my location? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: EHS-SUS-IM
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_INCDNTRELWTHFILTERQRY')/$value
semantic_en: "This CDS view retrieves the number of incident records for a specific location and its sublocations that involve an environmental release. The data can be aggregated by attributes, such as the type and size of release. This CDS view provides the data to answer the following business questions: How many incidents were reported at my location in the past year that involved an environmental release? How many releases were reported of each type? How many large releases have there been at my location? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Incident Release Case Query — CDS view tiêu dùng dựa trên Incident Release Case Query."
keywords:
  - "incident"
  - "release"
  - "case"
  - "query"
  - "title"
  - "status"
tags:
  - EHS
  - bo:companycode
  - component:EHS-SUS-IM
  - consumption-view
  - EHS-SUS
  - EHS-SUS-IM
---
# C_INCDNTRELWTHFILTERQRY

**This CDS view retrieves the number of incident records for a specific location and its sublocations that involve an environmental release. The data can be aggregated by attributes, such as the type and size of release. This CDS view provides the data to answer the following business questions: How many incidents were reported at my location in the past year that involved an environmental release? How many releases were reported of each type? How many large releases have there been at my location? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-IM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_INCDNTRELWTHFILTERQRY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `IncidentReleaseUUID` |  | |  |  | `RAW(16)` | NodeID |
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
| `IncidentTime` |  | |  |  | `TIMS(6)` | Field of type TIMS |
| `EHSLocationID` |  | |  |  | `CHAR(20)` | Location ID |
| `EHSLocationUUID` |  | |  |  | `RAW(16)` | Location |
| `Plant` |  | |  |  | `CHAR(4)` | Plant ID |
| `Country` |  | |  |  | `CHAR(3)` | Country/Region of Incident |
| `Region` |  | |  |  | `CHAR(3)` | Region of Incident |
| `IncidentMajorRootCause` |  | |  |  | `CHAR(21)` | Major Root Cause |
| `IncidentReleaseType` |  | |  |  | `CHAR(21)` | Release Type |
| `IncidentReleaseSize` |  | |  |  | `CHAR(21)` | Release Size |
| `NumberOfReleaseCases` |  | |  |  | `INT4(10)` | Number of Release-Related Cases |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_INCDNTRELWTHFILTERQRY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_INCDNTRELWTHFILTERQRY')/$value)*

```abap
@EndUserText.label: 'Incident Release Case Query'
@OData.publish: true
@VDM.viewType: #CONSUMPTION

@AccessControl.authorizationCheck: #NOT_ALLOWED
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #ANALYTICAL_QUERY
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_QUERY ]

@ObjectModel.usageType: {serviceQuality: #D, sizeCategory: #L, dataClass: #MIXED}

define transient view entity C_IncdntRelWthFilterQry
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
    @Consumption.derivation: {
      lookupEntity: 'C_EHSMyLocation',
       resultElement: 'EHSLocationID' }

    @Consumption.valueHelpDefinition: [{ entity.name: 'C_EHSLocationIdentifierVH', entity.element: 'EHSLocationID' }]
    P_EHSLocID            : ehfnd_loc_id

  as projection on I_IncidentReleaseCaseCube
{

  @Consumption.hidden: true
  IncidentReleaseUUID,
  IncidentID,
  @Consumption.hidden: true
  IncidentUUID,
  IncidentTitle,
  IncidentStatus,

  @Semantics.calendar.dayOfYear: true
  IncidentDate,

  @ObjectModel.value.derivedFrom: ['IncidentDate']
  @Semantics.calendar.year: true
  IncidentYear,

  @ObjectModel.value.derivedFrom: ['IncidentDate']
  @Semantics.calendar.month: true
  IncidentMonth,

  @ObjectModel.value.derivedFrom: ['IncidentDate']
  @Semantics.calendar.yearMonth: true
  IncidentYearMonth,

  @ObjectModel.value.derivedFrom: ['IncidentDate']
  @Semantics.calendar.yearQuarter: true
  IncidentYearQuarter,

  IncidentWeekDay,

  @EndUserText.label: 'Incident Time'
  IncidentTime,

  @EndUserText.label: 'Location ID'
  EHSLocationID,

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

  Plant,
  Country,
  Region,

  IncidentMajorRootCause,

  IncidentReleaseType,
  IncidentReleaseSize,

  @EndUserText.label: 'Number of Release-Related Cases'
  NumberOfReleaseCases

}

where
  IncidentCategory = '001'
```
