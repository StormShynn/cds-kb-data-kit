---
name: I_CONTRACCTPRTNRELSHPTYPE
description: "Contracctprtnrelshptype"
app_component: FI-CA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-CA
  - interface-view
  - component:FI-CA-2CL
  - lob:Finance
---
# I_CONTRACCTPRTNRELSHPTYPE

**Contracctprtnrelshptype**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CARelationshipOfBPToContrAcct` | ✓ | |  | `vkpbz` |  |  |
| `CABPIsAccountHolder` |  | |  | `xktin` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_ContrAcctPrtnRelshpTypeTxt` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@EndUserText.label: 'Contract Acct Partner Relationship Type'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { modelingPattern: #NONE,
                representativeKey: 'CARelationshipOfBPToContrAcct',
                sapObjectNodeType.name: 'ContractAccountPrtnRelshpType',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S } }

@VDM.viewType: #BASIC

define view entity I_ContrAcctPrtnRelshpType
  as select from tfk002f
  
  association [0..*] to I_ContrAcctPrtnRelshpTypeTxt as _Text on $projection.CARelationshipOfBPToContrAcct = _Text.CARelationshipOfBPToContrAcct

{
      @ObjectModel.text.association: '_Text'
  key vkpbz as CARelationshipOfBPToContrAcct,

      xktin as CABPIsAccountHolder,

      _Text
}
```
