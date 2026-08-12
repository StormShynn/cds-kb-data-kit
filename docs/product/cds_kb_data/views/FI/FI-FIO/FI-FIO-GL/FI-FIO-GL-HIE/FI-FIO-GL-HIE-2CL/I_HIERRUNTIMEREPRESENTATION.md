---
name: I_HIERRUNTIMEREPRESENTATION
description: "Hierruntimerepresentation"
app_component: FI-FIO-GL-HIE-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - interface-view
  - component:FI-FIO-GL-HIE-2CL
  - lob:Finance
---
# I_HIERRUNTIMEREPRESENTATION

**Hierruntimerepresentation**

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
| `HierarchyType` |  | |  | `hrytyp` |  |  |
| `ValidityStartDate` |  | |  | `cast(hryvalfrom as fis_datab preserving type )` |  |  |
| `LastChangedByUser` |  | |  | `upduser` |  |  |
| `LastChangeDateTime` |  | |  | `updtime` |  |  |
| `HierarchyClass` |  | |  | `hrycls` |  |  |
| `HierarchyShortID` |  | |  | `hrysid` |  |  |
| `FromCreationDateTime` |  | |  | `cretime` |  |  |
| `CreatedByUser` |  | |  | `creuser` |  |  |
| `ControllingArea` |  | |  | `kokrs` |  |  |
| `ChartOfAccounts` |  | |  | `ktopl` |  |  |
| `ConsolidationChartOfAccounts` |  | |  | `itclg` |  |  |
| `SubItemCategory` |  | |  | `sityp` |  |  |
| `ValidationScenarioID` |  | |  | `scen_id` |  |  |
| `FinancialManagementArea` |  | |  | `fikrs` |  |  |
| `FinMgmtAreaFiscalYear` |  | |  | `fma_fisyear` |  |  |
| `SalesOrganization` |  | |  | `salesorganization` |  |  |
| `DistributionChannel` |  | |  | `distributionchannel` |  |  |
| `Division` |  | |  | `division` |  |  |
| `Language` |  | |  | `dspra` |  |  |
| `GroupChartOfAccountIsUsed` |  | |  | `xergs` |  |  |
| `FinancialStatementAssetsItem` |  | |  | `aktva` |  |  |
| `FinStatementLiabilitiesItem` |  | |  | `pssva` |  |  |
| `FinancialStatementNetLossItem` |  | |  | `ergak` |  |  |
| `FinStatementNetProfitItem` |  | |  | `ergpa` |  |  |
| `FinStatementProfitAndLossItem` |  | |  | `erggv` |  |  |
| `FinancialStatementOrphansItem` |  | |  | `zuord` |  |  |
| `FinancialStatementNotesItem` |  | |  | `anhng` |  |  |
| `GeneralLedgerAgingScope` |  | |  | `aging` |  |  |
| `FunctionalAreaIsUsed` |  | |  | `funareaassigned` |  |  |
| `SemanticTagIsUsed` |  | |  | `semtagassigned` |  |  |
| `HierarchyNodeIsTimeDependent` |  | |  | `node_timedep` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_HierRuntimeRprstnText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IHRRPDIR'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Hierarchy Directory'
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

define view I_HierRuntimeRepresentation
  as select from hrrp_dir_n
  association [0..*] to I_HierRuntimeRprstnText as _Text on  $projection.RuntimeHierarchy = _Text.RuntimeHierarchy
                                                         and $projection.ValidityEndDate  = _Text.ValidityEndDate
{
               @ObjectModel.text.association: '_Text'
  key          hryid                                          as RuntimeHierarchy,

               @Semantics.businessDate.to: true
  key          cast(hryvalto as fis_datbi preserving type )   as ValidityEndDate,
               hrytyp                                         as HierarchyType,

               @Semantics.businessDate.from: true
               cast(hryvalfrom as fis_datab preserving type ) as ValidityStartDate,

               @Semantics.user.lastChangedBy: true
               upduser                                        as LastChangedByUser,
               @Semantics.systemDateTime.lastChangedAt: true
               updtime                                        as LastChangeDateTime,

               hrycls                                         as HierarchyClass,
               hrysid                                         as HierarchyShortID,
               cretime                                        as FromCreationDateTime,
               creuser                                        as CreatedByUser,
               //HRRP_SI_CLFD
               kokrs                                          as ControllingArea,
               ktopl                                          as ChartOfAccounts,
               itclg                                          as ConsolidationChartOfAccounts,
               sityp                                          as SubItemCategory,
               scen_id                                        as ValidationScenarioID,
               fikrs                                          as FinancialManagementArea,
               fma_fisyear                                    as FinMgmtAreaFiscalYear,
               //HRRP_SI_HATTR
               salesorganization                              as SalesOrganization,
               distributionchannel                            as DistributionChannel,
               division                                       as Division,
               //HRRP_SI_FSV
               dspra                                          as Language,
               xergs                                          as GroupChartOfAccountIsUsed,
               aktva                                          as FinancialStatementAssetsItem,
               pssva                                          as FinStatementLiabilitiesItem,
               ergak                                          as FinancialStatementNetLossItem,
               ergpa                                          as FinStatementNetProfitItem,
               erggv                                          as FinStatementProfitAndLossItem,
               zuord                                          as FinancialStatementOrphansItem,
               anhng                                          as FinancialStatementNotesItem,
               aging                                          as GeneralLedgerAgingScope,
               funareaassigned                                as FunctionalAreaIsUsed,
               semtagassigned                                 as SemanticTagIsUsed,
               node_timedep                                   as HierarchyNodeIsTimeDependent,
               _Text
}
```
