---
name: I_CNSLDTNPROFITCENTERHIERVH
description: "Consolidation Profit Center Hierarchy"
app_component: FIN-CS-MD-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNPROFITCENTERHIERVH')/$value
semantic_en: "Consolidation Profit Center Hierarchy"
semantic_vi: "Consolidation Profit Center Hierarchy — CDS view tổng hợp (master data) dựa trên P_CnsldtnProfitCenterHierVH."
keywords:
  - "consolidation"
  - "profit"
  - "center"
  - "hierarchy"
  - "prft"
  - "validity"
  - "date"
  - "start"
  - "controlling"
  - "area"
  - "cnsldtn"
  - "hier"
  - "text"
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
# I_CNSLDTNPROFITCENTERHIERVH

**Consolidation Profit Center Hierarchy**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNPROFITCENTERHIERVH')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConsolidationPrftCtrHierarchy` | ✓ | | `_Source` | `ConsolidationPrftCtrHierarchy` | `CHAR(40)` | Consolidation Profit Center Hierarchy |
| `ValidityEndDate` | ✓ | | `_Source` | `ValidityEndDate` | `DATS(8)` | Validity End Date |
| `ValidityStartDate` |  | | `_Source` | `ValidityStartDate` | `DATS(8)` | Validity Start Date |
| `ControllingArea` |  | | `_Source` | `ControllingArea` | `CHAR(4)` | Controlling Area |
| `CnsldtnProfitCenterHierText` |  | | `_Source` | `CnsldtnProfitCenterHierText` | `CHAR(50)` | Consolidation Hierarchy Description |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNPROFITCENTERHIERVH')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNPROFITCENTERHIERVH')/$value)*

```abap
@AccessControl.authorizationCheck: #MANDATORY
@Metadata:{
  allowExtensions:true,
  ignorePropagatedAnnotations:true
}
@ObjectModel:{
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #C,
    sizeCategory: #XL
  },
  representativeKey: 'ConsolidationPrftCtrHierarchy',
  dataCategory:#VALUE_HELP,
  modelingPattern: #VALUE_HELP_PROVIDER,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #VALUE_HELP_PROVIDER ]
}
@VDM:{
  viewType: #COMPOSITE
}
@EndUserText.label: 'Consolidation Profit Center Hierarchy'

define view entity I_CnsldtnProfitCenterHierVH
  as select from P_CnsldtnProfitCenterHierVH as _Source

{

      @ObjectModel.text.element: ['CnsldtnProfitCenterHierText']
  key _Source.ConsolidationPrftCtrHierarchy,

      @Semantics.businessDate.to: true
  key _Source.ValidityEndDate,

      @Semantics.businessDate.from: true
      _Source.ValidityStartDate,

      _Source.ControllingArea,

      @Semantics.text
      _Source.CnsldtnProfitCenterHierText

}
```
