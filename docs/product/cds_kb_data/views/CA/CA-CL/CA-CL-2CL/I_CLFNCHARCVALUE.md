---
name: I_CLFNCHARCVALUE
description: "Clfncharcvalue"
app_component: CA-CL-2CL
software_component: SAP_BASIS
release_state: released
dev_ext_status: released
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

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CharcInternalID` | ✓ | |  | `cast ( CharacteristicValue.atinn as atinn_no_conv preserving type )` | `NUMC(10)` | Characteristic Internal ID |
| `CharcValuePositionNumber` | ✓ | |  | `atzhl` | `NUMC(4)` | Int counter |
| `TimeIntervalNumber` | ✓ | |  | `adzhl` | `NUMC(4)` | Internal Counter for Archiving Objects by ECM |
| `CharcValueParentPositionNumber` |  | |  | `atzhh` | `NUMC(4)` | Int. counter for value hierarchy |
| `CharcValueHasChild` |  | |  | `atwhi` | `CHAR(1)` | Indicator that Subordinate Values Exist |
| `CharcValueIntervalType` |  | |  | `atcod` | `CHAR(1)` | Code for value dependency |
| `CharcValue` |  | |  | `atwrt` | `CHAR(70)` | Characteristic Value |
| `CharcFromNumericValue` |  | |  | `atflv` | `FLTP(16)` | Internal floating point from |
| `CharcToNumericValue` |  | |  | `atflb` | `FLTP(16)` | Internal floating point value to |
| `IsDefaultValue` |  | |  | `atstd` | `CHAR(1)` | Default value |
| `CharcFromNumericValueUnit` |  | |  | `atawe` | `UNIT(3)` | Unit of Measurement |
| `CharcToNumericValueUnit` |  | |  | `ataw1` | `UNIT(3)` | Unit of Measurement |
| `CharcFromDecimalValue` |  | |  | `dec_from` | `DECF(34)` | Lower Boundary for Numeric Field |
| `CharcToDecimalValue` |  | |  | `dec_to` | `DECF(34)` | Upper Boundary for Numeric Field |
| `CharcFromDate` |  | |  | `date_from` | `DATS(8)` | Lower Boundary for Date-Interval |
| `CharcToDate` |  | |  | `date_to` | `DATS(8)` | Upper Boundary for Date-Interval |
| `CharcFromTime` |  | |  | `time_from` | `TIMS(6)` | Lower Boundary for Time-Interval |
| `CharcToTime` |  | |  | `time_to` | `TIMS(6)` | Upper Boundary for Time-Interval |
| `CharcFromAmount` |  | |  | `curr_from` | `CURR(23)` | Lower Boundary for Currency Field |
| `CharcToAmount` |  | |  | `curr_to` | `CURR(23)` | Upper Boundary for Currency Field |
| `Currency` |  | |  | `currency` | `CUKY(5)` | Currency Key |
| `LongTextID` |  | |  | `txtnr` | `NUMC(4)` | Number of Related Text |
| `ChangeNumber` |  | |  | `aennr` | `CHAR(12)` | Change Number |
| `ValidityStartDate` |  | |  | `datuv` | `DATS(8)` | Valid-From Date |
| `ValidityEndDate` |  | |  | `datub` | `DATS(8)` | Valid-to date |
| `IsDeleted` |  | |  | `lkenz` | `CHAR(1)` | Deletion Indicator |
| `DocumentInfoRecordDocNumber` |  | |  | `doknr` | `CHAR(25)` | Document Number |
| `DocumentInfoRecordDocPart` |  | |  | `doktl` | `CHAR(3)` | Document Part |
| `DocumentInfoRecordDocVersion` |  | |  | `dokvr` | `CHAR(2)` | Document Version |
| `DocumentInfoRecordDocType` |  | |  | `dokar` | `CHAR(3)` | Document Type |
| `CharcIdentificationCode` |  | |  | `atidn` | `CHAR(2)` | Object identification |
| `_Currency` | | ✓ | | | | |

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
