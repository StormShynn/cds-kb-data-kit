---
name: I_CASEREASONTEXT
description: "Casereasontext"
app_component: FIN-FSCM-DM-2CL
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
  - FIN-FSCM-DM
  - interface-view
  - text-view
  - text
  - component:FIN-FSCM-DM-2CL
  - lob:Other
---
# I_CASEREASONTEXT

**Casereasontext**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-DM-2CL` |
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
| `CaseType` | ✓ | |  | `cast( case_type as scmgcase_type preserving type )` |  |  |
| `CaseReason` | ✓ | |  | `cast( reason_code as scmg_reason_code preserving type )` |  |  |
| `Language` | ✓ | |  | `langu` |  |  |
| `CaseReasonName` |  | |  | `description` |  |  |
| `_CaseType` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CaseType` | `I_CaseType` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'CaseReason'
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, 
                                     #SQL_DATA_SOURCE, 
                                     #CDS_MODELING_DATA_SOURCE, 
                                     #CDS_MODELING_ASSOCIATION_TARGET ]
@EndUserText.label: 'Case Reason - Text'
@Analytics: { dataExtraction.enabled: true }
@AbapCatalog.sqlViewName: 'ICASEREASONTEXT'
@VDM.viewType: #BASIC
//@VDM.private: false
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true
define view I_CaseReasonText
  as select from scmgattr_reasont

  association [0..1] to I_CaseType as _CaseType on $projection.CaseType = _CaseType.CaseType
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_CaseType'
  key cast( case_type as scmgcase_type preserving type )      as CaseType,
  key cast( reason_code as scmg_reason_code preserving type ) as CaseReason,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key langu                                                   as Language,
      @Semantics.text: true
      description                                             as CaseReasonName,
      _CaseType,
      _Language
};
```
