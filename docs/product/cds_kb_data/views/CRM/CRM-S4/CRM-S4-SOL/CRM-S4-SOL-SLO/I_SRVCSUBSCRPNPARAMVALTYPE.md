---
name: I_SRVCSUBSCRPNPARAMVALTYPE
description: "Subscription Billing Parameter type"
app_component: CRM-S4-SOL-SLO
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SRVCSUBSCRPNPARAMVALTYPE')/$value
semantic_en: "Subscription Billing Parameter type"
semantic_vi: "Subscription Billing Parameter type — CDS view giao diện dựa trên dd07l."
keywords:
  - "subscription"
  - "billing"
  - "parameter"
  - "type"
  - "param"
  - "domain"
  - "value"
tags:
  - CRM
  - billing
  - bo:billingdocument
  - component:CRM-S4-SOL-SLO
  - CRM-S4
  - CRM-S4-SOL
  - CRM-S4-SOL-SLO
  - interface-view
---
# I_SRVCSUBSCRPNPARAMVALTYPE

**Subscription Billing Parameter type**

| Property | Value |
|---|---|
| App Component | `CRM-S4-SOL-SLO` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SRVCSUBSCRPNPARAMVALTYPE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SubscriptionParamValType` | ✓ | |  | `cast(domvalue_l as crms4_sb_parameter_value_type)` | `CHAR(1)` | Value Type of Subscription Billing Parameter |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_SubscriptionParamValTypeTxt` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SubscriptionParamValTypeTxt` | `I_SrvcSubscrpnParamValTypeText` | [1..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SRVCSUBSCRPNPARAMVALTYPE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SRVCSUBSCRPNPARAMVALTYPE')/$value)*

```abap
@EndUserText.label: 'Subscription Billing Parameter type'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog:{
  sqlViewName: 'IBSOSUBPARTYPE',
  compiler.compareFilter: true,
  preserveKey: true
}
@AccessControl.authorizationCheck: #NOT_REQUIRED

@VDM.viewType: #BASIC

@ObjectModel: {
   usageType: {
     dataClass:      #CUSTOMIZING,
     serviceQuality: #A,
     sizeCategory:   #S
   },
   representativeKey: 'SubscriptionParamValType',
    dataCategory: #VALUE_HELP,
    supportedCapabilities: [ #VALUE_HELP_PROVIDER, #CDS_MODELING_DATA_SOURCE, #SEARCHABLE_ENTITY ]
}
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.sapObjectNodeType.name: 'SrvcSubscrpnParamValType'

@Search.searchable: true
@Consumption.ranked: true
define view I_SrvcSubscrpnParamValType
  as select from dd07l
  association [1..*] to I_SrvcSubscrpnParamValTypeText as _SubscriptionParamValTypeTxt on $projection.SubscriptionParamValType = _SubscriptionParamValTypeTxt.SubscriptionParamValType
                                                                                       
{
      @ObjectModel.text.association: '_SubscriptionParamValTypeTxt'

  key cast(domvalue_l as crms4_sb_parameter_value_type) as SubscriptionParamValType,

      @Analytics.hidden: true
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      dd07l.domvalue_l                                  as DomainValue,

      _SubscriptionParamValTypeTxt

}
where
      domname  = 'CRMS4_SB_PARAMETER_VALUE_TYPE'
  and as4local = 'A'
```
