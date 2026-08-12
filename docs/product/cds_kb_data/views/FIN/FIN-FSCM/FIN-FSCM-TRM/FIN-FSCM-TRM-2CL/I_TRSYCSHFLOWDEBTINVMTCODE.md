---
name: I_TRSYCSHFLOWDEBTINVMTCODE
description: "Trsycshflowdebtinvmtcode"
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
  - component:FIN-FSCM-TRM-2CL
  - lob:Other
---
# I_TRSYCSHFLOWDEBTINVMTCODE

**Trsycshflowdebtinvmtcode**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TrsyCshFlowDebtInvmtCode` | ✓ | |  | `cast(left(DomainValue.domvalue_l, 1) as ftr_debt_invest_indicator preserving type)` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_TrsyCshFlowDebtInvmtCodeT` | [0..*] |

## Source Code

```abap
@AbapCatalog:{ 
    sqlViewName: 'IDIINDC',
    buffering.status: #NOT_ALLOWED,
    compiler.compareFilter: true
}
@AbapCatalog.preserveKey: true // only if required by ATC check 
@AccessControl.authorizationCheck:  #NOT_REQUIRED 
@Analytics: {
    dataCategory: #DIMENSION, 
    internalName: #LOCAL
}
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel: {
    representativeKey: 'TrsyCshFlowDebtInvmtCode',
    usageType: {
        dataClass:  #MASTER,
        serviceQuality: #B,
        sizeCategory: #S
    },
    supportedCapabilities: [ #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ],
    modelingPattern: [ #ANALYTICAL_DIMENSION ]
}
@Metadata.allowExtensions:true   
@Metadata.ignorePropagatedAnnotations: true // For C1-Release 
@VDM.viewType: #BASIC
@EndUserText.label: 'Debt Investment Indicator'

define view I_TrsyCshFlowDebtInvmtCode
  as select from dd07l as DomainValue
  association [0..*] to I_TrsyCshFlowDebtInvmtCodeT as _Text on $projection.TrsyCshFlowDebtInvmtCode = _Text.TrsyCshFlowDebtInvmtCode
{
      @ObjectModel.text.association: '_Text'
  key cast(left(DomainValue.domvalue_l, 1) as ftr_debt_invest_indicator preserving type) as TrsyCshFlowDebtInvmtCode,
      _Text
}
where
      DomainValue.domname  = 'FTR_DEBT_INVEST_INDICATOR'
  and DomainValue.as4local = 'A'
```
