---
name: I_TRANSPORDSTGEINVCGCARRLVL
description: "Transpordstgeinvcgcarrlvl"
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
# I_TRANSPORDSTGEINVCGCARRLVL

**Transpordstgeinvcgcarrlvl**

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
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_Text` | | ✓ | | | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@Analytics.internalName: #LOCAL
@Consumption.ranked: true
@EndUserText.label: 'Transp Order Stage Invcg Carrier Level'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.sapObjectNodeType.name: 'TranspOrdStgeInvcgCarrLvl'
@ObjectModel.representativeKey: 'TranspOrdStgeInvcgCarrLvl'
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION,
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #SEARCHABLE_ENTITY,
                                     #SQL_DATA_SOURCE,
                                     #VALUE_HELP_PROVIDER]
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #META
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.resultSet.sizeCategory: #XS
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC

define root view entity I_TranspOrdStgeInvcgCarrLvl
  as select from dd07l
  composition [0..*] of I_TranspOrdStgeInvcgCarrLvlT as _Text
{

      @ObjectModel.text.association: '_Text'
  key cast(substring(domvalue_l, 1, 2) as /scmtms/stg_pymt_ind preserving type) as TranspOrdStgeInvcgCarrLvl,
      
      @Analytics.hidden: true
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      @Search.fuzzinessThreshold: 0.8
      dd07l.domvalue_l                                                              as DomainValue,

      /* Associations */
      _Text
}
where
      domname  = '/SCMTMS/STG_PYMT_IND'
  and as4local = 'A'
```
