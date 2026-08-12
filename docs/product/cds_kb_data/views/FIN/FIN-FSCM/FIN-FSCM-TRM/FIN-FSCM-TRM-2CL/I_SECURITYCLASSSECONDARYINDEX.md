---
name: I_SECURITYCLASSSECONDARYINDEX
description: "Securityclasssecondaryindex"
app_component: FIN-FSCM-TRM-2CL
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
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
