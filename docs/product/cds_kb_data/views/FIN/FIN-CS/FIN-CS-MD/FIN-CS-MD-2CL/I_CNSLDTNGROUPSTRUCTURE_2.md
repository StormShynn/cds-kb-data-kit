---
name: I_CNSLDTNGROUPSTRUCTURE_2
description: "Cnsldtngroupstructure 2"
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
# I_CNSLDTNGROUPSTRUCTURE_2

**Cnsldtngroupstructure 2**

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
| `FromFiscalYearPeriod` | ✓ | |  | `cast( _Source.GroupStrucFromFiscalYearPeriod as fincs_fromfiscalyearperiod preserving type )` |  |  |
| `ToFiscalYearPeriod` |  | |  | `cast( _Source.GroupStrucToFiscalYearPeriod as fincs_tofiscalyearperiod preserving type )` |  |  |
| `YearOfFirstConsolidation` |  | | `_Source` | `YearOfFirstConsolidation` |  |  |
| `PeriodOfFirstConsolidation` |  | | `_Source` | `PeriodOfFirstConsolidation` |  |  |
| `FirstCnsldtnIsAtEndOfPeriod` |  | | `_Source` | `FirstCnsldtnIsAtEndOfPeriod` |  |  |
| `YearOfDivestiture` |  | | `_Source` | `YearOfDivestiture` |  |  |
| `PeriodOfDivestiture` |  | | `_Source` | `PeriodOfDivestiture` |  |  |
| `DivestitureIsAtBeginOfPeriod` |  | | `_Source` | `DivestitureIsAtBeginOfPeriod` |  |  |
| `ConsolidationMethod` |  | | `_Source` | `ConsolidationMethod` |  |  |
| `AccountingTechnique` |  | | `_Source` | `AccountingTechnique` |  |  |
| `DivestitureIsDueToMerger` |  | | `_Source` | `DivestitureIsDueToMerger` |  |  |
| `ETag` |  | | `_Source` | `ETag` |  |  |
| `_CnsldtnVersion` | | ✓ | | | | |
| `_CnsldtnGroup` | | ✓ | | | | |
| `_CnsldtnUnit` | | ✓ | | | | |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ICSGRPSTR2',
  compiler.compareFilter: true
}
@Analytics: {
  dataExtraction.enabled: true
}
@AccessControl.authorizationCheck: #MANDATORY
@ClientHandling.algorithm: #SESSION_VARIABLE
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
@VDM.viewType: #BASIC
@EndUserText.label: 'Consolidation Group Structure'

define view I_CnsldtnGroupStructure_2
  as select from P_CnsldtnGroupStructure as _Source

{
      @ObjectModel: {
        foreignKey.association: '_CnsldtnGroup',
        sapObjectNodeTypeReference: 'ConsolidationGroup' }
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

      @ObjectModel:{
        foreignKey.association: '_CnsldtnUnit',
        sapObjectNodeTypeReference: 'ConsolidationUnit' }
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

      @ObjectModel: {
        foreignKey.association: '_CnsldtnVersion',
        sapObjectNodeTypeReference: 'ConsolidationVersion' }
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
  key cast( _Source.GroupStrucFromFiscalYearPeriod as fincs_fromfiscalyearperiod preserving type ) as FromFiscalYearPeriod,

      @Semantics.fiscal.yearPeriod: true
      cast( _Source.GroupStrucToFiscalYearPeriod as fincs_tofiscalyearperiod preserving type )     as ToFiscalYearPeriod,

      _Source.YearOfFirstConsolidation,
      _Source.PeriodOfFirstConsolidation,
      _Source.FirstCnsldtnIsAtEndOfPeriod,
      _Source.YearOfDivestiture,
      _Source.PeriodOfDivestiture,
      _Source.DivestitureIsAtBeginOfPeriod,
      _Source.ConsolidationMethod, // no longer valid  
      _Source.AccountingTechnique, // no longer valid  

      _Source.DivestitureIsDueToMerger,

      @UI.hidden: true
      _Source.ETag,


      /* Associations */
      _CnsldtnVersion,
      _CnsldtnGroup,
      _CnsldtnUnit
}
```
