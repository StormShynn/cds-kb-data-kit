---
name: I_SECURITYCLASSSECONDARYINDEX
description: "Securityclasssecondaryindex"
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-FSCM
  - FIN-FSCM-TRM
  - interface-view
  - data-extraction
  - component:FIN-FSCM-TRM-2CL
  - lob:Other
---
# I_SECURITYCLASSSECONDARYINDEX

**Securityclasssecondaryindex**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SecurityClass` | ✓ | |  | `cast(SecurityClSecondaryIndex.ranl as ftr_gen_security_class preserving type )` |  |  |
| `ScrtyClSecondaryIndexNumber` | ✓ | |  | `cast(SecurityClSecondaryIndex.vvranlwi as ftr_sc_secdry_idx_number preserving type )` |  |  |
| `ScrtyClSecdryIdxValIdentifier` |  | |  | `cast(SecurityClSecondaryIndex.vvranlwx as ftr_sc_secondary_ind_value preserving type )` |  |  |
| `_SecurityClass` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SecurityClass` | `I_SecurityClass` | [1..1] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Security Class Secondary Index'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,#CDS_MODELING_ASSOCIATION_TARGET,#SQL_DATA_SOURCE,#SEARCHABLE_ENTITY]
@ObjectModel.modelingPattern: #NONE
@ObjectModel.usageType:{
  serviceQuality: #A,
  sizeCategory: #M,
  dataClass: #MASTER
}
@Analytics.technicalName: 'ISCRTYClSECDRYIDX'
@VDM.viewType: #BASIC
define view entity I_SecurityClassSecondaryIndex
  as select from twx2 as SecurityClSecondaryIndex

  association [1..1] to I_SecurityClass as _SecurityClass on $projection.SecurityClass = _SecurityClass.SecurityClass

{
  key cast(SecurityClSecondaryIndex.ranl as ftr_gen_security_class preserving type )         as SecurityClass,
  key cast(SecurityClSecondaryIndex.vvranlwi as ftr_sc_secdry_idx_number preserving type )   as ScrtyClSecondaryIndexNumber,
      cast(SecurityClSecondaryIndex.vvranlwx as ftr_sc_secondary_ind_value preserving type ) as ScrtyClSecdryIdxValIdentifier,

      _SecurityClass
}
```
