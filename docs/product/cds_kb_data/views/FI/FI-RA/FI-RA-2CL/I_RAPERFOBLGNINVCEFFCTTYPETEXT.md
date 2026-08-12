---
name: I_RAPERFOBLGNINVCEFFCTTYPETEXT
description: "RA Invoice Effect Type - Text"
app_component: FI-RA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RAPERFOBLGNINVCEFFCTTYPETEXT')/$value
semantic_en: "RA Invoice Effect Type - Text"
semantic_vi: "RA Invoice Effect Type - Text — CDS view giao diện dựa trên dd07t."
keywords:
  - "invoice"
  - "effect"
  - "type"
  - "text"
  - "language"
  - "perf"
  - "oblgn"
  - "domain"
  - "value"
  - "invc"
  - "effct"
tags:
  - FI
  - bo:billingdocument
  - component:FI-RA-2CL
  - FI-RA
  - FI-RA-2CL
  - interface-view
  - invoice
  - lob:finance
---
# I_RAPERFOBLGNINVCEFFCTTYPETEXT

**RA Invoice Effect Type - Text**

| Property | Value |
|---|---|
| App Component | `FI-RA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RAPERFOBLGNINVCEFFCTTYPETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `cast(dd07t.ddlanguage as spras preserving type)` | `LANG(1)` | Language Key |
| `RAPerfOblgnInvoiceEffectType` | ✓ | |  | `cast(dd07t.domvalue_l as farr_invoice_effect_type)` | `CHAR(1)` | Defines How Invoices Affect POB Price and Quantity |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `RAPerfOblgnInvcEffctTypeText` |  | |  | `ddtext` | `CHAR(60)` | Short Text for Fixed Values |
| `_Language` | | ✓ | | | | |
| `_RAPerfOblgnInvcEffctType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RAPERFOBLGNINVCEFFCTTYPETEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RAPERFOBLGNINVCEFFCTTYPETEXT')/$value)*

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@Analytics.dataExtraction.enabled: true
@Analytics.technicalName: 'IRAPOBINVETTXT'

@EndUserText.label: 'RA Invoice Effect Type - Text'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.dataCategory: #TEXT
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.representativeKey: 'RAPerfOblgnInvoiceEffectType'
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #LANGUAGE_DEPENDENT_TEXT,
                                      #SEARCHABLE_ENTITY,
                                      #SQL_DATA_SOURCE ]
@ObjectModel.usageType: { serviceQuality: #A, sizeCategory: #S, dataClass: #META }

@Search.searchable: true

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view entity I_RAPerfOblgnInvcEffctTypeText
  as select from dd07t

  association to parent I_RAPerfOblgnInvcEffctType as _RAPerfOblgnInvcEffctType
    on $projection.RAPerfOblgnInvoiceEffectType = _RAPerfOblgnInvcEffctType.RAPerfOblgnInvoiceEffectType

  association [0..1] to I_Language as _Language
    on $projection.Language = _Language.Language

{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key cast(dd07t.ddlanguage as spras preserving type)    as Language,

      @ObjectModel.foreignKey.association: '_RAPerfOblgnInvcEffctType'
      @ObjectModel.text.element: [ 'RAPerfOblgnInvcEffctTypeText' ]
  key cast(dd07t.domvalue_l as farr_invoice_effect_type) as RAPerfOblgnInvoiceEffectType,

      @Analytics.hidden: true
      @Consumption.hidden: true
      dd07t.domvalue_l                                   as DomainValue,

      @Search: { defaultSearchElement: true, fuzzinessThreshold: 0.8, ranking: #LOW }
      @Semantics.text: true
      dd07t.ddtext                                       as RAPerfOblgnInvcEffctTypeText,

      _RAPerfOblgnInvcEffctType,
      _Language

}
where dd07t.domname  = 'FARR_INVOICE_EFFECT_TYPE'
  and dd07t.as4local = 'A'
  and dd07t.as4vers  = '0000'
```
