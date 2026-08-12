---
name: I_COMMITMENTITEM
description: "Commitment Item"
app_component: PSM
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COMMITMENTITEM')/$value
semantic_en: "Commitment Item"
semantic_vi: "Commitment Item — CDS view giao diện dựa trên I_CommitmentItemBasic."
keywords:
  - "Commitment Item"
  - "commitment"
  - "item"
  - "financial"
  - "management"
  - "area"
  - "mgmt"
  - "fiscal"
  - "year"
  - "short"
  - "posting"
  - "enabled"
tags:
  - PSM
  - component:PSM
  - interface-view
---
# I_COMMITMENTITEM

**Commitment Item**

| Property | Value |
|---|---|
| App Component | `PSM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COMMITMENTITEM')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FinancialManagementArea` | ✓ | |  |  | `CHAR(4)` | Financial Management Area |
| `FinMgmtAreaFiscalYear` | ✓ | |  |  | `NUMC(4)` | Fiscal Year for Financial Management Area |
| `CommitmentItem` | ✓ | |  |  | `CHAR(24)` | Commitment Item |
| `CommitmentItemShortID` |  | |  |  | `CHAR(14)` | Commitment Item Short ID |
| `CommitmentItemIsPostingEnabled` |  | |  |  | `NUMC(1)` | Postable |
| `CmtmtItmFinancialTransaction` |  | |  |  | `NUMC(2)` | Financial transaction |
| `CommitmentItemCategory` |  | |  |  | `NUMC(1)` | Commitment Item Category |
| `CommitmentItemType` |  | |  |  | `CHAR(3)` | Commitment Item Type |
| `ParentCommitmentItem` |  | |  |  | `CHAR(24)` | Superior Commitment Item |
| `CommitmentItemInternalId` |  | |  |  | `CHAR(8)` | Internal ID of Commitment Item |
| `FundsCenter` |  | |  |  | `CHAR(16)` | Funds Center Default Value |
| `CmtmtItmDefaultFundsCenter` |  | |  |  | `CHAR(16)` | Default Funds Center for Commitment Item |
| `CmtmtItmCarryFwdItmCategory` |  | |  |  | `CHAR(2)` | Carryforward Item Category for Commitment Item |
| `CommitmentItemIsStatistical` |  | |  |  | `CHAR(1)` | Statistical commitment item |
| `CommitmentItemAuthznGrp` |  | |  |  | `CHAR(10)` | Authorization Group for Commitment Item |
| `CmtmtItemFinMgmtAreaForAuthzn` |  | |  |  | `CHAR(4)` | FM Area for Auth Grp for Commitment Item |
| `ValidityEndDate` |  | |  |  | `DATS(8)` | Commitment Item Validity End Date |
| `ValidityStartDate` |  | |  |  | `DATS(8)` | Commitment Item Validity Start Date |
| `CommitmentItemExpirationDate` |  | |  |  | `DATS(8)` | Commitment Item Expiration Date |
| `CreationDate` |  | |  |  | `DATS(8)` | FIFM: Entry Date |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | FIFM: Created By |
| `_FinMgmtArea` | | ✓ | | | | |
| `_FiscalYearForFinMgmtArea` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |
| `_FinancialTransaction` | | ✓ | | | | |
| `_CommitmentItemCategory` | | ✓ | | | | |
| `_CmtmtItmIsPostingEnabled` | | ✓ | | | | |
| `_CommitmentItemHierarchy` | | ✓ | | | | |
| `_CommitmentItemHierarchyNode` | | ✓ | | | | |
| `_CommitmentItemParent` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Extension` | `E_CommitmentItem` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COMMITMENTITEM')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COMMITMENTITEM')/$value)*

```abap
@EndUserText.label: 'Commitment Item'
@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true, internalName: #LOCAL }
@VDM.viewType: #COMPOSITE
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl.authorizationCheck: #CHECK
@AccessControl.privilegedAssociations: ['_CommitmentItemHierarchyNode']
@ObjectModel.representativeKey: 'CommitmentItem'
@ObjectModel.sapObjectNodeType.name: 'CommitmentItem'
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE,#EXTRACTION_DATA_SOURCE]
@ObjectModel.usageType: {
  sizeCategory: #M,
  serviceQuality: #A,
  dataClass: #MASTER
}
@Metadata.ignorePropagatedAnnotations:true
@Metadata.allowExtensions:true
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.sqlViewName: 'ICOMMITEM'
@AbapCatalog.preserveKey: true
define view I_CommitmentItem
  as select from I_CommitmentItemBasic
  
    association [1..1] to E_CommitmentItem as _Extension  //do not expose this association in the projection list of the view 
       on  $projection.FinancialManagementArea  = _Extension.FinancialManagementArea
       and $projection.FinMgmtAreaFiscalYear    = _Extension.FinMgmtAreaFiscalYear
       and $projection.CommitmentItem           = _Extension.CommitmentItem
  
{
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_FinMgmtAreaStdVH',
                     element: 'FinancialManagementArea' }
        }]
      @ObjectModel.foreignKey.association: '_FinMgmtArea'
  key FinancialManagementArea,
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_FsclYrForFinMgmtAreaStdVH',
                     element: 'FinMgmtAreaFiscalYear' },
          additionalBinding: [{ localElement: 'FinancialManagementArea',
                                element: 'FinancialManagementArea' }]
        }]
      @ObjectModel.foreignKey.association: '_FiscalYearForFinMgmtArea'
  key FinMgmtAreaFiscalYear,
      @ObjectModel.text.association: '_Text'
      @ObjectModel.hierarchy.association: '_CommitmentItemHierarchyNode'
  key CommitmentItem,
      CommitmentItemShortID,
      CommitmentItemIsPostingEnabled,
      CmtmtItmFinancialTransaction,
      CommitmentItemCategory,
      CommitmentItemType,
      ParentCommitmentItem,
      CommitmentItemInternalId,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'CmtmtItmDefaultFundsCenter'
      FundsCenter,
      CmtmtItmDefaultFundsCenter,
      CmtmtItmCarryFwdItmCategory,
      CommitmentItemIsStatistical,
      CommitmentItemAuthznGrp,
      CmtmtItemFinMgmtAreaForAuthzn,
      @Semantics.businessDate.to: true
      ValidityEndDate,
      @Semantics.businessDate.from: true
      ValidityStartDate,
      CommitmentItemExpirationDate,
      CreationDate,
      CreatedByUser,      

      _FinMgmtArea,
      _FiscalYearForFinMgmtArea,
      _Text,
      _FinancialTransaction,
      _CommitmentItemCategory,
      _CmtmtItmIsPostingEnabled,
      _CommitmentItemHierarchy,
      _CommitmentItemHierarchyNode,
      _CommitmentItemParent

};
```
