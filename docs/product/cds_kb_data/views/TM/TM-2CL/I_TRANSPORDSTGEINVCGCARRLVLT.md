---
name: I_TRANSPORDSTGEINVCGCARRLVLT
description: "Transpordstgeinvcgcarrlvlt"
app_component: TM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - TM
  - interface-view
  - component:TM-2CL
  - lob:Other
---
# I_TRANSPORDSTGEINVCGCARRLVLT

**Transpordstgeinvcgcarrlvlt**

| Property | Value |
|---|---|
| App Component | `TM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TranspOrdStgeInvcgCarrLvl` | ✓ | |  | `cast(substring(domvalue_l, 1, 2) as /scmtms/stg_pymt_ind preserving type)` |  |  |
| `Language` | ✓ | |  | `ddlanguage` |  |  |
| `TranspOrdStgeInvcgCarrLvlDesc` |  | |  | `cast(ddtext as /scmtms/vdm_stg_inv_car_l_desc preserving type)` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_Language` | | ✓ | | | | |
| `_TranspOrdStgeInvcgCarrLvl` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Transp Ord Stg Invcg Carrier Lvl - Text'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.representativeKey: 'TranspOrdStgeInvcgCarrLvl'
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
define view entity I_TranspOrdStgeInvcgCarrLvlT
  as select from dd07t
  association        to parent I_TranspOrdStgeInvcgCarrLvl as _TranspOrdStgeInvcgCarrLvl on $projection.TranspOrdStgeInvcgCarrLvl = _TranspOrdStgeInvcgCarrLvl.TranspOrdStgeInvcgCarrLvl
  association [0..1] to I_Language                         as _Language                  on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_TranspOrdStgeInvcgCarrLvl'
  key cast(substring(domvalue_l, 1, 2) as /scmtms/stg_pymt_ind  preserving type) as TranspOrdStgeInvcgCarrLvl,

      @Semantics.language
      @ObjectModel.foreignKey.association: '_Language'
  key ddlanguage                                                                 as Language,

      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      cast(ddtext as /scmtms/vdm_stg_inv_car_l_desc preserving type)             as TranspOrdStgeInvcgCarrLvlDesc,

      @Analytics.hidden: true
      @Consumption.hidden: true
      dd07t.domvalue_l                                                           as DomainValue,

      /* Associations */
      _TranspOrdStgeInvcgCarrLvl,
      _Language
}
where
      domname  = '/SCMTMS/STG_PYMT_IND'
  and as4local = 'A'
```
