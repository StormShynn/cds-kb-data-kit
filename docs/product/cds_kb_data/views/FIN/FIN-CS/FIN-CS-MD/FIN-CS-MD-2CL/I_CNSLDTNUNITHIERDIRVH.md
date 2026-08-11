---
name: I_CNSLDTNUNITHIERDIRVH
description: "This CDS view Provides access to a value help for the hierarchy of the consolidation unit. This CDS view provides the prerequisites for answering the following business questions: What hierarchies of consolidation unit do exist and in which interval of fiscal year and period are they defined?"
app_component: FIN-CS-MD-2CL
software_component: SAPSCORE
release_state: released
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
