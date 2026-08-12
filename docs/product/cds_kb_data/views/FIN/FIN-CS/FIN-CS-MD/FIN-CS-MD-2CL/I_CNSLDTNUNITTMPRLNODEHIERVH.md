---
name: I_CNSLDTNUNITTMPRLNODEHIERVH
description: "Consolidation Unit Hierarchy"
app_component: FIN-CS-MD-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNUNITTMPRLNODEHIERVH')/$value
semantic_en: "Consolidation Unit Hierarchy"
semantic_vi: "Consolidation Unit Hierarchy — CDS view tổng hợp (master data) dựa trên I_CnsldtnUnitTmprlNodeHier."
keywords:
  - "consolidation"
  - "unit"
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
# I_CNSLDTNUNITTMPRLNODEHIERVH

**Consolidation Unit Hierarchy**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNUNITTMPRLNODEHIERVH')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConsolidationUnitHierarchy` | ✓ | | `_CnsldtnUnitTmprlNodeHier` | `ConsolidationUnitHierarchy` | `CHAR(40)` | Consolidation Unit Hierarchy |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNUNITTMPRLNODEHIERVH')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNUNITTMPRLNODEHIERVH')/$value)*

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
    sizeCategory: #S},
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

define view entity I_CnsldtnUnitTmprlNodeHierVH
  as select from I_CnsldtnUnitTmprlNodeHier as _CnsldtnUnitTmprlNodeHier



{
      @ObjectModel.text.element: ['ConsolidationUnitHierarchyText']
  key _CnsldtnUnitTmprlNodeHier.ConsolidationUnitHierarchy,

      @Semantics.text
      _CnsldtnUnitTmprlNodeHier._Text[1: Language=$session.system_language].ConsolidationUnitHierarchyText

}
```
