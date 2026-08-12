---
name: I_INSPSPECIFICATIONVERSIONTEXT
description: "Inspspecificationversiontext"
app_component: QM-PT-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - QM
  - QM-PT
  - interface-view
  - text-view
  - text
  - component:QM-PT-2CL
  - lob:Quality Management
---
# I_INSPSPECIFICATIONVERSIONTEXT

**Inspspecificationversiontext**

| Property | Value |
|---|---|
| App Component | `QM-PT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `InspectionSpecificationPlant` | ✓ | |  | `zaehler` |  |  |
| `InspectionSpecification` | ✓ | |  | `cast( qpmt.mkmnr as vdm_qmerknr preserving type )` |  |  |
| `InspectionSpecificationVersion` | ✓ | |  | `version` |  |  |
| `Language` | ✓ | |  | `sprache` |  |  |
| `InspectionSpecificationText` |  | |  | `cast( qpmt.kurztext as vdm_qmerknr_text preserving type )` |  |  |
| `_InspSpecificationPlant` | | ✓ | | | | |
| `_InspectionSpecification` | | ✓ | | | | |
| `_InspSpecificationVersion` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_InspSpecificationPlant` | `I_Plant` | [1..1] |
| `_InspectionSpecification` | `I_InspectionSpecification` | [1..1] |
| `_InspSpecificationVersion` | `I_InspSpecificationVersion` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IINSPSPECVERST'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Version of Master Insp Charc - Text'
@VDM: {
    viewType: #BASIC,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl.authorizationCheck: #CHECK
@AccessControl.privilegedAssociations: ['_INSPECTIONSPECIFICATION']
@Search.searchable: true
@ObjectModel.supportedCapabilities:
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #SEARCHABLE_ENTITY, #LANGUAGE_DEPENDENT_TEXT ]
@ObjectModel: {
    usageType: {
        dataClass: #MASTER,
        sizeCategory: #M, //expected number of rows < 100.000
        serviceQuality: #B // includes A as well
    },
    representativeKey: 'InspectionSpecificationVersion',
    dataCategory: #TEXT
}
@Metadata.ignorePropagatedAnnotations: true

define view I_InspSpecificationVersionText as select from qpmt
      
   association [1..1] to I_Plant as _InspSpecificationPlant
      on     $projection.InspectionSpecificationPlant = _InspSpecificationPlant.Plant
      
   association [1..1] to I_InspectionSpecification as _InspectionSpecification
      on     $projection.InspectionSpecificationPlant = _InspectionSpecification.InspectionSpecificationPlant
         and $projection.InspectionSpecification      = _InspectionSpecification.InspectionSpecification
      
   association [1..1] to I_InspSpecificationVersion     as _InspSpecificationVersion
      on     $projection.InspectionSpecificationPlant   = _InspSpecificationVersion.InspectionSpecificationPlant
         and $projection.InspectionSpecification        = _InspSpecificationVersion.InspectionSpecification
         and $projection.InspectionSpecificationVersion = _InspSpecificationVersion.InspectionSpecificationVersion

   association [0..1] to I_Language as _Language
      on $projection.Language = _Language.Language
         
{
   @ObjectModel.foreignKey.association: '_InspSpecificationPlant'
   @Search: { defaultSearchElement: true, fuzzinessThreshold: 0.8 }
   key qpmt.zaehler                                           as InspectionSpecificationPlant,
   @ObjectModel.foreignKey.association: '_InspectionSpecification'
   @Search: { defaultSearchElement: true, fuzzinessThreshold: 0.8 }
   key cast( qpmt.mkmnr as vdm_qmerknr preserving type )      as InspectionSpecification,
   key qpmt.version                                           as InspectionSpecificationVersion,
   
   @Semantics.language: true
   key qpmt.sprache     as Language,

   //qpmt.gueltigab, 
   @Semantics.text: true
   @Search: { defaultSearchElement: true, fuzzinessThreshold: 0.8, ranking: #HIGH }
   cast( qpmt.kurztext as vdm_qmerknr_text preserving type )   as InspectionSpecificationText,
   //qpmt.ltextkz, 
   //qpmt.ltextekz, 
   //qpmt.geloescht

   /* Associations */
   _InspSpecificationVersion,
   _InspSpecificationPlant,
   _InspectionSpecification,
   _Language
   
}
```
