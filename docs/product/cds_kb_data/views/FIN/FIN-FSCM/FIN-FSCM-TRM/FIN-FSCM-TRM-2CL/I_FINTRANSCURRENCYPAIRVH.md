---
name: I_FINTRANSCURRENCYPAIRVH
description: "This view provides value help for the Currency Pair field. This view should be used for value help purposes only."
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FINTRANSCURRENCYPAIRVH')/$value
semantic_en: "This view provides value help for the Currency Pair field. This view should be used for value help purposes only."
semantic_vi: "Financial Transaction Currency Pair — CDS view giao diện dựa trên I_LeadingCurrencyDefinition."
keywords:
  - "financial"
  - "transaction"
  - "currency"
  - "pair"
  - "source"
  - "target"
tags:
  - FIN
  - bo:companycode
  - component:FIN-FSCM-TRM-2CL
  - FIN-FSCM
  - FIN-FSCM-TRM
  - FIN-FSCM-TRM-2CL
  - interface-view
  - lob:finance
  - transaction
---
# I_FINTRANSCURRENCYPAIRVH

**This view provides value help for the Currency Pair field. This view should be used for value help purposes only.**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FINTRANSCURRENCYPAIRVH')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CurrencyPair` | ✓ | |  | `cast( CONCAT( CONCAT( LeadingCurrency, '/' ), FollowingCurrency ) as ftr_curr_pair )` | `CHAR(20)` | Currency Pair |
| `SourceCurrency` |  | |  | `LeadingCurrency` | `CUKY(5)` | Leading Currency in Exchange Rate Quotation |
| `TargetCurrency` |  | |  | `FollowingCurrency` | `CUKY(5)` | Following Currency in Exchange Rate Quotation |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FINTRANSCURRENCYPAIRVH')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FINTRANSCURRENCYPAIRVH')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IFTRCRCYPAIRVH'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@Metadata.ignorePropagatedAnnotations:true
@EndUserText.label: 'Financial Transaction Currency Pair'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType: #COMPOSITE
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel:{  usageType : {
                  sizeCategory: #S,
                  serviceQuality: #C,
                  dataClass: #CUSTOMIZING
                },
                modelingPattern: #VALUE_HELP_PROVIDER,
                supportedCapabilities:  [ #VALUE_HELP_PROVIDER ]
             }
@Search.searchable: true
@Consumption.ranked: true
@ObjectModel.representativeKey: 'CurrencyPair'

define view I_FinTransCurrencyPairVH
  as select from I_LeadingCurrencyDefinition

{
  @Search.defaultSearchElement: false
  @Search.ranking: #HIGH
  key cast( CONCAT( CONCAT( LeadingCurrency, '/' ), FollowingCurrency ) as ftr_curr_pair ) as CurrencyPair,
  
  @Search.defaultSearchElement: true
  @Search.fuzzinessThreshold: 0.8 
  LeadingCurrency as SourceCurrency,

  @Search.defaultSearchElement: true
  @Search.fuzzinessThreshold: 0.8 
  @Search.ranking: #LOW
  FollowingCurrency as TargetCurrency
}

union select from I_LeadingCurrencyDefinition

{
  @Search.defaultSearchElement: false
  @Search.ranking: #HIGH
  key cast( CONCAT( CONCAT( FollowingCurrency, '/' ), LeadingCurrency ) as ftr_curr_pair ) as CurrencyPair,

  @Search.defaultSearchElement: true
  @Search.fuzzinessThreshold: 0.8 
  FollowingCurrency as SourceCurrency,

  @Search.defaultSearchElement: true
  @Search.fuzzinessThreshold: 0.8 
  @Search.ranking: #LOW
  LeadingCurrency as TargetCurrency
}
```
