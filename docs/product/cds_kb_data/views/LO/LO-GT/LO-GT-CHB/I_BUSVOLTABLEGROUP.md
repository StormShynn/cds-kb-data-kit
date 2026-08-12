---
name: I_BUSVOLTABLEGROUP
description: "This CDS view exposes fixed values of the Business Volume Table Group field. This is a customizing table, values to be input by the user."
app_component: LO-GT-CHB
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
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
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
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
