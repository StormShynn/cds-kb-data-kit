---
name: I_CNSLDTNSEGMENTFORELIMT_2
description: Cnsldtnsegmentforelimt 2
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
# I_CNSLDTNSEGMENTFORELIMT_2

**Cnsldtnsegmentforelimt 2**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  |  |  |  |
| `Segment` | ✓ | |  |  |  |  |
| `SegmentName` |  | |  |  |  |  |
| `_Segment` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Segment` | `I_CnsldtnSegmentForElim` | [1..1] |

## Source Code

```abap
@Analytics: {
  dataExtraction.enabled: true,
  technicalName: 'ICSSGMTFORELIMT2' 
}
@AccessControl:{
  authorizationCheck: #MANDATORY
}
@Metadata:{
  ignorePropagatedAnnotations: true
}
@ObjectModel:{
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #C,
    sizeCategory: #M
  },
  representativeKey: 'Segment',
  dataCategory: #TEXT,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE,
                           #CDS_MODELING_ASSOCIATION_TARGET,
                           #SQL_DATA_SOURCE,
                           #EXTRACTION_DATA_SOURCE,
                           #LANGUAGE_DEPENDENT_TEXT ],
  sapObjectNodeType.name: 'CnsldtnSegmentForElimText'                        
}
@VDM:{
  viewType: #COMPOSITE,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@EndUserText.label: 'Cnsldtn Segment for Elimination - Text'
define view entity I_CnsldtnSegmentForElimT_2
  as select from P_CnsldtnSegmentForElimT

  association [1..1] to I_CnsldtnSegmentForElim as _Segment on $projection.Segment = _Segment.Segment

{
                @ObjectModel.foreignKey.association: '_Language'
                @Semantics.language
  key           Language,

                @ObjectModel.foreignKey.association: '_Segment'
                @Consumption.valueHelpDefinition: [{
                  entity: {
                    name: 'I_CnsldtnSegmentForElimVH',
                    element: 'Segment'
                  }
                }]
  key           Segment,

                @Semantics.text
                SegmentName,

                
                /* associations */
                _Segment,
                _Language
};
```
