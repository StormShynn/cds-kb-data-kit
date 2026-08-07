---
name: I_MEANSOFTRANSPORTTYPE
description: Meansoftransporttype
app_component: LE-SHP-GF-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LE
  - LE-SHP
  - LE-SHP-GF
  - interface-view
  - transport
  - component:LE-SHP-GF-2CL
  - lob:Logistics Execution
---
# I_MEANSOFTRANSPORTTYPE

**Meansoftransporttype**

| Property | Value |
|---|---|
| App Component | `LE-SHP-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `MeansOfTransportType` | ✓ | |  | `traty` |
| `_Text` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_MeansOfTransportTypeText` | [0..*] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE //Inserted by VDM CDS Suite Plugin
@ObjectModel.representativeKey: 'MeansOfTransportType'
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A 
@ObjectModel.usageType.sizeCategory: #S
//Commented by VDM CDS Suite Plugin:@ObjectModel.representativeKey: 'MeansOfTransportType'
@EndUserText.label: 'Packaging Material Type'
@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: false }
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck:#NOT_REQUIRED
@Search.searchable: true
@AbapCatalog.sqlViewName: 'ILEMNSTRANSPTYP'
@Metadata.ignorePropagatedAnnotations:true 
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #ANALYTICAL_DIMENSION ]
@ObjectModel.modelingPattern: [ #ANALYTICAL_DIMENSION ]
@ObjectModel.sapObjectNodeType.name: 'MeansOfTransportType'

define view I_MeansOfTransportType
as select from tvty
association [0..*] to I_MeansOfTransportTypeText as _Text on $projection.MeansOfTransportType = _Text.MeansOfTransportType
{
    @ObjectModel.text.association: '_Text'
    @Semantics.text: true
    @Search.defaultSearchElement: true
    @Search.ranking: #HIGH
    key traty as MeansOfTransportType,    

    _Text
};
```
