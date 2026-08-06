---
name: I_SALESDISTRICTTEXT
description: Salesdistricttext
app_component: LO-MD-BP-CM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-MD
  - LO-MD-BP
  - interface-view
  - text-view
  - text
  - component:LO-MD-BP-CM-2CL
  - lob:Logistics General
---
# I_SALESDISTRICTTEXT

**Salesdistricttext**

| Property | Value |
|---|---|
| App Component | `LO-MD-BP-CM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `SalesDistrict` | `bzirk` |
| key `Language` | `spras` |
| `SalesDistrictName` | `bztxt` |
| `_SalesDistrict` | *Association* |
| `_Language` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SalesDistrict` | `I_SalesDistrict` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'SalesDistrict'
@ObjectModel.usageType.dataClass: #ORGANIZATIONAL
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@EndUserText.label: 'Sales District - Text'
@VDM.viewType: #BASIC
@Analytics.dataExtraction.enabled: true
@AccessControl.authorizationCheck:#NOT_REQUIRED
@AbapCatalog.sqlViewName: 'ISDSLSDISTRICTT'
@AbapCatalog.buffering.status: #ACTIVE
@AbapCatalog.buffering.type: #FULL
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@Metadata.ignorePropagatedAnnotations: true

@Search.searchable: true
@ObjectModel.modelingPattern:           #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities:  [  #SQL_DATA_SOURCE,
                                        #CDS_MODELING_DATA_SOURCE,
                                        #CDS_MODELING_ASSOCIATION_TARGET,
                                        #LANGUAGE_DEPENDENT_TEXT,
                                        #EXTRACTION_DATA_SOURCE,
                                        #SEARCHABLE_ENTITY   ]
define view I_SalesDistrictText
  as select from t171t

  association [0..1] to I_SalesDistrict as _SalesDistrict on $projection.SalesDistrict = _SalesDistrict.SalesDistrict
  association [0..1] to I_Language      as _Language      on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_SalesDistrict'
  key bzirk as SalesDistrict,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key spras as Language,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      @Semantics.text: true
      bztxt as SalesDistrictName,

      //Associations
      _SalesDistrict,
      _Language
};
```
