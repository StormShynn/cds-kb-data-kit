---
name: I_CNSLDTNUNIT
description: "This CDS view provides access to the master data of a consolidation unit. A consolidation unit is the smallest entity of the corporate group structure that can be used as the basis for performing a consolidation. This CDS view provides the prerequisites for answering the following business questions: What is the hierarchy level of a certain unit within a hierarchy of consolidation units?"
app_component: FIN-CS-MD-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNUNIT')/$value
semantic_en: "This CDS view provides access to the master data of a consolidation unit. A consolidation unit is the smallest entity of the corporate group structure that can be used as the basis for performing a consolidation. This CDS view provides the prerequisites for answering the following business questions: What is the hierarchy level of a certain unit within a hierarchy of consolidation units?"
semantic_vi: "Consolidation Unit — CDS view giao diện dựa trên tf160."
keywords:
  - "consolidation"
  - "unit"
  - "dimension"
  - "document"
  - "entry"
  - "group"
  - "currency"
  - "country"
tags:
  - FIN
  - bo:businesspartner
  - component:FIN-CS-MD-2CL
  - FIN-CS
  - FIN-CS-MD
  - FIN-CS-MD-2CL
  - interface-view
  - lob:finance
  - master-data
  - bo:salesorder
---
# I_CNSLDTNUNIT

**This CDS view provides access to the master data of a consolidation unit. A consolidation unit is the smallest entity of the corporate group structure that can be used as the basis for performing a consolidation. This CDS view provides the prerequisites for answering the following business questions: What is the hierarchy level of a certain unit within a hierarchy of consolidation units?**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNUNIT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConsolidationDimension` | ✓ | |  | `dimen` | `CHAR(2)` | Dimension |
| `ConsolidationUnit` | ✓ | |  | `cast( tf160.bunit as fincs_consolidationunit preserving type )` | `CHAR(18)` | Consolidation Unit |
| `DocumentEntryIsInGroupCurrency` |  | |  | `gcind` | `CHAR(1)` | Entry in Group Currency |
| `Country` |  | |  | `cntry` | `CHAR(3)` | Country/Region |
| `_Text` | | ✓ | | | | |
| `_Dimension` | | ✓ | | | | |
| `_UnitHierNode` | | ✓ | | | | |
| `_Country` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CnsldtnUnitT` | [0..*] |
| `_Dimension` | `I_CnsldtnDimension` | [0..1] |
| `_UnitHierNode` | `I_CnsldtnUnitHierNode` | [0..*] |
| `_Country` | `I_CnsldtnCountry` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNUNIT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNUNIT')/$value)*

```abap
@AbapCatalog: {
  sqlViewName: 'ICCUNIT',
  compiler.compareFilter: true,
  preserveKey: true,
  buffering:{
    status: #ACTIVE,
    type: #FULL }
}
@AccessControl:{
  authorizationCheck: #CHECK,
  privilegedAssociations: [ '_UnitHierNode' ]
  }
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata:{
  allowExtensions:true,
  ignorePropagatedAnnotations: true
  }
@ObjectModel:{
  usageType: {
    dataClass: #CUSTOMIZING,
    serviceQuality: #C,
    sizeCategory: #M},
  representativeKey: 'ConsolidationUnit',
  modelingPattern: #ANALYTICAL_DIMENSION,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #ANALYTICAL_DIMENSION ]
}
@Analytics: {
  dataCategory: #DIMENSION
}
@VDM.viewType: #BASIC
@EndUserText.label: 'Consolidation Unit'

define view I_CnsldtnUnit
  as select from    tf160

    left outer join tf162 on  tf162.dimen = 'Y1'
                          and tf162.bunit = tf160.bunit

  association [0..*] to I_CnsldtnUnitT        as _Text         on  $projection.ConsolidationDimension = _Text.ConsolidationDimension
                                                               and $projection.ConsolidationUnit      = _Text.ConsolidationUnit

  association [0..1] to I_CnsldtnDimension    as _Dimension    on  $projection.ConsolidationDimension = _Dimension.ConsolidationDimension


  association [0..*] to I_CnsldtnUnitHierNode as _UnitHierNode on  $projection.ConsolidationDimension = _UnitHierNode.ConsolidationDimension
                                                               and $projection.ConsolidationUnit      = _UnitHierNode.ConsolidationUnit

  association [0..1] to I_CnsldtnCountry      as _Country      on  $projection.Country = _Country.Country

{
      @ObjectModel.foreignKey.association: '_Dimension'
  key tf160.dimen as ConsolidationDimension,


      @ObjectModel.text.association: '_Text'
      @ObjectModel.hierarchy.association: '_UnitHierNode'
  key cast( tf160.bunit as fincs_consolidationunit preserving type ) as ConsolidationUnit,

      tf160.gcind as DocumentEntryIsInGroupCurrency,
      tf162.cntry as Country,


      _Dimension,
      _UnitHierNode,
      _Text,
      _Country
}
where
      tf160.dimen = 'Y1'
  and tf160.roind = '';
```
