---
name: I_BR_CTEPARTNERSERVICETAKERT
description: "BR Ctepartnerservicetakert"
app_component: FI-LOC-LO-BR
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-LOC
  - FI-LOC-LO
  - interface-view
  - service
  - partner
  - component:FI-LOC-LO-BR
  - lob:Finance
---
# I_BR_CTEPARTNERSERVICETAKERT

**BR Ctepartnerservicetakert**

| Property | Value |
|---|---|
| App Component | `FI-LOC-LO-BR` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `cast( ddlanguage as spras preserving type)` |  |  |
| `BR_CTePartnerServiceTaker` | ✓ | |  | `cast ( cast ( substring( domvalue_l, 1, 1 ) as abap.char( 1 ) ) as logbr_srv_taker_cte preserving type)` |  |  |
| `BR_CTePartnerServiceTakerDesc` |  | |  | `cast ( ddtext as logbr_srv_taker_cte_descr preserving type )` |  |  |
| `_BR_CTePartnerServiceTaker` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BR_CTePartnerServiceTaker` | `I_BR_CTePartnerServiceTaker` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Brazil CT-e Partner Service Taker - Text'
@ObjectModel.dataCategory: #TEXT
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IBRCTEPARSRVTAKT'
@ObjectModel.representativeKey: 'BR_CTePartnerServiceTaker'
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,#CDS_MODELING_DATA_SOURCE]
@AbapCatalog.preserveKey:true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl.authorizationCheck: #CHECK
@AbapCatalog.compiler.compareFilter: true
@Metadata.ignorePropagatedAnnotations: true


define view I_BR_CTePartnerServiceTakerT as select from dd07t
  association [1..1] to I_BR_CTePartnerServiceTaker as _BR_CTePartnerServiceTaker on $projection.BR_CTePartnerServiceTaker = _BR_CTePartnerServiceTaker.BR_CTePartnerServiceTaker
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
  @Semantics.language
  key cast( ddlanguage as spras preserving type) as Language,
  @ObjectModel.foreignKey.association: '_BR_CTePartnerServiceTaker'
  key cast ( cast ( substring( domvalue_l, 1, 1 ) as abap.char( 1 ) ) as logbr_srv_taker_cte preserving type) as BR_CTePartnerServiceTaker,
  @Semantics.text
  cast ( ddtext as logbr_srv_taker_cte_descr preserving type ) as BR_CTePartnerServiceTakerDesc,
  @ObjectModel.association.type: [#TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT]
  _BR_CTePartnerServiceTaker, 
  _Language
}
where domname = 'J_1BCTE_SERVICE_TAKER' and as4local = 'A'
```
