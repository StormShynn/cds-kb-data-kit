---
name: I_FINTRANSFLOWTYPE
description: "Fintransflowtype"
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
  - component:FIN-FSCM-TRM-2CL
  - lob:Other
---
# I_FINTRANSFLOWTYPE

**Fintransflowtype**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TreasuryContractType` | ✓ | |  | `rantyp` |  |  |
| `FinTransFlowType` | ✓ | |  | `sbewart` |  |  |
| `CashFlowCalculationCategory` |  | |  | `sberfima` |  |  |
| `FinTransFlowCategory` |  | |  | `cast( FlowTypeSupplement.sbktyp as ftr_flow_category preserving type )` |  |  |
| `TransFlowTypeIsRelevantForFee` |  | |  | `sfee` |  |  |
| `_Text` | | ✓ | | | | |
| `_TreasuryContractType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_FinTransFlowTypeText` | [0..*] |
| `_TreasuryContractType` | `I_TreasuryContractType` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IFTRFLOWTYPE'
@AbapCatalog.compiler.compareFilter: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType: #BASIC
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass:  #CUSTOMIZING
@ObjectModel.representativeKey: 'FinTransFlowType'
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION,#CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #SEARCHABLE_ENTITY ]
@ObjectModel.modelingPattern: [ #ANALYTICAL_DIMENSION ]
@Metadata.ignorePropagatedAnnotations:true
@EndUserText.label: 'Financial Transaction Flow Type'
define view I_FinTransFlowType
  as select from tzb0a as FlowType
    inner join   at19  as FlowTypeSupplement on  FlowType.rantyp  = FlowTypeSupplement.rantyp
                                             and FlowType.sbewart = FlowTypeSupplement.sbewart                                   
  association [0..*] to I_FinTransFlowTypeText as _Text on  $projection.TreasuryContractType = _Text.TreasuryContractType
                                                    and $projection.FinTransFlowType     = _Text.FinTransFlowType
  association [0..1] to I_TreasuryContractType  as _TreasuryContractType on $projection.TreasuryContractType = _TreasuryContractType.TreasuryContractType
{
      @ObjectModel.foreignKey.association: '_TreasuryContractType'
  key FlowType.rantyp as TreasuryContractType,
      @ObjectModel.text.association: '_Text'
  key FlowType.sbewart          as FinTransFlowType,
      FlowType.sberfima         as CashFlowCalculationCategory,
      cast( FlowTypeSupplement.sbktyp as ftr_flow_category preserving type )
                                as FinTransFlowCategory,
      FlowTypeSupplement.sfee   as TransFlowTypeIsRelevantForFee,
      _Text,
      _TreasuryContractType
}
```
