---
name: I_QLTYMGMTINTEGSCENSTATETEXT
description: "Qltymgmtintegscenstatetext"
app_component: QM-2CL
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
  - QM
  - interface-view
  - text-view
  - text
  - component:QM-2CL
  - lob:Quality Management
---
# I_QLTYMGMTINTEGSCENSTATETEXT

**Qltymgmtintegscenstatetext**

| Property | Value |
|---|---|
| App Component | `QM-2CL` |
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
| `QltyMgmtIntegScenState` | ✓ | |  | `cast(substring(domvalue_l, 1, 1) as qinteg_state preserving type)` |  |  |
| `Language` | ✓ | |  | `ddlanguage` |  |  |
| `DefectArchivingStatusText` |  | |  | `cast( dd07t.ddtext as qinteg_state_text preserving type )` |  |  |
| `_Language` | | ✓ | | | | |
| `_QltyMgmtIntegScenState` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_QltyMgmtIntegScenState` | `I_QltyMgmtIntegScenState` | [0..1] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]

@AccessControl.authorizationCheck: #NOT_REQUIRED
@AccessControl.personalData.blocking: #NOT_REQUIRED

@VDM.viewType: #BASIC

@EndUserText.label: 'QM Integration Scenario State - Text'
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.supportedCapabilities: 
  [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #LANGUAGE_DEPENDENT_TEXT ]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel: {
    usageType: {
        dataClass: #MASTER,
        sizeCategory: #S,
        serviceQuality: #A
    },
    dataCategory: #TEXT,
    representativeKey: 'QltyMgmtIntegScenState',
    resultSet.sizeCategory: #XS
}
define view entity I_QltyMgmtIntegScenStateText as select from dd07t 

  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
  association [0..1] to I_QltyMgmtIntegScenState as _QltyMgmtIntegScenState on $projection.QltyMgmtIntegScenState = _QltyMgmtIntegScenState.QltyMgmtIntegScenState

{
  key cast(substring(domvalue_l, 1, 1) as qinteg_state preserving type) as QltyMgmtIntegScenState,
  @ObjectModel.foreignKey.association: '_Language'
  @Semantics.language: true
  key ddlanguage  as Language,
  
   @Semantics.text: true
  cast( dd07t.ddtext as qinteg_state_text preserving type ) as DefectArchivingStatusText,
  
  _Language,
  _QltyMgmtIntegScenState
  
}
where
      dd07t.domname  = 'QINTEG_STATE'
  and dd07t.as4local = 'A'
```
