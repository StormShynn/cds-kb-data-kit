---
name: I_PRODLBTRYORDESIGNOFFICEVH
description: "Prodlbtryordesignofficevh"
app_component: LO-MD-MM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-MD
  - LO-MD-MM
  - interface-view
  - value-help
  - component:LO-MD-MM-2CL
  - lob:Logistics General
---
# I_PRODLBTRYORDESIGNOFFICEVH

**Prodlbtryordesignofficevh**

| Property | Value |
|---|---|
| App Component | `LO-MD-MM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `LaboratoryOrDesignOffice` | ✓ | |  |  |  |  |
| `_LabOfficeText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_LabOfficeText` | `I_ProdLbtryOrDesignOfficeText` | [0..*] |

## Source Code

```abap
@Search.searchable: true
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Laboratory or Design Office'
@VDM.viewType:#BASIC
@ObjectModel.representativeKey: 'LaboratoryOrDesignOffice'
@ObjectModel.dataCategory: #VALUE_HELP
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
  serviceQuality: #A,
  sizeCategory: #M,
  dataClass: #CUSTOMIZING
}

@ObjectModel.supportedCapabilities: [  #SQL_DATA_SOURCE , #CDS_MODELING_DATA_SOURCE ]
@Consumption.ranked: true
define view entity I_ProdLbtryOrDesignOfficeVH 
  as select from I_ProdLaboratoryOrDesignOffice as LabOffice
  association [0..*] to I_ProdLbtryOrDesignOfficeText as _LabOfficeText on $projection.LaboratoryOrDesignOffice = _LabOfficeText.LaboratoryOrDesignOffice
{
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      @ObjectModel.text.association: '_LabOfficeText'
  key LabOffice.LaboratoryOrDesignOffice as LaboratoryOrDesignOffice,
      _LabOfficeText
}
```
