---
name: I_EHSLOCATIONWITHFILTER
description: "This CDS view provides a filtered view of EHS (Environment, Health, and Safety) location data based on a specific location ID parameter and the current system date. It retrieves the active revision of an EHS location by filtering on the location ID and ensuring the revision is valid for the current date. You can use it to access detailed information about EHS locations, including location type, status, authorization group, and organizational assignments such as plant, cost center, company code, and business area. This CDS view provides the data to answer the following business questions: What are the details of a specific EHS location? Which locations are assigned to a particular plant or cost center? What is the current status of locations within my authorization scope? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: EHS-SUS-FND-EHS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSLOCATIONWITHFILTER')/$value
semantic_en: "This CDS view provides a filtered view of EHS (Environment, Health, and Safety) location data based on a specific location ID parameter and the current system date. It retrieves the active revision of an EHS location by filtering on the location ID and ensuring the revision is valid for the current date. You can use it to access detailed information about EHS locations, including location type, status, authorization group, and organizational assignments such as plant, cost center, company code, and business area. This CDS view provides the data to answer the following business questions: What are the details of a specific EHS location? Which locations are assigned to a particular plant or cost center? What is the current status of locations within my authorization scope? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "EHS Location with filter — CDS view giao diện (master data) dựa trên I_EHSLocationRevision."
keywords:
  - "ehs"
  - "location"
  - "with"
  - "filter"
  - "type"
  - "status"
  - "authorization"
  - "group"
  - "plant"
tags:
  - EHS
  - bo:companycode
  - component:EHS-SUS-FND-EHS
  - EHS-SUS
  - EHS-SUS-FND
  - EHS-SUS-FND-EHS
  - interface-view
  - plan
---
# I_EHSLOCATIONWITHFILTER

**This CDS view provides a filtered view of EHS (Environment, Health, and Safety) location data based on a specific location ID parameter and the current system date. It retrieves the active revision of an EHS location by filtering on the location ID and ensuring the revision is valid for the current date. You can use it to access detailed information about EHS locations, including location type, status, authorization group, and organizational assignments such as plant, cost center, company code, and business area. This CDS view provides the data to answer the following business questions: What are the details of a specific EHS location? Which locations are assigned to a particular plant or cost center? What is the current status of locations within my authorization scope? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-FND-EHS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSLOCATIONWITHFILTER')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EHSLocationUUID` | ✓ | |  |  | `RAW(16)` | Location |
| `EHSLocationType` |  | |  |  | `CHAR(21)` | Location Type |
| `EHSLocationStatus` |  | |  |  | `CHAR(2)` | Location Status |
| `EHSLocationAuthorizationGroup` |  | |  | `cast(I_EHSLocationRevision.EHSLocationAuthorizationGroup as ehfnd_loc_auth_group_nc)` | `CHAR(21)` | Location Authorization Group |
| `Plant` |  | |  |  | `CHAR(4)` | Plant ID |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `BusinessArea` |  | |  |  | `CHAR(4)` | Business Area |
| `HierarchyNodeType` |  | |  | `'EHSLocationUUID'` | `CHAR(15)` |  |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_EHSLocationRoot` | `I_EHSLocationRoot` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSLOCATIONWITHFILTER')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSLOCATIONWITHFILTER')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IEHSLOCWFILTER'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'EHS Location with filter'
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel:{  representativeKey: 'EHSLocationUUID',
                usageType:{ serviceQuality: #C,        // < 15 msec
                            sizeCategory:  #S,         // < 100.000
                            dataClass: #MASTER } }
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE ]
@VDM.viewType: #COMPOSITE

define view I_EHSLocationWithFilter
  //with parameters P_EHSLocUUID : ehfnd_conf_key
  with parameters P_EHSLocID : ehfnd_loc_id
  
  as select from I_EHSLocationRevision
  association [1..1] to I_EHSLocationRoot      as _EHSLocationRoot      on $projection.EHSLocationUUID = _EHSLocationRoot.EHSLocationUUID
  
{
  key I_EHSLocationRevision.EHSLocationUUID,
      I_EHSLocationRevision.EHSLocationType,
      I_EHSLocationRevision.EHSLocationStatus,
      cast(I_EHSLocationRevision.EHSLocationAuthorizationGroup as ehfnd_loc_auth_group_nc) as EHSLocationAuthorizationGroup,
      I_EHSLocationRevision.Plant,
      I_EHSLocationRevision.CostCenter,
      I_EHSLocationRevision.CompanyCode,
      I_EHSLocationRevision.BusinessArea,

      //needed for hierarchy binding
      @EndUserText.label: 'Hierarchy Node Type'
      'EHSLocationUUID'  as HierarchyNodeType
}
where
      _EHSLocationRoot.EHSLocationID =  $parameters.P_EHSLocID 
  and I_EHSLocationRevision.RevisionStartDate <= $session.system_date
  and I_EHSLocationRevision.RevisionEndDate   >= $session.system_date
```
