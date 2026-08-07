---
name: I_CNSLDTNSEGMENTELIMNODET
description: Cnsldtnsegmentelimnodet
app_component: FIN-CS-MD-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-CS
  - FIN-CS-MD
  - interface-view
  - component:FIN-CS-MD-2CL
  - lob:Other
---
# I_CNSLDTNSEGMENTELIMNODET

**Cnsldtnsegmentelimnodet**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `Language` | ✓ | | `_nodet` | `spras` |
| `Segment` | ✓ | |  | `cast(left(_nodet.nodevalue, 25) as fincs_elim_segment preserving type )` |
| `SegmentName` |  | |  | `cast(left(_nodet.nodetxt, 50) as fincs_description_text_50 preserving type )` |
| `_Language` | | ✓ | | |
| `_Segment` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [1..1] |
| `_Segment` | `I_CnsldtnSegmentElimNode` | [1..1] |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ICSSEGELIMNODT',
  compiler.compareFilter: true,
  preserveKey: true
  }
@Analytics: {
  dataExtraction.enabled: true
}
@AccessControl.authorizationCheck: #CHECK
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel:{
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #A,
    sizeCategory: #M},
  representativeKey: 'Segment',
  dataCategory: #TEXT,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #EXTRACTION_DATA_SOURCE,
                          #LANGUAGE_DEPENDENT_TEXT ]
}
@VDM.viewType: #BASIC
@EndUserText.label: 'Cnsldtn Segment Elimination Node - Text'

/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK" ]  } */
define view I_CnsldtnSegmentElimNodeT
  as select from P_CnsldtnSegmentElimNodeT as _nodet

  association [1..1] to I_Language               as _Language on $projection.Language = _Language.Language

  association [1..1] to I_CnsldtnSegmentElimNode as _Segment  on $projection.Segment = _Segment.Segment

{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language
  key _nodet.spras                                                                 as Language,

      @ObjectModel.foreignKey.association: '_Segment'
  key cast(left(_nodet.nodevalue, 25) as fincs_elim_segment preserving type )      as Segment,

      @Semantics.text
      cast(left(_nodet.nodetxt, 50) as fincs_description_text_50 preserving type ) as SegmentName,


      _Language,
      _Segment
}
```
