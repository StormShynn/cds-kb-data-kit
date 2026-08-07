---
name: I_HIERRUNTIMERPRSTNNODE
description: Hierruntimerprstnnode
app_component: FI-FIO-GL-HIE-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - interface-view
  - component:FI-FIO-GL-HIE-2CL
  - lob:Finance
---
# I_HIERRUNTIMERPRSTNNODE

**Hierruntimerprstnnode**

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
| `HierarchyNode` | ✓ | |  | `hrynode` |  |  |
| `HierarchyNodeClass` | ✓ | |  | `nodecls` |  |  |
| `ParentNode` | ✓ | |  | `parnode` |  |  |
| `HierarchyType` |  | |  | `hrytyp` |  |  |
| `ValidityStartDate` |  | |  | `cast(hryvalfrom as fis_datab preserving type )` |  |  |
| `DebitCreditCode` |  | |  | `balind` |  |  |
| `NodeType` |  | |  | `nodetype` |  |  |
| `HierarchyNodeVal` |  | |  | `nodevalue` |  |  |
| `HierarchyNodeSequence` |  | |  | `hryseqnbr` |  |  |
| `HierarchyNodeLevel` |  | |  | `hrylevel` |  |  |
| `ControllingArea` |  | |  | `kokrs` |  |  |
| `ChartOfAccounts` |  | |  | `ktopl` |  |  |
| `ConsolidationChartOfAccounts` |  | |  | `itclg` |  |  |
| `SubItemCategory` |  | |  | `sityp` |  |  |
| `ValidationScenarioID` |  | |  | `scen_id` |  |  |
| `FinancialManagementArea` |  | |  | `fikrs` |  |  |
| `FinMgmtAreaFiscalYear` |  | |  | `fma_fisyear` |  |  |
| `GLAccount` |  | |  | `saknr` |  |  |
| `CostCenter` |  | |  | `kostl` |  |  |
| `ProfitCenter` |  | |  | `prctr` |  |  |
| `StatisticalKeyFigure` |  | |  | `stagr` |  |  |
| `ActivityType` |  | |  | `lstar` |  |  |
| `WBSElement` |  | |  | `cast( posid as fis_wbs_no_conv preserving type )` |  |  |
| `FunctionalArea` |  | |  | `fkber` |  |  |
| `CompanyCode` |  | |  | `bukrs` |  |  |
| `Segment` |  | |  | `segment` |  |  |
| `BusinessTransactionType` |  | |  | `cbttype` |  |  |
| `OrderID` |  | |  | `aufnr` |  |  |
| `Fund` |  | |  | `fincode` |  |  |
| `GrantID` |  | |  | `grant_nbr` |  |  |
| `BudgetPeriod` |  | |  | `budget_pd` |  |  |
| `SponsoredClass` |  | |  | `sponsored_class` |  |  |
| `FundCenterText` |  | |  | `fictr` |  |  |
| `SponsoredProgram` |  | |  | `sponsored_prog` |  |  |
| `FundedProgram` |  | |  | `measure` |  |  |
| `BusinessPartnerNumber` |  | |  | `partner` |  |  |
| `BankAccountInternalID` |  | |  | `acc_id` |  |  |
| `LiquidityItem` |  | |  | `lqpos` |  |  |
| `AssetBusinessArea` |  | |  | `gsber` |  |  |
| `FinancialTransactionType` |  | |  | `trtyp` |  |  |
| `CustomerNum` |  | |  | `kunnr` |  |  |
| `AssetSupplier` |  | |  | `lifnr` |  |  |
| `Project` |  | |  | `cast( pspid as fis_project_no_conv preserving type )` |  |  |
| `Material` |  | |  | `matnr` |  |  |
| `CustomerGroup` |  | |  | `kdgrp` |  |  |
| `CountryOrRegion` |  | |  | `land1` |  |  |
| `FinancialStatementItemTemplate` |  | |  | `item` |  |  |
| `ConsolidationUnit` |  | |  | `cast ( bunit as fincs_consolidationunit preserving type )` |  |  |
| `SubItem` |  | |  | `sitem` |  |  |
| `ConsolidationDocumentType` |  | |  | `docty` |  |  |
| `Company` |  | |  | `rcomp` |  |  |
| `MaterialGroup` |  | |  | `matkl` |  |  |
| `ValidationRuleID` |  | |  | `rule_num` |  |  |
| `SalesDistrict` |  | |  | `bzirk` |  |  |
| `BillingDocumentType` |  | |  | `fkart` |  |  |
| `Division` |  | |  | `spart` |  |  |
| `SalesOrganization` |  | |  | `vkorg` |  |  |
| `DistributionChannel` |  | |  | `vtweg` |  |  |
| `Plant` |  | |  | `werks` |  |  |
| `Industry` |  | |  | `brsch` |  |  |
| `CommitmentItem` |  | |  | `fipex` |  |  |
| `PostingLevel` |  | |  | `plevl` |  |  |
| `FinancialServicesProductGroup` |  | |  | `fs_product_group` |  |  |
| `PricingIsRelevant` |  | |  | `pricingrelevant` |  |  |
| `SignIsInverted` |  | |  | `cast( sign as rr_rsign preserving type )` |  |  |
| `GeneralLedgerAgingIncrement` |  | |  | `regrouping` |  |  |
| `FinancialStatementLeafItem` |  | |  | `fs_leafitem` |  |  |
| `FinancialStatementNodeType` |  | |  | `fs_nodetype` |  |  |
| `FinStmntNodeFormattedID` |  | |  | `hrynodeext` |  |  |
| `BankAccountGroupingIsSet` |  | |  | `banksplit` |  |  |
| `HierarchyNodeIsTimeDependent` |  | |  | `node_timedep` |  |  |
| `HierarchyNodeType` |  | |  | `node_typelem` |  |  |
| `CnsldtnEliminationCharcValue` |  | |  | `eliminationmember` |  |  |
| `UniversalHierNodeID` |  | |  | `uhnodeid` |  |  |
| `UniversalHierNodeParentID` |  | |  | `par_uhnodeid` |  |  |
| `ConsolidationGroup` |  | |  | `congr` |  |  |
| `_Hierarchy` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Hierarchy` | `I_HierRuntimeRepresentation` | [0..1] |
| `_Text` | `I_HierRuntimeRprstnNodeText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IHRRPNODE'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Hierarchy Node'
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type:#PUBLIC_LOCAL_API
@ObjectModel: {
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #C,
    sizeCategory: #XXL
   }
}
@ClientHandling.algorithm: #SESSION_VARIABLE

@ObjectModel.supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE]
@Metadata.ignorePropagatedAnnotations: true

define view I_HierRuntimeRprstnNode
  as select from hrrp_node_n
  association [0..1] to I_HierRuntimeRepresentation as _Hierarchy on  $projection.RuntimeHierarchy = _Hierarchy.RuntimeHierarchy
                                                                  and $projection.ValidityEndDate  = _Hierarchy.ValidityEndDate
  association [0..*] to I_HierRuntimeRprstnNodeText as _Text      on  $projection.RuntimeHierarchy   = _Text.RuntimeHierarchy
                                                                  and $projection.ValidityEndDate    = _Text.ValidityEndDate
                                                                  and $projection.HierarchyNode      = _Text.HierarchyNode
                                                                  and $projection.HierarchyNodeClass = _Text.HierarchyNodeClass
                                                                  and $projection.ParentNode         = _Text.ParentNode
{
  key          hryid                                                     as RuntimeHierarchy,
               @Semantics.businessDate.to: true
  key          cast(hryvalto as fis_datbi preserving type )              as ValidityEndDate,
               @ObjectModel.text.association: '_Text'
  key          hrynode                                                   as HierarchyNode,
  key          nodecls                                                   as HierarchyNodeClass,
  key          parnode                                                   as ParentNode,
               hrytyp                                                    as HierarchyType,
               @Semantics.businessDate.from: true
               cast(hryvalfrom as fis_datab preserving type )            as ValidityStartDate,
               balind                                                    as DebitCreditCode,
               nodetype                                                  as NodeType,
               nodevalue                                                 as HierarchyNodeVal,
               hryseqnbr                                                 as HierarchyNodeSequence,
               hrylevel                                                  as HierarchyNodeLevel,

               //HRRP_SI_CLFD
               kokrs                                                     as ControllingArea, //FIS_KOKRS
               ktopl                                                     as ChartOfAccounts, //FIS_KTOPL
               itclg                                                     as ConsolidationChartOfAccounts,
               sityp                                                     as SubItemCategory,
               scen_id                                                   as ValidationScenarioID,
               fikrs                                                     as FinancialManagementArea,
               fma_fisyear                                               as FinMgmtAreaFiscalYear,
               //HRRP_SI_BETY
               saknr                                                     as GLAccount, //FIS_RACCT
               kostl                                                     as CostCenter, //FIS_KOSTL
               prctr                                                     as ProfitCenter,
               stagr                                                     as StatisticalKeyFigure, //FIS_STAGR
               lstar                                                     as ActivityType, //LEARR
               //_WBSElementBasicData.WBSElementExternalID             as WBSElementExternalID,
               cast( posid as fis_wbs_no_conv preserving type )          as WBSElement,
               fkber                                                     as FunctionalArea,
               bukrs                                                     as CompanyCode,
               segment                                                   as Segment,
               cbttype                                                   as BusinessTransactionType,
               aufnr                                                     as OrderID, //FIS_AUFNR
               fincode                                                   as Fund,
               grant_nbr                                                 as GrantID,
               budget_pd                                                 as BudgetPeriod,
               sponsored_class                                           as SponsoredClass,
               fictr                                                     as FundCenterText,
               sponsored_prog                                            as SponsoredProgram,
               measure                                                   as FundedProgram,
               partner                                                   as BusinessPartnerNumber,
               acc_id                                                    as BankAccountInternalID,
               lqpos                                                     as LiquidityItem,
               gsber                                                     as AssetBusinessArea,
               trtyp                                                     as FinancialTransactionType, //FIS_RMVCT
               kunnr                                                     as CustomerNum,
               lifnr                                                     as AssetSupplier,
               cast( pspid as fis_project_no_conv preserving type  )     as Project,
               //_ProjectBasicData.ProjectExternalID                   as ProjectExternalID,
               matnr                                                     as Material,
               kdgrp                                                     as CustomerGroup,
               land1                                                     as CountryOrRegion,
               item                                                      as FinancialStatementItemTemplate,
               cast ( bunit as fincs_consolidationunit preserving type ) as ConsolidationUnit,
               sitem                                                     as SubItem,
               docty                                                     as ConsolidationDocumentType,
               rcomp                                                     as Company,
               matkl                                                     as MaterialGroup,
               rule_num                                                  as ValidationRuleID,
               bzirk                                                     as SalesDistrict,
               fkart                                                     as BillingDocumentType,
               spart                                                     as Division,
               vkorg                                                     as SalesOrganization,
               vtweg                                                     as DistributionChannel,
               werks                                                     as Plant,
               brsch                                                     as Industry,
               fipex                                                     as CommitmentItem,
               plevl                                                     as PostingLevel, //FC_PLEVL
               fs_product_group                                          as FinancialServicesProductGroup,
               //HRRP_SI_CHSALES
               pricingrelevant                                           as PricingIsRelevant,
               //HRRP_SI_FSVITM
               @Semantics.signReversalIndicator: true
               cast( sign as rr_rsign preserving type )                  as SignIsInverted,
               regrouping                                                as GeneralLedgerAgingIncrement,
               fs_leafitem                                               as FinancialStatementLeafItem,
               fs_nodetype                                               as FinancialStatementNodeType,
               hrynodeext                                                as FinStmntNodeFormattedID,
               @Semantics.booleanIndicator:true
               banksplit                                                 as BankAccountGroupingIsSet,
               node_timedep                                              as HierarchyNodeIsTimeDependent,
               node_typelem                                              as HierarchyNodeType,
               eliminationmember                                         as CnsldtnEliminationCharcValue,
               uhnodeid                                                  as UniversalHierNodeID,
               par_uhnodeid                                              as UniversalHierNodeParentID,
               congr                                                     as ConsolidationGroup,
               _Text,
               _Hierarchy
}
where hrytyp not like 'C$%'
```
