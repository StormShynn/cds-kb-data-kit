---
name: I_HIERRUNTIMERPRSTNTEXT
description: "Hierruntimerprstntext"
app_component: FI-FIO-GL-HIE-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: not_released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Not Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
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
