---
name: I_CNSLDTNSGMTTMPRLNODEHIERVH
description: "Consolidation Segment Hierarchy"
app_component: FIN-CS-MD-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNSGMTTMPRLNODEHIERVH')/$value
semantic_en: "Consolidation Segment Hierarchy"
semantic_vi: "Consolidation Segment Hierarchy — CDS view tổng hợp (master data) dựa trên I_CnsldtnSgmtTmprlNodeHier."
keywords:
  - "consolidation"
  - "segment"
  - "hierarchy"
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
# I_CNSLDTNSGMTTMPRLNODEHIERVH

**Consolidation Segment Hierarchy**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNSGMTTMPRLNODEHIERVH')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConsolidationSegmentHierarchy` | ✓ | | `_CnsldtnSgmtTmprlNodeHier` | `ConsolidationSegmentHierarchy` | `CHAR(40)` | Consolidation Segment Hierarchy |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNSGMTTMPRLNODEHIERVH')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNSGMTTMPRLNODEHIERVH')/$value)*

```abap
@AccessControl:{
  authorizationCheck: #MANDATORY
  }

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
  }
@EndUserText.label: 'Consolidation Segment Hierarchy'


define view entity I_CnsldtnSgmtTmprlNodeHierVH
  as select from I_CnsldtnSgmtTmprlNodeHier as _CnsldtnSgmtTmprlNodeHier


{
      @ObjectModel.text.element: ['ConsolidationSegmentHierText']
  key _CnsldtnSgmtTmprlNodeHier.ConsolidationSegmentHierarchy,

      @Semantics.text
      _CnsldtnSgmtTmprlNodeHier._Text[1: Language=$session.system_language].ConsolidationSegmentHierText


}
```
