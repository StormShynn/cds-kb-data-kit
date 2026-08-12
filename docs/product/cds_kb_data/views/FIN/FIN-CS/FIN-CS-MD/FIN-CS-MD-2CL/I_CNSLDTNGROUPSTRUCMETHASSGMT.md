---
name: I_CNSLDTNGROUPSTRUCMETHASSGMT
description: "Cnsldtngroupstrucmethassgmt"
app_component: FIN-CS-MD-2CL
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConsolidationGroup` | ✓ | | `_Source` | `ConsolidationGroup` |  |  |
| `ConsolidationUnit` | ✓ | | `_Source` | `ConsolidationUnit` |  |  |
| `ConsolidationVersion` | ✓ | | `_Source` | `ConsolidationVersion` |  |  |
| `GroupStrucFromFiscalYearPeriod` | ✓ | | `_Source` | `GroupStrucFromFiscalYearPeriod` |  |  |
| `MethAssgmtFromFiscalYearPeriod` | ✓ | | `_Source` | `MethAssgmtFromFiscalYearPeriod` |  |  |
| `MethAssgmtToFiscalYearPeriod` |  | | `_Source` | `MethAssgmtToFiscalYearPeriod` |  |  |
| `ConsolidationInvestmentMethod` |  | | `_Source` | `ConsolidationInvestmentMethod` |  |  |
| `AccountingTechnique` |  | | `_Source` | `AccountingTechnique` |  |  |
| `MethChangeIsAtBeginOfPeriod` |  | | `_Source` | `MethChangeIsAtBeginOfPeriod` |  |  |
| `_CnsldtnVersion` | | ✓ | | | | |
| `_CnsldtnGroup` | | ✓ | | | | |
| `_CnsldtnUnit` | | ✓ | | | | |
| `_CnsldtnInvestmentMethod` | | ✓ | | | | |
| `_CnsldtnGroupStructure` | | ✓ | | | | |

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
