---
name: I_POSTINGPARTNERCATTEXT
description: "This CDS view is used to select the Posting Partner Category. Domains: WLF_POST_PARTY Values: ‘’ - Supplier and Customer Side ‘1’ - Only Supplier Side ‘2’ - Only Customer Side ‘3’ – None ‘4’ - Personnel Number This CDS view provides the prerequisites for answering the following business questions: What is the Posting Partner Category?"
app_component: LO-AB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_POSTINGPARTNERCATTEXT')/$value
semantic_en: "This CDS view is used to select the Posting Partner Category. Domains: WLF_POST_PARTY Values: ‘’ - Supplier and Customer Side ‘1’ - Only Supplier Side ‘2’ - Only Customer Side ‘3’ – None ‘4’ - Personnel Number This CDS view provides the prerequisites for answering the following business questions: What is the Posting Partner Category?"
semantic_vi: "Posting Partner Category - Text — CDS view cơ bản dựa trên dd07t."
keywords:
  - "posting"
  - "partner"
  - "category"
  - "text"
  - "language"
  - "name"
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
# I_POSTINGPARTNERCATTEXT

**This CDS view is used to select the Posting Partner Category. Domains: WLF_POST_PARTY Values: ‘’ - Supplier and Customer Side ‘1’ - Only Supplier Side ‘2’ - Only Customer Side ‘3’ – None ‘4’ - Personnel Number This CDS view provides the prerequisites for answering the following business questions: What is the Posting Partner Category?**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_POSTINGPARTNERCATTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PostingPartnerCat` | ✓ | |  | `cast( dd07t.domvalue_l as wlf_post_party )` | `CHAR(1)` | Posting Partner |
| `Language` | ✓ | |  | `ddlanguage` | `LANG(1)` | Language Key |
| `PostingPartnerCatName` |  | |  | `cast( dd07t.ddtext as wlf_post_party_name preserving type )` | `CHAR(60)` | Posting Partner Description |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_Language` | | ✓ | | | | |
| `_PostingPartnerCat` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_POSTINGPARTNERCATTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_POSTINGPARTNERCATTEXT')/$value)*

```abap
@EndUserText.label: 'Posting Partner Category - Text'
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
  dataCategory: #TEXT,
  representativeKey: 'PostingPartnerCat',
  modelingPattern : #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #SEARCHABLE_ENTITY,
                          #CDS_MODELING_DATA_SOURCE],
  usageType: {
    dataClass:      #META,
    serviceQuality: #A,
    sizeCategory:   #S
  }
}
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@Search.searchable: true
@Analytics: {
  dataExtraction.enabled: false,
  internalName: #LOCAL,
  technicalName: 'IWLFPOSTPARTCATT'
}
@Metadata: {
  ignorePropagatedAnnotations: true
}

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view entity I_PostingPartnerCatText
  as select from dd07t

  association        to parent I_PostingPartnerCat as _PostingPartnerCat on $projection.PostingPartnerCat = _PostingPartnerCat.PostingPartnerCat
  association [0..1] to I_Language                 as _Language          on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_PostingPartnerCat'
      @ObjectModel.text.element: ['PostingPartnerCatName']
  key cast( dd07t.domvalue_l as wlf_post_party )                       as PostingPartnerCat,

      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key dd07t.ddlanguage                                                 as Language,

      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      cast( dd07t.ddtext as wlf_post_party_name preserving type )                 as PostingPartnerCatName,
      @Consumption.hidden: true
      dd07t.domvalue_l                                                            as DomainValue,

      /* Associations */
      _PostingPartnerCat,
      _Language
}

where
      dd07t.domname  = 'WLF_POST_PARTY'
  and dd07t.as4local = 'A'
  and dd07t.as4vers  = '0000'
```
