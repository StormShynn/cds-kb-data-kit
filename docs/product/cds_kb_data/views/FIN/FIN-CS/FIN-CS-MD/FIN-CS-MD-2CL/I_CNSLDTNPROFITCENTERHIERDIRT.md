---
name: I_CNSLDTNPROFITCENTERHIERDIRT
description: "Cnsldtn Profit Center Hier Dir - Text"
app_component: FIN-CS-MD-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNPROFITCENTERHIERDIRT')/$value
semantic_en: "Cnsldtn Profit Center Hier Dir - Text"
semantic_vi: "Cnsldtn Profit Center Hier Dir - Text — CDS view giao diện (master data) dựa trên P_CnsldtnProfitCenterHierDirT."
keywords:
  - "cnsldtn"
  - "profit"
  - "center"
  - "hier"
  - "dir"
  - "text"
  - "controlling"
  - "area"
  - "additional"
  - "master"
  - "data"
  - "hierarchy"
  - "validity"
  - "date"
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
# I_CNSLDTNPROFITCENTERHIERDIRT

**Cnsldtn Profit Center Hier Dir - Text**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNPROFITCENTERHIERDIRT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ControllingArea` | ✓ | |  | `cast( _HierarchyText.ControllingArea as fincs_controllingarea preserving type )` | `CHAR(4)` | Controlling Area |
| `AdditionalMasterDataHierarchy` | ✓ | | `_HierarchyText` | `ConsolidationPrftCtrHierarchy` | `CHAR(40)` | Profit Center Hierarchy |
| `ValidityEndDate` | ✓ | | `_HierarchyText` | `ValidityEndDate` | `DATS(8)` | Validity End Date |
| `Language` | ✓ | | `_HierarchyText` | `Language` | `LANG(1)` | Language Key |
| `ValidityStartDate` |  | | `_HierarchyText` | `ValidityStartDate` | `DATS(8)` | Validity Start Date |
| `ProfitCenterHierarchyName` |  | | `_HierarchyText` | `CnsldtnProfitCenterHierText` | `CHAR(50)` | Consolidation Hierarchy Description |
| `_ControllingArea` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ControllingArea` | `I_CnsldtnControllingArea` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNPROFITCENTERHIERDIRT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNPROFITCENTERHIERDIRT')/$value)*

```abap
@AbapCatalog:{
  sqlViewName: 'ICCPRFTCTRHDT',
  compiler.compareFilter: true,
  preserveKey: true
  }
@Analytics: {
  dataExtraction.enabled: true
  }
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata:{
  ignorePropagatedAnnotations: true
  }
@ObjectModel:{
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #C,
    sizeCategory: #XL},
  dataCategory: #TEXT,
  representativeKey: 'AdditionalMasterDataHierarchy',
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #LANGUAGE_DEPENDENT_TEXT ]
}
@VDM.viewType: #COMPOSITE
@EndUserText.label: 'Cnsldtn Profit Center Hier Dir - Text'

define view I_CnsldtnProfitCenterHierDirT

  as select from P_CnsldtnProfitCenterHierDirT as _HierarchyText

  association [1..1] to I_CnsldtnControllingArea as _ControllingArea on $projection.ControllingArea = _ControllingArea.ControllingArea

{
        @ObjectModel.foreignKey.association: '_ControllingArea'
  key   cast( _HierarchyText.ControllingArea as fincs_controllingarea preserving type ) as ControllingArea,

  key   _HierarchyText.ConsolidationPrftCtrHierarchy                                    as AdditionalMasterDataHierarchy,

        @Semantics.businessDate.to: true
  key   _HierarchyText.ValidityEndDate,

        @Semantics.language
        @ObjectModel.foreignKey.association: '_Language'
  key   _HierarchyText.Language,

        @Semantics.businessDate.from: true
        _HierarchyText.ValidityStartDate,

        @Semantics.text
        _HierarchyText.CnsldtnProfitCenterHierText                                      as ProfitCenterHierarchyName,


        _ControllingArea,
        _Language
};
```
