---
name: I_CONTROLLINGDEBITCREDITCODET
description: Controllingdebitcreditcodet
app_component: FI-GL-IS-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-GL
  - FI-GL-IS
  - interface-view
  - credit
  - component:FI-GL-IS-2CL
  - lob:Finance
---
# I_CONTROLLINGDEBITCREDITCODET

**Controllingdebitcreditcodet**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `ControllingDebitCreditCode` | ✓ | |  | `substring(domvalue_l, 1, 1)` |
| `Language` | ✓ | |  | `cast(ddlanguage as spras preserving type )` |
| `ControllingDebitCreditCodeName` |  | |  | `ddtext` |
| `_Language` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@EndUserText.label:  'Debit Credit Code in Controlling - Text'
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IFICODECRCODET'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.representativeKey: 'ControllingDebitCreditCode'
@ClientHandling.algorithm: #SESSION_VARIABLE
@Analytics: { dataExtraction.enabled: true }
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [ #EXTRACTION_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #SEARCHABLE_ENTITY,
                                      #SQL_DATA_SOURCE,
                                      #LANGUAGE_DEPENDENT_TEXT ]
@ObjectModel.dataCategory: #TEXT
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@Search.searchable: true
@Consumption.ranked: true
@Metadata.ignorePropagatedAnnotations: true

define view I_ControllingDebitCreditCodeT
  as select from dd07t
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
  key substring(domvalue_l, 1, 1)   as ControllingDebitCreditCode,
      @Semantics.language
  key cast(ddlanguage as spras preserving type ) as Language,
//      @Analytics.hidden: true
//      @Consumption.hidden: true
//      dd07t.domvalue_l                           as DomainValue_2,
      @Semantics.text
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      ddtext                                     as ControllingDebitCreditCodeName,
      _Language
}
where
      dd07t.domname  = 'BELKZ'
  and dd07t.as4local = 'A';
```
