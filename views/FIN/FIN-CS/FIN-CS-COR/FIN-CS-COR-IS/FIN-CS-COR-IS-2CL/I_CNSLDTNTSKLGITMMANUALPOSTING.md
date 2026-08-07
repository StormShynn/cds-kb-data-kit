---
name: I_CNSLDTNTSKLGITMMANUALPOSTING
description: Cnsldtntsklgitmmanualposting
app_component: FIN-CS-COR-IS-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-CS
  - FIN-CS-COR
  - interface-view
  - component:FIN-CS-COR-IS-2CL
  - lob:Other
---
# I_CNSLDTNTSKLGITMMANUALPOSTING

**Cnsldtntsklgitmmanualposting**

| Property | Value |
|---|---|
| App Component | `FIN-CS-COR-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CnsldtnTaskLogUUID` | ✓ | |  |  |  |  |
| `CnsldtnTaskLogItemUUID` | ✓ | |  |  |  |  |
| `CnsldtnTaskLogItemType` |  | |  |  |  |  |
| `CnsldtnGroupJrnlEntry` |  | |  |  |  |  |
| `FiscalPeriod` |  | |  |  |  |  |
| `PostingFiscalYear` |  | |  |  |  |  |
| `ConsolidationDocumentNumber` |  | |  |  |  |  |
| `ConsolidationPostingItem` |  | |  |  |  |  |
| `ConsolidationGroup` |  | |  |  |  |  |
| `SubItemCategory` |  | |  |  |  |  |
| `SubItem` |  | |  |  |  |  |
| `ConsolidationUnit` |  | |  |  |  |  |
| `CnsldtnTskLgItmRowNmbr` |  | |  |  |  |  |
| `CnsldtnFinancialStatementItem` |  | |  |  |  |  |
| `PartnerConsolidationUnit` |  | |  |  |  |  |
| `ConsolidationChartOfAccounts` |  | |  |  |  |  |
| `ConsolidationVersion` |  | |  |  |  |  |
| `_ConsolidationTaskLog` | | ✓ | | | | |
| `_CnsldtnGroup` | | ✓ | | | | |
| `_CnsldtnSubitemCategory` | | ✓ | | | | |
| `_CnsldtnSubItem` | | ✓ | | | | |
| `_CnsldtnUnit` | | ✓ | | | | |
| `_CnsldtnFSItem` | | ✓ | | | | |
| `_CnsldtnUnitPartner` | | ✓ | | | | |
| `_CnsldtnChartOfAccounts` | | ✓ | | | | |
| `_CnsldtnVersion` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ConsolidationTaskLog` | `I_ConsolidationTaskLog` | [1..1] |
| `_CnsldtnGroup` | `I_CnsldtnGroup_3` | [0..1] |
| `_CnsldtnSubitemCategory` | `I_CnsldtnSubitemCategory_2` | [0..1] |
| `_CnsldtnSubItem` | `I_CnsldtnSubitem_2` | [0..1] |
| `_CnsldtnUnit` | `I_CnsldtnUnit_4` | [0..1] |
| `_CnsldtnFSItem` | `I_CnsldtnFSItem_2` | [0..1] |
| `_CnsldtnUnitPartner` | `I_CnsldtnUnit_4` | [0..1] |
| `_CnsldtnChartOfAccounts` | `I_CnsldtnChartOfAccounts` | [0..1] |
| `_CnsldtnVersion` | `I_CnsldtnVersion` | [0..1] |
| `_Extension` | `E_CnsldtnTaskLogItemDataInput` | [1..1] |

## Source Code

```abap
@AccessControl: { authorizationCheck: #MANDATORY,
                  personalData.blocking: #NOT_REQUIRED }

@EndUserText.label: 'Cnsldtn Task Log Item Manual Posting'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { modelingPattern: #NONE,
                sapObjectNodeType.name: 'CnsldtnTskLogItmManualPosting',
                supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE,
                                         #CDS_MODELING_ASSOCIATION_TARGET,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass:      #MIXED,
                             serviceQuality: #C,
                             sizeCategory:   #XL } }

@VDM: { lifecycle.contract.type: #PUBLIC_LOCAL_API,
        viewType: #COMPOSITE }

define root view entity I_CnsldtnTskLgItmManualPosting
  as select from I_CnsldtnTaskLogItemDataInput as item

  association [1..1] to I_ConsolidationTaskLog     as _ConsolidationTaskLog   on $projection.CnsldtnTaskLogUUID = _ConsolidationTaskLog.CnsldtnTaskLogUUID // no need to extra inner join to header, association (left outer join) speed is the same

  association [0..1] to I_CnsldtnGroup_3           as _CnsldtnGroup           on $projection.ConsolidationGroup = _CnsldtnGroup.ConsolidationGroup
  association [0..1] to I_CnsldtnSubitemCategory_2 as _CnsldtnSubitemCategory on $projection.SubItemCategory = _CnsldtnSubitemCategory.CnsldtnSubitemCategory
  association [0..1] to I_CnsldtnSubitem_2         as _CnsldtnSubItem         on $projection.SubItemCategory = _CnsldtnSubItem.CnsldtnSubitemCategory and $projection.SubItem = _CnsldtnSubItem.CnsldtnSubitem
  association [0..1] to I_CnsldtnUnit_4            as _CnsldtnUnit            on $projection.ConsolidationUnit = _CnsldtnUnit.ConsolidationUnit
  association [0..1] to I_CnsldtnFSItem_2          as _CnsldtnFSItem          on $projection.ConsolidationChartOfAccounts = _CnsldtnFSItem.ConsolidationChartOfAccounts and $projection.CnsldtnFinancialStatementItem = _CnsldtnFSItem.CnsldtnFinancialStatementItem
  association [0..1] to I_CnsldtnUnit_4            as _CnsldtnUnitPartner     on $projection.PartnerConsolidationUnit = _CnsldtnUnitPartner.ConsolidationUnit
  association [0..1] to I_CnsldtnChartOfAccounts   as _CnsldtnChartOfAccounts on $projection.ConsolidationChartOfAccounts = _CnsldtnChartOfAccounts.ConsolidationChartOfAccounts
  association [0..1] to I_CnsldtnVersion           as _CnsldtnVersion         on $projection.ConsolidationVersion = _CnsldtnVersion.ConsolidationVersion

  //do not expose this association in the projection list of the view
  association [1..1] to E_CnsldtnTaskLogItemDataInput as _Extension           on $projection.CnsldtnTaskLogUUID = _Extension.CnsldtnTaskLogUUID and $projection.CnsldtnTaskLogItemUUID = _Extension.CnsldtnTaskLogItemUUID

{
  key item.CnsldtnTaskLogUUID,
  key item.CnsldtnTaskLogItemUUID,

      item.CnsldtnTaskLogItemType,
      item.CnsldtnGroupJrnlEntry,
      item.FiscalPeriod,
      item.PostingFiscalYear,
      item.ConsolidationDocumentNumber,
      item.ConsolidationPostingItem,

      @ObjectModel: { foreignKey.association: '_CnsldtnGroup',
                      sapObjectNodeTypeReference: 'ConsolidationGroup' }
      item.ConsolidationGroup,

      @ObjectModel: { foreignKey.association: '_CnsldtnSubitemCategory',
                      sapObjectNodeTypeReference: 'ConsolidationSubitemCategory' }
      item.SubItemCategory,

      @ObjectModel.foreignKey.association: '_CnsldtnSubItem'
//      @ObjectModel.sapObjectNodeTypeReference: 'ConsolidationSubitem'
      item.SubItem,

      @ObjectModel: { foreignKey.association: '_CnsldtnUnit',
                      sapObjectNodeTypeReference: 'ConsolidationUnit' }
      item.ConsolidationUnit,

      item.CnsldtnTskLgItmRowNmbr,

      @ObjectModel: { foreignKey.association: '_CnsldtnFSItem',
                      sapObjectNodeTypeReference: 'CnsldtnFinancialStatementItem' }
      item.CnsldtnFinancialStatementItem,

      @ObjectModel: { foreignKey.association: '_CnsldtnUnitPartner',
                      sapObjectNodeTypeReference: 'ConsolidationUnit' }
      item.PartnerConsolidationUnit,

      @ObjectModel: { foreignKey.association: '_CnsldtnChartOfAccounts',
                      sapObjectNodeTypeReference: 'ConsolidationChartOfAccounts' }
      item.ConsolidationChartOfAccounts,

      @ObjectModel: { foreignKey.association: '_CnsldtnVersion',
                      sapObjectNodeTypeReference: 'ConsolidationVersion' }
      item.ConsolidationVersion,

      _ConsolidationTaskLog,
      _CnsldtnGroup,
      _CnsldtnSubitemCategory,
      _CnsldtnSubItem,
      _CnsldtnUnit,
      _CnsldtnFSItem,
      _CnsldtnUnitPartner,
      _CnsldtnChartOfAccounts,
      _CnsldtnVersion
}

where _ConsolidationTaskLog.ConsolidationTaskCategory = '04'
  and item.CnsldtnTaskLogItemType = 'DO'
```
