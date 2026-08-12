---
name: I_FINCNDNCONDITIONTYPE
description: "Fincndnconditiontype"
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
  - pricing-condition
  - component:FIN-FSCM-TRM-2CL
  - lob:Other
---
# I_FINCNDNCONDITIONTYPE

**Fincndnconditiontype**

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
| `TreasuryContractType` | ✓ | |  | `rantyp` |  |  |
| `FinConditionConditionType` | ✓ | |  | `cast( skoart as ftr_cndn_condition_type preserving type )` |  |  |
| `FinCndnFieldSelectionString` |  | |  | `cast( auswahl as ftr_cndn_field_selection preserving type )` |  |  |
| `CashFlowCalculationCategory` |  | |  | `cast( sberfima as ftr_gen_sbewfima preserving type )` |  |  |
| `_ContractType` | | ✓ | | | | |
| `_ConditionTypeText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ContractType` | `I_TreasuryContractType` | [0..1] |
| `_ConditionTypeText` | `I_FinCndnConditionTypeText` | [0..*] |

## Source Code

```abap
@AbapCatalog.buffering.status: #NOT_ALLOWED
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AbapCatalog.sqlViewName: 'IFCCONDTYPE'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE ]
@ObjectModel.modelingPattern: [ #ANALYTICAL_DIMENSION ]
@Analytics.internalName: #LOCAL
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Financial Condition Condition Type'
@ObjectModel.representativeKey: 'FinConditionConditionType'
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #S
@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations: true
@VDM.viewType: #BASIC
@ObjectModel.sapObjectNodeType.name: 'FinTransConditionType'

define view I_FinCndnConditionType
  as select from tzk01
  association [0..1] to I_TreasuryContractType     as _ContractType      on  $projection.TreasuryContractType = _ContractType.TreasuryContractType
  association [0..*] to I_FinCndnConditionTypeText as _ConditionTypeText on  $projection.TreasuryContractType      = _ConditionTypeText.TreasuryContractType
                                                                         and $projection.FinConditionConditionType = _ConditionTypeText.FinConditionConditionType
{
      @ObjectModel.foreignKey.association: '_ContractType'
  key rantyp                                                      as TreasuryContractType,
      @ObjectModel.text.association: '_ConditionTypeText'
  key cast( skoart as ftr_cndn_condition_type preserving type )   as FinConditionConditionType,

      cast( auswahl as ftr_cndn_field_selection preserving type ) as FinCndnFieldSelectionString,
      
      cast( sberfima as ftr_gen_sbewfima preserving type ) as CashFlowCalculationCategory,

      _ContractType,
      _ConditionTypeText
}
```
