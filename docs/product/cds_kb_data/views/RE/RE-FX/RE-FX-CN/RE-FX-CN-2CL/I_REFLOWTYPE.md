---
name: I_REFLOWTYPE
description: "Reflowtype"
app_component: RE-FX-CN-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - RE
  - RE-FX
  - RE-FX-CN
  - interface-view
  - component:RE-FX-CN-2CL
  - lob:Other
---
# I_REFLOWTYPE

**Reflowtype**

| Property | Value |
|---|---|
| App Component | `RE-FX-CN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `REFlowType` | ✓ | |  | `flowtype` |  |  |
| `DebitCreditCode` |  | |  | `cast( ssolhab as shkzg preserving type )` |  |  |
| `REAnticipatoryAccrualType` |  | |  | `antacrtype` |  |  |
| `RETransitoryAccrualType` |  | |  | `traacrtype` |  |  |
| `REFlowTypeForSummary` |  | |  | `flowtypecnds` |  |  |
| `REFlowTypeIsRlvtForApproval` |  | |  | `fcomrelevant` |  |  |
| `REFlowTypeIsRlvtForCashMgmt` |  | |  | `iscmcfrelevant` |  |  |
| `_Text` | | ✓ | | | | |
| `_DebitCreditCode` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_REFlowTypeText` | [0..*] |
| `_DebitCreditCode` | `I_DebitCreditCode` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IREFLOWTYPE'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@Analytics.internalName: #LOCAL
@Analytics.dataExtraction.enabled: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Flow Type'
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.representativeKey: ['REFlowType']
@ObjectModel.semanticKey: ['REFlowType']
@VDM.viewType: #BASIC
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.modelingPattern:           #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities:  [  #ANALYTICAL_DIMENSION,
                                        #CDS_MODELING_ASSOCIATION_TARGET,
                                        #SQL_DATA_SOURCE,
                                        #CDS_MODELING_DATA_SOURCE]

define view I_REFlowType 
    as select from tivcdflowtype
    association [0..*] to I_REFlowTypeText as _Text on $projection.REFlowType = _Text.REFlowType
    association [0..1] to I_DebitCreditCode as _DebitCreditCode on $projection.DebitCreditCode = _DebitCreditCode.DebitCreditCode
{
        @ObjectModel.text.association: '_Text'
    key flowtype        as REFlowType,
        @ObjectModel.foreignKey.association:  '_DebitCreditCode'
        cast( ssolhab as shkzg preserving type )        as DebitCreditCode,
        antacrtype      as REAnticipatoryAccrualType,
        traacrtype      as RETransitoryAccrualType,
        flowtypecnds    as REFlowTypeForSummary,
        fcomrelevant    as REFlowTypeIsRlvtForApproval,
        iscmcfrelevant  as REFlowTypeIsRlvtForCashMgmt,
        
        _Text,
        _DebitCreditCode
}
```
