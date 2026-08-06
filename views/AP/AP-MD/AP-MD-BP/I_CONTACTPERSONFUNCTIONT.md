---
name: I_CONTACTPERSONFUNCTIONT
description: Contactpersonfunctiont
app_component: AP-MD-BP
software_component: SAP_BASIS
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - AP
  - AP-MD
  - AP-MD-BP
  - interface-view
  - component:AP-MD-BP
  - lob:Other
---
# I_CONTACTPERSONFUNCTIONT

**Contactpersonfunctiont**

| Property | Value |
|---|---|
| App Component | `AP-MD-BP` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `ContactPersonFunction` | `tb913.pafkt` |
| key `Language` | `tb913.spras` |
| `ContactPersonFunctionName` | `tb913.bez30` |
| `_Language` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'I_MD_FUNCTIONT'
@EndUserText.label: 'Function of Contact Person Textview'
//@VDM.private: false
@VDM.viewType: #BASIC
//@Analytics : { dataCategory: #TEXT }
@Analytics.dataExtraction.enabled: true
@ObjectModel.dataCategory: #TEXT
@VDM.dclSourceNotRequired:true
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.representativeKey: 'ContactPersonFunction'
@ObjectModel.supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT, #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET,
                            #EXTRACTION_DATA_SOURCE , #ANALYTICAL_DIMENSION ]
@Search.searchable: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.authorizationCheck: #NOT_REQUIRED
define view I_ContactPersonFunctionT
  as select from tb913
  association [1..1] to I_Language as _Language on $projection.Language = _Language.Language
{
  key tb913.pafkt as ContactPersonFunction,
      @Semantics.language: true
  key tb913.spras as Language,
      @Semantics.text: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      tb913.bez30 as ContactPersonFunctionName,
      _Language
}
```
