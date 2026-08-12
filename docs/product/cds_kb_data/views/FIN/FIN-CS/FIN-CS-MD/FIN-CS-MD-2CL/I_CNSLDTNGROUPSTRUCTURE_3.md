---
name: I_CNSLDTNGROUPSTRUCTURE_3
description: "Cnsldtngroupstructure 3"
app_component: FIN-CS-MD-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
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
# I_CNSLDTNGROUPSTRUCTURE_3

**Cnsldtngroupstructure 3**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConsolidationGroup` | ✓ | | `_Source` | `ConsolidationGroup` |  |  |
| `ConsolidationUnit` | ✓ | | `_Source` | `ConsolidationUnit` |  |  |
| `ConsolidationVersion` | ✓ | | `_Source` | `ConsolidationVersion` |  |  |
| `GroupStrucFromFiscalYearPeriod` | ✓ | | `_Source` | `GroupStrucFromFiscalYearPeriod` |  |  |
| `GroupStrucToFiscalYearPeriod` |  | | `_Source` | `GroupStrucToFiscalYearPeriod` |  |  |
| `FirstCnsldtnFiscalYearPeriod` |  | | `_Source` | `FirstCnsldtnFiscalYearPeriod` |  |  |
| `FirstCnsldtnIsAtEndOfPeriod` |  | | `_Source` | `FirstCnsldtnIsAtEndOfPeriod` |  |  |
| `DivestitureFiscalYearPeriod` |  | | `_Source` | `DivestitureFiscalYearPeriod` |  |  |
| `DivestitureIsAtBeginOfPeriod` |  | | `_Source` | `DivestitureIsAtBeginOfPeriod` |  |  |
| `DivestitureIsDueToMerger` |  | | `_Source` | `DivestitureIsDueToMerger` |  |  |
| `ETag` |  | | `_Source` | `ETag` |  |  |
| `_CnsldtnVersion` | | ✓ | | | | |
| `_CnsldtnGroup` | | ✓ | | | | |
| `_CnsldtnUnit` | | ✓ | | | | |
| `_CnsldtnGroupStrucMethAssgmt` | | ✓ | | | | |

## Source Code

```abap
@Analytics: {
  dataExtraction.enabled: true,
  internalName: #LOCAL
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
  sapObjectNodeType.name: 'ConsolidationGroupStructure'
}
@Search.searchable: true
@VDM:{
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@EndUserText.label: 'Consolidation Group Structure'
/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK" ]  } */
define view entity I_CnsldtnGroupStructure_3
  as select from P_CnsldtnGroupStructure as _Source

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
      _Source.GroupStrucToFiscalYearPeriod,

      @Semantics.fiscal.yearPeriod: true
      _Source.FirstCnsldtnFiscalYearPeriod,
      
      _Source.FirstCnsldtnIsAtEndOfPeriod,

      @Semantics.fiscal.yearPeriod: true
      _Source.DivestitureFiscalYearPeriod,
      
      _Source.DivestitureIsAtBeginOfPeriod,

      _Source.DivestitureIsDueToMerger,

      @UI.hidden: true
      _Source.ETag,


      /* Associations */
      _CnsldtnVersion,
      _CnsldtnGroup,
      _CnsldtnUnit,
      _CnsldtnGroupStrucMethAssgmt

}
```
