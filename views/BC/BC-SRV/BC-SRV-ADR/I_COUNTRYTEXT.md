---
name: I_COUNTRYTEXT
description: Countrytext
app_component: BC-SRV-ADR
software_component: SAP_BASIS
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - BC
  - BC-SRV
  - BC-SRV-ADR
  - interface-view
  - text-view
  - country
  - text
  - component:BC-SRV-ADR
  - lob:Basis Components
---
# I_COUNTRYTEXT

**Countrytext**

| Property | Value |
|---|---|
| App Component | `BC-SRV-ADR` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `Country` | `land1` |
| key `Language` | `spras` |
| `CountryName` | `landx50` |
| `NationalityName` | `natio` |
| `NationalityLongName` | `natio50` |
| `CountryShortName` | `landx` |
| `_Language` | *Association* |
| `_Country` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_Country` | `I_Country` | [0..1] |

## Source Code

```abap
@Analytics: { dataExtraction.enabled: true }
@AbapCatalog.sqlViewName: 'IFICOUNTRYTEXT'
@AbapCatalog.compiler.compareFilter:true
@AbapCatalog.buffering.status: #ACTIVE
@AbapCatalog.buffering.type: #GENERIC
@AbapCatalog.buffering.numberOfKeyFields: 2
@AccessControl.authorizationCheck: #NOT_REQUIRED
@AbapCatalog.preserveKey:true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Country/Region - Text'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'Country'
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass:  #MASTER
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #LANGUAGE_DEPENDENT_TEXT]
@Search.searchable: true
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API


define view I_CountryText
  as select from t005t
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
  association [0..1] to I_Country  as _Country  on $projection.Country = _Country.Country
{
      @ObjectModel.foreignKey.association: '_Country'
  key land1   as Country,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language
  key spras   as Language,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      @Semantics.text: true
      landx50 as CountryName,
      natio   as NationalityName,
      natio50 as NationalityLongName,
      @Semantics.text: true
      landx   as CountryShortName,

      @ObjectModel.association.type: [#TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT]
      _Country,
      _Language

}
```
