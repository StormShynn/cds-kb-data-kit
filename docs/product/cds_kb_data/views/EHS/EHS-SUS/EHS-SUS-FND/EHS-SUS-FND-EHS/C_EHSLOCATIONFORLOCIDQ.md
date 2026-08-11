---
name: C_EHSLOCATIONFORLOCIDQ
description: "This CDS view retrieves and counts the number of task instances. It allows filtering by task characteristics and by related objects, such as location, compliance scenario, incident, deviation incident and compliance requirement. This CDS view provides the data to answer the following business questions: What data is available for tasks and related objects, such as location, compliance requirement, scenario, and others? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: EHS-SUS-FND-EHS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EHSLOCATIONFORLOCIDQ')/$value
semantic_en: "This CDS view retrieves and counts the number of task instances. It allows filtering by task characteristics and by related objects, such as location, compliance scenario, incident, deviation incident and compliance requirement. This CDS view provides the data to answer the following business questions: What data is available for tasks and related objects, such as location, compliance requirement, scenario, and others? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "EHS Locations - Query — CDS view tiêu dùng dựa trên EHS Locations - Query."
keywords:
  - "ehs"
  - "locations"
  - "query"
  - "location"
  - "revision"
  - "date"
  - "name"
  - "start"
  - "type"
tags:
  - EHS
  - bo:companycode
  - component:EHS-SUS-FND-EHS
  - consumption-view
  - EHS-SUS
  - EHS-SUS-FND
  - EHS-SUS-FND-EHS
  - task
---
# C_EHSLOCATIONFORLOCIDQ

**This CDS view retrieves and counts the number of task instances. It allows filtering by task characteristics and by related objects, such as location, compliance scenario, incident, deviation incident and compliance requirement. This CDS view provides the data to answer the following business questions: What data is available for tasks and related objects, such as location, compliance requirement, scenario, and others? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-FND-EHS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EHSLOCATIONFORLOCIDQ')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EHSLocationUUID` |  | |  |  | `RAW(16)` | EHS Location - Root UUID |
| `RevisionEndDate` |  | |  |  | `DATS(8)` | Revision End Date |
| `EHSLocationName` |  | |  |  | `CHAR(60)` | Location |
| `RevisionStartDate` |  | |  |  | `DATS(8)` | Revision Start Date |
| `EHSLocationType` |  | |  |  | `CHAR(21)` | Location Type |
| `EHSLocationTypeText` |  | |  |  | `CHAR(40)` | Location Type Name |
| `EHSLocationStatus` |  | |  |  | `CHAR(2)` | Location Status |
| `Plant` |  | |  |  | `CHAR(4)` | Plant ID |
| `PlantName` |  | |  |  | `CHAR(30)` | Plant Name |
| `Country` |  | |  |  | `CHAR(3)` | Country/Region |
| `Region` |  | |  |  | `CHAR(3)` | Region |
| `EHSLocationID` |  | |  |  | `CHAR(20)` | Location ID |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `BusinessArea` |  | |  |  | `CHAR(4)` | Business Area |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `NumberOfLocations` |  | |  |  | `INT4(10)` | Number of Locations |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EHSLOCATIONFORLOCIDQ')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EHSLOCATIONFORLOCIDQ')/$value)*

```abap
@EndUserText.label: 'EHS Locations - Query'
@VDM.viewType: #CONSUMPTION

@AccessControl.authorizationCheck: #NOT_ALLOWED
@AccessControl.personalData.blocking: #REQUIRED

@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #ANALYTICAL_QUERY
@ObjectModel.supportedCapabilities: [#ANALYTICAL_QUERY]

@ObjectModel.usageType:{ serviceQuality: #D,        
                         sizeCategory:  #L,         
                         dataClass: #MIXED }

define transient view entity C_EHSLocationForLocIDQ
  provider contract analytical_query  
  with parameters
    @Consumption.hidden: true
    @Environment.systemField: #SYSTEM_DATE
    P_Date       : sydatum,

    @Consumption.hidden: true
    @Environment.systemField: #SYSTEM_LANGUAGE
    P_Language   : sylangu, 
  
    @EndUserText.label: 'Location'
    @Consumption.derivation: {
       lookupEntity: 'C_EHSMyLocation',
       resultElement: 'EHSLocationID' }        
    @Consumption.valueHelpDefinition: [{ entity.name: 'C_EHSLocationIdentifierVH', entity.element: 'EHSLocationID' }]
    P_EHSLocID   : ehfnd_loc_id,
    
    @Consumption.hidden: true
    @Consumption.derivation: {
        lookupEntity : 'I_EHSLtstLocHierarchyRevision',
        resultElement : 'EHSLocHierarchyUUID'
    }
    P_EHSLocHierarchyUUID : ehfnd_conf_key    

  as projection on I_EHSLocationForLocIDC
                   ( P_Date: $parameters.P_Date, P_Language: $parameters.P_Language )
{
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
    RevisionEndDate,
    
    EHSLocationName,
    
    RevisionStartDate,
   
    EHSLocationType,
    EHSLocationTypeText,
   
    EHSLocationStatus,

    Plant,
    PlantName,
    Country,
    Region,
   
    EHSLocationID,

    CompanyCode,
    BusinessArea,
    CostCenter,
    
    NumberOfLocations
}
```
