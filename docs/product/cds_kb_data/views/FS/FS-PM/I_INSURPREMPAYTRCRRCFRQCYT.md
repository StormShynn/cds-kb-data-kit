---
name: I_INSURPREMPAYTRCRRCFRQCYT
description: "Premium Payt Frqcy in Insur Plcy - Text"
app_component: FS-PM
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
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
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
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
