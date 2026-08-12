---
name: I_BR_CTEPARTNERSERVICETAKER
description: "BR Ctepartnerservicetaker"
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
# I_BR_CTEPARTNERSERVICETAKER

**BR Ctepartnerservicetaker**

| Property | Value |
|---|---|
| App Component | `FI-LOC-LO-BR` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BR_CTePartnerServiceTaker` | ✓ | |  | `cast ( cast ( substring( domvalue_l, 1, 1 ) as abap.char( 1 ) ) as logbr_srv_taker_cte preserving type)` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BR_CTePartnerServiceTakerT` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Brazil CT-e Partner Service Taker'
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IBRCTEPARTSRVTAK'
@ObjectModel.representativeKey: 'BR_CTePartnerServiceTaker'
@ObjectModel.compositionRoot: true
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.resultSet.sizeCategory: #XS
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,#CDS_MODELING_DATA_SOURCE]
@AbapCatalog.preserveKey:true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl.authorizationCheck: #CHECK
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.compiler.compareFilter: true
@Metadata.ignorePropagatedAnnotations: true

define view I_BR_CTePartnerServiceTaker as select from dd07l
  association [0..*] to I_BR_CTePartnerServiceTakerT as _Text on $projection.BR_CTePartnerServiceTaker = _Text.BR_CTePartnerServiceTaker
{
  @ObjectModel.text.association: '_Text'
  key cast ( cast ( substring( domvalue_l, 1, 1 ) as abap.char( 1 ) ) as logbr_srv_taker_cte preserving type) as BR_CTePartnerServiceTaker,
  @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
  _Text
}
where domname = 'J_1BCTE_SERVICE_TAKER' and as4local = 'A'
```
