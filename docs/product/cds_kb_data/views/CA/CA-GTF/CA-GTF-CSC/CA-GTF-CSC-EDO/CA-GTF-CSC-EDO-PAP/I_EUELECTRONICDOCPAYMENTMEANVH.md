---
name: I_EUELECTRONICDOCPAYMENTMEANVH
description: "Euelectronicdocpaymentmeanvh"
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
  - payment
  - component:CA-GTF-CSC-EDO-PAP
  - lob:Cross-Application Components
---
# I_EUELECTRONICDOCPAYMENTMEANVH

**Euelectronicdocpaymentmeanvh**

| Property | Value |
|---|---|
| App Component | `CA-GTF-CSC-EDO-PAP` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EU_EDocPaymentMeans` | ✓ | |  | `cast(dd07t.domvalue_l as edoc_eu_paym_means)` |  |  |
| `Language` | ✓ | |  | `ddlanguage` |  |  |
| `EU_EDocPaymentMeansText` |  | |  | `ddtext` |  |  |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'eDocument Peppol Payment Means'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.representativeKey: 'EU_EDocPaymentmeans'
@Consumption.ranked:true
@ObjectModel:{
usageType:{
  dataClass: #META,
  serviceQuality: #A,
  sizeCategory: #S
  },
  supportedCapabilities: [#SQL_DATA_SOURCE,
                          #CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET],
  modelingPattern: #NONE
}
@VDM.viewType: #BASIC
@Search.searchable: true
@Analytics.technicalName: 'IEUEDODOCPAYMENTMEANSVH'
define root view entity I_EUElectronicDocPaymentMeanVH
  as select from dd07t
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
      @ObjectModel: { text.element:  [ 'EU_EDocPaymentMeansText' ]}
  key cast(dd07t.domvalue_l as edoc_eu_paym_means) as EU_EDocPaymentMeans,
      @Semantics.language
      @UI.hidden: true
  key ddlanguage                                   as Language,
      @Semantics.text: true
      @Search: {
       defaultSearchElement: true,
       ranking: #HIGH,
       fuzzinessThreshold: 0.8 }
      ddtext                                       as EU_EDocPaymentMeansText,

      _Language
}

where
      domname    = 'EDOC_EU_PAYM_MEANS'
  and as4local   = 'A'
  and ddlanguage = $session.system_language
```
