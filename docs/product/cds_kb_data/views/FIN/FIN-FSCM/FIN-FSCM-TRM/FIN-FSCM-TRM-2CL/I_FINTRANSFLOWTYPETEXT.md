---
name: I_FINTRANSFLOWTYPETEXT
description: "Fintransflowtypetext"
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-FSCM
  - FIN-FSCM-TRM
  - interface-view
  - text-view
  - text
  - component:FIN-FSCM-TRM-2CL
  - lob:Other
---
# I_FINTRANSFLOWTYPETEXT

**Fintransflowtypetext**

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
| `Language` | ✓ | |  | `sspras` |  |  |
| `FinTransFlowTypeName` |  | |  | `cast( FinTransFlowTypeText.xbewart as ftr_flow_type_name preserving type )` |  |  |
| `_FinTransFlowType` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |
| `_TreasuryContractType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_FinTransFlowType` | `I_FinTransFlowType` | [0..1] |
| `_Language` | `I_Language` | [0..1] |
| `_TreasuryContractType` | `I_TreasuryContractType` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IFTRFLOWTYPET'
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'FinTransFlowType'
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory:  #L
@AbapCatalog.buffering.status: #NOT_ALLOWED
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #SEARCHABLE_ENTITY ]
@ObjectModel.modelingPattern: [ #LANGUAGE_DEPENDENT_TEXT ]
@AbapCatalog.compiler.compareFilter:true
@VDM.viewType: #BASIC
@EndUserText.label: 'Fincial Transaction Flow Type - Text'
define view I_FinTransFlowTypeText
  as select from tzb0t as FinTransFlowTypeText
  association [0..1] to I_FinTransFlowType as _FinTransFlowType on  $projection.TreasuryContractType = _FinTransFlowType.TreasuryContractType
                                                        and $projection.FinTransFlowType         = _FinTransFlowType.FinTransFlowType
  association [0..1] to I_Language     as _Language     on  $projection.Language = _Language.Language
  association [0..1] to I_TreasuryContractType  as _TreasuryContractType on $projection.TreasuryContractType = _TreasuryContractType.TreasuryContractType
{
      @ObjectModel.foreignKey.association: '_TreasuryContractType'
  key FinTransFlowTypeText.rantyp as TreasuryContractType,
      @ObjectModel.foreignKey.association: '_FinTransFlowType'
      @ObjectModel.text.element:  [ 'FinTransFlowTypeName' ]
  key FinTransFlowTypeText.sbewart as FinTransFlowType,

      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key FinTransFlowTypeText.sspras  as Language,

      @Semantics.text: true
      cast( FinTransFlowTypeText.xbewart as ftr_flow_type_name preserving type )
                                   as FinTransFlowTypeName,

      _Language,
      _FinTransFlowType,
      _TreasuryContractType
}
```
