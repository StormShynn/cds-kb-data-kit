---
name: I_SALESDELIVDATECATEGORYTEXT
description: "Salesdelivdatecategorytext"
app_component: SD-SLS-OA-SCH-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
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
