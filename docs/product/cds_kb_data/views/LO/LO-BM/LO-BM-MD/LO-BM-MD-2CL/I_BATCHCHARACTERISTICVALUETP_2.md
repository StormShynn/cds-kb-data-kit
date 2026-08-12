---
name: I_BATCHCHARACTERISTICVALUETP_2
description: "Batchcharacteristicvaluetp 2"
app_component: LO-BM-MD-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-BM
  - LO-BM-MD
  - interface-view
  - transactional-processing
  - batch
  - component:LO-BM-MD-2CL
  - lob:Logistics General
---
# I_BATCHCHARACTERISTICVALUETP_2

**Batchcharacteristicvaluetp 2**

| Property | Value |
|---|---|
| App Component | `LO-BM-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Material` | ✓ | |  |  |  |  |
| `BatchIdentifyingPlant` | ✓ | |  |  |  |  |
| `Batch` | ✓ | |  |  |  |  |
| `CharcInternalID` | ✓ | |  |  |  |  |
| `ClfnCharcValuePositionNumber` | ✓ | |  |  |  |  |
| `CharcValueIntervalType` |  | |  |  |  |  |
| `CharcValue` |  | |  |  |  |  |
| `CharcFromNumericValue` |  | |  |  |  |  |
| `CharcFromNumericValueUnit` |  | |  |  |  |  |
| `CharcToNumericValue` |  | |  |  |  |  |
| `CharcToNumericValueUnit` |  | |  |  |  |  |
| `CharcFromDecimalValue` |  | |  |  |  |  |
| `CharcToDecimalValue` |  | |  |  |  |  |
| `CharcFromAmount` |  | |  |  |  |  |
| `CharcToAmount` |  | |  |  |  |  |
| `Currency` |  | |  |  |  |  |
| `CharcFromDate` |  | |  |  |  |  |
| `CharcToDate` |  | |  |  |  |  |
| `CharcFromTime` |  | |  |  |  |  |
| `CharcToTime` |  | |  |  |  |  |
| `CharcAuthor` |  | |  |  |  |  |
| `LastChangeDateTime` |  | |  |  |  |  |
| `ClassType` |  | |  |  |  |  |
| `_BatchCharacteristicTP` | | ✓ | | | | |
| `_BatchTP` | | ✓ | | | | |
| `_ClfnCharacteristic` | | ✓ | | | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #CHECK

@EndUserText.label: 'Batch Characteristics Valuation'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
@ObjectModel.usageType: {serviceQuality: #C, sizeCategory: #L, dataClass: #MIXED}

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL

define view entity I_BatchCharacteristicValueTP_2 
  as projection on R_BatchCharacteristicValueTP
{
  key Material, 
  key BatchIdentifyingPlant,
  key Batch, 
  key CharcInternalID,
  key ClfnCharcValuePositionNumber,
        
  CharcValueIntervalType,
  CharcValue,
  CharcFromNumericValue,  
  CharcFromNumericValueUnit,
  CharcToNumericValue,     
  CharcToNumericValueUnit,
  CharcFromDecimalValue,
  CharcToDecimalValue,
  @Semantics.amount.currencyCode: 'Currency'
  CharcFromAmount,
  @Semantics.amount.currencyCode: 'Currency'
  CharcToAmount,
  Currency,
  CharcFromDate,
  CharcToDate,
  CharcFromTime,
  CharcToTime, 
  CharcAuthor,
  
  LastChangeDateTime,    
  
  /* Compositions */
  _BatchCharacteristicTP : redirected to parent I_BatchCharacteristicTP_2,

  /* DCL */
  @Consumption.hidden: true
  _BatchTP : redirected to I_BatchTP_2,
  @Consumption.hidden: true
  ClassType,
  @Consumption.hidden: true
  _ClfnCharacteristic
}
```
