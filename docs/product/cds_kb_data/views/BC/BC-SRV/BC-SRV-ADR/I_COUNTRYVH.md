---
name: I_COUNTRYVH
description: "Countryvh"
app_component: BC-SRV-ADR
software_component: SAP_BASIS
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - BC
  - BC-SRV
  - BC-SRV-ADR
  - interface-view
  - value-help
  - country
  - component:BC-SRV-ADR
  - lob:Basis Components
---
# I_COUNTRYVH

**Countryvh**

| Property | Value |
|---|---|
| App Component | `BC-SRV-ADR` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Country` | ✓ | |  |  | `CHAR(3)` | Country/Region Key |
| `Description` |  | |  | `_Text[1: Language = $session.system_language].CountryName` | `CHAR(50)` | Country/Region Name |
| `CountryThreeLetterISOCode` |  | |  |  | `CHAR(3)` | ISO Country/Region Code 3 Characters |
| `CountryThreeDigitISOCode` |  | |  |  | `NUMC(3)` | ISO Country/Region Code Numeric 3-Characters |
| `_Text` | | ✓ | | | | |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IFICOUNTRYVH'
@EndUserText.label: 'Country/Region'
@Analytics.dataCategory: #DIMENSION 
@VDM.viewType: #BASIC 
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl.authorizationCheck: #NOT_REQUIRED   // #CHECK
@ObjectModel.representativeKey: 'Country'
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass:  #MASTER
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.dataCategory: #VALUE_HELP
@Search.searchable: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@Consumption.ranked: true 
//@Metadata.ignorePropagatedAnnotations: true
define view I_CountryVH as select from I_Country {
    @Search.defaultSearchElement: true
    @Search.fuzzinessThreshold: 0.8
    @Search.ranking: #HIGH
  //  @ObjectModel.text.element: 'Description'
    key Country,
    
    @Semantics.text: true
    @Search.ranking: #LOW
 //   @Search.defaultSearchElement: true
    @UI.hidden: true 
    @Consumption.filter.hidden: true
    _Text[1: Language = $session.system_language].CountryName as Description,
    @Search.defaultSearchElement: true
    CountryThreeLetterISOCode,
    @Search.defaultSearchElement: true
    CountryThreeDigitISOCode,
    
    _Text
}
```
