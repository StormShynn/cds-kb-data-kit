---
name: I_INSPECTIONLOTLONGTEXT
description: Inspectionlotlongtext
app_component: QM-IM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - QM
  - QM-IM
  - interface-view
  - text-view
  - inspection
  - text
  - component:QM-IM-2CL
  - lob:Quality Management
---
# I_INSPECTIONLOTLONGTEXT

**Inspectionlotlongtext**

| Property | Value |
|---|---|
| App Component | `QM-IM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `InspectionLot` | ✓ | |  |  |
| `Language` | ✓ | |  |  |
| `InspectionLotLongText` |  | |  |  |
| `LongTextCreatedByUser` |  | |  |  |
| `LongTextCreatedAt` |  | |  |  |
| `LongTextLastChangedByUser` |  | |  |  |
| `LongTextLastChangedAt` |  | |  |  |
| `_InspectionLot` | | ✓ | | |
| `_Language` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_InspectionLot` | `I_InspectionLot` | [1] |
| `_Language` | `I_Language` | [1..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Inspection Lot Long Text'
@VDM.viewType: #BASIC
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities:
 [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel: {
    dataCategory: #TEXT,
    usageType: {
        dataClass: #TRANSACTIONAL,
        sizeCategory: #L,
        serviceQuality: #C
    },
    representativeKey: 'InspectionLot'
}
@Analytics.technicalName: 'IINSPLOTLTXT'
define view entity I_InspectionLotLongText as select from I_InspectionLotAllLongText
    association [1] to I_InspectionLot as _InspectionLot
      on $projection.InspectionLot = _InspectionLot.InspectionLot 
    association [1..1] to I_Language as _Language            
      on $projection.Language = _Language.Language
{
    @ObjectModel.foreignKey.association: '_InspectionLot'
    key InspectionLot,  
    @ObjectModel.foreignKey.association: '_Language'
    @Semantics.language: true
    key Language,
  
    @Semantics.text: true
    InspectionLotLongText as InspectionLotLongText, 
    LongTextCreatedByUser,
    LongTextCreatedAt,
    LongTextLastChangedByUser,
    LongTextLastChangedAt,

    /* Association */ 
    _InspectionLot,
    _Language        
}
where ItemCounter = 1
```
