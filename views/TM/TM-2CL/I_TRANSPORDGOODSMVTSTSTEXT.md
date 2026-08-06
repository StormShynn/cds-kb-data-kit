---
name: I_TRANSPORDGOODSMVTSTSTEXT
description: Transpordgoodsmvtststext
app_component: TM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - TM
  - interface-view
  - text-view
  - text
  - component:TM-2CL
  - lob:Other
---
# I_TRANSPORDGOODSMVTSTSTEXT

**Transpordgoodsmvtststext**

| Property | Value |
|---|---|
| App Component | `TM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `TranspOrdGoodsMovementStatus` | `cast(substring(domvalue_l, 1, 1) as /scmtms/vdm_dlv_goods_mvt_sts preserving type)` |
| key `Language` | `ddlanguage` |
| `TranspOrdGoodsMvtStatusDesc` | `cast(ddtext as /scmtms/vdm_goodsmvmt_sts_desc preserving type)` |
| `DomainValue` | `dd07t.domvalue_l` |
| `_Language` | *Association* |
| `_TranspOrdGoodsMvtStatus` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Transp Ord Goods Movement Status - Text'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.representativeKey: 'TranspOrdGoodsMovementStatus'
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #LANGUAGE_DEPENDENT_TEXT,
                                     #SEARCHABLE_ENTITY,
                                     #SQL_DATA_SOURCE]
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC

define view entity I_TranspOrdGoodsMvtStsText
  as select from dd07t

  association        to parent I_TranspOrdGoodsMvtStatus as _TranspOrdGoodsMvtStatus on $projection.TranspOrdGoodsMovementStatus = _TranspOrdGoodsMvtStatus.TranspOrdGoodsMovementStatus
  association [0..1] to I_Language                       as _Language                on $projection.Language = _Language.Language

{
      @ObjectModel.foreignKey.association: '_TranspOrdGoodsMvtStatus'
  key cast(substring(domvalue_l, 1, 1) as /scmtms/vdm_dlv_goods_mvt_sts preserving type) as TranspOrdGoodsMovementStatus,
      @Semantics.language
      @ObjectModel.foreignKey.association: '_Language'
  key ddlanguage                                                                         as Language,

      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      cast(ddtext as /scmtms/vdm_goodsmvmt_sts_desc preserving type)                     as TranspOrdGoodsMvtStatusDesc,

      @Analytics.hidden: true
      @Consumption.hidden: true
      dd07t.domvalue_l                                                                   as DomainValue,

      /* Associations */
      _TranspOrdGoodsMvtStatus,
      _Language
}
where
      domname  = '/SCMTMS/DLV_GOODS_MOVEM_STATUS'
  and as4local = 'A';
```
