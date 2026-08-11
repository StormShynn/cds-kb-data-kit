---
name: I_CNSLDTNPROFITCENTERHIERDIRVH
description: "This CDS view provides access to a value help for the hierarchy of the profit center. This CDS view provides the prerequisites for answering the following business questions: What hierarchies of profit center do exist and in which interval of fiscal year and period are they defined? What is the controlling area of the profit center?"
app_component: FIN-CS-MD-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNPROFITCENTERHIERDIRVH')/$value
semantic_en: "This CDS view provides access to a value help for the hierarchy of the profit center. This CDS view provides the prerequisites for answering the following business questions: What hierarchies of profit center do exist and in which interval of fiscal year and period are they defined? What is the controlling area of the profit center?"
semantic_vi: "Consolidation Profit Center Hier Dir — CDS view tổng hợp (master data) dựa trên P_CnsldtnProfitCenterHierDirVH."
keywords:
  - "consolidation"
  - "profit"
  - "center"
  - "hier"
  - "dir"
  - "additional"
  - "master"
  - "data"
  - "hierarchy"
  - "validity"
  - "date"
  - "start"
  - "controlling"
  - "area"
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
# I_CNSLDTNPROFITCENTERHIERDIRVH

**This CDS view provides access to a value help for the hierarchy of the profit center. This CDS view provides the prerequisites for answering the following business questions: What hierarchies of profit center do exist and in which interval of fiscal year and period are they defined? What is the controlling area of the profit center?**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNPROFITCENTERHIERDIRVH')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `AdditionalMasterDataHierarchy` | ✓ | |  | `cast(AdditionalMasterDataHierarchy as fincs_hryid_profitcenter)` | `CHAR(40)` | Profit Center Hierarchy |
| `ValidityEndDate` | ✓ | |  |  | `DATS(8)` | Validity End Date |
| `ValidityStartDate` |  | |  |  | `DATS(8)` | Validity Start Date |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `_Text` | | ✓ | | | | |
| `_Text_2` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CnsldtnProfitCenterHierDirT` | [0..*] |
| `_Text_2` | `I_CnsldtnProfitCenterHierDirT` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNPROFITCENTERHIERDIRVH')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNPROFITCENTERHIERDIRVH')/$value)*

```abap
@AbapCatalog:{
  sqlViewName: 'ICSPCHDVH',
  compiler.compareFilter: true,
  preserveKey: true
  }
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata:{
  allowExtensions:true,
  ignorePropagatedAnnotations:true
  }
@ObjectModel:{
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #C,
    sizeCategory: #XL},
  representativeKey: 'AdditionalMasterDataHierarchy',
  dataCategory:#VALUE_HELP,
  modelingPattern: #NONE,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET]
  }
@Analytics: { // HL required by Query 2CIMCFNDNCUBE/2CCSRPT30Q
    dataCategory: #DIMENSION
    }
@VDM:{
  viewType: #COMPOSITE
  }
@EndUserText.label: 'Consolidation Profit Center Hier Dir'

define view I_CnsldtnProfitCenterHierDirVH
  as select from P_CnsldtnProfitCenterHierDirVH

  association [0..*] to I_CnsldtnProfitCenterHierDirT as _Text   on  $projection.AdditionalMasterDataHierarchy = _Text.AdditionalMasterDataHierarchy

  association [0..*] to I_CnsldtnProfitCenterHierDirT as _Text_2 on  $projection.AdditionalMasterDataHierarchy = _Text_2.AdditionalMasterDataHierarchy
                                                                 and $projection.ControllingArea               = _Text_2.ControllingArea

{
      @ObjectModel.text.association: '_Text_2'
  key cast(AdditionalMasterDataHierarchy as fincs_hryid_profitcenter) as AdditionalMasterDataHierarchy,

      @Semantics.businessDate.to: true
  key ValidityEndDate,

      @Semantics.businessDate.from: true
      ValidityStartDate,

      ControllingArea,

      @API.element: {releaseState: #DEPRECATED, successor: '_Text_2'}
      _Text,

      _Text_2

}
```
