---
name: I_MTMADJUSTMENTTYPE
description: "Mark To Market Adjustment Type"
app_component: LO-CMM-BF
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MTMADJUSTMENTTYPE')/$value
semantic_en: "Mark To Market Adjustment Type"
semantic_vi: "MtM Adjustment Type — CDS view giao diện dựa trên dd07l."
keywords:
  - "mtm"
  - "adjustment"
  - "type"
tags:
  - LO
  - component:LO-CMM-BF
  - interface-view
  - LO-CMM
  - LO-CMM-BF
  - lob:logistics general
  - lob:sourcing & procurement
---
# I_MTMADJUSTMENTTYPE

**Mark To Market Adjustment Type**

| Property | Value |
|---|---|
| App Component | `LO-CMM-BF` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MTMADJUSTMENTTYPE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MTMAdjustmentType` | ✓ | |  | `cast ( substring( domvalue_l, 1, 2 ) as cmm_vlogp_adjustment_type)` | `CHAR(2)` | Type of adjustment for the MtM or TPL calculation |
| `_MtmAdjustmentTypeT` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_MtmAdjustmentTypeT` | `I_MtmAdjustmentTypeT` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MTMADJUSTMENTTYPE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MTMADJUSTMENTTYPE')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IMTMADJTY'
@AbapCatalog.preserveKey:true
@AbapCatalog.compiler.compareFilter:true
@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true }
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.representativeKey: 'MTMAdjustmentType'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType: #BASIC
@EndUserText.label: 'MtM Adjustment Type'
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION]
@Metadata.ignorePropagatedAnnotations:true

define view I_MtmAdjustmentType
  as select from dd07l
  association [0..*] to I_MtmAdjustmentTypeT as _MtmAdjustmentTypeT on $projection.MTMAdjustmentType = _MtmAdjustmentTypeT.MTMAdjustmentType
{
      @ObjectModel.text.association: '_MtmAdjustmentTypeT'
  key cast ( substring( domvalue_l, 1, 2 ) as cmm_vlogp_adjustment_type) as MTMAdjustmentType,
      _MtmAdjustmentTypeT
}
where
      dd07l.domname  = 'CMM_VLOGP_ADJUSTMENT_TYPE'
  and dd07l.as4local = 'A'
```
