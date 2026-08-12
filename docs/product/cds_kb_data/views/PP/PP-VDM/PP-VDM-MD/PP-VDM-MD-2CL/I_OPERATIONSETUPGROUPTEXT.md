---
name: I_OPERATIONSETUPGROUPTEXT
description: "Operationsetupgrouptext"
app_component: PP-VDM-MD-2CL
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
  - PP
  - PP-VDM
  - PP-VDM-MD
  - interface-view
  - text-view
  - text
  - component:PP-VDM-MD-2CL
  - lob:Manufacturing
---
# I_OPERATIONSETUPGROUPTEXT

**Operationsetupgrouptext**

| Property | Value |
|---|---|
| App Component | `PP-VDM-MD-2CL` |
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
| `Plant` | ✓ | |  | `werks` |  |  |
| `OperationSetupGroupCategory` | ✓ | |  | `cast(txt.rfgrp as pph_rfgrp preserving type)` |  |  |
| `OperationSetupGroup` | ✓ | |  | `cast(txt.rfsch as pph_rfsch preserving type)` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `OperationSetupGroupName` |  | |  | `txt` |  |  |
| `_Language` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |
| `_OperationSetupGroupCategory` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_Plant` | `I_Plant` | [1..1] |
| `_OperationSetupGroupCategory` | `I_OperationSetupGroupCategory` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPPOPSETUPGRPTXT'
@AbapCatalog.buffering: {status: #ACTIVE, type: #GENERIC, numberOfKeyFields: 001}
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true 
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #SEARCHABLE_ENTITY,#EXTRACTION_DATA_SOURCE]
@ObjectModel.representativeKey: 'OperationSetupGroup'
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #L, dataClass: #CUSTOMIZING}
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Operation Setup Group - Text'
@ObjectModel.sapObjectNodeType.name: 'BOOOpSetupGroupText'
@Analytics.dataExtraction.enabled: true

define view I_OperationSetupGroupText
  as select from t425t as txt
  association [0..1] to I_Language                    as _Language                    on  $projection.Language = _Language.Language
  association [1..1] to I_Plant                       as _Plant                       on  $projection.Plant = _Plant.Plant
  association [1..1] to I_OperationSetupGroupCategory as _OperationSetupGroupCategory on  $projection.Plant                       = _OperationSetupGroupCategory.Plant
                                                                                      and $projection.OperationSetupGroupCategory = _OperationSetupGroupCategory.OperationSetupGroupCategory
{
      @ObjectModel.foreignKey.association: '_Plant'
  key txt.werks as Plant,
      @ObjectModel.foreignKey.association: '_OperationSetupGroupCategory'
  key cast(txt.rfgrp as pph_rfgrp preserving type) as OperationSetupGroupCategory,
      @ObjectModel.text.element: 'OperationSetupGroupName'
  key cast(txt.rfsch as pph_rfsch preserving type) as OperationSetupGroup,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key txt.spras as Language,
      @Search: {defaultSearchElement: true, fuzzinessThreshold: 0.8,ranking: #HIGH}
      @Semantics.text: true
      txt.txt   as OperationSetupGroupName,

      // Associations
      _Plant,
      _OperationSetupGroupCategory,
      _Language
};
```
