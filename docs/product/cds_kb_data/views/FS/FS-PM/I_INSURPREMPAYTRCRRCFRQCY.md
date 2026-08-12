---
name: I_INSURPREMPAYTRCRRCFRQCY
description: "Premium Payment Frequency in Insur Plcy"
app_component: FS-PM
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INSURPREMPAYTRCRRCFRQCY')/$value
semantic_en: "Premium Payment Frequency in Insur Plcy"
semantic_vi: "Premium Payment Frequency in Insur Plcy — CDS view cơ bản dựa trên dd07l."
keywords:
  - "premium"
  - "payment"
  - "frequency"
  - "insur"
  - "plcy"
  - "prem"
  - "spec"
  - "payt"
  - "rcrrc"
  - "frqcy"
  - "domain"
  - "value"
tags:
  - FS
  - component:FS-PM
  - FS-PM
  - interface-view
  - payment
---
# I_INSURPREMPAYTRCRRCFRQCY

**Premium Payment Frequency in Insur Plcy**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INSURPREMPAYTRCRRCFRQCY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `InsurPremSpecPaytRcrrcFrqcy` | ✓ | |  | `cast( dd07l.domvalue_l as /pm0/vdm_payment_freq_code )` | `CHAR(2)` | Premium Payment Frequency |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_Text` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INSURPREMPAYTRCRRCFRQCY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INSURPREMPAYTRCRRCFRQCY')/$value)*

```abap
@EndUserText.label: 'Premium Payment Frequency in Insur Plcy'
@VDM: {
  viewType:#BASIC,
  lifecycle.contract.type:#PUBLIC_LOCAL_API
}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics: {
  dataCategory: #DIMENSION,
  dataExtraction.enabled: true,
  internalName: #LOCAL,
  technicalName: 'IPPremFrqcy'
}
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
  modelingPattern: #ANALYTICAL_DIMENSION,
  representativeKey: 'InsurPremSpecPaytRcrrcFrqcy',
  sapObjectNodeType.name: 'InsurPremSpecPaytRcrrcFrqcy',
  resultSet.sizeCategory: #XS,
  usageType.serviceQuality: #A,
  usageType.dataClass: #CUSTOMIZING,
  usageType.sizeCategory: #S,
  supportedCapabilities: [#ANALYTICAL_DIMENSION,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #CDS_MODELING_DATA_SOURCE,
                          #EXTRACTION_DATA_SOURCE,
                          #SEARCHABLE_ENTITY,
                          #SQL_DATA_SOURCE,
                          #VALUE_HELP_PROVIDER]
}
@Search.searchable: true

define root view entity I_InsurPremPaytRcrrcFrqcy
  as select from dd07l
  composition [0..*] of I_InsurPremPaytRcrrcFrqcyT as _Text
{
      @ObjectModel.text.association: '_Text'
  key cast( dd07l.domvalue_l as /pm0/vdm_payment_freq_code ) as InsurPremSpecPaytRcrrcFrqcy,
      @Analytics.hidden: true
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      dd07l.domvalue_l                                       as DomainValue,

      _Text
}
where
      dd07l.domname  = '/PM0/ABD_PAYMENTFREQ_VL'
  and dd07l.as4local = 'A'
  and dd07l.as4vers  = '0000'
```
