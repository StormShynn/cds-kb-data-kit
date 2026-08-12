---
name: I_CNSLDTNSEGMENTHIERDIRVH
description: "This CDS view provides access to a value help for the hierarchy of the segment. This CDS view provides the prerequisites for answering the following business questions: What hierarchies of segment do exist and in which interval of fiscal year and period are they defined"
app_component: FIN-CS-MD-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNSEGMENTHIERDIRVH')/$value
semantic_en: "This CDS view provides access to a value help for the hierarchy of the segment. This CDS view provides the prerequisites for answering the following business questions: What hierarchies of segment do exist and in which interval of fiscal year and period are they defined"
semantic_vi: "Consolidation Segment Hierarchy — CDS view tổng hợp (master data) dựa trên P_CnsldtnSegmentHierDirVH."
keywords:
  - "consolidation"
  - "segment"
  - "hierarchy"
  - "validity"
  - "date"
  - "start"
tags:
  - FIN
  - bo:companycode
  - component:FIN-CS-MD-2CL
  - FIN-CS
  - FIN-CS-MD
  - FIN-CS-MD-2CL
  - interface-view
  - lob:finance
  - bo:salesorder
---
# I_CNSLDTNSEGMENTHIERDIRVH

**This CDS view provides access to a value help for the hierarchy of the segment. This CDS view provides the prerequisites for answering the following business questions: What hierarchies of segment do exist and in which interval of fiscal year and period are they defined**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNSEGMENTHIERDIRVH')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConsolidationSegmentHierarchy` | ✓ | |  | `cast(left(ConsolidationSegmentHierarchy, 40) as fincs_hryid_segment preserving type )` | `CHAR(40)` | Segment Hierarchy |
| `ValidityEndDate` | ✓ | |  |  | `DATS(8)` | Validity End Date |
| `ValidityStartDate` |  | |  |  | `DATS(8)` | Validity Start Date |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CnsldtnSegmentHierDirT` | [1..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNSEGMENTHIERDIRVH')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNSEGMENTHIERDIRVH')/$value)*

```abap
@AbapCatalog:{
  sqlViewName: 'ICCSEGHIERDIRVH',
  compiler.compareFilter: true,
  preserveKey: true
  }
@AccessControl:{
  authorizationCheck: #NOT_REQUIRED
  }
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata:{
  allowExtensions:true,
  ignorePropagatedAnnotations:true
  }
@ObjectModel:{
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #C,
    sizeCategory: #M},
  representativeKey: 'ConsolidationSegmentHierarchy',
  dataCategory:#VALUE_HELP,
  modelingPattern: #VALUE_HELP_PROVIDER,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #VALUE_HELP_PROVIDER ]
}
@VDM:{
  viewType: #COMPOSITE
//  lifecycle.status: #DEPRECATED,
//  lifecycle.successor: 'I_CnsldtnSegmentHierarchy'
  }
@EndUserText.label: 'Consolidation Segment Hierarchy'

// DO NOT USE anymore.  The view is obsolete, it is not a VH view since the Text field is missing.

define view I_CnsldtnSegmentHierDirVH
  as select from P_CnsldtnSegmentHierDirVH

// cannot remove assoc due to C1, cannot replace HierDirT by HierarchyT due to: HierDirT had no DCL.
  association [1..*] to I_CnsldtnSegmentHierDirT as _Text on $projection.ConsolidationSegmentHierarchy = _Text.ConsolidationSegmentHierarchy

{
      @ObjectModel.text.association: '_Text'
  key cast(left(ConsolidationSegmentHierarchy, 40) as fincs_hryid_segment preserving type ) as ConsolidationSegmentHierarchy,
  
      @Semantics.businessDate.to: true
  key ValidityEndDate,

      @Semantics.businessDate.from: true
      ValidityStartDate,


      _Text
}
```
