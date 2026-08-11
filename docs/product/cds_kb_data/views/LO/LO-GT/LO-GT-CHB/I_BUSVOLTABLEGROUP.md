---
name: I_BUSVOLTABLEGROUP
description: "This CDS view exposes fixed values of the Business Volume Table Group field. This is a customizing table, values to be input by the user."
app_component: LO-GT-CHB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUSVOLTABLEGROUP')/$value
semantic_en: "This CDS view exposes fixed values of the Business Volume Table Group field. This is a customizing table, values to be input by the user."
semantic_vi: "Business Volume Table Group — CDS view cơ bản dựa trên wb2_c_bvtab_grp."
keywords:
  - "business"
  - "volume"
  - "table"
  - "group"
tags:
  - LO
  - bo:companycode
  - component:LO-GT-CHB
  - interface-view
  - LO-GT
  - LO-GT-CHB
  - lob:logistics general
---
# I_BUSVOLTABLEGROUP

**This CDS view exposes fixed values of the Business Volume Table Group field. This is a customizing table, values to be input by the user.**

| Property | Value |
|---|---|
| App Component | `LO-GT-CHB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUSVOLTABLEGROUP')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BusVolTableGroup` | ✓ | |  | `bvtab_group` | `CHAR(4)` | Business Volume Table Group |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BusVolTableGroupText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUSVOLTABLEGROUP')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUSVOLTABLEGROUP')/$value)*

```abap
@AbapCatalog: {
  sqlViewName: 'IBUSVOLTABGRP',
  compiler.compareFilter: true,
  buffering: {
     status: #ACTIVE,
     type: #GENERIC,
     numberOfKeyFields: 001
  },
  preserveKey: true
}
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
} 
@AccessControl: { 
  authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: { 
   representativeKey: 'BusVolTableGroup',
   modelingPattern: #ANALYTICAL_DIMENSION,
   supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE],
   usageType: {
     dataClass:      #CUSTOMIZING,
     serviceQuality: #A,
     sizeCategory:   #S
   }
}
@ClientHandling: {
     type: #INHERITED,
     algorithm: #SESSION_VARIABLE
}
@Analytics: {
    dataCategory: #DIMENSION,
    dataExtraction.enabled: false,
    internalName: #LOCAL
}   
@EndUserText.label: 'Business Volume Table Group'
@Metadata.ignorePropagatedAnnotations: true

define view I_BusVolTableGroup 
as select from 
wb2_c_bvtab_grp 
association[0..*] to I_BusVolTableGroupText as _Text on $projection.BusVolTableGroup  = _Text.BusVolTableGroup
{

    @ObjectModel.text.association: '_Text'
    key bvtab_group                                   as BusVolTableGroup,
    //Associations
    _Text
}
```
