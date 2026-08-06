---
name: I_PRODLABORATORYORDESIGNOFFICE
description: Prodlaboratoryordesignoffice
app_component: LO-MD-MM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-MD
  - LO-MD-MM
  - interface-view
  - component:LO-MD-MM-2CL
  - lob:Logistics General
---
# I_PRODLABORATORYORDESIGNOFFICE

**Prodlaboratoryordesignoffice**

| Property | Value |
|---|---|
| App Component | `LO-MD-MM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `LaboratoryOrDesignOffice` | `LabOffice.labor` |
| `_LabOfficeText` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_LabOfficeText` | `I_ProdLbtryOrDesignOfficeText` | [0..*] |

## Source Code

```abap
@Search.searchable: true
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Laboratory or Design Office Basic'
@VDM.viewType:#BASIC
@ObjectModel.representativeKey: 'LaboratoryOrDesignOffice'
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
  serviceQuality: #A,
  sizeCategory: #M,
  dataClass: #CUSTOMIZING
}
@Analytics.technicalName: 'IPRODLABOFF'
@ObjectModel.supportedCapabilities: [  #SQL_DATA_SOURCE , #CDS_MODELING_DATA_SOURCE , #CDS_MODELING_ASSOCIATION_TARGET ]
@Consumption.ranked: true
@ObjectModel.dataCategory: #VALUE_HELP
define view entity I_ProdLaboratoryOrDesignOffice
  as select from t024l as LabOffice
  association [0..*] to I_ProdLbtryOrDesignOfficeText as _LabOfficeText on $projection.LaboratoryOrDesignOffice = _LabOfficeText.LaboratoryOrDesignOffice
{
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      @ObjectModel.text.association: '_LabOfficeText'
  key LabOffice.labor as LaboratoryOrDesignOffice,
      _LabOfficeText
}
```
