---
name: I_CLFNCHARCVALUE
description: Clfncharcvalue
app_component: CA-CL-2CL
software_component: SAP_BASIS
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-CL
  - interface-view
  - component:CA-CL-2CL
  - lob:Cross-Application Components
---
# I_CLFNCHARCVALUE

**Clfncharcvalue**

| Property | Value |
|---|---|
| App Component | `CA-CL-2CL` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `CharcInternalID` | `cast ( CharacteristicValue.atinn as atinn_no_conv preserving type )` |
| key `CharcValuePositionNumber` | `CharacteristicValue.atzhl` |
| key `TimeIntervalNumber` | `CharacteristicValue.adzhl` |
| `CharcValueParentPositionNumber` | `CharacteristicValue.atzhh` |
| `CharcValueHasChild` | `CharacteristicValue.atwhi` |
| `CharcValueIntervalType` | `CharacteristicValue.atcod` |
| `CharcValue` | `CharacteristicValue.atwrt` |
| `CharcFromNumericValue` | `CharacteristicValue.atflv` |
| `CharcToNumericValue` | `CharacteristicValue.atflb` |
| `IsDefaultValue` | `CharacteristicValue.atstd` |
| `CharcFromNumericValueUnit` | `CharacteristicValue.atawe` |
| `CharcToNumericValueUnit` | `CharacteristicValue.ataw1` |
| `CharcFromDecimalValue` | `CharacteristicValue.dec_from` |
| `CharcToDecimalValue` | `CharacteristicValue.dec_to` |
| `CharcFromDate` | `CharacteristicValue.date_from` |
| `CharcToDate` | `CharacteristicValue.date_to` |
| `CharcFromTime` | `CharacteristicValue.time_from` |
| `CharcToTime` | `CharacteristicValue.time_to` |
| `CharcFromAmount` | `CharacteristicValue.curr_from` |
| `CharcToAmount` | `CharacteristicValue.curr_to` |
| `Currency` | `CharacteristicValue.currency` |
| `LongTextID` | `CharacteristicValue.txtnr` |
| `ChangeNumber` | `CharacteristicValue.aennr` |
| `ValidityStartDate` | `CharacteristicValue.datuv` |
| `ValidityEndDate` | `CharacteristicValue.datub` |
| `IsDeleted` | `CharacteristicValue.lkenz` |
| `DocumentInfoRecordDocNumber` | `CharacteristicValue.doknr` |
| `DocumentInfoRecordDocPart` | `CharacteristicValue.doktl` |
| `DocumentInfoRecordDocVersion` | `CharacteristicValue.dokvr` |
| `DocumentInfoRecordDocType` | `CharacteristicValue.dokar` |
| `CharcIdentificationCode` | `CharacteristicValue.atidn` |
| `_Currency` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Currency` | `I_Currency` | [0..1] |

## Source Code

```abap
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AbapCatalog.sqlViewName: 'INGCCHR17'
@AccessControl.authorizationCheck: #NOT_ALLOWED
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Value of Classification Characteristic'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.supportedCapabilities:
  [  #CDS_MODELING_DATA_SOURCE,
     #CDS_MODELING_ASSOCIATION_TARGET,
     #SQL_DATA_SOURCE ]
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC 
define view I_ClfnCharcValue
  as select from cawn as CharacteristicValue

      association [0..1] to I_Currency as _Currency
        on  $projection.Currency        = _Currency.Currency
        
{ 
  key cast ( CharacteristicValue.atinn as atinn_no_conv preserving type ) as CharcInternalID,
  key CharacteristicValue.atzhl as CharcValuePositionNumber,
  key CharacteristicValue.adzhl as TimeIntervalNumber,
      CharacteristicValue.atzhh as CharcValueParentPositionNumber,
      CharacteristicValue.atwhi as CharcValueHasChild,
      CharacteristicValue.atcod as CharcValueIntervalType,
      CharacteristicValue.atwrt as CharcValue,
      CharacteristicValue.atflv as CharcFromNumericValue,
      CharacteristicValue.atflb as CharcToNumericValue,
      CharacteristicValue.atstd as IsDefaultValue,
      CharacteristicValue.atawe as CharcFromNumericValueUnit,
      CharacteristicValue.ataw1 as CharcToNumericValueUnit,
      CharacteristicValue.dec_from as CharcFromDecimalValue,
      CharacteristicValue.dec_to as CharcToDecimalValue,
      CharacteristicValue.date_from as CharcFromDate,
      CharacteristicValue.date_to as CharcToDate,
      CharacteristicValue.time_from as CharcFromTime,
      CharacteristicValue.time_to as CharcToTime,
      @Semantics.amount.currencyCode: 'Currency'
      CharacteristicValue.curr_from as CharcFromAmount,
      @Semantics.amount.currencyCode: 'Currency'
      CharacteristicValue.curr_to as CharcToAmount,
      @ObjectModel.foreignKey.association: '_Currency'
      @Semantics.currencyCode: true
      CharacteristicValue.currency as Currency,      
      CharacteristicValue.txtnr as LongTextID,
      CharacteristicValue.aennr as ChangeNumber,
      @Semantics.businessDate.from: true
      CharacteristicValue.datuv as ValidityStartDate,
      @Semantics.businessDate.to: true
      CharacteristicValue.datub as ValidityEndDate,
      CharacteristicValue.lkenz as IsDeleted,
      CharacteristicValue.doknr as DocumentInfoRecordDocNumber,
      CharacteristicValue.doktl as DocumentInfoRecordDocPart,
      CharacteristicValue.dokvr as DocumentInfoRecordDocVersion,    
      CharacteristicValue.dokar as DocumentInfoRecordDocType,
      CharacteristicValue.atidn as CharcIdentificationCode,

      _Currency
}
```
