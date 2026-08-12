---
name: I_CNSLDTNUNITHIERDIRVH
description: "This CDS view Provides access to a value help for the hierarchy of the consolidation unit. This CDS view provides the prerequisites for answering the following business questions: What hierarchies of consolidation unit do exist and in which interval of fiscal year and period are they defined?"
app_component: FIN-CS-MD-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNUNITHIERDIRVH')/$value
semantic_en: "This CDS view Provides access to a value help for the hierarchy of the consolidation unit. This CDS view provides the prerequisites for answering the following business questions: What hierarchies of consolidation unit do exist and in which interval of fiscal year and period are they defined?"
semantic_vi: "Consolidation Unit Hierarchy Directory — CDS view tổng hợp (master data) dựa trên P_CnsldtnUnitHierDirVH."
keywords:
  - "consolidation"
  - "unit"
  - "hierarchy"
  - "directory"
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
# I_CNSLDTNUNITHIERDIRVH

**This CDS view Provides access to a value help for the hierarchy of the consolidation unit. This CDS view provides the prerequisites for answering the following business questions: What hierarchies of consolidation unit do exist and in which interval of fiscal year and period are they defined?**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNUNITHIERDIRVH')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConsolidationUnitHierarchy` | ✓ | |  |  | `CHAR(42)` | Hierarchy ID |
| `ValidityEndDate` | ✓ | |  |  | `DATS(8)` | Validity End Date |
| `ValidityStartDate` |  | |  |  | `DATS(8)` | Validity Start Date |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CnsldtnUnitHierDirT` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNUNITHIERDIRVH')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNUNITHIERDIRVH')/$value)*

```abap
@AbapCatalog:{
  sqlViewName: 'ICCUNITHIERDIRVH',
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
@EndUserText.label: 'Consolidation Unit Hierarchy Directory'

define view I_CnsldtnUnitHierDirVH
  as select from P_CnsldtnUnitHierDirVH

  association [0..*] to I_CnsldtnUnitHierDirT as _Text on $projection.ConsolidationUnitHierarchy = _Text.ConsolidationUnitHierarchy

{
      @ObjectModel.text.association: '_Text'
  key ConsolidationUnitHierarchy,

      @Semantics.businessDate.to: true
  key ValidityEndDate,

      @Semantics.businessDate.from: true
      ValidityStartDate,

      _Text

}
```
