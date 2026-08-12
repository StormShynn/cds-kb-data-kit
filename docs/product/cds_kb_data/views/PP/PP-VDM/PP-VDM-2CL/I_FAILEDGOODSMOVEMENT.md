---
name: I_FAILEDGOODSMOVEMENT
description: "FAILEDGoods Movement"
app_component: PP-VDM-2CL
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
  - PP
  - PP-VDM
  - interface-view
  - component:PP-VDM-2CL
  - lob:Manufacturing
---
# I_FAILEDGOODSMOVEMENT

**FAILEDGoods Movement**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
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
| `FailedGoodsMovement` | ✓ | |  | `cast(affw.GoodsMovementException as pph_weblnr preserving type)` |  |  |
| `OrderCategory` |  | |  | `cast(affw.OrderCategory as pph_autyp preserving type)` |  |  |
| `_FailedGoodsMovementItem` | | ✓ | | | | |
| `_OrderCategory` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_FailedGoodsMovementItem` | `I_FailedGoodsMovementItem` | [1..*] |
| `_OrderCategory` | `I_OrderCategory` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@Analytics.technicalName: 'IFAILDGOODSMVT'
@Analytics.internalName: #LOCAL
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.compositionRoot: true
@ObjectModel.modelingPattern: #NONE
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, #ANALYTICAL_DIMENSION]
@ObjectModel.sapObjectNodeType.name: 'FailedGoodsMovement'
@ObjectModel.representativeKey: 'FailedGoodsMovement'
@ObjectModel.usageType: {serviceQuality: #C, sizeCategory: #XL, dataClass: #TRANSACTIONAL}
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #COMPOSITE
@EndUserText.label: 'Failed Goods Movement Header'
// View on the first key field of table AFFW -> to be used for foreign-key associations only

define view entity I_FailedGoodsMovement
  as select from I_GoodsMovementException as affw

  association [1..*] to I_FailedGoodsMovementItem as _FailedGoodsMovementItem on $projection.FailedGoodsMovement = _FailedGoodsMovementItem.FailedGoodsMovement
  association [0..1] to I_OrderCategory           as _OrderCategory           on $projection.OrderCategory = _OrderCategory.OrderCategory

{
      // Representative Key
  key cast(affw.GoodsMovementException as pph_weblnr preserving type) as FailedGoodsMovement,
  
      @ObjectModel.foreignKey.association: '_OrderCategory'
      cast(affw.OrderCategory          as pph_autyp  preserving type) as OrderCategory,
      
      // Association
      @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
      _FailedGoodsMovementItem,
      _OrderCategory
};
```
