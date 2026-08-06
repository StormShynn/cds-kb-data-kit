---
name: I_CNSLDTNGROUPSTRUCMETHASSGMT
description: Cnsldtngroupstrucmethassgmt
app_component: FIN-CS-MD-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-CS
  - FIN-CS-MD
  - interface-view
  - component:FIN-CS-MD-2CL
  - lob:Other
---
# I_CNSLDTNGROUPSTRUCMETHASSGMT

**Cnsldtngroupstrucmethassgmt**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `ConsolidationGroup` | `_Source.ConsolidationGroup` |
| key `ConsolidationUnit` | `_Source.ConsolidationUnit` |
| key `ConsolidationVersion` | `_Source.ConsolidationVersion` |
| key `GroupStrucFromFiscalYearPeriod` | `_Source.GroupStrucFromFiscalYearPeriod` |
| key `MethAssgmtFromFiscalYearPeriod` | `_Source.MethAssgmtFromFiscalYearPeriod` |
| `MethAssgmtToFiscalYearPeriod` | `_Source.MethAssgmtToFiscalYearPeriod` |
| `ConsolidationInvestmentMethod` | `_Source.ConsolidationInvestmentMethod` |
| `AccountingTechnique` | `_Source.AccountingTechnique` |
| `MethChangeIsAtBeginOfPeriod` | `_Source.MethChangeIsAtBeginOfPeriod` |
| `_CnsldtnVersion` | *Association* |
| `_CnsldtnGroup` | *Association* |
| `_CnsldtnUnit` | *Association* |
| `_CnsldtnInvestmentMethod` | *Association* |
| `_CnsldtnGroupStructure` | *Association* |

## Source Code

```abap
@Analytics: {
  dataExtraction.enabled: true,
  technicalName: 'ICSGROUPSTRUCMETHASSGMT'
}
@AccessControl.authorizationCheck: #MANDATORY
@Metadata:{
  ignorePropagatedAnnotations: true
}
@ObjectModel:{
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #B,
    sizeCategory: #S
  },
  modelingPattern: #NONE,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #EXTRACTION_DATA_SOURCE,
                          #SQL_DATA_SOURCE ],
  sapObjectNodeType.name: 'CnsldtnGroupStrucMethAssgmt'
}
@Search.searchable: true
@VDM:{
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@EndUserText.label: 'Cnsldtn Group Structure Method Assgmt'
/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK" ]  } */
define view entity I_CnsldtnGroupStrucMethAssgmt
  as select from P_CnsldtnGroupStrucMethAssgmt as _Source

{
      @ObjectModel.foreignKey.association: '_CnsldtnGroup'
      @Search:{
        defaultSearchElement: true,
        ranking: #HIGH,
        fuzzinessThreshold: 0.8
      }
      @Consumption.valueHelpDefinition: [{
        entity:{
          name: 'I_CnsldtnGroupVH',
          element: 'ConsolidationGroup'
        }
      }]
  key _Source.ConsolidationGroup,

      @ObjectModel.foreignKey.association: '_CnsldtnUnit'
      @Search:{
        defaultSearchElement: true,
        ranking: #HIGH,
        fuzzinessThreshold: 0.8
      }
      @Consumption.valueHelpDefinition: [{
        entity:{
          name: 'I_CnsldtnUnitVH',
          element: 'ConsolidationUnit'
        }
      }]
  key _Source.ConsolidationUnit,

      @ObjectModel.foreignKey.association: '_CnsldtnVersion'
      @Search:{
        defaultSearchElement: true,
        ranking: #MEDIUM,
        fuzzinessThreshold: 0.8
      }
      @Consumption.valueHelpDefinition: [{
        entity:{
          name: 'I_CnsldtnVersionVH',
          element: 'ConsolidationVersion'
        }
      }]
  key _Source.ConsolidationVersion,

      @Semantics.fiscal.yearPeriod: true
  key _Source.GroupStrucFromFiscalYearPeriod,

      @Semantics.fiscal.yearPeriod: true
  key _Source.MethAssgmtFromFiscalYearPeriod,

      @Semantics.fiscal.yearPeriod: true
      _Source.MethAssgmtToFiscalYearPeriod,

      @ObjectModel: { foreignKey.association: '_CnsldtnInvestmentMethod',
                      sapObjectNodeTypeReference: 'CnsldtnInvestmentMethod' }
      @Consumption.valueHelpDefinition: [{
        entity:{
          name: 'I_CnsldtnInvestmentMethodVH',
          element: 'ConsolidationInvestmentMethod'
        }
      }]
      _Source.ConsolidationInvestmentMethod,
      _Source.AccountingTechnique,
      _Source.MethChangeIsAtBeginOfPeriod,


      /* Associations */
      _CnsldtnVersion,
      _CnsldtnGroup,
      _CnsldtnUnit,
      _CnsldtnInvestmentMethod,
      _CnsldtnGroupStructure
}
```
