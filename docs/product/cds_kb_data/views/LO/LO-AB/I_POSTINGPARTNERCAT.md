---
name: I_POSTINGPARTNERCAT
description: "This CDS view is used to select the Posting Partner Category. Domains: WLF_POST_PARTY Values: ‘’ - Supplier and Customer Side ‘1’ - Only Supplier Side ‘2’ - Only Customer Side ‘3’ – None ‘4’ - Personnel Number This CDS view provides the prerequisites for answering the following business questions: What is the Posting Partner Category?"
app_component: LO-AB
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_POSTINGPARTNERCAT')/$value
semantic_en: "This CDS view is used to select the Posting Partner Category. Domains: WLF_POST_PARTY Values: ‘’ - Supplier and Customer Side ‘1’ - Only Supplier Side ‘2’ - Only Customer Side ‘3’ – None ‘4’ - Personnel Number This CDS view provides the prerequisites for answering the following business questions: What is the Posting Partner Category?"
semantic_vi: "Posting Partner Category — CDS view cơ bản dựa trên dd07l."
keywords:
  - "posting"
  - "partner"
  - "category"
  - "domain"
  - "value"
tags:
  - LO
  - bo:businesspartner
  - component:LO-AB
  - customer
  - interface-view
  - LO-AB
  - lob:logistics general
  - supplier
  - bo:purchaseorder
---
# I_POSTINGPARTNERCAT

**This CDS view is used to select the Posting Partner Category. Domains: WLF_POST_PARTY Values: ‘’ - Supplier and Customer Side ‘1’ - Only Supplier Side ‘2’ - Only Customer Side ‘3’ – None ‘4’ - Personnel Number This CDS view provides the prerequisites for answering the following business questions: What is the Posting Partner Category?**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_POSTINGPARTNERCAT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PostingPartnerCat` | ✓ | |  | `cast( dd07l.domvalue_l as wlf_post_party )` | `CHAR(1)` | Posting Partner |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_Text` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_POSTINGPARTNERCAT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_POSTINGPARTNERCAT')/$value)*

```abap
@EndUserText.label: 'Posting Partner Category'
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
//  sapObjectNodeType.name: ''
  dataCategory: #VALUE_HELP,
  representativeKey: 'PostingPartnerCat',
  modelingPattern : #ANALYTICAL_DIMENSION,
  supportedCapabilities : [#ANALYTICAL_DIMENSION,
                           #CDS_MODELING_ASSOCIATION_TARGET,
                           #SQL_DATA_SOURCE,
                           #CDS_MODELING_DATA_SOURCE,
                           #SEARCHABLE_ENTITY,
                           #VALUE_HELP_PROVIDER],
  usageType: {
    dataClass:      #META,
    serviceQuality: #A,
    sizeCategory:   #S
  },
  resultSet.sizeCategory: #XS
}
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@Search.searchable: true
@Analytics: {
  dataCategory: #DIMENSION,
  dataExtraction.enabled: false,
  internalName: #LOCAL,
  technicalName: 'IWLFPOSTPARTCAT'
}
@Metadata: {
  ignorePropagatedAnnotations: true
}

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define root view entity I_PostingPartnerCat
  as select from dd07l

  composition [0..*] of I_PostingPartnerCatText as _Text
{
      @ObjectModel.text.association: '_Text'
  key cast( dd07l.domvalue_l as wlf_post_party )         as PostingPartnerCat,
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      dd07l.domvalue_l                                   as DomainValue,

      /* Associations */
      _Text
}

where
      dd07l.domname  = 'WLF_POST_PARTY'
  and dd07l.as4local = 'A'
  and dd07l.as4vers  = '0000'
```
