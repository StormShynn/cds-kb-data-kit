---
name: I_CNSLDTNFSITEMTEXT_2
description: Cnsldtnfsitemtext 2
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
  - text
  - item-level
  - component:FIN-CS-MD-2CL
  - lob:Other
---
# I_CNSLDTNFSITEMTEXT_2

**Cnsldtnfsitemtext 2**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `Language` | ✓ | |  | `langu` |
| `ConsolidationChartOfAccounts` | ✓ | |  | `cast( itclg as fincs_conschartofaccounts preserving type )` |
| `CnsldtnFinancialStatementItem` |  | |  | `}] key cast ( item as fincs_consolidationfsitem preserving type )` |
| `CnsldtnFSItemText` |  | |  | `cast ( txtsh as fincs_short_text_15 preserving type )` |
| `CnsldtnFSItemMediumText` |  | |  | `cast ( txtmi as fincs_medium_text_50 preserving type )` |
| `CnsldtnFSItemLongText` |  | |  | `cast ( txtlg as fincs_long_text_250 preserving type )` |
| `_Language` | | ✓ | | |
| `_CnsldtnChartOfAccounts` | | ✓ | | |
| `_FSItem` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [1..1] |
| `_CnsldtnChartOfAccounts` | `I_CnsldtnChartOfAccounts` | [1..1] |
| `_FSItem` | `I_CnsldtnFSItem_2` | [1..1] |

## Source Code

```abap
@Analytics: {
  dataExtraction.enabled: true,
  technicalName: 'ICSFSITEMT2'
  }
@AccessControl: {
  authorizationCheck: #MANDATORY
  }
@Metadata:{
  ignorePropagatedAnnotations: true
  }
@ObjectModel:{
  usageType: {
    dataClass: #CUSTOMIZING,
    serviceQuality: #B,
    sizeCategory: #L },
  representativeKey: 'CnsldtnFinancialStatementItem',
  dataCategory: #TEXT,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #EXTRACTION_DATA_SOURCE,
                          #LANGUAGE_DEPENDENT_TEXT ],
  sapObjectNodeType.name: 'CnsldtnFSItemText'  
}
@Search.searchable: true
@VDM:{
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@EndUserText.label: 'Cnsldtn Fincancial Statement Item - Text'

define view entity I_CnsldtnFSItemText_2
  as select from fincs_fsitemt

  association [1..1] to I_Language               as _Language               on  $projection.Language = _Language.Language

  association [1..1] to I_CnsldtnChartOfAccounts as _CnsldtnChartOfAccounts on  $projection.ConsolidationChartOfAccounts = _CnsldtnChartOfAccounts.ConsolidationChartOfAccounts

  association [1..1] to I_CnsldtnFSItem_2        as _FSItem                 on  $projection.ConsolidationChartOfAccounts  = _FSItem.ConsolidationChartOfAccounts
                                                                            and $projection.CnsldtnFinancialStatementItem = _FSItem.CnsldtnFinancialStatementItem

{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language
  key langu                                                      as Language,

      @ObjectModel.foreignKey.association: '_CnsldtnChartOfAccounts'
      @Consumption.valueHelpDefinition: [{ entity: { name: 'I_CnsldtnChartOfAccountsVH',
                                                     element: 'ConsolidationChartOfAccounts' } }]
  key cast( itclg as fincs_conschartofaccounts preserving type ) as ConsolidationChartOfAccounts,

      @ObjectModel.foreignKey.association: '_FSItem'
      @Consumption.valueHelpDefinition: [{ entity: { name: 'I_CnsldtnFSItemVH',
                                                     element: 'CnsldtnFinancialStatementItem' },
                    additionalBinding: [{ localElement: 'ConsolidationChartOfAccounts', element: 'ConsolidationChartOfAccounts', usage: #FILTER_AND_RESULT }]
      }]
  key cast ( item as fincs_consolidationfsitem preserving type ) as CnsldtnFinancialStatementItem,

      @Semantics.text: true
      @Search:{ defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.8 }
      cast ( txtsh as fincs_short_text_15 preserving type )      as CnsldtnFSItemText,

      @Semantics.text
      cast ( txtmi as fincs_medium_text_50 preserving type )     as CnsldtnFSItemMediumText,

      // intentionally no @Semantics.text because char250 too long for analytics
      cast ( txtlg as fincs_long_text_250 preserving type )      as CnsldtnFSItemLongText,


      _Language, // required for value help retrieval
      _CnsldtnChartOfAccounts,
      _FSItem
}
```
