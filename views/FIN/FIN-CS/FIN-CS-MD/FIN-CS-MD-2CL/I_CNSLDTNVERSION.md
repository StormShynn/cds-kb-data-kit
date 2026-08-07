---
name: I_CNSLDTNVERSION
description: "Cnsldtnversion"
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
# I_CNSLDTNVERSION

**Cnsldtnversion**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConsolidationVersion` | ✓ | |  | `cast ( _tf200.rvers as fincs_consolidationversion preserving type )` |  |  |
| `ConsolidationInvestmentVersion` |  | |  | `cast ( _tf200.invvs as fincs_investmentversion preserving type )` |  |  |
| `ConsolidationStructureVersion` |  | |  | `cast ( _tf200.strvs as fincs_structureversion preserving type )` |  |  |
| `ConsolidationDataEntryVersion` |  | |  | `cast ( _tf200.inpvs as fincs_dataentryversion preserving type )` |  |  |
| `ConsolidationLedgerVersion` |  | |  | `cast ( _tf200.ldrvs as fincs_ledgerversion preserving type )` |  |  |
| `ConsolidationTaxRateVersion` |  | |  | `cast ( _tf200.taxvs as fincs_taxrateversion preserving type )` |  |  |
| `ConsolidationReportingRuleVers` |  | |  | `cast ( _tf200.rrlvs as fincs_reportingruleversion preserving type )` |  |  |
| `CnsldtnFSItemAttributeVersion` |  | |  | `cast ( _tf200.iatvs as fincs_fsitemattributeversion preserving type )` |  |  |
| `CnsldtnUnitAttributeVersion` |  | |  | `cast ( _tf200.cuavs as fincs_cnsldtnunitattributevers preserving type )` |  |  |
| `FSItemMappingVersion` |  | |  | `cast ( _tf200.impvs as fincs_fsitemmappingversion preserving type )` |  |  |
| `FiscalYearVariant` |  | |  | `cast ( case _tf200.periv when '' then 'K4' else _tf200.periv end as fincs_fiscalyearvariant preserving type )` |  |  |
| `CnsldtnIsPlanVersion` |  | |  | `cast ( _tf200.planvers as fincs_isplanningversion preserving type )` |  |  |
| `ConsolidationLedger` |  | |  | `cast ( _tf200.rldnr_cons as fincs_consolidationledger preserving type )` |  |  |
| `GroupCurrency` |  | |  | `cast ( _tf200.group_curr as fincs_md_groupcurrency preserving type )` |  |  |
| `CnsldtnSourceLedger` |  | |  | `cast ( _tf200.rldnr_source as fincs_sourceledger preserving type )` |  |  |
| `CnsldtnVersionType` |  | |  | `cast ( _tf200.ext_version_type as fincs_cnsldtnversiontype preserving type )` |  |  |
| `CnsldtnReferenceVersion` |  | |  | `cast ( _tf200.ref_version as fincs_cnsldtnreferenceversion preserving type )` |  |  |
| `CnsldtnAccountingSourceLedger` |  | |  | `cast ( _tf200.rldnr_source_acc_int as fincs_rldnr_source_acc_int preserving type )` |  |  |
| `CnsldtnVersionGroupCrcySource` |  | |  | `cast ( _tf200.source_kf_gc as fincs_group_curr_source preserving type )` |  |  |
| `CnsldtnSourcePlanCategory` |  | |  | `cast ( _tf200.category_src as fincs_category_src preserving type )` |  |  |
| `CnsldtnVersionRunMode` |  | |  | `cast ( _tf200.exec_mode as fincs_versionrunmode preserving type )` |  |  |
| `CnsldtnVersionHasAllKeyFigures` |  | |  | `cast ( _tf200.ext_vers_all_kf as fincs_versionhasallkeyfigures preserving type )` |  |  |
| `CnsldtnVersionLocalCrcySource` |  | |  | `cast ( _tf200.source_kf_lc as fincs_local_curr_source preserving type )` |  |  |
| `CnsldtnVersionQuantitySource` |  | |  | `cast ( _tf200.source_kf_qty as fincs_quantity_source preserving type )` |  |  |
| `CnsldtnSelectedFSItemsVersion` |  | |  | `cast ( _tf200.fixvs as fincs_selectedfsitemsversion preserving type )` |  |  |
| `CnsldtnReclassificationVersion` |  | |  | `cast ( _tf200.rclvs as fincs_reclassificationversion preserving type )` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CnsldtnVersionT` | [0..*] |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ICCVERSION',
  compiler.compareFilter: true,
  buffering:{
    status: #ACTIVE,
    type: #FULL}
}
@Analytics: {
  dataCategory: #DIMENSION,
  internalName: #LOCAL,
  dataExtraction.enabled: true
}
@AccessControl.authorizationCheck: #MANDATORY
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata:{
  allowExtensions:true,
  ignorePropagatedAnnotations: true
  }
@ObjectModel:{
  usageType: {
    dataClass: #CUSTOMIZING,
    serviceQuality: #A,
    sizeCategory: #S},
  representativeKey: 'ConsolidationVersion',
  modelingPattern: #ANALYTICAL_DIMENSION,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #EXTRACTION_DATA_SOURCE,
                          #ANALYTICAL_DIMENSION ],
  sapObjectNodeType.name: 'ConsolidationVersion'
}
@Search.searchable: true
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
  }
@EndUserText.label: 'Consolidation Version'

define view I_CnsldtnVersion
  as select from tf200 as _tf200

  association [0..*] to I_CnsldtnVersionT as _Text on $projection.ConsolidationVersion = _Text.ConsolidationVersion
{
      @ObjectModel.text.association: '_Text'
      @Search: { defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8 }
      @Consumption.valueHelpDefinition: [{ entity: { name: 'I_CnsldtnVersionVH',
                                           element: 'ConsolidationVersion' } }]
  key cast ( _tf200.rvers as fincs_consolidationversion preserving type )                   as ConsolidationVersion,

      //special versions
      cast ( _tf200.invvs as fincs_investmentversion preserving type )                      as ConsolidationInvestmentVersion,
      cast ( _tf200.strvs as fincs_structureversion preserving type )                       as ConsolidationStructureVersion,
      cast ( _tf200.inpvs as fincs_dataentryversion preserving type )                       as ConsolidationDataEntryVersion,
      cast ( _tf200.ldrvs as fincs_ledgerversion preserving type )                          as ConsolidationLedgerVersion,
      cast ( _tf200.taxvs as fincs_taxrateversion preserving type )                         as ConsolidationTaxRateVersion,
      cast ( _tf200.rrlvs as fincs_reportingruleversion preserving type )                   as ConsolidationReportingRuleVers,
      cast ( _tf200.iatvs as fincs_fsitemattributeversion preserving type )                 as CnsldtnFSItemAttributeVersion,
      cast ( _tf200.cuavs as fincs_cnsldtnunitattributevers preserving type )               as CnsldtnUnitAttributeVersion,
      cast ( _tf200.impvs as fincs_fsitemmappingversion preserving type )                   as FSItemMappingVersion,

      cast ( case _tf200.periv
        when '' then 'K4' //fallback
        else _tf200.periv
      end as fincs_fiscalyearvariant preserving type )                                      as FiscalYearVariant,

      cast ( _tf200.planvers             as fincs_isplanningversion preserving type )       as CnsldtnIsPlanVersion,
      cast ( _tf200.rldnr_cons           as fincs_consolidationledger preserving type )     as ConsolidationLedger,
      cast ( _tf200.group_curr           as fincs_md_groupcurrency preserving type )        as GroupCurrency,
      cast ( _tf200.rldnr_source         as fincs_sourceledger preserving type )            as CnsldtnSourceLedger,
      cast ( _tf200.ext_version_type     as fincs_cnsldtnversiontype preserving type )      as CnsldtnVersionType,
      cast ( _tf200.ref_version          as fincs_cnsldtnreferenceversion preserving type ) as CnsldtnReferenceVersion,
      cast ( _tf200.rldnr_source_acc_int as fincs_rldnr_source_acc_int preserving type )    as CnsldtnAccountingSourceLedger,
      cast ( _tf200.source_kf_gc         as fincs_group_curr_source preserving type )       as CnsldtnVersionGroupCrcySource,
      cast ( _tf200.category_src         as fincs_category_src preserving type )            as CnsldtnSourcePlanCategory,
      cast ( _tf200.exec_mode            as fincs_versionrunmode preserving type )          as CnsldtnVersionRunMode,
      cast ( _tf200.ext_vers_all_kf      as fincs_versionhasallkeyfigures preserving type ) as CnsldtnVersionHasAllKeyFigures,
      cast ( _tf200.source_kf_lc         as fincs_local_curr_source preserving type )       as CnsldtnVersionLocalCrcySource,
      cast ( _tf200.source_kf_qty        as fincs_quantity_source preserving type )         as CnsldtnVersionQuantitySource,

      cast ( _tf200.fixvs as fincs_selectedfsitemsversion preserving type )                 as CnsldtnSelectedFSItemsVersion,
      cast ( _tf200.rclvs as fincs_reclassificationversion preserving type )                 as CnsldtnReclassificationVersion,

      /* Associations */
      _Text
}
```
