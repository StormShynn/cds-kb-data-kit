---
name: I_PAYMENTBLOCKLEVELTEXT
description: Paymentblockleveltext
app_component: FI-AP-AP-B-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-AP
  - FI-AP-AP
  - interface-view
  - text-view
  - payment
  - text
  - component:FI-AP-AP-B-2CL
  - lob:Finance
---
# I_PAYMENTBLOCKLEVELTEXT

**Paymentblockleveltext**

| Property | Value |
|---|---|
| App Component | `FI-AP-AP-B-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `Language` | `cast( dd07t.ddlanguage as spras preserving type )` |
| key `PaymentBlockLevel` | `cast( dd07t.domvalue_l as farp_splev )` |
| `DomainValue` | `dd07t.domvalue_l` |
| `PaymentBlockLevelName` | `cast( dd07t.ddtext as farp_splev_name preserving type )` |
| `_Language` | *Association* |
| `_PaymentBlockLevel` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPAYTBLKLVLT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataExtraction.enabled: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Payment Block Level - Text'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.representativeKey: 'PaymentBlockLevel'
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
define view I_PaymentBlockLevelText
  as select from dd07t 
  association to parent I_PaymentBlockLevel as _PaymentBlockLevel
    on $projection.PaymentBlockLevel = _PaymentBlockLevel.PaymentBlockLevel
  association [0..1] to I_Language as _Language      
    on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key cast( dd07t.ddlanguage as spras preserving type ) as Language, 
      @ObjectModel.foreignKey.association: '_PaymentBlockLevel'
      @ObjectModel.text.element: ['PaymentBlockLevel']
  key cast( dd07t.domvalue_l as farp_splev ) as PaymentBlockLevel,
      @Analytics.hidden: true
      @Consumption.hidden: true
      dd07t.domvalue_l as DomainValue,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      @Semantics.text: true
      cast( dd07t.ddtext as farp_splev_name preserving type ) as PaymentBlockLevelName,
      _PaymentBlockLevel,
      _Language
} 
where dd07t.domname  = 'SPLEV'
  and dd07t.as4local = 'A'
  and dd07t.as4vers  = '0000'
```
