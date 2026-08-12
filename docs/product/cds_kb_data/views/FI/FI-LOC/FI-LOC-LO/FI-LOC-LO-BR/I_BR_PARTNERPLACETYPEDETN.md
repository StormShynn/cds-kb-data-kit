---
name: I_BR_PARTNERPLACETYPEDETN
description: "BR Partnerplacetypedetn"
app_component: FI-LOC-LO-BR
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
  - FI
  - FI-LOC
  - FI-LOC-LO
  - interface-view
  - partner
  - component:FI-LOC-LO-BR
  - lob:Finance
---
# I_BR_PARTNERPLACETYPEDETN

**BR Partnerplacetypedetn**

| Property | Value |
|---|---|
| App Component | `FI-LOC-LO-BR` |
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
| `BR_NFType` | ✓ | |  | `cast( PartnerPlaceMap.nfe_type as logbr_nftype preserving type )` |  |  |
| `BR_NFPartnerPlaceType` | ✓ | |  | `cast( PartnerPlaceMap.partner_role as logbr_part_role preserving type )` |  |  |
| `BR_NFPartnerFunction` |  | |  | `cast( PartnerPlaceMap.parvw as logbr_parvw preserving type )` |  |  |
| `_BR_NFPartnerPlaceType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BR_NFPartnerPlaceType` | `I_BR_PartnerPlaceType` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IBRPARTPLACEDETN'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Brazil Partner Place Type Detn'
@VDM.viewType: #BASIC
@ObjectModel.usageType.dataClass: #ORGANIZATIONAL
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,#CDS_MODELING_DATA_SOURCE]
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.personalData.blocking: #NOT_REQUIRED
@AbapCatalog.preserveKey:true
@Metadata.ignorePropagatedAnnotations:true
define view I_BR_PartnerPlaceTypeDetn
  as select from j_1bnfe_par_map as PartnerPlaceMap
  association [0..1] to I_BR_PartnerPlaceType as _BR_NFPartnerPlaceType on $projection.BR_NFPartnerPlaceType = _BR_NFPartnerPlaceType.BR_NFPartnerPlaceType
{

  key cast( PartnerPlaceMap.nfe_type     as logbr_nftype    preserving type ) as BR_NFType,
      @ObjectModel.foreignKey.association: '_BR_NFPartnerPlaceType'
  key cast( PartnerPlaceMap.partner_role as logbr_part_role preserving type ) as BR_NFPartnerPlaceType,
      cast( PartnerPlaceMap.parvw        as logbr_parvw     preserving type ) as BR_NFPartnerFunction,

      _BR_NFPartnerPlaceType
}
```
