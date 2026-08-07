---
name: I_COUNTRY
description: Country
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
  - country
  - component:BC-SRV-ADR
  - lob:Basis Components
---
# I_COUNTRY

**Country**

| Property | Value |
|---|---|
| App Component | `BC-SRV-ADR` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Country` | ✓ | |  | `land1` |  |  |
| `CountryThreeLetterISOCode` |  | |  | `intca3` |  |  |
| `CountryThreeDigitISOCode` |  | |  | `intcn3` |  |  |
| `CountryISOCode` |  | |  | `intca` |  |  |
| `IsEuropeanUnionMember` |  | |  | `xegld` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CountryText` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Country/Region'
@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true }
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl.authorizationCheck: #NOT_REQUIRED   // #CHECK
@AbapCatalog.sqlViewName: 'IFICOUNTRY'
@AbapCatalog.preserveKey:true
@AbapCatalog.compiler.compareFilter:true
@ObjectModel.representativeKey: 'Country'
@ObjectModel.sapObjectNodeType.name: 'Country'
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass:  #MASTER
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.compositionRoot:true
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET]
@Search.searchable: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.buffering.status: #ACTIVE
@AbapCatalog.buffering.type: #FULL
@AbapCatalog.buffering.numberOfKeyFields: 1
@Metadata.ignorePropagatedAnnotations: true
 
define view I_Country
  as select from t005
  association [0..*] to I_CountryText as _Text on $projection.Country = _Text.Country
{
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @ObjectModel.text.association: '_Text'
  key land1  as Country,
      intca3 as CountryThreeLetterISOCode,
      intcn3 as CountryThreeDigitISOCode,
      intca  as CountryISOCode,
      xegld  as IsEuropeanUnionMember,

      @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
      _Text

}
```
