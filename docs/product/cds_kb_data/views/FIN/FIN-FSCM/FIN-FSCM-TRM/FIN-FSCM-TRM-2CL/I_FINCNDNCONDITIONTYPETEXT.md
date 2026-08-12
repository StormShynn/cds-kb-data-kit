---
name: I_FINCNDNCONDITIONTYPETEXT
description: "Fincndnconditiontypetext"
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-FSCM
  - FIN-FSCM-TRM
  - interface-view
  - text-view
  - pricing-condition
  - text
  - component:FIN-FSCM-TRM-2CL
  - lob:Other
---
# I_FINCNDNCONDITIONTYPETEXT

**Fincndnconditiontypetext**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `spras` |  |  |
| `TreasuryContractType` | ✓ | |  | `rantyp` |  |  |
| `FinConditionConditionType` | ✓ | |  | `cast( skoart as ftr_cndn_condition_type preserving type )` |  |  |
| `FinConditionConditionTypeName` |  | |  | `cast( case when xkoartl is initial then xkoartm else xkoartl end as ftr_cndn_condition_type_name preserving type )` |  |  |
| `_Language` | | ✓ | | | | |
| `_ContractType` | | ✓ | | | | |
| `_ConditionType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_ContractType` | `I_TreasuryContractType` | [0..1] |
| `_ConditionType` | `I_FinCndnConditionType` | [0..1] |

## Source Code

```abap
@AbapCatalog.buffering.status: #NOT_ALLOWED
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AbapCatalog.sqlViewName: 'IFCCONDTYPET'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Financial Con Condition Type - Text'
@ObjectModel.dataCategory: #TEXT
@ObjectModel.supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.modelingPattern: [ #LANGUAGE_DEPENDENT_TEXT ]
@ObjectModel.representativeKey: 'FinConditionConditionType'
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #M
@Metadata.ignorePropagatedAnnotations: true
@VDM.viewType: #BASIC
define view I_FinCndnConditionTypeText
  as select from tzk0a
  association [0..1] to I_Language             as _Language      on  $projection.Language = _Language.Language
  association [0..1] to I_TreasuryContractType as _ContractType  on  $projection.TreasuryContractType = _ContractType.TreasuryContractType
  association [0..1] to I_FinCndnConditionType as _ConditionType on  $projection.TreasuryContractType      = _ConditionType.TreasuryContractType
                                                                 and $projection.FinConditionConditionType = _ConditionType.FinConditionConditionType
{
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key spras                                                                                                   as Language,
      @ObjectModel.foreignKey.association: '_ContractType'
  key rantyp                                                                                                  as TreasuryContractType,
      @ObjectModel.foreignKey.association: '_ConditionType'
  key cast( skoart as ftr_cndn_condition_type preserving type )                                               as FinConditionConditionType,

      @Semantics.text: true
      cast( case
              when xkoartl is initial then xkoartm 
              else xkoartl 
            end as ftr_cndn_condition_type_name preserving type )                                             as FinConditionConditionTypeName,

      _Language,
      _ContractType,
      _ConditionType
}
```
