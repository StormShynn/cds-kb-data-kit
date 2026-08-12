---
name: I_CNSLDTNSEGMENTFORELIMT
description: "Cnsldtn Segment for Elimination - Text"
app_component: FIN-CS-MD-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNSEGMENTFORELIMT')/$value
semantic_en: "Cnsldtn Segment for Elimination - Text"
semantic_vi: "Cnsldtn Segment for Elimination - Text — CDS view tổng hợp (master data) dựa trên P_CnsldtnSegmentForElimT."
keywords:
  - "cnsldtn"
  - "segment"
  - "for"
  - "elimination"
  - "text"
  - "language"
  - "additional"
  - "master"
  - "data"
  - "name"
tags:
  - FIN
  - component:FIN-CS-MD-2CL
  - FIN-CS
  - FIN-CS-MD
  - FIN-CS-MD-2CL
  - interface-view
  - lob:finance
---
# I_CNSLDTNSEGMENTFORELIMT

**Cnsldtn Segment for Elimination - Text**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNSEGMENTFORELIMT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Segment` | ✓ | |  |  | `CHAR(25)` | Consolidation Segment for Elimination |
| `Language` | ✓ | |  |  | `LANG(1)` | Language Key |
| `AdditionalMasterDataText` |  | |  | `SegmentName` | `CHAR(50)` | Description |
| `SegmentName` |  | |  |  | `CHAR(50)` | Description |
| `_Segment` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Segment` | `I_CnsldtnSegmentForElim` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNSEGMENTFORELIMT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNSEGMENTFORELIMT')/$value)*

```abap
@AbapCatalog:{
  sqlViewName: 'ISEGMENTFORELIMT',
  compiler.compareFilter: true
  }
@AccessControl:{
  authorizationCheck: #CHECK
  }
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel:{
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #C,
    sizeCategory: #S},
  representativeKey: 'Segment',
  dataCategory: #TEXT,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #LANGUAGE_DEPENDENT_TEXT ]
}
@VDM:{
  viewType: #COMPOSITE,
  lifecycle.status: #DEPRECATED,
  lifecycle.successor: 'I_CnsldtnSegmentForElimT_2'
  }
@EndUserText.label: 'Cnsldtn Segment for Elimination - Text'

// Do not use any more. Replaced in 2208 by I_CnsldtnSegmentForElimT_2.

define view I_CnsldtnSegmentForElimT
  as select from P_CnsldtnSegmentForElimT

  association [1..1] to I_CnsldtnSegmentForElim as _Segment on $projection.Segment = _Segment.Segment
{

                @ObjectModel.foreignKey.association: '_Segment'
                @Consumption.valueHelpDefinition: [{
                  entity: {
                    name: 'I_CnsldtnSegmentForElimVH',
                    element: 'Segment'
                  }
                }]
  key           Segment,

                @ObjectModel.foreignKey.association: '_Language'
                @Semantics.language
  key           Language,

                @Semantics.text
                @API.element: {releaseState: #DEPRECATED, successor: 'SegmentName'}
                @VDM.lifecycle: {status: #DEPRECATED, successor: 'SegmentName' }
                SegmentName as AdditionalMasterDataText,

                @Semantics.text
                SegmentName,


                _Segment,
                _Language
};
```
