---
name: I_CLFNCHARCVALUEDEX
description: "Clfncharcvaluedex"
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
  - data-extraction
  - component:CA-CL-2CL
  - lob:Cross-Application Components
---
# I_CLFNCHARCVALUEDEX

**Clfncharcvaluedex**

| Property | Value |
|---|---|
| App Component | `CA-CL-2CL` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `'CAWN'` |  | |  | `table: 'CAWN'` |  |  |
| `'ADZHL']` |  | |  | `tableElement: ['ATINN','ATZHL','ADZHL']` |  |  |
| `'TimeIntervalNumber']` |  | |  | `viewElement: ['CharcInternalID','CharcValuePositionNumber','TimeIntervalNumber']` |  |  |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.alternativeKey: ['CharcInternalID','CharcValuePositionNumber','TimeIntervalNumber'] 
@Analytics.dataExtraction.delta.changeDataCapture.mapping: [ 
  { table: 'CAWN',
    role: #MAIN,
    tableElement: ['ATINN','ATZHL','ADZHL'], 
    viewElement: ['CharcInternalID','CharcValuePositionNumber','TimeIntervalNumber'] } ]
@Analytics.dataExtraction.enabled
@Analytics.internalName:#LOCAL
@EndUserText.label: 'Value of Clfn Characteristic DEX'
@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.representativeKey: 'CharcValuePositionNumber'
@ObjectModel.supportedCapabilities:
   [ #CDS_MODELING_DATA_SOURCE,
     #CDS_MODELING_ASSOCIATION_TARGET,
     #SQL_DATA_SOURCE,
     #EXTRACTION_DATA_SOURCE,
     #ANALYTICAL_DIMENSION ]
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.sapObjectNodeType.name: 'ClfnCharacteristicValue' 
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC     
define view entity I_ClfnCharcValueDEX as
  select from I_ClfnCharcValue as CharacteristicValue

      association [0..1] to I_Currency as _Currency
        on  $projection.Currency = _Currency.Currency
        
      association [1..*] to I_ClfnCharacteristicDEX as _Characteristic
        on  $projection.CharcInternalID    = _Characteristic.CharcInternalID
        and $projection.ValidityStartDate <= _Characteristic.ValidityEndDate
        and $projection.ValidityEndDate   >= _Characteristic.ValidityStartDate

{ 
      @ObjectModel.foreignKey.association: '_Characteristic'
  key CharacteristicValue.CharcInternalID,
  key CharacteristicValue.CharcValuePositionNumber,
      @Semantics.businessDate.to: true
  key CharacteristicValue.ValidityEndDate,     
      CharacteristicValue.TimeIntervalNumber,  
      CharacteristicValue.CharcValueParentPositionNumber,
      CharacteristicValue.CharcValueHasChild,
      CharacteristicValue.CharcValueIntervalType,
      CharacteristicValue.CharcValue,
      CharacteristicValue.CharcFromNumericValue,
      CharacteristicValue.CharcToNumericValue,
      CharacteristicValue.IsDefaultValue,
      CharacteristicValue.CharcFromNumericValueUnit,
      CharacteristicValue.CharcToNumericValueUnit,
      CharacteristicValue.CharcFromDecimalValue,
      CharacteristicValue.CharcToDecimalValue,
      CharacteristicValue.CharcFromDate,
      CharacteristicValue.CharcToDate,
      CharacteristicValue.CharcFromTime,
      CharacteristicValue.CharcToTime,
      @Semantics.amount.currencyCode: 'Currency'
      CharacteristicValue.CharcFromAmount,
      @Semantics.amount.currencyCode: 'Currency'
      CharacteristicValue.CharcToAmount,
      @ObjectModel.foreignKey.association: '_Currency'
      CharacteristicValue.Currency,      
      CharacteristicValue.ChangeNumber,
      @Semantics.businessDate.from: true
      CharacteristicValue.ValidityStartDate,
      CharacteristicValue.IsDeleted,
      CharacteristicValue.DocumentInfoRecordDocNumber,
      CharacteristicValue.DocumentInfoRecordDocPart,
      CharacteristicValue.DocumentInfoRecordDocVersion,    
      CharacteristicValue.DocumentInfoRecordDocType,

      _Currency,
      _Characteristic
}
//where CharacteristicValue.CharcIdentificationCode = ''  // overwritten characteristic values are skipped
```
