---
name: I_MTMADJUSTMENTTYPET
description: "Mark To Market Adjustment Type Name - Text"
app_component: LO-CMM-BF
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MTMADJUSTMENTTYPET')/$value
semantic_en: "Mark To Market Adjustment Type Name - Text"
semantic_vi: "MtM Adjustment Type Name - Text — CDS view giao diện dựa trên dd07t."
keywords:
  - "mtm"
  - "adjustment"
  - "type"
  - "name"
  - "text"
  - "language"
tags:
  - LO
  - component:LO-CMM-BF
  - interface-view
  - LO-CMM
  - LO-CMM-BF
  - lob:logistics general
  - lob:sourcing & procurement
---
# I_MTMADJUSTMENTTYPET

**Mark To Market Adjustment Type Name - Text**

| Property | Value |
|---|---|
| App Component | `LO-CMM-BF` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MTMADJUSTMENTTYPET')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MTMAdjustmentType` | ✓ | |  | `cast ( substring( domvalue_l, 1, 2 ) as cmm_vlogp_adjustment_type)` | `CHAR(2)` | Type of adjustment for the MtM or TPL calculation |
| `Language` | ✓ | |  | `ddlanguage` | `LANG(1)` | Language Key |
| `MTMAdjustmentTypeName` |  | |  | `ddtext` | `CHAR(60)` | Short Text for Fixed Values |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MTMADJUSTMENTTYPET')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MTMADJUSTMENTTYPET')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IMTMADJTYT'
@Metadata.ignorePropagatedAnnotations:true 
@AbapCatalog.preserveKey:true
@AbapCatalog.compiler.compareFilter:true
@Analytics: { dataExtraction.enabled: true }
@ClientHandling.algorithm: #SESSION_VARIABLE 
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'MTMAdjustmentType'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType: #BASIC
@EndUserText.label: 'MtM Adjustment Type Name - Text'
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE]

define view I_MtmAdjustmentTypeT
  as select from dd07t
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
  key cast ( substring( domvalue_l, 1, 2 ) as cmm_vlogp_adjustment_type) as MTMAdjustmentType,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key ddlanguage                                                         as Language,
      _Language,
      @Semantics.text: true
      dd07t.ddtext                                                       as MTMAdjustmentTypeName
}
where
      dd07t.domname  = 'CMM_VLOGP_ADJUSTMENT_TYPE'
  and dd07t.as4local = 'A'
```
