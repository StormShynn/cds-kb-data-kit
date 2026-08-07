---
name: I_INSPECTIONLOTORIGIN
description: Inspectionlotorigin
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
  - inspection
  - component:QM-IM-2CL
  - lob:Quality Management
---
# I_INSPECTIONLOTORIGIN

**Inspectionlotorigin**

| Property | Value |
|---|---|
| App Component | `QM-IM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `InspectionLotOrigin` | ✓ | |  | `herkunft` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_InspectionLotOriginText` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Inspection Lot Origin'
@Analytics.dataCategory: #DIMENSION
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED 
@AbapCatalog.sqlViewName: 'IINSPLOTORIGIN'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.preserveKey: true
@ObjectModel.supportedCapabilities:
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.representativeKey: 'InspectionLotOrigin'
@ObjectModel.usageType: {
    dataClass: #META,
    sizeCategory: #S,
    serviceQuality: #A 
}
@ObjectModel.resultSet.sizeCategory: #XS
@Metadata.ignorePropagatedAnnotations: true
define view I_InspectionLotOrigin
   as select from tq31
     association [0..*] to I_InspectionLotOriginText as _Text 
        on $projection.InspectionLotOrigin = _Text.InspectionLotOrigin
{
   @ObjectModel.text.association: '_Text'
   key tq31.herkunft as InspectionLotOrigin, 

   // Associations
   _Text 
}
```
