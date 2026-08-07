---
name: I_ORDERCONFIRMATIONTYPETEXT
description: Orderconfirmationtypetext
app_component: PP-VDM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-VDM
  - interface-view
  - text-view
  - text
  - component:PP-VDM-2CL
  - lob:Manufacturing
---
# I_ORDERCONFIRMATIONTYPETEXT

**Orderconfirmationtypetext**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `Language` | ✓ | |  | `cast(t.ddlanguage as spras preserving type)` |
| `OrderConfirmationType` | ✓ | |  | `cast(substring(t.domvalue_l, 1, 1) as manur preserving type)` |
| `DomainValue` |  | |  | `domvalue_l` |
| `OrderConfirmationTypeName` |  | |  | `ddtext` |
| `_Language` | | ✓ | | |
| `_ConfirmationType` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataExtraction.enabled: true
@Analytics.technicalName: 'IORDCONFTYPETXT'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #SEARCHABLE_ENTITY, #EXTRACTION_DATA_SOURCE]
@ObjectModel.representativeKey: 'OrderConfirmationType'
@ObjectModel.sapObjectNodeType.name: 'OrderConfirmationTypeText'
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #S, dataClass: #META}
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Order Confirmation Type - Text'

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view entity I_OrderConfirmationTypeText
  as select from dd07t as t
  association to parent I_OrderConfirmationType as _ConfirmationType on $projection.OrderConfirmationType = _ConfirmationType.OrderConfirmationType  
  association [0..1] to I_Language              as _Language         on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_Language'      
      @Semantics.language: true
  key cast(t.ddlanguage as spras preserving type)                  as Language,
      @ObjectModel.foreignKey.association: '_ConfirmationType'  
      @ObjectModel.text.element: ['OrderConfirmationTypeName']
  key cast(substring(t.domvalue_l, 1, 1) as manur preserving type) as OrderConfirmationType,
      @Analytics.hidden: true
      @Consumption.hidden: true
      t.domvalue_l                                                 as DomainValue,
      @Search: {defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.8}
      @Semantics.text: true
      t.ddtext                                                     as OrderConfirmationTypeName,
    
      // Associations
      _ConfirmationType,
      _Language
}
  where t.domname = 'MANUR'
    and t.as4local = 'A'
    and t.as4vers  = '0000';
```
