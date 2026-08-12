---
name: I_RAPERFOBLGNINVCEFFCTTYPE
description: "Revenue Accounting Invoice Effect Type"
app_component: FI-RA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RAPERFOBLGNINVCEFFCTTYPE')/$value
semantic_en: "Revenue Accounting Invoice Effect Type"
semantic_vi: "Revenue Accounting Invoice Effect Type — CDS view giao diện dựa trên dd07l."
keywords:
  - "revenue"
  - "accounting"
  - "invoice"
  - "effect"
  - "type"
  - "perf"
  - "oblgn"
  - "domain"
  - "value"
tags:
  - FI
  - account
  - bo:billingdocument
  - component:FI-RA-2CL
  - FI-RA
  - FI-RA-2CL
  - interface-view
  - invoice
  - lob:finance
---
# I_RAPERFOBLGNINVCEFFCTTYPE

**Revenue Accounting Invoice Effect Type**

| Property | Value |
|---|---|
| App Component | `FI-RA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RAPERFOBLGNINVCEFFCTTYPE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `RAPerfOblgnInvoiceEffectType` | ✓ | |  | `cast(dd07l.domvalue_l as farr_invoice_effect_type)` | `CHAR(1)` | Defines How Invoices Affect POB Price and Quantity |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_Text` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RAPERFOBLGNINVCEFFCTTYPE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RAPERFOBLGNINVCEFFCTTYPE')/$value)*

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@Analytics.internalName: #LOCAL
@Analytics.technicalName: 'IRAPOBINVEFFTY'

@Consumption.ranked: true

@EndUserText.label: 'Revenue Accounting Invoice Effect Type'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.representativeKey: 'RAPerfOblgnInvoiceEffectType'
@ObjectModel.resultSet.sizeCategory: #XS
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #SEARCHABLE_ENTITY,
                                      #SQL_DATA_SOURCE,
                                      #VALUE_HELP_PROVIDER ]
@ObjectModel.usageType: { serviceQuality: #A, sizeCategory: #S, dataClass: #META }

@Search.searchable: true

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define root view entity I_RAPerfOblgnInvcEffctType
  as select from dd07l

  composition [0..*] of I_RAPerfOblgnInvcEffctTypeText as _Text

{
      @ObjectModel.text.association: '_Text'
  key cast(dd07l.domvalue_l as farr_invoice_effect_type) as RAPerfOblgnInvoiceEffectType,

      @Analytics.hidden: true
      @Consumption.hidden: true
      @Search: { defaultSearchElement: true, ranking: #HIGH }
      dd07l.domvalue_l                                   as DomainValue,

      _Text

}
where dd07l.domname  = 'FARR_INVOICE_EFFECT_TYPE'
  and dd07l.as4local = 'A'
  and dd07l.as4vers  = '0000'
```
