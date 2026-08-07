---
name: I_CONTACTPERSONFUNCTION
description: Contactpersonfunction
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
# I_CONTACTPERSONFUNCTION

**Contactpersonfunction**

| Property | Value |
|---|---|
| App Component | `AP-MD-BP` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ContactPersonFunction` | ✓ | |  | `pafkt` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_ContactPersonFunctionT` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'I_MD_FUNCTION'
@EndUserText.label: 'Value Help for Func of Contact Person'
@VDM.viewType: #BASIC
@Analytics: {
 dataCategory: #DIMENSION,
 dataExtraction: {
    enabled: true,
    delta.changeDataCapture: {
      automatic: true
      }
    }
  }
//@Analytics : { dataCategory: #DIMENSION }
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ,
                           #EXTRACTION_DATA_SOURCE , #ANALYTICAL_DIMENSION ]
@ObjectModel.sapObjectNodeType.name: 'BPContactPersonFunction'
@ObjectModel.representativeKey: 'ContactPersonFunction'
@Search.searchable: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE

@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass: #MASTER

define view I_ContactPersonFunction
  as select from tb912
  association [0..*] to I_ContactPersonFunctionT as _Text on $projection.ContactPersonFunction = _Text.ContactPersonFunction
{
      @ObjectModel.text.association: '_Text'
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
  key tb912.pafkt as ContactPersonFunction,
      _Text
}
```
