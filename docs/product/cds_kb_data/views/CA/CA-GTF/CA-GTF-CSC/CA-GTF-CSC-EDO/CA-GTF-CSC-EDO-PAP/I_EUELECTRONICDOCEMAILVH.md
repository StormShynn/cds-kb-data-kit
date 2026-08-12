---
name: I_EUELECTRONICDOCEMAILVH
description: "Euelectronicdocemailvh"
app_component: CA-GTF-CSC-EDO-PAP
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-GTF
  - CA-GTF-CSC
  - interface-view
  - value-help
  - workflow
  - email
  - component:CA-GTF-CSC-EDO-PAP
  - lob:Cross-Application Components
---
# I_EUELECTRONICDOCEMAILVH

**Euelectronicdocemailvh**

| Property | Value |
|---|---|
| App Component | `CA-GTF-CSC-EDO-PAP` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EU_EDocEmail` | ✓ | |  | `cast(dd07t.domvalue_l as edoc_eu_email)` |  |  |
| `Language` | ✓ | |  | `ddlanguage` |  |  |
| `EU_EDocEmailText` |  | |  | `ddtext` |  |  |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Receive Document per eMail'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.representativeKey: 'EU_EDocEmail'
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel:{
usageType:{
  serviceQuality: #A,
  sizeCategory: #S,
  dataClass: #META
},
  supportedCapabilities: [#VALUE_HELP_PROVIDER],
  modelingPattern: #NONE
}
@VDM.viewType: #BASIC

@Search.searchable:true
define view entity I_EUElectronicDocEmailVH
  as select from dd07t
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
      @ObjectModel: { text.element:  [ 'EU_EDocEmailText' ]}
  key cast(dd07t.domvalue_l as edoc_eu_email) as EU_EDocEmail,
      @Semantics.language
      @UI.hidden: true
  key ddlanguage                              as Language,
      @Semantics.text: true
      @Search: {
       defaultSearchElement: true,
       ranking: #HIGH,
       fuzzinessThreshold: 0.8 }
      ddtext                                  as EU_EDocEmailText,

      _Language
}

where
      domname    = 'EDOC_EU_EMAIL'
  and as4local   = 'A'
  and ddlanguage = $session.system_language
```
