---
name: I_CNSLDTNFINSTMNTITEMLONGTEXT
description: "Financial Statement Item Long - Text"
app_component: FIN-CS-MD-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNFINSTMNTITEMLONGTEXT')/$value
semantic_en: "Financial Statement Item Long - Text"
semantic_vi: "Financial Statement Item Long - Text — CDS view giao diện dựa trên fincs_fsitemt."
keywords:
  - "financial"
  - "statement"
  - "item"
  - "long"
  - "text"
  - "consolidation"
  - "chart"
  - "accounts"
  - "language"
  - "record"
  - "number"
tags:
  - FIN
  - bo:companycode
  - component:FIN-CS-MD-2CL
  - FIN-CS
  - FIN-CS-MD
  - FIN-CS-MD-2CL
  - interface-view
  - lob:finance
---
# I_CNSLDTNFINSTMNTITEMLONGTEXT

**Financial Statement Item Long - Text**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNFINSTMNTITEMLONGTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConsolidationChartOfAccounts` | ✓ | |  | `itclg` | `CHAR(2)` | Consolidation Chart of Accounts |
| `FinancialStatementItem` | ✓ | |  | `cast(item as fc_item)` | `CHAR(10)` | Financial Statement Item |
| `Language` | ✓ | |  | `langu` | `LANG(1)` | Language Key |
| `ConsolidationRecordNumber` |  | |  | `cast( '1' as fc_seqnr )` | `NUMC(1)` | Sequence number |
| `FinancialStatementItemLongText` |  | |  | `txtlg` | `CHAR(250)` | Financial Statement Item Long Description |
| `_ChartOfAccountsText` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |
| `_ChartOfAccounts` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ChartOfAccountsText` | `I_CnsldtnChartOfAccountsT` | [0..*] |
| `_Language` | `I_Language` | [0..1] |
| `_ChartOfAccounts` | `I_CnsldtnChartOfAccounts` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNFINSTMNTITEMLONGTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNFINSTMNTITEMLONGTEXT')/$value)*

```abap
@AbapCatalog:{
  sqlViewName: 'ICNSLDTNFSITEMLT',
  compiler.compareFilter: true,
  preserveKey: true,
  buffering:{
    status: #ACTIVE,
    type: #GENERIC,
    numberOfKeyFields: 1 }
}
@AccessControl.privilegedAssociations: ['_ChartOfAccountsText']
@AccessControl.authorizationCheck: #CHECK
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel:{
  usageType: {
    dataClass: #CUSTOMIZING,
    serviceQuality: #C,
    sizeCategory: #M},
  representativeKey: 'FinancialStatementItem',
  dataCategory: #TEXT,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #LANGUAGE_DEPENDENT_TEXT ]
}
@VDM.viewType: #BASIC
@EndUserText.label: 'Financial Statement Item Long - Text'

define view I_CnsldtnFinStmntItemLongText
  as select from fincs_fsitemt

  association [0..*] to I_CnsldtnChartOfAccountsT as _ChartOfAccountsText on $projection.ConsolidationChartOfAccounts = _ChartOfAccountsText.ConsolidationChartOfAccounts

  association [0..1] to I_Language                as _Language            on $projection.Language = _Language.Language

  association [0..1] to I_CnsldtnChartOfAccounts  as _ChartOfAccounts     on $projection.ConsolidationChartOfAccounts = _ChartOfAccounts.ConsolidationChartOfAccounts
{

      @ObjectModel.text.association: '_ChartOfAccountsText' //STS - annotation not required as it is not the representative key
      @ObjectModel.foreignKey.association: '_ChartOfAccounts'
  key itclg                   as ConsolidationChartOfAccounts,

  key cast(item as fc_item)   as FinancialStatementItem,

      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language
  key langu                   as Language,

      cast( '1' as fc_seqnr ) as ConsolidationRecordNumber,

      @Semantics.text
      txtlg                   as FinancialStatementItemLongText,

      _ChartOfAccounts,

      _Language,

      @Consumption.hidden: true
      _ChartOfAccountsText
};
```
