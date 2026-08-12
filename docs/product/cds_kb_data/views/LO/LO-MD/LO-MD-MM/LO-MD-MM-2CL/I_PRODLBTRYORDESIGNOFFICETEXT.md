---
name: I_PRODLBTRYORDESIGNOFFICETEXT
description: "Prodlbtryordesignofficetext"
app_component: LO-MD-MM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-MD
  - LO-MD-MM
  - interface-view
  - text-view
  - text
  - component:LO-MD-MM-2CL
  - lob:Logistics General
---
# I_PRODLBTRYORDESIGNOFFICETEXT

**Prodlbtryordesignofficetext**

| Property | Value |
|---|---|
| App Component | `LO-MD-MM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `cast( spras as spras preserving type )` |  |  |
| `LaboratoryOrDesignOffice` | ✓ | |  | `cast( labor as labor preserving type )` |  |  |
| `LaboratoryOrDesignOfficeName` |  | |  | `lbtxt` |  |  |
| `_Language` | | ✓ | | | | |
| `_LabOffice` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_LabOffice` | `I_ProdLaboratoryOrDesignOffice` | [0..1] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.dataCategory: #TEXT
@VDM.viewType: #BASIC
@ObjectModel.representativeKey: 'LaboratoryOrDesignOffice'
@EndUserText.label: 'Laboratory or Design Office - Text'
@ObjectModel.usageType:{
  serviceQuality: #A,
  sizeCategory: #M,
  dataClass: #CUSTOMIZING
}
@AbapCatalog.entityBuffer.definitionAllowed:true
@Analytics.technicalName: 'IPRODLABOFFTEXT'
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [  #SQL_DATA_SOURCE , #CDS_MODELING_DATA_SOURCE , #CDS_MODELING_ASSOCIATION_TARGET , #LANGUAGE_DEPENDENT_TEXT ]
@Search.searchable: true
define view entity I_ProdLbtryOrDesignOfficeText
  as select from t024x
  association [0..1] to I_Language                as _Language  on $projection.Language = _Language.Language
  association [0..1] to I_ProdLaboratoryOrDesignOffice as _LabOffice on $projection.LaboratoryOrDesignOffice = _LabOffice.LaboratoryOrDesignOffice
{

      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key cast( spras as spras preserving type  ) as Language,

      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH

  key cast( labor as labor preserving type )  as LaboratoryOrDesignOffice,
      @Semantics.text:true
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      @Search.fuzzinessThreshold: 0.8
      lbtxt                                   as LaboratoryOrDesignOfficeName,

      // Associations
      _Language,
      _LabOffice

}
```
