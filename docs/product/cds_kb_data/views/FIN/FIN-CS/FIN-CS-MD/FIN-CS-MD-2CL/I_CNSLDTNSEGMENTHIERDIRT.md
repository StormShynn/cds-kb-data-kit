---
name: I_CNSLDTNSEGMENTHIERDIRT
description: "Cnsldtn Segment Hier Directory - Text"
app_component: FIN-CS-MD-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNSEGMENTHIERDIRT')/$value
semantic_en: "Cnsldtn Segment Hier Directory - Text"
semantic_vi: "Cnsldtn Segment Hier Directory - Text — CDS view giao diện (master data) dựa trên P_CnsldtnSegmentHierDirT."
keywords:
  - "cnsldtn"
  - "segment"
  - "hier"
  - "directory"
  - "text"
  - "consolidation"
  - "hierarchy"
  - "validity"
  - "date"
  - "language"
  - "start"
tags:
  - FIN
  - component:FIN-CS-MD-2CL
  - FIN-CS
  - FIN-CS-MD
  - FIN-CS-MD-2CL
  - interface-view
  - lob:finance
---
# I_CNSLDTNSEGMENTHIERDIRT

**Cnsldtn Segment Hier Directory - Text**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNSEGMENTHIERDIRT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConsolidationSegmentHierarchy` | ✓ | | `_HierarchyText` | `ConsolidationSegmentHierarchy` | `CHAR(40)` | Segment Hierarchy |
| `ValidityEndDate` | ✓ | | `_HierarchyText` | `ValidityEndDate` | `DATS(8)` | Validity End Date |
| `Language` | ✓ | | `_HierarchyText` | `Language` | `LANG(1)` | Language Key |
| `ValidityStartDate` |  | | `_HierarchyText` | `ValidityStartDate` | `DATS(8)` | Validity Start Date |
| `ConsolidationSegmentHierText` |  | | `_HierarchyText` | `ConsolidationSegmentHierText` | `CHAR(50)` | Consolidation Hierarchy Description |
| `_Language` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNSEGMENTHIERDIRT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNSEGMENTHIERDIRT')/$value)*

```abap
@AbapCatalog:{
  sqlViewName: 'ICCSEGHIERDIRT',
  compiler.compareFilter: true,
  preserveKey: true
  }
@Analytics: {
  dataExtraction.enabled: true
  }
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata:{
  ignorePropagatedAnnotations:true
  }
@ObjectModel:{
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #C,
    sizeCategory: #XL},
  representativeKey: 'ConsolidationSegmentHierarchy',
  dataCategory: #TEXT,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #EXTRACTION_DATA_SOURCE,
                          #LANGUAGE_DEPENDENT_TEXT ]
}
@VDM.viewType: #COMPOSITE
@EndUserText.label: 'Cnsldtn Segment Hier Directory - Text'

define view I_CnsldtnSegmentHierDirT

  as select from P_CnsldtnSegmentHierDirT as _HierarchyText

{
  key   _HierarchyText.ConsolidationSegmentHierarchy,

        @Semantics.businessDate.to: true
  key   _HierarchyText.ValidityEndDate,

        @Semantics.language
        @ObjectModel.foreignKey.association: '_Language'
  key   _HierarchyText.Language,

        @Semantics.businessDate.from: true
        _HierarchyText.ValidityStartDate,

        @Semantics.text: true
        _HierarchyText.ConsolidationSegmentHierText,

        _Language
};
```
