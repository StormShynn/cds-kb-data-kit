---
name: I_HIERRUNTIMERPRSTNTEXT
description: "Hierruntimerprstntext"
app_component: FI-FIO-GL-HIE-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - interface-view
  - text-view
  - text
  - component:FI-FIO-GL-HIE-2CL
  - lob:Finance
---
# I_HIERRUNTIMERPRSTNTEXT

**Hierruntimerprstntext**

| Property | Value |
|---|---|
| App Component | `FI-FIO-GL-HIE-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `RuntimeHierarchy` | ✓ | |  | `hryid` |  |  |
| `ValidityEndDate` | ✓ | |  | `cast(hryvalto as fis_datbi preserving type )` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `HierarchyType` |  | |  | `hrytyp` |  |  |
| `ValidityStartDate` |  | |  | `cast(hryvalfrom as fis_datab preserving type )` |  |  |
| `HierarchyName` |  | |  | `hrytxt` |  |  |
| `HierarchyClass` |  | |  | `hrycls` |  |  |
| `ControllingArea` |  | |  | `kokrs` |  |  |
| `ChartOfAccounts` |  | |  | `ktopl` |  |  |
| `ConsolidationChartOfAccounts` |  | |  | `itclg` |  |  |
| `SubItemCategory` |  | |  | `sityp` |  |  |
| `ValidationScenarioID` |  | |  | `scen_id` |  |  |
| `FinancialManagementArea` |  | |  | `fikrs` |  |  |
| `FinMgmtAreaFiscalYear` |  | |  | `fma_fisyear` |  |  |
| `HierarchyNodeIsTimeDependent` |  | |  | `node_timedep` |  |  |
| `_Language` | | ✓ | | | | |
| `_Hierarchy` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_Hierarchy` | `I_HierRuntimeRepresentation` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IHRRPDIRT'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Hierarchy Directory - Text'
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type:#PUBLIC_LOCAL_API
@ObjectModel: {
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #B,
    sizeCategory: #XL
   }
}
@ClientHandling.algorithm: #SESSION_VARIABLE

@ObjectModel.supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE]
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.dataCategory: #TEXT
define view I_HierRuntimeRprstnText
  as select from hrrp_dirt_n
  association [0..1] to I_Language                  as _Language  on  $projection.Language = _Language.Language
  association [0..1] to I_HierRuntimeRepresentation as _Hierarchy on  $projection.RuntimeHierarchy = _Hierarchy.RuntimeHierarchy
                                                                  and $projection.ValidityEndDate  = _Hierarchy.ValidityEndDate

{
  key          hryid                                          as RuntimeHierarchy,
               @Semantics.businessDate.to: true
  key          cast(hryvalto as fis_datbi preserving type )   as ValidityEndDate,
               @ObjectModel.foreignKey.association: '_Language'
               @Semantics.language:true
  key          spras                                          as Language,
               hrytyp                                         as HierarchyType,
               @Semantics.businessDate.from: true
               cast(hryvalfrom as fis_datab preserving type ) as ValidityStartDate,
               @Semantics.text: true
               hrytxt                                         as HierarchyName,

               hrycls                                         as HierarchyClass,
               //HRRP_SI_CLFD
               kokrs                                          as ControllingArea, //FIS_KOKRS
               ktopl                                          as ChartOfAccounts, //FIS_KTOPL
               itclg                                          as ConsolidationChartOfAccounts,
               sityp                                          as SubItemCategory,
               scen_id                                        as ValidationScenarioID,
               fikrs                                          as FinancialManagementArea,
               fma_fisyear                                    as FinMgmtAreaFiscalYear,
               node_timedep                                   as HierarchyNodeIsTimeDependent,
               _Hierarchy,
               _Language
}
```
