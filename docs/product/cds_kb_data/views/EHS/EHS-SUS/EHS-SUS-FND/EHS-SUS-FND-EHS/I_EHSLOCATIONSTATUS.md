---
name: I_EHSLOCATIONSTATUS
description: "This CDS view retrieves the status of locations in the system. Each location is always in a specific status such as new, active, inactive, or historical. This CDS view provides the data to answer the following business questions: What are the possible statuses for a location in the system? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: EHS-SUS-FND-EHS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSLOCATIONSTATUS')/$value
semantic_en: "This CDS view retrieves the status of locations in the system. Each location is always in a specific status such as new, active, inactive, or historical. This CDS view provides the data to answer the following business questions: What are the possible statuses for a location in the system? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "EHS Location Status — CDS view giao diện dựa trên dd07l."
keywords:
  - "ehs"
  - "location"
  - "status"
tags:
  - EHS
  - bo:companycode
  - component:EHS-SUS-FND-EHS
  - EHS-SUS
  - EHS-SUS-FND
  - EHS-SUS-FND-EHS
  - interface-view
---
# I_EHSLOCATIONSTATUS

**This CDS view retrieves the status of locations in the system. Each location is always in a specific status such as new, active, inactive, or historical. This CDS view provides the data to answer the following business questions: What are the possible statuses for a location in the system? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-FND-EHS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSLOCATIONSTATUS')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EHSLocationStatus` | ✓ | |  | `cast( domvalue_l as ehfnd_loc_status_nc )` | `CHAR(2)` | Location Status |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_EHSLocationStatusText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSLOCATIONSTATUS')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSLOCATIONSTATUS')/$value)*

```abap
@EndUserText.label: 'EHS Location Status'
@Analytics: { dataCategory:#DIMENSION , dataExtraction.enabled:true }
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@AbapCatalog: { sqlViewName: 'ILOCSTATUS',
                compiler.compareFilter: true,
                buffering: { type: #FULL,
                             status: #ACTIVE } }

// Client handling by session
@ClientHandling.algorithm: #SESSION_VARIABLE

// used for BOBF Master Data Object
@ObjectModel: { sapObjectNodeType.name: 'EHSLocationStatus',
                representativeKey: 'EHSLocationStatus',
                resultSet.sizeCategory: #XS,
                supportedCapabilities: [ #EXTRACTION_DATA_SOURCE, #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET ],
                modelingPattern: #NONE,
                usageType:{ serviceQuality: #A,
                            sizeCategory:  #S,
                            dataClass: #META } }

@Metadata.ignorePropagatedAnnotations: true

define view I_EHSLocationStatus
  as select from dd07l
  association [0..*] to I_EHSLocationStatusText as _Text on $projection.EHSLocationStatus = _Text.EHSLocationStatus
{
      @ObjectModel.text.association: '_Text'
  key cast( domvalue_l as ehfnd_loc_status_nc ) as EHSLocationStatus,
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _Text
}
where
      dd07l.domname  = 'EHFND_LOC_STATUS'
  and dd07l.as4local = 'A'
```
