---
name: I_DEFECTCLASS
description: Defectclass
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
  - component:QM-IM-2CL
  - lob:Quality Management
---
# I_DEFECTCLASS

**Defectclass**

| Property | Value |
|---|---|
| App Component | `QM-IM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `DefectClass` | ✓ | |  | `fehlklasse` |
| `InspectionLotQualityScore` |  | |  | `kennzahl` |
| `_Text` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_DefectClassText` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Defect Class'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM: {
    viewType: #BASIC,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@ObjectModel.sapObjectNodeType.name: 'DefectClass'
@ObjectModel.supportedCapabilities:
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel: {
    usageType: { dataClass: #CUSTOMIZING, sizeCategory: #S, serviceQuality: #A },
    representativeKey: 'DefectClass'
}
@Analytics.technicalName: 'IDEFECTCLASS'
@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true
define view entity I_DefectClass as select from tq17 
    association [0..*] to I_DefectClassText as _Text 
      on $projection.DefectClass = _Text.DefectClass

{
    @ObjectModel.text.association: '_Text'
    @Search: {
      defaultSearchElement: true,
      fuzzinessThreshold: 0.8,
      ranking: #HIGH
    }
    key fehlklasse as DefectClass,
    
    @Search: {
      defaultSearchElement: true,
      fuzzinessThreshold: 0.8,
      ranking: #LOW
    }
    kennzahl as InspectionLotQualityScore,
    
    // Associations
    _Text
}
```
