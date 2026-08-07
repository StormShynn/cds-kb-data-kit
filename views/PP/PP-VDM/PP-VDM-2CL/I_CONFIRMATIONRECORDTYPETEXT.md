---
name: I_CONFIRMATIONRECORDTYPETEXT
description: Confirmationrecordtypetext
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
# I_CONFIRMATIONRECORDTYPETEXT

**Confirmationrecordtypetext**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `OrderConfirmationRecordType` | ✓ | |  | `cast(substring(t.domvalue_l, 1, 3) as co_satza preserving type)` |  |  |
| `Language` | ✓ | |  | `cast(t.ddlanguage as spras preserving type)` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `OrderConfirmationRecdTypeName` |  | |  | `cast(t.ddtext as confrecdtypename preserving type)` |  |  |
| `_ConfirmationRecordType` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ConfirmationRecordType` | `I_ConfirmationRecordType` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataExtraction.enabled: true
@Analytics.technicalName: 'ICONFRECDTYPETXT'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #SEARCHABLE_ENTITY, #EXTRACTION_DATA_SOURCE]
@ObjectModel.representativeKey: 'OrderConfirmationRecordType'
@ObjectModel.sapObjectNodeType.name: 'OrderConfirmationRecordTypeTxt'
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #L, dataClass: #META}
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Confirmation Record Type - Text'

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view entity I_ConfirmationRecordTypeText
  as select from dd07t as t
  association [1..1] to I_ConfirmationRecordType as _ConfirmationRecordType on $projection.OrderConfirmationRecordType = _ConfirmationRecordType.OrderConfirmationRecordType  
  association [0..1] to I_Language               as _Language               on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_ConfirmationRecordType'  
      @ObjectModel.text.element: ['OrderConfirmationRecdTypeName']
  key cast(substring(t.domvalue_l, 1, 3) as co_satza preserving type) as OrderConfirmationRecordType,
      @ObjectModel.foreignKey.association: '_Language'      
      @Semantics.language: true
  key cast(t.ddlanguage as spras preserving type)                     as Language,
      @Analytics.hidden: true
      @Consumption.hidden: true
      t.domvalue_l                                                    as DomainValue,
      @Search: {defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.8}
      @Semantics.text: true
      cast(t.ddtext as confrecdtypename preserving type)              as OrderConfirmationRecdTypeName,
    
      // Associations
      @ObjectModel.association.type: [#TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT] 
      _ConfirmationRecordType,
      _Language
}
  where t.domname = 'CO_SATZA'
    and t.as4local = 'A'
    and t.as4vers  = '0000';
```
