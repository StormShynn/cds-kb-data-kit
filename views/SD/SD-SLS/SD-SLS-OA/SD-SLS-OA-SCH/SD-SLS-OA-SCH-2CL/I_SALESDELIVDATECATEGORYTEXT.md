---
name: I_SALESDELIVDATECATEGORYTEXT
description: "Salesdelivdatecategorytext"
app_component: SD-SLS-OA-SCH-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-OA
  - interface-view
  - text-view
  - text
  - component:SD-SLS-OA-SCH-2CL
  - lob:Sales & Distribution
---
# I_SALESDELIVDATECATEGORYTEXT

**Salesdelivdatecategorytext**

| Property | Value |
|---|---|
| App Component | `SD-SLS-OA-SCH-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SalesDelivDateCategory` | ✓ | |  | `substring( domvalue_l,1,1 )` |  |  |
| `Language` | ✓ | |  | `ddlanguage` |  |  |
| `SalesDelivDateCategoryName` |  | |  | `ddtext` |  |  |
| `_SalesDelivDateCategory` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SalesDelivDateCategory` | `I_SalesDelivDateCategory` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Delivery Date Category - Text'
@VDM.viewType: #BASIC
@AbapCatalog:{
  sqlViewName: 'ISDDELIVDATECATT',
  compiler.compareFilter: true
}
@ObjectModel:{
 dataCategory: #TEXT,
 representativeKey: 'SalesDelivDateCategory',
 supportedCapabilities: [#SQL_DATA_SOURCE,#EXTRACTION_DATA_SOURCE,#CDS_MODELING_DATA_SOURCE,#CDS_MODELING_ASSOCIATION_TARGET,#LANGUAGE_DEPENDENT_TEXT],
 modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
 usageType:{
   dataClass: #MIXED,
   serviceQuality: #A,
   sizeCategory: #S
 }
 }
@Analytics.dataExtraction.enabled: true
@Metadata.ignorePropagatedAnnotations:true
@AccessControl.authorizationCheck: #NOT_REQUIRED

define view I_SalesDelivDateCategoryText
  as select from dd07t
  association [0..1] to I_SalesDelivDateCategory as _SalesDelivDateCategory on $projection.SalesDelivDateCategory = _SalesDelivDateCategory.SalesDelivDateCategory
  association [0..1] to I_Language               as _Language               on $projection.Language = _Language.Language
{
  key substring( domvalue_l,1,1 ) as SalesDelivDateCategory,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key ddlanguage                  as Language,
      @Semantics.text: true
      ddtext                      as SalesDelivDateCategoryName,

      //Association
      _SalesDelivDateCategory,
      _Language
}
where
  (
    dd07t.domname  = 'PRGRS'
  )
  and(
    dd07t.as4local = 'A'
  )
```
