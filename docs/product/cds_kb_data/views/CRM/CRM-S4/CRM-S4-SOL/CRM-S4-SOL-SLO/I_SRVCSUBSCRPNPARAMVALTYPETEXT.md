---
name: I_SRVCSUBSCRPNPARAMVALTYPETEXT
description: "Subscription Billg Paramtr type - Text"
app_component: CRM-S4-SOL-SLO
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SRVCSUBSCRPNPARAMVALTYPETEXT')/$value
semantic_en: "Subscription Billg Paramtr type - Text"
semantic_vi: "Subscription Billg Paramtr type - Text — CDS view giao diện dựa trên dd07t."
keywords:
  - "subscription"
  - "billg"
  - "paramtr"
  - "type"
  - "text"
  - "param"
  - "language"
  - "domain"
  - "value"
tags:
  - CRM
  - component:CRM-S4-SOL-SLO
  - CRM-S4
  - CRM-S4-SOL
  - CRM-S4-SOL-SLO
  - interface-view
---
# I_SRVCSUBSCRPNPARAMVALTYPETEXT

**Subscription Billg Paramtr type - Text**

| Property | Value |
|---|---|
| App Component | `CRM-S4-SOL-SLO` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SRVCSUBSCRPNPARAMVALTYPETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SubscriptionParamValType` | ✓ | |  | `cast(domvalue_l as crms4_sb_parameter_value_type)` | `CHAR(1)` | Value Type of Subscription Billing Parameter |
| `Language` | ✓ | |  | `ddlanguage` | `LANG(1)` | Language Key |
| `SubscriptionParamValTypeText` |  | |  | `ddtext` | `CHAR(60)` | Short Text for Fixed Values |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_SubscriptionParameterValType` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SubscriptionParameterValType` | `I_SrvcSubscrpnParamValType` | [1..1] |
| `_Language` | `I_Language` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SRVCSUBSCRPNPARAMVALTYPETEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SRVCSUBSCRPNPARAMVALTYPETEXT')/$value)*

```abap
@EndUserText.label: 'Subscription Billg Paramtr type - Text'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog:{
  sqlViewName: 'IBSOSUBPARTYPTXT',
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
   }
   }
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, 
                                     #CDS_MODELING_DATA_SOURCE,
                                     #LANGUAGE_DEPENDENT_TEXT,
                                     #SEARCHABLE_ENTITY,
                                     #SQL_DATA_SOURCE]   
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'SubscriptionParamValType'
//@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE, #SEARCHABLE_ENTITY ]

@Metadata.ignorePropagatedAnnotations: true

@Search.searchable: true
@Consumption.ranked: true

define view I_SrvcSubscrpnParamValTypeText
  as select from dd07t
  association [1..1] to I_SrvcSubscrpnParamValType as _SubscriptionParameterValType on $projection.SubscriptionParamValType = _SubscriptionParameterValType.SubscriptionParamValType
  association [1..1] to I_Language                 as _Language                     on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_SubscriptionParameterValType'
  key cast(domvalue_l as crms4_sb_parameter_value_type) as SubscriptionParamValType,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key ddlanguage                                        as Language,

      @Semantics.text: true
      ddtext                                            as SubscriptionParamValTypeText,
      
      @Analytics.hidden: true
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      domvalue_l                                  as DomainValue,

      _SubscriptionParameterValType,
      _Language

}
where
      domname  = 'CRMS4_SB_PARAMETER_VALUE_TYPE'
  and as4local = 'A'
```
