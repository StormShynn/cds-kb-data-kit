---
name: I_RESPACEGROUPUSAGETYPE
description: "Real Estate Space Group Usage Type"
app_component: RE-FX-IP-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RESPACEGROUPUSAGETYPE')/$value
semantic_en: "Real Estate Space Group Usage Type"
semantic_vi: "Real Estate Space Group Usage Type — CDS view giao diện dựa trên tivipsgusagetype."
keywords:
  - "real"
  - "estate"
  - "space"
  - "group"
  - "usage"
  - "type"
  - "enable"
  - "occupancy"
  - "occpcy"
  - "cost"
  - "object"
tags:
  - RE
  - component:RE-FX-IP-2CL
  - interface-view
  - RE-FX
  - RE-FX-IP
  - RE-FX-IP-2CL
  - bo:project
---
# I_RESPACEGROUPUSAGETYPE

**Real Estate Space Group Usage Type**

| Property | Value |
|---|---|
| App Component | `RE-FX-IP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RESPACEGROUPUSAGETYPE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `RESpaceGroupUsageType` | ✓ | |  | `iosgusagetype` | `CHAR(4)` | Group Usage Type |
| `REIsUseEnableUsageType` |  | |  | `isenableusagetype` | `CHAR(1)` | Usage Enablement Type Indicator |
| `REIsOccupancyUsageType` |  | |  | `isoccupancyusagetype` | `CHAR(1)` | Occupancy Usage Type Indicator |
| `REHasOccpcyUsageTypeCostObject` |  | |  | `hasoccpcyusagetypecostobj` | `CHAR(1)` | Occupancy Usage Type Has Cost Object Indicator |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_RESpaceGroupUsageTypeText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RESPACEGROUPUSAGETYPE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RESPACEGROUPUSAGETYPE')/$value)*

```abap
@EndUserText.label: 'Real Estate Space Group Usage Type'
@AbapCatalog.sqlViewName: 'IRESPGRPUSATYP'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.representativeKey: 'RESpaceGroupUsageType'
@ObjectModel.semanticKey: ['RESpaceGroupUsageType' ]
//@ClientDependent: true
@VDM.viewType: #BASIC
@Search.searchable: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.preserveKey:true

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.supportedCapabilities:  [  #ANALYTICAL_DIMENSION,
                                        #CDS_MODELING_ASSOCIATION_TARGET,
                                        #SQL_DATA_SOURCE,
                                        #CDS_MODELING_DATA_SOURCE,
                                        #EXTRACTION_DATA_SOURCE,
                                        #SEARCHABLE_ENTITY      ]

@Analytics:{
    dataExtraction: {
        enabled: true
    }
}

define view I_RESpaceGroupUsageType
  as select from tivipsgusagetype
  association [0..*] to I_RESpaceGroupUsageTypeText as _Text on $projection.RESpaceGroupUsageType = _Text.RESpaceGroupUsageType
{
      @ObjectModel.text.association: '_Text'
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
  key iosgusagetype             as RESpaceGroupUsageType,
      isenableusagetype         as REIsUseEnableUsageType,
      isoccupancyusagetype      as REIsOccupancyUsageType,
      hasoccpcyusagetypecostobj as REHasOccpcyUsageTypeCostObject,
      
      _Text
}
```
