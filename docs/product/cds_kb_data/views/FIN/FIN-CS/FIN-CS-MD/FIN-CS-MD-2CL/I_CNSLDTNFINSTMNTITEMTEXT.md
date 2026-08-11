---
name: I_CNSLDTNFINSTMNTITEMTEXT
description: "Financial Statement Item - Text"
app_component: FIN-CS-MD-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNFINSTMNTITEMTEXT')/$value
semantic_en: "Financial Statement Item - Text"
semantic_vi: "Financial Statement Item - Text — CDS view giao diện dựa trên fincs_fsitemt."
keywords:
  - "financial"
  - "statement"
  - "item"
  - "text"
  - "consolidation"
  - "chart"
  - "accounts"
  - "language"
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
# I_CNSLDTNFINSTMNTITEMTEXT

**Financial Statement Item - Text**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNFINSTMNTITEMTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConsolidationChartOfAccounts` | ✓ | |  | `itclg` | `CHAR(2)` | Consolidation Chart of Accounts |
| `FinancialStatementItem` | ✓ | |  | `cast ( item as fincs_fsi_item )` | `CHAR(10)` | Financial Statement Item |
| `Language` | ✓ | |  | `langu` | `LANG(1)` | Language Key |
| `FinancialStatementItemText` |  | |  | `cast ( txtsh as fincs_name )` | `CHAR(15)` | Name |
| `FinancialStatementItemMdmText` |  | |  | `cast ( txtmi as fincs_desc )` | `CHAR(50)` | Description |
| `FinancialStatementItemLongText` |  | |  | `cast ( txtlg as fincs_longdesc )` | `CHAR(250)` | Long Description |
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

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNFINSTMNTITEMTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNFINSTMNTITEMTEXT')/$value)*

```abap
@AbapCatalog:{
  sqlViewName: 'ICNSLDTNFSITEMT',
  compiler.compareFilter: true,
  preserveKey: true,
  buffering:{
    status: #ACTIVE,
    type: #GENERIC,
    numberOfKeyFields: 1 }
}
@AccessControl: {
  authorizationCheck: #CHECK,
  privilegedAssociations: ['_ChartOfAccountsText']
  }
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel:{
  usageType: {
    dataClass: #CUSTOMIZING,
    serviceQuality: #B,
    sizeCategory: #M },
  representativeKey: 'FinancialStatementItem',
  dataCategory: #TEXT,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #LANGUAGE_DEPENDENT_TEXT ]
  }
@VDM.viewType: #BASIC
@EndUserText.label: 'Financial Statement Item - Text'

define view I_CnsldtnFinStmntItemText
  as select from fincs_fsitemt


  association [0..*] to I_CnsldtnChartOfAccountsT as _ChartOfAccountsText on $projection.ConsolidationChartOfAccounts = _ChartOfAccountsText.ConsolidationChartOfAccounts

  association [0..1] to I_Language                as _Language            on $projection.Language = _Language.Language

  association [0..1] to I_CnsldtnChartOfAccounts  as _ChartOfAccounts     on $projection.ConsolidationChartOfAccounts = _ChartOfAccounts.ConsolidationChartOfAccounts
{

      @ObjectModel.text.association: '_ChartOfAccountsText' //STS - annotation not required as it is not the representative key
      @ObjectModel.foreignKey.association: '_ChartOfAccounts'
  key itclg                            as ConsolidationChartOfAccounts,

  key cast ( item as fincs_fsi_item )  as FinancialStatementItem,

      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language
  key langu                            as Language,

      @Semantics.text
      cast ( txtsh as fincs_name )     as FinancialStatementItemText,

      @Semantics.text
      cast ( txtmi as fincs_desc )     as FinancialStatementItemMdmText,

      cast ( txtlg as fincs_longdesc ) as FinancialStatementItemLongText,

      _ChartOfAccounts,
      _Language,

      @Consumption.hidden: true
      _ChartOfAccountsText

};
```
