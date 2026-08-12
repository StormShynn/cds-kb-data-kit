---
name: I_SRVCORDITMCONFRELEVANCETEXT
description: "Srvcorditmconfrelevancetext"
app_component: CRM-S4-REP-RFW
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CRM
  - interface-view
  - text-view
  - text
  - component:CRM-S4-REP-RFW
  - lob:Other
---
# I_SRVCORDITMCONFRELEVANCETEXT

**Srvcorditmconfrelevancetext**

| Property | Value |
|---|---|
| App Component | `CRM-S4-REP-RFW` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SrvcOrderConfirmationRelevance` | ✓ | |  | `cast (domvalue_l as abap.char(1) )` |  |  |
| `Language` | ✓ | |  | `ddlanguage` |  |  |
| `SrvcOrdConfRelevanceText` |  | |  | `ddtext` |  |  |
| `_SrvcOrdItmConfRelevance` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SrvcOrdItmConfRelevance` | `I_SrvcOrdItmConfRelevance` | [1] |
| `_Language` | `I_Language` | [1..1] |

## Source Code

```abap
@EndUserText.label: 'Conf Relevance for Reltd Srvc Ord – Text'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog: {
  sqlViewName: 'ISERVCONFRELSTTX',
  compiler.compareFilter: true,
  preserveKey: true
}
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl.authorizationCheck: #NOT_REQUIRED

@ObjectModel: {
   dataCategory: #TEXT,
   representativeKey: 'SrvcOrderConfirmationRelevance',
   usageType: {
     dataClass:      #CUSTOMIZING,
     serviceQuality: #A,
     sizeCategory:   #S
   },
   supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE],
   modelingPattern: #LANGUAGE_DEPENDENT_TEXT
}
@Analytics.dataExtraction.enabled: true
//@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations: true

define view I_SrvcOrdItmConfRelevanceText
  as select from dd07t
  association [1]    to I_SrvcOrdItmConfRelevance as _SrvcOrdItmConfRelevance on $projection.SrvcOrderConfirmationRelevance = _SrvcOrdItmConfRelevance.SrvcOrderConfirmationRelevance
  association [1..1] to I_Language                as _Language                on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_SrvcOrdItmConfRelevance'
  key cast (domvalue_l as abap.char(1) ) as SrvcOrderConfirmationRelevance,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key ddlanguage                         as Language,
      @Semantics.text: true
      @EndUserText.label: 'Description'
      ddtext                             as SrvcOrdConfRelevanceText,

      _SrvcOrdItmConfRelevance,
      _Language
}
where
      domname  = 'CRMS4_CONFIRM_RELEVANT'
  and as4local = 'A'
```
