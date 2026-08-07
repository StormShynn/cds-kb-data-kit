---
name: I_CONFIRMATIONAPPLORIGINTEXT
description: Confirmationapplorigintext
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
# I_CONFIRMATIONAPPLORIGINTEXT

**Confirmationapplorigintext**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `cast(t.ddlanguage as spras preserving type)` |  |  |
| `ConfirmationApplicationOrigin` | ✓ | |  | `cast(substring(t.domvalue_l, 1, 1) as ru_orina preserving type)` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `ConfirmationApplOriginName` |  | |  | `cast(t.ddtext as confapploriginname preserving type)` |  |  |
| `_Language` | | ✓ | | | | |
| `_ConfirmationApplOrigin` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataExtraction.enabled: true
@Analytics.technicalName: 'ICONFAPPLORIGTXT'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #SEARCHABLE_ENTITY, #EXTRACTION_DATA_SOURCE]
@ObjectModel.representativeKey: 'ConfirmationApplicationOrigin'
@ObjectModel.sapObjectNodeType.name: 'OrderConfirmationOriginApplTxt'
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #S, dataClass: #META}
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Confirmation Application Origin - Text'

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view entity I_ConfirmationApplOriginText
  as select from dd07t as t
  association to parent I_ConfirmationApplOrigin as _ConfirmationApplOrigin on $projection.ConfirmationApplicationOrigin = _ConfirmationApplOrigin.ConfirmationApplicationOrigin  
  association [0..1] to I_Language               as _Language               on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_Language'      
      @Semantics.language: true
  key cast(t.ddlanguage as spras preserving type)                     as Language,
      @ObjectModel.foreignKey.association: '_ConfirmationApplOrigin'  
      @ObjectModel.text.element: ['ConfirmationApplOriginName']
  key cast(substring(t.domvalue_l, 1, 1) as ru_orina preserving type) as ConfirmationApplicationOrigin,
      @Analytics.hidden: true
      @Consumption.hidden: true
      t.domvalue_l                                                    as DomainValue,
      @Search: {defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.8}
      @Semantics.text: true
      cast(t.ddtext as confapploriginname preserving type)            as ConfirmationApplOriginName,
    
      // Associations
      _ConfirmationApplOrigin,
      _Language
}
  where t.domname = 'RU_ORINA'
    and t.as4local = 'A'
    and t.as4vers  = '0000';
```
