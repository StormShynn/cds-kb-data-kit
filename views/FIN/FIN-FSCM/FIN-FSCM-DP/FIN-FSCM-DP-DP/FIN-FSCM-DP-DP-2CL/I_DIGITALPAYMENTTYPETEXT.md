---
name: I_DIGITALPAYMENTTYPETEXT
description: Digitalpaymenttypetext
app_component: FIN-FSCM-DP-DP-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-FSCM
  - FIN-FSCM-DP
  - interface-view
  - text-view
  - payment
  - text
  - component:FIN-FSCM-DP-DP-2CL
  - lob:Other
---
# I_DIGITALPAYMENTTYPETEXT

**Digitalpaymenttypetext**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-DP-DP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `Language` | `cast( dd07t.ddlanguage as spras preserving type )` |
| key `DigitalPaymentType` | `cast( dd07t.domvalue_l as dp_payment_type )` |
| `DomainValue` | `dd07t.domvalue_l` |
| `DigitalPaymentTypeName` | `cast( dd07t.ddtext as dp_payment_type_text preserving type )` |
| `_Language` | *Association* |
| `_DigitalPaymentType` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IDPPYTT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataExtraction.enabled: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Digital Payment Type - Text'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.representativeKey: 'DigitalPaymentType'
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, 
                                     #CDS_MODELING_DATA_SOURCE,
                                     #EXTRACTION_DATA_SOURCE,
                                     #LANGUAGE_DEPENDENT_TEXT,
                                     #SEARCHABLE_ENTITY,
                                     #SQL_DATA_SOURCE]
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
define view I_DigitalPaymentTypeText
  as select from dd07t 
  association to parent I_DigitalPaymentTypeValueHelp as _DigitalPaymentType
    on $projection.DigitalPaymentType = _DigitalPaymentType.DigitalPaymentType
  association [0..1] to I_Language as _Language      
    on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key cast( dd07t.ddlanguage as spras preserving type ) as Language, 
      @ObjectModel.foreignKey.association: '_DigitalPaymentType'
      @ObjectModel.text.element: ['DigitalPaymentTypeName']
  key cast( dd07t.domvalue_l as dp_payment_type ) as DigitalPaymentType,
      @Analytics.hidden: true
      @Consumption.hidden: true
      dd07t.domvalue_l as DomainValue,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      cast( dd07t.ddtext as dp_payment_type_text preserving type ) as DigitalPaymentTypeName,
      _DigitalPaymentType,
      _Language
} 
where dd07t.domname  = 'DP_PAYMENT_TYPE'
  and dd07t.as4local = 'A'
  and dd07t.as4vers  = '0000'
```
