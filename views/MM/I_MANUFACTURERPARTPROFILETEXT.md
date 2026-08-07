---
name: I_MANUFACTURERPARTPROFILETEXT
description: Manufacturerpartprofiletext
app_component: MM
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - interface-view
  - text-view
  - text
  - component:MM
  - lob:Sourcing & Procurement
---
# I_MANUFACTURERPARTPROFILETEXT

**Manufacturerpartprofiletext**

| Property | Value |
|---|---|
| App Component | `MM` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `Language` | ✓ | |  | `spras` |
| `ManufacturerPartProfile` | ✓ | |  | `mprof` |
| `ManufacturerPartProfileName` |  | |  | `mpnpt` |
| `_Language` | | ✓ | | |
| `_ManufacturerPartProfile` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IMMMANUPRTPRFTXT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
//@Analytics.dataExtraction.enabled: true 
@ClientHandling.algorithm: #SESSION_VARIABLE  
@EndUserText.label: 'Manufacturer Part Profile - Text'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT 
//@ObjectModel.representativeKey: 'ManufacturerPartProfileText'
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET,
                                     #CDS_MODELING_DATA_SOURCE,
//                                     #EXTRACTION_DATA_SOURCE,
                                     #LANGUAGE_DEPENDENT_TEXT,
                                     #SEARCHABLE_ENTITY,
                                     #SQL_DATA_SOURCE] 
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@Search.searchable: true 
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API 
@VDM.viewType: #BASIC

define view I_ManufacturerPartProfileText
  as select from tmppft

  association        to parent I_ManufacturerPartProfile as _ManufacturerPartProfile on $projection.ManufacturerPartProfile = _ManufacturerPartProfile.ManufacturerPartProfile
  association [0..1] to I_Language                       as _Language                on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key spras as Language,
  key mprof as ManufacturerPartProfile,
      
      @Search: { defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.7 }
      @Semantics.text: true
      mpnpt as ManufacturerPartProfileName,
      
      _ManufacturerPartProfile,
      _Language
}
```
