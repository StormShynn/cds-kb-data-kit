---
name: I_INSURPREMPAYTRCRRCFRQCYT
description: "Premium Payt Frqcy in Insur Plcy - Text"
app_component: FS-PM
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INSURPREMPAYTRCRRCFRQCYT')/$value
semantic_en: "Premium Payt Frqcy in Insur Plcy - Text"
semantic_vi: "Premium Payt Frqcy in Insur Plcy - Text — CDS view cơ bản dựa trên dd07t."
keywords:
  - "premium"
  - "payt"
  - "frqcy"
  - "insur"
  - "plcy"
  - "text"
  - "language"
  - "prem"
  - "spec"
  - "rcrrc"
  - "domain"
  - "value"
  - "name"
tags:
  - FS
  - component:FS-PM
  - FS-PM
  - interface-view
---
# I_INSURPREMPAYTRCRRCFRQCYT

**Premium Payt Frqcy in Insur Plcy - Text**

| Property | Value |
|---|---|
| App Component | `FS-PM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INSURPREMPAYTRCRRCFRQCYT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `cast( dd07t.ddlanguage as spras preserving type )` | `LANG(1)` | Language Key |
| `InsurPremSpecPaytRcrrcFrqcy` | ✓ | |  | `cast( dd07t.domvalue_l as /pm0/vdm_payment_freq_code )` | `CHAR(2)` | Premium Payment Frequency |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `InsurPremPaytRcrrcFrqcyName` |  | |  | `ddtext` | `CHAR(60)` | Short Text for Fixed Values |
| `_Language` | | ✓ | | | | |
| `_InsurPremPaytRcrrcFrqcy` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INSURPREMPAYTRCRRCFRQCYT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INSURPREMPAYTRCRRCFRQCYT')/$value)*

```abap
@EndUserText.label: 'Premium Payt Frqcy in Insur Plcy - Text'
@VDM: {
  viewType:#BASIC,
  lifecycle.contract.type:#PUBLIC_LOCAL_API
}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataExtraction.enabled: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
  dataCategory: #TEXT,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  representativeKey: 'InsurPremSpecPaytRcrrcFrqcy',
  usageType.serviceQuality: #A,
  usageType.dataClass: #CUSTOMIZING,
  usageType.sizeCategory: #S,
  supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET,
                          #CDS_MODELING_DATA_SOURCE,
                          #EXTRACTION_DATA_SOURCE,
                          #LANGUAGE_DEPENDENT_TEXT,
                          #SEARCHABLE_ENTITY,
                          #SQL_DATA_SOURCE]
}
@Search.searchable: true

define view entity I_InsurPremPaytRcrrcFrqcyT
  as select from dd07t
  association        to parent I_InsurPremPaytRcrrcFrqcy as _InsurPremPaytRcrrcFrqcy on $projection.InsurPremSpecPaytRcrrcFrqcy = _InsurPremPaytRcrrcFrqcy.InsurPremSpecPaytRcrrcFrqcy
  association [0..1] to I_Language                       as _Language                on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key cast( dd07t.ddlanguage as spras preserving type )      as Language,
      @ObjectModel.foreignKey.association: '_InsurPremPaytRcrrcFrqcy'
      @ObjectModel.text.element: ['InsurPremPaytRcrrcFrqcyName']
  key cast( dd07t.domvalue_l as /pm0/vdm_payment_freq_code ) as InsurPremSpecPaytRcrrcFrqcy,
      @Analytics.hidden: true
      @Consumption.hidden: true
      dd07t.domvalue_l                                       as DomainValue,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      dd07t.ddtext                                           as InsurPremPaytRcrrcFrqcyName,
      _InsurPremPaytRcrrcFrqcy,
      _Language
}
where
      dd07t.domname  = '/PM0/ABD_PAYMENTFREQ_VL'
  and dd07t.as4local = 'A'
  and dd07t.as4vers  = '0000'
```
