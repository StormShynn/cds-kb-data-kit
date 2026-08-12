---
name: I_CNSLDTNUNITHIERARCHYVH
description: "Consolidation Unit Hierarchy"
app_component: FIN-CS-MD-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNUNITHIERARCHYVH')/$value
semantic_en: "Consolidation Unit Hierarchy"
semantic_vi: "Consolidation Unit Hierarchy — CDS view tổng hợp (master data) dựa trên P_CnsldtnUnitHierarchyVH."
keywords:
  - "consolidation"
  - "unit"
  - "hierarchy"
  - "validity"
  - "date"
  - "start"
  - "text"
tags:
  - FIN
  - bo:salesorder
  - component:FIN-CS-MD-2CL
  - FIN-CS
  - FIN-CS-MD
  - FIN-CS-MD-2CL
  - interface-view
  - lob:finance
---
# I_CNSLDTNUNITHIERARCHYVH

**Consolidation Unit Hierarchy**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNUNITHIERARCHYVH')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConsolidationUnitHierarchy` | ✓ | | `_Source` | `ConsolidationUnitHierarchy` | `CHAR(40)` | Consolidation Unit Hierarchy |
| `ValidityEndDate` | ✓ | | `_Source` | `ValidityEndDate` | `DATS(8)` | Validity End Date |
| `ValidityStartDate` |  | | `_Source` | `ValidityStartDate` | `DATS(8)` | Validity Start Date |
| `ConsolidationUnitHierarchyText` |  | | `_Source` | `ConsolidationUnitHierarchyText` | `CHAR(50)` | Consolidation Hierarchy Description |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNUNITHIERARCHYVH')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNUNITHIERARCHYVH')/$value)*

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
    sizeCategory: #S
  },
  representativeKey: 'ConsolidationUnitHierarchy',
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
@EndUserText.label: 'Consolidation Unit Hierarchy'

define view entity I_CnsldtnUnitHierarchyVH
  as select from P_CnsldtnUnitHierarchyVH as _Source

{

      @ObjectModel.text.element: ['ConsolidationUnitHierarchyText']
  key _Source.ConsolidationUnitHierarchy,

      @Semantics.businessDate.to: true
  key _Source.ValidityEndDate,

      @Semantics.businessDate.from: true
      _Source.ValidityStartDate,

      @Semantics.text
      _Source.ConsolidationUnitHierarchyText

}
```
