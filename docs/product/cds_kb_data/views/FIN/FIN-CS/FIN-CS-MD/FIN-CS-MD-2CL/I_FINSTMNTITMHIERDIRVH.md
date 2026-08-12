---
name: I_FINSTMNTITMHIERDIRVH
description: "This CDS view provides access to a value help for the hierarchy of the financial statement item. This CDS view provides the prerequisites for answering the following business questions: What hierarchies on financial statement item do exist and in which consolidation chart of accounts are they defined?"
app_component: FIN-CS-MD-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FINSTMNTITMHIERDIRVH')/$value
semantic_en: "This CDS view provides access to a value help for the hierarchy of the financial statement item. This CDS view provides the prerequisites for answering the following business questions: What hierarchies on financial statement item do exist and in which consolidation chart of accounts are they defined?"
semantic_vi: "I_FINSTMNTITMHIERDIRVH — CDS view tổng hợp dựa trên P_FinStmntItmHierDirVH."
keywords:
  - "finstmntitmhierdirvh"
  - "financial"
  - "statement"
  - "item"
  - "hier"
  - "consolidation"
  - "chart"
  - "accounts"
  - "additional"
  - "master"
  - "data"
  - "hierarchy"
tags:
  - FIN
  - account
  - bo:companycode
  - component:FIN-CS-MD-2CL
  - FIN-CS
  - FIN-CS-MD
  - FIN-CS-MD-2CL
  - interface-view
  - lob:finance
---
# I_FINSTMNTITMHIERDIRVH

**This CDS view provides access to a value help for the hierarchy of the financial statement item. This CDS view provides the prerequisites for answering the following business questions: What hierarchies on financial statement item do exist and in which consolidation chart of accounts are they defined?**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FINSTMNTITMHIERDIRVH')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FinancialStatementItemHier` | ✓ | |  |  | `CHAR(10)` | Item Hierarchy |
| `ConsolidationChartOfAccounts` |  | |  |  | `CHAR(2)` | Consolidation Chart of Accounts |
| `AdditionalMasterDataHierarchy` |  | |  |  | `CHAR(40)` | Consolidation Hierarchy ID |
| `_Text` | | ✓ | | | | |
| `_Text_2` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_FinStmntItmHierDirT` | [0..*] |
| `_Text_2` | `I_FinStmntItmHierDirT` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FINSTMNTITMHIERDIRVH')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FINSTMNTITMHIERDIRVH')/$value)*

```abap
@AbapCatalog: {
    sqlViewName: 'ICCFSITMHIERDIRV',
    compiler.compareFilter: true,
    preserveKey: true,
    buffering.status: #NOT_ALLOWED
}
@AccessControl: {
    authorizationCheck: #NOT_REQUIRED
}
@Metadata: {
    allowExtensions:true,
    ignorePropagatedAnnotations:true
}
@ClientHandling: {
    algorithm: #SESSION_VARIABLE
}
@ObjectModel: {
    usageType: {
      dataClass: #CUSTOMIZING,
      serviceQuality: #B,
      sizeCategory: #S
    },
    representativeKey: 'FinancialStatementItemHier',
  dataCategory:#VALUE_HELP, // srl 2968116
  modelingPattern: #NONE,   // srl 2968116                                   
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE, // srl 2968116
                          #CDS_MODELING_ASSOCIATION_TARGET]                  
}
@Analytics: {
    dataCategory: #DIMENSION,
    internalName: #LOCAL
}
@VDM: {
    viewType: #COMPOSITE
}
@EndUserText: {
    label: 'FSItem Hierarchy Directory'
}
define view I_FinStmntItmHierDirVH
  as select from P_FinStmntItmHierDirVH

  association [0..*] to I_FinStmntItmHierDirT as _Text   on  $projection.FinancialStatementItemHier    = _Text.FinancialStatementItemHier
                                                         
  association [0..*] to I_FinStmntItmHierDirT as _Text_2 on  $projection.FinancialStatementItemHier    = _Text_2.FinancialStatementItemHier
                                                         and $projection.ConsolidationChartOfAccounts  = _Text_2.ConsolidationChartOfAccounts
                                                         and $projection.AdditionalMasterDataHierarchy = _Text_2.AdditionalMasterDataHierarchy
{
      @ObjectModel.text.association: '_Text_2'
  key FinancialStatementItemHier,
  
      ConsolidationChartOfAccounts,
      
      AdditionalMasterDataHierarchy,

      @API.element: {releaseState: #DEPRECATED, successor: '_Text_2'}
      _Text,
      _Text_2
}
```
