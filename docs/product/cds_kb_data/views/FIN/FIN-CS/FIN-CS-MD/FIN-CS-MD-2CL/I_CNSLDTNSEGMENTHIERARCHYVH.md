---
name: I_CNSLDTNSEGMENTHIERARCHYVH
description: "Consolidation Segment Hierarchy"
app_component: FIN-CS-MD-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNSEGMENTHIERARCHYVH')/$value
semantic_en: "Consolidation Segment Hierarchy"
semantic_vi: "Consolidation Segment Hierarchy — CDS view tổng hợp (master data) dựa trên P_CnsldtnSegmentHierarchyVH."
keywords:
  - "consolidation"
  - "segment"
  - "hierarchy"
  - "validity"
  - "date"
  - "start"
  - "hier"
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
# I_CNSLDTNSEGMENTHIERARCHYVH

**Consolidation Segment Hierarchy**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNSEGMENTHIERARCHYVH')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConsolidationSegmentHierarchy` | ✓ | | `_Source` | `ConsolidationSegmentHierarchy` | `CHAR(40)` | Consolidation Segment Hierarchy |
| `ValidityEndDate` | ✓ | | `_Source` | `ValidityEndDate` | `DATS(8)` | Validity End Date |
| `ValidityStartDate` |  | | `_Source` | `ValidityStartDate` | `DATS(8)` | Validity Start Date |
| `ConsolidationSegmentHierText` |  | | `_Source` | `ConsolidationSegmentHierText` | `CHAR(50)` | Consolidation Hierarchy Description |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNSEGMENTHIERARCHYVH')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNSEGMENTHIERARCHYVH')/$value)*

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
    sizeCategory: #M
  },
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
}
@EndUserText.label: 'Consolidation Segment Hierarchy'

define view entity I_CnsldtnSegmentHierarchyVH
  as select from P_CnsldtnSegmentHierarchyVH as _Source

{

      @ObjectModel.text.element: ['ConsolidationSegmentHierText']
  key _Source.ConsolidationSegmentHierarchy,

      @Semantics.businessDate.to: true
  key _Source.ValidityEndDate,

      @Semantics.businessDate.from: true
      _Source.ValidityStartDate,

      @Semantics.text
      _Source.ConsolidationSegmentHierText

}
```
