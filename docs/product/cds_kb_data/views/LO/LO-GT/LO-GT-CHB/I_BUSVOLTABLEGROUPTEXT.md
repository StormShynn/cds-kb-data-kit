---
name: I_BUSVOLTABLEGROUPTEXT
description: "This CDS view exposes fixed values of the Business Volume Table Group field. This is a customizing table, values to be input by the user."
app_component: LO-GT-CHB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUSVOLTABLEGROUPTEXT')/$value
semantic_en: "This CDS view exposes fixed values of the Business Volume Table Group field. This is a customizing table, values to be input by the user."
semantic_vi: "Business Volume Table Group - Text — CDS view cơ bản dựa trên wb2_c_bvtab_grpt."
keywords:
  - "business"
  - "volume"
  - "table"
  - "group"
  - "text"
  - "language"
  - "desc"
tags:
  - LO
  - bo:companycode
  - component:LO-GT-CHB
  - interface-view
  - LO-GT
  - LO-GT-CHB
  - lob:logistics general
---
# I_BUSVOLTABLEGROUPTEXT

**This CDS view exposes fixed values of the Business Volume Table Group field. This is a customizing table, values to be input by the user.**

| Property | Value |
|---|---|
| App Component | `LO-GT-CHB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUSVOLTABLEGROUPTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `BusVolTableGroup` | ✓ | |  | `bvtab_group` | `CHAR(4)` | Business Volume Table Group |
| `BusVolTableGroupDesc` |  | |  | `text` | `CHAR(40)` | Description for Business Volume Table Group |
| `_BusVolTableGroup` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BusVolTableGroup` | `I_BusVolTableGroup` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUSVOLTABLEGROUPTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUSVOLTABLEGROUPTEXT')/$value)*

```abap
@AbapCatalog: {
  sqlViewName: 'IBUSVOLTABGRPT',
  compiler.compareFilter: true,
  buffering: {
     status: #ACTIVE,
     type: #GENERIC,
     numberOfKeyFields: 002
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
   dataCategory: #TEXT,
   modelingPattern:        #LANGUAGE_DEPENDENT_TEXT,
   supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE],
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
    internalName: #LOCAL
}   
@EndUserText.label: 'Business Volume Table Group - Text'
@Metadata.ignorePropagatedAnnotations: true

define view I_BusVolTableGroupText
as select from 
wb2_c_bvtab_grpt 
association[0..1] to I_BusVolTableGroup    as _BusVolTableGroup   on $projection.BusVolTableGroup  = _BusVolTableGroup.BusVolTableGroup
association[0..1] to I_Language                as _Language           on $projection.Language = _Language.Language 
{
     
    @ObjectModel.foreignKey.association: '_Language'
    @Semantics.language: true
key spras as Language,

    @ObjectModel.foreignKey.association: '_BusVolTableGroup'
key bvtab_group as BusVolTableGroup,
    
    @Semantics.text: true
    text as BusVolTableGroupDesc,

    //Associations
    _BusVolTableGroup,
    _Language 
  
}
```
